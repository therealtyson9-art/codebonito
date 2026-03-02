export const dynamic = "force-dynamic";
import { Archivo_Black } from 'next/font/google'

const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: '400' })

export default function SaaSBrutalistDemo() {
  const features = [
    { label: 'REAL-TIME SYNC', detail: 'Millisecond propagation across every node. No eventual consistency BS.' },
    { label: 'ZERO CONFIG DEPLOYS', detail: 'Push to main. It deploys. No YAML. No pipelines. Done.' },
    { label: 'EDGE FUNCTIONS', detail: 'Run code in 200+ locations. Sub-10ms cold starts.' },
    { label: 'BUILT-IN AUTH', detail: 'JWT, OAuth, SAML, MFA. All out of the box.' },
    { label: 'RAW SQL SUPPORT', detail: 'No ORM tax. Write SQL. Get results. Fast.' },
    { label: 'INFINITE SCALE', detail: 'Auto-scaling from 0 to 10M requests. Pay for what you use.' },
  ]

  return (
    <div className={`min-h-screen bg-black text-white ${archivoBlack.className}`}>
      {/* No-decoration nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6">
        <span className="text-cyan-400 text-2xl tracking-tight">VEKTIR</span>
        <div className="hidden md:flex items-center gap-8">
          {['PRODUCT', 'PRICING', 'DOCS', 'STATUS'].map(l => (
            <a key={l} href="#" className="text-xs text-zinc-500 hover:text-white tracking-widest transition-colors">{l}</a>
          ))}
        </div>
        <button className="text-xs text-black bg-cyan-400 px-5 py-2 tracking-widest hover:bg-cyan-300 transition-colors">START →</button>
      </nav>

      {/* Oversized text hero */}
      <section className="px-6 md:px-12 pt-24 pb-32">
        <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.85] tracking-tighter text-white uppercase">
          SHIP<br />
          <span className="text-cyan-400">FASTER</span><br />
          BREAK<br />
          NOTHING
        </h1>
        <div className="mt-12 flex items-center gap-6">
          <button className="text-sm text-black bg-cyan-400 px-8 py-3 tracking-widest hover:bg-cyan-300 transition-colors">DEPLOY NOW</button>
          <span className="text-xs text-zinc-600 tracking-widest">NO CREDIT CARD REQUIRED</span>
        </div>
        <div className="mt-16 flex gap-12 font-sans">
          {[{ v: '99.999%', l: 'UPTIME' }, { v: '<8ms', l: 'LATENCY' }, { v: '42K', l: 'DEVS' }].map(s => (
            <div key={s.l}>
              <p className="text-3xl text-cyan-400">{s.v}</p>
              <p className="text-xs text-zinc-600 mt-1 tracking-widest">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Raw feature list */}
      <section className="border-t border-zinc-800 px-6 md:px-12 py-20">
        <h2 className="text-xs text-zinc-600 tracking-[0.3em] mb-12">FEATURES_</h2>
        <div className="space-y-0">
          {features.map((f, i) => (
            <div key={f.label} className="border-b border-zinc-800 py-6 grid md:grid-cols-3 gap-4 items-start group hover:bg-zinc-900/50 px-4 -mx-4 transition-colors">
              <span className="text-xs text-zinc-700 font-mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-lg text-white tracking-tight">{f.label}</span>
              <p className="text-sm text-zinc-500 font-sans font-normal leading-relaxed">{f.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing in monospace */}
      <section className="border-t border-zinc-800 px-6 md:px-12 py-20">
        <h2 className="text-xs text-zinc-600 tracking-[0.3em] mb-12">PRICING_</h2>
        <div className="grid md:grid-cols-3 gap-0">
          {[
            { name: 'HOBBY', price: '$0', items: ['3 projects', '1GB storage', 'Community support', 'Shared compute'] },
            { name: 'PRO', price: '$29', items: ['Unlimited projects', '50GB storage', 'Priority support', 'Dedicated compute'], featured: true },
            { name: 'SCALE', price: '$199', items: ['Everything in Pro', '500GB storage', '24/7 phone support', 'Custom domains'] },
          ].map(plan => (
            <div key={plan.name} className={`p-8 font-mono ${plan.featured ? 'bg-cyan-400 text-black' : 'border border-zinc-800'}`}>
              <p className="text-xs tracking-widest mb-4">{plan.name}</p>
              <p className="text-5xl mb-6">{plan.price}</p>
              <p className="text-xs tracking-widest mb-8">/MONTH</p>
              <ul className="space-y-3">
                {plan.items.map(item => (
                  <li key={item} className={`text-xs tracking-wide ${plan.featured ? 'text-black/70' : 'text-zinc-500'}`}>→ {item}</li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 text-xs tracking-widest transition-colors ${plan.featured ? 'bg-black text-cyan-400 hover:bg-zinc-900' : 'border border-zinc-700 text-zinc-400 hover:border-cyan-400 hover:text-cyan-400'}`}>
                SELECT
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Terminal-style demo */}
      <section className="border-t border-zinc-800 px-6 md:px-12 py-20">
        <h2 className="text-xs text-zinc-600 tracking-[0.3em] mb-12">TERMINAL_</h2>
        <div className="max-w-3xl">
          <div className="border border-zinc-800 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-xs text-zinc-600 font-mono">bash</span>
            </div>
            <div className="p-6 font-mono text-sm leading-loose">
              <p className="text-zinc-500">$ npm i -g @vektir/cli</p>
              <p className="text-zinc-600">✓ installed v4.2.0</p>
              <p className="text-zinc-500 mt-2">$ vektir init my-app</p>
              <p className="text-zinc-600">✓ scaffolded in 0.8s</p>
              <p className="text-zinc-500 mt-2">$ vektir deploy</p>
              <p className="text-cyan-400">■ Building...</p>
              <p className="text-cyan-400">■ Deploying to 200+ edge nodes...</p>
              <p className="text-green-400 mt-1">✓ Live at https://my-app.vektir.sh</p>
              <p className="text-zinc-700 mt-2">█</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800 px-6 md:px-12 py-24">
        <h2 className="text-4xl md:text-6xl tracking-tight uppercase">
          STOP<br />
          <span className="text-cyan-400">CONFIGURING.</span><br />
          START SHIPPING.
        </h2>
        <button className="mt-10 text-sm text-black bg-cyan-400 px-10 py-4 tracking-widest hover:bg-cyan-300 transition-colors">GET STARTED FREE →</button>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-start gap-8 font-sans font-normal">
        <div>
          <span className="text-cyan-400 text-lg tracking-tight">VEKTIR</span>
          <p className="text-xs text-zinc-700 mt-2 tracking-wider">INFRASTRUCTURE FOR BUILDERS</p>
        </div>
        <div className="flex gap-10">
          {['GitHub', 'Discord', 'Twitter', 'Status'].map(l => (
            <a key={l} href="#" className="text-xs text-zinc-600 hover:text-cyan-400 tracking-widest transition-colors uppercase">{l}</a>
          ))}
        </div>
        <p className="text-xs text-zinc-800">© 2026 VEKTIR INC</p>
      </footer>
    </div>
  )
}
