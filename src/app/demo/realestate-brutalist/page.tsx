export default function RealEstateBrutalistDemo() {
  const stats = [
    { label: "ACTIVE LISTINGS", value: "2,847" },
    { label: "AVG PRICE/SQFT", value: "$412" },
    { label: "MEDIAN DAYS ON MARKET", value: "18" },
    { label: "CLOSED THIS MONTH", value: "634" },
  ]

  const listings = [
    { id: "MLS-78421", address: "1934 INDUSTRIAL BLVD, UNIT 12A, BROOKLYN, NY 11222", price: "$1,450,000", type: "LOFT", sqft: "2,200", beds: 2, baths: 2, dom: 7, pricePerSqft: "$659" },
    { id: "MLS-78455", address: "400 CONCRETE AVE, FLOOR 8, CHICAGO, IL 60607", price: "$875,000", type: "CONDO", sqft: "1,680", beds: 3, baths: 2, dom: 12, pricePerSqft: "$521" },
    { id: "MLS-78502", address: "77 RAW STEEL LANE, PORTLAND, OR 97209", price: "$620,000", type: "TOWNHOUSE", sqft: "1,920", beds: 3, baths: 2, dom: 3, pricePerSqft: "$323" },
    { id: "MLS-78519", address: "2100 WAREHOUSE ROW, DETROIT, MI 48207", price: "$340,000", type: "CONVERTED WAREHOUSE", sqft: "3,100", beds: 4, baths: 3, dom: 22, pricePerSqft: "$110" },
  ]

  const agents = [
    { name: "V. KARST", license: "NY-2019-44821", deals: 312, volume: "$184M", specialty: "COMMERCIAL" },
    { name: "T. OKOYE", license: "IL-2017-33109", deals: 267, volume: "$156M", specialty: "RESIDENTIAL" },
    { name: "R. NOVAK", license: "OR-2020-55743", deals: 198, volume: "$98M", specialty: "MIXED-USE" },
    { name: "J. CHEN", license: "MI-2018-22087", deals: 241, volume: "$127M", specialty: "INVESTMENT" },
  ]

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Space Mono', monospace" }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="border-b-2 border-white px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-bold tracking-widest" style={{ color: "#eab308" }}>BLOC//</span>
        <div className="hidden md:flex items-center space-x-8">
          {["[LISTINGS]", "[DATA]", "[AGENTS]", "[REPORT]"].map((item) => (
            <span key={item} className="text-xs tracking-wider hover:underline cursor-pointer" style={{ color: "#eab308" }}>{item}</span>
          ))}
        </div>
        <span className="text-xs border border-white px-3 py-1 hover:bg-white hover:text-black cursor-pointer transition-colors">ACCESS</span>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 border-b-2 border-white">
        <h1 className="text-5xl md:text-8xl font-bold leading-none tracking-tight">
          PROPERTY.<br /><span style={{ color: "#eab308" }}>RAW DATA.</span>
        </h1>
        <p className="mt-6 text-sm text-gray-500 max-w-md tracking-wide">No staging. No filters. Just square footage, price per unit, and market position. The numbers speak for themselves.</p>
      </section>

      {/* Market Stats */}
      <section className="border-b-2 border-white">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`p-8 ${i < 3 ? "border-r-2 border-white" : ""}`}>
              <p className="text-4xl md:text-5xl font-bold" style={{ color: "#eab308" }}>{s.value}</p>
              <p className="text-xs text-gray-500 mt-2 tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Listings as Raw Data Blocks */}
      <section className="px-6 py-16">
        <p className="text-xs tracking-widest text-gray-500 mb-10">// ACTIVE_LISTINGS.DAT</p>
        <div className="space-y-6">
          {listings.map((l) => (
            <div key={l.id} className="border-2 border-white p-6 hover:border-yellow-500 transition-colors cursor-pointer">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">{l.id} // {l.type}</p>
                  <p className="text-sm font-bold tracking-wide">{l.address}</p>
                </div>
                <p className="text-2xl font-bold" style={{ color: "#eab308" }}>{l.price}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-6 text-xs text-gray-400 tracking-wider">
                <span>SQFT: {l.sqft}</span>
                <span>BED: {l.beds}</span>
                <span>BATH: {l.baths}</span>
                <span>DOM: {l.dom}</span>
                <span>$/SQFT: {l.pricePerSqft}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Agent Directory Table */}
      <section className="px-6 py-16 border-t-2 border-white">
        <p className="text-xs tracking-widest text-gray-500 mb-10">// AGENT_DIRECTORY.DAT</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs tracking-wider">
            <thead>
              <tr className="border-b-2 border-white">
                <th className="py-3 pr-4 text-gray-500">AGENT</th>
                <th className="py-3 pr-4 text-gray-500">LICENSE</th>
                <th className="py-3 pr-4 text-gray-500">DEALS</th>
                <th className="py-3 pr-4 text-gray-500">VOLUME</th>
                <th className="py-3 text-gray-500">SPECIALTY</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((a) => (
                <tr key={a.name} className="border-b border-gray-800 hover:bg-gray-950 cursor-pointer">
                  <td className="py-3 pr-4 font-bold" style={{ color: "#eab308" }}>{a.name}</td>
                  <td className="py-3 pr-4 text-gray-400">{a.license}</td>
                  <td className="py-3 pr-4">{a.deals}</td>
                  <td className="py-3 pr-4">{a.volume}</td>
                  <td className="py-3 text-gray-400">{a.specialty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Market Report */}
      <section className="px-6 py-16 border-t-2 border-white">
        <p className="text-xs tracking-widest text-gray-500 mb-10">// MARKET_REPORT_Q1_2026</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-white p-6">
            <p className="text-xs text-gray-500 mb-4">TREND: RESIDENTIAL</p>
            <p className="text-sm text-gray-300 leading-relaxed">Median home prices rose 4.2% year-over-year. Inventory remains tight at 2.1 months of supply. Multiple offer situations are common in price brackets below $750K. Cash offers represent 31% of all closed transactions.</p>
          </div>
          <div className="border-2 border-white p-6">
            <p className="text-xs text-gray-500 mb-4">TREND: COMMERCIAL</p>
            <p className="text-sm text-gray-300 leading-relaxed">Office vacancy rates stabilized at 14.7%. Industrial and warehouse space demand continues to outpace supply. Retail conversions to mixed-use account for 22% of new commercial permits filed this quarter.</p>
          </div>
        </div>
      </section>

      {/* Contact Block */}
      <section className="px-6 py-16 border-t-2 border-white" style={{ backgroundColor: "#eab308" }}>
        <div className="max-w-2xl">
          <p className="text-xs tracking-widest text-black mb-4">// INITIATE_CONTACT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">DATA DOESN&apos;T LIE.<br />NEITHER DO WE.</h2>
          <p className="text-sm text-black mt-4 opacity-70">Direct line. No voicemail trees. No chatbots. A human who knows the market picks up.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <span className="px-6 py-3 text-xs font-bold bg-black text-white cursor-pointer tracking-widest hover:bg-gray-900 transition-colors">CALL: (718) 555-0199</span>
            <span className="px-6 py-3 text-xs font-bold border-2 border-black text-black cursor-pointer tracking-widest hover:bg-black hover:text-white transition-colors">EMAIL QUERY</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-white px-6 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <span className="text-xs font-bold tracking-widest" style={{ color: "#eab308" }}>BLOC// REAL ESTATE</span>
        <p className="text-xs text-gray-600">LICENSED IN NY, IL, OR, MI // EST. 2019</p>
        <span className="text-xs text-gray-600">&copy; 2026 BLOC PROPERTIES LLC</span>
      </footer>
    </div>
  )
}
