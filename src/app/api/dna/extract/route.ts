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
  "colorUsage": {
    "background": "#hex (dominant bg color)",
    "dominantRole": "dark-bg-light-text | light-bg-dark-text | mixed",
    "accentFrequency": "sparingly (1-2 CTAs only) | moderate (section highlights) | heavy (dominant throughout)",
    "accentNote": "one sentence on where/how the accent color appears"
  },
  "layoutPattern": {
    "heroType": "full-width-centered | split-left-text | split-right-text | large-text-only | image-dominant",
    "sectionPattern": "alternating-split | stacked-cards | full-width-bands | grid-columns",
    "density": "airy (lots of whitespace) | balanced | dense (compact, information-rich)",
    "heroTypeSizeNote": "describe headline scale — is it massive (80px+), large (56-80px), or moderate (<56px)?"
  },
  "personality": "2-4 word precise description — industry + visual tone (e.g. 'Developer-first, dark monoChromatic' or 'Luxury editorial, airy whitespace')",
  "primaryColor": "#hex",
  "accentColor": "#hex"
}

Rules:
- Convert Tailwind classes to actual hex values (bg-blue-600=#2563EB, text-gray-900=#111827, bg-indigo-500=#6366F1, etc.)
- Extract up to 6 main colors, 3 fonts, 4 border-radius values
- For typeScale: infer from CSS font-size/font-weight classes (text-4xl=36px, text-5xl=48px, text-6xl=60px, text-7xl=72px, text-8xl=96px, font-bold=700, font-semibold=600, font-medium=500)
- colorUsage.accentFrequency: look at how often the accent color appears — is it ONLY on one CTA button, or is it used in many places?
- layoutPattern.heroType: infer from the hero section structure in the HTML
- personality MUST be specific — NOT generic words alone. Example: "Developer-focused, dark-monochromatic" not just "dark"
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
    colorUsage: {
      background: string;
      dominantRole: string;
      accentFrequency: string;
      accentNote: string;
    };
    layoutPattern: {
      heroType: string;
      sectionPattern: string;
      density: string;
      heroTypeSizeNote: string;
    };
    personality: string;
    primaryColor: string;
    accentColor: string;
  };

  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) throw new Error("No Google API key");

    // Gemini 2.0 Flash — free tier, fast, excellent at structured extraction
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${systemPrompt}\n\nExtract the design system from this HTML (site: ${siteName}):\n\n${html}`,
                },
              ],
            },
          ],
          generationConfig: { temperature: 0.1, maxOutputTokens: 1500 },
        }),
      }
    );

    if (!res.ok) throw new Error(`Gemini API error: ${res.status}`);
    const data = await res.json();
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON in response");
    tokens = JSON.parse(jsonMatch[0]);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[DNA extract] Gemini error:", msg);
    return NextResponse.json({ error: `Failed to analyze design system: ${msg}` }, { status: 500 });
  }

  // Step 4: Generate platform-specific prompts
  const ts = tokens.typeScale;

  const cu = tokens.colorUsage ?? { background: tokens.primaryColor, dominantRole: "dark-bg-light-text", accentFrequency: "sparingly", accentNote: "" };
  const lp = tokens.layoutPattern ?? { heroType: "full-width-centered", sectionPattern: "stacked-cards", density: "balanced", heroTypeSizeNote: "moderate" };

  const tokenBlock = `Colors: ${tokens.colors.join(", ")}
Primary: ${tokens.primaryColor} | Accent: ${tokens.accentColor} (use ${cu.accentFrequency})
Background: ${cu.background} (${cu.dominantRole})
Fonts: ${tokens.fonts.join(", ")}
Type scale: H1 ${ts.h1.size}/${ts.h1.weight}, H2 ${ts.h2.size}/${ts.h2.weight}, H3 ${ts.h3.size}/${ts.h3.weight}, Body ${ts.body.size}/${ts.body.weight}
Spacing: ${tokens.spacing.join(", ")}
Border radius: ${tokens.borderRadius.join(", ")}`;

  const promptV0Bolt = `Use this design system for everything you build. Do not deviate.

DESIGN SYSTEM — ${siteName} (${tokens.personality})
${tokenBlock}

LAYOUT RULES:
- Hero type: ${lp.heroType}. ${lp.heroTypeSizeNote}
- Sections: ${lp.sectionPattern}
- Density: ${lp.density}
- Accent color: ${cu.accentNote || `use ${cu.accentFrequency}`}

Apply these rules strictly. The result must be visually indistinguishable from ${siteName}'s aesthetic.`;

  const promptCursor = `# Design System: ${siteName}
# Visual personality: ${tokens.personality}

## Colors
primary: "${tokens.primaryColor}"
accent: "${tokens.accentColor}"
background: "${cu.background}"
palette: [${tokens.colors.map(c => `"${c}"`).join(", ")}]
accentUsage: "${cu.accentFrequency} — ${cu.accentNote}"

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

## Layout Pattern
heroType: "${lp.heroType}"
sectionPattern: "${lp.sectionPattern}"
density: "${lp.density}"
heroScale: "${lp.heroTypeSizeNote}"

## Rules
- Use only palette colors above. No other colors.
- Accent (${tokens.accentColor}) is used ${cu.accentFrequency} — do not overuse.
- Apply exact type scale — hero headlines must be ${ts.h1.size}.
- Layout: ${lp.heroType} hero, ${lp.sectionPattern} sections.
- Feel: ${tokens.personality}.`;

  const promptLovable = `You are building a UI that looks and feels exactly like ${siteName}.
Visual personality: ${tokens.personality}

Strict design rules:
1. COLORS — use only: ${tokens.colors.join(", ")}. Background: ${cu.background}. Accent ${tokens.accentColor} is used ${cu.accentFrequency} (${cu.accentNote}).
2. TYPOGRAPHY — font: ${tokens.fonts[0] ?? "Inter"}. Hero headline: ${ts.h1.size} weight ${ts.h1.weight}. Body: ${ts.body.size} weight ${ts.body.weight}. Line heights match the scale exactly.
3. SPACING — base grid: ${tokens.spacing[0] ?? "4px"}. Scale: ${tokens.spacing.join(" → ")}.
4. RADIUS — ${tokens.borderRadius.join(", ")}.
5. LAYOUT — hero style: ${lp.heroType}. Section pattern: ${lp.sectionPattern}. Density: ${lp.density}.
6. HERO SCALE — ${lp.heroTypeSizeNote}. Match this exactly — undersized headlines break the identity.

Every component must match this system. If unsure, lean toward ${tokens.personality} aesthetic.`;

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
