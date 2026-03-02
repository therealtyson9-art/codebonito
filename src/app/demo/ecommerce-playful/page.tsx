export default function EcommercePlayfulDemo() {
  const products = [
    { name: "Cloud Nine Sneakers", price: "$79", oldPrice: "$99", emoji: "👟", color: "from-pink-400 to-rose-400", tag: "Hot" },
    { name: "Sunshine Bucket Hat", price: "$34", oldPrice: "", emoji: "🎩", color: "from-yellow-300 to-amber-400", tag: "New" },
    { name: "Rainbow Crossbody Bag", price: "$56", oldPrice: "", emoji: "🌈", color: "from-violet-400 to-purple-400", tag: "" },
    { name: "Fizzy Pop Sunglasses", price: "$42", oldPrice: "$55", emoji: "🕶️", color: "from-cyan-400 to-teal-400", tag: "Sale" },
    { name: "Daydream Hoodie", price: "$68", oldPrice: "", emoji: "☁️", color: "from-blue-400 to-indigo-400", tag: "Fave" },
    { name: "Confetti Socks Pack", price: "$18", oldPrice: "", emoji: "🧦", color: "from-orange-400 to-red-400", tag: "" },
    { name: "Bubblegum Scrunchie Set", price: "$12", oldPrice: "", emoji: "🎀", color: "from-pink-300 to-fuchsia-400", tag: "Best" },
    { name: "Starlight Phone Case", price: "$28", oldPrice: "$35", emoji: "✨", color: "from-emerald-400 to-green-400", tag: "Sale" },
  ];

  const features = [
    { emoji: "🚀", title: "Lightning Shipping", desc: "Most orders arrive in 2-3 days. We ship fast because waiting is boring!" },
    { emoji: "💖", title: "Love It Guarantee", desc: "Not vibing with it? Send it back within 30 days, no questions asked." },
    { emoji: "🌍", title: "Planet Friendly", desc: "Eco packaging, carbon-neutral shipping. Looking cute AND saving the planet." },
    { emoji: "🎁", title: "Free Gift Wrapping", desc: "Every order comes wrapped in our signature confetti tissue paper!" },
  ];

  const testimonials = [
    { name: "Luna S.", text: "The sneakers are SO comfy and the colors are even better in person! Already ordered two more pairs.", stars: 5, avatar: "🦊" },
    { name: "Kai M.", text: "Best online shopping experience ever. The packaging alone made my entire week. So fun!", stars: 5, avatar: "🐻" },
    { name: "Zara P.", text: "I get compliments every time I wear the bucket hat. The quality is amazing for the price!", stars: 5, avatar: "🦋" },
  ];

  const navItems = ["New In", "Best Sellers", "Sale", "Collections"];
  const footerSections = [
    { title: "Shop", links: ["New Arrivals", "Best Sellers", "Sale", "Gift Cards", "Bundles"] },
    { title: "Help", links: ["FAQ", "Shipping", "Returns", "Size Guide", "Contact Us"] },
    { title: "About", links: ["Our Story", "Sustainability", "Blog", "Careers", "Collabs"] },
    { title: "Follow Us", links: ["Instagram", "TikTok", "YouTube", "Pinterest", "Discord"] },
  ];

  return (
    <div className="min-h-screen bg-orange-50 text-gray-900" style={{ fontFamily: "Nunito, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>

      {/* Fun Top Bar */}
      <div className="bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 text-center py-2.5">
        <p className="text-xs font-bold text-white tracking-wide">FREE SHIPPING on orders $50+ !! Use code YAYY for 10% off your first order</p>
      </div>

      {/* Nav */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-orange-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-2xl font-black bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">popshop</span>
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <span key={item} className="text-sm font-bold text-gray-600 hover:text-pink-500 px-3 py-2 rounded-full hover:bg-pink-50 cursor-pointer transition-all">{item}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-bold text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">Search</span>
            <span className="text-sm font-bold text-gray-600 hover:text-pink-500 cursor-pointer transition-colors">Account</span>
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-white text-sm font-bold px-4 py-2 rounded-full cursor-pointer hover:shadow-lg hover:shadow-pink-200 transition-all">
              Cart (4)
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-14 lg:py-20">
        <div className="bg-gradient-to-br from-violet-100 via-pink-50 to-cyan-100 rounded-3xl p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-yellow-300 text-yellow-900 text-xs font-extrabold px-3 py-1 rounded-full mb-4">NEW DROP ALERT</span>
            <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-4 text-gray-900">
              Color your world, one outfit at a time
            </h1>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-md font-medium">
              Fun, bold, feel-good fashion that does not take itself too seriously. Made with love, worn with joy.
            </p>
            <div className="flex items-center space-x-3">
              <button className="h-12 px-8 text-sm font-extrabold bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-full hover:shadow-lg hover:shadow-pink-200 transition-all">
                Shop the Drop
              </button>
              <button className="h-12 px-8 text-sm font-bold border-2 border-gray-300 text-gray-600 rounded-full hover:border-pink-400 hover:text-pink-500 transition-all">
                Watch Lookbook
              </button>
            </div>
          </div>
          <div className="bg-white/50 aspect-square rounded-2xl flex items-center justify-center">
            <span className="text-6xl">🎉</span>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900">trending right now</h2>
          <p className="text-sm text-gray-400 font-medium mt-2">the stuff everyone is obsessed with</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-pink-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
              <div className={`bg-gradient-to-br ${product.color} aspect-square flex items-center justify-center relative`}>
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{product.emoji}</span>
                {product.tag && (
                  <span className="absolute top-3 right-3 bg-white text-gray-900 text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-sm">{product.tag}</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-1">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-extrabold text-gray-900">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="h-11 px-8 text-sm font-bold border-2 border-gray-300 text-gray-600 rounded-full hover:border-pink-400 hover:text-pink-500 transition-all">
            See Everything
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-violet-100 transition-all">
              <span className="text-3xl block mb-3">{f.emoji}</span>
              <h3 className="text-sm font-extrabold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-gray-900">happy customers</h2>
          <p className="text-sm text-gray-400 font-medium mt-2">real reviews from real people</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 hover:shadow-lg hover:shadow-cyan-100 transition-all">
              <div className="flex items-center space-x-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-sm">&#9733;</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{t.avatar}</span>
                <span className="text-sm font-bold text-gray-900">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 rounded-3xl p-10 lg:p-14 text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-3">join the fun club</h2>
          <p className="text-sm text-white/80 font-medium mb-6 max-w-md mx-auto">
            Get early access to new drops, exclusive discounts, and surprise gifts. We promise to only send the good stuff.
          </p>
          <div className="flex max-w-md mx-auto rounded-full overflow-hidden shadow-lg">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 h-12 px-6 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none"
              readOnly
            />
            <button className="h-12 px-6 text-sm font-extrabold bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              Join!
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 mt-14 py-14 px-6 rounded-t-3xl">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <span className="text-2xl font-black text-white">popshop</span>
            <p className="text-xs leading-relaxed mt-3">Fun fashion for fun people. Making the world a little more colorful since 2021.</p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">{section.title}</h4>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <p key={link} className="text-xs text-gray-500 hover:text-pink-400 cursor-pointer transition-colors">{link}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-600">&copy; 2025 popshop. all rights reserved. made with love.</span>
          <div className="flex items-center space-x-6">
            {["Privacy", "Terms", "Cookies", "Accessibility"].map((link) => (
              <span key={link} className="text-xs text-gray-600 hover:text-gray-400 cursor-pointer transition-colors">{link}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
