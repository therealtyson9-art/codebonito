export const dynamic = "force-dynamic";
import { IBM_Plex_Sans } from 'next/font/google'

const ibmPlex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export default function SaaSCorporateDemo() {
  const caseStudies = [
    { company: 'Meridian Financial', industry: 'Banking', result: '73% reduction in compliance incidents', summary: 'Unified their risk monitoring across 12 departments with real-time dashboards and automated audit trails.' },
    { company: 'Atlas Logistics', industry: 'Supply Chain', result: '4.2x faster reporting cycles', summary: 'Replaced legacy systems with Nexus, consolidating fleet analytics and predictive routing into one platform.' },
    { company: 'Horizon Healthcare', industry: 'Health Systems', result: '$8.2M annual cost savings', summary: 'Deployed Nexus across 34 hospitals, streamlining patient data workflows and HIPAA-compliant integrations.' },
  ]

  return (
    <div className={`min-h-screen bg-white ${ibmPlex.className}`}>
      {/* Mega dropdown nav */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <span className="text-xl font-bold text-blue-800">NEXUS</span>
            <div className="hidden md:flex items-center gap-6">
              {['Platform', 'Solutions', 'Industries', 'Resources', 'Partners'].map(l => (
                <a key={l} href="#" className="text-sm text-gray-600 hover:text-blue-800 transition-colors flex items-center gap-1">
                  {l} <span className="text-[10px] text-gray-400">▼</span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-800">Sign In</a>
            <button className="h-10 px-6 text-sm font-medium text-white bg-blue-800 rounded hover:bg-blue-900 transition-colors">Request Demo</button>
          </div>
        </div>
      </nav>

      {/* Enterprise hero with stats */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest text-blue-300 uppercase mb-4">Enterprise Platform</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Intelligent operations for the modern enterprise
            </h1>
            <p className="text-lg text-blue-200 mb-8 leading-relaxed">
              Nexus brings together data analytics, workflow automation, and compliance monitoring into a single platform trusted by Fortune 500 companies worldwide.
            </p>
            <div className="flex gap-3">
              <button className="h-12 px-8 text-sm font-medium text-blue-900 bg-white rounded hover:bg-gray-100 transition-colors">Schedule a Demo</button>
              <button className="h-12 px-8 text-sm font-medium text-white border border-blue-400 rounded hover:bg-blue-700/30 transition-colors">Read Whitepaper</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: '500+', l: 'Enterprise Clients' }, { v: '99.99%', l: 'Uptime Guaranteed' },
              { v: '$2.4B', l: 'Cost Savings Delivered' }, { v: '47', l: 'Countries Deployed' },
            ].map(s => (
              <div key={s.l} className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/10">
                <p className="text-3xl font-bold text-white">{s.v}</p>
                <p className="text-sm text-blue-300 mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise logos */}
      <section className="py-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {['Goldman Sachs', 'Deloitte', 'Siemens', 'Johnson & Johnson', 'Boeing', 'McKinsey'].map(b => (
              <span key={b} className="text-base font-semibold text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest text-blue-800 uppercase mb-4">ROI Calculator</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See your projected savings</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">Our clients see an average 340% return on investment within the first 18 months. Calculate your potential savings based on organization size.</p>
            <div className="space-y-6">
              {[
                { label: 'Annual IT Operations Budget', value: '$5,000,000' },
                { label: 'Number of Departments', value: '12' },
                { label: 'Current Tool Stack Size', value: '8 vendors' },
              ].map(row => (
                <div key={row.label} className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-600">{row.label}</span>
                  <span className="text-sm font-semibold text-gray-900">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-10">
            <p className="text-xs font-medium text-blue-800 uppercase tracking-widest mb-6">Projected Annual Savings</p>
            <p className="text-6xl font-bold text-blue-800 mb-2">$1.7M</p>
            <p className="text-sm text-gray-600 mb-8">Based on industry benchmarks and client data</p>
            <div className="grid grid-cols-3 gap-4">
              {[{ v: '340%', l: 'Avg ROI' }, { v: '62%', l: 'Time Saved' }, { v: '89%', l: 'Less Downtime' }].map(s => (
                <div key={s.l} className="text-center">
                  <p className="text-xl font-bold text-blue-800">{s.v}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.l}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full h-12 text-sm font-medium text-white bg-blue-800 rounded hover:bg-blue-900 transition-colors">Get Custom ROI Report</button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs font-medium tracking-widest text-blue-800 uppercase mb-4">Case Studies</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Proven results across industries</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map(cs => (
              <div key={cs.company} className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-md transition-shadow">
                <span className="text-xs font-medium text-blue-800 bg-blue-50 px-2 py-1 rounded">{cs.industry}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{cs.company}</h3>
                <p className="text-2xl font-bold text-blue-800 mb-4">{cs.result}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{cs.summary}</p>
                <a href="#" className="inline-block mt-6 text-sm font-medium text-blue-800 hover:underline">Read full case study →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your operations?</h2>
          <p className="text-blue-200 mb-8">Join 500+ enterprises already running on Nexus.</p>
          <div className="flex justify-center gap-3">
            <button className="h-12 px-8 text-sm font-medium text-blue-800 bg-white rounded hover:bg-gray-100 transition-colors">Schedule a Demo</button>
            <button className="h-12 px-8 text-sm font-medium text-white border border-blue-400 rounded hover:bg-blue-700/30 transition-colors">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <span className="text-lg font-bold text-white">NEXUS</span>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">Enterprise operations platform for the modern workforce.</p>
            </div>
            {[
              { title: 'Platform', links: ['Overview', 'Security', 'Compliance', 'API'] },
              { title: 'Solutions', links: ['Analytics', 'Automation', 'Monitoring', 'Reporting'] },
              { title: 'Resources', links: ['Documentation', 'Whitepapers', 'Webinars', 'Blog'] },
              { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
            ].map(col => (
              <div key={col.title}>
                <p className="text-xs font-medium text-gray-300 uppercase tracking-wider mb-4">{col.title}</p>
                <ul className="space-y-2">{col.links.map(l => (<li key={l}><a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">{l}</a></li>))}</ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600">© 2026 Nexus Enterprise Inc. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(l => (
                <a key={l} href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
