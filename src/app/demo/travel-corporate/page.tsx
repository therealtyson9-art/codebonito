export const dynamic = "force-dynamic";
export default function TravelCorporateDemo() {
  const services = [
    { title: "Corporate Travel", icon: "&#128188;", description: "End-to-end managed travel for businesses of all sizes. Negotiated rates, policy compliance, and 24/7 support for your entire organization." },
    { title: "Leisure Vacations", icon: "&#9728;", description: "Expert-planned holidays for individuals and families. From beach getaways to cultural explorations, we handle every detail." },
    { title: "Group & Events", icon: "&#127915;", description: "Conferences, incentive trips, and team retreats. We coordinate flights, accommodations, venues, and ground logistics for groups of any size." },
    { title: "Luxury Collection", icon: "&#11088;", description: "Access to private villas, first-class cabins, and exclusive experiences. Dedicated concierge service for our most discerning travelers." },
  ]

  const topDestinations = [
    { city: "London", country: "United Kingdom", flights: "42 daily", hotels: "1,800+", avgSaving: "23%" },
    { city: "Tokyo", country: "Japan", flights: "18 daily", hotels: "950+", avgSaving: "19%" },
    { city: "Dubai", country: "UAE", flights: "31 daily", hotels: "1,200+", avgSaving: "27%" },
    { city: "New York", country: "United States", flights: "56 daily", hotels: "2,400+", avgSaving: "15%" },
    { city: "Singapore", country: "Singapore", flights: "24 daily", hotels: "780+", avgSaving: "21%" },
    { city: "Paris", country: "France", flights: "38 daily", hotels: "1,600+", avgSaving: "18%" },
  ]

  const testimonials = [
    { name: "Sarah Chen", title: "VP Operations, Meridian Tech", quote: "Atlas saved us $340K in travel spend last year while actually improving the booking experience for our 200+ travelers." },
    { name: "Robert Andersen", title: "CEO, Nordic Consulting Group", quote: "Their corporate program is seamless. Policy compliance went from 62% to 94% in the first quarter." },
    { name: "Maria Gonzalez", title: "Family of 5", quote: "We have used Atlas for three family vacations now. They found us a villa in Tuscany that we never would have discovered on our own." },
  ]

  const policies = [
    { policy: "Flexible Cancellation", detail: "Free cancellation up to 48 hours before departure on most bookings. Travel insurance options available at checkout." },
    { policy: "Price Match Guarantee", detail: "Find a lower published rate within 24 hours of booking and we will match it, plus apply a $50 travel credit." },
    { policy: "Duty of Care", detail: "Real-time traveler tracking, emergency assistance, and risk alerts for every destination in our network." },
  ]

  return (
    <div style={{ backgroundColor: "#ffffff", fontFamily: "'Hind', sans-serif" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Dropdown Nav */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded" style={{ backgroundColor: "#0077b6" }} />
            <span className="text-xl font-semibold" style={{ color: "#0077b6", fontFamily: "'Hind', sans-serif" }}>Atlas World Travel</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600" style={{ fontFamily: "'Hind', sans-serif" }}>
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#destinations" className="hover:text-gray-900">Destinations</a>
            <a href="#corporate" className="hover:text-gray-900">Corporate</a>
            <a href="#testimonials" className="hover:text-gray-900">Testimonials</a>
            <a href="#quote" className="hover:text-gray-900">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-gray-600">Sign In</button>
            <button className="px-5 py-2 text-sm text-white rounded-md font-medium" style={{ backgroundColor: "#0077b6" }}>Get a Quote</button>
          </div>
        </div>
      </nav>

      {/* Destination Grid Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-wider mb-3" style={{ color: "#0077b6" }}>Trusted by 2,000+ companies worldwide</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Hind', sans-serif" }}>
            Your World. Our Expertise.
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto" style={{ fontFamily: "'Hind', sans-serif", fontWeight: 300 }}>
            From corporate travel management to luxury leisure vacations, Atlas World Travel delivers seamless experiences across 190 countries.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["London", "Tokyo", "Dubai", "New York", "Singapore", "Paris"].map((city) => (
            <div key={city} className="rounded-lg overflow-hidden relative" style={{ backgroundColor: "#f0f7fb", height: "180px" }}>
              <div className="absolute inset-0 flex items-end p-4">
                <div>
                  <p className="text-white text-lg font-semibold drop-shadow-lg">{city}</p>
                </div>
              </div>
              <div className="absolute inset-0 opacity-20" style={{ backgroundColor: "#0077b6" }} />
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16" style={{ backgroundColor: "#f8fbfd" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-medium uppercase tracking-wider mb-2" style={{ color: "#0077b6" }}>What We Do</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-12" style={{ fontFamily: "'Hind', sans-serif" }}>Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-4" dangerouslySetInnerHTML={{ __html: service.icon }} />
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ fontFamily: "'Hind', sans-serif" }}>{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "'Hind', sans-serif", fontWeight: 300 }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section id="destinations" className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-wider mb-2" style={{ color: "#0077b6" }}>Popular Routes</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-12" style={{ fontFamily: "'Hind', sans-serif" }}>Top Destinations</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2" style={{ borderColor: "#0077b6" }}>
                <th className="text-left py-3 font-semibold text-gray-900">Destination</th>
                <th className="text-left py-3 font-semibold text-gray-900">Daily Flights</th>
                <th className="text-left py-3 font-semibold text-gray-900">Hotel Partners</th>
                <th className="text-left py-3 font-semibold text-gray-900">Avg. Savings</th>
              </tr>
            </thead>
            <tbody>
              {topDestinations.map((dest) => (
                <tr key={dest.city} className="border-b border-gray-100">
                  <td className="py-4">
                    <span className="font-medium text-gray-900">{dest.city}</span>
                    <span className="text-gray-400 ml-2">{dest.country}</span>
                  </td>
                  <td className="py-4 text-gray-600">{dest.flights}</td>
                  <td className="py-4 text-gray-600">{dest.hotels}</td>
                  <td className="py-4 font-medium" style={{ color: "#0077b6" }}>{dest.avgSaving}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Travel Policies */}
      <section id="corporate" className="py-16" style={{ backgroundColor: "#f8fbfd" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-medium uppercase tracking-wider mb-2" style={{ color: "#0077b6" }}>Peace of Mind</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-12" style={{ fontFamily: "'Hind', sans-serif" }}>Travel Policies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {policies.map((p) => (
              <div key={p.policy} className="bg-white rounded-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: "'Hind', sans-serif" }}>{p.policy}</h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "'Hind', sans-serif", fontWeight: 300 }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-wider mb-2" style={{ color: "#0077b6" }}>What Clients Say</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-12" style={{ fontFamily: "'Hind', sans-serif" }}>Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-600 leading-relaxed mb-6 italic" style={{ fontFamily: "'Hind', sans-serif" }}>&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-400">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Request Quote */}
      <section id="quote" className="py-16" style={{ backgroundColor: "#0077b6" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Hind', sans-serif" }}>Request a Quote</h2>
          <p className="text-base mb-8" style={{ color: "#b3ddf0", fontFamily: "'Hind', sans-serif", fontWeight: 300 }}>
            Whether you need corporate travel management for your team or a personalized vacation, our consultants are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Business email" className="px-6 py-3 rounded-md text-sm w-72 outline-none" style={{ fontFamily: "'Hind', sans-serif" }} />
            <button className="px-8 py-3 rounded-md text-sm font-semibold bg-white" style={{ color: "#0077b6", fontFamily: "'Hind', sans-serif" }}>Request Quote</button>
          </div>
        </div>
      </section>

      {/* Corporate Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: "'Hind', sans-serif" }}>Atlas World Travel</h4>
              <p className="text-sm text-gray-400" style={{ fontFamily: "'Hind', sans-serif", fontWeight: 300 }}>Full-service travel management for businesses and leisure travelers since 1998.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Corporate Travel</p><p>Leisure Vacations</p><p>Group Events</p><p>Luxury Collection</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>About Us</p><p>Careers</p><p>Press</p><p>Partners</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>1-800-ATLAS-00</p><p>corporate@atlasworld.com</p><p>350 Fifth Avenue, NYC</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">&copy; 2025 Atlas World Travel, Inc. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-gray-500">
              <span>IATA Accredited: 12-3 4567 8</span>
              <span>ASTA Member #4821</span>
              <span>GBTA Certified</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
