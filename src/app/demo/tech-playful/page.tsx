export const dynamic = "force-dynamic";
export default function TechPlayfulDemo() {
  const tools = [
    { name: "Forge Studio", desc: "A visual code editor that turns your ideas into production-ready components. Drag, connect, and deploy without leaving your browser.", tag: "Design", gradient: "from-pink-500 to-rose-500" },
    { name: "Spark CLI", desc: "One command to scaffold, build, and ship. Smart defaults that work for side projects and production apps alike. Zero config until you need it.", tag: "Tooling", gradient: "from-violet-500 to-purple-500" },
    { name: "Prism UI", desc: "300+ accessible components with built-in animations, dark mode, and responsive variants. Copy, paste, and customize to your heart's content.", tag: "Components", gradient: "from-cyan-500 to-blue-500" },
    { name: "Nebula Deploy", desc: "Push to any branch and get a preview URL in seconds. Automatic SSL, edge caching, and rollbacks. Your staging environment, supercharged.", tag: "Infra", gradient: "from-amber-500 to-orange-500" },
  ];

  const stats = [
    { number: "180K+", label: "Developers" },
    { number: "2.4M", label: "Projects Built" },
    { number: "500+", label: "Plugins" },
    { number: "92", label: "Countries" },
  ];

  const gallery = [
    { name: "SoundScape", creator: "@melodev", desc: "A spatial audio visualizer built with Prism UI and WebGL" },
    { name: "TaskFlow", creator: "@buildwithsara", desc: "Kanban meets calendar -- project management reimagined" },
    { name: "GreenLens", creator: "@eco_coder", desc: "Plant identification app with AI-powered care guides" },
    { name: "TypeRacer Pro", creator: "@keysmash", desc: "Competitive typing game with real-time multiplayer" },
    { name: "BudgetBuddy", creator: "@findev", desc: "Personal finance tracker with smart categorization" },
    { name: "CodePen Clone", creator: "@webwizard", desc: "Live HTML/CSS/JS playground built entirely on Pixelforge" },
  ];

  const pricing = [
    { name: "Hobby", price: "Free", features: ["Unlimited projects", "Community support", "1 GB deploy storage", "Shared compute"] },
    { name: "Pro", price: "$19/mo", features: ["Everything in Hobby", "Priority builds", "10 GB deploy storage", "Custom domains", "Team collaboration"], popular: true },
    { name: "Team", price: "$49/mo", features: ["Everything in Pro", "Dedicated compute", "Audit logs", "SSO", "SLA guarantee"] },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div style={{ fontFamily: "'Gabarito', sans-serif", background: "linear-gradient(135deg, #06b6d4 0%, #6366f1 50%, #8b5cf6 100%)" }} className="min-h-screen text-white">
        {/* Floating Nav */}
        <nav className="p-6">
          <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 flex items-center justify-between">
            <span className="text-xl font-bold">Pixelforge</span>
            <div className="hidden md:flex gap-6 text-sm font-medium text-white/80">
              <a href="#" className="hover:text-white">Tools</a>
              <a href="#" className="hover:text-white">Community</a>
              <a href="#" className="hover:text-white">Showcase</a>
              <a href="#" className="hover:text-white">Pricing</a>
              <a href="#" className="hover:text-white">Blog</a>
            </div>
            <a href="#" className="bg-white text-indigo-600 px-5 py-2 rounded-xl text-sm font-semibold">Start Free</a>
          </div>
        </nav>

        {/* 3D Icon Hero */}
        <section className="py-24 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="grid grid-cols-5 gap-12 text-6xl" style={{ transform: "perspective(800px) rotateX(15deg) rotateY(-5deg)" }}>
              {["</>", "{}", "=>", "//", "[ ]", "( )", "&&", "||", "++", "##", "**", "::", "->", "!=", "~~", "@", "$", "%", "^", "&", "?:", "<<", ">>", "!!", ";;"].map((icon, i) => (
                <span key={i} className="block" style={{ transform: `translateZ(${Math.sin(i) * 40}px)`, opacity: 0.3 + (i % 5) * 0.15 }}>{icon}</span>
              ))}
            </div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-8">New: Nebula Deploy v3 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">Build cool stuff,<br />ship it fast</h1>
            <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">The creative developer platform with everything you need to go from idea to production. Tools that spark joy, not frustration.</p>
            <div className="flex gap-4 justify-center">
              <a href="#" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow">Get Started Free</a>
              <a href="#" className="border-2 border-white/40 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">Watch Demo</a>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Your creative toolkit</h2>
            <p className="text-center text-white/70 mb-14 max-w-xl mx-auto">Four powerful tools that work together seamlessly. Use one or all of them -- they play nice together.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((t, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${t.gradient} inline-block mb-4`}>{t.tag}</span>
                  <h3 className="text-2xl font-bold mb-3">{t.name}</h3>
                  <p className="text-white/70 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-center mb-10">A community of builders</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-bold mb-2">{s.number}</div>
                  <div className="text-white/60 text-sm font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Built with Pixelforge</h2>
            <p className="text-center text-white/70 mb-14">Incredible projects from our community. Get inspired, fork, and make it your own.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {gallery.map((g, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
                  <div className="h-36 bg-white/5 flex items-center justify-center text-white/30 text-sm">Preview</div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2"><h3 className="font-bold">{g.name}</h3><span className="text-xs text-white/50">{g.creator}</span></div>
                    <p className="text-sm text-white/60">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-14">Simple, honest pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pricing.map((p, i) => (
                <div key={i} className={`rounded-2xl p-8 ${p.popular ? "bg-white text-gray-900 shadow-2xl scale-105" : "bg-white/10 backdrop-blur-sm border border-white/10"}`}>
                  {p.popular && <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 mb-4 inline-block">Most Popular</span>}
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <div className="text-3xl font-bold mt-3 mb-6">{p.price}</div>
                  <ul className="space-y-3">{p.features.map((f, j) => <li key={j} className={`text-sm flex items-center gap-2 ${p.popular ? "text-gray-600" : "text-white/70"}`}><span className={p.popular ? "text-indigo-500" : ""}>&#10003;</span> {f}</li>)}</ul>
                  <a href="#" className={`block text-center mt-8 py-3 rounded-xl font-semibold text-sm ${p.popular ? "bg-indigo-600 text-white" : "bg-white/20 hover:bg-white/30"}`}>Choose Plan</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Discord CTA */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-sm rounded-3xl p-14 border border-white/10">
            <div className="text-5xl mb-6">&#128172;</div>
            <h2 className="text-4xl font-bold mb-4">Join the conversation</h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">Our Discord server is where builders share ideas, get help, and show off what they have made. 28,000+ members and growing.</p>
            <a href="#" className="inline-block bg-[#5865F2] px-8 py-4 rounded-xl font-bold text-lg">Join Our Discord</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/50">
            <span className="font-bold text-lg text-white">Pixelforge</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Discord</a>
              <a href="#" className="hover:text-white">GitHub</a>
              <a href="#" className="hover:text-white">YouTube</a>
              <a href="#" className="hover:text-white">Blog</a>
            </div>
            <span>&copy; 2026 Pixelforge. Built with love.</span>
          </div>
        </footer>
      </div>
    </>
  );
}
