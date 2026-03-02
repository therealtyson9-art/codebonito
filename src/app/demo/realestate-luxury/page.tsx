export default function RealEstateLuxuryDemo() {
  const listings = [
    { name: "The Pinnacle Penthouse", location: "Manhattan, New York", price: "$4,200,000", beds: 3, baths: 4, sqft: "4,800", feature: "360-degree skyline views from the 58th floor with private rooftop terrace" },
    { name: "Ashford Manor Estate", location: "Greenwich, Connecticut", price: "$8,700,000", beds: 7, baths: 9, sqft: "12,500", feature: "Gated 8-acre estate with guest house, pool pavilion, and equestrian facilities" },
    { name: "Villa Serenata", location: "Palm Beach, Florida", price: "$3,500,000", beds: 5, baths: 5, sqft: "6,200", feature: "Oceanfront Mediterranean villa with private dock and resort-style pool" },
  ]

  const services = [
    { name: "Private Acquisitions", desc: "Access to exclusive off-market properties and pre-launch developments available only through our network." },
    { name: "Concierge Relocation", desc: "White-glove moving coordination including interior design referrals, staff placement, and lifestyle setup." },
    { name: "Investment Portfolio", desc: "Strategic real estate investment management across residential, commercial, and international markets." },
    { name: "Valuation & Appraisal", desc: "Discreet, accurate market valuations conducted by certified appraisers with luxury market expertise." },
  ]

  const agents = [
    { name: "Victoria Ashford", title: "Principal Broker", volume: "$320M lifetime sales", specialty: "Manhattan Penthouses & Townhouses" },
    { name: "Sebastian Cross", title: "Senior Director", volume: "$245M lifetime sales", specialty: "Waterfront & Estate Properties" },
    { name: "Isabelle Laurent", title: "International Liaison", volume: "$180M lifetime sales", specialty: "Global Clientele & Diplomatic Residences" },
  ]

  const cities = [
    { city: "New York", properties: "48 exclusive listings" },
    { city: "London", properties: "32 exclusive listings" },
    { city: "Dubai", properties: "21 exclusive listings" },
    { city: "Monaco", properties: "14 exclusive listings" },
  ]

  return (
    <div className="min-h-screen text-white" style={{ fontFamily: "'Playfair Display', serif", backgroundColor: "#0d1117" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between border-b" style={{ borderColor: "#d4af3733" }}>
        <span className="text-xl font-bold tracking-widest" style={{ color: "#d4af37" }}>AURELIAN</span>
        <div className="hidden md:flex items-center space-x-10">
          {["Collection", "Services", "Our Team", "Global", "Contact"].map((item) => (
            <span key={item} className="text-sm cursor-pointer transition-colors hover:opacity-100 opacity-60" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>{item}</span>
          ))}
        </div>
        <span className="text-xs tracking-widest px-5 py-2 border cursor-pointer transition-colors hover:bg-white/5" style={{ borderColor: "#d4af37", color: "#d4af37", fontFamily: "Inter, sans-serif" }}>PRIVATE ACCESS</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">
        <p className="text-xs uppercase tracking-[0.3em] mb-6 opacity-50" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>The Art of Exceptional Living</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Extraordinary properties<br />for <span style={{ color: "#d4af37" }}>extraordinary</span> lives
        </h1>
        <p className="mt-8 text-base text-gray-400 max-w-lg mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>A curated portfolio of the world&apos;s most distinguished residences, presented with the discretion and expertise your lifestyle demands.</p>
        <div className="mt-10 flex justify-center gap-6">
          <span className="px-8 py-3 text-sm tracking-wider cursor-pointer transition-colors" style={{ backgroundColor: "#d4af37", color: "#0d1117", fontFamily: "Inter, sans-serif" }}>View Collection</span>
          <span className="px-8 py-3 text-sm tracking-wider border cursor-pointer transition-colors hover:bg-white/5" style={{ borderColor: "#d4af37", color: "#d4af37", fontFamily: "Inter, sans-serif" }}>Schedule Viewing</span>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto flex items-center gap-4 py-4">
        <div className="flex-1 h-px" style={{ backgroundColor: "#d4af3733" }} />
        <span style={{ color: "#d4af37" }} className="text-xs">&#9670;</span>
        <div className="flex-1 h-px" style={{ backgroundColor: "#d4af3733" }} />
      </div>

      {/* Luxury Listings */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] mb-12 opacity-50" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>Featured Collection</p>
        <div className="space-y-10">
          {listings.map((l) => (
            <div key={l.name} className="border rounded-sm p-8 hover:border-opacity-60 transition-colors cursor-pointer" style={{ borderColor: "#d4af3740" }}>
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold">{l.name}</h3>
                  <p className="text-sm mt-2 opacity-60" style={{ fontFamily: "Inter, sans-serif" }}>{l.location}</p>
                  <p className="text-sm mt-4 text-gray-400 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{l.feature}</p>
                  <div className="flex items-center space-x-6 mt-4 text-xs opacity-50" style={{ fontFamily: "Inter, sans-serif" }}>
                    <span>{l.beds} Bedrooms</span>
                    <span>{l.baths} Bathrooms</span>
                    <span>{l.sqft} sqft</span>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <p className="text-3xl font-bold" style={{ color: "#d4af37" }}>{l.price}</p>
                  <span className="text-xs tracking-wider mt-4 px-4 py-2 border cursor-pointer transition-colors hover:bg-white/5" style={{ borderColor: "#d4af37", color: "#d4af37", fontFamily: "Inter, sans-serif" }}>REQUEST DETAILS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive Services */}
      <section className="py-20" style={{ backgroundColor: "#0a0e14" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] mb-12 opacity-50" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>Bespoke Services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.name} className="border-l-2 pl-6 py-3" style={{ borderColor: "#d4af37" }}>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Agents */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] mb-12 opacity-50" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>Distinguished Advisors</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agents.map((a) => (
            <div key={a.name} className="text-center">
              <div className="w-28 h-28 rounded-full mx-auto mb-5 border-2" style={{ borderColor: "#d4af37", backgroundColor: "#1a1f2b" }} />
              <h3 className="text-xl font-bold">{a.name}</h3>
              <p className="text-xs mt-1" style={{ color: "#d4af37", fontFamily: "Inter, sans-serif" }}>{a.title}</p>
              <p className="text-xs text-gray-500 mt-2" style={{ fontFamily: "Inter, sans-serif" }}>{a.volume}</p>
              <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>{a.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Private Viewings CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: "#d4af37" }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#0d1117" }}>Private Viewings by Appointment</h2>
          <p className="text-sm mt-4 opacity-70" style={{ color: "#0d1117", fontFamily: "Inter, sans-serif" }}>Experience our properties in complete privacy. Each viewing is personally arranged by a senior advisor with full discretion guaranteed.</p>
          <div className="mt-8">
            <span className="inline-block px-8 py-3 text-sm tracking-wider font-medium cursor-pointer border-2" style={{ borderColor: "#0d1117", color: "#0d1117", fontFamily: "Inter, sans-serif" }}>ARRANGE A VIEWING</span>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] mb-12 opacity-50" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>Global Presence</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cities.map((c) => (
            <div key={c.city} className="text-center py-8 border rounded-sm" style={{ borderColor: "#d4af3730" }}>
              <h3 className="text-2xl font-bold" style={{ color: "#d4af37" }}>{c.city}</h3>
              <p className="text-xs text-gray-500 mt-2" style={{ fontFamily: "Inter, sans-serif" }}>{c.properties}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 px-6" style={{ borderColor: "#d4af3720" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-lg font-bold tracking-widest" style={{ color: "#d4af37" }}>AURELIAN</span>
            <p className="text-xs text-gray-600 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>Luxury real estate, defined.</p>
          </div>
          <div className="flex space-x-8">
            {["Collection", "Services", "Press", "Privacy"].map((s) => (
              <span key={s} className="text-xs text-gray-600 hover:text-gray-300 cursor-pointer transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>{s}</span>
            ))}
          </div>
          <span className="text-xs text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>&copy; 2026 Aurelian Properties International</span>
        </div>
      </footer>
    </div>
  )
}
