export default function FoodPlayfulDemo() {
  const categories = [
    { name: "Pizza", emoji: "🍕", count: "14 items" },
    { name: "Burgers", emoji: "🍔", count: "9 items" },
    { name: "Sushi", emoji: "🍣", count: "18 items" },
    { name: "Tacos", emoji: "🌮", count: "11 items" },
    { name: "Noodles", emoji: "🍜", count: "12 items" },
    { name: "Desserts", emoji: "🍰", count: "8 items" },
  ]

  const dishes = [
    { name: "Smash Burger Deluxe", desc: "Double patty, melty American cheese, pickles, secret sauce, toasted brioche bun", price: "$14", tag: "Best Seller", tagColor: "bg-red-500" },
    { name: "Spicy Tuna Crunch Roll", desc: "Fresh ahi tuna, sriracha mayo, tempura flakes, avocado, cucumber", price: "$16", tag: "New", tagColor: "bg-green-500" },
    { name: "Loaded Nachos Supreme", desc: "Tri-color tortilla chips, cheddar, jalapenos, guac, sour cream, pico de gallo", price: "$12", tag: "Crowd Fave", tagColor: "bg-yellow-500" },
    { name: "Truffle Mushroom Pizza", desc: "Wild mushroom medley, truffle oil, mozzarella, fresh thyme on sourdough crust", price: "$18", tag: "Chef Pick", tagColor: "bg-purple-500" },
    { name: "Chicken Teriyaki Bowl", desc: "Grilled chicken, steamed rice, edamame, pickled carrot, teriyaki glaze, sesame", price: "$15", tag: "Healthy", tagColor: "bg-green-500" },
    { name: "Churro Ice Cream Sandwich", desc: "Warm cinnamon churro waffles, vanilla bean ice cream, chocolate drizzle", price: "$9", tag: "Sweet Treat", tagColor: "bg-pink-500" },
  ]

  const offers = [
    { title: "First Order Free Delivery", desc: "No minimum order! Use code YUMMY1", bg: "bg-red-50 border-red-200" },
    { title: "Family Bundle: Save 20%", desc: "Feed 4 people for the price of 3", bg: "bg-yellow-50 border-yellow-200" },
    { title: "Lunch Special 11-2 PM", desc: "Any bowl + drink combo for $13", bg: "bg-green-50 border-green-200" },
  ]

  const ratings = [
    { name: "Alex", reaction: "😍", text: "The smash burger is INCREDIBLE. Best burger in the city, hands down!", stars: 5 },
    { name: "Jess", reaction: "🤤", text: "Ordered the truffle pizza and I'm genuinely obsessed. Already planning my next order.", stars: 5 },
    { name: "Sam", reaction: "🔥", text: "Delivery was super fast and everything was still hot. The nachos are dangerous!", stars: 5 },
    { name: "Mia", reaction: "💯", text: "Love that they have healthy options that actually taste amazing. Teriyaki bowl is perfect.", stars: 5 },
  ]

  const funFacts = [
    { number: "1M+", label: "Meals Delivered" },
    { number: "4.9", label: "Average Rating" },
    { number: "25 min", label: "Avg Delivery Time" },
    { number: "200+", label: "Menu Items" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="bg-white border-b-2 border-red-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold">🍴 <span className="text-red-500">Yum</span>Dash</span>
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-sm text-gray-500 hover:text-red-500 cursor-pointer font-medium">Menu</span>
            <span className="text-sm text-gray-500 hover:text-red-500 cursor-pointer font-medium">Deals</span>
            <span className="text-sm text-gray-500 hover:text-red-500 cursor-pointer font-medium">Reviews</span>
            <span className="text-sm text-gray-500 hover:text-red-500 cursor-pointer font-medium">Track Order</span>
          </div>
          <span className="px-5 py-2.5 bg-red-500 text-white text-sm font-semibold rounded-full cursor-pointer hover:bg-red-600 transition-colors">Order Now 🚀</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-red-50 via-yellow-50 to-green-50">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <span className="text-6xl">🍕🍔🍣🌮</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
            <span className="text-red-500">Yummy</span> food at<br />your <span className="text-yellow-500">doorstep!</span>
          </h1>
          <p className="text-lg text-gray-500 mt-5 max-w-md mx-auto">From cravings to your couch in under 30 minutes. Fresh, hot, and always delicious.</p>
          <div className="mt-8 flex justify-center gap-3">
            <span className="px-8 py-3.5 bg-red-500 text-white text-sm font-bold rounded-full cursor-pointer hover:bg-red-600 transition-colors shadow-lg shadow-red-200">Start Ordering</span>
            <span className="px-8 py-3.5 bg-yellow-400 text-yellow-900 text-sm font-bold rounded-full cursor-pointer hover:bg-yellow-500 transition-colors shadow-lg shadow-yellow-200">See Deals</span>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">What are you in the mood for? 🤔</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-gray-50 rounded-2xl p-5 text-center hover:shadow-md hover:scale-105 transition-all cursor-pointer">
              <span className="text-4xl">{cat.emoji}</span>
              <h3 className="text-sm font-semibold mt-2">{cat.name}</h3>
              <p className="text-xs text-gray-400 mt-0.5">{cat.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-10">Popular right now 🔥</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {dishes.map((dish) => (
              <div key={dish.name} className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{dish.name}</h3>
                    <span className={`text-xs text-white px-2 py-0.5 rounded-full font-medium ${dish.tagColor}`}>{dish.tag}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{dish.desc}</p>
                </div>
                <span className="text-lg font-bold text-red-500 whitespace-nowrap">{dish.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Hot deals just for you 🎉</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {offers.map((offer) => (
            <div key={offer.title} className={`border rounded-2xl p-6 ${offer.bg}`}>
              <h3 className="font-bold text-gray-900">{offer.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{offer.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Ratings */}
      <section className="bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-10">What people are saying 💬</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {ratings.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{r.reaction}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{r.name}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.stars }).map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">We&apos;ve been busy! 🚀</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {funFacts.map((fact) => (
            <div key={fact.label} className="text-center">
              <p className="text-4xl font-extrabold text-red-500">{fact.number}</p>
              <p className="text-sm text-gray-500 mt-1 font-medium">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Order CTA */}
      <section className="bg-red-500 text-white">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <span className="text-5xl">😋</span>
          <h2 className="text-3xl font-bold mt-4">Hungry yet?</h2>
          <p className="text-red-100 mt-3 max-w-md mx-auto">Your next favorite meal is just a few taps away. Free delivery on your first order!</p>
          <span className="inline-block mt-8 px-10 py-4 bg-white text-red-500 font-bold rounded-full cursor-pointer hover:bg-red-50 transition-colors shadow-lg text-lg">Let&apos;s Eat! 🍴</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-lg font-bold">🍴 <span className="text-red-500">Yum</span>Dash</span>
          <div className="text-sm text-gray-400 space-x-6">
            <span className="cursor-pointer hover:text-red-500">Instagram</span>
            <span className="cursor-pointer hover:text-red-500">TikTok</span>
            <span className="cursor-pointer hover:text-red-500">Twitter</span>
            <span className="cursor-pointer hover:text-red-500">Support</span>
          </div>
          <p className="text-xs text-gray-300">&copy; 2026 YumDash. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
