export default function WellnessMinimalistDemo() {
  const services = [
    { name: "Yoga", description: "Vinyasa, Hatha, and Restorative classes for all levels. Build strength, flexibility, and inner calm.", icon: "🧘" },
    { name: "Meditation", description: "Guided and silent sessions to cultivate mindfulness, reduce stress, and sharpen mental clarity.", icon: "🌿" },
    { name: "Massage", description: "Therapeutic deep tissue and Swedish massage tailored to release tension and restore balance.", icon: "💆" },
    { name: "Acupuncture", description: "Traditional Chinese medicine techniques to promote natural healing and energy flow.", icon: "✨" },
  ];

  const practitioners = [
    { name: "Elena Vasquez", specialty: "Yoga & Breathwork", experience: "12 years", bio: "Certified in Ashtanga and Yin yoga with advanced training in pranayama techniques." },
    { name: "Marcus Chen", specialty: "Acupuncture & TCM", experience: "15 years", bio: "Licensed acupuncturist specializing in pain management and stress-related conditions." },
    { name: "Amara Osei", specialty: "Massage Therapy", experience: "9 years", bio: "Deep tissue and myofascial release specialist with a focus on chronic tension patterns." },
  ];

  const schedule = [
    { day: "Monday", classes: ["7:00 AM — Sunrise Yoga", "12:00 PM — Guided Meditation", "5:30 PM — Restorative Yoga"] },
    { day: "Tuesday", classes: ["8:00 AM — Hatha Flow", "1:00 PM — Acupuncture Sessions", "6:00 PM — Deep Tissue Massage"] },
    { day: "Wednesday", classes: ["7:00 AM — Vinyasa Power", "12:00 PM — Mindfulness Circle", "5:30 PM — Yin Yoga"] },
    { day: "Thursday", classes: ["8:00 AM — Gentle Yoga", "1:00 PM — Sound Healing", "6:00 PM — Swedish Massage"] },
    { day: "Friday", classes: ["7:00 AM — Sunrise Yoga", "12:00 PM — Guided Meditation", "4:00 PM — Community Class (Free)"] },
  ];

  const pricing = [
    { tier: "Drop-in", price: "$25", period: "per session", features: ["Any single class", "Mat rental included", "Towel service"] },
    { tier: "Monthly", price: "$89", period: "per month", features: ["8 classes per month", "10% off treatments", "Guest pass (1x/month)"] },
    { tier: "Unlimited", price: "$149", period: "per month", features: ["Unlimited classes", "20% off treatments", "Priority booking", "Free workshops"] },
  ];

  const testimonials = [
    { name: "Sarah M.", text: "Serenity completely changed my relationship with stress. The meditation sessions gave me tools I use every single day, and the yoga classes feel like coming home.", rating: 5 },
    { name: "David K.", text: "After years of chronic back pain, Marcus's acupuncture sessions finally brought relief. I went from weekly flare-ups to feeling like myself again.", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
        <span className="text-xl font-semibold tracking-[0.3em] text-gray-800">SERENITY</span>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#services" className="hover:text-green-600 transition-colors">Services</a>
          <a href="#practitioners" className="hover:text-green-600 transition-colors">Practitioners</a>
          <a href="#schedule" className="hover:text-green-600 transition-colors">Schedule</a>
          <a href="#pricing" className="hover:text-green-600 transition-colors">Pricing</a>
          <a href="#book" className="bg-green-600 text-white px-5 py-2 rounded-full text-sm hover:bg-green-700 transition-colors">Book Now</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-28 px-8 text-center" style={{ backgroundColor: "#e8f5e9" }}>
        <p className="text-sm tracking-[0.2em] text-green-700 uppercase mb-4">Wellness Studio & Healing Center</p>
        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">Find your balance</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8 font-light">A sanctuary for body and mind in the heart of the city. Reconnect with yourself through movement, stillness, and healing touch.</p>
        <a href="#book" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">Explore Our Services</a>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center text-gray-900 mb-4">Our Services</h2>
        <p className="text-center text-gray-500 mb-14 max-w-lg mx-auto">Holistic treatments designed to nurture every dimension of your wellbeing.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div key={s.name} className="border border-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">{s.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practitioners */}
      <section id="practitioners" className="py-20 px-8" style={{ backgroundColor: "#e8f5e9" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center text-gray-900 mb-14">Our Practitioners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {practitioners.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 mx-auto mb-5 flex items-center justify-center text-green-600 text-2xl font-light">{p.name.split(" ").map(n => n[0]).join("")}</div>
                <h3 className="text-lg font-medium text-gray-900">{p.name}</h3>
                <p className="text-green-600 text-sm mb-1">{p.specialty}</p>
                <p className="text-xs text-gray-400 mb-4">{p.experience} experience</p>
                <p className="text-sm text-gray-500 leading-relaxed">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center text-gray-900 mb-14">Weekly Schedule</h2>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-5 gap-4 min-w-[700px]">
            {schedule.map((day) => (
              <div key={day.day} className="border border-gray-100 rounded-xl p-5">
                <h4 className="font-medium text-gray-900 mb-4 text-sm tracking-wide">{day.day}</h4>
                {day.classes.map((cls) => (
                  <p key={cls} className="text-xs text-gray-500 mb-3 pb-3 border-b border-gray-50 last:border-0">{cls}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light text-center text-gray-900 mb-14">Membership Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan) => (
              <div key={plan.tier} className={`rounded-2xl p-8 text-center ${plan.tier === "Monthly" ? "bg-green-600 text-white ring-2 ring-green-600 scale-105" : "bg-white border border-gray-100"}`}>
                <h3 className="text-lg font-medium mb-2">{plan.tier}</h3>
                <div className="text-4xl font-light mb-1">{plan.price}</div>
                <p className={`text-sm mb-6 ${plan.tier === "Monthly" ? "text-green-100" : "text-gray-400"}`}>{plan.period}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className={`text-sm ${plan.tier === "Monthly" ? "text-green-50" : "text-gray-500"}`}>{f}</li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full text-sm font-medium transition-colors ${plan.tier === "Monthly" ? "bg-white text-green-600 hover:bg-green-50" : "bg-green-600 text-white hover:bg-green-700"}`}>Choose Plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-center text-gray-900 mb-14">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t) => (
            <div key={t.name} className="border-l-2 border-green-400 pl-6">
              <p className="text-gray-600 leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">{t.name}</span>
                <span className="text-yellow-400 text-sm">{"★".repeat(t.rating)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Book Now */}
      <section id="book" className="py-20 px-8" style={{ backgroundColor: "#e8f5e9" }}>
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-light text-center text-gray-900 mb-8">Book a Session</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border border-gray-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400" />
            <input type="email" placeholder="Email Address" className="w-full border border-gray-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400" />
            <select className="w-full border border-gray-200 rounded-xl px-5 py-3 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400">
              <option>Select a Service</option>
              <option>Yoga Class</option>
              <option>Meditation Session</option>
              <option>Massage Therapy</option>
              <option>Acupuncture</option>
            </select>
            <input type="date" className="w-full border border-gray-200 rounded-xl px-5 py-3 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400" />
            <textarea placeholder="Any notes or preferences..." rows={3} className="w-full border border-gray-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400" />
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition-colors text-sm font-medium">Request Booking</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-sm tracking-[0.3em] text-gray-800">SERENITY</span>
          <div className="flex gap-8 text-sm text-gray-400">
            <span>123 Willow Lane, Portland, OR 97201</span>
            <span>hello@serenitystudio.com</span>
            <span>(503) 555-0192</span>
          </div>
          <p className="text-xs text-gray-300">&copy; 2026 Serenity Wellness Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
