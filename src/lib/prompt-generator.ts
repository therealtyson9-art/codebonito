import type { Template } from "@/types/database";

export interface CustomizationData {
  businessName?: string;
  businessDescription?: string;
}

export function generatePrompt(
  template: Template,
  platform: string,
  customization?: CustomizationData
): string {
  const biz = customization?.businessName || "[Your Business]";
  const desc =
    customization?.businessDescription ||
    "a " + (template.category?.toLowerCase() || "web") + " website";

  const base = [
    "You are building a website for **" + biz + "** — " + desc + ".",
    "",
    'Use the "' + template.name + '" design system (' + (template.style?.toLowerCase() || "modern") + " style).",
    "",
    "## Design Direction",
    "- **Style:** " + (template.style || "Modern"),
    "- **Category:** " + template.category,
    "- **Aesthetic:** " + template.description,
    "",
    "## Requirements",
    "- Build a complete, production-ready page",
    "- Responsive design (mobile-first)",
    "- Semantic HTML, accessible components",
    "- Apply the " + (template.style?.toLowerCase() || "modern") + " aesthetic consistently",
    "- Tailor all copy and sections to " + biz + " (" + desc + ")",
    "- Include: hero, features/services, social proof, CTA, footer",
    "- Use real-sounding placeholder text specific to the business (not lorem ipsum)",
  ].join("\n");

  const extras: Record<string, string> = {
    cursor: "\n\n## Cursor Instructions\n- Create a Next.js 14+ page in TypeScript\n- Use Tailwind CSS for all styling\n- Single page.tsx file with all sections\n- Include metadata and SEO tags\n- Make it deployable as-is",
    v0: "\n\n## v0 Instructions\n- Single React component with Tailwind CSS\n- Use shadcn/ui components where appropriate\n- All sections in one component\n- Responsive and interactive",
    bolt: "\n\n## Bolt Instructions\n- Complete React + Tailwind application\n- Include routing if needed\n- Interactive elements and animations\n- Deployment-ready",
    lovable: "\n\n## Lovable Instructions\n- React + Tailwind + shadcn/ui\n- Clean, maintainable code\n- Smooth transitions and hover states\n- Responsive design",
    "claude-code": "\n\n## Claude Code Instructions\n- Next.js app with TypeScript + Tailwind\n- Proper file structure and types\n- Error handling included\n- Production-ready",
  };

  return base + (extras[platform] || "");
}
