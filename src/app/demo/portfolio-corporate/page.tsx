export default function PortfolioCorporateDemo() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>

      {/* NAV */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <span className="text-lg font-bold text-[#1e40af]">Meridian</span>
            <div className="hidden md:flex space-x-8">
              <span className="text-sm text-slate-600 hover:text-[#1e40af] cursor-pointer transition-colors font-medium">Services</span>
              <span className="text-sm text-slate-600 hover:text-[#1e40af] cursor-pointer transition-colors font-medium">Case Studies</span>
              <span className="text-sm text-slate-600 hover:text-[#1e40af] cursor-pointer transition-colors font-medium">About</span>
              <span className="text-sm text-slate-600 hover:text-[#1e40af] cursor-pointer transition-colors font-medium">Insights</span>
            </div>
          </div>
          <span className="bg-[#1e40af] text-white px-5 py-2 text-sm font-medium rounded-md cursor-pointer hover:bg-[#1e3a8a] transition-colors">Schedule a Call</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] text-white">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32">
          <p className="text-sm font-medium text-blue-200 uppercase tracking-wider mb-4">Digital Strategy & Design Consultancy</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            We transform businesses<br />through strategic design
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mb-10">
            Meridian partners with enterprise clients to deliver measurable results through research-driven design, scalable systems, and digital transformation initiatives.
          </p>
          <div className="flex space-x-4">
            <span className="bg-white text-[#1e40af] px-6 py-3 text-sm font-semibold rounded-md cursor-pointer hover:bg-blue-50 transition-colors">View Our Work</span>
            <span className="border border-white/30 text-white px-6 py-3 text-sm font-medium rounded-md cursor-pointer hover:bg-white/10 transition-colors">Download Capabilities Deck</span>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider text-center mb-8">Trusted by industry leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
            {["Deloitte", "Siemens", "Philips", "Stripe", "Shopify", "HubSpot"].map((logo) => (
              <span key={logo} className="text-sm font-semibold text-slate-300 tracking-wider uppercase">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Featured Case Studies</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Results-driven work across fintech, healthcare, and enterprise SaaS.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { client: "Northvolt Financial", industry: "Fintech", title: "Redesigning onboarding to reduce drop-off by 62%", metric: "+62%", metricLabel: "Completion Rate", desc: "End-to-end redesign of the account opening flow for a digital banking platform serving 2.4M users across 12 European markets." },
              { client: "MedBridge Health", industry: "Healthcare", title: "Unified patient portal serving 800+ clinics", metric: "4.8/5", metricLabel: "User Satisfaction", desc: "Design system and frontend architecture for a HIPAA-compliant patient engagement platform used by 340,000 monthly active patients." },
              { client: "Apex Cloud", industry: "Enterprise SaaS", title: "Developer dashboard that cut support tickets 45%", metric: "-45%", metricLabel: "Support Tickets", desc: "Comprehensive UX overhaul of a cloud infrastructure dashboard, including new monitoring views, alerting workflows, and documentation integration." },
            ].map((study) => (
              <div key={study.client} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="bg-[#1e40af] h-2" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[#3b82f6] uppercase tracking-wider">{study.industry}</span>
                    <span className="text-xs text-slate-400">{study.client}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-snug">{study.title}</h3>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">{study.desc}</p>
                  <div className="bg-blue-50 rounded-md p-4 flex items-center space-x-3">
                    <span className="text-2xl font-bold text-[#1e40af]">{study.metric}</span>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">{study.metricLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Our Services</h2>
          <p className="text-slate-500 text-center mb-12 max-w-lg mx-auto">A full-service approach to digital transformation, from strategy through execution.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "UX Strategy", desc: "Research, audits, and roadmaps that align design decisions with business objectives and user needs." },
              { title: "Product Design", desc: "End-to-end interface design for web and mobile products, from wireframes to pixel-perfect prototypes." },
              { title: "Design Systems", desc: "Scalable component libraries and design tokens that ensure consistency across teams and products." },
              { title: "Development", desc: "Frontend implementation in React, Next.js, and TypeScript with accessibility and performance baked in." },
            ].map((service) => (
              <div key={service.title} className="p-6 border border-slate-200 rounded-lg hover:border-[#3b82f6] transition-colors">
                <h3 className="text-base font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { quote: "Meridian brought a level of strategic rigor we had not seen from a design partner before. They did not just make things look better -- they made our product work better. The data speaks for itself.", name: "James Whitfield", title: "VP of Product", company: "Northvolt Financial" },
              { quote: "We evaluated seven agencies before choosing Meridian. Their process was thorough, their communication was impeccable, and they delivered on time and under budget. A rare combination in this industry.", name: "Dr. Priya Sharma", title: "Chief Digital Officer", company: "MedBridge Health" },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-lg p-8 border border-slate-200">
                <p className="text-sm text-slate-600 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-[#1e40af] flex items-center justify-center text-white text-sm font-bold">{t.name[0]}</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.title}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e40af]">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to elevate your digital presence?</h2>
          <p className="text-blue-200 mb-8 max-w-lg mx-auto">Schedule a 30-minute strategy session with our team. No pitch decks, no pressure -- just a candid conversation about your goals.</p>
          <span className="inline-block bg-white text-[#1e40af] px-8 py-3 text-sm font-semibold rounded-md cursor-pointer hover:bg-blue-50 transition-colors">Book a Strategy Session</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-lg font-bold text-white mb-3 block">Meridian</span>
              <p className="text-sm text-slate-400">Strategic design consultancy helping enterprises build better digital products since 2016.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-300 mb-3">Services</p>
              <div className="space-y-2 text-sm text-slate-400">
                <p className="hover:text-white cursor-pointer transition-colors">UX Strategy</p>
                <p className="hover:text-white cursor-pointer transition-colors">Product Design</p>
                <p className="hover:text-white cursor-pointer transition-colors">Design Systems</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-300 mb-3">Company</p>
              <div className="space-y-2 text-sm text-slate-400">
                <p className="hover:text-white cursor-pointer transition-colors">About</p>
                <p className="hover:text-white cursor-pointer transition-colors">Careers</p>
                <p className="hover:text-white cursor-pointer transition-colors">Contact</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-300 mb-3">Connect</p>
              <div className="space-y-2 text-sm text-slate-400">
                <p className="hover:text-white cursor-pointer transition-colors">LinkedIn</p>
                <p className="hover:text-white cursor-pointer transition-colors">Twitter</p>
                <p className="hover:text-white cursor-pointer transition-colors">Dribbble</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <span className="text-xs text-slate-500">&copy; 2026 Meridian Design Consultancy. All rights reserved.</span>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-xs text-slate-500 hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="text-xs text-slate-500 hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
