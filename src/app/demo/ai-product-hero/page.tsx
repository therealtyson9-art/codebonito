"use client";

import { useEffect, useRef, useCallback, useState } from "react";

/* ─── Types ──────────────────────────────────────────────────────── */
interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

interface BentoFeature {
  icon: string;
  title: string;
  desc: string;
  span: string; // grid span class
}

/* ─── Data ───────────────────────────────────────────────────────── */
const BRAND = "NeuralAPI";
const PRIMARY = "#6366f1";
const HEADLINE = "Build Intelligence";
const SUBHEADLINE = "Ship AI products at the speed of thought";
const CTA_TEXT = "Get API Key";

const FEATURES: BentoFeature[] = [
  {
    icon: "🧠",
    title: "Foundation Models",
    desc: "Access GPT-4, Claude, and 20+ models through a single unified API. Automatic fallback and load balancing included.",
    span: "span-2-1",
  },
  {
    icon: "⚡",
    title: "Sub-50ms Latency",
    desc: "Edge-deployed inference with global PoPs. Your users never wait.",
    span: "span-1-1",
  },
  {
    icon: "🔐",
    title: "Enterprise Security",
    desc: "SOC 2 Type II, HIPAA compliant. End-to-end encryption with zero data retention.",
    span: "span-1-1",
  },
  {
    icon: "📊",
    title: "Observability",
    desc: "Real-time dashboards, cost tracking, and prompt analytics. See every token, every request, every anomaly.",
    span: "span-1-2",
  },
  {
    icon: "🔄",
    title: "Auto-Scaling",
    desc: "From 0 to 1M requests with zero config. Scale down to zero when idle.",
    span: "span-1-1",
  },
];

const STATS: StatItem[] = [
  { value: 2400000, suffix: "", label: "Requests / Day" },
  { value: 47, suffix: "ms", label: "Avg Latency" },
  { value: 99.99, suffix: "%", label: "Uptime" },
];

const CODE_LINES = [
  { text: "const ", color: "#c678dd" },
  { text: "response", color: "#e5c07b" },
  { text: " = ", color: "#abb2bf" },
  { text: "await ", color: "#c678dd" },
  { text: "neural", color: "#61afef" },
  { text: ".", color: "#abb2bf" },
  { text: "chat", color: "#61afef" },
  { text: ".", color: "#abb2bf" },
  { text: "create", color: "#98c379" },
  { text: "({", color: "#abb2bf" },
];

const CODE_BODY = `  model: "neural-4-turbo",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Explain quantum computing." }
  ],
  temperature: 0.7,
  max_tokens: 1024,
`;

const CODE_CLOSE = "});";

const TESTIMONIALS = [
  { quote: "NeuralAPI cut our inference costs by 60% while improving latency. The unified API is a game-changer.", author: "Sarah Chen", role: "CTO", company: "Luminary AI" },
  { quote: "We migrated from three different providers to NeuralAPI in a weekend. Haven't looked back.", author: "Marcus Rivera", role: "Lead Engineer", company: "Synthwave" },
  { quote: "The observability dashboard alone is worth it. We finally understand our AI spend.", author: "Aiko Tanaka", role: "VP Engineering", company: "DataForge" },
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
          const duration = 2200;
          const start = performance.now();
          const isDecimal = target % 1 !== 0;

          function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = eased * target;
            if (el) {
              if (isDecimal) {
                el.textContent = current.toFixed(2);
              } else if (target >= 1000000) {
                el.textContent = (current / 1000000).toFixed(1) + "M";
              } else if (target >= 1000) {
                el.textContent = Math.floor(current).toLocaleString();
              } else {
                el.textContent = Math.floor(current).toString();
              }
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

/* ─── Typing Code Block ──────────────────────────────────────────── */
function TypingCodeBlock() {
  const [visibleChars, setVisibleChars] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  const fullCode = CODE_LINES.map((t) => t.text).join("") + "\n" + CODE_BODY + CODE_CLOSE;
  const totalChars = fullCode.length;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let i = 0;
          const interval = setInterval(() => {
            i += 1;
            setVisibleChars(i);
            if (i >= totalChars) clearInterval(interval);
          }, 22);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [totalChars]);

  // Build the visible code with syntax highlighting
  const renderCode = () => {
    let charIndex = 0;
    const elements: React.ReactNode[] = [];

    // First line (colored tokens)
    for (let i = 0; i < CODE_LINES.length; i++) {
      const token = CODE_LINES[i];
      const tokenStart = charIndex;
      const tokenEnd = charIndex + token.text.length;
      if (tokenStart >= visibleChars) break;
      const visibleText = token.text.substring(0, Math.max(0, visibleChars - tokenStart));
      elements.push(
        <span key={`t${i}`} style={{ color: token.color }}>
          {visibleText}
        </span>
      );
      charIndex = tokenEnd;
    }

    // Body + close
    const restStart = charIndex;
    const bodyAndClose = "\n" + CODE_BODY + CODE_CLOSE;
    if (visibleChars > restStart) {
      const visibleRest = bodyAndClose.substring(0, visibleChars - restStart);
      // Simple highlighting for the body
      const highlighted = visibleRest.replace(
        /(".*?")/g,
        '<span style="color:#98c379">$1</span>'
      ).replace(
        /(model|messages|role|content|temperature|max_tokens)/g,
        '<span style="color:#e5c07b">$1</span>'
      ).replace(
        /(0\.7|1024)/g,
        '<span style="color:#d19a66">$1</span>'
      );
      elements.push(
        <span key="body" dangerouslySetInnerHTML={{ __html: highlighted }} />
      );
    }

    return elements;
  };

  return (
    <div ref={containerRef} className="aph-terminal">
      <div className="aph-terminal-bar">
        <div className="aph-terminal-dot" style={{ background: "#ff5f57" }} />
        <div className="aph-terminal-dot" style={{ background: "#febc2e" }} />
        <div className="aph-terminal-dot" style={{ background: "#28c840" }} />
        <span className="aph-terminal-title">api-request.ts</span>
      </div>
      <pre className="aph-terminal-body">
        <code>{renderCode()}<span className="aph-cursor">▊</span></code>
      </pre>
    </div>
  );
}

/* ─── Scroll Fade-In Observer ────────────────────────────────────── */
function FadeInSection({ children, delay = 0, className = "" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
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
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Morphing Text ──────────────────────────────────────────────── */
function MorphingText() {
  const words = ["NeuralAPI", "Intelligence", "The Future", "Everything"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="aph-morph-container">
      {words.map((word, i) => (
        <span
          key={word}
          className="aph-morph-word"
          style={{
            opacity: i === index ? 1 : 0,
            transform: i === index ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            filter: i === index ? "blur(0px)" : "blur(8px)",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

/* ─── Dot Grid Background ───────────────────────────────────────── */
function DotGrid() {
  return (
    <div className="aph-dotgrid" aria-hidden="true">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(99,102,241,0.15)" />
          </pattern>
          <radialGradient id="dotFade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="dotMask">
            <rect width="100%" height="100%" fill="url(#dotFade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" mask="url(#dotMask)" />
      </svg>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────── */
export default function AIProductHeroPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax glow on mouse move
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const hero = heroRef.current;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    hero.style.setProperty("--glow-x", `${x}%`);
    hero.style.setProperty("--glow-y", `${y}%`);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Keyframes ── */
        @keyframes aph-fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes aph-blur-in {
          from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0px); }
        }
        @keyframes aph-shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes aph-pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99,102,241,0.3), 0 0 60px rgba(99,102,241,0.1); }
          50%      { box-shadow: 0 0 30px rgba(99,102,241,0.5), 0 0 80px rgba(99,102,241,0.2); }
        }
        @keyframes aph-float {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes aph-blink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        @keyframes aph-gradient-shift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes aph-border-glow {
          0%, 100% { border-color: rgba(99,102,241,0.1); }
          50%      { border-color: rgba(99,102,241,0.3); }
        }
        @keyframes aph-scan-line {
          0%   { top: -2px; }
          100% { top: 100%; }
        }

        /* ── Root ── */
        .aph-root {
          min-height: 100vh;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: #e2e8f0;
          overflow-x: hidden;
          background: #050510;
        }

        /* ── Nav ── */
        .aph-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0.75rem auto 0;
          background: rgba(5, 5, 16, 0.6);
          backdrop-filter: blur(24px) saturate(1.5);
          -webkit-backdrop-filter: blur(24px) saturate(1.5);
          border: 1px solid rgba(99,102,241,0.08);
          border-radius: 16px;
          animation: aph-fade-up 0.5s cubic-bezier(0.23,1,0.32,1) both;
        }
        .aph-nav-logo {
          font-weight: 900;
          font-size: 1.125rem;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, #818cf8, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .aph-nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .aph-nav-links a {
          color: rgba(148,163,184,0.7);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s ease;
          letter-spacing: -0.01em;
        }
        .aph-nav-links a:hover { color: #f1f5f9; }
        .aph-nav-cta {
          background: #6366f1;
          color: white;
          border: none;
          border-radius: 9999px;
          padding: 0.5rem 1.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.23,1,0.32,1);
          letter-spacing: -0.01em;
        }
        .aph-nav-cta:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(99,102,241,0.4);
        }

        /* ── Hero ── */
        .aph-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          padding: 6rem 2rem 4rem;
        }
        .aph-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at var(--glow-x, 50%) var(--glow-y, 50%),
            rgba(99,102,241,0.12) 0%,
            transparent 50%
          );
          pointer-events: none;
          transition: background 0.3s ease;
        }

        .aph-dotgrid {
          position: absolute;
          inset: 0;
          opacity: 0.6;
          pointer-events: none;
        }

        .aph-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99,102,241,0.08);
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 9999px;
          padding: 0.375rem 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #a5b4fc;
          margin-bottom: 2.5rem;
          animation: aph-blur-in 0.6s cubic-bezier(0.23,1,0.32,1) 0.2s both;
        }
        .aph-hero-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          animation: aph-pulse-glow 2s ease-in-out infinite;
          box-shadow: 0 0 8px rgba(34,197,94,0.5);
        }

        .aph-headline {
          font-weight: 900;
          font-size: clamp(3rem, 8vw, 6rem);
          letter-spacing: -0.05em;
          line-height: 1.0;
          color: #f8fafc;
          margin-bottom: 0.25rem;
          animation: aph-blur-in 0.7s cubic-bezier(0.23,1,0.32,1) 0.4s both;
        }

        .aph-headline-gradient {
          background: linear-gradient(135deg, #f8fafc 0%, #818cf8 50%, #6366f1 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: aph-gradient-shift 6s ease-in-out infinite, aph-blur-in 0.7s cubic-bezier(0.23,1,0.32,1) 0.4s both;
        }

        .aph-subheadline {
          font-weight: 400;
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          color: rgba(148,163,184,0.8);
          max-width: 600px;
          margin: 1.5rem auto 0;
          line-height: 1.5;
          letter-spacing: -0.02em;
          animation: aph-blur-in 0.6s cubic-bezier(0.23,1,0.32,1) 0.7s both;
        }

        .aph-morph-container {
          position: relative;
          display: inline-block;
          min-width: 280px;
          height: 1.1em;
          vertical-align: bottom;
        }
        .aph-morph-word {
          position: absolute;
          left: 0;
          right: 0;
          transition: all 0.6s cubic-bezier(0.23,1,0.32,1);
          background: linear-gradient(135deg, #818cf8, #a78bfa, #c4b5fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── CTA ── */
        .aph-cta-group {
          display: flex;
          gap: 1rem;
          margin-top: 2.5rem;
          animation: aph-fade-up 0.6s cubic-bezier(0.23,1,0.32,1) 1s both;
        }
        .aph-cta-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #6366f1;
          color: white;
          border: none;
          border-radius: 9999px;
          padding: 0.875rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.25s cubic-bezier(0.23,1,0.32,1);
          animation: aph-pulse-glow 3s ease-in-out infinite;
          letter-spacing: -0.01em;
        }
        .aph-cta-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 0 50px rgba(99,102,241,0.5);
        }
        .aph-cta-primary::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: aph-shimmer 3s ease-in-out infinite;
        }
        .aph-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: rgba(148,163,184,0.9);
          border: 1px solid rgba(99,102,241,0.2);
          border-radius: 9999px;
          padding: 0.875rem 2rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.23,1,0.32,1);
          letter-spacing: -0.01em;
        }
        .aph-cta-secondary:hover {
          border-color: rgba(99,102,241,0.5);
          color: #f1f5f9;
          background: rgba(99,102,241,0.05);
        }

        /* ── Bento Grid ── */
        .aph-bento {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(200px, auto);
          gap: 1rem;
        }
        .aph-bento-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(99,102,241,0.08);
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .aph-bento-card:hover {
          border-color: rgba(99,102,241,0.3);
          background: rgba(99,102,241,0.05);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(99,102,241,0.1), 0 0 0 1px rgba(99,102,241,0.15);
        }
        .aph-bento-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .aph-bento-card:hover::before { opacity: 1; }
        .span-2-1 { grid-column: span 2; }
        .span-1-2 { grid-row: span 2; }
        .aph-bento-icon {
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }
        .aph-bento-title {
          font-weight: 700;
          font-size: 1.125rem;
          color: #f1f5f9;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .aph-bento-desc {
          font-size: 0.875rem;
          color: rgba(148,163,184,0.65);
          line-height: 1.6;
        }

        /* ── Terminal ── */
        .aph-terminal {
          max-width: 680px;
          margin: 0 auto;
          background: rgba(10,10,25,0.9);
          border: 1px solid rgba(99,102,241,0.15);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.1);
          position: relative;
        }
        .aph-terminal::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent);
          animation: aph-scan-line 4s linear infinite;
          pointer-events: none;
          opacity: 0.3;
        }
        .aph-terminal-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0.75rem 1rem;
          background: rgba(255,255,255,0.03);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .aph-terminal-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .aph-terminal-title {
          margin-left: auto;
          font-size: 0.75rem;
          color: rgba(148,163,184,0.5);
          font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
        }
        .aph-terminal-body {
          padding: 1.5rem;
          font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
          font-size: 0.85rem;
          line-height: 1.7;
          color: #abb2bf;
          overflow-x: auto;
          min-height: 200px;
          white-space: pre;
          tab-size: 2;
        }
        .aph-cursor {
          color: #6366f1;
          animation: aph-blink 1s step-end infinite;
        }

        /* ── Stats ── */
        .aph-stats {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          gap: 4rem;
          padding: 0 2rem;
        }
        .aph-stat {
          text-align: center;
        }
        .aph-stat-value {
          font-weight: 900;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          color: #f8fafc;
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .aph-stat-suffix {
          color: #818cf8;
        }
        .aph-stat-label {
          font-size: 0.8rem;
          color: rgba(148,163,184,0.5);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-top: 0.75rem;
          font-weight: 500;
        }

        /* ── Testimonials ── */
        .aph-testimonials {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          padding: 0 2rem;
        }
        .aph-testimonial {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(99,102,241,0.06);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }
        .aph-testimonial:hover {
          border-color: rgba(99,102,241,0.15);
          background: rgba(99,102,241,0.03);
        }
        .aph-testimonial-quote {
          font-size: 0.95rem;
          color: rgba(148,163,184,0.75);
          line-height: 1.65;
          margin-bottom: 1.5rem;
          font-style: italic;
        }
        .aph-testimonial-author {
          font-weight: 700;
          font-size: 0.875rem;
          color: #f1f5f9;
          letter-spacing: -0.01em;
        }
        .aph-testimonial-role {
          font-size: 0.8rem;
          color: rgba(148,163,184,0.45);
          margin-top: 0.125rem;
        }
        .aph-testimonial-company {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 28px;
          background: rgba(99,102,241,0.08);
          border-radius: 6px;
          margin-top: 1rem;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: rgba(99,102,241,0.5);
          text-transform: uppercase;
        }

        /* ── Section headers ── */
        .aph-section-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #818cf8;
          margin-bottom: 1rem;
        }
        .aph-section-tag::before {
          content: '';
          width: 20px;
          height: 1px;
          background: #818cf8;
        }
        .aph-section-title {
          font-weight: 900;
          font-size: clamp(2rem, 4vw, 3rem);
          letter-spacing: -0.04em;
          color: #f8fafc;
          margin-bottom: 1rem;
          line-height: 1.1;
        }
        .aph-section-sub {
          font-size: 1.05rem;
          color: rgba(148,163,184,0.6);
          max-width: 550px;
          margin: 0 auto 4rem;
          line-height: 1.6;
        }

        /* ── Footer ── */
        .aph-footer {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .aph-footer-logo {
          font-weight: 900;
          font-size: 1rem;
          letter-spacing: -0.04em;
          background: linear-gradient(135deg, #818cf8, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .aph-footer-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .aph-footer-links a {
          font-size: 0.8rem;
          color: rgba(148,163,184,0.5);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .aph-footer-links a:hover { color: #f1f5f9; }
        .aph-footer-copy {
          font-size: 0.75rem;
          color: rgba(148,163,184,0.3);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .aph-bento {
            grid-template-columns: 1fr;
          }
          .span-2-1, .span-1-2 {
            grid-column: span 1;
            grid-row: span 1;
          }
          .aph-stats {
            flex-direction: column;
            gap: 2rem;
          }
          .aph-testimonials {
            grid-template-columns: 1fr;
          }
          .aph-nav-links { display: none; }
          .aph-footer {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>

      <div className="aph-root">
        {/* ── Navbar ── */}
        <nav className="aph-nav">
          <div className="aph-nav-logo">{BRAND}</div>
          <ul className="aph-nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#api">API</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#docs">Docs</a></li>
          </ul>
          <button className="aph-nav-cta">{CTA_TEXT}</button>
        </nav>

        {/* ── Hero ── */}
        <section className="aph-hero" ref={heroRef}>
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
            src="/videos/particles-blue.mp4"
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
          <DotGrid />
          <div style={{ position: "relative", zIndex: 2, maxWidth: 800, margin: "0 auto" }}>
            <div className="aph-hero-badge">
              <span className="aph-hero-badge-dot" />
              API Status: All Systems Operational
            </div>

            <h1 className="aph-headline aph-headline-gradient">
              {HEADLINE}{" "}
              <MorphingText />
            </h1>

            <p className="aph-subheadline">{SUBHEADLINE}</p>

            <div className="aph-cta-group">
              <button className="aph-cta-primary">
                {CTA_TEXT} →
              </button>
              <button className="aph-cta-secondary">
                Read Docs
              </button>
            </div>

            {/* Trusted by logos */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "3rem",
              opacity: 0,
              animation: "aph-fade-up 0.6s cubic-bezier(0.23,1,0.32,1) 1.3s both",
            }}>
              {["Vercel", "Stripe", "Linear", "Notion", "Figma"].map((name) => (
                <div key={name} style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "rgba(148,163,184,0.3)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features Bento ── */}
        <section id="features" style={{ padding: "8rem 0 4rem", textAlign: "center" }}>
          <FadeInSection>
            <div className="aph-section-tag">Features</div>
            <h2 className="aph-section-title">Everything you need to ship AI</h2>
            <p className="aph-section-sub">
              One API to access every major model. Built-in caching, rate limiting, fallbacks, and observability.
            </p>
          </FadeInSection>

          <div className="aph-bento">
            {FEATURES.map((f, i) => (
              <FadeInSection key={f.title} delay={i * 0.1} className={`aph-bento-card ${f.span}`}>
                <div className="aph-bento-icon">{f.icon}</div>
                <div className="aph-bento-title">{f.title}</div>
                <div className="aph-bento-desc">{f.desc}</div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* ── API / Code Showcase ── */}
        <section id="api" style={{ padding: "6rem 0", textAlign: "center" }}>
          <FadeInSection>
            <div className="aph-section-tag">Developer Experience</div>
            <h2 className="aph-section-title">Three lines to intelligence</h2>
            <p className="aph-section-sub">
              Drop-in replacement for OpenAI SDK. Migrate in minutes, not months.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <TypingCodeBlock />
          </FadeInSection>
        </section>

        {/* ── Stats ── */}
        <section style={{ padding: "6rem 0", textAlign: "center" }}>
          <FadeInSection>
            <div className="aph-section-tag">Scale</div>
            <h2 className="aph-section-title">Built for production</h2>
            <p className="aph-section-sub">
              Trusted by startups and enterprises processing millions of requests daily.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <div className="aph-stats">
              {STATS.map((stat) => (
                <div key={stat.label} className="aph-stat">
                  <div className="aph-stat-value">
                    <StatCounter stat={stat} />
                    <span className="aph-stat-suffix">{stat.suffix}</span>
                  </div>
                  <div className="aph-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* ── Testimonials ── */}
        <section style={{ padding: "6rem 0", textAlign: "center" }}>
          <FadeInSection>
            <div className="aph-section-tag">Testimonials</div>
            <h2 className="aph-section-title">Loved by engineers</h2>
          </FadeInSection>
          <div className="aph-testimonials">
            {TESTIMONIALS.map((t, i) => (
              <FadeInSection key={t.author} delay={i * 0.12}>
                <div className="aph-testimonial">
                  <p className="aph-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                  <div className="aph-testimonial-author">{t.author}</div>
                  <div className="aph-testimonial-role">{t.role}</div>
                  <div className="aph-testimonial-company">{t.company}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section style={{ padding: "6rem 0", textAlign: "center" }}>
          <FadeInSection>
            <div style={{
              maxWidth: 700,
              margin: "0 auto",
              padding: "4rem 2rem",
              background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.05) 100%)",
              border: "1px solid rgba(99,102,241,0.12)",
              borderRadius: 24,
            }}>
              <h2 style={{
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                letterSpacing: "-0.04em",
                color: "#f8fafc",
                marginBottom: "1rem",
              }}>
                Start building today
              </h2>
              <p style={{
                fontSize: "1rem",
                color: "rgba(148,163,184,0.6)",
                marginBottom: "2rem",
                maxWidth: 450,
                margin: "0 auto 2rem",
                lineHeight: 1.6,
              }}>
                Free tier includes 10K requests/month. No credit card required.
              </p>
              <button className="aph-cta-primary" style={{ animationDelay: "0s" }}>
                {CTA_TEXT} — It&apos;s Free →
              </button>
            </div>
          </FadeInSection>
        </section>

        {/* ── Footer ── */}
        <footer style={{ padding: "2rem 0 3rem" }}>
          <div className="aph-footer">
            <div className="aph-footer-logo">{BRAND}</div>
            <ul className="aph-footer-links">
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#status">Status</a></li>
              <li><a href="#github">GitHub</a></li>
            </ul>
            <span className="aph-footer-copy">© 2024 {BRAND}. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </>
  );
}
