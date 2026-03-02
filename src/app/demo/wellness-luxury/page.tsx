export default function WellnessLuxuryDemo() {
  const treatments = [
    { name: "Hot Stone Ritual", duration: "90 min", description: "Heated basalt stones placed along meridian lines melt away deep-seated tension while our therapists work volcanic warmth into every muscle fiber.", price: "$195" },
    { name: "Diamond Facial", duration: "75 min", description: "Micro-diamond exfoliation paired with 24K gold serum infusion. Collagen-stimulating LED therapy reveals luminous, age-defying skin.", price: "$285" },
    { name: "Aromatherapy Journey", duration: "60 min", description: "A bespoke blend of rare essential oils selected for your constitution. Full-body massage with heated towels and scalp treatment.", price: "$175" },
    { name: "Sound Healing Ceremony", duration: "60 min", description: "Tibetan singing bowls, crystal tuning forks, and overtone chanting in our acoustically tuned sanctuary. A vibrational reset for mind and spirit.", price: "$145" },
  ];

  const packages = [
    { name: "Tranquility", price: "$195", duration: "2 hours", inclusions: ["Swedish Massage (60 min)", "Express Facial (30 min)", "Herbal Tea Service", "Sauna Access"] },
    { name: "Harmony", price: "$345", duration: "3.5 hours", inclusions: ["Hot Stone Ritual (90 min)", "Diamond Facial (75 min)", "Champagne & Fruit Plate", "Full Facility Access", "Aromatherapy Shower"] },
    { name: "Nirvana", price: "$595", duration: "Full Day", inclusions: ["All Signature Treatments", "Private Zen Garden Suite", "Three-Course Organic Lunch", "Full Facility Access", "Take-Home Luxury Gift Set", "Complimentary Robe & Slippers"] },
  ];

  const practitioners = [
    { name: "Isabelle Laurent", title: "Master Therapist & Spa Director", experience: "18 years", training: "Trained at the Institut de Beaute in Paris and the Mandarin Oriental Spa Academy in Bangkok. Specializes in lymphatic drainage and anti-aging protocols.", },
    { name: "Takeshi Mori", title: "Sound Healing & Energy Work", experience: "14 years", training: "Studied under Tibetan monks in Dharamsala and holds certifications in vibrational medicine from the Sound Healing Academy, London.", },
    { name: "Nadia Petrova", title: "Aesthetician & Skincare Specialist", experience: "11 years", training: "Graduate of the International Dermal Institute. Expert in advanced facial rejuvenation, chemical peels, and bespoke skincare regimens.", },
  ];

  const facilities = [
    { name: "Infinity Pool", description: "Temperature-controlled saltwater pool with panoramic garden views. Open year-round with heated stone loungers." },
    { name: "Finnish Sauna", description: "Authentic cedar-lined dry sauna reaching 185°F. Aromatic water infusions of eucalyptus and birch." },
    { name: "Steam Room", description: "Eucalyptus-infused steam chamber with chromotherapy lighting. Detoxify and breathe deeply." },
    { name: "Zen Garden", description: "Private outdoor meditation garden with raked gravel, ancient bonsai, and the sound of flowing water." },
  ];

  const giftCards = [
    { value: "$150", popular: false },
    { value: "$250", popular: false },
    { value: "$500", popular: true },
    { value: "Custom", popular: false },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Playfair Display', serif", backgroundColor: "#0f0f14" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="flex items-center justify-between px-10 py-7 border-b" style={{ borderColor: "#1a1a24" }}>
        <span className="text-lg tracking-[0.35em] font-medium" style={{ color: "#d4af37" }}>AURELIUS</span>
        <div className="hidden md:flex items-center gap-9 text-sm" style={{ color: "#8a8a9a" }}>
          <a href="#treatments" className="hover:opacity-80 transition-opacity tracking-wide">Treatments</a>
          <a href="#packages" className="hover:opacity-80 transition-opacity tracking-wide">Packages</a>
          <a href="#practitioners" className="hover:opacity-80 transition-opacity tracking-wide">Practitioners</a>
          <a href="#facilities" className="hover:opacity-80 transition-opacity tracking-wide">Facilities</a>
          <a href="#gifts" className="px-6 py-2.5 border text-sm tracking-wider hover:bg-amber-900/20 transition-colors" style={{ borderColor: "#d4af37", color: "#d4af37" }}>Reserve</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-32 px-8 text-center" style={{ background: "linear-gradient(180deg, #0f0f14 0%, #141420 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="w-px h-12 mx-auto mb-8" style={{ backgroundColor: "#d4af37" }} />
          <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: "#d4af37" }}>Luxury Spa &amp; Wellness Sanctuary</p>
          <h1 className="text-5xl md:text-6xl font-medium leading-tight mb-8" style={{ color: "#f5f0e8" }}>The art of rejuvenation</h1>
          <p className="text-lg font-light leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "#8a8a9a" }}>Where ancient healing traditions meet modern luxury. Surrender to an experience crafted for those who understand that true wellness is the ultimate indulgence.</p>
          <a href="#treatments" className="inline-block px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all hover:shadow-lg" style={{ backgroundColor: "#d4af37", color: "#0f0f14" }}>Discover Our Treatments</a>
        </div>
      </section>

      {/* Signature Treatments */}
      <section id="treatments" className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: "#d4af37" }}>Bespoke Experiences</p>
            <h2 className="text-3xl font-medium" style={{ color: "#f5f0e8" }}>Signature Treatments</h2>
          </div>
          <div className="space-y-0">
            {treatments.map((t, i) => (
              <div key={t.name} className="py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 border-t" style={{ borderColor: "#1a1a24" }}>
                <div className="md:w-16 shrink-0 text-sm font-light" style={{ color: "#3a3a4a" }}>0{i + 1}</div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <h3 className="text-xl font-medium" style={{ color: "#f5f0e8" }}>{t.name}</h3>
                    <div className="flex items-center gap-4">
                      <span className="text-sm" style={{ color: "#8a8a9a" }}>{t.duration}</span>
                      <span className="text-lg font-medium" style={{ color: "#d4af37" }}>{t.price}</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "#6a6a7a" }}>{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Packages */}
      <section id="packages" className="py-24 px-8" style={{ backgroundColor: "#12121a" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: "#d4af37" }}>Curated Journeys</p>
            <h2 className="text-3xl font-medium" style={{ color: "#f5f0e8" }}>Spa Packages</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`p-9 border ${pkg.name === "Harmony" ? "border-amber-700/50" : ""}`} style={{ borderColor: pkg.name === "Harmony" ? "#d4af37" : "#1a1a24", backgroundColor: pkg.name === "Harmony" ? "#16161e" : "#0f0f14" }}>
                {pkg.name === "Harmony" && <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "#d4af37" }}>Most Popular</p>}
                <h3 className="text-xl font-medium mb-2" style={{ color: "#f5f0e8" }}>{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-medium" style={{ color: "#d4af37" }}>{pkg.price}</span>
                </div>
                <p className="text-sm mb-8" style={{ color: "#6a6a7a" }}>{pkg.duration}</p>
                <ul className="space-y-3 mb-10">
                  {pkg.inclusions.map((inc) => (
                    <li key={inc} className="text-sm flex items-start gap-3" style={{ color: "#8a8a9a" }}>
                      <span style={{ color: "#d4af37" }}>&#8212;</span>
                      {inc}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3.5 text-sm tracking-[0.15em] uppercase border transition-all hover:shadow-lg" style={{ borderColor: "#d4af37", color: "#d4af37" }}>Reserve</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Practitioners */}
      <section id="practitioners" className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: "#d4af37" }}>World-Class Expertise</p>
            <h2 className="text-3xl font-medium" style={{ color: "#f5f0e8" }}>Master Practitioners</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {practitioners.map((p) => (
              <div key={p.name} className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-light border" style={{ borderColor: "#d4af37", color: "#d4af37", backgroundColor: "#16161e" }}>{p.name.split(" ").map(n => n[0]).join("")}</div>
                <h3 className="text-lg font-medium mb-1" style={{ color: "#f5f0e8" }}>{p.name}</h3>
                <p className="text-sm italic mb-1" style={{ color: "#d4af37" }}>{p.title}</p>
                <p className="text-xs mb-4" style={{ color: "#5a5a6a" }}>{p.experience} of practice</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6a6a7a" }}>{p.training}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-24 px-8" style={{ backgroundColor: "#12121a" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: "#d4af37" }}>Our Sanctuary</p>
            <h2 className="text-3xl font-medium" style={{ color: "#f5f0e8" }}>Facilities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {facilities.map((f) => (
              <div key={f.name} className="p-8 border" style={{ borderColor: "#1a1a24" }}>
                <h3 className="text-lg font-medium mb-3" style={{ color: "#f5f0e8" }}>{f.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6a6a7a" }}>{f.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm mt-10 italic" style={{ color: "#5a5a6a" }}>All facilities are complimentary with any treatment or package booking. Robes, slippers, and premium amenities provided.</p>
        </div>
      </section>

      {/* Gift Cards */}
      <section id="gifts" className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: "#d4af37" }}>The Gift of Wellness</p>
          <h2 className="text-3xl font-medium mb-4" style={{ color: "#f5f0e8" }}>Gift Cards</h2>
          <p className="text-sm leading-relaxed max-w-xl mx-auto mb-12" style={{ color: "#6a6a7a" }}>Present someone extraordinary with an experience they will never forget. Each gift card is delivered in a hand-calligraphed envelope with a fresh orchid.</p>
          <div className="flex flex-wrap justify-center gap-5 mb-12">
            {giftCards.map((g) => (
              <div key={g.value} className={`w-36 py-8 border text-center cursor-pointer transition-all hover:shadow-lg ${g.popular ? "shadow-md" : ""}`} style={{ borderColor: g.popular ? "#d4af37" : "#1a1a24", backgroundColor: g.popular ? "#16161e" : "transparent" }}>
                {g.popular && <p className="text-xs tracking-wider uppercase mb-2" style={{ color: "#d4af37" }}>Popular</p>}
                <span className="text-xl font-medium" style={{ color: "#f5f0e8" }}>{g.value}</span>
              </div>
            ))}
          </div>
          <a href="#" className="inline-block px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all hover:shadow-lg" style={{ backgroundColor: "#d4af37", color: "#0f0f14" }}>Purchase a Gift Card</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 px-8 border-t" style={{ borderColor: "#1a1a24" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
            <div>
              <span className="text-sm tracking-[0.35em] font-medium block mb-4" style={{ color: "#d4af37" }}>AURELIUS</span>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#5a5a6a" }}>A private sanctuary where time slows, the world quiets, and you are the only priority.</p>
            </div>
            <div className="flex gap-14 text-sm" style={{ color: "#5a5a6a" }}>
              <div className="space-y-2">
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#8a8a9a" }}>Visit</p>
                <p>1 Aurelius Way</p>
                <p>Napa Valley, CA 94558</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#8a8a9a" }}>Reservations</p>
                <p>reservations@aureliusspa.com</p>
                <p>(707) 555-0301</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "#8a8a9a" }}>Hours</p>
                <p>Daily 9:00 AM - 9:00 PM</p>
                <p>By appointment only</p>
              </div>
            </div>
          </div>
          <div className="text-center text-xs pt-8 border-t" style={{ borderColor: "#1a1a24", color: "#3a3a4a" }}>&copy; 2026 Aurelius Spa &amp; Wellness. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
