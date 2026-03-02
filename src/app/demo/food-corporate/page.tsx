export default function FoodCorporateDemo() {
  const menuHighlights = {
    breads: [
      { name: "Sourdough Boule", price: "$7.50", description: "Our signature 48-hour fermented sourdough with a crackling crust and open, tangy crumb." },
      { name: "Multigrain Loaf", price: "$8.25", description: "Seven grains and seeds including flax, sunflower, and millet. Hearty and nutritious." },
      { name: "Olive Focaccia", price: "$6.75", description: "Rosemary-scented flatbread studded with Kalamata olives and finished with sea salt." },
    ],
    pastries: [
      { name: "Almond Croissant", price: "$4.95", description: "Twice-baked with frangipane cream and toasted almond slices. Our best seller since day one." },
      { name: "Morning Bun", price: "$4.50", description: "Orange zest and cinnamon sugar wrapped in laminated dough. Served warm every morning." },
    ],
    sandwiches: [
      { name: "Turkey & Brie", price: "$12.50", description: "Roasted turkey, brie, arugula, and cranberry mustard on house-baked ciabatta." },
      { name: "Caprese Panini", price: "$11.00", description: "Fresh mozzarella, heirloom tomato, basil pesto on pressed sourdough." },
    ],
    drinks: [
      { name: "House Drip Coffee", price: "$3.25", description: "Single-origin beans roasted weekly by our partner roaster, Sunbird Coffee." },
      { name: "Golden Turmeric Latte", price: "$5.50", description: "Oat milk, turmeric, ginger, and honey. Warm, golden, and anti-inflammatory." },
    ],
  }

  const locations = [
    { city: "Portland", address: "412 NW 23rd Ave", hours: "6am-7pm" },
    { city: "Seattle", address: "1901 Pike Place", hours: "6am-6pm" },
    { city: "San Francisco", address: "789 Valencia St", hours: "6:30am-7pm" },
    { city: "Denver", address: "2100 Larimer St", hours: "6am-6pm" },
    { city: "Austin", address: "1504 South Congress", hours: "7am-7pm" },
    { city: "Nashville", address: "601 12th Ave S", hours: "6:30am-6pm" },
  ]

  const cateringPackages = [
    { name: "Breakfast Board", serves: "10-15", price: "$95", items: "Assorted pastries, seasonal fruit, yogurt parfaits, house granola, orange juice" },
    { name: "Sandwich Platter", serves: "8-12", price: "$120", items: "Mixed sandwich selection on house breads, house-made chips, pickles, cookie assortment" },
    { name: "Bread & Spread", serves: "15-20", price: "$75", items: "Three artisan loaves, whipped butter, olive tapenade, honey, seasonal jam" },
  ]

  return (
    <div style={{ backgroundColor: "#faf8f5", fontFamily: "'Assistant', sans-serif" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Standard Nav */}
      <nav className="border-b" style={{ borderColor: "#e8e2da" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: "#7c4a2d" }} />
            <span className="text-xl font-bold" style={{ color: "#7c4a2d", fontFamily: "'Assistant', sans-serif" }}>Golden Grain Bakeries</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#7c4a2d", fontFamily: "'Assistant', sans-serif", fontWeight: 500 }}>
            <a href="#story" className="hover:opacity-70">Our Story</a>
            <a href="#menu" className="hover:opacity-70">Menu</a>
            <a href="#locations" className="hover:opacity-70">Locations</a>
            <a href="#catering" className="hover:opacity-70">Catering</a>
            <a href="#franchise" className="hover:opacity-70">Franchise</a>
            <a href="#careers" className="hover:opacity-70">Careers</a>
          </div>
          <button className="px-5 py-2 text-sm text-white rounded-md font-semibold" style={{ backgroundColor: "#7c4a2d" }}>Order Online</button>
        </div>
      </nav>

      {/* Restaurant Chain Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="rounded-xl overflow-hidden relative" style={{ backgroundColor: "#f0ebe3", height: "380px" }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#a06b3f" }}>12 Locations Across the West</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#7c4a2d", fontFamily: "'Assistant', sans-serif" }}>
              Baked Fresh. Every Morning.<br />Every Location.
            </h1>
            <p className="text-lg max-w-xl" style={{ color: "#a06b3f", fontFamily: "'Assistant', sans-serif", fontWeight: 300 }}>
              Real sourdough. Real butter. Real people. Golden Grain has been your neighborhood bakery since 2011.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#a06b3f" }}>Since 2011</p>
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#7c4a2d", fontFamily: "'Assistant', sans-serif" }}>Our Story</h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: "#8a6540", fontWeight: 300 }}>
            Golden Grain started as a single bakery in Portland with a 20-year-old sourdough starter, a used deck oven, and a belief that great bread should not cost $12 a loaf. Founders Marta and Erik Lindgren met in culinary school, spent three years baking in Europe, and came home determined to make artisan-quality bread accessible to every neighborhood.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#8a6540", fontWeight: 300 }}>
            Today we operate twelve bakeries across six cities. Every location bakes from scratch daily using the same starter, the same flour from Cairnspring Mills, and the same commitment to honest ingredients. We have never used dough conditioners, artificial preservatives, or frozen parbakes. If it is in our case, it was made that morning by the team behind the counter.
          </p>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-16" style={{ backgroundColor: "#f0ebe3" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#a06b3f" }}>From Our Ovens</p>
          <h2 className="text-3xl font-bold mb-12" style={{ color: "#7c4a2d", fontFamily: "'Assistant', sans-serif" }}>Menu Highlights</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {Object.entries(menuHighlights).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-bold uppercase tracking-wide mb-4" style={{ color: "#7c4a2d" }}>{category}</h3>
                {items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start py-3 border-b" style={{ borderColor: "#e0d8cc" }}>
                    <div className="flex-1 pr-4">
                      <p className="text-sm font-semibold" style={{ color: "#7c4a2d" }}>{item.name}</p>
                      <p className="text-xs mt-1" style={{ color: "#a06b3f", fontWeight: 300 }}>{item.description}</p>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: "#7c4a2d" }}>{item.price}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#a06b3f" }}>Find Us</p>
        <h2 className="text-3xl font-bold mb-12" style={{ color: "#7c4a2d", fontFamily: "'Assistant', sans-serif" }}>Our Locations</h2>
        <div className="rounded-xl mb-8" style={{ backgroundColor: "#f0ebe3", height: "200px" }}>
          <div className="h-full flex items-center justify-center text-sm" style={{ color: "#a06b3f" }}>Map Placeholder &mdash; 12 Locations Across 6 Cities</div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((loc) => (
            <div key={loc.city} className="rounded-lg p-5 border" style={{ borderColor: "#e8e2da" }}>
              <h3 className="text-base font-bold mb-1" style={{ color: "#7c4a2d" }}>{loc.city}</h3>
              <p className="text-sm" style={{ color: "#a06b3f", fontWeight: 300 }}>{loc.address}</p>
              <p className="text-xs mt-1" style={{ color: "#b89070" }}>Open {loc.hours}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Catering */}
      <section id="catering" className="py-16" style={{ backgroundColor: "#f0ebe3" }}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#a06b3f" }}>For Groups</p>
          <h2 className="text-3xl font-bold mb-12" style={{ color: "#7c4a2d", fontFamily: "'Assistant', sans-serif" }}>Catering Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cateringPackages.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-bold mb-1" style={{ color: "#7c4a2d" }}>{pkg.name}</h3>
                <p className="text-sm mb-3" style={{ color: "#a06b3f" }}>Serves {pkg.serves} &middot; {pkg.price}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#8a6540", fontWeight: 300 }}>{pkg.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Info */}
      <section id="franchise" className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#a06b3f" }}>Grow With Us</p>
        <h2 className="text-3xl font-bold mb-6" style={{ color: "#7c4a2d", fontFamily: "'Assistant', sans-serif" }}>Franchise Opportunities</h2>
        <p className="text-base leading-relaxed mb-8" style={{ color: "#8a6540", fontWeight: 300 }}>
          We are selectively expanding to new markets. Golden Grain franchise partners receive full training at our Portland headquarters, ongoing supply chain support, and access to our proprietary sourdough starter. We are looking for operators who care about community, quality, and early mornings.
        </p>
        <button className="px-8 py-3 text-sm text-white rounded-md font-semibold" style={{ backgroundColor: "#7c4a2d" }}>Request Franchise Info</button>
      </section>

      {/* Careers */}
      <section id="careers" className="py-16" style={{ backgroundColor: "#7c4a2d" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#d4a87a" }}>Join the Team</p>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Assistant', sans-serif" }}>We Are Hiring</h2>
          <p className="text-base mb-8" style={{ color: "#d4a87a", fontWeight: 300 }}>
            Bakers, baristas, shift leads, and bakery managers across all twelve locations. Competitive pay, health benefits, and all the bread you can carry home.
          </p>
          <button className="px-8 py-3 text-sm font-semibold rounded-md" style={{ backgroundColor: "#faf8f5", color: "#7c4a2d" }}>View Open Positions</button>
        </div>
      </section>

      {/* Corporate Footer */}
      <footer className="border-t" style={{ borderColor: "#e8e2da" }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <h4 className="font-bold text-base mb-2" style={{ color: "#7c4a2d" }}>Golden Grain Bakeries</h4>
              <p className="text-sm" style={{ color: "#a06b3f", fontWeight: 300 }}>Artisan baking for every neighborhood since 2011.</p>
            </div>
            <div className="flex gap-8 text-sm" style={{ color: "#a06b3f", fontWeight: 500 }}>
              <div className="space-y-1">
                <p>Portland (3)</p><p>Seattle (2)</p><p>San Francisco (2)</p>
              </div>
              <div className="space-y-1">
                <p>Denver (2)</p><p>Austin (2)</p><p>Nashville (1)</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "#e8e2da" }}>
            <p className="text-xs" style={{ color: "#b89070" }}>&copy; 2025 Golden Grain Bakeries, LLC. All rights reserved.</p>
            <div className="flex gap-6 text-xs" style={{ color: "#b89070" }}>
              <span>Privacy</span><span>Terms</span><span>Accessibility</span><span>Press</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
