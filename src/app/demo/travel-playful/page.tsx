export default function TravelPlayfulDemo() {
  const destinations = [
    { name: "Bali", flag: "\ud83c\uddee\ud83c\udde9", country: "Indonesia", price: "$1,099", badge: "Trending!", badgeColor: "#f97316", desc: "Rice terraces, sacred temples, and surf breaks that never get old." },
    { name: "Lisbon", flag: "\ud83c\uddf5\ud83c\uddf9", country: "Portugal", price: "$849", badge: "Budget Friendly!", badgeColor: "#38bdf8", desc: "Pastel streets, custard tarts, and tram rides with ocean views." },
    { name: "Costa Rica", flag: "\ud83c\udde8\ud83c\uddf7", country: "Central America", price: "$1,249", badge: "Eco Pick!", badgeColor: "#22c55e", desc: "Zip-lining through cloud forests and spotting toucans at sunrise." },
    { name: "Tokyo", flag: "\ud83c\uddef\ud83c\uddf5", country: "Japan", price: "$1,399", badge: "Fan Favorite!", badgeColor: "#ec4899", desc: "Neon-lit nights, ramen alleys, and cherry blossoms around every corner." },
  ]
  const stories = [
    { name: "Priya S.", location: "Backpacking Southeast Asia", stars: 5, text: "GoGo planned the most incredible 3-week route through Thailand, Vietnam, and Cambodia. Every hostel was clean and every bus connection actually worked!" },
    { name: "Marcus T.", location: "Family trip to Costa Rica", stars: 5, text: "Traveling with two kids under 8 and it was the smoothest vacation ever. The activity recs were spot on -- the kids still talk about the hanging bridges." },
    { name: "Jess & Kim", location: "Girls trip to Lisbon", stars: 4, text: "The restaurant recommendations alone were worth it. We stumbled into the best seafood of our lives on day one and it only got better from there." },
  ]
  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ fontFamily: "Poppins, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <nav className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold">\u2708\ufe0f <span style={{ color: "#f97316" }}>GoGo</span>Travel</span>
          <div className="hidden md:flex space-x-6">
            <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer font-medium">Destinations</span>
            <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer font-medium">Deals</span>
            <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer font-medium">Stories</span>
            <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer font-medium">Quiz</span>
          </div>
          <button className="h-10 px-6 text-sm font-semibold text-white rounded-full transition-colors" style={{ backgroundColor: "#f97316" }}>Plan My Trip!</button>
        </div>
      </nav>
      <section className="max-w-6xl mx-auto px-4 py-24 text-center">
        <p className="text-4xl mb-4">\ud83c\udf0d\u2728</p>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4 leading-tight">Your next adventure<br/>starts <span style={{ color: "#f97316" }}>here!</span></h1>
        <p className="text-lg text-slate-500 max-w-xl mx-auto mb-8 font-light">Whether you want beaches, culture, or a bit of chaos -- we have got a trip with your name on it.</p>
        <div className="flex justify-center space-x-3">
          <button className="h-12 px-8 text-sm font-semibold text-white rounded-full transition-colors" style={{ backgroundColor: "#f97316" }}>Browse Destinations</button>
          <button className="h-12 px-8 text-sm font-semibold rounded-full transition-colors" style={{ color: "#38bdf8", backgroundColor: "#38bdf810", border: "2px solid #38bdf8" }}>Take the Quiz</button>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-2">Hot Destinations \ud83d\udd25</h2>
        <p className="text-slate-500 text-center mb-10 font-light">Picked by our team, loved by thousands</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((d) => (
            <div key={d.name} className="rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-44 flex flex-col items-center justify-center relative" style={{ backgroundColor: "#fef3c7" }}>
                <span className="text-5xl">{d.flag}</span>
                <span className="absolute top-3 right-3 text-xs font-bold text-white px-3 py-1 rounded-full" style={{ backgroundColor: d.badgeColor }}>{d.badge}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">{d.name}</h3>
                <p className="text-xs text-slate-400 mb-2">{d.country}</p>
                <p className="text-sm text-slate-500 mb-4">{d.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold" style={{ color: "#f97316" }}>{d.price}</span>
                  <span className="text-xs text-slate-400">per person</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20" style={{ backgroundColor: "#38bdf810" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-4xl mb-4">\ud83e\udde9</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Not sure where to go?</h2>
          <p className="text-slate-500 font-light mb-8">Take our 2-minute travel personality quiz and we will match you with your dream destination.</p>
          <div className="inline-flex flex-wrap gap-3 justify-center mb-8">
            {["Beach Bum", "City Explorer", "Mountain Goat", "Culture Vulture", "Foodie"].map((t) => (
              <span key={t} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 cursor-pointer hover:border-orange-300 hover:text-orange-600 transition-colors">{t}</span>
            ))}
          </div>
          <div><button className="h-12 px-10 text-sm font-semibold text-white rounded-full transition-colors" style={{ backgroundColor: "#ec4899" }}>Start the Quiz \u2192</button></div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-2">\ud83d\udcf8 Snap Happy</h2>
        <p className="text-slate-500 text-center mb-10 font-light">A glimpse of where our travelers have been</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Sunset in Santorini", "Tokyo Neon", "Bali Rice Fields", "Lisbon Tram", "Costa Rica Jungle", "Marrakech Market", "Patagonia Glacier", "Kyoto Garden"].map((p) => (
            <div key={p} className="aspect-square rounded-xl flex items-center justify-center text-xs font-medium text-slate-400" style={{ backgroundColor: "#fef3c7" }}>{p}</div>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Traveler Stories \u2764\ufe0f</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex mb-3">{Array.from({ length: 5 }).map((_, i) => (<span key={i} className="text-sm mr-0.5" style={{ color: i < s.stars ? "#f59e0b" : "#e2e8f0" }}>{"\u2605"}</span>))}</div>
                <p className="text-sm text-slate-600 mb-4 italic">&ldquo;{s.text}&rdquo;</p>
                <p className="text-sm font-semibold text-slate-900">{s.name}</p>
                <p className="text-xs text-slate-400">{s.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-10 text-white" style={{ background: "linear-gradient(135deg, #f97316 0%, #ec4899 100%)" }}>
            <p className="text-3xl mb-2">\ud83c\udff7\ufe0f</p>
            <h2 className="text-3xl font-bold mb-2">Deal of the Week</h2>
            <p className="text-white/80 font-light mb-4">7 nights in Bali, flights included, starting at</p>
            <p className="text-5xl font-extrabold mb-6">$899</p>
            <button className="h-12 px-10 text-sm font-semibold bg-white rounded-full transition-colors" style={{ color: "#f97316" }}>Grab This Deal</button>
            <p className="text-xs text-white/60 mt-4">Limited availability. Expires Sunday at midnight.</p>
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div><span className="text-lg font-bold">\u2708\ufe0f <span style={{ color: "#f97316" }}>GoGo</span>Travel</span><p className="text-xs text-slate-400 mt-2">Making travel fun since 2019.</p></div>
            <div><h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">Explore</h4><div className="space-y-2 text-sm text-slate-500"><p>Destinations</p><p>Deals</p><p>Travel Quiz</p></div></div>
            <div><h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">Community</h4><div className="space-y-2 text-sm text-slate-500"><p>Stories</p><p>Instagram</p><p>TikTok</p></div></div>
            <div><h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">Help</h4><div className="space-y-2 text-sm text-slate-500"><p>FAQ</p><p>Support</p><p>Cancellation</p></div></div>
          </div>
          <div className="border-t border-slate-200 mt-8 pt-6 text-center">
            <span className="text-xs text-slate-400">&copy; 2026 GoGoTravel. All rights reserved. Happy travels! \u2728</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
