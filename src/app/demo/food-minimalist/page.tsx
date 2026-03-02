export default function FoodMinimalistDemo() {
  const navLinks = ["Menu", "How It Works", "Dietary", "Reviews"]

  const categories = [
    { name: "Bowls", desc: "Hearty grain and protein bowls", icon: "🥗" },
    { name: "Salads", desc: "Crisp seasonal greens", icon: "🥬" },
    { name: "Wraps", desc: "Hand-rolled with fresh fillings", icon: "🌯" },
    { name: "Smoothies", desc: "Cold-pressed and blended", icon: "🥤" },
  ]

  const popularItems = [
    { name: "Mediterranean Power Bowl", desc: "Quinoa, grilled chicken, roasted red peppers, kalamata olives, cucumber, and tahini drizzle", price: "$15" },
    { name: "Harvest Kale Salad", desc: "Tuscan kale, roasted sweet potato, dried cranberries, toasted pecans, maple vinaigrette", price: "$13" },
    { name: "Thai Peanut Wrap", desc: "Shredded cabbage, carrots, edamame, cilantro, crispy tofu, spicy peanut sauce", price: "$14" },
    { name: "Teriyaki Salmon Bowl", desc: "Wild-caught salmon, jasmine rice, pickled ginger, avocado, sesame seeds, teriyaki glaze", price: "$18" },
    { name: "Green Goddess Smoothie", desc: "Spinach, banana, mango, chia seeds, coconut water, fresh mint", price: "$12" },
    { name: "Chicken Caesar Wrap", desc: "Grilled chicken breast, romaine, shaved parmesan, house-made Caesar dressing, whole wheat tortilla", price: "$14" },
  ]

  const steps = [
    { step: "01", title: "Choose", desc: "Browse our menu and pick your favorite meals for the week. Filter by dietary needs." },
    { step: "02", title: "Order", desc: "Place your order by 8 PM and we'll prepare everything fresh the next morning." },
    { step: "03", title: "Enjoy", desc: "Your meals arrive at your door by noon, chilled and ready to heat or eat." },
  ]

  const filters = ["Vegan", "Gluten-Free", "Keto", "High Protein"]

  const reviews = [
    { name: "Priya S.", text: "I've been ordering every week for three months. The Mediterranean Bowl is my go-to lunch and I never get tired of it.", rating: 5 },
    { name: "David L.", text: "As someone with celiac, having reliable gluten-free options delivered fresh is life-changing. The quality is outstanding.", rating: 5 },
    { name: "Monica T.", text: "The portions are generous, ingredients are always fresh, and the packaging is compostable. What's not to love?", rating: 5 },
  ]

  return (
    <div className="min-h-screen bg-white text-stone-800" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-semibold tracking-wide text-green-600">FRESH PLATE</span>
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <span key={link} className="text-sm text-stone-500 hover:text-green-600 cursor-pointer transition-colors">{link}</span>
            ))}
          </div>
          <span className="px-6 py-2.5 bg-green-600 text-white text-sm font-medium rounded-full cursor-pointer hover:bg-green-700 transition-colors">Order Now</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-5xl mx-auto px-6 py-28 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-green-600 mb-4 font-medium">Farm-Fresh Delivery</p>
          <h1 className="text-5xl md:text-6xl font-light text-stone-900 leading-tight">Healthy meals,<br />delivered daily</h1>
          <p className="text-lg text-stone-500 font-light mt-6 max-w-lg mx-auto">Chef-prepared meals made with locally sourced ingredients, delivered to your door every morning.</p>
          <div className="mt-10 flex justify-center gap-4">
            <span className="px-8 py-3.5 bg-green-600 text-white text-sm font-medium rounded-full cursor-pointer hover:bg-green-700 transition-colors">View This Week&apos;s Menu</span>
            <span className="px-8 py-3.5 border border-stone-300 text-stone-700 text-sm rounded-full cursor-pointer hover:border-green-600 hover:text-green-600 transition-colors">How It Works</span>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-green-600 mb-3">Categories</p>
          <h2 className="text-3xl font-light text-stone-900">What are you craving?</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="border border-stone-100 rounded-xl p-6 text-center hover:border-green-200 hover:shadow-sm transition-all cursor-pointer">
              <span className="text-3xl">{cat.icon}</span>
              <h3 className="text-base font-medium text-stone-900 mt-3">{cat.name}</h3>
              <p className="text-sm text-stone-400 mt-1">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Items */}
      <section className="bg-stone-50">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-green-600 mb-3">Popular</p>
            <h2 className="text-3xl font-light text-stone-900">This Week&apos;s Favorites</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {popularItems.map((item) => (
              <div key={item.name} className="bg-white rounded-xl p-6 flex justify-between items-start hover:shadow-sm transition-shadow">
                <div className="flex-1 pr-4">
                  <h4 className="font-medium text-stone-900">{item.name}</h4>
                  <p className="text-sm text-stone-400 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-green-600 font-semibold whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-green-600 mb-3">Process</p>
          <h2 className="text-3xl font-light text-stone-900">How It Works</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <span className="text-4xl font-light text-green-600">{s.step}</span>
              <h3 className="text-xl font-medium text-stone-900 mt-4">{s.title}</h3>
              <p className="text-sm text-stone-500 mt-3 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dietary Filters */}
      <section className="border-y border-stone-100">
        <div className="max-w-5xl mx-auto px-6 py-14 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-green-600 mb-6">Dietary Preferences</p>
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <span key={filter} className="px-6 py-2.5 border border-green-200 text-green-700 text-sm rounded-full hover:bg-green-50 cursor-pointer transition-colors">{filter}</span>
            ))}
          </div>
          <p className="text-sm text-stone-400 mt-5">Every item on our menu is labeled so you can filter for exactly what fits your lifestyle.</p>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-green-600 mb-3">Testimonials</p>
          <h2 className="text-3xl font-light text-stone-900">What Our Customers Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.name} className="border border-stone-100 rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-green-500 text-sm">★</span>
                ))}
              </div>
              <p className="text-stone-500 leading-relaxed mb-6">{`"${review.text}"`}</p>
              <p className="text-sm font-medium text-stone-900">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Order CTA */}
      <section className="bg-green-600 text-white">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-light mb-4">Start eating better today</h2>
          <p className="text-green-100 font-light mb-8 max-w-md mx-auto">Your first order ships free. No subscription required -- order as often or as little as you like.</p>
          <span className="inline-block px-10 py-3.5 bg-white text-green-700 text-sm font-medium rounded-full cursor-pointer hover:bg-green-50 transition-colors">Browse This Week&apos;s Menu</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-lg font-semibold tracking-wide text-green-600">FRESH PLATE</span>
            <p className="text-sm text-stone-400 mt-1">Healthy meals delivered to Portland, Seattle, and San Francisco</p>
          </div>
          <div className="text-sm text-stone-400 space-x-8">
            <span className="cursor-pointer hover:text-green-600">Instagram</span>
            <span className="cursor-pointer hover:text-green-600">Twitter</span>
            <span className="cursor-pointer hover:text-green-600">hello@freshplate.co</span>
          </div>
          <p className="text-xs text-stone-300">&copy; 2026 Fresh Plate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
