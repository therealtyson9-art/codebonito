import { Tenor_Sans } from 'next/font/google'

const tenorSans = Tenor_Sans({ subsets: ['latin'], weight: '400' })

export default function SaaSLuxuryDemo() {
  const exclusiveFeatures = [
    { title: 'Concierge Onboarding', desc: 'A dedicated solutions architect guides your team through every integration, custom workflow, and deployment.' },
    { title: 'Private Cloud Isolation', desc: 'Your data lives on dedicated infrastructure with custom encryption keys and network-level isolation.' },
    { title: 'Predictive Intelligence', desc: 'AI-driven anomaly detection surfaces issues 72 hours before they impact your operations.' },
    { title: 'White-Glove Migration', desc: 'Our engineers handle every aspect of your migration — zero downtime, zero data loss, guaranteed.' },
  ]

  return (
    <div className={`min-h-screen bg-zinc-950 text-white ${tenorSans.className}`}>
      {/* Transparent nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between border-b border-white/5">
          <span className="text-lg tracking-[0.3em] text-rose-300 uppercase">Obsidian</span>
          <div className="hidden md:flex items-center gap-10">
            {['Platform', 'Enterprise', 'Security', 'About'].map(l => (
              <a key={l} href="#" className="text-xs tracking-[0.2em] text-zinc-500 hover:text-rose-300 transition-colors uppercase">{l}</a>
            ))}
          </div>
          <button className="text-xs tracking-[0.2em] text-rose-300 border border-rose-300/30 px-6 py-2.5 hover:bg-rose-300/10 transition-colors uppercase">
            Request Access
          </button>
        </div>
      </nav>

      {/* Cinematic dark hero */}
      <section className="relative min-h-screen flex items-center justify-center px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-rose-500/5 blur-3xl" />
        <div className="relative text-center max-w-4xl">
          <p className="text-xs tracking-[0.4em] text-rose-300/60 uppercase mb-8">Enterprise Intelligence Platform</p>
          <h1 className="text-5xl md:text-7xl leading-tight tracking-tight text-white mb-8">
            Where precision meets<br />
            <span className="text-rose-300">uncompromising power</span>
          </h1>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Obsidian is the operational platform for organizations that refuse to settle. Built for those who demand absolute control, transparency, and performance.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-10 py-3 text-xs tracking-[0.2em] text-zinc-950 bg-rose-300 hover:bg-rose-200 transition-colors uppercase">
              Schedule Private Demo
            </button>
            <button className="px-10 py-3 text-xs tracking-[0.2em] text-zinc-400 border border-zinc-700 hover:border-zinc-500 transition-colors uppercase">
              View Architecture
            </button>
          </div>
        </div>
      </section>

      {/* Exclusive features */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <p className="text-xs tracking-[0.3em] text-rose-300/60 uppercase mb-4">The Platform</p>
        <h2 className="text-3xl tracking-tight text-white mb-16">Engineered for the exceptional</h2>
        <div className="grid md:grid-cols-2 gap-0">
          {exclusiveFeatures.map((f, i) => (
            <div key={f.title} className="p-10 border border-zinc-800/50">
              <span className="text-xs text-zinc-700 tracking-widest">0{i + 1}</span>
              <h3 className="text-xl text-white mt-4 mb-3 tracking-tight">{f.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dark pricing */}
      <section className="py-24 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-8">
          <p className="text-xs tracking-[0.3em] text-rose-300/60 uppercase mb-4 text-center">Investment</p>
          <h2 className="text-3xl tracking-tight text-white text-center mb-16">Select your tier</h2>
          <div className="grid md:grid-cols-3 gap-0">
            {[
              { name: 'Professional', price: '$499', desc: 'For growing enterprises', items: ['Up to 50 users', 'Dedicated support', 'Custom integrations', 'SLA guarantee'] },
              { name: 'Enterprise', price: '$1,499', desc: 'For large organizations', items: ['Unlimited users', 'Concierge onboarding', 'Private cloud option', '24/7 direct line'], featured: true },
              { name: 'Sovereign', price: 'Bespoke', desc: 'For the most demanding', items: ['Dedicated infrastructure', 'On-premise option', 'Custom SLA', 'Exec advisory board'] },
            ].map(plan => (
              <div key={plan.name} className={`p-10 border border-zinc-800/50 ${plan.featured ? 'bg-zinc-900/80 border-rose-300/20' : ''}`}>
                {plan.featured && <p className="text-[10px] tracking-[0.3em] text-rose-300 uppercase mb-4">Recommended</p>}
                <h3 className="text-lg text-white mb-1 tracking-tight">{plan.name}</h3>
                <p className="text-xs text-zinc-600 mb-6">{plan.desc}</p>
                <p className="text-4xl text-white mb-1">{plan.price}</p>
                <p className="text-xs text-zinc-600 mb-8">{plan.price === 'Bespoke' ? 'Custom pricing' : 'per month'}</p>
                <ul className="space-y-3 mb-10">
                  {plan.items.map(item => (<li key={item} className="text-xs text-zinc-500 flex items-center gap-3"><span className="text-rose-300/60">—</span> {item}</li>))}
                </ul>
                <button className={`w-full py-3 text-xs tracking-[0.15em] uppercase transition-colors ${plan.featured ? 'bg-rose-300 text-zinc-950 hover:bg-rose-200' : 'border border-zinc-700 text-zinc-400 hover:border-rose-300/30 hover:text-rose-300'}`}>
                  {plan.price === 'Bespoke' ? 'Contact Us' : 'Begin'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP onboarding */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] text-rose-300/60 uppercase mb-4">VIP Onboarding</p>
            <h2 className="text-3xl tracking-tight text-white mb-6">Your journey begins with us</h2>
            <p className="text-zinc-500 leading-relaxed mb-8">Every Obsidian client receives a dedicated onboarding experience. From initial architecture review to production deployment, our solutions team is with you at every step.</p>
            <div className="space-y-6">
              {[
                { step: 'Discovery', desc: 'We map your infrastructure, workflows, and objectives.' },
                { step: 'Architecture', desc: 'Custom deployment plan tailored to your requirements.' },
                { step: 'Migration', desc: 'Zero-downtime migration with full data verification.' },
                { step: 'Launch', desc: 'Go live with dedicated support standing by.' },
              ].map((s, i) => (
                <div key={s.step} className="flex gap-6 items-start">
                  <span className="text-xs text-zinc-700 mt-1">0{i + 1}</span>
                  <div>
                    <p className="text-sm text-white mb-1">{s.step}</p>
                    <p className="text-xs text-zinc-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square bg-zinc-900 border border-zinc-800/50 flex items-center justify-center">
            <div className="text-center">
              <p className="text-6xl text-rose-300/20">&#9670;</p>
              <p className="text-xs text-zinc-700 tracking-widest mt-4 uppercase">White Glove Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <span className="text-sm tracking-[0.3em] text-rose-300 uppercase">Obsidian</span>
            <p className="text-xs text-zinc-700 mt-3 max-w-xs leading-relaxed">The operational intelligence platform for organizations that demand excellence.</p>
          </div>
          <div className="flex gap-16">
            {[
              { title: 'Platform', links: ['Security', 'Compliance', 'Architecture', 'Status'] },
              { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
            ].map(col => (
              <div key={col.title}>
                <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase mb-4">{col.title}</p>
                <ul className="space-y-3">{col.links.map(l => (<li key={l}><a href="#" className="text-xs text-zinc-600 hover:text-rose-300 transition-colors">{l}</a></li>))}</ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-zinc-800/30">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <p className="text-[10px] text-zinc-800 tracking-wider">© 2026 Obsidian Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
