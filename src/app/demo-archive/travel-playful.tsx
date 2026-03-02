export default function TravelPlayfulDemo() {
  const destinations = [
    { name: "Orlando", country: "USA", emoji: "🏰", price: "$899", badge: "Most Popular!", badgeColor: "#f97316", description: "Theme parks, splash zones, and character breakfasts that make every kid (and parent) feel like royalty." },
    { name: "Costa Rica", country: "Central America", emoji: "🦜", price: "$1,349", badge: "Eco Adventure!", badgeColor: "#22c55e", description: "Zip-line through cloud forests, spot sloths at breakfast, and learn to surf on warm Pacific waves." },
    { name: "Tokyo", country: "Japan", emoji: "🗼", price: "$1,899", badge: "Culture Pick!", badgeColor: "#8b5cf6", description: "Robot restaurants, cat cafes, and bullet trains that make getting there half the fun for the whole family." },
    { name: "Iceland", country: "Nordic", emoji: "🌋", price: "$1,599", badge: "Nature Wow!", badgeColor: "#06b6d4", description: "Geysers that erupt on schedule, puffin colonies, and hot springs where you can swim while it snows." },
    { name: "Riviera Maya", country: "Mexico", emoji: "🐠", price: "$1,049", badge: "Beach Vibes!", badgeColor: "#f97316", description: "Snorkeling in cenotes, building sandcastles on white sand, and taco Tuesdays that last all week." },
  ]

  const features = [
    { title: "Trip Builder", emoji: "🧩", description: "Drag and drop activities, hotels, and restaurants into your dream itinerary. Kids can add their picks too!" },
    { title: "Budget Tracker", emoji: "🐷", description: "Set a family budget and watch it in real time. No surprise charges, no awkward credit card moments at checkout." },
    { title: "Kid Activity Finder", emoji: "🎨", description: "Filter every destination by age group. Toddler-safe beaches, teen-approved adventures, and everything between." },
    { title: "Packing Lists", emoji: "🎒", description: "Auto-generated packing lists based on your destination, weather, and the ages of your little travelers." },
  ]

  const safetyTips = [
    { tip: "Always carry a photo of each child on your phone with what they are wearing that day.", emoji: "📸" },
    { tip: "Teach kids to find a 'mom with kids' if they get lost, rather than any stranger.", emoji: "🤝" },
    { tip: "Pack a small first-aid kit with band-aids, antihistamines, and any prescription meds.", emoji: "🩹" },
    { tip: "Write your phone number on a temporary tattoo or bracelet for toddlers.", emoji: "📞" },
  ]

  const testimonials = [
    { family: "The Johnsons", kids: "2 kids (ages 4 & 7)", trip: "Costa Rica", quote: "Wanderbug found us a treehouse hotel with a sloth sanctuary next door. The kids still talk about it every single day." },
    { family: "The Nakamuras", kids: "3 kids (ages 6, 9 & 12)", trip: "Iceland", quote: "Planning a trip for three kids with different interests felt impossible until Wanderbug. Everyone had the time of their lives." },
    { family: "The Patels", kids: "1 kid (age 3)", trip: "Riviera Maya", quote: "First international trip with a toddler and we were terrified. Wanderbug made it so easy we booked again before we got home." },
  ]

  return (
    <div style={{ backgroundColor: "#e0f2fe", fontFamily: "'Nunito', sans-serif" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Chewy&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />

      {/* Sticker Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐛</span>
          <span className="text-2xl" style={{ fontFamily: "'Chewy', cursive", color: "#f97316" }}>Wanderbug</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600" style={{ fontFamily: "'Nunito', sans-serif" }}>
          <a href="#destinations">Destinations</a>
          <a href="#features">Planner</a>
          <a href="#safety">Safety</a>
          <a href="#download">Download</a>
        </div>
        <button className="px-5 py-2 text-sm text-white rounded-full font-bold" style={{ backgroundColor: "#f97316", fontFamily: "'Chewy', cursive" }}>
          Get the App!
        </button>
      </nav>

      {/* Postcard Hero */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden" style={{ backgroundColor: "#fff", boxShadow: "8px 8px 0 #f97316" }}>
          <div className="absolute top-4 right-4 w-16 h-16 rounded border-2 border-dashed" style={{ borderColor: "#f97316" }}>
            <div className="w-full h-full flex items-center justify-center text-xs" style={{ color: "#f97316" }}>STAMP</div>
          </div>
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#f97316", fontFamily: "'Nunito', sans-serif" }}>Family adventures made easy</p>
          <h1 className="text-4xl md:text-6xl mb-4" style={{ fontFamily: "'Chewy', cursive", color: "#1e3a5f" }}>
            Where to next, fam?
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Wanderbug helps families plan trips that keep everyone happy, from toddlers to teenagers to grandparents who just want a nice chair.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["🏰 Theme Parks", "🏖️ Beaches", "🏔️ Nature", "🎭 Culture"].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: "#e0f2fe", color: "#1e3a5f" }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Family-Friendly Destinations */}
      <section id="destinations" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl text-center mb-2" style={{ fontFamily: "'Chewy', cursive", color: "#1e3a5f" }}>Family Favorites</h2>
        <p className="text-center text-gray-500 mb-10" style={{ fontFamily: "'Nunito', sans-serif" }}>Kid-tested, parent-approved destinations</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div key={dest.name} className="bg-white rounded-2xl p-6 relative" style={{ boxShadow: "4px 4px 0 #cbd5e1" }}>
              <span className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs text-white font-bold" style={{ backgroundColor: dest.badgeColor }}>{dest.badge}</span>
              <div className="text-4xl mb-3">{dest.emoji}</div>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Chewy', cursive", color: "#1e3a5f" }}>{dest.name}</h3>
              <p className="text-xs text-gray-400 mb-3">{dest.country}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-4" style={{ fontFamily: "'Nunito', sans-serif" }}>{dest.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold" style={{ color: "#f97316" }}>from {dest.price}</span>
                <button className="text-sm font-bold underline" style={{ color: "#1e3a5f" }}>Explore</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trip Planner Features */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl text-center mb-2" style={{ fontFamily: "'Chewy', cursive", color: "#1e3a5f" }}>Plan Like a Pro</h2>
        <p className="text-center text-gray-500 mb-10" style={{ fontFamily: "'Nunito', sans-serif" }}>Tools that make trip planning actually fun</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 flex gap-4 items-start" style={{ boxShadow: "4px 4px 0 #cbd5e1" }}>
              <span className="text-3xl">{f.emoji}</span>
              <div>
                <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Chewy', cursive", color: "#1e3a5f" }}>{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Tips */}
      <section id="safety" className="max-w-4xl mx-auto px-6 py-12">
        <div className="rounded-2xl p-8 md:p-12" style={{ backgroundColor: "#fff7ed" }}>
          <h2 className="text-3xl text-center mb-2" style={{ fontFamily: "'Chewy', cursive", color: "#f97316" }}>Safety First!</h2>
          <p className="text-center text-gray-500 mb-8" style={{ fontFamily: "'Nunito', sans-serif" }}>Tips from families who travel with kids all the time</p>
          <div className="space-y-4">
            {safetyTips.map((s, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4">
                <span className="text-2xl">{s.emoji}</span>
                <p className="text-sm text-gray-600 leading-relaxed pt-1" style={{ fontFamily: "'Nunito', sans-serif" }}>{s.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl text-center mb-10" style={{ fontFamily: "'Chewy', cursive", color: "#1e3a5f" }}>Happy Families</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.family} className="bg-white rounded-2xl p-6" style={{ boxShadow: "4px 4px 0 #cbd5e1" }}>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 italic" style={{ fontFamily: "'Nunito', sans-serif" }}>&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm font-bold" style={{ color: "#1e3a5f" }}>{t.family}</p>
              <p className="text-xs text-gray-400">{t.kids} &middot; {t.trip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download App CTA */}
      <section id="download" className="max-w-4xl mx-auto px-6 py-12">
        <div className="rounded-3xl p-10 md:p-14 text-center" style={{ backgroundColor: "#f97316" }}>
          <span className="text-5xl block mb-4">🐛</span>
          <h2 className="text-3xl md:text-4xl text-white mb-4" style={{ fontFamily: "'Chewy', cursive" }}>Ready to Wander?</h2>
          <p className="text-base text-white opacity-90 max-w-md mx-auto mb-8" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Download Wanderbug free and start planning your next family adventure in minutes. Your kids will thank you. Probably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-full text-sm font-bold bg-white" style={{ color: "#f97316" }}>Download for iOS</button>
            <button className="px-8 py-3 rounded-full text-sm font-bold bg-white" style={{ color: "#f97316" }}>Download for Android</button>
          </div>
        </div>
      </section>

      {/* Fun Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐛</span>
            <span className="text-lg" style={{ fontFamily: "'Chewy', cursive", color: "#f97316" }}>Wanderbug</span>
          </div>
          <div className="flex gap-4 text-lg">
            <span>✈️</span><span>🌍</span><span>🏖️</span><span>🗺️</span><span>🧳</span><span>🌴</span>
          </div>
          <p className="text-xs text-gray-400" style={{ fontFamily: "'Nunito', sans-serif" }}>&copy; 2025 Wanderbug Inc. Made with ❤️ for families everywhere.</p>
        </div>
      </footer>
    </div>
  )
}
