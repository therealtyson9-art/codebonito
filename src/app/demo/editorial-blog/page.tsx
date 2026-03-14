"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Constants ──────────────────────────────────────────────────── */
const BRAND = "The Brief";
const PRIMARY = "#1A1A1A";
const ACCENT = "#DC2626";

/* ─── Data ───────────────────────────────────────────────────────── */
interface Article {
  title: string;
  excerpt?: string;
  author?: string;
  date: string;
  readTime: string;
  category: string;
}

const FEATURED: Article = {
  title: "The Renaissance of Slow Technology in a World Addicted to Speed",
  excerpt:
    "As the tech industry races toward faster everything, a growing movement of designers and engineers is asking: what if we slowed down? Inside the quiet revolution reshaping how we think about digital products.",
  author: "Elena Marchetti",
  date: "March 12, 2026",
  readTime: "8 min read",
  category: "Technology",
};

const MEDIUM_ARTICLES: Article[] = [
  {
    title: "Why Every Brand Is Becoming a Media Company — And Why Most Will Fail",
    excerpt:
      "The playbook seems simple: hire writers, launch a podcast, build an audience. But the brands succeeding at content are doing something fundamentally different.",
    author: "James Whitfield",
    date: "March 11, 2026",
    readTime: "6 min read",
    category: "Business",
  },
  {
    title: "The Invisible Design Decisions That Shape How Cities Feel",
    excerpt:
      "From the curve of a bench to the color temperature of streetlights, urban designers are making thousands of choices you never consciously notice — but always feel.",
    author: "Aiko Tanaka",
    date: "March 10, 2026",
    readTime: "7 min read",
    category: "Design",
  },
];

const SMALL_ARTICLES: Article[] = [
  { title: "What Vinyl's Comeback Tells Us About Digital Fatigue", date: "March 9, 2026", readTime: "4 min", category: "Culture" },
  { title: "The Case for Boring Software", date: "March 8, 2026", readTime: "5 min", category: "Technology" },
  { title: "How Three Founders Built a $40M Business Without Venture Capital", date: "March 7, 2026", readTime: "6 min", category: "Business" },
];

const CATEGORIES = ["All", "Technology", "Design", "Culture", "Business"];

const FOOTER_COLS = [
  { title: "Sections", links: ["Technology", "Design", "Culture", "Business", "Opinion"] },
  { title: "About", links: ["Our Story", "Masthead", "Careers", "Ethics Policy", "Contact"] },
  { title: "Follow", links: ["Twitter / X", "Instagram", "LinkedIn", "RSS Feed", "Newsletter"] },
];

/* ─── Scroll reveal hook ─────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done) {
          done = true;
          el.classList.add("eb-visible");
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

function Reveal({ children, th }: { children: React.ReactNode; th?: number }) {
  const ref = useReveal(th);
  return (
    <div ref={ref} className="eb-reveal">
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/* ─── Main Page Component ────────────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════════════ */
export default function EditorialBlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Keyframes ── */
        @keyframes eb-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes eb-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Scroll reveal ── */
        .eb-reveal {
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .eb-reveal.eb-visible { opacity: 1; transform: translateY(0); }

        /* ── Root ── */
        .eb-root {
          min-height: 100vh;
          background: #FAFAF8;
          color: ${PRIMARY};
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* ── Navbar ── */
        .eb-nav {
          position: sticky; top: 0; z-index: 100;
          background: rgba(250, 250, 248, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }
        .eb-nav-inner {
          max-width: 1100px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 24px;
        }
        .eb-nav-left {
          display: flex; align-items: center; gap: 24px;
        }
        .eb-nav-left a {
          font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500;
          color: #64748b; text-decoration: none; transition: color 0.2s;
          letter-spacing: -0.005em;
        }
        .eb-nav-left a:hover { color: ${PRIMARY}; }
        .eb-nav-brand {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 26px; font-weight: 700; letter-spacing: -0.03em;
          color: ${PRIMARY}; text-decoration: none;
          position: absolute; left: 50%; transform: translateX(-50%);
        }
        .eb-nav-right {
          display: flex; align-items: center; gap: 20px;
        }
        .eb-nav-right a {
          font-size: 14px; font-weight: 500; color: #64748b;
          text-decoration: none; transition: color 0.2s;
        }
        .eb-nav-right a:hover { color: ${PRIMARY}; }
        .eb-subscribe-btn {
          font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600;
          color: #fff; background: ${PRIMARY}; border: none;
          border-radius: 6px; padding: 8px 20px; cursor: pointer;
          transition: all 0.2s; letter-spacing: -0.01em;
        }
        .eb-subscribe-btn:hover { background: #333; transform: translateY(-1px); }

        /* ── Hero / Featured ── */
        .eb-hero {
          max-width: 780px; margin: 0 auto;
          padding: 72px 24px 56px; text-align: center;
          animation: eb-fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
          position: relative; overflow: hidden;
        }
        .eb-hero-category {
          display: inline-block; font-family: 'Inter', sans-serif;
          font-size: 12px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.1em; color: ${ACCENT};
          border: 1px solid ${ACCENT}33; border-radius: 100px;
          padding: 5px 14px; margin-bottom: 28px;
        }
        .eb-hero-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 52px; font-weight: 700; line-height: 1.12;
          letter-spacing: -0.025em; color: ${PRIMARY};
          margin-bottom: 24px;
        }
        .eb-hero-excerpt {
          font-size: 18px; line-height: 1.7; color: #52525b;
          max-width: 600px; margin: 0 auto 28px;
          letter-spacing: -0.005em;
        }
        .eb-hero-meta {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; font-size: 14px; color: #71717a;
        }
        .eb-hero-author { font-weight: 600; color: ${PRIMARY}; }
        .eb-meta-dot {
          width: 3px; height: 3px; border-radius: 50%;
          background: #d4d4d8;
        }
        .eb-hero-divider {
          max-width: 780px; margin: 0 auto;
          height: 1px; background: #e4e4e7;
        }

        /* ── Category tabs ── */
        .eb-categories {
          max-width: 780px; margin: 0 auto;
          padding: 40px 24px 8px;
          display: flex; gap: 8px; flex-wrap: wrap;
          animation: eb-fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
        }
        .eb-cat-tab {
          font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 500;
          padding: 8px 18px; border-radius: 100px;
          border: 1px solid #e4e4e7; background: transparent;
          color: #71717a; cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          letter-spacing: -0.005em;
        }
        .eb-cat-tab:hover {
          border-color: #a1a1aa; color: ${PRIMARY};
        }
        .eb-cat-tab-active {
          background: ${PRIMARY}; color: #fff;
          border-color: ${PRIMARY};
        }
        .eb-cat-tab-active:hover {
          background: #333; border-color: #333; color: #fff;
        }

        /* ── Article Grid ── */
        .eb-grid {
          max-width: 1040px; margin: 0 auto;
          padding: 48px 24px 80px;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
        }
        .eb-grid-left { display: flex; flex-direction: column; gap: 40px; }
        .eb-grid-right { display: flex; flex-direction: column; gap: 0; }

        /* Medium card */
        .eb-card-medium {
          padding-bottom: 40px;
          border-bottom: 1px solid #e4e4e7;
          cursor: pointer;
        }
        .eb-card-medium:last-child { border-bottom: none; padding-bottom: 0; }
        .eb-card-medium-cat {
          font-size: 12px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.08em; color: ${ACCENT}; margin-bottom: 12px;
        }
        .eb-card-medium-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 26px; font-weight: 700; line-height: 1.25;
          letter-spacing: -0.02em; margin-bottom: 12px;
          transition: color 0.2s;
        }
        .eb-card-medium:hover .eb-card-medium-title { color: ${ACCENT}; }
        .eb-card-medium-excerpt {
          font-size: 15px; line-height: 1.7; color: #52525b;
          margin-bottom: 16px; letter-spacing: -0.005em;
        }
        .eb-card-medium-meta {
          display: flex; align-items: center; gap: 12px;
          font-size: 13px; color: #a1a1aa;
        }
        .eb-card-medium-author { font-weight: 600; color: #52525b; }

        /* Small card */
        .eb-card-small {
          padding: 20px 0;
          border-bottom: 1px solid #e4e4e7;
          cursor: pointer;
        }
        .eb-card-small:first-child { padding-top: 0; }
        .eb-card-small:last-child { border-bottom: none; }
        .eb-card-small-cat {
          font-size: 11px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.08em; color: ${ACCENT}; margin-bottom: 8px;
        }
        .eb-card-small-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 18px; font-weight: 600; line-height: 1.35;
          letter-spacing: -0.015em;
          transition: color 0.2s;
        }
        .eb-card-small:hover .eb-card-small-title { color: ${ACCENT}; }
        .eb-card-small-date {
          font-size: 12px; color: #a1a1aa; margin-top: 8px;
        }

        /* ── Grid divider ── */
        .eb-section-divider {
          max-width: 1040px; margin: 0 auto;
          padding: 0 24px;
        }
        .eb-section-divider-line {
          height: 1px; background: #e4e4e7;
        }

        /* ── Newsletter ── */
        .eb-newsletter {
          max-width: 600px; margin: 0 auto;
          padding: 80px 24px;
          text-align: center;
        }
        .eb-newsletter-label {
          font-size: 12px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.1em; color: ${ACCENT}; margin-bottom: 20px;
        }
        .eb-newsletter-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 36px; font-weight: 700; line-height: 1.2;
          letter-spacing: -0.025em; margin-bottom: 16px;
        }
        .eb-newsletter-desc {
          font-size: 16px; line-height: 1.7; color: #71717a;
          margin-bottom: 32px; letter-spacing: -0.005em;
        }
        .eb-newsletter-form {
          display: flex; gap: 10px; max-width: 420px; margin: 0 auto;
        }
        .eb-newsletter-input {
          flex: 1; font-family: 'Inter', sans-serif; font-size: 15px;
          padding: 14px 18px; border: 1px solid #e4e4e7;
          border-radius: 8px; background: #fff; color: ${PRIMARY};
          outline: none; transition: border-color 0.2s;
          letter-spacing: -0.005em;
        }
        .eb-newsletter-input::placeholder { color: #a1a1aa; }
        .eb-newsletter-input:focus { border-color: ${PRIMARY}; }
        .eb-newsletter-submit {
          font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600;
          padding: 14px 24px; border: none; border-radius: 8px;
          background: ${PRIMARY}; color: #fff; cursor: pointer;
          transition: all 0.2s; letter-spacing: -0.01em; white-space: nowrap;
        }
        .eb-newsletter-submit:hover { background: #333; transform: translateY(-1px); }

        /* ── Article Preview ── */
        .eb-preview {
          max-width: 680px; margin: 0 auto;
          padding: 0 24px 80px;
        }
        .eb-preview-label {
          font-size: 12px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.1em; color: ${ACCENT}; margin-bottom: 24px;
          padding-top: 80px;
          border-top: 1px solid #e4e4e7;
        }
        .eb-preview-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 42px; font-weight: 700; line-height: 1.15;
          letter-spacing: -0.025em; margin-bottom: 16px;
        }
        .eb-preview-meta {
          display: flex; align-items: center; gap: 12px;
          font-size: 14px; color: #71717a; margin-bottom: 48px;
        }
        .eb-preview-author-name { font-weight: 600; color: ${PRIMARY}; }
        .eb-preview-body p {
          font-size: 18px; line-height: 1.75; color: #3f3f46;
          margin-bottom: 28px; letter-spacing: -0.005em;
        }
        .eb-preview-body p:first-child::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 64px; font-weight: 700; float: left;
          line-height: 0.85; margin-right: 8px; margin-top: 4px;
          color: ${PRIMARY};
        }

        /* Pullquote */
        .eb-pullquote {
          border-left: 3px solid ${ACCENT};
          padding: 4px 0 4px 28px;
          margin: 40px 0;
        }
        .eb-pullquote p {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 22px !important; font-style: italic;
          line-height: 1.6 !important; color: ${PRIMARY} !important;
          margin-bottom: 0 !important;
        }

        /* Code block */
        .eb-code-block {
          background: #18181b; border-radius: 10px;
          padding: 24px 28px; margin: 36px 0;
          overflow-x: auto;
        }
        .eb-code-block code {
          font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
          font-size: 14px; line-height: 1.7; color: #e4e4e7;
          white-space: pre;
        }
        .eb-code-comment { color: #71717a; }
        .eb-code-keyword { color: #c084fc; }
        .eb-code-string { color: #86efac; }
        .eb-code-fn { color: #93c5fd; }

        /* ── Footer ── */
        .eb-footer {
          border-top: 1px solid #e4e4e7;
          padding: 64px 24px 48px;
          background: #FAFAF8;
        }
        .eb-footer-inner {
          max-width: 1040px; margin: 0 auto;
          display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 48px;
        }
        .eb-footer-brand {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 22px; font-weight: 700; letter-spacing: -0.02em;
          margin-bottom: 16px;
        }
        .eb-footer-tagline {
          font-size: 14px; line-height: 1.7; color: #71717a;
          max-width: 260px;
        }
        .eb-footer-col-title {
          font-size: 13px; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.06em; color: ${PRIMARY};
          margin-bottom: 20px;
        }
        .eb-footer-col-links {
          list-style: none; display: flex; flex-direction: column; gap: 12px;
        }
        .eb-footer-col-links li a {
          font-size: 14px; color: #71717a; text-decoration: none;
          transition: color 0.2s;
        }
        .eb-footer-col-links li a:hover { color: ${PRIMARY}; }
        .eb-footer-bottom {
          max-width: 1040px; margin: 48px auto 0;
          padding-top: 24px; border-top: 1px solid #e4e4e7;
          display: flex; justify-content: space-between; align-items: center;
          font-size: 13px; color: #a1a1aa;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .eb-nav-brand { font-size: 22px; position: static; transform: none; }
          .eb-nav-inner { flex-wrap: wrap; justify-content: center; gap: 12px; }
          .eb-nav-left, .eb-nav-right { display: none; }
          .eb-hero-title { font-size: 36px; }
          .eb-hero-excerpt { font-size: 16px; }
          .eb-grid { grid-template-columns: 1fr; gap: 32px; }
          .eb-card-medium-title { font-size: 22px; }
          .eb-newsletter-form { flex-direction: column; }
          .eb-preview-title { font-size: 32px; }
          .eb-footer-inner { grid-template-columns: 1fr 1fr; gap: 32px; }
          .eb-footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
        }
      `}</style>

      <div className="eb-root">
        {/* ── Navbar ─────────────────────────────────────────── */}
        <nav className="eb-nav">
          <div className="eb-nav-inner">
            <div className="eb-nav-left">
              <a href="#" style={{ letterSpacing: "-0.005em" }}>Articles</a>
              <a href="#">Topics</a>
              <a href="#">Archive</a>
            </div>
            <a href="#" className="eb-nav-brand">{BRAND}</a>
            <div className="eb-nav-right">
              <a href="#">Sign in</a>
              <button className="eb-subscribe-btn">Subscribe</button>
            </div>
          </div>
        </nav>

        {/* ── Hero / Featured Article ───────────────────────── */}
        <section className="eb-hero">
          <video
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.15,
              pointerEvents: 'none',
              zIndex: 0,
              mixBlendMode: 'multiply',
            }}
            src="/videos/forest.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <span className="eb-hero-category" style={{ position: 'relative', zIndex: 2 }}>{FEATURED.category}</span>
          <h1 className="eb-hero-title" style={{ position: 'relative', zIndex: 2 }}>{FEATURED.title}</h1>
          <p className="eb-hero-excerpt" style={{ position: 'relative', zIndex: 2 }}>{FEATURED.excerpt}</p>
          <div className="eb-hero-meta" style={{ position: 'relative', zIndex: 2 }}>
            <span className="eb-hero-author">{FEATURED.author}</span>
            <span className="eb-meta-dot" />
            <span>{FEATURED.date}</span>
            <span className="eb-meta-dot" />
            <span>{FEATURED.readTime}</span>
          </div>
        </section>

        <div className="eb-hero-divider" />

        {/* ── Category Tabs ─────────────────────────────────── */}
        <div className="eb-categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`eb-cat-tab ${activeCategory === cat ? "eb-cat-tab-active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Article Grid ──────────────────────────────────── */}
        <Reveal>
          <div className="eb-grid">
            {/* Left: Medium articles */}
            <div className="eb-grid-left">
              {MEDIUM_ARTICLES.map((a, i) => (
                <div key={i} className="eb-card-medium">
                  <div className="eb-card-medium-cat">{a.category}</div>
                  <h2 className="eb-card-medium-title">{a.title}</h2>
                  <p className="eb-card-medium-excerpt">{a.excerpt}</p>
                  <div className="eb-card-medium-meta">
                    <span className="eb-card-medium-author">{a.author}</span>
                    <span className="eb-meta-dot" />
                    <span>{a.date}</span>
                    <span className="eb-meta-dot" />
                    <span>{a.readTime}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Small articles */}
            <div className="eb-grid-right">
              {SMALL_ARTICLES.map((a, i) => (
                <div key={i} className="eb-card-small">
                  <div className="eb-card-small-cat">{a.category}</div>
                  <h3 className="eb-card-small-title">{a.title}</h3>
                  <div className="eb-card-small-date">{a.date}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Newsletter ────────────────────────────────────── */}
        <div className="eb-section-divider">
          <div className="eb-section-divider-line" />
        </div>
        <Reveal>
          <section className="eb-newsletter">
            <div className="eb-newsletter-label">Newsletter</div>
            <h2 className="eb-newsletter-title">Subscribe to our weekly digest</h2>
            <p className="eb-newsletter-desc">
              Every Saturday morning, get a curated collection of the week&apos;s most compelling stories,
              analysis, and ideas — delivered straight to your inbox. No spam, ever.
            </p>
            <form
              className="eb-newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
            >
              <input
                type="email"
                className="eb-newsletter-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="eb-newsletter-submit">
                Subscribe
              </button>
            </form>
          </section>
        </Reveal>

        {/* ── Single Article Preview ────────────────────────── */}
        <Reveal>
          <article className="eb-preview">
            <div className="eb-preview-label">Reading Experience</div>
            <h2 className="eb-preview-title">
              The Architecture of Attention: Designing for Deep Focus
            </h2>
            <div className="eb-preview-meta">
              <span className="eb-preview-author-name">Elena Marchetti</span>
              <span className="eb-meta-dot" />
              <span>March 5, 2026</span>
              <span className="eb-meta-dot" />
              <span>12 min read</span>
            </div>

            <div className="eb-preview-body">
              <p>
                There is a peculiar irony in the way we build digital products today. We obsess
                over engagement metrics — time on site, scroll depth, click-through rates — while
                simultaneously designing interfaces that fragment attention into ever-smaller pieces.
                Every notification, every infinite scroll, every autoplay video chips away at the very
                focus we claim to value.
              </p>
              <p>
                The most thoughtful designers are beginning to push back. They&apos;re drawing
                inspiration not from Silicon Valley&apos;s attention economy, but from architects,
                typographers, and even contemplative traditions that have spent centuries thinking
                about how physical spaces shape mental states.
              </p>

              <div className="eb-pullquote">
                <p>
                  &ldquo;The measure of good design isn&apos;t how long someone stays —
                  it&apos;s how clearly they think while they&apos;re here.&rdquo;
                </p>
              </div>

              <p>
                Consider the reading experience you&apos;re having right now. The column width is
                set to approximately 680 pixels — not arbitrary, but based on decades of
                typographic research suggesting that 45–75 characters per line is optimal for
                sustained reading. The line-height of 1.75 gives each line room to breathe. The
                serif headlines create a visual hierarchy that guides your eye without demanding it.
              </p>

              <div className="eb-code-block">
                <code>
                  <span className="eb-code-comment">{"// Typography that respects the reader"}</span>
                  {"\n"}
                  <span className="eb-code-keyword">{"const "}</span>
                  <span className="eb-code-fn">{"typography"}</span>
                  {" = {\n"}
                  {"  measure:    "}
                  <span className="eb-code-string">{'"680px"'}</span>
                  {",\n  lineHeight: "}
                  <span className="eb-code-string">{'"1.75"'}</span>
                  {",\n  fontSize:   "}
                  <span className="eb-code-string">{'"18px"'}</span>
                  {",\n  fontFamily: "}
                  <span className="eb-code-string">{'"Playfair Display, Georgia, serif"'}</span>
                  {"\n};"}
                </code>
              </div>

              <p>
                These aren&apos;t just aesthetic choices. They&apos;re cognitive ones. When
                typography is right, it disappears — and what remains is pure thought, flowing
                from writer to reader without friction. That&apos;s the architecture of attention:
                not capturing it, but creating the conditions for it to flourish.
              </p>
            </div>
          </article>
        </Reveal>

        {/* ── Footer ────────────────────────────────────────── */}
        <footer className="eb-footer">
          <div className="eb-footer-inner">
            <div>
              <div className="eb-footer-brand">{BRAND}</div>
              <p className="eb-footer-tagline">
                Thoughtful journalism for curious minds. We believe in stories
                that make you think, not just click.
              </p>
            </div>
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <div className="eb-footer-col-title">{col.title}</div>
                <ul className="eb-footer-col-links">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="eb-footer-bottom">
            <span>© 2026 {BRAND}. All rights reserved.</span>
            <span>Privacy · Terms · Accessibility</span>
          </div>
        </footer>
      </div>
    </>
  );
}
