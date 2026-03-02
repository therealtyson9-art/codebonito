export default function StartupLuxuryDemo() {
  const navLinks = ["Vision", "Collection", "Atelier", "Journal"]
  const features = [
    { title: "Provenance Verified", desc: "Every piece is authenticated through our proprietary blockchain ledger, ensuring an unbroken chain of custody from atelier to collector." },
    { title: "Concierge Curation", desc: "A dedicated advisor learns your aesthetic sensibility and surfaces pieces that align with your evolving collection." },
    { title: "Private Viewings", desc: "Experience works in augmented reality within your own space before committing. Available exclusively to members." },
    { title: "Fractional Ownership", desc: "Access museum-quality works through our fractional model. Diversify your portfolio with blue-chip contemporary art." },
  ]
  const metrics = [
    { value: "$180M+", label: "Art Transacted" },
    { value: "2,400", label: "Verified Collectors" },
    { value: "12", label: "Global Ateliers" },
    { value: "340+", label: "Represented Artists" },
  ]
  const team = [
    { name: "Isabelle Fontaine", role: "Founder & CEO", detail: "Former Director, Christie's" },
    { name: "Alexander Voss", role: "Chief Creative", detail: "Former Curator, MoMA" },
    { name: "Mei-Lin Zhou", role: "Head of Technology", detail: "Ex-Principal Engineer, Sotheby's" },
  ]
  const press = ["Financial Times", "Wallpaper*", "Artnet", "Monocle"]

  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#0a0a0a", color: "#e8e8e8" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav style={{ borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <span className="text-xl tracking-widest uppercase" style={{ fontFamily: "'Playfair Display', serif", color: "#d4af37", fontWeight: 600 }}>Aurelius</span>
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <span key={link} className="text-xs tracking-widest uppercase cursor-pointer" style={{ color: "#888", letterSpacing: "0.15em" }}>{link}</span>
            ))}
          </div>
          <span className="text-xs tracking-widest uppercase cursor-pointer" style={{ color: "#d4af37", letterSpacing: "0.15em" }}>Request Access</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest uppercase mb-8" style={{ color: "#d4af37", letterSpacing: "0.2em" }}>The future of art collecting</p>
          <h1 className="text-5xl md:text-7xl leading-none mb-8" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, letterSpacing: "-0.02em", color: "#fff" }}>
            Where art meets<br />provenance.
          </h1>
          <p className="text-base leading-relaxed max-w-lg mb-12" style={{ color: "#777", fontWeight: 300 }}>
            Aurelius is the definitive platform for discerning collectors. We authenticate, curate, and facilitate the acquisition of exceptional contemporary art through technology and taste.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-xs tracking-widest uppercase px-8 py-4 cursor-pointer" style={{ backgroundColor: "#d4af37", color: "#0a0a0a", fontWeight: 600, letterSpacing: "0.15em" }}>Apply for Membership</span>
            <span className="text-xs tracking-widest uppercase cursor-pointer" style={{ color: "#888", letterSpacing: "0.15em", borderBottom: "1px solid #444" }}>View Collection</span>
          </div>
        </div>
      </section>

      {/* Divider line */}
      <div className="max-w-6xl mx-auto px-8"><div style={{ borderTop: "1px solid #1a1a1a" }}></div></div>

      {/* Metrics */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="text-3xl md:text-4xl mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#d4af37", fontWeight: 500 }}>{m.value}</p>
              <p className="text-xs tracking-widest uppercase" style={{ color: "#555", letterSpacing: "0.15em" }}>{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8"><div style={{ borderTop: "1px solid #1a1a1a" }}></div></div>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#d4af37", letterSpacing: "0.2em" }}>The Platform</p>
        <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#fff" }}>
          Crafted for connoisseurs
        </h2>
        <p className="text-sm max-w-lg mb-16" style={{ color: "#666", fontWeight: 300, lineHeight: 1.8 }}>
          Every detail has been considered. From provenance verification to private viewings, Aurelius sets a new standard for collecting.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {features.map((f, i) => (
            <div key={f.title} className="p-10" style={{ borderTop: "1px solid #1a1a1a", borderLeft: i % 2 === 1 ? "1px solid #1a1a1a" : "none" }}>
              <h3 className="text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontWeight: 500 }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#666", fontWeight: 300 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-6xl mx-auto px-8 py-24">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#d4af37", letterSpacing: "0.2em" }}>Atelier</p>
          <h2 className="text-3xl md:text-4xl mb-16" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#fff" }}>
            The minds behind Aurelius
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((t) => (
              <div key={t.name}>
                <div className="w-full aspect-[3/4] mb-6" style={{ backgroundColor: "#151515" }}></div>
                <p className="text-base mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontWeight: 500 }}>{t.name}</p>
                <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#d4af37", letterSpacing: "0.1em" }}>{t.role}</p>
                <p className="text-xs" style={{ color: "#555" }}>{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section style={{ borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-6xl mx-auto px-8 py-16">
          <p className="text-xs tracking-widest uppercase text-center mb-10" style={{ color: "#444", letterSpacing: "0.2em" }}>As featured in</p>
          <div className="flex justify-center items-center space-x-12 md:space-x-20">
            {press.map((p) => (
              <span key={p} className="text-sm tracking-wide" style={{ fontFamily: "'Playfair Display', serif", color: "#333", fontWeight: 500 }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-6xl mx-auto px-8 py-28 text-center">
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "#d4af37", letterSpacing: "0.2em" }}>By Invitation</p>
          <h2 className="text-3xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#fff" }}>
            Begin your collection
          </h2>
          <p className="text-sm max-w-md mx-auto mb-12" style={{ color: "#666", fontWeight: 300, lineHeight: 1.8 }}>
            Membership is limited to ensure an exceptional experience. Apply today and our concierge team will be in touch within 48 hours.
          </p>
          <div className="flex justify-center items-center space-x-0 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 h-14 px-6 text-sm outline-none" style={{ backgroundColor: "#151515", border: "1px solid #2a2a2a", color: "#e8e8e8", fontFamily: "Inter, sans-serif" }} />
            <span className="h-14 px-8 flex items-center text-xs tracking-widest uppercase cursor-pointer whitespace-nowrap" style={{ backgroundColor: "#d4af37", color: "#0a0a0a", fontWeight: 600, letterSpacing: "0.1em" }}>Apply</span>
          </div>
          <p className="text-xs mt-4" style={{ color: "#444" }}>Membership starts at $2,400 per year</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-6xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between">
          <span className="text-xs tracking-widest uppercase" style={{ color: "#333", letterSpacing: "0.15em" }}>&copy; 2026 Aurelius. All rights reserved.</span>
          <div className="flex space-x-8 mt-4 md:mt-0">
            {["Privacy", "Terms", "Press", "Contact"].map((link) => (
              <span key={link} className="text-xs tracking-widest uppercase cursor-pointer" style={{ color: "#333", letterSpacing: "0.1em" }}>{link}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
