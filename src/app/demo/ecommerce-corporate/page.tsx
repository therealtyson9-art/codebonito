export default function EcommerceCorporateDemo() {
  const products = [
    { name: "ProDesk Ergonomic Chair", price: "$549", rating: 4.8, reviews: 342, badge: "Best Seller" },
    { name: "UltraWide 34\" Monitor", price: "$799", rating: 4.9, reviews: 187, badge: "" },
    { name: "Mechanical Keyboard Pro", price: "$169", rating: 4.7, reviews: 521, badge: "Top Rated" },
    { name: "Wireless Mouse Elite", price: "$89", rating: 4.6, reviews: 298, badge: "" },
    { name: "Standing Desk Frame", price: "$449", rating: 4.8, reviews: 156, badge: "New" },
    { name: "Noise-Cancel Headset", price: "$249", rating: 4.9, reviews: 403, badge: "Best Seller" },
    { name: "USB-C Docking Station", price: "$179", rating: 4.5, reviews: 89, badge: "" },
    { name: "LED Desk Lamp Pro", price: "$119", rating: 4.7, reviews: 234, badge: "" },
  ];

  const categories = ["Desks", "Chairs", "Monitors", "Peripherals", "Audio", "Lighting", "Accessories"];

  const trustBadges = [
    { title: "Secure Checkout", desc: "256-bit SSL encryption on all transactions" },
    { title: "Verified Business", desc: "BBB A+ rated since 2018" },
    { title: "30-Day Guarantee", desc: "Full refund if you are not satisfied" },
    { title: "Expert Support", desc: "Dedicated account managers for businesses" },
  ];

  const testimonials = [
    { name: "Michael Chen", role: "CTO, Vertex Labs", text: "We outfitted our entire office with ProWorkspace gear. The ergonomic chairs alone reduced our team's back pain complaints by 60%." },
    { name: "Jennifer Walsh", role: "Office Manager, Greystone Inc.", text: "Seamless ordering, bulk pricing, and fast delivery. Their business portal makes procurement simple." },
    { name: "David Osei", role: "Founder, NexGen Studio", text: "The monitor and keyboard combo transformed my productivity. Top-tier build quality at a fair price." },
  ];

  const footerSections = [
    { title: "Products", links: ["All Products", "New Arrivals", "Best Sellers", "Bulk Orders", "Gift Cards"] },
    { title: "Business", links: ["Corporate Sales", "Volume Pricing", "Procurement Portal", "Net 30 Terms", "Case Studies"] },
    { title: "Support", links: ["Help Center", "Contact Us", "Warranty Claims", "Returns", "Shipping Info"] },
    { title: "Company", links: ["About Us", "Careers", "Press Room", "Sustainability", "Partners"] },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>

      {/* Top Bar */}
      <div className="bg-blue-900 text-center py-2">
        <p className="text-xs text-blue-100">Business accounts get 15% off + Net 30 terms &mdash; <span className="underline cursor-pointer">Apply Now</span></p>
      </div>

      {/* Nav */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <span className="text-xl font-bold text-blue-800 tracking-tight">ProWorkspace</span>
              <div className="hidden lg:flex items-center space-x-1">
                {categories.map((cat) => (
                  <span key={cat} className="text-sm text-gray-600 hover:text-blue-800 hover:bg-blue-50 px-3 py-2 rounded cursor-pointer transition-colors">{cat}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 hover:text-blue-800 cursor-pointer transition-colors">Orders</span>
              <span className="text-sm text-gray-600 hover:text-blue-800 cursor-pointer transition-colors">Account</span>
              <span className="bg-blue-800 text-white text-sm px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition-colors">Cart (1)</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-700 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full mb-4">Spring Sale - Up to 25% Off</span>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">
              Professional-Grade Workspace Equipment
            </h1>
            <p className="text-blue-200 leading-relaxed mb-8 max-w-lg">
              Ergonomic furniture, premium peripherals, and enterprise-grade tech for teams of any size. Trusted by 5,000+ businesses worldwide.
            </p>
            <div className="flex items-center space-x-4">
              <button className="h-12 px-8 text-sm font-semibold bg-white text-blue-900 rounded hover:bg-blue-50 transition-colors">
                Shop Now
              </button>
              <button className="h-12 px-8 text-sm font-semibold border-2 border-white/30 text-white rounded hover:bg-white/10 transition-colors">
                Business Solutions
              </button>
            </div>
          </div>
          <div className="bg-blue-800/50 aspect-[4/3] rounded-lg flex items-center justify-center">
            <span className="text-blue-400 text-xs tracking-widest uppercase">Hero Image</span>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 border-b border-gray-200 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 text-center">
          {["Secure 256-bit SSL", "Free Shipping $99+", "30-Day Returns", "5,000+ Businesses Trust Us"].map((item) => (
            <span key={item} className="text-xs font-medium text-gray-500">{item}</span>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-sm text-gray-500 mt-1">Handpicked by our workspace specialists</p>
          </div>
          <span className="text-sm font-semibold text-blue-800 hover:text-blue-600 cursor-pointer transition-colors">View All Products</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.name} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:border-blue-200 transition-all duration-200 cursor-pointer group">
              <div className="bg-gray-50 aspect-square rounded mb-4 flex items-center justify-center relative">
                <span className="text-gray-300 text-xs tracking-widest uppercase">Product</span>
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-blue-800 text-white text-[10px] font-semibold px-2 py-0.5 rounded">{product.badge}</span>
                )}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-800 transition-colors">{product.name}</h3>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center space-x-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-xs">&#9733;</span>
                  ))}
                </div>
                <span className="text-xs text-gray-400">{product.rating} ({product.reviews})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">{product.price}</span>
                <span className="text-xs font-medium text-blue-800 bg-blue-50 px-2 py-1 rounded cursor-pointer hover:bg-blue-100 transition-colors">Add to Cart</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="bg-gray-50 border-y border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-10">Why Businesses Choose ProWorkspace</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-800 text-lg font-bold">&#10003;</span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-xl font-bold text-center text-gray-900 mb-2">Trusted by Industry Leaders</h2>
        <p className="text-sm text-gray-500 text-center mb-10">See what our customers have to say</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-sm">&#9733;</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-900 py-14">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Get Exclusive Business Deals</h2>
          <p className="text-sm text-blue-200 mb-6">Join 12,000+ professionals receiving weekly workspace tips and exclusive offers.</p>
          <div className="flex rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 h-12 px-4 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none"
              readOnly
            />
            <button className="h-12 px-6 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-blue-300 mt-3">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <span className="text-lg font-bold text-white tracking-tight">ProWorkspace</span>
            <p className="text-xs leading-relaxed mt-3">Professional workspace equipment for modern teams. Trusted since 2018.</p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">{section.title}</h4>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <p key={link} className="text-xs text-gray-500 hover:text-white cursor-pointer transition-colors">{link}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-600">&copy; 2025 ProWorkspace Inc. All rights reserved.</span>
          <div className="flex items-center space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings", "Accessibility"].map((link) => (
              <span key={link} className="text-xs text-gray-600 hover:text-gray-400 cursor-pointer transition-colors">{link}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
