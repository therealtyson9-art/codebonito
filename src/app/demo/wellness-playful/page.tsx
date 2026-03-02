export default function WellnessPlayfulDemo() {
  const services = [
    { name: "Happy Spine Yoga", description: "Flow through feel-good sequences that leave your back thanking you. All levels welcome, modifications always offered!", icon: "🌈", color: "bg-purple-100 border-purple-300" },
    { name: "Chill Out Meditation", description: "Guided sessions that actually work for busy brains. No pressure to empty your mind, just learn to ride the waves.", icon: "🌸", color: "bg-pink-100 border-pink-300" },
    { name: "Glow-Up Facials", description: "Natural, plant-based skincare treatments that leave your face feeling like it just had the best nap ever.", icon: "✨", color: "bg-amber-100 border-amber-300" },
    { name: "Energy Healing", description: "Reiki and crystal therapy sessions to rebalance your vibes. Skeptics welcome, you might just become a believer!", icon: "💎", color: "bg-teal-100 border-teal-300" },
    { name: "Sound Bath", description: "Lie down, close your eyes, and let singing bowls wash your stress away. Napping is absolutely encouraged.", icon: "🎵", color: "bg-blue-100 border-blue-300" },
    { name: "Nutrition Glow-Up", description: "Work with a nutritionist who actually likes food. Meal plans that taste amazing and make you feel unstoppable.", icon: "🥑", color: "bg-green-100 border-green-300" },
  ];

  const practitioners = [
    { name: "Sunny Delgado", title: "Yoga & Movement Guide", vibe: "Warm, encouraging, always has the best playlist", specialties: ["Vinyasa Flow", "Prenatal Yoga", "Dance Movement"], color: "border-purple-400" },
    { name: "Kai Nakamura", title: "Meditation & Reiki Master", vibe: "Calm energy, gentle humor, surprisingly great storyteller", specialties: ["Guided Meditation", "Reiki Level III", "Crystal Healing"], color: "border-orange-400" },
    { name: "Priya Sharma", title: "Holistic Nutritionist", vibe: "Foodie at heart, zero judgment, science-backed advice", specialties: ["Gut Health", "Plant-Based Nutrition", "Intuitive Eating"], color: "border-teal-400" },
  ];

  const tips = [
    { tip: "Drink a glass of water before your morning coffee. Your body has been fasting all night and needs hydration first!", category: "Hydration" },
    { tip: "Try the 4-7-8 breathing technique before bed: inhale 4 seconds, hold 7, exhale 8. Better than counting sheep!", category: "Sleep" },
    { tip: "Take a 10-minute walk after lunch. It aids digestion, boosts energy, and gives your brain a creative reset.", category: "Movement" },
    { tip: "Put your phone in another room 30 minutes before sleep. Your melatonin production will thank you.", category: "Digital Wellness" },
  ];

  const events = [
    { name: "Full Moon Yoga on the Rooftop", date: "March 14, 2026", time: "7:30 PM", spots: "18 spots left", tag: "Popular" },
    { name: "Spring Cleanse Workshop", date: "March 22, 2026", time: "10:00 AM", spots: "12 spots left", tag: "New" },
    { name: "Sound Bath + Cacao Ceremony", date: "April 5, 2026", time: "6:00 PM", spots: "25 spots left", tag: "Special" },
    { name: "Community Potluck & Meditation", date: "April 12, 2026", time: "12:00 PM", spots: "Open to all", tag: "Free" },
  ];

  const memberships = [
    { name: "Bloom", price: "$59", period: "/month", tagline: "Perfect for getting started", features: ["4 classes per month", "10% off treatments", "Access to wellness tips library", "Birthday month free class"], color: "from-purple-400 to-pink-400" },
    { name: "Radiance", price: "$99", period: "/month", tagline: "Our most popular plan!", features: ["Unlimited classes", "20% off treatments", "Priority event booking", "Monthly wellness gift", "Guest pass (2x/month)"], color: "from-orange-400 to-pink-500" },
    { name: "Supernova", price: "$159", period: "/month", tagline: "The ultimate glow-up", features: ["Unlimited everything", "1 free treatment/month", "VIP event access", "Quarterly wellness consultation", "Exclusive merch drops", "Bring a friend free"], color: "from-teal-400 to-blue-500" },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5">
        <span className="text-xl font-bold text-gray-800">🪷 Lotus &amp; Light</span>
        <div className="hidden md:flex items-center gap-7 text-sm text-gray-600 font-medium">
          <a href="#services" className="hover:text-purple-500 transition-colors">Services</a>
          <a href="#team" className="hover:text-purple-500 transition-colors">Our Team</a>
          <a href="#events" className="hover:text-purple-500 transition-colors">Events</a>
          <a href="#membership" className="hover:text-purple-500 transition-colors">Membership</a>
          <a href="#book" className="text-white px-5 py-2.5 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all">Book a Session</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-8 text-center bg-gradient-to-b from-purple-50 via-pink-50 to-white">
        <div className="text-6xl mb-6">🌟</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">Glow from the inside out!</h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8 font-light leading-relaxed">Your neighborhood wellness spot where healing feels fun, self-care is never selfish, and everyone belongs.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#services" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-7 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">Explore Services</a>
          <a href="#events" className="border-2 border-purple-300 text-purple-600 px-7 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">Upcoming Events</a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">What We Offer</h2>
          <p className="text-center text-gray-400 mb-12">Good vibes and great services, all in one place.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name} className={`${s.color} border-2 rounded-2xl p-7 hover:scale-[1.02] transition-transform`}>
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{s.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practitioners */}
      <section id="team" className="py-20 px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Your Guides</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {practitioners.map((p) => (
              <div key={p.name} className={`bg-white rounded-2xl p-7 border-l-4 ${p.color} shadow-sm`}>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 mb-4 flex items-center justify-center text-2xl font-bold text-purple-600">{p.name[0]}</div>
                <h3 className="text-lg font-bold text-gray-800">{p.name}</h3>
                <p className="text-sm font-medium text-purple-500 mb-2">{p.title}</p>
                <p className="text-xs text-gray-400 italic mb-4">&ldquo;{p.vibe}&rdquo;</p>
                <div className="flex flex-wrap gap-2">
                  {p.specialties.map((s) => (
                    <span key={s} className="bg-purple-50 text-purple-600 text-xs px-3 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Tips */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">Daily Wellness Tips</h2>
          <p className="text-center text-gray-400 mb-12">Small changes, big glow-ups.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {tips.map((t) => (
              <div key={t.category} className="flex gap-4 bg-gray-50 rounded-2xl p-6">
                <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold">{t.category[0]}</div>
                <div>
                  <span className="text-xs font-semibold text-purple-500 uppercase tracking-wider">{t.category}</span>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{t.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section id="events" className="py-20 px-8 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Community Events</h2>
          <div className="space-y-4">
            {events.map((e) => (
              <div key={e.name} className="bg-white rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm border border-gray-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-800">{e.name}</h3>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${e.tag === "Popular" ? "bg-pink-100 text-pink-600" : e.tag === "New" ? "bg-purple-100 text-purple-600" : e.tag === "Free" ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"}`}>{e.tag}</span>
                  </div>
                  <p className="text-sm text-gray-400">{e.date} at {e.time} &middot; {e.spots}</p>
                </div>
                <button className="shrink-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-md transition-shadow">Reserve Spot</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">Membership Plans</h2>
          <p className="text-center text-gray-400 mb-12">Pick your glow level. Upgrade anytime!</p>
          <div className="grid md:grid-cols-3 gap-6">
            {memberships.map((m) => (
              <div key={m.name} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl transition-shadow text-center">
                <div className={`inline-block bg-gradient-to-r ${m.color} text-white text-xs px-4 py-1 rounded-full font-semibold mb-4`}>{m.tagline}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{m.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="text-3xl font-bold text-gray-900">{m.price}</span>
                  <span className="text-sm text-gray-400">{m.period}</span>
                </div>
                <ul className="space-y-2.5 mb-8 text-left">
                  {m.features.map((f) => (
                    <li key={f} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${m.color} hover:shadow-lg transition-shadow`}>Join {m.name}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Clients */}
      <section className="py-16 px-8 bg-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Happy Community</h2>
          <div className="flex justify-center gap-3 mb-6">
            {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
              <div key={letter} className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-300 to-pink-300 flex items-center justify-center text-white font-bold text-sm -ml-2 first:ml-0 border-2 border-white">{letter}</div>
            ))}
          </div>
          <p className="text-gray-500 text-sm">Join 800+ members who chose to prioritize their wellbeing</p>
        </div>
      </section>

      {/* Book CTA */}
      <section id="book" className="py-20 px-8">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-5xl mb-4">🪷</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Ready to start your glow-up?</h2>
          <p className="text-gray-400 mb-8">Book your first session and feel the difference. New clients get 20% off!</p>
          <form className="space-y-4 text-left">
            <input type="text" placeholder="Your Name" className="w-full border-2 border-purple-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-purple-400 transition-colors" />
            <input type="email" placeholder="Email Address" className="w-full border-2 border-purple-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-purple-400 transition-colors" />
            <select className="w-full border-2 border-purple-200 rounded-xl px-5 py-3 text-sm text-gray-500 focus:outline-none focus:border-purple-400 transition-colors">
              <option>What are you interested in?</option>
              <option>Happy Spine Yoga</option>
              <option>Chill Out Meditation</option>
              <option>Glow-Up Facials</option>
              <option>Energy Healing</option>
              <option>Sound Bath</option>
              <option>Nutrition Glow-Up</option>
            </select>
            <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3.5 rounded-full font-semibold hover:shadow-lg transition-shadow">Book My Session</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-lg font-bold text-gray-800">🪷 Lotus &amp; Light</span>
          <div className="flex gap-6 text-sm text-gray-400">
            <span>456 Blossom Street, Austin, TX 78701</span>
            <span>hello@lotusandlight.co</span>
            <span>(512) 555-0273</span>
          </div>
          <p className="text-xs text-gray-300">&copy; 2026 Lotus &amp; Light Wellness. Spread good vibes.</p>
        </div>
      </footer>
    </div>
  );
}
