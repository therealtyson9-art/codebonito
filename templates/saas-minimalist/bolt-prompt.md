# SaaS Minimalist - Bolt/Lovable Prompt

Build a clean, professional SaaS application interface with these exact specifications:

## Design System
**Color Palette:**
- Primary: #64748b (slate gray)
- Accent: #3b82f6 (blue) 
- Background: #ffffff (white)
- Text: #0f172a (near black)
- Muted: #64748b (gray for secondary text)

**Typography:**
- Font: Inter (import from Google Fonts)
- Sizes: 14px, 16px, 18px, 20px, 24px, 36px, 60px
- Weights: 300, 400, 500, 600, 700
- Line height: 1.5 for body text

## Component Library

### Buttons
```jsx
// Primary Button
className="bg-blue-500 hover:bg-blue-600 text-white h-10 px-6 rounded-md font-medium transition-colors"

// Secondary Button  
className="bg-slate-100 hover:bg-slate-200 text-slate-700 h-10 px-6 rounded-md font-medium transition-colors"
```

### Cards
```jsx
className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
```

### Inputs
```jsx
className="w-full h-10 px-3 rounded-md border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-colors"
```

### Navigation
```jsx
// Sidebar navigation
className="flex flex-col space-y-1 p-4"

// Navigation item
className="flex items-center space-x-3 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"

// Active navigation item
className="flex items-center space-x-3 px-3 py-2 rounded-md bg-blue-50 text-blue-700 border-r-2 border-blue-500"
```

## Layout Patterns
- **Max width:** 1200px containers
- **Responsive breakpoints:** 768px (md), 1024px (lg)
- **Spacing scale:** 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

## Interface Requirements
1. **Clean data tables** with sortable headers
2. **Minimal sidebar navigation** with icons
3. **Professional forms** with proper validation states
4. **Dashboard cards** showing metrics and data
5. **Breadcrumb navigation** for page hierarchy

## Technology Stack
- React with TypeScript
- Tailwind CSS for styling  
- Lucide React for icons
- Headless UI for interactive components

## Avoid These Patterns
- Gradients or complex backgrounds
- Neon or bright color schemes
- Heavy shadows or glow effects
- Overly rounded elements (stick to 6-12px radius)
- Complex animations (simple hover/focus states only)

## Example Interfaces to Emulate
- **Stripe Dashboard:** Clean, data-focused
- **Linear:** Minimal, efficient
- **Notion:** Professional, well-organized
- **Vercel:** Simple, elegant

Create interfaces that prioritize user productivity, data clarity, and professional credibility. Every design decision should support business user workflows and efficiency.