export default function TravelMinimalistDemo() {
  const destinations = [
    { name: "Kyoto", country: "Japan", price: "$1,299", desc: "Ancient temples, bamboo groves, and the art of the tea ceremony in Japan's cultural heart.", tag: "Cultural" },
    { name: "Santorini", country: "Greece", price: "$1,549", desc: "Sun-bleached cliffs, sapphire waters, and sunsets that paint the Aegean in gold.", tag: "Romantic" },
    { name: "Patagonia", country: "Argentina", price: "$2,199", desc: "Untamed glaciers, rugged peaks, and windswept plains at the edge of the world.", tag: "Adventure" },
    { name: "Marrakech", country: "Morocco", price: "$989", desc: "Spice-scented souks, intricate mosaics, and the pulse of North African tradition.", tag: "Exotic" },
  ]
  const tripTypes = [
    { name: "Adventure", icon: "&#9968;", desc: "Hiking, diving, and adrenaline-fueled itineraries for thrill seekers." },
    { name: "Cultural", icon: "&#127983;", desc: "Immerse yourself in local history, art, cuisine, and traditions." },
    { name: "Luxury", icon: "&#9733;", desc: "Five-star stays, private transfers, and curated fine dining." },
    { name: "Family", icon: "&#127968;", desc: "Kid-friendly activities, relaxed pacing, and unforgettable bonding." },
  ]
  const reviews = [
    { name: "Elena M.", trip: "Kyoto Cultural Tour", text: "Every detail was thoughtfully planned. From the private tea ceremony to the hidden shrine walks, it felt like we had a friend showing us the real Japan.", rating: 5 },
    { name: "James & Sarah K.", trip: "Santorini Honeymoon", text: "Wanderlust turned our honeymoon into something magical. The cliffside suite, the private catamaran at sunset -- pure perfection.", rating: 5 },
    { name: "David R.", trip: "Patagonia Trek", text: "I've traveled with a dozen agencies. None come close to the level of care and local expertise Wanderlust brings to adventure travel.", rating: 5 },
  ]
  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <nav className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-semibold tracking-wide" style={{ color: "#0d9488" }}>WANDERLUST</span>
          <div className="hidden md:flex space-x-6">
            <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Destinations</span>
            <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Trip Types</span>
            <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Reviews</span>
            <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Plan a Trip</span>
          </div>
          <button className="h-10 px-6 text-sm font-medium text-white rounded-md transition-colors" style={{ backgroundColor: "#0d9488" }}>Book Now</button>
        </div>
      </nav>
      <section className="max-w-6xl mx-auto px-4 py-28 text-center">
        <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#0d9488" }}>Travel with purpose</p>
        <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">Discover the world,<br/>your way</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">Handcrafted itineraries, local guides, and seamless logistics so you can focus on what matters most -- the experience.</p>
        <div className="flex justify-center space-x-3">
          <button className="h-12 px-8 text-sm font-medium text-white rounded-md transition-colors" style={{ backgroundColor: "#0d9488" }}>Explore Destinations</button>
          <button className="h-12 px-8 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors">How It Works</button>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">Featured Destinations</h2>
        <p className="text-slate-500 text-center mb-12">Our most-loved trips, curated by travel experts</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((d) => (
            <div key={d.name} className="rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 flex items-center justify-center" style={{ backgroundColor: "#0d948812" }}>
                <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "#0d9488" }}>{d.country}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">{d.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full text-white" style={{ backgroundColor: "#0d9488" }}>{d.tag}</span>
                </div>
                <p className="text-sm text-slate-500 mb-4">{d.desc}</p>
                <p className="text-lg font-semibold" style={{ color: "#0d9488" }}>From {d.price} <span className="text-xs text-slate-400 font-normal">per person</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Find Your Kind of Trip</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {tripTypes.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:border-teal-300 transition-colors">
                <div className="text-3xl mb-3" dangerouslySetInnerHTML={{ __html: t.icon }} />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{t.name}</h3>
                <p className="text-sm text-slate-500">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What Travelers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-xl border border-slate-200 p-6">
              <div className="flex mb-3">{Array.from({ length: r.rating }).map((_, i) => (<span key={i} className="text-amber-400 text-sm mr-0.5">&#9733;</span>))}</div>
              <p className="text-sm text-slate-600 mb-4 italic">&ldquo;{r.text}&rdquo;</p>
              <p className="text-sm font-semibold text-slate-900">{r.name}</p>
              <p className="text-xs text-slate-400">{r.trip}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Plan Your Next Trip</h2>
          <p className="text-slate-500 mb-8">Tell us where you want to go and we will craft a custom itinerary.</p>
          <div className="bg-white rounded-xl border border-slate-200 p-6 text-left space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="text-xs font-medium text-slate-600 block mb-1">Destination</label><div className="h-10 rounded-md border border-slate-200 bg-slate-50" /></div>
              <div><label className="text-xs font-medium text-slate-600 block mb-1">Travel Dates</label><div className="h-10 rounded-md border border-slate-200 bg-slate-50" /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="text-xs font-medium text-slate-600 block mb-1">Travelers</label><div className="h-10 rounded-md border border-slate-200 bg-slate-50" /></div>
              <div><label className="text-xs font-medium text-slate-600 block mb-1">Budget Range</label><div className="h-10 rounded-md border border-slate-200 bg-slate-50" /></div>
            </div>
            <div><label className="text-xs font-medium text-slate-600 block mb-1">Special Requests</label><div className="h-24 rounded-md border border-slate-200 bg-slate-50" /></div>
            <button className="w-full h-11 text-sm font-medium text-white rounded-md transition-colors" style={{ backgroundColor: "#0d9488" }}>Start Planning</button>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Stay Inspired</h2>
          <p className="text-sm text-slate-500 mb-6">Travel tips, destination guides, and exclusive deals delivered to your inbox every week.</p>
          <div className="flex space-x-2">
            <div className="flex-1 h-11 rounded-md border border-slate-200 bg-slate-50" />
            <button className="h-11 px-6 text-sm font-medium text-white rounded-md transition-colors" style={{ backgroundColor: "#0d9488" }}>Subscribe</button>
          </div>
          <p className="text-xs text-slate-400 mt-2">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div><span className="text-lg font-semibold" style={{ color: "#0d9488" }}>WANDERLUST</span><p className="text-xs text-slate-400 mt-2">Crafting journeys since 2014.</p></div>
            <div><h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">Explore</h4><div className="space-y-2 text-sm text-slate-500"><p className="cursor-pointer hover:text-slate-900">Destinations</p><p className="cursor-pointer hover:text-slate-900">Trip Types</p><p className="cursor-pointer hover:text-slate-900">Last-Minute Deals</p></div></div>
            <div><h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">Company</h4><div className="space-y-2 text-sm text-slate-500"><p className="cursor-pointer hover:text-slate-900">About Us</p><p className="cursor-pointer hover:text-slate-900">Travel Journal</p><p className="cursor-pointer hover:text-slate-900">Careers</p></div></div>
            <div><h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">Support</h4><div className="space-y-2 text-sm text-slate-500"><p className="cursor-pointer hover:text-slate-900">Help Center</p><p className="cursor-pointer hover:text-slate-900">Travel Insurance</p><p className="cursor-pointer hover:text-slate-900">Contact</p></div></div>
          </div>
          <div className="border-t border-slate-200 mt-8 pt-6 flex justify-between items-center">
            <span className="text-xs text-slate-400">&copy; 2026 Wanderlust Travel Co. All rights reserved.</span>
            <div className="flex space-x-4 text-xs text-slate-400"><span className="cursor-pointer hover:text-slate-700">Privacy</span><span className="cursor-pointer hover:text-slate-700">Terms</span></div>
          </div>
        </div>
      </footer>
    </div>
  )
}
