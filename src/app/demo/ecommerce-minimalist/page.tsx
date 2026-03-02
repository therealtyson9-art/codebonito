export default function EcommerceMinimalistDemo() {
  const products = [
    { name: "Linen Relaxed Shirt", price: "$89", tag: "New" },
    { name: "Organic Cotton Tee", price: "$45", tag: "" },
    { name: "Merino Wool Cardigan", price: "$165", tag: "Best Seller" },
    { name: "Slim Chino Pant", price: "$98", tag: "" },
    { name: "Canvas Tote Bag", price: "$52", tag: "New" },
    { name: "Leather Belt", price: "$68", tag: "" },
    { name: "Cashmere Beanie", price: "$75", tag: "" },
    { name: "Ribbed Tank Top", price: "$38", tag: "Sale" },
  ];

  const features = [
    { title: "Free Shipping", desc: "On all orders over $75. No exceptions, no minimums on returns." },
    { title: "Easy Returns", desc: "Changed your mind? Return within 30 days for a full refund." },
    { title: "Sustainable", desc: "All materials ethically sourced. Carbon-neutral shipping since 2022." },
    { title: "Quality Guarantee", desc: "Built to last. We stand behind every piece we make." },
  ];

  const testimonials = [
    { name: "Sarah M.", text: "The quality is outstanding. I've been wearing the linen shirt weekly for six months and it only gets better." },
    { name: "James R.", text: "Finally a brand that values simplicity. Clean designs, great fabrics, fair prices." },
    { name: "Aiko T.", text: "My go-to for basics. Everything fits perfectly and the materials feel premium without the markup." },
  ];

  const navLinks = ["Shop", "Collections", "About", "Journal"];
  const footerSections = [
    { title: "Shop", links: ["All Products", "New Arrivals", "Best Sellers", "Sale"] },
    { title: "Company", links: ["About Us", "Sustainability", "Careers", "Press"] },
    { title: "Support", links: ["Contact", "Shipping", "Returns", "FAQ"] },
    { title: "Connect", links: ["Instagram", "Twitter", "Pinterest", "Newsletter"] },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>

      {/* Announcement Bar */}
      <div className="bg-gray-50 text-center py-2.5">
        <p className="text-xs text-gray-500 tracking-wide">Free shipping on orders over $75 &mdash; Shop new arrivals</p>
      </div>

      {/* Nav */}
      <nav className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-lg font-semibold tracking-tight">EVRY</span>
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <span key={link} className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">{link}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <span className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Search</span>
            <span className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Account</span>
            <span className="text-sm text-gray-900 cursor-pointer">Cart (2)</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">Spring 2025</p>
            <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-6 tracking-tight">
              Less noise.<br />More substance.
            </h1>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md text-sm">
              Thoughtfully designed essentials that simplify your wardrobe. Premium materials, clean lines, lasting quality.
            </p>
            <button className="h-11 px-8 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              Shop Collection
            </button>
          </div>
          <div className="bg-gray-50 aspect-[4/5] flex items-center justify-center">
            <span className="text-gray-300 text-xs tracking-widest uppercase">Hero Image</span>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">Curated</p>
            <h2 className="text-2xl font-light tracking-tight">New Arrivals</h2>
          </div>
          <span className="text-sm text-gray-400 hover:text-gray-900 cursor-pointer transition-colors">View all</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="bg-gray-50 aspect-[3/4] mb-3 flex items-center justify-center relative group-hover:bg-gray-100 transition-colors duration-300">
                <span className="text-gray-300 text-xs tracking-widest uppercase">Product</span>
                {product.tag && (
                  <span className="absolute top-3 left-3 text-[10px] tracking-wider uppercase text-gray-500 bg-white px-2 py-0.5">{product.tag}</span>
                )}
              </div>
              <h3 className="text-sm font-normal text-gray-900 mb-1">{product.name}</h3>
              <p className="text-sm text-gray-400">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features / Trust Badges */}
      <section className="border-y border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          {features.map((f) => (
            <div key={f.title}>
              <h3 className="text-sm font-medium text-gray-900 mb-2">{f.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xs text-gray-400 tracking-widest uppercase mb-2 text-center">What people say</p>
        <h2 className="text-2xl font-light tracking-tight text-center mb-12">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-gray-100 p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-gray-900 text-xs">&#9733;</span>
                ))}
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <p className="text-xs font-medium text-gray-900">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="text-xl font-light tracking-tight mb-3">Stay in the loop</h2>
          <p className="text-sm text-gray-400 mb-6">New drops and exclusive offers. No spam, ever.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 h-10 px-4 text-sm bg-white border border-gray-200 focus:outline-none focus:border-gray-400 placeholder:text-gray-300"
              readOnly
            />
            <button className="h-10 px-6 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-medium text-gray-900 uppercase tracking-wider mb-4">{section.title}</h4>
              <div className="space-y-2.5">
                {section.links.map((link) => (
                  <p key={link} className="text-sm text-gray-400 hover:text-gray-900 cursor-pointer transition-colors">{link}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-300">&copy; 2025 EVRY. All rights reserved.</span>
          <div className="flex items-center space-x-6">
            {["Privacy", "Terms", "Accessibility"].map((link) => (
              <span key={link} className="text-xs text-gray-300 hover:text-gray-500 cursor-pointer transition-colors">{link}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
