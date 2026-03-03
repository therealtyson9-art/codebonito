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
  const style = template.style?.toLowerCase() || "modern";
  const category = template.category || "Web";
  const name = template.name || "Custom Design";
  const aesthetic = template.description || `A ${style} ${category.toLowerCase()} website`;

  const generators: Record<string, () => string> = {
    cursor: () => `# ${name} — Cursor Project Rules

## .cursorrules
\`\`\`
You are building "${biz}" — ${desc}.
Design system: ${name} (${style} style).
Category: ${category}.

RULES:
- Next.js 14+ with App Router, TypeScript strict mode
- Tailwind CSS only (no CSS modules, no styled-components)
- All components in src/components/, pages in src/app/
- Mobile-first responsive design
- Every component must be accessible (ARIA labels, semantic HTML)
- Use Inter for body text, system fonts for headings unless design specifies otherwise
- ${style} aesthetic: ${aesthetic}
\`\`\`

## Project Structure
Create these files in order:

### Step 1: Layout & Theme
\`src/app/layout.tsx\` — Root layout with fonts, metadata for "${biz}"
\`src/app/globals.css\` — Tailwind config with ${style} design tokens

### Step 2: Components (build each one, test, then next)
\`src/components/navbar.tsx\` — Navigation with logo, links, CTA button
\`src/components/hero.tsx\` — Hero section: headline, subheadline, CTA, visual
\`src/components/features.tsx\` — 3-6 features/services specific to ${category.toLowerCase()}
\`src/components/testimonials.tsx\` — Social proof section (3 testimonials)
\`src/components/cta.tsx\` — Call-to-action section
\`src/components/footer.tsx\` — Footer with links, contact, copyright

### Step 3: Assembly
\`src/app/page.tsx\` — Import all components, compose the full page

## Design Direction
- **Style:** ${style}
- **Category:** ${category}
- **Vibe:** ${aesthetic}
- Write real copy for "${biz}" — no lorem ipsum
- All sections should feel cohesive and on-brand`,

    v0: () => `Create a complete ${category.toLowerCase()} landing page for "${biz}" — ${desc}.

Design system: **${name}** (${style} style)

## Component Structure
Build as a single React component with these sections in order:

1. **Navbar** — Logo "${biz}", navigation links, CTA button
2. **Hero** — Bold headline, supporting text, primary CTA, optional visual/illustration
3. **Features/Services** — Grid of 3-6 cards showcasing what ${biz} offers (use icons from lucide-react)
4. **Social Proof** — 3 testimonials with names, roles, quotes
5. **CTA Section** — Final conversion section with compelling copy
6. **Footer** — Links, copyright, social icons

## Design Requirements
- **Style:** ${style} — ${aesthetic}
- Use shadcn/ui components: Button, Card, Badge, Separator
- Tailwind CSS for all styling
- Responsive: mobile-first, looks great on all screen sizes
- Smooth hover states and transitions
- Real, professional copy specific to ${category.toLowerCase()} industry
- No placeholder text — write copy as if this were a real ${category.toLowerCase()} business called "${biz}"

## Tone
${style === "playful" ? "Fun, energetic, casual — use emoji sparingly, rounded shapes, vibrant colors" :
  style === "brutalist" ? "Raw, bold, high contrast — monospace fonts, thick borders, no gradients" :
  style === "luxury" ? "Elegant, refined, exclusive — serif fonts, muted palette, generous whitespace" :
  style === "corporate" ? "Professional, trustworthy, clean — structured layouts, blue/gray tones, formal language" :
  "Clean, minimal, focused — lots of whitespace, simple typography, subtle animations"}`,

    bolt: () => `Build a complete ${category.toLowerCase()} website for "${biz}" in 3 phases.

Design: **${name}** (${style} style) — ${aesthetic}

---

## PHASE 1: Foundation
Set up the project and build the core layout.

- Create a React + Tailwind project
- Set up the color palette and typography for ${style} style
- Build the Navbar component (logo "${biz}", nav links, CTA)
- Build the Hero section (headline about ${biz}, description: ${desc}, CTA button)
- Build the Footer (links, copyright ${biz})

**Test:** Page should render with navbar, hero, and footer. Responsive on mobile.

---

## PHASE 2: Content Sections
Add the main content that sells ${biz}.

- Features/Services grid (3-6 items relevant to ${category.toLowerCase()})
- Testimonials section (3 customer quotes)
- Stats or social proof bar
- Call-to-action section with email capture or contact button

**Test:** All sections visible, cards responsive, no overflow issues.

---

## PHASE 3: Polish & Deploy
Make it production-ready.

- Add hover effects and smooth transitions
- Ensure full mobile responsiveness
- Add meta tags and page title for "${biz}"
- Verify accessibility (contrast, focus states, alt text)
- Deploy

**Write real copy** for a ${category.toLowerCase()} business. No lorem ipsum.`,

    lovable: () => `I want to build a beautiful ${category.toLowerCase()} website for my business "${biz}".

Here's what I'm going for: ${aesthetic}

**About my business:** ${desc}

**The vibe I want:** ${
  style === "playful" ? "Fun and approachable — think rounded corners, pops of color, friendly language. I want visitors to smile." :
  style === "brutalist" ? "Bold and unapologetic — think raw edges, high contrast, monospace type. I want it to stand out from every other boring website." :
  style === "luxury" ? "Elegant and premium — think generous whitespace, refined typography, muted colors with gold or dark accents. I want visitors to feel the quality." :
  style === "corporate" ? "Professional and trustworthy — think structured layouts, clean lines, subtle colors. I want visitors to take us seriously." :
  "Clean and modern — think whitespace, simple typography, focused content. I want visitors to feel calm and find what they need instantly."
}

**Sections I need:**
- Navigation bar with my business name and a clear CTA button
- A hero section that immediately communicates what ${biz} does
- A features or services section (what makes us special)
- Social proof (testimonials from happy customers)
- A final call-to-action before the footer
- A professional footer

**Important:**
- Make it responsive (looks great on phones too)
- Use real-sounding copy — don't use placeholder text
- I want it to feel like a real ${category.toLowerCase()} business, not a generic template
- Use React with Tailwind CSS and shadcn/ui components

If you have questions about any section, ask me before building. I'd rather get it right than fast.`,

    "claude-code": () => `# ${biz} — ${category} Website Implementation

## Overview
Build a production-ready ${category.toLowerCase()} website for "${biz}" (${desc}) using the ${name} design system (${style} style).

## Technical Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel-ready

## Design System: ${name}
- **Style:** ${style}
- **Description:** ${aesthetic}
${style === "minimalist" ? "- Generous whitespace, max 2-3 colors, Inter/system fonts\n- Subtle shadows, no gradients, clean borders" :
  style === "brutalist" ? "- High contrast black/white, monospace fonts, thick borders\n- No border-radius, raw aesthetic, bold typography" :
  style === "luxury" ? "- Dark backgrounds, gold/cream accents, serif headings\n- Subtle gradients, refined spacing, elegant transitions" :
  style === "playful" ? "- Vibrant colors, rounded corners (12px+), friendly sans-serif\n- Emoji accents, bouncy hover effects, warm tone" :
  "- Professional palette, structured grid, clear hierarchy\n- Consistent spacing scale, subtle hover states"}

## Implementation Steps

### 1. Project Setup
\`\`\`bash
npx create-next-app@latest ${biz.toLowerCase().replace(/\s+/g, "-")} --typescript --tailwind --app
\`\`\`

### 2. Create Components
Implement each component in \`src/components/\`:

| Component | Description | Key Elements |
|-----------|-------------|-------------|
| Navbar | Top navigation | Logo, 4-5 links, CTA button |
| Hero | Above the fold | Headline, subtitle, 2 CTAs |
| Features | Value proposition | 3-6 cards with icons |
| Testimonials | Social proof | 3 customer quotes with avatars |
| CTA | Conversion section | Heading, description, form/button |
| Footer | Site footer | Links, contact info, copyright |

### 3. Page Assembly
Compose all components in \`src/app/page.tsx\`.

### 4. Content Guidelines
- All copy must be specific to "${biz}" and the ${category.toLowerCase()} industry
- No lorem ipsum or generic placeholder text
- Professional tone appropriate for ${category.toLowerCase()}
- Include realistic business details

### 5. Quality Checklist
- [ ] Responsive on mobile, tablet, desktop
- [ ] All interactive elements have hover/focus states
- [ ] Semantic HTML throughout
- [ ] Meta tags and OpenGraph configured
- [ ] No TypeScript errors
- [ ] Lighthouse score > 90`,

    "openclaw-agent": () => `# PROJECT.md — ${biz}

## What We're Building
A ${category.toLowerCase()} website for "${biz}" — ${desc}.
Design style: ${name} (${style}).

## For the Agent
Build me a complete, polished website. Here's what I need:

**Pages:** Just one landing page with everything on it.

**Sections (in this order):**
1. Navigation bar — business name "${biz}", a few links, and a "Get Started" button
2. Hero — a big headline that tells people what ${biz} does, a subtitle, and a button
3. What we offer — 3 to 6 cards showing our main features or services (make them relevant to ${category.toLowerCase()})
4. What people say — 3 testimonials from happy customers (make up realistic names and quotes)
5. Call to action — one more push to get visitors to sign up or contact us
6. Footer — links, copyright, maybe social media icons

**Style:** ${
  style === "playful" ? "Fun and colorful — rounded corners, bright colors, friendly tone" :
  style === "brutalist" ? "Bold and raw — high contrast, thick borders, monospace fonts" :
  style === "luxury" ? "Elegant and premium — dark colors, gold accents, serif fonts, lots of space" :
  style === "corporate" ? "Professional and clean — structured, blue/gray palette, formal tone" :
  "Minimal and clean — white space, simple fonts, subtle shadows"
}

**Tech:** Next.js with Tailwind CSS.

**Important:**
- Write real copy, not placeholder text
- Make it look good on phones
- Deploy to Vercel when done

That's it. Make it beautiful. 🚀`,
  };

  const generator = generators[platform];
  if (generator) return generator();

  // Fallback for unknown platforms
  return `Build a ${style} ${category.toLowerCase()} website for "${biz}" — ${desc}.\n\nDesign: ${name}\nStyle: ${aesthetic}\n\nInclude: navbar, hero, features, testimonials, CTA, footer.\nUse real copy, responsive design, and modern web technologies.`;
}
