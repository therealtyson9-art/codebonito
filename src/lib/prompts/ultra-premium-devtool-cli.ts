// Ultra Premium Template #106 — DevTool CLI Product
// 4 platform-specific prompt variants

export const DEVTOOL_CLI_PROMPTS = {
  cursor: `Build a premium developer tool / CLI product landing page with the following exact specifications. This must look like a Vercel/Railway/Warp-level marketing site. Dark, code-centric, terminal-focused.

**Stack:** React 18 + Next.js 14 + Tailwind CSS v3 + Framer Motion 11 + TypeScript
**Fonts:** @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap')

## Color System
- Background: #09090B
- Primary: [PRIMARY_COLOR] (default: #10B981, emerald)
- Accent: [ACCENT_COLOR] (default: #06B6D4, cyan)
- Text primary: #f8fafc
- Text secondary: rgba(148,163,184,0.8)
- Text muted: rgba(148,163,184,0.5)
- Border: rgba(16,185,129,0.08)
- Border hover: rgba(16,185,129,0.3)
- Glass bg: rgba(255,255,255,0.02)
- Terminal bg: rgba(0,0,0,0.6)

## Navigation Bar
Floating glassmorphism navbar:
- Position: fixed top-0 left-0 right-0 z-50
- Container: max-w-[1200px] mx-auto mt-3 px-7 py-3.5
- Background: rgba(9,9,11,0.7) with backdropFilter: blur(24px) saturate(1.5)
- Border: 1px solid rgba(16,185,129,0.08), border-radius: 16px
- Left: [BRAND_NAME] in JetBrains Mono 700, text-lg, letter-spacing: -0.04em
  - Apply gradient text: background: linear-gradient(135deg, [PRIMARY_COLOR], [ACCENT_COLOR])
  - Use -webkit-background-clip: text, -webkit-text-fill-color: transparent
- Right: Links for "Docs", "GitHub" in Inter 500 text-sm text-white/60
  - hover: text-white, transition: color 0.2s ease
- Entire nav: motion.nav with initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}

## Dot Grid Background
Full-screen SVG pattern behind hero:
- SVG with <pattern> element: 32x32 grid, each dot is a <circle> r=1 fill="rgba(16,185,129,0.15)"
- Apply radial gradient mask so dots fade to transparent at edges
- Position: absolute inset-0, opacity: 0.4, pointer-events: none

## Hero Section
min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden

**Status Badge:** Above headline
- display: inline-flex, align-items: center, gap: 0.5rem
- bg: rgba(16,185,129,0.08), border: 1px solid rgba(16,185,129,0.2), rounded-full, px-4 py-1.5
- Green dot: w-1.5 h-1.5 rounded-full bg-[PRIMARY_COLOR] with box-shadow: 0 0 8px rgba(16,185,129,0.5)
- Text: "v2.4.0 — Now with Edge Functions" in JetBrains Mono text-xs font-semibold uppercase tracking-[0.08em] text-[PRIMARY_COLOR]
- Framer Motion: initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.6, delay: 0.1 }}

**Headline:** "[HEADLINE]" (default: "Ship faster.\\nDeploy instantly.")
- Font: JetBrains Mono 700, clamp(2.5rem, 7vw, 5rem), tracking: -0.05em, leading: 1.05
- Line 1: color #f8fafc
- Line 2: Apply gradient: background: linear-gradient(135deg, [PRIMARY_COLOR], [ACCENT_COLOR])
  - -webkit-background-clip: text, -webkit-text-fill-color: transparent
- Framer Motion: initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}

**Subheadline:** "[SUBHEADLINE]" (default: "The CLI that replaces your entire deployment pipeline. Build, preview, and ship to the edge — all from your terminal.")
- Inter 400, clamp(1rem, 2.5vw, 1.35rem), color: rgba(148,163,184,0.8)
- max-w-[560px] mx-auto mt-5 leading-relaxed tracking: -0.01em
- Framer Motion: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}

**Install Bar:** Below subheadline, mt-10
- display: inline-flex, align-items: center, gap: 12px
- bg: rgba(255,255,255,0.04), border: 1px solid rgba(16,185,129,0.15), rounded-xl, px-5 py-3
- JetBrains Mono 14px, color: rgba(255,255,255,0.8)
- Left: "$" in text-muted color
- Center: "npm install -g [BRAND_NAME_SLUG]"
- Right: Copy button — on click copies to clipboard, shows "✓ Copied!" for 2s
- hover: border-color rgba(16,185,129,0.4), bg rgba(255,255,255,0.06)
- Framer Motion: whileHover={{ scale: 1.02 }}, whileTap={{ scale: 0.98 }}

**Animated Terminal:** Below install bar, mt-12
- max-w-[640px], bg: rgba(0,0,0,0.6), border: 1px solid rgba(16,185,129,0.2), rounded-2xl
- box-shadow: 0 25px 80px rgba(0,0,0,0.5), 0 0 60px rgba(16,185,129,0.08)
- **Title bar:** flex items-center gap-1.5, py-3 px-4, bg rgba(255,255,255,0.03), border-bottom 1px solid rgba(255,255,255,0.06)
  - 3 dots: 10x10px circles, colors #ff5f57, #febc2e, #28c840
  - Right side: "terminal" in JetBrains Mono 11px text-white/40
- **Body:** px-5 py-5, JetBrains Mono 13px, line-height: 1.7, min-h: 260px
- **Typing Animation (useEffect + setInterval):**
  - 3 sequential steps, each types out a command char-by-char then shows output:
    1. "$ npm install -g [BRAND_NAME_SLUG]" → output: "added 1 package in 2.1s"
    2. "$ [BRAND_SLUG] init my-project" → output: "✔ Template selected: typescript-api" / "✔ Dependencies installed" / "✔ Git initialized" / "→ Project ready at ./my-project"
    3. "$ [BRAND_SLUG] deploy --prod" → output: "▸ Building..." / "▸ Optimizing assets..." / "✔ Deployed to https://my-project.[BRAND_SLUG].sh" / "🚀 Live in 4.2s"
  - Prompt "$" in [PRIMARY_COLOR], command text in #e2e8f0
  - "✔" lines in [PRIMARY_COLOR], "→" lines in [ACCENT_COLOR], other output in rgba(148,163,184,0.8)
  - Blinking cursor "█" during typing: animation: blink 1s step-end infinite
  - Auto-scroll container as new lines appear

## Stats Section
py-16, border-top/bottom: 1px solid rgba(255,255,255,0.04)
- Grid: 3 columns, max-w-[900px] mx-auto, text-center
- Each stat:
  - Value: JetBrains Mono 700, clamp(2rem, 4vw, 3rem), color: [PRIMARY_COLOR]
  - Label: Inter 14px, color: rgba(148,163,184,0.6), uppercase, tracking-[0.05em]
- [STAT_1]: 847K npm downloads
- [STAT_2]: 12.4K GitHub stars
- [STAT_3]: 99.9% uptime
- Counter animation: IntersectionObserver triggers requestAnimationFrame counter from 0 to target over 2.2s with easeOutQuart

## Features Section — 3 Column Grid with Code Snippets
py-24

**Section Header:**
- Tag: JetBrains Mono uppercase text-xs tracking-[0.1em] font-semibold text-[ACCENT_COLOR]
- Title: JetBrains Mono 700, clamp(1.75rem, 4vw, 2.75rem), tracking: -0.04em, text-white
- Subtitle: Inter 16px text-white/60 max-w-[480px] mx-auto

**Grid:** max-w-[1100px] mx-auto, grid grid-cols-3, gap-5

**Each Feature Card:**
- bg: rgba(255,255,255,0.02), border: 1px solid rgba(16,185,129,0.1), rounded-2xl, p-7
- Hover: border-color rgba(16,185,129,0.3), bg rgba(16,185,129,0.04), translateY(-4px)
  - box-shadow: 0 20px 60px rgba(16,185,129,0.08)
- transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1)
- Content:
  - Title: JetBrains Mono 700, 18px, #f8fafc, tracking: -0.02em
  - Desc: Inter 14px, rgba(148,163,184,0.7), line-height: 1.6
  - Code snippet: bg rgba(0,0,0,0.4), rounded-lg, p-3.5, JetBrains Mono 12px, line-height: 1.7
    - border: 1px solid rgba(255,255,255,0.05)
    - Inline syntax highlighting:
      - Keys/identifiers: #e5c07b
      - Strings: #98c379
      - Numbers: #d19a66
      - Comments/prompts: rgba(148,163,184,0.5)
      - Success "✔": [PRIMARY_COLOR]
      - URLs: [ACCENT_COLOR]
- Framer Motion: useInView trigger, initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
  - Stagger: delay: index * 0.1

## CLI Showcase — Before vs After
py-24

**Section Header:** Same pattern as Features

**Side-by-side terminals:** grid grid-cols-2, gap-6, max-w-[1000px] mx-auto

**"Before" terminal (left):**
- border: 1px solid rgba(239,68,68,0.15), rounded-2xl
- Title bar: bg rgba(239,68,68,0.05), label "without [BRAND_SLUG]" in rgba(239,68,68,0.6)
- Body: 5 manual commands in rgba(148,163,184,0.6), prompt "$" in rgba(239,68,68,0.5)
- Footer: "⏱ ~8 minutes, 5 commands" in rgba(148,163,184,0.3) 11px

**"After" terminal (right):**
- border: 1px solid rgba(16,185,129,0.2), rounded-2xl
- Title bar: bg rgba(16,185,129,0.05), label "with [BRAND_SLUG]" in [PRIMARY_COLOR]
- Body: 1 command + output with colored results
- Footer: "⚡ 4.2 seconds, 1 command" in [PRIMARY_COLOR] 11px

## Integrations — Logo Grid
py-24

**Section Header:** Same pattern

**Grid:** 6 columns, max-w-[800px] mx-auto, gap-5
- Each card: flex flex-col items-center, gap: 10px, p-6
  - bg: rgba(255,255,255,0.02), border: 1px solid rgba(255,255,255,0.06), rounded-xl
  - hover: border-color rgba(16,185,129,0.3), bg rgba(16,185,129,0.04), translateY(-2px)
  - SVG icon: 28x28, fill: rgba(255,255,255,0.7)
  - Label: Inter 11px, font-weight: 600, rgba(148,163,184,0.6), uppercase, tracking-[0.05em]
- Tools: GitHub, Docker, AWS, Vercel, Redis, PostgreSQL (use simplified SVG paths)

## Pricing Section
py-24

**Section Header:** Same pattern

**Grid:** 3 columns, max-w-[1000px] mx-auto, gap-5

**Each Pricing Card:**
- bg: rgba(255,255,255,0.02), border: 1px solid rgba(255,255,255,0.06), rounded-[20px], p-9
- Highlighted (Pro): bg rgba(16,185,129,0.06), border-color rgba(16,185,129,0.3)
  - Top edge glow: pseudo ::before, h-[2px], gradient from transparent via [PRIMARY_COLOR] to transparent
  - CTA button: bg [PRIMARY_COLOR], color #09090B, animation: pulse-glow 3s infinite
- Standard cards: transparent bg, border 1px solid rgba(255,255,255,0.1), ghost CTA
- Content:
  - Plan name: JetBrains Mono 14px, font-weight: 600, uppercase, tracking-[0.05em]
  - Price: JetBrains Mono 40px, font-weight: 700, #f8fafc
  - Period: 16px, rgba(148,163,184,0.5)
  - Description: Inter 14px, rgba(148,163,184,0.6)
  - Features list: Inter 14px, rgba(255,255,255,0.7), "✓" prefix in [PRIMARY_COLOR]
  - CTA: JetBrains Mono 14px, font-weight: 600, rounded-lg, w-full, py-3
- Hover: translateY(-4px), box-shadow

**Plans:**
- Hobby (Free): 3 projects, 1GB bandwidth, preview deployments, community support, shared compute
- Pro ($20/mo, highlighted): Unlimited projects, 100GB bandwidth, custom domains, team collab, priority support, secrets management
- Enterprise (Custom): Everything in Pro + unlimited bandwidth, SSO/SAML, SLA, dedicated support, audit logs, on-prem

## Footer
py-16 border-top: 1px solid rgba(255,255,255,0.04)
- max-w-[1100px] mx-auto, flex justify-between items-center
- Left: [BRAND_NAME] logo (same as navbar)
- Right: Links "GitHub", "Discord", "Docs", "Blog", "Status" in Inter 13px rgba(148,163,184,0.5)
- Below: "© 2024 [BRAND_NAME]. Built for developers, by developers." centered, Inter 12px rgba(148,163,184,0.3)

## Global Styles
- @keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }
- @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 20px rgba(16,185,129,0.2) } 50% { box-shadow: 0 0 40px rgba(16,185,129,0.4) } }
- @keyframes shimmer { 0% { transform: translateX(-100%) } 100% { transform: translateX(200%) } }
- ::selection { background: rgba(16,185,129,0.3) }
- Custom scrollbar: 6px, thumb rgba(16,185,129,0.2) rounded

## Responsive
- Mobile: grid-cols-1 for all grids, reduce padding
- Terminal max-width reduces, font sizes scale with clamp()
- Pricing stacks vertically, Pro card stays highlighted`,

  v0: `Create a DevTool CLI product landing page. Dark background #09090B with emerald (#10B981) and cyan (#06B6D4) accents. Developer-focused, terminal-aesthetic design.

**Fonts:** JetBrains Mono for code/headlines, Inter for body text. Import from Google Fonts.

**Navbar:** Fixed glassmorphism bar. "[BRAND_NAME]" logo in gradient JetBrains Mono on left. "Docs" and "GitHub" links on right. bg rgba(9,9,11,0.7), backdrop-filter: blur(24px), border: 1px solid rgba(16,185,129,0.08), border-radius: 16px, max-width: 1200px centered with 12px top margin.

**Hero Section:** Full viewport height, centered.
- Status badge: pill with green dot + "v2.4.0 — Now with Edge Functions" in uppercase JetBrains Mono
- Headline: "[HEADLINE]" in JetBrains Mono 700, clamp(2.5rem,7vw,5rem). First line white, second line gradient PRIMARY→ACCENT
- Subheadline: "[SUBHEADLINE]" in Inter, rgba(148,163,184,0.8), max-width 560px
- Install bar: "$ npm install -g [BRAND_SLUG]" with copy-to-clipboard button. Dark pill with emerald border on hover
- Animated terminal window: 640px max-width, dark bg with emerald border glow. Three-step typing animation:
  1. Types "npm install -g [BRAND_SLUG]" → shows install output
  2. Types "[BRAND_SLUG] init my-project" → shows scaffold output with ✔ checkmarks
  3. Types "[BRAND_SLUG] deploy --prod" → shows deploy output ending with 🚀
  Character-by-character typing via setInterval. Prompt "$" in emerald, output colored by type.
- SVG dot grid background with radial fade mask

**Stats:** 3-column grid — [STAT_1] npm downloads, [STAT_2] GitHub stars, [STAT_3] uptime. Animated counters on scroll (IntersectionObserver + requestAnimationFrame, 2.2s easeOutQuart). JetBrains Mono emerald values, Inter muted labels.

**Features:** 3-column grid, each card has title (JetBrains Mono), description (Inter), and a code snippet block with inline syntax highlighting (no libraries). bg rgba(0,0,0,0.4) for code blocks. Cards: glass bg, emerald border on hover, translateY(-4px) lift.

**CLI Showcase:** Side-by-side terminals. Left "Before" (red-tinted, 5 manual commands). Right "After" (emerald-tinted, 1 forge command with output). Visual proof of simplification.

**Integrations:** 6-column grid of dev tool icons (GitHub, Docker, AWS, Vercel, Redis, PostgreSQL). Simple SVG icons, glass cards, emerald hover effect.

**Pricing:** 3-column. Hobby (Free), Pro ($20/mo, highlighted with emerald glow), Enterprise (Custom). Feature lists with ✓ checkmarks in emerald. Pro card has top edge gradient glow and pulse-glow CTA button.

**Footer:** Dark minimal. Logo left, links right (GitHub, Discord, Docs, Blog, Status). Copyright below centered.

**Animations:** Use Framer Motion. FadeIn on scroll (IntersectionObserver), terminal typing, stat counters, hover lifts on cards. CSS keyframes for blink, pulse-glow, shimmer.

**Variables:** [BRAND_NAME], [PRIMARY_COLOR]=#10B981, [ACCENT_COLOR]=#06B6D4, [HEADLINE], [SUBHEADLINE], [CTA_TEXT], [STAT_1], [STAT_2], [STAT_3]`,

  bolt: `Build a developer CLI tool landing page. Self-contained React component, "use client", ALL styles inline (no external CSS files). No dependencies beyond React.

COLOR SYSTEM:
- bg: #09090B
- primary: [PRIMARY_COLOR] (#10B981 emerald)
- accent: [ACCENT_COLOR] (#06B6D4 cyan)
- text: #f8fafc
- text-secondary: rgba(148,163,184,0.8)
- text-muted: rgba(148,163,184,0.5)
- border: rgba(16,185,129,0.08)
- glass: rgba(255,255,255,0.02)
- terminal-bg: rgba(0,0,0,0.6)

FONTS (import in <style> tag):
- Headlines/code: 'JetBrains Mono', monospace — weights 400,500,600,700
- Body: 'Inter', sans-serif — weights 400,500,600,700,900

SECTIONS (all inline styles, no className for layout):

1. NAVBAR: Fixed glassmorphism. Logo "[BRAND_NAME]" gradient text (JetBrains Mono 700). "Docs"/"GitHub" links. bg rgba(9,9,11,0.7), backdropFilter blur(24px).

2. HERO: min-height 100vh centered.
   - SVG dot grid background (32x32 pattern, radial mask)
   - Status badge pill with animated green dot
   - Two-line headline: line 1 white, line 2 gradient primary→accent (JetBrains Mono, clamp sizing)
   - Subheadline (Inter, muted)
   - Install bar: "$ npm install -g [BRAND_SLUG]" with copy button (useState for copied state)
   - ANIMATED TERMINAL (key feature):
     * useEffect + async function with setTimeout
     * Types 3 commands character-by-character: install → init → deploy
     * Shows colored output after each command
     * Auto-scrolls. Prompt "$" in primary color
     * Terminal has macOS dots (#ff5f57, #febc2e, #28c840) and title bar

3. STATS: 3-col grid. Animated counters (IntersectionObserver + requestAnimationFrame, 2.2s duration, easeOutQuart). Values in primary color JetBrains Mono. Labels in Inter muted.

4. FEATURES: 3-col grid. Each card: title (JetBrains Mono), desc (Inter), code snippet block (bg rgba(0,0,0,0.4), inline syntax highlighting — keys:#e5c07b, strings:#98c379, success:primary, urls:accent). Hover: border primary, lift -4px.

5. CLI SHOWCASE: 2-col grid. Left = "Before" (red accent, 5 manual commands). Right = "After" (primary accent, 1 command + output). Each is a terminal window.

6. INTEGRATIONS: 6-col grid. SVG icons for GitHub/Docker/AWS/Vercel/Redis/PostgreSQL. Glass cards, hover highlight.

7. PRICING: 3-col grid. Hobby(Free)/Pro($20,highlighted)/Enterprise(Custom). Pro: primary bg border, glowing CTA. Features with ✓ prefix in primary color.

8. FOOTER: Logo left, links right, copyright centered below.

CRITICAL: All styles MUST be inline React style objects. Use onMouseEnter/onMouseLeave for hover states. Use useEffect/useState/useRef for animations. NO Tailwind, NO CSS modules, NO styled-components.

VARIABLES: [BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT], [STAT_1], [STAT_2], [STAT_3]`,

  lovable: `Create a premium DevTool CLI landing page. Dark developer aesthetic inspired by Vercel, Railway, and Warp terminal.

DESIGN TOKEN SYSTEM:
\`\`\`
--bg: #09090B
--primary: [PRIMARY_COLOR] (#10B981)
--accent: [ACCENT_COLOR] (#06B6D4)
--text: #f8fafc
--text-secondary: rgba(148,163,184,0.8)
--text-muted: rgba(148,163,184,0.5)
--border: rgba(16,185,129,0.08)
--border-hover: rgba(16,185,129,0.3)
--glass: rgba(255,255,255,0.02)
--terminal-bg: rgba(0,0,0,0.6)
\`\`\`

TYPOGRAPHY:
- Code/headlines: font-family: 'JetBrains Mono', monospace (Google Fonts import)
- Body: font-family: 'Inter', sans-serif (Google Fonts import)

PAGE STRUCTURE:

**Navigation:** Floating glass bar, max-w 1200px, rounded-2xl. "[BRAND_NAME]" gradient logo left (JetBrains Mono 700). "Docs" + "GitHub" links right (Inter 500, white/60).

**Hero (100vh):**
- Background: SVG dot grid pattern 32x32 with radial fade mask, opacity 0.4
- Radial glow orb: 600x600px, rgba(16,185,129,0.08), centered
- Badge: "v2.4.0 — Now with Edge Functions" pill, green dot animation
- Headline: "[HEADLINE]" — JetBrains Mono 700, clamp(2.5rem,7vw,5rem), -0.05em tracking. Line 1 white, line 2 primary→accent gradient
- Sub: "[SUBHEADLINE]" — Inter, text-secondary, max-w 560px
- Install command: Copyable "$ npm install -g [BRAND_SLUG]" pill with click-to-copy
- **Terminal animation (the hero moment):**
  - macOS-style window chrome (3 colored dots + title)
  - 3 sequential commands typed char-by-char with setInterval:
    - install (60ms/char) → scaffold output
    - init (45ms/char) → ✔ checkmark outputs in primary
    - deploy (50ms/char) → progress + 🚀 success
  - Colors: prompt=primary, command=white, success=primary, link=accent, info=text-secondary
  - Auto-scrolling container

**Stats Bar:** 3-col, border-top/bottom subtle. Counter animation (IntersectionObserver → rAF, 2.2s, easeOutQuart). JetBrains Mono primary, Inter muted labels. [STAT_1] downloads, [STAT_2] stars, [STAT_3] uptime.

**Features Grid (3-col):** Glass cards with code snippets. Each card: JetBrains Mono title, Inter description, dark code block with inline syntax highlighting (keys:#e5c07b, strings:#98c379, nums:#d19a66). Hover: emerald border glow, -4px lift.

**CLI Before/After (2-col):** Left terminal red-tinted "5 manual steps". Right terminal emerald-tinted "1 forge command". Visual comparison.

**Integrations (6-col):** Dev tool SVG icons (GitHub, Docker, AWS, Vercel, Redis, PostgreSQL). Glass cards, hover emerald.

**Pricing (3-col):** Hobby (Free), Pro ($20/mo HIGHLIGHTED), Enterprise (Custom). Pro card: emerald border, top gradient edge, pulse-glow CTA button. Feature lists with ✓ in primary.

**Footer:** Minimal dark. Logo, links (GitHub, Discord, Docs, Blog, Status), copyright.

ANIMATION SPECS:
- FadeIn on scroll: IntersectionObserver, translateY(40px→0), opacity 0→1, 0.7s cubic-bezier(0.23,1,0.32,1)
- Terminal typing: setInterval per character, delays per step
- Stat counters: rAF + easeOutQuart over 2.2s
- Hover lifts: translateY(-4px), 0.4s cubic-bezier
- CSS: @keyframes blink, pulse-glow, shimmer
- ::selection background primary/30

VARIABLES: [BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT], [STAT_1], [STAT_2], [STAT_3]`,
};
