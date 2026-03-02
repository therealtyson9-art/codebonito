export default function TravelMinimalistDemo() {
  const destinations = [
    { name: "Marrakech", country: "Morocco", price: "$1,480", duration: "8 days", description: "Wander through ochre medinas, sip mint tea on hidden rooftops, and lose yourself in the souks of the Red City." },
    { name: "Kyoto", country: "Japan", price: "$2,150", duration: "10 days", description: "Follow ancient pilgrimage trails through bamboo groves, stone gardens, and temples draped in morning mist." },
    { name: "Oaxaca", country: "Mexico", price: "$1,290", duration: "7 days", description: "Taste mezcal at its source, learn ancestral cooking techniques, and explore ruins perched above emerald valleys." },
    { name: "Faro", country: "Portugal", price: "$1,120", duration: "6 days", description: "Discover the Algarve's secret coastline, limestone caves carved by the Atlantic, and fishing villages frozen in time." },
  ]

  const guides = [
    { name: "Amara Osei", region: "West Africa", specialty: "Cultural immersion & textile trails", years: 12 },
    { name: "Kenji Tanaka", region: "East Asia", specialty: "Contemplative journeys & forest bathing", years: 8 },
    { name: "Lucia Ferrara", region: "Mediterranean", specialty: "Slow travel & coastal foraging", years: 15 },
  ]

  const packingTips = [
    { item: "Merino base layer", reason: "Regulates temperature from desert mornings to mountain evenings. One layer, every climate." },
    { item: "Linen wrap scarf", reason: "Sun protection, blanket on overnight trains, and respectful cover for temple visits." },
    { item: "Leather journal", reason: "Your phone will die. Your journal will outlast every trip and become the story itself." },
    { item: "Collapsible water bottle", reason: "Refill stations are everywhere once you start looking. Lighter pack, less plastic." },
  ]

  return (
    <div style={{ backgroundColor: "#f5f0e8", fontFamily: "'Questrial', 'Inter', sans-serif" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Questrial&display=swap&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* Explorer Nav */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full" style={{ backgroundColor: "#78593a" }} />
          <span className="text-xl tracking-wide" style={{ color: "#78593a", fontFamily: "'Questrial', sans-serif" }}>Wayfare</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#78593a" }}>
          <a href="#trips" className="hover:opacity-70 transition-opacity">Curated Trips</a>
          <a href="#guides" className="hover:opacity-70 transition-opacity">Guides</a>
          <a href="#philosophy" className="hover:opacity-70 transition-opacity">Philosophy</a>
          <a href="#book" className="hover:opacity-70 transition-opacity">Book</a>
        </div>
        <button className="px-5 py-2 text-sm rounded-full text-white" style={{ backgroundColor: "#78593a" }}>Begin Journey</button>
      </nav>

      {/* Map Hero Placeholder */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="rounded-2xl overflow-hidden relative" style={{ backgroundColor: "#e8dfd3", height: "420px" }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#78593a", fontFamily: "'Inter', sans-serif" }}>Curated since 2016</p>
            <h1 className="text-5xl md:text-6xl leading-tight mb-6" style={{ color: "#78593a", fontFamily: "'Questrial', sans-serif" }}>
              Travel is not about<br />the destination
            </h1>
            <p className="text-lg max-w-lg" style={{ color: "#9a7d5e", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              We design journeys that slow you down, open your senses, and return you home changed. No checklists. No rush. Just the world, unfolding.
            </p>
          </div>
          <div className="absolute bottom-6 left-6 flex gap-3">
            {["Marrakech", "Kyoto", "Oaxaca", "Faro"].map((pin) => (
              <span key={pin} className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: "#78593a" }}>{pin}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Trips */}
      <section id="trips" className="max-w-6xl mx-auto px-8 py-16">
        <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#9a7d5e" }}>Explore</p>
        <h2 className="text-3xl mb-12" style={{ color: "#78593a", fontFamily: "'Questrial', sans-serif" }}>Curated Trips</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {destinations.map((dest) => (
            <div key={dest.name} className="rounded-xl p-8" style={{ backgroundColor: "#ece5d9" }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl" style={{ color: "#78593a", fontFamily: "'Questrial', sans-serif" }}>{dest.name}</h3>
                  <p className="text-sm" style={{ color: "#9a7d5e" }}>{dest.country} &middot; {dest.duration}</p>
                </div>
                <span className="text-xl font-light" style={{ color: "#78593a" }}>{dest.price}</span>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#78593a", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{dest.description}</p>
              <button className="text-sm underline underline-offset-4" style={{ color: "#78593a" }}>View itinerary</button>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Philosophy */}
      <section id="philosophy" className="max-w-6xl mx-auto px-8 py-16">
        <div className="rounded-2xl p-12 md:p-16 text-center" style={{ backgroundColor: "#78593a" }}>
          <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#d4c4a8" }}>Our Philosophy</p>
          <h2 className="text-3xl md:text-4xl mb-8 text-white" style={{ fontFamily: "'Questrial', sans-serif" }}>
            Fewer places. Deeper roots.
          </h2>
          <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "#d4c4a8", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            We believe a single conversation with a ceramic maker in Fez reveals more than ten cities in ten days ever could. Wayfare trips are designed around connection, not collection. We partner with local families, artisans, and conservationists who share their world with you, not a performance of it. Every journey is limited to eight travelers because intimacy cannot scale.
          </p>
        </div>
      </section>

      {/* Featured Guides */}
      <section id="guides" className="max-w-6xl mx-auto px-8 py-16">
        <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#9a7d5e" }}>Meet</p>
        <h2 className="text-3xl mb-12" style={{ color: "#78593a", fontFamily: "'Questrial', sans-serif" }}>Featured Guides</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div key={guide.name} className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4" style={{ backgroundColor: "#d4c4a8" }} />
              <h3 className="text-lg mb-1" style={{ color: "#78593a", fontFamily: "'Questrial', sans-serif" }}>{guide.name}</h3>
              <p className="text-sm mb-1" style={{ color: "#9a7d5e" }}>{guide.region}</p>
              <p className="text-xs" style={{ color: "#b09a7a", fontFamily: "'Inter', sans-serif" }}>{guide.specialty} &middot; {guide.years} years</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packing Tips */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <p className="text-sm tracking-widest uppercase mb-2" style={{ color: "#9a7d5e" }}>Prepare</p>
        <h2 className="text-3xl mb-12" style={{ color: "#78593a", fontFamily: "'Questrial', sans-serif" }}>Packing Wisdom</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {packingTips.map((tip, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-xl" style={{ backgroundColor: "#ece5d9" }}>
              <span className="text-2xl font-light" style={{ color: "#b09a7a" }}>0{i + 1}</span>
              <div>
                <h3 className="text-base mb-1" style={{ color: "#78593a", fontFamily: "'Questrial', sans-serif" }}>{tip.item}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9a7d5e", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{tip.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Book a Trip CTA */}
      <section id="book" className="max-w-6xl mx-auto px-8 py-16">
        <div className="rounded-2xl p-12 text-center" style={{ backgroundColor: "#ece5d9" }}>
          <h2 className="text-3xl mb-4" style={{ color: "#78593a", fontFamily: "'Questrial', sans-serif" }}>Ready to go slowly?</h2>
          <p className="text-base max-w-lg mx-auto mb-8" style={{ color: "#9a7d5e", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Tell us when you want to leave, how long you want to be gone, and what draws you. We handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="your@email.com" className="px-6 py-3 rounded-full text-sm border-0 outline-none w-64" style={{ backgroundColor: "#f5f0e8", color: "#78593a" }} />
            <button className="px-8 py-3 rounded-full text-sm text-white" style={{ backgroundColor: "#78593a" }}>Start Planning</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-8 py-12 border-t" style={{ borderColor: "#d4c4a8" }}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#78593a" }} />
            <span className="text-sm" style={{ color: "#78593a" }}>Wayfare</span>
          </div>
          <div className="flex gap-6 text-xs" style={{ color: "#9a7d5e" }}>
            <span>ASTA Verified</span>
            <span>IATA Accredited</span>
            <span>B-Corp Certified</span>
            <span>Carbon Neutral Since 2020</span>
          </div>
          <p className="text-xs" style={{ color: "#b09a7a" }}>&copy; 2025 Wayfare Travel Co.</p>
        </div>
      </footer>
    </div>
  )
}
