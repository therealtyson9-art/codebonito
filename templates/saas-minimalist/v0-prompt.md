# SaaS Minimalist - v0 Prompt

Create a clean, professional SaaS interface using this exact design system:

## Required Styling
Use these Tailwind classes exclusively:

### Colors
- Primary: `bg-slate-600 text-white` or `text-slate-600`
- Accent: `bg-blue-500 text-white` or `text-blue-500`
- Background: `bg-white`
- Text: `text-slate-900` (primary), `text-slate-500` (secondary)
- Borders: `border-slate-200`

### Typography
- Font: Add `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">` 
- Apply: `font-inter` class (you'll need to configure this)
- Sizes: `text-sm text-base text-lg text-xl text-2xl text-4xl`
- Weights: `font-normal font-medium font-semibold font-bold`

### Components
- **Buttons:** `h-10 px-6 rounded-md font-medium transition-colors`
  - Primary: `bg-blue-500 hover:bg-blue-600 text-white`
  - Secondary: `bg-slate-100 hover:bg-slate-200 text-slate-700`
- **Cards:** `bg-white rounded-xl p-6 shadow-sm`
- **Inputs:** `h-10 px-3 rounded-md border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20`

### Layout
- Container: `max-w-6xl mx-auto px-4`
- Spacing: `space-y-4 space-y-6 space-y-8` for vertical rhythm
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

## Interface Guidelines
Create interfaces that feel like:
- **Stripe Dashboard:** Clean data tables, clear CTAs
- **Linear:** Minimal navigation, focus on content
- **Vercel:** Simple layouts, professional polish

## Example Component Request Format:
"Build a SaaS dashboard sidebar with navigation items, using slate-600 for icons, blue-500 for active states, white background, Inter font, and rounded-md for interactive elements."

## Avoid:
- Gradients (use solid colors)
- Bright colors (stick to slate/blue palette) 
- Heavy shadows (only shadow-sm, shadow-md)
- Fully rounded buttons (use rounded-md)
- Complex animations (simple hover states only)

Focus on functionality, clarity, and professional aesthetics. Every element should serve a clear purpose in a business application interface.