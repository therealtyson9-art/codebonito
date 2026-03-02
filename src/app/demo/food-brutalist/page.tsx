export const dynamic = "force-dynamic";
export default function FoodBrutalistDemo() {
  const menuMeats = [
    { name: "THE TOMAHAWK", weight: "32oz", cook: "Live fire, 8 min per side", price: "$68", description: "Bone-in ribeye. Dry-aged 45 days. Seasoned with salt and smoke. Nothing else." },
    { name: "LAMB SHOULDER", weight: "Full", cook: "12 hours over oak", price: "$42", description: "Pulled by hand. Served on butcher paper. You eat this with your fingers." },
    { name: "BRISKET PLANK", weight: "1lb", cook: "16 hours pecan smoke", price: "$38", description: "Central Texas style. Bark so dark it looks burnt. It is not burnt." },
  ]

  const menuFish = [
    { name: "WHOLE BRANZINO", weight: "1.5lb", cook: "Grilled over mesquite", price: "$36", description: "Scored, salted, charred. Lemon and olive oil. The Mediterranean in one plate." },
    { name: "FIRE-ROASTED OCTOPUS", weight: "Tentacle", cook: "Direct flame, 6 min", price: "$28", description: "Tenderized for 2 hours, then blasted over open coals until the edges curl." },
  ]

  const menuVegetables = [
    { name: "EMBER CARROTS", cook: "Buried in coals, 40 min", price: "$14", description: "Whole carrots cooked directly in embers. Black outside, sweet inside. Served with whipped tahini." },
    { name: "BLISTERED CABBAGE", cook: "Cast iron, max heat", price: "$12", description: "Half a cabbage, face down on screaming hot iron until deeply charred. Fish sauce vinaigrette." },
    { name: "COAL-ROASTED BEETS", cook: "Wrapped in foil, 90 min", price: "$13", description: "Slow-cooked until impossibly sweet, then sliced and dressed with horseradish cream and dill." },
  ]

  const menuDesserts = [
    { name: "SMOKED CHOCOLATE", cook: "Cold-smoked 4 hours", price: "$16", description: "Dark chocolate mousse smoked over cherry wood. Served with smoked salt flakes and cream." },
    { name: "GRILLED PEACH", cook: "Open flame, 3 min", price: "$12", description: "Halved stone fruit caramelized over fire. Brown butter, vanilla bean, crushed amaretti." },
  ]

  const events = [
    { name: "FULL MOON FIRE", frequency: "Monthly", description: "A 12-course open-fire feast under the night sky. 40 seats. One long table. No menu until you sit down." },
    { name: "PIT MASTER CLASS", frequency: "Weekends", description: "Learn to build a fire, control temperature, and cook a whole animal over 8 hours. You eat what you cook." },
    { name: "PRIVATE BURNS", frequency: "By request", description: "We bring the fire pit, the crew, and the food to your location. Minimum 20 guests. Maximum unforgettable." },
  ]

  return (
    <div style={{ backgroundColor: "#000000", fontFamily: "'Staatliches', 'Inter', sans-serif" }} className="min-h-screen text-white">
      <link href="https://fonts.googleapis.com/css2?family=Staatliches&family=Inter:wght@400;500&display=swap" rel="stylesheet" />

      {/* Raw Nav */}
      <nav className="border-b border-white/20 px-6 py-4 flex items-center justify-between">
        <span className="text-3xl tracking-wider" style={{ fontFamily: "'Staatliches', sans-serif" }}>FORGE</span>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
          <a href="#menu" className="text-white/70 hover:text-white">MENU</a>
          <a href="#fire" className="text-white/70 hover:text-white">THE FIRE</a>
          <a href="#events" className="text-white/70 hover:text-white">EVENTS</a>
          <a href="#reserve" className="text-white/70 hover:text-white">RESERVE</a>
        </div>
        <button className="border border-white px-5 py-2 text-sm" style={{ fontFamily: "'Staatliches', sans-serif" }}>BOOK A TABLE</button>
      </nav>

      {/* Bold Menu Hero */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm tracking-widest mb-6 text-white/40" style={{ fontFamily: "'Inter', sans-serif" }}>FIRE-COOKED SINCE 2018</p>
          <h1 className="text-7xl md:text-9xl leading-none mb-4" style={{ fontFamily: "'Staatliches', sans-serif" }}>TOMAHAWK</h1>
          <h1 className="text-7xl md:text-9xl leading-none mb-4 text-white/30" style={{ fontFamily: "'Staatliches', sans-serif" }}>BRISKET</h1>
          <h1 className="text-7xl md:text-9xl leading-none mb-8" style={{ fontFamily: "'Staatliches', sans-serif" }}>WHOLE FISH</h1>
          <p className="text-base max-w-lg mx-auto text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
            Everything cooked over open flame. No gas. No electricity. Just wood, fire, and time.
          </p>
        </div>
      </section>

      {/* The Fire */}
      <section id="fire" className="px-6 py-16">
        <div className="max-w-4xl mx-auto border border-white/20 p-10 md:p-16">
          <h2 className="text-5xl mb-8" style={{ fontFamily: "'Staatliches', sans-serif" }}>THE FIRE</h2>
          <p className="text-base leading-relaxed text-white/70 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            Forge has no stove. No oven. No microwave. We cook over three custom-built fire pits fueled by locally sourced oak, cherry, and mesquite. Our pit runs 24 hours a day, seven days a week. The brisket you eat tonight went on at 4 AM yesterday.
          </p>
          <p className="text-base leading-relaxed text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>
            Fire cooking is not a trend for us. It is the only way we know how to cook. Every member of our kitchen has spent at least 1,000 hours tending flame before they are allowed to put food on it. Heat is a living thing and we treat it that way.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl mb-16" style={{ fontFamily: "'Staatliches', sans-serif" }}>THE MENU</h2>

          <h3 className="text-3xl mb-6 text-white/50" style={{ fontFamily: "'Staatliches', sans-serif" }}>MEATS</h3>
          {menuMeats.map((item) => (
            <div key={item.name} className="border-b border-white/10 py-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <span className="text-2xl" style={{ fontFamily: "'Staatliches', sans-serif" }}>{item.name}</span>
                <span className="text-xl" style={{ fontFamily: "'Staatliches', sans-serif" }}>{item.price}</span>
              </div>
              <p className="text-sm text-white/60 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{item.description}</p>
              <p className="text-xs text-white/30" style={{ fontFamily: "'Inter', sans-serif" }}>{item.weight} &middot; {item.cook}</p>
            </div>
          ))}

          <h3 className="text-3xl mb-6 mt-12 text-white/50" style={{ fontFamily: "'Staatliches', sans-serif" }}>FISH</h3>
          {menuFish.map((item) => (
            <div key={item.name} className="border-b border-white/10 py-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <span className="text-2xl" style={{ fontFamily: "'Staatliches', sans-serif" }}>{item.name}</span>
                <span className="text-xl" style={{ fontFamily: "'Staatliches', sans-serif" }}>{item.price}</span>
              </div>
              <p className="text-sm text-white/60 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{item.description}</p>
              <p className="text-xs text-white/30" style={{ fontFamily: "'Inter', sans-serif" }}>{item.weight} &middot; {item.cook}</p>
            </div>
          ))}

          <h3 className="text-3xl mb-6 mt-12 text-white/50" style={{ fontFamily: "'Staatliches', sans-serif" }}>VEGETABLES</h3>
          {menuVegetables.map((item) => (
            <div key={item.name} className="border-b border-white/10 py-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <span className="text-2xl" style={{ fontFamily: "'Staatliches', sans-serif" }}>{item.name}</span>
                <span className="text-xl" style={{ fontFamily: "'Staatliches', sans-serif" }}>{item.price}</span>
              </div>
              <p className="text-sm text-white/60 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{item.description}</p>
              <p className="text-xs text-white/30" style={{ fontFamily: "'Inter', sans-serif" }}>{item.cook}</p>
            </div>
          ))}

          <h3 className="text-3xl mb-6 mt-12 text-white/50" style={{ fontFamily: "'Staatliches', sans-serif" }}>DESSERTS</h3>
          {menuDesserts.map((item) => (
            <div key={item.name} className="border-b border-white/10 py-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <span className="text-2xl" style={{ fontFamily: "'Staatliches', sans-serif" }}>{item.name}</span>
                <span className="text-xl" style={{ fontFamily: "'Staatliches', sans-serif" }}>{item.price}</span>
              </div>
              <p className="text-sm text-white/60 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{item.description}</p>
              <p className="text-xs text-white/30" style={{ fontFamily: "'Inter', sans-serif" }}>{item.cook}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Pit Master */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="w-48 h-48 rounded-full flex-shrink-0" style={{ backgroundColor: "#1a1a1a", border: "2px solid rgba(255,255,255,0.1)" }} />
          <div>
            <p className="text-sm tracking-widest mb-2 text-white/40" style={{ fontFamily: "'Inter', sans-serif" }}>THE PIT MASTER</p>
            <h3 className="text-3xl mb-4" style={{ fontFamily: "'Staatliches', sans-serif" }}>MARCUS COLE</h3>
            <p className="text-sm leading-relaxed text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
              Marcus spent a decade cooking in restaurant kitchens before he realized he hated everything about them except the fire. He left to build his own pit in an empty lot in East Austin, started serving brisket to neighbors, and never looked back. Forge is what happens when you remove everything between a cook and an open flame.
            </p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl mb-12" style={{ fontFamily: "'Staatliches', sans-serif" }}>EVENTS</h2>
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.name} className="border border-white/20 p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h3 className="text-2xl" style={{ fontFamily: "'Staatliches', sans-serif" }}>{event.name}</h3>
                  <span className="text-sm text-white/40" style={{ fontFamily: "'Inter', sans-serif" }}>{event.frequency}</span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section id="reserve" className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: "'Staatliches', sans-serif" }}>RESERVE YOUR SEAT</h2>
          <p className="text-base text-white/50 mb-8 max-w-md mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            We seat 36 guests per night. Walk-ins welcome but rarely successful. Book ahead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="YOUR EMAIL" className="px-6 py-3 text-sm bg-transparent border border-white/40 text-white w-72 outline-none" style={{ fontFamily: "'Inter', sans-serif" }} />
            <button className="px-8 py-3 text-sm bg-white text-black" style={{ fontFamily: "'Staatliches', sans-serif", fontSize: "16px" }}>RESERVE</button>
          </div>
        </div>
      </section>

      {/* Raw Footer */}
      <footer className="border-t border-white/20 px-6 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl tracking-wider" style={{ fontFamily: "'Staatliches', sans-serif" }}>FORGE</span>
          <div className="flex gap-6 text-xs text-white/40" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span>214 FIRE LANE, EAST AUSTIN TX</span>
            <span>WED-SUN 5PM-11PM</span>
          </div>
          <p className="text-xs text-white/20" style={{ fontFamily: "'Inter', sans-serif" }}>&copy; 2025 FORGE FIRE KITCHEN</p>
        </div>
      </footer>
    </div>
  )
}
