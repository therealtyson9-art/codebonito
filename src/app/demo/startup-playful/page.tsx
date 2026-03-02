export const dynamic = "force-dynamic";
export default function StartupPlayfulDemo() {
  const features = [
    { emoji: "~", title: "Draw Anything", desc: "Freehand sketches, sticky notes, flowcharts, wireframes, mind maps. If you can imagine it, Doodlepad can handle it. Our infinite canvas never runs out of space." },
    { emoji: "*", title: "Collaborate Live", desc: "See your teammates' cursors in real time. Drop comments, react with stickers, and co-create without stepping on each other's work. Up to 50 people on one board." },
    { emoji: ">", title: "Share Instantly", desc: "Generate a shareable link in one click. Export to PNG, SVG, or PDF. Embed boards in Notion, Confluence, or your own website. Your doodles go everywhere you do." },
  ]

  const useCases = [
    { title: "Design Teams", desc: "Run brainstorming sessions, create mood boards, and sketch UI concepts before jumping into Figma. Doodlepad bridges the gap between napkin sketch and pixel-perfect design." },
    { title: "Remote Teachers", desc: "Draw diagrams, annotate readings, and let students collaborate on group projects in real time. Works beautifully on tablets with stylus support." },
    { title: "Product Managers", desc: "Map user journeys, prioritize features with dot voting, and build roadmaps that actually make sense. Replace your boring spreadsheet with a visual workspace." },
    { title: "Agile Teams", desc: "Run retros, sprint planning, and daily standups on a shared canvas. Built-in templates for Kanban, story mapping, and affinity diagrams." },
  ]

  const testimonials = [
    { name: "Mika T.", role: "Design Lead at Figment", quote: "Doodlepad replaced three tools for our team. We brainstorm, wireframe, and present all from the same canvas. It just feels fun to use." },
    { name: "Carlos R.", role: "5th Grade Teacher", quote: "My students actually get excited about group projects now. They fight over who gets to draw the diagrams. That has never happened before." },
    { name: "Priya S.", role: "PM at Stackwise", quote: "Our retros went from awkward silence to genuine creativity. Something about the hand-drawn aesthetic makes people less precious about their ideas." },
  ]

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Nunito', sans-serif", backgroundColor: "#fefce8" }}>
      <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />

      {/* Casual Nav */}
      <nav className="border-b-2 border-dashed" style={{ borderColor: "#3b82f6" }}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-bold" style={{ fontFamily: "'Patrick Hand', cursive", color: "#3b82f6" }}>Doodlepad</span>
          <div className="hidden md:flex items-center gap-6">
            {["Features", "Use Cases", "Pricing", "Blog"].map((link) => (
              <span key={link} className="text-sm font-semibold text-gray-600 cursor-pointer hover:underline decoration-wavy underline-offset-4" style={{ textDecorationColor: "#3b82f6" }}>{link}</span>
            ))}
          </div>
          <button className="h-10 px-6 text-sm font-bold text-white rounded-full shadow-md" style={{ backgroundColor: "#3b82f6" }}>
            Try it free
          </button>
        </div>
      </nav>

      {/* Doodle Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-6 border-2 border-dashed" style={{ color: "#3b82f6", borderColor: "#3b82f6" }}>
            Now with AI shape recognition!
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: "'Patrick Hand', cursive", color: "#1e3a5f" }}>
            Where messy ideas<br />become brilliant plans
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Doodlepad is the collaborative whiteboard that feels like scribbling on a napkin with friends. Sketch, brainstorm, and plan together in real time. No design skills required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="h-12 px-8 text-base font-bold text-white rounded-full shadow-lg" style={{ backgroundColor: "#3b82f6" }}>Start doodling for free</button>
            <button className="h-12 px-8 text-base font-bold rounded-full border-2" style={{ color: "#3b82f6", borderColor: "#3b82f6" }}>Watch a 60s demo</button>
          </div>
          <div className="max-w-3xl mx-auto rounded-2xl border-2 border-dashed aspect-video flex items-center justify-center" style={{ borderColor: "#3b82f6", backgroundColor: "#fef9c3" }}>
            <div className="text-center p-8">
              <p className="text-4xl mb-3" style={{ fontFamily: "'Patrick Hand', cursive", color: "#3b82f6" }}>your canvas goes here</p>
              <p className="text-sm text-gray-500">imagine sticky notes, arrows, and happy little doodles everywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ backgroundColor: "#fef9c3" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ fontFamily: "'Patrick Hand', cursive", color: "#1e3a5f" }}>
            Three things Doodlepad does really well
          </h2>
          <p className="text-center text-gray-600 mb-14 max-w-xl mx-auto">We focused on getting the basics perfect instead of shipping 200 features nobody uses.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-8 border-2 border-dashed" style={{ borderColor: "#3b82f6" }}>
                <span className="text-4xl block mb-4" style={{ fontFamily: "'Patrick Hand', cursive", color: "#3b82f6" }}>{feature.emoji}</span>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Patrick Hand', cursive", color: "#1e3a5f" }}>{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ fontFamily: "'Patrick Hand', cursive", color: "#1e3a5f" }}>
            Who doodles with us?
          </h2>
          <p className="text-center text-gray-600 mb-14 max-w-lg mx-auto">Teams of all shapes and sizes use Doodlepad to think visually and work together.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Patrick Hand', cursive", color: "#3b82f6" }}>{uc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: "#fef9c3" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14" style={{ fontFamily: "'Patrick Hand', cursive", color: "#1e3a5f" }}>
            Nice things people said about us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border-2 border-dashed" style={{ borderColor: "#3b82f6" }}>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <span className="font-bold text-sm" style={{ color: "#1e3a5f" }}>{t.name}</span>
                  <span className="block text-xs text-gray-500 mt-1">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ fontFamily: "'Patrick Hand', cursive", color: "#1e3a5f" }}>
            Simple pricing, no surprises
          </h2>
          <p className="text-center text-gray-600 mb-14 max-w-lg mx-auto">Start free, upgrade when you need more boards and teammates.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Patrick Hand', cursive", color: "#1e3a5f" }}>Free</h3>
              <p className="text-gray-500 text-sm mb-6">Perfect for solo doodlers and small projects</p>
              <span className="text-4xl font-bold" style={{ color: "#3b82f6" }}>$0</span>
              <span className="text-gray-500 text-sm">/month</span>
              <ul className="mt-6 space-y-3">
                {["3 boards", "Up to 5 collaborators", "Basic shapes and sticky notes", "PNG export", "7-day version history"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span style={{ color: "#3b82f6" }}>~</span> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full h-11 mt-8 rounded-full text-sm font-bold border-2" style={{ color: "#3b82f6", borderColor: "#3b82f6" }}>Get started</button>
            </div>
            <div className="rounded-2xl p-8 text-white" style={{ backgroundColor: "#3b82f6" }}>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Patrick Hand', cursive" }}>Pro</h3>
              <p className="text-blue-100 text-sm mb-6">For teams that doodle seriously</p>
              <span className="text-4xl font-bold">$12</span>
              <span className="text-blue-200 text-sm">/user/month</span>
              <ul className="mt-6 space-y-3">
                {["Unlimited boards", "Up to 50 collaborators", "AI shape recognition", "SVG, PDF, and embed export", "Unlimited version history", "Custom templates", "Priority support"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-blue-100">
                    <span className="text-white">~</span> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full h-11 mt-8 rounded-full text-sm font-bold bg-white" style={{ color: "#3b82f6" }}>Start 14-day trial</button>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20" style={{ backgroundColor: "#fef9c3" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Patrick Hand', cursive", color: "#1e3a5f" }}>
            Ready to start doodling?
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Available on Mac, Windows, iPad, and in your browser. Your boards sync everywhere, so you can start a sketch on your laptop and finish it on the couch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="h-14 px-10 text-base font-bold text-white rounded-full shadow-lg" style={{ backgroundColor: "#3b82f6" }}>Download for Mac</button>
            <button className="h-14 px-10 text-base font-bold rounded-full border-2" style={{ color: "#3b82f6", borderColor: "#3b82f6" }}>Open in browser</button>
          </div>
          <p className="text-xs text-gray-500 mt-6">Also available on Windows and iPad. Free forever for personal use.</p>
        </div>
      </section>

      {/* Hand-drawn Footer */}
      <footer className="border-t-2 border-dashed py-12" style={{ borderColor: "#3b82f6" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xl font-bold" style={{ fontFamily: "'Patrick Hand', cursive", color: "#3b82f6" }}>Doodlepad</span>
              <p className="text-xs text-gray-500 mt-1">Made with love and way too many sticky notes.</p>
            </div>
            <div className="flex gap-6">
              {["Twitter", "Discord", "YouTube", "Blog"].map((link) => (
                <span key={link} className="text-sm text-gray-500 cursor-pointer hover:underline decoration-wavy" style={{ textDecorationColor: "#3b82f6" }}>{link}</span>
              ))}
            </div>
            <span className="text-xs text-gray-400">&copy; 2025 Doodlepad. Keep doodling!</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
