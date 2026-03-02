export default function AgencyMinimalistDemo() {
  const services = [
    { title: "Brand Strategy", desc: "We distill your vision into a clear, compelling brand identity that resonates with your audience and stands the test of time." },
    { title: "Digital Design", desc: "Pixel-perfect interfaces and experiences crafted with intention. Every element serves a purpose, nothing more." },
    { title: "Web Development", desc: "Clean, performant code that brings designs to life. Built with modern frameworks and scalable architecture." },
    { title: "Content Strategy", desc: "Thoughtful narratives that connect your brand with the people who matter most. Words chosen with care." },
  ]

  const caseStudies = [
    { client: "Aura Skincare", category: "Branding & Web", year: "2026", result: "312% increase in online revenue within 6 months of launch" },
    { client: "Northlight Architecture", category: "Digital Design", year: "2025", result: "Award-winning portfolio site featured in Awwwards" },
    { client: "Meridian Capital", category: "Brand Strategy", year: "2025", result: "Complete rebrand leading to 4x qualified lead generation" },
    { client: "Solace Wellness", category: "Full Service", year: "2024", result: "From concept to market leader in the wellness space" },
  ]

  const team = [
    { name: "Elena Marsh", role: "Founder & Creative Director", color: "bg-slate-200" },
    { name: "James Chen", role: "Head of Design", color: "bg-slate-300" },
    { name: "Sofia Reyes", role: "Lead Developer", color: "bg-slate-100" },
    { name: "David Kim", role: "Strategy Director", color: "bg-slate-250" },
    { name: "Ava Thompson", role: "Project Manager", color: "bg-slate-150" },
    { name: "Marcus Bell", role: "Senior Designer", color: "bg-slate-200" },
  ]

  const testimonials = [
    { quote: "They stripped everything back to what truly mattered. The result was more impactful than anything we could have imagined.", author: "Sarah Lin", company: "Aura Skincare" },
    { quote: "Working with Whitespace felt effortless. They understood our vision before we could fully articulate it.", author: "Thomas Reed", company: "Northlight Architecture" },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <span className="text-lg font-medium tracking-tight">whitespace.</span>
        <div className="hidden md:flex items-center space-x-10">
          {["Work", "Services", "About", "Contact"].map((item) => (
            <span key={item} className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">{item}</span>
          ))}
        </div>
        <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">hello@whitespace.studio</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-32">
        <h1 className="text-6xl md:text-8xl font-light leading-[0.95] tracking-tight text-slate-900">
          Design with<br />intention.
        </h1>
        <p className="mt-10 text-lg text-slate-400 max-w-md font-light leading-relaxed">
          We are a design studio focused on clarity, craft, and meaningful digital experiences for thoughtful brands.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-16">Services</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {services.map((s) => (
            <div key={s.title} className="group">
              <h3 className="text-xl font-medium mb-3">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-slate-100" /></div>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-16">Selected Work</p>
        <div className="space-y-0">
          {caseStudies.map((cs) => (
            <div key={cs.client} className="group py-10 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:pl-2 transition-all">
              <div>
                <h3 className="text-2xl font-light">{cs.client}</h3>
                <p className="text-sm text-slate-400 mt-1">{cs.result}</p>
              </div>
              <div className="flex items-center space-x-8">
                <span className="text-xs text-slate-400 uppercase tracking-wider">{cs.category}</span>
                <span className="text-xs text-slate-300">{cs.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-slate-100" /></div>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-16">Our Team</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-14">
          {team.map((m) => (
            <div key={m.name}>
              <div className={`aspect-[3/4] ${m.color} rounded-sm mb-5`} />
              <h3 className="text-sm font-medium">{m.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-16">Kind Words</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {testimonials.map((t) => (
              <div key={t.author}>
                <p className="text-lg font-light leading-relaxed text-slate-600 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm mt-6 text-slate-900 font-medium">{t.author}</p>
                <p className="text-xs text-slate-400">{t.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-12 text-center">Trusted By</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {["Aura", "Northlight", "Meridian", "Solace", "Vantage", "Lumina"].map((name) => (
            <span key={name} className="text-sm text-slate-300 font-medium tracking-wider uppercase">{name}</span>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-6xl mx-auto px-6 py-32 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-8">Start a Project</p>
        <h2 className="text-4xl md:text-6xl font-light tracking-tight">Let&apos;s create something<br />together.</h2>
        <p className="text-slate-400 mt-6 text-sm font-light">We take on a limited number of projects each quarter to ensure every client gets our full attention.</p>
        <div className="mt-10">
          <span className="inline-block px-8 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 cursor-pointer transition-colors">Get in touch</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-sm font-medium">whitespace.</span>
            <p className="text-xs text-slate-400 mt-1">Design studio based in San Francisco</p>
          </div>
          <div className="flex space-x-8">
            {["Twitter", "Dribbble", "LinkedIn", "Instagram"].map((s) => (
              <span key={s} className="text-xs text-slate-400 hover:text-slate-900 cursor-pointer transition-colors">{s}</span>
            ))}
          </div>
          <span className="text-xs text-slate-300">&copy; 2026 Whitespace Studio</span>
        </div>
      </footer>
    </div>
  )
}
