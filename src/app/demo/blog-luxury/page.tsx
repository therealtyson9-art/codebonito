export default function BlogLuxuryDemo() {
  const editorialPicks = [
    {
      title: "The Vanishing Art of the Grand Hotel",
      subtitle: "Inside the last generation of hoteliers who learned their craft before algorithms replaced intuition",
      category: "Hospitality",
      date: "February 2026",
      readTime: "16 min",
    },
    {
      title: "A Perfumer's Year in Grasse",
      subtitle: "Twelve months among jasmine fields, copper stills, and the slow chemistry of patience",
      category: "Craft",
      date: "January 2026",
      readTime: "13 min",
    },
    {
      title: "Why the World's Best Restaurants Are Getting Smaller",
      subtitle: "The fine dining counter-revolution favoring eight seats, no menus, and radical intimacy",
      category: "Gastronomy",
      date: "January 2026",
      readTime: "10 min",
    },
  ];

  return (
    <div style={{ fontFamily: "'Lora', serif", backgroundColor: "#1c1210", color: "#d4a053" }} className="min-h-screen">
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap&family=Inter:wght@300;400&display=swap"
        rel="stylesheet"
      />

      {/* Refined Serif Nav */}
      <nav className="border-b" style={{ borderColor: "#2e1f1a" }}>
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-wide" style={{ color: "#d4a053" }}>
            Curated Life
          </h1>
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#a07a3a" }}>
            <a href="#" className="hover:text-white transition-colors tracking-wide">Stories</a>
            <a href="#" className="hover:text-white transition-colors tracking-wide">Craft</a>
            <a href="#" className="hover:text-white transition-colors tracking-wide">Travel</a>
            <a href="#" className="hover:text-white transition-colors tracking-wide">The Edit</a>
            <a href="#" className="hover:text-white transition-colors tracking-wide">Subscribe</a>
          </div>
        </div>
      </nav>

      {/* Editorial Full-Bleed Hero */}
      <section className="relative py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.35em] uppercase mb-8" style={{ fontFamily: "'Inter', sans-serif", color: "#a07a3a" }}>
            The Spring Issue
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal leading-tight mb-8" style={{ color: "#f5e6c8" }}>
            The Slow Return of<br />
            <em className="font-normal">Beautiful Things</em>
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: "#a07a3a" }}>
            In an age of disposability, a quiet resistance is gathering. Artisans, architects, and
            designers are rediscovering the radical proposition that objects can be made to last,
            that spaces can be built to age gracefully, and that luxury is not excess but intention.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "#6b5530" }}>
            <span>Words by Isabelle Dumont</span>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#6b5530" }} />
            <span>Photography by Kenji Mori</span>
          </div>
          <a href="#" className="inline-block mt-10 text-sm tracking-wider border-b pb-1 transition-colors" style={{ fontFamily: "'Inter', sans-serif", color: "#d4a053", borderColor: "#6b5530" }}>
            Read the Feature
          </a>
        </div>
      </section>

      <div className="max-w-xs mx-auto h-px" style={{ backgroundColor: "#2e1f1a" }} />

      {/* Featured Story */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase mb-6" style={{ fontFamily: "'Inter', sans-serif", color: "#6b5530" }}>
              Featured Story
            </p>
            <h3 className="text-2xl md:text-3xl font-normal leading-snug mb-6" style={{ color: "#f5e6c8" }}>
              A Watchmaker&apos;s Hands: Inside the Last Atelier on Rue du Rhone
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#a07a3a" }}>
              At eighty-three, Marcel Aubert still arrives at his Geneva workshop at seven each morning.
              His bench holds tools inherited from his father, who inherited them from his. In an
              industry obsessed with silicon and smartwatches, Marcel repairs movements that were
              assembled before electricity reached his street. We spent a week watching him work.
            </p>
            <div className="text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "#6b5530" }}>
              By Julian Ashford &middot; 18 min read &middot; March 2026
            </div>
          </div>
          <div className="h-72 rounded-sm flex items-center justify-center" style={{ backgroundColor: "#2e1f1a" }}>
            <div className="text-center" style={{ color: "#6b5530" }}>
              <div className="text-5xl mb-2" style={{ color: "#d4a053" }}>&#9672;</div>
              <div className="text-xs tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>Editorial Photography</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-xs mx-auto h-px" style={{ backgroundColor: "#2e1f1a" }} />

      {/* Editorial Picks */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h3 className="text-xs tracking-[0.25em] uppercase text-center mb-14" style={{ fontFamily: "'Inter', sans-serif", color: "#6b5530" }}>
          The Editor&apos;s Picks
        </h3>
        <div className="space-y-12">
          {editorialPicks.map((pick, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <p className="text-xs tracking-wider uppercase mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "#6b5530" }}>
                    {pick.category}
                  </p>
                  <h4 className="text-xl md:text-2xl font-normal mb-2 group-hover:underline" style={{ color: "#f5e6c8" }}>
                    {pick.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#a07a3a" }}>
                    {pick.subtitle}
                  </p>
                </div>
                <div className="hidden sm:block text-right shrink-0">
                  <div className="text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "#6b5530" }}>
                    {pick.date}
                  </div>
                  <div className="text-xs mt-1" style={{ fontFamily: "'Inter', sans-serif", color: "#6b5530" }}>
                    {pick.readTime}
                  </div>
                </div>
              </div>
              {i < editorialPicks.length - 1 && (
                <div className="h-px mt-12" style={{ backgroundColor: "#2e1f1a" }} />
              )}
            </article>
          ))}
        </div>
      </section>

      <div className="max-w-xs mx-auto h-px" style={{ backgroundColor: "#2e1f1a" }} />

      {/* Editor's Note */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[0.25em] uppercase mb-8" style={{ fontFamily: "'Inter', sans-serif", color: "#6b5530" }}>
          A Note from the Editor
        </p>
        <p className="text-lg md:text-xl italic leading-relaxed mb-6" style={{ color: "#f5e6c8" }}>
          &ldquo;We started Curated Life with a simple conviction: that taste is not about wealth,
          but about attention. Every story in these pages is an invitation to notice something
          worth caring about, something made with hands and time and the kind of devotion
          that refuses to be rushed.&rdquo;
        </p>
        <div className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#6b5530" }}>
          <p className="font-medium" style={{ color: "#d4a053" }}>Isabelle Dumont</p>
          <p className="text-xs mt-1">Editor-in-Chief, Curated Life</p>
        </div>
      </section>

      <div className="max-w-xs mx-auto h-px" style={{ backgroundColor: "#2e1f1a" }} />

      {/* Subscribe to Print */}
      <section className="max-w-lg mx-auto px-6 py-20 text-center">
        <p className="text-xs tracking-[0.25em] uppercase mb-6" style={{ fontFamily: "'Inter', sans-serif", color: "#6b5530" }}>
          Receive the Print Edition
        </p>
        <h3 className="text-2xl md:text-3xl font-normal mb-4" style={{ color: "#f5e6c8" }}>
          Delivered quarterly on<br />uncoated cotton paper
        </h3>
        <p className="text-sm leading-relaxed mb-8" style={{ color: "#a07a3a" }}>
          Each issue is designed to be kept, not discarded. Eighty pages of long-form journalism,
          original photography, and no advertising. Shipped worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 text-sm bg-transparent border focus:outline-none"
            style={{ fontFamily: "'Inter', sans-serif", borderColor: "#2e1f1a", color: "#d4a053" }}
          />
          <button
            className="px-6 py-3 text-xs tracking-wider uppercase transition-opacity hover:opacity-80"
            style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#d4a053", color: "#1c1210" }}
          >
            Subscribe
          </button>
        </div>
        <p className="text-xs mt-4" style={{ fontFamily: "'Inter', sans-serif", color: "#6b5530" }}>
          $48 per year &middot; 4 issues &middot; Free worldwide shipping
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t py-10" style={{ borderColor: "#2e1f1a" }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lg font-semibold" style={{ color: "#d4a053" }}>Curated Life</div>
          <div className="flex gap-6 text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "#6b5530" }}>
            <span>Stories</span>
            <span>Craft</span>
            <span>Travel</span>
            <span>Archive</span>
            <span>Contact</span>
          </div>
          <div className="text-xs" style={{ fontFamily: "'Inter', sans-serif", color: "#6b5530" }}>
            &copy; 2026 Curated Life Editorial
          </div>
        </div>
      </footer>
    </div>
  );
}
