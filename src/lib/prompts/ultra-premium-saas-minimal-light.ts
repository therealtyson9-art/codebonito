// Ultra Premium Template #103 — SaaS Minimal Light
// 4 platform-specific prompt variants

export const SAAS_MINIMAL_LIGHT_PROMPTS = {
  cursor: `Build a premium minimal light SaaS landing page with the following exact specifications. This template embodies "minimal ≠ boring" — every pixel is intentional, inspired by Linear, Notion, and Stripe marketing pages.

**Stack:** React 18 + Next.js 14 + Tailwind CSS v3 + Framer Motion 11 + TypeScript
**Font:** @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')

## Design Philosophy
Maximum 4 colors: [PRIMARY_COLOR] (default #2563eb), [ACCENT_COLOR] (default #3b82f6), [DARK_COLOR] (#0f172a), and #64748b for secondary text. Background: #fafafa. White sections: #ffffff. Borders: #f1f5f9 and #e2e8f0. This is about RESTRAINT — perfect spacing, perfect typography, perfect color balance. No gradients except the most subtle ones. No shadows except barely-there elevation hints.

## Typography System
- Headlines: Inter 700, tracking: -0.04em (h1), -0.035em (h2), -0.02em (h3)
- Body: Inter 400, line-height: 1.7, color: #64748b
- Small/labels: Inter 500, 13px, letter-spacing: 0.08em (uppercase) or -0.005em (sentence)
- Font smoothing: -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale

## Spacing Scale
Consistent vertical rhythm: 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 100, 120px. Never deviate.

## Navigation Bar
Floating glassmorphism navbar with Framer Motion entrance:
- Position: fixed top-0 w-full z-50, padding: 16px 24px
- Container: max-w-[1120px] mx-auto, border-radius: 14px
- Background: rgba(255, 255, 255, 0.85), backdrop-filter: blur(20px) saturate(1.4)
- Border: 1px solid rgba(0, 0, 0, 0.06)
- Shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)
- Left: Logo mark (24×24 rounded-[6px] div with linear-gradient(135deg, [PRIMARY_COLOR], [ACCENT_COLOR])) + [BRAND_NAME] in Inter 700, 17px, tracking: -0.03em
- Center: Links "Features", "Pricing", "Docs", "Changelog" in Inter 400, 14px, color: #64748b, hover: [DARK_COLOR], gap: 32px
- Right: "Get Started" button — bg: [DARK_COLOR], text: white, Inter 500, 13px, rounded: 8px, padding: 8px 18px
- Framer Motion: initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
- Button hover: whileHover={{ y: -1 }} with backgroundColor: "#1e293b"

## Hero Section
min-h-screen centered content with generous whitespace:
- Padding: 160px top, 120px bottom
- Relative, overflow-hidden

**Background blobs (CSS only, parallax on scroll):**
- Blob 1: position absolute, top 20%, left 25%, 500×500px circle, radial-gradient of [PRIMARY_COLOR] at 8% opacity
- Blob 2: position absolute, top 30%, right 20%, 400×400px circle, radial-gradient of [ACCENT_COLOR] at 6% opacity
- Animate with CSS: @keyframes blob-drift { 0%,100% { transform: scale(1) } 50% { transform: scale(1.08) } } duration 12s ease-in-out infinite

**Badge:** Framer Motion: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
- Pill: padding 6px 14px, rounded-full, bg: [PRIMARY_COLOR]08, border: 1px solid [PRIMARY_COLOR]12
- Green dot (6×6px circle, bg: [PRIMARY_COLOR]) + text "Now in General Availability" Inter 500, 13px, color: [PRIMARY_COLOR]

**Headline:** Framer Motion: initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
- "[HEADLINE]" — Inter 700, 64px, line-height: 1.08, tracking: -0.04em, color: [DARK_COLOR], max-width: 720px
- Highlight word "[HIGHLIGHT_WORD]" in color: [PRIMARY_COLOR]

**Subheadline:** Framer Motion stagger: delay 0.35
- "[SUBHEADLINE]" — Inter 400, 18px, line-height: 1.7, color: #64748b, max-width: 480px, margin-top: 20px

**CTA group:** Two buttons, flex row, gap: 12px, Framer Motion delay 0.5
- Primary: bg [PRIMARY_COLOR], white text, Inter 600, 15px, rounded: 10px, padding: 14px 28px
  - boxShadow: "0 1px 2px rgba(0,0,0,0.05), 0 4px 16px [PRIMARY_COLOR]25"
  - whileHover={{ y: -2, boxShadow: "0 2px 4px rgba(0,0,0,0.08), 0 8px 24px [PRIMARY_COLOR]35" }}
  - whileTap={{ scale: 0.98 }}
  - transition: type: "spring", stiffness: 400, damping: 25
- Secondary: transparent bg, border 1px #e2e8f0, color #64748b, same sizing
  - whileHover={{ y: -2, borderColor: "#cbd5e1", color: [DARK_COLOR] }}

## Logos Bar
Below hero, padding-bottom: 80px:
- Label: "Trusted by forward-thinking teams" — Inter 400, 13px, uppercase, tracking: 0.08em, color: #94a3b8, margin-bottom: 28px
- 5 placeholder logos in a flex row, gap: 48px, centered
- Each logo: 20×20 rounded SVG placeholder + company name in Inter 600, 13px, opacity: 0.35, hover opacity: 0.6, transition 0.3s
- Framer Motion: useInView, stagger children by 0.05s, initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}

## Divider
max-w-[1120px] mx-auto, 1px line, bg: #f1f5f9

## Features Section (alternating left-right)
Padding: 100px vertical, max-w-[1040px]

**Section header:** centered
- Label: Inter 500, 13px, uppercase, tracking: 0.08em, color: [PRIMARY_COLOR], mb: 16px
- Heading: "Everything you need, nothing you don't." — Inter 700, 40px, tracking: -0.035em, color: [DARK_COLOR]
- Subtitle: Inter 400, 16px, color: #64748b, max-w: 440px

**3 feature rows, alternating direction:**
Each row: flex, gap: 80px, align-center, padding: 40px 0
- Odd rows: text left, illustration right
- Even rows: illustration left, text right
- Framer Motion: useInView with once: true, initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}

**Text side:**
- Icon container: 40×40px, rounded: 10px, bg: [PRIMARY_COLOR]08, border: 1px solid [PRIMARY_COLOR]15, center icon
- Title: Inter 700, 24px, tracking: -0.02em, color: [DARK_COLOR], mb: 12px
- Description: Inter 400, 16px, line-height: 1.7, color: #64748b, max-w: 440px, mb: 16px
- Detail link: Inter 500, 13px, color: [PRIMARY_COLOR], with → arrow

**Illustration side:**
- Aspect ratio 4:3, rounded: 16px
- Background: linear-gradient(135deg, #f8fafc, #f1f5f9, #e2e8f0), border: 1px solid #e2e8f0
- SVG grid pattern overlay at 40% opacity (32px grid, stroke: #cbd5e1, strokeWidth: 0.5)
- Center decorative shape: 64×64px with [PRIMARY_COLOR]/[ACCENT_COLOR] gradient fills at low opacity
  - Row 0: rounded-[12px] square
  - Row 1: circle (border-radius: 50%)
  - Row 2: 12px square rotated 45°

## Metrics Section
bg: #ffffff, padding: 100px vertical

**Heading:** "Numbers that speak" — Inter 700, 36px, tracking: -0.035em, centered

**Stats grid:** 4 columns, 1px gap with #f1f5f9 bg (creating thin dividers), rounded: 16px, overflow hidden
Each cell: bg white, padding: 40px 32px, centered
- Number: Inter 700, 40px, tracking: -0.03em, color: [DARK_COLOR]
  - Animated counter: useInView trigger, requestAnimationFrame, 1800ms duration, ease: t => 1 - Math.pow(1 - t, 4)
  - Suffix in color: [PRIMARY_COLOR]
- Label: Inter 400, 13px, uppercase, tracking: 0.02em, color: #94a3b8

Framer Motion: each stat card uses useInView, stagger by 0.1s, initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}

## Testimonial Section
Padding: 100px vertical, max-w: 720px, centered

- Large opening quotation mark: Georgia serif, 64px, color: #e2e8f0
- Quote text: Inter 400, 24px, line-height: 1.6, tracking: -0.02em, color: [DARK_COLOR], mb: 32px
- Avatar: 40×40px circle, gradient bg #e2e8f0 to #cbd5e1, initials in Inter 600, 14px, color: #64748b
- Name: Inter 600, 14px, color: [DARK_COLOR]
- Title: Inter 400, 13px, color: #94a3b8
- Framer Motion: useInView, initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}

## CTA Section
Padding: 120px vertical, centered, max-w: 560px
Background: linear-gradient(180deg, #ffffff 0%, [PRIMARY_COLOR]04 50%, #ffffff 100%)

- Heading: Inter 700, 36px, tracking: -0.035em
- Subtitle: Inter 400, 16px, color: #64748b, mb: 36px
- Same CTA button pair as hero (primary + secondary)
- Fine print: Inter 400, 12px, color: #94a3b8, mt: 16px — "No credit card required · Free for teams up to 10"
- Framer Motion: useInView entrance

## Footer
border-top: 1px solid #f1f5f9, padding: 64px 24px 40px

**Upper:** flex, justify-between, max-w: 1120px
- Brand column: logo + tagline in Inter 400, 13px, color: #94a3b8, max-w: 240px
- 3 link columns (Product, Company, Resources) each with:
  - Column title: Inter 600, 13px, color: [DARK_COLOR], mb: 16px
  - Links: Inter 400, 13px, color: #94a3b8, hover: #64748b, gap: 10px

**Lower:** border-top 1px #f1f5f9, mt: 48px, pt: 24px
- Left: © 2025 [BRAND_NAME] — Inter 400, 12px, color: #cbd5e1
- Right: Privacy, Terms, Cookies links — same style

## Responsive
- < 768px: features stack vertically, stats become 2-col grid, nav links hidden, headline drops to 40px

## Color Variables
- [BRAND_NAME] → company name (default: "Planify")
- [PRIMARY_COLOR] → main brand blue (default: #2563eb)
- [ACCENT_COLOR] → lighter blue (default: #3b82f6)
- [DARK_COLOR] → text dark (default: #0f172a)
- [HEADLINE] → hero headline (default: "Plan smarter. Ship faster.")
- [HIGHLIGHT_WORD] → word to highlight in [PRIMARY_COLOR]
- [SUBHEADLINE] → hero subtitle
- [CTA_TEXT] → primary button text
- [STAT_1_VALUE], [STAT_1_SUFFIX], [STAT_1_LABEL] (repeat for 2-4)
- [FEATURE_1_TITLE], [FEATURE_1_DESC], [FEATURE_1_DETAIL] (repeat for 2-3)
- [TESTIMONIAL_QUOTE], [TESTIMONIAL_NAME], [TESTIMONIAL_TITLE]`,

  v0: `Build a premium minimal light SaaS landing page. Clean, lots of whitespace, inspired by Linear/Stripe. Light mode.

**Stack:** React + Next.js + Tailwind CSS + Framer Motion (simple) + TypeScript
**Font:** @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')

## Design System
Colors: [PRIMARY_COLOR] (#2563eb), [ACCENT_COLOR] (#3b82f6), [DARK_COLOR] (#0f172a), secondary text #64748b. Background #fafafa, white sections #ffffff. Borders #f1f5f9 / #e2e8f0. Max 4 colors total.

## Navigation Bar
Fixed top glassmorphism nav:
- Container: max-w-[1120px] mx-auto, rounded-[14px], bg: white/85, backdrop-blur-xl, border: 1px solid black/6
- Shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)
- Left: gradient logo square (24px, rounded-[6px]) + [BRAND_NAME] Inter 700 17px tracking-[-0.03em]
- Center: 4 nav links, Inter 400 14px, #64748b hover:[DARK_COLOR]
- Right: dark button "Get Started", Inter 500 13px, rounded-lg, px-[18px] py-2
- motion.div: initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}

## Hero Section
min-h-screen, centered, padding-top: 160px, padding-bottom: 120px

**Background:** Two soft radial gradient blobs, very low opacity (6-8%), CSS animated with slow scale pulse (12-15s)

**Badge:** Pill with small colored dot + text "Now in General Availability"
- motion.div: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}

**Headline:** "[HEADLINE]" — Inter 700 64px leading-[1.08] tracking-[-0.04em], max-w: 720px
- Highlight word in [PRIMARY_COLOR]
- motion.h1: initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}

**Subheadline:** Inter 400 18px #64748b, max-w: 480px, mt-5
- motion.p: delay 0.35

**Two CTA buttons:** Primary (bg [PRIMARY_COLOR], white, rounded-[10px], shadow) + Secondary (border #e2e8f0, #64748b)
- motion.div: delay 0.5
- Primary button: whileHover={{ y: -2 }}

## Logos Bar
"Trusted by forward-thinking teams" — 13px uppercase tracking-widest #94a3b8
5 placeholder logos: SVG square + name, opacity 0.35, hover 0.6
motion.div: stagger children 0.05s from useInView

## Features (3 alternating rows)
Section header: "Features" label + "Everything you need, nothing you don't." heading + subtitle
3 rows alternating text/illustration sides, gap: 80px
- Text: icon box + title (Inter 700 24px) + desc (Inter 400 16px #64748b) + detail link
- Illustration: gradient placeholder with grid pattern SVG + center shape
- Each row: motion.div with useInView, initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}

## Metrics (4-column grid)
bg white, "Numbers that speak" heading
Grid with 1px #f1f5f9 dividers (gap trick), rounded-2xl
Each: animated counter (requestAnimationFrame, 1800ms, ease-out quartic) + suffix in [PRIMARY_COLOR] + label

## Testimonial
Large quote mark (Georgia 64px #e2e8f0), quote text (Inter 400 24px), avatar circle with initials, name + title
motion.div: useInView, scale from 0.98

## CTA Section
Subtle gradient bg, heading + subtitle + same button pair + fine print
motion.div: useInView entrance

## Footer
Brand + tagline, 3 link columns (Product, Company, Resources), bottom bar with © and legal links

## Responsive
< 768px: stack features, 2-col stats, hide nav links, headline 40px

## Variables
[BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [DARK_COLOR], [HEADLINE], [HIGHLIGHT_WORD], [SUBHEADLINE], [CTA_TEXT]
[STAT_1_VALUE], [STAT_1_SUFFIX], [STAT_1_LABEL] (×4)
[FEATURE_1_TITLE], [FEATURE_1_DESC], [FEATURE_1_DETAIL] (×3)
[TESTIMONIAL_QUOTE], [TESTIMONIAL_NAME], [TESTIMONIAL_TITLE]`,

  bolt: `Build a premium minimal light SaaS landing page. Use ONLY CSS animations and transitions — no Framer Motion. Inspired by Linear, Notion, Stripe marketing pages.

**Stack:** React + Next.js + Tailwind CSS + TypeScript (NO external animation libraries)
**Font:** @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')

## Required CSS Keyframes
\`\`\`css
@keyframes sml-fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes sml-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes sml-scale-in {
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes sml-blob-drift {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50%      { transform: translate(-50%, -50%) scale(1.08); }
}
\`\`\`

## Scroll Reveal System
Use IntersectionObserver to add a .sml-visible class on elements:
\`\`\`css
.sml-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.sml-reveal.sml-visible {
  opacity: 1;
  transform: translateY(0);
}
\`\`\`
Apply to every section's content. Threshold: 0.15. Once: true.

## Design System
Colors: [PRIMARY_COLOR] (#2563eb), [ACCENT_COLOR] (#3b82f6), [DARK_COLOR] (#0f172a), secondary #64748b. Background #fafafa, sections #ffffff. Borders #f1f5f9 / #e2e8f0. Maximum 4 colors — restraint is the point.

## Typography
- Headlines: Inter 700, tracking: -0.04em (h1) / -0.035em (h2) / -0.02em (h3)
- Body: Inter 400, line-height: 1.7, color: #64748b
- Small: Inter 500, 13px
- -webkit-font-smoothing: antialiased

## Navigation Bar
Fixed top, glassmorphism:
- Container: max-width 1120px, border-radius: 14px, bg: rgba(255,255,255,0.85)
- backdrop-filter: blur(20px) saturate(1.4); -webkit-backdrop-filter: blur(20px) saturate(1.4)
- Border: 1px solid rgba(0,0,0,0.06)
- Box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)
- Logo: 24px gradient square + [BRAND_NAME] Inter 700 17px tracking -0.03em
- 4 links: Inter 400 14px #64748b, hover: [DARK_COLOR], transition: color 0.2s ease
- CTA button: bg [DARK_COLOR], white, Inter 500 13px, rounded 8px, hover: bg #1e293b, translateY(-1px), transition: all 0.2s cubic-bezier(0.16,1,0.3,1)

## Hero
min-height 100vh, centered, padding: 160px top 120px bottom

**Blobs:** Two absolute divs, radial-gradient circles at 6-8% opacity, animation: sml-blob-drift 12s/15s ease-in-out infinite

**Badge:** animation: sml-fade-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both
- Pill: bg [PRIMARY_COLOR]08, border 1px [PRIMARY_COLOR]12, rounded-full
- 6px colored dot + "Now in General Availability" Inter 500 13px [PRIMARY_COLOR]

**Headline:** animation: sml-fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both
- Inter 700 64px line-height 1.08 tracking -0.04em [DARK_COLOR] max-width 720px
- Highlighted word: color [PRIMARY_COLOR]

**Subheadline:** animation: sml-fade-up 0.7s ... 0.35s both
- Inter 400 18px #64748b max-width 480px mt 20px

**CTA pair:** animation: sml-fade-up 0.7s ... 0.5s both
- Primary: bg [PRIMARY_COLOR], white, rounded 10px, py 14px px 28px, box-shadow with [PRIMARY_COLOR] glow
  - Hover: translateY(-2px), enhanced shadow, transition: all 0.25s cubic-bezier(0.16,1,0.3,1)
- Secondary: transparent, border 1px #e2e8f0, #64748b, same sizing
  - Hover: border #cbd5e1, color [DARK_COLOR], translateY(-2px)

## Logos Bar
"Trusted by forward-thinking teams" 13px uppercase tracking 0.08em #94a3b8
5 logo placeholders: SVG rect + name, opacity 0.35, hover 0.6, transition 0.3s

## Features (3 alternating rows)
Header: "Features" label in [PRIMARY_COLOR] + heading Inter 700 40px + subtitle
3 rows: flex, gap 80px, alternate flex-direction row/row-reverse
- Text: 40px icon box + title Inter 700 24px + desc Inter 400 16px + detail link
- Illustration: gradient bg placeholder with SVG grid pattern + center decorative shape
- Each row: .sml-reveal with IntersectionObserver (threshold 0.2)

## Metrics (4-column grid)
White bg, heading "Numbers that speak" Inter 700 36px
Grid: 4 cols, 1px #f1f5f9 gaps (bg color trick), rounded 16px overflow hidden
Each cell: white bg, py 40px, centered
- Animated counter via IntersectionObserver + requestAnimationFrame, 1800ms, easing: 1 - Math.pow(1-t, 4)
- Number: Inter 700 40px [DARK_COLOR], suffix: [PRIMARY_COLOR]
- Label: Inter 400 13px uppercase #94a3b8

## Testimonial
Quote mark Georgia 64px #e2e8f0, quote Inter 400 24px tracking -0.02em
40px avatar circle with gradient + initials, name Inter 600 14px, title Inter 400 13px #94a3b8
.sml-reveal wrapper

## CTA Section
gradient bg (transparent to [PRIMARY_COLOR]04 to transparent)
Heading + subtitle + button pair + fine print
.sml-reveal wrapper

## Footer
Border-top 1px #f1f5f9, max-w 1120px
Brand + tagline + 3 link columns + bottom bar with © and legal links
Links: 13px #94a3b8 hover #64748b

## Responsive
@media (max-width: 768px): features column, stats 2-col, nav links hidden, headline 40px

## Variables
[BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [DARK_COLOR], [HEADLINE], [HIGHLIGHT_WORD], [SUBHEADLINE], [CTA_TEXT]
[STAT_1_VALUE], [STAT_1_SUFFIX], [STAT_1_LABEL] (×4)
[FEATURE_1_TITLE], [FEATURE_1_DESC], [FEATURE_1_DETAIL] (×3)
[TESTIMONIAL_QUOTE], [TESTIMONIAL_NAME], [TESTIMONIAL_TITLE]`,

  lovable: `Build a premium minimal light SaaS landing page. CSS transitions only. Focus on layout, typography, and spacing perfection. Inspired by Linear, Stripe, Notion marketing pages.

**Stack:** React + Tailwind CSS + TypeScript (single component, no external animation libraries)
**Font:** Add to <head>: <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

## Design System
Background: #fafafa. White sections: #ffffff. Text: [DARK_COLOR] (#0f172a), secondary: #64748b. Primary: [PRIMARY_COLOR] (#2563eb). Borders: #f1f5f9. Max 4 colors. The magic is restraint and perfect spacing.

## Typography
- h1: Inter 700, 64px, line-height 1.08, letter-spacing -0.04em
- h2: Inter 700, 36-40px, line-height 1.2, letter-spacing -0.035em
- h3: Inter 700, 24px, letter-spacing -0.02em
- Body: Inter 400, 16-18px, line-height 1.7, color #64748b
- Small: Inter 500, 13px
- Apply: -webkit-font-smoothing: antialiased

## Spacing
Vertical padding between sections: 100-120px. Internal gaps follow 8px scale: 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px.

## CSS Keyframes
\`\`\`css
@keyframes sml-fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes sml-blob-drift {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}
\`\`\`

## Scroll Reveal (IntersectionObserver)
Create a simple hook: watch elements with .sml-reveal class, add .sml-visible when in viewport (threshold 0.15, once).
\`\`\`css
.sml-reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
.sml-reveal.sml-visible { opacity: 1; transform: translateY(0); }
\`\`\`

## Navigation
Fixed top glassmorphism bar:
- Container: max-width 1120px, border-radius 14px, padding 12px 24px
- Background: rgba(255,255,255,0.85), use inline style for backdropFilter: 'blur(20px) saturate(1.4)'
- Border: 1px solid rgba(0,0,0,0.06), subtle shadow
- Logo: 24px rounded gradient square + [BRAND_NAME] in Inter 700 17px
- 4 nav links in Inter 400 14px #64748b, hover color [DARK_COLOR]
- Dark CTA button: [DARK_COLOR] bg, white text, 13px, rounded 8px
- All hovers: transition: all 0.2s ease

## Hero
min-height 100vh, centered, padding-top 160px

**Background:** Two soft radial gradient circles at very low opacity, slow CSS animation

**Badge:** pill with colored dot + text, animation: sml-fade-up 0.6s ease 0.1s both

**Headline:** "[HEADLINE]" with one highlighted word in [PRIMARY_COLOR]
- animation: sml-fade-up 0.7s ease 0.2s both

**Subheadline:** Inter 400 18px #64748b, max-width 480px
- animation: sml-fade-up 0.7s ease 0.35s both

**Buttons:** Primary + Secondary, animation: sml-fade-up 0.7s ease 0.5s both
- Primary: [PRIMARY_COLOR] bg, white, rounded 10px, padding 14px 28px, subtle shadow
  - Hover via JS onMouseEnter: translateY(-2px), enhanced shadow
- Secondary: border #e2e8f0, #64748b, same sizing
  - Hover: border #cbd5e1, color [DARK_COLOR]

## Logos Bar
"Trusted by forward-thinking teams" small label above 5 placeholder logos
Each: small SVG icon + company name at low opacity, hover brightens

## Features Section
"Features" label + "Everything you need, nothing you don't." heading
3 alternating left-right rows (text + illustration), gap 80px
- Text side: icon in a light box, title, description, detail link with arrow
- Illustration: light gradient bg with grid pattern, decorative center shape
- .sml-reveal on each row
- Responsive: stack vertically below 768px

## Metrics
White bg section, "Numbers that speak" heading
4-column grid with thin dividers (1px gap with #f1f5f9 bg)
Each stat: animated counter (IntersectionObserver + requestAnimationFrame, 1800ms, ease-out)
- Number: Inter 700 40px, suffix colored [PRIMARY_COLOR]
- Label: 13px uppercase #94a3b8

## Testimonial
Large quote mark, quote text at 24px, avatar with initials, name + title
Centered, .sml-reveal wrapper

## CTA Section
Very subtle gradient bg, heading + subtitle + button pair + "No credit card required" fine print

## Footer
border-top, brand + tagline + 3 link columns + bottom legal bar
All links: 13px, #94a3b8, hover #64748b

## Responsive
@media (max-width: 768px):
- Features: flex-direction column, gap 32px
- Stats grid: 2 columns
- Nav links: display none
- Headline: 40px

## Variables
[BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [DARK_COLOR]
[HEADLINE], [HIGHLIGHT_WORD], [SUBHEADLINE], [CTA_TEXT]
[STAT_1_VALUE], [STAT_1_SUFFIX], [STAT_1_LABEL] (repeat ×4)
[FEATURE_1_TITLE], [FEATURE_1_DESC], [FEATURE_1_DETAIL] (repeat ×3)
[TESTIMONIAL_QUOTE], [TESTIMONIAL_NAME], [TESTIMONIAL_TITLE]`,
};

export type SaasMinimalLightPlatform = keyof typeof SAAS_MINIMAL_LIGHT_PROMPTS;
