export default function LegalLuxuryDemo() {
  const practiceAreas = [
    { title: "Private Client Advisory", desc: "Bespoke counsel for ultra-high-net-worth individuals, family offices, and private trusts across multiple jurisdictions." },
    { title: "International Arbitration", desc: "Representation in complex cross-border disputes before ICC, LCIA, ICSID, and ad hoc tribunals worldwide." },
    { title: "White-Collar Defense", desc: "Discreet, sophisticated defense in government investigations, regulatory enforcement, and corporate fraud matters." },
    { title: "Art & Cultural Property", desc: "Provenance disputes, museum governance, auction litigation, and cultural heritage repatriation cases." },
  ]

  const partners = [
    { name: "Sir Edward Montclair III", title: "Managing Partner", bio: "Oxford-educated. 35 years in international arbitration. Former counsel to the Permanent Court of Arbitration at The Hague.", color: "bg-amber-900/20" },
    { name: "Victoria Ashworth-Pemberton", title: "Senior Partner", bio: "Harvard Law Review editor. Recognized by Chambers HNW for private client work. Advisor to three sovereign wealth funds.", color: "bg-amber-800/20" },
    { name: "Philippe de Laurent", title: "Partner", bio: "Sciences Po and Yale Law. Specialist in art law and cultural property. Published author on restitution jurisprudence.", color: "bg-amber-900/30" },
  ]

  const timeline = [
    { year: "2024", matter: "International Arbitration, Geneva", outcome: "Secured $280M award for sovereign client in energy concession dispute under UNCITRAL rules" },
    { year: "2023", matter: "White-Collar Defense, New York", outcome: "Complete dismissal of all charges against Fortune 100 executive in insider trading investigation" },
    { year: "2022", matter: "Cultural Property, London", outcome: "Successful repatriation of 17th-century collection valued at $45M following five-year provenance dispute" },
    { year: "2021", matter: "Private Client, Zurich", outcome: "Restructured multi-generational family trust spanning four jurisdictions with $1.2B in assets" },
  ]

  const memberships = [
    "International Bar Association",
    "American College of Trial Lawyers",
    "Chartered Institute of Arbitrators",
    "Art Law Foundation, Geneva",
    "The Honourable Society of Lincoln\u2019s Inn",
    "New York City Bar Association",
  ]

  return (
    <div className="min-h-screen text-white" style={{ fontFamily: "Cormorant Garamond, serif", backgroundColor: "#0f0f14" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="border-b" style={{ borderColor: "rgba(200, 176, 110, 0.2)" }}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-2xl font-light tracking-widest uppercase" style={{ color: "#c8b06e" }}>Montclair</span>
          <div className="hidden md:flex items-center space-x-10">
            {["Practice", "Partners", "Heritage", "Contact"].map((item) => (
              <span key={item} className="text-sm tracking-[0.15em] uppercase text-white/40 hover:text-white cursor-pointer transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>{item}</span>
            ))}
          </div>
          <span className="text-xs tracking-[0.2em] uppercase px-6 py-2.5 border cursor-pointer transition-colors hover:bg-white/5" style={{ borderColor: "#c8b06e", color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>Private Inquiry</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-36 text-center">
        <p className="text-xs uppercase tracking-[0.3em] mb-8" style={{ color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>Established 1962</p>
        <h1 className="text-5xl md:text-8xl font-light leading-[1.1] tracking-wide">
          A legacy of<br /><span className="italic" style={{ color: "#c8b06e" }}>excellence.</span>
        </h1>
        <p className="mt-10 text-lg text-white/40 max-w-xl mx-auto leading-relaxed font-light">
          For over six decades, Montclair has represented heads of state, sovereign wealth funds, and distinguished families in matters requiring the utmost discretion and precision.
        </p>
        <div className="mt-12">
          <span className="inline-block px-10 py-3.5 text-sm tracking-[0.15em] uppercase border cursor-pointer transition-all hover:bg-white/5" style={{ borderColor: "#c8b06e", color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>Explore Our Practice</span>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="max-w-xs mx-auto flex items-center gap-4">
        <div className="flex-1 h-px" style={{ backgroundColor: "rgba(200, 176, 110, 0.3)" }} />
        <div className="w-2 h-2 rotate-45" style={{ backgroundColor: "#c8b06e" }} />
        <div className="flex-1 h-px" style={{ backgroundColor: "rgba(200, 176, 110, 0.3)" }} />
      </div>

      {/* Practice Areas */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-center mb-4" style={{ color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>Areas of Distinction</p>
        <h2 className="text-4xl font-light text-center mb-20">Practice Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practiceAreas.map((pa) => (
            <div key={pa.title} className="p-10 border hover:border-opacity-50 transition-colors" style={{ borderColor: "rgba(200, 176, 110, 0.15)" }}>
              <h3 className="text-2xl font-light mb-4" style={{ color: "#c8b06e" }}>{pa.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{pa.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Managing Partners */}
      <section className="py-28" style={{ backgroundColor: "rgba(200, 176, 110, 0.03)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-center mb-4" style={{ color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>Leadership</p>
          <h2 className="text-4xl font-light text-center mb-20">Managing Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {partners.map((p) => (
              <div key={p.name} className="text-center">
                <div className={`aspect-[3/4] ${p.color} mx-auto mb-8 max-w-[240px]`} style={{ border: "1px solid rgba(200, 176, 110, 0.2)" }} />
                <h3 className="text-xl font-light" style={{ color: "#c8b06e" }}>{p.name}</h3>
                <p className="text-xs uppercase tracking-[0.15em] text-white/30 mt-2" style={{ fontFamily: "Inter, sans-serif" }}>{p.title}</p>
                <p className="text-sm text-white/40 mt-4 leading-relaxed max-w-xs mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Cases Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-center mb-4" style={{ color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>Selected Matters</p>
        <h2 className="text-4xl font-light text-center mb-20">Notable Cases</h2>
        <div className="space-y-0">
          {timeline.map((item) => (
            <div key={item.year} className="flex gap-8 py-8 border-b" style={{ borderColor: "rgba(200, 176, 110, 0.1)" }}>
              <span className="text-3xl font-light shrink-0 w-24" style={{ color: "#c8b06e" }}>{item.year}</span>
              <div>
                <h3 className="text-lg font-light text-white/80">{item.matter}</h3>
                <p className="text-sm text-white/35 mt-2 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{item.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Memberships */}
      <section className="py-20" style={{ backgroundColor: "rgba(200, 176, 110, 0.03)" }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] mb-12" style={{ color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>Affiliations</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {memberships.map((m) => (
              <span key={m} className="text-sm text-white/25 tracking-wide">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-28 text-center">
        <p className="text-xs uppercase tracking-[0.3em] mb-8" style={{ color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>Begin a Conversation</p>
        <h2 className="text-4xl md:text-6xl font-light">Discreet. Decisive.<br /><span className="italic" style={{ color: "#c8b06e" }}>Distinguished.</span></h2>
        <p className="text-sm text-white/30 mt-8 max-w-md mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
          All inquiries are handled with absolute confidentiality. Our client services director will respond within 24 hours.
        </p>
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
          <span className="px-10 py-3.5 text-sm tracking-[0.15em] uppercase cursor-pointer transition-all" style={{ backgroundColor: "#c8b06e", color: "#0f0f14", fontFamily: "Inter, sans-serif" }}>Submit Private Inquiry</span>
          <span className="px-10 py-3.5 text-sm tracking-[0.15em] uppercase border cursor-pointer transition-all hover:bg-white/5" style={{ borderColor: "rgba(200, 176, 110, 0.4)", color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>+1 (212) 555-0001</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: "rgba(200, 176, 110, 0.1)" }}>
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <span className="text-lg tracking-widest uppercase font-light" style={{ color: "#c8b06e" }}>Montclair</span>
            <p className="text-xs text-white/20 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>New York &middot; London &middot; Geneva &middot; Hong Kong</p>
          </div>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Disclaimer"].map((link) => (
              <span key={link} className="text-xs text-white/20 hover:text-white/50 cursor-pointer transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>{link}</span>
            ))}
          </div>
          <span className="text-xs text-white/15" style={{ fontFamily: "Inter, sans-serif" }}>&copy; 2026 Montclair. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
