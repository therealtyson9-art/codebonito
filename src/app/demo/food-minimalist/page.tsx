export default function FoodMinimalistDemo() {
  const recipes = [
    { name: "Dashi Ochazuke", season: "Winter", time: "15 min", description: "Rice steeped in fragrant dashi broth with pickled plum, nori, and wasabi. The simplest meal, and often the most satisfying.", ingredients: "Steamed rice, kombu dashi, umeboshi, toasted nori, wasabi" },
    { name: "Spring Onigiri", season: "Spring", time: "20 min", description: "Hand-formed rice triangles filled with seasoned bamboo shoot and shiso leaf. A bento essential that celebrates restraint.", ingredients: "Short-grain rice, bamboo shoot, shiso, sea salt, nori" },
    { name: "Cold Somen", season: "Summer", time: "10 min", description: "Ice-chilled wheat noodles with a clean tsuyu dipping sauce and grated ginger. When heat demands simplicity.", ingredients: "Somen noodles, tsuyu, fresh ginger, scallion, myoga" },
    { name: "Miso-Glazed Kabocha", season: "Autumn", time: "35 min", description: "Roasted Japanese pumpkin with a white miso and mirin glaze. Sweet, savory, and impossibly tender.", ingredients: "Kabocha squash, white miso, mirin, sesame seeds" },
  ]

  const essentials = [
    { name: "Nakiri Knife", price: "$89", description: "A vegetable knife with a flat blade for precise, even cuts. The foundation of Japanese home cooking." },
    { name: "Donabe Clay Pot", price: "$120", description: "Handcrafted earthenware for slow-cooked rice, hot pots, and soups that taste like they took hours." },
    { name: "Suribachi Mortar", price: "$45", description: "A ridged ceramic mortar for grinding sesame seeds, making dressings, and preparing gomashio." },
    { name: "Hinoki Cutting Board", price: "$75", description: "Japanese cypress wood that is naturally antibacterial, gentle on blades, and beautiful on your counter." },
  ]

  return (
    <div style={{ backgroundColor: "#ffffff", fontFamily: "'Zen Kaku Gothic New', sans-serif" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700&display=swap" rel="stylesheet" />

      {/* Zen Nav */}
      <nav className="max-w-4xl mx-auto px-8 py-8 flex items-center justify-between">
        <span className="text-lg tracking-widest" style={{ color: "#5a7a42", fontFamily: "'Zen Kaku Gothic New', sans-serif", fontWeight: 700 }}>KANSO</span>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#5a7a42", fontWeight: 300 }}>
          <a href="#philosophy" className="hover:opacity-70">Philosophy</a>
          <a href="#recipes" className="hover:opacity-70">Recipes</a>
          <a href="#shop" className="hover:opacity-70">Shop</a>
          <a href="#about" className="hover:opacity-70">About</a>
        </div>
        <button className="text-sm underline underline-offset-4" style={{ color: "#5a7a42", fontWeight: 300 }}>Newsletter</button>
      </nav>

      {/* Ingredient Hero */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#f4f7f0", height: "380px" }}>
          <div className="h-full flex flex-col items-center justify-center text-center px-8">
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "#8aa86e", fontWeight: 300 }}>The kitchen as meditation</p>
            <h1 className="text-4xl md:text-5xl leading-tight mb-6" style={{ color: "#5a7a42", fontFamily: "'Zen Kaku Gothic New', sans-serif", fontWeight: 700 }}>
              One ingredient.<br />Full attention.
            </h1>
            <p className="text-base max-w-md leading-relaxed" style={{ color: "#7a9a62", fontWeight: 300 }}>
              Kanso Kitchen is a practice of simplicity. We cook with fewer ingredients, more intention, and the belief that nourishment begins before the first bite.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="max-w-3xl mx-auto px-8 py-16 text-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#8aa86e", fontWeight: 300 }}>Our approach</p>
        <h2 className="text-3xl mb-8" style={{ color: "#5a7a42", fontFamily: "'Zen Kaku Gothic New', sans-serif", fontWeight: 700 }}>Kanso: the beauty of elimination</h2>
        <p className="text-base leading-loose mb-6" style={{ color: "#6b8a52", fontWeight: 300 }}>
          In Japanese aesthetics, kanso means simplicity achieved by eliminating the unnecessary. In our kitchen, this means five ingredients or fewer per recipe, seasonal produce from local farms, and techniques that honor the ingredient rather than mask it. We do not add what is not needed. We do not rush what asks for patience.
        </p>
        <p className="text-base leading-loose" style={{ color: "#6b8a52", fontWeight: 300 }}>
          Every recipe on this site has been tested in a home kitchen with a single burner, a good knife, and whatever the market offered that morning. No special equipment. No rare imports. Just attention.
        </p>
      </section>

      {/* Seasonal Recipes */}
      <section id="recipes" className="max-w-4xl mx-auto px-8 py-16">
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#8aa86e", fontWeight: 300 }}>Cook</p>
        <h2 className="text-3xl mb-12" style={{ color: "#5a7a42", fontFamily: "'Zen Kaku Gothic New', sans-serif", fontWeight: 700 }}>Seasonal Recipes</h2>
        <div className="space-y-8">
          {recipes.map((recipe) => (
            <div key={recipe.name} className="border-t pt-8" style={{ borderColor: "#e0e8d8" }}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl mb-1" style={{ color: "#5a7a42", fontFamily: "'Zen Kaku Gothic New', sans-serif", fontWeight: 500 }}>{recipe.name}</h3>
                  <p className="text-xs" style={{ color: "#8aa86e", fontWeight: 300 }}>{recipe.season} &middot; {recipe.time}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#6b8a52", fontWeight: 300 }}>{recipe.description}</p>
              <p className="text-xs" style={{ color: "#9ab882" }}>{recipe.ingredients}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cooking Essentials Shop */}
      <section id="shop" className="max-w-4xl mx-auto px-8 py-16">
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#8aa86e", fontWeight: 300 }}>Essentials</p>
        <h2 className="text-3xl mb-12" style={{ color: "#5a7a42", fontFamily: "'Zen Kaku Gothic New', sans-serif", fontWeight: 700 }}>Cooking Tools</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {essentials.map((item) => (
            <div key={item.name} className="p-6 rounded-xl" style={{ backgroundColor: "#f4f7f0" }}>
              <div className="w-full h-32 rounded-lg mb-4" style={{ backgroundColor: "#e0e8d8" }} />
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base" style={{ color: "#5a7a42", fontFamily: "'Zen Kaku Gothic New', sans-serif", fontWeight: 500 }}>{item.name}</h3>
                <span className="text-sm" style={{ color: "#5a7a42", fontWeight: 700 }}>{item.price}</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#7a9a62", fontWeight: 300 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Pantry */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#8aa86e", fontWeight: 300 }}>Stock</p>
        <h2 className="text-3xl mb-12" style={{ color: "#5a7a42", fontFamily: "'Zen Kaku Gothic New', sans-serif", fontWeight: 700 }}>The Kanso Pantry</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Kombu", origin: "Hokkaido", note: "The foundation of all dashi" },
            { name: "White Miso", origin: "Kyoto", note: "Sweet, mild, and endlessly versatile" },
            { name: "Rice Vinegar", origin: "Kyoto", note: "Gentle acidity for dressings and sushi" },
            { name: "Toasted Sesame Oil", origin: "Kagoshima", note: "A few drops transform any dish" },
            { name: "Katsuobushi", origin: "Makurazaki", note: "Smoked bonito for rich umami" },
            { name: "Mirin", origin: "Aichi", note: "Sweet rice wine for glazes and balance" },
            { name: "Soy Sauce", origin: "Chiba", note: "Naturally brewed, aged two years" },
            { name: "Shichimi", origin: "Kyoto", note: "Seven-spice blend with sansho pepper" },
          ].map((item) => (
            <div key={item.name} className="text-center p-4 rounded-lg" style={{ backgroundColor: "#f4f7f0" }}>
              <h4 className="text-sm mb-1" style={{ color: "#5a7a42", fontWeight: 500 }}>{item.name}</h4>
              <p className="text-xs mb-1" style={{ color: "#8aa86e", fontWeight: 300 }}>{item.origin}</p>
              <p className="text-xs" style={{ color: "#9ab882", fontWeight: 300 }}>{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About the Chef */}
      <section id="about" className="max-w-3xl mx-auto px-8 py-16 text-center">
        <div className="w-20 h-20 rounded-full mx-auto mb-6" style={{ backgroundColor: "#e0e8d8" }} />
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#8aa86e", fontWeight: 300 }}>About</p>
        <h2 className="text-2xl mb-6" style={{ color: "#5a7a42", fontFamily: "'Zen Kaku Gothic New', sans-serif", fontWeight: 700 }}>Yuki Mori</h2>
        <p className="text-sm leading-loose mb-6" style={{ color: "#6b8a52", fontWeight: 300 }}>
          Yuki trained in Kyoto under a kaiseki chef for six years before returning to her home kitchen in Portland. She started Kanso Kitchen as a weekly email to friends, sharing one recipe each Sunday. That email became a blog, then a cookbook, and now a small shop of tools she actually uses every day. She still cooks on a single burner most mornings.
        </p>
        <p className="text-sm leading-loose" style={{ color: "#6b8a52", fontWeight: 300 }}>
          Her cookbook, &ldquo;Five or Fewer,&rdquo; was published in 2023 and has been translated into nine languages. She teaches seasonal cooking workshops at her Portland studio each quarter and believes the best meals are the ones you make without thinking too hard.
        </p>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-8 py-16">
        <div className="rounded-xl p-10 text-center" style={{ backgroundColor: "#f4f7f0" }}>
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "#8aa86e", fontWeight: 300 }}>Subscribe</p>
          <h2 className="text-2xl mb-4" style={{ color: "#5a7a42", fontFamily: "'Zen Kaku Gothic New', sans-serif", fontWeight: 700 }}>One recipe, every Sunday</h2>
          <p className="text-sm mb-8" style={{ color: "#7a9a62", fontWeight: 300 }}>Seasonal, simple, and never more than five ingredients. No spam, no ads, just food.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" placeholder="your@email.com" className="px-5 py-3 rounded-lg text-sm border-0 outline-none w-64" style={{ backgroundColor: "#ffffff", color: "#5a7a42" }} />
            <button className="px-6 py-3 rounded-lg text-sm text-white" style={{ backgroundColor: "#5a7a42", fontWeight: 500 }}>Subscribe</button>
          </div>
        </div>
      </section>

      {/* Zen Footer */}
      <footer className="max-w-4xl mx-auto px-8 py-10 border-t text-center" style={{ borderColor: "#e0e8d8" }}>
        <span className="text-sm tracking-widest" style={{ color: "#5a7a42", fontWeight: 700 }}>KANSO</span>
        <p className="text-xs mt-3" style={{ color: "#9ab882", fontWeight: 300 }}>&copy; 2025 Kanso Kitchen. Simplicity in every bite.</p>
      </footer>
    </div>
  )
}
