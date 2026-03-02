export default function ConsultingCorporateDemo() {
  const industries = [
    { name: "Financial Services", desc: "Risk management, regulatory compliance, and digital banking transformation for leading institutions." },
    { name: "Healthcare", desc: "Operational efficiency, patient experience optimization, and health system integration strategies." },
    { name: "Technology", desc: "Go-to-market strategy, product portfolio rationalization, and engineering organization design." },
    { name: "Energy", desc: "Energy transition planning, asset optimization, and sustainability reporting frameworks." },
    { name: "Manufacturing", desc: "Supply chain resilience, Industry 4.0 adoption, and lean operations at scale." },
    { name: "Government", desc: "Public sector modernization, policy implementation, and citizen services transformation." },
  ]

  const offices = [
    { city: "New York", address: "One World Trade Center, 85th Floor", role: "Global Headquarters" },
    { city: "London", address: "22 Bishopsgate, Level 30", role: "EMEA Hub" },
    { city: "Singapore", address: "Marina Bay Financial Centre, Tower 2", role: "Asia-Pacific Hub" },
    { city: "Dubai", address: "DIFC Gate Building, Level 15", role: "Middle East & Africa" },
    { city: "Sao Paulo", address: "Faria Lima Financial District", role: "Latin America Hub" },
  ]

  const leadership = [
    { name: "Jonathan Reed", title: "Global CEO", background: "Former Vice Chairman at Deloitte, 25 years in management consulting" },
    { name: "Amara Okafor", title: "Chief Operating Officer", background: "Built and scaled advisory practices across three continents" },
    { name: "Michael Tanaka", title: "Head of Strategy Practice", background: "Published author on corporate strategy, ex-BCG Senior Partner" },
    { name: "Elisabeth Werner", title: "Chief Client Officer", background: "20 years leading Fortune 500 client relationships" },
  ]

  const successStories = [
    { client: "Global Investment Bank", challenge: "Post-merger integration of two $50B+ institutions", result: "Achieved $1.2B in synergies within 18 months, exceeding target by 40%", industry: "Financial Services" },
    { client: "National Health System", challenge: "Modernizing patient records across 340 facilities", result: "Reduced administrative costs by $280M annually with 99.7% data accuracy", industry: "Healthcare" },
    { client: "Fortune 100 Manufacturer", challenge: "Supply chain disruption threatening $4B in annual revenue", result: "Built dual-source resilient supply network, reducing risk exposure by 70%", industry: "Manufacturing" },
  ]

  const certifications = ["ISO 27001 Certified", "SOC 2 Type II Compliant", "CMMI Level 5", "B Corp Certified", "UN Global Compact Signatory"]

  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="text-white px-6 py-4 flex items-center justify-between" style={{ backgroundColor: "#1e3a5f" }}>
        <span className="text-lg font-bold tracking-wide">VANGUARD CONSULTING</span>
        <div className="hidden md:flex items-center space-x-8">
          {["Industries", "Services", "Leadership", "Careers", "Insights"].map((item) => (
            <span key={item} className="text-sm text-blue-200 hover:text-white cursor-pointer transition-colors">{item}</span>
          ))}
          <span className="text-sm font-medium bg-white px-4 py-2 rounded cursor-pointer" style={{ color: "#1e3a5f" }}>Contact Us</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative text-white py-32 px-6" style={{ backgroundColor: "#1e3a5f" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-blue-300 mb-4">Global Advisory. Proven Impact.</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Shaping the future of enterprise performance.
          </h1>
          <p className="mt-6 text-lg text-blue-200 max-w-xl leading-relaxed">
            For over two decades, Vanguard Consulting has partnered with the world&apos;s most ambitious organizations to deliver transformation at scale.
          </p>
          <div className="mt-10 flex gap-4">
            <span className="inline-block px-6 py-3 text-sm font-semibold bg-white rounded cursor-pointer" style={{ color: "#1e3a5f" }}>Explore Our Work</span>
            <span className="inline-block px-6 py-3 text-sm font-medium border border-blue-300 text-blue-100 rounded cursor-pointer hover:bg-blue-800 transition-colors">Meet Our Team</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900/30 pointer-events-none" />
      </section>

      {/* Industries */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#1e3a5f" }}>Expertise</p>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
        <p className="text-sm text-slate-500 mb-14 max-w-lg">Deep sector knowledge enables us to deliver solutions grounded in the realities of your industry.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <div key={ind.name} className="border border-slate-200 rounded-lg p-8 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-3" style={{ color: "#1e3a5f" }}>{ind.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global Offices */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#1e3a5f" }}>Global Presence</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-14">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {offices.map((o) => (
              <div key={o.city} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-base font-semibold" style={{ color: "#1e3a5f" }}>{o.city}</h3>
                <p className="text-xs text-slate-500 mt-2">{o.address}</p>
                <p className="text-xs font-medium mt-3" style={{ color: "#1e3a5f" }}>{o.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#1e3a5f" }}>Our People</p>
        <h2 className="text-3xl font-bold text-slate-900 mb-14">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {leadership.map((l) => (
            <div key={l.name}>
              <div className="aspect-[3/4] bg-slate-200 rounded-lg mb-5" />
              <h3 className="text-base font-semibold">{l.name}</h3>
              <p className="text-sm font-medium mt-1" style={{ color: "#1e3a5f" }}>{l.title}</p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">{l.background}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 px-6" style={{ backgroundColor: "#1e3a5f" }}>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-8">
          {certifications.map((c) => (
            <span key={c} className="text-xs text-blue-200 tracking-wider uppercase border border-blue-400/30 rounded-full px-5 py-2">{c}</span>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#1e3a5f" }}>Impact</p>
        <h2 className="text-3xl font-bold text-slate-900 mb-14">Client Success Stories</h2>
        <div className="space-y-8">
          {successStories.map((s) => (
            <div key={s.client} className="border border-slate-200 rounded-lg p-8 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-wider text-slate-400">{s.industry}</span>
                  <h3 className="text-lg font-semibold mt-2">{s.client}</h3>
                  <p className="text-sm text-slate-500 mt-2">{s.challenge}</p>
                </div>
                <div className="md:text-right md:max-w-sm">
                  <p className="text-sm font-medium" style={{ color: "#1e3a5f" }}>{s.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Careers */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#1e3a5f" }}>Join Us</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Build Your Career at Vanguard</h2>
          <p className="text-sm text-slate-500 max-w-lg mx-auto mb-10">We are always looking for exceptional thinkers, problem solvers, and leaders who want to make a measurable difference in the world&apos;s most important organizations.</p>
          <div className="flex justify-center gap-4">
            <span className="inline-block px-6 py-3 text-sm font-semibold text-white rounded cursor-pointer" style={{ backgroundColor: "#1e3a5f" }}>View Open Positions</span>
            <span className="inline-block px-6 py-3 text-sm font-medium border border-slate-300 rounded cursor-pointer hover:border-slate-500 transition-colors">Life at Vanguard</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 px-6" style={{ backgroundColor: "#1e3a5f" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <span className="text-lg font-bold">VANGUARD CONSULTING</span>
            <p className="text-sm text-blue-300 mt-2">Global management consulting since 2002</p>
          </div>
          <div className="flex flex-wrap gap-8">
            {["Privacy Policy", "Terms of Service", "Accessibility", "Sustainability", "LinkedIn", "Press"].map((link) => (
              <span key={link} className="text-xs text-blue-300 hover:text-white cursor-pointer transition-colors">{link}</span>
            ))}
          </div>
          <p className="text-xs text-blue-400">&copy; 2026 Vanguard Consulting Group LLC</p>
        </div>
      </footer>
    </div>
  )
}
