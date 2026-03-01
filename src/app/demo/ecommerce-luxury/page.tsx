export default function EcommerceLuxuryDemo() {
  const products = [
    { name: "Silk Draped Blazer", price: "$2,450", category: "Outerwear" },
    { name: "Cashmere Knit Top", price: "$980", category: "Knitwear" },
    { name: "Tailored Wool Trousers", price: "$1,200", category: "Bottoms" },
    { name: "Leather Clutch Bag", price: "$1,850", category: "Accessories" },
    { name: "Embroidered Midi Dress", price: "$3,600", category: "Dresses" },
    { name: "Gold Chain Necklace", price: "$4,200", category: "Jewelry" },
    { name: "Suede Ankle Boots", price: "$1,680", category: "Footwear" },
    { name: "Merino Wool Scarf", price: "$540", category: "Accessories" },
  ];

  const categories = ["New Arrivals", "Ready-to-Wear", "Accessories", "Footwear", "Jewelry", "Sale"];

  return (
    <div className="min-h-screen bg-stone-950 text-amber-50" style={{ fontFamily: "Outfit, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>

      {/* Top Bar */}
      <div className="bg-amber-200/10 text-center py-2">
        <p className="text-xs tracking-[0.2em] text-amber-200/70 uppercase">Complimentary shipping on orders over $500</p>
      </div>

      {/* Nav */}
      <nav className="border-b border-amber-200/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-8">
            {categories.slice(0, 3).map((cat) => (
              <span key={cat} className="text-xs tracking-[0.15em] uppercase text-amber-200/60 hover:text-amber-200 cursor-pointer transition-colors">{cat}</span>
            ))}
          </div>
          <h1 className="text-2xl tracking-[0.3em] uppercase" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 600 }}>
            Maison Aurelle
          </h1>
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-xs tracking-[0.15em] uppercase text-amber-200/60 hover:text-amber-200 cursor-pointer transition-colors">Account</span>
            <span className="text-xs tracking-[0.15em] uppercase text-amber-200/60 hover:text-amber-200 cursor-pointer transition-colors">Wishlist</span>
            <span className="text-xs tracking-[0.15em] uppercase text-amber-200/60 hover:text-amber-200 cursor-pointer transition-colors">Bag (2)</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-44 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-amber-200/50 mb-6">Autumn/Winter 2024</p>
            <h2 className="text-5xl lg:text-7xl leading-[1.1] mb-8 text-amber-50" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}>
              The Art of<br />Quiet Luxury
            </h2>
            <p className="text-amber-200/50 leading-relaxed mb-10 max-w-md text-sm">
              Discover our latest collection — where timeless silhouettes meet exceptional craftsmanship. Each piece is designed to transcend seasons and trends.
            </p>
            <button className="h-12 px-10 text-xs tracking-[0.2em] uppercase font-medium border border-amber-200/40 text-amber-200 hover:bg-amber-200 hover:text-stone-950 transition-all duration-500">
              Explore Collection
            </button>
          </div>
          <div className="bg-stone-900 aspect-[3/4] rounded-sm flex items-center justify-center">
            <span className="text-amber-200/20 text-xs tracking-widest uppercase">Campaign Image</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-amber-200/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-center space-x-12 overflow-x-auto">
          {categories.map((cat) => (
            <span key={cat} className="text-xs tracking-[0.15em] uppercase text-amber-200/40 hover:text-amber-200 cursor-pointer transition-colors whitespace-nowrap">
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-amber-200/40 mb-4">Curated Selection</p>
          <h2 className="text-4xl lg:text-5xl text-amber-50" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400 }}>
            New Arrivals
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="bg-stone-900 aspect-[3/4] rounded-sm mb-4 flex items-center justify-center group-hover:bg-stone-800 transition-colors duration-500">
                <span className="text-amber-200/15 text-xs tracking-widest uppercase">Product</span>
              </div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-amber-200/40 mb-1">{product.category}</p>
              <h3 className="text-sm font-light text-amber-50 mb-1 group-hover:text-amber-200 transition-colors">{product.name}</h3>
              <p className="text-sm text-amber-200/60">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="h-11 px-10 text-xs tracking-[0.2em] uppercase font-medium border border-amber-200/30 text-amber-200/70 hover:bg-amber-200 hover:text-stone-950 transition-all duration-500">
            View All Products
          </button>
        </div>
      </section>

      {/* Editorial */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-stone-900 aspect-[16/9] rounded-sm flex items-center justify-center">
            <span className="text-amber-200/15 text-xs tracking-widest uppercase">Editorial Image</span>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] uppercase text-amber-200/40 mb-6">The Journal</p>
            <h3 className="text-3xl mb-4 text-amber-50" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400 }}>
              Behind the Atelier
            </h3>
            <p className="text-sm text-amber-200/40 leading-relaxed mb-8">
              Step inside our Parisian atelier and discover the meticulous process behind each garment. From hand-selected fabrics to final stitch.
            </p>
            <span className="text-xs tracking-[0.15em] uppercase text-amber-200/60 hover:text-amber-200 cursor-pointer transition-colors">
              Read More &rarr;
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-amber-200/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {[
            { title: "Craftsmanship", desc: "Handmade by master artisans in our Parisian atelier" },
            { title: "Sustainability", desc: "Ethically sourced materials with full supply chain transparency" },
            { title: "Heritage", desc: "Rooted in 40 years of French haute couture tradition" },
            { title: "Service", desc: "Personal styling consultations and white-glove delivery" },
          ].map((f) => (
            <div key={f.title}>
              <h3 className="text-xs tracking-[0.2em] uppercase text-amber-200/70 mb-3">{f.title}</h3>
              <p className="text-xs text-amber-200/30 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
        <h2 className="text-3xl lg:text-4xl mb-4 text-amber-50" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400 }}>
          Join the Maison
        </h2>
        <p className="text-sm text-amber-200/40 mb-8 max-w-md mx-auto">
          Be the first to discover new collections, exclusive events, and the stories behind our craft.
        </p>
        <div className="flex justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 h-11 px-4 bg-transparent border border-amber-200/20 text-sm text-amber-50 placeholder:text-amber-200/20 focus:outline-none focus:border-amber-200/50"
            readOnly
          />
          <button className="h-11 px-8 text-xs tracking-[0.15em] uppercase font-medium bg-amber-200 text-stone-950 hover:bg-amber-100 transition-colors">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-200/10 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-amber-200/60 mb-4">Shop</h4>
            <div className="space-y-2">
              {["New Arrivals", "Ready-to-Wear", "Accessories", "Sale"].map((item) => (
                <p key={item} className="text-xs text-amber-200/30 hover:text-amber-200/60 cursor-pointer transition-colors">{item}</p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-amber-200/60 mb-4">About</h4>
            <div className="space-y-2">
              {["Our Story", "Atelier", "Sustainability", "Careers"].map((item) => (
                <p key={item} className="text-xs text-amber-200/30 hover:text-amber-200/60 cursor-pointer transition-colors">{item}</p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-amber-200/60 mb-4">Help</h4>
            <div className="space-y-2">
              {["Shipping", "Returns", "Size Guide", "Contact"].map((item) => (
                <p key={item} className="text-xs text-amber-200/30 hover:text-amber-200/60 cursor-pointer transition-colors">{item}</p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-amber-200/60 mb-4">Follow</h4>
            <div className="space-y-2">
              {["Instagram", "Pinterest", "TikTok", "YouTube"].map((item) => (
                <p key={item} className="text-xs text-amber-200/30 hover:text-amber-200/60 cursor-pointer transition-colors">{item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-amber-200/5 flex items-center justify-between">
          <span className="text-xs text-amber-200/20">&copy; 2024 Maison Aurelle. All rights reserved.</span>
          <span className="text-xs text-amber-200/20 tracking-[0.3em] uppercase" style={{ fontFamily: "Cormorant Garamond, serif" }}>Maison Aurelle</span>
        </div>
      </footer>
    </div>
  );
}
