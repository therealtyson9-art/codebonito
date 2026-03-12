// Ultra Premium Template #108 — App Showcase
// 4 platform-specific prompt variants

export const APP_SHOWCASE_PROMPTS = {
  cursor: `Build a premium mobile app showcase landing page with the following exact specifications. This must look like an Apple product page / Headspace / Calm level marketing site.

**Stack:** React 18 + Next.js 14 + Tailwind CSS v3 + Framer Motion 11 + TypeScript
**Fonts:** @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap')

## Color System
- Background: #0A0A12
- Primary: [PRIMARY_COLOR] (default: #A855F7)
- Accent: [ACCENT_COLOR] (default: #EC4899)
- Text primary: #f8fafc
- Text secondary: rgba(248,250,252,0.6)
- Text muted: rgba(255,255,255,0.45)
- Border: rgba(168,85,247,0.08)
- Border hover: rgba(168,85,247,0.2)
- Glass bg: rgba(255,255,255,0.03)

## Navigation Bar
Fixed dark navbar:
- Position: fixed top-0 left-0 right-0 z-50
- Container: max-w-[1100px] mx-auto px-6 py-4
- Background: rgba(10,10,18,0.85) with backdropFilter: blur(20px) saturate(1.4)
- Border-bottom: 1px solid rgba(168,85,247,0.06)
- Left: App icon (32x32 rounded-[10px], gradient bg [PRIMARY_COLOR] → [ACCENT_COLOR], white letter) + "[BRAND_NAME]" in Inter 800, 18px, gradient text
- Center/Right: Links for 'Features', 'Reviews', 'Download' in Inter 500, 14px, text-white/60, hover: text-white

## Phone Mockup Component (CSS-Only, Reusable)
Create a realistic phone mockup using only CSS:
- Outer frame: border-radius 40px (lg) or 28px (sm), border: 3px solid rgba(255,255,255,0.15)
- Background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))
- Box-shadow: 0 0 0 1px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)
- Notch: centered at top, width 120px (lg) / 86px (sm), height 28px (lg) / 20px (sm), bg #000, border-radius: 0 0 18px 18px
- Camera dot inside notch: 8x8 circle with radial-gradient(circle, rgba(30,30,50,1) 40%, rgba(20,20,40,1))
- Status bar: "9:41" left, signal+battery SVG icons right, 11px Inter 600
- Home indicator: centered bottom bar, width 100px (lg) / 70px (sm), h-1, rounded, rgba(255,255,255,0.3)
- Screen area: positioned below notch, accepts children content
- Two sizes: lg (280x580) and sm (200x415)

## Hero Section
min-h-screen, flex column center, text-center, padding: 120px 24px 80px, relative, overflow hidden

**Background glow:** Absolutely positioned 700x700 circle at 15% top, centered
- radial-gradient(circle, rgba(168,85,247,0.15), rgba(236,72,153,0.08) 40%, transparent 70%)
- filter: blur(60px), animation: glow-pulse 6s ease-in-out infinite

**Rotating ring:** 500x500 circle, 1px border rgba(168,85,247,0.08), animation: rotate-slow 30s linear infinite

**Badge:** Above headline — pill shape, rgba(168,85,247,0.08) bg, 1px solid rgba(168,85,247,0.2), green dot + "[BADGE_TEXT]" in uppercase 12px

**Headline:** "[HEADLINE]" — clamp(40px, 6vw, 72px), Inter 800, letter-spacing: -0.04em, max-w-700
- Key word wrapped in gradient text span (PRIMARY → ACCENT)

**Subheadline:** "[SUBHEADLINE]" — 18px, text-secondary, max-w-500, line-height 1.6

**CTA buttons:** Two store buttons side by side
- App Store: glass bg (rgba(255,255,255,0.12) → rgba(255,255,255,0.04)), 1px solid rgba(255,255,255,0.15), Apple emoji + "Download on the / App Store"
- Google Play: gradient bg (PRIMARY → ACCENT), Play emoji + "Get it on / Google Play"
- Both: padding 14px 28px, rounded-[14px], Inter 600 15px, hover scale(1.05) + box-shadow

**Phone mockup:** Large PhoneMockup (lg) centered below CTAs
- animation: phone-float 5s ease-in-out infinite (0→-18px→0)
- Subtle parallax: transform translateY(scrollY * -0.08)
- Screen content: gradient bg (PRIMARY → ACCENT), centered icon + "Good Morning" + "Ready for your session?" + pill button

@keyframes phone-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-18px); }
}
@keyframes glow-pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}
@keyframes rotate-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

## Stats Section
Centered card with 3 stats side-by-side:
- Container: glass bg, 1px solid rgba(168,85,247,0.08), rounded-[20px], flex row
- Stats separated by 1px vertical borders
- Each stat: padding 36px 24px, text-center
  - Value: 40px Inter 800, gradient text (PRIMARY → ACCENT), animated counter on scroll intersection
  - Suffix inline with value (e.g., "M+", "★", "+")
  - Label: 14px Inter 500, rgba(255,255,255,0.5), margin-top 6px
- Values: "[STAT_DOWNLOADS]" downloads, "[STAT_RATING]"★ rating, "[STAT_COUNTRIES]"+ countries

Counter animation: IntersectionObserver threshold 0.3, requestAnimationFrame, 2s duration, ease-out-quart easing

## Screenshots Section
Horizontal scroll of 4 phone mockups (sm size):
- Section heading: "Beautiful on every screen" + subtitle
- Phones arranged with alternating rotation: rotate(-3deg)/rotate(3deg) and alternating vertical offset
- Each phone has gradient screen content (different gradients per screen)
- Screen content: centered placeholder icon (48x48 rounded square) + label text + skeleton lines
- scroll-snap-type: x mandatory on container

## Features Section
Icon + text pairs arranged around centered phone mockup:
- 3 features on left (text-align: right), phone in center, 3 features on right (text-align: left)
- Each feature: emoji icon (28px) + title (17px Inter 700) + description (14px, text-muted, line-height 1.6)
- Center phone: lg PhoneMockup with "Daily Progress" screen content (chart bars, streak, next session card)
- Subtle parallax on center phone: translateY(scrollY * -0.03)
- Radial glow behind center phone: 350x350 circle, rgba(168,85,247,0.12), blur(40px)

## Testimonials Section
Grid of app store review cards:
- grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)), gap 20px
- Each card: padding 28px, rounded-[20px], glass bg, border rgba(168,85,247,0.08)
  - Star rating: 5 yellow ★ (16px), color #FBBF24 for filled, rgba(255,255,255,0.15) for empty
  - Quote: 15px, rgba(255,255,255,0.75), line-height 1.6, with curly quotes
  - Author name: 14px Inter 700 + date: 12px rgba(255,255,255,0.3), flex space-between
- Hover: border-color rgba(168,85,247,0.2), translateY(-4px), transition 0.3s

## Download CTA Section
Side-by-side: phone mockup + text content:
- Background glow: 800x500 radial gradient, blur(80px)
- Left: PhoneMockup (lg) with "Sleep Mode" screen content (moon icon, title, progress bar, playback controls)
  - animation: phone-float 6s ease-in-out infinite
- Right: "Start your journey [tonight]" headline (gradient word), subtitle, store buttons
- Flex row, gap 64px, center aligned, wrap on mobile

## Footer
Minimal dark footer:
- max-w-1100, mx-auto, py-12, border-top 1px solid rgba(168,85,247,0.06)
- Flex space-between: logo (small icon + brand), links (Privacy, Terms, Support, Blog), copyright
- Links: 13px, rgba(255,255,255,0.3), hover: rgba(255,255,255,0.6)

## Scroll Animations (No Framer Motion in demo, pure CSS + IntersectionObserver)
FadeIn component:
- Initial: opacity 0, translateY(36px)
- Visible: opacity 1, translateY(0)
- transition: 0.7s cubic-bezier(0.23,1,0.32,1) with configurable delay
- IntersectionObserver threshold 0.15, disconnect after first trigger

## Variables
Replace these placeholders:
- [BRAND_NAME] = App name (default: "Zenith")
- [PRIMARY_COLOR] = Primary purple (default: #A855F7)
- [ACCENT_COLOR] = Accent pink (default: #EC4899)
- [HEADLINE] = Hero headline (default: "Your mind, reimagined")
- [SUBHEADLINE] = Hero subtitle (default: "Meditation, sleep, and focus — beautifully designed and powered by AI that learns how you feel.")
- [CTA_TEXT] = Button text
- [BADGE_TEXT] = Status badge text (default: "#1 Wellness App 2026")
- [STAT_DOWNLOADS] = Download count (default: "2M+")
- [STAT_RATING] = App rating (default: "4.9")
- [STAT_COUNTRIES] = Countries (default: "130+")

Generate a single self-contained "use client" page.tsx with ALL styles inline. No external CSS files. No image assets required — all visuals are CSS-only.`,

  v0: `Create a premium mobile app showcase landing page for "[BRAND_NAME]". Apple product page quality.

Dark theme (#0A0A12 background), purple ([PRIMARY_COLOR] #A855F7) and pink ([ACCENT_COLOR] #EC4899) gradient accents.

Use Framer Motion for animations, Tailwind CSS for layout, Inter font (800 headlines, 400 body).

Sections in order:

1. **Navbar** — Fixed, glassmorphism (blur 20px), app icon (gradient square with letter) + brand name (gradient text), nav links (Features, Reviews, Download)

2. **Hero** — Full viewport, centered content:
   - Pill badge: green dot + "[BADGE_TEXT]" uppercase
   - Headline: "[HEADLINE]" (clamp 40-72px, Inter 800, key word in gradient text)
   - Subtitle: "[SUBHEADLINE]" (18px, muted)
   - Two store buttons: App Store (glass) + Google Play (gradient)
   - CSS-only phone mockup below: realistic frame (border-radius 40px, 3px border rgba(255,255,255,0.15)), notch (120px wide, #000, rounded bottom), status bar (9:41 + battery), home indicator bar
   - Phone floats: animation translateY 0→-18px→0 over 5s
   - Gradient glow behind phone: 700px circle, blur 60px, pulsing opacity
   - Slow rotating ring decoration: 500px circle, 1px border, 30s rotation

3. **Stats** — Glass card, 3 stats row: [STAT_DOWNLOADS] downloads, [STAT_RATING]★ rating, [STAT_COUNTRIES]+ countries. Animated counters (IntersectionObserver + requestAnimationFrame, 2s ease-out). Gradient text values.

4. **Screenshots** — 4 small phone mockups (200x415), alternating ±3deg rotation, horizontal scroll. Each with different gradient screen content + placeholder UI.

5. **Features** — 6 features split 3-left, 3-right around centered phone mockup. Left features right-aligned, right features left-aligned. Each: emoji (28px) + title (17px bold) + desc (14px muted). Center phone shows "Daily Progress" with chart bars.

6. **Reviews** — Auto-fit grid of app review cards. Each: yellow star rating (★), quoted text, author + date. Glass bg, hover lift + border glow.

7. **Download CTA** — Phone mockup (floating animation) + headline + subtitle + store buttons. Large radial glow background.

8. **Footer** — Minimal: small logo, links (Privacy, Terms, Support, Blog), copyright. Dark, subtle border-top.

All scroll reveals use IntersectionObserver: opacity 0→1, translateY 36→0px, 0.7s cubic-bezier(0.23,1,0.32,1). Staggered delays.

Phone mockups are entirely CSS — no images. Include notch with camera dot, status bar, home indicator. All styles inline.`,

  bolt: `Build a mobile app showcase landing page. Premium quality like Apple product pages.

Tech: React + TypeScript. ALL styles inline (no CSS files). Self-contained single component.

Color palette:
- bg: #0A0A12
- primary: [PRIMARY_COLOR] (#A855F7 purple)
- accent: [ACCENT_COLOR] (#EC4899 pink)
- text: #f8fafc
- text-muted: rgba(255,255,255,0.45)
- borders: rgba(168,85,247,0.08)
- glass: rgba(255,255,255,0.03)

Font: Inter, weights 400/600/800. Headlines 800, body 400.

Required sections:

**Navbar:** Fixed, blur backdrop, app icon (gradient square 32px, rounded-10, white letter) + "[BRAND_NAME]" gradient text (Inter 800), nav links right.

**Hero:** Full viewport centered. Pill badge (green dot + text). Large headline "[HEADLINE]" (clamp 40-72px, key word gradient). Subtitle "[SUBHEADLINE]". Two store buttons (App Store: glass bg; Google Play: gradient bg). Below: CSS phone mockup floating animation (translateY 0 to -18px, 5s loop). Phone frame: 280x580, border-radius 40px, 3px border rgba(255,255,255,0.15), notch centered top (120x28, black, rounded bottom), camera dot (8px circle), status bar "9:41" + icons, home bar bottom. Gradient glow behind (700px blur circle).

**Stats:** Glass card, 3 stats horizontal: [STAT_DOWNLOADS] / [STAT_RATING]★ / [STAT_COUNTRIES]+. Counter animation on scroll (IntersectionObserver, 2s, ease-out-quart). Values in gradient text 40px.

**Screenshots:** 4 small phone mockups (200x415) side by side, alternating ±3° rotation, gradient screens with placeholder UI.

**Features:** 3 left + phone center + 3 right. Left text-align right, right text-align left. Emoji icons + title + description each. Center phone shows progress dashboard.

**Reviews:** Grid of review cards. Star ratings (yellow ★), quoted text, author + date. Glass cards, hover: lift + border glow.

**Download CTA:** Phone mockup with sleep mode screen + store buttons beside it. Background glow.

**Footer:** Minimal — logo, links, copyright. Dark.

Animations: phone-float keyframes, glow-pulse keyframes, scroll fade-in (IntersectionObserver, opacity + translateY, 0.7s cubic-bezier). No Framer Motion dependency.

Variables: [BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [BADGE_TEXT], [STAT_DOWNLOADS], [STAT_RATING], [STAT_COUNTRIES].`,

  lovable: `Create a stunning mobile app showcase landing page for "[BRAND_NAME]". Think Apple product pages, Headspace, Calm — premium and clean.

Design specs:
- Dark background #0A0A12
- Purple primary [PRIMARY_COLOR] (#A855F7), pink accent [ACCENT_COLOR] (#EC4899)
- Inter font: 800 weight headlines, 400 body
- All styles inline, single self-contained React component
- CSS-only phone mockups (no images needed)

Layout (top to bottom):

1. **Fixed navbar** — Glassmorphism (blur 20px), dark bg. Left: 32px gradient icon + "[BRAND_NAME]" in gradient text. Right: nav links (Features, Reviews, Download).

2. **Hero section** — Full viewport, centered:
   - Status badge pill (green dot + "#1 Wellness App 2026")
   - "[HEADLINE]" in 40-72px clamp, Inter 800, one word gradient colored
   - "[SUBHEADLINE]" in 18px muted text
   - App Store button (glass style) + Google Play button (gradient style)
   - Large phone mockup (280x580): CSS frame with rounded corners (40px), notch (120x28 black), camera dot, status bar "9:41", home indicator bar at bottom
   - Phone has floating/bobbing animation (5s, translateY -18px)
   - Gradient glow orb behind phone (700px, blur 60px, pulsing)
   - Subtle rotating ring decoration

3. **Stats bar** — Glass card with "[STAT_DOWNLOADS] Downloads · [STAT_RATING]★ Rating · [STAT_COUNTRIES]+ Countries". Animated number counters triggered by scroll. Gradient text for values.

4. **Screenshots carousel** — 4 small phone mockups (200x415) with alternating tilt (±3°), different gradient screens, horizontal layout.

5. **Features** — 6 features (emoji + title + description) arranged 3 on left, phone in center, 3 on right. Left features right-aligned, right features left-aligned.

6. **Testimonials** — Grid of review cards with star ratings (yellow ★), quotes, author names, dates. Glass background, hover lift effect.

7. **Download CTA** — Side-by-side: floating phone mockup with sleep screen + "Start your journey tonight" headline + store buttons. Radial glow background.

8. **Footer** — Minimal: small logo, links (Privacy, Terms, Support, Blog), copyright text.

Scroll animations: Every section fades in (opacity 0→1, translateY 36→0, 0.7s ease). Use IntersectionObserver, not a library. Stagger delays for child elements.

Variables to customize: [BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT], [BADGE_TEXT], [STAT_DOWNLOADS], [STAT_RATING], [STAT_COUNTRIES].`
};
