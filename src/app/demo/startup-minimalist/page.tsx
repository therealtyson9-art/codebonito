export default function StartupMinimalistDemo() {
  const navLinks = ["Product", "Features", "Pricing", "About"]
  const features = [
    { title: "Instant Deployment", desc: "Push your code and watch it go live in under 30 seconds. Zero configuration, zero downtime." },
    { title: "Edge-First Architecture", desc: "Every request is served from the nearest edge node. Sub-50ms response times, globally." },
    { title: "Built-in Observability", desc: "Logs, metrics, and traces unified in one dashboard. Know exactly what your app is doing." },
    { title: "Team Collaboration", desc: "Preview deployments for every pull request. Leave comments directly on staging URLs." },
    { title: "Automatic Scaling", desc: "Handle 10 users or 10 million. Infrastructure scales with your traffic, not your headcount." },
    { title: "SOC 2 Compliant", desc: "Enterprise-grade security out of the box. Your data stays encrypted at rest and in transit." },
  ]
  const metrics = [
    { value: "12K+", label: "Developers" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "4.2M", label: "Deploys / month" },
    { value: "38ms", label: "Avg response time" },
  ]
  const team = [
    { name: "Elena Marchetti", role: "CEO & Co-founder", bg: "bg-slate-300" },
    { name: "David Okonkwo", role: "CTO & Co-founder", bg: "bg-slate-400" },
    { name: "Aisha Patel", role: "VP Engineering", bg: "bg-slate-200" },
    { name: "James Lindqvist", role: "Head of Design", bg: "bg-slate-350" },
  ]

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight text-slate-900">deploy.sh</span>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <span key={link} className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer">{link}</span>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-500 cursor-pointer">Log in</span>
            <span className="text-sm font-medium text-white bg-slate-900 px-4 py-2 rounded-md cursor-pointer">Get started</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <p className="text-sm font-medium text-slate-400 tracking-wide uppercase mb-4">Now in public beta</p>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
          Ship faster.<br />Scale effortlessly.
        </h1>
        <p className="text-lg text-slate-500 max-w-lg mb-10 leading-relaxed">
          The deployment platform that gets out of your way. Push code, serve globally, and focus on building what matters.
        </p>
        <div className="flex items-center space-x-3 max-w-md">
          <input type="email" placeholder="you@company.com" className="flex-1 h-11 px-4 text-sm border border-slate-200 rounded-md bg-white text-slate-900 placeholder-slate-400 outline-none focus:border-slate-400" />
          <span className="h-11 px-6 flex items-center text-sm font-medium text-white bg-slate-900 rounded-md cursor-pointer whitespace-nowrap">Join waitlist</span>
        </div>
        <p className="text-xs text-slate-400 mt-3">Free during beta. No credit card required.</p>
      </section>

      {/* Metrics */}
      <section className="border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">{m.value}</p>
              <p className="text-sm text-slate-400 mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-sm font-medium text-slate-400 tracking-wide uppercase mb-3">Features</p>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Everything you need to ship with confidence</h2>
        <p className="text-slate-500 max-w-lg mb-16">We handle the infrastructure complexity so your team can focus on building great products.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {features.map((f) => (
            <div key={f.title}>
              <div className="w-8 h-8 rounded bg-slate-100 mb-4"></div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-sm font-medium text-slate-400 tracking-wide uppercase mb-3">Team</p>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Built by engineers, for engineers</h2>
          <p className="text-slate-500 max-w-lg mb-14">Previously at AWS, Vercel, and Stripe. We know what great infrastructure looks like.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((t) => (
              <div key={t.name}>
                <div className={`w-full aspect-square rounded-md ${t.bg} mb-4`}></div>
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Ready to simplify your deployments?</h2>
          <p className="text-slate-500 max-w-md mx-auto mb-8">Join thousands of developers shipping faster with deploy.sh. Free during beta.</p>
          <div className="flex justify-center items-center space-x-3 max-w-sm mx-auto">
            <input type="email" placeholder="you@company.com" className="flex-1 h-11 px-4 text-sm border border-slate-200 rounded-md bg-white text-slate-900 placeholder-slate-400 outline-none" />
            <span className="h-11 px-6 flex items-center text-sm font-medium text-white bg-slate-900 rounded-md cursor-pointer whitespace-nowrap">Join waitlist</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-slate-400">&copy; 2026 deploy.sh. All rights reserved.</span>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy", "Terms", "Status", "Twitter"].map((link) => (
              <span key={link} className="text-sm text-slate-400 hover:text-slate-600 cursor-pointer">{link}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
