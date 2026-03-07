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

  // Step 4: Generate platform-specific prompts
  const ts = tokens.typeScale;

  const tokenBlock = `Colors: ${tokens.colors.join(", ")}
Primary: ${tokens.primaryColor} | Accent: ${tokens.accentColor}
Fonts: ${tokens.fonts.join(", ")}
Type scale: H1 ${ts.h1.size}/${ts.h1.weight}, H2 ${ts.h2.size}/${ts.h2.weight}, H3 ${ts.h3.size}/${ts.h3.weight}, Body ${ts.body.size}/${ts.body.weight}
Spacing: ${tokens.spacing.join(", ")}
Border radius: ${tokens.borderRadius.join(", ")}
Shadows: ${tokens.shadows[0] ?? "none"}`;

  const promptV0Bolt = `Use this design system for everything you build. Do not deviate from these tokens.

DESIGN SYSTEM — ${siteName} (${tokens.personality})
${tokenBlock}

Build with this exact visual language. Dark background: ${tokens.primaryColor}. All components, typography, spacing, and elevation must match these specs precisely.`;

  const promptCursor = `# Design System: ${siteName}
# Visual personality: ${tokens.personality}

## Colors
primary: "${tokens.primaryColor}"
accent: "${tokens.accentColor}"
palette: [${tokens.colors.map(c => `"${c}"`).join(", ")}]

## Typography
fonts: [${tokens.fonts.map(f => `"${f}"`).join(", ")}]
h1: { fontSize: "${ts.h1.size}", fontWeight: "${ts.h1.weight}", lineHeight: "${ts.h1.lineHeight}" }
h2: { fontSize: "${ts.h2.size}", fontWeight: "${ts.h2.weight}", lineHeight: "${ts.h2.lineHeight}" }
h3: { fontSize: "${ts.h3.size}", fontWeight: "${ts.h3.weight}", lineHeight: "${ts.h3.lineHeight}" }
body: { fontSize: "${ts.body.size}", fontWeight: "${ts.body.weight}", lineHeight: "${ts.body.lineHeight}" }
small: { fontSize: "${ts.small.size}", fontWeight: "${ts.small.weight}", lineHeight: "${ts.small.lineHeight}" }

## Spacing
scale: [${tokens.spacing.map(s => `"${s}"`).join(", ")}]
borderRadius: [${tokens.borderRadius.map(r => `"${r}"`).join(", ")}]

## Rules
- Always use the color palette above. No other colors.
- Always use the font families above. Load from Google Fonts if needed.
- Apply the type scale exactly — no approximations.
- Spacing must follow the scale (4px base grid).
- Components should feel like ${siteName}: ${tokens.personality}.`;

  const promptLovable = `You are building a UI that looks and feels exactly like ${siteName}.

Visual personality: ${tokens.personality}

Strict design rules:
1. COLORS — use only these: ${tokens.colors.join(", ")}. Primary actions: ${tokens.primaryColor}. Accents: ${tokens.accentColor}.
2. TYPOGRAPHY — font: ${tokens.fonts[0] ?? "Inter"}. Sizes: H1=${ts.h1.size} (w${ts.h1.weight}), H2=${ts.h2.size} (w${ts.h2.weight}), H3=${ts.h3.size} (w${ts.h3.weight}), body=${ts.body.size} (w${ts.body.weight}).
3. SPACING — base grid: ${tokens.spacing[0] ?? "4px"}. Scale: ${tokens.spacing.join(" → ")}.
4. RADIUS — components use: ${tokens.borderRadius.join(", ")}.
5. ELEVATION — shadows: ${tokens.shadows[0] ?? "subtle"}.

Every component, page, and interaction must match this system. If unsure, default to the ${siteName} aesthetic: ${tokens.personality}.`;

  // Keep a combined prompt for backwards compat
  const generatedPrompt = promptV0Bolt;

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
    prompts: {
      v0: promptV0Bolt,
      cursor: promptCursor,
      lovable: promptLovable,
    },
  });
}
