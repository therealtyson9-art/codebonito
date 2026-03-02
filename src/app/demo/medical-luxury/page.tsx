export default function MedicalLuxuryDemo() {
  const navLinks = ["Services", "Membership", "Physicians", "Private Facility"]
  const services = [
    { title: "Personal Physician", desc: "A dedicated, board-certified physician available around the clock. Direct cell phone access, same-day appointments, and unhurried visits lasting 60 minutes or more." },
    { title: "Executive Health Assessment", desc: "A comprehensive full-day evaluation including advanced cardiac imaging, metabolic panels, cancer biomarkers, cognitive screening, and a personalized longevity plan." },
    { title: "Genomic & Precision Medicine", desc: "Whole-genome sequencing with pharmacogenomic analysis. Understand your genetic predispositions and receive a tailored prevention strategy." },
    { title: "Regenerative & Anti-Aging", desc: "Evidence-based regenerative therapies including NAD+ infusions, peptide protocols, hormone optimization, and advanced skin rejuvenation treatments." },
  ]
  const tiers = [
    { name: "Silver", price: "$18,000", period: "per year", features: ["Dedicated personal physician", "Same-day appointments", "Annual executive health screening", "24/7 physician phone access", "Expedited specialist referrals"], highlight: false },
    { name: "Gold", price: "$36,000", period: "per year", features: ["Everything in Silver", "Quarterly comprehensive labs", "Genomic sequencing & analysis", "In-home physician visits", "Global medical evacuation coverage", "Spouse included at no extra cost"], highlight: true },
    { name: "Platinum", price: "$72,000", period: "per year", features: ["Everything in Gold", "Full family coverage (up to 4)", "Annual executive retreat & screening", "Regenerative medicine protocols", "Private suite for all procedures", "Dedicated health concierge team", "Travel medicine & itinerary review"], highlight: false },
  ]
  const physicians = [
    { name: "Dr. Alexander Sterling", specialty: "Internal Medicine & Longevity", credentials: "MD, MPH, FACP", bg: "bg-stone-800" },
    { name: "Dr. Isabelle Fontaine", specialty: "Precision Genomics", credentials: "MD, PhD, FACMG", bg: "bg-stone-700" },
    { name: "Dr. William Hargrove", specialty: "Cardiology & Executive Health", credentials: "MD, FACC", bg: "bg-stone-800" },
  ]
  const facilities = [
    { name: "Private Consultation Suite", desc: "Elegantly appointed rooms with noise isolation, ambient lighting, and premium furnishings." },
    { name: "Advanced Imaging Center", desc: "3T MRI, cardiac CT, and full-body composition scanning in a private, serene environment." },
    { name: "Infusion & Recovery Lounge", desc: "Individual bays with heated recliners, organic refreshments, and personal entertainment systems." },
    { name: "Executive Fitness Lab", desc: "VO2 max testing, DEXA body composition, and personalized exercise physiology consultations." },
  ]

  return (
    <div className="min-h-screen text-stone-300" style={{ fontFamily: "'Playfair Display', serif", backgroundColor: "#0a0a0f" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="border-b border-stone-800/50">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-2xl font-medium tracking-wide" style={{ color: "#d4af37" }}>Aurum</span>
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <span key={link} className="text-xs tracking-[0.2em] uppercase cursor-pointer text-stone-500 hover:text-stone-200" style={{ fontFamily: "Inter, sans-serif" }}>{link}</span>
            ))}
          </div>
          <span className="text-xs tracking-[0.2em] uppercase px-6 py-2.5 border cursor-pointer transition-all hover:text-stone-950" style={{ fontFamily: "Inter, sans-serif", borderColor: "#d4af37", color: "#d4af37" }}>Request Consultation</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="text-xs tracking-[0.4em] uppercase mb-8 opacity-60" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>By Invitation &middot; Membership-Based &middot; Concierge Medicine</div>
        <h1 className="text-5xl md:text-7xl font-medium text-white leading-tight mb-6">
          Exclusive healthcare,<br /><em style={{ color: "#d4af37" }}>redefined.</em>
        </h1>
        <p className="text-lg text-stone-400 max-w-lg mx-auto leading-relaxed mb-12" style={{ fontFamily: "Inter, sans-serif" }}>
          A private medical practice limited to 200 members, offering the most personalized and comprehensive care available.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <span className="h-13 px-10 py-3 flex items-center text-sm tracking-[0.15em] uppercase font-medium text-stone-950 cursor-pointer transition-colors" style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#d4af37" }}>Apply for Membership</span>
          <span className="h-13 px-10 py-3 flex items-center text-sm tracking-[0.15em] uppercase font-medium border border-stone-700 text-stone-400 cursor-pointer hover:border-stone-500 transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>Learn More</span>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-stone-800/50">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>Concierge Services</p>
            <h2 className="text-3xl font-medium text-white">Medicine without compromise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="border border-stone-800/50 p-8">
                <div className="w-8 h-[1px] mb-6" style={{ backgroundColor: "#d4af37" }}></div>
                <h3 className="text-xl font-medium text-white mb-3">{s.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="border-t border-stone-800/50">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>Membership</p>
            <h2 className="text-3xl font-medium text-white">Select your level of care</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <div key={t.name} className={`border p-8 flex flex-col ${t.highlight ? "border-[#d4af37]/50" : "border-stone-800/50"}`} style={t.highlight ? { background: "linear-gradient(180deg, rgba(212,175,55,0.05) 0%, rgba(10,10,15,0) 100%)" } : {}}>
                <p className="text-xs tracking-[0.3em] uppercase mb-1" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>{t.name}</p>
                <p className="text-3xl font-medium text-white mt-2">{t.price}</p>
                <p className="text-xs text-stone-600 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>{t.period}</p>
                <div className="flex-1 space-y-3 mb-8">
                  {t.features.map((f) => (
                    <div key={f} className="flex items-start space-x-3">
                      <span className="text-xs mt-0.5" style={{ color: "#d4af37" }}>&#10003;</span>
                      <span className="text-sm text-stone-400" style={{ fontFamily: "Inter, sans-serif" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <span className={`w-full h-12 flex items-center justify-center text-xs tracking-[0.15em] uppercase cursor-pointer transition-all ${t.highlight ? "text-stone-950 font-medium" : "text-stone-300 border border-stone-700 hover:border-stone-500"}`} style={t.highlight ? { fontFamily: "Inter, sans-serif", backgroundColor: "#d4af37" } : { fontFamily: "Inter, sans-serif" }}>
                  {t.highlight ? "Apply Now" : "Inquire"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Physicians */}
      <section className="border-t border-stone-800/50">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>Our Physicians</p>
            <h2 className="text-3xl font-medium text-white">Exceptional practitioners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {physicians.map((p) => (
              <div key={p.name}>
                <div className={`w-full aspect-[3/4] ${p.bg} mb-6`}></div>
                <p className="text-lg font-medium text-white">{p.name}</p>
                <p className="text-sm mt-1" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>{p.specialty}</p>
                <p className="text-xs text-stone-600 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>{p.credentials}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Facility */}
      <section className="border-t border-stone-800/50">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>Private Facility</p>
            <h2 className="text-3xl font-medium text-white">Designed for discretion and comfort</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((f) => (
              <div key={f.name} className="border border-stone-800/50 overflow-hidden">
                <div className="w-full h-48 bg-stone-900"></div>
                <div className="p-6">
                  <h3 className="text-base font-medium text-white mb-2">{f.name}</h3>
                  <p className="text-sm text-stone-500" style={{ fontFamily: "Inter, sans-serif" }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-800/50">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">Begin your membership journey</h2>
          <p className="text-stone-500 max-w-md mx-auto mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
            Membership is limited and by application only. Schedule a private consultation to learn if Aurum is right for you.
          </p>
          <span className="inline-flex h-13 px-12 py-3 items-center text-sm tracking-[0.15em] uppercase font-medium text-stone-950 cursor-pointer" style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#d4af37" }}>Schedule Private Consultation</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-800/50">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <span className="text-lg font-medium" style={{ color: "#d4af37" }}>Aurum</span>
              <p className="text-xs text-stone-700 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>One Beacon Hill Place, Suite 4200 &middot; Boston, MA 02108</p>
            </div>
            <div className="flex space-x-8 mt-4 md:mt-0">
              {["Privacy", "Terms", "Contact"].map((link) => (
                <span key={link} className="text-xs text-stone-600 hover:text-stone-400 cursor-pointer tracking-[0.15em] uppercase" style={{ fontFamily: "Inter, sans-serif" }}>{link}</span>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-xs text-stone-800" style={{ fontFamily: "Inter, sans-serif" }}>&copy; 2026 Aurum Concierge Medicine. All rights reserved. This site does not constitute medical advice.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
