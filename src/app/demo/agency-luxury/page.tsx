export const dynamic = "force-dynamic";
export default function AgencyLuxuryDemo() {
  const navItems = ["Campaigns", "Philosophy", "Awards", "Press", "Inquiry"];

  const campaigns = [
    {
      title: "The Silence Collection",
      client: "Maison Aurelian",
      year: "2024",
      category: "Fashion Film & Campaign",
      description: "A cinematic exploration of absence and longing for Maison Aurelian's autumn couture line. Shot across three continents in natural light, the campaign earned a Cannes Lions Grand Prix and redefined how luxury fashion communicates restraint.",
    },
    {
      title: "Architecture of Scent",
      client: "Oud Celestia",
      year: "2024",
      category: "Brand Identity & Launch",
      description: "Complete creative direction for the launch of a niche fragrance house. From naming to bottle design to a flagship retail concept in Paris, every element was orchestrated to evoke the sensation of walking through ancient stone corridors at dawn.",
    },
    {
      title: "Eternal Return",
      client: "Patek Laurent",
      year: "2023",
      category: "Editorial & Film",
      description: "A year-long editorial project for a heritage watchmaker, documenting the passage of time through the lens of generational craftsmanship. The resulting 12-minute film premiered at Art Basel and has been acquired by three museum collections.",
    },
  ];

  const awards = [
    { name: "Cannes Lions Grand Prix", count: "3x", category: "Film & Luxury" },
    { name: "D&AD Black Pencil", count: "1x", category: "Art Direction" },
    { name: "The One Show Gold", count: "7x", category: "Integrated Campaign" },
    { name: "ADC Annual Awards", count: "12x", category: "Design & Typography" },
    { name: "TDC Certificate of Excellence", count: "5x", category: "Type Design" },
    { name: "Communication Arts", count: "9x", category: "Advertising & Design" },
  ];

  const press = [
    { publication: "Wallpaper*", quote: "Noir & Blanc operates at the intersection of art and commerce where very few agencies dare to tread." },
    { publication: "The New York Times Style", quote: "The creative direction firm that luxury brands call when they want to be taken seriously by the art world." },
    { publication: "Monocle", quote: "Understated, uncompromising, and utterly distinctive. Noir & Blanc has carved a niche that others can only admire from a distance." },
    { publication: "Financial Times HTSI", quote: "In an industry obsessed with noise, Noir & Blanc has built a reputation on the power of silence." },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Italiana', serif", backgroundColor: "#1a1a1a", color: "#e5e5e5" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Italiana&family=Inter:wght@300;400&display=swap"
        rel="stylesheet"
      />

      {/* Overlay Nav */}
      <nav className="absolute top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">
          <span className="text-xl tracking-widest uppercase">Noir & Blanc</span>
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <span
                key={item}
                className="text-xs tracking-widest uppercase cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* Cinematic Reel Hero */}
      <section className="relative h-screen flex items-center justify-center" style={{ backgroundColor: "#111" }}>
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at center, #333 0%, transparent 70%)" }} />
        <div className="relative text-center px-6">
          <p className="text-xs tracking-[0.4em] uppercase mb-8 opacity-50" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Creative Direction for the Discerning
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-wide leading-tight max-w-4xl mx-auto">
            Where vision becomes legacy
          </h1>
          <p className="mt-8 text-sm tracking-wider max-w-lg mx-auto leading-relaxed opacity-60" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Noir & Blanc is a luxury creative direction agency for brands that understand
            the difference between being seen and being remembered.
          </p>
          <div className="mt-12">
            <span className="text-xs tracking-[0.3em] uppercase cursor-pointer opacity-50 hover:opacity-100 transition-opacity border-b pb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, borderColor: "#e5e5e540" }}>
              View Selected Work
            </span>
          </div>
        </div>
      </section>

      {/* Selected Campaigns */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-xs tracking-[0.3em] uppercase mb-20 opacity-40" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Selected Campaigns
          </p>
          <div className="space-y-28">
            {campaigns.map((campaign, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-12 items-start">
                <div className="aspect-[16/10] flex items-center justify-center" style={{ backgroundColor: "#222" }}>
                  <span className="text-xs tracking-widest uppercase opacity-30" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {campaign.category}
                  </span>
                </div>
                <div className="py-4">
                  <p className="text-xs tracking-[0.2em] uppercase opacity-40 mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    {campaign.client} &mdash; {campaign.year}
                  </p>
                  <h3 className="text-2xl md:text-3xl tracking-wide mb-6">{campaign.title}</h3>
                  <p className="text-sm leading-[1.8] opacity-60" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    {campaign.description}
                  </p>
                  <span className="inline-block mt-8 text-xs tracking-[0.2em] uppercase cursor-pointer opacity-40 hover:opacity-100 transition-opacity border-b pb-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, borderColor: "#e5e5e530" }}>
                    Explore Campaign
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 border-t border-b" style={{ borderColor: "#ffffff10" }}>
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-12 opacity-40" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl tracking-wide leading-relaxed mb-10">
            True luxury is the courage to leave space for meaning
          </h2>
          <p className="text-sm leading-[2] opacity-50 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            We believe that the most powerful creative work is born from restraint, not excess.
            Every project begins with a single question: what is the one essential truth this brand
            must convey? Everything that does not serve that truth is removed. What remains is
            not minimalism for its own sake, but clarity earned through discipline. Our work does not
            shout. It does not chase. It arrives, and it endures.
          </p>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-8">
          <p className="text-xs tracking-[0.3em] uppercase mb-16 opacity-40" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Recognition
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10">
            {awards.map((award, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl tracking-wide">{award.count}</p>
                <p className="text-sm mt-2 opacity-70">{award.name}</p>
                <p className="text-xs mt-1 opacity-30" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                  {award.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-24 border-t" style={{ borderColor: "#ffffff10" }}>
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-xs tracking-[0.3em] uppercase mb-16 opacity-40" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Press
          </p>
          <div className="space-y-14">
            {press.map((item, i) => (
              <div key={i} className="border-b pb-10" style={{ borderColor: "#ffffff08" }}>
                <p className="text-xs tracking-[0.2em] uppercase opacity-30 mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                  {item.publication}
                </p>
                <p className="text-lg md:text-xl tracking-wide leading-relaxed opacity-70 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section className="py-28 text-center">
        <div className="max-w-2xl mx-auto px-8">
          <p className="text-xs tracking-[0.3em] uppercase mb-8 opacity-40" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Begin a Conversation
          </p>
          <h2 className="text-3xl md:text-4xl tracking-wide leading-relaxed mb-8">
            For inquiries and commissions
          </h2>
          <p className="text-sm leading-[1.8] opacity-50 mb-12" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            We accept a carefully considered number of projects each year. If you believe there is
            an alignment between your vision and our approach, we welcome the conversation.
          </p>
          <span className="text-xs tracking-[0.3em] uppercase cursor-pointer opacity-50 hover:opacity-100 transition-opacity border-b pb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, borderColor: "#e5e5e540" }}>
            studio@noiretblanc.com
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 px-8" style={{ borderColor: "#ffffff08" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm tracking-widest uppercase opacity-60">Noir & Blanc</span>
          <p className="text-xs opacity-30" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Paris &middot; New York &middot; Tokyo
          </p>
          <p className="text-xs opacity-20" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            &copy; 2024 Noir & Blanc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
