// Ultra Premium Template #105 — Agency/Portfolio Dark
// 4 platform-specific prompt variants

export const AGENCY_DARK_PROMPTS = {
  cursor: `Build a premium dark agency/portfolio landing page with the following exact specifications. This must look like an Awwwards-winning creative studio site — dark, bold, artistic, with paradoxical whitespace.

**Stack:** React 18 + Next.js 14 + Tailwind CSS v3 + Framer Motion 11 + TypeScript
**Fonts:** @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;700&display=swap')

## Color System
- Background: #0A0A0A
- Primary text: [PRIMARY_COLOR] (default: #F5F0EB — warm cream)
- Accent: [ACCENT_COLOR] (default: #C9A96E — muted gold)
- Text muted: rgba(245,240,235,0.5)
- Text faint: rgba(245,240,235,0.35)
- Text ghost: rgba(245,240,235,0.25)
- Border subtle: rgba(245,240,235,0.06)
- Border hover: rgba(245,240,235,0.15)
- Overlay dark: rgba(10,10,10,0.7)
- Selection: rgba(201,169,110,0.3)

## Custom Mouse Follower (Framer Motion)
Track mouse position using useMotionValue:
- const mouseX = useMotionValue(-100)
- const mouseY = useMotionValue(-100)
- useEffect with window.addEventListener("mousemove") to update mouseX.set(e.clientX), mouseY.set(e.clientY)
- motion.div with style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
- Circle: width 40px, height 40px, borderRadius 50%, border: 1px solid [ACCENT_COLOR]
- position: fixed, top: 0, left: 0, pointerEvents: none, zIndex: 9999
- mixBlendMode: "difference", opacity: 0.6
- Apply smoothing: const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 })
- Set body CSS: cursor: none
- Hide follower on mobile (media query check via window.innerWidth)

## Navigation Bar
Transparent navbar that gains background on scroll:
- Position: fixed top-0 left-0 right-0 z-50
- Padding: 24px 48px
- Display: flex, justify-content: space-between, align-items: center
- Default: background transparent
- On scroll > 60px: background rgba(10,10,10,0.85), backdropFilter: blur(20px), border-bottom: 1px solid rgba(245,240,235,0.06)
- Transition: background 0.4s cubic-bezier(0.23,1,0.32,1)
- Left: [BRAND_NAME] in Playfair Display 700, 24px, color: [PRIMARY_COLOR], letterSpacing: -0.02em
- Right: Links "Work", "About", "Services", "Contact"
  - Inter 400, 13px, uppercase, letterSpacing: 0.06em
  - Color: rgba(245,240,235,0.5), hover: [PRIMARY_COLOR]
  - Transition: color 0.3s ease
  - Gap: 36px

## Hero Section
Full viewport height, split layout:
- min-height: 100vh, display: flex, align-items: center
- Padding: 0 48px
- Grid: gridTemplateColumns "1.2fr 1fr", gap: 80px, maxWidth: 1400px, margin: 0 auto

**Grain Overlay:**
- Position: absolute inset-0, pointerEvents: none
- Inline SVG noise texture via CSS backgroundImage data URI (feTurbulence fractalNoise, baseFrequency 0.9)
- Opacity: 0.02

**Left Column:**
- [BRAND_NAME] in Playfair Display 700
- fontSize: clamp(64px, 9vw, 120px)
- lineHeight: 0.95, letterSpacing: -0.03em
- Color: [PRIMARY_COLOR]
- Framer Motion text reveal: initial={{ clipPath: "inset(0 0 100% 0)" }}, animate={{ clipPath: "inset(0 0 0 0)" }}
- transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
- Below name: "Creative Studio — Est. 2009" in Inter 400, 13px, rgba(245,240,235,0.35), uppercase, letterSpacing: 0.12em
  - Same clip-path animation with 0.3s delay

**Right Column:**
- Rotating taglines using AnimatePresence mode="wait"
- Array: ["[HEADLINE]", "We build brand identities.", "We shape the future.", "We design with intent."]
- Playfair Display italic 400, clamp(28px, 3.5vw, 48px), color: [ACCENT_COLOR]
- Interval: 3000ms via useEffect setInterval
- Each tagline: motion.p with initial={{ opacity: 0, y: 20 }}, animate={{ opacity: 1, y: 0 }}, exit={{ opacity: 0, y: -20 }}
- transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}

**Scroll Indicator:**
- Position absolute bottom-48px left-50% translateX(-50%)
- "Scroll" text: Inter 10px, uppercase, letterSpacing: 0.15em, rgba(245,240,235,0.25)
- Below: 1px wide, 40px tall div with linear-gradient(to bottom, [ACCENT_COLOR], transparent)
- CSS animation: scrollPulse 2s ease-in-out infinite (opacity 0.3→0.8→0.3)

## Portfolio Grid
Asymmetric masonry-style grid with 6 project cards:
- Section padding: 120px 48px, maxWidth: 1400px, margin: 0 auto
- Header: flex justify-between align-end
  - Left: "Selected\\nWork" in Playfair Display 700, clamp(36px, 5vw, 64px), lineHeight: 1.1
  - Framer Motion useInView clip-path reveal
  - Right: "2020 — Present" in Inter 12px, rgba(245,240,235,0.35), uppercase
- Grid: gridTemplateColumns: "1fr 1fr", gap: 24px
- Each card:
  - aspectRatio: alternate 16/9, 1/1, 4/3 (mixed)
  - Background: dark gradients (e.g., #1A1A1A, #151515, #1C1816)
  - borderRadius: 4px, overflow: hidden, cursor: none (custom cursor)
  - Staggered reveal: Framer Motion initial={{ opacity: 0, y: 40 }}, whileInView={{ opacity: 1, y: 0 }}
  - transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: index * 0.12 }}
  - viewport={{ once: true }}
  
**Card Hover States:**
- Background image div: transform scale(1) → scale(1.05), transition 0.6s cubic-bezier(0.23,1,0.32,1)
- Dark overlay: rgba(10,10,10,0.3) → rgba(10,10,10,0.7)
- Category label: Inter 11px, uppercase, letterSpacing: 0.12em, [ACCENT_COLOR]
  - initial: opacity 0, translateY(8px) → opacity 1, translateY(0)
- Project name: Playfair Display 700, clamp(24px, 2.5vw, 36px)
  - opacity 0.6 → 1, translateY(4px) → translateY(0)
- Arrow icon top-right: 40px circle border, appears on hover with scale 0.8→1
- All transitions: 0.4s cubic-bezier(0.23,1,0.32,1)

## About Section
Split layout with animated counters:
- Padding: 160px 48px, maxWidth: 1400px
- Grid: 1fr 1fr, gap: 120px

**Left — Counters:**
- Main counter: "15+" in Playfair Display 700, clamp(72px, 8vw, 120px)
  - Animate from 0 to 15 on scroll into view using requestAnimationFrame
  - Easing: cubic ease-out (1 - Math.pow(1 - progress, 3))
  - Duration: 2000ms
  - Label: "Years of Experience" in Inter 13px, rgba(245,240,235,0.4), uppercase
  - Top border: 1px solid rgba(245,240,235,0.1)
- Sub counters in 2-column grid:
  - "200+" Projects, "34" Awards
  - Playfair Display 700, 48px, color: [ACCENT_COLOR]
  - Labels: Inter 12px, rgba(245,240,235,0.35)

**Right — Text:**
- Headline: "We believe in the\\npower of craft" in Playfair Display 700, clamp(32px, 3.5vw, 48px)
- Paragraphs: Inter 400, 16px, lineHeight: 1.8, rgba(245,240,235,0.5), maxWidth: 480px
- Framer Motion: whileInView={{ opacity: 1, y: 0 }}, initial={{ opacity: 0, y: 30 }}, delay: 0.2s

## Services Marquee
Horizontal scrolling text, infinite loop:
- Section: padding 120px 0, overflow: hidden
- borderTop & borderBottom: 1px solid rgba(245,240,235,0.06)
- Row 1: Playfair Display 700, clamp(48px, 6vw, 96px)
  - Text: "BRANDING · DESIGN · DEVELOPMENT · STRATEGY · " repeated 4x
  - Color: transparent, WebkitTextStroke: 1px rgba(245,240,235,0.15) — outline only
  - CSS animation: marquee 25s linear infinite
  - @keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
- Row 2: Same text but filled color rgba(245,240,235,0.06), animation: marqueeReverse 30s linear infinite
  - @keyframes marqueeReverse { 0% { transform: translateX(-50%) } 100% { transform: translateX(0) } }
- WhiteSpace: nowrap, flexShrink: 0 on each text span

## Testimonial
Single centered quote:
- Padding: 160px 48px, maxWidth: 900px, textAlign: center
- Top: 60px wide, 1px tall line in [ACCENT_COLOR], margin: 0 auto 64px
  - Framer Motion: initial={{ scaleX: 0 }}, whileInView={{ scaleX: 1 }}, transition: 0.8s
- Quote: Playfair Display italic 400, clamp(24px, 3vw, 36px), lineHeight: 1.6, color: [PRIMARY_COLOR]
  - Wrap in <blockquote>
  - Framer Motion: initial={{ opacity: 0, y: 20 }}, whileInView, delay: 0.2s
- Attribution: Inter 500, 13px, uppercase, rgba(245,240,235,0.6)
  - Title below: Inter 12px, rgba(245,240,235,0.3)
  - Fade in with delay: 0.5s

## Contact CTA
Bold call to action:
- Padding: 160px 48px, textAlign: center
- Label: "Next Project" in Inter 12px, uppercase, letterSpacing: 0.15em, [ACCENT_COLOR]
- Headline: "[CTA_TEXT]" (default: "Let's talk") in Playfair Display 700
  - fontSize: clamp(48px, 8vw, 120px), letterSpacing: -0.03em
  - Clip-path text reveal on scroll
- Email link: Inter 18px, rgba(245,240,235,0.5), hover: [PRIMARY_COLOR]
  - Underline animation: pseudo-element height 1px, [ACCENT_COLOR]
  - width: 0% → 100% on hover, transition: width 0.4s cubic-bezier(0.23,1,0.32,1)

## Footer
Ultra minimal:
- Padding: 48px, borderTop: 1px solid rgba(245,240,235,0.06)
- Flex: space-between, maxWidth: 1400px
- Left: "© 2024 [BRAND_NAME]. All rights reserved." Inter 12px, rgba(245,240,235,0.25)
- Right: Social links (Twitter, Instagram, Dribbble, LinkedIn)
  - Inter 12px, rgba(245,240,235,0.3), hover: [PRIMARY_COLOR], gap: 24px

## Global Styles
- Selection: background rgba(201,169,110,0.3), color [PRIMARY_COLOR]
- body: background #0A0A0A, overflow-x: hidden, cursor: none
- Smooth scroll: html { scroll-behavior: smooth }
- All cursor: none (custom cursor handles it)

## Variables
Replace all bracketed variables with provided values:
- [BRAND_NAME] — Agency/studio name (default: "Atelier")
- [PRIMARY_COLOR] — Main text/cream color (default: #F5F0EB)
- [ACCENT_COLOR] — Gold accent (default: #C9A96E)
- [HEADLINE] — Primary rotating tagline (default: "We craft digital experiences.")
- [SUBHEADLINE] — Subtitle under brand name (default: "Creative Studio — Est. 2009")
- [CTA_TEXT] — Contact section headline (default: "Let's talk")`,

  v0: `Build a dark, award-winning agency portfolio landing page.

**Stack:** React + Next.js + Tailwind CSS + Framer Motion + TypeScript
**Fonts:** Playfair Display (serif, headlines) + Inter (sans, body) via Google Fonts

## Color Palette
Background: #0A0A0A | Primary text: [PRIMARY_COLOR] (#F5F0EB cream) | Accent: [ACCENT_COLOR] (#C9A96E gold) | Muted: rgba(245,240,235,0.5) | Borders: rgba(245,240,235,0.06)

## Mouse Follower
- 40px circle, border: 1px solid [ACCENT_COLOR], position: fixed, mixBlendMode: difference
- Track mouse with useMotionValue + useSpring(stiffness: 300, damping: 30)
- Hide on mobile, set body cursor: none on desktop

## Navbar (transparent → glass on scroll)
- Fixed, padding 24px 48px, flex space-between
- Scroll > 60px: bg rgba(10,10,10,0.85), backdrop-blur(20px), border-bottom rgba(245,240,235,0.06)
- Left: [BRAND_NAME] Playfair Display 700 24px [PRIMARY_COLOR]
- Right: "Work|About|Services|Contact" Inter 13px uppercase letterSpacing 0.06em rgba(245,240,235,0.5)

## Hero (100vh, split grid)
- Grid: 1.2fr 1fr, gap 80px, maxWidth 1400px centered
- Left: [BRAND_NAME] in Playfair Display 700, clamp(64px,9vw,120px), lineHeight 0.95
  - Framer Motion clipPath reveal: inset(0 0 100% 0) → inset(0 0 0 0), 1s ease [0.77,0,0.175,1]
  - Below: "[SUBHEADLINE]" Inter 13px uppercase rgba(245,240,235,0.35)
- Right: Rotating taglines with AnimatePresence, 3s interval
  - Playfair Display italic, clamp(28px,3.5vw,48px), [ACCENT_COLOR]
  - Transitions: y: 20→0→-20, opacity, 0.6s ease [0.23,1,0.32,1]
- Bottom: scroll indicator — "Scroll" text + gradient line, pulse animation

## Portfolio Grid (6 cards, asymmetric)
- 2 columns, gap 24px, mixed aspect ratios (16/9, 1/1, 4/3)
- Header: "Selected Work" Playfair + "2020 — Present" subtitle
- Cards: dark gradient bg, rounded 4px
  - Hover: bg scale 1→1.05, overlay darkens, category + name reveal with translateY
  - Stagger: delay index * 0.12s
  - Arrow circle top-right appears on hover

## About (counters + text)
- Grid 1fr 1fr, gap 120px, padding 160px 48px
- Left: "15+" counter (requestAnimationFrame, 2s, ease-out), "200+" projects, "34" awards
  - Main: Playfair 700 clamp(72px,8vw,120px), sub: Playfair 48px [ACCENT_COLOR]
- Right: "We believe in the power of craft" + paragraphs, Framer fade-up

## Marquee (double row, opposite directions)
- Row 1: "BRANDING · DESIGN · DEVELOPMENT · STRATEGY · " ×4, Playfair 700 clamp(48px,6vw,96px), stroke-only
- Row 2: same text filled rgba(245,240,235,0.06), reverse direction
- CSS @keyframes, 25s/30s linear infinite

## Testimonial (centered)
- 60px gold line + large quote Playfair italic clamp(24px,3vw,36px) + attribution

## Contact CTA
- "Next Project" label + "[CTA_TEXT]" Playfair 700 clamp(48px,8vw,120px), clip-path reveal
- Email with underline hover animation (width 0→100%, 0.4s)

## Footer — © [BRAND_NAME] left, social links right, Inter 12px

## Variables: [BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT]`,

  bolt: `Build a dark agency portfolio landing page. Pure CSS animations only — NO JavaScript animation libraries.

**Stack:** React + Next.js + Tailwind CSS + TypeScript (NO Framer Motion)
**Fonts:** Playfair Display (serif) + Inter (sans) via Google Fonts link

## Colors
--bg: #0A0A0A; --primary: [PRIMARY_COLOR] (#F5F0EB); --accent: [ACCENT_COLOR] (#C9A96E);
--muted: rgba(245,240,235,0.5); --faint: rgba(245,240,235,0.35); --border: rgba(245,240,235,0.06);

## Custom Cursor (CSS custom properties + JS)
- Track mouse with mousemove, set CSS custom properties --mx and --my on document.documentElement
- Cursor div: position fixed, width 40px, height 40px, border-radius 50%
- border: 1px solid var(--accent), transform: translate(calc(var(--mx) * 1px - 20px), calc(var(--my) * 1px - 20px))
- transition: transform 0.12s cubic-bezier(0.23,1,0.32,1)
- mix-blend-mode: difference, pointer-events: none, z-index: 9999
- body { cursor: none; }
- @media (max-width: 768px): hide cursor div, restore body cursor

## Scroll Reveal (IntersectionObserver + CSS)
- .reveal class: opacity 0, transform translateY(30px), transition: all 0.8s cubic-bezier(0.23,1,0.32,1)
- .reveal.visible: opacity 1, transform translateY(0)
- .reveal-clip: clip-path inset(0 0 100% 0), transition: clip-path 1s cubic-bezier(0.77,0,0.175,1)
- .reveal-clip.visible: clip-path inset(0 0 0 0)
- Stagger children: .reveal-stagger > *:nth-child(n) { transition-delay: calc(n * 0.12s) }
- Single IntersectionObserver in useEffect, threshold: 0.15, once: true

## Navbar
Fixed, transparent → bg rgba(10,10,10,0.85) on scroll > 60px via JS classList toggle.
- Left: [BRAND_NAME] Playfair Display 700 24px --primary
- Right: Work|About|Services|Contact, Inter 13px uppercase, hover color transition 0.3s

## Hero — 100vh grid 1.2fr 1fr
- Left: [BRAND_NAME] Playfair 700 clamp(64px,9vw,120px), .reveal-clip animation
- Right: CSS-only rotating taglines using @keyframes + animation-delay
  - 4 taglines stacked absolutely, each visible for 3s in 12s cycle
  - @keyframes taglineRotate { 0%,25% { opacity:1; transform:translateY(0) } 26%,100% { opacity:0; transform:translateY(-20px) } }
  - Each :nth-child gets animation-delay: 0s, 3s, 6s, 9s

## Portfolio Grid — 2 columns, mixed aspect-ratios
- 6 cards, hover: .card:hover .card-bg { transform: scale(1.05) }, .card:hover .overlay { background: rgba(10,10,10,0.7) }
- Card info slides up: .card:hover .card-name { opacity:1; transform:translateY(0) }
- Transitions: 0.4s-0.6s cubic-bezier(0.23,1,0.32,1)

## About — counter with IntersectionObserver + requestAnimationFrame
- 15+, 200+, 34 counters, cubic ease-out, 2s duration

## Marquee — CSS @keyframes only
- Two rows: stroke-only + filled, opposite directions
- @keyframes marquee { 0% { transform:translateX(0) } 100% { transform:translateX(-50%) } }
- animation: marquee 25s linear infinite / marqueeReverse 30s linear infinite

## Testimonial — centered quote with gold line, .reveal animation
## Contact — clip-path reveal on [CTA_TEXT], email underline .link::after { width:0→100% on hover }
## Footer — minimal, © + social links

## Variables: [BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT]`,

  lovable: `Build a dark agency portfolio landing page with CSS animations. Clean, minimal approach.

**Stack:** React + Tailwind CSS + TypeScript
**Fonts:** Playfair Display + Inter from Google Fonts

## Design Tokens
Background: #0A0A0A | Text: [PRIMARY_COLOR] (#F5F0EB) | Accent: [ACCENT_COLOR] (#C9A96E)
Muted text: rgba(245,240,235,0.5) | Borders: rgba(245,240,235,0.06)

## Sections to Build

### 1. Navbar (sticky, transparent)
- Left: [BRAND_NAME] in Playfair Display bold 24px
- Right: Work, About, Services, Contact links in Inter 13px uppercase
- Gains dark background on scroll (rgba(10,10,10,0.85) + backdrop-blur)

### 2. Hero (full height, two columns)
- Left: [BRAND_NAME] in massive Playfair Display, clamp(64px, 9vw, 120px)
- Subtitle: "[SUBHEADLINE]" in Inter 13px uppercase, faint color
- Right: Rotating tagline in Playfair italic, [ACCENT_COLOR]
- Cycle 4 taglines every 3s with fade transition (CSS opacity + transform)
- Bottom center: "Scroll" text + thin gradient line

### 3. Portfolio Grid (2 columns, 6 cards)
- Mixed aspect ratios: 16/9, 1/1, 4/3 alternating
- Dark gradient backgrounds (#1A1A1A range)
- Hover: background scales up, overlay darkens, project name + category appear
- Category: Inter 11px uppercase [ACCENT_COLOR]
- Name: Playfair Display bold, clamp(24px, 2.5vw, 36px)
- Fade-in on scroll using IntersectionObserver

### 4. About Section (two columns)
- Left: Large "15+" counter animated on scroll, plus "200+ Projects" and "34 Awards"
- Counter font: Playfair Display bold, very large (72-120px)
- Right: "We believe in the power of craft" heading + description paragraphs

### 5. Services Marquee
- Horizontal scrolling text: "BRANDING · DESIGN · DEVELOPMENT · STRATEGY ·"
- Two rows: first row outline-only text, second row filled but very faint
- CSS animation infinite linear, opposite directions
- Font: Playfair Display bold, clamp(48px, 6vw, 96px)

### 6. Testimonial (centered)
- Thin gold horizontal line above
- Large italic quote in Playfair Display, clamp(24px, 3vw, 36px)
- Attribution below in Inter uppercase

### 7. Contact CTA
- "Next Project" small label in [ACCENT_COLOR]
- "[CTA_TEXT]" in massive Playfair Display, clamp(48px, 8vw, 120px)
- Email link with underline animation on hover (line grows from left)

### 8. Footer
- Left: © 2024 [BRAND_NAME]
- Right: Twitter, Instagram, Dribbble, LinkedIn links
- Inter 12px, very faint colors, hover brightens

## Animation Approach (CSS only)
- Scroll reveals: IntersectionObserver adds .visible class, CSS transitions handle the rest
- Marquee: @keyframes translateX(0→-50%), linear infinite
- Tagline rotation: useState + setInterval, CSS opacity/transform transitions
- Hover effects: CSS transitions on transform, opacity, background
- Counter: requestAnimationFrame counting up on intersection

## Variables: [BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT]`,
};
