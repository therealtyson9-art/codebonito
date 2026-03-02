export default function RestaurantCorporateDemo() {
  const restaurants = [
    { name: "Cornerstone Midtown", city: "New York", address: "350 Park Avenue, 2nd Floor, New York, NY 10022", cuisine: "Modern American", hours: "Mon-Sun 11:30 AM - 10:00 PM", seats: 180, desc: "Our flagship location in the heart of Midtown Manhattan, featuring a grand dining room with floor-to-ceiling windows overlooking Park Avenue." },
    { name: "Cornerstone Gold Coast", city: "Chicago", address: "200 N Michigan Avenue, Chicago, IL 60601", cuisine: "Contemporary Steakhouse", hours: "Mon-Sun 11:00 AM - 10:30 PM", seats: 150, desc: "A modern steakhouse concept on the Magnificent Mile with dry-aged cuts and an award-winning wine program of over 600 labels." },
    { name: "Cornerstone Beverly", city: "Los Angeles", address: "8500 Beverly Boulevard, Los Angeles, CA 90048", cuisine: "California Mediterranean", hours: "Mon-Sun 11:00 AM - 11:00 PM", seats: 200, desc: "Sun-drenched indoor-outdoor dining celebrating the produce and flavors of the California coast with a Mediterranean sensibility." },
    { name: "Cornerstone Brickell", city: "Miami", address: "1450 Brickell Avenue, Miami, FL 33131", cuisine: "Coastal Latin Fusion", hours: "Mon-Sun 11:30 AM - 11:30 PM", seats: 170, desc: "Our newest location brings together the bold flavors of Latin America with locally sourced Florida seafood and waterfront terrace dining." },
  ]

  const careers = [
    { title: "Executive Sous Chef", location: "Chicago", type: "Full-Time" },
    { title: "Restaurant General Manager", location: "Miami", type: "Full-Time" },
    { title: "Sommelier", location: "New York", type: "Full-Time" },
    { title: "Line Cook", location: "All Locations", type: "Full-Time" },
    { title: "Host / Hostess", location: "Los Angeles", type: "Part-Time" },
  ]

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Cabin, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight" style={{ color: "#722f37" }}>CORNERSTONE</span>
          <div className="hidden md:flex items-center space-x-8">
            {["Our Restaurants", "Private Dining", "Careers", "Gift Cards", "Press"].map((item) => (
              <span key={item} className="text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-900">{item}</span>
            ))}
            <button className="px-5 py-2 text-sm font-semibold text-white rounded" style={{ backgroundColor: "#722f37" }}>Newsletter</button>
          </div>
        </div>
      </nav>

      {/* Interior Photo Hero */}
      <section className="relative h-96 flex items-center justify-center" style={{ backgroundColor: "#f5f0eb" }}>
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-full h-full" style={{ background: "repeating-linear-gradient(45deg, #722f37 0, #722f37 1px, transparent 0, transparent 40px)" }} />
        </div>
        <div className="relative text-center px-6">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#722f37" }}>Cornerstone Hospitality Group</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Four Cities. One Standard.</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Since 2012, Cornerstone Hospitality has built a portfolio of restaurants united by a commitment to exceptional ingredients, genuine hospitality, and the communities we serve.
          </p>
        </div>
      </section>

      {/* Our Restaurants */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Restaurants</h2>
        <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">Each Cornerstone location has its own identity, menu, and character &mdash; shaped by the city it calls home.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {restaurants.map((r) => (
            <div key={r.name} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-48 flex items-center justify-center" style={{ backgroundColor: "#f9f5f1" }}>
                <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#722f37" }}>{r.city}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{r.name}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: "#722f37" }}>{r.cuisine} &middot; {r.seats} seats</p>
                <p className="text-sm text-gray-600 mb-3">{r.desc}</p>
                <p className="text-xs text-gray-400">{r.address}</p>
                <p className="text-xs text-gray-400">{r.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Private Dining */}
      <section className="py-20" style={{ backgroundColor: "#f9f5f1" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Private Dining & Events</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            From intimate boardroom dinners for 12 to full restaurant buyouts for 200, our events team crafts bespoke experiences at every Cornerstone location. Custom menus, curated wine pairings, and dedicated event coordinators ensure flawless execution.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Corporate Dinners", detail: "Private rooms with A/V, prix fixe menus, and dedicated service staff" },
              { label: "Celebrations", detail: "Birthdays, anniversaries, rehearsal dinners, and milestone events" },
              { label: "Full Buyouts", detail: "Exclusive use of any location for galas, launches, and large gatherings" },
            ].map((item) => (
              <div key={item.label} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
          <button className="mt-10 px-8 py-3 text-sm font-semibold text-white rounded" style={{ backgroundColor: "#722f37" }}>Inquire About Events</button>
        </div>
      </section>

      {/* Careers */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Careers</h2>
        <p className="text-center text-gray-500 mb-10">Join a team that values craft, growth, and genuine hospitality. Benefits include health insurance, dining discounts, and professional development.</p>
        <div className="space-y-4">
          {careers.map((job) => (
            <div key={job.title + job.location} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-semibold text-gray-900">{job.title}</p>
                <p className="text-sm text-gray-500">{job.location} &middot; {job.type}</p>
              </div>
              <button className="px-5 py-2 text-sm font-medium border rounded" style={{ borderColor: "#722f37", color: "#722f37" }}>Apply</button>
            </div>
          ))}
        </div>
      </section>

      {/* Gift Cards */}
      <section className="py-16" style={{ backgroundColor: "#722f37" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Gift Cards</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Give the gift of Cornerstone. Digital and physical gift cards are redeemable at all four locations. Available in amounts from $50 to $500.
          </p>
          <button className="px-8 py-3 text-sm font-semibold bg-white rounded" style={{ color: "#722f37" }}>Purchase a Gift Card</button>
        </div>
      </section>

      {/* Press */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">In the Press</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { outlet: "The New York Times", quote: "Cornerstone has quietly built one of America\u2019s most consistent restaurant groups." },
            { outlet: "Bon App\u00e9tit", quote: "The Gold Coast steakhouse sets a new standard for the genre \u2014 modern, confident, and impeccably sourced." },
            { outlet: "Eater", quote: "With Brickell, Cornerstone proves it can adapt its formula to any city without losing its soul." },
          ].map((item) => (
            <div key={item.outlet} className="p-6 border border-gray-200 rounded-lg">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#722f37" }}>{item.outlet}</p>
              <p className="text-sm text-gray-600 italic">&ldquo;{item.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16" style={{ backgroundColor: "#f9f5f1" }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Stay Connected</h2>
          <p className="text-sm text-gray-600 mb-6">Receive updates on seasonal menus, new openings, exclusive events, and chef collaborations.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <div className="flex-1 h-11 rounded border border-gray-300 px-4 flex items-center text-sm text-gray-400">your@email.com</div>
            <button className="px-6 h-11 text-sm font-semibold text-white rounded" style={{ backgroundColor: "#722f37" }}>Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {restaurants.map((r) => (
              <div key={r.city}>
                <p className="font-semibold text-gray-900 mb-1">{r.city}</p>
                <p className="text-xs text-gray-500">{r.address}</p>
                <p className="text-xs text-gray-500">{r.hours}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>&copy; 2025 Cornerstone Hospitality Group. All rights reserved.</p>
            <div className="flex space-x-6 mt-3 md:mt-0">
              <span className="cursor-pointer hover:text-gray-600">Privacy Policy</span>
              <span className="cursor-pointer hover:text-gray-600">Terms of Service</span>
              <span className="cursor-pointer hover:text-gray-600">Accessibility</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
