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
  "Medical",
  "Legal",
  "Fitness",
  "Real Estate",
  "Education",
  "Consulting",
  "Travel",
  "Food",
  "Tech",
  "Wellness",
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
  "medical-minimalist",
  "medical-brutalist",
  "medical-corporate",
  "medical-playful",
  "medical-luxury",
  "legal-minimalist",
  "legal-brutalist",
  "legal-corporate",
  "legal-playful",
  "legal-luxury",
  "fitness-minimalist",
  "fitness-brutalist",
  "fitness-corporate",
  "fitness-playful",
  "fitness-luxury",
  "realestate-minimalist",
  "realestate-brutalist",
  "realestate-corporate",
  "realestate-playful",
  "realestate-luxury",
  "education-minimalist",
  "education-brutalist",
  "education-corporate",
  "education-playful",
  "education-luxury",
  "consulting-minimalist",
  "consulting-brutalist",
  "consulting-corporate",
  "consulting-playful",
  "consulting-luxury",
  "travel-minimalist",
  "travel-brutalist",
  "travel-corporate",
  "travel-playful",
  "travel-luxury",
  "food-minimalist",
  "food-brutalist",
  "food-corporate",
  "food-playful",
  "food-luxury",
  "tech-minimalist",
  "tech-brutalist",
  "tech-corporate",
  "tech-playful",
  "tech-luxury",
  "wellness-minimalist",
  "wellness-brutalist",
  "wellness-corporate",
  "wellness-playful",
  "wellness-luxury",
  "saas-motion-dark",
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
  Medical: ["eef7ff", "2563eb"],
  Legal: ["1a1a2e", "c8b06e"],
  Fitness: ["0f0f0f", "f43f5e"],
  "Real Estate": ["0d1117", "d4af37"],
  Education: ["1e3a5f", "60a5fa"],
  Consulting: ["0a0a14", "818cf8"],
  Travel: ["064e3b", "34d399"],
  Food: ["2d1b0e", "f97316"],
  Tech: ["020617", "38bdf8"],
  Wellness: ["f0fdf4", "16a34a"],
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
  Medical: {
    Minimalist:
      "Clean medical clinic website with soft blue accents, appointment booking form, doctor profiles, and patient testimonials. Calming and professional.",
    Brutalist:
      "Stark, high-contrast medical site with monospaced data, raw clinical aesthetic, bold health stats, and brutally honest patient information.",
    Corporate:
      "Enterprise healthcare portal with multi-department navigation, insurance info, compliance badges, and a professional appointment system.",
    Playful:
      "Friendly pediatric clinic site with rounded cards, cheerful illustrations, colorful service blocks, and an inviting patient intake form.",
    Luxury:
      "Premium private practice with dark theme, gold accents, elegant serif headings, concierge medicine feel, and exclusive membership tiers.",
  },
  Legal: {
    Minimalist:
      "Clean law firm site with structured practice areas, attorney profiles, case results, and a refined contact form. Trust through simplicity.",
    Brutalist:
      "Raw typography law firm with monospaced text, stark black-and-white palette, bold case numbers, and an unapologetic legal presence.",
    Corporate:
      "Enterprise law firm with multi-office locations, practice area navigation, partner bios, notable cases, and regulatory compliance display.",
    Playful:
      "Approachable legal services site with friendly icons, colorful practice area cards, FAQ accordion, and a welcoming consultation form.",
    Luxury:
      "Prestigious law firm with dark background, gold accents, serif typography, marble-inspired textures, and an exclusive client experience.",
  },
  Fitness: {
    Minimalist:
      "Clean gym website with class schedule grid, trainer profiles, membership tiers, and a distraction-free join form. Results-focused design.",
    Brutalist:
      "Raw, aggressive fitness site with bold type, high-contrast imagery, monospaced workout stats, and an intense motivational aesthetic.",
    Corporate:
      "Professional fitness chain site with multi-location finder, corporate wellness programs, certification badges, and membership management.",
    Playful:
      "Vibrant gym site with neon accents, animated class cards, emoji workout categories, fun progress trackers, and energetic color palette.",
    Luxury:
      "Premium fitness club with dark theme, gold accents, editorial photography, exclusive membership tiers, and a sophisticated booking system.",
  },
  "Real Estate": {
    Minimalist:
      "Clean property listing site with elegant cards, map integration placeholder, property details, and a refined inquiry form. Less is luxury.",
    Brutalist:
      "Raw real estate site with monospaced property data, stark grid layout, high-contrast photography, and unfiltered market statistics.",
    Corporate:
      "Enterprise real estate portal with advanced search filters, agent directories, market reports, and multi-property comparison tools.",
    Playful:
      "Fun property browsing experience with colorful listing cards, emoji neighborhood tags, interactive price ranges, and a cheerful contact form.",
    Luxury:
      "Premium real estate with dark background, gold accents, full-bleed property photography, exclusive listings, and elegant serif typography.",
  },
  Education: {
    Minimalist:
      "Clean education site with course catalog, instructor profiles, enrollment form, and a well-structured curriculum overview. Focus on learning.",
    Brutalist:
      "Raw academic site with monospaced course codes, stark layout, exposed data structures, and no-nonsense educational content presentation.",
    Corporate:
      "Professional school site with blue tones, department navigation, accreditation badges, tuition calculator, and structured course catalog.",
    Playful:
      "Colorful learning platform with animated course cards, emoji subject tags, progress badges, fun quizzes, and an engaging student dashboard.",
    Luxury:
      "Premium academy with dark theme, gold accents, prestigious typography, exclusive program listings, and an elite enrollment experience.",
  },
  Consulting: {
    Minimalist:
      "Clean consulting firm site with service cards, case studies, team profiles, and a structured engagement process. Clarity builds confidence.",
    Brutalist:
      "Raw consulting site with monospaced metrics, stark methodology layouts, bold impact numbers, and an unfiltered approach to results.",
    Corporate:
      "Enterprise consulting portal with industry expertise sections, engagement models, global office listings, and professional credentials.",
    Playful:
      "Approachable consulting site with colorful service blocks, animated testimonials, fun process steps, and a friendly discovery call form.",
    Luxury:
      "Premium consulting firm with dark theme, gold accents, serif typography, C-suite testimonials, and an exclusive engagement experience.",
  },
  Travel: {
    Minimalist:
      "Clean travel agency site with destination cards, itinerary layout, traveler reviews, and a simple booking inquiry form. Wander with purpose.",
    Brutalist:
      "Raw travel site with stark destination photography, monospaced coordinates, bold typography, and an unfiltered adventure aesthetic.",
    Corporate:
      "Professional travel management platform with corporate booking, expense tracking, multi-destination planning, and travel policy compliance.",
    Playful:
      "Vibrant travel site with colorful destination cards, emoji country flags, animated price deals, fun trip planners, and cheerful booking flow.",
    Luxury:
      "Premium travel concierge with dark theme, gold accents, full-bleed destination imagery, bespoke itineraries, and exclusive resort partnerships.",
  },
  Food: {
    Minimalist:
      "Clean food delivery site with menu grid, ingredient details, dietary filters, and a distraction-free ordering flow. Fresh and focused.",
    Brutalist:
      "Raw food brand site with monospaced nutrition data, stark product photography, bold flavor descriptions, and an unfiltered culinary aesthetic.",
    Corporate:
      "Professional food service company with catering packages, corporate meal plans, nutrition compliance, and multi-location ordering.",
    Playful:
      "Fun food ordering site with animated menu items, emoji cuisine tags, colorful meal cards, bouncy cart interactions, and cheerful checkout.",
    Luxury:
      "Premium artisanal food brand with dark theme, gold accents, editorial food photography, chef profiles, and a sophisticated tasting experience.",
  },
  Tech: {
    Minimalist:
      "Clean tech company site with product features, API documentation preview, developer testimonials, and a sleek signup flow. Ship with clarity.",
    Brutalist:
      "Raw tech startup with monospaced code snippets, exposed terminal aesthetics, stark documentation layout, and zero visual ornamentation.",
    Corporate:
      "Enterprise tech platform with security certifications, compliance badges, integration ecosystem, and professional sales contact flow.",
    Playful:
      "Vibrant tech product site with animated feature demos, colorful integration cards, emoji status badges, and a fun developer playground.",
    Luxury:
      "Premium tech brand with dark theme, gold accents, cinematic product reveals, exclusive beta access, and sophisticated developer experience.",
  },
  Wellness: {
    Minimalist:
      "Clean wellness studio with service menu, practitioner profiles, booking calendar, and a serene whitespace-heavy design. Calm by design.",
    Brutalist:
      "Raw wellness brand with monospaced session data, stark treatment layouts, bold wellness metrics, and an unfiltered healing aesthetic.",
    Corporate:
      "Professional wellness program with corporate packages, employee wellness analytics, certification badges, and multi-location directory.",
    Playful:
      "Cheerful wellness site with animated service cards, emoji treatment categories, colorful booking steps, and a warm community section.",
    Luxury:
      "Premium spa experience with dark theme, gold accents, elegant serif headings, exclusive treatment packages, and a sophisticated booking flow.",
  },
};

// ── Original 10 categories ─────────────────────────────────────────
const ORIGINAL_CATEGORIES = [
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

// ── New 10 categories ──────────────────────────────────────────────
const NEW_CATEGORIES = [
  "Medical",
  "Legal",
  "Fitness",
  "Real Estate",
  "Education",
  "Consulting",
  "Travel",
  "Food",
  "Tech",
  "Wellness",
] as const;

// ── Generate all 100 templates ─────────────────────────────────────

function generateTemplates(): Template[] {
  const templates: Template[] = [];
  let idx = 0;

  // Original 50 templates (IDs 1-50, older dates)
  for (const category of ORIGINAL_CATEGORIES) {
    for (const style of STYLES) {
      idx++;
      const slug = `${category.toLowerCase().replace(/[- ]/g, "")}-${style.toLowerCase()}`;
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
        ...(demoPreviewUrl ? { demo_url: demoPreviewUrl } : {}),
      } as Template);
    }
  }

  // New 50 templates (IDs 51-100, recent dates within last 7 days)
  const now = Date.now();
  let newIdx = 0;
  for (const category of NEW_CATEGORIES) {
    for (const style of STYLES) {
      idx++;
      newIdx++;
      const slug = `${category.toLowerCase().replace(/[- ]/g, "")}-${style.toLowerCase()}`;
      const name = `${category} ${style}`;
      const description =
        DESCRIPTIONS[category]?.[style] ?? `${name} template — production-ready and fully responsive.`;
      const downloads = seededRand(slug);
      const platforms = pickPlatforms(slug);
      const [bg, fg] = CATEGORY_COLORS[category] ?? ["111111", "eeeeee"];
      const previewUrl = `https://placehold.co/800x600/${bg}/${fg}?text=${encodeURIComponent(name)}`;
      const demoSlug = slug.replace("real estate", "realestate").replace("realestate", "realestate");
      const demoPreviewUrl = DEMO_SLUGS.has(demoSlug) ? `/demo/${demoSlug}` : null;

      // Stagger dates: newest first, spread across last 7 days
      const hoursAgo = (newIdx - 1) * 3.3; // ~3.3 hours apart, 50 templates across ~7 days
      const createdDate = new Date(now - hoursAgo * 60 * 60 * 1000);

      templates.push({
        id: String(idx),
        name,
        slug,
        description,
        category,
        style,
        platforms,
        creator_id: `creator-${(idx % 5) + 1}`,
        price_tier: "pro",
        downloads_count: downloads,
        preview_url: previewUrl,
        preview_mobile_url: null,
        manifest_json: null,
        tokens_json: null,
        status: "published",
        created_at: createdDate.toISOString(),
        updated_at: createdDate.toISOString(),
        ...(demoPreviewUrl ? { demo_url: demoPreviewUrl } : {}),
      } as Template);
    }
  }

  return templates;
}

const _generatedTemplates = generateTemplates();

// ── Ultra Premium templates (manually defined) ─────────────────────
const ULTRA_PREMIUM_TEMPLATES: Template[] = [
  {
    id: "101",
    name: "SaaS Dark Motion",
    slug: "saas-motion-dark",
    description:
      "Dark SaaS blueprint: Pexels video background, glassmorphism nav (backdrop-blur-xl), dual typography (Inter 900 + Instrument Serif italic), 3D mouse-tracking tilt cards, CSS animations with cubic-bezier(0.23,1,0.32,1) easing, cursor-tracking glow, shimmer CTA button, and animated stat counters. Framer Motion specs + video bg + glassmorphism — production-ready implementation blueprint.",
    category: "SaaS",
    style: "Motion",
    platforms: ["cursor", "claude-code", "v0", "bolt", "lovable"],
    creator_id: "creator-1",
    price_tier: "ultra_premium",
    downloads_count: 0,
    preview_url: "https://placehold.co/800x600/050510/6366f1?text=SaaS+Dark+Motion",
    preview_mobile_url: null,
    manifest_json: null,
    tokens_json: null,
    status: "published",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    demo_url: "/demo/saas-motion-dark",
  },
];

export const MOCK_TEMPLATES: Template[] = [..._generatedTemplates, ...ULTRA_PREMIUM_TEMPLATES];

// Helper to get demo URL for a template slug
export function getDemoUrl(slug: string): string | null {
  const demoSlug = slug.replace("e-commerce", "ecommerce").replace("real estate", "realestate");
  return DEMO_SLUGS.has(demoSlug) ? `/demo/${demoSlug}` : null;
}
