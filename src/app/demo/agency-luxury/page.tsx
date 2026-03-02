export default function AgencyLuxuryDemo() {
  const services = [
    { title: "Brand Architecture", desc: "We sculpt brand identities that command attention and endure beyond trends. Every touchpoint is curated to reflect the essence of your vision." },
    { title: "Digital Experiences", desc: "Immersive digital environments designed with cinematic precision. We craft interfaces that feel as intentional as the finest editorial spreads." },
    { title: "Strategic Positioning", desc: "Market intelligence and brand strategy that places you exactly where you belong \u2014 at the pinnacle of your category." },
    { title: "Content Direction", desc: "From photography art direction to editorial storytelling, we create content that elevates your brand narrative to an art form." },
  ]

  const caseStudies = [
    { client: "Maison Aurel", category: "Luxury Fashion House", desc: "A complete brand reimagining for a heritage Parisian fashion house, merging 80 years of tradition with contemporary digital presence.", year: "2026" },
    { client: "The Carrington", category: "Private Members Club", desc: "Crafting the identity and digital experience for London\u2019s most exclusive new private members club, from concept to grand opening.", year: "2025" },
    { client: "Voss & Sterling", category: "Fine Jewellery", desc: "An editorial e-commerce experience that increased average order value by 340% while preserving the brand\u2019s artisanal intimacy.", year: "2025" },
  ]

  const team = [
    { name: "Isabelle Fontaine", role: "Founder & Creative Director", bio: "Former creative lead at Herm\u00e8s Digital. 15 years shaping luxury brand narratives." },
    { name: "Alexander Voss", role: "Design Director", bio: "Trained in Swiss typography. Obsessed with the intersection of restraint and impact." },
    { name: "Naomi Sato", role: "Strategy Partner", bio: "Ex-Bain consultant specializing in luxury positioning and market architecture." },
    { name: "Marcus Webb", role: "Technical Director", bio: "Builds digital experiences with the precision of fine watchmaking. Every millisecond matters." },
  ]

  const testimonials = [
    { quote: "They understood the weight of our heritage and translated it into something breathtakingly modern without losing a single thread of who we are.", author: "Cl\u00e9ment Aurel", title: "Creative Director, Maison Aurel" },
    { quote: "The level of craft and intentionality was unlike anything we\u2019ve experienced. Every detail was considered, every choice deliberate.", author: "Victoria Ashworth", title: "Founder, The Carrington" },
  ]

  const clients = ["Maison Aurel", "The Carrington", "Voss & Sterling", "Atelier Noir", "Belvedere Group", "Crest & Co"]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
        <span className="text-lg tracking-[0.3em] uppercase text-[#d4af37]" style={{ fontFamily: "Playfair Display, serif" }}>Atelier</span>
        <div className="hidden md:flex items-center space-x-12">
          {["Portfolio", "Services", "Studio", "Contact"].map((item) => (
            <span key={item} className="text-xs uppercase tracking-[0.2em] text-white/40 hover:text-[#d4af37] cursor-pointer transition-colors duration-500">{item}</span>
          ))}
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-white/40 hover:text-[#d4af37] cursor-pointer transition-colors duration-500">Inquire</span>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-32 pb-40">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-8">Creative studio for discerning brands</p>
          <h1 className="text-6xl md:text-8xl leading-[0.9] tracking-tight" style={{ fontFamily: "Playfair Display, serif" }}>
            Where vision<br />meets <em className="text-[#d4af37]">mastery</em>.
          </h1>
          <p className="mt-12 text-base text-white/40 max-w-md leading-relaxed font-light">
            We partner with a select number of luxury brands each year, dedicating the depth of attention that exceptional work demands.
          </p>
          <div className="mt-12 flex items-center space-x-8">
            <span className="px-8 py-4 border border-[#d4af37] text-[#d4af37] text-xs uppercase tracking-[0.2em] hover:bg-[#d4af37] hover:text-[#0a0a0a] cursor-pointer transition-all duration-500">View Portfolio</span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/30 hover:text-[#d4af37] cursor-pointer transition-colors duration-500">Our Approach &rarr;</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-8"><div className="border-t border-white/10" /></div>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-4">Expertise</p>
            <h2 className="text-4xl leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>Crafted with<br />precision.</h2>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((s) => (
              <div key={s.title} className="group">
                <div className="w-8 h-px bg-[#d4af37] mb-6 group-hover:w-16 transition-all duration-500" />
                <h3 className="text-lg font-light mb-3" style={{ fontFamily: "Playfair Display, serif" }}>{s.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-8"><div className="border-t border-white/10" /></div>

      {/* Case Studies */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-20">Selected Work</p>
        <div className="space-y-0">
          {caseStudies.map((cs) => (
            <div key={cs.client} className="group py-16 border-b border-white/5 cursor-pointer hover:border-white/20 transition-all duration-500">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <span className="text-xs text-white/20 uppercase tracking-wider">{cs.year}</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-3xl font-light group-hover:text-[#d4af37] transition-colors duration-500" style={{ fontFamily: "Playfair Display, serif" }}>{cs.client}</h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-white/30 mt-2">{cs.category}</p>
                </div>
                <div className="md:col-span-4">
                  <p className="text-sm text-white/35 leading-relaxed font-light">{cs.desc}</p>
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <span className="text-xs text-white/20 group-hover:text-[#d4af37] transition-colors duration-500">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#111111] py-32">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-20">The Studio</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-[3/4] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] mb-6 group-hover:from-[#1a1a18] group-hover:to-[#0f0f0d] transition-all duration-500" />
                <h3 className="text-sm font-light" style={{ fontFamily: "Playfair Display, serif" }}>{m.name}</h3>
                <p className="text-xs text-[#d4af37] mt-1 uppercase tracking-[0.15em]">{m.role}</p>
                <p className="text-xs text-white/25 mt-3 leading-relaxed font-light">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-20">Client Words</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {testimonials.map((t) => (
            <div key={t.author}>
              <p className="text-xl font-light leading-relaxed text-white/60 italic" style={{ fontFamily: "Playfair Display, serif" }}>&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-8">
                <div className="w-8 h-px bg-[#d4af37] mb-4" />
                <p className="text-sm font-light">{t.author}</p>
                <p className="text-xs text-white/25 mt-1">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Logos */}
      <div className="max-w-7xl mx-auto px-8"><div className="border-t border-white/10" /></div>
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-wrap justify-center items-center gap-16">
          {clients.map((name) => (
            <span key={name} className="text-xs uppercase tracking-[0.25em] text-white/15 hover:text-[#d4af37] cursor-pointer transition-colors duration-500">{name}</span>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-8 py-32 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-8">Begin</p>
        <h2 className="text-5xl md:text-7xl leading-[0.9]" style={{ fontFamily: "Playfair Display, serif" }}>
          Every masterpiece<br />starts with a <em className="text-[#d4af37]">conversation</em>.
        </h2>
        <p className="text-sm text-white/30 mt-8 max-w-md mx-auto font-light leading-relaxed">
          We accept a limited number of engagements annually. If you believe your brand deserves extraordinary attention, we would be honored to hear from you.
        </p>
        <div className="mt-12">
          <span className="inline-block px-10 py-4 border border-[#d4af37] text-[#d4af37] text-xs uppercase tracking-[0.2em] hover:bg-[#d4af37] hover:text-[#0a0a0a] cursor-pointer transition-all duration-500">Schedule a Private Consultation</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="text-sm tracking-[0.3em] uppercase text-[#d4af37]" style={{ fontFamily: "Playfair Display, serif" }}>Atelier</span>
            <p className="text-xs text-white/20 mt-2 font-light">Paris &middot; London &middot; New York</p>
          </div>
          <div className="flex space-x-10">
            {["Instagram", "LinkedIn", "Behance"].map((s) => (
              <span key={s} className="text-xs text-white/20 hover:text-[#d4af37] cursor-pointer transition-colors duration-500 uppercase tracking-[0.15em]">{s}</span>
            ))}
          </div>
          <span className="text-xs text-white/15 font-light">&copy; 2026 Atelier Creative Studio</span>
        </div>
      </footer>
    </div>
  )
}
