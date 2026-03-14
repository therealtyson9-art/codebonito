"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Types ──────────────────────────────────────────────────────── */
interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface Review {
  stars: number;
  quote: string;
  author: string;
  date: string;
}

/* ─── Data ───────────────────────────────────────────────────────── */
const BRAND = "Zenith";
const PRIMARY = "#A855F7";
const ACCENT = "#EC4899";
const BG = "#0A0A12";

const FEATURES: Feature[] = [
  { icon: "🧘", title: "Guided Meditation", desc: "Personalized sessions powered by AI that adapt to your mood and schedule in real time." },
  { icon: "📊", title: "Progress Insights", desc: "Beautiful analytics track your streak, focus time, and wellness trends over weeks." },
  { icon: "🌙", title: "Sleep Stories", desc: "Drift off with narrated journeys crafted by award-winning authors and voice artists." },
  { icon: "🎵", title: "Soundscapes", desc: "Immersive spatial audio environments — rain, forest, ocean — layered for deep focus." },
  { icon: "⏰", title: "Smart Reminders", desc: "Gentle nudges at the perfect moment based on your calendar and daily patterns." },
  { icon: "👥", title: "Community", desc: "Join live group sessions and challenges with millions of mindful people worldwide." },
];

const STATS: StatItem[] = [
  { value: 2, suffix: "M+", label: "Downloads" },
  { value: 4.9, suffix: "★", label: "Rating" },
  { value: 130, suffix: "+", label: "Countries" },
];

const REVIEWS: Review[] = [
  { stars: 5, quote: "This app completely changed my morning routine. I wake up excited to meditate now.", author: "Jessica M.", date: "Mar 2, 2026" },
  { stars: 5, quote: "The sleep stories are incredible. I fall asleep in minutes every single night.", author: "David K.", date: "Feb 18, 2026" },
  { stars: 5, quote: "Best wellness app I've ever used. The soundscapes are pure magic for focus.", author: "Priya S.", date: "Jan 30, 2026" },
];

const SCREENSHOTS = [
  { label: "Home", gradient: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})` },
  { label: "Meditate", gradient: `linear-gradient(135deg, #6366F1, ${PRIMARY})` },
  { label: "Sleep", gradient: `linear-gradient(135deg, ${ACCENT}, #F97316)` },
  { label: "Insights", gradient: `linear-gradient(135deg, #06B6D4, ${PRIMARY})` },
];

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
          const duration = 2000;
          const start = performance.now();
          const isDecimal = target % 1 !== 0;

          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = eased * target;
            if (el) {
              if (isDecimal) el.textContent = current.toFixed(1);
              else el.textContent = Math.floor(current).toString();
            }
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.value]);

  return <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>0</span>;
}

/* ─── Scroll Fade-In ─────────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = "", style: extraStyle = {} }: { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Phone Mockup ───────────────────────────────────────────────── */
function PhoneMockup({ children, style, size = "lg" }: { children?: React.ReactNode; style?: React.CSSProperties; size?: "sm" | "lg" }) {
  const w = size === "lg" ? 280 : 200;
  const h = size === "lg" ? 580 : 415;
  const notchW = size === "lg" ? 120 : 86;
  const notchH = size === "lg" ? 28 : 20;
  const radius = size === "lg" ? 40 : 28;

  return (
    <div style={{ width: w, height: h, position: "relative", flexShrink: 0, ...style }}>
      {/* Outer frame */}
      <div style={{
        position: "absolute", inset: 0, borderRadius: radius,
        border: "3px solid rgba(255,255,255,0.15)",
        background: "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
        boxShadow: "0 0 0 1px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
        overflow: "hidden",
      }}>
        {/* Status bar */}
        <div style={{
          height: notchH + 8, display: "flex", alignItems: "flex-end",
          justifyContent: "space-between", padding: "0 20px 4px",
          fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.8)",
          position: "relative", zIndex: 2,
        }}>
          <span>9:41</span>
          <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><rect x="0" y="5" width="2.5" height="5" rx="0.5" fill="rgba(255,255,255,0.8)" /><rect x="3.5" y="3" width="2.5" height="7" rx="0.5" fill="rgba(255,255,255,0.8)" /><rect x="7" y="1" width="2.5" height="9" rx="0.5" fill="rgba(255,255,255,0.8)" /><rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="rgba(255,255,255,0.4)" /></svg>
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none"><rect x="0.5" y="0.5" width="17" height="9" rx="2" stroke="rgba(255,255,255,0.5)" /><rect x="18" y="3" width="1.5" height="4" rx="0.5" fill="rgba(255,255,255,0.4)" /><rect x="1.5" y="1.5" width="12" height="7" rx="1" fill="rgba(255,255,255,0.8)" /></svg>
          </span>
        </div>
        {/* Notch */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: notchW, height: notchH, borderRadius: "0 0 18px 18px",
          background: "#000",
        }}>
          <div style={{
            position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)",
            width: 8, height: 8, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(30,30,50,1) 40%, rgba(20,20,40,1) 100%)",
            border: "1.5px solid rgba(50,50,80,0.6)",
          }} />
        </div>
        {/* Screen content */}
        <div style={{
          position: "absolute", top: notchH + 12, left: 3, right: 3, bottom: 3,
          borderRadius: `0 0 ${radius - 4}px ${radius - 4}px`,
          overflow: "hidden",
        }}>
          {children}
        </div>
        {/* Home indicator */}
        <div style={{
          position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)",
          width: size === "lg" ? 100 : 70, height: 4, borderRadius: 2,
          background: "rgba(255,255,255,0.3)",
        }} />
      </div>
    </div>
  );
}

/* ─── Star Rating ────────────────────────────────────────────────── */
function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? "#FBBF24" : "rgba(255,255,255,0.15)", fontSize: 16 }}>★</span>
      ))}
    </div>
  );
}

/* ─── Store Button ───────────────────────────────────────────────── */
function StoreButton({ store }: { store: "apple" | "google" }) {
  return (
    <button style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      padding: "14px 28px", borderRadius: 14,
      background: store === "apple"
        ? "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))"
        : `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
      border: store === "apple" ? "1px solid rgba(255,255,255,0.15)" : "none",
      color: "#fff", fontSize: 15, fontWeight: 600, fontFamily: "Inter, sans-serif",
      cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s",
      backdropFilter: store === "apple" ? "blur(12px)" : undefined,
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = `0 0 32px ${store === "apple" ? "rgba(255,255,255,0.1)" : "rgba(168,85,247,0.4)"}`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <span style={{ fontSize: 22 }}>{store === "apple" ? "🍎" : "▶️"}</span>
      <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1.2 }}>
        <span style={{ fontSize: 10, fontWeight: 400, opacity: 0.7 }}>{store === "apple" ? "Download on the" : "Get it on"}</span>
        <span>{store === "apple" ? "App Store" : "Google Play"}</span>
      </span>
    </button>
  );
}

/* ─── Keyframes (injected once) ──────────────────────────────────── */
function useInjectKeyframes() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("app-showcase-keyframes")) return;
    const style = document.createElement("style");
    style.id = "app-showcase-keyframes";
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

      @keyframes phone-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-18px); }
      }
      @keyframes glow-pulse {
        0%, 100% { opacity: 0.5; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.05); }
      }
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      @keyframes rotate-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }, []);
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  MAIN PAGE                                                         */
/* ═══════════════════════════════════════════════════════════════════ */
export default function AppShowcasePage() {
  useInjectKeyframes();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      minHeight: "100vh", background: BG, color: "#f8fafc",
      fontFamily: "Inter, system-ui, sans-serif", overflowX: "hidden",
    }}>
      {/* ─── Navbar ──────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        backdropFilter: "blur(20px) saturate(1.4)",
        background: scrollY > 40 ? "rgba(10,10,18,0.85)" : "rgba(10,10,18,0.4)",
        borderBottom: "1px solid rgba(168,85,247,0.06)",
        transition: "background 0.3s",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto", display: "flex",
          alignItems: "center", justifyContent: "space-between",
          padding: "16px 24px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 10,
              background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 800, color: "#fff",
            }}>Z</div>
            <span style={{
              fontSize: 18, fontWeight: 800, letterSpacing: "-0.03em",
              background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>{BRAND}</span>
          </div>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {["Features", "Reviews", "Download"].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{
                color: "rgba(255,255,255,0.6)", fontSize: 14, fontWeight: 500,
                textDecoration: "none", transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >{link}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── Hero ────────────────────────────────────────────────── */}
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
          src="/videos/aurora.mp4"
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
        {/* Background glow */}
        <div style={{
          position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)",
          width: 700, height: 700, borderRadius: "50%",
          background: `radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(236,72,153,0.08) 40%, transparent 70%)`,
          filter: "blur(60px)", animation: "glow-pulse 6s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        {/* Rotating ring */}
        <div style={{
          position: "absolute", top: "20%", left: "50%", width: 500, height: 500,
          marginLeft: -250, borderRadius: "50%",
          border: "1px solid rgba(168,85,247,0.08)",
          animation: "rotate-slow 30s linear infinite",
          pointerEvents: "none",
        }} />

        <FadeIn style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)",
            borderRadius: 999, padding: "6px 16px", marginBottom: 28,
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%", background: "#22C55E",
              boxShadow: "0 0 8px rgba(34,197,94,0.5)",
            }} />
            <span style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: PRIMARY }}>
              #1 Wellness App 2026
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800,
            lineHeight: 1.05, letterSpacing: "-0.04em",
            maxWidth: 700, margin: "0 auto 20px",
          }}>
            Your mind,{" "}
            <span style={{
              background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>reimagined</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} style={{ position: 'relative', zIndex: 2 }}>
          <p style={{
            fontSize: 18, color: "rgba(248,250,252,0.6)",
            maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.6,
          }}>
            Meditation, sleep, and focus — beautifully designed and powered by AI that learns how you feel.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginBottom: 60 }}>
            <StoreButton store="apple" />
            <StoreButton store="google" />
          </div>
        </FadeIn>

        <FadeIn delay={0.4} style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            animation: "phone-float 5s ease-in-out infinite",
            position: "relative", zIndex: 1,
            transform: `translateY(${scrollY * -0.08}px)`,
          }}>
            <PhoneMockup>
              <div style={{
                width: "100%", height: "100%",
                background: `linear-gradient(160deg, ${PRIMARY}, ${ACCENT})`,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 12,
                padding: 20,
              }}>
                <div style={{ fontSize: 48 }}>🧘</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>Good Morning</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Ready for your session?</div>
                <div style={{
                  marginTop: 16, padding: "10px 32px", borderRadius: 999,
                  background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)",
                  fontSize: 14, fontWeight: 600, color: "#fff",
                }}>Begin</div>
              </div>
            </PhoneMockup>
          </div>
        </FadeIn>
      </section>

      {/* ─── Stats ───────────────────────────────────────────────── */}
      <section style={{
        padding: "60px 24px", maxWidth: 800, margin: "0 auto",
      }}>
        <FadeIn>
          <div style={{
            display: "flex", justifyContent: "center", gap: 0,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(168,85,247,0.08)",
            borderRadius: 20, overflow: "hidden",
          }}>
            {STATS.map((stat, i) => (
              <div key={i} style={{
                flex: 1, textAlign: "center", padding: "36px 24px",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(168,85,247,0.08)" : "none",
              }}>
                <div style={{
                  fontSize: 40, fontWeight: 800, letterSpacing: "-0.03em",
                  background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  <StatCounter stat={stat} />{stat.suffix}
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 6, fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ─── Screenshots Scroll ──────────────────────────────────── */}
      <section style={{ padding: "80px 0", overflow: "hidden" }}>
        <FadeIn>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
            textAlign: "center", letterSpacing: "-0.03em", marginBottom: 12,
          }}>
            Beautiful on every screen
          </h2>
          <p style={{
            textAlign: "center", color: "rgba(255,255,255,0.5)",
            fontSize: 16, marginBottom: 48, maxWidth: 400, marginLeft: "auto", marginRight: "auto",
          }}>
            Crafted with obsessive attention to every pixel and interaction.
          </p>
        </FadeIn>

        <div style={{
          display: "flex", gap: 32, justifyContent: "center",
          padding: "0 24px", overflowX: "auto",
          scrollSnapType: "x mandatory",
        }}>
          {SCREENSHOTS.map((screen, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div style={{
                scrollSnapAlign: "center",
                transform: `rotate(${i % 2 === 0 ? -3 : 3}deg) translateY(${i % 2 === 0 ? 0 : 20}px)`,
                transition: "transform 0.4s",
              }}>
                <PhoneMockup size="sm">
                  <div style={{
                    width: "100%", height: "100%",
                    background: screen.gradient,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", gap: 8,
                  }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(8px)",
                    }} />
                    <div style={{
                      fontSize: 14, fontWeight: 700, color: "#fff",
                      marginTop: 6,
                    }}>{screen.label}</div>
                    <div style={{
                      width: "70%", height: 6, borderRadius: 3,
                      background: "rgba(255,255,255,0.2)", marginTop: 8,
                    }} />
                    <div style={{
                      width: "50%", height: 6, borderRadius: 3,
                      background: "rgba(255,255,255,0.15)",
                    }} />
                  </div>
                </PhoneMockup>
                <div style={{
                  textAlign: "center", marginTop: 16,
                  fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)",
                }}>{screen.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── Features ────────────────────────────────────────────── */}
      <section id="features" style={{
        padding: "100px 24px", maxWidth: 1100, margin: "0 auto",
      }}>
        <FadeIn>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
            textAlign: "center", letterSpacing: "-0.03em", marginBottom: 12,
          }}>
            Everything you need to{" "}
            <span style={{
              background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>feel great</span>
          </h2>
          <p style={{
            textAlign: "center", color: "rgba(255,255,255,0.5)",
            fontSize: 16, marginBottom: 64, maxWidth: 460, marginLeft: "auto", marginRight: "auto",
          }}>
            Powerful features wrapped in simplicity. No clutter, just calm.
          </p>
        </FadeIn>

        <div style={{
          display: "flex", alignItems: "center", gap: 64,
          flexWrap: "wrap", justifyContent: "center",
        }}>
          {/* Left features */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40, maxWidth: 280 }}>
            {FEATURES.slice(0, 3).map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{f.icon}</div>
                  <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6, color: "#f8fafc" }}>{f.title}</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Center phone */}
          <FadeIn delay={0.2}>
            <div style={{
              position: "relative",
              transform: `translateY(${scrollY * -0.03}px)`,
            }}>
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 350, height: 350, borderRadius: "50%",
                background: `radial-gradient(circle, rgba(168,85,247,0.12), transparent 70%)`,
                filter: "blur(40px)", pointerEvents: "none",
              }} />
              <PhoneMockup>
                <div style={{
                  width: "100%", height: "100%",
                  background: `linear-gradient(180deg, #1a1033 0%, ${BG} 100%)`,
                  display: "flex", flexDirection: "column",
                  padding: 20, gap: 12,
                }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginTop: 8 }}>Daily Progress</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>7 day streak 🔥</div>
                  {/* Mini chart bars */}
                  <div style={{ display: "flex", gap: 6, alignItems: "flex-end", marginTop: 12, height: 80 }}>
                    {[40, 65, 50, 80, 70, 90, 60].map((h, i) => (
                      <div key={i} style={{
                        flex: 1, height: `${h}%`, borderRadius: 4,
                        background: `linear-gradient(180deg, ${PRIMARY}, ${ACCENT})`,
                        opacity: 0.6 + (i * 0.05),
                      }} />
                    ))}
                  </div>
                  <div style={{
                    marginTop: "auto", padding: "12px 16px", borderRadius: 16,
                    background: "rgba(168,85,247,0.12)",
                    border: "1px solid rgba(168,85,247,0.15)",
                  }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: PRIMARY }}>Next Session</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Evening Wind Down · 10 min</div>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </FadeIn>

          {/* Right features */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40, maxWidth: 280 }}>
            {FEATURES.slice(3).map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{f.icon}</div>
                  <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6, color: "#f8fafc" }}>{f.title}</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ────────────────────────────────────────── */}
      <section id="reviews" style={{
        padding: "100px 24px", maxWidth: 1000, margin: "0 auto",
      }}>
        <FadeIn>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
            textAlign: "center", letterSpacing: "-0.03em", marginBottom: 12,
          }}>
            Loved by millions
          </h2>
          <p style={{
            textAlign: "center", color: "rgba(255,255,255,0.5)",
            fontSize: 16, marginBottom: 48,
          }}>
            See what people are saying on the App Store.
          </p>
        </FadeIn>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}>
          {REVIEWS.map((review, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div style={{
                padding: 28, borderRadius: 20,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(168,85,247,0.08)",
                transition: "border-color 0.3s, transform 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,0.2)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(168,85,247,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <Stars count={review.stars} />
                <p style={{
                  fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.6,
                  margin: "16px 0",
                }}>
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "#f8fafc" }}>{review.author}</span>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{review.date}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── Download CTA ────────────────────────────────────────── */}
      <section id="download" style={{
        padding: "120px 24px", position: "relative", overflow: "hidden",
      }}>
        {/* Background glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800, height: 500, borderRadius: "50%",
          background: `radial-gradient(circle, rgba(168,85,247,0.1) 0%, rgba(236,72,153,0.06) 50%, transparent 70%)`,
          filter: "blur(80px)", pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: 900, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 64, flexWrap: "wrap", position: "relative", zIndex: 1,
        }}>
          <FadeIn>
            <div style={{
              animation: "phone-float 6s ease-in-out infinite",
              transform: `translateY(${scrollY * -0.02}px)`,
            }}>
              <PhoneMockup>
                <div style={{
                  width: "100%", height: "100%",
                  background: `linear-gradient(160deg, #1a1033, ${PRIMARY}33)`,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: 16, padding: 24,
                }}>
                  <div style={{ fontSize: 56 }}>🌙</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>Sleep Mode</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
                    Rain on a tin roof — 45 min
                  </div>
                  <div style={{
                    width: "80%", height: 4, borderRadius: 2,
                    background: "rgba(255,255,255,0.1)", marginTop: 12,
                    position: "relative", overflow: "hidden",
                  }}>
                    <div style={{
                      width: "35%", height: "100%", borderRadius: 2,
                      background: `linear-gradient(90deg, ${PRIMARY}, ${ACCENT})`,
                    }} />
                  </div>
                  <div style={{
                    display: "flex", gap: 24, marginTop: 8,
                    fontSize: 20, color: "rgba(255,255,255,0.6)",
                  }}>
                    <span>⏮</span><span style={{ color: "#fff", fontSize: 28 }}>⏸</span><span>⏭</span>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={{ maxWidth: 400 }}>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800,
                letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 16,
              }}>
                Start your journey{" "}
                <span style={{
                  background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>tonight</span>
              </h2>
              <p style={{
                fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.6,
                marginBottom: 32,
              }}>
                Join 2 million people who sleep better, focus deeper, and stress less — all with one app.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <StoreButton store="apple" />
                <StoreButton store="google" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────────── */}
      <footer style={{
        padding: "48px 24px", borderTop: "1px solid rgba(168,85,247,0.06)",
        maxWidth: 1100, margin: "0 auto",
      }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 24, height: 24, borderRadius: 7,
              background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, fontWeight: 800, color: "#fff",
            }}>Z</div>
            <span style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>{BRAND}</span>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy", "Terms", "Support", "Blog"].map(link => (
              <a key={link} href="#" style={{
                color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >{link}</a>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
            © 2026 {BRAND}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
