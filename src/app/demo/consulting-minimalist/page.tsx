export default function ConsultingMinimalistDemo() {
  const services = [
    { title: "Strategy Consulting", desc: "We help organizations define clear strategic direction, identify growth opportunities, and build competitive advantages that endure." },
    { title: "Operations Excellence", desc: "Streamlining workflows, reducing waste, and building resilient operational frameworks that scale with your ambition." },
    { title: "Digital Transformation", desc: "Guiding enterprises through technology adoption with pragmatic roadmaps that deliver measurable business outcomes." },
    { title: "Change Management", desc: "Aligning teams, culture, and processes to ensure strategic initiatives take hold and deliver lasting impact." },
  ]

  const caseStudies = [
    { client: "NovaTech Industries", sector: "Manufacturing", metric: "42% reduction in operational costs", timeline: "18 months" },
    { client: "Meridian Health Systems", sector: "Healthcare", metric: "$180M in recovered revenue", timeline: "24 months" },
    { client: "Atlas Financial Group", sector: "Financial Services", metric: "3.2x improvement in processing speed", timeline: "12 months" },
  ]

  const team = [
    { name: "Victoria Hargrove", role: "Managing Partner", bio: "20 years leading transformation at Fortune 100 companies" },
    { name: "David Nakamura", role: "Senior Partner", bio: "Former McKinsey, specializing in operational excellence" },
    { name: "Catherine Osei", role: "Partner, Digital Practice", bio: "Led $2B+ in digital transformation programs globally" },
  ]

  const process = [
    { step: "01", title: "Discovery", desc: "Deep stakeholder interviews and data analysis to understand your current state and aspirations." },
    { step: "02", title: "Analysis", desc: "Rigorous assessment of market dynamics, internal capabilities, and competitive positioning." },
    { step: "03", title: "Strategy", desc: "Crafting actionable recommendations with clear milestones, owners, and success metrics." },
    { step: "04", title: "Execution", desc: "Hands-on implementation support to ensure strategies translate into tangible business results." },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight" style={{ color: "#6366f1" }}>APEX ADVISORY</span>
        <div className="hidden md:flex items-center space-x-10">
          {["Services", "Case Studies", "Team", "Contact"].map((item) => (
            <span key={item} className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">{item}</span>
          ))}
        </div>
        <span className="text-sm font-medium cursor-pointer px-5 py-2 rounded-md text-white" style={{ backgroundColor: "#6366f1" }}>Get Started</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-32">
        <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight text-slate-900">
          Strategy that<br />drives results.
        </h1>
        <p className="mt-8 text-lg text-slate-400 max-w-lg font-light leading-relaxed">
          Apex Advisory partners with ambitious organizations to solve their most complex challenges and unlock sustainable growth.
        </p>
        <div className="mt-10 flex gap-4">
          <span className="inline-block px-6 py-3 text-sm font-medium text-white rounded-md cursor-pointer" style={{ backgroundColor: "#6366f1" }}>Schedule a Consultation</span>
          <span className="inline-block px-6 py-3 text-sm font-medium text-slate-600 border border-slate-200 rounded-md cursor-pointer hover:border-slate-400 transition-colors">View Our Work</span>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">What We Do</p>
          <h2 className="text-3xl font-light text-slate-900 mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {services.map((s) => (
              <div key={s.title} className="border-l-2 pl-6" style={{ borderColor: "#6366f1" }}>
                <h3 className="text-lg font-medium mb-3">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">Results</p>
        <h2 className="text-3xl font-light text-slate-900 mb-16">Case Studies</h2>
        <div className="space-y-0">
          {caseStudies.map((cs) => (
            <div key={cs.client} className="py-10 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:pl-2 transition-all">
              <div>
                <h3 className="text-2xl font-light text-slate-900">{cs.client}</h3>
                <p className="text-sm text-slate-400 mt-1">{cs.sector}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium" style={{ color: "#6366f1" }}>{cs.metric}</p>
                <p className="text-xs text-slate-400 mt-1">{cs.timeline} engagement</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">Leadership</p>
          <h2 className="text-3xl font-light text-slate-900 mb-16">Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((m) => (
              <div key={m.name}>
                <div className="aspect-[4/5] bg-slate-200 rounded-md mb-6" />
                <h3 className="text-base font-medium">{m.name}</h3>
                <p className="text-sm mt-1" style={{ color: "#6366f1" }}>{m.role}</p>
                <p className="text-sm text-slate-400 mt-2">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">How We Work</p>
        <h2 className="text-3xl font-light text-slate-900 mb-16">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {process.map((p) => (
            <div key={p.step}>
              <span className="text-4xl font-light" style={{ color: "#6366f1" }}>{p.step}</span>
              <h3 className="text-lg font-medium mt-4 mb-3">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Logos */}
      <section className="border-y border-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-10 text-center">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-14">
            {["NovaTech", "Meridian", "Atlas", "Pinnacle", "Veritas", "Cascade"].map((name) => (
              <span key={name} className="text-sm text-slate-300 font-medium tracking-wider uppercase">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-6xl mx-auto px-6 py-32 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-6">Ready to Begin?</p>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900">Let&apos;s discuss your<br />next strategic move.</h2>
        <p className="text-slate-400 mt-6 text-sm font-light max-w-md mx-auto">We work with a select number of clients each year. Reach out to explore how Apex Advisory can accelerate your growth.</p>
        <div className="mt-10">
          <span className="inline-block px-8 py-3 text-sm font-medium text-white rounded-md cursor-pointer" style={{ backgroundColor: "#6366f1" }}>Contact Us</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-sm font-semibold" style={{ color: "#6366f1" }}>APEX ADVISORY</span>
            <p className="text-xs text-slate-400 mt-1">Management consulting for the modern enterprise</p>
          </div>
          <div className="flex space-x-8">
            {["LinkedIn", "Twitter", "Insights Blog"].map((s) => (
              <span key={s} className="text-xs text-slate-400 hover:text-slate-900 cursor-pointer transition-colors">{s}</span>
            ))}
          </div>
          <span className="text-xs text-slate-300">&copy; 2026 Apex Advisory Group</span>
        </div>
      </footer>
    </div>
  )
}
