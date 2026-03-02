export default function StartupCorporateDemo() {
  const navLinks = ["Platform", "Solutions", "Enterprise", "Resources", "Company"]
  const metrics = [
    { value: "$42M", label: "Series B Raised" },
    { value: "340+", label: "Enterprise Clients" },
    { value: "99.99%", label: "Uptime Guarantee" },
    { value: "12x", label: "Avg ROI for Clients" },
  ]
  const features = [
    { title: "Compliance Automation", desc: "Automate SOC 2, HIPAA, and GDPR compliance workflows. Reduce audit preparation time by 80% with continuous monitoring." },
    { title: "Risk Intelligence", desc: "ML-powered risk scoring across your entire vendor ecosystem. Identify vulnerabilities before they become incidents." },
    { title: "Unified Dashboard", desc: "Single pane of glass for your security posture. Real-time insights across cloud, on-prem, and hybrid environments." },
    { title: "Incident Response", desc: "Automated playbooks and escalation paths. Mean time to resolution reduced by 65% on average." },
    { title: "API-First Platform", desc: "RESTful APIs with comprehensive documentation. Integrate with your existing security stack in hours, not weeks." },
    { title: "24/7 Support", desc: "Dedicated customer success managers for enterprise accounts. Phone, email, and Slack support around the clock." },
  ]
  const investors = ["Sequoia Capital", "Andreessen Horowitz", "Accel Partners", "Index Ventures", "Lightspeed"]
  const advisors = [
    { name: "Dr. Sarah Chen", role: "Former CISO, JPMorgan Chase", bg: "bg-blue-100" },
    { name: "Michael Torres", role: "Partner, Sequoia Capital", bg: "bg-blue-50" },
    { name: "Priya Ramaswamy", role: "Former VP Security, Google", bg: "bg-blue-100" },
    { name: "Robert Kimura", role: "Board Member, CrowdStrike", bg: "bg-blue-50" },
  ]
  const logos = ["Deloitte", "KPMG", "Accenture", "McKinsey", "BCG"]

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-800 rounded-md"></div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">ShieldLayer</span>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <span key={link} className="text-sm font-medium text-gray-600 hover:text-blue-800 cursor-pointer">{link}</span>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-600 cursor-pointer">Sign in</span>
            <span className="text-sm font-semibold text-white bg-blue-800 px-5 py-2.5 rounded-md cursor-pointer">Request Demo</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-700/50 text-blue-200 text-xs font-semibold mb-6">Series B &mdash; $42M raised from top-tier investors</div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              Enterprise Security &<br />Compliance, Automated
            </h1>
            <p className="text-lg text-blue-200 max-w-xl mb-10 leading-relaxed">
              ShieldLayer unifies compliance, risk management, and incident response into a single platform trusted by 340+ enterprises worldwide.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-semibold text-blue-900 bg-white px-6 py-3 rounded-md cursor-pointer">Schedule a Demo</span>
              <span className="text-sm font-semibold text-white border border-blue-400 px-6 py-3 rounded-md cursor-pointer">Read Case Studies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-xs font-semibold text-gray-400 text-center uppercase tracking-widest mb-6">Trusted by leading enterprises</p>
          <div className="flex justify-center items-center space-x-12 md:space-x-16">
            {logos.map((logo) => (
              <span key={logo} className="text-sm font-bold text-gray-300 tracking-wide">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m) => (
            <div key={m.label} className="text-center p-6 bg-blue-50 rounded-lg">
              <p className="text-3xl font-extrabold text-blue-800">{m.value}</p>
              <p className="text-sm text-gray-500 mt-2 font-medium">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-blue-800 uppercase tracking-widest mb-3">Platform</p>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">End-to-end security operations</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A comprehensive platform that replaces your fragmented security toolchain with a unified, intelligent solution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 mb-5"></div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-blue-800 uppercase tracking-widest mb-3">Leadership</p>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">Advisory Board</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Industry veterans guiding our strategy and product direction.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {advisors.map((a) => (
            <div key={a.name} className="text-center">
              <div className={`w-24 h-24 rounded-full ${a.bg} mx-auto mb-4`}></div>
              <p className="text-sm font-bold text-gray-900">{a.name}</p>
              <p className="text-xs text-gray-500 mt-1">{a.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investors */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-xs font-semibold text-gray-400 text-center uppercase tracking-widest mb-8">Backed by</p>
          <div className="flex justify-center items-center flex-wrap gap-8 md:gap-14">
            {investors.map((inv) => (
              <span key={inv} className="text-sm font-bold text-gray-300 tracking-wide">{inv}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4">Ready to secure your enterprise?</h2>
          <p className="text-blue-200 max-w-lg mx-auto mb-10">
            Join 340+ enterprises that trust ShieldLayer for compliance automation and security operations. Schedule a personalized demo today.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <span className="text-sm font-semibold text-blue-900 bg-white px-8 py-3 rounded-md cursor-pointer">Schedule Demo</span>
            <span className="text-sm font-semibold text-white border border-blue-400 px-8 py-3 rounded-md cursor-pointer">Contact Sales</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {[
              { heading: "Platform", links: ["Compliance", "Risk Intel", "Incident Response", "Integrations"] },
              { heading: "Company", links: ["About", "Careers", "Press", "Contact"] },
              { heading: "Resources", links: ["Documentation", "Blog", "Case Studies", "Webinars"] },
              { heading: "Legal", links: ["Privacy Policy", "Terms of Service", "Security", "GDPR"] },
            ].map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-4">{col.heading}</p>
                <div className="space-y-2">
                  {col.links.map((link) => (
                    <p key={link} className="text-sm text-gray-500 hover:text-gray-300 cursor-pointer">{link}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <span className="text-xs text-gray-500">&copy; 2026 ShieldLayer, Inc. All rights reserved.</span>
            <span className="text-xs text-gray-500 mt-2 md:mt-0">SOC 2 Type II | ISO 27001 | HIPAA Compliant</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
