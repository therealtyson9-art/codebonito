export const dynamic = "force-dynamic";
export default function WellnessMinimalistDemo() {
  const classes = [
    { name: "Seated Meditation", duration: "30 min", desc: "Guided awareness practice focusing on breath, body scan, and open monitoring. Suitable for complete beginners and experienced practitioners alike.", level: "All Levels" },
    { name: "Breathwork Journey", duration: "45 min", desc: "Structured breathing techniques including box breathing, Wim Hof method, and holotropic patterns. Activates the parasympathetic nervous system.", level: "Intermediate" },
    { name: "Yoga Nidra", duration: "60 min", desc: "The art of conscious sleep. Lie down in stillness as you are guided through body rotation, visualization, and deep relaxation states.", level: "All Levels" },
    { name: "Sound Healing", duration: "75 min", desc: "Crystal singing bowls, Tibetan bells, and tuning forks create harmonic frequencies that dissolve tension and quiet the mind.", level: "All Levels" },
  ];

  const teachers = [
    { name: "Maya Ishikawa", specialty: "Meditation & Breathwork", bio: "15 years of practice across Zen, Vipassana, and Tibetan traditions. Trained at Plum Village with Thich Nhat Hanh." },
    { name: "Daniel Reeves", specialty: "Yoga Nidra & Sound", bio: "Former musician turned healing artist. Studied Nada Yoga in Rishikesh and sound therapy at the California Institute of Integral Studies." },
    { name: "Amara Osei", specialty: "Breathwork & Movement", bio: "Holotropic breathwork facilitator and somatic therapist. Brings 10 years of experience in trauma-informed practices." },
  ];

  const schedule = [
    { day: "Monday", sessions: ["7:00 AM - Breathwork", "12:00 PM - Seated Meditation", "6:30 PM - Yoga Nidra"] },
    { day: "Tuesday", sessions: ["7:00 AM - Seated Meditation", "5:30 PM - Sound Healing"] },
    { day: "Wednesday", sessions: ["7:00 AM - Breathwork", "12:00 PM - Seated Meditation", "6:30 PM - Yoga Nidra"] },
    { day: "Thursday", sessions: ["7:00 AM - Seated Meditation", "5:30 PM - Breathwork"] },
    { day: "Friday", sessions: ["7:00 AM - Yoga Nidra", "12:00 PM - Seated Meditation", "6:00 PM - Sound Healing"] },
    { day: "Saturday", sessions: ["9:00 AM - Breathwork Journey", "11:00 AM - Sound Healing"] },
    { day: "Sunday", sessions: ["10:00 AM - Community Meditation (free)"] },
  ];

  const memberships = [
    { name: "Drop-In", price: "$25", period: "per class", features: ["Any single class", "No commitment", "Book 24h in advance"] },
    { name: "Seeker", price: "$89", period: "per month", features: ["8 classes per month", "10% shop discount", "Guest pass (1/month)", "Cancel anytime"], highlight: true },
    { name: "Devoted", price: "$149", period: "per month", features: ["Unlimited classes", "20% shop discount", "Priority booking", "Monthly private session", "Workshop access"] },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700&display=swap" rel="stylesheet" />
      <div style={{ fontFamily: "'Zen Maru Gothic', sans-serif", backgroundColor: "#faf8f0" }} className="min-h-screen text-gray-800">
        {/* Nav */}
        <nav className="py-6 px-6">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <span className="text-xl font-bold tracking-wide" style={{ color: "#6b8f71" }}>stillpoint</span>
            <div className="hidden md:flex gap-8 text-sm text-gray-500 font-light">
              <a href="#" className="hover:text-gray-800">Classes</a>
              <a href="#" className="hover:text-gray-800">Teachers</a>
              <a href="#" className="hover:text-gray-800">Schedule</a>
              <a href="#" className="hover:text-gray-800">Membership</a>
            </div>
            <a href="#" className="text-sm px-5 py-2 rounded-full font-medium text-white" style={{ backgroundColor: "#6b8f71" }}>Book a Class</a>
          </div>
        </nav>

        {/* Breathing Hero */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 rounded-full border-2 opacity-20" style={{ borderColor: "#6b8f71" }}></div>
                <div className="absolute inset-4 rounded-full border-2 opacity-30" style={{ borderColor: "#6b8f71" }}></div>
                <div className="absolute inset-8 rounded-full border-2 opacity-40" style={{ borderColor: "#6b8f71" }}></div>
                <div className="absolute inset-12 rounded-full border-2 opacity-50" style={{ borderColor: "#6b8f71" }}></div>
                <div className="absolute inset-16 rounded-full opacity-60" style={{ backgroundColor: "#6b8f71" }}></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Find your stillness</h1>
            <p className="text-lg text-gray-500 font-light mb-10 max-w-xl mx-auto leading-relaxed">A meditation and breathwork studio dedicated to the simple practice of being present. No dogma, no performance. Just you, your breath, and this moment.</p>
            <a href="#" className="inline-block px-8 py-3.5 rounded-full text-white font-medium" style={{ backgroundColor: "#6b8f71" }}>Your First Class is Free</a>
          </div>
        </section>

        {/* Classes */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Our Classes</h2>
            <p className="text-center text-gray-500 font-light mb-12 max-w-lg mx-auto">Four core practices, each designed to meet you exactly where you are. No experience necessary.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {classes.map((c, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{c.name}</h3>
                    <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: "rgba(107, 143, 113, 0.1)", color: "#6b8f71" }}>{c.level}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">{c.duration}</p>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teachers */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Teachers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teachers.map((t, i) => (
                <div key={i} className="text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl font-light text-white" style={{ backgroundColor: "#6b8f71" }}>{t.name.split(" ").map(n => n[0]).join("")}</div>
                  <h3 className="font-bold text-lg">{t.name}</h3>
                  <p className="text-xs mt-1 mb-3" style={{ color: "#6b8f71" }}>{t.specialty}</p>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{t.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Weekly Schedule</h2>
            <div className="space-y-4">
              {schedule.map((day, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-4 py-4 border-b border-gray-100">
                  <span className="font-medium w-28 shrink-0" style={{ color: "#6b8f71" }}>{day.day}</span>
                  <div className="flex flex-wrap gap-3">
                    {day.sessions.map((s, j) => (
                      <span key={j} className="text-sm text-gray-600 bg-gray-50 px-4 py-1.5 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Membership</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {memberships.map((m, i) => (
                <div key={i} className={`rounded-2xl p-8 text-center ${m.highlight ? "bg-white shadow-md border-2" : "bg-white shadow-sm"}`} style={m.highlight ? { borderColor: "#6b8f71" } : {}}>
                  <h3 className="font-bold text-lg">{m.name}</h3>
                  <div className="mt-3 mb-1"><span className="text-3xl font-bold">{m.price}</span></div>
                  <p className="text-xs text-gray-400 mb-6">{m.period}</p>
                  <ul className="space-y-2 text-sm text-gray-600 text-left">{m.features.map((f, j) => <li key={j} className="flex items-start gap-2"><span style={{ color: "#6b8f71" }}>&#10003;</span>{f}</li>)}</ul>
                  <a href="#" className={`block mt-6 py-2.5 rounded-full text-sm font-medium ${m.highlight ? "text-white" : "border text-gray-700"}`} style={m.highlight ? { backgroundColor: "#6b8f71" } : { borderColor: "#d1d5db" }}>Choose</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-4">Begin with a single breath</h2>
            <p className="text-gray-500 font-light mb-8">Your first class is completely free. No signup, no credit card. Just arrive 10 minutes early with comfortable clothes and an open mind.</p>
            <a href="#" className="inline-block px-8 py-3.5 rounded-full text-white font-medium" style={{ backgroundColor: "#6b8f71" }}>Reserve Your Free Class</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-6 text-center text-sm text-gray-400 border-t border-gray-200">
          <span className="font-bold text-base block mb-3" style={{ color: "#6b8f71" }}>stillpoint</span>
          <p className="font-light">248 Elm Street, Portland, OR 97209</p>
          <p className="font-light mt-1">Open daily 6:30 AM -- 8:30 PM</p>
          <p className="mt-4">&copy; 2026 Stillpoint Studio. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
