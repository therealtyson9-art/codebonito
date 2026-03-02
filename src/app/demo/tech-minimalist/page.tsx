export default function TechMinimalistDemo() {
  const features = [
    { title: "API Gateway", desc: "Unified entry point for all your microservices with intelligent routing, rate limiting, and automatic load balancing.", icon: "⚡" },
    { title: "Real-time Sync", desc: "Bi-directional data synchronization across distributed nodes with conflict resolution and sub-millisecond latency.", icon: "🔄" },
    { title: "Edge Functions", desc: "Deploy serverless functions to 200+ edge locations worldwide. Cold starts under 5ms, auto-scaling to millions of requests.", icon: "🌐" },
    { title: "Auto-scaling", desc: "Intelligent resource allocation that scales from zero to planet-scale based on real-time traffic patterns and predictions.", icon: "📈" },
  ]
  const integrations = ["GitHub", "Vercel", "AWS", "Stripe", "Datadog", "Slack"]
  const testimonials = [
    { name: "Sarah Chen", role: "Staff Engineer, Stripe", quote: "Nexus cut our API response times by 60%. The edge function deployment is the smoothest I have ever used." },
    { name: "Marcus Rodriguez", role: "CTO, Lattice", quote: "We migrated our entire backend in a weekend. The developer experience is genuinely years ahead of anything else." },
    { name: "Aisha Patel", role: "Lead Architect, Shopify", quote: "Auto-scaling just works. We handled Black Friday traffic without a single config change or moment of downtime." },
  ]
  const pricing = [
    { plan: "Free", price: "$0", period: "/month", features: ["1,000 API calls/day", "2 edge regions", "Community support", "Basic analytics"], cta: "Get started", highlight: false },
    { plan: "Pro", price: "$29", period: "/month", features: ["Unlimited API calls", "All edge regions", "Priority support", "Advanced analytics", "Custom domains"], cta: "Start free trial", highlight: true },
    { plan: "Enterprise", price: "Custom", period: "", features: ["Dedicated infrastructure", "99.99% SLA", "24/7 phone support", "SSO & SAML", "Compliance packages"], cta: "Contact sales", highlight: false },
  ]
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" /></head>
      <nav className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-xl font-bold text-slate-900">NEXUS</span>
            <div className="hidden md:flex space-x-6">
              {["Product", "Features", "Pricing", "Docs", "Blog"].map((l) => (
                <span key={l} className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">{l}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="h-10 px-4 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">Sign in</button>
            <button className="h-10 px-6 text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors">Get Started</button>
          </div>
        </div>
      </nav>
      <section className="max-w-6xl mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-50 text-sky-600 text-sm font-medium mb-6">v3.0 now available</div>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">Build faster,<br />ship smarter</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">The modern developer platform that handles infrastructure so you can focus on building. From prototype to production in minutes, not months.</p>
        <div className="flex justify-center space-x-3">
          <button className="h-12 px-8 text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors">Start building free</button>
          <button className="h-12 px-8 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">View documentation</button>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Everything you need to ship</h2>
        <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">A complete toolkit for modern application development, from edge computing to real-time data.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-sky-200 hover:shadow-sm transition-all">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Deploy in seconds</h2>
        <div className="max-w-3xl mx-auto bg-slate-950 rounded-xl p-6 overflow-x-auto">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-slate-500 ml-2">terminal</span>
          </div>
          <pre className="text-sm text-slate-300 leading-relaxed"><code>{`$ npm install @nexus/cli
$ nexus init my-project
$ nexus deploy --region=auto

✓ Build completed in 1.2s
✓ Deployed to 12 edge regions
✓ Live at https://my-project.nexus.dev`}</code></pre>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Works with your stack</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((name) => (
            <span key={name} className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-sky-50 hover:text-sky-700 transition-colors cursor-default">{name}</span>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Simple, transparent pricing</h2>
          <p className="text-slate-500 text-center mb-12">Start free. Scale when you are ready.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((p) => (
              <div key={p.plan} className={`bg-white rounded-xl p-8 ${p.highlight ? "border-2 border-sky-500 shadow-lg" : "border border-slate-200"}`}>
                <h3 className="text-lg font-semibold text-slate-900">{p.plan}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-slate-900">{p.price}</span>
                  <span className="text-slate-500">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-slate-600">
                  {p.features.map((feat) => <li key={feat}>&#10003; {feat}</li>)}
                </ul>
                <button className={`w-full h-10 text-sm font-medium rounded-lg transition-colors ${p.highlight ? "text-white bg-sky-500 hover:bg-sky-600" : "text-slate-700 bg-slate-100 hover:bg-slate-200"}`}>{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Trusted by developers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 border border-slate-200">
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to build something great?</h2>
        <p className="text-slate-500 mb-8 max-w-lg mx-auto">Join 50,000+ developers shipping faster with Nexus. Free tier included, no credit card required.</p>
        <button className="h-12 px-8 text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 rounded-lg transition-colors">Get started for free</button>
      </section>
      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <span className="text-sm text-slate-500">&copy; 2026 Nexus Technologies, Inc.</span>
          <div className="flex space-x-6 text-sm text-slate-500">
            {["Privacy", "Terms", "Status", "Documentation"].map((l) => (
              <span key={l} className="hover:text-slate-900 cursor-pointer transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
