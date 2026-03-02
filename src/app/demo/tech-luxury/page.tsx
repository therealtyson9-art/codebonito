export default function TechLuxuryDemo() {
  const products = [
    { name: "Quantum API", desc: "Next-generation API infrastructure built on quantum-resistant cryptography. Process millions of requests with absolute security.", tag: "Core" },
    { name: "Neural Engine", desc: "Custom silicon-optimized machine learning inference at the edge. Train once, deploy everywhere with deterministic latency.", tag: "AI" },
    { name: "Secure Mesh", desc: "Zero-trust service mesh with end-to-end encryption, mutual TLS, and automated certificate rotation across all nodes.", tag: "Security" },
    { name: "Edge AI", desc: "On-device intelligence that runs without cloud connectivity. Privacy-first AI processing with military-grade data isolation.", tag: "Edge" },
  ]
  const metrics = [
    { value: "0.4ms", label: "Median Latency", detail: "Global P50" },
    { value: "99.999%", label: "Uptime SLA", detail: "Five nines guaranteed" },
    { value: "2.1B", label: "Daily Requests", detail: "Across all regions" },
    { value: "214", label: "Edge Locations", detail: "6 continents" },
  ]
  const clients = ["Goldman Sachs", "Tesla", "SpaceX", "Apple", "NVIDIA", "Palantir"]
  const tiers = [
    { name: "Pioneer", investment: "$25,000", period: "/year", features: ["Quantum API access", "100M requests/month", "Standard Neural Engine", "Email support", "99.99% SLA"], highlight: false },
    { name: "Visionary", investment: "$100,000", period: "/year", features: ["Full platform access", "Unlimited requests", "Custom Neural Engine models", "Dedicated architect", "99.999% SLA", "Private edge nodes"], highlight: true },
    { name: "Sovereign", investment: "Custom", period: "", features: ["Dedicated infrastructure", "Air-gapped deployment", "On-premise option", "Executive partnership", "Custom SLA", "Source code escrow"], highlight: false },
  ]
  return (
    <div className="min-h-screen bg-slate-950" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <nav className="border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-lg font-semibold text-sky-400 tracking-widest" style={{ fontFamily: "Playfair Display, serif" }}>AETHON</span>
            <div className="hidden md:flex space-x-6">
              {["Platform", "Research", "Enterprise", "About"].map((l) => (
                <span key={l} className="text-sm text-slate-500 hover:text-slate-300 cursor-pointer transition-colors">{l}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="h-9 px-4 text-sm text-slate-400 hover:text-slate-200 transition-colors">Sign in</button>
            <button className="h-9 px-5 text-sm font-medium text-slate-950 bg-sky-400 hover:bg-sky-300 rounded transition-colors">Request Access</button>
          </div>
        </div>
      </nav>
      <section className="max-w-6xl mx-auto px-4 py-28 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>The future of computing,<br /><span className="text-sky-400">refined</span></h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">Where quantum security meets neural intelligence. Aethon delivers computing infrastructure for organizations that refuse to compromise.</p>
        <div className="flex justify-center space-x-4">
          <button className="h-12 px-8 text-sm font-medium text-slate-950 bg-sky-400 hover:bg-sky-300 rounded transition-colors">Explore the platform</button>
          <button className="h-12 px-8 text-sm font-medium text-slate-400 border border-slate-700 hover:border-slate-500 rounded transition-colors">View research papers</button>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "Playfair Display, serif" }}>The Platform</h2>
          <p className="text-slate-500 max-w-lg mx-auto">Four pillars of next-generation infrastructure, each engineered to the highest standard.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div key={p.name} className="bg-slate-900/50 rounded-lg p-8 border border-slate-800 hover:border-sky-900/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "Playfair Display, serif" }}>{p.name}</h3>
                <span className="text-xs font-medium text-sky-400 bg-sky-400/10 px-2.5 py-1 rounded">{p.tag}</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              <span className="inline-block mt-4 text-sm text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">Discover more &rarr;</span>
            </div>
          ))}
        </div>
      </section>
      <section className="border-y border-slate-800/50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-16" style={{ fontFamily: "Playfair Display, serif" }}>Performance at Scale</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="text-4xl font-bold text-sky-400 mb-2">{m.value}</div>
                <div className="text-sm font-medium text-white mb-1">{m.label}</div>
                <div className="text-xs text-slate-500">{m.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-10">Trusted by the world&apos;s most discerning enterprises</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {clients.map((name) => (
            <span key={name} className="text-lg font-medium text-slate-600 hover:text-slate-400 transition-colors cursor-default" style={{ fontFamily: "Playfair Display, serif" }}>{name}</span>
          ))}
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-b from-sky-400/10 to-transparent rounded-2xl border border-sky-400/20 p-12">
          <div className="text-xs font-medium text-sky-400 uppercase tracking-widest mb-4">Limited Availability</div>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>Exclusive Beta Access</h2>
          <p className="text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">Join a select group of technology leaders shaping the future of computing. Applications reviewed within 48 hours.</p>
          <div className="flex justify-center space-x-3">
            <button className="h-12 px-8 text-sm font-medium text-slate-950 bg-sky-400 hover:bg-sky-300 rounded transition-colors">Apply for Beta</button>
          </div>
          <p className="text-xs text-slate-600 mt-4">Currently accepting applications from enterprise clients only.</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-3" style={{ fontFamily: "Playfair Display, serif" }}>Partnership Tiers</h2>
        <p className="text-slate-500 text-center mb-12">Investment-grade infrastructure for investment-grade organizations.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-lg p-8 ${t.highlight ? "bg-sky-400/5 border-2 border-sky-400/30" : "bg-slate-900/50 border border-slate-800"}`}>
              <h3 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{t.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-3xl font-bold text-white">{t.investment}</span>
                {t.period && <span className="text-sm text-slate-500">{t.period}</span>}
              </div>
              <ul className="space-y-3 mb-8 text-sm text-slate-400">
                {t.features.map((f) => <li key={f} className="flex items-start"><span className="text-sky-400 mr-2">&#8212;</span> {f}</li>)}
              </ul>
              <button className={`w-full h-10 text-sm font-medium rounded transition-colors ${t.highlight ? "text-slate-950 bg-sky-400 hover:bg-sky-300" : "text-sky-400 border border-sky-400/30 hover:bg-sky-400/10"}`}>{t.highlight ? "Begin partnership" : "Inquire"}</button>
            </div>
          ))}
        </div>
      </section>
      <footer className="border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <span className="text-sm text-slate-600">&copy; 2026 Aethon Technologies. All rights reserved.</span>
          <div className="flex space-x-6 text-sm text-slate-600">
            {["Privacy", "Terms", "Security", "Research"].map((l) => (
              <span key={l} className="hover:text-slate-400 cursor-pointer transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
