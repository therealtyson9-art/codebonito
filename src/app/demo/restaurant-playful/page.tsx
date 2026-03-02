export default function RestaurantPlayfulDemo() {
  const categories = [
    {
      emoji: "\uD83C\uDF54",
      name: "Burgers & Sandwiches",
      color: "from-red-400 to-orange-400",
      items: [
        { name: "The Classic Smash", desc: "Double patty, American cheese, pickles, secret sauce, potato bun", price: "$14", emoji: "\uD83C\uDF54" },
        { name: "BBQ Bacon Stack", desc: "Smoky BBQ, crispy bacon, cheddar, onion rings, brioche", price: "$17", emoji: "\uD83E\uDD53" },
        { name: "Crispy Chicken Sando", desc: "Buttermilk fried chicken, slaw, spicy mayo, dill pickles", price: "$15", emoji: "\uD83D\uDC14" },
      ],
    },
    {
      emoji: "\uD83C\uDF55",
      name: "Pizzas & Flatbreads",
      color: "from-orange-400 to-yellow-400",
      items: [
        { name: "Margherita Classica", desc: "San Marzano tomatoes, fresh mozzarella, basil, olive oil", price: "$16", emoji: "\uD83C\uDF45" },
        { name: "Truffle Mushroom", desc: "Wild mushroom mix, fontina, truffle oil, arugula", price: "$19", emoji: "\uD83C\uDF44" },
        { name: "Spicy Pepperoni", desc: "Cup-and-char pepperoni, mozzarella, hot honey drizzle", price: "$17", emoji: "\uD83C\uDF36\uFE0F" },
      ],
    },
    {
      emoji: "\uD83C\uDF7D\uFE0F",
      name: "Big Plates",
      color: "from-yellow-400 to-green-400",
      items: [
        { name: "Honey Garlic Salmon", desc: "Pan-seared salmon, honey garlic glaze, rice, sesame greens", price: "$26", emoji: "\uD83D\uDC1F" },
        { name: "Mac & Cheese Deluxe", desc: "Four-cheese blend, truffle breadcrumbs, crispy shallots", price: "$18", emoji: "\uD83E\uDDC0" },
        { name: "Steak Frites", desc: "8oz NY strip, garlic butter, hand-cut fries, herb salad", price: "$32", emoji: "\uD83E\uDD69" },
      ],
    },
    {
      emoji: "\uD83C\uDF70",
      name: "Sweet Treats",
      color: "from-pink-400 to-red-400",
      items: [
        { name: "Cookie Skillet", desc: "Warm chocolate chip cookie, vanilla ice cream, caramel drizzle", price: "$12", emoji: "\uD83C\uDF6A" },
        { name: "Churro Bites", desc: "Cinnamon sugar, chocolate dipping sauce, whipped cream", price: "$10", emoji: "\u2728" },
        { name: "Mango Sticky Rice", desc: "Coconut cream, toasted sesame, fresh mango slices", price: "$11", emoji: "\uD83E\uDD6D" },
      ],
    },
  ]

  const reviews = [
    { name: "Priya K.", emoji: "\uD83E\uDD29", text: "The cookie skillet is INSANE. We ordered two! Best comfort food spot in the whole city.", rating: 5 },
    { name: "Jake T.", emoji: "\uD83E\uDD24", text: "Came for the burgers, stayed for the vibes. The Classic Smash is officially my personality.", rating: 5 },
    { name: "Sofia L.", emoji: "\uD83D\uDE0D", text: "Took my kids here and they literally cheered when the food came out. The churro bites are perfection!", rating: 5 },
  ]

  const funFacts = [
    { emoji: "\uD83C\uDF54", stat: "50,000+", label: "Burgers Served" },
    { emoji: "\u2B50", stat: "4.9", label: "Average Rating" },
    { emoji: "\uD83C\uDF89", stat: "3 Years", label: "Of Good Times" },
    { emoji: "\uD83D\uDC9B", stat: "100%", label: "Made With Love" },
  ]

  return (
    <div className="min-h-screen bg-orange-50 text-gray-800" style={{ fontFamily: "Nunito, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-black text-orange-500">
            <span className="mr-1">\uD83C\uDF73</span> Sunny Side
          </span>
          <div className="hidden md:flex items-center space-x-8">
            {["\uD83C\uDF7D\uFE0F Menu", "\uD83D\uDCD6 Our Story", "\u2B50 Reviews", "\uD83D\uDCDE Contact"].map((link) => (
              <span key={link} className="text-sm font-bold text-gray-600 hover:text-orange-500 cursor-pointer transition-colors">
                {link}
              </span>
            ))}
          </div>
          <span className="bg-orange-500 text-white text-sm font-bold px-5 py-2 rounded-2xl cursor-pointer hover:bg-orange-600 transition-colors shadow-md">
            Order Now! \uD83C\uDF1F
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-orange-400 via-red-400 to-yellow-400 py-24 px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-6xl mb-4">\uD83C\uDF54\uD83C\uDF55\uD83C\uDF2E\uD83C\uDF5C\uD83C\uDF70</p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Good food,<br />great mood!
            </h1>
            <p className="text-xl mt-6 font-semibold opacity-90 max-w-lg mx-auto">
              Your favorite neighborhood spot for craveable comfort food, colorful plates, and happy bellies.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <span className="bg-white text-orange-500 text-sm font-black px-8 py-3 rounded-2xl cursor-pointer hover:shadow-lg transition-shadow">
                See the Menu \uD83D\uDC47
              </span>
              <span className="border-2 border-white text-white text-sm font-bold px-8 py-3 rounded-2xl cursor-pointer hover:bg-white/10 transition-colors">
                Book a Table \uD83E\uDD73
              </span>
            </div>
          </div>
        </div>
        <div className="h-4 bg-gradient-to-r from-red-400 via-yellow-400 to-orange-400" />
      </section>

      {/* Fun Facts */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {funFacts.map((f) => (
            <div key={f.label} className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <span className="text-3xl">{f.emoji}</span>
              <p className="text-2xl font-black text-gray-900 mt-2">{f.stat}</p>
              <p className="text-sm text-gray-500 font-semibold">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Categories */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900">Our Menu \uD83C\uDF7D\uFE0F</h2>
          <p className="text-gray-500 font-semibold mt-2">Something delicious for every mood!</p>
        </div>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.name}>
              <div className={`bg-gradient-to-r ${cat.color} text-white rounded-2xl px-6 py-3 inline-block mb-6 shadow-sm`}>
                <span className="text-lg font-black">{cat.emoji} {cat.name}</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-orange-100">
                    <span className="text-3xl">{item.emoji}</span>
                    <h3 className="text-lg font-extrabold text-gray-900 mt-2">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-black text-orange-500">{item.price}</span>
                      <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full cursor-pointer hover:bg-orange-200 transition-colors">
                        Add to Order
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Colorful Divider */}
      <div className="h-3 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-orange-400 my-8" />

      {/* Our Story */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-72 bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 rounded-2xl" />
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">\uD83D\uDCD6 Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4 font-semibold">
              Sunny Side started in 2023 when best friends Maya and Carlos turned their weekend cookout tradition into a
              real restaurant. They wanted a place where the food is bold, the portions are generous, and nobody takes
              themselves too seriously.
            </p>
            <p className="text-gray-600 leading-relaxed font-semibold">
              Every recipe is tested at our famous &quot;Friends & Family Fridays&quot; before it hits the menu.
              If it doesn&apos;t get a table full of happy dances, it goes back to the kitchen!
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">\u2B50 Happy Customers \u2B50</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                <span className="text-4xl">{r.emoji}</span>
                <div className="flex gap-0.5 mt-3 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">\u2B50</span>
                  ))}
                </div>
                <p className="text-gray-700 font-semibold leading-relaxed mb-3">&quot;{r.text}&quot;</p>
                <p className="text-sm font-black text-orange-500">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="bg-gradient-to-br from-orange-400 via-red-400 to-yellow-400 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <p className="text-5xl mb-4">\uD83C\uDF89</p>
          <h2 className="text-4xl font-black mb-3">Come Hang With Us!</h2>
          <p className="text-lg font-semibold opacity-90 mb-8">
            Walk-ins always welcome, but you can save your spot for groups of 4 or more.
          </p>
          <div className="max-w-md mx-auto bg-white/20 backdrop-blur-sm rounded-2xl p-6">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-xl bg-white text-gray-800 text-sm font-semibold placeholder-gray-400 outline-none" readOnly />
              <input type="text" placeholder="Phone" className="px-4 py-3 rounded-xl bg-white text-gray-800 text-sm font-semibold placeholder-gray-400 outline-none" readOnly />
              <input type="text" placeholder="Date" className="px-4 py-3 rounded-xl bg-white text-gray-800 text-sm font-semibold placeholder-gray-400 outline-none" readOnly />
              <input type="text" placeholder="Party Size" className="px-4 py-3 rounded-xl bg-white text-gray-800 text-sm font-semibold placeholder-gray-400 outline-none" readOnly />
            </div>
            <span className="block w-full bg-white text-orange-500 text-sm font-black py-3 rounded-xl cursor-pointer hover:shadow-lg transition-shadow text-center">
              Reserve My Spot! \uD83C\uDF1F
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <span className="text-xl font-black">\uD83C\uDF73 Sunny Side</span>
              <p className="text-sm text-gray-400 mt-2 font-semibold">Good food, great mood, always.</p>
            </div>
            <div>
              <p className="font-bold mb-2">Find Us</p>
              <p className="text-sm text-gray-400">825 Valencia St, San Francisco, CA 94110</p>
              <p className="text-sm text-gray-400 mt-1">Open Daily: 11AM - 10PM</p>
            </div>
            <div>
              <p className="font-bold mb-2">Follow the Fun</p>
              <div className="flex gap-4">
                {["\uD83D\uDCF8 Instagram", "\uD83D\uDC26 Twitter", "\uD83C\uDFA5 TikTok"].map((s) => (
                  <span key={s} className="text-sm text-gray-400 cursor-pointer hover:text-orange-400 transition-colors font-semibold">{s}</span>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-3">(415) 555-0187</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-xs text-gray-500">&copy; 2026 Sunny Side. Made with \u2764\uFE0F in San Francisco.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
