export default function RealestateCorporateDemo() {
  const megaNav = {
    services: ["Leasing", "Sales", "Property Management", "Consulting"],
    markets: ["Downtown", "Midtown", "Waterfront", "Suburban"],
  }

  const services = [
    { name: "Commercial Leasing", icon: "LSE", desc: "Full-service tenant and landlord representation for office, retail, and industrial spaces. Market analysis, tour coordination, lease negotiation, and renewal advisory." },
    { name: "Investment Sales", icon: "SLS", desc: "Institutional-grade brokerage for commercial asset transactions. We handle acquisitions, dispositions, and 1031 exchanges with discretion and market expertise." },
    { name: "Property Management", icon: "MGT", desc: "Day-to-day operations, capital improvement planning, tenant relations, and financial reporting for commercial portfolios of all sizes." },
    { name: "Advisory & Consulting", icon: "ADV", desc: "Strategic consulting on market entry, portfolio optimization, highest-and-best-use analysis, and development feasibility studies." },
  ]

  const reports = [
    { title: "Q4 2024 Office Market Report", type: "QUARTERLY", summary: "Downtown office vacancy declined to 14.2%, driven by tech sector expansion. Average asking rents rose 3.1% to $42.50/SF." },
    { title: "2025 Industrial Outlook", type: "ANNUAL", summary: "Warehouse demand continues to outpace supply with a 2.8% vacancy rate. New construction pipeline of 4.2M SF expected by mid-2026." },
    { title: "Retail Recovery Analysis", type: "SPECIAL REPORT", summary: "Experiential retail and food-and-beverage tenants are driving suburban shopping center occupancy back to pre-pandemic levels." },
  ]

  const properties = [
    { name: "Harbor Tower", type: "Class A Office", sqft: "285,000 SF", occupancy: "92%", price: "$48.00/SF", location: "Financial District" },
    { name: "Waterfront Plaza", type: "Mixed-Use Retail", sqft: "124,000 SF", occupancy: "88%", price: "$62.00/SF", location: "Harbor Walk" },
    { name: "Meridian Business Park", type: "Industrial Flex", sqft: "510,000 SF", occupancy: "96%", price: "$18.50/SF NNN", location: "North Corridor" },
    { name: "Capitol Centre", type: "Class B+ Office", sqft: "178,000 SF", occupancy: "85%", price: "$36.00/SF", location: "Midtown" },
  ]

  const clientLogos = ["Meridian Financial", "Apex Industries", "Sterling Group", "Northway Capital", "Oakbridge Partners", "Summit Holdings"]

  return (
    <div style={{ fontFamily: "'Open Sans', sans-serif" }} className="min-h-screen text-gray-800">
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Mega Nav */}
      <nav className="px-8 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="text-xl font-bold" style={{ color: "#1e3a5f" }}>Harbor &amp; Associates</div>
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <span className="text-sm font-medium text-gray-600 cursor-pointer">Services</span>
            </div>
            <div className="relative group">
              <span className="text-sm font-medium text-gray-600 cursor-pointer">Markets</span>
            </div>
            <a href="#" className="text-sm font-medium text-gray-600">Research</a>
            <a href="#" className="text-sm font-medium text-gray-600">Properties</a>
            <a href="#" className="text-sm font-medium text-gray-600">About</a>
          </div>
          <button className="text-sm font-semibold text-white px-5 py-2 rounded" style={{ backgroundColor: "#1e3a5f" }}>Contact Us</button>
        </div>
        {/* Mega nav sub-items */}
        <div className="hidden md:flex max-w-7xl mx-auto mt-2 gap-12 text-xs text-gray-400">
          <div className="flex gap-4">{megaNav.services.map((s) => <span key={s}>{s}</span>)}</div>
          <div className="flex gap-4">{megaNav.markets.map((m) => <span key={m}>{m}</span>)}</div>
        </div>
      </nav>

      {/* City Skyline Hero */}
      <section className="py-24 px-8" style={{ backgroundColor: "#f0f4ff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#1e3a5f" }}>Commercial Real Estate Brokerage</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1e3a5f" }}>Navigating Commercial Real Estate With Precision</h1>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">Harbor & Associates is a full-service commercial real estate brokerage serving institutional investors, corporate occupiers, and private owners across the metropolitan market.</p>
          <div className="flex gap-4 justify-center">
            <button className="text-white font-semibold px-8 py-3 rounded" style={{ backgroundColor: "#1e3a5f" }}>View Properties</button>
            <button className="font-semibold px-8 py-3 rounded border" style={{ borderColor: "#1e3a5f", color: "#1e3a5f" }}>Market Reports</button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#1e3a5f" }}>Our Services</p>
          <h2 className="text-3xl font-bold mb-12" style={{ color: "#1e3a5f" }}>Full-Spectrum Commercial Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.name} className="flex gap-5 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded flex-shrink-0 flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#1e3a5f" }}>{s.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#1e3a5f" }}>{s.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Reports */}
      <section className="py-20 px-8" style={{ backgroundColor: "#f0f4ff" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#1e3a5f" }}>Research</p>
          <h2 className="text-3xl font-bold mb-12" style={{ color: "#1e3a5f" }}>Market Intelligence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reports.map((r) => (
              <div key={r.title} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <span className="text-xs font-bold tracking-widest px-2 py-1 rounded text-white mb-4 inline-block" style={{ backgroundColor: "#1e3a5f" }}>{r.type}</span>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#1e3a5f" }}>{r.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{r.summary}</p>
                <a href="#" className="text-sm font-semibold" style={{ color: "#1e3a5f" }}>Download Report &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#1e3a5f" }}>Featured Properties</p>
          <h2 className="text-3xl font-bold mb-12" style={{ color: "#1e3a5f" }}>Available Listings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {properties.map((p) => (
              <div key={p.name} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: "#1e3a5f" }}>{p.name}</h3>
                    <p className="text-sm text-gray-500">{p.type} &middot; {p.location}</p>
                  </div>
                  <span className="text-lg font-bold" style={{ color: "#1e3a5f" }}>{p.price}</span>
                </div>
                <div className="flex gap-6 text-sm text-gray-600">
                  <span>{p.sqft}</span>
                  <span>{p.occupancy} Occupied</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 px-8" style={{ backgroundColor: "#f0f4ff" }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-8" style={{ color: "#1e3a5f" }}>Trusted By Leading Organizations</p>
          <div className="flex flex-wrap justify-center gap-10">
            {clientLogos.map((c) => (
              <div key={c} className="text-sm font-bold text-gray-400 tracking-wider">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-8 text-white text-center" style={{ backgroundColor: "#1e3a5f" }}>
        <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Commercial Real Estate Needs?</h2>
        <p className="text-blue-200 mb-8 max-w-lg mx-auto">Our experienced brokers are ready to help you navigate the market with clarity and confidence.</p>
        <button className="bg-white font-semibold px-10 py-3 rounded" style={{ color: "#1e3a5f" }}>Schedule a Consultation</button>
      </section>

      {/* Corporate Multi-Column Footer */}
      <footer className="py-12 px-8 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-bold text-white mb-3">Harbor &amp; Associates</div>
            <p className="text-sm">100 Harbor Boulevard, Suite 2200<br />Boston, MA 02110</p>
            <p className="text-sm mt-2">(617) 555-0240</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-3 text-sm">Services</p>
            <div className="space-y-1 text-sm"><p>Leasing</p><p>Sales</p><p>Property Management</p><p>Consulting</p></div>
          </div>
          <div>
            <p className="font-semibold text-white mb-3 text-sm">Research</p>
            <div className="space-y-1 text-sm"><p>Market Reports</p><p>Economic Outlook</p><p>Sector Analysis</p><p>Data Portal</p></div>
          </div>
          <div>
            <p className="font-semibold text-white mb-3 text-sm">Company</p>
            <div className="space-y-1 text-sm"><p>About Us</p><p>Careers</p><p>Press</p><p>Legal</p></div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-600 mt-8">&copy; 2025 Harbor &amp; Associates. All rights reserved. Licensed Commercial Real Estate Brokerage.</p>
      </footer>
    </div>
  )
}
