export default function RestaurantBrutalistDemo() {
  const menuItems = [
    { id: "001", name: "BONE MARROW", desc: "Roasted split bones, parsley salad, grilled sourdough, coarse salt", price: "$19" },
    { id: "002", name: "BEEF TARTARE", desc: "Hand-chopped sirloin, egg yolk, capers, Dijon, toast points", price: "$22" },
    { id: "003", name: "GRILLED OCTOPUS", desc: "Charred tentacle, chickpea purée, smoked paprika oil, lemon", price: "$24" },
    { id: "004", name: "FRENCH ONION SOUP", desc: "48-hour broth, caramelized onions, Gruyère, crusty bread", price: "$16" },
    { id: "005", name: "DRY-AGED RIBEYE 16OZ", desc: "Cast-iron seared, bone-in, garlic butter, hand-cut frites", price: "$58" },
    { id: "006", name: "WHOLE ROASTED BRANZINO", desc: "Mediterranean sea bass, charred lemon, olive oil, capers", price: "$42" },
    { id: "007", name: "LAMB SHANK", desc: "Slow-braised 8 hours, root vegetable mash, rosemary jus", price: "$44" },
    { id: "008", name: "PORK CHOP", desc: "Double-cut Berkshire, apple mostarda, braised cabbage, jus", price: "$38" },
    { id: "009", name: "MUSHROOM BOURGUIGNON", desc: "Mixed wild mushrooms, pearl onions, red wine, mashed potato", price: "$28" },
    { id: "010", name: "CHOCOLATE NEMESIS", desc: "Dense flourless cake, crème fraîche, espresso", price: "$14" },
    { id: "011", name: "BURNT BASQUE CHEESECAKE", desc: "Torched top, vanilla cream, macerated strawberries", price: "$15" },
    { id: "012", name: "AFFOGATO", desc: "Double espresso, house vanilla gelato, amaretti crumble", price: "$12" },
  ]

  const reviews = [
    { who: "TIMEOUT NYC", quote: "THE MOST HONEST FOOD IN BROOKLYN. NO GIMMICKS. NO FOAM. JUST FIRE AND IRON." },
    { who: "EATER", quote: "RAW, UNCOMPROMISING, DELICIOUS. THE ANTIDOTE TO EVERYTHING OVERDESIGNED." },
    { who: "BON APPÉTIT", quote: "IF BRUTALISM WERE A RESTAURANT, THIS WOULD BE THE BLUEPRINT." },
  ]

  const hours = [
    { day: "MON", time: "CLOSED" },
    { day: "TUE-THU", time: "17:00–23:00" },
    { day: "FRI-SAT", time: "17:00–00:00" },
    { day: "SUN", time: "16:00–22:00" },
  ]

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "Space Mono, monospace" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>

      {/* Navigation */}
      <nav className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tight uppercase">SLAB</span>
          <div className="hidden md:flex items-center space-x-8">
            {["MENU", "ABOUT", "PRESS", "CONTACT"].map((link) => (
              <span key={link} className="text-xs font-bold uppercase cursor-pointer hover:bg-black hover:text-white px-2 py-1 transition-colors">
                {link}
              </span>
            ))}
          </div>
          <span className="text-xs font-bold uppercase border-2 border-black px-4 py-2 cursor-pointer hover:bg-black hover:text-white transition-colors">
            BOOK NOW
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-xs font-bold mb-4">BROOKLYN, NY — EST. 2019</p>
              <h1 className="text-6xl md:text-8xl font-bold uppercase leading-none tracking-tighter">
                FIRE.<br />IRON.<br />FOOD.
              </h1>
            </div>
            <div>
              <div className="h-72 bg-black" />
              <p className="text-xs mt-4 leading-relaxed">
                NO RESERVATIONS SYSTEM. NO INSTAGRAM WALL. NO TRUFFLE OIL.
                JUST PROPERLY SOURCED MEAT AND VEGETABLES, COOKED OVER
                OPEN FLAME. SHOW UP. SIT DOWN. EAT.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="border-b-2 border-black pb-4 mb-8 flex justify-between items-baseline">
            <h2 className="text-3xl font-bold uppercase">MENU</h2>
            <span className="text-xs">PRICES IN USD / UPDATED WEEKLY</span>
          </div>
          <div className="font-mono">
            <div className="grid grid-cols-[auto_1fr_auto] gap-x-6 text-xs border-b-2 border-black pb-2 mb-4">
              <span className="font-bold">NO.</span>
              <span className="font-bold">ITEM</span>
              <span className="font-bold text-right">PRICE</span>
            </div>
            {menuItems.map((item) => (
              <div key={item.id} className="grid grid-cols-[auto_1fr_auto] gap-x-6 py-3 border-b border-black/20 hover:bg-black hover:text-white transition-colors px-1">
                <span className="text-xs font-bold w-8">{item.id}</span>
                <div>
                  <span className="text-sm font-bold">{item.name}</span>
                  <p className="text-xs mt-0.5 opacity-60">{item.desc}</p>
                </div>
                <span className="text-sm font-bold text-right">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="text-xs mt-6 opacity-50">
            * ALL PROTEINS SOURCED FROM LOCAL FARMS WITHIN 100MI. MENU SUBJECT TO CHANGE BASED ON AVAILABILITY. NO SUBSTITUTIONS.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="border-b-4 border-black bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold uppercase mb-8 border-b-2 border-white pb-4">ABOUT</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-sm leading-relaxed mb-4">
                SLAB WAS BUILT IN A FORMER AUTO BODY SHOP IN RED HOOK. WE KEPT THE CONCRETE FLOORS,
                THE STEEL BEAMS, AND THE INDUSTRIAL EXHAUST. WE ADDED A WOOD-FIRED GRILL, A CAST-IRON
                KITCHEN, AND 47 SEATS.
              </p>
              <p className="text-sm leading-relaxed">
                CHEF MARCUS COLE SPENT 6 YEARS COOKING IN BUENOS AIRES ASADOS AND BASQUE COUNTRY GRILLS
                BEFORE OPENING SLAB. THE PHILOSOPHY IS SIMPLE: START WITH THE BEST INGREDIENT, APPLY HEAT,
                DON&apos;T OVERTHINK IT.
              </p>
            </div>
            <div className="h-64 bg-white/10 border-2 border-white/20" />
          </div>
        </div>
      </section>

      {/* Press / Reviews */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold uppercase mb-8 border-b-2 border-black pb-4">PRESS</h2>
          <div className="space-y-8">
            {reviews.map((r) => (
              <div key={r.who} className="border-2 border-black p-6">
                <p className="text-lg font-bold leading-snug mb-4">&quot;{r.quote}&quot;</p>
                <p className="text-xs font-bold">— {r.who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Hours */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold uppercase mb-8 border-b-2 border-black pb-4">HOURS</h2>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm border-b border-black/20 pb-2">
                    <span className="font-bold">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold uppercase mb-8 border-b-2 border-black pb-4">FIND US</h2>
              <div className="space-y-3 text-sm">
                <p className="font-bold">185 VAN BRUNT ST</p>
                <p className="font-bold">RED HOOK, BROOKLYN NY 11231</p>
                <p className="mt-4">(718) 555-0199</p>
                <p>EAT@SLABNYC.COM</p>
              </div>
              <div className="mt-8">
                <span className="text-xs font-bold uppercase border-2 border-black px-6 py-3 inline-block cursor-pointer hover:bg-black hover:text-white transition-colors">
                  GET DIRECTIONS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="bg-black text-white border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">WALK-INS PREFERRED.</h2>
          <p className="text-sm mb-8 opacity-70">
            BUT IF YOU MUST PLAN AHEAD, LARGE PARTIES (6+) CAN RESERVE BY PHONE ONLY.
          </p>
          <div className="inline-block border-2 border-white px-8 py-3 text-sm font-bold cursor-pointer hover:bg-white hover:text-black transition-colors">
            CALL (718) 555-0199
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs font-bold">&copy; 2026 SLAB. ALL RIGHTS RESERVED.</span>
          <div className="flex space-x-6">
            {["INSTAGRAM", "TWITTER"].map((s) => (
              <span key={s} className="text-xs font-bold cursor-pointer hover:underline">{s}</span>
            ))}
          </div>
          <span className="text-xs opacity-50">NO WIFI. NO EXCEPTIONS.</span>
        </div>
      </footer>
    </div>
  )
}
