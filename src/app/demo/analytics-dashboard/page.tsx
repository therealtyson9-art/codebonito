"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Data ───────────────────────────────────────────────────────── */
const BRAND = "Metrik";
const PRIMARY = "#8B5CF6";
const ACCENT = "#3B82F6";
const BG = "#0C0C14";
const HEADLINE = "See everything. Miss nothing.";
const SUBHEADLINE = "Real-time analytics that turn raw data into revenue. Track every session, every conversion, every dollar — without the complexity.";
const CTA_TEXT = "Start Free Trial";

const NAV_LINKS = ["Features", "Integrations", "Pricing", "Docs"];

const METRICS = [
  { label: "Active Sessions", value: 24831, prefix: "", suffix: "", format: "comma" },
  { label: "Conversion Rate", value: 4.72, prefix: "", suffix: "%", format: "decimal" },
  { label: "Revenue (MRR)", value: 1284000, prefix: "$", suffix: "", format: "short" },
];

const BAR_DATA = [38, 52, 45, 68, 74, 60, 82, 90, 78, 95, 88, 100];

const TABLE_ROWS = [
  { page: "/pricing", visitors: "12,847", bounce: "23.4%", conv: "8.2%", trend: "up" },
  { page: "/signup", visitors: "9,213", bounce: "18.1%", conv: "12.7%", trend: "up" },
  { page: "/features", visitors: "8,456", bounce: "31.2%", conv: "5.1%", trend: "down" },
  { page: "/blog/analytics-guide", visitors: "6,102", bounce: "42.8%", conv: "3.4%", trend: "up" },
  { page: "/demo", visitors: "4,891", bounce: "15.3%", conv: "14.9%", trend: "up" },
];

const SIDEBAR_ITEMS = [
  { icon: "📊", label: "Dashboard", active: true },
  { icon: "📈", label: "Analytics" },
  { icon: "👥", label: "Users" },
  { icon: "🔔", label: "Events" },
  { icon: "🧪", label: "Experiments" },
  { icon: "⚙️", label: "Settings" },
];

const FEATURES = [
  { icon: "📊", title: "Real-Time Dashboards", desc: "Watch your metrics update live. No refresh needed. Sub-second latency from event to insight.", span: "2" },
  { icon: "🔍", title: "Funnel Analysis", desc: "Find exactly where users drop off. Automatic funnel detection with AI-powered suggestions.", span: "1", viz: "donut" },
  { icon: "📈", title: "Trend Detection", desc: "Anomaly detection alerts you before small dips become big problems.", span: "1", viz: "line" },
  { icon: "🧪", title: "A/B Testing", desc: "Built-in experimentation engine. Statistical significance calculated automatically. No data science degree required.", span: "2" },
  { icon: "👥", title: "Cohort Analysis", desc: "Group users by behavior, not just demographics. Understand retention at a granular level.", span: "1" },
  { icon: "⚡", title: "Event Tracking", desc: "Auto-capture clicks, page views, and custom events. One snippet, infinite insights.", span: "1" },
];

const INTEGRATIONS = [
  "Stripe", "Segment", "Slack", "Snowflake", "BigQuery", "PostgreSQL",
  "Salesforce", "HubSpot", "Shopify", "Vercel", "AWS", "Zapier",
];

const COMPANIES = ["Acme Corp", "TechFlow", "DataVault", "ScaleUp", "CloudNine", "MetricHQ"];

const PRICING = [
  { name: "Starter", price: "$0", period: "/mo", desc: "For indie hackers and side projects", features: ["10K events/mo", "3 dashboards", "7-day retention", "Email support"], cta: "Get Started", highlighted: false },
  { name: "Growth", price: "$79", period: "/mo", desc: "For growing teams that need more", features: ["1M events/mo", "Unlimited dashboards", "12-month retention", "Funnel analysis", "A/B testing", "Priority support"], cta: "Start Free Trial", highlighted: true },
  { name: "Enterprise", price: "Custom", period: "", desc: "For data-driven organizations", features: ["Unlimited events", "Unlimited everything", "Unlimited retention", "Custom integrations", "Dedicated CSM", "SLA guarantee", "SSO & SAML"], cta: "Contact Sales", highlighted: false },
];

/* ─── CSS Keyframes (injected once) ──────────────────────────────── */
const KEYFRAMES = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

@keyframes ad-grid-fade {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}
@keyframes ad-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
@keyframes ad-bar-grow {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}
@keyframes ad-counter-fade {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes ad-sparkline-draw {
  from { stroke-dashoffset: 200; }
  to { stroke-dashoffset: 0; }
}
@keyframes ad-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
@keyframes ad-scroll-x {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes ad-gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes ad-donut-fill {
  from { stroke-dashoffset: 251; }
  to { stroke-dashoffset: 75; }
}
@keyframes ad-line-draw {
  from { stroke-dashoffset: 300; }
  to { stroke-dashoffset: 0; }
}
`;

/* ─── Scroll Fade-In ─────────────────────────────────────────────── */
function FadeIn({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ─── Stat Counter ───────────────────────────────────────────────── */
function StatCounter({ metric }: { metric: typeof METRICS[0] }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const target = metric.value;
        const dur = 2200;
        const t0 = performance.now();
        function tick(now: number) {
          const p = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          const cur = eased * target;
          if (el) {
            if (metric.format === "decimal") el.textContent = metric.prefix + cur.toFixed(2) + metric.suffix;
            else if (metric.format === "short") el.textContent = metric.prefix + (cur / 1000).toFixed(0) + "K" + metric.suffix;
            else el.textContent = metric.prefix + Math.floor(cur).toLocaleString() + metric.suffix;
          }
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [metric]);

  return <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>0</span>;
}

/* ─── Mini Bar Chart (CSS-only with staggered animation) ─────────── */
function MiniBarChart({ animated }: { animated: boolean }) {
  const maxVal = Math.max(...BAR_DATA);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 120, padding: "0 8px" }}>
      {BAR_DATA.map((v, i) => (
        <div key={i} style={{
          flex: 1,
          height: `${(v / maxVal) * 100}%`,
          background: `linear-gradient(180deg, ${PRIMARY}, ${ACCENT})`,
          borderRadius: "4px 4px 0 0",
          transformOrigin: "bottom",
          transform: animated ? "scaleY(1)" : "scaleY(0)",
          animation: animated ? `ad-bar-grow 0.6s cubic-bezier(0.23,1,0.32,1) ${i * 0.07}s both` : "none",
          opacity: 0.7 + (v / maxVal) * 0.3,
        }} />
      ))}
    </div>
  );
}

/* ─── Sparkline SVG ──────────────────────────────────────────────── */
function Sparkline({ color = PRIMARY, animated = false }: { color?: string; animated?: boolean }) {
  const points = "0,20 8,18 16,22 24,15 32,17 40,10 48,12 56,8 64,14 72,6 80,10";
  return (
    <svg viewBox="0 0 80 28" style={{ width: "100%", height: 28, overflow: "visible" }}>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 200,
          strokeDashoffset: animated ? 0 : 200,
          animation: animated ? "ad-sparkline-draw 1.5s ease-out forwards" : "none",
        }}
      />
    </svg>
  );
}

/* ─── Donut Chart (CSS/SVG) ──────────────────────────────────────── */
function DonutChart({ animated }: { animated: boolean }) {
  return (
    <svg viewBox="0 0 100 100" style={{ width: 80, height: 80 }}>
      <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(139,92,246,0.15)" strokeWidth="8" />
      <circle cx="50" cy="50" r="40" fill="none" stroke={PRIMARY} strokeWidth="8"
        strokeDasharray="251" strokeDashoffset={animated ? "75" : "251"}
        strokeLinecap="round" transform="rotate(-90 50 50)"
        style={{ animation: animated ? "ad-donut-fill 1.2s ease-out forwards" : "none" }} />
      <text x="50" y="54" textAnchor="middle" fill="white" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">70%</text>
    </svg>
  );
}

/* ─── Mini Line Chart (SVG) ──────────────────────────────────────── */
function MiniLineChart({ animated }: { animated: boolean }) {
  const path = "M0,40 C15,35 25,20 40,25 C55,30 65,10 80,15 C95,20 100,5 120,8";
  return (
    <svg viewBox="0 0 120 50" style={{ width: "100%", height: 50 }}>
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={PRIMARY} />
          <stop offset="100%" stopColor={ACCENT} />
        </linearGradient>
      </defs>
      <path d={path} fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round"
        style={{
          strokeDasharray: 300,
          strokeDashoffset: animated ? 0 : 300,
          animation: animated ? "ad-line-draw 1.8s ease-out forwards" : "none",
        }} />
    </svg>
  );
}

/* ─── Glass Panel ────────────────────────────────────────────────── */
const glass: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(139,92,246,0.1)",
  borderRadius: 16,
};

/* ─── Main Page ──────────────────────────────────────────────────── */
export default function AnalyticsDashboardPage() {
  const [barAnimated, setBarAnimated] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const [donutAnimated, setDonutAnimated] = useState(false);
  const donutRef = useRef<HTMLDivElement>(null);
  const [lineAnimated, setLineAnimated] = useState(false);
  const lineRef = useRef<HTMLDivElement>(null);

  /* Observe bar chart */
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setBarAnimated(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Observe donut */
  useEffect(() => {
    const el = donutRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setDonutAnimated(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Observe line */
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setLineAnimated(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />
      <div style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        background: BG,
        color: "#f8fafc",
        minHeight: "100vh",
        overflow: "hidden",
      }}>

        {/* ── Navbar ─────────────────────────────────────────────── */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          display: "flex", justifyContent: "center",
          padding: "12px 16px",
        }}>
          <div style={{
            ...glass,
            maxWidth: 1200, width: "100%",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "14px 28px",
            background: "rgba(12,12,20,0.7)",
          }}>
            <span style={{
              fontWeight: 900, fontSize: 20, letterSpacing: "-0.04em",
              background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>{BRAND}</span>
            <div style={{ display: "flex", gap: 32 }}>
              {NAV_LINKS.map(link => (
                <a key={link} href="#" style={{
                  color: "rgba(248,250,252,0.6)", fontSize: 14, fontWeight: 500,
                  textDecoration: "none", transition: "color 0.2s",
                }} onMouseEnter={e => (e.currentTarget.style.color = "#f8fafc")}
                   onMouseLeave={e => (e.currentTarget.style.color = "rgba(248,250,252,0.6)")}>
                  {link}
                </a>
              ))}
            </div>
            <button style={{
              background: PRIMARY, color: "white", border: "none", borderRadius: 999,
              padding: "10px 22px", fontSize: 14, fontWeight: 600, cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = `0 0 30px rgba(139,92,246,0.4)`; }}
               onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}>
              {CTA_TEXT}
            </button>
          </div>
        </nav>

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", textAlign: "center",
          padding: "120px 24px 80px", position: "relative", overflow: "hidden",
        }}>
          <video
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.3,
              pointerEvents: 'none',
              zIndex: 0,
            }}
            src="/videos/space.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.5) 100%)',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
          {/* Animated grid bg */}
          <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
            <svg width="100%" height="100%" style={{ opacity: 0.15 }}>
              <defs>
                <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke={PRIMARY} strokeWidth="0.5" opacity="0.5" />
                </pattern>
                <radialGradient id="gridMask" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <mask id="gm"><rect width="100%" height="100%" fill="url(#gridMask)" /></mask>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gm)" />
            </svg>
          </div>
          {/* Gradient orbs */}
          <div style={{
            position: "absolute", top: "10%", left: "20%", width: 500, height: 500,
            background: `radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)`,
            borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none",
            animation: "ad-float 8s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", top: "30%", right: "15%", width: 400, height: 400,
            background: `radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)`,
            borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none",
            animation: "ad-float 10s ease-in-out infinite 2s",
          }} />

          <FadeIn style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)",
              borderRadius: 999, padding: "6px 16px", marginBottom: 32,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%", background: "#22c55e",
                boxShadow: "0 0 8px rgba(34,197,94,0.6)",
                animation: "ad-pulse 2s ease-in-out infinite",
              }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: PRIMARY, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Live Analytics — 2.4M events/day
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} style={{ position: 'relative', zIndex: 2 }}>
            <h1 style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 900,
              letterSpacing: "-0.04em", lineHeight: 1.05, maxWidth: 800, margin: "0 auto 24px",
              background: `linear-gradient(135deg, #f8fafc 0%, ${PRIMARY} 60%, ${ACCENT} 100%)`,
              backgroundSize: "200% 200%",
              animation: "ad-gradient-shift 6s ease-in-out infinite",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              {HEADLINE}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} style={{ position: 'relative', zIndex: 2 }}>
            <p style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "rgba(148,163,184,0.8)",
              maxWidth: 560, lineHeight: 1.7, margin: "0 auto 40px",
            }}>
              {SUBHEADLINE}
            </p>
          </FadeIn>

          <FadeIn delay={0.45} style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
              <button style={{
                background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
                color: "white", border: "none", borderRadius: 999,
                padding: "14px 36px", fontSize: 16, fontWeight: 700, cursor: "pointer",
                boxShadow: `0 4px 30px rgba(139,92,246,0.3)`,
                transition: "transform 0.2s, box-shadow 0.2s",
              }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = `0 8px 40px rgba(139,92,246,0.5)`; }}
                 onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = `0 4px 30px rgba(139,92,246,0.3)`; }}>
                {CTA_TEXT}
              </button>
              <a href="#" style={{
                color: "rgba(248,250,252,0.6)", fontSize: 15, fontWeight: 500,
                textDecoration: "none", display: "flex", alignItems: "center", gap: 6,
                transition: "color 0.2s",
              }} onMouseEnter={e => (e.currentTarget.style.color = "#f8fafc")}
                 onMouseLeave={e => (e.currentTarget.style.color = "rgba(248,250,252,0.6)")}>
                ▶ Watch demo
              </a>
            </div>
          </FadeIn>
        </section>

        {/* ── Dashboard Preview ──────────────────────────────────── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 100px" }}>
          <FadeIn>
            <div style={{
              ...glass,
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: `0 0 80px rgba(139,92,246,0.08), 0 0 0 1px rgba(139,92,246,0.08)`,
              display: "grid",
              gridTemplateColumns: "200px 1fr",
              minHeight: 480,
            }}>
              {/* Sidebar */}
              <div style={{
                borderRight: "1px solid rgba(139,92,246,0.08)",
                padding: "24px 0",
                display: "flex", flexDirection: "column", gap: 4,
              }}>
                <div style={{ padding: "0 20px 20px", fontWeight: 800, fontSize: 15,
                  background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>{BRAND}</div>
                {SIDEBAR_ITEMS.map(item => (
                  <div key={item.label} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 20px", fontSize: 13, fontWeight: 500, cursor: "pointer",
                    background: item.active ? "rgba(139,92,246,0.1)" : "transparent",
                    color: item.active ? "#f8fafc" : "rgba(148,163,184,0.6)",
                    borderLeft: item.active ? `2px solid ${PRIMARY}` : "2px solid transparent",
                    transition: "all 0.2s",
                  }}>
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Main dashboard */}
              <div style={{ padding: 28 }}>
                {/* Metric cards */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
                  {METRICS.map((m, i) => (
                    <div key={m.label} style={{
                      ...glass,
                      padding: "20px",
                      borderRadius: 14,
                      position: "relative",
                      overflow: "hidden",
                    }}>
                      <div style={{ fontSize: 12, color: "rgba(148,163,184,0.6)", fontWeight: 500, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        {m.label}
                      </div>
                      <div style={{ fontSize: 28, fontWeight: 800, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
                        <StatCounter metric={m} />
                      </div>
                      <div style={{ marginTop: 8, opacity: 0.5 }}>
                        <Sparkline color={i === 0 ? PRIMARY : i === 1 ? "#22c55e" : ACCENT} animated={true} />
                      </div>
                      {/* Live indicator */}
                      <div style={{
                        position: "absolute", top: 16, right: 16,
                        width: 6, height: 6, borderRadius: "50%", background: "#22c55e",
                        animation: "ad-pulse 2s ease-in-out infinite",
                        boxShadow: "0 0 6px rgba(34,197,94,0.5)",
                      }} />
                    </div>
                  ))}
                </div>

                {/* Bar Chart */}
                <div ref={barRef} style={{ ...glass, borderRadius: 14, padding: 20, marginBottom: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>Sessions — Last 12 Months</span>
                    <span style={{ fontSize: 12, color: "rgba(148,163,184,0.5)" }}>+23% vs last year</span>
                  </div>
                  <MiniBarChart animated={barAnimated} />
                </div>

                {/* Table */}
                <div style={{ ...glass, borderRadius: 14, overflow: "hidden" }}>
                  <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(139,92,246,0.06)", fontSize: 14, fontWeight: 600 }}>
                    Top Pages
                  </div>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid rgba(139,92,246,0.06)" }}>
                        {["Page", "Visitors", "Bounce", "Conv.", ""].map(h => (
                          <th key={h} style={{ padding: "10px 20px", textAlign: "left", fontWeight: 500, color: "rgba(148,163,184,0.5)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {TABLE_ROWS.map((row, i) => (
                        <tr key={row.page} style={{ borderBottom: i < TABLE_ROWS.length - 1 ? "1px solid rgba(139,92,246,0.04)" : "none" }}>
                          <td style={{ padding: "12px 20px", fontWeight: 500, color: "#f8fafc" }}>{row.page}</td>
                          <td style={{ padding: "12px 20px", fontVariantNumeric: "tabular-nums", color: "rgba(248,250,252,0.7)" }}>{row.visitors}</td>
                          <td style={{ padding: "12px 20px", fontVariantNumeric: "tabular-nums", color: "rgba(248,250,252,0.7)" }}>{row.bounce}</td>
                          <td style={{ padding: "12px 20px", fontVariantNumeric: "tabular-nums", color: "rgba(248,250,252,0.7)" }}>{row.conv}</td>
                          <td style={{ padding: "12px 20px" }}>
                            <span style={{ color: row.trend === "up" ? "#22c55e" : "#ef4444", fontSize: 12 }}>
                              {row.trend === "up" ? "↑" : "↓"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── Features Bento ─────────────────────────────────────── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 120px" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 16 }}>
                Everything you need to grow
              </h2>
              <p style={{ color: "rgba(148,163,184,0.7)", fontSize: 18, maxWidth: 500, margin: "0 auto" }}>
                Powerful analytics tools that work together, out of the box.
              </p>
            </div>
          </FadeIn>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}>
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.08} style={{ gridColumn: `span ${f.span}` }}>
                <div ref={f.viz === "donut" ? donutRef : f.viz === "line" ? lineRef : undefined} style={{
                  ...glass,
                  padding: 28,
                  borderRadius: 18,
                  height: "100%",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                  cursor: "default",
                }} onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(139,92,246,0.3)`; e.currentTarget.style.boxShadow = `0 0 40px rgba(139,92,246,0.08)`; }}
                   onMouseLeave={e => { e.currentTarget.style.borderColor = `rgba(139,92,246,0.1)`; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(148,163,184,0.7)", lineHeight: 1.6 }}>{f.desc}</p>
                  {f.viz === "donut" && (
                    <div style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
                      <DonutChart animated={donutAnimated} />
                    </div>
                  )}
                  {f.viz === "line" && (
                    <div style={{ marginTop: 20 }}>
                      <MiniLineChart animated={lineAnimated} />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Integrations ───────────────────────────────────────── */}
        <section style={{ padding: "0 24px 120px", overflow: "hidden" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 16 }}>
                Connect your stack
              </h2>
              <p style={{ color: "rgba(148,163,184,0.7)", fontSize: 18 }}>
                Plug into 50+ tools your team already uses.
              </p>
            </div>
          </FadeIn>
          <div style={{ overflow: "hidden", position: "relative" }}>
            {/* Fade edges */}
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, background: `linear-gradient(90deg, ${BG}, transparent)`, zIndex: 2, pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, background: `linear-gradient(270deg, ${BG}, transparent)`, zIndex: 2, pointerEvents: "none" }} />
            <div style={{
              display: "flex", gap: 24, animation: "ad-scroll-x 30s linear infinite",
              width: "max-content",
            }}>
              {[...INTEGRATIONS, ...INTEGRATIONS].map((name, i) => (
                <div key={`${name}-${i}`} style={{
                  ...glass,
                  padding: "16px 32px",
                  borderRadius: 14,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "rgba(248,250,252,0.7)",
                  whiteSpace: "nowrap",
                  display: "flex", alignItems: "center", gap: 10,
                  flexShrink: 0,
                }}>
                  <span style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: `linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, fontWeight: 800, color: PRIMARY,
                  }}>{name[0]}</span>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Social Proof ───────────────────────────────────────── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 120px" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p style={{ fontSize: 14, color: "rgba(148,163,184,0.5)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 32 }}>
                Trusted by data teams at
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", alignItems: "center" }}>
                {COMPANIES.map(c => (
                  <span key={c} style={{
                    fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em",
                    color: "rgba(148,163,184,0.25)",
                    transition: "color 0.3s",
                  }} onMouseEnter={e => (e.currentTarget.style.color = "rgba(148,163,184,0.5)")}
                     onMouseLeave={e => (e.currentTarget.style.color = "rgba(148,163,184,0.25)")}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── Pricing ────────────────────────────────────────────── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 120px" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 16 }}>
                Simple, transparent pricing
              </h2>
              <p style={{ color: "rgba(148,163,184,0.7)", fontSize: 18 }}>
                Start free. Scale when you&apos;re ready.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, alignItems: "start" }}>
            {PRICING.map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 0.1}>
                <div style={{
                  ...glass,
                  padding: 36,
                  borderRadius: 20,
                  border: tier.highlighted ? `1px solid rgba(139,92,246,0.4)` : "1px solid rgba(139,92,246,0.1)",
                  boxShadow: tier.highlighted ? `0 0 60px rgba(139,92,246,0.12)` : "none",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {tier.highlighted && (
                    <div style={{
                      position: "absolute", top: 16, right: 16,
                      background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
                      color: "white", fontSize: 11, fontWeight: 700,
                      padding: "4px 12px", borderRadius: 999,
                      textTransform: "uppercase", letterSpacing: "0.05em",
                    }}>Popular</div>
                  )}
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{tier.name}</h3>
                  <p style={{ fontSize: 13, color: "rgba(148,163,184,0.6)", marginBottom: 20 }}>{tier.desc}</p>
                  <div style={{ marginBottom: 24 }}>
                    <span style={{ fontSize: 42, fontWeight: 900, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}>{tier.price}</span>
                    <span style={{ fontSize: 14, color: "rgba(148,163,184,0.5)" }}>{tier.period}</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                    {tier.features.map(f => (
                      <li key={f} style={{ fontSize: 14, color: "rgba(248,250,252,0.7)", display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ color: PRIMARY, fontSize: 14 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button style={{
                    width: "100%",
                    background: tier.highlighted ? `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})` : "rgba(139,92,246,0.1)",
                    color: "white", border: tier.highlighted ? "none" : "1px solid rgba(139,92,246,0.2)",
                    borderRadius: 12, padding: "14px 0", fontSize: 14, fontWeight: 700,
                    cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s",
                  }} onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; if (tier.highlighted) e.currentTarget.style.boxShadow = `0 0 30px rgba(139,92,246,0.3)`; }}
                     onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}>
                    {tier.cta}
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────────────────── */}
        <footer style={{
          borderTop: "1px solid rgba(139,92,246,0.06)",
          padding: "60px 24px",
          maxWidth: 1100, margin: "0 auto",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
            <div>
              <span style={{
                fontWeight: 900, fontSize: 20,
                background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                display: "block", marginBottom: 12,
              }}>{BRAND}</span>
              <p style={{ fontSize: 14, color: "rgba(148,163,184,0.5)", lineHeight: 1.7, maxWidth: 280 }}>
                Real-time analytics for modern teams. See everything. Miss nothing.
              </p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { title: "Resources", links: ["Docs", "API Reference", "Status", "Support"] },
            ].map(col => (
              <div key={col.title}>
                <h4 style={{ fontSize: 13, fontWeight: 700, marginBottom: 16, color: "rgba(248,250,252,0.8)" }}>{col.title}</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map(l => (
                    <li key={l}>
                      <a href="#" style={{ fontSize: 13, color: "rgba(148,163,184,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                         onMouseEnter={e => (e.currentTarget.style.color = "#f8fafc")}
                         onMouseLeave={e => (e.currentTarget.style.color = "rgba(148,163,184,0.5)")}>
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{
            borderTop: "1px solid rgba(139,92,246,0.06)",
            marginTop: 48, paddingTop: 24,
            display: "flex", justifyContent: "space-between", alignItems: "center",
            fontSize: 12, color: "rgba(148,163,184,0.35)",
          }}>
            <span>© 2024 {BRAND}. All rights reserved.</span>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="#" style={{ color: "rgba(148,163,184,0.35)", textDecoration: "none" }}>Privacy</a>
              <a href="#" style={{ color: "rgba(148,163,184,0.35)", textDecoration: "none" }}>Terms</a>
              <a href="#" style={{ color: "rgba(148,163,184,0.35)", textDecoration: "none" }}>Security</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
