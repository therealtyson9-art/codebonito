"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Constants ──────────────────────────────────────────────────── */
const BRAND_NAME = "Atelier";
const PRIMARY_COLOR = "#F5F0EB";
const ACCENT_COLOR = "#C9A96E";

const TAGLINES = [
  "We craft digital experiences.",
  "We build brand identities.",
  "We shape the future.",
  "We design with intent.",
];

const PROJECTS = [
  { name: "Meridian", category: "Branding", aspect: "16 / 9", bg: "#1A1A1A" },
  { name: "Solstice", category: "Web Design", aspect: "1 / 1", bg: "#151515" },
  { name: "Dusk & Co", category: "Strategy", aspect: "4 / 3", bg: "#1C1816" },
  { name: "Aether", category: "Development", aspect: "1 / 1", bg: "#12120F" },
  { name: "Luminar", category: "Identity", aspect: "16 / 9", bg: "#181614" },
  { name: "Obsidian", category: "Campaign", aspect: "4 / 3", bg: "#141414" },
];

const MARQUEE_TEXT =
  "BRANDING · DESIGN · DEVELOPMENT · STRATEGY · BRANDING · DESIGN · DEVELOPMENT · STRATEGY · ";

const NAV_LINKS = ["Work", "About", "Services", "Contact"];

/* ─── Hook: Mouse follower ───────────────────────────────────────── */
function useMouseFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [visible]);

  return { pos, visible };
}

/* ─── Hook: Scroll reveal ────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, revealed };
}

/* ─── Hook: Counter animation ────────────────────────────────────── */
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const { ref, revealed } = useReveal(0.3);

  useEffect(() => {
    if (!revealed) return;
    let start = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [revealed, target, duration]);

  return { ref, count };
}

/* ─── Component: Navbar ──────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "24px 48px",
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "background 0.4s cubic-bezier(0.23,1,0.32,1), backdrop-filter 0.4s",
        borderBottom: scrolled ? "1px solid rgba(245,240,235,0.06)" : "1px solid transparent",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "24px",
          fontWeight: 700,
          color: PRIMARY_COLOR,
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        {BRAND_NAME}
      </a>

      <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "13px",
              fontWeight: 400,
              color: "rgba(245,240,235,0.5)",
              textDecoration: "none",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY_COLOR)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(245,240,235,0.5)")
            }
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ─── Component: Mouse Follower ──────────────────────────────────── */
function MouseFollower() {
  const { pos, visible } = useMouseFollower();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: `1px solid ${ACCENT_COLOR}`,
        pointerEvents: "none",
        zIndex: 9999,
        transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
        opacity: visible ? 0.6 : 0,
        transition: "transform 0.15s cubic-bezier(0.23,1,0.32,1), opacity 0.3s ease",
        mixBlendMode: "difference",
      }}
    />
  );
}

/* ─── Component: Hero ────────────────────────────────────────────── */
function Hero() {
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [clipReveal, setClipReveal] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setClipReveal(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIdx((i) => (i + 1) % TAGLINES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="work"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "80px",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        {/* Left: Brand name in massive serif */}
        <div>
          <div
            style={{
              overflow: "hidden",
            }}
          >
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(64px, 9vw, 120px)",
                fontWeight: 700,
                color: PRIMARY_COLOR,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                margin: 0,
                clipPath: clipReveal
                  ? "inset(0 0 0 0)"
                  : "inset(0 0 100% 0)",
                transition:
                  "clip-path 1s cubic-bezier(0.77, 0, 0.175, 1)",
              }}
            >
              {BRAND_NAME}
            </h1>
          </div>
          <div style={{ overflow: "hidden", marginTop: "8px" }}>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "rgba(245,240,235,0.35)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                margin: 0,
                clipPath: clipReveal
                  ? "inset(0 0 0 0)"
                  : "inset(0 0 100% 0)",
                transition:
                  "clip-path 1s cubic-bezier(0.77, 0, 0.175, 1) 0.3s",
              }}
            >
              Creative Studio — Est. 2009
            </p>
          </div>
        </div>

        {/* Right: Rotating tagline */}
        <div
          style={{
            position: "relative",
            height: "80px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {TAGLINES.map((line, i) => (
            <p
              key={line}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontStyle: "italic",
                fontWeight: 400,
                color: ACCENT_COLOR,
                margin: 0,
                position: "absolute",
                whiteSpace: "nowrap",
                opacity: taglineIdx === i ? 1 : 0,
                transform:
                  taglineIdx === i
                    ? "translateY(0)"
                    : "translateY(20px)",
                transition:
                  "opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)",
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "48px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(245,240,235,0.25)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: `linear-gradient(to bottom, ${ACCENT_COLOR}, transparent)`,
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}

/* ─── Component: Portfolio Grid ──────────────────────────────────── */
function PortfolioGrid() {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section
      ref={ref}
      style={{
        padding: "120px 48px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "64px",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700,
            color: PRIMARY_COLOR,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            clipPath: revealed ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
            transition: "clip-path 0.8s cubic-bezier(0.77,0,0.175,1)",
          }}
        >
          Selected
          <br />
          Work
        </h2>
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "12px",
            color: "rgba(245,240,235,0.35)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: revealed ? 1 : 0,
            transition: "opacity 0.6s ease 0.4s",
          }}
        >
          2020 — Present
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={i}
            parentRevealed={revealed}
          />
        ))}
      </div>
    </section>
  );
}

/* ─── Component: Project Card ────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  parentRevealed,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  parentRevealed: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        aspectRatio: project.aspect,
        background: project.bg,
        borderRadius: "4px",
        overflow: "hidden",
        cursor: "pointer",
        opacity: parentRevealed ? 1 : 0,
        transform: parentRevealed ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${index * 0.12}s, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${index * 0.12}s`,
      }}
    >
      {/* Faux project image — gradient placeholder */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${project.bg} 0%, rgba(201,169,110,0.08) 100%)`,
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "rgba(10,10,10,0.7)"
            : "rgba(10,10,10,0.3)",
          transition: "background 0.4s ease",
        }}
      />

      {/* Project info */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "32px",
          right: "32px",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: ACCENT_COLOR,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(8px)",
            transition:
              "opacity 0.4s ease, transform 0.4s cubic-bezier(0.23,1,0.32,1)",
            display: "block",
            marginBottom: "8px",
          }}
        >
          {project.category}
        </span>
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(24px, 2.5vw, 36px)",
            fontWeight: 700,
            color: PRIMARY_COLOR,
            margin: 0,
            opacity: hovered ? 1 : 0.6,
            transform: hovered ? "translateY(0)" : "translateY(4px)",
            transition:
              "opacity 0.4s ease 0.05s, transform 0.4s cubic-bezier(0.23,1,0.32,1) 0.05s",
          }}
        >
          {project.name}
        </h3>
      </div>

      {/* Arrow indicator */}
      <div
        style={{
          position: "absolute",
          top: "24px",
          right: "24px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: `1px solid rgba(245,240,235,${hovered ? "0.3" : "0"})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1)" : "scale(0.8)",
          transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          style={{ color: PRIMARY_COLOR }}
        >
          <path
            d="M1 13L13 1M13 1H5M13 1V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

/* ─── Component: About Section ───────────────────────────────────── */
function AboutSection() {
  const yearsCounter = useCounter(15, 2000);
  const projectsCounter = useCounter(200, 2500);
  const awardsCounter = useCounter(34, 1800);
  const { ref, revealed } = useReveal(0.2);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "160px 48px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "120px",
          alignItems: "start",
        }}
      >
        {/* Left: Numbers */}
        <div>
          <div
            ref={yearsCounter.ref}
            style={{
              borderTop: `1px solid rgba(245,240,235,0.1)`,
              paddingTop: "32px",
              marginBottom: "48px",
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(72px, 8vw, 120px)",
                fontWeight: 700,
                color: PRIMARY_COLOR,
                lineHeight: 1,
                letterSpacing: "-0.03em",
                display: "block",
              }}
            >
              {yearsCounter.count}+
            </span>
            <span
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "13px",
                color: "rgba(245,240,235,0.4)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: "8px",
                display: "block",
              }}
            >
              Years of Experience
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
            }}
          >
            <div
              ref={projectsCounter.ref}
              style={{
                borderTop: `1px solid rgba(245,240,235,0.06)`,
                paddingTop: "24px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "48px",
                  fontWeight: 700,
                  color: ACCENT_COLOR,
                  lineHeight: 1,
                  display: "block",
                }}
              >
                {projectsCounter.count}+
              </span>
              <span
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "12px",
                  color: "rgba(245,240,235,0.35)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: "6px",
                  display: "block",
                }}
              >
                Projects
              </span>
            </div>
            <div
              ref={awardsCounter.ref}
              style={{
                borderTop: `1px solid rgba(245,240,235,0.06)`,
                paddingTop: "24px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "48px",
                  fontWeight: 700,
                  color: ACCENT_COLOR,
                  lineHeight: 1,
                  display: "block",
                }}
              >
                {awardsCounter.count}
              </span>
              <span
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "12px",
                  color: "rgba(245,240,235,0.35)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: "6px",
                  display: "block",
                }}
              >
                Awards
              </span>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s, transform 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(32px, 3.5vw, 48px)",
              fontWeight: 700,
              color: PRIMARY_COLOR,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              margin: "0 0 32px 0",
            }}
          >
            We believe in the
            <br />
            power of craft
          </h2>
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "16px",
              lineHeight: 1.8,
              color: "rgba(245,240,235,0.5)",
              margin: "0 0 24px 0",
              maxWidth: "480px",
            }}
          >
            {BRAND_NAME} is a multidisciplinary creative studio specializing in
            brand identity, digital design, and strategic development. We partner
            with ambitious brands to create work that stands at the intersection
            of art and technology.
          </p>
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "16px",
              lineHeight: 1.8,
              color: "rgba(245,240,235,0.5)",
              margin: 0,
              maxWidth: "480px",
            }}
          >
            Every project begins with understanding — understanding your vision,
            your audience, and the story that connects them. From there, we craft
            experiences that resonate.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Component: Services Marquee ────────────────────────────────── */
function ServicesMarquee() {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: "120px 0",
        overflow: "hidden",
        borderTop: "1px solid rgba(245,240,235,0.06)",
        borderBottom: "1px solid rgba(245,240,235,0.06)",
        opacity: revealed ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marquee 25s linear infinite",
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(48px, 6vw, 96px)",
              fontWeight: 700,
              color: "transparent",
              WebkitTextStroke: `1px rgba(245,240,235,0.15)`,
              letterSpacing: "0.02em",
              paddingRight: "24px",
              flexShrink: 0,
            }}
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>

      {/* Second row — filled, opposite direction */}
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marqueeReverse 30s linear infinite",
          marginTop: "16px",
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(48px, 6vw, 96px)",
              fontWeight: 700,
              color: "rgba(245,240,235,0.06)",
              letterSpacing: "0.02em",
              paddingRight: "24px",
              flexShrink: 0,
            }}
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ─── Component: Testimonial ─────────────────────────────────────── */
function Testimonial() {
  const { ref, revealed } = useReveal(0.2);

  return (
    <section
      ref={ref}
      style={{
        padding: "160px 48px",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "1px",
          background: ACCENT_COLOR,
          margin: "0 auto 64px",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "scaleX(1)" : "scaleX(0)",
          transition: "all 0.8s cubic-bezier(0.23,1,0.32,1)",
        }}
      />
      <blockquote
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(24px, 3vw, 36px)",
          fontStyle: "italic",
          fontWeight: 400,
          color: PRIMARY_COLOR,
          lineHeight: 1.6,
          margin: 0,
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(20px)",
          transition:
            "opacity 0.8s ease 0.2s, transform 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s",
        }}
      >
        &ldquo;{BRAND_NAME} didn&rsquo;t just design our brand — they understood
        it before we did. The result was nothing short of transformative.&rdquo;
      </blockquote>
      <div
        style={{
          marginTop: "40px",
          opacity: revealed ? 1 : 0,
          transition: "opacity 0.6s ease 0.5s",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            color: "rgba(245,240,235,0.6)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Elena Torres
        </span>
        <span
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "12px",
            color: "rgba(245,240,235,0.3)",
            display: "block",
            marginTop: "4px",
          }}
        >
          CEO, Meridian Labs
        </span>
      </div>
    </section>
  );
}

/* ─── Component: Contact CTA ─────────────────────────────────────── */
function ContactCTA() {
  const { ref, revealed } = useReveal(0.2);
  const [emailHovered, setEmailHovered] = useState(false);

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "160px 48px",
        maxWidth: "1400px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "12px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: ACCENT_COLOR,
          margin: "0 0 24px",
          opacity: revealed ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        Next Project
      </p>
      <h2
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(48px, 8vw, 120px)",
          fontWeight: 700,
          color: PRIMARY_COLOR,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          margin: 0,
          clipPath: revealed ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
          transition: "clip-path 1s cubic-bezier(0.77,0,0.175,1) 0.1s",
        }}
      >
        Let&rsquo;s talk
      </h2>
      <div style={{ marginTop: "48px" }}>
        <a
          href="mailto:hello@atelier.studio"
          onMouseEnter={() => setEmailHovered(true)}
          onMouseLeave={() => setEmailHovered(false)}
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "18px",
            color: "rgba(245,240,235,0.5)",
            textDecoration: "none",
            position: "relative",
            display: "inline-block",
            transition: "color 0.3s ease",
            ...(emailHovered ? { color: PRIMARY_COLOR } : {}),
          }}
        >
          hello@atelier.studio
          <span
            style={{
              position: "absolute",
              bottom: "-2px",
              left: 0,
              height: "1px",
              background: ACCENT_COLOR,
              width: emailHovered ? "100%" : "0%",
              transition: "width 0.4s cubic-bezier(0.23,1,0.32,1)",
            }}
          />
        </a>
      </div>
    </section>
  );
}

/* ─── Component: Footer ──────────────────────────────────────────── */
function Footer() {
  const socials = ["Twitter", "Instagram", "Dribbble", "LinkedIn"];

  return (
    <footer
      style={{
        padding: "48px",
        borderTop: "1px solid rgba(245,240,235,0.06)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <span
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "12px",
          color: "rgba(245,240,235,0.25)",
        }}
      >
        © 2024 {BRAND_NAME}. All rights reserved.
      </span>
      <div style={{ display: "flex", gap: "24px" }}>
        {socials.map((s) => (
          <a
            key={s}
            href="#"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "12px",
              color: "rgba(245,240,235,0.3)",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = PRIMARY_COLOR)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(245,240,235,0.3)")
            }
          >
            {s}
          </a>
        ))}
      </div>
    </footer>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function AgencyDarkPage() {
  return (
    <>
      {/* Google Fonts */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Keyframes */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0A0A0A; overflow-x: hidden; cursor: none; }
        a, button { cursor: none; }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.2); }
        }

        ::selection {
          background: rgba(201,169,110,0.3);
          color: #F5F0EB;
        }

        /* Hide default cursor on the whole page */
        * { cursor: none !important; }

        @media (max-width: 768px) {
          * { cursor: auto !important; }
        }
      `}</style>

      <div
        style={{
          background: "#0A0A0A",
          color: PRIMARY_COLOR,
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <MouseFollower />
        <Navbar />
        <Hero />
        <PortfolioGrid />
        <AboutSection />
        <ServicesMarquee />
        <Testimonial />
        <ContactCTA />
        <Footer />
      </div>
    </>
  );
}
