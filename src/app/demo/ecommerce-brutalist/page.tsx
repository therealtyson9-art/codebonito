export default function EcommerceBrutalistDemo() {
  const products = [
    { name: "UTILITY JACKET", price: "$120.00", id: "UTL-001", stock: 14 },
    { name: "RAW DENIM PANT", price: "$95.00", id: "RDP-002", stock: 8 },
    { name: "HEAVY COTTON TEE", price: "$48.00", id: "HCT-003", stock: 31 },
    { name: "CANVAS BACKPACK", price: "$78.00", id: "CVB-004", stock: 5 },
    { name: "WORK BOOT", price: "$185.00", id: "WBT-005", stock: 12 },
    { name: "WOOL WATCH CAP", price: "$32.00", id: "WWC-006", stock: 22 },
    { name: "CARGO SHORT", price: "$65.00", id: "CGS-007", stock: 0 },
    { name: "SHOP APRON", price: "$55.00", id: "SHP-008", stock: 17 },
  ];

  const marqueeItems = ["FREE SHIPPING OVER $100", "NO RETURNS NO REFUNDS", "MADE IN USA", "RAW GOODS ONLY", "EST. 2019"];

  const testimonials = [
    { name: "D. KOWALSKI", text: "NO FRILLS. JUST QUALITY PRODUCT. EXACTLY WHAT I WANTED.", location: "BROOKLYN, NY" },
    { name: "M. OKONKWO", text: "BOUGHT THE JACKET. WORE IT EVERY DAY FOR A YEAR. STILL HOLDS UP.", location: "CHICAGO, IL" },
    { name: "R. TANAKA", text: "FINALLY A BRAND THAT DOESN'T TRY TO BE SOMETHING IT ISN'T.", location: "PORTLAND, OR" },
  ];

  const features = [
    { label: "SHIPPING", value: "2-5 BUSINESS DAYS // FREE OVER $100" },
    { label: "MATERIALS", value: "DEADSTOCK + ORGANIC // SOURCED DOMESTICALLY" },
    { label: "WARRANTY", value: "LIFETIME REPAIR // NO QUESTIONS ASKED" },
    { label: "PACKAGING", value: "ZERO PLASTIC // RECYCLED CARDBOARD ONLY" },
  ];

  const footerCols = [
    { title: "SHOP", links: ["ALL PRODUCTS", "NEW STOCK", "RESTOCKS", "ARCHIVE"] },
    { title: "INFO", links: ["ABOUT", "PROCESS", "STOCKISTS", "WHOLESALE"] },
    { title: "HELP", links: ["SIZING", "SHIPPING", "CONTACT", "FAQ"] },
  ];

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "Space Mono, monospace" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>

      {/* Marquee Bar */}
      <div className="bg-black text-white py-2 overflow-hidden">
        <div className="flex items-center space-x-8 whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((item, i) => (
            <span key={i} className="text-xs tracking-widest">{item} &mdash;</span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <nav className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">RAW/GOODS</span>
          <div className="hidden md:flex items-center space-x-6">
            {["SHOP", "ABOUT", "STOCKISTS", "JOURNAL"].map((link) => (
              <span key={link} className="text-xs font-bold tracking-widest hover:bg-black hover:text-white px-2 py-1 cursor-pointer transition-colors">{link}</span>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs font-bold tracking-widest hover:bg-black hover:text-white px-2 py-1 cursor-pointer transition-colors">SEARCH</span>
            <span className="border-2 border-black px-3 py-1 text-xs font-bold tracking-widest hover:bg-black hover:text-white cursor-pointer transition-colors">CART [3]</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="border-r-0 lg:border-r-4 border-black pr-0 lg:pr-12 flex flex-col justify-center">
            <p className="text-xs tracking-widest mb-4">COLLECTION_005 // SPRING 2025</p>
            <h1 className="text-4xl lg:text-6xl font-bold leading-none mb-6 tracking-tight uppercase">
              No trends.<br />No hype.<br />Just goods.
            </h1>
            <p className="text-sm leading-relaxed mb-8 max-w-md">
              Workwear-inspired essentials built from deadstock fabrics and organic materials. Every piece is cut, sewn, and finished in Los Angeles.
            </p>
            <button className="self-start border-4 border-black px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
              SHOP NOW
            </button>
          </div>
          <div className="bg-black aspect-square lg:aspect-auto flex items-center justify-center mt-8 lg:mt-0">
            <span className="text-white text-xs tracking-widest">[ HERO IMAGE ]</span>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8 border-b-2 border-black pb-4">
          <h2 className="text-2xl font-bold tracking-tight uppercase">ALL PRODUCTS</h2>
          <span className="text-xs tracking-widest">{products.length} ITEMS</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {products.map((product) => (
            <div key={product.id} className="border-2 border-black p-4 cursor-pointer hover:bg-black hover:text-white transition-colors group">
              <div className="bg-gray-100 group-hover:bg-gray-800 aspect-square mb-4 flex items-center justify-center">
                <span className="text-gray-400 group-hover:text-gray-500 text-xs tracking-widest">[IMG]</span>
              </div>
              <p className="text-[10px] tracking-widest text-gray-500 group-hover:text-gray-400 mb-1">{product.id}</p>
              <h3 className="text-xs font-bold tracking-wider mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">{product.price}</span>
                <span className={`text-[10px] tracking-widest ${product.stock === 0 ? "text-red-600" : "text-gray-500 group-hover:text-gray-400"}`}>
                  {product.stock === 0 ? "SOLD OUT" : `${product.stock} LEFT`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-6">
          {features.map((f, i) => (
            <div key={f.label} className={`py-6 flex flex-col md:flex-row md:items-center justify-between ${i < features.length - 1 ? "border-b-2 border-black" : ""}`}>
              <span className="text-xs font-bold tracking-widest mb-2 md:mb-0">{f.label}</span>
              <span className="text-xs tracking-wider text-gray-600">{f.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight uppercase mb-8 border-b-2 border-black pb-4">FIELD REPORTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {testimonials.map((t) => (
            <div key={t.name} className="border-2 border-black p-6">
              <p className="text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t-2 border-black pt-4">
                <p className="text-xs font-bold tracking-widest">{t.name}</p>
                <p className="text-[10px] tracking-widest text-gray-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-y-4 border-black py-12">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-xl font-bold tracking-tight uppercase mb-2">GET ON THE LIST</h2>
          <p className="text-xs tracking-wider text-gray-600 mb-6">RESTOCK ALERTS + NEW DROP NOTIFICATIONS. NO SPAM. UNSUBSCRIBE ANYTIME.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="EMAIL@ADDRESS.COM"
              className="flex-1 h-12 px-4 text-xs tracking-wider border-4 border-black border-r-0 bg-transparent placeholder:text-gray-400 focus:outline-none"
              readOnly
            />
            <button className="h-12 px-6 text-xs font-bold tracking-widest bg-black text-white border-4 border-black hover:bg-white hover:text-black transition-colors">
              SUBMIT
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <span className="text-lg font-bold tracking-tight">RAW/GOODS</span>
            <p className="text-xs tracking-wider text-gray-500 mt-3 leading-relaxed">
              LOS ANGELES, CA<br />EST. 2019
            </p>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold tracking-widest mb-4">{col.title}</h4>
              <div className="space-y-2">
                {col.links.map((link) => (
                  <p key={link} className="text-xs tracking-wider text-gray-500 hover:text-black cursor-pointer transition-colors">{link}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t-2 border-black flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] tracking-widest text-gray-500">&copy; 2025 RAW/GOODS. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center space-x-6">
            {["PRIVACY", "TERMS", "ACCESSIBILITY"].map((link) => (
              <span key={link} className="text-[10px] tracking-widest text-gray-500 hover:text-black cursor-pointer transition-colors">{link}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
