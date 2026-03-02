export default function RealEstateMinimalistDemo() {
  const properties = [
    { address: "412 Maple Ridge Drive, Austin, TX", price: "$685,000", beds: 3, baths: 2, sqft: "2,150", tag: "New Listing" },
    { address: "88 Oceanview Terrace, Santa Monica, CA", price: "$1,275,000", beds: 4, baths: 3, sqft: "3,400", tag: "Open House" },
    { address: "1600 Elm Street, Denver, CO", price: "$520,000", beds: 3, baths: 2, sqft: "1,890", tag: "Price Reduced" },
  ]

  const agents = [
    { name: "Caroline Hayes", title: "Senior Agent", specialization: "Residential Sales", closed: "142 transactions", phone: "(512) 555-0178" },
    { name: "Marcus Rivera", title: "Buyer Specialist", specialization: "First-Time Buyers", closed: "98 transactions", phone: "(512) 555-0234" },
  ]

  const neighborhoods = [
    { name: "South Congress", vibe: "Eclectic and walkable with boutique shops, live music, and some of Austin's best food trucks.", avgPrice: "$610K" },
    { name: "Westlake Hills", vibe: "Upscale family-friendly area with top-rated schools, scenic trails, and lake access.", avgPrice: "$1.2M" },
    { name: "East Austin", vibe: "Creative district experiencing rapid growth with new restaurants, galleries, and modern townhomes.", avgPrice: "$485K" },
  ]

  const testimonials = [
    { quote: "Haven made the entire process stress-free. Caroline found us our dream home in two weeks and negotiated below asking price.", author: "David & Rachel Kim", location: "South Congress" },
    { quote: "As a first-time buyer, I was nervous about the process. Marcus walked me through every step and found a place I genuinely love.", author: "Emily Torres", location: "East Austin" },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-xl font-semibold tracking-tight">HAVEN</span>
        <div className="hidden md:flex items-center space-x-10">
          {["Properties", "Neighborhoods", "Agents", "About", "Contact"].map((item) => (
            <span key={item} className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">{item}</span>
          ))}
        </div>
        <span className="text-sm font-medium px-5 py-2 border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors rounded">List Your Home</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight">Find your next home</h1>
        <p className="mt-6 text-lg text-slate-400 max-w-lg font-light">Curated properties in Austin and beyond. We believe finding the right home should feel effortless.</p>
      </section>

      {/* Featured Properties */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-12">Featured Properties</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((p) => (
            <div key={p.address} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-slate-100 rounded-sm mb-4 relative">
                <span className="absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded" style={{ backgroundColor: "#16a34a", color: "white" }}>{p.tag}</span>
              </div>
              <p className="text-xl font-semibold" style={{ color: "#16a34a" }}>{p.price}</p>
              <p className="text-sm text-slate-600 mt-1">{p.address}</p>
              <div className="flex items-center space-x-4 mt-2 text-xs text-slate-400">
                <span>{p.beds} Beds</span>
                <span>{p.baths} Baths</span>
                <span>{p.sqft} sqft</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Property Search */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-8">Find Your Property</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <label className="text-xs text-slate-500 mb-2">Location</label>
              <div className="border border-slate-200 rounded px-4 py-3 text-sm text-slate-400 bg-white">Austin, TX</div>
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-slate-500 mb-2">Price Range</label>
              <div className="border border-slate-200 rounded px-4 py-3 text-sm text-slate-400 bg-white">$300K - $1.5M</div>
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-slate-500 mb-2">Bedrooms</label>
              <div className="border border-slate-200 rounded px-4 py-3 text-sm text-slate-400 bg-white">2+</div>
            </div>
            <div className="flex items-end">
              <span className="w-full text-center py-3 text-sm font-medium text-white rounded cursor-pointer transition-colors" style={{ backgroundColor: "#16a34a" }}>Search Properties</span>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Profiles */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-12">Our Agents</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {agents.map((a) => (
            <div key={a.name} className="flex gap-6">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium">{a.name}</h3>
                <p className="text-sm font-medium mt-1" style={{ color: "#16a34a" }}>{a.title}</p>
                <p className="text-xs text-slate-400 mt-2">{a.specialization} &middot; {a.closed}</p>
                <p className="text-xs text-slate-400 mt-1">{a.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Neighborhood Guide */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-12">Neighborhood Guide</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {neighborhoods.map((n) => (
            <div key={n.name} className="border border-slate-100 rounded p-6 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-medium">{n.name}</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">{n.vibe}</p>
              <p className="text-sm font-semibold mt-4" style={{ color: "#16a34a" }}>Avg. {n.avgPrice}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-12">Client Testimonials</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((t) => (
              <div key={t.author}>
                <p className="text-lg font-light leading-relaxed text-slate-600 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm mt-6 font-medium">{t.author}</p>
                <p className="text-xs text-slate-400">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-6">Get in Touch</p>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight">Ready to find your home?</h2>
        <p className="text-slate-400 mt-4 text-sm max-w-md mx-auto">Schedule a consultation with one of our agents. No pressure, just honest guidance.</p>
        <div className="mt-8">
          <span className="inline-block px-8 py-3 text-sm font-medium text-white cursor-pointer transition-colors rounded" style={{ backgroundColor: "#16a34a" }}>Schedule a Consultation</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-sm font-semibold">HAVEN</span>
            <p className="text-xs text-slate-400 mt-1">Real estate done simply. Austin, Texas.</p>
          </div>
          <div className="flex space-x-8">
            {["Properties", "Agents", "About", "Privacy"].map((s) => (
              <span key={s} className="text-xs text-slate-400 hover:text-slate-900 cursor-pointer transition-colors">{s}</span>
            ))}
          </div>
          <span className="text-xs text-slate-300">&copy; 2026 Haven Real Estate</span>
        </div>
      </footer>
    </div>
  )
}
