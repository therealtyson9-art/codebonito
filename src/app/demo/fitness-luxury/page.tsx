export default function FitnessLuxuryDemo() {
  const navLinks = ["Programs", "Membership", "Facilities", "Trainers"]

  const programs = [
    { name: "Personal Concierge Training", desc: "Your dedicated performance coach designs every session around your evolving goals, recovery status, and schedule. Available at your convenience, in-club or private residence." },
    { name: "Recovery Suite", desc: "Cryotherapy, infrared sauna, compression therapy, and cold plunge protocols guided by our recovery specialists. Restore, recover, repeat." },
    { name: "Private Coaching", desc: "One-on-one instruction in a private studio with soundproofing and dedicated equipment. Zero distractions. Maximum focus." },
    { name: "Nutrition Planning", desc: "Board-certified nutritionists create bespoke meal plans calibrated to your training load, preferences, and biomarker data." },
  ]

  const tiers = [
    { name: "Elite", price: "$199", period: "/month", features: ["Full facility access", "Group classes", "Recovery suite (4x/month)", "Valet parking", "Towel service & amenities"], tier: "I" },
    { name: "Platinum", price: "$349", period: "/month", features: ["Everything in Elite", "8 personal training sessions", "Unlimited recovery suite", "Nutrition consultation", "Guest privileges", "Priority booking"], popular: true, tier: "II" },
    { name: "Royal", price: "$599", period: "/month", features: ["Everything in Platinum", "Unlimited personal training", "Private studio access", "Concierge scheduling", "Quarterly health assessment", "Complimentary spa services", "Private locker"], tier: "III" },
  ]

  const trainers = [
    { name: "Alexander Voss", title: "Director of Performance", background: "Former Olympic athletics coach. 18 years of elite-level programming for executives and professional athletes." },
    { name: "Isabella Thornton", title: "Head of Recovery Science", background: "Doctorate in Sports Physiology from Stanford. Specializes in longevity protocols and regenerative wellness." },
    { name: "David Nakamura", title: "Senior Training Specialist", background: "Certified Strength & Conditioning Specialist with 14 years training Fortune 500 executives and touring artists." },
  ]

  const facilities = [
    "25,000 sq ft premium training floor",
    "Olympic-grade free weight section",
    "Private coaching studios",
    "Infrared sauna & cold plunge suite",
    "Cryotherapy chamber",
    "Eucalyptus steam room",
    "Members-only lounge & cafe",
    "Valet parking",
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
          <span className="text-xl tracking-[0.2em] font-light" style={{ color: "#d4af37" }}>AURUM</span>
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <span key={link} className="text-sm text-white/40 hover:text-white cursor-pointer transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>{link}</span>
            ))}
          </div>
          <span className="px-6 py-2.5 text-sm tracking-wider cursor-pointer transition-colors border" style={{ fontFamily: "Inter, sans-serif", borderColor: "#d4af37", color: "#d4af37" }}>Request Membership</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="h-[80vh] bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f] flex items-center justify-center">
          <div className="text-center max-w-3xl px-6">
            <p className="text-xs tracking-[0.4em] uppercase mb-8" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>Portland&apos;s Premier Private Fitness Club</p>
            <h1 className="text-5xl md:text-7xl font-light leading-tight">Elevate your<br />performance.</h1>
            <p className="text-lg text-white/40 font-light mt-8 max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>Where world-class training meets uncompromising luxury. By invitation and application only.</p>
            <div className="mt-12 flex justify-center gap-6">
              <span className="inline-block px-10 py-4 text-sm tracking-wider cursor-pointer transition-colors" style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#d4af37", color: "#0a0a0f" }}>Schedule a Private Tour</span>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Programs */}
      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-28">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>Our Programs</p>
            <h2 className="text-4xl font-light">Elite Training Experiences</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {programs.map((prog) => (
              <div key={prog.name} className="border border-white/10 p-10 hover:border-white/20 transition-colors">
                <div className="w-px h-8 mb-8" style={{ backgroundColor: "#d4af37" }} />
                <h3 className="text-xl font-light mb-4">{prog.name}</h3>
                <p className="text-sm text-white/40 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="bg-[#08080d] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-28">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>Membership</p>
            <h2 className="text-4xl font-light">Select Your Tier</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div key={tier.name} className={`border p-10 ${tier.popular ? "border-[#d4af37]" : "border-white/10"} relative`}>
                {tier.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-6 py-1 tracking-wider" style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#d4af37", color: "#0a0a0f" }}>Recommended</span>}
                <p className="text-xs text-white/20 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>TIER {tier.tier}</p>
                <h3 className="text-2xl font-light">{tier.name}</h3>
                <div className="mt-6 mb-8">
                  <span className="text-4xl font-light" style={{ color: "#d4af37" }}>{tier.price}</span>
                  <span className="text-white/30 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-10">
                  {tier.features.map((f) => (
                    <li key={f} className="text-sm text-white/50 flex items-start gap-3" style={{ fontFamily: "Inter, sans-serif" }}>
                      <span style={{ color: "#d4af37" }}>&#8212;</span> {f}
                    </li>
                  ))}
                </ul>
                <span className={`block text-center py-3 text-sm tracking-wider cursor-pointer transition-colors ${tier.popular ? "text-[#0a0a0f]" : "text-white border border-white/20 hover:border-white/40"}`} style={{ fontFamily: "Inter, sans-serif", ...(tier.popular ? { backgroundColor: "#d4af37" } : {}) }}>Apply Now</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-28">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>The Club</p>
              <h2 className="text-4xl font-light mb-8">A Space Unlike Any Other</h2>
              <p className="text-sm text-white/40 leading-relaxed mb-10" style={{ fontFamily: "Inter, sans-serif" }}>Every detail of Aurum has been designed to elevate your training experience. From the hand-selected equipment to the curated ambient environment, this is a space built for focused, purposeful work.</p>
              <ul className="space-y-3">
                {facilities.map((f) => (
                  <li key={f} className="text-sm text-white/50 flex items-start gap-3" style={{ fontFamily: "Inter, sans-serif" }}>
                    <span style={{ color: "#d4af37" }}>&#9670;</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[500px] bg-gradient-to-b from-[#1a1a25] to-[#0d0d14] border border-white/5" />
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="bg-[#08080d] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-28">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>Our Team</p>
            <h2 className="text-4xl font-light">World-Class Professionals</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {trainers.map((t) => (
              <div key={t.name} className="text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-8 bg-gradient-to-b from-[#1a1a25] to-[#0d0d14] border border-white/10" />
                <h3 className="text-xl font-light">{t.name}</h3>
                <p className="text-xs tracking-wider mt-2" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>{t.title}</p>
                <p className="text-sm text-white/35 mt-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{t.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-lg tracking-[0.2em] font-light" style={{ color: "#d4af37" }}>AURUM</span>
            <p className="text-xs text-white/20 mt-3" style={{ fontFamily: "Inter, sans-serif" }}>1200 NW Marshall St, Portland, OR 97209</p>
            <p className="text-xs text-white/20 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>By appointment only</p>
          </div>
          <div className="text-xs text-white/20 space-x-8" style={{ fontFamily: "Inter, sans-serif" }}>
            <span className="cursor-pointer hover:text-white/50">Instagram</span>
            <span className="cursor-pointer hover:text-white/50">LinkedIn</span>
            <span className="cursor-pointer hover:text-white/50">(503) 555-0200</span>
          </div>
          <p className="text-xs text-white/10" style={{ fontFamily: "Inter, sans-serif" }}>&copy; 2026 Aurum Private Fitness Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
