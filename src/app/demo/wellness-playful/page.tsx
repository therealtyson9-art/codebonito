export const dynamic = "force-dynamic";
export default function WellnessPlayfulDemo() {
  const productLines = [
    { name: "Face", tagline: "Glow from the inside out", desc: "Gentle cleansers, hydrating serums, and protective moisturizers crafted with botanical extracts. Every formula is pH-balanced and suitable for sensitive skin.", color: "#fce7f3", accent: "#ec4899" },
    { name: "Body", tagline: "Soft skin, happy soul", desc: "Whipped body butters, exfoliating scrubs, and nourishing oils infused with wildcrafted herbs. Luxurious textures that absorb beautifully without residue.", color: "#fef3c7", accent: "#f59e0b" },
    { name: "Hair", tagline: "Roots to tips radiance", desc: "Sulfate-free shampoos, deep conditioning masks, and scalp treatments made with cold-pressed oils. Formulated for all hair types and textures.", color: "#dbeafe", accent: "#3b82f6" },
    { name: "Wellness", tagline: "Nourish your whole self", desc: "Adaptogenic teas, aromatherapy blends, and bath rituals designed to restore calm. Small-batch, hand-blended in our Portland apothecary.", color: "#dcfce7", accent: "#22c55e" },
  ];

  const bestsellers = [
    { name: "Rose Quartz Facial Serum", price: "$48", desc: "Rosehip oil, hyaluronic acid, and damask rose. Our number-one seller for three years running.", tag: "Face" },
    { name: "Honey Lavender Body Butter", price: "$34", desc: "Raw honey, shea butter, and French lavender. Melts into skin like a dream.", tag: "Body" },
    { name: "Chamomile Calm Tea Blend", price: "$18", desc: "Chamomile, passionflower, and lemon balm. Your new evening ritual.", tag: "Wellness" },
    { name: "Coconut Hibiscus Hair Mask", price: "$32", desc: "Deep conditioning with virgin coconut oil, hibiscus extract, and silk proteins.", tag: "Hair" },
  ];

  const reviews = [
    { name: "Lily M.", text: "The Rose Quartz Serum literally changed my skin. I have been using it for six months and my dermatologist asked what I was doing differently. Obsessed!", rating: 5 },
    { name: "Jordan T.", text: "Finally a brand that does not make me choose between natural ingredients and products that actually work. The body butter is heaven in a jar.", rating: 5 },
    { name: "Priya K.", text: "I gifted the subscription box to my mom and now she is a bigger fan than me. The packaging is beautiful and everything smells incredible.", rating: 5 },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Salsa&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
      <div style={{ fontFamily: "'Nunito', sans-serif", backgroundColor: "#f3e8ff" }} className="min-h-screen text-gray-800">
        {/* Organic Nav */}
        <nav className="py-5 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <span className="text-2xl" style={{ fontFamily: "'Salsa', cursive", color: "#fb7185" }}>Petal & Bloom</span>
            <div className="hidden md:flex gap-7 text-sm font-semibold text-gray-600">
              <a href="#" className="hover:text-gray-900">Shop</a>
              <a href="#" className="hover:text-gray-900">Ingredients</a>
              <a href="#" className="hover:text-gray-900">Bestsellers</a>
              <a href="#" className="hover:text-gray-900">Subscribe</a>
              <a href="#" className="hover:text-gray-900">Our Story</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-gray-600 font-semibold">Cart (0)</a>
              <a href="#" className="text-sm text-white px-5 py-2 rounded-full font-bold" style={{ backgroundColor: "#fb7185" }}>Shop Now</a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "#fb7185" }}>Holistic Skincare & Wellness</p>
              <h1 className="text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "'Salsa', cursive" }}>Nature knows best. We just bottle it.</h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">Plant-powered skincare and wellness products crafted with love in small batches. Every ingredient is ethically sourced, every formula is cruelty-free, and every jar is a little act of self-care.</p>
              <a href="#" className="inline-block px-8 py-3.5 text-white rounded-full font-bold text-lg" style={{ backgroundColor: "#fb7185" }}>Explore the Collection</a>
            </div>
            <div className="bg-white rounded-3xl h-80 flex items-center justify-center shadow-sm border-2 border-pink-100">
              <p className="text-gray-400 text-sm" style={{ fontFamily: "'Salsa', cursive" }}>Floral Illustration</p>
            </div>
          </div>
        </section>

        {/* Product Lines */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: "'Salsa', cursive" }}>Our Collections</h2>
            <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">Four collections, one philosophy: let nature do the heavy lifting.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {productLines.map((p, i) => (
                <div key={i} className="rounded-2xl p-8 border-2" style={{ backgroundColor: p.color, borderColor: `${p.accent}30` }}>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: p.accent }}>{p.tagline}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-3" style={{ fontFamily: "'Salsa', cursive" }}>{p.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{p.desc}</p>
                  <a href="#" className="inline-block mt-4 text-sm font-bold" style={{ color: p.accent }}>Shop {p.name} &rarr;</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ingredients */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Salsa', cursive" }}>Our Ingredients Philosophy</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">We believe skincare should be simple, transparent, and kind. That is why every product we make follows three rules:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3"><span className="text-lg" style={{ color: "#fb7185" }}>&#10047;</span> <strong>Fewer, better ingredients.</strong> Our average formula has 8 ingredients. Most brands use 30 or more.</li>
                <li className="flex items-start gap-3"><span className="text-lg" style={{ color: "#fb7185" }}>&#10047;</span> <strong>Ethically sourced.</strong> Direct relationships with small farms in Morocco, Bulgaria, India, and Oregon.</li>
                <li className="flex items-start gap-3"><span className="text-lg" style={{ color: "#fb7185" }}>&#10047;</span> <strong>No nasties.</strong> Zero parabens, sulfates, phthalates, synthetic fragrances, or microplastics. Ever.</li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["Rosehip", "Shea Butter", "Jojoba", "Chamomile", "Lavender", "Hibiscus"].map((ing, i) => (
                <div key={i} className="rounded-xl p-4 text-center" style={{ backgroundColor: "#fdf2f8" }}>
                  <p className="text-sm font-semibold text-gray-700">{ing}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bestsellers */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Salsa', cursive" }}>Bestsellers</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {bestsellers.map((b, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
                  <div className="h-32 rounded-xl mb-4 flex items-center justify-center" style={{ backgroundColor: "#fdf2f8" }}>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#fb7185" }}>{b.tag}</span>
                  </div>
                  <h3 className="font-bold text-sm mb-1">{b.name}</h3>
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">{b.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold" style={{ color: "#fb7185" }}>{b.price}</span>
                    <a href="#" className="text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ backgroundColor: "#fb7185" }}>Add</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Salsa', cursive" }}>What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <div key={i} className="p-6 rounded-2xl border-2 border-pink-100">
                  <div className="mb-3" style={{ color: "#fb7185" }}>{"&#9733; ".repeat(r.rating).split(" ").filter(Boolean).map((_, j) => <span key={j}>&#9733; </span>)}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                  <p className="text-sm font-bold">{r.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription Box */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center rounded-3xl p-12 border-2" style={{ backgroundColor: "#fff1f2", borderColor: "#fecdd3" }}>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Salsa', cursive" }}>The Bloom Box</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto leading-relaxed">A curated box of seasonal favorites delivered to your door every month. Full-size products, exclusive scents, and a handwritten note from our founder. Starting at $59/month.</p>
            <a href="#" className="inline-block px-8 py-3.5 text-white rounded-full font-bold" style={{ backgroundColor: "#fb7185" }}>Subscribe & Save 20%</a>
            <p className="text-xs text-gray-400 mt-4">Free shipping. Skip or cancel anytime. Gift subscriptions available.</p>
          </div>
        </section>

        {/* Shop CTA */}
        <section className="py-16 px-6 bg-white text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Salsa', cursive" }}>Ready to bloom?</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">Free shipping on orders over $50. Every purchase plants a tree through our partnership with One Tree Planted.</p>
          <a href="#" className="inline-block px-10 py-4 text-white rounded-full font-bold text-lg" style={{ backgroundColor: "#fb7185" }}>Shop the Full Collection</a>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 text-center" style={{ backgroundColor: "#fdf2f8" }}>
          <span className="text-2xl block mb-4" style={{ fontFamily: "'Salsa', cursive", color: "#fb7185" }}>Petal & Bloom</span>
          <div className="flex justify-center gap-6 text-sm text-gray-500 mb-6">
            <a href="#" className="hover:text-gray-700">Instagram</a>
            <a href="#" className="hover:text-gray-700">Pinterest</a>
            <a href="#" className="hover:text-gray-700">TikTok</a>
            <a href="#" className="hover:text-gray-700">Newsletter</a>
          </div>
          <p className="text-xs text-gray-400">Handcrafted in Portland, Oregon &#10047; Cruelty-free &#10047; B Corp Certified</p>
          <p className="text-xs text-gray-400 mt-2">&copy; 2026 Petal & Bloom. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
