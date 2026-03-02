export default function FitnessLuxuryDemo() {
  const navLinks = ["Amenities", "Membership", "Trainers", "Experience"]

  const amenities = [
    { name: "Aquatic Center", icon: "POOL", desc: "A 25-meter heated lap pool with underwater lighting, a hydrotherapy spa, and a cold plunge circuit. Private swim lessons and aqua fitness classes available by appointment." },
    { name: "Spa & Recovery", icon: "SPA", desc: "Full-service spa featuring infrared saunas, eucalyptus steam rooms, cryotherapy, and licensed massage therapists. Complimentary with Platinum and Black memberships." },
    { name: "Personal Training Suites", icon: "PT", desc: "Private, sound-insulated training rooms with premium equipment. Each suite is reserved exclusively for you and your trainer during your session." },
    { name: "The Brasserie", icon: "DINE", desc: "An in-club restaurant serving chef-prepared meals designed by our sports nutritionist. Organic ingredients, performance-focused menus, and a curated wine selection." },
  ]

  const tiers = [
    { name: "Gold", price: "$295", period: "/month", features: ["Full gym and pool access", "Group fitness classes", "Locker with laundry service", "Guest passes (2/month)", "Brasserie dining (10% off)"] },
    { name: "Platinum", price: "$495", period: "/month", features: ["Everything in Gold", "Personal training (4 sessions/mo)", "Spa & recovery access", "Priority class booking", "Brasserie dining (25% off)", "Valet parking"], popular: true },
    { name: "Black", price: "$895", period: "/month", features: ["Everything in Platinum", "Unlimited personal training", "Private training suite", "In-home training sessions", "Full spa & cryo included", "Concierge services", "Exclusive member events"] },
  ]

  const trainers = [
    { name: "Isabelle Fontaine", specialty: "Barre & Pilates Sculpt", bio: "Classically trained dancer turned fitness expert. Isabelle brings precision, grace, and an eye for posture correction to every session. Certified in STOTT Pilates and Xtend Barre.", years: "14 years" },
    { name: "Darius Cole", specialty: "Strength & Hypertrophy", bio: "Former professional rugby player with a degree in exercise science. Darius designs evidence-based programs for clients seeking aesthetic and athletic results.", years: "10 years" },
    { name: "Ayumi Tanaka", specialty: "Holistic Wellness & Yoga", bio: "500-hour RYT with training in Ayurvedic medicine. Ayumi integrates breathwork, meditation, and movement to help clients find balance in demanding lifestyles.", years: "12 years" },
  ]

  const experiences = [
    { title: "Morning Rituals", time: "6:00 AM", desc: "Begin your day with sunrise yoga on our rooftop terrace, followed by a cold plunge and a fresh-pressed juice from The Brasserie." },
    { title: "Performance Hour", time: "12:00 PM", desc: "A midday training session in your private suite, followed by a recovery circuit through the sauna, steam, and cryotherapy." },
    { title: "Evening Retreat", time: "7:00 PM", desc: "Wind down with a 60-minute deep tissue massage, a eucalyptus steam session, and a three-course performance dinner." },
  ]

  return (
    <div style={{ fontFamily: "'Josefin Sans', sans-serif" }} className="min-h-screen text-white" >
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Sleek Nav */}
      <nav className="flex items-center justify-between px-10 py-6" style={{ backgroundColor: "#1c1917" }}>
        <div className="text-2xl font-light tracking-widest" style={{ color: "#d4a053" }}>&Eacute;lite Athletics Club</div>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-sm font-light tracking-wider text-gray-400 hover:text-white transition-colors">{link}</a>
          ))}
        </div>
        <button className="text-xs font-semibold tracking-widest px-6 py-2 border" style={{ borderColor: "#d4a053", color: "#d4a053" }}>INQUIRE</button>
      </nav>

      {/* Premium Hero */}
      <section className="py-32 px-8 text-center" style={{ backgroundColor: "#1c1917" }}>
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: "#d4a053" }} />
          <p className="text-sm font-light tracking-[0.3em] uppercase mb-6" style={{ color: "#d4a053" }}>Members-Only Athletic Club</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">Where Excellence<br />Meets Exclusivity</h1>
          <p className="text-lg font-light text-gray-400 mb-10 max-w-xl mx-auto">A private fitness sanctuary for those who demand the finest in training, recovery, and lifestyle. Limited to 300 members.</p>
          <div className="flex gap-6 justify-center">
            <button className="text-sm font-semibold tracking-wider px-8 py-3" style={{ backgroundColor: "#d4a053", color: "#1c1917" }}>Request Membership</button>
            <button className="text-sm font-light tracking-wider px-8 py-3 border border-gray-700 text-gray-300">Virtual Tour</button>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-24 px-8" style={{ backgroundColor: "#141210" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-light tracking-[0.3em] uppercase mb-3" style={{ color: "#d4a053" }}>Club Amenities</p>
          <h2 className="text-3xl font-light mb-16">Every Detail, Considered</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {amenities.map((a) => (
              <div key={a.name} className="flex gap-6">
                <div className="w-14 h-14 border flex-shrink-0 flex items-center justify-center text-xs font-semibold tracking-wider" style={{ borderColor: "#d4a053", color: "#d4a053" }}>{a.icon}</div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{a.name}</h3>
                  <p className="text-sm font-light text-gray-400 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-24 px-8" style={{ backgroundColor: "#1c1917" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-light tracking-[0.3em] uppercase mb-3 text-center" style={{ color: "#d4a053" }}>Membership</p>
          <h2 className="text-3xl font-light mb-16 text-center">Select Your Tier</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((t) => (
              <div key={t.name} className={`p-10 border ${t.popular ? "border-opacity-100" : "border-gray-800"}`} style={t.popular ? { borderColor: "#d4a053" } : {}}>
                {t.popular && <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "#d4a053" }}>Recommended</p>}
                <h3 className="text-2xl font-light mb-3">{t.name}</h3>
                <p className="text-4xl font-light mb-1">{t.price}<span className="text-sm text-gray-500">{t.period}</span></p>
                <div className="w-8 h-px my-6" style={{ backgroundColor: "#d4a053" }} />
                <ul className="space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="text-sm font-light text-gray-400 flex items-start gap-3">
                      <span className="mt-1 text-xs" style={{ color: "#d4a053" }}>&#9670;</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-10 w-full py-3 text-sm font-semibold tracking-wider" style={t.popular ? { backgroundColor: "#d4a053", color: "#1c1917" } : { border: "1px solid #d4a053", color: "#d4a053" }}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 px-8 text-center" style={{ backgroundColor: "#d4a053" }}>
        <h2 className="text-4xl font-light mb-4" style={{ color: "#1c1917" }}>Experience the Club</h2>
        <p className="text-base mb-8" style={{ color: "#3d2e15" }}>Take an immersive virtual walkthrough of our facilities, from the training floor to The Brasserie.</p>
        <button className="text-sm font-semibold tracking-wider px-10 py-3" style={{ backgroundColor: "#1c1917", color: "#d4a053" }}>Start Virtual Tour</button>
      </section>

      {/* Personal Trainers */}
      <section className="py-24 px-8" style={{ backgroundColor: "#141210" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-light tracking-[0.3em] uppercase mb-3" style={{ color: "#d4a053" }}>Our Trainers</p>
          <h2 className="text-3xl font-light mb-16">World-Class Expertise</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {trainers.map((t) => (
              <div key={t.name} className="border-t pt-8" style={{ borderColor: "#d4a053" }}>
                <h3 className="text-xl font-medium mb-1">{t.name}</h3>
                <p className="text-sm mb-1" style={{ color: "#d4a053" }}>{t.specialty}</p>
                <p className="text-xs text-gray-600 mb-4">{t.years}</p>
                <p className="text-sm font-light text-gray-400 leading-relaxed">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Club Experience */}
      <section className="py-24 px-8" style={{ backgroundColor: "#1c1917" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-light tracking-[0.3em] uppercase mb-3" style={{ color: "#d4a053" }}>A Day at &Eacute;lite</p>
          <h2 className="text-3xl font-light mb-16">The Club Experience</h2>
          <div className="space-y-12">
            {experiences.map((e) => (
              <div key={e.title} className="flex gap-8 items-start">
                <div className="text-sm font-light tracking-wider flex-shrink-0 w-24 text-right" style={{ color: "#d4a053" }}>{e.time}</div>
                <div className="w-px h-16 flex-shrink-0" style={{ backgroundColor: "#d4a053" }} />
                <div>
                  <h3 className="text-lg font-medium mb-2">{e.title}</h3>
                  <p className="text-sm font-light text-gray-400 leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refined Footer */}
      <footer className="py-12 px-10 border-t border-gray-800" style={{ backgroundColor: "#1c1917" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-lg font-light tracking-widest" style={{ color: "#d4a053" }}>&Eacute;lite Athletics Club</div>
          <p className="text-xs font-light text-gray-600 text-center">One Park Avenue, Penthouse Level &mdash; By appointment and membership only</p>
          <a href="#" className="text-xs font-semibold tracking-wider" style={{ color: "#d4a053" }}>Membership Inquiry &rarr;</a>
        </div>
        <p className="text-center text-xs text-gray-700 mt-8">&copy; 2025 &Eacute;lite Athletics Club. All rights reserved.</p>
      </footer>
    </div>
  )
}
