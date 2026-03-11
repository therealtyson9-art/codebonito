// Ultra Premium Template #101 — SaaS Dark Motion
// 4 platform-specific prompt variants

export const SAAS_MOTION_PROMPTS = {
  cursor: `Build a premium dark SaaS hero section with the following exact specifications.

**Stack:** React 18 + Next.js 14 + Tailwind CSS v3 + Framer Motion 11 + TypeScript
**Fonts:** @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Instrument+Serif:ital@1&display=swap')

## Video Background
Full-screen looping video background using this URL: [VIDEO_URL]
The video must be muted, autoplaying, loop, playsInline, and set to object-cover filling the entire section. Apply a dark overlay on top: absolute inset-0 with bg-gradient-to-b from-[#050510]/80 via-[#050510]/60 to-[#050510].

## Navigation Bar
Floating glassmorphism navbar with:
- Position: fixed top-0 w-full z-50
- Container: max-w-6xl mx-auto mt-4 px-6
- Background: bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl
- Left: [BRAND_NAME] logo in Inter 700 text-white text-lg tracking-[-0.02em]
- Center: Links for 'Features', 'Pricing', 'Docs', 'Blog' in Inter 400 text-sm text-white/60 hover:text-white transition-colors duration-200
- Right: CTA button "[CTA_TEXT]" with bg-[PRIMARY_COLOR] text-white rounded-full px-5 py-2 text-sm font-medium
- Hover on CTA: whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}

## Corner Accents
Four 8x8px squares positioned absolute in the hero corners:
- top-8 left-8, top-8 right-8, bottom-8 left-8, bottom-8 right-8
- bg-[ACCENT_COLOR]/60
- Animate in with Framer Motion: initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.4, ease: "easeOut" }}

## Hero Content (centered, z-10 relative)
min-h-screen flex flex-col items-center justify-center text-center px-6

**Badge:** Above headline, a small pill: bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/70 tracking-wide uppercase
- Text: "Trusted by 10,000+ teams"
- Framer Motion: initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.6, delay: 0.2 }}

**Headline Line 1:** "[HEADLINE]"
- Font: Inter 900, text-[72px] leading-[1.05] tracking-[-0.04em] text-white uppercase
- Framer Motion: split by word, each word wrapped in motion.span
- Each word: initial={{ opacity: 0, y: 40, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
- Stagger: transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: [0.23, 1, 0.32, 1] }}

**Headline Line 2:** "[SUBHEADLINE]"
- Font: 'Instrument Serif', italic, text-[76px] leading-[1.1] text-white/90
- Framer Motion: initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}

**Subtext:** "A short description of what your product does and why it matters."
- Font: Inter 400, text-lg text-white/50 max-w-xl mx-auto mt-6
- Framer Motion: initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.0 }}

**CTA Button:** Below subtext, mt-10
- Base: bg-[PRIMARY_COLOR] text-white rounded-full px-8 py-4 text-base font-semibold relative overflow-hidden
- Glow div BEHIND button: absolute -inset-1 bg-[PRIMARY_COLOR] rounded-full blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-300
- Shimmer pseudo-element: absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
  - CSS: @keyframes shimmer-slide { from { transform: translateX(-100%) } to { transform: translateX(200%) } }
  - Apply on hover: animation: shimmer-slide 1.5s ease-in-out
- Framer Motion on button: whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(99,102,241,0.5)" }} whileTap={{ scale: 0.97 }}
- transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}

## Feature Cards Section
mt-32 max-w-5xl mx-auto grid grid-cols-3 gap-6 px-6

Each card (3 total):
- bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8
- Icon: text-[ACCENT_COLOR] text-2xl mb-4
- Title: Inter 700 text-lg text-white mb-2
- Description: Inter 400 text-sm text-white/50 leading-relaxed

**3D Tilt on hover (Framer Motion):**
- Track mouse position with useMotionValue for x and y
- Calculate rotateX and rotateY using useTransform: map mouse position to [-12, 12] degrees
- Apply: style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
- On hover, add border glow: border-[ACCENT_COLOR]/30 shadow-[0_0_30px_rgba(99,102,241,0.15)]
- transition={{ type: "spring", stiffness: 300, damping: 30 }}

**Inner glow:** Inside each card, a div that follows cursor position:
- absolute inset-0 rounded-2xl pointer-events-none
- background: radial-gradient(circle at {mouseX}% {mouseY}%, rgba(99,102,241,0.25) 0%, transparent 60%)

## Stats Section
mt-24 flex justify-center gap-16

3 stats: [STAT_1_VALUE]+, [STAT_2_VALUE]%, [STAT_3_VALUE]K
- Number: Inter 900 text-5xl text-white
- Label: Inter 400 text-sm text-white/40 mt-2 uppercase tracking-wide

**Animated counter (Framer Motion):**
- Use useInView to detect when stats enter viewport
- Animate from 0 to target value using motion.span with:
  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
- useEffect + requestAnimationFrame for smooth counting
  - Duration: 2000ms
  - Easing: cubic-bezier(0.16, 1, 0.3, 1) — aggressive ease-out
  - Only trigger once (useInView({ once: true }))

## Gradient Text Effect
For any text that should pop, use:
background: linear-gradient(135deg, [PRIMARY_COLOR], [ACCENT_COLOR])
-webkit-background-clip: text
-webkit-text-fill-color: transparent

## Color Variables
Replace these with your brand:
- [PRIMARY_COLOR] → default: #6366f1 (indigo-500)
- [ACCENT_COLOR] → default: #818cf8 (indigo-400)
- [BRAND_NAME] → your company name
- [HEADLINE] → main headline text
- [SUBHEADLINE] → italic serif line
- [CTA_TEXT] → button text
- [VIDEO_URL] → your video URL (MP4, muted, looping)
- [STAT_1_VALUE], [STAT_2_VALUE], [STAT_3_VALUE] → your numbers`,

  v0: `Build a premium dark SaaS hero section with the following exact specifications.

**Stack:** React + Next.js + Tailwind CSS + Framer Motion (basic) + TypeScript
**Fonts:** @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Instrument+Serif:ital@1&display=swap')

## Video Background
Full-screen looping video background. Use an HTML5 <video> tag:
- src="[VIDEO_URL]", muted, autoPlay, loop, playsInline
- className="absolute inset-0 w-full h-full object-cover"
- Dark overlay on top: div with className="absolute inset-0 bg-gradient-to-b from-[#050510]/80 via-[#050510]/60 to-[#050510]"

## Navigation Bar
Floating glassmorphism navbar:
- fixed top-0 w-full z-50, inner container: max-w-6xl mx-auto mt-4 px-6
- Style: bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl py-3
- Left: [BRAND_NAME] in Inter font-bold text-white text-lg tracking-tight
- Center: 'Features', 'Pricing', 'Docs', 'Blog' links in text-sm text-white/60 hover:text-white
- Right: "[CTA_TEXT]" button bg-[PRIMARY_COLOR] text-white rounded-full px-5 py-2 text-sm font-medium hover:brightness-110

## Corner Accents
Four 8x8px divs at hero corners (absolute positioned):
- top-8 left-8, top-8 right-8, bottom-8 left-8, bottom-8 right-8
- bg-[ACCENT_COLOR]/60

## Hero Content
Centered layout: min-h-screen flex flex-col items-center justify-center text-center px-6

**Badge:** bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/70 uppercase tracking-wide
- Text: "Trusted by 10,000+ teams"
- Animate with motion.div: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}

**Headline Line 1:** "[HEADLINE]"
- Inter font-black text-7xl leading-tight tracking-[-0.04em] text-white uppercase
- Animate with motion.h1: initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}

**Headline Line 2:** "[SUBHEADLINE]"
- font-family: 'Instrument Serif', italic, text-7xl leading-tight text-white/90
- Animate with motion.p: initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}

**Subtext:** Inter text-lg text-white/50 max-w-xl mx-auto mt-6
- motion.p: initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.0 }}

**CTA Button:** mt-10 relative group
- bg-[PRIMARY_COLOR] text-white rounded-full px-8 py-4 text-base font-semibold
- Shadow: shadow-[0_0_30px_rgba(99,102,241,0.4)]
- Hover: hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] hover:brightness-110
- Glow div behind: absolute -inset-1 bg-[PRIMARY_COLOR] rounded-full blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-300
- motion.button: whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}

## Feature Cards
mt-32 max-w-5xl mx-auto grid grid-cols-3 gap-6 px-6

Each card:
- bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8
- hover:border-[ACCENT_COLOR]/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300
- hover:-translate-y-1 (CSS transform)
- Icon: text-[ACCENT_COLOR] text-2xl mb-4
- Title: Inter font-bold text-lg text-white mb-2
- Desc: Inter text-sm text-white/50

Stagger cards with motion.div: transition={{ delay: index * 0.15 }}

## Stats
mt-24 flex justify-center gap-16
3 stats with animated counters using useEffect + requestAnimationFrame
- Number: Inter font-black text-5xl text-white
- Label: text-sm text-white/40 mt-2 uppercase tracking-wide

## Color Variables
- [PRIMARY_COLOR] → default: #6366f1
- [ACCENT_COLOR] → default: #818cf8
- [BRAND_NAME], [HEADLINE], [SUBHEADLINE], [CTA_TEXT], [VIDEO_URL]
- [STAT_1_VALUE], [STAT_2_VALUE], [STAT_3_VALUE]`,

  bolt: `Build a premium dark SaaS hero section with the following exact specifications. Use ONLY CSS animations and transitions — no Framer Motion or external animation libraries.

**Stack:** React + Next.js + Tailwind CSS + TypeScript (NO external animation dependencies)
**Fonts:** @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Instrument+Serif:ital@1&display=swap')

## Required CSS Keyframes (add to globals.css)
\`\`\`css
@keyframes fade-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes blur-in { from { opacity: 0; transform: translateY(20px); filter: blur(10px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
@keyframes shimmer-slide { from { transform: translateX(-100%); } to { transform: translateX(200%); } }
@keyframes mesh-move { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
@keyframes glow-pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.5; } }
\`\`\`

## Video Background
Full-screen looping video:
- <video src="[VIDEO_URL]" muted autoPlay loop playsInline className="absolute inset-0 w-full h-full object-cover" />
- Overlay: absolute inset-0 bg-gradient-to-b from-[#050510]/80 via-[#050510]/60 to-[#050510]

## Navigation Bar
Floating glassmorphism:
- fixed top-0 w-full z-50
- Inner: max-w-6xl mx-auto mt-4 px-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl py-3
- Style the backdrop: backdrop-filter: blur(20px) saturate(1.4); -webkit-backdrop-filter: blur(20px) saturate(1.4);
- Left: [BRAND_NAME] Inter font-bold text-lg text-white tracking-[-0.02em]
- Center: links text-sm text-white/60 hover:text-white transition-colors duration-200
- Right: [CTA_TEXT] bg-[PRIMARY_COLOR] rounded-full px-5 py-2 text-sm font-medium text-white hover:brightness-110 transition-all duration-200

## Corner Accents
Four 8x8px absolute divs at hero corners:
- top-8 left-8, top-8 right-8, bottom-8 left-8, bottom-8 right-8
- bg-[ACCENT_COLOR]/60
- animation: fade-up 0.4s ease-out 1.2s both

## Hero Content
min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10

**Badge:** bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/70 uppercase tracking-wide
- animation: blur-in 0.6s ease-out 0.2s both

**Headline Line 1:** "[HEADLINE]"
- Inter font-black text-[72px] leading-[1.05] tracking-[-0.04em] text-white uppercase
- animation: blur-in 0.6s ease-out 0.4s both

**Headline Line 2:** "[SUBHEADLINE]"
- font-family: 'Instrument Serif', italic; font-size: 76px; line-height: 1.1; color: rgba(255,255,255,0.9)
- animation: blur-in 0.7s ease-out 0.8s both

**Subtext:** Inter text-lg text-white/50 max-w-xl mx-auto mt-6
- animation: fade-up 0.5s ease-out 1.0s both

**CTA Button:** mt-10 relative group inline-flex
- bg-[PRIMARY_COLOR] text-white rounded-full px-8 py-4 text-base font-semibold
- box-shadow: 0 0 30px rgba(99,102,241,0.4)
- hover: box-shadow: 0 0 50px rgba(99,102,241,0.6); transform: scale(1.05)
- active: transform: scale(0.97)
- transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1)
- Glow div behind: absolute -inset-1 bg-[PRIMARY_COLOR] rounded-full blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-300
- Shimmer on hover: .cta-btn:hover::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); animation: shimmer-slide 1.5s ease-in-out; }
- animation: fade-up 0.5s ease-out 1.1s both

## Feature Cards
mt-32 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6

Each card:
- bg-white/5 border border-white/10 rounded-2xl p-8
- backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
- hover: border-color: [ACCENT_COLOR]/30; box-shadow: 0 0 30px rgba(99,102,241,0.15); transform: translateY(-4px);
- transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1)
- animation: fade-up 0.5s ease-out calc(1.2s + var(--i) * 0.15s) both (set --i as 0, 1, 2)

## Stats with CSS Counters
mt-24 flex justify-center gap-16
Use Intersection Observer API + requestAnimationFrame for smooth counting:
- Easing: cubic-bezier(0.16, 1, 0.3, 1) over 2000ms
- Number: Inter font-black text-5xl text-white
- Label: text-sm text-white/40 mt-2 uppercase tracking-wide

## Color Variables
- [PRIMARY_COLOR] → default: #6366f1
- [ACCENT_COLOR] → default: #818cf8
- [BRAND_NAME], [HEADLINE], [SUBHEADLINE], [CTA_TEXT], [VIDEO_URL]
- [STAT_1_VALUE], [STAT_2_VALUE], [STAT_3_VALUE]`,

  lovable: `Build a premium dark SaaS hero section with the following exact specifications. Use CSS animations and transitions only. Keep the component structure simple and self-contained.

**Stack:** React + Tailwind CSS + TypeScript (single component, no external dependencies)
**Fonts:** Add to <head>: <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Instrument+Serif:ital@1&display=swap" rel="stylesheet">

## Add these CSS keyframes
\`\`\`css
@keyframes fade-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes blur-in { from { opacity: 0; filter: blur(10px); transform: translateY(20px); } to { opacity: 1; filter: blur(0); transform: translateY(0); } }
@keyframes glow-pulse { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.5; } }
\`\`\`

## Layout Structure
Single component with min-h-screen, relative, overflow-hidden, bg-[#050510]

## Video Background
<video> tag with src="[VIDEO_URL]", muted, autoPlay, loop, playsInline
- className: absolute inset-0 w-full h-full object-cover opacity-60
- Overlay div: absolute inset-0 bg-gradient-to-b from-[#050510]/80 via-[#050510]/60 to-[#050510]

## Navigation Bar
Fixed top, glassmorphism style:
- Outer: fixed top-0 w-full z-50 px-4 pt-4
- Inner: max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between
- Use inline style for backdrop: style={{ backdropFilter: 'blur(20px) saturate(1.4)' }}
- Logo: [BRAND_NAME] in font-bold text-lg text-white
- Links: text-sm text-white/60 hover:text-white
- CTA: [CTA_TEXT] bg-[PRIMARY_COLOR] text-white rounded-full px-5 py-2 text-sm hover:opacity-90

## Corner Accents
4 divs, 8x8px, bg-[ACCENT_COLOR]/60, absolute in hero corners
- Style: animation: fade-up 0.4s ease-out 1.2s both

## Hero Content
Centered: flex flex-col items-center justify-center text-center px-6 relative z-10 pt-32 pb-20

**Badge:** bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/70 uppercase tracking-wider
- Style: animation: blur-in 0.6s ease-out 0.2s both

**Headline:** Two lines:
1. "[HEADLINE]" — Inter font-black text-6xl lg:text-7xl tracking-tight text-white uppercase; animation: blur-in 0.6s ease-out 0.4s both
2. "[SUBHEADLINE]" — style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }} text-6xl lg:text-7xl text-white/90; animation: blur-in 0.7s ease-out 0.8s both

**Subtext:** text-lg text-white/50 max-w-xl mx-auto mt-6; animation: fade-up 0.5s ease-out 1.0s both

**CTA Button:** mt-10 group relative inline-flex
- bg-[PRIMARY_COLOR] text-white rounded-full px-8 py-4 font-semibold
- Style: boxShadow: '0 0 30px rgba(99,102,241,0.4)', transition: 'all 0.2s cubic-bezier(0.23, 1, 0.32, 1)'
- onMouseEnter: scale(1.05) + boxShadow increase
- onMouseLeave: scale(1) + boxShadow reset
- Glow div: absolute -inset-1 bg-[PRIMARY_COLOR] rounded-full blur-lg opacity-20 group-hover:opacity-60 transition-opacity

## Feature Cards
Grid of 3, mt-32, gap-6:
- bg-white/5 border border-white/10 rounded-2xl p-8
- Hover: border-[ACCENT_COLOR]/30, translateY(-4px), box-shadow
- Transition: all 0.3s ease
- Stagger: animation-delay: calc(1.2s + index * 150ms)
- Icon, title (font-bold text-lg text-white), desc (text-sm text-white/50)

## Stats
3 numbers with Intersection Observer counting animation:
- requestAnimationFrame, 2000ms duration, ease-out
- Number: font-black text-5xl text-white
- Label: text-sm text-white/40 uppercase

## Color Variables
- [PRIMARY_COLOR] → default: #6366f1
- [ACCENT_COLOR] → default: #818cf8
- [BRAND_NAME], [HEADLINE], [SUBHEADLINE], [CTA_TEXT], [VIDEO_URL]
- [STAT_1_VALUE], [STAT_2_VALUE], [STAT_3_VALUE]`,
};

export type UltraPlatform = keyof typeof SAAS_MOTION_PROMPTS;
