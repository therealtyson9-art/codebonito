export default function FitnessPlayfulDemo() {
  const navLinks = ["Classes", "Trainers", "Pricing", "Community"]

  const classes = [
    { name: "Dance Cardio", emoji: "\ud83d\udc83", desc: "Shake it off and burn calories with high-energy dance routines set to the latest hits.", time: "Mon/Wed/Fri 6:30 PM", color: "bg-pink-100 border-pink-300 text-pink-700" },
    { name: "Power Yoga", emoji: "\ud83e\uddd8", desc: "Build strength and flexibility in a flow that leaves you feeling centered and energized.", time: "Tue/Thu 7:00 AM", color: "bg-green-100 border-green-300 text-green-700" },
    { name: "HIIT Party", emoji: "\ud83d\udd25", desc: "30 minutes of high-intensity intervals with music that slaps. Warning: you will sweat.", time: "Mon-Fri 12:00 PM", color: "bg-yellow-100 border-yellow-300 text-yellow-700" },
    { name: "Spin & Grin", emoji: "\ud83d\udeb4", desc: "Indoor cycling with themed rides, disco lights, and instructors who bring the energy.", time: "Tue/Thu/Sat 5:30 PM", color: "bg-purple-100 border-purple-300 text-purple-700" },
    { name: "Box Fit", emoji: "\ud83e\udd4a", desc: "Jab, cross, hook your way to a stronger you. No experience needed, just bring attitude.", time: "Mon/Wed/Sat 8:00 AM", color: "bg-red-100 border-red-300 text-red-700" },
    { name: "Stretch & Chill", emoji: "\ud83c\udf3f", desc: "Wind down your week with deep stretches, foam rolling, and guided relaxation.", time: "Sun 10:00 AM", color: "bg-teal-100 border-teal-300 text-teal-700" },
  ]

  const trainers = [
    { name: "Coach Mia", specialty: "Dance & Cardio", vibe: "Brings the playlist, the energy, and the confetti.", color: "border-pink-400" },
    { name: "Coach Jordan", specialty: "HIIT & Boxing", vibe: "Will make you laugh between burpees. Still makes you do the burpees.", color: "border-green-400" },
    { name: "Coach Sam", specialty: "Yoga & Mobility", vibe: "The calm voice in the storm. Also makes incredible smoothies.", color: "border-yellow-400" },
  ]

  const plans = [
    { name: "Starter", price: "$25", period: "/mo", features: ["5 classes per month", "Open gym access", "Locker room", "Welcome smoothie"], color: "bg-green-50 border-green-200", accent: "bg-green-500" },
    { name: "All-In", price: "$45", period: "/mo", features: ["Unlimited classes", "Open gym 24/7", "Bring a friend free", "Monthly merch drop", "Recovery room"], popular: true, color: "bg-pink-50 border-pink-200", accent: "bg-pink-500" },
    { name: "VIP Vibes", price: "$75", period: "/mo", features: ["Everything in All-In", "4 PT sessions/month", "Priority booking", "Nutrition coaching", "Sauna & cold plunge", "Free guest passes"], color: "bg-yellow-50 border-yellow-200", accent: "bg-yellow-500" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="bg-white border-b-2 border-green-400">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-2xl font-extrabold">
            <span className="text-green-500">happy</span><span className="text-pink-500">fit</span>
          </span>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <span key={link} className="text-sm font-medium text-gray-500 hover:text-green-500 cursor-pointer transition-colors">{link}</span>
            ))}
          </div>
          <span className="px-6 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-full cursor-pointer hover:bg-green-600 transition-colors">Join the Fun!</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 via-pink-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="text-sm font-semibold text-pink-500 mb-4">Portland&apos;s most fun gym since 2020</p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Your <span className="text-green-500">happy place</span><br />for <span className="text-pink-500">gains!</span>
          </h1>
          <p className="text-lg text-gray-500 mt-6 max-w-lg mx-auto">Working out should feel like a celebration, not a chore. Come sweat, laugh, and get strong with the friendliest community in the Pacific Northwest.</p>
          <div className="mt-10 flex justify-center gap-4">
            <span className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-full cursor-pointer hover:bg-pink-600 transition-colors">Try a Free Class</span>
            <span className="px-8 py-3 border-2 border-green-400 text-green-600 font-semibold rounded-full cursor-pointer hover:bg-green-50 transition-colors">See Schedule</span>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-pink-500 mb-2">What We Offer</p>
          <h2 className="text-4xl font-extrabold text-gray-900">Pick Your Vibe</h2>
          <p className="text-gray-500 mt-4">Every class is a party. Every workout is a win.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <div key={cls.name} className={`border-2 rounded-2xl p-6 ${cls.color} hover:scale-105 transition-transform`}>
              <span className="text-4xl">{cls.emoji}</span>
              <h3 className="text-lg font-bold mt-3">{cls.name}</h3>
              <p className="text-sm mt-2 opacity-80">{cls.desc}</p>
              <p className="text-xs font-semibold mt-4 opacity-60">{cls.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trainers */}
      <section className="bg-gradient-to-r from-green-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-green-500 mb-2">Meet the Crew</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Your Fave Coaches</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((t) => (
              <div key={t.name} className={`bg-white rounded-2xl p-8 border-4 ${t.color} text-center`}>
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-200 to-pink-200 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                <p className="text-sm font-semibold text-pink-500 mt-1">{t.specialty}</p>
                <p className="text-sm text-gray-500 mt-4 italic">&ldquo;{t.vibe}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-green-500 mb-2">Simple Pricing</p>
          <h2 className="text-4xl font-extrabold text-gray-900">Pick Your Plan</h2>
          <p className="text-gray-500 mt-4">No contracts. No hidden fees. Just good vibes and great workouts.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`border-2 rounded-2xl p-8 ${plan.color} relative ${plan.popular ? "scale-105 shadow-xl" : ""}`}>
              {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs px-4 py-1 rounded-full font-semibold">Most Popular</span>}
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-green-500 font-bold">+</span> {f}
                  </li>
                ))}
              </ul>
              <span className={`block text-center py-3 rounded-full text-sm font-semibold cursor-pointer text-white transition-colors ${plan.accent} hover:opacity-90`}>Choose {plan.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Community / Social Proof */}
      <section className="bg-green-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="text-green-100 text-sm font-semibold mb-4">Our Community</p>
          <h2 className="text-5xl md:text-6xl font-extrabold">10,000+ happy members</h2>
          <p className="text-green-100 mt-6 max-w-lg mx-auto text-lg">and counting! Join the fastest-growing fitness community in Portland.</p>
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div>
              <p className="text-4xl font-extrabold">4.9</p>
              <p className="text-green-200 text-sm mt-1">Google Rating</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold">98%</p>
              <p className="text-green-200 text-sm mt-1">Would Recommend</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold">200+</p>
              <p className="text-green-200 text-sm mt-1">Classes per Week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun CTA */}
      <section className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">Ready to feel amazing?</h2>
          <p className="text-white/80 mt-4 text-lg">Your first class is on us. Seriously. Just show up and smile.</p>
          <div className="mt-8 flex justify-center gap-4">
            <span className="px-8 py-4 bg-white text-pink-600 font-bold rounded-full cursor-pointer hover:bg-pink-50 transition-colors text-lg">Claim Free Class</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-xl font-extrabold"><span className="text-green-400">happy</span><span className="text-pink-400">fit</span></span>
            <p className="text-sm text-gray-500 mt-1">821 NE Alberta St, Portland, OR 97211</p>
          </div>
          <div className="text-sm text-gray-500 space-x-6">
            <span className="cursor-pointer hover:text-white">Instagram</span>
            <span className="cursor-pointer hover:text-white">TikTok</span>
            <span className="cursor-pointer hover:text-white">YouTube</span>
            <span className="cursor-pointer hover:text-white">(503) 555-0176</span>
          </div>
          <p className="text-xs text-gray-600">&copy; 2026 HappyFit. All rights reserved. Stay awesome.</p>
        </div>
      </footer>
    </div>
  )
}
