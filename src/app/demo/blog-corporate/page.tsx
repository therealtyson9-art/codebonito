export const dynamic = "force-dynamic";
export default function BlogCorporateDemo() {
  const categories = ["All", "Climate Policy", "ESG Reporting", "Green Tech", "Supply Chain", "Leadership"];

  const articles = [
    {
      title: "How Scope 3 Emissions Reporting Is Reshaping Supply Chains",
      excerpt: "New SEC disclosure rules are forcing companies to measure emissions across their entire value chain. Early adopters share lessons from the first year of compliance.",
      category: "ESG Reporting",
      author: "Dr. Priya Mehta",
      role: "Chief Sustainability Officer",
      initials: "PM",
      date: "Feb 28, 2026",
      readTime: "9 min",
    },
    {
      title: "The Business Case for Biodiversity Credits",
      excerpt: "Carbon offsets dominated the last decade. Biodiversity credits are emerging as the next frontier, with a projected market value of $12 billion by 2030.",
      category: "Climate Policy",
      author: "James Okafor",
      role: "Policy Analyst",
      initials: "JO",
      date: "Feb 22, 2026",
      readTime: "7 min",
    },
    {
      title: "Why Your Green Tech Investment Strategy Needs a Rewrite",
      excerpt: "Cleantech venture funding hit $47 billion in 2025, but 60 percent went to just three categories. We analyze where the underserved opportunities are.",
      category: "Green Tech",
      author: "Lena Eriksson",
      role: "Investment Director",
      initials: "LE",
      date: "Feb 16, 2026",
      readTime: "11 min",
    },
    {
      title: "Building a Circular Supply Chain from Scratch",
      excerpt: "A mid-size electronics manufacturer replaced 80 percent of its virgin materials with recycled inputs in 18 months. Here is their operational blueprint.",
      category: "Supply Chain",
      author: "Carlos Diaz",
      role: "Operations Lead",
      initials: "CD",
      date: "Feb 10, 2026",
      readTime: "8 min",
    },
    {
      title: "The CEO Playbook for Climate Transition Planning",
      excerpt: "Transition plans are no longer optional. Regulators, investors, and employees all expect a credible roadmap. Five CEOs share how they built theirs.",
      category: "Leadership",
      author: "Amara Johnson",
      role: "Managing Editor",
      initials: "AJ",
      date: "Feb 4, 2026",
      readTime: "10 min",
    },
    {
      title: "Water Risk Is the Climate Risk Nobody Is Pricing",
      excerpt: "Drought, contamination, and scarcity are threatening $2.6 trillion in global assets. Why water disclosure is the next ESG battleground.",
      category: "Climate Policy",
      author: "Dr. Ravi Anand",
      role: "Environmental Economist",
      initials: "RA",
      date: "Jan 28, 2026",
      readTime: "6 min",
    },
  ];

  const contributors = [
    { name: "Dr. Priya Mehta", role: "Chief Sustainability Officer at Vestas", initials: "PM" },
    { name: "James Okafor", role: "Senior Policy Analyst, World Resources Institute", initials: "JO" },
    { name: "Lena Eriksson", role: "Director of Climate Investments, Nordstern Capital", initials: "LE" },
  ];

  return (
    <div style={{ fontFamily: "'Noto Sans', sans-serif", backgroundColor: "#f9fafb", color: "#374151" }} className="min-h-screen">
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Breadcrumb Nav */}
      <nav className="border-b" style={{ borderColor: "#e5e7eb" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#166534" }}>GS</div>
            <span className="text-lg font-semibold" style={{ color: "#166534" }}>GreenShift Insights</span>
          </div>
          <div className="hidden md:flex items-center gap-1 text-sm text-gray-400">
            <span>Home</span>
            <span>/</span>
            <span>Blog</span>
            <span>/</span>
            <span className="font-medium" style={{ color: "#166534" }}>All Articles</span>
          </div>
        </div>
      </nav>

      {/* Featured Article Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#166534" }}>
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center text-white">
              <span className="text-xs font-semibold tracking-wider uppercase opacity-80 mb-4">Featured Article</span>
              <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
                The Global South Is Leading the Next Wave of Climate Innovation
              </h1>
              <p className="text-sm leading-relaxed opacity-90 mb-6">
                From solar microgrids in Kenya to mangrove restoration in Indonesia, developing nations
                are building climate solutions that wealthy countries are now racing to replicate.
                A deep dive into the technologies, policies, and entrepreneurs driving change from the bottom up.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">AJ</div>
                <div className="text-xs">
                  <div className="font-medium">Amara Johnson</div>
                  <div className="opacity-70">March 1, 2026 &middot; 14 min read</div>
                </div>
              </div>
            </div>
            <div className="h-48 md:h-auto flex items-center justify-center" style={{ backgroundColor: "#14532d" }}>
              <div className="text-center text-white/30 text-sm">
                <div className="text-4xl mb-2">&#9883;</div>
                <div>Featured Image</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="max-w-6xl mx-auto px-6 pb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
              style={i === 0
                ? { backgroundColor: "#166534", color: "#ffffff" }
                : { backgroundColor: "#e5e7eb", color: "#6b7280" }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Article Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <article key={i} className="bg-white rounded-lg border p-6 hover:shadow-md transition-shadow cursor-pointer" style={{ borderColor: "#e5e7eb" }}>
              <span className="inline-block text-xs font-semibold px-2 py-1 rounded mb-4" style={{ backgroundColor: "#dcfce7", color: "#166534" }}>
                {article.category}
              </span>
              <h3 className="text-lg font-semibold mb-2 leading-snug" style={{ color: "#111827" }}>
                {article.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4 text-gray-500">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "#f3f4f6" }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#166534" }}>
                  {article.initials}
                </div>
                <div className="text-xs text-gray-400">
                  <span className="font-medium text-gray-600">{article.author}</span> &middot; {article.readTime}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Expert Contributors */}
      <section className="border-t border-b py-12" style={{ borderColor: "#e5e7eb" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xs font-semibold tracking-wider uppercase mb-8" style={{ color: "#166534" }}>
            Expert Contributors
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contributors.map((person, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0" style={{ backgroundColor: "#166534" }}>
                  {person.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "#111827" }}>{person.name}</div>
                  <div className="text-xs text-gray-400">{person.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="rounded-lg p-8 text-center" style={{ backgroundColor: "#f0fdf4" }}>
          <h3 className="text-xl font-semibold mb-2" style={{ color: "#166534" }}>Stay ahead of the sustainability curve</h3>
          <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
            Join 34,000 professionals receiving our weekly analysis of ESG trends, climate policy, and green technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="work@company.com" className="flex-1 px-4 py-2.5 text-sm border rounded-lg focus:outline-none" style={{ borderColor: "#d1d5db" }} />
            <button className="px-6 py-2.5 text-sm font-medium text-white rounded-lg" style={{ backgroundColor: "#166534" }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10" style={{ borderColor: "#e5e7eb" }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold mb-3" style={{ color: "#166534" }}>GreenShift Insights</div>
            <p className="text-xs text-gray-400 leading-relaxed">Independent analysis at the intersection of business and sustainability.</p>
          </div>
          <div>
            <div className="font-medium mb-3 text-gray-600">Topics</div>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>Climate Policy</li><li>ESG Reporting</li><li>Green Tech</li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3 text-gray-600">Company</div>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>About Us</li><li>Contributors</li><li>Advertise</li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3 text-gray-600">Legal</div>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>Privacy Policy</li><li>Terms of Service</li><li>Cookie Settings</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t text-xs text-gray-400" style={{ borderColor: "#f3f4f6" }}>
          &copy; 2026 GreenShift Media, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
