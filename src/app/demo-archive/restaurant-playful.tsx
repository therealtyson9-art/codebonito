export default function RestaurantPlayfulDemo() {
  const ramen = [
    { name: "Tonkotsu Classic", desc: "18-hour pork bone broth, chashu, soft egg, bamboo shoots, nori, scallions", price: "$16", heat: 1 },
    { name: "Spicy Miso Bomb", desc: "Red miso, ground pork, chili oil, corn, bean sprouts, sesame", price: "$17", heat: 3 },
    { name: "Shoyu Simplicity", desc: "Clear soy broth, chicken, menma, narutomaki, spinach, nori", price: "$15", heat: 1 },
    { name: "Veggie Garden", desc: "Shiitake dashi, tofu, bok choy, enoki, sweet potato, crispy shallots", price: "$14", heat: 0 },
  ]

  const udon = [
    { name: "Tempura Udon", desc: "Hot dashi broth, thick noodles, shrimp & vegetable tempura", price: "$15" },
    { name: "Curry Udon", desc: "Rich Japanese curry sauce, sliced pork, green onions", price: "$16" },
    { name: "Cold Tanuki", desc: "Chilled noodles, tsuyu dipping sauce, crispy tempura bits, grated daikon", price: "$13" },
  ]

  const sides = [
    { emoji: "\uD83E\uDD5F", name: "Gyoza (6pc)", price: "$8" },
    { emoji: "\uD83C\uDF71", name: "Rice Bowl", price: "$5" },
    { emoji: "\uD83E\uDD57", name: "Seaweed Salad", price: "$7" },
    { emoji: "\uD83C\uDF64", name: "Karaage Chicken", price: "$10" },
    { emoji: "\uD83C\uDF76", name: "Edamame", price: "$5" },
    { emoji: "\uD83E\uDD6A", name: "Bao Buns (2pc)", price: "$9" },
  ]

  const drinks = [
    { emoji: "\uD83C\uDF7A", name: "Asahi Draft", price: "$7" },
    { emoji: "\uD83C\uDF75", name: "Hot Green Tea", price: "$3" },
    { emoji: "\uD83E\uDDCB", name: "Ramune Soda", price: "$4" },
    { emoji: "\uD83E\uDD64", name: "Calpico", price: "$4" },
  ]

  const favorites = [
    { name: "Tonkotsu Classic", votes: 2847, badge: "Fan #1" },
    { name: "Spicy Miso Bomb", votes: 2103, badge: "Heat King" },
    { name: "Gyoza (6pc)", votes: 1876, badge: "Side MVP" },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fdf2f8", fontFamily: "Nunito, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />

      {/* Fun Tab Nav */}
      <nav className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
        <span className="text-3xl" style={{ fontFamily: "Bubblegum Sans, cursive", color: "#ef4444" }}>Noodle House \uD83C\uDF5C</span>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Menu", icon: "\uD83C\uDF5C" },
            { label: "Customize", icon: "\uD83C\uDFA8" },
            { label: "Favorites", icon: "\u2764\uFE0F" },
            { label: "Rewards", icon: "\u2B50" },
            { label: "Order", icon: "\uD83D\uDED2" },
          ].map((tab) => (
            <span key={tab.label} className="px-4 py-2 rounded-full text-sm font-semibold cursor-pointer" style={{ backgroundColor: "#fce7f3", color: "#ef4444" }}>
              {tab.icon} {tab.label}
            </span>
          ))}
        </div>
      </nav>

      {/* Food Emoji Hero */}
      <section className="text-center py-16 px-6">
        <p className="text-6xl mb-6">\uD83C\uDF5C\uD83C\uDF72\uD83E\uDD62\uD83E\uDD5F\uD83C\uDF63</p>
        <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: "Bubblegum Sans, cursive", color: "#ef4444" }}>
          Slurp-Worthy Noodles!
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "#9f1239" }}>
          Handmade noodles, slow-simmered broths, and toppings piled high. Life&apos;s too short for boring soup.
        </p>
        <button className="mt-8 px-10 py-4 rounded-full text-lg font-bold text-white shadow-lg" style={{ backgroundColor: "#ef4444" }}>
          Order Now \uD83D\uDE80
        </button>
      </section>

      {/* Menu - Ramen */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl mb-8 text-center" style={{ fontFamily: "Bubblegum Sans, cursive", color: "#ef4444" }}>\uD83C\uDF5C Ramen</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {ramen.map((item) => (
            <div key={item.name} className="p-5 rounded-2xl bg-white shadow-sm">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-gray-900">{item.name}</h3>
                <span className="font-bold" style={{ color: "#ef4444" }}>{item.price}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              <p className="text-xs mt-2">{item.heat > 0 ? "\uD83C\uDF36\uFE0F".repeat(item.heat) : "\uD83C\uDF31 Mild"}</p>
            </div>
          ))}
        </div>

        {/* Udon */}
        <h2 className="text-3xl mb-8 mt-16 text-center" style={{ fontFamily: "Bubblegum Sans, cursive", color: "#ef4444" }}>\uD83E\uDD62 Udon</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {udon.map((item) => (
            <div key={item.name} className="p-5 rounded-2xl bg-white shadow-sm">
              <h3 className="font-bold text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              <p className="font-bold mt-3" style={{ color: "#ef4444" }}>{item.price}</p>
            </div>
          ))}
        </div>

        {/* Sides */}
        <h2 className="text-3xl mb-8 mt-16 text-center" style={{ fontFamily: "Bubblegum Sans, cursive", color: "#ef4444" }}>\uD83C\uDF71 Sides</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sides.map((item) => (
            <div key={item.name} className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-sm">
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                <p className="text-sm font-bold" style={{ color: "#ef4444" }}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Drinks */}
        <h2 className="text-3xl mb-8 mt-16 text-center" style={{ fontFamily: "Bubblegum Sans, cursive", color: "#ef4444" }}>\uD83C\uDF7A Drinks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {drinks.map((item) => (
            <div key={item.name} className="text-center p-4 rounded-2xl bg-white shadow-sm">
              <p className="text-3xl mb-2">{item.emoji}</p>
              <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
              <p className="text-sm font-bold" style={{ color: "#ef4444" }}>{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customization Guide */}
      <section className="py-16 px-6" style={{ backgroundColor: "#fce7f3" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl mb-6" style={{ fontFamily: "Bubblegum Sans, cursive", color: "#ef4444" }}>\uD83C\uDFA8 Build Your Bowl</h2>
          <p className="text-gray-700 mb-8">Every ramen and udon can be customized. Make it yours!</p>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "1. Broth", options: "Tonkotsu, Miso, Shoyu, Veggie" },
              { step: "2. Noodles", options: "Thin, Thick, Wavy, Gluten-Free" },
              { step: "3. Protein", options: "Chashu, Chicken, Tofu, Shrimp" },
              { step: "4. Toppings", options: "Egg, Corn, Nori, Bamboo +more" },
            ].map((s) => (
              <div key={s.step} className="bg-white p-4 rounded-2xl">
                <p className="font-bold mb-1" style={{ color: "#ef4444" }}>{s.step}</p>
                <p className="text-sm text-gray-600">{s.options}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Favorites */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl mb-8" style={{ fontFamily: "Bubblegum Sans, cursive", color: "#ef4444" }}>\u2764\uFE0F Customer Favorites</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {favorites.map((f, i) => (
            <div key={f.name} className="p-5 rounded-2xl bg-white shadow-sm">
              <p className="text-4xl mb-2">{i === 0 ? "\uD83E\uDD47" : i === 1 ? "\uD83E\uDD48" : "\uD83E\uDD49"}</p>
              <p className="font-bold text-gray-900">{f.name}</p>
              <p className="text-xs font-semibold px-3 py-1 rounded-full inline-block mt-2" style={{ backgroundColor: "#fce7f3", color: "#ef4444" }}>{f.badge}</p>
              <p className="text-sm text-gray-500 mt-2">{f.votes.toLocaleString()} votes</p>
            </div>
          ))}
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ef4444" }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl mb-4" style={{ fontFamily: "Bubblegum Sans, cursive" }}>\u2B50 Noodle Rewards</h2>
          <p className="text-lg mb-6 opacity-90">Earn 1 point for every dollar spent. Redeem for free bowls, sides, and secret menu items!</p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { points: "50 pts", reward: "Free Side" },
              { points: "100 pts", reward: "Free Ramen Bowl" },
              { points: "200 pts", reward: "Secret Menu Access" },
            ].map((r) => (
              <div key={r.points} className="bg-white/20 rounded-2xl p-4">
                <p className="font-bold text-xl">{r.points}</p>
                <p className="text-sm opacity-90">{r.reward}</p>
              </div>
            ))}
          </div>
          <button className="px-8 py-3 rounded-full font-bold text-lg" style={{ backgroundColor: "white", color: "#ef4444" }}>Join Free \uD83C\uDF89</button>
        </div>
      </section>

      {/* Order Online CTA */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl mb-4" style={{ fontFamily: "Bubblegum Sans, cursive", color: "#ef4444" }}>Craving Noodles Now?</h2>
        <p className="text-gray-600 mb-6">Order online for pickup or delivery. Hot, fresh, and ready when you are.</p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 rounded-full font-bold text-white" style={{ backgroundColor: "#ef4444" }}>Pickup \uD83C\uDFE0</button>
          <button className="px-8 py-3 rounded-full font-bold border-2" style={{ borderColor: "#ef4444", color: "#ef4444" }}>Delivery \uD83D\uDE97</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 px-6" style={{ backgroundColor: "#fce7f3" }}>
        <p className="text-2xl mb-2" style={{ fontFamily: "Bubblegum Sans, cursive", color: "#ef4444" }}>Noodle House \uD83C\uDF5C</p>
        <p className="text-sm text-gray-600">456 Bowlside Lane, Portland, OR 97209 &middot; (503) 555-0189</p>
        <p className="text-sm text-gray-600">Open Daily 11 AM - 10 PM</p>
        <p className="text-xs text-gray-400 mt-4">\uD83C\uDF5C\uD83E\uDD5F\uD83C\uDF63\uD83C\uDF72\uD83E\uDD62 &copy; 2025 Noodle House. Slurp responsibly. \uD83E\uDD62\uD83C\uDF72\uD83C\uDF63\uD83E\uDD5F\uD83C\uDF5C</p>
      </footer>
    </div>
  )
}
