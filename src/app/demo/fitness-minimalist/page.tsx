export default function FitnessMinimalistDemo() {
  const navLinks = ["Classes", "Trainers", "Membership", "Contact"]

  const classes = [
    { name: "HIIT", time: "Mon / Wed / Fri — 6:00 AM", duration: "45 min", level: "All Levels" },
    { name: "Yoga Flow", time: "Tue / Thu — 7:00 AM", duration: "60 min", level: "Beginner" },
    { name: "Spin", time: "Mon / Wed / Fri — 12:00 PM", duration: "45 min", level: "Intermediate" },
    { name: "Boxing", time: "Tue / Thu / Sat — 5:30 PM", duration: "60 min", level: "All Levels" },
    { name: "Pilates", time: "Mon / Wed — 9:00 AM", duration: "50 min", level: "Beginner" },
    { name: "CrossFit", time: "Tue / Thu / Sat — 6:30 AM", duration: "60 min", level: "Advanced" },
  ]

  const trainers = [
    { name: "Marcus Chen", specialty: "Strength & Conditioning", experience: "12 years", cert: "CSCS, NSCA-CPT" },
    { name: "Ava Rodriguez", specialty: "Yoga & Mobility", experience: "8 years", cert: "RYT-500, FMS" },
    { name: "Derek Williams", specialty: "Boxing & HIIT", experience: "10 years", cert: "NASM-CPT, USA Boxing" },
  ]

  const plans = [
    { name: "Basic", price: "$29", period: "/month", features: ["Gym floor access", "Locker room", "2 group classes/week", "Basic fitness assessment"] },
    { name: "Standard", price: "$49", period: "/month", features: ["Unlimited gym access", "All group classes", "1 personal training session/month", "Nutrition guide", "Sauna access"], popular: true },
    { name: "Premium", price: "$79", period: "/month", features: ["24/7 unlimited access", "All group classes", "4 personal training sessions/month", "Custom meal plan", "Recovery suite", "Guest passes"] },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-slate-900">IRON<span className="text-red-500">FORGE</span></span>
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <span key={link} className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">{link}</span>
            ))}
          </div>
          <span className="px-5 py-2 bg-red-500 text-white text-sm font-medium cursor-pointer hover:bg-red-600 transition-colors">Join Now</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="h-[70vh] bg-gradient-to-br from-slate-100 via-white to-slate-50 flex items-center justify-center">
          <div className="text-center max-w-2xl px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-red-500 mb-6 font-medium">Est. 2019 — Downtown Portland</p>
            <h1 className="text-5xl md:text-6xl font-light text-slate-900 leading-tight">Transform your body,<br />transform your life.</h1>
            <p className="text-lg text-slate-500 font-light mt-8 max-w-md mx-auto leading-relaxed">Functional training, expert coaching, and a community that pushes you to be your best — every single day.</p>
            <div className="mt-10 flex justify-center gap-4">
              <span className="inline-block px-8 py-3 bg-slate-900 text-white text-sm cursor-pointer hover:bg-slate-800 transition-colors">Start Free Trial</span>
              <span className="inline-block px-8 py-3 border border-slate-300 text-slate-700 text-sm cursor-pointer hover:border-slate-500 transition-colors">View Schedule</span>
            </div>
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-red-500 mb-3 font-medium">Weekly Schedule</p>
          <h2 className="text-4xl font-light text-slate-900">Class Schedule</h2>
          <p className="text-slate-500 mt-4 font-light">Six signature classes designed to challenge every part of your fitness</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <div key={cls.name} className="border border-slate-100 p-6 hover:border-red-200 transition-colors">
              <h3 className="text-lg font-semibold text-slate-900 mb-1">{cls.name}</h3>
              <p className="text-sm text-slate-400 mb-3">{cls.time}</p>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">{cls.duration}</span>
                <span className="text-red-500 font-medium">{cls.level}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trainers */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-red-500 mb-3 font-medium">Expert Team</p>
            <h2 className="text-4xl font-light text-slate-900">Our Trainers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <div key={trainer.name} className="bg-white p-8 border border-slate-100">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 mb-6" />
                <h3 className="text-lg font-semibold text-slate-900">{trainer.name}</h3>
                <p className="text-red-500 text-sm font-medium mt-1">{trainer.specialty}</p>
                <p className="text-sm text-slate-400 mt-3">{trainer.experience} experience</p>
                <p className="text-xs text-slate-400 mt-1">{trainer.cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-red-500 mb-3 font-medium">Pricing</p>
          <h2 className="text-4xl font-light text-slate-900">Membership Plans</h2>
          <p className="text-slate-500 mt-4 font-light">No contracts. Cancel anytime. Start with a free 7-day trial.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`border p-8 ${plan.popular ? "border-red-500 relative" : "border-slate-100"}`}>
              {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs px-4 py-1 font-medium">Most Popular</span>}
              <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-light text-slate-900">{plan.price}</span>
                <span className="text-slate-400 text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-slate-500 flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">&#10003;</span> {f}
                  </li>
                ))}
              </ul>
              <span className={`block text-center py-3 text-sm cursor-pointer transition-colors ${plan.popular ? "bg-red-500 text-white hover:bg-red-600" : "bg-slate-900 text-white hover:bg-slate-800"}`}>Get Started</span>
            </div>
          ))}
        </div>
      </section>

      {/* Join Form */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-red-400 mb-3">Get Started</p>
          <h2 className="text-4xl font-light mb-4">Ready to Transform?</h2>
          <p className="text-slate-400 font-light mb-10 max-w-md mx-auto">Sign up for your free 7-day trial. No credit card required. Just show up and put in the work.</p>
          <div className="max-w-md mx-auto grid grid-cols-2 gap-4 mb-6">
            <input type="text" placeholder="First Name" className="px-4 py-3 bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 outline-none focus:border-red-500" readOnly />
            <input type="text" placeholder="Last Name" className="px-4 py-3 bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 outline-none focus:border-red-500" readOnly />
            <input type="text" placeholder="Email Address" className="col-span-2 px-4 py-3 bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 outline-none focus:border-red-500" readOnly />
            <input type="text" placeholder="Phone" className="col-span-2 px-4 py-3 bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 outline-none focus:border-red-500" readOnly />
          </div>
          <span className="inline-block px-10 py-3 bg-red-500 hover:bg-red-600 text-white text-sm cursor-pointer transition-colors font-medium">Claim Free Trial</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-lg font-bold tracking-tight text-slate-900">IRON<span className="text-red-500">FORGE</span></span>
            <p className="text-sm text-slate-400 mt-1">523 SE Division St, Portland, OR 97202</p>
          </div>
          <div className="text-sm text-slate-400 space-x-8">
            <span className="cursor-pointer hover:text-slate-700">Instagram</span>
            <span className="cursor-pointer hover:text-slate-700">YouTube</span>
            <span className="cursor-pointer hover:text-slate-700">(503) 555-0187</span>
          </div>
          <p className="text-xs text-slate-300">&copy; 2026 IronForge Fitness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
