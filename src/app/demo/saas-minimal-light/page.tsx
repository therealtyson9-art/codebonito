"use client";

import { useEffect, useRef, useCallback } from "react";

/* ─── Types & Data ───────────────────────────────────────────────── */
const B = "Planify", P = "#2563eb", A = "#3b82f6", D = "#0f172a", S = "#64748b", L = "#94a3b8", BG = "#fafafa";
const inter = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

const FEATURES = [
  { icon: "◆", title: "Intelligent Scheduling", desc: "AI-powered scheduling that learns your team's patterns and optimizes every meeting, deadline, and milestone automatically.", detail: "Reduce scheduling conflicts by 89%" },
  { icon: "◇", title: "Unified Workspace", desc: "Docs, tasks, and conversations in one place. No more context-switching between five different tools to get work done.", detail: "Everything in one tab" },
  { icon: "○", title: "Real-time Collaboration", desc: "See changes as they happen. Multiplayer editing with presence indicators, comments, and instant sync across all devices.", detail: "Sub-100ms sync latency" },
];

const STATS = [
  { value: 99.9, suffix: "%", label: "Uptime" },
  { value: 50, suffix: "K+", label: "Teams" },
  { value: 4.9, suffix: "/5", label: "Rating" },
  { value: 12, suffix: "M", label: "Tasks completed" },
];

const LOGOS = ["Acme", "Globex", "Initech", "Hooli", "Piedmont"];
const NAV = ["Features", "Pricing", "Docs", "Changelog"];
const FOOTER_COLS = [
  { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { title: "Resources", links: ["Docs", "API", "Community", "Support"] },
];

/* ─── Helpers ────────────────────────────────────────────────────── */
const t = (weight: number, size: string, color = D, extra: React.CSSProperties = {}): React.CSSProperties => ({
  fontFamily: inter, fontWeight: weight, fontSize: size, color, ...extra,
});

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done) { done = true; el.classList.add("sml-visible"); }
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

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1800, t0 = performance.now(), dec = value % 1 !== 0;
        const tick = (now: number) => {
          const p = Math.min((now - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 4);
          el.textContent = dec ? (eased * value).toFixed(1) : Math.floor(eased * value).toLocaleString();
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return <><span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>0</span><span style={{ color: P }}>{suffix}</span></>;
}

function Btn({ primary, children, style }: { primary?: boolean; children: React.ReactNode; style?: React.CSSProperties }) {
  const base: React.CSSProperties = {
    fontFamily: inter, fontWeight: primary ? 600 : 500, fontSize: "15px", borderRadius: "10px",
    padding: "14px 28px", cursor: "pointer", transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
    letterSpacing: "-0.01em", border: primary ? "none" : "1px solid #e2e8f0",
    color: primary ? "#fff" : S, backgroundColor: primary ? P : "transparent",
    boxShadow: primary ? `0 1px 2px rgba(0,0,0,0.05), 0 4px 16px ${P}25` : "none", ...style,
  };
  return (
    <button style={base}
      onMouseEnter={e => { const el = e.currentTarget; el.style.transform = "translateY(-2px)";
        if (primary) el.style.boxShadow = `0 2px 4px rgba(0,0,0,0.08), 0 8px 24px ${P}35`;
        else { el.style.borderColor = "#cbd5e1"; el.style.color = D; }
      }}
      onMouseLeave={e => { const el = e.currentTarget; el.style.transform = "translateY(0)";
        if (primary) el.style.boxShadow = `0 1px 2px rgba(0,0,0,0.05), 0 4px 16px ${P}25`;
        else { el.style.borderColor = "#e2e8f0"; el.style.color = S; }
      }}
    >{children}</button>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────── */
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
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        @keyframes sml-fade-up{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @keyframes sml-fade-in{from{opacity:0}to{opacity:1}}
        @keyframes sml-blob{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.08)}}
        .sml-reveal{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
        .sml-reveal.sml-visible{opacity:1;transform:translateY(0)}
        @media(max-width:768px){.sml-feat{flex-direction:column!important;gap:32px!important}.sml-hero-h{font-size:40px!important}.sml-stats{grid-template-columns:repeat(2,1fr)!important}.sml-nav-l{display:none!important}}
      `}</style>

      <div style={{ minHeight: "100vh", backgroundColor: BG, color: D, fontFamily: inter, overflowX: "hidden", WebkitFontSmoothing: "antialiased" } as React.CSSProperties}>
        {/* ── Nav ── */}
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "16px 24px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 24px", borderRadius: 14, backgroundColor: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px) saturate(1.4)", WebkitBackdropFilter: "blur(20px) saturate(1.4)", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 1px 3px rgba(0,0,0,0.04),0 4px 12px rgba(0,0,0,0.02)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 24, height: 24, borderRadius: 6, background: `linear-gradient(135deg,${P},${A})` }} />
              <span style={t(700, "17px", D, { letterSpacing: "-0.03em" })}>{B}</span>
            </div>
            <div className="sml-nav-l" style={{ display: "flex", gap: 32 }}>
              {NAV.map(l => (
                <a key={l} href="#" style={{ ...t(400, "14px", S), textDecoration: "none", transition: "color .2s" }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = D; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = S; }}>{l}</a>
              ))}
            </div>
            <button style={{ ...t(500, "13px", "#fff"), backgroundColor: D, border: "none", borderRadius: 8, padding: "8px 18px", cursor: "pointer", transition: "all .2s cubic-bezier(.16,1,.3,1)" }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.backgroundColor = "#1e293b"; el.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.backgroundColor = D; el.style.transform = "translateY(0)"; }}>Get Started</button>
          </div>
        </nav>

        {/* ── Hero ── */}
        <section ref={heroRef} style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "160px 24px 120px", overflow: "hidden" }}>
          <div className="sml-blob" style={{ position: "absolute", top: "20%", left: "25%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle,${P}08 0%,transparent 70%)`, animation: "sml-blob 12s ease-in-out infinite", pointerEvents: "none" }} />
          <div className="sml-blob" style={{ position: "absolute", top: "30%", right: "20%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle,${A}06 0%,transparent 70%)`, animation: "sml-blob 15s ease-in-out infinite reverse", pointerEvents: "none" }} />

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 100, backgroundColor: `${P}08`, border: `1px solid ${P}12`, marginBottom: 32, animation: "sml-fade-up .6s cubic-bezier(.16,1,.3,1) .1s both" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: P }} />
            <span style={t(500, "13px", P)}>Now in General Availability</span>
          </div>

          <h1 className="sml-hero-h" style={{ ...t(700, "64px", D, { lineHeight: 1.08, letterSpacing: "-0.04em", maxWidth: 720 }), animation: "sml-fade-up .7s cubic-bezier(.16,1,.3,1) .2s both" }}>
            Plan smarter. <span style={{ color: P }}>Ship faster.</span>
          </h1>

          <p style={{ ...t(400, "18px", S, { lineHeight: 1.7, maxWidth: 480, marginTop: 20, letterSpacing: "-0.005em" }), animation: "sml-fade-up .7s cubic-bezier(.16,1,.3,1) .35s both" }}>
            The project management tool that adapts to how your team actually works. Not the other way around.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 40, animation: "sml-fade-up .7s cubic-bezier(.16,1,.3,1) .5s both" }}>
            <Btn primary>Start for free</Btn>
            <Btn>See demo</Btn>
          </div>

          <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", animation: "sml-fade-in .5s ease 1.5s both" }}>
            <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom,#cbd5e1,transparent)" }} />
          </div>
        </section>

        {/* ── Logos ── */}
        <section style={{ padding: "0 24px 80px", animation: "sml-fade-in .8s ease .6s both" }}>
          <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
            <p style={t(400, "13px", L, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 28 })}>
              Trusted by forward-thinking teams
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
              {LOGOS.map(name => (
                <div key={name} style={{ display: "flex", alignItems: "center", gap: 6, opacity: 0.35, transition: "opacity .3s" }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.6"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "0.35"; }}>
                  <svg width="20" height="20" viewBox="0 0 20 20"><rect width="20" height="20" rx="4" fill={D} fillOpacity="0.15" /><rect x="4" y="4" width="12" height="12" rx="2" fill={D} fillOpacity="0.2" /></svg>
                  <span style={t(600, "13px", D, { letterSpacing: "-0.01em" })}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}><div style={{ height: 1, backgroundColor: "#f1f5f9" }} /></div>

        {/* ── Features ── */}
        <section style={{ padding: "100px 24px" }}>
          <div style={{ maxWidth: 1040, margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 80 }}>
                <p style={t(500, "13px", P, { textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 })}>Features</p>
                <h2 style={t(700, "40px", D, { lineHeight: 1.15, letterSpacing: "-0.035em", marginBottom: 16 })}>
                  Everything you need,<br />nothing you don&apos;t.
                </h2>
                <p style={t(400, "16px", S, { lineHeight: 1.7, maxWidth: 440, margin: "0 auto" })}>
                  Built for teams that value clarity over complexity.
                </p>
              </div>
            </Reveal>

            {FEATURES.map((f, i) => {
              const rev = i % 2 === 1;
              return (
                <Reveal key={f.title} th={0.2}>
                  <div className="sml-feat" style={{ display: "flex", flexDirection: rev ? "row-reverse" : "row", alignItems: "center", gap: 80, padding: "40px 0" }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 10, backgroundColor: `${P}08`, border: `1px solid ${P}15`, marginBottom: 20, fontSize: 16, color: P }}>{f.icon}</div>
                      <h3 style={t(700, "24px", D, { letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.3 })}>{f.title}</h3>
                      <p style={t(400, "16px", S, { lineHeight: 1.7, marginBottom: 16, maxWidth: 440 })}>{f.desc}</p>
                      <span style={t(500, "13px", P)}>{f.detail} →</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0, aspectRatio: "4/3", borderRadius: 16, background: "linear-gradient(135deg,#f8fafc,#f1f5f9,#e2e8f0)", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.4 }}>
                        <defs><pattern id={`g${i}`} width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0L0 0 0 32" fill="none" stroke="#cbd5e1" strokeWidth="0.5" /></pattern></defs>
                        <rect width="100%" height="100%" fill={`url(#g${i})`} />
                      </svg>
                      <div style={{ width: 64, height: 64, borderRadius: i === 1 ? "50%" : 12, background: `linear-gradient(135deg,${P}20,${A}30)`, border: `1px solid ${P}25`, transform: i === 2 ? "rotate(45deg)" : "none", zIndex: 1 }} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ── Metrics ── */}
        <section style={{ padding: "100px 24px", backgroundColor: "#fff" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <Reveal><h2 style={{ ...t(700, "36px", D, { lineHeight: 1.2, letterSpacing: "-0.035em" }), textAlign: "center", marginBottom: 64 }}>Numbers that speak</h2></Reveal>
            <div className="sml-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, backgroundColor: "#f1f5f9", border: "1px solid #f1f5f9", borderRadius: 16, overflow: "hidden" }}>
              {STATS.map(s => (
                <Reveal key={s.label} th={0.2}>
                  <div style={{ backgroundColor: "#fff", padding: "40px 32px", textAlign: "center" }}>
                    <p style={t(700, "40px", D, { lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 8 })}>
                      <Counter value={s.value} suffix={s.suffix} />
                    </p>
                    <p style={t(400, "13px", L, { textTransform: "uppercase", letterSpacing: "0.02em" })}>{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonial ── */}
        <section style={{ padding: "100px 24px" }}>
          <Reveal>
            <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 64, lineHeight: 1, color: "#e2e8f0", marginBottom: 24 }}>&ldquo;</div>
              <blockquote style={t(400, "24px", D, { lineHeight: 1.6, letterSpacing: "-0.02em", marginBottom: 32 })}>
                {B} replaced three tools for us overnight. Our team went from spending 40% of their time managing work to spending 40% more time doing it.
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#e2e8f0,#cbd5e1)", display: "flex", alignItems: "center", justifyContent: "center", ...t(600, "14px", S) }}>SR</div>
                <div style={{ textAlign: "left" }}>
                  <p style={t(600, "14px", D, { lineHeight: 1.4 })}>Sarah Rodriguez</p>
                  <p style={t(400, "13px", L, { lineHeight: 1.4 })}>VP of Engineering, Acme Corp</p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: "120px 24px", background: `linear-gradient(180deg,#fff 0%,${P}04 50%,#fff 100%)` }}>
          <Reveal>
            <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
              <h2 style={t(700, "36px", D, { lineHeight: 1.2, letterSpacing: "-0.035em", marginBottom: 16 })}>Ready to get started?</h2>
              <p style={t(400, "16px", S, { lineHeight: 1.7, marginBottom: 36 })}>
                Join 50,000+ teams already using {B} to ship better products, faster.
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <Btn primary>Start for free</Btn>
                <Btn>Talk to sales</Btn>
              </div>
              <p style={t(400, "12px", L, { marginTop: 16 })}>No credit card required · Free for teams up to 10</p>
            </div>
          </Reveal>
        </section>

        {/* ── Footer ── */}
        <footer style={{ padding: "64px 24px 40px", borderTop: "1px solid #f1f5f9" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: `linear-gradient(135deg,${P},${A})` }} />
                <span style={t(700, "17px", D, { letterSpacing: "-0.03em" })}>{B}</span>
              </div>
              <p style={t(400, "13px", L, { lineHeight: 1.6, maxWidth: 240 })}>The modern project management platform for teams that ship.</p>
            </div>
            {FOOTER_COLS.map(col => (
              <div key={col.title}>
                <p style={t(600, "13px", D, { marginBottom: 16 })}>{col.title}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map(link => (
                    <a key={link} href="#" style={{ ...t(400, "13px", L), textDecoration: "none", transition: "color .15s" }}
                      onMouseEnter={e => { (e.target as HTMLElement).style.color = S; }}
                      onMouseLeave={e => { (e.target as HTMLElement).style.color = L; }}>{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ maxWidth: 1120, margin: "48px auto 0", paddingTop: 24, borderTop: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <p style={t(400, "12px", "#cbd5e1")}>© 2025 {B}. All rights reserved.</p>
            <div style={{ display: "flex", gap: 24 }}>
              {["Privacy", "Terms", "Cookies"].map(l => (
                <a key={l} href="#" style={{ ...t(400, "12px", "#cbd5e1"), textDecoration: "none", transition: "color .15s" }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.color = L; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.color = "#cbd5e1"; }}>{l}</a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
