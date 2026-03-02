export default function BlogLuxuryDemo() {
  const articles = [
    { title: "The Architecture of Silence", subtitle: "How Dieter Rams shaped a century of restraint", category: "Design Philosophy", date: "February 2026", readTime: "14 min", pullQuote: "Good design is as little design as possible. Less, but better, because it concentrates on the essential aspects." },
    { title: "Crafting Digital Patina", subtitle: "On software that ages with grace", category: "Product Thinking", date: "January 2026", readTime: "11 min", pullQuote: "" },
    { title: "The Lost Art of Typographic Hierarchy", subtitle: "Why every pixel of whitespace is a decision", category: "Typography", date: "January 2026", readTime: "9 min", pullQuote: "" },
    { title: "Wabi-Sabi in Interface Design", subtitle: "Embracing imperfection in digital craft", category: "Design Philosophy", date: "December 2025", readTime: "12 min", pullQuote: "" },
    { title: "On the Ethics of Persuasive Patterns", subtitle: "When delight becomes manipulation", category: "Ethics", date: "December 2025", readTime: "8 min", pullQuote: "" },
    { title: "The Materiality of Screens", subtitle: "Light, glass, and the textures we forgot", category: "Essays", date: "November 2025", readTime: "10 min", pullQuote: "" },
  ];

  const categories = ["All", "Design Philosophy", "Typography", "Product Thinking", "Ethics", "Essays"];

  const featured = articles[0];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e4df]" style={{ fontFamily: "Lora, serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
      </head>

      {/* Nav */}
      <nav className="border-b border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <span className="text-xl tracking-[0.15em] text-[#d4af37]" style={{ fontFamily: "Playfair Display, serif" }}>ATELIER</span>
          <div className="hidden md:flex items-center space-x-8">
            {["Journal", "Archive", "Contributors", "About"].map((link) => (
              <span key={link} className="text-xs tracking-[0.15em] uppercase text-[#666] hover:text-[#d4af37] transition-colors cursor-pointer">{link}</span>
            ))}
          </div>
          <span className="md:hidden text-xs tracking-[0.15em] uppercase text-[#666] cursor-pointer">Menu</span>
        </div>
      </nav>

      {/* Featured Article */}
      <section className="max-w-6xl mx-auto px-8 pt-24 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-6">{featured.category} &mdash; {featured.readTime}</p>
          <h1 className="text-4xl md:text-6xl leading-[1.1] mb-6" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            {featured.title}
          </h1>
          <p className="text-lg text-[#888] italic mb-8" style={{ fontFamily: "Lora, serif" }}>
            {featured.subtitle}
          </p>
          <p className="text-xs tracking-[0.15em] uppercase text-[#555]">{featured.date}</p>
        </div>

        {/* Pull Quote */}
        <div className="max-w-2xl mx-auto mt-16 py-10 border-t border-b border-[#1f1f1f]">
          <p className="text-2xl md:text-3xl italic text-center leading-relaxed text-[#999]" style={{ fontFamily: "Playfair Display, serif" }}>
            &ldquo;{featured.pullQuote}&rdquo;
          </p>
          <p className="text-center mt-4 text-xs tracking-[0.2em] uppercase text-[#d4af37]">Dieter Rams</p>
        </div>
      </section>

      {/* Drop Cap Sample */}
      <section className="max-w-2xl mx-auto px-8 pb-20">
        <p className="text-base leading-[1.9] text-[#999]">
          <span className="float-left text-6xl leading-[0.8] mr-3 mt-1 text-[#d4af37]" style={{ fontFamily: "Playfair Display, serif" }}>T</span>
          here is a moment in every designer&apos;s career when they stop adding and start removing. This inflection point, quiet and often unrecognized, marks the transition from competence to craft. Rams understood this instinctively. His work at Braun was not minimalism for its own sake but a relentless pursuit of clarity.
        </p>
      </section>

      {/* Categories */}
      <section className="border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-center space-x-8 overflow-x-auto">
          {categories.map((cat, i) => (
            <span key={cat} className={`text-xs tracking-[0.15em] uppercase whitespace-nowrap cursor-pointer transition-colors ${i === 0 ? "text-[#d4af37]" : "text-[#555] hover:text-[#d4af37]"}`}>
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Article Grid */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1f1f1f]">
          {articles.slice(1).map((article, i) => (
            <div key={i} className="bg-[#0a0a0a] p-10 group cursor-pointer hover:bg-[#111] transition-colors">
              <p className="text-xs tracking-[0.2em] uppercase text-[#d4af37] mb-4">{article.category}</p>
              <h3 className="text-2xl leading-[1.2] mb-3 group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
                {article.title}
              </h3>
              <p className="text-sm italic text-[#666] mb-6">{article.subtitle}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#555]">{article.date}</span>
                <span className="text-xs text-[#555]">{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-[#1f1f1f]">
        <div className="max-w-2xl mx-auto px-8 py-24 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#d4af37] mb-6">The Letter</p>
          <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            A monthly meditation on craft
          </h2>
          <p className="text-sm text-[#666] leading-relaxed mb-10 italic">
            Essays on design philosophy, typographic culture, and the pursuit of meaningful work. Delivered once a month, written with care.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 h-12 border border-[#333] bg-transparent flex items-center px-4">
              <span className="text-sm text-[#444] italic">your@email.com</span>
            </div>
            <div className="h-12 px-8 bg-[#d4af37] text-[#0a0a0a] text-xs tracking-[0.15em] uppercase font-semibold flex items-center justify-center cursor-pointer hover:bg-[#c4a030] transition-colors" style={{ fontFamily: "Lora, serif" }}>
              Subscribe
            </div>
          </div>
          <p className="text-xs text-[#333] mt-4">No algorithms. No engagement metrics. Just thoughtful writing.</p>
        </div>
      </section>

      {/* Colophon / Sidebar-style section */}
      <section className="border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-8 py-16 flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <p className="text-xs tracking-[0.2em] uppercase text-[#d4af37] mb-4">Colophon</p>
            <p className="text-sm text-[#555] leading-relaxed">
              Atelier is set in Playfair Display and Lora, served from Google Fonts. The journal is published from a small studio in Copenhagen. All essays are written by hand, edited with patience, and published when ready rather than on schedule.
            </p>
          </div>
          <div className="md:w-64">
            <p className="text-xs tracking-[0.2em] uppercase text-[#d4af37] mb-4">Follow</p>
            <div className="space-y-3">
              {["Mastodon", "Are.na", "Read.cv", "RSS Feed"].map((link) => (
                <div key={link} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm text-[#555] group-hover:text-[#d4af37] transition-colors">{link}</span>
                  <span className="text-xs text-[#333] group-hover:text-[#d4af37] transition-colors">&rarr;</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span
            className="text-xs tracking-[0.15em] text-[#333]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            ATELIER &copy; 2026
          </span>
          <span className="text-xs text-[#333] italic">
            Crafted with deliberation
          </span>
        </div>
      </footer>
    </div>
  );
}
