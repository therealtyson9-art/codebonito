// Ultra Premium Template #111 — Editorial Blog
// 4 platform-specific prompt variants

export const EDITORIAL_BLOG_PROMPTS = {
  cursor: `Build a premium editorial blog / publication landing page with the following exact specifications. This template embodies "typography-first" design — inspired by The Verge, Monocle, and Medium premium publications. The reading experience IS the product.

**Stack:** React 18 + Next.js 14 + Tailwind CSS v3 + Framer Motion 11 + TypeScript
**Fonts:** @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@400;500;600&display=swap')

## Design Philosophy
Maximum 4 colors: [PRIMARY_COLOR] (default #1A1A1A near-black), [ACCENT_COLOR] (default #DC2626 editorial red), #52525b for body text, #71717a for secondary text. Background: #FAFAF8 warm off-white. Borders: #e4e4e7. This is about READING EXPERIENCE — perfect typography, generous whitespace, zero visual clutter. No gradients. No decorative elements. Let the words breathe.

## Typography System (CRITICAL — this is the soul of the template)
- Article headlines: Playfair Display 700, tracking: -0.025em, sizes: 52px (hero), 42px (preview), 26px (cards), 18px (small cards)
- Body text: Inter 400, font-size: 18px, line-height: 1.75, color: #3f3f46, max-width: 680px (optimal measure: 45-75 characters per line)
- Navigation: Inter 500, 14px, letter-spacing: -0.005em
- Labels/categories: Inter 600, 12px, uppercase, letter-spacing: 0.1em, color: [ACCENT_COLOR]
- Brand name: Playfair Display 700, 26px, tracking: -0.03em, centered in navbar
- Font smoothing: -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale

## Spacing Scale
Generous editorial spacing: section padding 80px vertical, card gaps 40px, paragraph margin-bottom 28px. White space is a feature, not waste.

## Navigation Bar
Sticky editorial navbar — NOT floating/glassmorphism:
- Position: sticky top-0 z-50, background: rgba(250, 250, 248, 0.95), backdrop-filter: blur(12px)
- Border-bottom: 1px solid rgba(0, 0, 0, 0.06)
- Container: max-width 1100px, padding 18px 24px
- Left: "Articles", "Topics", "Archive" links — Inter 500, 14px, color #64748b
- Center: [BRAND_NAME] in Playfair Display 700, 26px, absolutely centered
- Right: "Sign in" link + "Subscribe" button — bg: [PRIMARY_COLOR], white text, rounded 6px, padding 8px 20px
- Hover on button: background #333, translateY(-1px)

## Hero Section — Featured Article
Centered content, max-width 780px, padding-top 72px:
- Category badge: pill with border, [ACCENT_COLOR] text, uppercase, 12px, letter-spacing 0.1em
- Headline: "[HEADLINE]" — Playfair Display 700, 52px, line-height 1.12, tracking -0.025em
- Excerpt: "[SUBHEADLINE]" — Inter 400, 18px, line-height 1.7, color #52525b, max-width 600px
- Meta line: author name (bold) · date · read time — centered, 14px, color #71717a, dots as separators (3px circles)
- Animation: fade-up 0.7s with cubic-bezier(0.16, 1, 0.3, 1), delay 0.1s
- Below: 1px divider, max-width 780px

## Category Tabs
Horizontal pill tabs below hero, max-width 780px:
- Options: "All", "Technology", "Design", "Culture", "Business"
- Style: Inter 500, 14px, padding 8px 18px, border-radius 100px (full pill)
- Default: border 1px #e4e4e7, color #71717a, transparent bg
- Active: bg [PRIMARY_COLOR], color white, border-color [PRIMARY_COLOR]
- Hover: border-color #a1a1aa, color [PRIMARY_COLOR]
- Transition: 0.25s cubic-bezier(0.16, 1, 0.3, 1)

## Article Grid (2-column layout)
Max-width 1040px, grid-template-columns: 1fr 340px, gap 48px:

**Left column — 2 medium article cards:**
- Category label: [ACCENT_COLOR], uppercase, 12px
- Title: Playfair Display 700, 26px, line-height 1.25
- Excerpt: Inter 400, 15px, line-height 1.7, color #52525b
- Meta: author (bold) · date · read time, 13px, color #a1a1aa
- Cards separated by 1px border, 40px gap
- Hover: title color transitions to [ACCENT_COLOR]

**Right column — 3 small article cards:**
- Category label: [ACCENT_COLOR], uppercase, 11px
- Title: Playfair Display 600, 18px, line-height 1.35
- Date below: 12px, color #a1a1aa
- Cards separated by 1px border, 20px padding
- Hover: title color transitions to [ACCENT_COLOR]

## Newsletter Section
Centered, max-width 600px, padding 80px vertical:
- Label: "Newsletter" — [ACCENT_COLOR], uppercase, 12px, tracking 0.1em
- Title: "Subscribe to our weekly digest" — Playfair Display 700, 36px
- Description: Inter 400, 16px, line-height 1.7, color #71717a
- Form: flex row, email input + submit button
- Input: 15px, padding 14px 18px, border 1px #e4e4e7, rounded 8px, focus: border [PRIMARY_COLOR]
- Button: "[CTA_TEXT]" — Inter 600, 14px, bg [PRIMARY_COLOR], white, rounded 8px, padding 14px 24px
- Button hover: bg #333, translateY(-1px)

## Single Article Preview (Reading Experience Showcase)
Max-width 680px (CRITICAL for optimal reading measure), centered:
- Label: "Reading Experience" — [ACCENT_COLOR], uppercase, with top border
- Title: Playfair Display 700, 42px, line-height 1.15
- Meta: author · date · read time
- Body paragraphs: Inter 400, 18px, line-height 1.75, color #3f3f46, margin-bottom 28px
- Drop cap on first paragraph: Playfair Display 700, 64px, float left
- Pullquote: border-left 3px [ACCENT_COLOR], padding-left 28px, Playfair Display italic 22px, line-height 1.6
- Code block: bg #18181b, rounded 10px, padding 24px 28px, monospace 14px, with syntax highlighting (purple keywords, green strings, blue functions, gray comments)

## Footer
Clean editorial footer, border-top 1px #e4e4e7, padding 64px:
- 4-column grid: brand column (1.4fr) + 3 link columns (1fr each)
- Brand: Playfair Display 700, 22px + tagline in 14px #71717a
- Column titles: Inter 600, 13px, uppercase, tracking 0.06em
- Links: Inter 400, 14px, color #71717a, hover: [PRIMARY_COLOR]
- Bottom bar: copyright + legal links, 13px, color #a1a1aa

## Animations
VERY subtle — this is about reading, not motion:
- Scroll reveal: opacity 0 → 1 + translateY(20px → 0), 0.7s cubic-bezier(0.16, 1, 0.3, 1)
- Hover underlines: color transitions 0.2s
- Category tab transitions: 0.25s
- No parallax, no bouncing, no complex animations

## Variables
- [BRAND_NAME]: Publication name (default "The Brief")
- [PRIMARY_COLOR]: Near-black for text/buttons (default #1A1A1A)
- [ACCENT_COLOR]: Editorial red for categories/accents (default #DC2626)
- [HEADLINE]: Featured article headline
- [SUBHEADLINE]: Featured article excerpt
- [CTA_TEXT]: Newsletter button text (default "Subscribe")

## Responsive
- 768px breakpoint: single column grid, reduce hero title to 36px, stack newsletter form, hide nav links
- Always maintain max-width 680px for article body text (reading measure)`,

  v0: `Create a premium editorial blog landing page. Typography-first design inspired by The Verge, Monocle, and Medium premium publications.

**Fonts:** Playfair Display (headlines) + Inter (body/UI)
**Colors:** [PRIMARY_COLOR] #1A1A1A (near-black), [ACCENT_COLOR] #DC2626 (editorial red), bg #FAFAF8 (warm off-white), body text #52525b, secondary #71717a, borders #e4e4e7

## Typography (the soul of this template)
- Headlines: Playfair Display 700 — 52px hero, 42px article, 26px cards, 18px small cards — tracking -0.025em, line-height 1.12-1.35
- Body: Inter 400, 18px, line-height 1.75, max-width 680px (optimal 45-75 chars/line)
- Categories: Inter 600, 12px, uppercase, tracking 0.1em, [ACCENT_COLOR]
- Brand: Playfair Display 700, 26px, centered in navbar

## Sections

**Navbar:** Sticky, off-white bg with blur, border-bottom. Left: text links (Articles, Topics, Archive). Center: [BRAND_NAME] in serif. Right: Sign in + Subscribe button (bg [PRIMARY_COLOR]).

**Hero — Featured Article:** Centered, max-width 780px. Category pill badge in [ACCENT_COLOR]. Large serif headline 52px. Excerpt in 18px. Author · Date · Read time meta line. Fade-up entrance animation.

**Category Tabs:** Horizontal pills — "All", "Technology", "Design", "Culture", "Business". Active: bg [PRIMARY_COLOR] white text. Default: border + muted text. Smooth transitions.

**Article Grid:** 2-column (1fr + 340px). Left: 2 medium cards (category + serif headline 26px + excerpt + author meta). Right: 3 small cards (category + serif headline 18px + date). Hover: titles turn [ACCENT_COLOR].

**Newsletter:** Centered, max-width 600px. [ACCENT_COLOR] label + "Subscribe to our weekly digest" serif 36px + description + email input & button row.

**Article Preview:** Max-width 680px. Shows reading experience — Playfair Display 42px title, Inter 18px body at 1.75 line-height, drop cap first letter (64px), pullquote with [ACCENT_COLOR] left border in italic serif, styled code block (dark bg, syntax colors).

**Footer:** 4-column grid. Serif brand name + tagline. 3 link columns (Sections, About, Follow). Bottom bar with copyright.

## Animations
Minimal: scroll-reveal fade-up (0.7s), hover color transitions (0.2s), tab transitions (0.25s). NO parallax or complex motion. Reading experience > animation.

Variables: [BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT]`,

  bolt: `Build a typography-first editorial blog landing page. Inspired by premium publications like The Verge, Monocle, and Medium.

**Design:** Clean, warm, minimal. Background #FAFAF8. Near-black text #1A1A1A. Editorial red accent #DC2626. Borders #e4e4e7.
**Fonts:** Playfair Display for all headlines (serif, elegant). Inter for body/UI (clean, readable).
**Key principle:** The READING EXPERIENCE is everything. Perfect typography, generous whitespace, zero clutter.

## Typography Specs
- Hero headline: Playfair Display 700, 52px, line-height 1.12, tracking -0.025em
- Article title: Playfair Display 700, 42px, line-height 1.15
- Card titles: Playfair Display 700, 26px / 18px
- Body text: Inter 400, 18px, line-height 1.75, max-width 680px
- Categories: Inter 600, 12px, uppercase, tracking 0.1em, [ACCENT_COLOR]
- Brand name: Playfair Display 700, 26px, centered in nav

## Layout

1. **Sticky Navbar** — off-white blur bg. Left: text links. Center: [BRAND_NAME] serif. Right: Subscribe button ([PRIMARY_COLOR] bg).

2. **Featured Article Hero** — centered max-width 780px. [ACCENT_COLOR] category pill. 52px serif headline. 18px excerpt. Author/date/read-time meta with dot separators.

3. **Category Tabs** — horizontal pills: All, Technology, Design, Culture, Business. Active = [PRIMARY_COLOR] bg, white text.

4. **Article Grid** — 2 columns (left 1fr, right 340px). Left: 2 medium cards (category + 26px title + excerpt + meta). Right: 3 small cards (category + 18px title + date). Titles turn [ACCENT_COLOR] on hover.

5. **Newsletter** — centered 600px. "Subscribe to our weekly digest" in 36px serif. Email input + button.

6. **Article Preview** — 680px max-width reading column. 42px serif title. 18px body at 1.75 line-height. Drop cap first letter (64px Playfair). Pullquote: italic serif with [ACCENT_COLOR] left border. Code block: dark bg (#18181b), syntax-highlighted.

7. **Footer** — 4-column: brand + tagline, Sections, About, Follow. Bottom bar with copyright.

## Animations
Very subtle: scroll fade-up (0.7s), hover color changes (0.2s), tab transitions. This is about reading, not motion.

Variables: [BRAND_NAME]="The Brief", [PRIMARY_COLOR]="#1A1A1A", [ACCENT_COLOR]="#DC2626", [HEADLINE], [SUBHEADLINE], [CTA_TEXT]="Subscribe"`,

  lovable: `Create a premium editorial blog / publication homepage. Typography-first design inspired by The Verge, Monocle, and Medium.

**Theme:** Warm off-white (#FAFAF8), near-black text (#1A1A1A), editorial red accent (#DC2626). Clean, minimal, zero visual clutter.
**Fonts:** Playfair Display (serif) for all headlines. Inter for body text and UI elements.

## Core Typography
Headlines: Playfair Display 700 — 52px hero (line-height 1.12), 42px articles (1.15), 26px cards (1.25), 18px small cards (1.35). Tracking: -0.025em.
Body: Inter 400, 18px, line-height 1.75, max-width 680px for reading columns. Color #3f3f46.
Categories: Inter 600, 12px, uppercase, tracking 0.1em, editorial red.
Brand: Playfair Display 700, 26px.

## Page Structure

**Navbar:** Sticky. Blur background. Center-aligned [BRAND_NAME] in serif. Left: article/topic links. Right: Subscribe button in [PRIMARY_COLOR].

**Featured Article:** Hero centered at 780px. Red category badge pill. Large 52px serif headline "[HEADLINE]". 18px excerpt "[SUBHEADLINE]". Author · date · read time meta line.

**Categories:** Pill tabs (All / Technology / Design / Culture / Business). Active: [PRIMARY_COLOR] background. 0.25s transitions.

**Grid:** Two columns. Left (wider): 2 article cards with headlines, excerpts, author meta. Right (340px): 3 compact cards with just headlines and categories. Hover: titles → [ACCENT_COLOR].

**Newsletter:** "Subscribe to our weekly digest" — serif 36px title, email input + "[CTA_TEXT]" button.

**Article Preview:** 680px reading column demonstrating the template's typography. 42px title, 18px body at 1.75 line-height. Drop cap (64px). Pullquote (italic serif, red left border). Styled code block (dark bg, syntax colors).

**Footer:** Serif brand + tagline. Three link columns. Copyright bar.

**Animations:** Scroll fade-up only. Hover transitions. Nothing flashy — the reading experience IS the feature.

Variables: [BRAND_NAME], [PRIMARY_COLOR], [ACCENT_COLOR], [HEADLINE], [SUBHEADLINE], [CTA_TEXT]`,
};
