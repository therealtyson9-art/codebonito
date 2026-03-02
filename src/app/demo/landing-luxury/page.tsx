export default function LandingLuxuryDemo() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>

      {/* Nav */}
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <span className="text-xl tracking-[0.3em] uppercase font-light" style={{ fontFamily: "Playfair Display, serif" }}>Aurelian</span>
          <div className="hidden md:flex items-center space-x-10">
            {["Collection", "Atelier", "Heritage", "Journal"].map((item) => (
              <span key={item} className="text-xs tracking-[0.2em] uppercase text-white/50 hover:text-[#d4af37] cursor-pointer transition-colors duration-300">{item}</span>
            ))}
          </div>
          <button className="text-xs tracking-[0.2em] uppercase text-[#d4af37] border border-[#d4af37]/40 px-6 py-2.5 hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all duration-300">
            Private Viewing
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-8 pt-32 pb-40">
          <div className="max-w-3xl">
            <div className="w-12 h-px bg-[#d4af37] mb-8" />
            <p className="text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-6 font-medium">Established 1897</p>
            <h1 className="text-5xl lg:text-7xl leading-[1.1] mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
              Where Timeless
              <br />
              <span className="italic text-[#d4af37]">Elegance</span> Meets
              <br />
              Modern Vision
            </h1>
            <p className="text-base text-white/40 leading-relaxed max-w-lg mb-12 font-light">
              For over a century, Aurelian has defined the pinnacle of luxury craftsmanship. Each piece is a testament to the enduring pursuit of perfection, handcrafted by our master artisans in Florence.
            </p>
            <div className="flex items-center space-x-8">
              <button className="text-xs tracking-[0.2em] uppercase bg-[#d4af37] text-[#0a0a0a] px-8 py-4 hover:bg-[#c4a030] transition-colors duration-300 font-semibold">
                Explore Collection
              </button>
              <span className="text-xs tracking-[0.2em] uppercase text-white/30 cursor-pointer hover:text-white/60 transition-colors duration-300">
                Our Story &rarr;
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d4af37]/5 to-transparent pointer-events-none" />
      </section>

      {/* Partners / Maisons */}
      <section className="border-y border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/20 text-center mb-10 font-medium">Featured in</p>
          <div className="flex items-center justify-center flex-wrap gap-x-16 gap-y-6">
            {["Vogue", "Robb Report", "Sotheby\u2019s", "Christie\u2019s", "Financial Times", "Monocle"].map((logo) => (
              <span key={logo} className="text-sm tracking-widest text-white/15 font-light" style={{ fontFamily: "Playfair Display, serif" }}>{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Pillars */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <div className="w-12 h-px bg-[#d4af37] mb-8" />
            <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
              The Art of
              <br />
              <span className="italic">Distinction</span>
            </h2>
            <p className="text-sm text-white/30 leading-relaxed font-light">
              Every detail is considered. Every material is sourced with intention. Our commitment to excellence is not merely a standard but a philosophy that permeates every facet of the Aurelian experience.
            </p>
          </div>
          <div className="space-y-0">
            {[
              { num: "I", title: "Master Craftsmanship", desc: "Each piece requires over 200 hours of meticulous handwork by artisans who have trained for a minimum of ten years in our Florentine atelier." },
              { num: "II", title: "Rare Materials", desc: "We source only the finest materials from select purveyors worldwide. Our leather comes from a single family-owned tannery in Tuscany, operational since 1832." },
              { num: "III", title: "Bespoke Service", desc: "Our private client advisors guide you through a fully personalized experience, from material selection to monogramming and custom configurations." },
              { num: "IV", title: "Enduring Legacy", desc: "Every Aurelian piece is accompanied by a lifetime guarantee and our signature certificate of authenticity, ensuring its provenance for generations." },
            ].map((f) => (
              <div key={f.num} className="border-t border-white/10 py-8 group">
                <div className="flex items-start space-x-6">
                  <span className="text-xs text-[#d4af37]/50 tracking-widest mt-1 font-light" style={{ fontFamily: "Playfair Display, serif" }}>{f.num}</span>
                  <div>
                    <h3 className="text-base font-medium mb-2 group-hover:text-[#d4af37] transition-colors duration-300">{f.title}</h3>
                    <p className="text-sm text-white/25 leading-relaxed font-light">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics / Heritage */}
      <section className="border-y border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: "127", label: "Years of heritage" },
              { value: "4", label: "Ateliers worldwide" },
              { value: "200+", label: "Hours per piece" },
              { value: "12", label: "Master artisans" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-[#d4af37]" style={{ fontFamily: "Playfair Display, serif" }}>{s.value}</div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-white/25 mt-3">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-16">
          <div className="w-12 h-px bg-[#d4af37] mx-auto mb-8" />
          <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "Playfair Display, serif" }}>Words of <span className="italic">Distinction</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { quote: "Aurelian represents the very apex of luxury craftsmanship. Each piece I own tells a story of extraordinary dedication and artistry that simply cannot be replicated.", author: "Countess Sophia von Haber", role: "Art Collector, Vienna" },
            { quote: "In thirty years of curating the finest objects, few houses demonstrate the unwavering commitment to perfection that Aurelian embodies. Their work transcends mere luxury.", author: "James Worthington III", role: "Editor, Robb Report" },
            { quote: "The bespoke experience was nothing short of exceptional. From the initial consultation in Florence to the final reveal, every moment was considered with impeccable care.", author: "Amara Okonkwo", role: "Private Client, London" },
          ].map((t) => (
            <div key={t.author} className="text-center">
              <span className="text-[#d4af37]/30 text-4xl" style={{ fontFamily: "Playfair Display, serif" }}>&ldquo;</span>
              <p className="text-sm text-white/40 leading-relaxed mb-8 font-light italic">{t.quote}</p>
              <div className="w-8 h-px bg-[#d4af37]/30 mx-auto mb-4" />
              <p className="text-sm font-medium text-white/70">{t.author}</p>
              <p className="text-xs text-white/20 mt-1 tracking-wider">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="border border-white/10 p-16 lg:p-24 text-center relative">
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#d4af37]/30" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#d4af37]/30" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#d4af37]/30" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#d4af37]/30" />
          <p className="text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-6">By Appointment</p>
          <h2 className="text-3xl lg:text-5xl mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
            Experience the <span className="italic">Extraordinary</span>
          </h2>
          <p className="text-sm text-white/25 max-w-md mx-auto mb-10 font-light leading-relaxed">
            We invite you to arrange a private consultation at one of our ateliers. Discover the world of Aurelian and begin your personal journey with us.
          </p>
          <button className="text-xs tracking-[0.2em] uppercase bg-[#d4af37] text-[#0a0a0a] px-10 py-4 hover:bg-[#c4a030] transition-colors duration-300 font-semibold">
            Request an Appointment
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-sm tracking-[0.3em] uppercase text-white/20 font-light" style={{ fontFamily: "Playfair Display, serif" }}>Aurelian</span>
            <div className="flex items-center space-x-8">
              {["Florence", "Paris", "London", "Tokyo"].map((city) => (
                <span key={city} className="text-[11px] tracking-[0.15em] uppercase text-white/15 hover:text-[#d4af37]/60 cursor-pointer transition-colors duration-300">{city}</span>
              ))}
            </div>
            <span className="text-[11px] text-white/15 tracking-wider">&copy; 2025 Maison Aurelian</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
