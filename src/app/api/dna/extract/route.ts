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
  const systemPrompt = `You are a design system analyst. Extract the complete visual design system from HTML/CSS.
Return ONLY valid JSON with this exact structure:
{
  "colors": ["#hex1", "#hex2", ...],
  "fonts": ["Font Name 1", "Font Name 2", ...],
  "typeScale": {
    "h1": { "size": "48px", "weight": "700", "lineHeight": "1.1" },
    "h2": { "size": "36px", "weight": "600", "lineHeight": "1.2" },
    "h3": { "size": "24px", "weight": "600", "lineHeight": "1.3" },
    "body": { "size": "16px", "weight": "400", "lineHeight": "1.6" },
    "small": { "size": "14px", "weight": "400", "lineHeight": "1.5" }
  },
  "borderRadius": ["4px", "8px", ...],
  "shadows": ["0 1px 3px rgba(0,0,0,0.1)", ...],
  "spacing": ["4px", "8px", "16px", "24px", "32px"],
  "personality": "2-4 word precise description (e.g. 'Clean fintech, trust-focused' or 'Brutalist editorial, high contrast' or 'Soft SaaS, gradient-rich')",
  "primaryColor": "#hex",
  "accentColor": "#hex"
}

Rules:
- Convert Tailwind classes to actual hex values (bg-blue-600=#2563EB, text-gray-900=#111827, bg-indigo-500=#6366F1, etc.)
- Extract up to 6 main colors, 3 fonts, 4 border-radius values
- For typeScale: infer from CSS font-size/font-weight classes or properties (text-4xl=36px, text-5xl=48px, font-bold=700, font-semibold=600, etc.)
- personality MUST be specific and descriptive — NOT generic words like "corporate" or "minimalist" alone. Describe the brand feel: industry + visual tone (e.g. "Developer-focused, dark-mode-first" or "Luxury ecommerce, editorial whitespace")
- Return ONLY the JSON, no explanation`;

  let tokens: {
    colors: string[];
    fonts: string[];
    typeScale: {
      h1: { size: string; weight: string; lineHeight: string };
      h2: { size: string; weight: string; lineHeight: string };
      h3: { size: string; weight: string; lineHeight: string };
      body: { size: string; weight: string; lineHeight: string };
      small: { size: string; weight: string; lineHeight: string };
    };
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
  const ts = tokens.typeScale;
  const generatedPrompt = `# Design System: ${siteName}
Visual personality: ${tokens.personality}

## Color Palette
Primary: ${tokens.primaryColor}
Accent: ${tokens.accentColor}
Full palette: ${tokens.colors.join(", ")}

## Typography
Font families: ${tokens.fonts.join(", ")}

Type scale:
- H1: ${ts.h1.size} / weight ${ts.h1.weight} / leading ${ts.h1.lineHeight}
- H2: ${ts.h2.size} / weight ${ts.h2.weight} / leading ${ts.h2.lineHeight}
- H3: ${ts.h3.size} / weight ${ts.h3.weight} / leading ${ts.h3.lineHeight}
- Body: ${ts.body.size} / weight ${ts.body.weight} / leading ${ts.body.lineHeight}
- Small: ${ts.small.size} / weight ${ts.small.weight} / leading ${ts.small.lineHeight}

## Spacing & Layout
Spacing scale: ${tokens.spacing.join(", ")}
Border radius: ${tokens.borderRadius.join(", ")}

## Elevation
${tokens.shadows.join("\n")}

---
Apply this design system to my project. Use these exact colors, fonts, and type scale. The result should feel like ${siteName} — ${tokens.personality}. Match the spacing rhythm, typographic hierarchy, and component style precisely.`;

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
