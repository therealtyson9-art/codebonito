export const dynamic = "force-dynamic";
export default function FitnessMinimalistDemo() {
  const navLinks = ["Programs", "Coaches", "Stories", "Membership", "Join"]

  const programs = [
    { name: "5K Kickstart", duration: "8 Weeks", pace: "Beginner-friendly", desc: "Build your foundation with structured walk-run intervals, proper form drills, and gradual mileage increases. Perfect for those new to running or returning after a break." },
    { name: "10K Breakthrough", duration: "10 Weeks", pace: "Intermediate", desc: "Push past the 5K plateau with tempo runs, hill repeats, and speed sessions designed to build endurance and shave minutes off your personal record." },
    { name: "Marathon Mastery", duration: "16 Weeks", pace: "Advanced", desc: "A periodized plan covering base building, peak mileage weeks, and a strategic taper. Includes nutrition guidance and race-day strategy for your best 26.2." },
    { name: "Trail Running", duration: "12 Weeks", pace: "All Levels", desc: "Take your running off-road with terrain-specific training, elevation gain programming, and technical descending skills. Explore local trails with group runs every Saturday." },
  ]

  const coaches = [
    { name: "Marcus Chen", specialty: "Marathon & Ultra", bio: "Former Division I track athlete with 15 years of coaching experience. Has guided over 200 runners to their first marathon finish and holds a 2:38 personal best.", record: "2:38 PR" },
    { name: "Lena Okafor", specialty: "Speed & Track", bio: "USATF Level 2 certified coach specializing in interval training and race-pace development. Known for her data-driven approach to improving split times.", record: "USATF L2" },
    { name: "David Reyes", specialty: "Trail & Endurance", bio: "Ultramarathon finisher and certified wilderness guide. Blends strength conditioning with trail-specific skills to prepare runners for any terrain.", record: "100mi Finisher" },
  ]

  const stories = [
    { name: "Sarah M.", result: "First Marathon — 4:12:33", quote: "Stride gave me the structure I needed. Marcus helped me believe I could actually finish 26.2 miles, and I did it faster than I ever imagined." },
    { name: "James T.", result: "10K PR — 41:08", quote: "I shaved 6 minutes off my 10K in just 10 weeks. The interval sessions were tough, but Coach Lena knew exactly when to push and when to pull back." },
    { name: "Priya K.", result: "Couch to 5K — 28:45", quote: "I had never run more than a mile in my life. The 5K Kickstart program made it feel achievable from day one. Now I run four times a week." },
  ]

  const plans = [
    { name: "Solo Runner", price: "$59", period: "/month", features: ["Personalized training plan", "Weekly plan adjustments", "Access to group runs", "Mobile app tracking"] },
    { name: "Coached", price: "$119", period: "/month", features: ["Everything in Solo Runner", "1-on-1 coaching sessions (2x/mo)", "Video gait analysis", "Race-day strategy planning", "Nutrition guidance"], popular: true },
    { name: "Elite", price: "$199", period: "/month", features: ["Everything in Coached", "Unlimited coaching sessions", "Strength & mobility programming", "Recovery protocol", "Priority race registration"] },
  ]

  return (
    <div style={{ fontFamily: "'Exo 2', sans-serif" }} className="min-h-screen bg-white text-gray-900">
      <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <div className="text-2xl font-bold tracking-tight" style={{ color: "#059669" }}>Stride</div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{link}</a>
          ))}
        </div>
        <button className="text-sm font-semibold text-white px-5 py-2 rounded-full" style={{ backgroundColor: "#059669" }}>Start Running</button>
      </nav>

      {/* Hero */}
      <section className="relative flex items-center justify-center py-32 px-8" style={{ backgroundColor: "#f0fdf4" }}>
        <div className="max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#059669" }}>Running & Endurance Training</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Every Mile<br />Starts With One Step</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">Stride is a running and endurance training studio for athletes at every level. Expert coaching, structured programs, and a community that moves forward together.</p>
          <div className="flex gap-4 justify-center">
            <button className="text-white font-semibold px-8 py-3 rounded-full" style={{ backgroundColor: "#059669" }}>Find Your Program</button>
            <button className="font-semibold px-8 py-3 rounded-full border-2" style={{ borderColor: "#059669", color: "#059669" }}>Free Trial Run</button>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#059669" }}>Training Programs</p>
        <h2 className="text-3xl font-bold mb-12">Choose Your Distance</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((p) => (
            <div key={p.name} className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#059669" }}>{p.pace}</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">{p.duration} program</p>
              <p className="text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coaches */}
      <section className="py-20 px-8" style={{ backgroundColor: "#f0fdf4" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#059669" }}>Coaching Team</p>
          <h2 className="text-3xl font-bold mb-12">Run With the Best</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((c) => (
              <div key={c.name} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: "#059669" }}>
                  {c.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-lg font-bold mb-1">{c.name}</h3>
                <p className="text-sm font-medium mb-1" style={{ color: "#059669" }}>{c.specialty}</p>
                <p className="text-xs text-gray-400 mb-4">{c.record}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{c.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#059669" }}>Success Stories</p>
        <h2 className="text-3xl font-bold mb-12">Runners Who Found Their Stride</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s) => (
            <div key={s.name} className="border-l-4 pl-6 py-2" style={{ borderColor: "#059669" }}>
              <p className="text-gray-600 italic mb-4 leading-relaxed">&ldquo;{s.quote}&rdquo;</p>
              <p className="font-bold text-sm">{s.name}</p>
              <p className="text-sm" style={{ color: "#059669" }}>{s.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 px-8" style={{ backgroundColor: "#f0fdf4" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-center" style={{ color: "#059669" }}>Membership Plans</p>
          <h2 className="text-3xl font-bold mb-12 text-center">Invest in Your Finish Line</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div key={p.name} className={`bg-white rounded-xl p-8 ${p.popular ? "ring-2 shadow-lg" : "shadow-sm"}`} style={p.popular ? {} : {}}>
                {p.popular && <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#059669" }}>Most Popular</p>}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-4xl font-bold mb-1">{p.price}<span className="text-base font-normal text-gray-400">{p.period}</span></p>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span style={{ color: "#059669" }} className="font-bold mt-0.5">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full py-3 rounded-full font-semibold text-sm" style={p.popular ? { backgroundColor: "#059669", color: "white" } : { border: "2px solid #059669", color: "#059669" }}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 px-8 text-center text-white" style={{ backgroundColor: "#059669" }}>
        <h2 className="text-4xl font-bold mb-4">Ready to Run?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">Join Stride today and take the first step toward your next personal best. Your first group run is free.</p>
        <button className="bg-white font-semibold px-10 py-3 rounded-full" style={{ color: "#059669" }}>Join Stride Free</button>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold" style={{ color: "#059669" }}>Stride</div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900">Instagram</a>
            <a href="#" className="hover:text-gray-900">Strava</a>
            <a href="#" className="hover:text-gray-900">YouTube</a>
            <a href="#" className="hover:text-gray-900">Twitter</a>
          </div>
          <p className="text-sm text-gray-400">&copy; 2025 Stride Running Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
