// Ultra Premium Template #102 — AI Product Hero
// 4 platform-specific prompt variants

export const AI_PRODUCT_HERO_PROMPTS = {
  cursor: `Build a premium AI product landing page with the following exact specifications. This must look like an OpenAI/Anthropic-level marketing site.

**Stack:** React 18 + Next.js 14 + Tailwind CSS v3 + Framer Motion 11 + TypeScript
**Fonts:** @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap')

## Color System
- Background: #050510
- Primary: [PRIMARY_COLOR] (default: #6366f1)
- Accent: [ACCENT_COLOR] (default: #818cf8)
- Text primary: #f8fafc
- Text secondary: rgba(148,163,184,0.8)
- Text muted: rgba(148,163,184,0.5)
- Border: rgba(99,102,241,0.08)
- Border hover: rgba(99,102,241,0.3)
- Glass bg: rgba(255,255,255,0.03)

## Navigation Bar
Floating glassmorphism navbar:
- Position: fixed top-0 left-0 right-0 z-50
- Container: max-w-[1200px] mx-auto mt-3 px-8 py-4
- Background: rgba(5,5,16,0.6) with backdropFilter: blur(24px) saturate(1.5)
- Border: 1px solid rgba(99,102,241,0.08), border-radius: 16px
- Left: [BRAND_NAME] in Inter 900, text-lg, letter-spacing: -0.04em
  - Apply gradient text: background: linear-gradient(135deg, #818cf8, #6366f1)
  - Use -webkit-background-clip: text, -webkit-text-fill-color: transparent
- Center: Links for 'Features', 'API', 'Pricing', 'Docs' in Inter 500 text-sm text-white/70
  - hover: text-white, transition: color 0.2s ease
- Right: "[CTA_TEXT]" button
  - bg-[PRIMARY_COLOR] text-white rounded-full px-5 py-2 text-sm font-semibold
  - Framer Motion: whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
  - whileTap={{ scale: 0.97 }}
  - transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
- Entire nav: motion.nav with initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}

## Dot Grid Background
Full-screen SVG pattern behind hero:
- SVG with <pattern> element: 32x32 grid, each dot is a <circle> r=1 fill="rgba(99,102,241,0.15)"
- Apply radial gradient mask so dots fade to transparent at edges
- Position: absolute inset-0, opacity: 0.6, pointer-events: none
- This replaces a video background — pure CSS, no assets needed

## Interactive Mouse Glow
Track mouse position on hero section:
- Use useMotionValue for mouseX and mouseY
- Apply radial gradient that follows cursor: radial-gradient(circle at {x}% {y}%, rgba(99,102,241,0.12) 0%, transparent 50%)
- Use motion.div with style={{ background }} for smooth tracking
- This creates the "interactive" wow moment in the hero

## Hero Section
min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden

**Status Badge:** Above headline
- display: inline-flex, align-items: center, gap: 0.5rem
- bg: rgba(99,102,241,0.08), border: 1px solid rgba(99,102,241,0.2), rounded-full, px-4 py-1.5
- Green dot: w-1.5 h-1.5 rounded-full bg-green-500 with box-shadow: 0 0 8px rgba(34,197,94,0.5)
- Text: "API Status: All Systems Operational" in text-xs font-semibold uppercase tracking-[0.08em] text-[ACCENT_COLOR]
- Framer Motion: initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}

**Headline:** "[HEADLINE] {MorphingText}"
- Font: Inter 900, clamp(3rem, 8vw, 6rem), tracking: -0.05em, leading: 1.0
- Apply animated gradient: background: linear-gradient(135deg, #f8fafc 0%, #818cf8 50%, #6366f1 100%)
  - background-size: 200% 200%
  - Animate with CSS: @keyframes gradient-shift { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } }
  - animation: gradient-shift 6s ease-in-out infinite
  - -webkit-background-clip: text, -webkit-text-fill-color: transparent
- Framer Motion on container: initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}

**Morphing Text Component:**
- Cycle through 4 words: "[BRAND_NAME]", "Intelligence", "The Future", "Everything"
- Each word: absolute positioned, transitions between with:
  - AnimatePresence mode="wait"
  - motion.span: initial={{ opacity: 0, y: 20, filter: "blur(8px)", scale: 0.95 }}
  - animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
  - exit={{ opacity: 0, y: -20, filter: "blur(8px)", scale: 0.95 }}
  - transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
- Interval: 3000ms via useEffect
- Gradient text: background: linear-gradient(135deg, #818cf8, #a78bfa, #c4b5fd)

**Subheadline:** "[SUBHEADLINE]"
- Inter 400, clamp(1.25rem, 3vw, 1.75rem), color: rgba(148,163,184,0.8)
- max-w-[600px] mx-auto mt-6 leading-relaxed tracking: -0.02em
- Framer Motion: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}

**CTA Group:** Two buttons side by side, mt-10, flex gap-4
- Primary: bg-[PRIMARY_COLOR] text-white rounded-full px-8 py-3.5 font-semibold relative overflow-hidden
  - Glow animation: @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 20px rgba(99,102,241,0.3) } 50% { box-shadow: 0 0 30px rgba(99,102,241,0.5) } }
  - Shimmer pseudo-element: absolute inset-0, gradient from transparent via white/20 to transparent
    - @keyframes shimmer { 0% { transform: translateX(-100%) } 100% { transform: translateX(200%) } }
    - animation: shimmer 3s ease-in-out infinite
  - Framer Motion: whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(99,102,241,0.5)" }}
- Secondary: transparent bg, border 1px solid rgba(99,102,241,0.2), rounded-full px-8 py-3.5
  - hover: border-color rgba(99,102,241,0.5), bg rgba(99,102,241,0.05)
- Stagger children with motion.div: transition={{ staggerChildren: 0.1, delayChildren: 1.0 }}

**Trusted By Logos:** Below CTA, mt-12
- Flex row of 5 company names as placeholder text
- font-size: 0.8rem, font-weight: 600, color: rgba(148,163,184,0.3), uppercase tracking-[0.05em]
- Framer Motion: initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }}

## Features Section — Bento Grid
Section with py-32, text-center

**Section Header:**
- Tag: uppercase text-xs tracking-[0.1em] font-semibold text-[ACCENT_COLOR] with a 20px line before it
- Title: Inter 900, clamp(2rem, 4vw, 3rem), tracking: -0.04em, text-white
- Subtitle: text-base text-white/60 max-w-[550px] mx-auto leading-relaxed

**Grid Layout:** max-w-[1100px] mx-auto, grid grid-cols-3, gap-4
- 5 cards with mixed sizes:
  - Card 1: grid-column: span 2 (wide)
  - Card 2: grid-column: span 1
  - Card 3: grid-column: span 1
  - Card 4: grid-column: span 1, grid-row: span 2 (tall)
  - Card 5: grid-column: span 1

**Each Bento Card:**
- bg: rgba(255,255,255,0.03), border: 1px solid rgba(99,102,241,0.08), rounded-[20px], p-8
- backdrop-filter: blur(12px)
- Hover: border-color rgba(99,102,241,0.3), bg rgba(99,102,241,0.05), translateY(-4px)
  - box-shadow: 0 20px 60px rgba(99,102,241,0.1), 0 0 0 1px rgba(99,102,241,0.15)
- Top border glow on hover: pseudo ::before, absolute top-0 left-0 right-0 h-px
  - gradient: linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)
  - opacity 0 → 1 on hover
- transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1)
- Framer Motion: useInView trigger, initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
  - Stagger: delay: index * 0.1
  - transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}

Card contents:
- Icon: text-3xl mb-4
- Title: Inter 700, text-lg, text-white, tracking: -0.02em
- Description: text-sm text-white/65 leading-relaxed

## Code/API Showcase Section
py-24, text-center

**Terminal Block:**
- max-w-[680px] mx-auto
- bg: rgba(10,10,25,0.9), border: 1px solid rgba(99,102,241,0.15), rounded-2xl
- box-shadow: 0 25px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.1)
- **Title bar:** flex items-center gap-1.5, py-3 px-4, bg rgba(255,255,255,0.03), border-bottom 1px solid rgba(255,255,255,0.06)
  - 3 dots: 10x10px circles, colors #ff5f57, #febc2e, #28c840
  - Right side: filename "api-request.ts" in monospace text-xs text-white/50
- **Code body:** p-6, font-family: 'SF Mono', monospace, text-sm, leading-relaxed, text-[#abb2bf]
  - Inline syntax highlighting (no library!):
    - Keywords (const, await): #c678dd
    - Identifiers (response): #e5c07b
    - Methods (create, chat): #61afef / #98c379
    - Strings ("..."): #98c379
    - Numbers (0.7, 1024): #d19a66
    - Object keys (model, messages): #e5c07b
    - Punctuation: #abb2bf
  - **Typing animation:** useEffect with IntersectionObserver trigger
    - Reveal characters one at a time, 22ms interval
    - Blinking cursor at end: color #6366f1, animation: blink 1s step-end infinite

- **Scan line effect:** Pseudo ::after, absolute, 2px height
  - linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)
  - animation: scan-line 4s linear infinite (top: -2px → 100%)
  - opacity: 0.3

- Framer Motion: initial={{ opacity: 0, y: 40 }} animate (useInView) {{ opacity: 1, y: 0 }}
  - transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}

## Stats Section
py-24, text-center

3 stats: [STAT_1_VALUE] [STAT_1_LABEL], [STAT_2_VALUE] [STAT_2_LABEL], [STAT_3_VALUE] [STAT_3_LABEL]

Layout: flex justify-center gap-16 max-w-[900px] mx-auto

Each stat:
- Number: Inter 900, clamp(2.5rem, 5vw, 3.5rem), text-white, tracking: -0.04em
  - Suffix in text-[ACCENT_COLOR]
- Label: text-xs uppercase tracking-[0.12em] text-white/50 mt-3 font-medium

**Animated Counter:**
- useInView (Framer Motion) to detect viewport entry, once: true
- useEffect + requestAnimationFrame for smooth counting:
  - Duration: 2200ms
  - Easing: t => 1 - Math.pow(1 - t, 4) (quartic ease-out)
  - Format: >1M → "X.XM", >1K → "X,XXX", decimal → "X.XX"
- Framer Motion wrapper: initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
  - transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 100 }}

## Testimonials Section
py-24, text-center

Grid: 3 columns, gap-6, max-w-[1100px] mx-auto

Each testimonial card:
- bg: rgba(255,255,255,0.02), border: 1px solid rgba(99,102,241,0.06), rounded-2xl, p-8
- hover: border-color rgba(99,102,241,0.15), bg rgba(99,102,241,0.03)
- transition: all 0.3s ease
- Quote: text-sm text-white/75 leading-relaxed italic, mb-6
- Author name: Inter 700, text-sm, text-white
- Role: text-xs text-white/45
- Company logo placeholder: 80x28px div, bg rgba(99,102,241,0.08), rounded-md
  - Company name inside in text-[0.65rem] font-bold uppercase text-[PRIMARY_COLOR]/50

Framer Motion: staggerChildren: 0.12, each card initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}

## CTA Banner Section
py-24, text-center

Centered container: max-w-[700px] mx-auto, p-16
- bg: linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.05) 100%)
- border: 1px solid rgba(99,102,241,0.12), rounded-3xl
- Title: Inter 900, clamp(1.75rem, 3vw, 2.5rem), tracking: -0.04em, text-white
- Subtitle: text-base text-white/60 max-w-[450px] mx-auto mt-4 mb-8
- Same CTA button style as hero primary

Framer Motion: initial={{ opacity: 0, y: 30 }} animate (useInView) {{ opacity: 1, y: 0 }}

## Footer
py-12, border-top: 1px solid rgba(255,255,255,0.06)
max-w-[1100px] mx-auto, flex items-center justify-between

- Left: [BRAND_NAME] logo (same gradient text as nav)
- Center: Links — Documentation, Pricing, Blog, Status, GitHub
  - text-xs text-white/50 hover:text-white
- Right: "© 2024 [BRAND_NAME]. All rights reserved." text-xs text-white/30

## Responsive
@media (max-width: 768px):
- Bento grid: grid-cols-1, all spans become span-1
- Stats: flex-col gap-8
- Testimonials: grid-cols-1
- Nav links: hidden
- Footer: flex-col gap-6 text-center

## Color Variables to Replace
- [PRIMARY_COLOR] → default: #6366f1
- [ACCENT_COLOR] → default: #818cf8
- [BRAND_NAME] → your company name
- [HEADLINE] → main headline
- [SUBHEADLINE] → subtitle text
- [CTA_TEXT] → primary button text
- [STAT_1_VALUE], [STAT_1_LABEL] → e.g. "2.4M", "Requests / Day"
- [STAT_2_VALUE], [STAT_2_LABEL] → e.g. "47ms", "Avg Latency"
- [STAT_3_VALUE], [STAT_3_LABEL] → e.g. "99.99%", "Uptime"`,

  v0: `Build a premium AI product landing page with the following exact specifications.

**Stack:** React + Next.js + Tailwind CSS + Framer Motion (basic) + TypeScript
**Fonts:** @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap')

## Color System
- Background: #050510
- Primary: [PRIMARY_COLOR] (default: #6366f1)
- Accent: [ACCENT_COLOR] (default: #818cf8)
- Text: #f8fafc (primary), rgba(148,163,184,0.8) (secondary), rgba(148,163,184,0.5) (muted)
- Borders: rgba(99,102,241,0.08) (default), rgba(99,102,241,0.3) (hover)
- Glass: rgba(255,255,255,0.03) bg with backdrop-blur

## Navigation Bar
Floating glassmorphism navbar:
- fixed top-0 w-full z-50, max-w-[1200px] mx-auto mt-3
- bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl px-8 py-4
- Left: [BRAND_NAME] in Inter font-black text-lg, gradient text (linear-gradient 135deg from #818cf8 to #6366f1)
- Center: 'Features', 'API', 'Pricing', 'Docs' — text-sm text-white/70 hover:text-white transition-colors
- Right: "[CTA_TEXT]" button bg-[PRIMARY_COLOR] rounded-full px-5 py-2 text-sm font-semibold hover:brightness-110
- Animate in: motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}

## Dot Grid Background
SVG pattern behind hero section:
- <pattern> with 32x32 cells, each dot: <circle r=1 fill="rgba(99,102,241,0.15)">
- Radial gradient mask so dots fade to transparent at edges
- absolute inset-0, opacity: 0.6, pointer-events: none

## Hero Section
min-h-screen flex flex-col items-center justify-center text-center px-6

**Status Badge:** Inline-flex with green dot (w-1.5 h-1.5 bg-green-500 rounded-full, box-shadow glow)
- bg-[PRIMARY_COLOR]/[0.08] border border-[PRIMARY_COLOR]/20 rounded-full px-4 py-1.5
- Text: "API Status: All Systems Operational" text-xs font-semibold uppercase tracking-wide text-[ACCENT_COLOR]
- motion.div: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}

**Headline:** "[HEADLINE] {MorphingText}"
- Inter font-black text-6xl lg:text-7xl xl:text-8xl tracking-tighter
- Gradient: linear-gradient(135deg, #f8fafc 0%, #818cf8 50%, #6366f1 100%)
- background-size: 200% 200%, CSS animation: gradient-shift 6s infinite
- motion.h1: initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}

**Morphing Text:** Cycles through 4 words every 3s
- Use AnimatePresence with motion.span
- initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
- Gradient text: linear-gradient(135deg, #818cf8, #a78bfa, #c4b5fd)

**Subheadline:** "[SUBHEADLINE]"
- Inter text-xl text-white/70 max-w-xl mt-6 leading-relaxed
- motion.p: initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}

**CTA Buttons:** Two buttons, gap-4, mt-10
- Primary: bg-[PRIMARY_COLOR] text-white rounded-full px-8 py-3.5 font-semibold
  - box-shadow: 0 0 20px rgba(99,102,241,0.3)
  - motion.button: whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
- Secondary: border border-[PRIMARY_COLOR]/20 rounded-full px-8 py-3.5 text-white/80
  - hover:border-[PRIMARY_COLOR]/50 hover:bg-[PRIMARY_COLOR]/5

**Trusted By:** Row of 5 placeholder company names, text-xs text-white/30 uppercase mt-12

## Features — Bento Grid
py-32, max-w-[1100px] mx-auto

5 glassmorphism cards in 3-column grid:
- Card 1: col-span-2 (wide), Cards 2-3: col-span-1, Card 4: row-span-2 (tall), Card 5: col-span-1
- Each: bg-white/[0.03] border border-white/[0.08] rounded-[20px] p-8 backdrop-blur-xl
- Hover: border-[PRIMARY_COLOR]/30 -translate-y-1 shadow-[0_20px_60px_rgba(99,102,241,0.1)]
- transition-all duration-300
- Icon (emoji 2xl) → Title (Inter bold text-lg) → Description (text-sm text-white/65)
- Stagger with motion.div: initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}

## Code Showcase
py-24, max-w-[680px] mx-auto

Terminal-style code block:
- bg-[#0a0a19]/90 border border-[PRIMARY_COLOR]/15 rounded-2xl
- shadow-[0_25px_80px_rgba(0,0,0,0.5)]
- Top bar: 3 colored dots (10px, #ff5f57 / #febc2e / #28c840) + filename
- Code: monospace text-sm, inline syntax colors:
  - Keywords: #c678dd, Strings: #98c379, Methods: #61afef, Numbers: #d19a66, Keys: #e5c07b
- Typing effect: IntersectionObserver + setInterval revealing chars at 22ms
- Blinking cursor: text-[PRIMARY_COLOR] animation blink 1s step-end infinite

## Stats Section
py-24, flex justify-center gap-16

3 stats with animated counters (IntersectionObserver + requestAnimationFrame):
- Duration: 2200ms, easing: quartic ease-out
- Number: Inter font-black text-5xl text-white
- Suffix: text-[ACCENT_COLOR]
- Label: text-xs uppercase tracking-widest text-white/50
- motion.div for each: initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}

## Testimonials
py-24, grid grid-cols-3 gap-6

3 cards: bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8
- Quote (italic text-sm text-white/75), Author (bold text-sm), Role (text-xs text-white/45)
- Company logo placeholder: 80x28 div bg-[PRIMARY_COLOR]/[0.08] rounded-md
- hover: border-[PRIMARY_COLOR]/15 bg-[PRIMARY_COLOR]/[0.03]

## CTA Banner
Centered card: max-w-[700px], bg gradient, border border-[PRIMARY_COLOR]/12 rounded-3xl p-16
- Title (Inter black text-3xl) + Subtitle + CTA button

## Footer
border-t border-white/[0.06] py-12, flex justify-between
- Logo (gradient text) + Links (text-xs text-white/50) + Copyright (text-xs text-white/30)

## Responsive
@media max-width 768px: bento grid-cols-1, stats flex-col, testimonials grid-cols-1, nav links hidden

## Variables
[PRIMARY_COLOR], [ACCENT_COLOR], [BRAND_NAME], [HEADLINE], [SUBHEADLINE], [CTA_TEXT], [STAT_1_VALUE], [STAT_1_LABEL], [STAT_2_VALUE], [STAT_2_LABEL], [STAT_3_VALUE], [STAT_3_LABEL]`,

  bolt: `Build a premium AI product landing page. Use ONLY CSS animations and transitions — no Framer Motion or external animation libraries.

**Stack:** React + Next.js + Tailwind CSS + TypeScript (NO Framer Motion)
**Fonts:** @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap')

## Required CSS Keyframes (add in a <style> tag or globals.css)
\`\`\`css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes blur-in {
  from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0px); }
}
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
}
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.3), 0 0 60px rgba(99,102,241,0.1); }
  50% { box-shadow: 0 0 30px rgba(99,102,241,0.5), 0 0 80px rgba(99,102,241,0.2); }
}
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
@keyframes scan-line {
  0% { top: -2px; }
  100% { top: 100%; }
}
@keyframes border-glow {
  0%, 100% { border-color: rgba(99,102,241,0.1); }
  50% { border-color: rgba(99,102,241,0.3); }
}
\`\`\`

## Scroll Animation System
Use Intersection Observer API for scroll-triggered animations:
\`\`\`typescript
function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.style.transition = \\\`opacity 0.7s cubic-bezier(0.23,1,0.32,1) \\\${delay}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) \\\${delay}s\\\`;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        obs.disconnect();
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
\`\`\`

## Color System
- Background: #050510
- Primary: [PRIMARY_COLOR] (default: #6366f1)
- Accent: [ACCENT_COLOR] (default: #818cf8)
- Text primary: #f8fafc, secondary: rgba(148,163,184,0.8), muted: rgba(148,163,184,0.5)
- Borders: rgba(99,102,241,0.08), hover: rgba(99,102,241,0.3)
- Glass bg: rgba(255,255,255,0.03)

## Navigation Bar
Fixed glassmorphism navbar:
- fixed top-0 left-0 right-0 z-50, max-w-[1200px] mx-auto mt-3
- background: rgba(5,5,16,0.6), backdrop-filter: blur(24px) saturate(1.5)
- border: 1px solid rgba(99,102,241,0.08), border-radius: 16px, padding: 1rem 2rem
- Logo: [BRAND_NAME] Inter 900, gradient text (linear-gradient 135deg, #818cf8, #6366f1)
- Links: text-sm text-white/70, hover:text-white, transition: color 0.2s
- CTA: bg-[PRIMARY_COLOR] rounded-full px-5 py-2 text-sm font-semibold
  - hover: transform: scale(1.05), box-shadow: 0 0 30px rgba(99,102,241,0.4)
  - transition: all 0.2s cubic-bezier(0.23,1,0.32,1)
- Nav: animation: fade-up 0.5s cubic-bezier(0.23,1,0.32,1) both

## Dot Grid Background
SVG with <pattern> id="dots" width=32 height=32:
- <circle cx=1 cy=1 r=1 fill="rgba(99,102,241,0.15)">
- Apply radial gradient mask for edge fade
- absolute inset-0, opacity 0.6

## Interactive Mouse Glow (CSS + JS)
Track mouse on hero with addEventListener('mousemove'):
- Update CSS custom properties --glow-x and --glow-y
- Apply as: background: radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(99,102,241,0.12) 0%, transparent 50%)
- transition: background 0.3s ease

## Hero Section
min-h-screen flex flex-col items-center justify-center text-center

**Status Badge:**
- inline-flex items-center gap-2, bg rgba(99,102,241,0.08), border 1px solid rgba(99,102,241,0.2), rounded-full px-4 py-1.5
- Green dot: 6px, bg #22c55e, box-shadow: 0 0 8px rgba(34,197,94,0.5), animation: pulse-glow 2s infinite
- Text: text-xs font-semibold uppercase tracking-wide text-[ACCENT_COLOR]
- animation: blur-in 0.6s cubic-bezier(0.23,1,0.32,1) 0.2s both

**Headline:** "[HEADLINE] {MorphingText}"
- Inter 900, font-size: clamp(3rem,8vw,6rem), tracking: -0.05em, line-height: 1.0
- Gradient: linear-gradient(135deg, #f8fafc 0%, #818cf8 50%, #6366f1 100%)
- background-size: 200% 200%, animation: gradient-shift 6s ease-in-out infinite
- -webkit-background-clip: text, -webkit-text-fill-color: transparent
- animation: blur-in 0.7s cubic-bezier(0.23,1,0.32,1) 0.4s both

**Morphing Text:** Pure CSS/JS word cycling
- 4 words: "[BRAND_NAME]", "Intelligence", "The Future", "Everything"
- Position: relative container with absolute children
- Use useState + useEffect interval (3s) to cycle index
- Active word: opacity 1, transform translateY(0) scale(1), filter blur(0)
- Inactive: opacity 0, transform translateY(20px) scale(0.95), filter blur(8px)
- transition: all 0.6s cubic-bezier(0.23,1,0.32,1)
- Gradient text: linear-gradient(135deg, #818cf8, #a78bfa, #c4b5fd)

**Subheadline:** [SUBHEADLINE]
- Inter 400, clamp(1.25rem,3vw,1.75rem), color rgba(148,163,184,0.8), max-w-[600px] mx-auto mt-6
- animation: blur-in 0.6s cubic-bezier(0.23,1,0.32,1) 0.7s both

**CTA Group:** mt-10, flex gap-4
- Primary button: bg-[PRIMARY_COLOR] text-white rounded-full px-8 py-3.5 font-semibold
  - animation: pulse-glow 3s infinite, fade-up 0.6s cubic-bezier(0.23,1,0.32,1) 1s both
  - Shimmer: ::after pseudo, animation: shimmer 3s infinite
  - hover: transform scale(1.05), box-shadow: 0 0 50px rgba(99,102,241,0.5)
- Secondary: transparent, border rgba(99,102,241,0.2), hover:border-color rgba(99,102,241,0.5)

**Trusted By:** 5 names, text-xs text-white/30 uppercase, animation: fade-up 0.6s 1.3s both

## Features — Bento Grid
py-32 text-center

Section header with fade-in (IntersectionObserver):
- Tag: uppercase text-xs tracking-wide text-[ACCENT_COLOR] with 20px line before
- Title: Inter 900 text-3xl text-white tracking-tight
- Subtitle: text-base text-white/60 max-w-[550px] mx-auto

Grid: 3 cols, gap-4, 5 cards (span-2, span-1, span-1, row-span-2, span-1):
- Each card: bg rgba(255,255,255,0.03), border rgba(99,102,241,0.08), rounded-[20px], p-8, backdrop-filter blur(12px)
- hover: border-color rgba(99,102,241,0.3), bg rgba(99,102,241,0.05), translateY(-4px)
  - box-shadow: 0 20px 60px rgba(99,102,241,0.1)
- Top glow line: ::before pseudo, h-px gradient, opacity 0→1 on hover
- transition: all 0.4s cubic-bezier(0.23,1,0.32,1)
- IntersectionObserver animation with staggered delays (index * 100ms)

## Code Showcase
py-24, max-w-[680px] mx-auto

Terminal code block:
- bg rgba(10,10,25,0.9), border rgba(99,102,241,0.15), rounded-2xl
- box-shadow: 0 25px 80px rgba(0,0,0,0.5)
- Top bar: 3 colored dots + filename in monospace
- Code: syntax highlighted inline (keywords #c678dd, strings #98c379, methods #61afef, numbers #d19a66, keys #e5c07b)
- Typing effect: IntersectionObserver + setInterval, 22ms per char
- Cursor: color #6366f1, animation: blink 1s step-end infinite
- Scan line: ::after pseudo, 2px height, gradient, animation: scan-line 4s linear infinite, opacity 0.3

## Stats Section
py-24, flex justify-center gap-16

3 animated counters: IntersectionObserver + requestAnimationFrame
- Duration: 2200ms, easing: t => 1 - Math.pow(1-t, 4)
- Format: >1M → "X.XM", >1K → "X,XXX", decimal → "X.XX"
- Number: Inter 900 text-4xl text-white, suffix in text-[ACCENT_COLOR]
- Label: text-xs uppercase tracking-widest text-white/50

## Testimonials
py-24, grid grid-cols-3 gap-6

3 cards: bg rgba(255,255,255,0.02), border rgba(99,102,241,0.06), rounded-2xl p-8
- hover: border rgba(99,102,241,0.15), bg rgba(99,102,241,0.03)
- Quote + Author + Role + Company placeholder div
- IntersectionObserver fade-in with stagger

## CTA Banner + Footer
Same structure as other sections. CTA: gradient bg card with button. Footer: border-top, logo + links + copyright.

## Responsive
768px: bento grid-cols-1, stats flex-col, testimonials grid-cols-1, nav links hidden, footer flex-col

## Variables
[PRIMARY_COLOR], [ACCENT_COLOR], [BRAND_NAME], [HEADLINE], [SUBHEADLINE], [CTA_TEXT], [VIDEO_URL], [STAT_1_VALUE], [STAT_1_LABEL], [STAT_2_VALUE], [STAT_2_LABEL], [STAT_3_VALUE], [STAT_3_LABEL]`,

  lovable: `Build a premium AI product landing page. Use CSS animations and transitions only. Keep the component simple and self-contained.

**Stack:** React + Tailwind CSS + TypeScript (single component, no external dependencies beyond React and Tailwind)
**Fonts:** Add to <head>: <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">

## Required CSS Keyframes
\`\`\`css
@keyframes fade-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes blur-in { from { opacity: 0; filter: blur(10px); } to { opacity: 1; filter: blur(0); } }
@keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.3); } 50% { box-shadow: 0 0 30px rgba(99,102,241,0.5); } }
@keyframes gradient-shift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
\`\`\`

## Color System
- Background: #050510 (very dark blue-black)
- Primary: [PRIMARY_COLOR] (default: #6366f1, indigo-500)
- Accent: [ACCENT_COLOR] (default: #818cf8, indigo-400)
- Text: #f8fafc (headings), rgba(148,163,184,0.8) (body), rgba(148,163,184,0.5) (muted)
- Borders: rgba(99,102,241,0.08), hover rgba(99,102,241,0.3)
- Card bg: rgba(255,255,255,0.03)

## Navigation Bar
Fixed top, glassmorphism:
- fixed top-0 w-full z-50, px-4 pt-3
- Inner div: max-w-[1200px] mx-auto, style={{ background: 'rgba(5,5,16,0.6)', backdropFilter: 'blur(24px)', border: '1px solid rgba(99,102,241,0.08)', borderRadius: 16, padding: '1rem 2rem' }}
- flex items-center justify-between
- Logo: [BRAND_NAME] in font-black text-lg, use inline style for gradient: { background: 'linear-gradient(135deg, #818cf8, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }
- Links: 'Features', 'API', 'Pricing', 'Docs' — text-sm text-white/70, hover sets color to white via onMouseEnter/Leave
- CTA: [CTA_TEXT] bg-[PRIMARY_COLOR] text-white rounded-full px-5 py-2 text-sm font-semibold, hover:opacity-90
- animation: fade-up 0.5s ease both

## Hero Section
min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden

Background: absolute inset-0 with subtle radial gradient:
- style={{ background: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 50%)' }}

**Status Badge:**
- inline-flex items-center gap-2, style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 9999, padding: '6px 16px' }}
- Green dot: 6px circle bg-green-500
- Text: uppercase text-xs font-semibold tracking-wide, color: [ACCENT_COLOR]
- animation: blur-in 0.6s ease 0.2s both

**Headline:** "[HEADLINE]" on one line
- Inter font-black, fontSize: 'clamp(3rem, 8vw, 5.5rem)', letterSpacing: '-0.05em', color: '#f8fafc'
- Gradient text via inline style: background: 'linear-gradient(135deg, #f8fafc, #818cf8, #6366f1)', backgroundSize: '200% 200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
- animation: gradient-shift 6s ease infinite, blur-in 0.7s ease 0.4s both

**Word Cycle (simplified):** Below headline, show [BRAND_NAME] with gradient
- Use useState to cycle through 4 words every 3s
- Simple opacity transition: style={{ transition: 'opacity 0.5s ease', opacity: 1 }}
- Gradient text same as morphing words above

**Subheadline:** [SUBHEADLINE]
- text-xl text-white/70 max-w-xl mx-auto mt-6 leading-relaxed
- animation: fade-up 0.6s ease 0.7s both

**CTA Buttons:** mt-10, flex gap-4 items-center
- Primary: bg-[PRIMARY_COLOR] text-white rounded-full px-8 py-3.5 font-semibold
  - animation: pulse-glow 3s ease infinite
  - hover via onMouseEnter: transform scale(1.05)
- Secondary: transparent, border 1px solid rgba(99,102,241,0.2), rounded-full px-8 py-3.5
  - hover: border-color rgba(99,102,241,0.5)

**Trusted By:** 5 company names in a row, text-xs text-white/30 uppercase mt-12
- animation: fade-up 0.5s ease 1.2s both

## Features — Simple Bento Grid
py-32 text-center

Section header:
- Tag: uppercase text-xs tracking-wide text-[ACCENT_COLOR] font-semibold
- Title: font-black text-3xl text-white tracking-tight mb-4
- Subtitle: text-base text-white/60 max-w-lg mx-auto mb-16

Grid: max-w-[1100px] mx-auto, display grid, gridTemplateColumns: 'repeat(3, 1fr)', gap: 16px
- 5 cards with varying spans (use gridColumn: 'span 2' for first card, gridRow: 'span 2' for fourth)
- Each card: style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.08)', borderRadius: 20, padding: 32 }}
- hover (onMouseEnter): borderColor rgba(99,102,241,0.3), transform translateY(-4px)
- transition: all 0.3s ease
- Icon (emoji, text-2xl) + Title (bold text-lg text-white) + Desc (text-sm text-white/65)

## Code Block
py-24, max-w-[680px] mx-auto

Terminal style:
- style={{ background: 'rgba(10,10,25,0.9)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 25px 80px rgba(0,0,0,0.5)' }}
- Top bar with 3 colored dots + filename text
- Code area: monospace font, pre/code tags, basic inline color spans
  - Show a simple API call (no typing animation needed for Lovable, just static highlighted code)
  - Keywords purple (#c678dd), strings green (#98c379), methods blue (#61afef), numbers orange (#d19a66)
- Optional: simple blinking cursor at end via CSS animation: blink 1s step-end infinite

## Stats
py-24, flex justify-center gap-16

3 stats with simple counter animation:
- Use IntersectionObserver + requestAnimationFrame
- Duration: 2000ms, easing: ease-out (t => 1 - Math.pow(1-t, 3))
- Number: font-black text-4xl text-white
- Suffix in text-[ACCENT_COLOR]
- Label: text-xs uppercase tracking-widest text-white/50

## Testimonials
py-24, grid 3 columns gap-6

3 simple cards:
- style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(99,102,241,0.06)', borderRadius: 16, padding: 32 }}
- hover: border-color changes
- Quote (italic text-sm text-white/75), Author (bold text-sm text-white), Role (text-xs text-white/45)
- Company placeholder: 80x28 div with bg rgba(99,102,241,0.08)

## CTA Banner
Centered: max-w-[700px], p-16, gradient bg card
- style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.05))', border: '1px solid rgba(99,102,241,0.12)', borderRadius: 24 }}
- Title + Subtitle + CTA button

## Footer
border-top: 1px solid rgba(255,255,255,0.06), py-12
- flex items-center justify-between (flex-col on mobile)
- Logo + Links + Copyright

## Responsive
@media max-width 768px:
- Grid → single column
- Stats → vertical stack
- Nav links hidden
- Footer → stacked

## Variables
- [PRIMARY_COLOR] → default: #6366f1
- [ACCENT_COLOR] → default: #818cf8
- [BRAND_NAME], [HEADLINE], [SUBHEADLINE], [CTA_TEXT]
- [STAT_1_VALUE], [STAT_1_LABEL], [STAT_2_VALUE], [STAT_2_LABEL], [STAT_3_VALUE], [STAT_3_LABEL]`,
};

export type AIProductHeroPlatform = keyof typeof AI_PRODUCT_HERO_PROMPTS;
