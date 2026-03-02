export default function StartupBrutalistDemo() {
  const navLinks = ["MANIFESTO", "PRODUCT", "DATA", "TEAM"]
  const features = [
    { num: "01", title: "RAW ANALYTICS", desc: "No dashboards that lie to you. Pure data streams piped directly into your decision engine. Every metric is auditable." },
    { num: "02", title: "ZERO ABSTRACTION", desc: "We expose the full stack. No magic. No hidden layers. You see exactly what your infrastructure is doing at all times." },
    { num: "03", title: "BRUTAL HONESTY", desc: "Our alerting tells you when things break before your customers do. No vanity metrics. Only signal." },
    { num: "04", title: "OPEN PROTOCOL", desc: "Built on open standards. No vendor lock-in. Export everything. Your data belongs to you, period." },
  ]
  const metrics = [
    { value: "847", label: "COMPANIES SHIPPING" },
    { value: "2.1B", label: "EVENTS PROCESSED / DAY" },
    { value: "0.3ms", label: "P99 LATENCY" },
    { value: "$0", label: "VC MONEY BURNED" },
  ]
  const team = [
    { name: "KARL BRANDT", role: "FOUNDER / ENGINEER", prev: "Ex-Cloudflare" },
    { name: "YUKI TANAKA", role: "SYSTEMS / INFRA", prev: "Ex-Fly.io" },
    { name: "NINA VOLKOV", role: "PROTOCOL / DATA", prev: "Ex-ClickHouse" },
  ]
  const press = ["WIRED", "HACKER NEWS", "THE VERGE", "ARS TECHNICA"]

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'Space Mono', monospace" }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">RAWSTACK_</span>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <span key={link} className="text-xs font-bold tracking-widest cursor-pointer hover:bg-black hover:text-white px-2 py-1">{link}</span>
            ))}
          </div>
          <span className="text-xs font-bold tracking-widest bg-black text-white px-4 py-2 cursor-pointer">ACCESS_</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="text-xs font-bold tracking-widest text-red-600 mb-6">// INFRASTRUCTURE THAT DOESN&apos;T LIE</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-none tracking-tight mb-8 uppercase">
                Stop guessing.<br />Start observing.
              </h1>
              <p className="text-sm max-w-lg leading-relaxed mb-10">
                Rawstack is an observability platform built for engineers who refuse to trust black boxes. Full-stack visibility. No abstractions. No excuses.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-xs font-bold tracking-widest bg-black text-white px-6 py-3 cursor-pointer">REQUEST ACCESS_</span>
                <span className="text-xs font-bold tracking-widest border-2 border-black px-6 py-3 cursor-pointer">READ DOCS_</span>
              </div>
            </div>
            <div className="md:col-span-4 flex items-end">
              <div className="w-full border-4 border-black p-6">
                <p className="text-xs font-bold tracking-widest mb-2">STATUS</p>
                <p className="text-xs mb-1">NODES: <span className="text-red-600 font-bold">ONLINE [247]</span></p>
                <p className="text-xs mb-1">LATENCY: <span className="font-bold">0.3ms P99</span></p>
                <p className="text-xs mb-1">UPTIME: <span className="font-bold">99.997%</span></p>
                <p className="text-xs">EVENTS/S: <span className="font-bold">24,891</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-b-4 border-black bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4">
          {metrics.map((m, i) => (
            <div key={m.label} className={`py-6 px-4 ${i < metrics.length - 1 ? "md:border-r-4 md:border-white" : ""}`}>
              <p className="text-3xl md:text-4xl font-bold tracking-tight">{m.value}</p>
              <p className="text-xs tracking-widest mt-2 text-gray-400">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs font-bold tracking-widest text-red-600 mb-4">// CAPABILITIES</p>
          <h2 className="text-3xl font-bold uppercase tracking-tight mb-14">What we build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {features.map((f) => (
              <div key={f.num} className="border-2 border-black p-8 -mt-[2px] -ml-[2px]">
                <span className="text-xs font-bold tracking-widest text-red-600">{f.num}</span>
                <h3 className="text-lg font-bold uppercase mt-3 mb-3">{f.title}</h3>
                <p className="text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs font-bold tracking-widest text-red-600 mb-4">// PEOPLE</p>
          <h2 className="text-3xl font-bold uppercase tracking-tight mb-14">The operators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {team.map((t) => (
              <div key={t.name} className="border-2 border-black p-6 -ml-[2px] -mt-[2px]">
                <div className="w-full aspect-square bg-gray-200 border-2 border-black mb-6"></div>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs tracking-widest mt-1">{t.role}</p>
                <p className="text-xs text-red-600 mt-1">{t.prev}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-xs font-bold tracking-widest text-center mb-8">FEATURED IN</p>
          <div className="flex justify-center items-center space-x-10 md:space-x-16">
            {press.map((p) => (
              <span key={p} className="text-sm md:text-base font-bold tracking-widest text-gray-400">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b-4 border-black bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">Stop shipping blind</h2>
          <p className="text-sm max-w-md mx-auto mb-10 text-gray-400">
            Request early access. We onboard 20 teams per week. No pitch deck required.
          </p>
          <div className="flex justify-center items-center space-x-0 max-w-md mx-auto">
            <input type="email" placeholder="YOUR@EMAIL.COM" className="flex-1 h-12 px-4 text-xs font-bold tracking-widest bg-white text-black border-4 border-white placeholder-gray-500 outline-none" />
            <span className="h-12 px-6 flex items-center text-xs font-bold tracking-widest bg-red-600 text-white border-4 border-red-600 cursor-pointer">SUBMIT_</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <span className="text-xs font-bold tracking-widest">&copy; 2026 RAWSTACK_</span>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["SOURCE", "STATUS", "PRIVACY", "TERMS"].map((link) => (
              <span key={link} className="text-xs font-bold tracking-widest text-gray-400 hover:text-black cursor-pointer">{link}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
