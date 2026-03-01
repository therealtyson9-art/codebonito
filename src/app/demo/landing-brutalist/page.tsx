export default function LandingBrutalistDemo() {
  return (
    <div className="min-h-screen bg-yellow-300 text-black" style={{ fontFamily: "Space Mono, monospace" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>

      {/* Nav */}
      <nav className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold uppercase tracking-tight">BLOK_</span>
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-sm font-bold uppercase hover:line-through cursor-pointer">Product</span>
            <span className="text-sm font-bold uppercase hover:line-through cursor-pointer">Features</span>
            <span className="text-sm font-bold uppercase hover:line-through cursor-pointer">Pricing</span>
            <span className="text-sm font-bold uppercase hover:line-through cursor-pointer">About</span>
          </div>
          <button className="h-10 px-6 text-sm font-bold uppercase bg-black text-yellow-300 hover:bg-yellow-300 hover:text-black border-2 border-black transition-all">
            Get Access
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-block bg-black text-yellow-300 px-3 py-1 text-xs font-bold uppercase mb-6">
                Launching Q1 2025
              </div>
              <h1 className="text-5xl lg:text-8xl font-bold uppercase leading-[0.9] mb-8">
                BUILD<br />
                FASTER.<br />
                SHIP<br />
                BOLDER.
              </h1>
              <p className="text-lg font-bold uppercase max-w-md mb-8 leading-snug">
                The no-nonsense dev tool that strips away bloat and lets you focus on what matters: shipping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="YOUR@EMAIL.COM"
                  className="h-14 px-4 bg-white border-4 border-black text-sm font-bold uppercase placeholder:text-black/30 focus:outline-none w-full sm:w-72"
                  readOnly
                />
                <button className="h-14 px-8 text-sm font-bold uppercase bg-black text-yellow-300 border-4 border-black hover:bg-yellow-300 hover:text-black transition-all whitespace-nowrap">
                  Join Waitlist &rarr;
                </button>
              </div>
              <p className="text-xs font-bold uppercase mt-4 opacity-60">2,847 developers already signed up</p>
            </div>
            <div className="bg-black text-yellow-300 p-8 border-4 border-black flex flex-col justify-center">
              <div className="space-y-4 text-sm font-bold">
                <div className="flex justify-between border-b-2 border-yellow-300/30 pb-3">
                  <span>DAYS</span>
                  <span className="text-4xl">14</span>
                </div>
                <div className="flex justify-between border-b-2 border-yellow-300/30 pb-3">
                  <span>HOURS</span>
                  <span className="text-4xl">07</span>
                </div>
                <div className="flex justify-between border-b-2 border-yellow-300/30 pb-3">
                  <span>MINUTES</span>
                  <span className="text-4xl">42</span>
                </div>
                <div className="flex justify-between">
                  <span>SECONDS</span>
                  <span className="text-4xl">19</span>
                </div>
              </div>
              <p className="text-xs uppercase mt-6 text-yellow-300/60">Until public beta launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-black text-yellow-300 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "10X", label: "Faster Builds" },
            { num: "0", label: "Config Files" },
            { num: "50K", label: "Lines Saved" },
            { num: "99.9%", label: "Uptime" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl lg:text-5xl font-bold">{s.num}</div>
              <div className="text-xs font-bold uppercase mt-1 text-yellow-300/60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl lg:text-6xl font-bold uppercase mb-16">What You Get_</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              { num: "01", title: "Zero Config", desc: "No YAML, no JSON, no TOML. Just write code and deploy. We handle the rest." },
              { num: "02", title: "Edge-First", desc: "Your app runs at the edge by default. Sub-50ms response times globally." },
              { num: "03", title: "Built-In DB", desc: "SQLite at the edge. No external databases. No connection strings. Just data." },
              { num: "04", title: "Git Deploy", desc: "Push to main. That&apos;s your deploy process. No CI/CD pipelines to maintain." },
            ].map((f) => (
              <div key={f.num} className="border-4 border-black p-8 hover:bg-black hover:text-yellow-300 transition-all cursor-pointer group">
                <span className="text-xs font-bold uppercase opacity-40 group-hover:opacity-60">{f.num}</span>
                <h3 className="text-2xl font-bold uppercase mt-2 mb-3">{f.title}</h3>
                <p className="text-sm font-bold leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black text-yellow-300 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold uppercase mb-12">What Devs Say_</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "I deleted 40 config files from my project. My codebase has never been cleaner.", author: "@SARAH_CODES", role: "Senior Engineer" },
              { quote: "Deployed to 200 edge locations in under 2 seconds. This thing is absurdly fast.", author: "@MIKE_SHIPS", role: "CTO, Startup" },
              { quote: "Finally, a tool that respects my time. No tutorials needed. It just works.", author: "@DEV_PRIYA", role: "Full-Stack Dev" },
            ].map((t) => (
              <div key={t.author} className="border-4 border-yellow-300 p-6">
                <p className="text-sm font-bold leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-xs font-bold">{t.author}</p>
                <p className="text-xs font-bold text-yellow-300/50">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl lg:text-6xl font-bold uppercase mb-16">Pricing_</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { plan: "Hacker", price: "$0", features: ["1 Project", "Edge Deploy", "Community Support", "1GB Storage"] },
              { plan: "Pro", price: "$29", features: ["Unlimited Projects", "Custom Domains", "Priority Support", "50GB Storage"], featured: true },
              { plan: "Team", price: "$99", features: ["Everything in Pro", "Team Collaboration", "SSO & RBAC", "500GB Storage"] },
            ].map((p) => (
              <div key={p.plan} className={`border-4 border-black p-8 ${("featured" in p) ? "bg-black text-yellow-300" : ""}`}>
                <h3 className="text-lg font-bold uppercase mb-2">{p.plan}</h3>
                <div className="text-5xl font-bold mb-1">{p.price}</div>
                <p className="text-xs font-bold uppercase opacity-50 mb-6">/Month</p>
                <ul className="space-y-2 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm font-bold">&#9632; {f}</li>
                  ))}
                </ul>
                <button className={`w-full h-12 text-sm font-bold uppercase border-4 transition-all ${("featured" in p) ? "border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black" : "border-black hover:bg-black hover:text-yellow-300"}`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-yellow-300 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold uppercase mb-6">Stop Configuring.<br />Start Shipping.</h2>
          <p className="text-sm font-bold uppercase opacity-60 mb-8">Join the waitlist. Be first in line.</p>
          <button className="h-14 px-12 text-sm font-bold uppercase bg-yellow-300 text-black border-4 border-yellow-300 hover:bg-transparent hover:text-yellow-300 transition-all">
            Get Early Access &rarr;
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-0 bg-yellow-300">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm font-bold uppercase">&copy; 2024 BLOK_ Inc.</span>
          <div className="flex space-x-6">
            <span className="text-sm font-bold uppercase hover:line-through cursor-pointer">GitHub</span>
            <span className="text-sm font-bold uppercase hover:line-through cursor-pointer">Twitter</span>
            <span className="text-sm font-bold uppercase hover:line-through cursor-pointer">Discord</span>
            <span className="text-sm font-bold uppercase hover:line-through cursor-pointer">Blog</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
