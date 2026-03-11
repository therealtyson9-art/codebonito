"use client";

import { useEffect, useRef } from "react";

/* ─── Types ─────────────────────────────────────────────────────── */
interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

/* ─── Data ───────────────────────────────────────────────────────── */
const HEADLINE = "Ship Faster.\nScale Smarter.";

const FEATURES: FeatureItem[] = [
  {
    icon: "⚡",
    title: "Instant Deploy",
    desc: "Push to prod in seconds. Zero-config CI/CD with automatic rollbacks and blue-green deployments built in.",
  },
  {
    icon: "🔐",
    title: "Enterprise Auth",
    desc: "SSO, MFA, RBAC out of the box. SOC 2 Type II compliant with audit logs and session management.",
  },
  {
    icon: "📈",
    title: "Real-time Analytics",
    desc: "Live dashboards with sub-second latency. Custom events, funnels, retention cohorts — no data warehouse needed.",
  },
];

const STATS: StatItem[] = [
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 10000, suffix: "+", label: "Teams Shipped" },
  { value: 3, suffix: "×", label: "Faster to Market" },
];

/* ─── Animated headline split ────────────────────────────────────── */
function AnimatedHeadline({ text }: { text: string }) {
  const lines = text.split("\n");
  let charIndex = 0;

  return (
    <h1
      className="headline"
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: 900,
        fontSize: "clamp(2.5rem, 6vw, 5rem)",
        textTransform: "uppercase",
        letterSpacing: "-0.04em",
        lineHeight: 1.05,
        color: "#f8fafc",
        margin: "0 0 1.5rem",
      }}
    >
      {lines.map((line, li) => (
        <span key={li} style={{ display: "block" }}>
          {line.split("").map((char) => {
            const delay = charIndex++ * 0.035;
            return (
              <span
                key={`${li}-${delay}`}
                style={{
                  display: "inline-block",
                  opacity: 0,
                  animation: `char-rise 0.5s ease forwards`,
                  animationDelay: `${delay}s`,
                  whiteSpace: char === " " ? "pre" : undefined,
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

/* ─── Stat Counter ───────────────────────────────────────────────── */
function StatCounter({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const target = stat.value;
          const duration = 1800;
          const start = performance.now();
          const isDecimal = target % 1 !== 0;

          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;
            el!.textContent = isDecimal
              ? current.toFixed(1)
              : Math.floor(current).toLocaleString();
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.value]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      0
    </span>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────── */
export default function SaasMotionDarkPage() {
  return (
    <>
      <style>{`
        /* Reset */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* Mesh gradient background */
        .smb-bg {
          min-height: 100vh;
          background-color: #050510;
          background-image:
            radial-gradient(ellipse at 20% 20%, rgba(99,102,241,0.25) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 80%, rgba(139,92,246,0.18) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.10) 0%, transparent 70%);
          background-size: 200% 200%;
          animation: mesh-move 18s ease-in-out infinite;
          font-family: Inter, system-ui, sans-serif;
          color: #f8fafc;
        }

        /* Nav */
        .smb-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 2rem;
          border-bottom: 1px solid rgba(99,102,241,0.15);
          backdrop-filter: blur(8px);
          position: sticky;
          top: 0;
          z-index: 10;
          background: rgba(5,5,16,0.7);
        }
        .smb-logo {
          font-size: 1.125rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: #6366f1;
        }
        .smb-nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .smb-nav-links a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .smb-nav-links a:hover { color: #f8fafc; }

        /* Hero */
        .smb-hero {
          max-width: 900px;
          margin: 0 auto;
          padding: 6rem 2rem 4rem;
          text-align: center;
        }
        .smb-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          background: rgba(99,102,241,0.15);
          border: 1px solid rgba(99,102,241,0.35);
          color: #a5b4fc;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.375rem 0.875rem;
          border-radius: 9999px;
          margin-bottom: 2rem;
        }
        .smb-hero-sub {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #94a3b8;
          max-width: 540px;
          margin: 0 auto 2.5rem;
          line-height: 1.65;
        }

        /* CTA button */
        .smb-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #6366f1;
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          padding: 0.875rem 2.25rem;
          border-radius: 0.75rem;
          border: none;
          cursor: pointer;
          overflow: hidden;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .smb-cta::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: translateX(-100%);
        }
        .smb-cta:hover { background: #4f46e5; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(99,102,241,0.45); }
        .smb-cta:hover::after { animation: shimmer-slide 0.7s ease forwards; }

        /* Features */
        .smb-section { max-width: 1100px; margin: 0 auto; padding: 4rem 2rem; }
        .smb-section-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6366f1;
          margin-bottom: 0.75rem;
        }
        .smb-section-title {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: #f8fafc;
          margin-bottom: 3rem;
        }
        .smb-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.25rem;
        }
        .smb-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(99,102,241,0.15);
          border-radius: 1rem;
          padding: 1.75rem;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .smb-card:hover {
          transform: translateY(-4px);
          border-color: rgba(99,102,241,0.55);
          box-shadow: 0 0 24px rgba(99,102,241,0.2), 0 8px 32px rgba(0,0,0,0.4);
        }
        .smb-card-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          display: block;
        }
        .smb-card-title {
          font-size: 1.125rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          color: #f8fafc;
          margin-bottom: 0.625rem;
        }
        .smb-card-desc {
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.65;
        }

        /* Stats */
        .smb-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1rem;
          background: rgba(99,102,241,0.07);
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 1.25rem;
          padding: 2.5rem 2rem;
          margin-top: 4rem;
          text-align: center;
        }
        .smb-stat-value {
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #6366f1;
          line-height: 1;
        }
        .smb-stat-suffix { color: #a5b4fc; }
        .smb-stat-label {
          font-size: 0.8rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
          margin-top: 0.375rem;
        }

        /* CTA section */
        .smb-cta-section {
          max-width: 700px;
          margin: 0 auto;
          padding: 4rem 2rem 5rem;
          text-align: center;
        }
        .smb-cta-title {
          font-size: clamp(2rem, 4vw, 3.25rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: #f8fafc;
          margin-bottom: 1rem;
        }
        .smb-cta-sub {
          color: #94a3b8;
          font-size: 1.05rem;
          margin-bottom: 2.5rem;
          line-height: 1.65;
        }
        .smb-divider {
          border: none;
          border-top: 1px solid rgba(99,102,241,0.15);
          margin: 0 2rem;
        }

        /* Footer */
        .smb-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          color: #475569;
          font-size: 0.8rem;
        }
      `}</style>

      <div className="smb-bg">
        {/* Nav */}
        <nav className="smb-nav">
          <span className="smb-logo">MotionSaaS</span>
          <ul className="smb-nav-links">
            <li><a href="#">Product</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Docs</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <a href="#" className="smb-cta" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
            Start Free
          </a>
        </nav>

        {/* Hero */}
        <section className="smb-hero">
          <div className="smb-badge">
            <span>✨</span>
            <span>Ultra Premium Template</span>
          </div>
          <AnimatedHeadline text={HEADLINE} />
          <p className="smb-hero-sub">
            The SaaS infrastructure that top teams rely on. Deploy production-ready apps in minutes, not months.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" className="smb-cta">
              Start Building Free →
            </a>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#94a3b8",
                fontSize: "1rem",
                fontWeight: 600,
                padding: "0.875rem 1.5rem",
                border: "1px solid rgba(148,163,184,0.2)",
                borderRadius: "0.75rem",
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              Watch Demo ▶
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="smb-section">
          <p className="smb-section-label">Features</p>
          <h2 className="smb-section-title">Built for Scale</h2>
          <div className="smb-cards">
            {FEATURES.map((f) => (
              <div key={f.title} className="smb-card">
                <span className="smb-card-icon">{f.icon}</span>
                <h3 className="smb-card-title">{f.title}</h3>
                <p className="smb-card-desc">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="smb-stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="smb-stat-value">
                  <StatCounter stat={s} />
                  <span className="smb-stat-suffix">{s.suffix}</span>
                </div>
                <p className="smb-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="smb-divider" />

        {/* CTA section */}
        <section className="smb-cta-section">
          <h2 className="smb-cta-title">Ready to Launch?</h2>
          <p className="smb-cta-sub">
            Join thousands of teams already shipping faster. No credit card required.
          </p>
          <a href="#" className="smb-cta" style={{ fontSize: "1.1rem", padding: "1rem 2.75rem" }}>
            Get Started — It&apos;s Free
          </a>
        </section>

        {/* Footer */}
        <footer className="smb-footer">
          <span>© 2025 MotionSaaS, Inc.</span>
          <span>Made with Code Bonito ✨</span>
        </footer>
      </div>
    </>
  );
}
