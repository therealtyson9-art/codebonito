export const dynamic = "force-dynamic";
export default function RealestateBrutalistDemo() {
  const navLinks = ["DEVELOPMENTS", "DATA", "TEAM", "INVEST", "CONTACT"]

  const developments = [
    { name: "GRID 47", type: "MIXED-USE TOWER", status: "UNDER CONSTRUCTION", floors: "47", units: "312 UNITS", completion: "Q3 2026", desc: "A 47-story mixed-use development in the central business district. Ground-floor retail, co-working levels 2-8, and residential units 9-47. Structural steel frame with exposed concrete facades." },
    { name: "BLOCK 9 LOFTS", type: "ADAPTIVE REUSE", status: "PRE-LEASING", floors: "6", units: "84 UNITS", completion: "Q1 2026", desc: "A former textile warehouse converted into industrial loft apartments. Original timber beams, polished concrete floors, and 14-foot ceilings. Ground-floor artisan market space." },
    { name: "THE AXIS", type: "COMMERCIAL OFFICE", status: "DESIGN PHASE", floors: "22", units: "440K SQFT", completion: "2028", desc: "Class A office tower targeting net-zero carbon certification. Cross-laminated timber construction, integrated solar facade, and a rooftop urban farm for tenant use." },
  ]

  const marketData = [
    { metric: "2,847", label: "ACTIVE LISTINGS", change: "+12% YoY" },
    { metric: "$412", label: "AVG PRICE / SQFT", change: "+8% YoY" },
    { metric: "18", label: "MEDIAN DAYS ON MARKET", change: "-23% YoY" },
    { metric: "$1.2B", label: "Q4 TRANSACTION VOLUME", change: "+31% YoY" },
    { metric: "94%", label: "COMMERCIAL OCCUPANCY", change: "+2% YoY" },
    { metric: "6.8%", label: "AVG CAP RATE", change: "-0.4% YoY" },
  ]

  const team = [
    { name: "VICTOR KAINE", role: "MANAGING DIRECTOR", focus: "Commercial acquisitions and urban development strategy. 22 years in institutional real estate. Former VP at Brookfield Properties.", code: "VK-01" },
    { name: "SARAH OKOYE", role: "HEAD OF DEVELOPMENT", focus: "Project management from entitlement through certificate of occupancy. Licensed architect with $3.2B in completed developments.", code: "SO-02" },
    { name: "JAMES PARK", role: "MARKET ANALYST", focus: "Quantitative market research, feasibility studies, and investment modeling. MIT urban planning background with a data-first approach.", code: "JP-03" },
  ]

  const investments = [
    { name: "GRIDLINE FUND I", type: "VALUE-ADD MULTIFAMILY", target: "18-22% IRR", minimum: "$250K", status: "OPEN" },
    { name: "GRIDLINE FUND II", type: "GROUND-UP DEVELOPMENT", target: "24-28% IRR", minimum: "$500K", status: "OPEN" },
    { name: "GRIDLINE INCOME REIT", type: "STABILIZED COMMERCIAL", target: "7-9% ANNUAL YIELD", minimum: "$100K", status: "ACCEPTING" },
  ]

  return (
    <div style={{ fontFamily: "'Chakra Petch', sans-serif" }} className="min-h-screen text-black" >
      <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Raw Nav */}
      <nav className="flex items-center justify-between px-8 py-4 border-b-2 border-black" style={{ backgroundColor: "#d4d4d4" }}>
        <div className="text-2xl font-bold tracking-widest">GRIDLINE</div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-xs font-medium tracking-widest text-gray-700 hover:text-black transition-colors">{link}</a>
          ))}
        </div>
        <button className="text-xs font-bold tracking-widest px-5 py-2 bg-black text-white">INQUIRE</button>
      </nav>

      {/* Blueprint Hero */}
      <section className="py-24 px-8 border-b-2 border-black" style={{ backgroundColor: "#d4d4d4", backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-4 text-gray-500">URBAN DEVELOPMENT &amp; REAL ESTATE</p>
          <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight mb-8">BUILD.<br />THE.<br />GRID.</h1>
          <p className="text-base text-gray-600 max-w-lg mb-8">GRIDLINE acquires, develops, and manages urban properties across major metropolitan markets. We build what cities need next.</p>
          <div className="flex gap-4">
            <button className="text-xs font-bold tracking-widest px-8 py-3 bg-black text-white">VIEW PROJECTS</button>
            <button className="text-xs font-bold tracking-widest px-8 py-3 border-2 border-black">INVESTOR ACCESS</button>
          </div>
        </div>
      </section>

      {/* Current Developments */}
      <section className="py-20 px-8 border-b-2 border-black bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 tracking-tight">CURRENT DEVELOPMENTS</h2>
          <div className="space-y-1">
            {developments.map((d) => (
              <div key={d.name} className="border-2 border-black p-8 hover:bg-gray-50 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-3xl font-bold">{d.name}</h3>
                    <p className="text-xs tracking-widest text-gray-500 mt-1">{d.type}</p>
                  </div>
                  <div className="flex gap-6 text-right">
                    <div><p className="text-2xl font-bold">{d.floors}</p><p className="text-xs tracking-widest text-gray-500">FLOORS</p></div>
                    <div><p className="text-2xl font-bold">{d.units}</p><p className="text-xs tracking-widest text-gray-500">CAPACITY</p></div>
                    <div>
                      <span className="text-xs font-bold tracking-widest px-3 py-1 bg-black text-white">{d.status}</span>
                      <p className="text-xs tracking-widest text-gray-500 mt-2">{d.completion}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data */}
      <section className="py-20 px-8 border-b-2 border-black" style={{ backgroundColor: "#d4d4d4" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 tracking-tight">MARKET DATA</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {marketData.map((m) => (
              <div key={m.label} className="bg-white border-2 border-black p-6">
                <p className="text-4xl font-bold mb-1">{m.metric}</p>
                <p className="text-xs tracking-widest text-gray-500 mb-2">{m.label}</p>
                <p className="text-xs font-bold" style={{ color: m.change.startsWith("+") ? "#16a34a" : "#dc2626" }}>{m.change}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-8 border-b-2 border-black bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 tracking-tight">THE TEAM</h2>
          <div className="grid md:grid-cols-3 gap-1">
            {team.map((t) => (
              <div key={t.name} className="border-2 border-black p-8">
                <p className="text-xs tracking-widest text-gray-400 mb-4">{t.code}</p>
                <h3 className="text-2xl font-bold mb-1">{t.name}</h3>
                <p className="text-xs tracking-widest text-gray-500 mb-4">{t.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-20 px-8 border-b-2 border-black" style={{ backgroundColor: "#d4d4d4" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 tracking-tight">INVESTMENT OPPORTUNITIES</h2>
          <div className="space-y-1">
            {investments.map((inv) => (
              <div key={inv.name} className="bg-white border-2 border-black p-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">{inv.name}</h3>
                  <p className="text-xs tracking-widest text-gray-500">{inv.type}</p>
                </div>
                <div className="flex gap-8 items-center">
                  <div><p className="text-lg font-bold">{inv.target}</p><p className="text-xs tracking-widest text-gray-500">TARGET RETURN</p></div>
                  <div><p className="text-lg font-bold">{inv.minimum}</p><p className="text-xs tracking-widest text-gray-500">MINIMUM</p></div>
                  <span className="text-xs font-bold tracking-widest px-4 py-2 bg-black text-white">{inv.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-8 bg-black text-white text-center">
        <h2 className="text-5xl font-bold mb-4">LET&apos;S BUILD.</h2>
        <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">Development inquiries, investment access, and partnership proposals. We respond within 24 hours.</p>
        <button className="text-xs font-bold tracking-widest px-10 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors">CONTACT GRIDLINE</button>
      </section>

      {/* Raw Footer */}
      <footer className="py-6 px-8 border-t-2 border-black" style={{ backgroundColor: "#d4d4d4" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold tracking-widest">GRIDLINE</p>
          <p className="text-xs tracking-widest text-gray-500">200 CONGRESS AVE, FLOOR 18 &mdash; AUSTIN, TX 78701</p>
          <p className="text-xs text-gray-500">&copy; 2025 GRIDLINE. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  )
}
