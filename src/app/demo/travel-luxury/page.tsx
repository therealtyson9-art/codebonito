export const dynamic = "force-dynamic";
export default function TravelLuxuryDemo() {
  const destinations = [
    { name: 'Santorini, Greece', desc: 'Cliffside suites overlooking the caldera. Private sunset yacht cruises and wine cave tastings.', from: '$4,200/night' },
    { name: 'Kyoto, Japan', desc: 'Historic ryokan stays with kaiseki dining. Temple gardens, geisha districts, and bamboo forest walks.', from: '$3,800/night' },
    { name: 'Patagonia, Chile', desc: 'Remote luxury lodges at the edge of the world. Glacier treks, horseback rides, and stargazing.', from: '$5,100/night' },
  ]
  const experiences = [
    { icon: '🛥️', label: 'Private Yachts' },
    { icon: '🍷', label: 'Wine & Dine' },
    { icon: '🏔️', label: 'Adventure' },
    { icon: '🧖', label: 'Spa & Wellness' },
    { icon: '🎭', label: 'Cultural Tours' },
    { icon: '✈️', label: 'Private Aviation' },
  ]
  const stories = [
    { quote: 'Meridian curated a once-in-a-lifetime anniversary trip through Japan. Every detail was flawless — from the private tea ceremony in Kyoto to the helicopter transfer to our ryokan.', author: 'Catherine & Edward L.', trip: 'Japan, 14 nights' },
    { quote: 'We have traveled with Meridian three times now and each experience has surpassed the last. They understand luxury is not about excess — it is about intention.', author: 'The Harrington Family', trip: 'Patagonia, 10 nights' },
  ]
  const partners = ['Four Seasons', 'Aman Resorts', 'Belmond', 'One&Only', 'Rosewood', 'Six Senses']

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1a1a2e', fontFamily: "'Montserrat', sans-serif", color: '#eae0d5' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />

      {/* Nav — overlay, uppercase */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <span className="text-lg tracking-[0.2em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#c9b037' }}>Meridian</span>
          <div className="hidden md:flex items-center gap-10">
            {['Destinations', 'Experiences', 'Our Story', 'Inquire'].map(link => (
              <a key={link} href="#" className="text-xs uppercase tracking-[0.15em] transition hover:opacity-70" style={{ color: '#eae0d5' }}>{link}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero — full viewport, thin gold border */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6" style={{ background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)' }}>
        <div className="absolute inset-6 md:inset-12 border" style={{ borderColor: '#c9b03730' }} />
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] mb-8" style={{ color: '#c9b037' }}>Bespoke Luxury Travel</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#eae0d5' }}>
            Travel Beyond<br />the Ordinary
          </h1>
          <p className="text-sm max-w-lg mx-auto mb-10 font-light leading-relaxed" style={{ color: '#8a8078' }}>
            Meridian crafts singular journeys for travelers who seek depth over distance, meaning over mileage, and transformation over tourism.
          </p>
          <button className="px-10 py-3 text-xs uppercase tracking-[0.2em] font-medium border transition hover:bg-white/5" style={{ borderColor: '#c9b037', color: '#c9b037' }}>
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* Destinations — full-width image cards */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl tracking-[0.15em] uppercase mb-16" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#c9b037' }}>Destinations</h2>
          <div className="space-y-8">
            {destinations.map(d => (
              <div key={d.name} className="relative overflow-hidden" style={{ backgroundColor: '#16213e' }}>
                <div className="grid md:grid-cols-2">
                  <div className="aspect-[16/9] md:aspect-auto flex items-center justify-center text-6xl" style={{ backgroundColor: '#1f2b47' }}>
                    🌍
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <h3 className="text-2xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{d.name}</h3>
                    <p className="text-sm leading-relaxed mb-6 font-light" style={{ color: '#8a8078' }}>{d.desc}</p>
                    <p className="text-sm" style={{ color: '#c9b037' }}>From {d.from}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience types — icon grid */}
      <section className="py-20 px-8" style={{ borderTop: '1px solid #c9b03720', borderBottom: '1px solid #c9b03720' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl tracking-[0.15em] uppercase mb-16" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#c9b037' }}>Experiences</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {experiences.map(e => (
              <div key={e.label}>
                <span className="text-3xl block mb-3">{e.icon}</span>
                <span className="text-xs uppercase tracking-wider" style={{ color: '#8a8078' }}>{e.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury amenities — side-by-side */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="aspect-[4/3] flex items-center justify-center text-5xl" style={{ backgroundColor: '#16213e' }}>🏨</div>
          <div className="aspect-[4/3] flex items-center justify-center text-5xl" style={{ backgroundColor: '#16213e' }}>🍽️</div>
        </div>
        <div className="max-w-3xl mx-auto text-center mt-12">
          <h3 className="text-xl mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#c9b037' }}>Uncompromising Luxury</h3>
          <p className="text-sm font-light leading-relaxed" style={{ color: '#8a8078' }}>
            From private transfers and dedicated concierges to Michelin-starred dining and bespoke excursions — every element of your journey is meticulously orchestrated.
          </p>
        </div>
      </section>

      {/* Guest Stories — editorial */}
      <section className="py-24 px-8" style={{ backgroundColor: '#16213e' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl tracking-[0.15em] uppercase mb-16" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#c9b037' }}>Guest Stories</h2>
          <div className="space-y-16">
            {stories.map(s => (
              <blockquote key={s.author} className="text-center">
                <p className="text-lg italic leading-relaxed mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#eae0d5' }}>
                  &ldquo;{s.quote}&rdquo;
                </p>
                <div>
                  <cite className="text-sm not-italic font-medium" style={{ color: '#c9b037' }}>{s.author}</cite>
                  <p className="text-xs mt-1" style={{ color: '#6b6360' }}>{s.trip}</p>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Inquiry */}
      <section className="max-w-xl mx-auto px-8 py-24 text-center">
        <h2 className="text-2xl tracking-[0.15em] uppercase mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#c9b037' }}>Begin Planning</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full px-4 py-3 text-sm outline-none" style={{ backgroundColor: '#16213e', border: '1px solid #2a2a4a', color: '#eae0d5' }} />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 text-sm outline-none" style={{ backgroundColor: '#16213e', border: '1px solid #2a2a4a', color: '#eae0d5' }} />
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Destination" className="px-4 py-3 text-sm outline-none" style={{ backgroundColor: '#16213e', border: '1px solid #2a2a4a', color: '#eae0d5' }} />
            <input type="text" placeholder="Travel Dates" className="px-4 py-3 text-sm outline-none" style={{ backgroundColor: '#16213e', border: '1px solid #2a2a4a', color: '#eae0d5' }} />
          </div>
          <textarea placeholder="Tell us about your ideal journey" rows={4} className="w-full px-4 py-3 text-sm outline-none resize-none" style={{ backgroundColor: '#16213e', border: '1px solid #2a2a4a', color: '#eae0d5' }} />
          <button type="submit" className="w-full py-3 text-xs uppercase tracking-[0.2em] font-medium border" style={{ borderColor: '#c9b037', color: '#c9b037' }}>
            Submit Inquiry
          </button>
        </form>
      </section>

      {/* Partner Brands */}
      <section className="py-12 px-8" style={{ borderTop: '1px solid #c9b03720' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs uppercase tracking-[0.2em] mb-8" style={{ color: '#6b6360' }}>Preferred Partners</p>
          <div className="flex flex-wrap justify-center gap-10">
            {partners.map(p => (
              <span key={p} className="text-xs tracking-wider uppercase" style={{ color: '#4a4540' }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center" style={{ borderTop: '1px solid #c9b03720' }}>
        <p className="text-sm tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#c9b037' }}>Meridian</p>
        <p className="text-xs" style={{ color: '#4a4540' }}>New York | London | Singapore | Sydney</p>
      </footer>
    </div>
  )
}
