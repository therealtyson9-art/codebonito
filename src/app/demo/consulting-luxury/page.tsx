export default function ConsultingLuxuryDemo() {
  const services = [
    { title: "Executive Advisory", desc: "Confidential, board-level counsel for chief executives navigating inflection points, succession, and legacy-defining decisions." },
    { title: "Board Strategy", desc: "Governance optimization, board composition analysis, and strategic alignment for organizations where the stakes demand perfection." },
    { title: "M&A Due Diligence", desc: "Rigorous evaluation of acquisition targets, synergy modeling, and integration planning for transactions of consequence." },
    { title: "Private Equity", desc: "Value creation roadmaps, portfolio company optimization, and exit strategy refinement for discerning investment partners." },
  ]

  const partners = [
    { name: "Sir Edmund Blackwell", title: "Founding Managing Partner", pedigree: "Former Senior Advisor to three FTSE 100 boards. Oxford PPE, Harvard MBA. 30 years shaping the trajectory of the world's most consequential organizations." },
    { name: "Isabelle Fontaine-Laurent", title: "Managing Partner, Europe", pedigree: "Former Global Head of Strategy at a leading Swiss private bank. Sciences Po, INSEAD. Trusted by sovereign wealth funds and dynastic families alike." },
    { name: "Richard Ashworth III", title: "Managing Partner, Americas", pedigree: "Former Vice Chairman at Goldman Sachs. Yale, Wharton. Two decades guiding C-suites through transformative transactions exceeding $100B in aggregate value." },
  ]

  const portfolio = [
    "Fortune 50 Technology Conglomerate",
    "European Sovereign Wealth Fund",
    "Global Pharmaceutical Leader",
    "Multinational Energy Corporation",
    "Generational Family Office",
    "Tier-1 Private Equity Firm",
  ]

  const terms = [
    { term: "Engagement Minimum", detail: "$500,000 per quarter" },
    { term: "Confidentiality", detail: "All engagements governed by bespoke NDA and conflict protocols" },
    { term: "Availability", detail: "We accept no more than twelve active mandates at any given time" },
    { term: "Access", detail: "Direct partner access guaranteed. No junior staffing. No delegation." },
  ]

  return (
    <div className="min-h-screen text-white" style={{ fontFamily: "'Cormorant Garamond', serif", backgroundColor: "#0a0a14" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-8 py-8 flex items-center justify-between">
        <span className="text-xl font-semibold tracking-widest" style={{ color: "#c8b06e" }}>AURELIAN</span>
        <div className="hidden md:flex items-center space-x-10">
          {["Advisory", "Partners", "Portfolio", "Engage"].map((item) => (
            <span key={item} className="text-sm text-neutral-500 hover:text-white cursor-pointer transition-colors tracking-widest uppercase" style={{ fontFamily: "Inter, sans-serif" }}>{item}</span>
          ))}
        </div>
        <span className="text-sm tracking-widest uppercase cursor-pointer px-5 py-2 border" style={{ fontFamily: "Inter, sans-serif", borderColor: "#c8b06e", color: "#c8b06e" }}>Inquire</span>
      </nav>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8"><div className="border-t" style={{ borderColor: "#1a1a2e" }} /></div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 py-32">
        <p className="text-xs uppercase tracking-[0.3em] mb-8" style={{ color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>Est. 1996 &middot; London &middot; New York &middot; Geneva</p>
        <h1 className="text-4xl md:text-7xl font-light leading-tight tracking-tight max-w-3xl" style={{ color: "#e8e8e8" }}>
          Exceptional counsel<br />for exceptional leaders.
        </h1>
        <p className="mt-10 text-lg text-neutral-500 max-w-xl leading-relaxed font-light">
          Aurelian serves a select roster of the world&apos;s most influential organizations and individuals with the discretion, depth, and dedication their position demands.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8"><div className="border-t" style={{ borderColor: "#1a1a2e" }} /></div>

      {/* Elite Services */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <p className="text-xs uppercase tracking-[0.3em] mb-16" style={{ color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>Our Practice</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((s) => (
            <div key={s.title}>
              <h3 className="text-2xl font-light mb-4" style={{ color: "#c8b06e" }}>{s.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8"><div className="border-t" style={{ borderColor: "#1a1a2e" }} /></div>

      {/* Managing Partners */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <p className="text-xs uppercase tracking-[0.3em] mb-16" style={{ color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>Managing Partners</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {partners.map((p) => (
            <div key={p.name}>
              <div className="aspect-[3/4] mb-8 rounded-sm" style={{ border: "1px solid #c8b06e", backgroundColor: "#0f0f1e" }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full" style={{ border: "1px solid #c8b06e30" }} />
                </div>
              </div>
              <h3 className="text-xl font-light" style={{ color: "#e8e8e8" }}>{p.name}</h3>
              <p className="text-xs uppercase tracking-widest mt-2" style={{ color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>{p.title}</p>
              <p className="text-sm text-neutral-500 mt-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{p.pedigree}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8"><div className="border-t" style={{ borderColor: "#1a1a2e" }} /></div>

      {/* Client Portfolio */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <p className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>Client Portfolio</p>
        <p className="text-sm text-neutral-600 mb-16 max-w-lg" style={{ fontFamily: "Inter, sans-serif" }}>
          Discretion precludes disclosure. The following represents the caliber of organizations we are privileged to serve.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolio.map((p) => (
            <div key={p} className="py-6 px-8 border rounded-sm text-center" style={{ borderColor: "#1a1a2e" }}>
              <p className="text-sm font-light tracking-wider text-neutral-400">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8"><div className="border-t" style={{ borderColor: "#1a1a2e" }} /></div>

      {/* Engagement Terms */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <p className="text-xs uppercase tracking-[0.3em] mb-16" style={{ color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>Terms of Engagement</p>
        <div className="space-y-0">
          {terms.map((t) => (
            <div key={t.term} className="py-8 border-b flex flex-col md:flex-row md:items-center gap-4" style={{ borderColor: "#1a1a2e" }}>
              <span className="text-lg font-light w-64 shrink-0" style={{ color: "#c8b06e" }}>{t.term}</span>
              <span className="text-sm text-neutral-500" style={{ fontFamily: "Inter, sans-serif" }}>{t.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-8 py-24 text-center">
        <p className="text-3xl md:text-4xl font-light max-w-xl mx-auto leading-relaxed" style={{ color: "#e8e8e8" }}>
          If your ambitions warrant singular counsel, we invite a conversation.
        </p>
        <div className="mt-12">
          <span className="inline-block px-10 py-4 text-sm uppercase tracking-[0.2em] cursor-pointer border" style={{ borderColor: "#c8b06e", color: "#c8b06e", fontFamily: "Inter, sans-serif" }}>Request an Introduction</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: "#1a1a2e" }}>
        <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-sm tracking-widest" style={{ color: "#c8b06e" }}>AURELIAN</span>
            <p className="text-xs text-neutral-700 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>London &middot; New York &middot; Geneva</p>
          </div>
          <div className="flex space-x-8">
            {["Privacy", "Legal", "Regulatory Disclosures"].map((s) => (
              <span key={s} className="text-xs text-neutral-600 hover:text-neutral-400 cursor-pointer transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>{s}</span>
            ))}
          </div>
          <span className="text-xs text-neutral-700" style={{ fontFamily: "Inter, sans-serif" }}>&copy; 2026 Aurelian Partners LLP</span>
        </div>
      </footer>
    </div>
  )
}
