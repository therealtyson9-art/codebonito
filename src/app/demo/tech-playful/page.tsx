export default function TechPlayfulDemo() {
  const features = [
    { emoji: "🚀", title: "Instant Deploys", desc: "Push to main and watch your app go live in seconds. Zero config, zero stress, maximum velocity." },
    { emoji: "🧩", title: "Plugin Ecosystem", desc: "Over 500 community plugins ready to snap into your project. Auth, payments, email -- all one install away." },
    { emoji: "🎨", title: "Visual Editor", desc: "Drag, drop, and ship. Build beautiful interfaces without fighting CSS. Your designers will love you." },
    { emoji: "🔮", title: "AI Copilot", desc: "An intelligent assistant that writes tests, fixes bugs, and suggests optimizations while you code." },
    { emoji: "⚡", title: "Edge Runtime", desc: "Your code runs where your users are. 200+ locations worldwide, sub-10ms response times everywhere." },
    { emoji: "🛡️", title: "Built-in Security", desc: "Automatic HTTPS, DDoS protection, and vulnerability scanning. Security that just works, out of the box." },
  ]
  const integrations = [
    { name: "React", color: "bg-cyan-100 text-cyan-700" },
    { name: "Vue", color: "bg-green-100 text-green-700" },
    { name: "Svelte", color: "bg-orange-100 text-orange-700" },
    { name: "Next.js", color: "bg-slate-100 text-slate-700" },
    { name: "Tailwind", color: "bg-sky-100 text-sky-700" },
    { name: "Prisma", color: "bg-indigo-100 text-indigo-700" },
    { name: "Stripe", color: "bg-purple-100 text-purple-700" },
    { name: "Supabase", color: "bg-emerald-100 text-emerald-700" },
  ]
  const stats = [
    { number: "12,400+", label: "Contributors" },
    { number: "48.2K", label: "GitHub Stars" },
    { number: "6,800+", label: "Forks" },
    { number: "2M+", label: "Downloads/month" },
  ]
  const testimonials = [
    { name: "Alex Rivera", handle: "@alexcodes", text: "Switched our entire startup to Spark and honestly? Best decision we made all year. The DX is unreal.", avatar: "🧑‍💻" },
    { name: "Priya Sharma", handle: "@priyabuilds", text: "The plugin ecosystem saved us months of work. We went from idea to launch in 3 weeks flat.", avatar: "👩‍🔬" },
    { name: "Jordan Lee", handle: "@jordanships", text: "I have tried every framework out there. Spark is the first one that actually made me enjoy writing code again.", avatar: "🧑‍🎨" },
  ]
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Poppins, sans-serif" }}>
      <head><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" /></head>
      <nav className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 bg-clip-text text-transparent">Spark</span>
            <div className="hidden md:flex space-x-6">
              {["Features", "Plugins", "Community", "Docs", "Blog"].map((l) => (
                <span key={l} className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors font-medium">{l}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="h-10 px-4 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Sign in</button>
            <button className="h-10 px-6 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 rounded-full transition-all">Get Started Free</button>
          </div>
        </div>
      </nav>
      <section className="max-w-6xl mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-6">New: AI Copilot is here!</div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">Code magic<br />happens here!</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed">The developer platform that makes building apps ridiculously fun. Ship faster, break less, and actually enjoy the process.</p>
        <div className="flex justify-center space-x-3">
          <button className="h-12 px-8 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 rounded-full transition-all shadow-lg shadow-purple-500/25">Start building</button>
          <button className="h-12 px-8 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors">See it in action</button>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">Packed with superpowers</h2>
        <p className="text-slate-500 text-center mb-12">Everything you need, nothing you don&apos;t.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5 transition-all">
              <div className="text-3xl mb-3">{f.emoji}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">Try it yourself</h2>
        <p className="text-slate-500 text-center mb-8">See how easy it is to build with Spark.</p>
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-50 via-white to-cyan-50 rounded-2xl border border-slate-200 p-8 text-center">
          <div className="text-4xl mb-4">🎮</div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Interactive Playground</h3>
          <p className="text-sm text-slate-500 mb-6">Build a full-stack app in your browser. No sign-up required.</p>
          <button className="h-10 px-6 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all hover:from-purple-600 hover:to-pink-600">Launch Playground</button>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Works with everything</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {integrations.map((i) => (
            <span key={i.name} className={`px-5 py-2.5 rounded-full text-sm font-medium ${i.color}`}>{i.name}</span>
          ))}
        </div>
      </section>
      <section className="bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Built by the community</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-white mb-1">{s.number}</div>
                <div className="text-sm text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Developers love Spark</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 border border-slate-200">
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{t.avatar}</div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-purple-500">{t.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-slate-900 rounded-2xl p-12 text-center">
          <div className="text-4xl mb-4">💜</div>
          <h2 className="text-3xl font-bold text-white mb-3">Proudly open source</h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-6">Spark is MIT licensed and built in the open. Contribute, customize, and make it yours.</p>
          <div className="flex justify-center space-x-3">
            <button className="h-10 px-6 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-full transition-colors">Star on GitHub</button>
            <button className="h-10 px-6 text-sm font-medium text-slate-300 border border-slate-600 hover:border-slate-400 rounded-full transition-colors">Read the code</button>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Ready to spark joy in your code?</h2>
        <p className="text-slate-500 mb-8 max-w-lg mx-auto">Join 100,000+ happy developers. Free forever for personal projects.</p>
        <button className="h-14 px-10 text-base font-semibold text-white bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 hover:from-purple-600 hover:via-cyan-600 hover:to-pink-600 rounded-full transition-all shadow-lg shadow-purple-500/25">Get started -- it&apos;s free!</button>
      </section>
      <footer className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <span className="text-sm text-slate-400">&copy; 2026 Spark Labs. Made with love.</span>
          <div className="flex space-x-6 text-sm text-slate-400">
            {["Privacy", "Terms", "GitHub", "Discord", "Twitter"].map((l) => (
              <span key={l} className="hover:text-slate-900 cursor-pointer transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
