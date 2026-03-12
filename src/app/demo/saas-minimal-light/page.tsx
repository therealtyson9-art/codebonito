"use client";

import { useEffect, useRef, useCallback } from "react";

/* ─── Constants ──────────────────────────────────────────────────── */
const BRAND = "Planify";
const PRIMARY = "#2563eb";
const ACCENT = "#3b82f6";
const DARK = "#0f172a";
const SEC = "#64748b";
const MUTED = "#94a3b8";
const BORDER = "#f1f5f9";
const BORDER2 = "#e2e8f0";
const FONT = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

/* ─── Data ───────────────────────────────────────────────────────── */
interface Feature {
  icon: string;
  title: string;
  desc: string;
  detail: string;
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface Step {
  number: string;
  title: string;
  desc: string;
}

const FEATURES: Feature[] = [
  {
    icon: "◆",
    title: "Intelligent Scheduling",
    desc: "AI-powered scheduling that learns your team's patterns and optimizes every meeting, deadline, and milestone automatically.",
    detail: "Reduce scheduling conflicts by 89%",
  },
  {
    icon: "◇",
    title: "Unified Workspace",
    desc: "Docs, tasks, and conversations in one place. No more context-switching between five different tools to get work done.",
    detail: "Everything in one tab",
  },
  {
    icon: "○",
    title: "Real-time Collaboration",
    desc: "See changes as they happen. Multiplayer editing with presence indicators, comments, and instant sync across all devices.",
    detail: "Sub-100ms sync latency",
  },
];

const STATS: Stat[] = [
  { value: 99.9, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "K+", label: "Teams" },
  { value: 4.9, suffix: "/5", label: "Rating" },
  { value: 12, suffix: "M", label: "Tasks completed" },
];

const STEPS: Step[] = [
  {
    number: "01",
    title: "Connect your tools",
    desc: "Import from Jira, Asana, Trello, or start fresh. Setup takes under 2 minutes.",
  },
  {
    number: "02",
    title: "Organize your way",
    desc: "Boards, lists, timelines, or all three. Your workspace adapts to your workflow.",
  },
  {
    number: "03",
    title: "Ship with confidence",
    desc: "Track progress in real-time. Know exactly where every project stands at a glance.",
  },
];

const LOGOS = ["Acme", "Globex", "Initech", "Hooli", "Piedmont"];
const NAV = ["Features", "Pricing", "Docs", "Changelog"];

const FOOTER = [
  { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { title: "Resources", links: ["Docs", "API", "Community", "Support"] },
];

/* ─── Style helper ───────────────────────────────────────────────── */
const tx = (
  wt: number,
  sz: string,
  col = DARK,
  x: React.CSSProperties = {}
): React.CSSProperties => ({
  fontFamily: FONT,
  fontWeight: wt,
  fontSize: sz,
  color: col,
  ...x,
});

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const fadeUp = (del: number) => `sml-fade-up 0.7s ${EASE} ${del}s both`;

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
          el.classList.add("sml-visible");
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}

/* ─── Reveal wrapper component ───────────────────────────────────── */
function Reveal({
  children,
  th,
}: {
  children: React.ReactNode;
  th?: number;
}) {
  const ref = useReveal(th);
  return (
    <div ref={ref} className="sml-reveal">
      {children}
    </div>
  );
}

/* ─── Animated stat counter ──────────────────────────────────────── */
function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !ran.current) {
          ran.current = true;
          const duration = 1800;
          const t0 = performance.now();
          const isDecimal = value % 1 !== 0;

          const tick = (now: number) => {
            const progress = Math.min((now - t0) / duration, 1);
            // Quartic ease-out for satisfying deceleration
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = eased * value;
            el.textContent = isDecimal
              ? current.toFixed(1)
              : Math.floor(current).toLocaleString();
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <>
      <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
        0
      </span>
      <span style={{ color: PRIMARY }}>{suffix}</span>
    </>
  );
}

/* ─── CTA button component ───────────────────────────────────────── */
function Btn({
  primary,
  children,
}: {
  primary?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      style={{
        ...tx(primary ? 600 : 500, "15px", primary ? "#fff" : SEC),
        letterSpacing: "-0.01em",
        borderRadius: 10,
        padding: "14px 28px",
        cursor: "pointer",
        transition: `all 0.25s ${EASE}`,
        border: primary ? "none" : `1px solid ${BORDER2}`,
        backgroundColor: primary ? PRIMARY : "transparent",
        boxShadow: primary
          ? `0 1px 2px rgba(0,0,0,0.05), 0 4px 16px ${PRIMARY}25`
          : "none",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-2px)";
        if (primary) {
          el.style.boxShadow = `0 2px 4px rgba(0,0,0,0.08), 0 8px 24px ${PRIMARY}35`;
        } else {
          el.style.borderColor = "#cbd5e1";
          el.style.color = DARK;
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        if (primary) {
          el.style.boxShadow = `0 1px 2px rgba(0,0,0,0.05), 0 4px 16px ${PRIMARY}25`;
        } else {
          el.style.borderColor = BORDER2;
          el.style.color = SEC;
        }
      }}
    >
      {children}
    </button>
  );
}

/* ─── Feature row with alternating layout ────────────────────────── */
function FeatureRow({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const reversed = index % 2 === 1;
  const shapes: React.CSSProperties[] = [
    { borderRadius: 12, transform: "none" },
    { borderRadius: "50%", transform: "none" },
    { borderRadius: 12, transform: "rotate(45deg)" },
  ];

  return (
    <Reveal th={0.2}>
      <div
        className="sml-feat"
        style={{
          display: "flex",
          flexDirection: reversed ? "row-reverse" : "row",
          alignItems: "center",
          gap: 80,
          padding: "48px 0",
        }}
      >
        {/* Text side */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: `${PRIMARY}08`,
              border: `1px solid ${PRIMARY}15`,
              marginBottom: 20,
              fontSize: 16,
              color: PRIMARY,
            }}
          >
            {feature.icon}
          </div>
          <h3
            style={tx(700, "24px", DARK, {
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
              marginBottom: 12,
            })}
          >
            {feature.title}
          </h3>
          <p
            style={tx(400, "16px", SEC, {
              lineHeight: 1.7,
              marginBottom: 16,
              maxWidth: 440,
            })}
          >
            {feature.desc}
          </p>
          <span style={tx(500, "13px", PRIMARY)}>
            {feature.detail} →
          </span>
        </div>

        {/* Illustration placeholder */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            aspectRatio: "4/3",
            borderRadius: 16,
            background:
              "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
            border: `1px solid ${BORDER2}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Grid pattern */}
          <svg
            width="100%"
            height="100%"
            style={{ position: "absolute", inset: 0, opacity: 0.4 }}
          >
            <defs>
              <pattern
                id={`grid-${index}`}
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 32 0 L 0 0 0 32"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill={`url(#grid-${index})`}
            />
          </svg>
          {/* Center decorative shape */}
          <div
            style={{
              width: 64,
              height: 64,
              background: `linear-gradient(135deg, ${PRIMARY}20, ${ACCENT}30)`,
              border: `1px solid ${PRIMARY}25`,
              zIndex: 1,
              ...shapes[index],
            }}
          />
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

  /* Parallax effect on background blobs */
  const onScroll = useCallback(() => {
    if (!heroRef.current) return;
    const y = window.scrollY;
    heroRef.current
      .querySelectorAll<HTMLElement>(".sml-blob")
      .forEach((blob, i) => {
        const speed = 0.15 + i * 0.05;
        blob.style.transform = `translate(-50%, -50%) translateY(${y * speed}px)`;
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

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        @keyframes sml-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes sml-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes sml-blob {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50%      { transform: translate(-50%, -50%) scale(1.08); }
        }

        .sml-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sml-reveal.sml-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .sml-feat {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .sml-hero-h {
            font-size: 40px !important;
          }
          .sml-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .sml-nav-links {
            display: none !important;
          }
          .sml-steps {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#fafafa",
          color: DARK,
          fontFamily: FONT,
          overflowX: "hidden",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        } as React.CSSProperties}
      >
        {/* ═══════════ Navigation ═══════════ */}
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: "16px 24px",
          }}
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 24px",
              borderRadius: 14,
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(20px) saturate(1.4)",
              WebkitBackdropFilter: "blur(20px) saturate(1.4)",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)",
            }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
                }}
              />
              <span
                style={tx(700, "17px", DARK, { letterSpacing: "-0.03em" })}
              >
                {BRAND}
              </span>
            </div>

            {/* Nav links */}
            <div
              className="sml-nav-links"
              style={{ display: "flex", gap: 32 }}
            >
              {NAV.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    ...tx(400, "14px", SEC),
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    letterSpacing: "-0.005em",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = DARK;
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = SEC;
                  }}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Nav CTA */}
            <button
              style={{
                ...tx(500, "13px", "#fff"),
                backgroundColor: DARK,
                border: "none",
                borderRadius: 8,
                padding: "8px 18px",
                cursor: "pointer",
                transition: `all 0.2s ${EASE}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1e293b";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = DARK;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get Started
            </button>
          </div>
        </nav>

        {/* ═══════════ Hero ═══════════ */}
        <section
          ref={heroRef}
          style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "160px 24px 120px",
            overflow: "hidden",
          }}
        >
          {/* Background gradient blobs */}
          <div
            className="sml-blob"
            style={{
              position: "absolute",
              top: "20%",
              left: "25%",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${PRIMARY}08 0%, transparent 70%)`,
              animation: "sml-blob 12s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />
          <div
            className="sml-blob"
            style={{
              position: "absolute",
              top: "30%",
              right: "20%",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${ACCENT}06 0%, transparent 70%)`,
              animation: "sml-blob 15s ease-in-out infinite reverse",
              pointerEvents: "none",
            }}
          />

          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 14px",
              borderRadius: 100,
              backgroundColor: `${PRIMARY}08`,
              border: `1px solid ${PRIMARY}12`,
              marginBottom: 32,
              animation: fadeUp(0.1),
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: PRIMARY,
              }}
            />
            <span style={tx(500, "13px", PRIMARY)}>
              Now in General Availability
            </span>
          </div>

          {/* Headline */}
          <h1
            className="sml-hero-h"
            style={{
              ...tx(700, "64px", DARK, {
                lineHeight: 1.08,
                letterSpacing: "-0.04em",
                maxWidth: 720,
              }),
              animation: fadeUp(0.2),
            }}
          >
            Plan smarter.{" "}
            <span style={{ color: PRIMARY }}>Ship faster.</span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              ...tx(400, "18px", SEC, {
                lineHeight: 1.7,
                maxWidth: 480,
                marginTop: 20,
                letterSpacing: "-0.005em",
              }),
              animation: fadeUp(0.35),
            }}
          >
            The project management tool that adapts to how your team
            actually works. Not the other way around.
          </p>

          {/* CTA pair */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 40,
              animation: fadeUp(0.5),
            }}
          >
            <Btn primary>Start for free</Btn>
            <Btn>See demo</Btn>
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: "50%",
              transform: "translateX(-50%)",
              animation: "sml-fade-in 0.5s ease 1.5s both",
            }}
          >
            <div
              style={{
                width: 1,
                height: 40,
                background:
                  "linear-gradient(to bottom, #cbd5e1, transparent)",
              }}
            />
          </div>
        </section>

        {/* ═══════════ Logos Bar ═══════════ */}
        <section
          style={{
            padding: "0 24px 80px",
            animation: "sml-fade-in 0.8s ease 0.6s both",
          }}
        >
          <div
            style={{
              maxWidth: 960,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p
              style={tx(400, "13px", MUTED, {
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 28,
              })}
            >
              Trusted by forward-thinking teams
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 48,
                flexWrap: "wrap",
              }}
            >
              {LOGOS.map((name) => (
                <div
                  key={name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    opacity: 0.35,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.6";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0.35";
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <rect
                      width="20"
                      height="20"
                      rx="4"
                      fill={DARK}
                      fillOpacity="0.15"
                    />
                    <rect
                      x="4"
                      y="4"
                      width="12"
                      height="12"
                      rx="2"
                      fill={DARK}
                      fillOpacity="0.2"
                    />
                  </svg>
                  <span
                    style={tx(600, "13px", DARK, {
                      letterSpacing: "-0.01em",
                    })}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div style={{ height: 1, backgroundColor: BORDER }} />
        </div>

        {/* ═══════════ Features (alternating) ═══════════ */}
        <section style={{ padding: "100px 24px" }}>
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>
            {/* Section header */}
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 80 }}>
                <p
                  style={tx(500, "13px", PRIMARY, {
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 16,
                  })}
                >
                  Features
                </p>
                <h2
                  style={tx(700, "40px", DARK, {
                    lineHeight: 1.15,
                    letterSpacing: "-0.035em",
                    marginBottom: 16,
                  })}
                >
                  Everything you need,
                  <br />
                  nothing you don&apos;t.
                </h2>
                <p
                  style={tx(400, "16px", SEC, {
                    lineHeight: 1.7,
                    maxWidth: 440,
                    margin: "0 auto",
                  })}
                >
                  Built for teams that value clarity over complexity.
                </p>
              </div>
            </Reveal>

            {/* Feature rows */}
            {FEATURES.map((feature, i) => (
              <FeatureRow key={feature.title} feature={feature} index={i} />
            ))}
          </div>
        </section>

        {/* ═══════════ How It Works ═══════════ */}
        <section
          style={{
            padding: "100px 24px",
            backgroundColor: "#ffffff",
            borderTop: `1px solid ${BORDER}`,
            borderBottom: `1px solid ${BORDER}`,
          }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 64 }}>
                <p
                  style={tx(500, "13px", PRIMARY, {
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 16,
                  })}
                >
                  How it works
                </p>
                <h2
                  style={tx(700, "36px", DARK, {
                    lineHeight: 1.2,
                    letterSpacing: "-0.035em",
                  })}
                >
                  Up and running in minutes
                </h2>
              </div>
            </Reveal>

            <div
              className="sml-steps"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 40,
              }}
            >
              {STEPS.map((step) => (
                <Reveal key={step.number} th={0.2}>
                  <div
                    style={{
                      padding: "32px",
                      borderRadius: 16,
                      border: `1px solid ${BORDER}`,
                      backgroundColor: "#fafafa",
                      transition: `all 0.3s ${EASE}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = BORDER2;
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(0,0,0,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = BORDER;
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span
                      style={tx(700, "32px", `${PRIMARY}20`, {
                        letterSpacing: "-0.02em",
                        marginBottom: 16,
                        display: "block",
                      })}
                    >
                      {step.number}
                    </span>
                    <h3
                      style={tx(600, "18px", DARK, {
                        letterSpacing: "-0.02em",
                        marginBottom: 8,
                        lineHeight: 1.4,
                      })}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={tx(400, "14px", SEC, {
                        lineHeight: 1.65,
                      })}
                    >
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ Metrics ═══════════ */}
        <section style={{ padding: "100px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <Reveal>
              <h2
                style={{
                  ...tx(700, "36px", DARK, {
                    lineHeight: 1.2,
                    letterSpacing: "-0.035em",
                  }),
                  textAlign: "center",
                  marginBottom: 64,
                }}
              >
                Numbers that speak
              </h2>
            </Reveal>

            <div
              className="sml-stats"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 1,
                backgroundColor: BORDER,
                border: `1px solid ${BORDER}`,
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              {STATS.map((stat) => (
                <Reveal key={stat.label} th={0.2}>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "40px 32px",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={tx(700, "40px", DARK, {
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        marginBottom: 8,
                      })}
                    >
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p
                      style={tx(400, "13px", MUTED, {
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                      })}
                    >
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ Testimonial ═══════════ */}
        <section
          style={{
            padding: "100px 24px",
            backgroundColor: "#ffffff",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <Reveal>
            <div
              style={{
                maxWidth: 720,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              {/* Large quotation mark */}
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 64,
                  lineHeight: 1,
                  color: BORDER2,
                  marginBottom: 24,
                }}
              >
                &ldquo;
              </div>

              <blockquote
                style={tx(400, "24px", DARK, {
                  lineHeight: 1.6,
                  letterSpacing: "-0.02em",
                  marginBottom: 32,
                })}
              >
                {BRAND} replaced three tools for us overnight. Our team
                went from spending 40% of their time managing work to
                spending 40% more time doing it.
              </blockquote>

              {/* Attribution */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #e2e8f0, #cbd5e1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ...tx(600, "14px", SEC),
                  }}
                >
                  SR
                </div>
                <div style={{ textAlign: "left" }}>
                  <p style={tx(600, "14px", DARK, { lineHeight: 1.4 })}>
                    Sarah Rodriguez
                  </p>
                  <p
                    style={tx(400, "13px", MUTED, { lineHeight: 1.4 })}
                  >
                    VP of Engineering, Acme Corp
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ═══════════ CTA ═══════════ */}
        <section
          style={{
            padding: "120px 24px",
            background: `linear-gradient(180deg, #ffffff 0%, ${PRIMARY}04 50%, #ffffff 100%)`,
          }}
        >
          <Reveal>
            <div
              style={{
                maxWidth: 560,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <h2
                style={tx(700, "36px", DARK, {
                  lineHeight: 1.2,
                  letterSpacing: "-0.035em",
                  marginBottom: 16,
                })}
              >
                Ready to get started?
              </h2>
              <p
                style={tx(400, "16px", SEC, {
                  lineHeight: 1.7,
                  marginBottom: 36,
                })}
              >
                Join 50,000+ teams already using {BRAND} to ship better
                products, faster.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                }}
              >
                <Btn primary>Start for free</Btn>
                <Btn>Talk to sales</Btn>
              </div>
              <p style={tx(400, "12px", MUTED, { marginTop: 16 })}>
                No credit card required · Free for teams up to 10
              </p>
            </div>
          </Reveal>
        </section>

        {/* ═══════════ Footer ═══════════ */}
        <footer
          style={{
            padding: "64px 24px 40px",
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 48,
            }}
          >
            {/* Brand column */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 6,
                    background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
                  }}
                />
                <span
                  style={tx(700, "17px", DARK, {
                    letterSpacing: "-0.03em",
                  })}
                >
                  {BRAND}
                </span>
              </div>
              <p
                style={tx(400, "13px", MUTED, {
                  lineHeight: 1.6,
                  maxWidth: 240,
                })}
              >
                The modern project management platform for teams that
                ship.
              </p>
            </div>

            {/* Link columns */}
            {FOOTER.map((col) => (
              <div key={col.title}>
                <p
                  style={tx(600, "13px", DARK, {
                    marginBottom: 16,
                    letterSpacing: "-0.005em",
                  })}
                >
                  {col.title}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      style={{
                        ...tx(400, "13px", MUTED),
                        textDecoration: "none",
                        transition: "color 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = SEC;
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color = MUTED;
                      }}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            style={{
              maxWidth: 1120,
              margin: "48px auto 0",
              paddingTop: 24,
              borderTop: `1px solid ${BORDER}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <p style={tx(400, "12px", "#cbd5e1")}>
              © 2025 {BRAND}. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    ...tx(400, "12px", "#cbd5e1"),
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = MUTED;
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "#cbd5e1";
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
