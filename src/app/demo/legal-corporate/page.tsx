export default function LegalCorporateDemo() {
  const practiceAreas = [
    { title: "Mergers & Acquisitions", desc: "Strategic advisory and transactional support for domestic and cross-border M&A valued from $50M to $10B+." },
    { title: "Intellectual Property", desc: "Patent prosecution, trademark strategy, trade secret litigation, and IP portfolio management across all technology sectors." },
    { title: "Tax Law", desc: "Tax planning, controversy resolution, and compliance advisory for multinational corporations and high-net-worth individuals." },
    { title: "Regulatory & Compliance", desc: "Navigating complex regulatory landscapes including SEC, FDA, EPA, and international compliance frameworks." },
    { title: "Antitrust", desc: "Merger clearance, cartel investigations, monopolization claims, and competition law counsel for global enterprises." },
    { title: "Securities", desc: "IPOs, secondary offerings, SEC reporting, and securities litigation defense for issuers and underwriters." },
  ]

  const offices = [
    { city: "New York", address: "One World Trade Center, 85th Floor", phone: "+1 (212) 555-0180" },
    { city: "London", address: "30 St Mary Axe, Level 42", phone: "+44 20 7555 0180" },
    { city: "Singapore", address: "Marina Bay Financial Centre, Tower 3", phone: "+65 6555 0180" },
    { city: "Frankfurt", address: "Taunusanlage 1, MesseTurm", phone: "+49 69 555 0180" },
  ]

  const rankings = [
    { source: "Chambers Global", rank: "Band 1 in 14 practice areas worldwide" },
    { source: "The Legal 500", rank: "Tier 1 for M&A, Securities, and Antitrust" },
    { source: "Am Law 200", rank: "Top 15 by gross revenue for 12 consecutive years" },
    { source: "Benchmark Litigation", rank: "Litigation Firm of the Year, Northeast Region" },
  ]

  const clients = ["Apex Industries", "NovaTech Global", "Meridian Capital", "Helios Energy", "Solaris Group", "Vanguard Partners"]

  return (
    <div className="min-h-screen bg-white text-gray-800" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav style={{ backgroundColor: "#1e3a5f" }}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-semibold text-white tracking-tight">Hargrove Sterling <span className="text-white/50 font-light">LLP</span></span>
          <div className="hidden md:flex items-center space-x-8">
            {["Practice Areas", "Professionals", "Offices", "Insights", "Careers"].map((item) => (
              <span key={item} className="text-sm text-white/70 hover:text-white cursor-pointer transition-colors">{item}</span>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-white/50 cursor-pointer hover:text-white transition-colors">Client Portal</span>
            <span className="text-sm font-medium text-white bg-white/10 px-5 py-2 hover:bg-white/20 cursor-pointer transition-colors">Contact Us</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative" style={{ backgroundColor: "#1e3a5f" }}>
        <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">Trusted by the Fortune 500</p>
            <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
              Global Counsel for<br />Complex Challenges
            </h1>
            <p className="mt-6 text-base text-white/60 max-w-lg leading-relaxed">
              With over 1,200 attorneys across four continents, Hargrove Sterling delivers integrated legal solutions for the world&apos;s most demanding transactions and disputes.
            </p>
            <div className="mt-10 flex space-x-4">
              <span className="px-8 py-3 text-sm font-medium bg-white cursor-pointer hover:bg-gray-100 transition-colors" style={{ color: "#1e3a5f" }}>Explore Our Capabilities</span>
              <span className="px-8 py-3 text-sm font-medium border border-white/30 text-white hover:bg-white/10 cursor-pointer transition-colors">Meet Our Partners</span>
            </div>
          </div>
          <div className="flex-1 max-w-sm">
            <div className="aspect-[3/4] bg-white/10 rounded-sm" />
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Capabilities</p>
        <h2 className="text-3xl font-light mb-16" style={{ color: "#1e3a5f" }}>Practice Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practiceAreas.map((pa) => (
            <div key={pa.title} className="p-8 border border-gray-100 hover:border-gray-300 transition-colors group">
              <h3 className="text-lg font-semibold mb-3 group-hover:underline" style={{ color: "#1e3a5f" }}>{pa.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{pa.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Offices */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Worldwide Presence</p>
          <h2 className="text-3xl font-light mb-16" style={{ color: "#1e3a5f" }}>Global Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {offices.map((office) => (
              <div key={office.city} className="bg-white p-8 border border-gray-100">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#1e3a5f" }}>{office.city}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{office.address}</p>
                <p className="text-sm text-gray-500 mt-3">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings & Awards */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Recognition</p>
        <h2 className="text-3xl font-light mb-16" style={{ color: "#1e3a5f" }}>Rankings & Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rankings.map((r) => (
            <div key={r.source} className="flex items-start gap-6 p-6 border-l-4" style={{ borderColor: "#1e3a5f" }}>
              <div>
                <h3 className="text-base font-semibold" style={{ color: "#1e3a5f" }}>{r.source}</h3>
                <p className="text-sm text-gray-400 mt-1">{r.rank}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-12">Representative Clients</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {clients.map((name) => (
              <span key={name} className="text-sm text-gray-300 font-semibold tracking-wider uppercase">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24" style={{ backgroundColor: "#1e3a5f" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">Engage With Us</p>
          <h2 className="text-3xl md:text-5xl font-light text-white">How can we help your business?</h2>
          <p className="text-white/50 mt-4 text-sm max-w-md mx-auto">Our client services team will connect you with the right attorney for your specific legal needs.</p>
          <div className="mt-10">
            <span className="inline-block px-10 py-3 text-sm font-medium bg-white cursor-pointer hover:bg-gray-100 transition-colors" style={{ color: "#1e3a5f" }}>Contact Hargrove Sterling</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <span className="text-sm font-semibold text-white">Hargrove Sterling LLP</span>
              <p className="text-xs text-gray-500 mt-2 max-w-xs">A global law firm with offices in New York, London, Singapore, and Frankfurt. Attorney advertising.</p>
            </div>
            <div className="flex flex-wrap gap-8">
              {["Privacy Policy", "Terms of Use", "Cookie Policy", "Accessibility", "Disclaimer"].map((link) => (
                <span key={link} className="text-xs text-gray-500 hover:text-white cursor-pointer transition-colors">{link}</span>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-xs text-gray-600">&copy; 2026 Hargrove Sterling LLP. All rights reserved.</span>
            <span className="text-xs text-gray-600">Prior results do not guarantee a similar outcome.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
