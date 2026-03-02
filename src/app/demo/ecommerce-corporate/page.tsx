export default function EcommerceCorporateDemo() {
  const topRated = [
    { name: "ProDesk 27\" 4K Monitor", price: "$449.99", was: "$529.99", rating: "4.8", reviews: 342, badge: "Best Seller" },
    { name: "MechType Wireless Keyboard", price: "$159.99", was: "$189.99", rating: "4.7", reviews: 521, badge: "Top Rated" },
    { name: "AeroCharge Laptop Stand", price: "$79.99", was: "", rating: "4.6", reviews: 187, badge: "" },
    { name: "SoundPro ANC Headphones", price: "$249.99", was: "$299.99", rating: "4.9", reviews: 1203, badge: "Editor Pick" },
  ];

  const categories = [
    { name: "Laptops & Tablets", count: "234 products", icon: "laptop" },
    { name: "Audio & Headphones", count: "189 products", icon: "headphones" },
    { name: "Smart Home", count: "312 products", icon: "home" },
    { name: "Gaming", count: "267 products", icon: "gamepad" },
    { name: "Cameras & Drones", count: "145 products", icon: "camera" },
    { name: "Accessories", count: "498 products", icon: "cable" },
  ];

  const brands = ["Samsung", "Apple", "Sony", "Bose", "Logitech", "Dell", "LG", "ASUS"];

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif" }} className="min-h-screen bg-white">
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Utility Bar */}
      <div style={{ backgroundColor: "#0369a1" }} className="text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-4">
            <span>Help Center</span>
            <span>Order Tracking</span>
            <span>Store Locator</span>
          </div>
          <div className="flex gap-4">
            <span>Business Accounts</span>
            <span>1-800-TECHVLT</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold" style={{ color: "#0369a1" }}>TechVault</span>
          <div className="hidden md:flex flex-1 mx-8">
            <input type="text" placeholder="Search products, brands, and categories..." className="w-full border border-gray-300 rounded-l-md px-4 py-2 text-sm focus:outline-none focus:border-sky-500" />
            <button style={{ backgroundColor: "#0369a1" }} className="text-white px-6 py-2 rounded-r-md text-sm font-medium">Search</button>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span className="cursor-pointer hover:text-gray-900">Sign In</span>
            <span className="cursor-pointer hover:text-gray-900">Wishlist</span>
            <span className="font-semibold cursor-pointer" style={{ color: "#0369a1" }}>Cart ($0.00)</span>
          </div>
        </div>
      </nav>

      {/* Category Nav */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex gap-6 py-3 text-sm font-medium text-gray-700 overflow-x-auto">
          <span className="cursor-pointer hover:text-sky-700 whitespace-nowrap" style={{ color: "#0369a1" }}>All Departments</span>
          <span className="cursor-pointer hover:text-sky-700 whitespace-nowrap">Computers</span>
          <span className="cursor-pointer hover:text-sky-700 whitespace-nowrap">Phones</span>
          <span className="cursor-pointer hover:text-sky-700 whitespace-nowrap">TV & Home Theater</span>
          <span className="cursor-pointer hover:text-sky-700 whitespace-nowrap">Audio</span>
          <span className="cursor-pointer hover:text-sky-700 whitespace-nowrap">Gaming</span>
          <span className="cursor-pointer hover:text-sky-700 whitespace-nowrap">Smart Home</span>
          <span className="cursor-pointer hover:text-sky-700 whitespace-nowrap font-bold" style={{ color: "#dc2626" }}>Deals</span>
        </div>
      </div>

      {/* Category Banner Hero */}
      <section style={{ backgroundColor: "#0369a1" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-8 md:mb-0">
            <p className="text-sm font-light uppercase tracking-wider mb-2 text-sky-200">Spring Tech Event</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Up to 40% Off<br />Top Electronics</h1>
            <p className="text-sky-100 mb-6 max-w-md">Upgrade your setup with deals on monitors, laptops, audio gear, and more. Sale ends March 31st.</p>
            <button className="bg-white font-semibold px-8 py-3 rounded-md text-sm" style={{ color: "#0369a1" }}>Shop All Deals</button>
          </div>
          <div className="w-80 h-56 bg-sky-800 rounded-lg" />
        </div>
      </section>

      {/* Deal of the Day */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="border-2 rounded-lg p-8 flex flex-col md:flex-row items-center gap-8" style={{ borderColor: "#0369a1" }}>
          <div className="w-48 h-48 bg-gray-100 rounded-lg flex-shrink-0" />
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full" style={{ backgroundColor: "#dc2626" }}>Deal of the Day</span>
            <h3 className="text-2xl font-bold text-gray-900 mt-3">UltraWide 34" Curved Gaming Monitor</h3>
            <p className="text-gray-500 mt-2">165Hz refresh rate, 1ms response time, HDR400 certified. The ultimate immersive display for gaming and productivity.</p>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-3xl font-bold" style={{ color: "#0369a1" }}>$599.99</span>
              <span className="text-lg text-gray-400 line-through">$899.99</span>
              <span className="text-sm font-bold text-green-600">Save $300</span>
            </div>
            <p className="text-xs text-gray-400 mt-2">Ends in 08:42:15 | 47 claimed today</p>
          </div>
          <button style={{ backgroundColor: "#0369a1" }} className="text-white px-8 py-3 rounded-md font-semibold text-sm whitespace-nowrap">Add to Cart</button>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-6 text-center cursor-pointer hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: "#e0f2fe" }}>
                <span style={{ color: "#0369a1" }} className="text-lg font-bold">{cat.name.charAt(0)}</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">{cat.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{cat.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Rated Products */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Top Rated Products</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {topRated.map((product, i) => (
              <div key={i} className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="bg-gray-100 aspect-square rounded-md mb-4 relative">
                  {product.badge && (
                    <span className="absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded text-white" style={{ backgroundColor: "#0369a1" }}>{product.badge}</span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{product.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-yellow-500 text-sm">{"*".repeat(5)}</span>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-bold text-gray-900">{product.price}</span>
                  {product.was && <span className="text-sm text-gray-400 line-through">{product.was}</span>}
                </div>
                <button className="w-full mt-3 text-sm font-medium py-2 rounded-md border-2 transition-colors" style={{ borderColor: "#0369a1", color: "#0369a1" }}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 text-center">Authorized Retailer For</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {brands.map((brand, i) => (
            <span key={i} className="text-gray-400 font-semibold text-lg cursor-pointer hover:text-gray-700 transition-colors">{brand}</span>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ backgroundColor: "#0369a1" }} className="py-12">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Stay Ahead of the Tech Curve</h2>
          <p className="text-sky-100 text-sm mb-6">Get exclusive deals, product launches, and tech news delivered weekly.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-md text-sm focus:outline-none" />
            <button className="bg-white font-semibold px-6 py-3 rounded-md text-sm" style={{ color: "#0369a1" }}>Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">TechVault</h3>
            <p className="text-sm leading-relaxed">Your trusted source for the latest electronics and gadgets since 2008. Authorized retailer with over 50,000 products and free expert support.</p>
            <p className="text-sm mt-4">1-800-TECHVLT | support@techvault.com</p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Shop</h4>
            <div className="space-y-2 text-sm">
              <p className="cursor-pointer hover:text-white">New Arrivals</p>
              <p className="cursor-pointer hover:text-white">Best Sellers</p>
              <p className="cursor-pointer hover:text-white">Deals & Offers</p>
              <p className="cursor-pointer hover:text-white">Open Box</p>
              <p className="cursor-pointer hover:text-white">Gift Cards</p>
            </div>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Support</h4>
            <div className="space-y-2 text-sm">
              <p className="cursor-pointer hover:text-white">Help Center</p>
              <p className="cursor-pointer hover:text-white">Returns & Exchanges</p>
              <p className="cursor-pointer hover:text-white">Warranty Info</p>
              <p className="cursor-pointer hover:text-white">Order Tracking</p>
              <p className="cursor-pointer hover:text-white">Price Match</p>
            </div>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm">
              <p className="cursor-pointer hover:text-white">About Us</p>
              <p className="cursor-pointer hover:text-white">Careers</p>
              <p className="cursor-pointer hover:text-white">Press Room</p>
              <p className="cursor-pointer hover:text-white">Affiliate Program</p>
              <p className="cursor-pointer hover:text-white">Investor Relations</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2025 TechVault Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
            <span className="cursor-pointer hover:text-white">Accessibility</span>
            <span className="cursor-pointer hover:text-white">Do Not Sell My Info</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
