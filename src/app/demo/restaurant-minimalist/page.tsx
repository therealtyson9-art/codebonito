export default function RestaurantMinimalistDemo() {
  const navLinks = ["Menu", "Our Story", "Reservations", "Contact"]

  const starters = [
    { name: "Burrata & Heirloom Tomato", desc: "San Marzano, aged balsamic, fresh basil, Pugliese olive oil", price: "$18" },
    { name: "Tuna Tartare", desc: "Avocado mousse, sesame crisp, ponzu, microgreens", price: "$22" },
    { name: "Roasted Beet Salad", desc: "Whipped goat cheese, candied walnuts, honey vinaigrette", price: "$16" },
    { name: "French Onion Soup", desc: "Caramelized Vidalia onions, Gruyère crouton, sherry broth", price: "$14" },
  ]

  const mains = [
    { name: "Pan-Seared Salmon", desc: "Lemon beurre blanc, roasted fingerlings, haricots verts", price: "$34" },
    { name: "Braised Short Rib", desc: "Red wine reduction, creamy polenta, gremolata", price: "$38" },
    { name: "Roasted Half Chicken", desc: "Herb jus, garlic mashed potatoes, seasonal vegetables", price: "$28" },
    { name: "Wild Mushroom Risotto", desc: "Porcini, chanterelle, truffle oil, Parmigiano-Reggiano", price: "$26" },
  ]

  const desserts = [
    { name: "Crème Brûlée", desc: "Tahitian vanilla bean, caramelized sugar, fresh berries", price: "$14" },
    { name: "Chocolate Fondant", desc: "Molten center, salted caramel gelato, cocoa tuile", price: "$16" },
    { name: "Lemon Tart", desc: "Shortcrust pastry, Italian meringue, raspberry coulis", price: "$13" },
  ]

  const reviews = [
    { name: "Sarah M.", text: "The braised short rib was the best I've ever had. Perfectly tender with an incredibly rich sauce. We'll be back every week.", rating: 5 },
    { name: "James R.", text: "A beautifully understated dining experience. The menu is thoughtfully curated and every dish feels intentional.", rating: 5 },
    { name: "Elena K.", text: "From the warm bread basket to the crème brûlée, every course was exceptional. The staff made us feel so welcome.", rating: 5 },
  ]

  return (
    <div className="min-h-screen bg-white text-stone-800" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>

      {/* Navigation */}
      <nav className="border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-light tracking-widest uppercase text-stone-900">Ember & Vine</span>
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <span key={link} className="text-sm text-stone-500 hover:text-stone-900 cursor-pointer transition-colors">
                {link}
              </span>
            ))}
          </div>
          <span className="text-sm font-medium text-stone-900 cursor-pointer hover:text-amber-700 transition-colors">
            Book a Table
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="h-[70vh] bg-gradient-to-br from-stone-200 via-amber-50 to-stone-100 flex items-center justify-center">
          <div className="text-center max-w-2xl px-6">
            <p className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-6">Est. 2018 · Portland, Oregon</p>
            <h1 className="text-6xl md:text-7xl font-light text-stone-900 leading-tight">
              Simple food,<br />done well.
            </h1>
            <p className="text-lg text-stone-500 font-light mt-8 max-w-md mx-auto leading-relaxed">
              Seasonal ingredients, honest cooking, and a welcoming table for every guest.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <span className="inline-block px-8 py-3 bg-stone-900 text-white text-sm cursor-pointer hover:bg-stone-800 transition-colors">
                View Menu
              </span>
              <span className="inline-block px-8 py-3 border border-stone-300 text-stone-700 text-sm cursor-pointer hover:border-stone-500 transition-colors">
                Reserve
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-3">Our Menu</p>
          <h2 className="text-4xl font-light text-stone-900">What We're Serving</h2>
          <p className="text-stone-500 mt-4 font-light">Updated weekly with the freshest seasonal ingredients</p>
        </div>

        {/* Starters */}
        <div className="mb-16">
          <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-8 border-b border-stone-100 pb-3">Starters</h3>
          <div className="space-y-6">
            {starters.map((item) => (
              <div key={item.name} className="flex justify-between items-baseline">
                <div className="flex-1 pr-4">
                  <h4 className="text-base font-medium text-stone-900">{item.name}</h4>
                  <p className="text-sm text-stone-400 mt-1 font-light">{item.desc}</p>
                </div>
                <span className="text-base font-light text-stone-600 whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mains */}
        <div className="mb-16">
          <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-8 border-b border-stone-100 pb-3">Mains</h3>
          <div className="space-y-6">
            {mains.map((item) => (
              <div key={item.name} className="flex justify-between items-baseline">
                <div className="flex-1 pr-4">
                  <h4 className="text-base font-medium text-stone-900">{item.name}</h4>
                  <p className="text-sm text-stone-400 mt-1 font-light">{item.desc}</p>
                </div>
                <span className="text-base font-light text-stone-600 whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desserts */}
        <div>
          <h3 className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-8 border-b border-stone-100 pb-3">Desserts</h3>
          <div className="space-y-6">
            {desserts.map((item) => (
              <div key={item.name} className="flex justify-between items-baseline">
                <div className="flex-1 pr-4">
                  <h4 className="text-base font-medium text-stone-900">{item.name}</h4>
                  <p className="text-sm text-stone-400 mt-1 font-light">{item.desc}</p>
                </div>
                <span className="text-base font-light text-stone-600 whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div className="h-80 bg-gradient-to-b from-amber-100 to-stone-200 rounded" />
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-3">Our Story</p>
            <h2 className="text-3xl font-light text-stone-900 mb-6">Rooted in the Pacific Northwest</h2>
            <p className="text-stone-500 font-light leading-relaxed mb-4">
              Ember & Vine began as a simple idea: serve the best local ingredients with honest, unfussy cooking.
              Chef Anna Torres spent a decade in kitchens across Lyon and Copenhagen before returning home to Portland.
            </p>
            <p className="text-stone-500 font-light leading-relaxed">
              Every morning, we source directly from Willamette Valley farms and Oregon coast fisheries.
              Our menu changes with the seasons because we believe the best food is the freshest food.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-700 mb-3">Guest Reviews</p>
          <h2 className="text-4xl font-light text-stone-900">What People Are Saying</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.name} className="border border-stone-100 p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-amber-500 text-sm">★</span>
                ))}
              </div>
              <p className="text-stone-500 font-light leading-relaxed mb-6">{`"${review.text}"`}</p>
              <p className="text-sm font-medium text-stone-900">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-amber-300 mb-3">Reservations</p>
          <h2 className="text-4xl font-light mb-4">Join Us for Dinner</h2>
          <p className="text-stone-400 font-light mb-10 max-w-md mx-auto">
            We seat nightly from 5:00 PM to 10:00 PM, Tuesday through Sunday. Walk-ins welcome at the bar.
          </p>
          <div className="max-w-md mx-auto grid grid-cols-2 gap-4 mb-6">
            <input type="text" placeholder="Full Name" className="px-4 py-3 bg-stone-800 border border-stone-700 text-sm text-white placeholder-stone-500 outline-none focus:border-stone-500" readOnly />
            <input type="text" placeholder="Email" className="px-4 py-3 bg-stone-800 border border-stone-700 text-sm text-white placeholder-stone-500 outline-none focus:border-stone-500" readOnly />
            <input type="text" placeholder="Date" className="px-4 py-3 bg-stone-800 border border-stone-700 text-sm text-white placeholder-stone-500 outline-none focus:border-stone-500" readOnly />
            <input type="text" placeholder="Party Size" className="px-4 py-3 bg-stone-800 border border-stone-700 text-sm text-white placeholder-stone-500 outline-none focus:border-stone-500" readOnly />
          </div>
          <span className="inline-block px-10 py-3 bg-amber-600 hover:bg-amber-500 text-white text-sm cursor-pointer transition-colors">
            Request Reservation
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-lg font-light tracking-widest uppercase text-stone-900">Ember & Vine</span>
            <p className="text-sm text-stone-400 mt-1">742 NW Everett St, Portland, OR 97209</p>
          </div>
          <div className="text-sm text-stone-400 space-x-8">
            <span className="cursor-pointer hover:text-stone-700">Instagram</span>
            <span className="cursor-pointer hover:text-stone-700">Facebook</span>
            <span className="cursor-pointer hover:text-stone-700">(503) 555-0142</span>
          </div>
          <p className="text-xs text-stone-300">&copy; 2026 Ember & Vine. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
