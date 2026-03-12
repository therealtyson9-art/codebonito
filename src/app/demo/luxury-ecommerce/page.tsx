"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Constants ──────────────────────────────────────────────────── */
const BRAND_NAME = "Maison Noir";
const PRIMARY_COLOR = "#1A1A1A";
const ACCENT_COLOR = "#C9A96E";
const BG_COLOR = "#FAF9F6";

const PRODUCTS = [
  { name: "Noir Silk Blazer", price: "$2,450", gradient: "linear-gradient(135deg, #E8E4DE 0%, #D4CFC7 100%)" },
  { name: "Crème Cashmere Coat", price: "$3,890", gradient: "linear-gradient(135deg, #D6D0C8 0%, #C8C0B5 100%)" },
  { name: "Obsidian Leather Bag", price: "$1,750", gradient: "linear-gradient(135deg, #CCC6BC 0%, #B8B0A5 100%)" },
  { name: "Gold Link Bracelet", price: "$890", gradient: "linear-gradient(135deg, #E0DAD2 0%, #D0C8BC 100%)" },
];

const COLLECTION = [
  { name: "Autumn Reverie Dress", price: "$1,980", gradient: "linear-gradient(145deg, #D8D2CA 0%, #C4BCB0 100%)" },
  { name: "Midnight Wool Trousers", price: "$1,120", gradient: "linear-gradient(145deg, #CEC8C0 0%, #BAB2A6 100%)" },
  { name: "Ivory Suede Loafers", price: "$780", gradient: "linear-gradient(145deg, #E2DCD4 0%, #D4CCC2 100%)" },
  { name: "Onyx Silk Scarf", price: "$420", gradient: "linear-gradient(145deg, #D0CAC2 0%, #C0B8AC 100%)" },
  { name: "Charcoal Linen Shirt", price: "$650", gradient: "linear-gradient(145deg, #D6D0C6 0%, #C8C0B4 100%)" },
  { name: "Sable Clutch", price: "$1,340", gradient: "linear-gradient(145deg, #DCD6CE 0%, #CEC6BA 100%)" },
];

const FOOTER_LINKS = {
  "Collections": ["Autumn/Winter 2026", "Spring/Summer 2026", "Accessories", "Archive"],
  "About": ["Our Story", "Ateliers", "Sustainability", "Careers"],
  "Client Care": ["Contact Us", "Shipping & Returns", "Size Guide", "Care Instructions"],
};

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

/* ─── Hook: Parallax offset ──────────────────────────────────────── */
function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(center * speed);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return { ref, offset };
}

/* ─── Component ──────────────────────────────────────────────────── */
export default function LuxuryEcommercePage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [hoveredCollection, setHoveredCollection] = useState<number | null>(null);
  const [email, setEmail] = useState("");

  const heroReveal = useReveal(0.1);
  const gridReveal = useReveal(0.1);
  const editorialReveal = useReveal(0.15);
  const collectionReveal = useReveal(0.1);
  const newsletterReveal = useReveal(0.15);
  const heroParallax = useParallax(0.15);

  const collectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* inject fonts + global styles */
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      ::selection { background: rgba(201,169,110,0.25); color: ${PRIMARY_COLOR}; }
      html { scroll-behavior: smooth; }
      body { overflow-x: hidden; }
      @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
      @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
      @keyframes revealClip { from { clip-path:inset(0 0 100% 0); } to { clip-path:inset(0 0 0% 0); } }
      @keyframes scrollLine { 0%,100% { opacity:0.3; } 50% { opacity:0.8; } }
      @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  const scrollCollection = useCallback((dir: number) => {
    if (collectionRef.current) {
      collectionRef.current.scrollBy({ left: dir * 340, behavior: "smooth" });
    }
  }, []);

  return (
    <div style={{ background: BG_COLOR, color: PRIMARY_COLOR, fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>

      {/* ─── Navbar ──────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "20px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(250,249,246,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid rgba(26,26,26,0.06)` : "1px solid transparent",
        transition: "all 0.5s cubic-bezier(0.23,1,0.32,1)",
      }}>
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", flexDirection: "column", gap: 5 }}
          aria-label="Menu"
        >
          <span style={{ width: 22, height: 1.5, background: PRIMARY_COLOR, display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
          <span style={{ width: 22, height: 1.5, background: PRIMARY_COLOR, display: "block", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ width: 22, height: 1.5, background: PRIMARY_COLOR, display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
        </button>

        {/* Logo centered */}
        <div style={{
          position: "absolute", left: "50%", transform: "translateX(-50%)",
          fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: 22,
          letterSpacing: "0.04em", textTransform: "uppercase",
        }}>
          {BRAND_NAME}
        </div>

        {/* Cart icon */}
        <button style={{ background: "none", border: "none", cursor: "pointer", padding: 4, position: "relative" }} aria-label="Cart">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={PRIMARY_COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          <span style={{
            position: "absolute", top: -2, right: -4,
            width: 16, height: 16, borderRadius: "50%",
            background: ACCENT_COLOR, color: "#fff",
            fontSize: 9, fontWeight: 500,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>2</span>
        </button>
      </nav>

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section
        ref={(el: HTMLDivElement | null) => {
          (heroReveal.ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
          (heroParallax.ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        }}
        style={{
          position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <video
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.25,
            pointerEvents: 'none',
            zIndex: 0,
          }}
          src="/videos/particles-dust.mp4"
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
        {/* BG gradient placeholder */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(165deg, #E8E4DE 0%, #D4CFC7 35%, #C8C0B5 65%, #B8B0A5 100%)",
          transform: `translateY(${heroParallax.offset}px)`,
          transition: "transform 0.1s linear",
        }} />
        {/* Subtle shimmer overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 6s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        {/* Content overlay */}
        <div style={{
          position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px",
          maxWidth: 680,
          opacity: heroReveal.revealed ? 1 : 0,
          transform: heroReveal.revealed ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s cubic-bezier(0.23,1,0.32,1) 0.3s",
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 400,
            letterSpacing: "0.2em", textTransform: "uppercase", color: PRIMARY_COLOR,
            marginBottom: 24, opacity: 0.6,
          }}>
            Autumn / Winter 2026
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 500,
            fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.1,
            letterSpacing: "-0.02em", color: PRIMARY_COLOR, margin: "0 0 24px 0",
          }}>
            The Art of<br />Understated Luxury
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 300,
            color: "rgba(26,26,26,0.6)", lineHeight: 1.6, marginBottom: 40,
            maxWidth: 420, margin: "0 auto 40px auto",
          }}>
            Timeless pieces crafted with intention. Where elegance meets the everyday.
          </p>
          <a
            href="#products"
            style={{
              display: "inline-block", fontFamily: "'Inter', sans-serif",
              fontSize: 12, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase",
              color: PRIMARY_COLOR, textDecoration: "none",
              padding: "16px 48px",
              border: `1px solid ${PRIMARY_COLOR}`,
              transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
              background: "transparent",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = PRIMARY_COLOR;
              e.currentTarget.style.color = BG_COLOR;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = PRIMARY_COLOR;
            }}
          >
            Shop Now
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        }}>
          <span style={{
            fontFamily: "'Inter', sans-serif", fontSize: 9, letterSpacing: "0.15em",
            textTransform: "uppercase", color: "rgba(26,26,26,0.35)",
          }}>Scroll</span>
          <div style={{
            width: 1, height: 36,
            background: `linear-gradient(to bottom, ${ACCENT_COLOR}, transparent)`,
            animation: "scrollLine 2s ease-in-out infinite",
          }} />
        </div>
      </section>

      {/* ─── Product Grid ────────────────────────────────────────── */}
      <section id="products" ref={gridReveal.ref} style={{
        padding: "120px 48px", maxWidth: 1200, margin: "0 auto",
      }}>
        <div style={{
          textAlign: "center", marginBottom: 64,
          opacity: gridReveal.revealed ? 1 : 0,
          transform: gridReveal.revealed ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.23,1,0.32,1)",
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 400,
            letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT_COLOR,
            marginBottom: 12,
          }}>Curated Selection</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 500,
            fontSize: "clamp(28px, 4vw, 44px)", letterSpacing: "-0.01em",
            margin: 0,
          }}>
            New Arrivals
          </h2>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32,
        }}>
          {PRODUCTS.map((product, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredProduct(i)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{
                cursor: "pointer",
                opacity: gridReveal.revealed ? 1 : 0,
                transform: gridReveal.revealed ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 0.12}s`,
              }}
            >
              {/* Image placeholder */}
              <div style={{
                position: "relative", aspectRatio: "3 / 4", overflow: "hidden",
                marginBottom: 16,
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: product.gradient,
                  transform: hoveredProduct === i ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1)",
                }} />
                {/* Add to Bag overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "rgba(26,26,26,0.4)",
                  display: "flex", alignItems: "flex-end", justifyContent: "center",
                  paddingBottom: 32,
                  opacity: hoveredProduct === i ? 1 : 0,
                  transition: "opacity 0.4s cubic-bezier(0.23,1,0.32,1)",
                }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500,
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "#fff", padding: "14px 36px",
                    border: "1px solid rgba(255,255,255,0.8)",
                    transform: hoveredProduct === i ? "translateY(0)" : "translateY(12px)",
                    transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1) 0.05s",
                  }}>
                    Add to Bag
                  </span>
                </div>
              </div>
              {/* Product info */}
              <h3 style={{
                fontFamily: "'Playfair Display', serif", fontWeight: 400,
                fontSize: 18, margin: "0 0 4px 0", letterSpacing: "0.01em",
              }}>{product.name}</h3>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 400,
                color: "rgba(26,26,26,0.55)", margin: 0,
              }}>{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Editorial Section ───────────────────────────────────── */}
      <section ref={editorialReveal.ref} style={{
        padding: "80px 48px 120px", maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center",
      }}>
        {/* Left image placeholder */}
        <div style={{
          aspectRatio: "4 / 5", overflow: "hidden",
          opacity: editorialReveal.revealed ? 1 : 0,
          transform: editorialReveal.revealed ? "translateX(0)" : "translateX(-30px)",
          transition: "all 0.9s cubic-bezier(0.23,1,0.32,1)",
        }}>
          <div style={{
            width: "100%", height: "100%",
            background: "linear-gradient(155deg, #D8D2CA 0%, #C4BCB0 40%, #B8B0A5 100%)",
          }} />
        </div>

        {/* Right text */}
        <div style={{
          opacity: editorialReveal.revealed ? 1 : 0,
          transform: editorialReveal.revealed ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s cubic-bezier(0.23,1,0.32,1) 0.2s",
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 400,
            letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT_COLOR,
            marginBottom: 20,
          }}>Our Philosophy</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 500,
            fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.2,
            letterSpacing: "-0.01em", margin: "0 0 28px 0",
          }}>
            Born from a reverence for craft
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 300,
            lineHeight: 1.8, color: "rgba(26,26,26,0.55)", marginBottom: 32,
            maxWidth: 440,
          }}>
            Every piece in the {BRAND_NAME} collection is conceived in our Paris atelier and
            realized by artisans whose expertise spans generations. We believe luxury is not
            excess — it is the discipline of restraint, the beauty of a single perfect seam.
          </p>
          {/* Pull quote */}
          <blockquote style={{
            fontFamily: "'Playfair Display', serif", fontStyle: "italic",
            fontSize: "clamp(18px, 2.2vw, 26px)", lineHeight: 1.5,
            color: PRIMARY_COLOR, margin: 0, padding: "24px 0",
            borderTop: `1px solid rgba(26,26,26,0.08)`,
            borderBottom: `1px solid rgba(26,26,26,0.08)`,
          }}>
            &ldquo;True elegance is the refusal to be noticed — and the inability to be forgotten.&rdquo;
          </blockquote>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 400,
            letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)",
            marginTop: 16,
          }}>
            — Claire Dubois, Creative Director
          </p>
        </div>
      </section>

      {/* ─── Featured Collection (Horizontal Scroll) ─────────────── */}
      <section ref={collectionReveal.ref} style={{
        padding: "100px 0 120px",
        borderTop: `1px solid rgba(26,26,26,0.06)`,
        borderBottom: `1px solid rgba(26,26,26,0.06)`,
      }}>
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          padding: "0 48px", marginBottom: 48,
          opacity: collectionReveal.revealed ? 1 : 0,
          transform: collectionReveal.revealed ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.23,1,0.32,1)",
        }}>
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 400,
              letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT_COLOR,
              marginBottom: 12,
            }}>Featured</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif", fontWeight: 500,
              fontSize: "clamp(28px, 3.5vw, 42px)", letterSpacing: "-0.01em", margin: 0,
            }}>
              The Noir Collection
            </h2>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={() => scrollCollection(-1)}
              style={{
                width: 44, height: 44, borderRadius: "50%",
                border: `1px solid rgba(26,26,26,0.15)`, background: "transparent",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = ACCENT_COLOR; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(26,26,26,0.15)"; }}
              aria-label="Scroll left"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={PRIMARY_COLOR} strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              onClick={() => scrollCollection(1)}
              style={{
                width: 44, height: 44, borderRadius: "50%",
                border: `1px solid rgba(26,26,26,0.15)`, background: "transparent",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = ACCENT_COLOR; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(26,26,26,0.15)"; }}
              aria-label="Scroll right"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={PRIMARY_COLOR} strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div
          ref={collectionRef}
          style={{
            display: "flex", gap: 24, overflowX: "auto", paddingLeft: 48, paddingRight: 48,
            scrollSnapType: "x mandatory", scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {COLLECTION.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCollection(i)}
              onMouseLeave={() => setHoveredCollection(null)}
              style={{
                flexShrink: 0, width: 300, scrollSnapAlign: "start", cursor: "pointer",
                opacity: collectionReveal.revealed ? 1 : 0,
                transform: collectionReveal.revealed ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 0.08}s`,
              }}
            >
              <div style={{
                aspectRatio: "3 / 4", overflow: "hidden", marginBottom: 14,
              }}>
                <div style={{
                  width: "100%", height: "100%",
                  background: item.gradient,
                  transform: hoveredCollection === i ? "scale(1.06)" : "scale(1)",
                  transition: "transform 0.6s cubic-bezier(0.23,1,0.32,1)",
                }} />
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif", fontWeight: 400,
                fontSize: 16, margin: "0 0 4px 0",
              }}>{item.name}</h3>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 400,
                color: "rgba(26,26,26,0.5)", margin: 0,
              }}>{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Newsletter ──────────────────────────────────────────── */}
      <section ref={newsletterReveal.ref} style={{
        padding: "120px 48px", textAlign: "center",
      }}>
        <div style={{
          maxWidth: 520, margin: "0 auto",
          opacity: newsletterReveal.revealed ? 1 : 0,
          transform: newsletterReveal.revealed ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.8s cubic-bezier(0.23,1,0.32,1)",
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 400,
            letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT_COLOR,
            marginBottom: 16,
          }}>Newsletter</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontWeight: 500,
            fontSize: "clamp(26px, 3.5vw, 38px)", letterSpacing: "-0.01em",
            margin: "0 0 12px 0",
          }}>
            Join our world
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 300,
            color: "rgba(26,26,26,0.5)", lineHeight: 1.6, marginBottom: 40,
          }}>
            Be the first to discover new collections, exclusive events, and the stories behind our craft.
          </p>

          <div style={{
            display: "flex", gap: 0,
            borderBottom: `1px solid rgba(26,26,26,0.2)`,
            maxWidth: 420, margin: "0 auto",
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              style={{
                flex: 1, border: "none", background: "transparent",
                fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 300,
                color: PRIMARY_COLOR, padding: "12px 0",
                outline: "none",
              }}
            />
            <button
              style={{
                background: "transparent", border: "none", cursor: "pointer",
                fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500,
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: ACCENT_COLOR, padding: "12px 0",
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ─── Footer ──────────────────────────────────────────────── */}
      <footer style={{
        padding: "80px 48px 48px",
        borderTop: `1px solid rgba(26,26,26,0.06)`,
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Top: Logo + columns */}
          <div style={{
            display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 48,
            marginBottom: 64,
          }}>
            {/* Brand column */}
            <div>
              <p style={{
                fontFamily: "'Playfair Display', serif", fontWeight: 600,
                fontSize: 20, letterSpacing: "0.04em", textTransform: "uppercase",
                marginBottom: 16,
              }}>{BRAND_NAME}</p>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 300,
                lineHeight: 1.7, color: "rgba(26,26,26,0.45)", maxWidth: 260,
              }}>
                Parisian luxury house dedicated to the art of understated elegance since 2009.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <p style={{
                  fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: ACCENT_COLOR, marginBottom: 20,
                }}>{title}</p>
                {links.map((link) => (
                  <a key={link} href="#" style={{
                    display: "block", fontFamily: "'Inter', sans-serif",
                    fontSize: 13, fontWeight: 300, color: "rgba(26,26,26,0.5)",
                    textDecoration: "none", marginBottom: 12,
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = PRIMARY_COLOR; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(26,26,26,0.5)"; }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{
            height: 1, background: `linear-gradient(90deg, transparent, ${ACCENT_COLOR}, transparent)`,
            opacity: 0.2, marginBottom: 32,
          }} />

          {/* Bottom row */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: 16,
          }}>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 300,
              color: "rgba(26,26,26,0.3)", margin: 0,
            }}>
              © 2026 {BRAND_NAME}. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 24 }}>
              {["Instagram", "Pinterest", "Twitter"].map((social) => (
                <a key={social} href="#" style={{
                  fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 400,
                  color: "rgba(26,26,26,0.35)", textDecoration: "none",
                  letterSpacing: "0.04em", transition: "color 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = ACCENT_COLOR; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(26,26,26,0.35)"; }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
