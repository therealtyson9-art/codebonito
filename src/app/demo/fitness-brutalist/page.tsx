export default function FitnessBrutalistDemo() {
  const navLinks = ["WOD", "PROGRAMS", "COACHES", "PRICING", "JOIN"]

  const stats = [
    { number: "500+", label: "MEMBERS STRONG" },
    { number: "12", label: "CERTIFIED COACHES" },
    { number: "6AM-10PM", label: "OPEN DAILY" },
    { number: "15K+", label: "WODS COMPLETED" },
  ]

  const wod = {
    name: "DEVIL'S PLAYGROUND",
    type: "FOR TIME",
    movements: [
      "21-15-9 Deadlifts (225/155 lb)",
      "21-15-9 Handstand Push-Ups",
      "400m Run after each round",
    ],
    timeCap: "18:00 CAP",
    scaling: "Scale deadlifts to 60% 1RM. Pike push-ups substitute for HSPU. Run can be 500m row.",
  }

  const programs = [
    { name: "STRENGTH", desc: "Compound lifts. Progressive overload. Squat, bench, deadlift, overhead press. Five sets of five. No machines. No ego. Just iron.", protocol: "5x5 PROTOCOL" },
    { name: "METCON", desc: "Metabolic conditioning that breaks you down and builds you back. AMRAPs, EMOMs, and chippers designed to test every energy system.", protocol: "HIGH INTENSITY" },
    { name: "OLYMPIC LIFTING", desc: "Snatch and clean & jerk technique work with dedicated platforms and bumper plates. Learn the most technical movements in fitness.", protocol: "SKILL FOCUSED" },
    { name: "ENGINE BUILDER", desc: "Long-duration aerobic capacity work. Rowing, biking, running, swimming. Build the gas tank that powers everything else you do.", protocol: "60-90 MIN" },
  ]

  const coaches = [
    { name: "COACH TANK", cert: "CF-L3 | USAW", specialty: "Strength & Power", years: "11 YRS", bio: "Former powerlifting national qualifier. Specializes in building raw strength through proven barbell programming." },
    { name: "COACH RIVAS", cert: "CF-L2 | NASM-CPT", specialty: "MetCon & Competition", years: "8 YRS", bio: "Three-time CrossFit Regional athlete. Programs competition-style workouts and coaches our competitive team." },
    { name: "COACH WADE", cert: "CF-L2 | FMS", specialty: "Mobility & Movement", years: "6 YRS", bio: "Movement quality specialist. Every athlete he coaches moves better, recovers faster, and stays injury-free longer." },
  ]

  const pricing = [
    { name: "DROP-IN", price: "$25", period: "SINGLE CLASS", features: ["One WOD session", "Equipment included", "No commitment"] },
    { name: "UNLIMITED", price: "$179", period: "/MONTH", features: ["Unlimited classes", "Open gym access", "Benchmark tracking", "Community events"], popular: true },
    { name: "COMPETE", price: "$249", period: "/MONTH", features: ["Everything in Unlimited", "Competition programming", "1-on-1 coaching (2x/mo)", "Nutrition consult", "Video review"] },
  ]

  return (
    <div style={{ fontFamily: "'Teko', sans-serif" }} className="min-h-screen bg-black text-white">
      <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap&family=Inter:wght@400;500&display=swap" rel="stylesheet" />

      {/* Angular Nav */}
      <nav className="relative flex items-center justify-between px-8 py-4 border-b border-gray-800" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)" }}>
        <div className="text-3xl font-bold tracking-widest" style={{ color: "#dc2626" }}>IRON DISTRICT</div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-sm font-medium tracking-widest text-gray-400 hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>{link}</a>
          ))}
        </div>
        <button className="text-sm font-bold tracking-widest px-6 py-2 text-black" style={{ backgroundColor: "#dc2626", fontFamily: "'Inter', sans-serif" }}>ENTER</button>
      </nav>

      {/* Bold Numbers Hero */}
      <section className="py-24 px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-bold leading-none tracking-tight mb-8">NO<br />WEAKNESS<br /><span style={{ color: "#dc2626" }}>ALLOWED.</span></h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-5xl md:text-6xl font-bold" style={{ color: "#dc2626" }}>{s.number}</div>
                <div className="text-xs tracking-widest text-gray-500 mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WOD of the Day */}
      <section className="py-16 px-8 border-b border-gray-800" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-bold tracking-widest px-3 py-1 text-black" style={{ backgroundColor: "#dc2626", fontFamily: "'Inter', sans-serif" }}>TODAY&apos;S WOD</span>
            <span className="text-xs tracking-widest text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>{wod.timeCap}</span>
          </div>
          <h2 className="text-5xl font-bold mb-2">{wod.name}</h2>
          <p className="text-xl text-gray-500 mb-8">{wod.type}</p>
          <div className="space-y-3 mb-8">
            {wod.movements.map((m) => (
              <div key={m} className="text-lg text-gray-300 border-l-2 pl-4" style={{ borderColor: "#dc2626", fontFamily: "'Inter', sans-serif" }}>{m}</div>
            ))}
          </div>
          <p className="text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>SCALING: {wod.scaling}</p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">PROGRAMS</h2>
          <div className="grid md:grid-cols-2 gap-1">
            {programs.map((p) => (
              <div key={p.name} className="border border-gray-800 p-8 hover:border-red-600 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold">{p.name}</h3>
                  <span className="text-xs tracking-widest text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>{p.protocol}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-20 px-8 border-b border-gray-800" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">THE COACHES</h2>
          <div className="grid md:grid-cols-3 gap-1">
            {coaches.map((c) => (
              <div key={c.name} className="border border-gray-800 p-8">
                <div className="w-16 h-16 border-2 mb-6 flex items-center justify-center text-2xl font-bold" style={{ borderColor: "#dc2626", color: "#dc2626" }}>
                  {c.name.split(" ")[1][0]}
                </div>
                <h3 className="text-2xl font-bold mb-1">{c.name}</h3>
                <p className="text-xs tracking-widest text-gray-600 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{c.cert}</p>
                <p className="text-xs tracking-widest mb-4" style={{ color: "#dc2626", fontFamily: "'Inter', sans-serif" }}>{c.specialty} &mdash; {c.years}</p>
                <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{c.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">PRICING</h2>
          <div className="grid md:grid-cols-3 gap-1">
            {pricing.map((p) => (
              <div key={p.name} className={`border p-8 ${p.popular ? "border-red-600" : "border-gray-800"}`}>
                {p.popular && <div className="text-xs font-bold tracking-widest mb-4" style={{ color: "#dc2626", fontFamily: "'Inter', sans-serif" }}>MOST CHOSEN</div>}
                <h3 className="text-3xl font-bold mb-1">{p.name}</h3>
                <div className="text-5xl font-bold mb-1" style={{ color: "#dc2626" }}>{p.price}</div>
                <p className="text-xs tracking-widest text-gray-600 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>{p.period}</p>
                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm text-gray-400 flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <span style={{ color: "#dc2626" }}>&#9632;</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full py-3 text-sm font-bold tracking-widest" style={p.popular ? { backgroundColor: "#dc2626", color: "white", fontFamily: "'Inter', sans-serif" } : { border: "1px solid #dc2626", color: "#dc2626", fontFamily: "'Inter', sans-serif" }}>
                  {p.popular ? "JOIN NOW" : "SELECT"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Excuses CTA */}
      <section className="py-24 px-8 text-center" style={{ backgroundColor: "#dc2626" }}>
        <h2 className="text-6xl md:text-8xl font-bold text-black mb-4">NO EXCUSES.</h2>
        <p className="text-lg text-black opacity-70 mb-8 max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>Your first class is free. Walk in. Sign the waiver. Show up. That&apos;s it.</p>
        <button className="bg-black text-white text-sm font-bold tracking-widest px-10 py-4" style={{ fontFamily: "'Inter', sans-serif" }}>CLAIM FREE CLASS</button>
      </section>

      {/* Raw Footer */}
      <footer className="py-8 px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold tracking-widest" style={{ color: "#dc2626" }}>IRON DISTRICT</div>
          <p className="text-xs tracking-widest text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>1847 INDUSTRIAL BLVD, UNIT 4 &mdash; OPEN 6AM-10PM DAILY</p>
          <p className="text-xs text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>&copy; 2025 IRON DISTRICT. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  )
}
