"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Constants ──────────────────────────────────────────────────── */
const BRAND_NAME = "Lumière";
const PRIMARY_COLOR = "#C9A96E";
const ACCENT_COLOR = "#8B4513";
const BG_COLOR = "#1A1410";

const MENU_ITEMS = [
  {
    name: "Tartare de Wagyu A5",
    description: "Yema curada, trufa negra, crocante de alcaparras, aceite de nuez tostada",
    price: "$48",
  },
  {
    name: "Vieiras Doradas",
    description: "Puré de coliflor, mantequilla de avellana, caviar Kaluga, microgreens",
    price: "$62",
  },
  {
    name: "Cordero de los Pirineos",
    description: "Cocción lenta 12 horas, jus de romero, raíces glaseadas, polvo de oliva",
    price: "$74",
  },
  {
    name: "Soufflé de Chocolate Valrhona",
    description: "Corazón fundente, helado de vainilla de Madagascar, hoja de oro",
    price: "$32",
  },
];

const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Reserve", href: "#reservations" },
];

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

/* ─── Hook: Scroll position ──────────────────────────────────────── */
function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrollY;
}

/* ─── Component: Navbar ──────────────────────────────────────────── */
function Navbar() {
  const scrollY = useScrollY();
  const scrolled = scrollY > 60;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "24px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled ? "rgba(26,20,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,169,110,0.12)" : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "28px",
          color: PRIMARY_COLOR,
          letterSpacing: "-0.02em",
          textDecoration: "none",
        }}
      >
        {BRAND_NAME}
      </a>
      <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "rgba(201,169,110,0.6)",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY_COLOR)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,169,110,0.6)")}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/* ─── Component: Hero ────────────────────────────────────────────── */
function Hero() {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        padding: "0 48px",
        background: `linear-gradient(180deg, rgba(26,20,16,0.3) 0%, ${BG_COLOR} 100%), radial-gradient(ellipse at 50% 30%, rgba(139,69,19,0.15) 0%, transparent 70%)`,
      }}
    >
      {/* Warm gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 40%, rgba(201,169,110,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Grain texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
        }}
      >
        {/* Decorative line */}
        <div
          style={{
            width: "60px",
            height: "1px",
            background: PRIMARY_COLOR,
            margin: "0 auto 32px",
            transform: revealed ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 1s cubic-bezier(0.23,1,0.32,1)",
          }}
        />

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(201,169,110,0.5)",
            marginBottom: "32px",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s",
          }}
        >
          Fine Dining Experience
        </p>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(40px, 6vw, 80px)",
            lineHeight: 1.1,
            color: PRIMARY_COLOR,
            letterSpacing: "-0.02em",
            marginBottom: "28px",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s cubic-bezier(0.23,1,0.32,1) 0.3s",
          }}
        >
          An experience
          <br />
          <em style={{ fontWeight: 400 }}>for the senses</em>
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "rgba(201,169,110,0.45)",
            maxWidth: "500px",
            margin: "0 auto",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.23,1,0.32,1) 0.6s",
          }}
        >
          Where culinary artistry meets timeless elegance. Every dish tells a story, every moment is curated.
        </p>
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
          gap: "12px",
          opacity: revealed ? 1 : 0,
          transition: "opacity 1s ease 1.2s",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "rgba(201,169,110,0.3)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: `linear-gradient(to bottom, ${PRIMARY_COLOR}, transparent)`,
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}

/* ─── Component: About ───────────────────────────────────────────── */
function About() {
  const { ref, revealed } = useReveal(0.15);

  return (
    <section
      ref={ref}
      style={{
        padding: "140px 48px",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
      }}
    >
      {/* Left: Text */}
      <div>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: ACCENT_COLOR,
            marginBottom: "20px",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.7s ease 0.1s",
          }}
        >
          Our Story
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 3.5vw, 44px)",
            lineHeight: 1.2,
            color: PRIMARY_COLOR,
            marginBottom: "28px",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s",
          }}
        >
          A passion for
          <br />
          <em style={{ fontWeight: 400 }}>perfection</em>
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            lineHeight: 1.8,
            color: "rgba(201,169,110,0.45)",
            marginBottom: "20px",
            maxWidth: "440px",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.4s",
          }}
        >
          Chef Antoine Moreau brings two decades of Michelin-starred experience to {BRAND_NAME}. Each plate is a canvas — seasonal ingredients transformed through technique, intuition, and reverence for the craft.
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            lineHeight: 1.8,
            color: "rgba(201,169,110,0.35)",
            maxWidth: "440px",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.5s",
          }}
        >
          Our philosophy is simple: honor the ingredient, respect the season, and create moments that linger long after the last course.
        </p>
      </div>

      {/* Right: Decorative element */}
      <div
        style={{
          position: "relative",
          height: "420px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: revealed ? 1 : 0,
          transition: "opacity 1.2s ease 0.3s",
        }}
      >
        {/* Golden geometric pattern */}
        <div
          style={{
            position: "relative",
            width: "280px",
            height: "280px",
          }}
        >
          {/* Outer diamond */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              border: `1px solid rgba(201,169,110,0.2)`,
              transform: revealed ? "rotate(45deg) scale(1)" : "rotate(45deg) scale(0.8)",
              transition: "transform 1s cubic-bezier(0.23,1,0.32,1) 0.4s",
            }}
          />
          {/* Inner diamond */}
          <div
            style={{
              position: "absolute",
              inset: "40px",
              border: `1px solid rgba(201,169,110,0.15)`,
              transform: revealed ? "rotate(45deg) scale(1)" : "rotate(45deg) scale(0.8)",
              transition: "transform 1s cubic-bezier(0.23,1,0.32,1) 0.6s",
            }}
          />
          {/* Center diamond */}
          <div
            style={{
              position: "absolute",
              inset: "80px",
              border: `1px solid rgba(201,169,110,0.1)`,
              transform: revealed ? "rotate(45deg) scale(1)" : "rotate(45deg) scale(0.8)",
              transition: "transform 1s cubic-bezier(0.23,1,0.32,1) 0.8s",
            }}
          />
          {/* Horizontal line */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "-20%",
              right: "-20%",
              height: "1px",
              background: `linear-gradient(90deg, transparent, rgba(201,169,110,0.25), transparent)`,
              transform: revealed ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 1s ease 0.5s",
            }}
          />
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "-20%",
              bottom: "-20%",
              width: "1px",
              background: `linear-gradient(180deg, transparent, rgba(201,169,110,0.25), transparent)`,
              transform: revealed ? "scaleY(1)" : "scaleY(0)",
              transition: "transform 1s ease 0.5s",
            }}
          />
          {/* Center circle */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: PRIMARY_COLOR,
              transform: "translate(-50%, -50%)",
              opacity: revealed ? 0.6 : 0,
              transition: "opacity 0.8s ease 1s",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Component: Menu ────────────────────────────────────────────── */
function MenuSection() {
  const { ref, revealed } = useReveal(0.15);

  return (
    <section
      id="menu"
      ref={ref}
      style={{
        padding: "120px 48px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: ACCENT_COLOR,
            marginBottom: "16px",
            opacity: revealed ? 1 : 0,
            transition: "opacity 0.6s ease 0.1s",
          }}
        >
          The Menu
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 4vw, 52px)",
            color: PRIMARY_COLOR,
            letterSpacing: "-0.02em",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s",
          }}
        >
          Seasonal Highlights
        </h2>
      </div>

      <div>
        {MENU_ITEMS.map((item, i) => (
          <div
            key={item.name}
            style={{
              padding: "32px 0",
              borderBottom:
                i < MENU_ITEMS.length - 1
                  ? "1px solid rgba(201,169,110,0.1)"
                  : "none",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "24px",
              alignItems: "start",
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${0.3 + i * 0.12}s`,
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: PRIMARY_COLOR,
                  marginBottom: "8px",
                  letterSpacing: "0.01em",
                }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "rgba(201,169,110,0.4)",
                  maxWidth: "400px",
                }}
              >
                {item.description}
              </p>
            </div>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "18px",
                color: "rgba(201,169,110,0.6)",
                fontWeight: 400,
                paddingTop: "2px",
              }}
            >
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Component: Ambiance ────────────────────────────────────────── */
function Ambiance() {
  const { ref, revealed } = useReveal(0.1);
  const scrollY = useScrollY();

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: "70vh",
        minHeight: "500px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Parallax background */}
      <div
        style={{
          position: "absolute",
          inset: "-10%",
          background: `linear-gradient(135deg, ${ACCENT_COLOR}22 0%, ${BG_COLOR} 50%, rgba(201,169,110,0.08) 100%)`,
          transform: `translateY(${scrollY * 0.08}px)`,
          transition: "transform 0.1s linear",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(26,20,16,0.6)",
        }}
      />

      {/* Decorative lines */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: "120px",
          height: "1px",
          background: `linear-gradient(90deg, rgba(201,169,110,0.2), transparent)`,
          opacity: revealed ? 1 : 0,
          transition: "opacity 1s ease 0.3s",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: "120px",
          height: "1px",
          background: `linear-gradient(270deg, rgba(201,169,110,0.2), transparent)`,
          opacity: revealed ? 1 : 0,
          transition: "opacity 1s ease 0.3s",
        }}
      />

      {/* Quote */}
      <blockquote
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "700px",
          padding: "0 48px",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s cubic-bezier(0.23,1,0.32,1) 0.3s",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(22px, 3vw, 36px)",
            lineHeight: 1.6,
            color: PRIMARY_COLOR,
            marginBottom: "24px",
          }}
        >
          &ldquo;Cooking is an art, but eating is the privilege of experiencing that art.&rdquo;
        </p>
        <cite
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontStyle: "normal",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "rgba(201,169,110,0.4)",
          }}
        >
          — Chef Antoine Moreau
        </cite>
      </blockquote>
    </section>
  );
}

/* ─── Component: Reservations ────────────────────────────────────── */
function Reservations() {
  const { ref, revealed } = useReveal(0.15);

  return (
    <section
      id="reservations"
      ref={ref}
      style={{
        padding: "140px 48px",
        maxWidth: "700px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: ACCENT_COLOR,
          marginBottom: "16px",
          opacity: revealed ? 1 : 0,
          transition: "opacity 0.6s ease 0.1s",
        }}
      >
        Reservations
      </p>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "clamp(32px, 4vw, 52px)",
          color: PRIMARY_COLOR,
          marginBottom: "16px",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.23,1,0.32,1) 0.2s",
        }}
      >
        Reserve a Table
      </h2>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "15px",
          color: "rgba(201,169,110,0.4)",
          marginBottom: "48px",
          opacity: revealed ? 1 : 0,
          transition: "opacity 0.6s ease 0.4s",
        }}
      >
        Join us for an unforgettable evening
      </p>

      {/* Form fields */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "16px",
          marginBottom: "32px",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease 0.5s",
        }}
      >
        <div style={{ position: "relative" }}>
          <label
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(201,169,110,0.35)",
              display: "block",
              marginBottom: "8px",
              textAlign: "left",
            }}
          >
            Date
          </label>
          <input
            type="text"
            placeholder="March 15, 2026"
            readOnly
            style={{
              width: "100%",
              padding: "14px 16px",
              background: "rgba(201,169,110,0.04)",
              border: "1px solid rgba(201,169,110,0.12)",
              borderRadius: "2px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "rgba(201,169,110,0.6)",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div>
          <label
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(201,169,110,0.35)",
              display: "block",
              marginBottom: "8px",
              textAlign: "left",
            }}
          >
            Time
          </label>
          <input
            type="text"
            placeholder="8:00 PM"
            readOnly
            style={{
              width: "100%",
              padding: "14px 16px",
              background: "rgba(201,169,110,0.04)",
              border: "1px solid rgba(201,169,110,0.12)",
              borderRadius: "2px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "rgba(201,169,110,0.6)",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div>
          <label
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(201,169,110,0.35)",
              display: "block",
              marginBottom: "8px",
              textAlign: "left",
            }}
          >
            Guests
          </label>
          <input
            type="text"
            placeholder="2 Guests"
            readOnly
            style={{
              width: "100%",
              padding: "14px 16px",
              background: "rgba(201,169,110,0.04)",
              border: "1px solid rgba(201,169,110,0.12)",
              borderRadius: "2px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "rgba(201,169,110,0.6)",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>

      {/* CTA Button */}
      <button
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "13px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          padding: "18px 56px",
          background: PRIMARY_COLOR,
          color: BG_COLOR,
          border: "none",
          borderRadius: "2px",
          cursor: "pointer",
          fontWeight: 500,
          transition: "all 0.4s ease",
          animation: revealed ? "ctaGlow 3s ease-in-out infinite" : "none",
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(10px)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#D4B87A";
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(201,169,110,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = PRIMARY_COLOR;
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        Reserve Now
      </button>
    </section>
  );
}

/* ─── Component: Hours & Location ────────────────────────────────── */
function HoursLocation() {
  const { ref, revealed } = useReveal(0.15);

  return (
    <section
      ref={ref}
      style={{
        padding: "100px 48px",
        maxWidth: "1000px",
        margin: "0 auto",
        borderTop: "1px solid rgba(201,169,110,0.08)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "60px",
          textAlign: "center",
        }}
      >
        {/* Address */}
        <div
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.1s",
          }}
        >
          <h3
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: ACCENT_COLOR,
              marginBottom: "20px",
            }}
          >
            Location
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "rgba(201,169,110,0.5)",
            }}
          >
            42 Rue du Faubourg
            <br />
            Saint-Honoré
            <br />
            Paris, 75008
          </p>
        </div>

        {/* Hours */}
        <div
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.25s",
          }}
        >
          <h3
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: ACCENT_COLOR,
              marginBottom: "20px",
            }}
          >
            Hours
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "rgba(201,169,110,0.5)",
            }}
          >
            Tuesday – Saturday
            <br />
            Dinner: 6:00 PM – 11:00 PM
            <br />
            Sunday Brunch: 11:00 AM – 3:00 PM
          </p>
        </div>

        {/* Contact */}
        <div
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.4s",
          }}
        >
          <h3
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: ACCENT_COLOR,
              marginBottom: "20px",
            }}
          >
            Contact
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "rgba(201,169,110,0.5)",
            }}
          >
            +33 1 42 65 15 16
            <br />
            reservations@lumiere.com
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Component: Footer ──────────────────────────────────────────── */
function Footer() {
  const socials = ["Instagram", "Facebook", "Twitter"];

  return (
    <footer
      style={{
        padding: "48px",
        borderTop: "1px solid rgba(201,169,110,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "20px",
            color: PRIMARY_COLOR,
            marginBottom: "8px",
          }}
        >
          {BRAND_NAME}
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            color: "rgba(201,169,110,0.25)",
          }}
        >
          © 2026 {BRAND_NAME}. All rights reserved.
        </p>
      </div>
      <div style={{ display: "flex", gap: "24px" }}>
        {socials.map((s) => (
          <a
            key={s}
            href="#"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: "rgba(201,169,110,0.35)",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = PRIMARY_COLOR)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,169,110,0.35)")}
          >
            {s}
          </a>
        ))}
      </div>
    </footer>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────── */
export default function RestaurantPremiumDemo() {
  return (
    <>
      {/* Google Fonts */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: ${BG_COLOR}; overflow-x: hidden; }
        ::selection { background: rgba(201,169,110,0.3); color: ${PRIMARY_COLOR}; }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes ctaGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(201,169,110,0); }
          50% { box-shadow: 0 0 30px rgba(201,169,110,0.15); }
        }

        @media (max-width: 768px) {
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: BG_COLOR, color: PRIMARY_COLOR }}>
        <Navbar />
        <Hero />
        <About />
        <MenuSection />
        <Ambiance />
        <Reservations />
        <HoursLocation />
        <Footer />
      </div>
    </>
  );
}
