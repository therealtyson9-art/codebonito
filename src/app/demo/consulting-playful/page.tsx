export default function ConsultingPlayfulDemo() {
  const services = [
    { icon: "🎯", title: "Strategy & Planning", desc: "We help you figure out where you want to go and map the smartest route to get there." },
    { icon: "⚡", title: "Growth Acceleration", desc: "Revenue feeling stuck? We find the hidden levers and pull them with you." },
    { icon: "🔄", title: "Process Optimization", desc: "We untangle your workflows so your team can stop firefighting and start building." },
    { icon: "🤝", title: "Team & Culture", desc: "Great strategy needs great people. We help you build teams that actually love Mondays." },
    { icon: "📊", title: "Data & Insights", desc: "Turn your data from a dusty spreadsheet into your most powerful decision-making tool." },
    { icon: "🚀", title: "Launch Support", desc: "Taking something new to market? We have been there 200+ times and counting." },
  ]

  const process = [
    { num: 1, title: "Chat & Coffee", desc: "We kick things off with a casual discovery call to understand your world, your goals, and what keeps you up at night.", color: "#8b5cf6" },
    { num: 2, title: "Deep Dive", desc: "Our team digs into your data, talks to your people, and maps out exactly what is going on under the hood.", color: "#f59e0b" },
    { num: 3, title: "Game Plan", desc: "We build you a clear, actionable roadmap with priorities, timelines, and realistic milestones you can actually hit.", color: "#8b5cf6" },
    { num: 4, title: "Make It Happen", desc: "We roll up our sleeves and work alongside your team to bring the plan to life. No hand-off, just hands-on.", color: "#f59e0b" },
  ]

  const team = [
    { name: "Alex Rivera", role: "Chief Strategist", vibe: "Big-picture thinker, amateur chef, believes every problem has a creative solution", color: "bg-violet-100" },
    { name: "Priya Sharma", role: "Growth Lead", vibe: "Data whisperer, marathon runner, turns metrics into magic", color: "bg-amber-100" },
    { name: "Jordan Lee", role: "Operations Expert", vibe: "Process nerd (proudly), dog parent, makes chaos organized", color: "bg-violet-100" },
    { name: "Sam Okonkwo", role: "Culture Coach", vibe: "People person, podcast host, believes happy teams build better things", color: "bg-amber-100" },
  ]

  const successStories = [
    { company: "BrightPath Education", result: "Grew from 50 to 500 students in one year", reaction: "🎉", quote: "They made scaling feel easy and fun!" },
    { company: "GreenLeaf Organics", result: "Doubled revenue while cutting costs by 30%", reaction: "🌟", quote: "Our team actually looked forward to strategy meetings." },
    { company: "PixelForge Studios", result: "Launched 3 new products in 6 months", reaction: "🚀", quote: "They brought the energy we did not know we needed." },
  ]

  const faqs = [
    { q: "How much does it cost?", a: "Every engagement is different. We offer a free discovery call to understand your needs and provide a clear, no-surprise quote." },
    { q: "How long does a typical project take?", a: "Most projects run 3 to 6 months, but we have done focused sprints in as little as 4 weeks. It depends on the scope." },
    { q: "Do you work with small businesses?", a: "Absolutely! We love working with businesses of all sizes. Some of our best work has been with scrappy startups and growing teams." },
    { q: "What makes you different from other consultants?", a: "We actually stick around to help implement. No 200-page reports that gather dust. We are in the trenches with you." },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ fontFamily: "Poppins, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-xl font-bold">spark<span style={{ color: "#8b5cf6" }}>.</span>consulting</span>
        <div className="hidden md:flex items-center space-x-8">
          {["Services", "Process", "Team", "Stories", "FAQ"].map((item) => (
            <span key={item} className="text-sm text-slate-500 hover:text-slate-800 cursor-pointer transition-colors font-medium">{item}</span>
          ))}
        </div>
        <span className="text-sm font-semibold text-white px-5 py-2.5 rounded-full cursor-pointer" style={{ backgroundColor: "#8b5cf6" }}>Free Call</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-28 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "#f59e0b20", color: "#d97706" }}>
          Trusted by 200+ happy businesses
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Let&apos;s make your<br />business <span style={{ color: "#8b5cf6" }}>awesome</span>!
        </h1>
        <p className="mt-6 text-lg text-slate-500 max-w-lg mx-auto leading-relaxed">
          We are friendly consultants who actually care about your success. No jargon, no egos, just real results.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <span className="inline-block px-8 py-3.5 text-sm font-semibold text-white rounded-full cursor-pointer shadow-lg" style={{ backgroundColor: "#8b5cf6" }}>Book a Free Discovery Call</span>
          <span className="inline-block px-8 py-3.5 text-sm font-semibold border-2 rounded-full cursor-pointer" style={{ borderColor: "#f59e0b", color: "#d97706" }}>See Our Work</span>
        </div>
      </section>

      {/* Services */}
      <section className="bg-violet-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">How We Can Help</h2>
          <p className="text-center text-slate-500 mb-16 max-w-md mx-auto">Whatever challenge you are facing, we have probably seen it before and know how to fix it.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="text-lg font-semibold mt-4 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-center text-slate-500 mb-16 max-w-md mx-auto">Four simple steps from &quot;help!&quot; to &quot;heck yes!&quot;</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {process.map((p) => (
            <div key={p.num} className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6" style={{ backgroundColor: p.color }}>
                {p.num}
              </div>
              <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24" style={{ backgroundColor: "#f59e0b10" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Meet the Team</h2>
          <p className="text-center text-slate-500 mb-16 max-w-md mx-auto">Real people who genuinely love helping businesses grow.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((m) => (
              <div key={m.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className={`aspect-square ${m.color}`} />
                <div className="p-6">
                  <h3 className="text-base font-semibold">{m.name}</h3>
                  <p className="text-sm font-medium mt-1" style={{ color: "#8b5cf6" }}>{m.role}</p>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">{m.vibe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-4">Happy Clients, Real Results</h2>
        <p className="text-center text-slate-500 mb-16 max-w-md mx-auto">Do not take our word for it. Here is what happened for businesses like yours.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((s) => (
            <div key={s.company} className="border-2 border-slate-100 rounded-2xl p-8 text-center hover:border-violet-200 transition-colors">
              <span className="text-4xl">{s.reaction}</span>
              <h3 className="text-lg font-semibold mt-4">{s.company}</h3>
              <p className="text-sm font-medium mt-2" style={{ color: "#8b5cf6" }}>{s.result}</p>
              <p className="text-sm text-slate-400 mt-4 italic">&ldquo;{s.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-white py-20 px-6 rounded-3xl mx-6 mb-12" style={{ backgroundColor: "#8b5cf6" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-violet-200 mb-10 max-w-md mx-auto">Book a free 30-minute discovery call. No pressure, no pitch deck, just a friendly chat about your business.</p>
          <span className="inline-block px-8 py-3.5 text-sm font-semibold rounded-full cursor-pointer" style={{ backgroundColor: "#f59e0b", color: "#78350f" }}>Book Your Free Call Now</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-14">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-base font-semibold">{f.q}</h3>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-lg font-bold">spark<span style={{ color: "#8b5cf6" }}>.</span>consulting</span>
          <div className="flex space-x-8">
            {["Instagram", "LinkedIn", "Twitter", "TikTok"].map((s) => (
              <span key={s} className="text-xs text-slate-400 hover:text-slate-800 cursor-pointer transition-colors font-medium">{s}</span>
            ))}
          </div>
          <span className="text-xs text-slate-400">&copy; 2026 Spark Consulting. Made with heart.</span>
        </div>
      </footer>
    </div>
  )
}
