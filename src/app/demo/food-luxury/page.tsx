export default function FoodLuxuryDemo() {
  const navLinks = ["Collections", "Our Chefs", "Tasting Boxes", "Private Events"]

  const collections = [
    { name: "Charcuterie", origin: "Emilia-Romagna, Italy", story: "Our master salumiere sources prosciutto aged 24 months in the hills of Parma, paired with artisanal coppa and bresaola from heritage-breed pigs raised on chestnut and whey." },
    { name: "Chocolate", origin: "Chuao, Venezuela", story: "Single-origin cacao from the remote Chuao Valley, hand-harvested by the same families for five generations. Each bar is stone-ground for 72 hours to develop its signature floral complexity." },
    { name: "Wine", origin: "Burgundy, France", story: "Small-production vintages from biodynamic estates across the Cote d'Or. Our sommelier selects fewer than 200 bottles per vintage, favoring terroir expression over commercial appeal." },
    { name: "Cheese", origin: "Swiss Alps & Loire Valley", story: "Cave-aged Gruyere from alpine dairies and delicate chevre from the Loire, each wheel turned by hand. Our affineur visits every producer personally to ensure peak maturation." },
  ]

  const chefs = [
    { name: "Chef Isabelle Fontaine", title: "Executive Culinary Director", bio: "Trained at Le Cordon Bleu Paris and honed her craft at three-Michelin-star establishments in Lyon and Copenhagen. Isabelle brings 18 years of fine dining experience to every curated collection, with a philosophy rooted in provenance and restraint." },
    { name: "Chef Takeshi Morimoto", title: "Head of Fermentation & Preservation", bio: "A master of koji, miso, and traditional preservation techniques, Takeshi spent a decade apprenticing in Kyoto before joining our team. His expertise in umami development and natural fermentation transforms our charcuterie and cheese pairings." },
  ]

  const tastingBoxes = [
    { name: "The Discovery", price: "$95", desc: "A curated introduction to our world", items: ["Selection of 3 artisanal cheeses", "Prosciutto di Parma (100g)", "Single-origin chocolate bar", "House-made preserves", "Artisan crackers & breadsticks"], serves: "Serves 2" },
    { name: "The Connoisseur", price: "$165", desc: "Our most popular collection", items: ["Selection of 5 rare cheeses", "Charcuterie board (4 varieties)", "Two chocolate bars with tasting notes", "Half bottle of curated wine", "Seasonal fruit compote", "Hand-harvested honeycomb"], serves: "Serves 4" },
    { name: "The Grand Reserve", price: "$295", desc: "An extraordinary culinary journey", items: ["Selection of 7 aged cheeses", "Full charcuterie spread (6 varieties)", "Chocolate tasting collection (6 origins)", "Full bottle of reserve wine", "Truffle-infused accompaniments", "Personalized tasting guide", "Engraved wooden presentation board"], serves: "Serves 6-8" },
  ]

  return (
    <div className="min-h-screen bg-[#1a0f0a] text-[#c4a882]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="border-b border-[#2a1f18]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-2xl font-light tracking-[0.15em] text-[#d4a574]">MAISON TERROIR</span>
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <span key={link} className="text-sm tracking-wider text-[#8a7560] hover:text-[#d4a574] cursor-pointer transition-colors">{link}</span>
            ))}
          </div>
          <span className="px-6 py-2.5 border border-[#d4a574] text-[#d4a574] text-sm tracking-wider cursor-pointer hover:bg-[#d4a574] hover:text-[#1a0f0a] transition-all">Reserve</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="h-[75vh] bg-gradient-to-b from-[#2a1a10] via-[#1a0f0a] to-[#1a0f0a] flex items-center justify-center">
          <div className="text-center max-w-2xl px-6">
            <p className="text-xs tracking-[0.4em] uppercase text-[#8a7560] mb-8">Artisanal Provisions Since 2014</p>
            <h1 className="text-5xl md:text-7xl font-light text-[#d4a574] leading-tight italic">
              Curated culinary<br />excellence
            </h1>
            <p className="text-lg text-[#8a7560] font-light mt-8 max-w-md mx-auto leading-relaxed">
              Rare ingredients and time-honored traditions, assembled with reverence for the craft.
            </p>
            <div className="mt-12 flex justify-center gap-6">
              <span className="px-10 py-3.5 bg-[#d4a574] text-[#1a0f0a] text-sm tracking-wider font-medium cursor-pointer hover:bg-[#c4955a] transition-colors">Explore Collections</span>
              <span className="px-10 py-3.5 border border-[#3a2a1e] text-[#8a7560] text-sm tracking-wider cursor-pointer hover:border-[#d4a574] hover:text-[#d4a574] transition-all">Our Story</span>
            </div>
          </div>
        </div>
      </section>

      {/* Artisanal Collections */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-[#8a7560] mb-4">The Collections</p>
          <h2 className="text-4xl font-light text-[#d4a574] italic">Artisanal Provisions</h2>
        </div>
        <div className="space-y-16">
          {collections.map((col, i) => (
            <div key={col.name} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
              <div className="h-64 bg-gradient-to-br from-[#2a1a10] to-[#1f1510] rounded border border-[#2a1f18]" />
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-[#8a7560] mb-2">{col.origin}</p>
                <h3 className="text-3xl font-light text-[#d4a574] italic mb-4">{col.name}</h3>
                <p className="text-sm text-[#8a7560] leading-relaxed">{col.story}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chef Profiles */}
      <section className="border-y border-[#2a1f18]">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-[#8a7560] mb-4">Our Artisans</p>
            <h2 className="text-4xl font-light text-[#d4a574] italic">Master Chefs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {chefs.map((chef) => (
              <div key={chef.name}>
                <div className="h-56 bg-gradient-to-b from-[#2a1a10] to-[#1f1510] rounded border border-[#2a1f18] mb-6" />
                <h3 className="text-xl text-[#d4a574] font-light">{chef.name}</h3>
                <p className="text-xs tracking-[0.2em] uppercase text-[#8a7560] mt-1">{chef.title}</p>
                <p className="text-sm text-[#8a7560] mt-4 leading-relaxed">{chef.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tasting Boxes */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-[#8a7560] mb-4">Curated Experiences</p>
          <h2 className="text-4xl font-light text-[#d4a574] italic">Tasting Boxes</h2>
          <p className="text-sm text-[#8a7560] mt-4">Each box is assembled by hand and shipped in temperature-controlled packaging.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tastingBoxes.map((box) => (
            <div key={box.name} className="border border-[#2a1f18] p-8 hover:border-[#d4a574] transition-colors">
              <h3 className="text-xl text-[#d4a574] font-light italic">{box.name}</h3>
              <p className="text-xs text-[#8a7560] mt-1">{box.desc}</p>
              <div className="mt-4 mb-6">
                <span className="text-3xl font-light text-[#d4a574]">{box.price}</span>
                <span className="text-xs text-[#6a5a48] ml-2">{box.serves}</span>
              </div>
              <ul className="space-y-2">
                {box.items.map((item) => (
                  <li key={item} className="text-sm text-[#8a7560] flex items-start gap-2">
                    <span className="text-[#d4a574] text-xs mt-1">&#9830;</span> {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block w-full text-center mt-8 py-3 border border-[#d4a574] text-[#d4a574] text-sm tracking-wider cursor-pointer hover:bg-[#d4a574] hover:text-[#1a0f0a] transition-all">Select</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sourcing Philosophy */}
      <section className="bg-[#150c07]">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-[#8a7560] mb-4">Philosophy</p>
          <h2 className="text-4xl font-light text-[#d4a574] italic mb-8">Sourcing with Intention</h2>
          <p className="text-[#8a7560] leading-relaxed mb-6">
            Every ingredient in our collection has a story. We travel to the source -- walking the alpine pastures where our cheese is made, visiting the cacao forests of Venezuela, tasting at the estates where our wines are born.
          </p>
          <p className="text-[#8a7560] leading-relaxed">
            We believe that extraordinary food cannot be rushed or industrialized. Our producers are artisans who measure their craft in generations, not quarterly reports. When you open a Maison Terroir box, you taste the patience and pride of people who have devoted their lives to a single pursuit of perfection.
          </p>
        </div>
      </section>

      {/* Private Events */}
      <section className="border-t border-[#2a1f18]">
        <div className="max-w-4xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-[#8a7560] mb-4">Bespoke Experiences</p>
            <h2 className="text-3xl font-light text-[#d4a574] italic mb-6">Private Tastings &amp; Events</h2>
            <p className="text-sm text-[#8a7560] leading-relaxed mb-4">
              Host an unforgettable evening with a guided tasting led by our chefs and sommeliers. From intimate dinners for six to corporate events for fifty, each experience is tailored to your palate and occasion.
            </p>
            <p className="text-sm text-[#8a7560] leading-relaxed mb-8">
              Private events include a custom menu designed in consultation with Chef Fontaine, sommelier-selected wine pairings, and a take-home gift box for every guest.
            </p>
            <span className="px-8 py-3 border border-[#d4a574] text-[#d4a574] text-sm tracking-wider cursor-pointer hover:bg-[#d4a574] hover:text-[#1a0f0a] transition-all">Inquire About Private Events</span>
          </div>
          <div className="h-80 bg-gradient-to-br from-[#2a1a10] to-[#1f1510] rounded border border-[#2a1f18]" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a1f18]">
        <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-xl font-light tracking-[0.15em] text-[#d4a574]">MAISON TERROIR</span>
            <p className="text-xs text-[#6a5a48] mt-2">Artisanal provisions, curated with care</p>
          </div>
          <div className="text-xs text-[#6a5a48] space-x-8">
            <span className="cursor-pointer hover:text-[#d4a574]">Instagram</span>
            <span className="cursor-pointer hover:text-[#d4a574]">Newsletter</span>
            <span className="cursor-pointer hover:text-[#d4a574]">concierge@maisonterroir.com</span>
          </div>
          <p className="text-xs text-[#4a3a28]">&copy; 2026 Maison Terroir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
