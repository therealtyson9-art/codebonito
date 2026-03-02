export default function AgencyCorporateDemo() {
  const services = [
    { tier: "Starter", price: "$2,500", period: "/month", features: ["Brand audit & strategy", "Social media management", "Monthly analytics report", "Email support"], highlight: false },
    { tier: "Growth", price: "$5,500", period: "/month", features: ["Everything in Starter", "Custom web development", "SEO & content marketing", "Dedicated account manager", "Bi-weekly strategy calls"], highlight: true },
    { tier: "Enterprise", price: "Custom", period: "", features: ["Everything in Growth", "Full-stack development team", "24/7 priority support", "Quarterly business reviews", "Custom integrations", "On-site workshops"], highlight: false },
  ]

  const process = [
    { step: "01", title: "Discovery", desc: "We conduct stakeholder interviews, market research, and competitive analysis to understand your business landscape." },
    { step: "02", title: "Strategy", desc: "Our team develops a comprehensive digital strategy aligned with your business objectives and KPIs." },
    { step: "03", title: "Execution", desc: "We bring the strategy to life with agile sprints, regular check-ins, and transparent progress reporting." },
    { step: "04", title: "Optimization", desc: "Continuous monitoring and data-driven refinements ensure sustained growth and maximum ROI." },
  ]

  const caseStudies = [
    { client: "Vertex Financial Group", industry: "Finance", metric: "+187%", metricLabel: "Lead Generation", bg: "bg-blue-900" },
    { client: "Pacific Health Systems", industry: "Healthcare", metric: "4.2M", metricLabel: "Users Onboarded", bg: "bg-blue-800" },
    { client: "Atlas Logistics", industry: "Supply Chain", metric: "+92%", metricLabel: "Operational Efficiency", bg: "bg-blue-700" },
  ]

  const clients = ["Vertex Financial", "Pacific Health", "Atlas Logistics", "Meridian Corp", "Pinnacle Group", "Summit Tech", "Catalyst Inc", "Horizon Labs"]

  const team = [
    { name: "Robert Hargrove", role: "CEO & Founder", exp: "20+ years in digital transformation" },
    { name: "Catherine Wu", role: "Chief Strategy Officer", exp: "Former McKinsey, Harvard MBA" },
    { name: "Daniel Okafor", role: "VP of Engineering", exp: "Ex-Google, distributed systems expert" },
    { name: "Maria Santos", role: "Creative Director", exp: "Cannes Lions award winner" },
  ]

  const stats = [
    { value: "150+", label: "Clients Served" },
    { value: "$2.4B", label: "Revenue Generated" },
    { value: "98%", label: "Client Retention" },
    { value: "12", label: "Years in Business" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-md" />
            <span className="text-lg font-bold text-gray-900">Ascend<span className="text-blue-600">Digital</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {["Solutions", "Case Studies", "About", "Pricing", "Contact"].map((item) => (
              <span key={item} className="text-sm font-medium text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">{item}</span>
            ))}
          </div>
          <span className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 cursor-pointer transition-colors">Schedule a Call</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">Enterprise Digital Solutions</p>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Transform your business with data-driven digital strategy.</h1>
            <p className="text-lg text-blue-200 mt-6 max-w-xl leading-relaxed">We partner with forward-thinking enterprises to build scalable digital solutions that drive measurable growth and lasting competitive advantage.</p>
            <div className="flex items-center space-x-4 mt-10">
              <span className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 cursor-pointer transition-colors">Get a Free Consultation</span>
              <span className="px-6 py-3 border border-blue-400 text-blue-300 font-semibold rounded-md hover:bg-white/10 cursor-pointer transition-colors">View Case Studies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-blue-600">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
          <h2 className="text-3xl md:text-4xl font-bold">A proven methodology for results</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {process.map((p, i) => (
            <div key={p.step} className="relative">
              <div className="text-5xl font-extrabold text-blue-100 mb-4">{p.step}</div>
              {i < 3 && <div className="hidden md:block absolute top-8 left-full w-full h-px bg-blue-200" />}
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Packages */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold">Service packages built for growth</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.tier} className={`rounded-lg p-8 ${s.highlight ? "bg-blue-600 text-white ring-4 ring-blue-300 scale-105" : "bg-white border border-gray-200"}`}>
                <h3 className={`text-xl font-bold ${s.highlight ? "text-white" : "text-gray-900"}`}>{s.tier}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold">{s.price}</span>
                  <span className={`text-sm ml-1 ${s.highlight ? "text-blue-200" : "text-gray-400"}`}>{s.period}</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start text-sm">
                      <span className={`mr-2 mt-0.5 ${s.highlight ? "text-blue-200" : "text-blue-600"}`}>&#10003;</span>
                      <span className={s.highlight ? "text-blue-100" : "text-gray-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <span className={`block text-center py-3 rounded-md font-semibold text-sm cursor-pointer transition-colors ${s.highlight ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-blue-600 text-white hover:bg-blue-700"}`}>Get Started</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold">Proven results for industry leaders</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <div key={cs.client} className={`${cs.bg} rounded-lg p-8 text-white`}>
              <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold">{cs.industry}</span>
              <h3 className="text-xl font-bold mt-3">{cs.client}</h3>
              <div className="mt-8">
                <p className="text-4xl font-extrabold">{cs.metric}</p>
                <p className="text-sm text-blue-200 mt-1">{cs.metricLabel}</p>
              </div>
              <span className="inline-block mt-6 text-sm font-semibold text-blue-300 cursor-pointer hover:text-white transition-colors">Read full case study &rarr;</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold">Meet the team driving your success</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((m) => (
              <div key={m.name} className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-4" />
                <h3 className="font-bold">{m.name}</h3>
                <p className="text-sm text-blue-600 font-medium">{m.role}</p>
                <p className="text-xs text-gray-400 mt-2">{m.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-center text-sm text-gray-400 font-medium uppercase tracking-wider mb-10">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {clients.map((c) => (
            <span key={c} className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{c}</span>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to accelerate your digital growth?</h2>
          <p className="text-blue-200 mt-4 max-w-xl mx-auto">Schedule a free 30-minute strategy session with one of our senior consultants. No obligation, just actionable insights.</p>
          <div className="flex justify-center items-center space-x-4 mt-8">
            <span className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 cursor-pointer transition-colors">Book a Meeting</span>
            <span className="px-8 py-3 border border-white/50 font-semibold rounded-md hover:bg-white/10 cursor-pointer transition-colors">Download Our Portfolio</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded" />
              <span className="text-white font-bold">AscendDigital</span>
            </div>
            <p className="text-sm leading-relaxed">Enterprise digital transformation partner. Offices in New York, London, and Singapore.</p>
          </div>
          {[
            { title: "Solutions", links: ["Strategy", "Development", "Marketing", "Analytics"] },
            { title: "Company", links: ["About Us", "Careers", "Blog", "Press"] },
            { title: "Contact", links: ["hello@ascend.digital", "+1 (555) 234-5678", "New York, NY 10001"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link} className="text-sm hover:text-white cursor-pointer transition-colors">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between text-xs">
          <span>&copy; 2026 Ascend Digital. All rights reserved.</span>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <span key={item} className="hover:text-white cursor-pointer transition-colors">{item}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
