export const dynamic = "force-dynamic";
export default function LandingLuxuryDemo() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Didact Gothic', sans-serif", backgroundColor: "#1a0a2e", color: "#c0c0c0" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Inter:wght@300;400&display=swap" rel="stylesheet" />
      </head>

      {/* Invisible / Minimal Nav */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
        <span className="text-lg tracking-[0.3em] uppercase font-normal" style={{ color: "#c0c0c0" }}>&Eacute;clat Wines</span>
        <div className="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(192,192,192,0.5)" }}>
          <span className="cursor-pointer hover:text-white transition-colors">Collection</span>
          <span className="cursor-pointer hover:text-white transition-colors">Philosophy</span>
          <span className="cursor-pointer hover:text-white transition-colors">Membership</span>
          <span className="cursor-pointer hover:text-white transition-colors">Vineyard</span>
        </div>
      </nav>

      {/* Full-Width Hero Image Placeholder */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(26,10,46,0.3) 0%, #1a0a2e 100%)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "rgba(192,192,192,0.05)" }}>
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(192,192,192,0.2)" }}>Full-Width Vineyard Hero Image</span>
          </div>
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: "rgba(192,192,192,0.6)" }}>Established 1987 &middot; Bordeaux, France</p>
          <h1 className="text-5xl md:text-7xl font-normal leading-tight mb-8 text-white" style={{ letterSpacing: "-0.02em" }}>
            Where Time<br />Becomes Wine
          </h1>
          <p className="text-lg max-w-lg mx-auto mb-10 leading-relaxed" style={{ color: "rgba(192,192,192,0.7)" }}>
            An exclusive collection of estate-grown wines, crafted with four decades of patience and an unwavering commitment to terroir.
          </p>
          <button className="px-10 py-3 text-sm tracking-[0.2em] uppercase border transition-colors hover:bg-white hover:text-black" style={{ borderColor: "rgba(192,192,192,0.4)", color: "#c0c0c0" }}>
            Explore the Collection
          </button>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-8" style={{ color: "rgba(192,192,192,0.4)" }}>Our Philosophy</p>
          <h2 className="text-3xl md:text-4xl font-normal text-white leading-relaxed mb-8" style={{ letterSpacing: "-0.01em" }}>
            We believe that exceptional wine cannot be rushed. Each bottle in our collection represents a minimum of 36 months in French oak and a lifetime of accumulated knowledge passed between three generations of vignerons.
          </h2>
          <div className="w-16 h-px mx-auto" style={{ backgroundColor: "rgba(192,192,192,0.2)" }} />
          <p className="mt-8 text-sm leading-relaxed" style={{ color: "rgba(192,192,192,0.5)" }}>
            Our 42-hectare estate sits on limestone and clay soils in the Right Bank of Bordeaux, where Merlot and Cabernet Franc thrive in the continental microclimate. We practice biodynamic viticulture, hand-harvest every cluster, and vinify in small batches to preserve the singular character of each vintage.
          </p>
        </div>
      </section>

      {/* Curated Collection */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-center mb-16" style={{ color: "rgba(192,192,192,0.4)" }}>The Collection</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Cuvee Noire 2018", type: "Grand Cru", grape: "Merlot & Cabernet Franc", notes: "Dark cherry, truffle, graphite, and a whisper of violets. Silky tannins with extraordinary length. Decant 2 hours before serving.", price: "$285" },
              { name: "Blanc de Lune 2021", type: "Reserve", grape: "Sauvignon Blanc & Semillon", notes: "White peach, acacia blossom, and crushed limestone minerality. Fermented in new Allier oak with weekly batonnage for 9 months.", price: "$145" },
              { name: "Rose d&apos;Aurore 2022", type: "Estate", grape: "Cabernet Franc", notes: "Pale salmon with aromas of wild strawberry, blood orange, and Provencal herbs. Direct press for delicacy. Best served at cellar temperature.", price: "$95" },
            ].map((wine, i) => (
              <div key={i} className="text-center">
                <div className="w-full h-72 rounded-sm mb-8 flex items-center justify-center" style={{ backgroundColor: "rgba(192,192,192,0.05)", border: "1px solid rgba(192,192,192,0.1)" }}>
                  <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(192,192,192,0.2)" }}>Bottle Photo</span>
                </div>
                <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(192,192,192,0.4)" }}>{wine.type}</p>
                <h3 className="text-xl text-white mb-1">{wine.name}</h3>
                <p className="text-xs mb-4" style={{ color: "rgba(192,192,192,0.5)" }}>{wine.grape}</p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(192,192,192,0.6)" }}>{wine.notes}</p>
                <span className="text-lg text-white">{wine.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tasting Notes */}
      <section className="py-28 px-6" style={{ backgroundColor: "rgba(192,192,192,0.03)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-center mb-16" style={{ color: "rgba(192,192,192,0.4)" }}>Tasting Notes</p>
          <div className="space-y-12">
            {[
              { vintage: "2018 Cuvee Noire", score: "97", reviewer: "Robert Marchetti, The Wine Quarterly", note: "A monumental wine that transcends its appellation. The 2018 growing season gifted concentrated fruit, and the winemaking team had the wisdom to step back and let the vineyard speak. This will evolve beautifully for the next 25 years." },
              { vintage: "2021 Blanc de Lune", score: "94", reviewer: "Claire Fontaine, Decanter", note: "Remarkably complex for a white Bordeaux of this caliber. The oak integration is seamless, adding texture without masking the purity of fruit. A wine that challenges the notion that Bordeaux is only about reds." },
              { vintage: "2022 Rose d'Aurore", score: "92", reviewer: "James Harrington, Wine Enthusiast", note: "Serious rose that demands attention. The direct-press technique yields a wine of uncommon elegance, with a finish that lingers like a summer sunset over the Dordogne. Outstanding value at this price point." },
            ].map((review, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full border flex items-center justify-center text-lg text-white" style={{ borderColor: "rgba(192,192,192,0.2)" }}>
                  {review.score}
                </div>
                <div>
                  <h3 className="text-lg text-white mb-1">{review.vintage}</h3>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: "rgba(192,192,192,0.6)" }}>&ldquo;{review.note}&rdquo;</p>
                  <p className="text-xs" style={{ color: "rgba(192,192,192,0.4)" }}>&mdash; {review.reviewer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-8" style={{ color: "rgba(192,192,192,0.4)" }}>The Cellar Circle</p>
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-8">An Invitation to Join Our Private Membership</h2>
          <p className="text-sm leading-relaxed mb-12" style={{ color: "rgba(192,192,192,0.6)" }}>
            Cellar Circle members receive exclusive allocations of our most limited productions, invitations to private tastings at the estate, early access to new vintages, and a dedicated sommelier concierge for cellar management and pairing consultations. Membership is limited to 500 households worldwide.
          </p>
          <div className="inline-flex flex-col items-center gap-6">
            <button className="px-10 py-3 text-sm tracking-[0.2em] uppercase border transition-colors hover:bg-white hover:text-black" style={{ borderColor: "rgba(192,192,192,0.4)", color: "#c0c0c0" }}>
              Request an Invitation
            </button>
            <p className="text-xs" style={{ color: "rgba(192,192,192,0.3)" }}>Annual membership begins at $2,400. Allocation guaranteed.</p>
          </div>
        </div>
      </section>

      {/* Vineyard Story */}
      <section className="py-28 px-6" style={{ backgroundColor: "rgba(192,192,192,0.03)" }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase mb-8" style={{ color: "rgba(192,192,192,0.4)" }}>Our Vineyard</p>
            <h2 className="text-2xl md:text-3xl font-normal text-white mb-6 leading-relaxed">Three Generations of Patience</h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(192,192,192,0.6)" }}>
              Founded in 1987 by Henri Duval, &Eacute;clat began as a modest 8-hectare plot on a south-facing slope overlooking the Dordogne valley. Henri&apos;s daughter, Marguerite, expanded the estate through the 1990s, converting to organic viticulture and introducing biodynamic practices that transformed the soil.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(192,192,192,0.6)" }}>
              Today, her son Thierry oversees all winemaking. He combines his grandfather&apos;s intuition with modern precision — monitoring fermentation temperatures to the tenth of a degree while still deciding harvest dates by tasting the grapes at dawn, just as Henri taught him.
            </p>
          </div>
          <div className="w-full h-96 rounded-sm flex items-center justify-center" style={{ backgroundColor: "rgba(192,192,192,0.05)", border: "1px solid rgba(192,192,192,0.1)" }}>
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(192,192,192,0.2)" }}>Vineyard Landscape Photo</span>
          </div>
        </div>
      </section>

      {/* Delicate Minimal Footer */}
      <footer className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-px mx-auto mb-10" style={{ backgroundColor: "rgba(192,192,192,0.1)" }} />
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div>
              <span className="text-sm tracking-[0.3em] uppercase text-white">&Eacute;clat Wines</span>
              <p className="text-xs mt-2" style={{ color: "rgba(192,192,192,0.3)" }}>Saint-&Eacute;milion, Bordeaux, France</p>
            </div>
            <div className="flex gap-8 text-xs tracking-[0.15em] uppercase" style={{ color: "rgba(192,192,192,0.3)" }}>
              <span className="cursor-pointer hover:text-white transition-colors">Privacy</span>
              <span className="cursor-pointer hover:text-white transition-colors">Terms</span>
              <span className="cursor-pointer hover:text-white transition-colors">Contact</span>
            </div>
          </div>
          <p className="text-center text-xs mt-10" style={{ color: "rgba(192,192,192,0.2)" }}>
            &copy; 2025 &Eacute;clat Wines. Please enjoy responsibly. You must be of legal drinking age in your country of residence.
          </p>
        </div>
      </footer>
    </div>
  );
}
