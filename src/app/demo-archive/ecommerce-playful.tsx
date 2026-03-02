export default function EcommercePlayfulDemo() {
  const snackCategories = [
    { name: "Salty & Crunchy", emoji: "🥨", count: 24, color: "#fbbf24" },
    { name: "Sweet Treats", emoji: "🍫", count: 31, color: "#f472b6" },
    { name: "Healthy Bites", emoji: "🥗", count: 18, color: "#34d399" },
    { name: "International Flavors", emoji: "🌍", count: 27, color: "#60a5fa" },
    { name: "Spicy & Bold", emoji: "🌶️", count: 15, color: "#f87171" },
    { name: "Drinks & Sips", emoji: "🧃", count: 20, color: "#a78bfa" },
  ];

  const reviews = [
    { name: "Maya T.", rating: 5, text: "My kids go WILD when the Snack Planet box arrives. It is basically a holiday every month.", avatar: "🦊" },
    { name: "Jake R.", rating: 5, text: "Finally, a subscription that does not send the same boring stuff. Every box is a genuine surprise.", avatar: "🐻" },
    { name: "Priya S.", rating: 4, text: "The international snacks are incredible. I tried Japanese rice crackers and now I am hooked for life.", avatar: "🐱" },
  ];

  const faqs = [
    { q: "How many snacks are in each box?", a: "Every box contains 12 to 15 full-size snacks from around the world. No tiny sample packs here!" },
    { q: "Can I choose my snacks?", a: "Our Orbit and Galaxy plans let you set flavor preferences and dietary restrictions. We handle the rest!" },
    { q: "What if I have allergies?", a: "We take allergies seriously. Flag any allergens in your profile and we will make sure your box is safe." },
    { q: "Can I skip a month?", a: "Absolutely! Skip, pause, or cancel anytime from your dashboard. No questions asked, no fees." },
  ];

  const plans = [
    { name: "Starter", emoji: "🚀", price: "$24", period: "/month", snacks: "8-10 snacks", features: ["Curated mix", "Free shipping", "Cancel anytime"] },
    { name: "Orbit", emoji: "🪐", price: "$34", period: "/month", snacks: "12-15 snacks", features: ["Flavor preferences", "Exclusive items", "Free shipping", "Early access"], popular: true },
    { name: "Galaxy", emoji: "🌌", price: "$49", period: "/month", snacks: "18-22 snacks", features: ["Full customization", "Premium imports", "Free shipping", "Merch included", "Priority support"] },
  ];

  return (
    <div style={{ fontFamily: "'Fredoka', sans-serif", backgroundColor: "#f7fee7" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Icon Nav */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="text-2xl font-bold" style={{ color: "#f97316" }}>🪐 Snack Planet</span>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <span className="cursor-pointer hover:text-gray-900">🍿 Snacks</span>
            <span className="cursor-pointer hover:text-gray-900">📦 How It Works</span>
            <span className="cursor-pointer hover:text-gray-900">💰 Pricing</span>
            <span className="cursor-pointer hover:text-gray-900">⭐ Reviews</span>
            <span className="cursor-pointer hover:text-gray-900">❓ FAQ</span>
          </div>
          <button className="text-white text-sm font-semibold px-5 py-2 rounded-full" style={{ backgroundColor: "#f97316" }}>Get Started</button>
        </div>
      </nav>

      {/* Bouncy Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-wider mb-3" style={{ color: "#f97316" }}>The snack subscription that slaps</p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Snacks From<br />
          <span style={{ color: "#f97316" }}>Every Corner</span><br />
          Of The Planet
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
          A monthly box of 12-15 wild, wonderful, and ridiculously tasty snacks from over 40 countries. No boring chips allowed.
        </p>
        <div className="flex justify-center gap-4">
          <button className="text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: "#f97316" }}>Start Snacking</button>
          <button className="bg-white font-semibold px-8 py-4 rounded-full text-lg shadow border border-gray-200 text-gray-700">See Snacks</button>
        </div>
        <div className="flex justify-center gap-8 mt-12 text-sm text-gray-500">
          <span>🌍 40+ countries</span>
          <span>📦 Free shipping</span>
          <span>🔄 Skip anytime</span>
          <span>⭐ 4.9 rating</span>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Pick Your Plan</h3>
              <p className="text-gray-500">Choose from Starter, Orbit, or Galaxy based on how much snacking you need in your life.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. We Curate</h3>
              <p className="text-gray-500">Our snack scouts source the tastiest finds from around the world and pack them with care.</p>
            </div>
            <div>
              <div className="text-5xl mb-4">😋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Devour & Repeat</h3>
              <p className="text-gray-500">Rip open your box, discover new favorites, and look forward to next month's delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Snack Categories */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Snack Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {snackCategories.map((cat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg transition-shadow border-2 border-transparent hover:border-orange-200">
              <div className="text-4xl mb-3">{cat.emoji}</div>
              <h3 className="font-semibold text-gray-900">{cat.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{cat.count} snacks</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Snackers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="rounded-2xl p-6 border border-gray-100 shadow-sm" style={{ backgroundColor: "#f7fee7" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{review.avatar}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-yellow-500 text-sm">{"⭐".repeat(review.rating)}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Pick Your Plan</h2>
        <p className="text-gray-500 text-center mb-10">All plans include free shipping and a satisfaction guarantee.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className={`bg-white rounded-2xl p-8 text-center border-2 ${plan.popular ? "border-orange-400 shadow-xl relative" : "border-gray-100"}`}>
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-white px-4 py-1 rounded-full" style={{ backgroundColor: "#f97316" }}>Most Popular</span>
              )}
              <div className="text-4xl mb-2">{plan.emoji}</div>
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{plan.snacks}</p>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold" style={{ color: "#f97316" }}>{plan.price}</span>
                <span className="text-gray-400 text-sm">{plan.period}</span>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j}>✓ {f}</li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-semibold text-sm ${plan.popular ? "text-white" : "text-gray-700 bg-gray-100 hover:bg-gray-200"}`} style={plan.popular ? { backgroundColor: "#f97316" } : {}}>
                {plan.popular ? "Start Snacking" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center" style={{ backgroundColor: "#f97316" }}>
        <p className="text-white text-2xl font-bold mb-2">🪐 Snack Planet</p>
        <p className="text-orange-100 text-sm mb-6">Delivering happiness, one box at a time. 🍿🍫🥨🌶️🧃</p>
        <div className="flex justify-center gap-6 text-sm text-orange-100 mb-6">
          <span className="cursor-pointer hover:text-white">About</span>
          <span className="cursor-pointer hover:text-white">Blog</span>
          <span className="cursor-pointer hover:text-white">Careers</span>
          <span className="cursor-pointer hover:text-white">Contact</span>
          <span className="cursor-pointer hover:text-white">Terms</span>
          <span className="cursor-pointer hover:text-white">Privacy</span>
        </div>
        <p className="text-orange-200 text-xs">&copy; 2025 Snack Planet Inc. Made with 🧡 for snack lovers everywhere.</p>
      </footer>
    </div>
  );
}
