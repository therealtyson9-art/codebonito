export default function RestaurantMinimalistDemo() {
  const appetizers = [
    { name: "Garden Beet Tartare", desc: "Roasted golden & red beets, pistachio crumble, chive oil, micro greens", price: "$16" },
    { name: "Heirloom Tomato Salad", desc: "Burrata, aged balsamic reduction, torn basil, Calabrian chili flake", price: "$18" },
    { name: "Roasted Bone Marrow", desc: "Herb gremolata, grilled sourdough, fleur de sel", price: "$19" },
  ]

  const mains = [
    { name: "Pan-Seared Halibut", desc: "Spring pea purée, fingerling potatoes, brown butter, capers, lemon", price: "$38" },
    { name: "Braised Short Rib", desc: "Celery root mash, roasted carrots, red wine jus, horseradish cream", price: "$36" },
    { name: "Wild Mushroom Risotto", desc: "Arborio rice, porcini, chanterelle, truffle oil, aged Parmigiano", price: "$28" },
    { name: "Herb-Crusted Rack of Lamb", desc: "Fava bean ragout, mint salsa verde, roasted garlic, potato gratin", price: "$42" },
  ]

  const desserts = [
    { name: "Lavender Crème Brûlée", desc: "Tahitian vanilla bean custard, caramelized sugar, shortbread", price: "$14" },
    { name: "Seasonal Fruit Galette", desc: "Flaky butter crust, stone fruit compote, crème fraîche, honey", price: "$13" },
    { name: "Dark Chocolate Torte", desc: "Valrhona 72%, raspberry coulis, candied hazelnuts, gold leaf", price: "$15" },
  ]

  const farmPartners = [
    { name: "Willow Creek Farm", focus: "Heritage vegetables & leafy greens", location: "Sonoma Valley, 12 miles" },
    { name: "Stone Hollow Ranch", focus: "Pasture-raised poultry & eggs", location: "Petaluma, 18 miles" },
    { name: "Tidewater Fishery", focus: "Sustainable day-boat catch", location: "Bodega Bay, 24 miles" },
    { name: "Meadowlark Dairy", focus: "Artisan cheeses & cultured butter", location: "Point Reyes, 30 miles" },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf5ef", fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* Simple Text Nav */}
      <nav className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between">
        <span className="text-2xl tracking-wide" style={{ fontFamily: "DM Serif Display, serif", color: "#3f6212" }}>Sage & Thyme</span>
        <div className="hidden md:flex space-x-8">
          {["Menu", "Our Story", "Farm Partners", "Reservations"].map((link) => (
            <span key={link} className="text-sm font-light cursor-pointer hover:underline underline-offset-4" style={{ color: "#3f6212" }}>{link}</span>
          ))}
        </div>
      </nav>

      {/* Single Dish Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="w-64 h-64 mx-auto rounded-full flex items-center justify-center mb-10" style={{ backgroundColor: "#e8e0d4" }}>
          <span className="text-6xl">&#127857;</span>
        </div>
        <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: "DM Serif Display, serif", color: "#3f6212" }}>
          Where the garden meets the plate
        </h1>
        <p className="text-lg font-light max-w-xl mx-auto leading-relaxed" style={{ color: "#5c5343" }}>
          A farm-to-table bistro celebrating the quiet beauty of seasonal ingredients, sourced from partners within thirty miles of our kitchen.
        </p>
      </section>

      {/* About the Chef */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="border-t border-b py-12" style={{ borderColor: "#d4c9b8" }}>
          <h2 className="text-3xl mb-6" style={{ fontFamily: "DM Serif Display, serif", color: "#3f6212" }}>About the Chef</h2>
          <p className="font-light leading-relaxed mb-4" style={{ color: "#5c5343" }}>
            Chef Elena Marchetti spent a decade foraging through the hillsides of Tuscany before settling in Northern California.
            Her cooking is rooted in simplicity: impeccable ingredients, honest technique, and a deep respect for the land.
          </p>
          <p className="font-light leading-relaxed" style={{ color: "#5c5343" }}>
            Every morning begins at the Healdsburg farmers market, where Elena hand-selects the produce that will shape the evening menu.
            No two weeks are ever the same. That is the point.
          </p>
        </div>
      </section>

      {/* Seasonal Menu */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl mb-2 text-center" style={{ fontFamily: "DM Serif Display, serif", color: "#3f6212" }}>Seasonal Menu</h2>
        <p className="text-center text-sm font-light mb-12" style={{ color: "#8a7e6b" }}>Spring 2025 &mdash; updated weekly</p>

        <h3 className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: "#3f6212" }}>Appetizers</h3>
        {appetizers.map((item) => (
          <div key={item.name} className="flex justify-between items-start mb-6 pb-4 border-b" style={{ borderColor: "#e8e0d4" }}>
            <div>
              <p className="font-medium text-sm" style={{ color: "#3f6212" }}>{item.name}</p>
              <p className="text-sm font-light mt-1" style={{ color: "#8a7e6b" }}>{item.desc}</p>
            </div>
            <span className="text-sm font-light ml-6 whitespace-nowrap" style={{ color: "#3f6212" }}>{item.price}</span>
          </div>
        ))}

        <h3 className="text-xs font-medium tracking-widest uppercase mb-6 mt-12" style={{ color: "#3f6212" }}>Mains</h3>
        {mains.map((item) => (
          <div key={item.name} className="flex justify-between items-start mb-6 pb-4 border-b" style={{ borderColor: "#e8e0d4" }}>
            <div>
              <p className="font-medium text-sm" style={{ color: "#3f6212" }}>{item.name}</p>
              <p className="text-sm font-light mt-1" style={{ color: "#8a7e6b" }}>{item.desc}</p>
            </div>
            <span className="text-sm font-light ml-6 whitespace-nowrap" style={{ color: "#3f6212" }}>{item.price}</span>
          </div>
        ))}

        <h3 className="text-xs font-medium tracking-widest uppercase mb-6 mt-12" style={{ color: "#3f6212" }}>Desserts</h3>
        {desserts.map((item) => (
          <div key={item.name} className="flex justify-between items-start mb-6 pb-4 border-b" style={{ borderColor: "#e8e0d4" }}>
            <div>
              <p className="font-medium text-sm" style={{ color: "#3f6212" }}>{item.name}</p>
              <p className="text-sm font-light mt-1" style={{ color: "#8a7e6b" }}>{item.desc}</p>
            </div>
            <span className="text-sm font-light ml-6 whitespace-nowrap" style={{ color: "#3f6212" }}>{item.price}</span>
          </div>
        ))}
      </section>

      {/* Farm Partners */}
      <section className="py-16" style={{ backgroundColor: "#f0e9de" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl mb-10 text-center" style={{ fontFamily: "DM Serif Display, serif", color: "#3f6212" }}>Our Farm Partners</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {farmPartners.map((partner) => (
              <div key={partner.name} className="p-6 rounded-lg" style={{ backgroundColor: "#faf5ef" }}>
                <h3 className="font-medium mb-1" style={{ color: "#3f6212" }}>{partner.name}</h3>
                <p className="text-sm font-light mb-2" style={{ color: "#5c5343" }}>{partner.focus}</p>
                <p className="text-xs font-light" style={{ color: "#8a7e6b" }}>{partner.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl mb-8" style={{ fontFamily: "DM Serif Display, serif", color: "#3f6212" }}>Hours & Location</h2>
        <p className="font-light mb-1" style={{ color: "#5c5343" }}>Wednesday through Sunday</p>
        <p className="font-light mb-1" style={{ color: "#5c5343" }}>Dinner: 5:30 PM &ndash; 10:00 PM</p>
        <p className="font-light mb-6" style={{ color: "#5c5343" }}>Weekend Brunch: 10:00 AM &ndash; 2:00 PM</p>
        <p className="text-sm font-light" style={{ color: "#8a7e6b" }}>142 Vine Street, Healdsburg, CA 95448</p>
        <p className="text-sm font-light" style={{ color: "#8a7e6b" }}>(707) 555-0182</p>
      </section>

      {/* Reservations */}
      <section className="py-16" style={{ backgroundColor: "#f0e9de" }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl mb-4" style={{ fontFamily: "DM Serif Display, serif", color: "#3f6212" }}>Reservations</h2>
          <p className="font-light mb-8" style={{ color: "#5c5343" }}>
            We seat a limited number of guests each evening to ensure every plate receives the attention it deserves.
            Reservations are recommended, especially on weekends.
          </p>
          <button className="px-10 py-3 text-sm font-medium text-white rounded-full transition-opacity hover:opacity-90" style={{ backgroundColor: "#3f6212" }}>
            Book a Table
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-10 text-center">
        <p className="text-sm font-light" style={{ color: "#8a7e6b" }}>Sage & Thyme &middot; 142 Vine Street, Healdsburg, CA 95448</p>
        <p className="text-xs font-light mt-2" style={{ color: "#b0a694" }}>Wed&ndash;Sun, Dinner 5:30&ndash;10 PM &middot; Weekend Brunch 10 AM&ndash;2 PM</p>
        <p className="text-xs font-light mt-4" style={{ color: "#b0a694" }}>&copy; 2025 Sage & Thyme. All rights reserved.</p>
      </footer>
    </div>
  )
}
