export default function LandingPlayfulDemo() {
  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ fontFamily: "Nunito, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>

      {/* Nav */}
      <nav className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            sparkle
          </span>
          <div className="hidden md:flex items-center space-x-6">
            {["Features", "Templates", "Pricing", "Blog"].map((item) => (
              <span key={item} className="text-sm font-semibold text-slate-600 hover:text-purple-600 cursor-pointer transition-colors">{item}</span>
            ))}
          </div>
          <button className="h-9 px-5 text-sm font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity">
            Try Free &#10024;
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full opacity-20 blur-3xl" />
          <div className="absolute top-32 right-20 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-300 rounded-full opacity-20 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-4 py-1.5 mb-8">
            <span className="text-sm">&#127881;</span>
            <span className="text-xs font-bold text-purple-700">Just launched v3.0 with AI magic</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
            Create <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">beautiful</span>
            <br />content in minutes
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10 font-medium leading-relaxed">
            The all-in-one creative toolkit for social media managers, designers, and content creators who want to stand out. No design skills needed!
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="h-12 px-8 text-sm font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-purple-300/50">
              Start Creating &rarr;
            </button>
            <button className="h-12 px-8 text-sm font-bold text-purple-700 bg-purple-100 rounded-full hover:bg-purple-200 transition-colors">
              Watch Demo &#9654;
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-4 font-semibold">Free forever for individuals &middot; No credit card required</p>
        </div>
      </section>

      {/* Logos */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-xs text-slate-400 text-center uppercase tracking-widest font-bold mb-6">Loved by creators at</p>
        <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-4">
          {["&#127912; Dribbble", "&#128247; Instagram", "&#127916; TikTok", "&#128140; Pinterest", "&#9889; Canva", "&#127775; Behance"].map((logo) => (
            <span key={logo} className="text-sm font-bold text-slate-300" dangerouslySetInnerHTML={{ __html: logo }} />
          ))}
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold mb-3">Everything you need to shine &#10024;</h2>
          <p className="text-slate-500 font-medium max-w-lg mx-auto">Powerful tools wrapped in a delightful experience. Create scroll-stopping content without the learning curve.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { emoji: "&#127912;", title: "Smart Templates", desc: "1,000+ professionally designed templates for every platform. Customize colors, fonts, and layout with one click.", gradient: "from-pink-100 to-rose-50", border: "border-pink-200" },
            { emoji: "&#129302;", title: "AI Assistant", desc: "Generate captions, hashtags, and even visuals using our built-in AI. Describe what you want and watch it appear.", gradient: "from-purple-100 to-violet-50", border: "border-purple-200" },
            { emoji: "&#128197;", title: "Content Calendar", desc: "Plan and schedule posts across all platforms from one dashboard. Visual calendar with drag-and-drop simplicity.", gradient: "from-cyan-100 to-sky-50", border: "border-cyan-200" },
            { emoji: "&#128200;", title: "Analytics Hub", desc: "Track engagement, growth, and performance in real-time. Beautiful charts that actually make sense.", gradient: "from-emerald-100 to-green-50", border: "border-emerald-200" },
            { emoji: "&#127917;", title: "Brand Kit", desc: "Store your colors, fonts, and logos in one place. Apply your brand to any template instantly.", gradient: "from-amber-100 to-yellow-50", border: "border-amber-200" },
            { emoji: "&#128101;", title: "Team Collab", desc: "Real-time collaboration with comments, approvals, and shared libraries. Keep everyone on the same page.", gradient: "from-indigo-100 to-blue-50", border: "border-indigo-200" },
          ].map((f) => (
            <div key={f.title} className={`bg-gradient-to-br ${f.gradient} border ${f.border} rounded-2xl p-6 hover:scale-[1.02] transition-transform`}>
              <span className="text-3xl" dangerouslySetInnerHTML={{ __html: f.emoji }} />
              <h3 className="text-base font-extrabold mt-3 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2M+", label: "Creators", emoji: "&#128588;" },
              { value: "50M+", label: "Designs made", emoji: "&#127912;" },
              { value: "4.9/5", label: "App Store", emoji: "&#11088;" },
              { value: "180+", label: "Countries", emoji: "&#127758;" },
            ].map((s) => (
              <div key={s.label} className="text-center text-white">
                <div className="text-sm mb-1" dangerouslySetInnerHTML={{ __html: s.emoji }} />
                <div className="text-3xl font-black">{s.value}</div>
                <div className="text-sm font-semibold opacity-80 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-extrabold text-center mb-14">Creators love us &#128156;</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { quote: "I went from spending 3 hours on a single Instagram post to creating a full week of content in 20 minutes. Game changer!", author: "Mia Johnson", handle: "@miacreates", avatar: "MJ", color: "bg-pink-100 text-pink-600" },
            { quote: "The AI caption generator is scary good. It nails my brand voice every time. My engagement is up 200% since switching.", author: "Leo Park", handle: "@leoparkdesign", avatar: "LP", color: "bg-purple-100 text-purple-600" },
            { quote: "As a small business owner, I needed something simple but professional. Sparkle is exactly that. My social media finally looks cohesive!", author: "Aisha Patel", handle: "@aishacooks", avatar: "AP", color: "bg-cyan-100 text-cyan-600" },
          ].map((t) => (
            <div key={t.author} className="border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-sm">&#9733;</span>
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center space-x-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-xs font-bold`}>{t.avatar}</div>
                <div>
                  <p className="text-sm font-bold">{t.author}</p>
                  <p className="text-xs text-slate-400 font-semibold">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl p-12 lg:p-16 text-center">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Ready to sparkle? &#10024;</h2>
            <p className="text-white/80 font-medium mb-8 max-w-md mx-auto">Join 2 million creators already making beautiful content. Start for free, upgrade when you need more.</p>
            <button className="h-12 px-8 text-sm font-bold bg-white text-purple-700 rounded-full hover:bg-white/90 transition-colors shadow-lg">
              Get Started Free &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-lg font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">sparkle</span>
            <div className="flex items-center space-x-6">
              {["Twitter", "Instagram", "TikTok", "YouTube", "Help Center"].map((link) => (
                <span key={link} className="text-sm font-semibold text-slate-400 hover:text-purple-600 cursor-pointer transition-colors">{link}</span>
              ))}
            </div>
            <span className="text-xs text-slate-400 font-semibold">&copy; 2025 Sparkle Inc.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
