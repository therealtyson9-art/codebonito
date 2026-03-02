export const dynamic = "force-dynamic";
export default function StartupBrutalistDemo() {
  const navItems = [
    { num: "01", label: "MANIFESTO" },
    { num: "02", label: "PROBLEM" },
    { num: "03", label: "SOLUTION" },
    { num: "04", label: "HOW" },
    { num: "05", label: "OPEN SOURCE" },
    { num: "06", label: "TEAM" },
    { num: "07", label: "WAITLIST" },
  ]

  const steps = [
    { num: "01", title: "INSTALL THE CLI", desc: "One command. No GUI wizards. No account creation. Pull the binary, authenticate with your SSH key, and you are running in under 30 seconds." },
    { num: "02", title: "POINT AT YOUR STACK", desc: "null.systems reads your infrastructure declaratively. Kubernetes, Terraform, raw VMs, it does not matter. We parse your topology and build a real-time dependency graph." },
    { num: "03", title: "OBSERVE EVERYTHING", desc: "Every packet, every syscall, every deployment. We instrument at the kernel level so you never miss a signal. Zero sampling. Full fidelity." },
    { num: "04", title: "ACT ON TRUTH", desc: "Alerts that fire on actual anomalies, not threshold breaches. Our detection engine uses causal inference, not pattern matching. False positive rate under 0.3%." },
  ]

  const team = [
    { name: "KIRA VOSS", role: "CEO / SYSTEMS", bio: "Ex-kernel maintainer. Built observability at Cloudflare for 6 years. Believes dashboards are a coping mechanism." },
    { name: "OMAR ZHANG", role: "CTO / INFRA", bio: "Founded two open-source projects with 40k+ stars. Previously principal engineer at Datadog. Writes Rust for fun." },
    { name: "SABLE OKAFOR", role: "HEAD OF PRODUCT", bio: "Shipped developer tools at Stripe and Vercel. Obsessed with reducing time-to-insight below 200ms." },
  ]

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Inter:wght@400;500&display=swap" rel="stylesheet" />

      {/* Numbered Nav */}
      <nav className="border-b border-black">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-2xl tracking-tighter" style={{ fontFamily: "'Major Mono Display', monospace" }}>null.systems</span>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <span key={item.num} className="text-xs tracking-widest cursor-pointer hover:underline underline-offset-4">
                <span className="font-medium">{item.num}</span> {item.label}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* Manifesto Hero */}
      <section className="border-b border-black">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter mb-12" style={{ fontFamily: "'Major Mono Display', monospace" }}>
            we refuse to<br />build another<br />dashboard.
          </h1>
          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed mb-6">
              The observability industry sells you visualizations of your own ignorance. Colorful graphs that move when things break. Alerts that fire after your users already tweeted about the outage. We are done pretending this is acceptable.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              null.systems is developer infrastructure built on a single conviction: your tools should understand your systems better than you do. Not approximate. Not sampled. Not eventually consistent. Precise, causal, real-time understanding.
            </p>
            <p className="text-lg leading-relaxed">
              We are building the last observability tool you will ever install. It is open source. It is opinionated. It does not have a dark mode toggle because it does not have a UI at all.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="border-b border-black">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-xs tracking-widest">02 PROBLEM</span>
              <h2 className="text-4xl md:text-5xl tracking-tighter mt-4 mb-8" style={{ fontFamily: "'Major Mono Display', monospace" }}>
                observability is broken.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-base leading-relaxed">
                The average engineering team spends 14 hours per week context-switching between monitoring tools. They maintain 6+ dashboards per service. They still get paged at 3am for issues their tools should have predicted 45 minutes earlier.
              </p>
              <p className="text-base leading-relaxed">
                Current solutions ingest terabytes of telemetry and charge you per gigabyte to store data you will never query. They give you 200 integrations when you need 12. They optimize for demo day, not day two.
              </p>
              <p className="text-base leading-relaxed">
                The result: $40B spent annually on tools that make engineers feel busy instead of informed. We think that is a market failure worth fixing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="border-b border-black bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <span className="text-xs tracking-widest">03 SOLUTION</span>
          <h2 className="text-4xl md:text-5xl tracking-tighter mt-4 mb-8" style={{ fontFamily: "'Major Mono Display', monospace" }}>
            infrastructure that thinks.
          </h2>
          <p className="text-base leading-relaxed max-w-2xl mb-8">
            null.systems is a single binary that replaces your metrics pipeline, log aggregator, and APM vendor. It runs in your cluster, keeps data in your network, and uses causal inference to tell you why something broke before you ask.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-white p-6">
              <h3 className="text-lg tracking-tight font-medium mb-3">ZERO SAMPLING</h3>
              <p className="text-sm leading-relaxed opacity-80">Every event. Every span. Every log line. We compress at the edge using semantic deduplication, not random sampling. You keep 100% fidelity at 10% of the storage cost.</p>
            </div>
            <div className="border border-white p-6">
              <h3 className="text-lg tracking-tight font-medium mb-3">CAUSAL GRAPHS</h3>
              <p className="text-sm leading-relaxed opacity-80">We model your infrastructure as a directed acyclic graph of causal relationships. When a node fails, we trace the blast radius in milliseconds and tell you the root cause, not the symptom.</p>
            </div>
            <div className="border border-white p-6">
              <h3 className="text-lg tracking-tight font-medium mb-3">CLI NATIVE</h3>
              <p className="text-sm leading-relaxed opacity-80">Query your infrastructure like you query a database. Pipe results. Script automations. Our query language is designed for operators who live in the terminal, not managers who live in slides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-b border-black">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <span className="text-xs tracking-widest">04 HOW IT WORKS</span>
          <h2 className="text-4xl tracking-tighter mt-4 mb-12" style={{ fontFamily: "'Major Mono Display', monospace" }}>four steps. no magic.</h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="grid md:grid-cols-12 gap-6 border-t border-black pt-8">
                <span className="md:col-span-1 text-3xl tracking-tighter" style={{ fontFamily: "'Major Mono Display', monospace" }}>{step.num}</span>
                <h3 className="md:col-span-3 text-xl tracking-tight font-medium">{step.title}</h3>
                <p className="md:col-span-8 text-base leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Commitment */}
      <section className="border-b border-black">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <span className="text-xs tracking-widest">05 OPEN SOURCE</span>
          <h2 className="text-4xl tracking-tighter mt-4 mb-8" style={{ fontFamily: "'Major Mono Display', monospace" }}>open by default.</h2>
          <div className="max-w-2xl space-y-6">
            <p className="text-base leading-relaxed">
              The core engine is Apache 2.0 licensed. Always has been, always will be. We believe infrastructure software that holds your data hostage is a liability, not a product.
            </p>
            <p className="text-base leading-relaxed">
              Our commercial offering adds multi-tenant management, SSO, audit logging, and 24/7 on-call support. The detection engine, query language, and ingestion pipeline are free and open for anyone to run, fork, and improve.
            </p>
            <div className="flex gap-6 pt-4">
              <span className="text-sm tracking-widest border-b border-black pb-1 cursor-pointer">GITHUB</span>
              <span className="text-sm tracking-widest border-b border-black pb-1 cursor-pointer">DOCS</span>
              <span className="text-sm tracking-widest border-b border-black pb-1 cursor-pointer">CHANGELOG</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-black">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <span className="text-xs tracking-widest">06 TEAM</span>
          <h2 className="text-4xl tracking-tighter mt-4 mb-12" style={{ fontFamily: "'Major Mono Display', monospace" }}>the people.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member) => (
              <div key={member.name}>
                <div className="w-full aspect-square bg-black mb-6" />
                <h3 className="text-lg font-medium tracking-tight">{member.name}</h3>
                <span className="text-xs tracking-widest block mt-1 mb-4">{member.role}</span>
                <p className="text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Signup */}
      <section className="border-b border-black bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <span className="text-xs tracking-widest">07 WAITLIST</span>
          <h2 className="text-4xl md:text-6xl tracking-tighter mt-4 mb-8" style={{ fontFamily: "'Major Mono Display', monospace" }}>
            join the waitlist.
          </h2>
          <p className="text-base leading-relaxed max-w-xl mb-10">
            We are onboarding teams in batches of 20. Priority goes to teams running Kubernetes in production with more than 50 services. No sales calls. No demos. Just access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <input type="email" placeholder="your@email.com" className="flex-1 bg-transparent border border-white px-4 py-3 text-sm tracking-wide placeholder:text-white/40 focus:outline-none" />
            <button className="bg-white text-black px-8 py-3 text-sm tracking-widest font-medium hover:bg-white/90 transition-colors">
              REQUEST ACCESS
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <span className="text-sm" style={{ fontFamily: "'Major Mono Display', monospace" }}>null.systems</span>
        <div className="flex gap-6">
          <span className="text-xs tracking-widest cursor-pointer">GITHUB</span>
          <span className="text-xs tracking-widest cursor-pointer">TWITTER</span>
          <span className="text-xs tracking-widest cursor-pointer">DOCS</span>
        </div>
        <span className="text-xs tracking-widest opacity-50">2025 / NO RIGHTS RESERVED</span>
      </footer>
    </div>
  )
}
