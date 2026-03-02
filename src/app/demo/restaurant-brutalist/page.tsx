export default function RestaurantBrutalistDemo() {
  const meats = [
    { name: "BRISKET", desc: "14-hour oak-smoked Texas-style, bark so thick it crunches, served by the half pound", price: "$18/half lb" },
    { name: "PULLED PORK", desc: "Hickory-smoked shoulder, hand-pulled, vinegar mop sauce on the side", price: "$14/half lb" },
    { name: "BEEF RIBS", desc: "Dino-sized short ribs, salt & pepper rub, 12 hours over pecan wood", price: "$24/bone" },
    { name: "SMOKED TURKEY", desc: "Whole heritage bird brined in sweet tea, smoked over cherry wood", price: "$15/half lb" },
    { name: "HOT LINKS", desc: "House-ground pork & beef sausage, cayenne kick, natural casing snap", price: "$12/link" },
  ]

  const sides = [
    { name: "LOADED COLESLAW", price: "$6" },
    { name: "SMOKED MAC & CHEESE", price: "$8" },
    { name: "JALAPE\u00d1O CORNBREAD", price: "$5" },
    { name: "PICKLED ONIONS & CUKES", price: "$4" },
    { name: "PIT BEANS", price: "$6" },
    { name: "POTATO SALAD", price: "$6" },
  ]

  const sauces = [
    { name: "ORIGINAL", heat: "\u2605", desc: "Tomato, brown sugar, black pepper" },
    { name: "CAROLINA GOLD", heat: "\u2605", desc: "Mustard base, tangy, vinegar finish" },
    { name: "TEXAS HEAT", heat: "\u2605\u2605\u2605", desc: "Ancho & ghost pepper, smoky fire" },
    { name: "WHITE LIGHTNING", heat: "\u2605\u2605", desc: "Alabama white sauce, mayo, horseradish" },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#d4a574", fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Inter:wght@400;500&display=swap" rel="stylesheet" />

      {/* Stamp Nav */}
      <nav className="max-w-5xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4">
        <span className="text-3xl -rotate-2" style={{ fontFamily: "Permanent Marker, cursive", color: "#991b1b" }}>SMOKE & BARREL</span>
        <div className="flex flex-wrap gap-3">
          {["THE PIT", "PROCESS", "CATERING", "EVENTS", "FIND US"].map((item) => (
            <span
              key={item}
              className="px-4 py-2 text-xs font-medium tracking-widest border-2 rotate-1 cursor-pointer hover:-rotate-1 transition-transform"
              style={{ borderColor: "#991b1b", color: "#991b1b", borderStyle: "dashed" }}
            >
              {item}
            </span>
          ))}
        </div>
      </nav>

      {/* Chalkboard Hero */}
      <section className="mx-6 my-8 p-10 md:p-16 rounded-sm text-center" style={{ backgroundColor: "#1a1a1a" }}>
        <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "#d4a574" }}>EST. 2018 &middot; LOW & SLOW</p>
        <h1 className="text-5xl md:text-7xl mb-6 -rotate-1" style={{ fontFamily: "Permanent Marker, cursive", color: "#e8d5b7" }}>
          REAL SMOKE.<br />NO SHORTCUTS.
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "#a0896e" }}>
          We get up at 3 AM so you don&apos;t have to. Oak, hickory, pecan &mdash; every cut gets the wood it deserves and the time it needs.
        </p>
        <div className="mt-8 inline-block px-8 py-3 border-2 text-sm font-medium tracking-widest cursor-pointer" style={{ borderColor: "#d4a574", color: "#d4a574" }}>
          SEE TODAY&apos;S BOARD
        </div>
      </section>

      {/* The Pit Menu - Meats */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl mb-2 text-center -rotate-1" style={{ fontFamily: "Permanent Marker, cursive", color: "#991b1b" }}>THE PIT MENU</h2>
        <p className="text-center text-sm mb-12" style={{ color: "#6b4423" }}>Sold by weight. First come, first served. When it&apos;s gone, it&apos;s gone.</p>

        <h3 className="text-xl mb-6 border-b-2 pb-2" style={{ fontFamily: "Permanent Marker, cursive", color: "#991b1b", borderColor: "#991b1b" }}>SMOKED MEATS</h3>
        {meats.map((item) => (
          <div key={item.name} className="flex justify-between items-start mb-5">
            <div>
              <p className="font-medium text-sm tracking-wide" style={{ color: "#991b1b" }}>{item.name}</p>
              <p className="text-sm mt-1" style={{ color: "#6b4423" }}>{item.desc}</p>
            </div>
            <span className="text-sm font-medium ml-6 whitespace-nowrap" style={{ color: "#991b1b" }}>{item.price}</span>
          </div>
        ))}

        {/* Sides */}
        <h3 className="text-xl mb-6 mt-14 border-b-2 pb-2" style={{ fontFamily: "Permanent Marker, cursive", color: "#991b1b", borderColor: "#991b1b" }}>SIDES</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sides.map((item) => (
            <div key={item.name} className="flex justify-between items-center p-3 border-2" style={{ borderColor: "#991b1b", borderStyle: "dashed" }}>
              <span className="text-xs font-medium tracking-wide" style={{ color: "#991b1b" }}>{item.name}</span>
              <span className="text-xs font-medium" style={{ color: "#6b4423" }}>{item.price}</span>
            </div>
          ))}
        </div>

        {/* Sauces */}
        <h3 className="text-xl mb-6 mt-14 border-b-2 pb-2" style={{ fontFamily: "Permanent Marker, cursive", color: "#991b1b", borderColor: "#991b1b" }}>HOUSE SAUCES</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {sauces.map((s) => (
            <div key={s.name} className="p-4 border-2" style={{ borderColor: "#991b1b" }}>
              <p className="font-medium text-sm" style={{ color: "#991b1b" }}>{s.name} <span className="ml-2">{s.heat}</span></p>
              <p className="text-sm mt-1" style={{ color: "#6b4423" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-6" style={{ backgroundColor: "#c49660" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl mb-8 rotate-1" style={{ fontFamily: "Permanent Marker, cursive", color: "#991b1b" }}>OUR PROCESS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "THE RUB", text: "Salt, pepper, garlic, and our secret 11-spice blend applied 12 hours before the cook." },
              { step: "02", title: "THE SMOKE", text: "All-wood fire. No gas assist. We split our own logs from sustainably harvested Texas post oak." },
              { step: "03", title: "THE REST", text: "Every brisket rests for a minimum of 2 hours in a warm holding cabinet. Patience is the final ingredient." },
            ].map((item) => (
              <div key={item.step}>
                <p className="text-5xl mb-3" style={{ fontFamily: "Permanent Marker, cursive", color: "#991b1b" }}>{item.step}</p>
                <p className="font-medium text-sm tracking-widest mb-2" style={{ color: "#991b1b" }}>{item.title}</p>
                <p className="text-sm" style={{ color: "#5c3a1e" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl mb-4 -rotate-1" style={{ fontFamily: "Permanent Marker, cursive", color: "#991b1b" }}>CATERING</h2>
        <p className="text-sm mb-6 max-w-xl mx-auto" style={{ color: "#6b4423" }}>
          Feed your crew the real deal. We cater events from 20 to 500 people. Full-service or drop-off.
          Whole hogs, brisket by the flat, and sides by the gallon. Custom menus for weddings, corporate events, and backyard blowouts.
        </p>
        <span className="inline-block px-8 py-3 text-sm font-medium tracking-widest cursor-pointer border-2" style={{ borderColor: "#991b1b", color: "#991b1b" }}>
          GET A QUOTE
        </span>
      </section>

      {/* Events */}
      <section className="px-6 py-16" style={{ backgroundColor: "#c49660" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl mb-8 rotate-1" style={{ fontFamily: "Permanent Marker, cursive", color: "#991b1b" }}>EVENTS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "THURSDAY BLUES NIGHT", desc: "Live Delta blues, $5 longnecks, smoked wings special. 7 PM till late." },
              { name: "SATURDAY PIT TOURS", desc: "Go behind the smoke. Free walkthrough of our pit room every Saturday at noon." },
              { name: "MONTHLY WHOLE HOG", desc: "First Sunday of each month. We smoke a whole heritage hog. It sells out. Come early." },
              { name: "KIDS EAT FREE SUNDAY", desc: "One free kids plate per adult entree. Because family matters around here." },
            ].map((evt) => (
              <div key={evt.name} className="p-5 border-2 text-left" style={{ borderColor: "#991b1b", borderStyle: "dashed" }}>
                <p className="font-medium text-sm tracking-wide mb-2" style={{ color: "#991b1b" }}>{evt.name}</p>
                <p className="text-sm" style={{ color: "#5c3a1e" }}>{evt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl mb-6 -rotate-2" style={{ fontFamily: "Permanent Marker, cursive", color: "#991b1b" }}>FIND US</h2>
        <p className="font-medium" style={{ color: "#991b1b" }}>820 Congress Avenue, Austin, TX 78701</p>
        <p className="text-sm mt-2" style={{ color: "#6b4423" }}>Tue&ndash;Thu: 11 AM &ndash; 9 PM</p>
        <p className="text-sm" style={{ color: "#6b4423" }}>Fri&ndash;Sat: 11 AM &ndash; 10 PM</p>
        <p className="text-sm" style={{ color: "#6b4423" }}>Sun: 11 AM &ndash; 8 PM &middot; Mon: CLOSED (we rest too)</p>
        <p className="text-sm mt-4" style={{ color: "#6b4423" }}>(512) 555-0247</p>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center border-t-2" style={{ borderColor: "#991b1b" }}>
        <p className="text-lg -rotate-1" style={{ fontFamily: "Permanent Marker, cursive", color: "#991b1b" }}>SMOKE & BARREL ~ AUSTIN, TX</p>
        <p className="text-xs mt-3" style={{ color: "#6b4423" }}>Hand-smoked. Hand-pulled. No bull. &copy; 2025</p>
      </footer>
    </div>
  )
}
