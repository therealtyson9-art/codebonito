export default function EcommerceMinimalistDemo() {
  const products = [
    { name: "Hand-Thrown Ceramic Vase", price: "$78", image: "bg-stone-200", tag: "New Arrival" },
    { name: "Woven Linen Table Runner", price: "$54", image: "bg-stone-300", tag: "" },
    { name: "Olive Wood Serving Board", price: "$62", image: "bg-amber-100", tag: "Best Seller" },
    { name: "Stoneware Dinner Set (4pc)", price: "$128", image: "bg-stone-200", tag: "" },
    { name: "Brass Candle Holder Pair", price: "$45", image: "bg-amber-50", tag: "Limited" },
    { name: "Organic Cotton Throw", price: "$96", image: "bg-stone-300", tag: "" },
  ];

  const categories = [
    { name: "Kitchen & Dining", count: 48, bg: "bg-stone-200" },
    { name: "Living Room", count: 35, bg: "bg-amber-50" },
    { name: "Bedroom & Bath", count: 27, bg: "bg-stone-100" },
    { name: "Outdoor", count: 19, bg: "bg-amber-100" },
  ];

  const featured = [
    { name: "The Slow Morning Set", desc: "Handmade mug, pour-over, and tray", price: "$135" },
    { name: "Weekend Linen Bundle", desc: "Duvet cover, pillowcases, and flat sheet", price: "$280" },
    { name: "Earth & Fire Collection", desc: "Three artisan candles in ceramic vessels", price: "$89" },
  ];

  return (
    <div style={{ fontFamily: "'Jost', sans-serif", backgroundColor: "#fafaf9" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Announcement Bar */}
      <div style={{ backgroundColor: "#d97706" }} className="text-white text-center py-2 text-sm font-light tracking-wide">
        Free shipping on orders over $100 | Handcrafted with care in small batches
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-semibold tracking-tight" style={{ color: "#d97706" }}>Kindred Goods</span>
            <div className="hidden md:flex gap-6 text-sm font-medium text-stone-600">
              <span className="hover:text-stone-900 cursor-pointer">Shop All</span>
              <span className="hover:text-stone-900 cursor-pointer">New Arrivals</span>
              <span className="hover:text-stone-900 cursor-pointer">Collections</span>
              <span className="hover:text-stone-900 cursor-pointer">Our Story</span>
              <span className="hover:text-stone-900 cursor-pointer">Journal</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-stone-600">
            <span className="cursor-pointer">Search</span>
            <span className="cursor-pointer">Account</span>
            <span className="cursor-pointer font-medium" style={{ color: "#d97706" }}>Cart (0)</span>
          </div>
        </div>
      </nav>

      {/* Hero Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-stone-400 mb-2">Curated for Thoughtful Living</p>
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-4">Artisan Home Goods</h1>
          <p className="text-stone-500 max-w-xl mx-auto">Every piece in our collection is made by independent artisans using traditional techniques and sustainably sourced materials.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`${product.image} aspect-square rounded-lg mb-3 relative overflow-hidden`}>
                {product.tag && (
                  <span className="absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded-full bg-white text-stone-700">{product.tag}</span>
                )}
              </div>
              <h3 className="text-sm font-medium text-stone-800">{product.name}</h3>
              <p className="text-sm text-stone-500 mt-1">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-light text-stone-800 mb-8 text-center">Shop by Room</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className={`${cat.bg} rounded-lg p-8 text-center cursor-pointer hover:shadow-md transition-shadow`}>
              <h3 className="font-medium text-stone-800 mb-1">{cat.name}</h3>
              <p className="text-sm text-stone-500">{cat.count} pieces</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "#d97706" }}>Curated Sets</p>
            <h2 className="text-3xl font-light text-stone-800">Featured Collections</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((item, i) => (
              <div key={i} className="border border-stone-200 rounded-lg p-6 hover:border-amber-300 transition-colors cursor-pointer">
                <div className="bg-stone-100 aspect-video rounded-md mb-4" />
                <h3 className="font-medium text-stone-800 mb-1">{item.name}</h3>
                <p className="text-sm text-stone-500 mb-3">{item.desc}</p>
                <p className="text-sm font-medium" style={{ color: "#d97706" }}>From {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-lg font-medium text-stone-800 mb-2">Ethically Sourced</p>
            <p className="text-sm text-stone-500">We partner directly with artisans, ensuring fair wages and sustainable practices at every step.</p>
          </div>
          <div>
            <p className="text-lg font-medium text-stone-800 mb-2">Small Batch Made</p>
            <p className="text-sm text-stone-500">Each item is crafted in limited quantities, making every piece feel personal and intentional.</p>
          </div>
          <div>
            <p className="text-lg font-medium text-stone-800 mb-2">Carbon Neutral Shipping</p>
            <p className="text-sm text-stone-500">We offset 100% of our shipping emissions and use recycled, plastic-free packaging.</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ backgroundColor: "#d97706" }} className="py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-light text-white mb-2">Join the Kindred Community</h2>
          <p className="text-amber-100 text-sm mb-6">Get early access to new collections, artisan stories, and 10% off your first order.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-lg text-sm border-0 focus:outline-none" />
            <button className="bg-stone-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-stone-800">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4" style={{ color: "#d97706" }}>Kindred Goods</h3>
            <p className="text-sm leading-relaxed">Thoughtfully curated home goods from independent artisans around the world. Based in Portland, Oregon.</p>
          </div>
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Shop</h4>
            <div className="space-y-2 text-sm">
              <p className="cursor-pointer hover:text-white">New Arrivals</p>
              <p className="cursor-pointer hover:text-white">Best Sellers</p>
              <p className="cursor-pointer hover:text-white">Collections</p>
              <p className="cursor-pointer hover:text-white">Gift Cards</p>
              <p className="cursor-pointer hover:text-white">Sale</p>
            </div>
          </div>
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Company</h4>
            <div className="space-y-2 text-sm">
              <p className="cursor-pointer hover:text-white">Our Story</p>
              <p className="cursor-pointer hover:text-white">Artisan Partners</p>
              <p className="cursor-pointer hover:text-white">Sustainability</p>
              <p className="cursor-pointer hover:text-white">Journal</p>
              <p className="cursor-pointer hover:text-white">Careers</p>
            </div>
          </div>
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Support</h4>
            <div className="space-y-2 text-sm">
              <p className="cursor-pointer hover:text-white">Shipping & Returns</p>
              <p className="cursor-pointer hover:text-white">Care Guide</p>
              <p className="cursor-pointer hover:text-white">FAQ</p>
              <p className="cursor-pointer hover:text-white">Contact Us</p>
              <p className="cursor-pointer hover:text-white">Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800 text-sm text-center">
          <p>&copy; 2025 Kindred Goods. All rights reserved. Made with intention.</p>
        </div>
      </footer>
    </div>
  );
}
