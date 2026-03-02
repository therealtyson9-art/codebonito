export default function RealEstateCorporateDemo() {
  const propertyTypes = [
    { type: "Residential", desc: "Single-family homes, condominiums, and townhouses across premium neighborhoods.", count: "1,240+" },
    { type: "Commercial", desc: "Office buildings, retail spaces, and mixed-use developments for growing businesses.", count: "380+" },
    { type: "Industrial", desc: "Warehouses, distribution centers, and manufacturing facilities in strategic locations.", count: "165+" },
    { type: "Land", desc: "Development parcels, agricultural lots, and investment acreage with growth potential.", count: "92+" },
  ]

  const analytics = [
    { label: "Total Portfolio Value", value: "$4.8B" },
    { label: "Properties Under Management", value: "12,400" },
    { label: "Cities Covered", value: "47" },
    { label: "Client Retention Rate", value: "94%" },
    { label: "Average ROI for Investors", value: "11.3%" },
    { label: "Years in Operation", value: "28" },
  ]

  const developments = [
    { name: "Meridian Tower", location: "Downtown Seattle, WA", type: "Mixed-Use", units: "220 units", status: "Pre-Leasing", completion: "Q3 2027" },
    { name: "Harborview Commons", location: "Boston Seaport, MA", type: "Residential", units: "148 units", status: "Under Construction", completion: "Q1 2027" },
    { name: "Apex Business Park", location: "Research Triangle, NC", type: "Commercial", units: "450,000 sqft", status: "Phase 2 Active", completion: "Q4 2026" },
  ]

  const team = [
    { name: "Margaret Caldwell", title: "Chief Executive Officer", exp: "28 years in commercial real estate" },
    { name: "Robert Tanaka", title: "VP of Residential Sales", exp: "19 years specializing in luxury markets" },
    { name: "Diana Osei", title: "Director of Investment Advisory", exp: "15 years in portfolio management" },
    { name: "James McCarthy", title: "Head of Property Management", exp: "22 years in operations and facilities" },
  ]

  const services = [
    { name: "Buying", desc: "Expert guidance from property search through closing, with access to off-market opportunities and detailed market analysis." },
    { name: "Selling", desc: "Strategic marketing, professional staging consultation, competitive pricing analysis, and negotiation expertise to maximize your return." },
    { name: "Property Management", desc: "Full-service management including tenant relations, maintenance coordination, financial reporting, and regulatory compliance." },
    { name: "Investment Advisory", desc: "Data-driven investment strategies, portfolio diversification, 1031 exchanges, and development opportunity identification." },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="px-6 py-4 flex items-center justify-between" style={{ backgroundColor: "#1e3a5f" }}>
        <span className="text-lg font-bold text-white tracking-wide">CRESTPOINT</span>
        <div className="hidden md:flex items-center space-x-8">
          {["Properties", "Services", "Developments", "About", "Careers", "Contact"].map((item) => (
            <span key={item} className="text-sm text-blue-200 hover:text-white cursor-pointer transition-colors">{item}</span>
          ))}
        </div>
        <span className="text-sm font-medium text-white px-5 py-2 border border-blue-300 hover:bg-blue-800 cursor-pointer transition-colors rounded">Client Portal</span>
      </nav>

      {/* Hero */}
      <section className="relative py-28 px-6 text-center text-white" style={{ backgroundColor: "#1e3a5f" }}>
        <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-transparent to-black" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300 mb-4">Enterprise Real Estate Solutions</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Building Value Across Every Asset Class</h1>
          <p className="mt-6 text-blue-200 max-w-xl mx-auto">Crestpoint Partners delivers institutional-grade real estate services to individuals, corporations, and investment groups nationwide.</p>
          <div className="mt-8 flex justify-center gap-4">
            <span className="px-6 py-3 text-sm font-semibold bg-white cursor-pointer rounded" style={{ color: "#1e3a5f" }}>Explore Properties</span>
            <span className="px-6 py-3 text-sm font-semibold border border-white text-white cursor-pointer rounded hover:bg-white/10 transition-colors">Investor Relations</span>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">What We Offer</p>
        <h2 className="text-3xl font-bold mb-12" style={{ color: "#1e3a5f" }}>Property Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {propertyTypes.map((pt) => (
            <div key={pt.type} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <p className="text-2xl font-bold" style={{ color: "#1e3a5f" }}>{pt.count}</p>
              <h3 className="text-lg font-semibold mt-2">{pt.type}</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">{pt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Market Analytics */}
      <section className="py-16" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Performance</p>
          <h2 className="text-3xl font-bold mb-12" style={{ color: "#1e3a5f" }}>Market Analytics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {analytics.map((a) => (
              <div key={a.label} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <p className="text-3xl md:text-4xl font-bold" style={{ color: "#1e3a5f" }}>{a.value}</p>
                <p className="text-sm text-slate-500 mt-2">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Developments */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Pipeline</p>
        <h2 className="text-3xl font-bold mb-12" style={{ color: "#1e3a5f" }}>Featured Developments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developments.map((d) => (
            <div key={d.name} className="rounded-lg overflow-hidden border border-slate-200">
              <div className="aspect-[16/9] bg-slate-100" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-2 py-1 rounded text-white" style={{ backgroundColor: "#1e3a5f" }}>{d.status}</span>
                  <span className="text-xs text-slate-400">{d.completion}</span>
                </div>
                <h3 className="text-lg font-bold mt-2">{d.name}</h3>
                <p className="text-sm text-slate-500">{d.location}</p>
                <p className="text-sm text-slate-400 mt-1">{d.type} &middot; {d.units}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Leadership</p>
          <h2 className="text-3xl font-bold mb-12" style={{ color: "#1e3a5f" }}>Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((t) => (
              <div key={t.name} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-20 h-20 rounded-full bg-slate-200 mx-auto mb-4" />
                <h3 className="text-sm font-bold">{t.name}</h3>
                <p className="text-xs font-semibold mt-1" style={{ color: "#1e3a5f" }}>{t.title}</p>
                <p className="text-xs text-slate-400 mt-2">{t.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Capabilities</p>
        <h2 className="text-3xl font-bold mb-12" style={{ color: "#1e3a5f" }}>Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.name} className="border-l-4 pl-6 py-2" style={{ borderColor: "#1e3a5f" }}>
              <h3 className="text-lg font-semibold">{s.name}</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 px-6" style={{ backgroundColor: "#1e3a5f" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <span className="text-lg font-bold">CRESTPOINT</span>
            <p className="text-sm text-blue-200 mt-2">Enterprise real estate solutions since 1998.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3">Properties</p>
            {["Residential", "Commercial", "Industrial", "Land"].map((i) => (
              <p key={i} className="text-sm text-blue-200 mb-1 cursor-pointer hover:text-white transition-colors">{i}</p>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3">Company</p>
            {["About", "Careers", "Press", "Investor Relations"].map((i) => (
              <p key={i} className="text-sm text-blue-200 mb-1 cursor-pointer hover:text-white transition-colors">{i}</p>
            ))}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3">Contact</p>
            <p className="text-sm text-blue-200">500 Financial Plaza, Suite 2400</p>
            <p className="text-sm text-blue-200">Boston, MA 02110</p>
            <p className="text-sm text-blue-200 mt-2">(617) 555-0300</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-blue-400/30 text-xs text-blue-300 flex flex-col md:flex-row justify-between gap-2">
          <span>&copy; 2026 Crestpoint Partners. All rights reserved.</span>
          <span>NMLS #1234567 | Equal Housing Opportunity</span>
        </div>
      </footer>
    </div>
  )
}
