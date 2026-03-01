import type { Template } from "@/types/database";

export function generatePrompt(template: Template, platform: string): string {
  const base = `You are building a ${template.category.toLowerCase()} website using the "${template.name}" design system.

## Design Tokens
- **Style:** ${template.style || ''}
- **Category:** ${template.category}
- **Description:** ${template.description}

## Visual Guidelines
- Use a clean, ${template.style?.toLowerCase()} aesthetic
- Follow the design system consistently across all components
- Ensure responsive design (mobile-first)
- Use semantic HTML and accessible components

## Color Palette
Apply colors that match the "${template.style || ''}" style for a ${template.category.toLowerCase()} website.

## Typography
Choose fonts appropriate for a ${template.style?.toLowerCase()} ${template.category.toLowerCase()} design.

## Component Guidelines
- Navigation: Clean, consistent with the design system
- Hero section: Impactful, on-brand
- Cards/Features: Grid layout, consistent spacing
- CTAs: Clear hierarchy, styled buttons
- Footer: Professional, with relevant links

Build a complete, production-ready page with all sections.`;

  const platformInstructions: Record<string, string> = {
    cursor: `${base}

## Cursor-Specific Instructions
- Create a Next.js 14+ page component
- Use Tailwind CSS for all styling
- Use TypeScript
- Include proper metadata and SEO
- Make it a single page.tsx file`,
    v0: `${base}

## v0-Specific Instructions
- Generate a single React component
- Use Tailwind CSS classes only
- Use shadcn/ui components where appropriate
- Make it responsive and interactive
- Include all sections in one component`,
    bolt: `${base}

## Bolt-Specific Instructions
- Create a complete web application
- Use React + Tailwind CSS
- Include routing if multiple pages needed
- Add interactive elements
- Make it deployment-ready`,
    lovable: `${base}

## Lovable-Specific Instructions
- Build with React + Tailwind
- Use shadcn/ui component library
- Focus on clean, maintainable code
- Include responsive design
- Add smooth transitions and hover states`,
    "claude-code": `${base}

## Claude Code Instructions
- Create a Next.js application
- Use TypeScript + Tailwind CSS
- Include proper file structure
- Add error handling
- Make it production-ready with proper types`,
  };

  return platformInstructions[platform] || base;
}
