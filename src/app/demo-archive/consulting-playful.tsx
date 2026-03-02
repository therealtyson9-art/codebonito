export default function ConsultingPlayfulDemo() {
  const workshops = [
    { title: "Innovation Sprint", duration: "2 days", size: "8-15 people", desc: "A fast-paced workshop where your team generates, tests, and prototypes new product ideas in just 48 hours.", emoji: "🚀" },
    { title: "Customer Journey Mapping", duration: "1 day", size: "6-12 people", desc: "Walk in your customers' shoes and uncover the moments that matter most to loyalty and growth.", emoji: "🗺️" },
    { title: "Team Alignment Lab", duration: "Half day", size: "5-20 people", desc: "Get everyone on the same page with our interactive strategy alignment session using visual frameworks.", emoji: "🧩" },
    { title: "Culture Design Workshop", duration: "2 days", size: "10-25 people", desc: "Define the rituals, values, and behaviors that will shape your company culture as you scale.", emoji: "🌱" },
  ];

  const caseStudies = [
    { client: "A meal-kit startup", challenge: "High churn after the first month", result: "Redesigned onboarding experience reduced churn by 41% and increased NPS from 32 to 67.", color: "#8b5cf6" },
    { client: "A regional credit union", challenge: "Members avoiding digital banking", result: "Created a human-centered app experience that drove 73% digital adoption in 6 months.", color: "#ec4899" },
    { client: "A children's hospital", challenge: "Stressful patient intake process", result: "Designed a playful, tablet-based check-in flow that reduced parent anxiety scores by 55%.", color: "#f59e0b" },
  ];

  const team = [
    { name: "Maya Torres", role: "Founder & Lead Facilitator", bio: "Former IDEO designer with 14 years of human-centered design experience. Obsessed with sticky notes and breakthroughs.", emoji: "🎨" },
    { name: "Ben Nakamura", role: "Strategy Director", bio: "Ex-Google product strategist who believes the best solutions come from the people closest to the problem.", emoji: "🧠" },
    { name: "Zara Ahmed", role: "Research Lead", bio: "Behavioral scientist and ethnographer who has conducted research in 23 countries for organizations of every size.", emoji: "🔍" },
    { name: "Leo Kowalski", role: "Visual Thinker", bio: "Graphic recorder and visual facilitator who turns messy brainstorms into beautiful, actionable frameworks.", emoji: "✏️" },
  ];

  const tools = [
    { name: "Design Sprints", desc: "Google Ventures-style rapid prototyping" },
    { name: "Jobs to Be Done", desc: "Understanding why customers really buy" },
    { name: "Empathy Mapping", desc: "Seeing the world through user eyes" },
    { name: "Service Blueprints", desc: "Mapping the full customer experience" },
    { name: "Assumption Testing", desc: "Kill bad ideas before they cost money" },
    { name: "Visual Facilitation", desc: "Making meetings actually productive" },
  ];

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Sniglet:wght@400;800&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />

      <div style={{ backgroundColor: "#faf5ff" }}>
        {/* Playful Nav */}
        <nav className="px-8 py-5 flex items-center justify-between max-w-6xl mx-auto">
          <span style={{ fontFamily: "'Sniglet', cursive", fontSize: "24px", fontWeight: 800, color: "#7c3aed" }}>Puzzle Consulting</span>
          <div className="hidden md:flex gap-6 text-sm font-semibold" style={{ color: "#7c3aed" }}>
            <a href="#" className="hover:underline">Workshops</a>
            <a href="#" className="hover:underline">Case Studies</a>
            <a href="#" className="hover:underline">Team</a>
            <a href="#" className="hover:underline">Tools</a>
          </div>
          <button className="px-5 py-2 rounded-full text-white font-bold text-sm" style={{ backgroundColor: "#7c3aed" }}>Let&apos;s Talk!</button>
        </nav>

        {/* Approach Diagram Hero */}
        <section className="max-w-6xl mx-auto px-8 py-20 text-center">
          <h1 style={{ fontFamily: "'Sniglet', cursive", fontSize: "48px", fontWeight: 800, color: "#7c3aed", lineHeight: 1.2 }} className="mb-6">We solve puzzles other consultants can&apos;t.</h1>
          <p className="text-lg max-w-2xl mx-auto mb-12" style={{ color: "#6b7280" }}>Puzzle Consulting uses design thinking to tackle your trickiest business challenges. We bring the sticky notes, the energy, and the frameworks. You bring the problems.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Discover", "Define", "Ideate", "Prototype", "Test"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="w-20 h-20 rounded-2xl flex flex-col items-center justify-center text-white font-bold" style={{ backgroundColor: ["#7c3aed", "#8b5cf6", "#a78bfa", "#c4b5fd", "#7c3aed"][i] }}>
                  <span className="text-2xl">{["🔎", "🎯", "💡", "🔧", "✅"][i]}</span>
                  <span className="text-xs mt-1">{step}</span>
                </div>
                {i < 4 && <span className="text-2xl" style={{ color: "#c4b5fd" }}>→</span>}
              </div>
            ))}
          </div>
          <button className="px-8 py-4 rounded-full text-white font-bold text-lg" style={{ backgroundColor: "#7c3aed" }}>Book a Discovery Call</button>
        </section>

        {/* Our Workshops */}
        <section className="py-16" style={{ backgroundColor: "#f3e8ff" }}>
          <div className="max-w-6xl mx-auto px-8">
            <h2 style={{ fontFamily: "'Sniglet', cursive", fontSize: "32px", fontWeight: 800, color: "#7c3aed" }} className="text-center mb-10">Our Workshops</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {workshops.map((w) => (
                <div key={w.title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{w.emoji}</span>
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: "#7c3aed" }}>{w.title}</h3>
                      <p className="text-xs" style={{ color: "#a78bfa" }}>{w.duration} &middot; {w.size}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="max-w-6xl mx-auto px-8 py-16">
          <h2 style={{ fontFamily: "'Sniglet', cursive", fontSize: "32px", fontWeight: 800, color: "#7c3aed" }} className="text-center mb-10">Puzzles We&apos;ve Solved</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((c) => (
              <div key={c.client} className="bg-white rounded-2xl p-6 shadow-sm border-t-4" style={{ borderColor: c.color }}>
                <h3 className="font-bold mb-1" style={{ color: c.color }}>{c.client}</h3>
                <p className="text-xs font-semibold mb-3" style={{ color: "#9ca3af" }}>Challenge: {c.challenge}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{c.result}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Team */}
        <section className="py-16" style={{ backgroundColor: "#f3e8ff" }}>
          <div className="max-w-6xl mx-auto px-8">
            <h2 style={{ fontFamily: "'Sniglet', cursive", fontSize: "32px", fontWeight: 800, color: "#7c3aed" }} className="text-center mb-10">Meet the Puzzlers</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {team.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-5 text-center shadow-sm">
                  <div className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl" style={{ backgroundColor: "#ede9fe" }}>{t.emoji}</div>
                  <h3 className="font-bold text-sm" style={{ color: "#7c3aed" }}>{t.name}</h3>
                  <p className="text-xs mb-2" style={{ color: "#a78bfa" }}>{t.role}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{t.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools We Use */}
        <section className="max-w-6xl mx-auto px-8 py-16">
          <h2 style={{ fontFamily: "'Sniglet', cursive", fontSize: "32px", fontWeight: 800, color: "#7c3aed" }} className="text-center mb-10">Our Toolkit</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-5 shadow-sm text-center">
                <h3 className="font-bold text-sm mb-1" style={{ color: "#7c3aed" }}>{t.name}</h3>
                <p className="text-xs" style={{ color: "#9ca3af" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-8 py-20 text-center">
          <h2 style={{ fontFamily: "'Sniglet', cursive", fontSize: "40px", fontWeight: 800, color: "#7c3aed" }} className="mb-4">Got a puzzle? Let&apos;s solve it together.</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "#6b7280" }}>Every great solution starts with a conversation. Tell us what you&apos;re working on and we&apos;ll show you how design thinking can help.</p>
          <button className="px-8 py-4 rounded-full text-white font-bold text-lg" style={{ backgroundColor: "#7c3aed" }}>Start the Conversation</button>
        </section>

        {/* Footer */}
        <footer className="py-10" style={{ backgroundColor: "#7c3aed" }}>
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8 text-white">
            <div>
              <h4 style={{ fontFamily: "'Sniglet', cursive", fontWeight: 800 }} className="text-lg mb-3">Puzzle Consulting 🧩</h4>
              <p className="text-sm opacity-80">Design thinking for businesses that want to think differently.</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Say Hello 👋</h4>
              <p className="text-sm opacity-80">hello@puzzleconsulting.co</p>
              <p className="text-sm opacity-80">(503) 555-0199</p>
              <p className="text-sm opacity-80">Portland, OR</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Follow Us 💜</h4>
              <p className="text-sm opacity-80">Instagram / LinkedIn / Dribbble / Medium</p>
              <p className="text-sm opacity-80 mt-2">Subscribe to our newsletter for workshop announcements and design thinking tips!</p>
            </div>
          </div>
          <div className="text-center text-sm text-white opacity-60 mt-8">&copy; 2026 Puzzle Consulting. Made with 💜 in Portland.</div>
        </footer>
      </div>
    </div>
  );
}
