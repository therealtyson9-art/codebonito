export const dynamic = "force-dynamic";
export default function RestaurantLuxuryDemo() {
  const courses = [
    { number: "I", name: "Amuse-Bouche", desc: "Oyster leaf, yuzu pearl, champagne foam, edible gold", wine: "NV Krug Grande Cuv\u00e9e" },
    { number: "II", name: "Hokkaido Uni", desc: "Sea urchin on a bed of cauliflower silk, brown butter, finger lime caviar", wine: "2020 Chablis Grand Cru, Raveneau" },
    { number: "III", name: "Foie Gras Torchon", desc: "Sauternes gel\u00e9e, brioche crumble, Agen prune, smoked duck jus", wine: "2019 Tokaji Asz\u00fa 5 Puttonyos" },
    { number: "IV", name: "Lobster Thermidor", desc: "Blue lobster tail, cognac cream, gruy\u00e8re gratin, tarragon oil, micro celery", wine: "2021 Puligny-Montrachet, Leflaive" },
    { number: "V", name: "Wagyu A5 Tenderloin", desc: "Miyazaki Prefecture, pomme pur\u00e9e, p\u00e9rigord truffle, bone marrow bordelaise", wine: "2018 Pauillac, Ch\u00e2teau Latour" },
    { number: "VI", name: "Cheese Selection", desc: "Affineur\u2019s choice &mdash; three artisan selections, honeycomb, walnut bread, quince paste", wine: "2017 Barolo, Giacomo Conterno" },
    { number: "VII", name: "Grand Dessert", desc: "Valrhona Manjari souffl\u00e9, tahitian vanilla cr\u00e8me anglaise, 24K gold leaf", wine: "2015 Riesling Trockenbeerenauslese, Egon M\u00fcller" },
  ]

  const privateDining = [
    { name: "The Vault", guests: "2\u20136", desc: "An intimate stone-walled chamber with a private sommelier and bespoke tasting menu." },
    { name: "Salon Dor\u00e9", guests: "8\u201314", desc: "A gilded private room with hand-painted ceiling murals and a dedicated kitchen team." },
    { name: "The Terrace", guests: "16\u201324", desc: "Enclosed rooftop terrace with panoramic city views, retractable glass ceiling." },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0a0f", fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400&display=swap" rel="stylesheet" />

      {/* Elegant Overlay Nav */}
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <span className="text-2xl tracking-[0.25em] uppercase" style={{ fontFamily: "Playfair Display, serif", color: "#d4b896" }}>Lumi\u00e8re</span>
        <div className="hidden md:flex items-center space-x-10">
          {["The Experience", "Tasting Menu", "Wine", "The Chef", "Private Dining"].map((link) => (
            <span key={link} className="text-xs font-light tracking-[0.15em] uppercase cursor-pointer transition-colors" style={{ color: "#6b6355" }}>{link}</span>
          ))}
          <button className="h-10 px-8 text-xs tracking-[0.2em] uppercase border transition-all hover:bg-opacity-10" style={{ color: "#d4b896", borderColor: "rgba(212,184,150,0.3)" }}>
            Reserve
          </button>
        </div>
      </nav>

      {/* Plated Dish Hero */}
      <section className="max-w-4xl mx-auto px-6 py-28 text-center">
        <div className="w-72 h-72 mx-auto rounded-full flex items-center justify-center mb-12" style={{ border: "1px solid rgba(212,184,150,0.15)", backgroundColor: "rgba(212,184,150,0.03)" }}>
          <div className="w-48 h-48 rounded-full flex items-center justify-center" style={{ border: "1px solid rgba(212,184,150,0.1)" }}>
            <span className="text-sm tracking-[0.3em] uppercase font-light" style={{ color: "#d4b896" }}>Plated Art</span>
          </div>
        </div>
        <p className="text-xs tracking-[0.4em] uppercase mb-6 font-light" style={{ color: "#6b6355" }}>One Michelin Star &middot; Est. 2019</p>
        <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: "Playfair Display, serif", color: "#d4b896" }}>
          Where Precision<br />Meets Poetry
        </h1>
        <p className="text-base font-light max-w-lg mx-auto leading-relaxed" style={{ color: "#6b6355" }}>
          A seven-course journey through technique, terroir, and imagination &mdash; composed nightly by Chef Julien Marchand.
        </p>
      </section>

      {/* The Experience */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="border-t border-b py-14" style={{ borderColor: "rgba(212,184,150,0.12)" }}>
          <h2 className="text-3xl mb-8 text-center" style={{ fontFamily: "Playfair Display, serif", color: "#d4b896" }}>The Experience</h2>
          <p className="font-light leading-relaxed mb-5 text-center" style={{ color: "#6b6355" }}>
            Lumi\u00e8re seats only thirty-two guests each evening. There is no \u00e0 la carte menu. Instead, every table embarks on the same seven-course
            tasting journey, shaped by the finest ingredients available that morning from our network of farmers, foragers, and fishermen.
          </p>
          <p className="font-light leading-relaxed text-center" style={{ color: "#6b6355" }}>
            Our dining room is designed for unhurried intimacy &mdash; warm candlelight, hand-thrown ceramics, and a service style that is present but never intrusive.
            An evening at Lumi\u00e8re typically unfolds over three hours.
          </p>
        </div>
      </section>

      {/* Tasting Menu */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl text-center mb-3" style={{ fontFamily: "Playfair Display, serif", color: "#d4b896" }}>Tasting Menu</h2>
        <p className="text-center text-xs tracking-[0.2em] uppercase font-light mb-14" style={{ color: "#6b6355" }}>Seven Courses &middot; $285 per guest &middot; Wine Pairing +$195</p>
        {courses.map((course) => (
          <div key={course.number} className="mb-10 pb-8 border-b" style={{ borderColor: "rgba(212,184,150,0.08)" }}>
            <div className="flex items-baseline gap-6">
              <span className="text-xs tracking-[0.3em] font-light" style={{ color: "#d4b896" }}>{course.number}</span>
              <div className="flex-1">
                <h3 className="text-lg mb-1" style={{ fontFamily: "Playfair Display, serif", color: "#d4b896" }}>{course.name}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#6b6355" }}>{course.desc}</p>
                <p className="text-xs font-light mt-2 italic" style={{ color: "#4a4540" }}>Paired: {course.wine}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Wine Pairing */}
      <section className="py-20" style={{ backgroundColor: "#0e0e14" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl mb-6" style={{ fontFamily: "Playfair Display, serif", color: "#d4b896" }}>The Wine Cellar</h2>
          <p className="font-light leading-relaxed mb-6" style={{ color: "#6b6355" }}>
            Our cellar holds over 1,200 selections with a focus on Burgundy, Champagne, and Piedmont. Sommelier Isabelle Laurent curates each evening&apos;s
            pairing to complement the tasting menu, drawing from rare allocations and vertical collections built over a decade.
          </p>
          <p className="text-xs tracking-[0.2em] uppercase font-light" style={{ color: "#d4b896" }}>Corkage: $75 per bottle &middot; Limit two bottles</p>
        </div>
      </section>

      {/* The Chef */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl mb-8 text-center" style={{ fontFamily: "Playfair Display, serif", color: "#d4b896" }}>Chef Julien Marchand</h2>
        <p className="font-light leading-relaxed mb-5 text-center" style={{ color: "#6b6355" }}>
          Born in Lyon and trained under Alain Ducasse, Julien spent fifteen years in the kitchens of Paris, Tokyo, and Copenhagen
          before opening Lumi\u00e8re. His philosophy is one of radical restraint &mdash; fewer elements on the plate, each rendered with
          absolute precision, allowing the ingredient itself to speak.
        </p>
        <p className="font-light leading-relaxed text-center" style={{ color: "#6b6355" }}>
          Julien was named a James Beard Award semifinalist in 2023 and received Lumi\u00e8re&apos;s first Michelin star the same year.
          His cooking draws from classical French technique while embracing the seasonality and spirit of the Pacific Northwest.
        </p>
      </section>

      {/* Private Dining */}
      <section className="py-20" style={{ backgroundColor: "#0e0e14" }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl mb-12 text-center" style={{ fontFamily: "Playfair Display, serif", color: "#d4b896" }}>Private Dining</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {privateDining.map((room) => (
              <div key={room.name} className="p-8 border text-center" style={{ borderColor: "rgba(212,184,150,0.12)" }}>
                <h3 className="text-lg mb-1" style={{ fontFamily: "Playfair Display, serif", color: "#d4b896" }}>{room.name}</h3>
                <p className="text-xs tracking-[0.15em] uppercase font-light mb-4" style={{ color: "#4a4540" }}>{room.guests} Guests</p>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#6b6355" }}>{room.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section className="max-w-xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl mb-6" style={{ fontFamily: "Playfair Display, serif", color: "#d4b896" }}>Reservations</h2>
        <p className="font-light leading-relaxed mb-4" style={{ color: "#6b6355" }}>
          Tables are released on the first of each month for the following month. Due to our limited seating, we recommend booking well in advance.
          Cancellations within 48 hours are subject to a $150 per guest fee.
        </p>
        <p className="text-sm font-light mb-8" style={{ color: "#6b6355" }}>
          Wednesday through Saturday &middot; Single seating at 7:00 PM
        </p>
        <button className="px-12 py-3 text-xs tracking-[0.25em] uppercase font-light border transition-all" style={{ color: "#d4b896", borderColor: "rgba(212,184,150,0.3)" }}>
          Request a Table
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t py-10" style={{ borderColor: "rgba(212,184,150,0.08)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-lg tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "Playfair Display, serif", color: "#d4b896" }}>Lumi\u00e8re</p>
          <p className="text-xs font-light" style={{ color: "#4a4540" }}>78 Waterfront Drive, Portland, OR 97209</p>
          <p className="text-xs font-light mt-1" style={{ color: "#4a4540" }}>Wed&ndash;Sat, 7:00 PM seating &middot; (503) 555-0231</p>
          <p className="text-xs font-light mt-1 italic" style={{ color: "#4a4540" }}>reservations@lumiere-pdx.com</p>
          <p className="text-xs font-light mt-6" style={{ color: "#2a2520" }}>&copy; 2025 Lumi\u00e8re. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
