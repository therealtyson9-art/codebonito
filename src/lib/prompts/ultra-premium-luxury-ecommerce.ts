// Ultra Premium Template #109 — Luxury Ecommerce (Fashion/Lifestyle)
// 4 platform-specific prompt variants

export const LUXURY_ECOMMERCE_PROMPTS = {
  cursor: `Build a luxury fashion e-commerce landing page inspired by Gucci, Aesop, and Apple Store. Editorial, elegant, product-focused — must feel like an actual high-end fashion house website.

**Stack:** React 18 + Next.js 14 + Tailwind CSS v3 + Framer Motion 11 + TypeScript
**Fonts:** @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500&display=swap')

## Color System
- Background: #FAF9F6 (off-white, warm)
- Primary text: [PRIMARY_COLOR] (default: #1A1A1A — near-black)
- Accent: [ACCENT_COLOR] (default: #C9A96E — muted gold)
- Text muted: rgba(26,26,26,0.55)
- Text faint: rgba(26,26,26,0.4)
- Text ghost: rgba(26,26,26,0.3)
- Border subtle: rgba(26,26,26,0.06)
- Border hover: rgba(26,26,26,0.15)
- Overlay: rgba(26,26,26,0.4)
- Selection: rgba(201,169,110,0.25)
- Card backgrounds: gradient placeholders (e.g., linear-gradient(135deg, #E8E4DE 0%, #D4CFC7 100%))

## Typography Rules — LUXURY = SERIF
- Headlines, brand name, product names: Playfair Display (serif)
- Body text, nav, labels, prices, buttons: Inter (sans-serif)
- Hero headline: Playfair Display 500, clamp(40px, 6vw, 72px), lineHeight 1.1, letterSpacing -0.02em
- Section headers: Playfair Display 500, clamp(28px, 4vw, 44px)
- Product names: Playfair Display 400, 18px
- Labels/eyebrows: Inter 400, 11px, letterSpacing 0.2em, uppercase, [ACCENT_COLOR]
- Body: Inter 300, 14px, lineHeight 1.8, rgba(26,26,26,0.55)
- Prices: Inter 400, 13px, rgba(26,26,26,0.55)
- Buttons: Inter 500, 12px, letterSpacing 0.15em, uppercase

## Navbar (transparent, centered logo)
- Position: fixed, top: 0, left: 0, right: 0, zIndex: 100
- Padding: 20px 48px, display: flex, alignItems: center, justifyContent: space-between
- Default: background transparent, border-bottom 1px solid transparent
- On scroll > 40px: background rgba(250,249,246,0.92), backdropFilter blur(20px), border-bottom 1px solid rgba(26,26,26,0.06)
- Transition: all 0.5s cubic-bezier(0.23,1,0.32,1)
- Left: Hamburger icon (3 lines, 22px wide, 1.5px tall, gap 5px, [PRIMARY_COLOR])
  - On open: top line rotate(45deg) translateY(6.5px), middle opacity 0, bottom rotate(-45deg) translateY(-6.5px)
- Center: [BRAND_NAME] in Playfair Display 600, 22px, letterSpacing 0.04em, uppercase
  - Position: absolute, left: 50%, transform: translateX(-50%)
- Right: Shopping bag SVG icon (22x22, strokeWidth 1.5) with gold badge showing cart count
  - Badge: 16px circle, [ACCENT_COLOR] background, white text, fontSize 9px

## Hero Section (full viewport, image with text overlay)
- min-height: 100vh, display: flex, alignItems: center, justifyContent: center, overflow: hidden
- Background: Full-bleed gradient placeholder — linear-gradient(165deg, #E8E4DE 0%, #D4CFC7 35%, #C8C0B5 65%, #B8B0A5 100%)
  - Apply parallax: transform translateY based on scroll offset × 0.15
- Subtle shimmer overlay: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)
  - backgroundSize 200% 100%, animation shimmer 6s ease-in-out infinite
- Content centered, maxWidth 680px:
  - Season label: Inter 400, 11px, letterSpacing 0.2em, uppercase, opacity 0.6, marginBottom 24px
  - Headline: "[HEADLINE]" (default: "The Art of Understated Luxury") Playfair Display 500, clamp(40px,6vw,72px)
  - Subtext: "[SUBHEADLINE]" Inter 300, 14px, rgba(26,26,26,0.6), maxWidth 420px
  - CTA button: "[CTA_TEXT]" (default: "Shop Now") — Inter 500, 12px uppercase
    - padding 16px 48px, border 1px solid [PRIMARY_COLOR], background transparent
    - Hover: background [PRIMARY_COLOR], color #FAF9F6
    - Transition: all 0.4s cubic-bezier(0.23,1,0.32,1)
- Framer Motion: initial={{ opacity: 0, y: 30 }}, animate={{ opacity: 1, y: 0 }}
  - transition={{ duration: 1, ease: [0.23,1,0.32,1], delay: 0.3 }}
- Scroll indicator at bottom: "Scroll" text Inter 9px + 1px × 36px gradient line with pulse animation

## Product Grid (2×2)
- Section: padding 120px 48px, maxWidth 1200px centered
- Header centered: label "Curated Selection" in [ACCENT_COLOR] + "New Arrivals" Playfair Display 500
- Grid: gridTemplateColumns "1fr 1fr", gap 32px
- 4 product cards, each:
  - Image area: aspectRatio 3/4, overflow hidden, gradient placeholder
    - Framer Motion: whileHover scale 1.05, transition 0.7s ease [0.23,1,0.32,1]
  - Hover overlay: rgba(26,26,26,0.4), opacity 0→1 on hover
    - "Add to Bag" button inside: Inter 11px, uppercase, letterSpacing 0.15em, white text
    - Border: 1px solid rgba(255,255,255,0.8), padding 14px 36px
    - Slides up: transform translateY(12px→0) on hover
  - Below image: Product name Playfair Display 400 18px, price Inter 400 13px rgba(26,26,26,0.55)
  - Stagger reveal: Framer Motion initial={{ opacity: 0, y: 30 }}, whileInView={{ opacity: 1, y: 0 }}
    - transition={{ duration: 0.7, delay: index * 0.12 }}, viewport={{ once: true }}

## Editorial Section (image + text split)
- Grid: gridTemplateColumns "1.1fr 1fr", gap 64px, alignItems center
- Left: Large image placeholder, aspectRatio 4/5, gradient background
  - Framer Motion: initial={{ opacity: 0, x: -30 }}, whileInView={{ opacity: 1, x: 0 }}
- Right column:
  - Label: "Our Philosophy" in [ACCENT_COLOR], Inter 11px uppercase
  - Heading: "Born from a reverence for craft" Playfair Display 500, clamp(28px,3.5vw,42px)
  - Paragraph: Inter 300, 14px, lineHeight 1.8, rgba(26,26,26,0.55)
  - Pullquote: Playfair Display italic 400, clamp(18px,2.2vw,26px)
    - borderTop/borderBottom: 1px solid rgba(26,26,26,0.08), padding 24px 0
    - "True elegance is the refusal to be noticed — and the inability to be forgotten."
  - Attribution: Inter 400, 11px, uppercase, rgba(26,26,26,0.4)
  - Framer Motion: initial={{ opacity: 0, y: 30 }}, whileInView with delay 0.2s

## Featured Collection (horizontal scroll)
- Section with borderTop/borderBottom: 1px solid rgba(26,26,26,0.06), padding 100px 0 120px
- Header: flex space-between, label + title left, arrow buttons right
  - Scroll buttons: 44px circles, border 1px solid rgba(26,26,26,0.15), hover border [ACCENT_COLOR]
  - SVG chevron icons, 16px, strokeWidth 1.5
- Scrollable container: display flex, gap 24px, overflowX auto, scrollSnapType "x mandatory"
  - paddingLeft/Right 48px, scrollbar hidden (scrollbarWidth none)
- 6 product cards, each flexShrink 0, width 300px, scrollSnapAlign start
  - Image: aspectRatio 3/4, gradient placeholder
  - Hover: image scale 1.06, transition 0.6s cubic-bezier(0.23,1,0.32,1)
  - Name: Playfair Display 400 16px, price: Inter 400 13px
  - Stagger whileInView with delay index * 0.08

## Newsletter Section
- Centered, padding 120px 48px, maxWidth 520px
- Label: "Newsletter" in [ACCENT_COLOR]
- Heading: "Join our world" Playfair Display 500, clamp(26px,3.5vw,38px)
- Subtext: Inter 300, 14px, rgba(26,26,26,0.5)
- Input row: flex, borderBottom 1px solid rgba(26,26,26,0.2)
  - Input: no border, transparent bg, Inter 300 14px, placeholder "Your email address"
  - Submit: "Subscribe" Inter 500, 11px, uppercase, [ACCENT_COLOR], hover opacity 0.7
- Framer Motion fade-up reveal

## Footer
- Padding: 80px 48px 48px, borderTop 1px solid rgba(26,26,26,0.06)
- Grid: gridTemplateColumns "1.5fr 1fr 1fr 1fr", gap 48px
- First column: [BRAND_NAME] Playfair Display 600 20px + short description
- Other columns: section titles in [ACCENT_COLOR] Inter 11px uppercase, link lists Inter 300 13px
  - Collections: "Autumn/Winter 2026, Spring/Summer 2026, Accessories, Archive"
  - About: "Our Story, Ateliers, Sustainability, Careers"
  - Client Care: "Contact Us, Shipping & Returns, Size Guide, Care Instructions"
  - Links hover: color transition to [PRIMARY_COLOR]
- Gold gradient divider: linear-gradient(90deg, transparent, [ACCENT_COLOR], transparent), opacity 0.2
- Bottom: "© 2026 [BRAND_NAME]" Inter 11px left, social links right (Instagram, Pinterest, Twitter)
  - Social hover: color [ACCENT_COLOR]

## Variables
- [BRAND_NAME] — Luxury house name (default: "Maison Noir")
- [PRIMARY_COLOR] — Near-black text (default: #1A1A1A)
- [ACCENT_COLOR] — Gold accent (default: #C9A96E)
- [HEADLINE] — Hero headline (default: "The Art of Understated Luxury")
- [SUBHEADLINE] — Hero subtext (default: "Timeless pieces crafted with intention. Where elegance meets the everyday.")
- [CTA_TEXT] — Hero button text (default: "Shop Now")`,

  v0: `Build a luxury fashion e-commerce landing page inspired by Gucci and Aesop. Off-white, editorial, serif-heavy.

**Stack:** React + Next.js + Tailwind CSS + Framer Motion + TypeScript
**Fonts:** Playfair Display (serif, headlines/brand/products) + Inter (sans, body/nav) via Google Fonts

## Color Palette
Background: #FAF9F6 | Text: [PRIMARY_COLOR] (#1A1A1A) | Accent: [ACCENT_COLOR] (#C9A96E gold)
Muted: rgba(26,26,26,0.55) | Faint: rgba(26,26,26,0.4) | Borders: rgba(26,26,26,0.06)
Image placeholders: gradient fills (e.g., linear-gradient(135deg, #E8E4DE, #D4CFC7))

## Navbar (transparent, centered logo, hamburger + cart)
- Fixed, padding 20px 48px, scroll > 40px → bg rgba(250,249,246,0.92) + blur(20px)
- Left: hamburger (3 lines, 22px, animate to X on open)
- Center: [BRAND_NAME] Playfair Display 600 22px uppercase letterSpacing 0.04em (absolute centered)
- Right: shopping bag SVG with gold badge (cart count)

## Hero (100vh, editorial product image)
- Full-bleed gradient placeholder with parallax (offset × 0.15)
- Shimmer overlay: gradient 90deg transparent/white/transparent, animate 6s
- Centered content: season label Inter 11px + "[HEADLINE]" Playfair 500 clamp(40px,6vw,72px)
- "[SUBHEADLINE]" Inter 300 14px + "[CTA_TEXT]" button (border, hover fill)
- Framer Motion: fade-up from y:30, delay 0.3s, ease [0.23,1,0.32,1]
- Bottom: scroll indicator + pulse gradient line

## Product Grid (2×2, 4 cards)
- Section header: "Curated Selection" gold label + "New Arrivals" Playfair
- Cards: 3:4 aspect, gradient placeholder, hover → scale 1.05 + dark overlay + "Add to Bag" slides up
- Below: product name Playfair 400 18px, price Inter 13px
- Stagger: whileInView fade-up, delay index × 0.12

## Editorial (image left + text right)
- Grid 1.1fr 1fr, gap 64px
- Left: 4:5 gradient image, Framer x: -30→0
- Right: gold label + heading Playfair + paragraph + italic pullquote with top/bottom borders
- Attribution: Inter 11px uppercase

## Featured Collection (horizontal scroll)
- Header + arrow buttons (44px circle, hover gold border)
- 6 cards, 300px wide, scroll-snap, hover zoom 1.06
- Playfair name + Inter price

## Newsletter — "Join our world" centered
- Email input with bottom border only, "Subscribe" in gold
- Framer fade-up reveal

## Footer — 4-column grid
- Brand column: name + description
- 3 link columns: Collections, About, Client Care
- Gold gradient divider line
- © + social links (hover gold)

## Variables: [BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT]`,

  bolt: `Build a luxury fashion e-commerce landing page. Pure CSS animations — NO JavaScript animation libraries.

**Stack:** React + Next.js + Tailwind CSS + TypeScript (NO Framer Motion)
**Fonts:** Playfair Display (serif) + Inter (sans) via Google Fonts link

## Colors
--bg: #FAF9F6; --primary: [PRIMARY_COLOR] (#1A1A1A); --accent: [ACCENT_COLOR] (#C9A96E);
--muted: rgba(26,26,26,0.55); --faint: rgba(26,26,26,0.4); --border: rgba(26,26,26,0.06);
--overlay: rgba(26,26,26,0.4); --selection-bg: rgba(201,169,110,0.25);
Image placeholders: CSS gradients (linear-gradient(135deg, #E8E4DE, #D4CFC7))

## Typography — LUXURY = SERIF
- Playfair Display: brand name (600 22px uppercase), headlines (500 clamp(28-72px)), product names (400 18px)
- Inter: body (300 14px), labels (400 11px uppercase letterSpacing 0.2em), nav, prices (400 13px), buttons (500 12px uppercase)

## Scroll Reveal (IntersectionObserver + CSS)
- .reveal: opacity 0, transform translateY(24px), transition all 0.8s cubic-bezier(0.23,1,0.32,1)
- .reveal.visible: opacity 1, translateY(0)
- Stagger: .reveal-stagger > *:nth-child(n) { transition-delay: calc(n * 0.1s) }
- Single IntersectionObserver useEffect, threshold 0.15, once: true

## Navbar (transparent, centered logo)
- Fixed, 20px 48px padding, flex space-between
- Scroll > 40px (JS classList): bg rgba(250,249,246,0.92), backdrop-blur(20px), border-bottom rgba(26,26,26,0.06)
- Left: hamburger 3 lines (22px, 1.5px, gap 5px), CSS transform on open
- Center: [BRAND_NAME] Playfair Display 600 22px uppercase, absolute left:50% translateX(-50%)
- Right: shopping bag SVG + gold badge

## Hero — 100vh, full-bleed gradient image
- Gradient placeholder: linear-gradient(165deg, #E8E4DE, #D4CFC7, #C8C0B5, #B8B0A5)
- CSS parallax: transform translateY(calc(var(--scroll-y) * 0.15px)) via JS scroll listener setting CSS custom property
- Shimmer: @keyframes shimmer { 0% { background-position:-200% 0 } 100% { background-position:200% 0 } } 6s infinite
- Centered: season label Inter 11px + "[HEADLINE]" Playfair 500 clamp(40px,6vw,72px)
- "[CTA_TEXT]" button: border 1px solid --primary, hover bg --primary color --bg, transition 0.4s
- Scroll indicator: pulse animation on gradient line

## Product Grid — 2×2, gap 32px
- "Curated Selection" gold label + "New Arrivals" Playfair
- Cards: 3:4 aspect, gradient bg, .reveal-stagger reveal
- Hover: .card:hover .card-bg { transform: scale(1.05) }, .card:hover .overlay { opacity: 1 }
- "Add to Bag" overlay: translateY(12px→0) on hover, transitions 0.4s
- Product name Playfair 400 18px + price Inter 13px

## Editorial — grid 1.1fr 1fr, gap 64px
- Left: 4:5 gradient image, .reveal translateX(-30px→0)
- Right: gold label + Playfair heading + Inter paragraph + italic pullquote
- Pullquote: Playfair italic clamp(18px,2.2vw,26px), border-top/bottom rgba(26,26,26,0.08)

## Featured Collection — horizontal scroll
- Flex container, gap 24px, overflow-x auto, scroll-snap-type x mandatory
- 6 cards, 300px wide, scroll-snap-align start
- Arrow buttons: 44px circle, border rgba(26,26,26,0.15), hover border --accent
- Card hover: image scale(1.06), transition 0.6s

## Newsletter — centered, "Join our world"
- Email input: no border, border-bottom only rgba(26,26,26,0.2)
- "Subscribe" text button in --accent, hover opacity 0.7

## Footer — 4-column grid
- Brand + 3 link columns (Collections, About, Client Care)
- Column titles: Inter 11px --accent uppercase
- Gold gradient divider: linear-gradient(90deg, transparent, --accent, transparent) opacity 0.2
- Bottom: © left, social links right, hover color --accent

## Variables: [BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT]`,

  lovable: `Build a luxury fashion e-commerce landing page. Clean CSS animations, editorial design.

**Stack:** React + Tailwind CSS + TypeScript
**Fonts:** Playfair Display + Inter from Google Fonts

## Design Tokens
Background: #FAF9F6 | Text: [PRIMARY_COLOR] (#1A1A1A) | Accent: [ACCENT_COLOR] (#C9A96E gold)
Muted: rgba(26,26,26,0.55) | Borders: rgba(26,26,26,0.06) | Overlay: rgba(26,26,26,0.4)
Image placeholders: CSS gradients (warm grays/taupes)

## Sections to Build

### 1. Navbar (transparent, centered brand)
- Fixed, padding 20px 48px
- Left: hamburger menu icon (3 lines, animate to X)
- Center: [BRAND_NAME] Playfair Display bold 22px uppercase (absolute centered)
- Right: shopping bag icon with gold accent badge
- On scroll > 40px: bg rgba(250,249,246,0.92) + backdrop-blur(20px) + subtle border

### 2. Hero (full viewport, editorial)
- Full-bleed gradient placeholder background with subtle parallax on scroll
- Shimmer overlay animation (horizontal gradient sweep, 6s loop)
- Centered text: season label ("Autumn / Winter 2026") Inter 11px uppercase
- "[HEADLINE]" in Playfair Display 500, clamp(40px, 6vw, 72px)
- "[SUBHEADLINE]" Inter 300 14px, muted color
- "[CTA_TEXT]" button: bordered, hover fills with primary color (inverts text)
- Scroll indicator at bottom center: "Scroll" text + pulsing gradient line

### 3. Product Grid (2×2, 4 products)
- Section heading: "Curated Selection" gold label + "New Arrivals" Playfair
- Cards: 3:4 aspect ratio, gradient image placeholder
- On hover: image scales 1.05, dark overlay appears, "Add to Bag" button slides up from bottom
- Product name (Playfair 18px) + price (Inter 13px muted) below each card
- Fade-up on scroll with stagger (IntersectionObserver + CSS transitions)

### 4. Editorial Section (split layout)
- Left: large image placeholder (4:5 aspect), slides in from left
- Right: "Our Philosophy" gold label, heading in Playfair, body text in Inter
- Italic pullquote in Playfair with top/bottom hairline borders
- Quote: "True elegance is the refusal to be noticed — and the inability to be forgotten."

### 5. Featured Collection (horizontal scroll)
- Section header with title + scroll arrow buttons (circle, hover gold border)
- 6 product cards in horizontal scrollable container (300px each, scroll-snap)
- Hover: image zoom 1.06
- Product name Playfair + price Inter below each

### 6. Newsletter — "Join our world"
- Centered section: gold label + Playfair heading + Inter description
- Email input with bottom-border-only styling, "Subscribe" button in gold text
- Clean, minimal, elegant

### 7. Footer
- 4-column grid: brand description + 3 link columns (Collections, About, Client Care)
- Column headers in gold uppercase Inter
- Gold gradient horizontal divider
- Bottom: copyright left, social links right (hover gold)
- Overall feel: luxurious, fine lines, generous spacing

## Animation Approach (CSS only)
- Scroll reveals: IntersectionObserver adds .visible, CSS opacity + transform transitions
- Parallax: scroll listener + CSS custom property for translateY
- Shimmer: @keyframes background-position animation
- Hover: CSS transitions on transform, opacity, background (0.4-0.7s ease)
- Stagger: transition-delay on nth-child

## Variables: [BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT]`,
};
