export const dynamic = "force-dynamic";
export default function StartupMinimalistDemo() {
  const logos = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma', 'Loom']
  const features = [
    { title: 'Ship in seconds', desc: 'Push code and watch it deploy instantly. Zero configuration, zero downtime. Your staging URL is ready before you close the terminal.', align: 'left' },
    { title: 'Built-in analytics', desc: 'Real-time dashboards that show exactly how your product is performing. No third-party scripts, no sampling, no guesswork.', align: 'right' },
    { title: 'Team collaboration', desc: 'Comment on deployments, share preview links, and roll back with a click. Your whole team stays in sync without leaving the platform.', align: 'left' },
  ]
  const metrics = [
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '<50ms', label: 'Global Latency' },
    { value: '140+', label: 'Edge Locations' },
    { value: '10K+', label: 'Teams Shipping' },
  ]
  const testimonials = [
    { text: 'Launchpad cut our deploy time from 12 minutes to 8 seconds. Not exaggerating.', author: '@marcusdev', role: 'CTO at Flowbase' },
    { text: 'Finally a platform that gets out of your way. We just write code now.', author: '@sarahbuilds', role: 'Founder at Pixelstack' },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc', fontFamily: "'Inter', sans-serif", color: '#1e293b' }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-lg font-semibold" style={{ fontFamily: "'Poppins', sans-serif", color: '#6366f1' }}>launchpad</span>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition hidden md:block">Features</a>
            <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition hidden md:block">Pricing</a>
            <button className="text-sm font-medium text-white px-5 py-2 rounded-lg" style={{ backgroundColor: '#6366f1' }}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero — left-aligned with mockup */}
      <section className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Deploy at the speed of thought
          </h1>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: '#64748b' }}>
            The developer platform that turns your git push into a global deployment. No config files, no infrastructure headaches, no waiting.
          </p>
          <div className="flex gap-3">
            <button className="text-sm font-medium text-white px-6 py-3 rounded-lg" style={{ backgroundColor: '#6366f1' }}>Start Free</button>
            <button className="text-sm font-medium px-6 py-3 rounded-lg border border-slate-200 text-slate-600">View Demo</button>
          </div>
        </div>
        <div className="rounded-2xl aspect-[4/3] p-6 flex items-center justify-center" style={{ backgroundColor: '#eef2ff' }}>
          <div className="bg-white rounded-xl shadow-lg w-full h-full p-4">
            <div className="flex gap-2 mb-4"><span className="w-3 h-3 rounded-full bg-red-300" /><span className="w-3 h-3 rounded-full bg-yellow-300" /><span className="w-3 h-3 rounded-full bg-green-300" /></div>
            <div className="space-y-2">
              <div className="h-3 rounded-full bg-slate-100 w-3/4" />
              <div className="h-3 rounded-full bg-indigo-100 w-full" />
              <div className="h-3 rounded-full bg-slate-100 w-1/2" />
              <div className="h-8 rounded-lg mt-4 w-1/3" style={{ backgroundColor: '#6366f1' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Logo wall */}
      <section className="border-y border-slate-100 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-slate-400 mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center gap-10">
            {logos.map(l => (
              <span key={l} className="text-sm font-semibold text-slate-300">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features — alternating */}
      <section className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        {features.map((f, i) => (
          <div key={f.title} className={`grid md:grid-cols-2 gap-12 items-center ${f.align === 'right' ? 'md:direction-rtl' : ''}`}>
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>{f.title}</h3>
              <p className="leading-relaxed" style={{ color: '#64748b' }}>{f.desc}</p>
            </div>
            <div className={`rounded-2xl aspect-video flex items-center justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`} style={{ backgroundColor: '#eef2ff' }}>
              <span className="text-5xl">{['🚀', '📊', '👥'][i]}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Metrics */}
      <section className="py-16" style={{ backgroundColor: '#6366f1' }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {metrics.map(m => (
            <div key={m.label}>
              <p className="text-3xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{m.value}</p>
              <p className="text-sm opacity-80">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials — tweet-style */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold text-center mb-12" style={{ fontFamily: "'Poppins', sans-serif" }}>What developers are saying</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map(t => (
            <div key={t.author} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <p className="mb-4 leading-relaxed" style={{ color: '#334155' }}>&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-sm" style={{ color: '#6366f1' }}>{t.author}</p>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-center mb-12" style={{ fontFamily: "'Poppins', sans-serif" }}>Simple pricing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-8 border border-slate-100">
            <h3 className="font-semibold mb-1">Starter</h3>
            <p className="text-3xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>$0<span className="text-sm font-normal text-slate-400">/mo</span></p>
            <ul className="text-sm space-y-2 text-slate-500 mb-6">
              <li>3 projects</li><li>Automatic SSL</li><li>Community support</li>
            </ul>
            <button className="w-full py-2 rounded-lg border border-slate-200 text-sm font-medium">Get Started</button>
          </div>
          <div className="rounded-xl p-8 text-white" style={{ backgroundColor: '#6366f1' }}>
            <h3 className="font-semibold mb-1">Pro</h3>
            <p className="text-3xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>$20<span className="text-sm font-normal opacity-70">/mo</span></p>
            <ul className="text-sm space-y-2 opacity-90 mb-6">
              <li>Unlimited projects</li><li>Custom domains</li><li>Priority support</li><li>Team collaboration</li>
            </ul>
            <button className="w-full py-2 rounded-lg bg-white text-sm font-medium" style={{ color: '#6366f1' }}>Upgrade to Pro</button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-2xl py-16 px-8 text-center text-white" style={{ backgroundColor: '#6366f1' }}>
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Ready to ship faster?</h2>
          <p className="mb-8 opacity-90 max-w-md mx-auto">Join thousands of developers who deploy with confidence every single day.</p>
          <button className="bg-white font-semibold px-8 py-3 rounded-lg text-sm" style={{ color: '#6366f1' }}>Start for Free</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center text-sm text-slate-400">
          <span style={{ fontFamily: "'Poppins', sans-serif", color: '#6366f1' }}>launchpad</span>
          <span>San Francisco, CA</span>
        </div>
      </footer>
    </div>
  )
}
