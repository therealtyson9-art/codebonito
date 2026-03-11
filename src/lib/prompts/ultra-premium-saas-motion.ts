/**
 * Ultra Premium Template #101 — SaaS Dark Motion
 * Blueprint-level prompt. Variables in [BRACKETS] → replace with your brand values.
 * Works in: Cursor · v0 · Bolt · Lovable
 * Stack: React 18 + Next.js 14 + Tailwind CSS v3 + TypeScript
 * Animations: CSS Keyframes + requestAnimationFrame (no external deps needed)
 */

export const ULTRA_PREMIUM_SAAS_MOTION_PROMPT = `
Build a high-end SaaS hero page for [BRAND_NAME] using React 18, Next.js 14, Tailwind CSS v3, and TypeScript. No external animation libraries required — all effects use CSS keyframes and vanilla JS with requestAnimationFrame.

---

## Stack & Fonts

\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Instrument+Serif:ital@1&display=swap" rel="stylesheet" />
\`\`\`

Primary font (headings, nav, body): \`font-family: 'Inter', sans-serif\`
Accent font (hero italic line): \`font-family: 'Instrument Serif', Georgia, serif; font-style: italic\`

---

## Color System

\`\`\`css
--bg-deep:     #050510;         /* Replace with [BACKGROUND_COLOR] */
--primary:     #6366f1;         /* Replace with [PRIMARY_COLOR] */
--primary-glow: rgba(99,102,241,0.35);
--text-main:   #f8fafc;
--text-muted:  #94a3b8;
--glass-bg:    rgba(255,255,255,0.05);
--glass-border: rgba(255,255,255,0.10);
\`\`\`

---

## Video Background

\`\`\`jsx
{/* Fullscreen dark particles video — royalty-free from Pexels */}
<video
  src="[VIDEO_URL]"
  autoPlay muted loop playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
/>
{/* Gradient overlay: transparent top → full bg-deep bottom */}
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050510]/60 to-[#050510]" />
\`\`\`

Use Pexels CDN for video (free, no attribution required for prompts):
\`https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_25fps.mp4\`

Replace [VIDEO_URL] with any dark abstract MP4 from pexels.com/videos.

---

## Glassmorphism Navbar

\`\`\`jsx
<nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl
  bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3
  flex items-center justify-between">
  <span className="font-black text-lg tracking-tight text-white">[BRAND_NAME]</span>
  <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
    {['Features', 'Pricing', 'Docs'].map(item => (
      <a key={item} href="#" className="hover:text-white transition-colors duration-200">{item}</a>
    ))}
  </div>
  {/* CTA with glow */}
  <div className="relative group">
    <div className="absolute inset-0 rounded-full bg-[#6366f1] blur-lg opacity-30
      group-hover:opacity-60 transition-opacity duration-300" />
    <button className="relative rounded-full px-5 py-2.5 text-sm font-semibold text-white
      bg-[#6366f1] hover:bg-[#5558e8] transition-colors duration-200
      shadow-[0_0_0_1.5px_rgba(99,102,241,0.4)]">
      [CTA_TEXT] →
    </button>
  </div>
</nav>
\`\`\`

---

## Hero Section — Dual Typography + Corner Accents

\`\`\`jsx
<section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[#050510]">

  {/* Corner accents — 8×8px indigo squares */}
  {['-top-0 -left-0', '-top-0 -right-0', '-bottom-0 -left-0', '-bottom-0 -right-0'].map((pos, i) => (
    <div key={i} className={\`absolute \${pos} w-2 h-2 bg-[#6366f1]/60\`} />
  ))}

  {/* Video + overlay */}
  <video src="[VIDEO_URL]" autoPlay muted loop playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none" />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050510]/60 to-[#050510]" />

  {/* Content */}
  <div className="relative z-10 text-center max-w-4xl mx-auto">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8
      bg-white/5 border border-white/10 text-white/60 text-xs font-medium tracking-widest uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse" />
      [BADGE_TEXT]
    </div>

    {/* Headline — dual typography */}
    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-[-0.04em] text-white leading-none mb-2">
      [HEADLINE_LINE_1]
    </h1>
    <h1 className="text-5xl md:text-7xl tracking-[-0.02em] text-white/90 leading-none mb-8"
      style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: 'italic' }}>
      [HEADLINE_LINE_2]
    </h1>

    {/* Subheading */}
    <p className="text-lg md:text-xl text-white/50 font-medium max-w-xl mx-auto mb-10">
      [SUBHEADLINE]
    </p>

    {/* CTA button with shimmer */}
    <div className="relative group inline-block">
      <div className="absolute inset-0 rounded-full bg-[#6366f1] blur-xl opacity-40
        group-hover:opacity-70 transition-opacity duration-300" />
      <button className="relative overflow-hidden rounded-full px-8 py-4 text-base font-bold text-white
        bg-[#6366f1] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_30px_rgba(99,102,241,0.5)]
        hover:bg-[#5558e8] active:scale-95 transition-all duration-200">
        {/* Shimmer effect */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          transition-transform duration-700 ease-in-out pointer-events-none" />
        [CTA_TEXT]
        <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200">→</span>
      </button>
    </div>

  </div>
</section>
\`\`\`

---

## Feature Cards — 3D Tilt + Cursor Glow

Each card responds to mouse position with 3D perspective tilt and an inner glow that follows the cursor.

\`\`\`jsx
// Add this hook to your component:
function useTilt(ref, glowRef) {
  useEffect(() => {
    const card = ref.current;
    const glow = glowRef.current;
    let raf;
    const onMove = (e) => {
      raf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rx = -(y - 0.5) * 12; // max 12° tilt
        const ry = (x - 0.5) * 12;
        card.style.transform = \`perspective(800px) rotateX(\${rx}deg) rotateY(\${ry}deg) scale(1.02)\`;
        glow.style.background = \`radial-gradient(circle at \${x * 100}% \${y * 100}%, rgba([PRIMARY_RGB],0.25) 0%, transparent 60%)\`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
      glow.style.background = 'transparent';
    };
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    return () => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave); };
  }, []);
}

// Card markup:
<div ref={cardRef} className="relative rounded-2xl p-6 cursor-default
  bg-white/5 border border-white/10
  transition-transform duration-100 ease-out"
  style={{ willChange: 'transform' }}>
  {/* Inner cursor glow */}
  <div ref={glowRef} className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300" />
  <div className="relative z-10">
    <div className="text-3xl mb-4">[ICON]</div>
    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">[FEATURE_TITLE]</h3>
    <p className="text-sm text-white/50 leading-relaxed">[FEATURE_DESC]</p>
  </div>
</div>
\`\`\`

---

## Animated Stats Counter

Numbers count up from 0 when they enter the viewport (Intersection Observer + requestAnimationFrame).

\`\`\`jsx
function useCounter(target, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        // Cubic ease-out: [0.23, 1, 0.32, 1]
        const eased = 1 - Math.pow(1 - progress, 4);
        setValue(Math.floor(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
        else setValue(target);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.3 });
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return { ref, value };
}

// Usage:
<div ref={counter.ref} className="text-5xl font-black text-white tabular-nums">
  {counter.value.toLocaleString()}[SUFFIX]
</div>
<p className="text-sm text-white/50 mt-1">[STAT_LABEL]</p>
\`\`\`

---

## Required CSS Keyframes (globals.css)

\`\`\`css
@keyframes blur-in {
  from { opacity: 0; filter: blur(12px); transform: translateY(16px); }
  to   { opacity: 1; filter: blur(0);    transform: translateY(0); }
}
@keyframes shimmer-slide {
  from { transform: translateX(-100%); }
  to   { transform: translateX(200%); }
}
@keyframes mesh-move {
  0%, 100% { background-position: 0% 50%; }
  50%       { background-position: 100% 50%; }
}
.animate-blur-in {
  animation: blur-in 0.7s cubic-bezier(0.23, 1, 0.32, 1) both;
}
.animate-blur-in-delay-1 { animation-delay: 0.1s; }
.animate-blur-in-delay-2 { animation-delay: 0.2s; }
.animate-blur-in-delay-3 { animation-delay: 0.35s; }
.animate-blur-in-delay-4 { animation-delay: 0.5s; }
\`\`\`

---

## Variables to Replace

| Variable | Example |
|---|---|
| \`[BRAND_NAME]\` | Acme Inc |
| \`[HEADLINE_LINE_1]\` | Ship faster. |
| \`[HEADLINE_LINE_2]\` | without the chaos. |
| \`[SUBHEADLINE]\` | The platform that turns ideas into products in days, not months. |
| \`[CTA_TEXT]\` | Start for free |
| \`[BADGE_TEXT]\` | Now in public beta |
| \`[VIDEO_URL]\` | https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_25fps.mp4 |
| \`[PRIMARY_COLOR]\` | #6366f1 |
| \`[PRIMARY_RGB]\` | 99,102,241 |
| \`[BACKGROUND_COLOR]\` | #050510 |
| \`[ICON]\` | ⚡ |
| \`[FEATURE_TITLE]\` | Instant deploys |
| \`[FEATURE_DESC]\` | Push to main and your changes go live in under 30 seconds. |
| \`[STAT_LABEL]\` | Active users |
| \`[SUFFIX]\` | K+ |

---

## Platform-Specific Notes

**Cursor / Claude Code:** Paste prompt as-is. The AI will implement all hooks and CSS.
**v0 (Vercel):** Paste prompt. v0 supports Tailwind and inline styles natively. Remove \`'use client'\` if using App Router server components for outer layout.
**Bolt:** Works as-is. Bolt handles React hooks and Tailwind without config.
**Lovable:** Paste prompt. If video background breaks preview, replace with a static dark gradient (\`bg-gradient-to-br from-[#050510] via-[#0a0a1a] to-[#050510]\`) for the editor — video plays fine in production.

---

*Template by Code Bonito — codebonito.com*
`;
