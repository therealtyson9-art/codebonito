import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

// Design tokens per style — mirrors download/route.ts
const STYLE_TOKENS: Record<
  string,
  {
    colors: Record<string, string>;
    typography: Record<string, string>;
    spacing: Record<string, string>;
    borderRadius: Record<string, string>;
    shadows?: Record<string, string>;
    motion?: Record<string, string>;
  }
> = {
  Minimalist: {
    colors: {
      background: "#ffffff",
      surface: "#f9fafb",
      primary: "#111111",
      accent: "#3b82f6",
      "text-primary": "#111827",
      "text-secondary": "#6b7280",
      border: "#e5e7eb",
    },
    typography: {
      "heading-font": "Inter",
      "heading-weight": "600",
      "heading-tracking": "0em",
      "body-font": "Inter",
      "body-weight": "400",
      "body-size": "16px",
      "line-height": "1.6",
    },
    spacing: { "base-unit": "4px", "section-padding": "64px", "component-gap": "16px" },
    borderRadius: { "border-radius-sm": "4px", "border-radius-md": "8px", "border-radius-lg": "12px" },
    shadows: { "card-shadow": "0 1px 3px rgba(0,0,0,0.1)" },
    motion: { "transition-default": "200ms ease", "transition-slow": "400ms ease" },
  },
  Brutalist: {
    colors: {
      background: "#ffffff",
      surface: "#f5f5f5",
      primary: "#000000",
      accent: "#facc15",
      "text-primary": "#000000",
      "text-secondary": "#525252",
      border: "#000000",
    },
    typography: {
      "heading-font": "JetBrains Mono",
      "heading-weight": "900",
      "heading-tracking": "0.05em",
      "body-font": "JetBrains Mono",
      "body-weight": "400",
      "body-size": "16px",
      "line-height": "1.5",
    },
    spacing: { "base-unit": "4px", "section-padding": "80px", "component-gap": "32px" },
    borderRadius: { "border-radius-sm": "0px", "border-radius-md": "0px", "border-radius-lg": "0px" },
    shadows: { "card-shadow": "4px 4px 0px #000000" },
    motion: { "transition-default": "0ms", "transition-slow": "0ms" },
  },
  Corporate: {
    colors: {
      background: "#ffffff",
      surface: "#f8fafc",
      primary: "#1e40af",
      accent: "#0ea5e9",
      "text-primary": "#0f172a",
      "text-secondary": "#64748b",
      border: "#e2e8f0",
    },
    typography: {
      "heading-font": "Source Sans Pro",
      "heading-weight": "700",
      "heading-tracking": "-0.01em",
      "body-font": "Source Sans Pro",
      "body-weight": "400",
      "body-size": "16px",
      "line-height": "1.6",
    },
    spacing: { "base-unit": "4px", "section-padding": "64px", "component-gap": "24px" },
    borderRadius: { "border-radius-sm": "4px", "border-radius-md": "6px", "border-radius-lg": "8px" },
    shadows: { "card-shadow": "0 2px 8px rgba(0,0,0,0.08)" },
    motion: { "transition-default": "200ms ease", "transition-slow": "350ms ease" },
  },
  Playful: {
    colors: {
      background: "#ffffff",
      surface: "#faf5ff",
      primary: "#8b5cf6",
      accent: "#06b6d4",
      "text-primary": "#1e1b4b",
      "text-secondary": "#7c3aed",
      border: "#e9d5ff",
    },
    typography: {
      "heading-font": "Nunito",
      "heading-weight": "800",
      "heading-tracking": "-0.01em",
      "body-font": "Nunito",
      "body-weight": "400",
      "body-size": "16px",
      "line-height": "1.65",
    },
    spacing: { "base-unit": "4px", "section-padding": "72px", "component-gap": "24px" },
    borderRadius: { "border-radius-sm": "8px", "border-radius-md": "12px", "border-radius-lg": "20px" },
    shadows: { "card-shadow": "0 4px 16px rgba(139,92,246,0.15)" },
    motion: { "transition-default": "200ms cubic-bezier(0.34,1.56,0.64,1)", "transition-slow": "400ms ease" },
  },
  Luxury: {
    colors: {
      background: "#0a0a0a",
      surface: "#141414",
      primary: "#b8860b",
      accent: "#d4af37",
      "text-primary": "#f5f5f5",
      "text-secondary": "#a3a3a3",
      border: "#262626",
    },
    typography: {
      "heading-font": "Cormorant Garamond",
      "heading-weight": "600",
      "heading-tracking": "0.02em",
      "body-font": "Cormorant Garamond",
      "body-weight": "400",
      "body-size": "18px",
      "line-height": "1.7",
    },
    spacing: { "base-unit": "4px", "section-padding": "80px", "component-gap": "32px" },
    borderRadius: { "border-radius-sm": "2px", "border-radius-md": "4px", "border-radius-lg": "8px" },
    shadows: { "card-shadow": "0 8px 32px rgba(0,0,0,0.6)" },
    motion: { "transition-default": "300ms ease", "transition-slow": "600ms ease" },
  },
};

// Ultra Premium templates get their own bespoke tokens
const ULTRA_PREMIUM_TOKENS: Record<
  string,
  (typeof STYLE_TOKENS)[string] & { headingFont?: string; monoFont?: string }
> = {
  "saas-motion-dark": {
    colors: {
      background: "#050510",
      surface: "#0d0d1a",
      primary: "#6366f1",
      accent: "#a5b4fc",
      "text-primary": "#ffffff",
      "text-secondary": "#9ca3af",
      border: "#1e1e3f",
    },
    typography: {
      "heading-font": "Inter Tight",
      "heading-weight": "700",
      "heading-tracking": "-0.02em",
      "body-font": "Inter",
      "body-weight": "400",
      "body-size": "16px",
      "line-height": "1.6",
    },
    spacing: { "base-unit": "4px", "section-padding": "80px", "component-gap": "24px" },
    borderRadius: { "border-radius-sm": "6px", "border-radius-md": "13px", "border-radius-lg": "20px" },
    shadows: { "card-shadow": "0 4px 24px rgba(99,102,241,0.15)" },
    motion: { "transition-default": "200ms cubic-bezier(0.16,1,0.3,1)", "transition-slow": "400ms cubic-bezier(0.16,1,0.3,1)" },
  },
  "ai-product-hero": {
    colors: {
      background: "#050510",
      surface: "#0a0a1a",
      primary: "#8b5cf6",
      accent: "#c4b5fd",
      "text-primary": "#ffffff",
      "text-secondary": "#a78bfa",
      border: "#1e1e3f",
    },
    typography: {
      "heading-font": "Inter Tight",
      "heading-weight": "800",
      "heading-tracking": "-0.03em",
      "body-font": "Inter",
      "body-weight": "400",
      "body-size": "16px",
      "line-height": "1.6",
    },
    spacing: { "base-unit": "4px", "section-padding": "96px", "component-gap": "32px" },
    borderRadius: { "border-radius-sm": "8px", "border-radius-md": "16px", "border-radius-lg": "24px" },
    shadows: { "card-shadow": "0 8px 32px rgba(139,92,246,0.2)" },
    motion: { "transition-default": "300ms cubic-bezier(0.16,1,0.3,1)", "transition-slow": "500ms cubic-bezier(0.16,1,0.3,1)" },
  },
  "agency-dark": {
    colors: {
      background: "#050510",
      surface: "#0d0d1a",
      primary: "#6366f1",
      accent: "#a5b4fc",
      "text-primary": "#ffffff",
      "text-secondary": "#9ca3af",
      border: "#1e1e3f",
    },
    typography: {
      "heading-font": "Inter Tight",
      "heading-weight": "700",
      "heading-tracking": "-0.02em",
      "body-font": "Inter",
      "body-weight": "400",
      "body-size": "16px",
      "line-height": "1.6",
    },
    spacing: { "base-unit": "4px", "section-padding": "80px", "component-gap": "24px" },
    borderRadius: { "border-radius-sm": "6px", "border-radius-md": "13px", "border-radius-lg": "20px" },
    shadows: { "card-shadow": "0 4px 24px rgba(0,0,0,0.4)" },
    motion: { "transition-default": "200ms ease", "transition-slow": "400ms ease" },
  },
};

function getTokensForTemplate(slug: string, style: string) {
  const normalized = slug?.toLowerCase().replace(/\s+/g, "-") ?? "";
  if (ULTRA_PREMIUM_TOKENS[normalized]) return ULTRA_PREMIUM_TOKENS[normalized];
  return STYLE_TOKENS[style] ?? STYLE_TOKENS.Minimalist;
}

function generateDesignMd(template: {
  name: string;
  category: string;
  style: string;
  tier: string;
  slug?: string | null;
  platforms?: string[] | null;
}): string {
  const tokens = getTokensForTemplate(template.slug ?? "", template.style);
  const platforms = template.platforms ?? ["cursor", "v0", "bolt", "lovable"];

  const lines: string[] = [
    `# DESIGN.md — ${template.name}`,
    `# Generated by Code Bonito · codebonito.com`,
    `# Category: ${template.category} · Style: ${template.style} · Tier: ${template.tier}`,
    ``,
    `## Colors`,
    ...Object.entries(tokens.colors).map(([k, v]) => `${k}: ${v}`),
    ``,
    `## Typography`,
    ...Object.entries(tokens.typography).map(([k, v]) => `${k}: ${v}`),
    ``,
    `## Spacing`,
    ...Object.entries(tokens.spacing).map(([k, v]) => `${k}: ${v}`),
    ``,
    `## Borders`,
    ...Object.entries(tokens.borderRadius).map(([k, v]) => `${k}: ${v}`),
    ``,
    `## Shadows`,
    ...Object.entries(tokens.shadows ?? { "card-shadow": "0 4px 16px rgba(0,0,0,0.1)" }).map(([k, v]) => `${k}: ${v}`),
    ``,
    `## Motion`,
    ...Object.entries(tokens.motion ?? { "transition-default": "200ms ease", "transition-slow": "400ms ease" }).map(([k, v]) => `${k}: ${v}`),
    ``,
    `## Platforms`,
    ...platforms.map((p) => `${p}: true`),
    ``,
    `## Usage`,
    `Paste this file as context when starting a new project in Cursor, Claude Code, Gemini CLI, or v0.`,
    `Tell your AI: "Use the design system defined in DESIGN.md for all UI decisions."`,
    ``,
    `## Source`,
    `Template: ${template.name}`,
    `URL: https://codebonito.com/template/${template.slug ?? ""}`,
  ];

  return lines.join("\n");
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const templateId = searchParams.get("id");

  if (!templateId) {
    return NextResponse.json({ error: "Missing template id" }, { status: 400 });
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const adminClient = createAdminClient();
  const { data: template, error } = await adminClient
    .from("templates")
    .select("id, name, category, style, tier, slug, platforms, is_premium")
    .eq("id", templateId)
    .single();

  if (error || !template) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  // Auth gate: cursorrules requires auth, DESIGN.md follows same rule
  if (!user) {
    return NextResponse.json({ error: "Authentication required", redirect: "/login" }, { status: 401 });
  }

  // Ultra Premium: requires purchase or Pro subscription
  if (template.tier === "ultra_premium") {
    const { data: purchase } = await adminClient
      .from("purchases")
      .select("id")
      .eq("user_id", user.id)
      .eq("template_id", templateId)
      .single();

    if (!purchase) {
      const { data: subscription } = await adminClient
        .from("subscriptions")
        .select("id")
        .eq("user_id", user.id)
        .eq("plan", "pro")
        .eq("status", "active")
        .single();

      if (!subscription) {
        return NextResponse.json({ error: "Pro subscription or purchase required" }, { status: 403 });
      }
    }
  }

  const content = generateDesignMd(template as Parameters<typeof generateDesignMd>[0]);
  const filename = `DESIGN-${(template.slug ?? template.name).replace(/\s+/g, "-").toLowerCase()}.md`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
