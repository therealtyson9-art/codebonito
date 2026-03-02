import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export default function PortfolioCorporateDemo() {
  const timeline = [
    { company: 'Bain & Company', role: 'Principal Consultant', period: '2021 — Present', detail: 'Leading cross-functional teams on operational transformation engagements for Fortune 100 clients in healthcare and manufacturing.' },
    { company: 'McKinsey & Company', role: 'Associate Partner', period: '2017 — 2021', detail: 'Drove $200M+ in identified savings through supply chain restructuring and digital transformation initiatives.' },
    { company: 'Deloitte Consulting', role: 'Senior Consultant', period: '2013 — 2017', detail: 'Specialized in post-merger integration and organizational design for private equity portfolio companies.' },
    { company: 'Harvard Business School', role: 'MBA', period: '2011 — 2013', detail: 'Baker Scholar distinction. Concentrated in Strategy and General Management.' },
  ]

  const skills = [
    { name: 'Strategy & Planning', level: 95 }, { name: 'Operational Excellence', level: 90 },
    { name: 'Digital Transformation', level: 88 }, { name: 'M&A Integration', level: 85 },
    { name: 'Change Management', level: 92 }, { name: 'Financial Modeling', level: 80 },
  ]

  const clients = ['Pfizer', 'General Electric', 'Walmart', 'JPMorgan Chase', 'Procter & Gamble', 'FedEx', 'Honeywell', 'Medtronic']

  return (
    <div className={`min-h-screen bg-gray-50 ${raleway.className}`}>
      {/* Horizontal nav */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <span className="text-lg font-bold text-emerald-700">David Harrington</span>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Experience', 'Expertise', 'Clients', 'Contact'].map(l => (
              <a key={l} href="#" className="text-sm text-gray-600 hover:text-emerald-700 transition-colors">{l}</a>
            ))}
          </div>
          <button className="h-9 px-5 text-sm font-medium text-white bg-emerald-700 rounded hover:bg-emerald-800 transition-colors">Get in Touch</button>
        </div>
      </nav>

      {/* Headshot hero */}
      <section className="bg-emerald-700 text-white">
        <div className="max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest text-emerald-200 uppercase mb-4">Management Consultant</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Driving operational excellence for global enterprises
            </h1>
            <p className="text-emerald-100 text-lg leading-relaxed mb-8">
              With 13 years of experience at top-tier consulting firms, I help organizations transform their operations, optimize performance, and achieve sustainable growth.
            </p>
            <div className="flex gap-3">
              <button className="h-12 px-8 text-sm font-medium text-emerald-800 bg-white rounded hover:bg-gray-100 transition-colors">Download Resume</button>
              <button className="h-12 px-8 text-sm font-medium text-white border border-emerald-400 rounded hover:bg-emerald-600 transition-colors">Schedule Call</button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-72 h-80 bg-emerald-600 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-emerald-500 mx-auto mb-4" />
                <p className="text-sm text-emerald-200">Professional Headshot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume timeline */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-xs font-semibold tracking-widest text-emerald-700 uppercase mb-2">Career</h2>
        <p className="text-3xl font-bold text-gray-900 mb-12">Professional Experience</p>
        <div className="space-y-0">
          {timeline.map((t, i) => (
            <div key={i} className="grid md:grid-cols-4 gap-4 py-8 border-b border-gray-200 group hover:bg-white/80 px-4 -mx-4 transition-colors">
              <div>
                <p className="text-sm font-medium text-emerald-700">{t.period}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">{t.role}</p>
                <p className="text-sm text-gray-500">{t.company}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-600 leading-relaxed">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills bars */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-xs font-semibold tracking-widest text-emerald-700 uppercase mb-2">Capabilities</h2>
          <p className="text-3xl font-bold text-gray-900 mb-12">Areas of Expertise</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {skills.map(s => (
              <div key={s.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-800">{s.name}</span>
                  <span className="text-xs text-gray-500">{s.level}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client list */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-xs font-semibold tracking-widest text-emerald-700 uppercase mb-2">Portfolio</h2>
        <p className="text-3xl font-bold text-gray-900 mb-12">Select Clients</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map(c => (
            <div key={c} className="bg-white rounded-lg p-8 border border-gray-200 text-center hover:border-emerald-200 hover:shadow-sm transition-all">
              <div className="w-12 h-12 bg-gray-100 rounded mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-700">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-emerald-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
            &ldquo;David&apos;s strategic insight and hands-on approach transformed our operations. He delivered results that exceeded every benchmark we set.&rdquo;
          </blockquote>
          <p className="text-sm font-medium text-emerald-200">Michael Torres, COO — Medtronic</p>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Let&apos;s discuss your next initiative</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I&apos;m currently accepting select consulting engagements. Reach out to explore how I can help drive results for your organization.
            </p>
            <a href="mailto:david@harringtonconsulting.com" className="text-emerald-700 font-medium hover:underline">david@harringtonconsulting.com</a>
            <div className="flex gap-6 mt-6">
              {['LinkedIn', 'Twitter', 'Medium'].map(l => (
                <a key={l} href="#" className="text-sm text-gray-500 hover:text-emerald-700 transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="space-y-4">
              <div><label className="text-xs font-medium text-gray-600 uppercase tracking-wider">Name</label><div className="h-10 bg-gray-50 rounded border border-gray-200 mt-1" /></div>
              <div><label className="text-xs font-medium text-gray-600 uppercase tracking-wider">Email</label><div className="h-10 bg-gray-50 rounded border border-gray-200 mt-1" /></div>
              <div><label className="text-xs font-medium text-gray-600 uppercase tracking-wider">Message</label><div className="h-24 bg-gray-50 rounded border border-gray-200 mt-1" /></div>
              <button className="w-full h-10 text-sm font-medium text-white bg-emerald-700 rounded hover:bg-emerald-800 transition-colors">Send Message</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm font-medium text-white">David Harrington</span>
          <p className="text-xs">© 2026 Harrington Consulting LLC. All rights reserved.</p>
          <div className="flex gap-6">
            {['LinkedIn', 'Twitter', 'Email'].map(l => (
              <a key={l} href="#" className="text-xs text-gray-500 hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
