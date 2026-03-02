export default function FoodBrutalistDemo() {
  const menuItems = [
    { name: "THE BEAST BOWL", ingredients: "grass-fed beef, brown rice, black beans, raw slaw, chimichurri", cal: 780, protein: "52g", price: "$16" },
    { name: "RAW POWER SALAD", ingredients: "kale, beets, walnuts, sprouted lentils, apple cider vinaigrette", cal: 420, protein: "18g", price: "$13" },
    { name: "FARM CHICKEN PLATE", ingredients: "pasture-raised chicken thigh, roasted roots, fermented cabbage", cal: 650, protein: "44g", price: "$15" },
    { name: "OCEAN PLATE", ingredients: "wild sockeye salmon, quinoa, avocado, pickled onion, dill yogurt", cal: 590, protein: "38g", price: "$18" },
    { name: "PLANT DESTROYER", ingredients: "tempeh, sweet potato, massaged kale, tahini, hemp seeds", cal: 520, protein: "28g", price: "$14" },
    { name: "BONE BROTH + GREENS", ingredients: "24-hour simmered bone broth, collards, turmeric, black pepper", cal: 280, protein: "22g", price: "$10" },
  ]

  const nutritionData = [
    { nutrient: "Calories", range: "280 - 780 kcal", note: "Real fuel, not filler" },
    { nutrient: "Protein", range: "18g - 52g", note: "Complete amino acid profiles" },
    { nutrient: "Fiber", range: "6g - 14g", note: "Whole foods, not supplements" },
    { nutrient: "Sugar", range: "2g - 8g", note: "Zero added sugar, ever" },
    { nutrient: "Sodium", range: "380mg - 620mg", note: "Seasoned, not salted" },
    { nutrient: "Ingredients", range: "6 - 10 per dish", note: "You can pronounce them all" },
  ]

  const sourcingFacts = [
    { label: "FARMS", value: "12", detail: "Within 100 miles of our kitchen" },
    { label: "CHEMICALS", value: "0", detail: "No pesticides, no preservatives, no BS" },
    { label: "PROCESSING", value: "NONE", detail: "Whole ingredients, prepared by hand" },
    { label: "TRANSPARENCY", value: "100%", detail: "Every supplier listed on our site" },
  ]

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700;800&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="border-b-2 border-orange-500">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight text-orange-500">RAW_FUEL</span>
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-xs text-zinc-400 hover:text-orange-500 cursor-pointer">[MENU]</span>
            <span className="text-xs text-zinc-400 hover:text-orange-500 cursor-pointer">[SOURCING]</span>
            <span className="text-xs text-zinc-400 hover:text-orange-500 cursor-pointer">[NUTRITION]</span>
            <span className="text-xs text-zinc-400 hover:text-orange-500 cursor-pointer">[ORDER]</span>
          </div>
          <span className="text-xs font-bold text-black bg-orange-500 px-4 py-2 cursor-pointer hover:bg-orange-400 transition-colors">ORDER_NOW</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b-2 border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <h1 className="text-7xl md:text-9xl font-extrabold leading-none tracking-tighter">
            EAT.<br />
            <span className="text-orange-500">REAL.</span><br />
            FOOD.
          </h1>
          <p className="text-zinc-500 text-sm mt-8 max-w-md leading-relaxed">
            No seed oils. No added sugar. No artificial anything.<br />
            Just whole food, prepared by humans, from farms you can visit.
          </p>
          <div className="mt-10 flex gap-4">
            <span className="border-2 border-orange-500 text-orange-500 px-6 py-3 text-xs font-bold cursor-pointer hover:bg-orange-500 hover:text-black transition-all">SEE_THE_MENU</span>
            <span className="border-2 border-zinc-700 text-zinc-400 px-6 py-3 text-xs font-bold cursor-pointer hover:border-zinc-400 transition-colors">READ_THE_MANIFESTO</span>
          </div>
        </div>
      </section>

      {/* Ingredient Manifesto */}
      <section className="border-b-2 border-zinc-800 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-xs text-orange-500 tracking-widest mb-6">// MANIFESTO</p>
          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
            <p>The food industry is broken. Engineered flavors designed to override your satiety signals. Ingredient lists that read like chemistry experiments. Marketing that calls processed garbage &quot;natural.&quot;</p>
            <p className="text-orange-500 font-bold text-lg">We reject all of it.</p>
            <p>Every dish at RAW_FUEL contains between 6 and 10 ingredients. All of them are whole foods. All of them are sourced from farms within 100 miles of our kitchen. We list every supplier. We hide nothing.</p>
            <p>This is not a diet. This is not a trend. This is how food should have always been.</p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="border-b-2 border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-xs text-orange-500 tracking-widest mb-10">// MENU</p>
          <div className="space-y-1">
            {menuItems.map((item) => (
              <div key={item.name} className="border border-zinc-800 p-5 hover:border-orange-500 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-bold text-white">{item.name}</h3>
                  <span className="text-orange-500 font-bold text-sm">{item.price}</span>
                </div>
                <p className="text-xs text-zinc-500 mb-3">{item.ingredients}</p>
                <div className="flex gap-6 text-xs">
                  <span className="text-zinc-600">{item.cal} kcal</span>
                  <span className="text-zinc-600">{item.protein} protein</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Data */}
      <section className="border-b-2 border-zinc-800 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-xs text-orange-500 tracking-widest mb-10">// NUTRITION_DATA</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-800 text-xs text-zinc-600">
                <th className="text-left py-3 font-normal">NUTRIENT</th>
                <th className="text-left py-3 font-normal">RANGE</th>
                <th className="text-left py-3 font-normal hidden md:table-cell">NOTE</th>
              </tr>
            </thead>
            <tbody>
              {nutritionData.map((row) => (
                <tr key={row.nutrient} className="border-b border-zinc-900">
                  <td className="py-3 text-white font-bold text-xs">{row.nutrient}</td>
                  <td className="py-3 text-orange-500 text-xs">{row.range}</td>
                  <td className="py-3 text-zinc-500 text-xs hidden md:table-cell">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sourcing */}
      <section className="border-b-2 border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-xs text-orange-500 tracking-widest mb-4">// SOURCING</p>
          <h2 className="text-3xl font-bold mb-10">Farm to table, no BS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sourcingFacts.map((fact) => (
              <div key={fact.label} className="border border-zinc-800 p-5">
                <p className="text-3xl font-bold text-orange-500">{fact.value}</p>
                <p className="text-xs font-bold text-white mt-2">{fact.label}</p>
                <p className="text-xs text-zinc-600 mt-1">{fact.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="border-b-2 border-zinc-800 bg-zinc-950">
        <div className="max-w-2xl mx-auto px-6 py-20">
          <p className="text-xs text-orange-500 tracking-widest mb-4">// ORDER</p>
          <h2 className="text-2xl font-bold mb-8">Place your order</h2>
          <div className="space-y-4">
            <input type="text" placeholder="name_" className="w-full bg-black border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-orange-500 font-mono" readOnly />
            <input type="text" placeholder="email_" className="w-full bg-black border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-orange-500 font-mono" readOnly />
            <input type="text" placeholder="delivery_address_" className="w-full bg-black border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-orange-500 font-mono" readOnly />
            <textarea placeholder="order_notes_" className="w-full bg-black border border-zinc-800 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none focus:border-orange-500 font-mono h-24 resize-none" readOnly />
            <span className="inline-block w-full text-center bg-orange-500 text-black font-bold py-3 text-sm cursor-pointer hover:bg-orange-400 transition-colors">SUBMIT_ORDER</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-sm font-bold text-orange-500">RAW_FUEL</span>
          <p className="text-xs text-zinc-600">No marketing fluff. Just food that&apos;s actually food.</p>
          <p className="text-xs text-zinc-700">&copy; 2026 RAW_FUEL. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
