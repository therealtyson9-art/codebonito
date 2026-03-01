import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import archiver from "archiver";
import { PassThrough } from "stream";

// Design token palettes per style
const STYLE_TOKENS: Record<
  string,
  {
    colors: Record<string, string>;
    typography: Record<string, string>;
    spacing: Record<string, string>;
    borderRadius: Record<string, string>;
  }
> = {
  Minimalist: {
    colors: {
      primary: "#111111",
      secondary: "#6b7280",
      accent: "#3b82f6",
      background: "#ffffff",
      surface: "#f9fafb",
      text: "#111827",
      "text-muted": "#6b7280",
      border: "#e5e7eb",
    },
    typography: {
      fontFamily: "'Inter', system-ui, sans-serif",
      headingWeight: "600",
      bodyWeight: "400",
      baseSize: "16px",
      scale: "1.25",
    },
    spacing: { xs: "4px", sm: "8px", md: "16px", lg: "24px", xl: "48px", "2xl": "64px" },
    borderRadius: { sm: "4px", md: "8px", lg: "12px", full: "9999px" },
  },
  Brutalist: {
    colors: {
      primary: "#000000",
      secondary: "#ffffff",
      accent: "#facc15",
      background: "#ffffff",
      surface: "#f5f5f5",
      text: "#000000",
      "text-muted": "#525252",
      border: "#000000",
    },
    typography: {
      fontFamily: "'JetBrains Mono', 'Courier New', monospace",
      headingWeight: "900",
      bodyWeight: "400",
      baseSize: "16px",
      scale: "1.333",
    },
    spacing: { xs: "4px", sm: "8px", md: "16px", lg: "32px", xl: "48px", "2xl": "80px" },
    borderRadius: { sm: "0px", md: "0px", lg: "0px", full: "0px" },
  },
  Corporate: {
    colors: {
      primary: "#1e40af",
      secondary: "#64748b",
      accent: "#0ea5e9",
      background: "#ffffff",
      surface: "#f8fafc",
      text: "#0f172a",
      "text-muted": "#64748b",
      border: "#e2e8f0",
    },
    typography: {
      fontFamily: "'Source Sans Pro', system-ui, sans-serif",
      headingWeight: "700",
      bodyWeight: "400",
      baseSize: "16px",
      scale: "1.2",
    },
    spacing: { xs: "4px", sm: "8px", md: "16px", lg: "24px", xl: "40px", "2xl": "64px" },
    borderRadius: { sm: "4px", md: "6px", lg: "8px", full: "9999px" },
  },
  Playful: {
    colors: {
      primary: "#8b5cf6",
      secondary: "#ec4899",
      accent: "#06b6d4",
      background: "#ffffff",
      surface: "#faf5ff",
      text: "#1e1b4b",
      "text-muted": "#7c3aed",
      border: "#e9d5ff",
    },
    typography: {
      fontFamily: "'Nunito', 'Rounded Mplus 1c', system-ui, sans-serif",
      headingWeight: "800",
      bodyWeight: "400",
      baseSize: "16px",
      scale: "1.25",
    },
    spacing: { xs: "4px", sm: "10px", md: "18px", lg: "28px", xl: "48px", "2xl": "72px" },
    borderRadius: { sm: "8px", md: "12px", lg: "20px", full: "9999px" },
  },
  Luxury: {
    colors: {
      primary: "#b8860b",
      secondary: "#d4af37",
      accent: "#c9a961",
      background: "#0a0a0a",
      surface: "#141414",
      text: "#f5f5f5",
      "text-muted": "#a3a3a3",
      border: "#262626",
    },
    typography: {
      fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
      headingWeight: "600",
      bodyWeight: "400",
      baseSize: "18px",
      scale: "1.333",
    },
    spacing: { xs: "4px", sm: "8px", md: "20px", lg: "32px", xl: "56px", "2xl": "80px" },
    borderRadius: { sm: "2px", md: "4px", lg: "8px", full: "9999px" },
  },
};

const DEFAULT_TOKENS = STYLE_TOKENS.Minimalist;

function buildTokens(style: string | null) {
  return STYLE_TOKENS[style ?? ""] ?? DEFAULT_TOKENS;
}

function buildManifest(t: { id: string; name: string; category: string; style: string | null; description: string | null; platforms: string[] }) {
  return {
    name: t.name,
    version: "1.0.0",
    category: t.category,
    style: t.style,
    description: t.description,
    platforms: t.platforms,
    files: [
      "tokens.json",
      "prompt.md",
      ".cursorrules",
      "claude-rules.md",
      "v0-prompt.md",
      "bolt-prompt.md",
    ],
    generatedAt: new Date().toISOString(),
  };
}

function buildBasePrompt(t: { name: string; category: string; style: string | null; description: string | null }, tokens: ReturnType<typeof buildTokens>) {
  return `# ${t.name} — Design System Prompt

## Overview
You are building a **${t.category}** website in the **${t.style ?? "Minimalist"}** style.

${t.description ?? ""}

## Design Tokens

### Colors
${Object.entries(tokens.colors).map(([k, v]) => `- **${k}**: \`${v}\``).join("\n")}

### Typography
${Object.entries(tokens.typography).map(([k, v]) => `- **${k}**: \`${v}\``).join("\n")}

### Spacing
${Object.entries(tokens.spacing).map(([k, v]) => `- **${k}**: \`${v}\``).join("\n")}

### Border Radius
${Object.entries(tokens.borderRadius).map(([k, v]) => `- **${k}**: \`${v}\``).join("\n")}

## Implementation Rules
1. Use the exact color values from the design tokens above.
2. Apply the typography settings consistently — headings use \`${tokens.typography.headingWeight}\` weight, body uses \`${tokens.typography.bodyWeight}\`.
3. Use the spacing scale for all padding, margin, and gap values.
4. Use the border-radius scale for rounded corners.
5. Ensure the design is fully responsive (mobile-first approach).
6. Prioritize accessibility: proper contrast ratios, semantic HTML, ARIA labels.
7. Use Tailwind CSS for styling when possible.
8. Build with React / Next.js components.
`;
}

function buildCursorRules(t: { name: string; category: string; style: string | null; description: string | null }, tokens: ReturnType<typeof buildTokens>) {
  return `${buildBasePrompt(t, tokens)}
## Cursor-Specific Instructions
- When generating components, use the design tokens above as the single source of truth.
- Create reusable components for repeated patterns (buttons, cards, sections).
- Use \`cn()\` utility from \`@/lib/utils\` for conditional class merging.
- Prefer shadcn/ui components styled with these tokens.
- Follow the file structure: components in \`src/components/\`, pages in \`src/app/\`.
`;
}

function buildClaudeRules(t: { name: string; category: string; style: string | null; description: string | null }, tokens: ReturnType<typeof buildTokens>) {
  return `${buildBasePrompt(t, tokens)}
## Claude Code Instructions
- Follow these design tokens exactly when generating or editing code.
- Use Tailwind CSS utility classes mapped to the token values.
- Create components in \`src/components/\` and pages in \`src/app/\`.
- Use shadcn/ui as the component library base, customized with these tokens.
- Write TypeScript with strict types.
- Ensure all components are accessible and responsive.
`;
}

function buildV0Prompt(t: { name: string; category: string; style: string | null; description: string | null }, tokens: ReturnType<typeof buildTokens>) {
  return `${buildBasePrompt(t, tokens)}
## v0-Specific Instructions
- Generate a single-page ${t.category.toLowerCase()} layout using shadcn/ui and Tailwind CSS.
- Apply the exact color palette from the design tokens.
- Use \`${tokens.typography.fontFamily}\` as the primary font family.
- Build responsive layouts using CSS Grid and Flexbox.
- Include hover states, transitions, and micro-interactions appropriate for the ${t.style ?? "Minimalist"} style.
`;
}

function buildBoltPrompt(t: { name: string; category: string; style: string | null; description: string | null }, tokens: ReturnType<typeof buildTokens>) {
  return `${buildBasePrompt(t, tokens)}
## Bolt-Specific Instructions
- Scaffold a full ${t.category.toLowerCase()} project using React + Tailwind CSS.
- Apply the design tokens as CSS custom properties in \`globals.css\`.
- Use component-driven architecture with these token values baked in.
- Include responsive breakpoints: mobile (< 640px), tablet (< 1024px), desktop (>= 1024px).
- Set up the project with proper file structure and routing.
`;
}

export async function POST(request: Request) {
  try {
    const { templateId } = await request.json();

    if (!templateId) {
      return NextResponse.json(
        { error: "templateId is required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const admin = createAdminClient();

    // Fetch the template — DB uses is_pro (boolean) not price_tier
    const { data: template } = await admin
      .from("templates")
      .select("id, is_pro, name, category, style, description, platforms")
      .eq("id", templateId)
      .single();

    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      );
    }

    // If template is pro, check subscription
    if (template.is_pro) {
      const { data: subscription } = await admin
        .from("subscriptions")
        .select("plan, status")
        .eq("user_id", user.id)
        .eq("status", "active")
        .eq("plan", "pro")
        .single();

      if (!subscription) {
        return NextResponse.json(
          { error: "Pro subscription required", upgrade: true },
          { status: 403 }
        );
      }
    }

    // Record the download
    await admin.from("downloads").insert({
      user_id: user.id,
      template_id: templateId,
    });

    // Increment download counter
    await admin.rpc("increment_downloads", { tid: templateId });

    // Generate the ZIP file
    const tokens = buildTokens(template.style);
    const tpl = {
      id: template.id,
      name: template.name,
      category: template.category,
      style: template.style,
      description: template.description,
      platforms: template.platforms ?? [],
    };

    const passthrough = new PassThrough();
    const archive = archiver("zip", { zlib: { level: 9 } });
    archive.pipe(passthrough);

    archive.append(JSON.stringify(tokens, null, 2), { name: "tokens.json" });
    archive.append(JSON.stringify(buildManifest(tpl), null, 2), { name: "manifest.json" });
    archive.append(buildBasePrompt(tpl, tokens), { name: "prompt.md" });
    archive.append(buildCursorRules(tpl, tokens), { name: ".cursorrules" });
    archive.append(buildClaudeRules(tpl, tokens), { name: "claude-rules.md" });
    archive.append(buildV0Prompt(tpl, tokens), { name: "v0-prompt.md" });
    archive.append(buildBoltPrompt(tpl, tokens), { name: "bolt-prompt.md" });

    await archive.finalize();

    // Collect ZIP buffer from the passthrough stream
    const chunks: Buffer[] = [];
    for await (const chunk of passthrough) {
      chunks.push(Buffer.from(chunk));
    }
    const zipBuffer = Buffer.concat(chunks);

    const slug = `${template.category}-${template.style ?? "template"}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");

    return new Response(zipBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="codebonito-${slug}.zip"`,
        "Content-Length": String(zipBuffer.length),
      },
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Download failed" },
      { status: 500 }
    );
  }
}
