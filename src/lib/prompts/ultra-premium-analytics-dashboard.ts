// Ultra Premium Template #107 — Analytics Dashboard / SaaS
// 4 platform-specific prompt variants

export const ANALYTICS_DASHBOARD_PROMPTS = {
  cursor: `Build a premium analytics dashboard landing page with the following exact specifications. This must look like a Mixpanel/Amplitude/PostHog-level marketing site where the product IS the design.

**Stack:** React 18 + Next.js 14 + Tailwind CSS v3 + Framer Motion 11 + TypeScript
**Fonts:** @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap')

## Color System
- Background: #0C0C14
- Primary: [PRIMARY_COLOR] (default: #8B5CF6, violet)
- Accent: [ACCENT_COLOR] (default: #3B82F6, blue)
- Text primary: #f8fafc
- Text secondary: rgba(148,163,184,0.8)
- Text muted: rgba(148,163,184,0.5)
- Border: rgba(139,92,246,0.1)
- Border hover: rgba(139,92,246,0.3)
- Glass bg: rgba(255,255,255,0.03)
- Glass blur: blur(20px) saturate(1.5)
- Live indicator: #22c55e with box-shadow: 0 0 8px rgba(34,197,94,0.6)

## Navigation Bar
Floating glassmorphism navbar:
- Position: fixed top-0 left-0 right-0 z-50
- Container: max-width 1200px mx-auto mt-3 px-7 py-3.5
- Background: rgba(12,12,20,0.7) with backdropFilter: blur(24px) saturate(1.5)
- Border: 1px solid rgba(139,92,246,0.1), border-radius: 16px
- Left: [BRAND_NAME] in Inter 900, text-xl, letter-spacing: -0.04em
  - Apply gradient text: background: linear-gradient(135deg, [PRIMARY_COLOR], [ACCENT_COLOR])
  - Use -webkit-background-clip: text, -webkit-text-fill-color: transparent
- Center: Links for 'Features', 'Integrations', 'Pricing', 'Docs' in Inter 500 text-sm text-white/60
  - hover: text-white transition: color 0.2s ease
- Right: "[CTA_TEXT]" button
  - bg-[PRIMARY_COLOR] text-white rounded-full px-5 py-2.5 text-sm font-semibold
  - Framer Motion: whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.4)" }}
  - whileTap={{ scale: 0.97 }}

## Grid Background
Full-screen SVG pattern behind hero:
- SVG <pattern> element: 48x48 grid lines, stroke [PRIMARY_COLOR] strokeWidth 0.5 opacity 0.5
- Apply radial gradient mask so grid fades to transparent at edges
- Position: absolute inset-0, opacity: 0.15, pointer-events: none

## Floating Gradient Orbs
Two radial gradient circles behind hero:
- Orb 1: top 10% left 20%, 500px, rgba(139,92,246,0.12), blur(80px), float animation 8s
- Orb 2: top 30% right 15%, 400px, rgba(59,130,246,0.1), blur(80px), float animation 10s delay 2s

## Hero Section
min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden

**Status Badge:** Above headline
- display: inline-flex, align-items: center, gap: 0.5rem
- bg: rgba(139,92,246,0.08), border: 1px solid rgba(139,92,246,0.2), rounded-full, px-4 py-1.5
- Green dot: w-2 h-2 rounded-full bg-green-500 with box-shadow: 0 0 8px rgba(34,197,94,0.6), animation: pulse 2s infinite
- Text: "Live Analytics — 2.4M events/day" in text-xs font-semibold uppercase tracking-[0.06em] text-[PRIMARY_COLOR]
- Framer Motion: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}

**Headline:** "[HEADLINE]"
- Default: "See everything. Miss nothing."
- Font: Inter 900, clamp(2.8rem, 7vw, 5.5rem), tracking: -0.04em, leading: 1.05
- Animated gradient text: background: linear-gradient(135deg, #f8fafc 0%, [PRIMARY_COLOR] 60%, [ACCENT_COLOR] 100%)
  - background-size: 200% 200%
  - @keyframes gradient-shift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
  - animation: gradient-shift 6s ease-in-out infinite
  - -webkit-background-clip: text, -webkit-text-fill-color: transparent
- Framer Motion: initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}

**Subheadline:** "[SUBHEADLINE]"
- Default: "Real-time analytics that turn raw data into revenue. Track every session, every conversion, every dollar — without the complexity."
- clamp(1rem, 2vw, 1.25rem) text-[rgba(148,163,184,0.8)] max-w-[560px] leading-relaxed
- Framer Motion: delay 0.6

**CTA Group:**
- Primary: "[CTA_TEXT]" (default "Start Free Trial")
  - background: linear-gradient(135deg, [PRIMARY_COLOR], [ACCENT_COLOR])
  - rounded-full px-9 py-3.5 text-base font-bold
  - box-shadow: 0 4px 30px rgba(139,92,246,0.3)
  - whileHover: scale 1.05, shadow 0 8px 40px rgba(139,92,246,0.5)
- Secondary: "▶ Watch demo" link, text-white/60 hover:text-white

## Dashboard Preview Section
max-w-[1100px] mx-auto, glassmorphism container with:
- grid: 200px sidebar + 1fr main
- border-radius: 20px
- box-shadow: 0 0 80px rgba(139,92,246,0.08)

**Sidebar:**
- [BRAND_NAME] logo top, gradient text
- Nav items: Dashboard (active), Analytics, Users, Events, Experiments, Settings
- Active: bg rgba(139,92,246,0.1), left border 2px solid [PRIMARY_COLOR]

**Metric Cards (3-column grid):**
- [STAT_SESSIONS] (default "24,831"), [STAT_CONVERSION] (default "4.72%"), [STAT_REVENUE] (default "$1,284K")
- Each card: glassmorphism panel, label uppercase text-xs, value text-3xl font-extrabold tabular-nums
- Sparkline SVG below each value (polyline, strokeDasharray 200, draw animation 1.5s)
- Green live dot pulsing in top-right corner

**Bar Chart:**
- 12 bars representing monthly data, CSS-only
- Each bar: linear-gradient(180deg, [PRIMARY_COLOR], [ACCENT_COLOR])
- border-radius: 4px 4px 0 0
- transformOrigin: bottom, animation: scaleY 0.6s cubic-bezier(0.23,1,0.32,1) with stagger delay i*0.07s
- Trigger on scroll (IntersectionObserver threshold 0.3)

**Table:**
- 5 rows of page analytics data
- Columns: Page, Visitors, Bounce, Conv., Trend arrow
- Subtle row borders rgba(139,92,246,0.04)
- tabular-nums on numeric columns

## Features Section — Bento Grid
- 4-column grid, gap: 16px
- 6 feature cards with varying spans (2-col and 1-col)
- Each card: glassmorphism, 28px padding, border-radius: 18px
- Hover: border-color rgba(139,92,246,0.3), box-shadow 0 0 40px rgba(139,92,246,0.08)
- Two cards include mini-visualizations:
  - **Donut chart:** SVG circle r=40, strokeDasharray 251, animated strokeDashoffset from 251→75, "70%" text center
  - **Line chart:** SVG path with cubic bezier, strokeDasharray 300, draw animation 1.8s
- Staggered reveal: delay i*0.08s per card

## Integrations — Horizontal Scroll
- "Connect your stack" heading
- Horizontal auto-scrolling strip: animation: scroll-x 30s linear infinite
- Duplicate items for seamless loop
- Each integration: glassmorphism pill with initial letter avatar + name
- Fade edges: left/right gradients from BG to transparent, z-2, pointer-events none

## Social Proof
- "Trusted by data teams at" subtitle, uppercase, tracking wide
- Company name placeholders in text: fontWeight 800, color rgba(148,163,184,0.25)
- hover: color rgba(148,163,184,0.5)
- Display flex, gap 48px, center

## Pricing Section — 3 Tiers
- Grid: repeat(3, 1fr), gap 20px
- Starter ($0/mo), Growth ($79/mo, highlighted), Enterprise (Custom)
- Highlighted tier: border rgba(139,92,246,0.4), box-shadow 0 0 60px rgba(139,92,246,0.12), "Popular" badge
- Features list with [PRIMARY_COLOR] checkmarks
- CTA button: highlighted = gradient bg, others = rgba(139,92,246,0.1) + border
- Price: text-5xl font-black tabular-nums

## Footer
- border-top: 1px solid rgba(139,92,246,0.06)
- 4-column grid: brand+desc, Product links, Company links, Resources links
- Bottom bar: copyright + Privacy/Terms/Security links
- All links: text-[rgba(148,163,184,0.5)] hover:text-white

## Animations Summary
- Scroll-triggered fade-in: opacity 0→1, translateY 40→0, cubic-bezier(0.23,1,0.32,1), IntersectionObserver threshold 0.15
- Bar chart: scaleY(0→1) from bottom, stagger 0.07s per bar
- Counters: animated count-up 2.2s with easeOutQuart
- Sparklines: strokeDashoffset 200→0, 1.5s
- Donut: strokeDashoffset 251→75, 1.2s
- Line chart: strokeDashoffset 300→0, 1.8s
- Live dots: pulse animation 2s infinite
- Gradient headline: background-position shift 6s infinite
- Floating orbs: translateY(0→-8px) 8-10s infinite
- Integration scroll: translateX 30s linear infinite

## Typography
- font-family: 'Inter', system-ui, -apple-system, sans-serif
- All data/numbers: fontVariantNumeric: "tabular-nums"
- letter-spacing: headings -0.03 to -0.04em, labels 0.05-0.1em`,

  v0: `Create an analytics dashboard marketing page. Dark theme (#0C0C14 background), violet (#8B5CF6) and blue (#3B82F6) accents. Use Inter font throughout.

STRUCTURE:
1. NAVBAR — Fixed glassmorphism bar (rgba(12,12,20,0.7), backdrop-blur 24px). Logo "[BRAND_NAME]" with gradient text (violet→blue). Links: Features, Integrations, Pricing, Docs. CTA button "[CTA_TEXT]" violet rounded-full.

2. HERO — Full viewport, centered. Animated SVG grid background (48px pattern, violet lines, radial mask fade). Two floating gradient orbs (violet + blue, blur 80px, float animation). Status badge with green pulsing dot + "Live Analytics — 2.4M events/day". Headline "[HEADLINE]" (default "See everything. Miss nothing.") in animated gradient text (white→violet→blue, shifting 6s). Subheadline "[SUBHEADLINE]". CTA gradient button + "Watch demo" link.

3. DASHBOARD PREVIEW — Large glassmorphism panel, 200px sidebar + main area. Sidebar: [BRAND_NAME] logo, nav items (Dashboard active, Analytics, Users, Events, Experiments, Settings). Main: 3 metric cards ([STAT_SESSIONS]="24,831", [STAT_CONVERSION]="4.72%", [STAT_REVENUE]="$1,284K") with animated count-up, sparkline SVGs, pulsing live dots. 12-bar chart with staggered grow animation on scroll. 5-row analytics table (page, visitors, bounce, conv, trend arrow).

4. FEATURES — Bento 4-col grid. 6 cards mixing text + mini-visualizations (SVG donut chart animating fill to 70%, SVG line chart with draw animation). Staggered reveal on scroll.

5. INTEGRATIONS — "Connect your stack". Auto-scrolling horizontal strip (30s loop) with glassmorphism pills showing integration names (Stripe, Segment, Slack, Snowflake, BigQuery, PostgreSQL, Salesforce, HubSpot, Shopify, Vercel, AWS, Zapier). Fade edges with BG gradients.

6. SOCIAL PROOF — "Trusted by data teams at" with company name placeholders in muted text.

7. PRICING — 3 tiers: Starter $0/mo, Growth $79/mo (highlighted with "Popular" badge + violet border glow), Enterprise Custom. Feature lists with violet checkmarks.

8. FOOTER — 4-col: brand+desc, Product, Company, Resources links. Bottom bar with copyright.

STYLING:
- All glassmorphism: rgba(255,255,255,0.03) bg, blur(20px), 1px solid rgba(139,92,246,0.1), border-radius 16px
- Hover on cards: border-color rgba(139,92,246,0.3), box-shadow 0 0 40px rgba(139,92,246,0.08)
- All numbers: fontVariantNumeric tabular-nums
- Animations: IntersectionObserver scroll triggers, no external animation library needed
- No images or external assets — everything CSS/SVG`,

  bolt: `# Analytics Dashboard Landing Page

## Overview
Premium dark-themed analytics SaaS landing page inspired by Mixpanel/PostHog/Amplitude. The product (dashboard) IS the hero visual.

## Tech
React + Tailwind CSS. No external animation libraries. All animations CSS + IntersectionObserver.

## Colors
\`\`\`
bg: #0C0C14
primary: [PRIMARY_COLOR] (#8B5CF6 violet)
accent: [ACCENT_COLOR] (#3B82F6 blue)
text: #f8fafc
text-secondary: rgba(148,163,184,0.8)
text-muted: rgba(148,163,184,0.5)
glass-bg: rgba(255,255,255,0.03)
glass-border: rgba(139,92,246,0.1)
live-green: #22c55e
\`\`\`

## Font
Inter (400,500,600,700,900). All numeric data uses \`font-variant-numeric: tabular-nums\`.

## Sections

### 1. Navbar
Fixed glassmorphism (rgba(12,12,20,0.7), backdrop-blur 24px, border-radius 16px). Logo "[BRAND_NAME]" gradient text. Nav links (Features, Integrations, Pricing, Docs). CTA "[CTA_TEXT]" button violet rounded-full.

### 2. Hero
Full viewport centered. Background: SVG grid pattern (48px, violet strokes, radial mask). Two gradient orbs (violet + blue, blur 80px, floating animation). Status badge: green pulsing dot + "Live Analytics — 2.4M events/day". Headline "[HEADLINE]" (default "See everything. Miss nothing.") animated gradient text. Subheadline "[SUBHEADLINE]". CTA gradient button + "Watch demo" link.

### 3. Dashboard Preview
Glassmorphism container 1100px max, grid 200px+1fr. Sidebar with nav items (active state: violet left border + bg). Main content:
- **3 metric cards**: [STAT_SESSIONS], [STAT_CONVERSION], [STAT_REVENUE] with animated counters (2.2s easeOutQuart), sparkline SVGs (draw animation), pulsing green live dots
- **12-bar chart**: CSS bars with linear-gradient(180deg, violet, blue), scaleY animation from bottom, stagger 0.07s/bar, trigger on scroll
- **5-row table**: Page analytics with page name, visitors, bounce rate, conversion, trend arrows

### 4. Features Bento Grid
4-column grid, 6 cards with varying spans. Glassmorphism cards with hover glow. Two cards include:
- SVG donut chart (circle r=40, dash animation 251→75, "70%" center text)
- SVG line chart (path with draw animation 300→0, 1.8s)
Staggered reveal delay 0.08s/card.

### 5. Integrations
"Connect your stack" heading. Horizontal auto-scroll strip (CSS animation 30s linear infinite). Glassmorphism pills with letter avatars + names. Duplicate items for seamless loop. Fade edges with BG gradients.

### 6. Social Proof
"Trusted by data teams at" + muted company name placeholders. Hover brightens text.

### 7. Pricing
3-col grid. Starter $0/mo, Growth $79/mo (highlighted: violet border, shadow glow, "Popular" badge), Enterprise Custom. Feature lists with violet checkmarks. CTAs: highlighted = gradient, others = transparent + border.

### 8. Footer
4-col grid: brand+desc, Product links, Company links, Resources links. Bottom bar: copyright + legal links.

## CSS Keyframes Needed
\`\`\`css
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
@keyframes bar-grow { from{transform:scaleY(0)} to{transform:scaleY(1)} }
@keyframes sparkline-draw { from{stroke-dashoffset:200} to{stroke-dashoffset:0} }
@keyframes float { 0%,100%{translateY(0)} 50%{translateY(-8px)} }
@keyframes scroll-x { 0%{translateX(0)} 100%{translateX(-50%)} }
@keyframes gradient-shift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
@keyframes donut-fill { from{stroke-dashoffset:251} to{stroke-dashoffset:75} }
@keyframes line-draw { from{stroke-dashoffset:300} to{stroke-dashoffset:0} }
\`\`\`

## Variables
- [BRAND_NAME] = "Metrik"
- [PRIMARY_COLOR] = "#8B5CF6"
- [ACCENT_COLOR] = "#3B82F6"
- [HEADLINE] = "See everything. Miss nothing."
- [SUBHEADLINE] = "Real-time analytics that turn raw data into revenue..."
- [CTA_TEXT] = "Start Free Trial"
- [STAT_SESSIONS] = "24,831"
- [STAT_CONVERSION] = "4.72%"
- [STAT_REVENUE] = "$1,284K"`,

  lovable: `Build an analytics dashboard landing page for [BRAND_NAME] (default "Metrik").

DESIGN DIRECTION: Think Mixpanel meets Vercel. Dark, data-dense, the dashboard IS the hero. Ultra-premium SaaS vibes.

PALETTE: Background #0C0C14. Primary [PRIMARY_COLOR] (#8B5CF6 violet). Accent [ACCENT_COLOR] (#3B82F6 blue). Text #f8fafc. Muted text rgba(148,163,184,0.5-0.8). Glassmorphism: rgba(255,255,255,0.03) bg + blur(20px) + 1px solid rgba(139,92,246,0.1).

FONT: Inter all weights. Numbers always tabular-nums.

PAGE FLOW:

1) NAVBAR — Floating glass bar, logo "[BRAND_NAME]" gradient text (violet→blue), nav links (Features/Integrations/Pricing/Docs), CTA "[CTA_TEXT]" violet pill button.

2) HERO — Fullscreen centered. SVG grid background (48px violet lines, radial fade mask). Floating gradient orbs (violet + blue, blur 80px). Status badge with pulsing green dot "Live Analytics — 2.4M events/day". Giant headline "[HEADLINE]" ("See everything. Miss nothing.") with animated gradient text shifting white→violet→blue. Subheadline "[SUBHEADLINE]". Gradient CTA button + "Watch demo" link.

3) DASHBOARD PREVIEW — The wow moment. Large glass container (1100px max). Left sidebar with [BRAND_NAME] + nav items. Main area has:
- 3 metric cards: sessions ([STAT_SESSIONS]="24,831"), conversion ([STAT_CONVERSION]="4.72%"), revenue ([STAT_REVENUE]="$1,284K"). Animated count-up. Sparkline SVGs. Pulsing live indicators.
- 12-bar chart: violet→blue gradient bars growing from bottom on scroll, staggered 0.07s each
- 5-row data table: page paths, visitors, bounce %, conversion %, trend arrows (green up / red down)

4) FEATURES — 4-col bento grid, 6 cards (some span 2 cols). Glass cards with hover glow. Two cards embed mini-visualizations: SVG donut chart (animated to 70%) and SVG line chart (draw animation). Staggered scroll reveal.

5) INTEGRATIONS — "Connect your stack" + auto-scrolling horizontal strip of glass pills (Stripe, Segment, Slack, Snowflake, BigQuery, PostgreSQL, etc). Duplicated for loop. Edge fade gradients.

6) SOCIAL PROOF — "Trusted by data teams at" + muted company placeholders. Hover brightens.

7) PRICING — 3 tiers side by side: Starter free, Growth $79/mo (highlighted: violet border glow + "Popular" badge), Enterprise custom. Violet checkmark feature lists.

8) FOOTER — 4-col: brand desc, Product links, Company links, Resources links. Bottom bar with legal.

ANIMATIONS: All CSS + IntersectionObserver. Bar chart scaleY from bottom. Counter count-up 2.2s. Sparkline stroke-dashoffset draw. Donut fill animation. Line chart draw. Pulsing live dots. Floating orbs. Gradient text shift. Integration scroll. Staggered card reveals. No Framer Motion needed.

CONSTRAINTS: Self-contained single page component. No external images. All visualizations pure CSS/SVG. No libraries beyond React + Tailwind.`,
};
