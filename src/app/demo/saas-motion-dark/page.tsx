"use client";

import { useEffect, useRef, useCallback } from "react";

/* ─── Types ──────────────────────────────────────────────────────── */
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

/* ─── Video Background ──────────────────────────────────────────── */
const VIDEO_URL =
  "https://assets.mixkit.co/videos/28293/28293-720.mp4";

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
            // Custom cubic-bezier easing: [0.23, 1, 0.32, 1]
            const t = progress;
            const eased =
              t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
            const current = eased * target;
            if (el) {
              el.textContent = isDecimal
                ? current.toFixed(1)
                : Math.floor(current).toLocaleString();
            }
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

/* ─── 3D Tilt Card ───────────────────────────────────────────────── */
function TiltCard({ feature }: { feature: FeatureItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const rx = -dy * 12; // max 12° tilt
      const ry = dx * 12;

      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px) scale(1.02)`;
      card.style.transition = "transform 0.1s linear";

      // Move inner glow to follow cursor
      const glowX = ((e.clientX - rect.left) / rect.width) * 100;
      const glowY = ((e.clientY - rect.top) / rect.height) * 100;
      glow.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(99,102,241,0.25) 0%, transparent 60%)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
    card.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
    glow.style.background = "transparent";
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <div ref={cardRef} className="smb-card" style={{ position: "relative", overflow: "hidden" }}>
      {/* Inner glow that follows cursor */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          transition: "background 0.15s ease",
          borderRadius: "inherit",
        }}
      />
      <span className="smb-card-icon">{feature.icon}</span>
      <h3 className="smb-card-title">{feature.title}</h3>
      <p className="smb-card-desc">{feature.desc}</p>
    </div>
  );
}

/* ─── Cursor Glow ────────────────────────────────────────────────── */
function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const el = glowRef.current;
        if (!el) return;
        el.style.left = `${e.clientX}px`;
        el.style.top = `${e.clientY}px`;
        el.style.opacity = "1";
      });
    }
    function onLeave() {
      const el = glowRef.current;
      if (el) el.style.opacity = "0";
    }
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
        transition: "opacity 0.3s ease",
      }}
    />
  );
}

/* ─── Main Page ──────────────────────────────────────────────────── */
export default function SaasMotionDarkPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Instrument+Serif:ital@1&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Keyframes ── */
        @keyframes mesh-drift {
          0%   { background-position: 0% 0%, 100% 100%, 50% 50%; }
          33%  { background-position: 30% 60%, 70% 30%, 80% 20%; }
          66%  { background-position: 80% 20%, 20% 80%, 30% 70%; }
          100% { background-position: 0% 0%, 100% 100%, 50% 50%; }
        }
        @keyframes char-rise {
          from { opacity: 0; transform: translateY(22px) rotate(-2deg); }
          to   { opacity: 1; transform: translateY(0) rotate(0deg); }
        }
        @keyframes badge-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
          50%       { box-shadow: 0 0 0 6px rgba(99,102,241,0.12); }
        }
        @keyframes shimmer-slide {
          from { transform: translateX(-100%); }
          to   { transform: translateX(200%); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes border-glow {
          0%, 100% { border-color: rgba(99,102,241,0.2); }
          50%       { border-color: rgba(99,102,241,0.6); }
        }
        @keyframes float-in {
          from { opacity: 0; transform: translateY(40px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ── Root ── */
        .smb-root {
          min-height: 100vh;
          font-family: 'Inter', system-ui, sans-serif;
          color: #f8fafc;
          overflow-x: hidden;
          background: #050510;
        }

        /* ── Mesh background ── */
        .smb-mesh {
          position: fixed;
          inset: 0;
          z-index: 0;
          background-color: #050510;
          background-image:
            radial-gradient(ellipse at 20% 20%, rgba(99,102,241,0.28) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 80%, rgba(139,92,246,0.20) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.10) 0%, transparent 70%);
          background-size: 200% 200%, 200% 200%, 200% 200%;
          animation: mesh-drift 20s ease-in-out infinite;
          pointer-events: none;
        }

        /* ── Layers ── */
        .smb-layer { position: relative; z-index: 1; }

        /* ── Glassmorphism Nav ── */
        .smb-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(5, 5, 16, 0.45);
          backdrop-filter: blur(20px) saturate(1.4);
          -webkit-backdrop-filter: blur(20px) saturate(1.4);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 1px 0 rgba(99,102,241,0.12), inset 0 1px 0 rgba(255,255,255,0.04);
          animation: fade-up 0.5s cubic-bezier(0.23,1,0.32,1) both;
        }
        .smb-logo {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          font-weight: 900;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #818cf8, #6366f1, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .smb-nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .smb-nav-links a {
          color: rgba(148,163,184,0.8);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .smb-nav-links a:hover { color: #f8fafc; }

        /* ── Hero ── */
        .smb-hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        /* Video background */
        .smb-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.25;
          pointer-events: none;
        }
        /* Dark overlay over video */
        .smb-video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(5,5,16,0.5) 0%,
            rgba(5,5,16,0.2) 40%,
            rgba(5,5,16,0.7) 100%
          );
        }
        /* Corner accents */
        .smb-corner {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(99,102,241,0.6);
        }
        .smb-corner-tl { top: 24px;  left: 24px;  border-top: 2px solid; border-left: 2px solid; border-color: rgba(99,102,241,0.6); background: transparent; }
        .smb-corner-tr { top: 24px;  right: 24px; border-top: 2px solid; border-right: 2px solid; border-color: rgba(99,102,241,0.6); background: transparent; }
        .smb-corner-bl { bottom: 24px; left: 24px;  border-bottom: 2px solid; border-left: 2px solid; border-color: rgba(99,102,241,0.6); background: transparent; }
        .smb-corner-br { bottom: 24px; right: 24px; border-bottom: 2px solid; border-right: 2px solid; border-color: rgba(99,102,241,0.6); background: transparent; }

        .smb-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 860px;
          padding: 4rem 2rem;
          margin: 0 auto;
        }
        .smb-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.35);
          color: #a5b4fc;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.375rem 0.875rem;
          border-radius: 9999px;
          margin-bottom: 2.25rem;
          animation: badge-pulse 3s ease-in-out infinite, fade-up 0.6s 0.1s cubic-bezier(0.23,1,0.32,1) both;
        }
        .smb-headline-sans {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          font-size: clamp(2.75rem, 7vw, 5.5rem);
          text-transform: uppercase;
          letter-spacing: -0.04em;
          line-height: 1.0;
          color: #f8fafc;
          display: block;
        }
        .smb-headline-serif {
          font-family: 'Instrument Serif', 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-weight: 400;
          font-size: clamp(2.25rem, 6vw, 4.75rem);
          letter-spacing: -0.02em;
          line-height: 1.1;
          background: linear-gradient(135deg, #a5b4fc 0%, #818cf8 50%, #c4b5fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          margin-top: 0.25rem;
        }
        .smb-headline-wrap {
          margin-bottom: 1.75rem;
          overflow: hidden;
        }
        .smb-char {
          display: inline-block;
          opacity: 0;
          animation: char-rise 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          white-space: pre;
        }
        .smb-hero-sub {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: rgba(148,163,184,0.85);
          max-width: 520px;
          margin: 0 auto 2.75rem;
          line-height: 1.7;
          animation: fade-up 0.7s 0.5s cubic-bezier(0.23,1,0.32,1) both;
        }
        .smb-hero-ctas {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fade-up 0.7s 0.65s cubic-bezier(0.23,1,0.32,1) both;
        }

        /* ── CTA Button (shimmer) ── */
        .smb-btn-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #6366f1;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          padding: 0.9rem 2.25rem;
          border-radius: 0.75rem;
          border: none;
          cursor: pointer;
          overflow: hidden;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.25s cubic-bezier(0.23,1,0.32,1), box-shadow 0.25s ease;
          box-shadow: 0 0 0 rgba(99,102,241,0);
        }
        .smb-btn-primary::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transform: translateX(-120%);
          transition: none;
        }
        .smb-btn-primary:hover {
          background: #4f46e5;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 0 30px rgba(99,102,241,0.5), 0 8px 32px rgba(0,0,0,0.4);
        }
        .smb-btn-primary:hover::after {
          animation: shimmer-slide 0.65s cubic-bezier(0.23,1,0.32,1) forwards;
        }
        .smb-btn-primary:active {
          transform: translateY(-1px) scale(0.99);
          box-shadow: 0 0 15px rgba(99,102,241,0.4);
        }
        .smb-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(148,163,184,0.9);
          font-size: 1rem;
          font-weight: 600;
          padding: 0.9rem 1.75rem;
          border: 1px solid rgba(148,163,184,0.2);
          border-radius: 0.75rem;
          text-decoration: none;
          transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease;
          background: rgba(255,255,255,0.02);
        }
        .smb-btn-ghost:hover {
          border-color: rgba(99,102,241,0.5);
          color: #f8fafc;
          background: rgba(99,102,241,0.08);
        }

        /* ── Features ── */
        .smb-section {
          max-width: 1120px;
          margin: 0 auto;
          padding: 5rem 2rem;
        }
        .smb-section-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #6366f1;
          margin-bottom: 0.75rem;
        }
        .smb-section-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.75rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: #f8fafc;
          margin-bottom: 3.5rem;
        }
        .smb-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 1.25rem;
        }
        .smb-card {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(99,102,241,0.15);
          border-radius: 1.25rem;
          padding: 2rem;
          cursor: default;
          will-change: transform;
          transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          animation: float-in 0.7s cubic-bezier(0.23,1,0.32,1) both;
        }
        .smb-card:nth-child(1) { animation-delay: 0.1s; }
        .smb-card:nth-child(2) { animation-delay: 0.2s; }
        .smb-card:nth-child(3) { animation-delay: 0.3s; }
        .smb-card:hover {
          border-color: rgba(99,102,241,0.5);
          box-shadow:
            0 0 0 1px rgba(99,102,241,0.15),
            0 0 30px rgba(99,102,241,0.2),
            0 20px 40px rgba(0,0,0,0.5),
            inset -4px -6px 25px 0px rgba(0,0,0,0.3);
        }
        .smb-card-icon {
          font-size: 2.25rem;
          margin-bottom: 1.25rem;
          display: block;
          filter: drop-shadow(0 0 8px rgba(99,102,241,0.4));
        }
        .smb-card-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          color: #f8fafc;
          margin-bottom: 0.75rem;
        }
        .smb-card-desc {
          font-size: 0.9rem;
          color: rgba(148,163,184,0.8);
          line-height: 1.7;
        }

        /* ── Stats ── */
        .smb-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 0;
          background: rgba(99,102,241,0.06);
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 1.5rem;
          padding: 3rem 2rem;
          margin-top: 4rem;
          text-align: center;
          animation: border-glow 4s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }
        .smb-stats::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(99,102,241,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .smb-stat {
          padding: 1rem;
          border-right: 1px solid rgba(99,102,241,0.12);
        }
        .smb-stat:last-child { border-right: none; }
        .smb-stat-value {
          font-family: 'Inter', sans-serif;
          font-size: clamp(2.5rem, 5vw, 3.75rem);
          font-weight: 900;
          letter-spacing: -0.05em;
          color: #6366f1;
          line-height: 1;
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 2px;
        }
        .smb-stat-suffix { color: #a5b4fc; font-size: 0.75em; }
        .smb-stat-label {
          font-size: 0.75rem;
          color: rgba(100,116,139,0.9);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        /* ── CTA Section ── */
        .smb-cta-section {
          max-width: 720px;
          margin: 0 auto;
          padding: 4rem 2rem 5.5rem;
          text-align: center;
        }
        .smb-cta-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(2.25rem, 4.5vw, 3.5rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: #f8fafc;
          margin-bottom: 0.75rem;
          animation: fade-up 0.7s cubic-bezier(0.23,1,0.32,1) both;
        }
        .smb-cta-sub {
          color: rgba(148,163,184,0.8);
          font-size: 1.05rem;
          margin-bottom: 2.75rem;
          line-height: 1.7;
          animation: fade-up 0.7s 0.1s cubic-bezier(0.23,1,0.32,1) both;
        }
        .smb-divider {
          border: none;
          border-top: 1px solid rgba(99,102,241,0.12);
          margin: 0 2rem;
        }
        .smb-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          color: rgba(71,85,105,0.8);
          font-size: 0.8rem;
        }
      `}</style>

      {/* Cursor glow effect */}
      <CursorGlow />

      <div className="smb-root">
        {/* Animated mesh gradient background */}
        <div className="smb-mesh" />

        <div className="smb-layer">
          {/* ── Glassmorphism Nav ── */}
          <nav className="smb-nav">
            <span className="smb-logo">MotionSaaS</span>
            <ul className="smb-nav-links">
              <li><a href="#">Product</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
            <a href="#" className="smb-btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
              Start Free
            </a>
          </nav>

          {/* ── Hero with Video Background ── */}
          <section className="smb-hero">
            {/* Pexels dark particles video */}
            <video
              className="smb-video"
              src={VIDEO_URL}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="smb-video-overlay" />

            {/* Corner accents */}
            <div className="smb-corner smb-corner-tl" />
            <div className="smb-corner smb-corner-tr" />
            <div className="smb-corner smb-corner-bl" />
            <div className="smb-corner smb-corner-br" />

            <div className="smb-hero-inner">
              <div className="smb-badge">
                <span>✦</span>
                <span>Ultra Premium Template #101</span>
              </div>

              {/* Dual typography headline */}
              <div className="smb-headline-wrap">
                <span className="smb-headline-sans" aria-hidden="true">
                  {"Build something".split("").map((char, i) => (
                    <span
                      key={i}
                      className="smb-char"
                      style={{ animationDelay: `${0.3 + i * 0.03}s` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span className="smb-headline-serif" aria-hidden="true">
                  {"that actually converts".split("").map((char, i) => (
                    <span
                      key={i}
                      className="smb-char"
                      style={{ animationDelay: `${0.75 + i * 0.03}s` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                {/* Screen reader text */}
                <span className="sr-only">Build something beautiful that actually converts</span>
              </div>

              <p className="smb-hero-sub">
                The SaaS infrastructure that top teams rely on. Deploy production-ready apps in minutes, not months.
              </p>

              <div className="smb-hero-ctas">
                <a href="#" className="smb-btn-primary">
                  Start Building Free →
                </a>
                <a href="#" className="smb-btn-ghost">
                  ▶ Watch Demo
                </a>
              </div>
            </div>
          </section>

          {/* ── Features ── */}
          <section className="smb-section">
            <p className="smb-section-eyebrow">Features</p>
            <h2 className="smb-section-title">Built for Scale</h2>
            <div className="smb-cards">
              {FEATURES.map((f) => (
                <TiltCard key={f.title} feature={f} />
              ))}
            </div>

            {/* ── Stats ── */}
            <div className="smb-stats">
              {STATS.map((s) => (
                <div key={s.label} className="smb-stat">
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

          {/* ── CTA Section ── */}
          <section className="smb-cta-section">
            <h2 className="smb-cta-title">Ready to Launch?</h2>
            <p className="smb-cta-sub">
              Join thousands of teams already shipping faster. No credit card required.
            </p>
            <a
              href="#"
              className="smb-btn-primary"
              style={{ fontSize: "1.1rem", padding: "1rem 2.75rem" }}
            >
              Get Started — It&apos;s Free
            </a>
          </section>

          {/* ── Footer ── */}
          <footer className="smb-footer">
            <span>© 2025 MotionSaaS, Inc.</span>
            <span>Made with Code Bonito ✨</span>
          </footer>
        </div>
      </div>
    </>
  );
}
