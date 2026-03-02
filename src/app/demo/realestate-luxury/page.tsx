export const dynamic = "force-dynamic";
export default function RealEstateLuxuryDemo() {
  const properties = [
    { name: 'The Penthouse at One57', location: 'Midtown Manhattan', price: '$28,500,000', beds: 5, baths: 6, sqft: '6,200' },
    { name: 'Cliffside Estate', location: 'Malibu, CA', price: '$42,000,000', beds: 7, baths: 9, sqft: '12,400' },
    { name: 'Lake Geneva Villa', location: 'Lake Geneva, WI', price: '$8,750,000', beds: 6, baths: 5, sqft: '8,900' },
  ]
  const neighborhoods = ['Upper East Side', 'Beverly Hills', 'Palm Beach', 'Aspen', 'The Hamptons', 'Miami Beach']
  const stats = [
    { value: '$4.2B', label: 'Total Sales Volume' },
    { value: '320+', label: 'Properties Sold' },
    { value: '12', label: 'Years of Excellence' },
    { value: '98%', label: 'Client Satisfaction' },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a', fontFamily: "'Lato', sans-serif", color: '#f5f5f5' }}>
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />

      {/* Nav — transparent overlay */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <span className="text-lg tracking-widest uppercase" style={{ fontFamily: "'Cinzel', serif", color: '#d4af37' }}>Aurelian</span>
          <div className="hidden md:flex items-center gap-10">
            {['Properties', 'Neighborhoods', 'About', 'Contact'].map(link => (
              <a key={link} href="#" className="text-xs uppercase tracking-widest transition hover:opacity-70" style={{ color: '#f5f5f5' }}>{link}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero — full screen dark */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6" style={{ backgroundColor: '#0f0f0f' }}>
        <div className="absolute inset-8 border" style={{ borderColor: '#d4af3730' }} />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: '#d4af37' }}>Luxury Real Estate</p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8" style={{ fontFamily: "'Cinzel', serif", color: '#f5f5f5' }}>
            Exceptional Properties<br />for Exceptional Lives
          </h1>
          <p className="text-sm max-w-xl mx-auto mb-10 font-light leading-relaxed" style={{ color: '#999999' }}>
            Curating the world&apos;s most distinguished residences for discerning buyers who accept nothing less than extraordinary.
          </p>
          <button className="px-10 py-3 text-xs uppercase tracking-[0.2em] font-bold border transition hover:bg-white/5" style={{ borderColor: '#d4af37', color: '#d4af37', backgroundColor: 'transparent' }}>
            View Collection
          </button>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-2xl tracking-wider text-center mb-16 uppercase" style={{ fontFamily: "'Cinzel', serif", color: '#d4af37' }}>Featured Properties</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {properties.map(p => (
            <div key={p.name} className="group">
              <div className="aspect-[4/3] mb-6 flex items-center justify-center text-5xl" style={{ backgroundColor: '#1a1a1a', border: '1px solid #d4af3720' }}>
                🏛️
              </div>
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: '#d4af37' }}>{p.location}</p>
              <h3 className="text-xl mb-3" style={{ fontFamily: "'Cinzel', serif" }}>{p.name}</h3>
              <p className="text-2xl font-bold mb-3" style={{ color: '#d4af37' }}>{p.price}</p>
              <div className="flex gap-4 text-xs" style={{ color: '#777777' }}>
                <span>{p.beds} Beds</span>
                <span>{p.baths} Baths</span>
                <span>{p.sqft} SF</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Property Search */}
      <section className="py-16 px-8" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl tracking-wider text-center mb-8 uppercase" style={{ fontFamily: "'Cinzel', serif", color: '#d4af37' }}>Find Your Residence</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <select className="px-4 py-3 text-sm outline-none" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#999' }}>
              <option>Location</option><option>New York</option><option>Los Angeles</option><option>Miami</option>
            </select>
            <select className="px-4 py-3 text-sm outline-none" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#999' }}>
              <option>Price Range</option><option>$5M – $10M</option><option>$10M – $25M</option><option>$25M+</option>
            </select>
            <select className="px-4 py-3 text-sm outline-none" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#999' }}>
              <option>Bedrooms</option><option>3+</option><option>5+</option><option>7+</option>
            </select>
            <button className="px-6 py-3 text-xs uppercase tracking-[0.2em] font-bold border" style={{ borderColor: '#d4af37', color: '#d4af37' }}>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Neighborhoods — horizontal scroll */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl tracking-wider text-center mb-16 uppercase" style={{ fontFamily: "'Cinzel', serif", color: '#d4af37' }}>Neighborhoods</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {neighborhoods.map(n => (
              <div key={n} className="min-w-[200px] flex-shrink-0 aspect-[3/4] flex items-end p-6" style={{ backgroundColor: '#1a1a1a', border: '1px solid #d4af3720' }}>
                <span className="text-sm uppercase tracking-wider">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Profile */}
      <section className="py-24 px-8" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[3/4] flex items-center justify-center text-6xl" style={{ backgroundColor: '#1a1a1a', border: '1px solid #d4af3720' }}>👤</div>
          <div>
            <p className="text-xs uppercase tracking-wider mb-4" style={{ color: '#d4af37' }}>Lead Agent</p>
            <h2 className="text-3xl mb-4" style={{ fontFamily: "'Cinzel', serif" }}>Victoria Ashworth</h2>
            <p className="font-light leading-relaxed mb-6" style={{ color: '#999999' }}>
              With over 15 years in luxury real estate and $2.1 billion in career sales, Victoria brings an unmatched network and negotiation expertise to every transaction.
            </p>
            <button className="px-8 py-3 text-xs uppercase tracking-[0.2em] font-bold border" style={{ borderColor: '#d4af37', color: '#d4af37' }}>
              Schedule a Private Showing
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-8" style={{ borderTop: '1px solid #d4af3730', borderBottom: '1px solid #d4af3730' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-3xl font-bold mb-1" style={{ fontFamily: "'Cinzel', serif", color: '#d4af37' }}>{s.value}</p>
              <p className="text-xs uppercase tracking-wider" style={{ color: '#666666' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-xl mx-auto px-8 py-24 text-center">
        <h2 className="text-2xl tracking-wider mb-8 uppercase" style={{ fontFamily: "'Cinzel', serif", color: '#d4af37' }}>Private Inquiry</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full px-4 py-3 text-sm outline-none" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#f5f5f5' }} />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 text-sm outline-none" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#f5f5f5' }} />
          <input type="tel" placeholder="Phone" className="w-full px-4 py-3 text-sm outline-none" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#f5f5f5' }} />
          <textarea placeholder="Tell us what you are looking for" rows={4} className="w-full px-4 py-3 text-sm outline-none resize-none" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', color: '#f5f5f5' }} />
          <button type="submit" className="w-full py-3 text-xs uppercase tracking-[0.2em] font-bold border" style={{ borderColor: '#d4af37', color: '#d4af37' }}>
            Submit Inquiry
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center" style={{ borderTop: '1px solid #d4af3720' }}>
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#d4af37' }}>Aurelian</p>
        <p className="text-xs" style={{ color: '#555555' }}>Park Avenue, New York | Rodeo Drive, Beverly Hills | Collins Avenue, Miami</p>
      </footer>
    </div>
  )
}
