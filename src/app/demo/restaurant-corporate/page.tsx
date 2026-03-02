export default function RestaurantCorporateDemo() {
  const locations = [
    { city: "New York", address: "350 Park Ave, Midtown", hours: "11AM–10PM" },
    { city: "Chicago", address: "200 N Michigan Ave", hours: "11AM–10PM" },
    { city: "Los Angeles", address: "8500 Beverly Blvd", hours: "11AM–11PM" },
    { city: "Houston", address: "1200 Westheimer Rd", hours: "11AM–10PM" },
  ]

  const menuItems = [
    { name: "Grilled Atlantic Salmon", desc: "Wild-caught, quinoa pilaf, steamed broccoli, lemon dill sauce", price: "$24.99", cal: 520, badges: ["Gluten-Free", "High Protein"] },
    { name: "Classic Angus Burger", desc: "1/3 lb patty, aged cheddar, lettuce, tomato, brioche bun, house fries", price: "$18.99", cal: 780, badges: ["Popular"] },
    { name: "Mediterranean Bowl", desc: "Falafel, hummus, tabbouleh, pickled onion, tahini, warm pita", price: "$16.99", cal: 620, badges: ["Vegetarian"] },
    { name: "Chicken Caesar Wrap", desc: "Grilled chicken breast, romaine, Parmesan, Caesar dressing, flour tortilla", price: "$15.99", cal: 590, badges: ["High Protein"] },
    { name: "Thai Shrimp Stir-Fry", desc: "Tiger shrimp, snap peas, bell pepper, Thai basil, jasmine rice", price: "$22.99", cal: 480, badges: ["Gluten-Free"] },
    { name: "Plant-Based Impossible Burger", desc: "Impossible patty, vegan cheese, avocado, pickles, whole wheat bun", price: "$19.99", cal: 650, badges: ["Vegan", "Popular"] },
  ]

  const stats = [
    { value: "127", label: "Locations Nationwide" },
    { value: "15M+", label: "Guests Served Annually" },
    { value: "92%", label: "Local Sourcing Rate" },
    { value: "4.6", label: "Average Guest Rating" },
  ]

  const testimonials = [
    { name: "David Chen", role: "Food Critic, Daily Post", text: "Consistent quality across every location I've visited. The nutritional transparency is a game-changer for health-conscious diners." },
    { name: "Maria Santos", role: "Regular Guest, Chicago", text: "My family eats here twice a week. The kids love the menu options and I love knowing exactly what's in every dish." },
    { name: "Tom Bradley", role: "Corporate Events Manager", text: "We've hosted over 30 team dinners at Harvest Table. The private dining coordination is always seamless and professional." },
  ]

  const badgeColor = (badge: string) => {
    if (badge === "Gluten-Free") return "bg-green-100 text-green-700"
    if (badge === "Vegetarian") return "bg-emerald-100 text-emerald-700"
    if (badge === "Vegan") return "bg-lime-100 text-lime-700"
    if (badge === "High Protein") return "bg-blue-100 text-blue-700"
    if (badge === "Popular") return "bg-amber-100 text-amber-700"
    return "bg-gray-100 text-gray-700"
  }

  return (
    <div className="min-h-screen bg-white text-gray-800" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>

      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-xs py-2">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span>Order Online &mdash; Free delivery on orders $35+</span>
          <div className="hidden md:flex space-x-6">
            <span className="cursor-pointer hover:underline">Careers</span>
            <span className="cursor-pointer hover:underline">Franchise Info</span>
            <span className="cursor-pointer hover:underline">Gift Cards</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">HT</div>
            <span className="text-lg font-semibold text-gray-900">Harvest Table</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {["Menu", "Locations", "Nutrition", "Catering", "About Us"].map((link) => (
              <span key={link} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors font-medium">
                {link}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 cursor-pointer hover:text-blue-600">Sign In</span>
            <span className="bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded cursor-pointer hover:bg-blue-700 transition-colors">
              Order Now
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Now in 127 Locations
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Fresh food you can <span className="text-blue-600">feel good</span> about.
            </h1>
            <p className="text-lg text-gray-500 mt-4 leading-relaxed">
              Responsibly sourced ingredients, full nutritional transparency, and a menu designed for
              every dietary need. Dine in, take out, or order for delivery.
            </p>
            <div className="mt-8 flex gap-3">
              <span className="bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded cursor-pointer hover:bg-blue-700 transition-colors">
                View Full Menu
              </span>
              <span className="border border-gray-300 text-gray-700 text-sm font-medium px-6 py-3 rounded cursor-pointer hover:border-gray-400 transition-colors">
                Find a Location
              </span>
            </div>
          </div>
          <div className="h-72 bg-gradient-to-br from-blue-100 to-green-50 rounded-lg border border-gray-200" />
        </div>
      </section>

      {/* Locations */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Our Locations</h2>
            <p className="text-gray-500 mt-1">Find a Harvest Table near you</p>
          </div>
          <span className="text-sm text-blue-600 font-medium cursor-pointer hover:underline">View all locations →</span>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {locations.map((loc) => (
            <div key={loc.city} className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer">
              <h3 className="font-semibold text-gray-900">{loc.city}</h3>
              <p className="text-sm text-gray-500 mt-1">{loc.address}</p>
              <p className="text-xs text-gray-400 mt-2">{loc.hours}</p>
              <span className="text-xs text-blue-600 font-medium mt-3 inline-block">Get Directions →</span>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Popular Menu Items</h2>
            <p className="text-gray-500 mt-1">All items include full nutritional information</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {menuItems.map((item) => (
              <div key={item.name} className="bg-white border border-gray-200 rounded-lg p-5 flex justify-between hover:shadow-sm transition-shadow">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    {item.badges.map((badge) => (
                      <span key={badge} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${badgeColor(badge)}`}>
                        {badge}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  <p className="text-xs text-gray-400 mt-2">{item.cal} cal</p>
                </div>
                <div className="ml-4 text-right">
                  <span className="font-bold text-gray-900">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <span className="text-sm text-blue-600 font-medium cursor-pointer hover:underline">
              View complete menu with nutritional details →
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Commitment to Quality</h2>
            <p className="text-blue-200 leading-relaxed mb-4">
              Since 2012, Harvest Table has been on a mission to make nutritious, delicious food accessible to everyone.
              We partner with over 200 local farms and suppliers to ensure every ingredient meets our standards.
            </p>
            <p className="text-blue-200 leading-relaxed">
              Our team of registered dietitians reviews every menu item. We publish complete allergen information,
              macronutrient breakdowns, and sourcing details for full transparency.
            </p>
          </div>
          <div className="h-64 bg-blue-800 rounded-lg" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900">What Our Guests Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-gray-200 rounded-lg p-6">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">&quot;{t.text}&quot;</p>
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to dine with us?</h2>
          <p className="text-gray-500 mb-8">Book a table, order online, or plan your next corporate event.</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <span className="bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded cursor-pointer hover:bg-blue-700 transition-colors">
              Reserve a Table
            </span>
            <span className="border border-gray-300 text-gray-700 text-sm font-medium px-6 py-3 rounded cursor-pointer hover:border-gray-400 transition-colors">
              Order Online
            </span>
            <span className="border border-gray-300 text-gray-700 text-sm font-medium px-6 py-3 rounded cursor-pointer hover:border-gray-400 transition-colors">
              Corporate Catering
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-white font-semibold">Harvest Table</span>
              <p className="text-sm mt-2">Fresh food you can feel good about. Serving communities across America since 2012.</p>
            </div>
            {[
              { title: "Company", links: ["About Us", "Careers", "Press", "Investor Relations"] },
              { title: "Support", links: ["Contact Us", "FAQ", "Allergen Info", "Accessibility"] },
              { title: "Connect", links: ["Instagram", "Facebook", "Twitter", "LinkedIn"] },
            ].map((col) => (
              <div key={col.title}>
                <span className="text-white font-semibold text-sm">{col.title}</span>
                <div className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <p key={link} className="text-sm cursor-pointer hover:text-white transition-colors">{link}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs">&copy; 2026 Harvest Table Inc. All rights reserved.</p>
            <div className="flex space-x-6 text-xs">
              <span className="cursor-pointer hover:text-white">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white">Terms of Service</span>
              <span className="cursor-pointer hover:text-white">Accessibility</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
