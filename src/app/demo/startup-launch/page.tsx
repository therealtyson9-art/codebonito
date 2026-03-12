"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Data ───────────────────────────────────────────────────────── */
const BRAND_NAME = "LaunchPad";
const PRIMARY_COLOR = "#0F172A";
const ACCENT_COLOR = "#3B82F6";
const HEADLINE = "Launch faster. Scale smarter.";
const SUBHEADLINE =
  "The operating system for early-stage startups. From incorporation to first revenue — everything you need in one platform.";
const CTA_TEXT = "Get Started Free";

const SOCIAL_PROOF = [
  "Backed by Y Combinator",
  "$3.2M raised",
  "1,200+ companies",
  "4.9★ on G2",
];

const PROBLEMS = [
  "Weeks wasted on paperwork and legal setup",
  "Scattered tools for banking, equity, and compliance",
  "No visibility into burn rate until it's too late",
  "Hiring your first employees is a minefield",
];

const SOLUTIONS = [
  "Incorporate in Delaware in under 10 minutes",
  "One dashboard for cap table, banking & compliance",
  "Real-time burn rate and runway tracking",
  "Built-in payroll and contractor management",
];

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: 1200, suffix: "+", label: "Companies Launched" },
  { value: 10, suffix: "min", label: "Avg. Setup Time" },
  { value: 98, suffix: "%", label: "Founder Satisfaction" },
  { value: 3.2, suffix: "M", label: "Capital Deployed" },
];

const PRICING = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    desc: "Everything you need to get started",
    features: [
      "Delaware C-Corp incorporation",
      "Cap table management",
      "Basic banking integration",
      "Community support",
      "Up to 2 founders",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    desc: "For teams ready to scale",
    features: [
      "Everything in Starter",
      "409A valuations",
      "Payroll & contractor payments",
      "Priority support",
      "Unlimited team members",
      "Investor reporting",
    ],
    cta: "Start 14-Day Trial",
    highlighted: true,
  },
];

const NAV_LINKS = ["Features", "Pricing", "Docs", "Blog"];

/* ─── Hooks ──────────────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setIsInView(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, isInView };
}

function useCounter(target: number, isInView: boolean, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(target % 1 !== 0 ? 1 : 0)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);
  return count;
}

/* ─── CSS Keyframes (injected once) ──────────────────────────────── */
const GLOBAL_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes dotPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes meshMove {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
`;

/* ─── Components ─────────────────────────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s cubic-bezier(0.23,1,0.32,1)",
        backgroundColor: scrolled ? "rgba(250,250,248,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(15,23,42,0.06)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: 20,
            color: PRIMARY_COLOR,
            letterSpacing: "-0.04em",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: ACCENT_COLOR,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            L
          </div>
          {BRAND_NAME}
        </div>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                color: "rgba(15,23,42,0.6)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY_COLOR)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(15,23,42,0.6)")
              }
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              color: "#fff",
              backgroundColor: PRIMARY_COLOR,
              padding: "10px 22px",
              borderRadius: 8,
              textDecoration: "none",
              transition: "all 0.2s cubic-bezier(0.23,1,0.32,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(15,23,42,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {CTA_TEXT.split(" ").slice(0, 2).join(" ")}
          </a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  const { ref, isInView } = useInView(0.1);
  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
        background: "#FAFAF8",
      }}
    >
      {/* Mesh gradient animation */}
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
      {/* Dot pattern accent */}
      <div
        style={{
          position: "absolute",
          top: 80,
          right: "8%",
          width: 180,
          height: 180,
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gap: 14,
          opacity: 0.3,
          animation: "dotPulse 4s ease-in-out infinite",
          pointerEvents: "none",
        }}
      >
        {Array.from({ length: 64 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              backgroundColor: ACCENT_COLOR,
            }}
          />
        ))}
      </div>

      {/* Angled line accent */}
      <div
        style={{
          position: "absolute",
          top: 200,
          left: "5%",
          width: 120,
          height: 2,
          background: `linear-gradient(90deg, ${ACCENT_COLOR}, transparent)`,
          transform: "rotate(-35deg)",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 240,
          left: "7%",
          width: 80,
          height: 2,
          background: `linear-gradient(90deg, ${ACCENT_COLOR}, transparent)`,
          transform: "rotate(-35deg)",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      />

      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 16px",
          borderRadius: 100,
          backgroundColor: "rgba(59,130,246,0.06)",
          border: "1px solid rgba(59,130,246,0.15)",
          marginBottom: 28,
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.6s cubic-bezier(0.23,1,0.32,1) 0.1s",
        }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "#22C55E",
            boxShadow: "0 0 8px rgba(34,197,94,0.5)",
          }}
        />
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 13,
            color: ACCENT_COLOR,
            letterSpacing: "0.02em",
          }}
        >
          Now accepting W26 batch applications
        </span>
      </div>

      {/* Headline */}
      <h1
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(40px, 6vw, 64px)",
          color: PRIMARY_COLOR,
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          maxWidth: 720,
          margin: "0 0 20px",
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.7s cubic-bezier(0.23,1,0.32,1) 0.2s",
        }}
      >
        {HEADLINE}
      </h1>

      {/* Subheadline */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: 18,
          color: "rgba(15,23,42,0.6)",
          lineHeight: 1.6,
          maxWidth: 540,
          margin: "0 0 40px",
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.7s cubic-bezier(0.23,1,0.32,1) 0.35s",
        }}
      >
        {SUBHEADLINE}
      </p>

      {/* CTAs */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.7s cubic-bezier(0.23,1,0.32,1) 0.5s",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 16,
            color: "#fff",
            backgroundColor: PRIMARY_COLOR,
            padding: "14px 32px",
            borderRadius: 10,
            textDecoration: "none",
            transition: "all 0.25s cubic-bezier(0.23,1,0.32,1)",
            boxShadow: "0 2px 8px rgba(15,23,42,0.12)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(15,23,42,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(15,23,42,0.12)";
          }}
        >
          {CTA_TEXT}
        </a>
        <a
          href="#"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 16,
            color: PRIMARY_COLOR,
            backgroundColor: "transparent",
            padding: "14px 32px",
            borderRadius: 10,
            textDecoration: "none",
            border: `1.5px solid rgba(15,23,42,0.15)`,
            transition: "all 0.25s cubic-bezier(0.23,1,0.32,1)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = PRIMARY_COLOR;
            e.currentTarget.style.backgroundColor = "rgba(15,23,42,0.03)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(15,23,42,0.15)";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          See How It Works →
        </a>
      </div>
    </section>
  );
}

function SocialProofBar() {
  const { ref, isInView } = useInView(0.2);
  return (
    <section
      ref={ref}
      style={{
        padding: "28px 24px",
        backgroundColor: "#fff",
        borderTop: "1px solid rgba(15,23,42,0.04)",
        borderBottom: "1px solid rgba(15,23,42,0.04)",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        {SOCIAL_PROOF.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              color: "rgba(15,23,42,0.5)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(10px)",
              transition: `all 0.5s cubic-bezier(0.23,1,0.32,1) ${0.1 + i * 0.08}s`,
            }}
          >
            {item}
            {i < SOCIAL_PROOF.length - 1 && (
              <span style={{ color: "rgba(15,23,42,0.15)", fontSize: 18 }}>·</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}

function ProblemSolutionSection() {
  const { ref, isInView } = useInView(0.15);
  return (
    <section
      ref={ref}
      style={{
        padding: "100px 24px",
        backgroundColor: "#FAFAF8",
      }}
    >
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 40px)",
            color: PRIMARY_COLOR,
            textAlign: "center",
            letterSpacing: "-0.03em",
            marginBottom: 12,
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          The old way is broken
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 16,
            color: "rgba(15,23,42,0.5)",
            textAlign: "center",
            maxWidth: 480,
            margin: "0 auto 56px",
            lineHeight: 1.6,
            opacity: isInView ? 1 : 0,
            transition: "opacity 0.6s ease 0.15s",
          }}
        >
          Starting a company shouldn&apos;t feel like a second job.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
          }}
        >
          {/* Problems */}
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: "rgba(15,23,42,0.35)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 24,
                opacity: isInView ? 1 : 0,
                transition: "opacity 0.5s ease 0.2s",
              }}
            >
              Without {BRAND_NAME}
            </div>
            {PROBLEMS.map((problem, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  marginBottom: 20,
                  padding: "16px 20px",
                  borderRadius: 12,
                  backgroundColor: "rgba(239,68,68,0.03)",
                  border: "1px solid rgba(239,68,68,0.06)",
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateX(0)" : "translateX(-20px)",
                  transition: `all 0.5s cubic-bezier(0.23,1,0.32,1) ${0.25 + i * 0.08}s`,
                }}
              >
                <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>❌</span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: 15,
                    color: "rgba(15,23,42,0.7)",
                    lineHeight: 1.5,
                  }}
                >
                  {problem}
                </span>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: "rgba(15,23,42,0.35)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 24,
                opacity: isInView ? 1 : 0,
                transition: "opacity 0.5s ease 0.2s",
              }}
            >
              With {BRAND_NAME}
            </div>
            {SOLUTIONS.map((solution, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  marginBottom: 20,
                  padding: "16px 20px",
                  borderRadius: 12,
                  backgroundColor: "rgba(34,197,94,0.03)",
                  border: "1px solid rgba(34,197,94,0.08)",
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateX(0)" : "translateX(20px)",
                  transition: `all 0.5s cubic-bezier(0.23,1,0.32,1) ${0.25 + i * 0.08}s`,
                }}
              >
                <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>✅</span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: 15,
                    color: "rgba(15,23,42,0.7)",
                    lineHeight: 1.5,
                  }}
                >
                  {solution}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductScreenshot() {
  const { ref, isInView } = useInView(0.1);
  return (
    <section
      ref={ref}
      style={{
        padding: "80px 24px 100px",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 40px)",
            color: PRIMARY_COLOR,
            letterSpacing: "-0.03em",
            marginBottom: 12,
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          Your startup command center
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 16,
            color: "rgba(15,23,42,0.5)",
            maxWidth: 440,
            margin: "0 auto 48px",
            lineHeight: 1.6,
            opacity: isInView ? 1 : 0,
            transition: "opacity 0.5s ease 0.15s",
          }}
        >
          Everything you need, nothing you don&apos;t.
        </p>

        {/* Mockup */}
        <div
          style={{
            position: "relative",
            opacity: isInView ? 1 : 0,
            transform: isInView
              ? "perspective(1200px) rotateX(2deg) rotateY(-1deg)"
              : "perspective(1200px) rotateX(8deg) rotateY(-3deg) translateY(40px)",
            transition: "all 0.9s cubic-bezier(0.23,1,0.32,1) 0.2s",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "16/10",
              borderRadius: 16,
              background: "linear-gradient(145deg, #F1F5F9, #E2E8F0)",
              border: "1px solid rgba(15,23,42,0.06)",
              boxShadow:
                "0 24px 80px rgba(15,23,42,0.08), 0 8px 24px rgba(15,23,42,0.04)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Title bar */}
            <div
              style={{
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                borderBottom: "1px solid rgba(15,23,42,0.06)",
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#EF4444" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#F59E0B" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#22C55E" }} />
              <div
                style={{
                  flex: 1,
                  marginLeft: 16,
                  height: 28,
                  borderRadius: 6,
                  backgroundColor: "rgba(15,23,42,0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    color: "rgba(15,23,42,0.3)",
                  }}
                >
                  app.launchpad.com/dashboard
                </span>
              </div>
            </div>
            {/* Content placeholder */}
            <div
              style={{
                flex: 1,
                padding: 24,
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: 16,
              }}
            >
              {/* Sidebar */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {["Dashboard", "Cap Table", "Banking", "Payroll", "Docs"].map(
                  (item, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "10px 14px",
                        borderRadius: 8,
                        backgroundColor: i === 0 ? "rgba(59,130,246,0.08)" : "transparent",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        fontWeight: i === 0 ? 600 : 400,
                        color: i === 0 ? ACCENT_COLOR : "rgba(15,23,42,0.4)",
                      }}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
              {/* Main area */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div
                  style={{
                    height: 32,
                    width: 180,
                    borderRadius: 6,
                    backgroundColor: "rgba(15,23,42,0.06)",
                  }}
                />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 12,
                  }}
                >
                  {[ACCENT_COLOR, "#22C55E", "#F59E0B"].map((c, i) => (
                    <div
                      key={i}
                      style={{
                        height: 80,
                        borderRadius: 10,
                        background: `linear-gradient(135deg, ${c}15, ${c}08)`,
                        border: `1px solid ${c}15`,
                      }}
                    />
                  ))}
                </div>
                <div
                  style={{
                    flex: 1,
                    borderRadius: 10,
                    backgroundColor: "rgba(15,23,42,0.03)",
                    border: "1px solid rgba(15,23,42,0.04)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsBar() {
  const { ref, isInView } = useInView(0.2);
  return (
    <section
      ref={ref}
      style={{
        padding: "72px 24px",
        backgroundColor: PRIMARY_COLOR,
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
          textAlign: "center",
        }}
      >
        {STATS.map((stat, i) => (
          <StatCounter key={i} stat={stat} isInView={isInView} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

function StatCounter({
  stat,
  isInView,
  delay,
}: {
  stat: StatItem;
  isInView: boolean;
  delay: number;
}) {
  const count = useCounter(stat.value, isInView);
  return (
    <div
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(16px)",
        transition: `all 0.6s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
      }}
    >
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
          fontSize: 44,
          color: "#fff",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
        }}
      >
        {stat.value >= 100 ? Math.round(count).toLocaleString() : count}
        <span style={{ color: ACCENT_COLOR }}>{stat.suffix}</span>
      </div>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: 14,
          color: "rgba(255,255,255,0.5)",
          marginTop: 8,
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

function PricingSection() {
  const { ref, isInView } = useInView(0.15);
  return (
    <section
      ref={ref}
      style={{
        padding: "100px 24px",
        backgroundColor: "#FAFAF8",
      }}
    >
      <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 40px)",
            color: PRIMARY_COLOR,
            letterSpacing: "-0.03em",
            marginBottom: 12,
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          Simple, transparent pricing
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 16,
            color: "rgba(15,23,42,0.5)",
            marginBottom: 48,
            opacity: isInView ? 1 : 0,
            transition: "opacity 0.5s ease 0.15s",
          }}
        >
          Start free. Scale when you&apos;re ready.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
        >
          {PRICING.map((plan, i) => (
            <div
              key={i}
              style={{
                padding: 36,
                borderRadius: 16,
                backgroundColor: plan.highlighted ? PRIMARY_COLOR : "#fff",
                border: plan.highlighted
                  ? "none"
                  : "1px solid rgba(15,23,42,0.06)",
                boxShadow: plan.highlighted
                  ? "0 24px 64px rgba(15,23,42,0.15)"
                  : "0 2px 8px rgba(15,23,42,0.04)",
                textAlign: "left",
                position: "relative",
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
                transition: `all 0.6s cubic-bezier(0.23,1,0.32,1) ${0.2 + i * 0.1}s`,
              }}
            >
              {plan.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    right: 24,
                    padding: "4px 14px",
                    borderRadius: 100,
                    backgroundColor: ACCENT_COLOR,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    color: "#fff",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Most Popular
                </div>
              )}
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: plan.highlighted ? "#fff" : PRIMARY_COLOR,
                  marginBottom: 8,
                }}
              >
                {plan.name}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 800,
                    fontSize: 40,
                    color: plan.highlighted ? "#fff" : PRIMARY_COLOR,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: 15,
                    color: plan.highlighted
                      ? "rgba(255,255,255,0.5)"
                      : "rgba(15,23,42,0.4)",
                  }}
                >
                  {plan.period}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  color: plan.highlighted
                    ? "rgba(255,255,255,0.6)"
                    : "rgba(15,23,42,0.5)",
                  marginBottom: 28,
                  lineHeight: 1.5,
                }}
              >
                {plan.desc}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
                {plan.features.map((f, fi) => (
                  <div key={fi} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        fontSize: 14,
                        color: plan.highlighted ? ACCENT_COLOR : "#22C55E",
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: 14,
                        color: plan.highlighted
                          ? "rgba(255,255,255,0.8)"
                          : "rgba(15,23,42,0.65)",
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  padding: "14px 0",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "all 0.25s cubic-bezier(0.23,1,0.32,1)",
                  backgroundColor: plan.highlighted ? "#fff" : PRIMARY_COLOR,
                  color: plan.highlighted ? PRIMARY_COLOR : "#fff",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  const { ref, isInView } = useInView(0.2);
  return (
    <section
      ref={ref}
      style={{
        padding: "100px 24px",
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4.5vw, 44px)",
            color: PRIMARY_COLOR,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            marginBottom: 16,
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          Join 1,200+ companies building the future
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 17,
            color: "rgba(15,23,42,0.5)",
            lineHeight: 1.6,
            maxWidth: 440,
            margin: "0 auto 36px",
            opacity: isInView ? 1 : 0,
            transition: "opacity 0.5s ease 0.15s",
          }}
        >
          Free to start. No credit card required. Set up in under 10 minutes.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s cubic-bezier(0.23,1,0.32,1) 0.2s",
          }}
        >
          <a
            href="#"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 16,
              color: "#fff",
              backgroundColor: ACCENT_COLOR,
              padding: "16px 36px",
              borderRadius: 10,
              textDecoration: "none",
              transition: "all 0.25s cubic-bezier(0.23,1,0.32,1)",
              boxShadow: "0 4px 16px rgba(59,130,246,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(59,130,246,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(59,130,246,0.25)";
            }}
          >
            {CTA_TEXT}
          </a>
          <a
            href="#"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 16,
              color: PRIMARY_COLOR,
              textDecoration: "none",
              padding: "16px 24px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT_COLOR)}
            onMouseLeave={(e) => (e.currentTarget.style.color = PRIMARY_COLOR)}
          >
            Talk to Sales →
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        padding: "48px 24px",
        backgroundColor: "#FAFAF8",
        borderTop: "1px solid rgba(15,23,42,0.04)",
      }}
    >
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 16,
            color: PRIMARY_COLOR,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 6,
              background: ACCENT_COLOR,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            L
          </div>
          {BRAND_NAME}
        </div>
        <div style={{ display: "flex", gap: 28 }}>
          {["Privacy", "Terms", "Security", "Status"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: 13,
                color: "rgba(15,23,42,0.4)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY_COLOR)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(15,23,42,0.4)")
              }
            >
              {link}
            </a>
          ))}
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 13,
            color: "rgba(15,23,42,0.35)",
          }}
        >
          © 2026 {BRAND_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ────────────────────────────────────────────────────────── */
export default function StartupLaunchDemo() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#FAFAF8",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <Navbar />
        <HeroSection />
        <SocialProofBar />
        <ProblemSolutionSection />
        <ProductScreenshot />
        <MetricsBar />
        <PricingSection />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}
