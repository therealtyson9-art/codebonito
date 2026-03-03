import type { Template } from "@/types/database";

export interface CustomizationData {
  businessName?: string;
  businessDescription?: string;
}

// ─── Style helpers ─────────────────────────────────────────────────────────────

function getStyleTokens(style: string | null): {
  adjectives: string[];
  colorHint: string;
  fontHint: string;
  spacingHint: string;
  tailwindPalette: string;
  vibe: string;
} {
  const s = (style || "Modern").toLowerCase();
  if (s.includes("minimalist") || s.includes("minimal")) {
    return {
      adjectives: ["clean", "functional", "whitespace-focused", "distilled"],
      colorHint: "monochromatic palette (black, white, one accent)",
      fontHint: "Inter or Geist, tight tracking on headings",
      spacingHint: "generous whitespace, 8px base grid",
      tailwindPalette: "bg-white text-neutral-900 accent-neutral-800",
      vibe: "breathable and editorial — every element earns its place",
    };
  }
  if (s.includes("brutalist") || s.includes("brutal")) {
    return {
      adjectives: ["raw", "bold", "unconventional", "high-contrast"],
      colorHint: "stark black and white, single jarring accent (yellow, red)",
      fontHint: "heavy monospace or condensed grotesque, ALL CAPS headers",
      spacingHint: "tight, almost claustrophobic, heavy borders",
      tailwindPalette: "bg-black text-white accent-yellow-400",
      vibe: "aggressive and intentional — ignores convention on purpose",
    };
  }
  if (s.includes("luxury") || s.includes("premium")) {
    return {
      adjectives: ["premium", "sophisticated", "editorial", "refined"],
      colorHint: "deep navy/charcoal with gold or champagne accent",
      fontHint: "serif display (Playfair Display), thin body weight",
      spacingHint: "maximum whitespace, asymmetric layouts",
      tailwindPalette: "bg-neutral-950 text-neutral-100 accent-amber-400",
      vibe: "elevated and exclusive — feels like a Bottega catalog",
    };
  }
  if (s.includes("playful") || s.includes("fun")) {
    return {
      adjectives: ["energetic", "colorful", "approachable", "joyful"],
      colorHint: "vibrant multi-color palette with gradients",
      fontHint: "rounded sans-serif, varied weights, emoji-friendly",
      spacingHint: "asymmetric sections, overlapping elements, rounded corners",
      tailwindPalette: "bg-violet-50 text-violet-900 accent-pink-500",
      vibe: "playful and unexpected — bouncy, surprising, smile-inducing",
    };
  }
  if (s.includes("corporate") || s.includes("professional")) {
    return {
      adjectives: ["professional", "trustworthy", "structured", "authoritative"],
      colorHint: "navy or deep blue primary, grey neutrals, white backgrounds",
      fontHint: "Inter or Source Sans, consistent hierarchy",
      spacingHint: "grid-aligned, predictable, comfortable",
      tailwindPalette: "bg-white text-slate-900 accent-blue-700",
      vibe: "dependable and polished — inspires confidence without showing off",
    };
  }
  // Default: modern
  return {
    adjectives: ["modern", "clean", "contemporary"],
    colorHint: "neutral base with a vibrant single accent",
    fontHint: "Inter or system-ui, clear hierarchy",
    spacingHint: "comfortable 8px grid, consistent section padding",
    tailwindPalette: "bg-white text-gray-900 accent-indigo-600",
    vibe: "contemporary and approachable",
  };
}

// ─── Platform generators ────────────────────────────────────────────────────────

function generateCursorPrompt(
  template: Template,
  biz: string,
  desc: string,
  tokens: ReturnType<typeof getStyleTokens>
): string {
  const style = template.style || "Modern";
  const category = template.category || "web";

  return `### Save as \`.cursor/rules/design-system.md\`

\`\`\`markdown
# Design System — ${biz}

## Project
- **Business:** ${biz}
- **Type:** ${category}
- **Template:** ${template.name}
- **Style:** ${style} — ${tokens.vibe}

## Stack (non-negotiable)
- Next.js 14+ App Router, TypeScript strict mode
- Tailwind CSS v3 (no inline styles, no CSS modules)
- shadcn/ui for interactive components
- next/image for all images, next/font for typography

## Design Tokens
- **Colors:** ${tokens.colorHint}
- **Typography:** ${tokens.fontHint}
- **Spacing:** ${tokens.spacingHint}
- **Tailwind base:** \`${tokens.tailwindPalette}\`

## Constraints
- Mobile-first. Every component tested at 375px, 768px, 1280px.
- No lorem ipsum. All copy is real and specific to ${biz}.
- Semantic HTML: <header>, <main>, <section>, <footer> with ARIA labels.
- No third-party CSS frameworks. Tailwind only.
- All animations via Tailwind \`transition\` / \`animate-\` utilities only.
\`\`\`

---

### Then run this in Cursor Agent:

I'm building the landing page for **${biz}** — ${desc}.

The design rules are in \`.cursor/rules/design-system.md\`. Follow them exactly.

Build \`app/page.tsx\` as a single-page site with these sections in order:
1. **Navigation** — sticky, logo left, links right, mobile hamburger
2. **Hero** — headline + subheadline tailored to ${biz}, primary CTA button
3. **Features / Services** — 3-column grid, icons, short descriptions
4. **Social proof** — testimonials or logos section
5. **CTA section** — full-width, contrasting background, one big action
6. **Footer** — links, copyright, minimal

Apply the **${style.toLowerCase()}** aesthetic throughout: ${tokens.adjectives.join(", ")}.
Every piece of copy should sound like it was written specifically for ${biz} — not generic filler.

After generating \`page.tsx\`, verify:
- \`npx tsc --noEmit\` shows 0 errors
- No Tailwind class conflicts
- All sections render at mobile width`;
}

function generateV0Prompt(
  template: Template,
  biz: string,
  desc: string,
  tokens: ReturnType<typeof getStyleTokens>
): string {
  const style = template.style || "Modern";
  const category = template.category || "web";

  return `Build a complete ${category} landing page for **${biz}** with these exact specifications:

## Component Spec

**Surface:** Full landing page — single scrollable component
**Business:** ${biz} — ${desc}
**Design style:** ${style} (${tokens.vibe})

## Tailwind Classes to Use

\`\`\`
Layout:   container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl
Hero:     ${tokens.tailwindPalette} py-24 sm:py-32
Headings: text-4xl sm:text-6xl font-bold tracking-tight
Body:     text-lg leading-relaxed text-opacity-80
CTA btn:  px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105
Cards:    rounded-2xl p-6 shadow-sm border hover:shadow-md transition-shadow
Grid:     grid grid-cols-1 md:grid-cols-3 gap-8
\`\`\`

## shadcn/ui Components

Use these where appropriate:
- \`<Button variant="default">\` and \`<Button variant="outline">\` for CTAs
- \`<Card>\` + \`<CardContent>\` for feature tiles
- \`<Badge>\` for category labels or social proof chips
- \`<NavigationMenu>\` for header nav

## Page Sections (in order)

1. **Sticky nav** — ${biz} logo (text), nav links, CTA button right-aligned
2. **Hero** — Bold headline specific to ${biz}, 1-sentence subheadline, 2 CTA buttons (primary + ghost), optional hero image/graphic on right
3. **Features grid** — 3 columns, each with icon + title + 2-line description. Write real features for a ${category} business.
4. **Social proof** — Either 3 testimonials with name/role OR a "Trusted by" logo row (use placeholder company names, not "lorem")
5. **Final CTA** — Full-width band, contrasting color, bold headline, single button
6. **Footer** — 3-column links + copyright line

## Style Enforcement
- Color scheme: ${tokens.colorHint}
- Typography: ${tokens.fontHint}
- Spacing: ${tokens.spacingHint}
- Adjectives to embody: ${tokens.adjectives.join(", ")}

No lorem ipsum. No generic "Company Name" placeholders. Make it feel like a real product for ${biz}.`;
}

function generateBoltPrompt(
  template: Template,
  biz: string,
  desc: string,
  tokens: ReturnType<typeof getStyleTokens>
): string {
  const style = template.style || "Modern";
  const category = template.category || "web";

  return `Build a complete ${category} website for **${biz}** (${desc}) using React + Vite + Tailwind CSS.

Design aesthetic: **${style}** — ${tokens.vibe}
Color palette: ${tokens.colorHint}
Typography: ${tokens.fontHint}

---

## Phase 1 — Foundation

**Step 1:** Scaffold the project
- React + Vite + TypeScript
- Tailwind CSS configured with custom tokens
- Install: \`lucide-react\` for icons, \`framer-motion\` for animations

**Step 2:** Design tokens in \`tailwind.config.ts\`
\`\`\`
colors: {
  brand: { primary, secondary, accent },
  neutral: { /* full scale */ }
}
fontFamily: { display, body }
borderRadius: { DEFAULT: '0.5rem', lg: '1rem', xl: '1.5rem' }
\`\`\`

**Step 3:** Global styles + base layout
- \`index.css\`: reset, base font, scroll-behavior: smooth
- \`App.tsx\`: imports all section components in order
- \`components/layout/\`: Navbar.tsx, Footer.tsx

---

## Phase 2 — Core Sections

**Step 4:** \`components/sections/Hero.tsx\`
- Headline: write a bold, specific headline for ${biz}
- Subheadline: 1 sentence describing the value prop
- 2 CTAs: primary (filled) + secondary (ghost/outline)
- Visual: right-side graphic or background pattern matching ${style.toLowerCase()} aesthetic

**Step 5:** \`components/sections/Features.tsx\`
- 3-column grid at desktop, stacked on mobile
- Each card: icon + title + description relevant to ${category}
- Hover state: subtle elevation or border glow
- Apply: ${tokens.adjectives.slice(0, 2).join(", ")} feel

**Step 6:** \`components/sections/SocialProof.tsx\`
- 3 testimonial cards with name, title, company
- Write realistic testimonials for a ${category} business like ${biz}
- Star rating display

---

## Phase 3 — Supporting Sections + Polish

**Step 7:** \`components/sections/CTA.tsx\`
- Full-width section, contrasting background
- Bold headline + single action button
- Optional: email input for lead capture

**Step 8:** Responsive polish
- Test every section at 375px (mobile), 768px (tablet), 1280px (desktop)
- Fix any overflow, stacking, or font-size issues
- Add \`transition-all duration-200\` to all interactive elements

**Step 9:** Animations with framer-motion
- Sections fade-in on scroll (use \`whileInView\`)
- Cards: subtle scale on hover
- CTA button: pulse animation

**Step 10:** Final check
- All copy is specific to ${biz} (zero lorem ipsum, zero "Company Name")
- \`npm run build\` passes with 0 errors
- Lighthouse score > 90 on performance`;
}

function generateLovablePrompt(
  template: Template,
  biz: string,
  desc: string,
  tokens: ReturnType<typeof getStyleTokens>
): string {
  const style = template.style || "Modern";
  const category = template.category || "web";

  return `I want to build a beautiful landing page for my business, **${biz}** — ${desc}.

Before you start, I'd love for you to clarify a few things with me:
1. What's the single most important action I want visitors to take?
2. Are there any specific brand colors I have in mind, or should you choose?
3. Do I prefer a light or dark overall feel?

(If I don't answer, go ahead with your best judgment — but do ask first in a friendly way!)

---

The overall vibe I'm going for is **${style.toLowerCase()}** — ${tokens.vibe}. Think: ${tokens.adjectives.join(", ")}.

I want it to feel ${tokens.adjectives[0]} and ${tokens.adjectives[1]}. The colors should lean toward ${tokens.colorHint}. Typography-wise, I'm imagining ${tokens.fontHint}.

Here's what I picture for each section:

**Navigation** — I want a clean top nav that feels almost invisible until you need it. Maybe a soft shadow on scroll. Logo on the left, links on the right, and a CTA button that feels elevated, not aggressive.

**Hero** — This should stop people. Big, confident headline that speaks directly to what ${biz} does. A single strong subheadline below it. Two buttons: one primary action, one softer "learn more" that scrolls down. When I hover the primary button, it should feel premium — not just a color change, but a subtle lift.

**Features / Services** — Three cards in a grid. Each card should breathe — generous padding, a soft icon, short crisp title, 2-sentence description. When I hover a card, it should feel like it's responding to me — maybe a gentle shadow or a border that lights up. Keep it ${tokens.adjectives[0]}.

**Testimonials** — Real-sounding people. Not "John D., Satisfied Customer." Write actual names, actual companies relevant to ${category}. I want the social proof to feel earned, not planted.

**CTA section** — Make this section feel like the natural conclusion of the page. A warm, inviting headline — not "Sign Up Now", more like an invitation. One clear button. The background should contrast with the rest of the page without feeling jarring.

**Footer** — Minimal and elegant. Three link columns, subtle copyright line. Should feel like the page quietly closes, not crashes.

A few things I really care about:
- No lorem ipsum anywhere. Write copy that sounds like a real ${category} business named ${biz}.
- Smooth scroll and section transitions. When I scroll, I want it to feel fluid.
- Mobile has to look equally good — not just "not broken", actually good.
- The whole thing should feel **editorial** and intentional, like someone spent real time on every detail.`;
}

function generateClaudeCodePrompt(
  template: Template,
  biz: string,
  desc: string,
  tokens: ReturnType<typeof getStyleTokens>
): string {
  const style = template.style || "Modern";
  const category = template.category || "web";

  return `## CLAUDE.md — ${biz} Landing Page

\`\`\`markdown
# Project: ${biz} — ${category} Landing Page

## Context
Building a production landing page for ${biz} (${desc}).
Design system: ${template.name}, style: ${style} — ${tokens.vibe}

## Stack
- Next.js 14+ App Router
- TypeScript (strict: true)
- Tailwind CSS v3
- shadcn/ui components
- next/font (no Google Fonts CDN)

## Design constraints
- Color: ${tokens.colorHint}
- Typography: ${tokens.fontHint}
- Spacing: ${tokens.spacingHint}
- Style words: ${tokens.adjectives.join(", ")}

## Critical rules
- Zero lorem ipsum — all copy is real and specific to ${biz}
- Mobile-first: 375px → 768px → 1280px
- No inline styles — Tailwind classes only
- Semantic HTML with ARIA labels on interactive elements
\`\`\`

---

## Implementation Steps

**Step 1 — Init**
\`\`\`bash
npx create-next-app@latest ${biz.toLowerCase().replace(/\s+/g, "-")}-site --typescript --tailwind --app --src-dir
cd ${biz.toLowerCase().replace(/\s+/g, "-")}-site
npx shadcn-ui@latest init
\`\`\`
After: verify \`src/app/page.tsx\` renders at localhost:3000.

**Step 2 — Design tokens**
Edit \`tailwind.config.ts\`: add custom color scale, font families, and spacing extensions.
After: verify \`npx tsc --noEmit\` passes.

**Step 3 — Components folder**
Create \`src/components/sections/\` with these files:
- \`Navbar.tsx\` — sticky nav, logo, links, CTA
- \`Hero.tsx\` — headline, subheadline, 2 CTAs
- \`Features.tsx\` — 3-column grid with icons
- \`SocialProof.tsx\` — testimonials or logo row
- \`CtaBand.tsx\` — full-width CTA section
- \`Footer.tsx\` — 3-col links + copyright

After: verify all files exist with \`ls src/components/sections/\`.

**Step 4 — Hero section**
Headline must be bold, specific to ${biz}: not "Welcome to our site."
Subheadline: one sentence stating the value proposition.
Primary CTA: filled button (shadcn \`<Button>\`)
Secondary CTA: ghost button or text link
After: screenshot or describe what renders at mobile (375px) and desktop (1280px).

**Step 5 — Features**
Write 3 real features/services relevant to a ${category} business.
Grid: \`grid-cols-1 md:grid-cols-3\`, cards with hover shadow transition.
After: verify grid collapses correctly at 768px.

**Step 6 — Social proof**
3 testimonials with realistic names + company names for ${category} industry.
After: verify text isn't cut off on mobile.

**Step 7 — CTA + Footer**
\`CtaBand\`: contrasting background, bold headline, single \`<Button>\` action.
\`Footer\`: 3 columns of links, copyright line, minimal styling.
After: verify no horizontal scroll at any breakpoint.

**Step 8 — Final build**
\`\`\`bash
npm run build
npx tsc --noEmit
\`\`\`
After: confirm 0 TypeScript errors, 0 build errors.
Bonus: run Lighthouse and aim for Performance > 90, Accessibility > 95.

## Expected file structure
\`\`\`
src/
  app/
    page.tsx          ← imports all section components
    layout.tsx        ← fonts, metadata, global styles
  components/
    sections/
      Navbar.tsx
      Hero.tsx
      Features.tsx
      SocialProof.tsx
      CtaBand.tsx
      Footer.tsx
    ui/               ← shadcn-generated
\`\`\``;
}

function generateOpenClawPrompt(
  template: Template,
  biz: string,
  desc: string,
  tokens: ReturnType<typeof getStyleTokens>
): string {
  const style = template.style || "Modern";
  const category = template.category || "web";

  return `## PROJECT.md — ${biz} Website Build

\`\`\`markdown
# ${biz} — ${category} Landing Page

## Goal
Build and deploy a production-ready landing page for ${biz} (${desc}).

## Design system
- Template: ${template.name}
- Style: ${style} — ${tokens.vibe}
- Colors: ${tokens.colorHint}
- Typography: ${tokens.fontHint}
- Spacing: ${tokens.spacingHint}

## Stack
Next.js 14 + TypeScript + Tailwind CSS + shadcn/ui → Deploy to Vercel

## Output
Public URL on Vercel. No lorem ipsum. Real copy for ${biz}.
\`\`\`

---

## DESIGN-SYSTEM.md

\`\`\`markdown
# Design System — ${biz}

Style keywords: ${tokens.adjectives.join(", ")}
Tailwind base: ${tokens.tailwindPalette}
Color intent: ${tokens.colorHint}
Font intent: ${tokens.fontHint}
Spacing: ${tokens.spacingHint}

Rules:
- Mobile-first always
- Tailwind classes only, no inline styles
- All copy specific to ${biz} and ${category} industry
- Hover states on all interactive elements
\`\`\`

---

## Agent Task Delegation

### Phase 1 — Research + Scaffold
**Agent task:**
1. Create Next.js 14 + TypeScript + Tailwind project
2. Install shadcn/ui and configure design tokens from DESIGN-SYSTEM.md
3. Create \`src/components/sections/\` folder with empty stubs for: Navbar, Hero, Features, SocialProof, CtaBand, Footer
4. Commit: "Phase 1: project scaffold"
5. **Report back:** Confirm all stubs exist and \`npm run dev\` starts without errors.

### Phase 2 — Build Sections
**Agent task:**
1. **Navbar** — sticky, ${biz} logo text left, nav links right, CTA button. Hamburger on mobile.
2. **Hero** — Research what ${biz} does (${desc}). Write a real headline. Subheadline + 2 CTA buttons. Desktop: text left, visual right. Mobile: stacked.
3. **Features** — 3 cards. Write real features/services for a ${category} business named ${biz}. Icons from lucide-react.
4. **Social proof** — 3 testimonials with realistic names and job titles in the ${category} space.
5. **CTA Band** — Contrasting background. Bold invite headline. Single action button.
6. **Footer** — 3-column links + copyright.
7. Commit: "Phase 2: all sections built"
8. **Report back:** Description of each section + confirm zero TypeScript errors.

### Phase 3 — Polish + Deploy
**Agent task:**
1. Add scroll-triggered fade-in animations (framer-motion or Tailwind animate)
2. Audit all copy — remove any remaining placeholder text
3. Run \`npm run build\` — fix all errors
4. Run Lighthouse — fix anything below 85 on Performance or Accessibility
5. Deploy to Vercel: \`vercel --prod\`
6. **Report back:** Live URL + Lighthouse scores (Performance, Accessibility, Best Practices, SEO)

---

**Start with Phase 1. Each phase must be confirmed complete before the next begins.**`;
}

// ─── Main export ────────────────────────────────────────────────────────────────

export function generatePrompt(
  template: Template,
  platform: string,
  customization?: CustomizationData
): string {
  const biz = customization?.businessName || "[Your Business]";
  const desc =
    customization?.businessDescription ||
    "a " + (template.category?.toLowerCase() || "web") + " website";

  const tokens = getStyleTokens(template.style);

  switch (platform) {
    case "cursor":
      return generateCursorPrompt(template, biz, desc, tokens);
    case "v0":
      return generateV0Prompt(template, biz, desc, tokens);
    case "bolt":
      return generateBoltPrompt(template, biz, desc, tokens);
    case "lovable":
      return generateLovablePrompt(template, biz, desc, tokens);
    case "claude-code":
      return generateClaudeCodePrompt(template, biz, desc, tokens);
    case "openclaw-agent":
      return generateOpenClawPrompt(template, biz, desc, tokens);
    default:
      // Fallback: generic structured prompt
      return generateV0Prompt(template, biz, desc, tokens);
  }
}
