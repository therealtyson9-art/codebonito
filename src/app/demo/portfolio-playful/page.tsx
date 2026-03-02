export default function PortfolioPlayfulDemo() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </head>

      {/* NAV */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">pixelpals</span>
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-sm font-semibold text-slate-600 hover:text-purple-600 cursor-pointer transition-colors">Projects</span>
            <span className="text-sm font-semibold text-slate-600 hover:text-purple-600 cursor-pointer transition-colors">About Me</span>
            <span className="text-sm font-semibold text-slate-600 hover:text-purple-600 cursor-pointer transition-colors">Blog</span>
            <span className="text-sm font-semibold text-slate-600 hover:text-purple-600 cursor-pointer transition-colors">Resources</span>
          </div>
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 text-sm font-bold rounded-2xl cursor-pointer hover:shadow-lg hover:shadow-purple-200 transition-all">Say Hello!</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
          <div className="inline-block bg-white rounded-2xl px-4 py-2 shadow-sm mb-6">
            <span className="text-sm font-bold text-purple-600">Currently open for freelance work</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
            {"Hi, I\u2019m Luna! \u2728"}<br />
            I design <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">delightful</span> experiences
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
            Product designer and illustrator based in Portland. I make apps, websites, and brand identities that make people smile.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 text-sm font-bold rounded-2xl cursor-pointer hover:shadow-lg hover:shadow-purple-200 transition-all">See My Work</span>
            <span className="bg-white text-purple-600 border-2 border-purple-200 px-8 py-3 text-sm font-bold rounded-2xl cursor-pointer hover:border-purple-400 transition-colors">About Me</span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2">{`Recent Projects \uD83C\uDFA8`}</h2>
            <p className="text-slate-500">A mix of client work and passion projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Boba Tracker", tags: ["Mobile App", "UI/UX"], gradient: "from-pink-400 to-rose-400", desc: "A playful habit-tracking app for boba tea lovers. Track your orders, discover new flavors, and earn cute badges for trying new shops in your city.", stat: "28k users" },
              { title: "Plantopia", tags: ["Web App", "Branding"], gradient: "from-emerald-400 to-cyan-400", desc: "Plant care companion with watering reminders, growth journals, and a community marketplace. Custom illustrations and a fresh, green-forward brand identity.", stat: "Featured on Product Hunt" },
              { title: "Melody Maker", tags: ["iOS App", "Illustration"], gradient: "from-purple-400 to-indigo-400", desc: "Music education app for kids aged 4 to 8. Interactive lessons with animated characters, rhythm games, and a virtual instrument playground.", stat: "4.9 star rating" },
              { title: "Wanderlust", tags: ["Web Design", "Identity"], gradient: "from-amber-400 to-orange-400", desc: "Travel blog redesign with immersive photo galleries, interactive maps, and a warm, inviting visual language that makes you want to book a flight immediately.", stat: "300% more engagement" },
            ].map((project) => (
              <div key={project.title} className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-purple-100 transition-all cursor-pointer group">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <span className="text-white text-4xl font-black opacity-30 group-hover:opacity-50 transition-opacity">{project.title}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-bold bg-purple-100 text-purple-600 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">{project.stat}</span>
                    <span className="text-sm font-bold text-purple-500 cursor-pointer hover:text-purple-700 transition-colors">{"View Project \u2192"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / SKILLS */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{`A little about me \uD83D\uDC4B`}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                I am a product designer with 6 years of experience and an unhealthy obsession with rounded corners and pastel palettes. Before going freelance, I worked at Headspace and Canva, where I learned that great design is invisible -- it just feels right.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                When I am not pushing pixels, you can find me watercolor painting, rescuing succulents from clearance racks, or teaching intro to design at Portland Community College.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Procreate", "After Effects", "React", "Framer", "Webflow", "Blender"].map((skill) => (
                  <span key={skill} className="text-xs font-bold bg-white text-purple-600 px-4 py-2 rounded-2xl border border-purple-200">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100">
              <h3 className="text-lg font-extrabold text-slate-900 mb-4">Fun facts</h3>
              <div className="space-y-4">
                {[
                  { emoji: "\uD83C\uDF75", fact: "Consumed approximately 2,847 boba teas and counting" },
                  { emoji: "\uD83C\uDF35", fact: "Current succulent count: 43 (no, it is not too many)" },
                  { emoji: "\uD83C\uDFA8", fact: "Illustrated a children book about a cat who codes" },
                  { emoji: "\u2708\uFE0F", fact: "Visited 22 countries, designed in coffee shops in all of them" },
                ].map((item) => (
                  <div key={item.fact} className="flex items-start space-x-3">
                    <span className="text-xl">{item.emoji}</span>
                    <p className="text-sm text-slate-600">{item.fact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-4">{`How I work \uD83D\uDEE0\uFE0F`}</h2>
          <p className="text-slate-500 text-center mb-12 max-w-md mx-auto">Every project follows a flexible but structured process to keep things fun and on track.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We hop on a call, talk about your vision, your users, and what success looks like. I ask a lot of questions.", color: "from-pink-400 to-rose-400" },
              { step: "02", title: "Explore", desc: "Mood boards, sketches, and early concepts. This is where the magic starts. Expect lots of options and zero judgment.", color: "from-purple-400 to-indigo-400" },
              { step: "03", title: "Design", desc: "High-fidelity screens, prototypes, and design system foundations. Everything pixel-perfect and ready for feedback.", color: "from-cyan-400 to-blue-400" },
              { step: "04", title: "Deliver", desc: "Polished assets, developer handoff, and a cheerful goodbye. Plus ongoing support because I actually care.", color: "from-amber-400 to-orange-400" },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white text-sm font-black">{phase.step}</span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">{phase.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-br from-cyan-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">{`Kind words \uD83D\uDC9C`}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Luna does not just design interfaces -- she designs feelings. Our app went from functional to joyful, and our retention metrics proved users noticed the difference.", name: "Maya Torres", role: "CEO at Boba Tracker", color: "from-pink-100 to-pink-50" },
              { quote: "Hiring Luna was the best decision we made all year. She took our vague brief and turned it into something that made our entire team say wow. Twice.", name: "Kai Nakamura", role: "Founder at Plantopia", color: "from-purple-100 to-purple-50" },
              { quote: "She presented three concepts and every single one was better than what we had imagined. Went with concept two and it has been our highest-performing landing page ever.", name: "Riley Andersen", role: "Marketing Lead at Wanderlust", color: "from-cyan-100 to-cyan-50" },
            ].map((t) => (
              <div key={t.name} className={`bg-gradient-to-br ${t.color} rounded-2xl p-6 border border-white`}>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Let us make something awesome together!</h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">I am always excited to work on projects that push creative boundaries. Drop me a line and let us chat!</p>
          <span className="inline-block bg-white text-purple-600 px-8 py-3 text-sm font-bold rounded-2xl cursor-pointer hover:shadow-lg hover:shadow-purple-900/20 transition-all">Get In Touch</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 md:mb-0">pixelpals</span>
          <div className="flex space-x-6">
            <span className="text-sm text-slate-400 hover:text-white cursor-pointer transition-colors">Dribbble</span>
            <span className="text-sm text-slate-400 hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="text-sm text-slate-400 hover:text-white cursor-pointer transition-colors">Twitter</span>
            <span className="text-sm text-slate-400 hover:text-white cursor-pointer transition-colors">LinkedIn</span>
          </div>
          <span className="text-xs text-slate-500 mt-4 md:mt-0">&copy; 2026 Luna Park Design</span>
        </div>
      </footer>
    </div>
  )
}
