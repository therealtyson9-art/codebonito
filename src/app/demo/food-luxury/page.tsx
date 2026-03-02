export default function FoodLuxuryDemo() {
  const collections = [
    { name: "Les Classiques", pieces: 12, price: "from $48", description: "Our foundation collection. Paris-Brest with praline mousseline, tarte au citron with Italian meringue, and the Saint-Honor\u00e9 that earned our first Michelin mention." },
    { name: "Jardin Sauvage", pieces: 8, price: "from $62", description: "Floral-infused creations using lavender from Provence, Damask rose, and elderflower. Each piece is a meditation on the garden translated into pastry." },
    { name: "Noir Collection", pieces: 6, price: "from $55", description: "Single-origin chocolate from Ecuador, Madagascar, and Vietnam. Ganaches layered with smoked salt, yuzu, and tonka bean. For the serious palate." },
    { name: "Les Saisons", pieces: 10, price: "from $72", description: "A quarterly collection that changes with the harvest. Spring brings rhubarb and verbena. Autumn delivers quince and chestnut. Always ephemeral, always memorable." },
  ]

  const seasonalSpecials = [
    { name: "Galette des Rois", available: "January", description: "Traditional puff pastry with almond frangipane, golden crown included. A centuries-old celebration of Epiphany." },
    { name: "Fraisier Printanier", available: "April - June", description: "Genoise sponge layered with mousseline cream and Gariguette strawberries from the Loire Valley." },
    { name: "B\u00fbche de No\u00ebl", available: "December", description: "Our holiday centerpiece. Chestnut mousse, candied cranberry, and a mirror glaze that captures winter light." },
  ]

  const privateEvents = [
    { event: "Wedding Towers", description: "Bespoke croquembouche and tiered entremet designs. Consultations begin six months in advance with our head p\u00e2tissier." },
    { event: "Corporate Gifting", description: "Custom boxes of 12, 24, or 48 pieces with branded packaging. Minimum order four weeks prior." },
    { event: "Private Masterclass", description: "An intimate three-hour session in our atelier for up to eight guests. Learn lamination, tempering, and plating from our team." },
  ]

  return (
    <div style={{ backgroundColor: "#4a0e1c", fontFamily: "'Cormorant Upright', serif" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400;500;600;700&display=swap&family=Inter:wght@300;400&display=swap" rel="stylesheet" />

      {/* Refined Nav */}
      <nav className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
        <span className="text-2xl tracking-wider" style={{ color: "#d4a053", fontFamily: "'Cormorant Upright', serif", fontWeight: 600 }}>Maison Laurent</span>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          <a href="#collections" className="hover:opacity-70 transition-opacity">Collections</a>
          <a href="#seasonal" className="hover:opacity-70 transition-opacity">Seasonal</a>
          <a href="#maison" className="hover:opacity-70 transition-opacity">La Maison</a>
          <a href="#events" className="hover:opacity-70 transition-opacity">Private Events</a>
          <a href="#bespoke" className="hover:opacity-70 transition-opacity">Order Bespoke</a>
        </div>
        <button className="px-5 py-2 text-sm border" style={{ borderColor: "#d4a053", color: "#d4a053", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>R&eacute;server</button>
      </nav>

      {/* Plated Cuisine Hero */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <div className="text-center">
          <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: "#8a6a3a", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>P&acirc;tisserie &middot; Chocolaterie &middot; Confiserie</p>
          <h1 className="text-5xl md:text-7xl leading-tight mb-8" style={{ color: "#d4a053", fontFamily: "'Cormorant Upright', serif", fontWeight: 700 }}>
            The art of<br />French pastry
          </h1>
          <p className="text-lg max-w-lg mx-auto leading-relaxed" style={{ color: "#c09050", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Since 1987, Maison Laurent has crafted p&acirc;tisseries that honor tradition while embracing the unexpected. Every creation begins with the finest ingredients and ends with wonder.
          </p>
        </div>
        <div className="mt-16 rounded-lg overflow-hidden" style={{ backgroundColor: "#3a0a16", height: "300px" }}>
          <div className="h-full flex items-center justify-center">
            <p className="text-sm tracking-widest" style={{ color: "#8a6a3a", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>Plated Masterpiece</p>
          </div>
        </div>
      </section>

      {/* The Art of Patisserie */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <div className="border-t border-b py-16 text-center" style={{ borderColor: "#6b2030" }}>
          <p className="text-sm tracking-[0.3em] uppercase mb-6" style={{ color: "#8a6a3a", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>Philosophy</p>
          <h2 className="text-3xl md:text-4xl mb-8" style={{ color: "#d4a053", fontFamily: "'Cormorant Upright', serif", fontWeight: 600 }}>
            Precision is poetry
          </h2>
          <p className="text-base leading-loose" style={{ color: "#c09050", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            A croissant requires 27 folds, three days of rest, and the patience to let butter and dough become one. A ganache demands tempering within two degrees. A sugar cage must be spun in under ninety seconds before it crystallizes. These are not recipes. They are disciplines. At Maison Laurent, every p&acirc;tissier apprentices for three years before they place a single creation in our vitrine. We do not rush excellence.
          </p>
        </div>
      </section>

      {/* Signature Collections */}
      <section id="collections" className="max-w-5xl mx-auto px-8 py-16">
        <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "#8a6a3a", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>Discover</p>
        <h2 className="text-3xl mb-12" style={{ color: "#d4a053", fontFamily: "'Cormorant Upright', serif", fontWeight: 600 }}>Signature Collections</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((col) => (
            <div key={col.name} className="p-8 rounded-lg" style={{ backgroundColor: "#3a0a16" }}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl" style={{ color: "#d4a053", fontFamily: "'Cormorant Upright', serif", fontWeight: 600 }}>{col.name}</h3>
                <span className="text-sm" style={{ color: "#8a6a3a", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{col.price}</span>
              </div>
              <p className="text-sm mb-3" style={{ color: "#8a6a3a", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{col.pieces} pi&egrave;ces</p>
              <p className="text-sm leading-relaxed" style={{ color: "#c09050", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{col.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Specials */}
      <section id="seasonal" className="max-w-4xl mx-auto px-8 py-16">
        <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "#8a6a3a", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>Limited</p>
        <h2 className="text-3xl mb-12" style={{ color: "#d4a053", fontFamily: "'Cormorant Upright', serif", fontWeight: 600 }}>Seasonal Specials</h2>
        <div className="space-y-8">
          {seasonalSpecials.map((item) => (
            <div key={item.name} className="border-t pt-8" style={{ borderColor: "#6b2030" }}>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
                <h3 className="text-xl" style={{ color: "#d4a053", fontFamily: "'Cormorant Upright', serif", fontWeight: 500 }}>{item.name}</h3>
                <span className="text-xs tracking-widest" style={{ color: "#8a6a3a", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{item.available}</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#c09050", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Maison */}
      <section id="maison" className="max-w-4xl mx-auto px-8 py-16 text-center">
        <div className="w-24 h-24 rounded-full mx-auto mb-8" style={{ border: "1px solid #6b2030" }}>
          <div className="w-full h-full rounded-full flex items-center justify-center">
            <span className="text-xs" style={{ color: "#8a6a3a", fontFamily: "'Inter', sans-serif" }}>ML</span>
          </div>
        </div>
        <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "#8a6a3a", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>Heritage</p>
        <h2 className="text-3xl mb-8" style={{ color: "#d4a053", fontFamily: "'Cormorant Upright', serif", fontWeight: 600 }}>La Maison</h2>
        <p className="text-base leading-loose" style={{ color: "#c09050", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          Founded by Chef Isabelle Laurent in 1987, Maison Laurent began as a small atelier on Rue du Faubourg Saint-Honor&eacute; in Paris. Isabelle trained under Gaston Len&ocirc;tre and spent a decade perfecting the balance between classical technique and personal expression. Today, the maison operates from a restored townhouse in the West Village, where a team of twelve p&acirc;tissiers continues the tradition of handcrafted excellence. Every creation is assembled, glazed, and finished by hand. We produce no more than 200 pieces per day.
        </p>
      </section>

      {/* Private Events */}
      <section id="events" className="max-w-4xl mx-auto px-8 py-16">
        <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "#8a6a3a", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>Services</p>
        <h2 className="text-3xl mb-12" style={{ color: "#d4a053", fontFamily: "'Cormorant Upright', serif", fontWeight: 600 }}>Private Events</h2>
        <div className="space-y-6">
          {privateEvents.map((ev) => (
            <div key={ev.event} className="p-8 rounded-lg" style={{ backgroundColor: "#3a0a16" }}>
              <h3 className="text-xl mb-3" style={{ color: "#d4a053", fontFamily: "'Cormorant Upright', serif", fontWeight: 500 }}>{ev.event}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#c09050", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>{ev.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Order Bespoke */}
      <section id="bespoke" className="max-w-3xl mx-auto px-8 py-16 text-center">
        <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "#8a6a3a", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>Commission</p>
        <h2 className="text-3xl mb-6" style={{ color: "#d4a053", fontFamily: "'Cormorant Upright', serif", fontWeight: 600 }}>Order Bespoke</h2>
        <p className="text-base mb-10 leading-relaxed" style={{ color: "#c09050", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          For celebrations that demand the extraordinary. Share your vision and our head p&acirc;tissier will design a creation entirely for you. Consultations by appointment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input type="email" placeholder="your@email.com" className="px-6 py-3 text-sm border outline-none w-64 bg-transparent" style={{ borderColor: "#6b2030", color: "#d4a053", fontFamily: "'Inter', sans-serif" }} />
          <button className="px-8 py-3 text-sm" style={{ backgroundColor: "#d4a053", color: "#4a0e1c", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Request Consultation</button>
        </div>
      </section>

      {/* Refined Footer */}
      <footer className="max-w-5xl mx-auto px-8 py-10 border-t" style={{ borderColor: "#6b2030" }}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-lg tracking-wider" style={{ color: "#d4a053", fontFamily: "'Cormorant Upright', serif", fontWeight: 600 }}>Maison Laurent</span>
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs" style={{ color: "#8a6a3a", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            <span>82 Perry Street, West Village, New York</span>
            <span>Tue&ndash;Sat: 10am&ndash;7pm &middot; Sun: 10am&ndash;4pm</span>
            <span>Mon: Ferm&eacute;</span>
          </div>
          <p className="text-xs" style={{ color: "#6b2030", fontFamily: "'Inter', sans-serif" }}>&copy; 2025 Maison Laurent P&acirc;tisserie</p>
        </div>
      </footer>
    </div>
  )
}
