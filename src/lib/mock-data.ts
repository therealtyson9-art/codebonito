import type { Template } from "@/types/database";

export const CATEGORIES = [
  "SaaS",
  "Portfolio",
  "E-commerce",
  "Landing",
  "Blog",
  "Dashboard",
  "Docs",
  "Agency",
  "Restaurant",
  "Startup",
] as const;

export const STYLES = [
  "Minimalist",
  "Brutalist",
  "Corporate",
  "Playful",
  "Luxury",
] as const;

export const PLATFORMS_LIST = [
  "cursor",
  "v0",
  "bolt",
  "lovable",
  "claude-code",
] as const;

/** @deprecated Use PLATFORMS_LIST */
export const PLATFORMS = PLATFORMS_LIST;

// Demo pages that actually exist under /demo/[slug]
const DEMO_SLUGS = new Set([
  "agency-brutalist",
  "agency-corporate",
  "agency-luxury",
  "agency-minimalist",
  "agency-playful",
  "blog-brutalist",
  "blog-corporate",
  "blog-luxury",
  "blog-minimalist",
  "blog-playful",
  "dashboard-brutalist",
  "dashboard-corporate",
  "dashboard-luxury",
  "dashboard-minimalist",
  "dashboard-playful",
  "docs-brutalist",
  "docs-corporate",
  "docs-luxury",
  "docs-minimalist",
  "docs-playful",
  "ecommerce-brutalist",
  "ecommerce-corporate",
  "ecommerce-luxury",
  "ecommerce-minimalist",
  "ecommerce-playful",
  "landing-brutalist",
  "landing-corporate",
  "landing-luxury",
  "landing-minimalist",
  "landing-playful",
  "portfolio-brutalist",
  "portfolio-corporate",
  "portfolio-luxury",
  "portfolio-minimalist",
  "portfolio-playful",
  "restaurant-brutalist",
  "restaurant-corporate",
  "restaurant-luxury",
  "restaurant-minimalist",
  "restaurant-playful",
  "saas-brutalist",
  "saas-corporate",
  "saas-luxury",
  "saas-minimalist",
  "saas-playful",
  "startup-brutalist",
  "startup-corporate",
  "startup-luxury",
  "startup-minimalist",
  "startup-playful",
]);

// Deterministic pseudo-random from seed string
function seededRand(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  }
  return ((h >>> 0) % 451 + 50); // range 50-500
}

function pickPlatforms(seed: string): string[] {
  const all = [...PLATFORMS_LIST];
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(37, h) + seed.charCodeAt(i)) | 0;
  }
  const count = (h >>> 0) % 4 + 2; // 2-5 platforms
  // Shuffle deterministically
  for (let i = all.length - 1; i > 0; i--) {
    h = (Math.imul(31, h) + i) | 0;
    const j = (h >>> 0) % (i + 1);
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all.slice(0, count);
}

// These 3 templates are free; all others are paid ($2)
const FREE_SLUGS = new Set([
  "saas-minimalist",
  "portfolio-minimalist",
  "landing-minimalist",
]);

function isPro(slug: string): boolean {
  return !FREE_SLUGS.has(slug);
}

// Category-specific placeholder colors for preview URLs
const CATEGORY_COLORS: Record<string, [string, string]> = {
  SaaS: ["0a0a0a", "f5f5f5"],
  Portfolio: ["f5f5f5", "0a0a0a"],
  "E-commerce": ["0a0a1a", "06b6d4"],
  Landing: ["1e1b4b", "c084fc"],
  Blog: ["18181b", "fafafa"],
  Dashboard: ["0f0f23", "a78bfa"],
  Docs: ["0f172a", "94a3b8"],
  Agency: ["111111", "f59e0b"],
  Restaurant: ["1c1917", "d4a574"],
  Startup: ["09090b", "e4e4e7"],
};

// ── Template descriptions ──────────────────────────────────────────

const DESCRIPTIONS: Record<string, Record<string, string>> = {
  SaaS: {
    Minimalist:
      "A clean, whitespace-heavy SaaS landing page with subtle animations. Features hero with product mockup, feature grid, testimonials carousel, pricing table, and a beautiful CTA section.",
    Brutalist:
      "Raw, unapologetic SaaS template with exposed grid systems, monospaced typography, and deliberate anti-design elements. Bold black-and-white with yellow accents.",
    Corporate:
      "Enterprise-grade SaaS template with professional blue tones, data-driven layout, trust badges, and compliance-ready design. Built for B2B products.",
    Playful:
      "Vibrant, energetic SaaS page with rounded corners, bouncy animations, colorful gradients, and fun micro-interactions. Perfect for consumer apps.",
    Luxury:
      "Premium SaaS landing with dark theme, gold accents, serif typography, and cinematic scroll effects. Designed for high-end products.",
  },
  Portfolio: {
    Minimalist:
      "Elegant, distraction-free portfolio with generous whitespace, clean typography, and smooth fade-in animations. Focus on your work, nothing else.",
    Brutalist:
      "Bold portfolio with exposed grid systems, monospaced type, and deliberate anti-design elements. Project showcase with full-bleed images and manifesto section.",
    Corporate:
      "Professional portfolio template for consultants and agencies. Structured case studies, client logos, testimonials grid, and contact form with validation.",
    Playful:
      "Colorful, animated portfolio with emoji accents, card-flip interactions, sticker-style badges, and a fun project timeline. Stand out from the crowd.",
    Luxury:
      "High-end portfolio with editorial layout, art-directed project pages, parallax scrolling, and refined serif typography. Museum-quality presentation.",
  },
  "E-commerce": {
    Minimalist:
      "Clean storefront with generous product photography, subtle hover effects, minimal navigation, and a distraction-free checkout flow. Less is more.",
    Brutalist:
      "Raw e-commerce template with exposed structure, monospace product descriptions, stark black-and-white imagery, and zero visual fluff.",
    Corporate:
      "Enterprise e-commerce with advanced filtering, mega-menu navigation, trust badges, bulk ordering, and a corporate account management system.",
    Playful:
      "Fun, vibrant storefront with bouncy add-to-cart animations, confetti effects, emoji reviews, and a playful color palette. Great for lifestyle brands.",
    Luxury:
      "Premium e-commerce experience with editorial product photography, dark theme, gold accents, and sophisticated checkout. Built for fashion and jewelry.",
  },
  Landing: {
    Minimalist:
      "The perfect first impression. Minimal landing page with animated hero text, feature bento grid, testimonial wall, pricing toggle, and clean footer.",
    Brutalist:
      "Show-stopping brutalist landing with raw typography, geometric shapes, exposed grid, and high-contrast color blocks. Impossible to ignore.",
    Corporate:
      "Professional landing page with trust signals, data-driven sections, executive team grid, case studies, and enterprise-ready contact form.",
    Playful:
      "Energetic landing page with gradient blobs, animated counters, fun illustrations, interactive pricing slider, and a cheerful color palette.",
    Luxury:
      "Cinematic landing with full-screen video hero, parallax sections, gold foil effects, and elegant serif typography. First-class first impression.",
  },
  Blog: {
    Minimalist:
      "Content-first blog with gorgeous typography, reading progress bar, estimated read time, table of contents sidebar, and newsletter signup.",
    Brutalist:
      "Anti-design blog with monospaced type, stark layout, raw markdown aesthetic, and no-nonsense content presentation. Words over decoration.",
    Corporate:
      "Professional blog template with author bylines, category taxonomy, related posts, share buttons, and SEO-optimized metadata structure.",
    Playful:
      "Colorful blog with emoji tags, gradient cards, animated category pills, fun hover effects, and an engaging newsletter popup.",
    Luxury:
      "Editorial blog with magazine-quality layout, pull quotes, full-bleed hero images, drop caps, and refined serif typography throughout.",
  },
  Dashboard: {
    Minimalist:
      "Clean analytics dashboard with simple charts, plenty of whitespace, and an intuitive sidebar navigation. Focus on data clarity.",
    Brutalist:
      "Raw data dashboard with monospaced metrics, stark table layouts, and zero visual chrome. Pure information density.",
    Corporate:
      "Enterprise admin panel with role-based access, audit logs, data tables with sorting and filtering, and a professional blue theme.",
    Playful:
      "Colorful dashboard with animated progress rings, emoji status indicators, gradient stat cards, and fun data visualizations.",
    Luxury:
      "Premium analytics dashboard with glassmorphic panels, dark theme, gold accent charts, and sophisticated data visualization components.",
  },
  Docs: {
    Minimalist:
      "Clean documentation site with sidebar navigation, syntax highlighting, copy-to-clipboard code blocks, and fast full-text search.",
    Brutalist:
      "No-nonsense documentation with monospaced everything, stark black-and-white layout, and terminal-inspired code blocks.",
    Corporate:
      "Enterprise documentation portal with versioning, API reference generator, team permissions, and professional structured layout.",
    Playful:
      "Friendly docs with colorful syntax themes, interactive code playgrounds, emoji callouts, and step-by-step tutorials with progress tracking.",
    Luxury:
      "Premium documentation with elegant typography, dark theme code blocks, smooth transitions, and beautifully styled API reference pages.",
  },
  Agency: {
    Minimalist:
      "Clean agency site with case study cards, team grid, service list, and a simple contact form. Let your work speak for itself.",
    Brutalist:
      "Bold digital agency template with raw typography, geometric layouts, manifesto-style copy, and high-impact project showcases.",
    Corporate:
      "Professional agency template with client logos, service packages, team bios, industry certifications, and a detailed process timeline.",
    Playful:
      "Energetic agency site with bouncy animations, colorful team cards, fun service illustrations, and an interactive project showcase.",
    Luxury:
      "High-end agency presence with cinematic project reveals, editorial case studies, dark theme, and premium serif typography throughout.",
  },
  Restaurant: {
    Minimalist:
      "Clean restaurant site with full-screen food photography, simple menu layout, reservation form, and elegant spacing throughout.",
    Brutalist:
      "Raw restaurant template with stark typography, monospaced menu listings, high-contrast imagery, and an unapologetically bold aesthetic.",
    Corporate:
      "Professional restaurant template for chains and franchises. Multi-location support, nutritional info, online ordering, and brand guidelines.",
    Playful:
      "Fun restaurant site with animated menu items, emoji food categories, colorful section dividers, and a cheerful reservation widget.",
    Luxury:
      "Premium dining experience with dark theme, gold accents, Cormorant Garamond serif font, editorial food photography, and elegant menu presentation.",
  },
  Startup: {
    Minimalist:
      "Clean startup landing with animated hero, feature list, team section, and waitlist signup. Ship your MVP page in minutes.",
    Brutalist:
      "Bold startup page with raw typography, geometric hero, exposed grid metrics, and a no-BS approach to telling your story.",
    Corporate:
      "Enterprise startup template with investor-ready metrics, team grid, advisory board, press logos, and professional contact section.",
    Playful:
      "Vibrant startup page with gradient backgrounds, animated counters, fun team photos, emoji feature tags, and a cheerful waitlist form.",
    Luxury:
      "Premium startup presence with cinematic hero, elegant typography, dark theme, and sophisticated scroll animations. Fundraise in style.",
  },
};

// ── Generate all 50 templates ──────────────────────────────────────

function generateTemplates(): Template[] {
  const templates: Template[] = [];
  let idx = 0;

  for (const category of CATEGORIES) {
    for (const style of STYLES) {
      idx++;
      const slug = `${category.toLowerCase().replace(/[- ]/g, "")}-${style.toLowerCase()}`;
      // Friendly name: "SaaS Minimalist", "E-commerce Luxury", etc.
      const name = `${category} ${style}`;
      const description =
        DESCRIPTIONS[category]?.[style] ?? `${name} template — production-ready and fully responsive.`;
      const downloads = seededRand(slug);
      const pro = isPro(slug);
      const platforms = pickPlatforms(slug);
      const [bg, fg] = CATEGORY_COLORS[category] ?? ["111111", "eeeeee"];
      const previewUrl = `https://placehold.co/800x600/${bg}/${fg}?text=${encodeURIComponent(name)}`;
      const demoSlug = slug.replace("e-commerce", "ecommerce").replace("landing", "landing");
      const demoPreviewUrl = DEMO_SLUGS.has(demoSlug) ? `/demo/${demoSlug}` : null;

      templates.push({
        id: String(idx),
        name,
        slug,
        description,
        category,
        style,
        platforms,
        creator_id: `creator-${(idx % 5) + 1}`,
        price_tier: pro ? "pro" : "free",
        downloads_count: downloads,
        preview_url: previewUrl,
        preview_mobile_url: null,
        manifest_json: null,
        tokens_json: null,
        status: "published",
        created_at: new Date(2025, 0, 1 + idx).toISOString(),
        updated_at: new Date(2025, 2, 1 + idx).toISOString(),
        // Extra field for demo link (not in DB, used by UI)
        ...(demoPreviewUrl ? { demo_url: demoPreviewUrl } : {}),
      } as Template);
    }
  }

  return templates;
}

export const MOCK_TEMPLATES: Template[] = generateTemplates();

// Helper to get demo URL for a template slug
export function getDemoUrl(slug: string): string | null {
  const demoSlug = slug.replace("e-commerce", "ecommerce");
  return DEMO_SLUGS.has(demoSlug) ? `/demo/${demoSlug}` : null;
}
