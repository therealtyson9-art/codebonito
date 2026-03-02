export default function LandingMinimalistDemo() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Space Grotesk', sans-serif", backgroundColor: "#fafafa", color: "#1a1a1a" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>

      {/* Dot Navigation */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {["Hero", "How", "Features", "Pricing", "Testimonials", "CTA"].map((label, i) => (
          <div key={i} className="group relative flex items-center justify-end">
            <span className="mr-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#0d9488" }}>{label}</span>
            <div className="w-3 h-3 rounded-full border-2 transition-colors" style={{ borderColor: "#0d9488", backgroundColor: i === 0 ? "#0d9488" : "transparent" }} />
          </div>
        ))}
      </nav>

      {/* Centered Headline Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="text-sm font-medium tracking-widest uppercase mb-6" style={{ color: "#0d9488" }}>Video Editing, Reimagined</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl mb-6">
          Create stunning videos in <span style={{ color: "#0d9488" }}>half the time</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-10 text-gray-500 font-light leading-relaxed">
          Frameflow is the AI-powered video editor that professionals trust to deliver broadcast-quality content without the complexity of traditional tools.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 rounded-full text-white font-medium transition-transform hover:scale-105" style={{ backgroundColor: "#0d9488" }}>Start Free Trial</button>
          <button className="px-8 py-3 rounded-full font-medium border-2 transition-colors hover:bg-gray-100" style={{ borderColor: "#0d9488", color: "#0d9488" }}>Watch Demo</button>
        </div>
        <p className="mt-6 text-sm text-gray-400">No credit card required. 14-day free trial.</p>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How Frameflow Works</h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">Three simple steps from raw footage to polished content ready for any platform.</p>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Import Your Footage", desc: "Drag and drop clips from any source. Frameflow supports over 40 video formats including ProRes, H.265, and RAW files from major camera brands." },
            { step: "02", title: "Let AI Assist", desc: "Our intelligent timeline analyzes your footage, suggests cuts, color grades scenes automatically, and syncs audio to visual beats with precision." },
            { step: "03", title: "Export Anywhere", desc: "Render in 4K, 8K, or optimized formats for YouTube, Instagram, TikTok, and broadcast. One click, every platform covered." },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <span className="text-6xl font-bold" style={{ color: "#0d9488", opacity: 0.3 }}>{item.step}</span>
              <h3 className="text-xl font-semibold mt-4 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features List */}
      <section className="py-24 px-6" style={{ backgroundColor: "#f0fdfa" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Everything You Need to Edit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "AI-Powered Cuts", desc: "Machine learning identifies the best moments in your footage and assembles a rough cut in seconds." },
              { title: "Real-Time Collaboration", desc: "Work with your team simultaneously. Comments, annotations, and version history built right in." },
              { title: "Color Science Engine", desc: "Professional LUT support with AI color matching that maintains consistency across every scene." },
              { title: "Magnetic Timeline", desc: "Clips snap together intelligently. No more gaps, no more sync drift, no more frustration." },
              { title: "Audio Ducking & Mixing", desc: "Automatic audio leveling detects dialogue and adjusts music and effects for broadcast-ready sound." },
              { title: "Cloud Rendering", desc: "Offload heavy renders to our GPU farm. Continue editing while your exports process in the background." },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-xl bg-white shadow-sm">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#0d9488" }} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-gray-500 mb-16">No hidden fees. Scale up or down anytime.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Starter", price: "$19", period: "/mo", features: ["1080p export", "5 projects", "10GB cloud storage", "Basic AI cuts", "Email support"], highlight: false },
            { name: "Pro", price: "$49", period: "/mo", features: ["4K export", "Unlimited projects", "100GB cloud storage", "Full AI suite", "Priority support", "Team collaboration"], highlight: true },
            { name: "Studio", price: "$129", period: "/mo", features: ["8K export", "Unlimited everything", "1TB cloud storage", "Custom AI models", "Dedicated account manager", "API access"], highlight: false },
          ].map((plan, i) => (
            <div key={i} className={`rounded-2xl p-8 ${plan.highlight ? "text-white shadow-xl scale-105" : "bg-white shadow-sm border border-gray-100"}`} style={plan.highlight ? { backgroundColor: "#0d9488" } : {}}>
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>{plan.period}</span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((f, j) => (
                  <li key={j} className={`text-sm flex items-center gap-2 ${plan.highlight ? "text-white/90" : "text-gray-600"}`}>
                    <span>&#10003;</span> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 rounded-full font-medium transition-transform hover:scale-105 ${plan.highlight ? "bg-white" : ""}`} style={plan.highlight ? { color: "#0d9488" } : { backgroundColor: "#0d9488", color: "white" }}>
                {plan.highlight ? "Start Pro Trial" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6" style={{ backgroundColor: "#f0fdfa" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Trusted by Creators Worldwide</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Frameflow cut our post-production time by 60%. We went from a two-week turnaround to five days on a 30-minute documentary.", name: "Sarah Chen", role: "Documentary Filmmaker" },
              { quote: "The AI color matching is genuinely magic. I shoot in mixed lighting constantly and Frameflow makes everything look cohesive without manual grading.", name: "Marcus Rivera", role: "Wedding Videographer" },
              { quote: "I switched our entire newsroom from Premiere to Frameflow. The collaboration features alone saved us from version control nightmares.", name: "Anja Kowalski", role: "News Director, Channel 7" },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm">
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
          <p className="text-gray-500 mb-10 leading-relaxed">Join over 50,000 video professionals who have made the switch to faster, smarter editing with Frameflow.</p>
          <button className="px-12 py-4 rounded-full text-white font-medium text-lg transition-transform hover:scale-105" style={{ backgroundColor: "#0d9488" }}>Start Your Free Trial Today</button>
          <p className="mt-4 text-sm text-gray-400">14 days free. Cancel anytime. No questions asked.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Frameflow</h3>
            <p className="text-gray-400 text-sm max-w-xs">Professional video editing powered by artificial intelligence. Based in San Francisco, serving creators globally.</p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="font-semibold mb-3 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Changelog</li>
                <li>API Docs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
          &copy; 2025 Frameflow, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
