import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  // Auth check
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { url } = body as { url: string };

  if (!url || !url.startsWith("http")) {
    return NextResponse.json({ error: "Invalid URL. Must start with http:// or https://" }, { status: 400 });
  }

  // Step 1: Fetch the page HTML
  let html = "";
  let blocked = false;
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
      },
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      blocked = true;
    } else {
      const text = await res.text();
      // If Cloudflare challenge or very short body, treat as blocked
      if (text.length < 500 || text.includes("cf-browser-verification") || text.includes("Just a moment")) {
        blocked = true;
      } else {
        // Trim HTML to avoid huge token usage — keep head + first 12KB of body
        html = text.slice(0, 15000);
      }
    }
  } catch {
    blocked = true;
  }

  if (blocked) {
    return NextResponse.json({
      error: "This site blocks automated access. Try pasting their CSS/HTML manually (coming soon).",
      blocked: true,
    }, { status: 400 });
  }

  // Step 2: Extract site name from URL
  let siteName = "";
  try {
    siteName = new URL(url).hostname.replace("www.", "").split(".")[0];
    siteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
  } catch {
    siteName = "Site";
  }

  // Step 3: Send HTML to Claude for design system extraction
  const systemPrompt = `You are a design system analyst. Extract the visual design system from HTML/CSS.
Return ONLY valid JSON with this exact structure:
{
  "colors": ["#hex1", "#hex2", ...],
  "fonts": ["Font Name 1", "Font Name 2", ...],
  "borderRadius": ["4px", "8px", ...],
  "shadows": ["0 1px 3px rgba(0,0,0,0.1)", ...],
  "spacing": ["4px", "8px", "16px", "24px", "32px"],
  "personality": "minimalist|brutalist|corporate|playful|luxury",
  "primaryColor": "#hex",
  "accentColor": "#hex"
}

Rules:
- Convert Tailwind classes to actual hex values (e.g. bg-blue-600 = #2563EB, text-gray-900 = #111827)
- Extract up to 6 main colors, 3 fonts, 4 border-radius values
- Infer personality from overall visual style
- If you can't determine a value, use sensible defaults
- Return ONLY the JSON, no explanation`;

  let tokens: {
    colors: string[];
    fonts: string[];
    borderRadius: string[];
    shadows: string[];
    spacing: string[];
    personality: string;
    primaryColor: string;
    accentColor: string;
  };

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) throw new Error("No API key");

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5",
        max_tokens: 1024,
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: `Extract the design system from this HTML (site: ${siteName}):\n\n${html}`,
          },
        ],
      }),
    });

    if (!res.ok) throw new Error(`Anthropic API error: ${res.status}`);
    const data = await res.json();
    const raw = data.content?.[0]?.text ?? "";
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON in response");
    tokens = JSON.parse(jsonMatch[0]);
  } catch {
    return NextResponse.json({ error: "Failed to analyze design system. Please try again." }, { status: 500 });
  }

  // Step 4: Generate the prompt
  const generatedPrompt = `# Design System: ${siteName}
Personality: ${tokens.personality}

## Color Palette
Primary: ${tokens.primaryColor}
Accent: ${tokens.accentColor}
Full palette: ${tokens.colors.join(", ")}

## Typography
Fonts: ${tokens.fonts.join(", ")}

## Spacing & Layout
Spacing scale: ${tokens.spacing.join(", ")}
Border radius: ${tokens.borderRadius.join(", ")}

## Shadows
${tokens.shadows.join("\n")}

---
Apply this design system to my project. Use these exact colors and fonts. The result should feel like ${siteName} — ${tokens.personality} aesthetic, clean and intentional. Match the spacing rhythm and component style.`;

  // Step 5: Store in Supabase for history (best-effort)
  try {
    await supabase.from("dna_extractions").insert({
      user_id: user.id,
      url,
      site_name: siteName,
      tokens_json: tokens,
      generated_prompt: generatedPrompt,
    });
  } catch {
    // Table may not exist yet — non-fatal
  }

  return NextResponse.json({
    siteName,
    tokens,
    generatedPrompt,
  });
}
