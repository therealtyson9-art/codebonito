export default function RealestateMinimalistDemo() {
  const navLinks = ["Listings", "Neighborhoods", "Sustainability", "Agents", "Contact"]

  const listings = [
    { address: "142 Cedar Grove Lane, Portland, OR", price: "$685,000", beds: 3, baths: 2, sqft: "2,150", tag: "LEED Certified", desc: "Solar-equipped craftsman with native landscaping, rainwater collection, and an energy-efficient heat pump system." },
    { address: "28 Willow Creek Drive, Eugene, OR", price: "$520,000", beds: 4, baths: 3, sqft: "2,800", tag: "Net-Zero Ready", desc: "Modern farmhouse with triple-pane windows, cellulose insulation, and a 12kW solar array producing near-zero utility bills." },
    { address: "709 Alder Street, Bend, OR", price: "$475,000", beds: 2, baths: 2, sqft: "1,640", tag: "New Listing", desc: "Contemporary cottage with reclaimed wood finishes, low-VOC paints, and a certified organic community garden." },
    { address: "55 Fern Valley Road, Ashland, OR", price: "$892,000", beds: 5, baths: 4, sqft: "3,400", tag: "Open House", desc: "Passive house design with geothermal heating, EV charging, and floor-to-ceiling windows framing mountain views." },
  ]

  const neighborhoods = [
    { name: "Alberta Arts District", city: "Portland", highlight: "Walkable streets, local galleries, farm-to-table restaurants, and a thriving community market every Saturday." },
    { name: "South Eugene", city: "Eugene", highlight: "Tree-lined avenues near the University of Oregon with excellent schools, bike paths, and access to Spencer Butte trails." },
    { name: "Old Mill District", city: "Bend", highlight: "Riverfront living with boutique shopping, craft breweries, and year-round outdoor recreation at your doorstep." },
    { name: "Railroad District", city: "Ashland", highlight: "Historic charm near the Oregon Shakespeare Festival with locally owned shops, organic cafes, and mountain proximity." },
  ]

  const agents = [
    { name: "Clara Nguyen", title: "Principal Broker", bio: "15 years specializing in sustainable properties across the Pacific Northwest. Clara holds a LEED Green Associate credential and has closed over $120M in eco-certified homes.", photo: "CN" },
    { name: "Eli Whitaker", title: "Buyer Specialist", bio: "Former environmental engineer turned real estate advisor. Eli helps first-time buyers navigate energy audits, green certifications, and sustainable financing options.", photo: "EW" },
    { name: "Mariana Reyes", title: "Listing Agent", bio: "Known for her staging expertise and marketing strategy, Mariana showcases each property's green features to attract environmentally conscious buyers.", photo: "MR" },
  ]

  const certifications = [
    { name: "LEED Certified", desc: "Leadership in Energy and Environmental Design — the most widely used green building rating system in the world." },
    { name: "Energy Star", desc: "EPA-certified homes that are at least 10% more energy efficient than standard new construction." },
    { name: "Passive House", desc: "Ultra-low energy buildings that require minimal heating and cooling, reducing carbon footprint by up to 90%." },
    { name: "Net-Zero Ready", desc: "Homes designed to produce as much energy as they consume annually through on-site renewable generation." },
  ]

  return (
    <div style={{ fontFamily: "'Albert Sans', sans-serif" }} className="min-h-screen bg-white text-gray-900">
      <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Search-Bar Nav */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div className="text-xl font-bold tracking-tight" style={{ color: "#6b8f71" }}>Greenleaf Realty</div>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{link}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <input type="text" placeholder="Search by city, zip, or address..." className="text-sm px-4 py-2 border border-gray-200 rounded-full w-64 focus:outline-none focus:border-gray-400" />
          <button className="text-sm font-semibold text-white px-5 py-2 rounded-full" style={{ backgroundColor: "#6b8f71" }}>Search</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-28 px-8 text-center" style={{ backgroundColor: "#f0f7f1" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#6b8f71" }}>Eco-Friendly Real Estate</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">Find a Home That Respects the Earth</h1>
          <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">Greenleaf Realty specializes in sustainable, energy-efficient, and environmentally certified properties across the Pacific Northwest.</p>
          <button className="text-white font-semibold px-8 py-3 rounded-full" style={{ backgroundColor: "#6b8f71" }}>Browse All Listings</button>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#6b8f71" }}>Featured Listings</p>
        <h2 className="text-3xl font-bold mb-12">Homes That Make a Difference</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {listings.map((l) => (
            <div key={l.address} className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 flex items-center justify-center" style={{ backgroundColor: "#f0f7f1" }}>
                <span className="text-xs font-bold tracking-widest px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#6b8f71" }}>{l.tag}</span>
              </div>
              <div className="p-6">
                <p className="text-2xl font-bold mb-1" style={{ color: "#6b8f71" }}>{l.price}</p>
                <p className="text-sm font-medium text-gray-900 mb-2">{l.address}</p>
                <p className="text-xs text-gray-500 mb-3">{l.beds} bed &middot; {l.baths} bath &middot; {l.sqft} sq ft</p>
                <p className="text-sm text-gray-600 leading-relaxed">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 px-8" style={{ backgroundColor: "#f0f7f1" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#6b8f71" }}>Neighborhood Guide</p>
          <h2 className="text-3xl font-bold mb-12">Explore Our Communities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {neighborhoods.map((n) => (
              <div key={n.name} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-lg font-bold mb-1">{n.name}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: "#6b8f71" }}>{n.city}, Oregon</p>
                <p className="text-sm text-gray-600 leading-relaxed">{n.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 px-8 text-white" style={{ backgroundColor: "#6b8f71" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 opacity-80">Our Commitment</p>
          <h2 className="text-3xl font-bold mb-6">Real Estate With a Purpose</h2>
          <p className="text-lg opacity-90 leading-relaxed mb-8">Every transaction at Greenleaf includes a complimentary home energy audit. We donate 1% of every commission to reforestation nonprofits and partner exclusively with eco-certified inspectors and contractors. Sustainability is not a feature we market — it is the foundation of everything we do.</p>
          <div className="flex gap-12 justify-center text-center">
            <div><p className="text-3xl font-bold">1,200+</p><p className="text-sm opacity-70">Homes Sold</p></div>
            <div><p className="text-3xl font-bold">$8.2M</p><p className="text-sm opacity-70">Energy Savings</p></div>
            <div><p className="text-3xl font-bold">45K</p><p className="text-sm opacity-70">Trees Planted</p></div>
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#6b8f71" }}>Our Agents</p>
        <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {agents.map((a) => (
            <div key={a.name} className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-lg font-bold" style={{ backgroundColor: "#6b8f71" }}>{a.photo}</div>
              <h3 className="text-lg font-bold">{a.name}</h3>
              <p className="text-sm mb-3" style={{ color: "#6b8f71" }}>{a.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{a.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Green Certifications */}
      <section className="py-20 px-8" style={{ backgroundColor: "#f0f7f1" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#6b8f71" }}>Green Certifications</p>
          <h2 className="text-3xl font-bold mb-12">What We Look For</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((c) => (
              <div key={c.name} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-sm font-bold mb-2" style={{ color: "#6b8f71" }}>{c.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-8 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Green Home?</h2>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">Whether you are buying, selling, or simply exploring sustainable living, our team is here to help you every step of the way.</p>
        <div className="flex gap-4 justify-center">
          <button className="text-white font-semibold px-10 py-3 rounded-full" style={{ backgroundColor: "#6b8f71" }}>Contact Us</button>
          <button className="font-semibold px-10 py-3 rounded-full border-2" style={{ borderColor: "#6b8f71", color: "#6b8f71" }}>Schedule a Tour</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-lg font-bold" style={{ color: "#6b8f71" }}>Greenleaf Realty</div>
          <p className="text-xs text-gray-400">MLS# OR-2024-GL &middot; Licensed in Oregon &middot; Equal Housing Opportunity</p>
          <p className="text-xs text-gray-400">&copy; 2025 Greenleaf Realty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
