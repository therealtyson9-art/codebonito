export default function AgencyPlayfulDemo() {
  const services = [
    { title: "Brand Magic", emoji: "\u2728", desc: "We cook up brands that people actually remember. Logo, colors, voice \u2014 the whole enchilada.", color: "from-pink-400 to-rose-500" },
    { title: "Web Wizardry", emoji: "\ud83c\udf10", desc: "Fast, beautiful websites that make visitors go 'woah'. Mobile-first, always.", color: "from-violet-400 to-purple-500" },
    { title: "Social Buzz", emoji: "\ud83d\udce3", desc: "Content that gets shared, liked, and talked about. We make your brand the life of the feed.", color: "from-amber-400 to-orange-500" },
    { title: "Growth Hacks", emoji: "\ud83d\ude80", desc: "Data-driven strategies that actually move the needle. No vanity metrics here!", color: "from-emerald-400 to-teal-500" },
  ]

  const projects = [
    { name: "Pawfect Pets", type: "Branding + Web", desc: "A pet adoption platform that increased adoptions by 240%", color: "bg-pink-100", accent: "text-pink-500" },
    { name: "SnackBox Co", type: "Full Rebrand", desc: "Transformed a boring snack brand into Gen Z's favorite munchies", color: "bg-amber-100", accent: "text-amber-500" },
    { name: "FitVibe App", type: "App Design", desc: "A fitness app so fun, people actually keep their New Year's resolutions", color: "bg-violet-100", accent: "text-violet-500" },
    { name: "Bloom Gardens", type: "Social Campaign", desc: "Grew an urban gardening startup from 500 to 50K followers in 3 months", color: "bg-emerald-100", accent: "text-emerald-500" },
  ]

  const team = [
    { name: "Zoe Martinez", role: "Chief Creativity Officer", fun: "Fueled by oat milk lattes", color: "from-pink-300 to-rose-400" },
    { name: "Kai Nakamura", role: "Lead Designer", fun: "Can spot a bad font from a mile away", color: "from-violet-300 to-purple-400" },
    { name: "Priya Sharma", role: "Dev Extraordinaire", fun: "Codes in her sleep (literally)", color: "from-amber-300 to-orange-400" },
    { name: "Leo Jackson", role: "Social Media Guru", fun: "Has never missed a trend", color: "from-emerald-300 to-teal-400" },
    { name: "Mia Chen", role: "Strategy Wizard", fun: "Spreadsheets are her love language", color: "from-sky-300 to-blue-400" },
    { name: "Sam Torres", role: "Motion Designer", fun: "Makes pixels dance", color: "from-fuchsia-300 to-pink-400" },
  ]

  const testimonials = [
    { quote: "They turned our boring brand into something our customers actually get excited about. Sales went through the roof!", author: "Jake R.", company: "SnackBox Co", emoji: "\ud83c\udf89" },
    { quote: "Working with Fizz feels less like hiring an agency and more like adding superpowers to your team.", author: "Maya T.", company: "FitVibe", emoji: "\ud83d\udcaa" },
    { quote: "Our social media went from crickets to viral. These folks really know their stuff!", author: "Dan K.", company: "Bloom Gardens", emoji: "\ud83c\udf31" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800" style={{ fontFamily: "Nunito, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="text-2xl font-black bg-gradient-to-r from-pink-500 via-violet-500 to-amber-500 bg-clip-text text-transparent">fizz.</span>
        <div className="hidden md:flex items-center space-x-8">
          {["What We Do", "Our Work", "The Team", "Say Hi"].map((item) => (
            <span key={item} className="text-sm font-bold text-gray-500 hover:text-violet-500 cursor-pointer transition-colors">{item}</span>
          ))}
        </div>
        <span className="px-5 py-2.5 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-violet-200 cursor-pointer transition-all">Let&apos;s Chat! \ud83d\udc4b</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-1.5 bg-violet-100 text-violet-600 text-sm font-bold rounded-full mb-6">We make brands pop \ud83c\udf88</div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          Your brand deserves<br />
          to be <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-amber-500 bg-clip-text text-transparent">unforgettable</span>.
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-lg mx-auto font-medium leading-relaxed">
          We&apos;re a creative agency that blends strategy with a whole lot of personality. Boring is not in our vocabulary.
        </p>
        <div className="flex justify-center items-center space-x-4 mt-10">
          <span className="px-8 py-3.5 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-violet-200 cursor-pointer transition-all text-sm">Start a Project \ud83d\ude80</span>
          <span className="px-8 py-3.5 border-2 border-violet-200 text-violet-600 font-bold rounded-full hover:bg-violet-50 cursor-pointer transition-all text-sm">See Our Work</span>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-black text-center mb-4">What we bring to the table \ud83c\udf7d\ufe0f</h2>
        <p className="text-center text-gray-500 mb-14 font-medium">Spoiler: it&apos;s a lot more than just pretty pictures.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all group cursor-pointer border border-transparent hover:border-gray-100">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl mb-5`}>{s.emoji}</div>
              <h3 className="text-xl font-extrabold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-black text-center mb-4">Stuff we&apos;re proud of \ud83c\udfc6</h2>
        <p className="text-center text-gray-500 mb-14 font-medium">Real projects. Real results. Real happy clients.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.name} className={`${p.color} rounded-2xl p-8 hover:scale-[1.02] transition-transform cursor-pointer`}>
              <span className={`text-xs font-bold uppercase tracking-wider ${p.accent}`}>{p.type}</span>
              <h3 className="text-2xl font-extrabold mt-2">{p.name}</h3>
              <p className="text-sm text-gray-600 mt-2 font-medium">{p.desc}</p>
              <span className={`inline-block mt-4 text-sm font-bold ${p.accent}`}>Check it out &rarr;</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-4">Meet the humans \ud83d\udc4b</h2>
          <p className="text-center text-gray-500 mb-14 font-medium">The weirdly talented people behind the magic.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.name} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${m.color} mx-auto mb-4`} />
                <h3 className="font-extrabold text-sm">{m.name}</h3>
                <p className="text-xs text-violet-500 font-bold mt-1">{m.role}</p>
                <p className="text-xs text-gray-400 mt-2 italic">&quot;{m.fun}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-center mb-14">Nice things people say about us \ud83d\ude0a</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-gradient-to-br from-violet-50 to-pink-50 rounded-2xl p-8 border border-violet-100">
              <span className="text-3xl">{t.emoji}</span>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed font-medium">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6">
                <p className="text-sm font-bold">{t.author}</p>
                <p className="text-xs text-violet-500 font-bold">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Logos */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-center text-sm text-gray-400 font-bold mb-8">Brands that trust us with their sparkle</p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {["Pawfect", "SnackBox", "FitVibe", "Bloom", "ZestCo", "Poppin"].map((name) => (
            <div key={name} className="px-5 py-2 bg-gray-100 rounded-full text-sm font-bold text-gray-400">{name}</div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-black">Got an idea? Let&apos;s make it real! \ud83c\udf1f</h2>
          <p className="mt-4 text-white/80 font-medium max-w-md mx-auto">Drop us a line and we&apos;ll get back to you faster than you can say &quot;rebrand.&quot;</p>
          <div className="mt-8">
            <span className="inline-block px-8 py-3.5 bg-white text-violet-600 font-bold rounded-full hover:shadow-xl cursor-pointer transition-all text-sm">Start the Conversation \u2764\ufe0f</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 rounded-t-3xl">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-xl font-black bg-gradient-to-r from-pink-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">fizz.</span>
            <p className="text-xs text-gray-500 mt-1 font-medium">Making brands unforgettable since 2019</p>
          </div>
          <div className="flex space-x-6">
            {["Instagram", "TikTok", "Twitter", "Dribbble"].map((s) => (
              <span key={s} className="text-xs text-gray-500 hover:text-violet-400 cursor-pointer transition-colors font-bold">{s}</span>
            ))}
          </div>
          <span className="text-xs text-gray-600 font-medium">&copy; 2026 Fizz Creative. Made with \u2764\ufe0f</span>
        </div>
      </footer>
    </div>
  )
}
