// Ultra Premium Template #104 — Startup / YC-Style Landing
// 4 platform-specific prompt variants

export const STARTUP_LAUNCH_PROMPTS = {
  cursor: `Build a premium YC-style startup landing page with the following exact specifications. This must look like a top Y Combinator company's marketing site — clean, confident, conversion-focused.

**Stack:** React 18 + Next.js 14 + Tailwind CSS v3 + Framer Motion 11 + TypeScript
**Fonts:** @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap')

## Color System
- Background: #FAFAF8 (warm off-white)
- Primary: [PRIMARY_COLOR] (default: #0F172A — slate-900)
- Accent: [ACCENT_COLOR] (default: #3B82F6 — blue-500)
- Text primary: #0F172A
- Text secondary: rgba(15,23,42,0.6)
- Text muted: rgba(15,23,42,0.4)
- Border light: rgba(15,23,42,0.06)
- Card bg: #FFFFFF
- Dark section bg: [PRIMARY_COLOR]

## Navigation Bar
Clean minimal nav:
- Position: fixed top-0 left-0 right-0 z-50
- Container: max-w-[1120px] mx-auto px-8 py-4
- Background: transparent initially; on scroll (scrollY > 20): rgba(250,250,248,0.92) with backdropFilter: blur(16px), border-bottom: 1px solid rgba(15,23,42,0.06)
- Transition: all 0.3s cubic-bezier(0.23,1,0.32,1)
- Left: Logo — 28×28px rounded-lg div with bg-[ACCENT_COLOR], white letter, + "[BRAND_NAME]" in Inter 800, fontSize: 20px, tracking: -0.04em, color: [PRIMARY_COLOR]
- Center: Links "Features", "Pricing", "Docs", "Blog" in Inter 500, fontSize: 14px, color: rgba(15,23,42,0.6)
  - hover: color: [PRIMARY_COLOR], transition: color 0.2s ease
- Right: "Get Started" button — bg-[PRIMARY_COLOR] text-white rounded-lg px-5 py-2.5 font-semibold text-sm
  - Framer Motion: whileHover={{ y: -1, boxShadow: "0 4px 16px rgba(15,23,42,0.18)" }}
  - whileTap={{ scale: 0.98 }}
  - transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}

## Geometric Accents
Dot pattern in hero top-right:
- 8×8 grid of 4px circles, gap: 14px, color: [ACCENT_COLOR], opacity: 0.3
- Framer Motion: animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}

Angled lines hero top-left:
- Two lines: width 120px/80px, height 2px, rotated -35deg
- background: linear-gradient(90deg, [ACCENT_COLOR], transparent), opacity: 0.2/0.15

## Hero Section
min-h-screen, flex col center center, text-center, padding: 120px 24px 80px, bg: #FAFAF8, overflow: hidden, position: relative

**Status Badge:**
- inline-flex items-center gap-2, px-4 py-1.5, rounded-full
- bg: rgba(59,130,246,0.06), border: 1px solid rgba(59,130,246,0.15)
- Green dot: w-1.5 h-1.5 rounded-full bg-green-500, box-shadow: 0 0 8px rgba(34,197,94,0.5)
- Text: "Now accepting W26 batch applications" in Inter 600, fontSize: 13px, color: [ACCENT_COLOR]
- Framer Motion: initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}

**Headline:** "[HEADLINE]"
- Font: Inter 800, fontSize: clamp(40px, 6vw, 64px), tracking: -0.04em, leading: 1.05
- Color: [PRIMARY_COLOR]
- max-width: 720px
- Framer Motion: initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}

**Subheadline:** "[SUBHEADLINE]"
- Font: Inter 400, fontSize: 18px, leading: 1.6, color: rgba(15,23,42,0.6)
- max-width: 540px
- Framer Motion: initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}

**Two CTAs:**
- Primary: bg-[PRIMARY_COLOR] text-white, padding: 14px 32px, rounded-xl, font-semibold, fontSize: 16px
  - boxShadow: 0 2px 8px rgba(15,23,42,0.12)
  - whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(15,23,42,0.2)" }}
  - Text: "[CTA_TEXT]"
- Ghost: border 1.5px solid rgba(15,23,42,0.15), bg transparent, color: [PRIMARY_COLOR]
  - whileHover={{ borderColor: [PRIMARY_COLOR], backgroundColor: "rgba(15,23,42,0.03)" }}
  - Text: "See How It Works →"
- Container: Framer Motion stagger, delay: 0.5s

## Social Proof Bar
Full-width, padding: 28px 24px, bg: #FFFFFF, top/bottom borders: 1px solid rgba(15,23,42,0.04)
- Centered flex row with items separated by "·" dots
- Items: "Backed by Y Combinator", "$3.2M raised", "1,200+ companies", "4.9★ on G2"
- Font: Inter 600, fontSize: 14px, color: rgba(15,23,42,0.5)
- Framer Motion: useInView, each item staggered by 0.08s, initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}

## Problem / Solution Section
padding: 100px 24px, bg: #FAFAF8
- Section header: "The old way is broken" in Inter 800, clamp(28px, 4vw, 40px), [PRIMARY_COLOR]
- Subtitle: "Starting a company shouldn't feel like a second job." in Inter 400, 16px, rgba(15,23,42,0.5)
- Two-column grid, gap: 48px

**Left — "Without [BRAND_NAME]":**
- Label: Inter 700, 13px, uppercase, tracking: 0.08em, color: rgba(15,23,42,0.35)
- 4 problem cards: flex row, gap 14px, padding: 16px 20px, rounded-xl
  - bg: rgba(239,68,68,0.03), border: 1px solid rgba(239,68,68,0.06)
  - ❌ emoji + text in Inter 500, 15px, color: rgba(15,23,42,0.7)
  - Framer Motion: useInView, initial={{ opacity: 0, x: -20 }}, stagger: 0.08s

**Right — "With [BRAND_NAME]":**
- Label: same style as left
- 4 solution cards: same layout
  - bg: rgba(34,197,94,0.03), border: 1px solid rgba(34,197,94,0.08)
  - ✅ emoji + text
  - Framer Motion: useInView, initial={{ opacity: 0, x: 20 }}, stagger: 0.08s

## Product Screenshot
padding: 80px 24px 100px, bg: #FFFFFF
- Header: "Your startup command center" + subtitle
- Large mockup with perspective transform:
  - Container: Framer Motion useInView
  - initial={{ opacity: 0, rotateX: 8, rotateY: -3, y: 40, perspective: 1200 }}
  - animate={{ opacity: 1, rotateX: 2, rotateY: -1, y: 0 }}
  - transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
- Mockup: full-width, aspect-ratio: 16/10, rounded-2xl
  - bg: linear-gradient(145deg, #F1F5F9, #E2E8F0)
  - border: 1px solid rgba(15,23,42,0.06)
  - boxShadow: 0 24px 80px rgba(15,23,42,0.08), 0 8px 24px rgba(15,23,42,0.04)
  - Browser chrome: 3 dots (red #EF4444, yellow #F59E0B, green #22C55E) + URL bar
  - Sidebar with nav items, main area with placeholder cards

## Metrics Bar
padding: 72px 24px, bg: [PRIMARY_COLOR]
- 4-column grid, centered text
- Each stat: large number in Inter 800, 44px, white + suffix in [ACCENT_COLOR]
  - Label below in Inter 500, 14px, rgba(255,255,255,0.5)
  - Stats: [STAT_1_VALUE]+, [STAT_1_LABEL] | [STAT_2_VALUE]min, [STAT_2_LABEL] | [STAT_3_VALUE]%, [STAT_3_LABEL] | [STAT_4_VALUE]M, [STAT_4_LABEL]
- Framer Motion: useInView, counter animation with spring({ stiffness: 50, damping: 20 })
  - Numbers animate from 0 to target using useSpring + useTransform
  - Stagger each stat by 0.1s

## Pricing Section
padding: 100px 24px, bg: #FAFAF8
- Header: "Simple, transparent pricing" + "Start free. Scale when you're ready."
- Two-card grid, gap: 24px

**Starter (Free):**
- bg: #FFFFFF, rounded-2xl, padding: 36px
- border: 1px solid rgba(15,23,42,0.06)
- boxShadow: 0 2px 8px rgba(15,23,42,0.04)
- Name: Inter 700, 18px, [PRIMARY_COLOR]
- Price: "$0" in Inter 800, 40px + "forever" in Inter 400, 15px, rgba(15,23,42,0.4)
- Features with green ✓ checkmarks
- CTA button: bg-[PRIMARY_COLOR], text-white, rounded-xl, full-width

**Pro ($49/mo):**
- bg: [PRIMARY_COLOR], rounded-2xl, padding: 36px
- boxShadow: 0 24px 64px rgba(15,23,42,0.15)
- "Most Popular" badge: absolute top -12px right 24px, bg: [ACCENT_COLOR], rounded-full, Inter 700, 11px, white
- Price: "$49" + "/month" in white
- Features with [ACCENT_COLOR] ✓ checkmarks, text rgba(255,255,255,0.8)
- CTA: bg-white, color: [PRIMARY_COLOR]

Both cards: Framer Motion useInView, initial={{ opacity: 0, y: 24, scale: 0.97 }}, stagger 0.1s

## Final CTA Section
padding: 100px 24px, bg: #FFFFFF, text-center
- Headline: "Join 1,200+ companies building the future" in Inter 800, clamp(28px, 4.5vw, 44px)
- Subtitle: "Free to start. No credit card required. Set up in under 10 minutes."
- Primary CTA: bg-[ACCENT_COLOR], text-white, padding: 16px 36px, rounded-xl
  - boxShadow: 0 4px 16px rgba(59,130,246,0.25)
  - whileHover={{ y: -2, boxShadow: "0 8px 32px rgba(59,130,246,0.35)" }}
- Secondary link: "Talk to Sales →" in [PRIMARY_COLOR], hover: [ACCENT_COLOR]

## Footer
padding: 48px 24px, bg: #FAFAF8, borderTop: 1px solid rgba(15,23,42,0.04)
- Three-part layout: Logo left, links center (Privacy, Terms, Security, Status), copyright right
- Font: Inter 400, 13px, color: rgba(15,23,42,0.4)

## Placeholder Variables
Replace throughout:
- [BRAND_NAME] = company name
- [PRIMARY_COLOR] = main dark color
- [ACCENT_COLOR] = highlight blue
- [HEADLINE] = hero headline
- [SUBHEADLINE] = hero description
- [CTA_TEXT] = primary call-to-action
- [STAT_1_VALUE], [STAT_1_LABEL] through [STAT_4_VALUE], [STAT_4_LABEL]

## Animation Philosophy
This template is about CONFIDENCE and CLARITY. Animations are subtle, professional, purposeful:
- Fade-in-up on scroll (useInView with once: true)
- Staggered children with 0.08-0.1s delays
- Smooth hover lifts with box-shadow transitions
- Counter animations with spring physics
- No flashy effects, no bouncing, no morphing text
- Cubic-bezier: [0.23, 1, 0.32, 1] for all entrance animations`,

  v0: `Build a premium YC-style startup landing page. Clean, confident, conversion-focused design inspired by top Y Combinator companies.

**Stack:** React + Next.js + Tailwind CSS + Framer Motion + TypeScript
**Font:** Inter (400, 500, 600, 700, 800)

## Design Tokens
- bg: #FAFAF8, card: #FFFFFF, dark: [PRIMARY_COLOR] (#0F172A)
- accent: [ACCENT_COLOR] (#3B82F6)
- text: #0F172A, secondary: rgba(15,23,42,0.6), muted: rgba(15,23,42,0.4)
- border: rgba(15,23,42,0.06)
- radius: 10px cards, 8px buttons, 16px mockup
- shadow-sm: 0 2px 8px rgba(15,23,42,0.04)
- shadow-lg: 0 24px 64px rgba(15,23,42,0.15)

## Sections (top to bottom)

**1. Navbar** — fixed, transparent → frosted on scroll. Logo (colored square + "[BRAND_NAME]"), 4 nav links, "Get Started" button (bg-[PRIMARY_COLOR]).

**2. Hero** — min-h-screen centered. Status badge (green dot + text), bold headline "[HEADLINE]" (Inter 800, clamp(40px,6vw,64px), tracking -0.04em), subheadline "[SUBHEADLINE]" (18px, muted), two CTAs (filled primary + ghost outline). Subtle dot grid pattern top-right (8×8, 4px dots, accent color, opacity 0.3). Angled decorative lines top-left.
- Framer Motion: motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}

**3. Social Proof Bar** — white bg, centered. "Backed by Y Combinator · $3.2M raised · 1,200+ companies · 4.9★ on G2". Inter 600, 14px, muted. Staggered fade-in.

**4. Problem/Solution** — two-column grid. Left: "Without [BRAND_NAME]" with ❌ cards (red-tinted bg). Right: "With [BRAND_NAME]" with ✅ cards (green-tinted bg). Section header: "The old way is broken". Slide-in animations (left from -x, right from +x).

**5. Product Mockup** — large browser-chrome mockup (aspect 16/10, rounded-2xl, perspective tilt). 3 traffic light dots, URL bar, sidebar nav, dashboard grid placeholder. boxShadow: 0 24px 80px rgba(15,23,42,0.08). Perspective entrance animation.

**6. Metrics Bar** — bg-[PRIMARY_COLOR], 4-column grid. Large white numbers (Inter 800, 44px) with colored suffix + muted labels. Counter animation from 0 using basic Framer Motion useInView trigger.

**7. Pricing** — 2 cards (Starter free, Pro $49/mo). Pro card: bg-[PRIMARY_COLOR], "Most Popular" badge, larger shadow. Features with checkmarks. Full-width CTA buttons. Scale-in animation.

**8. Final CTA** — "Join 1,200+ companies building the future". Two buttons: accent-colored primary + text link. Centered.

**9. Footer** — minimal three-part: logo, legal links, copyright.

## Placeholder Variables
[BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT], [STAT_1_VALUE], [STAT_1_LABEL], [STAT_2_VALUE], [STAT_2_LABEL], [STAT_3_VALUE], [STAT_3_LABEL], [STAT_4_VALUE], [STAT_4_LABEL]

## Animation Rules
- All entrance: cubic-bezier(0.23, 1, 0.32, 1), 500-700ms
- Hover: translateY(-1px to -2px) + boxShadow increase, 250ms
- Counter: spring animation on scroll into view
- Stagger children: 0.08-0.1s delay per item
- No flashy effects — this is about confidence and clarity`,

  bolt: `Build a premium YC-style startup landing page using React + Next.js + Tailwind CSS. CSS-only animations (no Framer Motion). Clean, confident, conversion-focused.

**Font:** Inter via Google Fonts — weights 400, 500, 600, 700, 800

## Colors
- Background: #FAFAF8 (warm off-white)
- Primary: [PRIMARY_COLOR] (default #0F172A)
- Accent: [ACCENT_COLOR] (default #3B82F6)
- Text: #0F172A | rgba(15,23,42,0.6) | rgba(15,23,42,0.4)
- Borders: rgba(15,23,42,0.06)
- Cards: #FFFFFF
- Dark section: [PRIMARY_COLOR]

## Animations — CSS Only
Define these @keyframes in a <style> tag:

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes dotPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

Use IntersectionObserver hook (useInView) to trigger animations. When element enters viewport, add animation via inline style: animation: "fadeInUp 0.6s cubic-bezier(0.23,1,0.32,1) forwards". Use animation-delay for staggered children.

Hover transitions: all inline with transition: "all 0.25s cubic-bezier(0.23,1,0.32,1)". onMouseEnter/onMouseLeave for transform and boxShadow changes.

Counter animation: Use requestAnimationFrame with easeOutCubic (1 - Math.pow(1 - t, 3)), duration 1600ms, triggered by useInView.

## Sections

**1. Navbar** — fixed top, transparent → frosted glass on scroll (rgba(250,250,248,0.92) + backdrop-filter: blur(16px)). Logo: 28×28 rounded-lg accent square + "[BRAND_NAME]" Inter 800 20px. Nav links: Inter 500 14px. CTA button: bg-[PRIMARY_COLOR] rounded-lg.

**2. Hero** — min-h-screen centered. Dot pattern accent (8×8 grid, 4px circles, accent, opacity 0.3, dotPulse animation). Status badge with green pulse dot. Headline "[HEADLINE]": Inter 800, clamp(40px,6vw,64px), tracking -0.04em. Subheadline "[SUBHEADLINE]": 18px, muted. Two CTAs: filled primary (shadow: 0 2px 8px rgba(15,23,42,0.12)) + ghost border. fadeInUp with staggered delays (0.1s, 0.2s, 0.35s, 0.5s).

**3. Social Proof** — white bg, centered flex. Items separated by "·". "Backed by Y Combinator · $3.2M raised · 1,200+ companies · 4.9★ on G2". Inter 600 14px muted. Staggered fadeInUp.

**4. Problem/Solution** — two-column grid. Left "Without [BRAND_NAME]": ❌ cards with red tint (rgba(239,68,68,0.03)), slideInLeft staggered. Right "With [BRAND_NAME]": ✅ cards with green tint (rgba(34,197,94,0.03)), slideInRight staggered.

**5. Product Mockup** — browser chrome (3 dots + URL bar), aspect 16/10, rounded-2xl, perspective(1200px) rotateX(2deg) rotateY(-1deg). Shadow: 0 24px 80px rgba(15,23,42,0.08). Dashboard placeholder inside. scaleIn animation.

**6. Metrics** — bg-[PRIMARY_COLOR], 4-col grid. Numbers: Inter 800 44px white, suffix in [ACCENT_COLOR]. Labels: Inter 500 14px rgba(255,255,255,0.5). Counter animation via requestAnimationFrame.

**7. Pricing** — two cards. Starter: white, free. Pro: bg-[PRIMARY_COLOR], $49/mo, "Most Popular" badge (bg-[ACCENT_COLOR], rounded-full, absolute top -12px). Features with ✓ marks. scaleIn staggered.

**8. Final CTA** — "Join 1,200+ companies building the future". Accent-colored primary button (shadow: 0 4px 16px rgba(59,130,246,0.25)). Text link secondary.

**9. Footer** — minimal: logo, legal links, copyright.

## Placeholder Variables
[BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT], [STAT_1_VALUE], [STAT_1_LABEL], [STAT_2_VALUE], [STAT_2_LABEL], [STAT_3_VALUE], [STAT_3_LABEL], [STAT_4_VALUE], [STAT_4_LABEL]

## Key Rules
- ALL styles inline (no external CSS files except @keyframes in <style>)
- "use client" directive at top
- Self-contained single-file component
- No Framer Motion — CSS animations only
- Inter font via Google Fonts import
- Typography: 800 headlines, 400 body, large sizes (48-64px hero)
- Every color as exact hex/rgba, every size in px, every timing in ms with cubic-bezier`,

  lovable: `Build a premium YC-style startup landing page. Clean, confident, conversion-focused. CSS-only animations, simplified structure.

**Stack:** React + Tailwind CSS (no Framer Motion)
**Font:** Inter (Google Fonts) — 400, 600, 700, 800

## Design
- Background: #FAFAF8 (warm off-white)
- Primary: [PRIMARY_COLOR] (#0F172A)
- Accent: [ACCENT_COLOR] (#3B82F6)
- Cards: white with border rgba(15,23,42,0.06)
- Dark section: [PRIMARY_COLOR] for metrics bar

## Simple Animations
Use CSS transitions on hover (transition: all 0.25s ease). Use IntersectionObserver to toggle opacity/transform on scroll.

Hover effects: buttons lift -2px with shadow increase. Links change color.

On-scroll: elements start opacity: 0, translateY(20px), transition to opacity: 1, translateY(0) over 0.5s ease.

Counter: simple requestAnimationFrame from 0 to target in 1.5s.

## Layout (9 sections)

**Navbar:** Fixed top. Logo ("[BRAND_NAME]" + accent square icon). Nav links. "Get Started" dark button. Frosted glass on scroll.

**Hero:** Centered. Small badge ("Now accepting W26 batch applications"). Big headline "[HEADLINE]" (Inter 800, ~56px). Subheadline "[SUBHEADLINE]". Two buttons: dark filled + outlined ghost. Decorative dot grid (subtle).

**Social Proof:** White strip. "Backed by Y Combinator · $3.2M raised · 1,200+ companies". Inter 600, small, muted.

**Problem/Solution:** Two columns. Left: problems with ❌ on light-red cards. Right: solutions with ✅ on light-green cards. Header: "The old way is broken."

**Product Screenshot:** Browser mockup (traffic lights, URL bar, sidebar, dashboard grid). Slight perspective tilt. Large shadow.

**Metrics:** Dark ([PRIMARY_COLOR]) background. 4 big numbers in white + accent suffix. Labels underneath.

**Pricing:** Two cards side by side. Free tier (white) and Pro tier (dark with "Most Popular" badge). Features list with checkmarks. Full-width CTA buttons.

**Final CTA:** "Join 1,200+ companies building the future." Blue primary button + text link.

**Footer:** Logo, legal links, copyright. One line.

## Variables
[BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT], [STAT_1_VALUE], [STAT_1_LABEL], [STAT_2_VALUE], [STAT_2_LABEL], [STAT_3_VALUE], [STAT_3_LABEL], [STAT_4_VALUE], [STAT_4_LABEL]

## Rules
- Single file, "use client", all inline styles
- No external dependencies beyond React + Tailwind
- Inter font from Google Fonts
- Headlines: Inter 800, body: Inter 400
- All colors as hex/rgba, all sizes in px
- Keep it clean and simple — confidence over complexity`,
};
