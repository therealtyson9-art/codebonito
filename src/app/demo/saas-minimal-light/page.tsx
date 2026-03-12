"use client";

import { useEffect, useRef, useCallback } from "react";

/* ─── Constants ──────────────────────────────────────────────────── */
const BRAND = "Planify";
const PRIMARY = "#2563eb";

/* ─── Data ───────────────────────────────────────────────────────── */
interface Feature { icon: string; title: string; desc: string; detail: string }
interface Stat { value: number; suffix: string; label: string }
interface Step { num: string; title: string; desc: string }

const FEATURES: Feature[] = [
  { icon: "◆", title: "Intelligent Scheduling", desc: "AI-powered scheduling that learns your team's patterns and optimizes every meeting, deadline, and milestone automatically.", detail: "Reduce scheduling conflicts by 89%" },
  { icon: "◇", title: "Unified Workspace", desc: "Docs, tasks, and conversations in one place. No more context-switching between five different tools to get work done.", detail: "Everything in one tab" },
  { icon: "○", title: "Real-time Collaboration", desc: "See changes as they happen. Multiplayer editing with presence indicators, comments, and instant sync across all devices.", detail: "Sub-100ms sync latency" },
];

const STATS: Stat[] = [
  { value: 99.9, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "K+", label: "Teams" },
  { value: 4.9, suffix: "/5", label: "Rating" },
  { value: 12, suffix: "M", label: "Tasks completed" },
];

const STEPS: Step[] = [
  { num: "01", title: "Connect your tools", desc: "Import from Jira, Asana, Trello, or start fresh. Setup takes under 2 minutes." },
  { num: "02", title: "Organize your way", desc: "Boards, lists, timelines, or all three. Your workspace adapts to your workflow." },
  { num: "03", title: "Ship with confidence", desc: "Track progress in real-time. Know exactly where every project stands at a glance." },
];

const LOGOS = ["Acme", "Globex", "Initech", "Hooli", "Piedmont"];
const NAV = ["Features", "Pricing", "Docs", "Changelog"];
const FOOTER = [
  { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { title: "Resources", links: ["Docs", "API", "Community", "Support"] },
];

/* ─── Scroll reveal hook ─────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done) { done = true; el.classList.add("sml-visible"); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

function Reveal({ children, th }: { children: React.ReactNode; th?: number }) {
  const ref = useReveal(th);
  return <div ref={ref} className="sml-reveal">{children}</div>;
}

/* ─── Animated stat counter ──────────────────────────────────────── */
function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !ran.current) {
        ran.current = true;
        const dur = 1800, t0 = performance.now(), dec = stat.value % 1 !== 0;
        const tick = (now: number) => {
          const p = Math.min((now - t0) / dur, 1);
          const v = (1 - Math.pow(1 - p, 4)) * stat.value; // quartic ease-out
          el.textContent = dec ? v.toFixed(1) : Math.floor(v).toLocaleString();
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [stat.value]);
  return <><span ref={ref} className="sml-counter">0</span><span className="sml-accent">{stat.suffix}</span></>;
}

/* ─── Feature row ────────────────────────────────────────────────── */
function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const reversed = index % 2 === 1;
  const shapeStyle: React.CSSProperties = index === 1
    ? { borderRadius: "50%" }
    : index === 2
    ? { borderRadius: 12, transform: "rotate(45deg)" }
    : { borderRadius: 12 };

  return (
    <Reveal th={0.2}>
      <div className={`sml-feat ${reversed ? "sml-feat-rev" : ""}`}>
        <div className="sml-feat-text">
          <div className="sml-feat-icon">{feature.icon}</div>
          <h3 className="sml-feat-title">{feature.title}</h3>
          <p className="sml-feat-desc">{feature.desc}</p>
          <span className="sml-feat-link">{feature.detail} →</span>
        </div>
        <div className="sml-feat-illus">
          <svg width="100%" height="100%" className="sml-grid-svg">
            <defs>
              <pattern id={`grid-${index}`} width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#cbd5e1" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
          </svg>
          <div className="sml-feat-shape" style={shapeStyle} />
        </div>
      </div>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/* ─── Main Page Component ────────────────────────────────────────── */
/* ═══════════════════════════════════════════════════════════════════ */
export default function SaasMinimalLightPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    if (!heroRef.current) return;
    const y = window.scrollY;
    heroRef.current.querySelectorAll<HTMLElement>(".sml-blob").forEach((b, i) => {
      b.style.transform = `translate(-50%,-50%) translateY(${y * (0.15 + i * 0.05)}px)`;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Keyframes ── */
        @keyframes sml-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sml-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes sml-blob-drift {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50%      { transform: translate(-50%, -50%) scale(1.08); }
        }
        @keyframes meshMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* ── Scroll reveal ── */
        .sml-reveal {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .sml-reveal.sml-visible { opacity: 1; transform: translateY(0); }

        /* ── Root ── */
        .sml-root {
          min-height: 100vh; background: #fafafa; color: #0f172a;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden; -webkit-font-smoothing: antialiased;
        }

        /* ── Navbar ── */
        .sml-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 16px 24px; }
        .sml-nav-inner {
          max-width: 1120px; margin: 0 auto; display: flex; align-items: center;
          justify-content: space-between; padding: 12px 24px; border-radius: 14px;
          background: rgba(255,255,255,0.85); backdrop-filter: blur(20px) saturate(1.4);
          -webkit-backdrop-filter: blur(20px) saturate(1.4);
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02);
        }
        .sml-logo { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 17px; letter-spacing: -0.03em; }
        .sml-logo-mark { width: 24px; height: 24px; border-radius: 6px; background: linear-gradient(135deg, ${PRIMARY}, #3b82f6); }
        .sml-nav-links { display: flex; gap: 32px; }
        .sml-nav-links a { color: #64748b; text-decoration: none; font-size: 14px; transition: color 0.2s; letter-spacing: -0.005em; }
        .sml-nav-links a:hover { color: #0f172a; }
        .sml-nav-cta {
          font-weight: 500; font-size: 13px; color: #fff; background: #0f172a;
          border: none; border-radius: 8px; padding: 8px 18px; cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16,1,0.3,1); font-family: inherit;
        }
        .sml-nav-cta:hover { background: #1e293b; transform: translateY(-1px); }

        /* ── Hero ── */
        .sml-hero {
          position: relative; min-height: 100vh; display: flex; flex-direction: column;
          align-items: center; justify-content: center; text-align: center;
          padding: 160px 24px 120px; overflow: hidden;
        }
        .sml-blob {
          position: absolute; border-radius: 50%; pointer-events: none;
          animation: sml-blob-drift 12s ease-in-out infinite;
        }
        .sml-blob-1 { top: 20%; left: 25%; width: 500px; height: 500px; background: radial-gradient(circle, ${PRIMARY}08 0%, transparent 70%); }
        .sml-blob-2 { top: 30%; right: 20%; width: 400px; height: 400px; background: radial-gradient(circle, #3b82f606 0%, transparent 70%); animation-direction: reverse; animation-duration: 15s; }

        .sml-badge {
          display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px;
          border-radius: 100px; background: ${PRIMARY}08; border: 1px solid ${PRIMARY}12;
          margin-bottom: 32px; animation: sml-fade-up 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both;
        }
        .sml-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: ${PRIMARY}; }
        .sml-badge-text { font-weight: 500; font-size: 13px; color: ${PRIMARY}; }

        .sml-hero-h {
          font-weight: 700; font-size: 64px; line-height: 1.08; letter-spacing: -0.04em;
          max-width: 720px; animation: sml-fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both;
        }
        .sml-accent { color: ${PRIMARY}; }
        .sml-hero-sub {
          font-weight: 400; font-size: 18px; line-height: 1.7; color: #64748b;
          max-width: 480px; margin-top: 20px; letter-spacing: -0.005em;
          animation: sml-fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both;
        }
        .sml-hero-ctas {
          display: flex; align-items: center; gap: 12px; margin-top: 40px;
          animation: sml-fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s both;
        }
        .sml-btn-primary, .sml-btn-secondary {
          font-family: inherit; font-size: 15px; letter-spacing: -0.01em;
          border-radius: 10px; padding: 14px 28px; cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
        }
        .sml-btn-primary {
          font-weight: 600; color: #fff; background: ${PRIMARY}; border: none;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05), 0 4px 16px ${PRIMARY}25;
        }
        .sml-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 2px 4px rgba(0,0,0,0.08), 0 8px 24px ${PRIMARY}35; }
        .sml-btn-secondary {
          font-weight: 500; color: #64748b; background: transparent; border: 1px solid #e2e8f0;
        }
        .sml-btn-secondary:hover { transform: translateY(-2px); border-color: #cbd5e1; color: #0f172a; }

        .sml-scroll-hint {
          position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
          animation: sml-fade-in 0.5s ease 1.5s both;
        }
        .sml-scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom, #cbd5e1, transparent); }

        /* ── Logos ── */
        .sml-logos { padding: 0 24px 80px; animation: sml-fade-in 0.8s ease 0.6s both; }
        .sml-logos-inner { max-width: 960px; margin: 0 auto; text-align: center; }
        .sml-logos-label {
          font-weight: 400; font-size: 13px; color: #94a3b8;
          text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 28px;
        }
        .sml-logos-row { display: flex; align-items: center; justify-content: center; gap: 48px; flex-wrap: wrap; }
        .sml-logo-item { display: flex; align-items: center; gap: 6px; opacity: 0.35; transition: opacity 0.3s; }
        .sml-logo-item:hover { opacity: 0.6; }
        .sml-logo-name { font-weight: 600; font-size: 13px; letter-spacing: -0.01em; }

        /* ── Divider ── */
        .sml-divider { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
        .sml-divider-line { height: 1px; background: #f1f5f9; }

        /* ── Section headers ── */
        .sml-section { padding: 100px 24px; }
        .sml-section-white { padding: 100px 24px; background: #fff; border-top: 1px solid #f1f5f9; }
        .sml-section-label { font-weight: 500; font-size: 13px; color: ${PRIMARY}; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px; }
        .sml-section-h2 { font-weight: 700; font-size: 40px; line-height: 1.15; letter-spacing: -0.035em; margin-bottom: 16px; }
        .sml-section-h2-sm { font-weight: 700; font-size: 36px; line-height: 1.2; letter-spacing: -0.035em; }
        .sml-section-sub { font-weight: 400; font-size: 16px; line-height: 1.7; color: #64748b; max-width: 440px; margin: 0 auto; }

        /* ── Features ── */
        .sml-feat { display: flex; align-items: center; gap: 80px; padding: 48px 0; }
        .sml-feat-rev { flex-direction: row-reverse; }
        .sml-feat-text { flex: 1; min-width: 0; }
        .sml-feat-icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: 10px;
          background: ${PRIMARY}08; border: 1px solid ${PRIMARY}15;
          margin-bottom: 20px; font-size: 16px; color: ${PRIMARY};
        }
        .sml-feat-title { font-weight: 700; font-size: 24px; letter-spacing: -0.02em; line-height: 1.3; margin-bottom: 12px; }
        .sml-feat-desc { font-weight: 400; font-size: 16px; line-height: 1.7; color: #64748b; margin-bottom: 16px; max-width: 440px; }
        .sml-feat-link { font-weight: 500; font-size: 13px; color: ${PRIMARY}; }
        .sml-feat-illus {
          flex: 1; min-width: 0; aspect-ratio: 4/3; border-radius: 16px;
          background: linear-gradient(135deg, #f8fafc, #f1f5f9, #e2e8f0);
          border: 1px solid #e2e8f0; display: flex; align-items: center;
          justify-content: center; position: relative; overflow: hidden;
        }
        .sml-grid-svg { position: absolute; inset: 0; opacity: 0.4; }
        .sml-feat-shape {
          width: 64px; height: 64px;
          background: linear-gradient(135deg, ${PRIMARY}20, #3b82f630);
          border: 1px solid ${PRIMARY}25; z-index: 1; border-radius: 12px;
        }

        /* ── Steps ── */
        .sml-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
        .sml-step {
          padding: 32px; border-radius: 16px; border: 1px solid #f1f5f9;
          background: #fafafa; transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .sml-step:hover { border-color: #e2e8f0; transform: translateY(-2px); box-shadow: 0 4px 16px rgba(0,0,0,0.04); }
        .sml-step-num { font-weight: 700; font-size: 32px; letter-spacing: -0.02em; color: ${PRIMARY}20; margin-bottom: 16px; display: block; }
        .sml-step-title { font-weight: 600; font-size: 18px; letter-spacing: -0.02em; margin-bottom: 8px; line-height: 1.4; }
        .sml-step-desc { font-weight: 400; font-size: 14px; color: #64748b; line-height: 1.65; }

        /* ── Stats ── */
        .sml-stats-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
          background: #f1f5f9; border: 1px solid #f1f5f9; border-radius: 16px; overflow: hidden;
        }
        .sml-stat { background: #fff; padding: 40px 32px; text-align: center; }
        .sml-stat-num { font-weight: 700; font-size: 40px; line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 8px; }
        .sml-stat-label { font-weight: 400; font-size: 13px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.02em; }
        .sml-counter { font-variant-numeric: tabular-nums; }

        /* ── Testimonial ── */
        .sml-quote-mark { font-family: Georgia, serif; font-size: 64px; line-height: 1; color: #e2e8f0; margin-bottom: 24px; }
        .sml-quote { font-weight: 400; font-size: 24px; line-height: 1.6; letter-spacing: -0.02em; margin-bottom: 32px; }
        .sml-attr { display: flex; align-items: center; justify-content: center; gap: 12px; }
        .sml-avatar {
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
          display: flex; align-items: center; justify-content: center;
          font-weight: 600; font-size: 14px; color: #64748b;
        }
        .sml-attr-name { font-weight: 600; font-size: 14px; line-height: 1.4; }
        .sml-attr-role { font-weight: 400; font-size: 13px; color: #94a3b8; line-height: 1.4; }

        /* ── CTA section ── */
        .sml-cta-section { padding: 120px 24px; background: linear-gradient(180deg, #fff 0%, ${PRIMARY}04 50%, #fff 100%); }
        .sml-cta-inner { max-width: 560px; margin: 0 auto; text-align: center; }
        .sml-fine-print { font-weight: 400; font-size: 12px; color: #94a3b8; margin-top: 16px; }

        /* ── Footer ── */
        .sml-footer { padding: 64px 24px 40px; border-top: 1px solid #f1f5f9; }
        .sml-footer-inner { max-width: 1120px; margin: 0 auto; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 48px; }
        .sml-footer-brand p { font-size: 13px; color: #94a3b8; line-height: 1.6; max-width: 240px; }
        .sml-footer-col-title { font-weight: 600; font-size: 13px; margin-bottom: 16px; }
        .sml-footer-links { display: flex; flex-direction: column; gap: 10px; }
        .sml-footer-links a { font-size: 13px; color: #94a3b8; text-decoration: none; transition: color 0.15s; }
        .sml-footer-links a:hover { color: #64748b; }
        .sml-footer-bottom {
          max-width: 1120px; margin: 48px auto 0; padding-top: 24px;
          border-top: 1px solid #f1f5f9; display: flex; justify-content: space-between;
          align-items: center; flex-wrap: wrap; gap: 16px;
        }
        .sml-footer-copy { font-size: 12px; color: #cbd5e1; }
        .sml-footer-legal { display: flex; gap: 24px; }
        .sml-footer-legal a { font-size: 12px; color: #cbd5e1; text-decoration: none; transition: color 0.15s; }
        .sml-footer-legal a:hover { color: #94a3b8; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .sml-feat, .sml-feat-rev {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .sml-hero-h {
            font-size: 40px !important;
          }
          .sml-hero-sub {
            font-size: 16px !important;
          }
          .sml-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .sml-nav-links {
            display: none !important;
          }
          .sml-steps {
            grid-template-columns: 1fr !important;
          }
          .sml-section-h2 {
            font-size: 32px !important;
          }
          .sml-section-h2-sm {
            font-size: 28px !important;
          }
          .sml-quote {
            font-size: 20px !important;
          }
          .sml-hero-ctas {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
          }
          .sml-btn-primary, .sml-btn-secondary {
            width: 100%;
            text-align: center;
          }
          .sml-footer-inner {
            flex-direction: column;
            gap: 32px;
          }
        }
      `}</style>

      <div className="sml-root">

        {/* ═══════════════════════════════════════════════════════ */}
        {/* ══════ Navigation ══════════════════════════════════════ */}
        {/* ═══════════════════════════════════════════════════════ */}
        <nav className="sml-nav">
          <div className="sml-nav-inner">
            <div className="sml-logo">
              <div className="sml-logo-mark" />
              {BRAND}
            </div>
            <div className="sml-nav-links">
              {NAV.map(l => <a key={l} href="#">{l}</a>)}
            </div>
            <button className="sml-nav-cta">Get Started</button>
          </div>
        </nav>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* ══════ Hero Section ═══════════════════════════════════ */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section ref={heroRef} className="sml-hero">
          <div className="sml-blob sml-blob-1" />
          <div className="sml-blob sml-blob-2" />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 80% 60% at 20% 30%, rgba(99,102,241,0.08), transparent), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(139,92,246,0.06), transparent)',
              backgroundSize: '200% 200%',
              animation: 'meshMove 20s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />

          <div className="sml-badge">
            <div className="sml-badge-dot" />
            <span className="sml-badge-text">Now in General Availability</span>
          </div>

          <h1 className="sml-hero-h">
            Plan smarter. <span className="sml-accent">Ship faster.</span>
          </h1>

          <p className="sml-hero-sub">
            The project management tool that adapts to how your team actually works.
            Not the other way around.
          </p>

          <div className="sml-hero-ctas">
            <button className="sml-btn-primary">Start for free</button>
            <button className="sml-btn-secondary">See demo</button>
          </div>

          <div className="sml-scroll-hint">
            <div className="sml-scroll-line" />
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* ══════ Trusted By / Logos Bar ═════════════════════════ */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="sml-logos">
          <div className="sml-logos-inner">
            <p className="sml-logos-label">Trusted by forward-thinking teams</p>
            <div className="sml-logos-row">
              {LOGOS.map(name => (
                <div key={name} className="sml-logo-item">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <rect width="20" height="20" rx="4" fill="#0f172a" fillOpacity="0.15" />
                    <rect x="4" y="4" width="12" height="12" rx="2" fill="#0f172a" fillOpacity="0.2" />
                  </svg>
                  <span className="sml-logo-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="sml-divider"><div className="sml-divider-line" /></div>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* ══════ Features (Alternating Layout) ═════════════════ */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="sml-section">
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 80 }}>
                <p className="sml-section-label">Features</p>
                <h2 className="sml-section-h2">
                  Everything you need,<br />nothing you don&apos;t.
                </h2>
                <p className="sml-section-sub">
                  Built for teams that value clarity over complexity.
                </p>
              </div>
            </Reveal>
            {FEATURES.map((f, i) => (
              <FeatureRow key={f.title} feature={f} index={i} />
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* ══════ How It Works (3-Step) ═════════════════════════ */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="sml-section-white">
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 64 }}>
                <p className="sml-section-label">How it works</p>
                <h2 className="sml-section-h2-sm">Up and running in minutes</h2>
              </div>
            </Reveal>
            <div className="sml-steps">
              {STEPS.map(step => (
                <Reveal key={step.num} th={0.2}>
                  <div className="sml-step">
                    <span className="sml-step-num">{step.num}</span>
                    <h3 className="sml-step-title">{step.title}</h3>
                    <p className="sml-step-desc">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* ══════ Metrics / Stats ═══════════════════════════════ */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="sml-section">
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <Reveal>
              <h2 className="sml-section-h2-sm" style={{ textAlign: "center", marginBottom: 64 }}>
                Numbers that speak
              </h2>
            </Reveal>
            <div className="sml-stats-grid">
              {STATS.map(stat => (
                <Reveal key={stat.label} th={0.2}>
                  <div className="sml-stat">
                    <p className="sml-stat-num"><Counter stat={stat} /></p>
                    <p className="sml-stat-label">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* ══════ Testimonial ═══════════════════════════════════ */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="sml-section-white">
          <Reveal>
            <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
              <div className="sml-quote-mark">&ldquo;</div>
              <blockquote className="sml-quote">
                {BRAND} replaced three tools for us overnight. Our team went from
                spending 40% of their time managing work to spending 40% more time doing it.
              </blockquote>
              <div className="sml-attr">
                <div className="sml-avatar">SR</div>
                <div style={{ textAlign: "left" }}>
                  <p className="sml-attr-name">Sarah Rodriguez</p>
                  <p className="sml-attr-role">VP of Engineering, Acme Corp</p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* ══════ Final CTA ═════════════════════════════════════ */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="sml-cta-section">
          <Reveal>
            <div className="sml-cta-inner">
              <h2 className="sml-section-h2-sm" style={{ marginBottom: 16 }}>
                Ready to get started?
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#64748b", marginBottom: 36 }}>
                Join 50,000+ teams already using {BRAND} to ship better products, faster.
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <button className="sml-btn-primary">Start for free</button>
                <button className="sml-btn-secondary">Talk to sales</button>
              </div>
              <p className="sml-fine-print">No credit card required · Free for teams up to 10</p>
            </div>
          </Reveal>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* ══════ Footer ════════════════════════════════════════ */}
        {/* ═══════════════════════════════════════════════════════ */}
        <footer className="sml-footer">
          <div className="sml-footer-inner">
            <div className="sml-footer-brand">
              <div className="sml-logo" style={{ marginBottom: 12 }}>
                <div className="sml-logo-mark" />
                {BRAND}
              </div>
              <p>The modern project management platform for teams that ship.</p>
            </div>
            {FOOTER.map(col => (
              <div key={col.title}>
                <p className="sml-footer-col-title">{col.title}</p>
                <div className="sml-footer-links">
                  {col.links.map(link => <a key={link} href="#">{link}</a>)}
                </div>
              </div>
            ))}
          </div>
          <div className="sml-footer-bottom">
            <p className="sml-footer-copy">© 2025 {BRAND}. All rights reserved.</p>
            <div className="sml-footer-legal">
              {["Privacy", "Terms", "Cookies"].map(l => <a key={l} href="#">{l}</a>)}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
