export default function PortfolioLuxuryDemo() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>

      {/* NAV */}
      <nav className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <span className="text-lg font-light tracking-[0.3em] uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>Aurelius</span>
          <div className="hidden md:flex items-center space-x-10">
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-[#d4af37] cursor-pointer transition-colors">Portfolio</span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-[#d4af37] cursor-pointer transition-colors">Services</span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-[#d4af37] cursor-pointer transition-colors">About</span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-[#d4af37] cursor-pointer transition-colors">Journal</span>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] border border-[#d4af37]/30 px-5 py-2 cursor-pointer hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all">Inquire</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-32 md:py-44">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-8">Creative Direction &bull; Visual Design &bull; Brand Strategy</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Crafting visual<br />narratives for brands<br />
            <span className="italic text-[#d4af37]">of distinction</span>
          </h1>
          <p className="text-base text-white/40 max-w-lg leading-relaxed font-light">
            An independent creative studio specializing in elevated brand identities, editorial design, and digital experiences for luxury, hospitality, and fine arts clients.
          </p>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-white/50">Selected Works</h2>
            <div className="h-px flex-1 bg-white/10 ml-8" />
          </div>
          <div className="space-y-16">
            {[
              { num: "01", title: "Maison Laurent", category: "Brand Identity", year: "2025", desc: "Complete visual identity for a Parisian haute couture atelier. Bespoke typography, monogram system, packaging suite, and a digital flagship experience that mirrors the precision of their craft." },
              { num: "02", title: "The Carlisle Hotel", category: "Digital Experience", year: "2025", desc: "Website and booking platform for a heritage luxury hotel in Manhattan. Cinematic storytelling, immersive room tours, and a reservation flow designed to feel as seamless as the concierge service." },
              { num: "03", title: "Vero Wine Estates", category: "Editorial & Print", year: "2024", desc: "Annual report and brand collateral for a Napa Valley wine estate. Photographic direction, editorial layout, and a limited-edition coffee table book celebrating their 50th anniversary vintage." },
              { num: "04", title: "Atelier Noir Gallery", category: "Visual Identity", year: "2024", desc: "Rebranding of a contemporary art gallery in Chelsea. Modular identity system, exhibition catalog templates, and a gallery website with virtual walkthrough capabilities." },
            ].map((work) => (
              <div key={work.num} className="grid grid-cols-1 md:grid-cols-12 gap-8 group cursor-pointer">
                <div className="md:col-span-1">
                  <span className="text-xs text-[#d4af37] tracking-wider">{work.num}</span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-light mb-1 group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>{work.title}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">{work.category} &mdash; {work.year}</p>
                </div>
                <div className="md:col-span-7">
                  <p className="text-sm text-white/40 leading-relaxed font-light">{work.desc}</p>
                  <div className="mt-4 h-px bg-white/5 group-hover:bg-[#d4af37]/20 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / PHILOSOPHY */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-white/50 mb-8">Philosophy</h2>
            <p className="text-2xl font-light leading-relaxed text-white/80" style={{ fontFamily: "'Playfair Display', serif" }}>
              &ldquo;Design, at its finest, is an act of restraint. Every element must earn its place. Every detail must serve the whole.&rdquo;
            </p>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-white/50 mb-8">About</h2>
            <p className="text-sm text-white/40 leading-relaxed mb-4 font-light">
              Aurelius is the studio of Marcus Vane, a creative director with 15 years of experience shaping the visual language of luxury brands. Previously at Pentagram and Collins, Marcus founded Aurelius in 2019 with a singular focus: fewer clients, deeper partnerships, exceptional work.
            </p>
            <p className="text-sm text-white/40 leading-relaxed mb-6 font-light">
              The studio operates at the intersection of brand strategy and visual craft, working exclusively with clients who value longevity over trends and substance over spectacle.
            </p>
            <div className="space-y-3">
              {["Brand Strategy", "Visual Identity", "Art Direction", "Editorial Design", "Digital Experience"].map((s) => (
                <div key={s} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-[#d4af37]" />
                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/50 mb-16">Client Reflections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { quote: "Marcus understands that luxury is not about excess -- it is about intention. He distilled our 50-year heritage into a visual identity that feels both timeless and utterly contemporary.", name: "Isabelle Laurent", title: "Creative Director, Maison Laurent" },
              { quote: "Every designer talks about sophistication. Marcus is one of the very few who actually delivers it. The website he crafted for us has become the standard our competitors aspire to.", name: "Richard Bellamy", title: "General Manager, The Carlisle Hotel" },
            ].map((t) => (
              <div key={t.name} className="border-l border-[#d4af37]/30 pl-8">
                <p className="text-base text-white/60 leading-relaxed mb-8 font-light italic" style={{ fontFamily: "'Playfair Display', serif" }}>&ldquo;{t.quote}&rdquo;</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37]">{t.name}</p>
                <p className="text-xs text-white/30 mt-1">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS / RECOGNITION */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-white/50 mb-10">Recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { award: "D&AD Pencil", count: "3x Winner" },
              { award: "Awwwards", count: "Site of the Year" },
              { award: "Type Directors Club", count: "2x Honoree" },
              { award: "Brand New", count: "Best of 2024" },
            ].map((a) => (
              <div key={a.award} className="text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37] mb-1">{a.award}</p>
                <p className="text-xs text-white/30">{a.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-6">Begin a Conversation</p>
          <h2 className="text-4xl md:text-5xl font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Exceptional work begins with<br />a thoughtful conversation
          </h2>
          <p className="text-sm text-white/40 max-w-md mx-auto mb-10 font-light">
            Aurelius accepts a limited number of projects each year to ensure the highest standard of creative attention. Inquiries for 2026 are now open.
          </p>
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-[#d4af37] border border-[#d4af37]/30 px-8 py-3 cursor-pointer hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all">
            Schedule a Consultation
          </span>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-center">
          <span className="text-xs tracking-[0.3em] uppercase text-white/20 mb-4 md:mb-0" style={{ fontFamily: "'Playfair Display', serif" }}>Aurelius Studio</span>
          <div className="flex space-x-8 mb-4 md:mb-0">
            <span className="text-xs uppercase tracking-[0.15em] text-white/30 hover:text-[#d4af37] cursor-pointer transition-colors">Instagram</span>
            <span className="text-xs uppercase tracking-[0.15em] text-white/30 hover:text-[#d4af37] cursor-pointer transition-colors">LinkedIn</span>
            <span className="text-xs uppercase tracking-[0.15em] text-white/30 hover:text-[#d4af37] cursor-pointer transition-colors">Behance</span>
          </div>
          <span className="text-xs text-white/20">&copy; 2026 Aurelius. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
