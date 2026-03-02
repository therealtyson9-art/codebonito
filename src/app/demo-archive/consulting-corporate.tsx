export default function ConsultingCorporateDemo() {
  const services = [
    { name: "Strategy & Growth", desc: "Market entry, competitive positioning, corporate strategy, and growth roadmaps for enterprises navigating complexity.", icon: "📊" },
    { name: "Operations Excellence", desc: "End-to-end supply chain optimization, lean transformation, and operational restructuring to drive sustainable efficiency.", icon: "⚙️" },
    { name: "Digital & Technology", desc: "Enterprise architecture, cloud migration, data analytics, and AI implementation to accelerate digital maturity.", icon: "💻" },
    { name: "Mergers & Acquisitions", desc: "Target identification, due diligence, synergy modeling, integration planning, and post-merger value capture.", icon: "🤝" },
  ];

  const industries = [
    { name: "Financial Services", focus: "Regulatory compliance, digital banking, risk management" },
    { name: "Healthcare & Life Sciences", focus: "Clinical operations, pharma strategy, health system integration" },
    { name: "Technology & Media", focus: "Go-to-market, platform strategy, content monetization" },
    { name: "Energy & Utilities", focus: "Energy transition, grid modernization, sustainability" },
    { name: "Manufacturing", focus: "Industry 4.0, supply chain resilience, quality systems" },
    { name: "Public Sector", focus: "Digital government, program delivery, policy implementation" },
  ];

  const offices = [
    { city: "New York", role: "Global Headquarters", address: "One World Trade Center, 85th Floor" },
    { city: "London", role: "EMEA Hub", address: "22 Bishopsgate, Level 40" },
    { city: "Singapore", role: "Asia-Pacific Hub", address: "Marina Bay Financial Centre, Tower 3" },
    { city: "Dubai", role: "Middle East Office", address: "DIFC Gate Building, Level 15" },
  ];

  const leadership = [
    { name: "Katherine Walsh", title: "Global CEO", background: "Former Senior Partner at McKinsey. 25 years leading Fortune 500 transformations across three continents." },
    { name: "Rajesh Mehta", title: "Managing Partner, APAC", background: "Previously CEO of a $4B logistics company. Deep expertise in emerging market expansion." },
    { name: "Sarah Lindberg", title: "Chief Strategy Officer", background: "Ex-BCG. Architect of Apex's industry-led practice model and strategic planning methodology." },
    { name: "James Okonkwo", title: "Head of Digital Practice", background: "Former CTO of a FTSE 100 insurer. Pioneer in enterprise AI and cloud-native architecture." },
  ];

  const insights = [
    { title: "The CFO's Guide to AI-Ready Finance Functions", category: "Digital", date: "February 2026", summary: "How finance leaders can build the data infrastructure, talent pipelines, and governance frameworks needed to deploy AI at scale." },
    { title: "Supply Chain Resilience in an Era of Disruption", category: "Operations", date: "January 2026", summary: "Lessons from companies that turned pandemic-era supply chain challenges into lasting competitive advantages." },
    { title: "Post-Merger Integration: The First 100 Days", category: "M&A", date: "December 2025", summary: "A practical framework for capturing synergies quickly while maintaining organizational stability and employee morale." },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <div style={{ backgroundColor: "#f0f7ff" }}>
        {/* Structured Nav */}
        <nav className="px-8 py-4 border-b" style={{ backgroundColor: "#1e3a5f", borderColor: "#2d4a6f" }}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="text-lg font-semibold text-white tracking-tight">Apex Global Consulting</span>
            <div className="hidden md:flex gap-8 text-sm" style={{ color: "#a3c4e8" }}>
              <a href="#" className="hover:text-white">Services</a>
              <a href="#" className="hover:text-white">Industries</a>
              <a href="#" className="hover:text-white">Insights</a>
              <a href="#" className="hover:text-white">Careers</a>
              <a href="#" className="hover:text-white">About</a>
            </div>
            <button className="text-sm px-5 py-2 bg-white font-medium rounded" style={{ color: "#1e3a5f" }}>Contact Us</button>
          </div>
        </nav>

        {/* Professional Team Hero */}
        <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: "#3b82f6" }}>Global Management Consulting</p>
            <h1 className="text-4xl font-bold leading-tight mb-6" style={{ color: "#1e3a5f" }}>Shaping the future of enterprise, one transformation at a time.</h1>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#64748b" }}>Apex Global Consulting partners with the world&apos;s leading organizations to drive strategy, improve operations, harness technology, and execute transformative deals.</p>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded text-white text-sm font-medium" style={{ backgroundColor: "#1e3a5f" }}>Explore Our Services</button>
              <button className="px-6 py-3 rounded text-sm font-medium border" style={{ color: "#1e3a5f", borderColor: "#1e3a5f" }}>Our Latest Insights</button>
            </div>
          </div>
          <div className="h-80 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#dbeafe" }}>
            <div className="text-center" style={{ color: "#3b82f6" }}>
              <div className="text-6xl mb-3">👥</div>
              <p className="text-sm font-medium">Professional Team Photography</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16" style={{ backgroundColor: "white" }}>
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-sm uppercase tracking-wider font-medium mb-2" style={{ color: "#3b82f6" }}>Our Services</h2>
            <h3 className="text-3xl font-bold mb-10" style={{ color: "#1e3a5f" }}>Integrated capabilities, exceptional outcomes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <div key={s.name} className="p-6 rounded-lg border" style={{ borderColor: "#e2e8f0" }}>
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h4 className="font-semibold mb-2" style={{ color: "#1e3a5f" }}>{s.name}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-sm uppercase tracking-wider font-medium mb-2" style={{ color: "#3b82f6" }}>Industries</h2>
            <h3 className="text-3xl font-bold mb-10" style={{ color: "#1e3a5f" }}>Deep expertise where it matters</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {industries.map((ind) => (
                <div key={ind.name} className="p-5 rounded-lg bg-white border" style={{ borderColor: "#e2e8f0" }}>
                  <h4 className="font-semibold text-sm mb-1" style={{ color: "#1e3a5f" }}>{ind.name}</h4>
                  <p className="text-xs" style={{ color: "#94a3b8" }}>{ind.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Offices */}
        <section className="py-16" style={{ backgroundColor: "#1e3a5f" }}>
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-sm uppercase tracking-wider font-medium mb-2" style={{ color: "#93c5fd" }}>Global Presence</h2>
            <h3 className="text-3xl font-bold mb-10 text-white">Offices across four continents</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {offices.map((o) => (
                <div key={o.city} className="p-5 rounded-lg" style={{ backgroundColor: "#2d4a6f" }}>
                  <h4 className="font-semibold text-white mb-1">{o.city}</h4>
                  <p className="text-xs mb-1" style={{ color: "#93c5fd" }}>{o.role}</p>
                  <p className="text-xs" style={{ color: "#7aa3cc" }}>{o.address}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16" style={{ backgroundColor: "white" }}>
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-sm uppercase tracking-wider font-medium mb-2" style={{ color: "#3b82f6" }}>Leadership</h2>
            <h3 className="text-3xl font-bold mb-10" style={{ color: "#1e3a5f" }}>Experienced leaders, proven results</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {leadership.map((l) => (
                <div key={l.name}>
                  <div className="w-full h-44 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: "#e8f0fe" }}>
                    <span className="text-3xl">👤</span>
                  </div>
                  <h4 className="font-semibold text-sm" style={{ color: "#1e3a5f" }}>{l.name}</h4>
                  <p className="text-xs mb-2" style={{ color: "#3b82f6" }}>{l.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{l.background}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-sm uppercase tracking-wider font-medium mb-2" style={{ color: "#3b82f6" }}>Latest Insights</h2>
            <h3 className="text-3xl font-bold mb-10" style={{ color: "#1e3a5f" }}>Thought leadership from our experts</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {insights.map((ins) => (
                <div key={ins.title} className="bg-white p-6 rounded-lg border" style={{ borderColor: "#e2e8f0" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2 py-1 rounded" style={{ backgroundColor: "#e8f0fe", color: "#1e3a5f" }}>{ins.category}</span>
                    <span className="text-xs" style={{ color: "#94a3b8" }}>{ins.date}</span>
                  </div>
                  <h4 className="font-semibold mb-2" style={{ color: "#1e3a5f" }}>{ins.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{ins.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16" style={{ backgroundColor: "#1e3a5f" }}>
          <div className="max-w-3xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to transform your organization?</h2>
            <p className="text-sm mb-8" style={{ color: "#93c5fd" }}>Connect with our team to discuss how Apex Global Consulting can help you navigate your most important challenges.</p>
            <button className="px-8 py-3 rounded text-sm font-medium" style={{ backgroundColor: "white", color: "#1e3a5f" }}>Contact Our Team</button>
          </div>
        </section>

        {/* Corporate Footer */}
        <footer className="py-12" style={{ backgroundColor: "#0f2744" }}>
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <h4 className="font-semibold text-white mb-3">Apex Global Consulting</h4>
              <p className="text-xs" style={{ color: "#7aa3cc" }}>A leading global management consulting firm serving clients across strategy, operations, technology, and transactions.</p>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: "#93c5fd" }}>Services</h4>
              <ul className="space-y-1 text-xs" style={{ color: "#7aa3cc" }}>
                <li>Strategy</li><li>Operations</li><li>Digital</li><li>M&A</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: "#93c5fd" }}>Company</h4>
              <ul className="space-y-1 text-xs" style={{ color: "#7aa3cc" }}>
                <li>About</li><li>Careers</li><li>Newsroom</li><li>Alumni</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: "#93c5fd" }}>Legal</h4>
              <ul className="space-y-1 text-xs" style={{ color: "#7aa3cc" }}>
                <li>Privacy Policy</li><li>Terms of Use</li><li>Cookie Policy</li><li>Accessibility</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-8 mt-8 pt-8 border-t text-xs text-center" style={{ borderColor: "#1e3a5f", color: "#4a7ea8" }}>
            &copy; 2026 Apex Global Consulting LLP. All rights reserved. Member of the Apex International Network.
          </div>
        </footer>
      </div>
    </div>
  );
}
