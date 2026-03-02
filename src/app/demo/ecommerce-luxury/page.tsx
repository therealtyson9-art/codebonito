export default function EcommerceLuxuryDemo() {
  const collection = [
    { name: "Nuit Eternelle", type: "Eau de Parfum", price: "$285", size: "75ml", notes: "Black orchid, aged oud, Tahitian vanilla" },
    { name: "Jardin Secret", type: "Eau de Parfum", price: "$245", size: "75ml", notes: "Damascus rose, white musk, morning dew" },
    { name: "Ambre Sacre", type: "Parfum", price: "$340", size: "50ml", notes: "Amber resin, sandalwood, saffron, leather" },
    { name: "Lumiere d'Or", type: "Eau de Toilette", price: "$195", size: "100ml", notes: "Bergamot, jasmine absolute, golden woods" },
  ];

  const ingredients = [
    { name: "Grasse Rose", origin: "Provence, France", desc: "Hand-picked at dawn during the six-week harvest, yielding the purest rose absolute in perfumery." },
    { name: "Mysore Sandalwood", origin: "Karnataka, India", desc: "Aged over sixty years for unparalleled depth and creamy warmth in our oriental compositions." },
    { name: "Calabrian Bergamot", origin: "Reggio Calabria, Italy", desc: "Cold-pressed from sun-ripened fruit, providing luminous, sparkling citrus top notes." },
  ];

  const testimonials = [
    { name: "Isabelle M.", location: "Paris", text: "Nuit Eternelle is the fragrance I reach for on every significant evening. It lingers beautifully and draws compliments without effort." },
    { name: "Thomas K.", location: "London", text: "The craftsmanship is evident from the moment you hold the bottle. Ambre Sacre has become my signature scent." },
    { name: "Sofia R.", location: "Milan", text: "Jardin Secret captures something rare, a sense of intimacy and beauty that I have never found in another house." },
  ];

  const boutiques = [
    { city: "Paris", address: "12 Rue du Faubourg Saint-Honore, 75008", hours: "Mon-Sat 10:00-19:00" },
    { city: "London", address: "27 New Bond Street, Mayfair, W1S 2RL", hours: "Mon-Sat 10:00-18:30" },
    { city: "New York", address: "680 Madison Avenue, 10065", hours: "Mon-Sat 10:00-19:00, Sun 12:00-17:00" },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, backgroundColor: "#000" }} className="min-h-screen text-white">
      <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400&display=swap" rel="stylesheet" />

      {/* Minimal Nav */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex items-center justify-between" style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)" }}>
        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="block w-6 h-px" style={{ backgroundColor: "#d4a574" }} />
            <span className="block w-4 h-px" style={{ backgroundColor: "#d4a574" }} />
            <span className="block w-6 h-px" style={{ backgroundColor: "#d4a574" }} />
          </div>
          <span className="text-xs uppercase tracking-widest hidden md:inline" style={{ color: "#d4a574" }}>Menu</span>
        </div>
        <span style={{ fontFamily: "'Bodoni Moda', serif", color: "#d4a574" }} className="text-2xl md:text-3xl tracking-wide">
          Maison Riviere
        </span>
        <div className="flex items-center gap-6 text-xs uppercase tracking-widest" style={{ color: "#d4a574" }}>
          <span className="hidden md:inline cursor-pointer">Search</span>
          <span className="cursor-pointer">Bag (0)</span>
        </div>
      </nav>

      {/* Single Product Spotlight Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-24 pb-16 text-center relative">
        <p className="text-xs uppercase tracking-[0.3em] mb-8" style={{ color: "#d4a574" }}>The New Signature</p>
        <div className="w-48 h-72 rounded-sm mb-10" style={{ backgroundColor: "#1a1a1a", border: "1px solid #d4a574" }} />
        <h1 style={{ fontFamily: "'Bodoni Moda', serif" }} className="text-5xl md:text-7xl font-normal mb-4 tracking-wide">
          Nuit Eternelle
        </h1>
        <p style={{ color: "#d4a574", fontFamily: "'Bodoni Moda', serif", fontStyle: "italic" }} className="text-lg md:text-xl mb-6">
          Eau de Parfum | 75ml
        </p>
        <p className="text-neutral-400 max-w-lg mx-auto text-sm leading-relaxed mb-10">
          A nocturnal composition of rare black orchid and aged oud, softened by the warmth of Tahitian vanilla.
          Each bottle is hand-finished in our Grasse atelier and numbered as part of a limited annual edition.
        </p>
        <div className="flex gap-4">
          <button className="text-xs uppercase tracking-[0.2em] px-10 py-4 border" style={{ borderColor: "#d4a574", color: "#d4a574" }}>
            Discover
          </button>
          <button className="text-xs uppercase tracking-[0.2em] px-10 py-4" style={{ backgroundColor: "#d4a574", color: "#000" }}>
            Add to Bag — $285
          </button>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 px-8" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] mb-6" style={{ color: "#d4a574" }}>Our Heritage</p>
          <h2 style={{ fontFamily: "'Bodoni Moda', serif" }} className="text-3xl md:text-5xl mb-8 tracking-wide">The Art of Scent</h2>
          <p className="text-neutral-400 text-sm leading-loose mb-6">
            Founded in 1962 by master perfumer Henri Riviere, Maison Riviere has spent six decades devoted to a
            singular pursuit: capturing emotion in fragrance. From our atelier in Grasse, the historic heart of
            French perfumery, every composition is developed over months of careful refinement.
          </p>
          <p className="text-neutral-400 text-sm leading-loose">
            We source the rarest ingredients from their places of origin. We work in small batches, never
            compromising quality for scale. Each fragrance in our collection tells a complete story, one that
            unfolds on the skin throughout the day, revealing new facets with every passing hour.
          </p>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#d4a574" }}>The Collection</p>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif" }} className="text-3xl md:text-4xl tracking-wide">Four Fragrances</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {collection.map((item, i) => (
              <div key={i} className="text-center cursor-pointer group">
                <div className="aspect-[3/4] mb-6 transition-all duration-500 group-hover:scale-105" style={{ backgroundColor: "#111", border: "1px solid #222" }} />
                <h3 style={{ fontFamily: "'Bodoni Moda', serif" }} className="text-lg tracking-wide mb-1">{item.name}</h3>
                <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2">{item.type} | {item.size}</p>
                <p className="text-xs text-neutral-600 mb-3 italic" style={{ fontFamily: "'Bodoni Moda', serif" }}>{item.notes}</p>
                <p style={{ color: "#d4a574" }} className="text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-24 px-8" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#d4a574" }}>Sourced With Care</p>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif" }} className="text-3xl md:text-4xl tracking-wide">The Finest Ingredients</h2>
          </div>
          <div className="space-y-12">
            {ingredients.map((ing, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-start border-b border-neutral-800 pb-12">
                <div className="w-24 h-24 rounded-full flex-shrink-0" style={{ backgroundColor: "#111", border: "1px solid #d4a574" }} />
                <div>
                  <h3 style={{ fontFamily: "'Bodoni Moda', serif" }} className="text-xl mb-1">{ing.name}</h3>
                  <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "#d4a574" }}>{ing.origin}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed">{ing.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#d4a574" }}>Voices</p>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif" }} className="text-3xl md:text-4xl tracking-wide">From Our Patrons</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <p style={{ fontFamily: "'Bodoni Moda', serif", fontStyle: "italic" }} className="text-neutral-300 leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-sm" style={{ color: "#d4a574" }}>{t.name}</p>
                <p className="text-xs text-neutral-600 mt-1">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boutique Locations */}
      <section className="py-24 px-8" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: "#d4a574" }}>Visit Us</p>
            <h2 style={{ fontFamily: "'Bodoni Moda', serif" }} className="text-3xl md:text-4xl tracking-wide">Our Boutiques</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {boutiques.map((b, i) => (
              <div key={i} className="text-center p-8 border border-neutral-800">
                <h3 style={{ fontFamily: "'Bodoni Moda', serif" }} className="text-xl mb-3">{b.city}</h3>
                <p className="text-neutral-400 text-sm mb-2">{b.address}</p>
                <p className="text-xs" style={{ color: "#d4a574" }}>{b.hours}</p>
                <button className="mt-6 text-xs uppercase tracking-[0.15em] border px-6 py-2" style={{ borderColor: "#d4a574", color: "#d4a574" }}>
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-16 px-8">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <span style={{ fontFamily: "'Bodoni Moda', serif", color: "#d4a574" }} className="text-2xl tracking-wide mb-6">
            Maison Riviere
          </span>
          <div className="flex gap-8 mb-8 text-xs uppercase tracking-[0.15em] text-neutral-500">
            <span className="cursor-pointer hover:text-white">Collection</span>
            <span className="cursor-pointer hover:text-white">Heritage</span>
            <span className="cursor-pointer hover:text-white">Boutiques</span>
            <span className="cursor-pointer hover:text-white">Contact</span>
            <span className="cursor-pointer hover:text-white">Careers</span>
          </div>
          <p className="text-xs text-neutral-700">&copy; 2025 Maison Riviere. Grasse, France. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
