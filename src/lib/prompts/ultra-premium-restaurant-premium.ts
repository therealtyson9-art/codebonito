// Ultra Premium Template #110 — Restaurant / Food Premium
// 4 platform-specific prompt variants

export const RESTAURANT_PREMIUM_PROMPTS = {
  cursor: `Build a premium restaurant landing page with the following exact specifications. This must look like a high-end fine dining website — warm, inviting, food-focused, inspired by Eleven Madison Park and Noma.

**Stack:** React 18 + Next.js 14 + Tailwind CSS v3 + Framer Motion 11 + TypeScript
**Fonts:** @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;700&display=swap')

## Color System
- Background: #1A1410 (warm dark brown/charcoal)
- Primary/Accent text: [PRIMARY_COLOR] (default: #C9A96E — gold)
- Warm accent: [ACCENT_COLOR] (default: #8B4513 — warm brown)
- Text muted: rgba(201,169,110,0.5)
- Text faint: rgba(201,169,110,0.4)
- Text ghost: rgba(201,169,110,0.25)
- Border subtle: rgba(201,169,110,0.08)
- Border hover: rgba(201,169,110,0.2)
- Input bg: rgba(201,169,110,0.04)
- Input border: rgba(201,169,110,0.12)
- Selection: rgba(201,169,110,0.3)
- Overlay: rgba(26,20,16,0.6)
- Warm glow: rgba(201,169,110,0.06)

## Navigation Bar
Transparent navbar with scroll effect:
- Position: fixed top-0 left-0 right-0 z-50
- Padding: 24px 48px
- Display: flex, justify-content: space-between, align-items: center
- Default: background transparent
- On scroll > 60px: background rgba(26,20,16,0.92), backdropFilter: blur(20px), border-bottom: 1px solid rgba(201,169,110,0.12)
- Transition: all 0.4s cubic-bezier(0.23,1,0.32,1)
- Center/Left: [BRAND_NAME] in Playfair Display 700, 28px, color: [PRIMARY_COLOR], letterSpacing: -0.02em
- Right: "Menu" and "Reserve" links
  - Inter 400, 13px, uppercase, letterSpacing: 0.08em
  - Color: rgba(201,169,110,0.6), hover: [PRIMARY_COLOR]
  - Transition: color 0.3s ease
  - Gap: 36px

## Hero Section
Full viewport height, centered layout:
- min-height: 100vh, display: flex, flexDirection: column, justifyContent: center, alignItems: center
- textAlign: center, position: relative
- Background: linear-gradient(180deg, rgba(26,20,16,0.3) 0%, #1A1410 100%), radial-gradient(ellipse at 50% 30%, rgba(139,69,19,0.15) 0%, transparent 70%)

**Warm Glow Overlay:**
- Position: absolute inset-0, pointerEvents: none
- radial-gradient(ellipse at 50% 40%, rgba(201,169,110,0.06) 0%, transparent 60%)

**Grain Overlay:**
- Position: absolute inset-0, pointerEvents: none
- Inline SVG noise texture via CSS backgroundImage data URI (feTurbulence fractalNoise, baseFrequency 0.85)
- Opacity: 0.03

**Content (max-width: 900px):**
- Decorative gold line: 60px wide, 1px tall, [PRIMARY_COLOR], margin: 0 auto 32px
  - Framer Motion: initial={{ scaleX: 0 }}, animate={{ scaleX: 1 }}, transition: 1s
- Subtitle: "Fine Dining Experience" in Inter 12px, uppercase, letterSpacing: 0.2em, rgba(201,169,110,0.5)
  - Fade up animation with 0.2s delay
- Headline: "[HEADLINE]" (default: "An experience for the senses") in Playfair Display 700
  - fontSize: clamp(40px, 6vw, 80px), lineHeight: 1.1, letterSpacing: -0.02em
  - Second line in italic, fontWeight: 400
  - Framer Motion: fade up, 1s, 0.3s delay
- Subtext: "[SUBHEADLINE]" in Inter 16px, lineHeight: 1.7, rgba(201,169,110,0.45), maxWidth: 500px
  - Fade up with 0.6s delay

**Scroll Indicator:**
- Position absolute bottom-48px, centered
- "Scroll" text: Inter 10px, uppercase, letterSpacing: 0.15em, rgba(201,169,110,0.3)
- Below: 1px wide, 40px tall div with linear-gradient(to bottom, [PRIMARY_COLOR], transparent)
- CSS animation: scrollPulse 2s ease-in-out infinite (opacity 0.3→0.8→0.3)
- Appears with 1.2s delay

## About Section
Split layout, padding: 140px 48px, maxWidth: 1200px, grid: 1fr 1fr, gap: 80px:

**Left — Text:**
- Label: "Our Story" Inter 12px uppercase, letterSpacing: 0.15em, [ACCENT_COLOR]
- Headline: "A passion for perfection" Playfair Display 700, clamp(28px, 3.5vw, 44px), second line italic
- Two paragraphs about the chef/restaurant philosophy
  - Inter 15px, lineHeight: 1.8, rgba(201,169,110,0.45) and rgba(201,169,110,0.35)
  - maxWidth: 440px
- All elements fade up with staggered delays

**Right — Decorative Element:**
- CSS geometric pattern: nested rotated diamonds (45deg) using border-only divs
  - Outer: 280px, border 1px solid rgba(201,169,110,0.2)
  - Middle: inset 40px, border rgba(201,169,110,0.15)
  - Inner: inset 80px, border rgba(201,169,110,0.1)
  - All scale from 0.8 to 1 on reveal with staggered delays
- Horizontal and vertical crossing lines through center
  - linear-gradient fading from center, rgba(201,169,110,0.25)
  - scaleX/scaleY 0→1 on reveal
- Center dot: 8px circle, [PRIMARY_COLOR], opacity 0→0.6

## Menu Highlights Section
Classic menu typography, maxWidth: 800px, centered:
- id="menu", padding: 120px 48px
- Header: "The Menu" label in [ACCENT_COLOR], "Seasonal Highlights" in Playfair 700 clamp(32px,4vw,52px)

**Dish Items (3-4):**
- Grid: 1fr auto (name+description left, price right)
- padding: 32px 0
- Divider: borderBottom 1px solid rgba(201,169,110,0.1) between items
- Dish name: Playfair Display 700, 20px, [PRIMARY_COLOR], letterSpacing: 0.01em
- Description: Inter 13px, lineHeight: 1.6, rgba(201,169,110,0.4), maxWidth: 400px
- Price: Playfair Display 18px, rgba(201,169,110,0.6), aligned right
- Staggered reveal: delay: 0.3 + index * 0.12s

## Ambiance Section
Full-width parallax section:
- Height: 70vh, minHeight: 500px, overflow: hidden
- Background div: position absolute, inset: -10%
  - linear-gradient with [ACCENT_COLOR] tones
  - translateY based on scroll position * 0.08 for parallax
- Dark overlay: rgba(26,20,16,0.6)
- Decorative gold lines in corners: 120px wide, rgba(201,169,110,0.2)
- Centered quote in Playfair Display italic 400, clamp(22px, 3vw, 36px)
  - lineHeight: 1.6, [PRIMARY_COLOR]
- Attribution: Inter 12px uppercase, rgba(201,169,110,0.4)
- Fade up on reveal

## Reservations CTA
Elegant form section, id="reservations", maxWidth: 700px, centered, textAlign: center:
- Label: "Reservations" in [ACCENT_COLOR]
- Headline: "Reserve a Table" in Playfair 700 clamp(32px,4vw,52px)
- Subtext: "Join us for an unforgettable evening"

**Form Fields (3-column grid):**
- Date, Time, Guests — labeled inputs
- Labels: Inter 10px uppercase, letterSpacing: 0.1em, textAlign: left
- Inputs: padding 14px 16px, bg rgba(201,169,110,0.04), border 1px solid rgba(201,169,110,0.12)
  - borderRadius: 2px, Inter 14px, color rgba(201,169,110,0.6)
  - Read-only with placeholder values
- All fade up together

**CTA Button:**
- Inter 13px uppercase, letterSpacing: 0.12em, padding: 18px 56px
- Background: [PRIMARY_COLOR], color: #1A1410
- borderRadius: 2px, fontWeight: 500
- Hover: lighter gold (#D4B87A), translateY(-2px), box-shadow: 0 8px 30px rgba(201,169,110,0.3)
- Glow animation: ctaGlow 3s ease-in-out infinite
  - @keyframes ctaGlow { 0%,100% { box-shadow: none } 50% { box-shadow: 0 0 30px rgba(201,169,110,0.15) } }

## Hours & Location
Three-column grid, textAlign: center, borderTop: rgba(201,169,110,0.08):
- Column headers: Inter 11px uppercase, [ACCENT_COLOR]
- Content: Inter 14px, lineHeight: 1.8, rgba(201,169,110,0.5)
- Location: Address details
- Hours: Days and times
- Contact: Phone and email
- Staggered fade-up reveals

## Footer
Warm dark with gold accents:
- Padding: 48px, borderTop: rgba(201,169,110,0.08)
- Left: [BRAND_NAME] in Playfair 20px, copyright in Inter 12px rgba(201,169,110,0.25)
- Right: Social links (Instagram, Facebook, Twitter)
  - Inter 12px, rgba(201,169,110,0.35), hover: [PRIMARY_COLOR], gap: 24px

## Global Styles
- Selection: background rgba(201,169,110,0.3), color [PRIMARY_COLOR]
- body: background #1A1410, overflow-x: hidden
- Smooth scroll: html { scroll-behavior: smooth }

## Variables
Replace all bracketed variables with provided values:
- [BRAND_NAME] — Restaurant name (default: "Lumière")
- [PRIMARY_COLOR] — Gold accent color (default: #C9A96E)
- [ACCENT_COLOR] — Warm brown accent (default: #8B4513)
- [HEADLINE] — Hero headline (default: "An experience for the senses")
- [SUBHEADLINE] — Hero description (default: "Where culinary artistry meets timeless elegance. Every dish tells a story, every moment is curated.")
- [CTA_TEXT] — Reservation button text (default: "Reserve Now")`,

  v0: `Build a premium fine dining restaurant landing page. Warm, dark, food-focused.

**Stack:** React + Next.js + Tailwind CSS + Framer Motion + TypeScript
**Fonts:** Playfair Display (serif, headlines) + Inter (sans, body) via Google Fonts

## Color Palette
Background: #1A1410 (warm dark brown) | Primary: [PRIMARY_COLOR] (#C9A96E gold) | Accent: [ACCENT_COLOR] (#8B4513 warm brown)
Muted: rgba(201,169,110,0.5) | Faint: rgba(201,169,110,0.4) | Borders: rgba(201,169,110,0.08) | Input bg: rgba(201,169,110,0.04)

## Navbar (transparent → glass on scroll)
- Fixed, padding 24px 48px, flex space-between
- Scroll > 60px: bg rgba(26,20,16,0.92), backdrop-blur(20px), border-bottom rgba(201,169,110,0.12)
- Left: [BRAND_NAME] Playfair Display 700 28px [PRIMARY_COLOR]
- Right: "Menu|Reserve" Inter 13px uppercase letterSpacing 0.08em rgba(201,169,110,0.6)

## Hero (100vh, centered)
- Full height, flex column centered, text-align center
- Background: warm gradient + radial glow at 50% 30%
- Decorative 60px gold line, scaleX animation
- Subtitle: "Fine Dining Experience" Inter 12px uppercase, rgba(201,169,110,0.5)
- Headline: "[HEADLINE]" Playfair 700 clamp(40px,6vw,80px), lineHeight 1.1
  - Second line italic weight 400
  - Framer Motion fade-up reveal, 1s ease
- Description: Inter 16px, rgba(201,169,110,0.45), maxWidth 500px
- Scroll indicator: "Scroll" + gradient line, pulse animation 2s infinite

## About (split layout)
- Grid 1fr 1fr, gap 80px, padding 140px 48px
- Left: "Our Story" label [ACCENT_COLOR] + headline Playfair 700 + two paragraphs about chef
- Right: CSS geometric pattern — 3 nested rotated diamonds (45deg), gold borders
  - Horizontal + vertical crossing lines, center dot
  - All animate scale/opacity on scroll reveal

## Menu Highlights (classic menu typography)
- maxWidth 800px centered, padding 120px 48px
- "The Menu" + "Seasonal Highlights" headers
- 3-4 dish items: grid 1fr auto
  - Name: Playfair 700 20px left
  - Description: Inter 13px rgba(201,169,110,0.4) below name
  - Price: Playfair 18px rgba(201,169,110,0.6) right-aligned
  - Thin divider lines between items: rgba(201,169,110,0.1)
  - Staggered fade-in on scroll

## Ambiance (full-width parallax)
- 70vh height, overflow hidden
- Background with parallax: translateY(scrollY * 0.08)
- Dark overlay rgba(26,20,16,0.6)
- Decorative gold lines in corners
- Centered quote: Playfair italic clamp(22px,3vw,36px), attribution below

## Reservations CTA
- maxWidth 700px centered, text-align center
- "Reserve a Table" Playfair 700 clamp(32px,4vw,52px)
- 3-column form: Date, Time, Guests inputs
  - Styled but non-functional (readOnly), gold-tinted borders
- Gold CTA button: [PRIMARY_COLOR] bg, #1A1410 text, Inter 13px uppercase
  - Hover: lighter gold, translateY(-2px), box-shadow glow
  - Subtle glow animation: ctaGlow 3s infinite

## Hours & Location (3 columns)
- Location address, Hours schedule, Contact info
- Inter 11px uppercase headers in [ACCENT_COLOR]
- Content Inter 14px rgba(201,169,110,0.5)

## Footer — [BRAND_NAME] + © left, social links right, gold accents

## Variables: [BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT]`,

  bolt: `Build a premium restaurant landing page. Pure CSS animations only — NO JavaScript animation libraries.

**Stack:** React + Next.js + Tailwind CSS + TypeScript (NO Framer Motion)
**Fonts:** Playfair Display (serif) + Inter (sans) via Google Fonts link

## Colors
--bg: #1A1410; --primary: [PRIMARY_COLOR] (#C9A96E); --accent: [ACCENT_COLOR] (#8B4513);
--muted: rgba(201,169,110,0.5); --faint: rgba(201,169,110,0.4); --border: rgba(201,169,110,0.08);
--input-bg: rgba(201,169,110,0.04); --input-border: rgba(201,169,110,0.12);

## Scroll Reveal (IntersectionObserver + CSS)
- .reveal class: opacity 0, transform translateY(20px), transition: all 0.8s cubic-bezier(0.23,1,0.32,1)
- .reveal.visible: opacity 1, transform translateY(0)
- Stagger children: .reveal-stagger > *:nth-child(n) { transition-delay: calc(n * 0.12s) }
- Single IntersectionObserver in useEffect, threshold: 0.15, once: true

## Navbar
Fixed, transparent → bg rgba(26,20,16,0.92) on scroll > 60px via JS classList toggle.
- Left: [BRAND_NAME] Playfair Display 700 28px --primary
- Right: Menu, Reserve links Inter 13px uppercase, hover color transition 0.3s

## Hero — 100vh, flex column centered
- Background: warm gradient overlay + radial glow
- 60px decorative gold line above subtitle
- Subtitle: "Fine Dining Experience" Inter 12px uppercase
- Headline: "[HEADLINE]" Playfair 700 clamp(40px,6vw,80px), second line italic
- Description paragraph below
- Scroll indicator: "Scroll" + gradient line, CSS @keyframes scrollPulse 2s infinite
- All content with .reveal animation

## About — grid 1fr 1fr
- Left: "Our Story" label + headline + two paragraphs about chef
- Right: CSS geometric art — 3 nested diamonds (45deg rotation, border-only)
  - Horizontal + vertical lines through center
  - Center gold dot
  - CSS transitions on scroll reveal

## Menu — classic restaurant menu layout
- maxWidth 800px, centered
- 3-4 dish items in grid: name+description left, price right
- Name: Playfair 700 20px, Description: Inter 13px, Price: Playfair 18px
- Thin dividers: 1px solid rgba(201,169,110,0.1)
- .reveal-stagger for sequential appearance

## Ambiance — full-width 70vh parallax
- Background parallax via scroll listener (transform: translateY)
- Dark overlay, decorative corner lines
- Large italic quote centered: Playfair italic clamp(22px,3vw,36px)

## Reservations — form-like section
- 3-column grid: Date, Time, Guests styled inputs (readOnly)
  - bg rgba(201,169,110,0.04), border rgba(201,169,110,0.12)
- Gold CTA button: --primary bg, --bg text color
  - Hover: lighter shade, translateY(-2px), box-shadow glow
  - @keyframes ctaGlow { 0%,100% { box-shadow: none } 50% { box-shadow: 0 0 30px rgba(201,169,110,0.15) } }

## Hours & Location — 3-column grid
- Location, Hours, Contact with [ACCENT_COLOR] headers
## Footer — [BRAND_NAME] + social links, gold accents

## Variables: [BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT]`,

  lovable: `Build a premium fine dining restaurant landing page. Warm, dark, elegant.

**Stack:** React + Tailwind CSS + TypeScript
**Fonts:** Playfair Display + Inter from Google Fonts

## Design Tokens
Background: #1A1410 (warm dark brown) | Primary: [PRIMARY_COLOR] (#C9A96E gold) | Accent: [ACCENT_COLOR] (#8B4513 warm brown)
Muted text: rgba(201,169,110,0.5) | Borders: rgba(201,169,110,0.08)

## Sections to Build

### 1. Navbar (sticky, transparent)
- Left: [BRAND_NAME] in Playfair Display bold 28px
- Right: Menu, Reserve links in Inter 13px uppercase
- Gains warm dark background on scroll (rgba(26,20,16,0.92) + backdrop-blur)

### 2. Hero (full height, centered)
- Warm gradient background with radial glow
- Decorative 60px gold line at top
- Subtitle: "Fine Dining Experience" Inter 12px uppercase
- Headline: "[HEADLINE]" in Playfair Display 700, clamp(40px, 6vw, 80px), second line italic
- Description: "[SUBHEADLINE]" in Inter 16px, rgba(201,169,110,0.45)
- Scroll indicator: "Scroll" text + thin gradient line, pulse animation
- All elements fade up on load with staggered delays

### 3. About Section (two columns)
- Left: "Our Story" label + headline "A passion for perfection" + two paragraphs about the chef
- Right: CSS geometric pattern — 3 nested diamonds (45deg rotation), crossing lines, center dot
- All in gold tones with varying opacity
- Fade-in on scroll using IntersectionObserver

### 4. Menu Highlights (classic menu typography)
- Max width 800px, centered
- Section header: "The Menu" + "Seasonal Highlights"
- 3-4 dish items with: name (Playfair bold), description (Inter small), price (Playfair, right-aligned)
- Thin gold divider lines between items
- Staggered reveal animation

### 5. Ambiance Section (parallax)
- Full-width, 70vh height, overflow hidden
- Warm gradient background with parallax scroll effect
- Dark overlay
- Centered italic quote in Playfair Display, large serif
- Attribution below in Inter uppercase

### 6. Reservations CTA
- "Reserve a Table" headline in Playfair bold
- 3-column form: Date, Time, Guests (styled inputs, read-only)
  - Gold-tinted borders and backgrounds
- Gold CTA button with glow animation
  - Hover: lighter gold, slight lift, box-shadow

### 7. Hours & Location (3 columns)
- Location address, Hours schedule, Contact phone/email
- Column headers in [ACCENT_COLOR] uppercase
- Clean info display in Inter

### 8. Footer
- Left: [BRAND_NAME] + copyright
- Right: Instagram, Facebook, Twitter links
- Warm dark with gold accents

## Animation Approach (CSS only)
- Scroll reveals: IntersectionObserver adds .visible class, CSS transitions handle the rest
- Parallax: scroll event + translateY transform
- CTA glow: @keyframes ctaGlow, 3s infinite
- Scroll indicator: @keyframes scrollPulse, 2s infinite
- Geometric diamonds: scale transition on reveal
- Hover effects: CSS transitions on transform, opacity, box-shadow

## Variables: [BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT]`,
};
