export default function BlogCorporateDemo() {
  const posts = [
    { title: "How We Reduced API Latency by 60% with Edge Caching", excerpt: "Our engineering team spent three months rearchitecting our API layer to leverage edge computing. Here is the full breakdown of our approach, the tradeoffs we made, and the results we measured.", category: "Engineering", author: "Sarah Chen", role: "Staff Engineer", initials: "SC", date: "Feb 25, 2026", readTime: "10 min", featured: true },
    { title: "The Product Manager's Guide to Technical Debt", excerpt: "Technical debt is not a failure of engineering. It is a business decision that needs to be managed like any other form of leverage.", category: "Product", author: "Marcus Rivera", role: "VP of Product", initials: "MR", date: "Feb 20, 2026", readTime: "7 min", featured: false },
    { title: "Building Accessible Components from Day One", excerpt: "Accessibility retrofits are expensive and incomplete. We redesigned our component library with WCAG 2.2 AA compliance built into every primitive.", category: "Design", author: "Aisha Okonkwo", role: "Design Lead", initials: "AO", date: "Feb 15, 2026", readTime: "8 min", featured: false },
    { title: "Migrating 2 Million Users to Passkeys", excerpt: "Password-based authentication is a liability. Here is how we rolled out passkey support to our entire user base without a single forced migration.", category: "Security", author: "James Park", role: "Security Engineer", initials: "JP", date: "Feb 10, 2026", readTime: "12 min", featured: false },
    { title: "Why We Switched from Scrum to Shape Up", excerpt: "After three years of two-week sprints, our team was shipping features but losing the ability to think strategically. Shape Up gave us room to breathe.", category: "Process", author: "Elena Volkov", role: "Engineering Manager", initials: "EV", date: "Feb 5, 2026", readTime: "6 min", featured: false },
    { title: "Observability Beyond Logs: A Practical Framework", excerpt: "Logs, metrics, and traces are necessary but not sufficient. True observability requires understanding the questions you need to answer during an incident.", category: "Engineering", author: "Sarah Chen", role: "Staff Engineer", initials: "SC", date: "Jan 30, 2026", readTime: "9 min", featured: false },
  ];

  const categories = ["All Posts", "Engineering", "Product", "Design", "Security", "Process"];

  const relatedPosts = [
    { title: "Kubernetes Cost Optimization: Lessons from Scale", author: "James Park", readTime: "5 min" },
    { title: "Design Tokens in Practice: A Case Study", author: "Aisha Okonkwo", readTime: "7 min" },
    { title: "Remote Team Rituals That Actually Work", author: "Elena Volkov", readTime: "4 min" },
  ];

  const featured = posts[0];

  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>

      {/* Nav */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">N</span>
            </div>
            <span className="text-lg font-bold text-slate-900">NexusHub</span>
            <span className="text-xs text-slate-400 ml-1">Blog</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {["Engineering", "Product", "Design", "Company"].map((link) => (
              <span key={link} className="text-sm text-slate-600 hover:text-blue-500 transition-colors cursor-pointer">{link}</span>
            ))}
            <span className="text-sm bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">Subscribe</span>
          </div>
        </div>
      </nav>

      {/* Featured Post */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold text-blue-500 bg-blue-50 px-3 py-1 rounded-full mb-4">{featured.category}</span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">{featured.title}</h1>
              <p className="mt-4 text-lg text-slate-500 leading-relaxed">{featured.excerpt}</p>
              <div className="mt-6 flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600">{featured.initials}</div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{featured.author}</p>
                  <p className="text-xs text-slate-400">{featured.role} &middot; {featured.date} &middot; {featured.readTime}</p>
                </div>
              </div>
            </div>
            <div className="lg:w-96 w-full h-56 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-blue-300 text-sm">Featured Illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center space-x-2 overflow-x-auto">
          {categories.map((cat, i) => (
            <span key={cat} className={`text-sm px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-colors ${i === 0 ? "bg-blue-500 text-white font-medium" : "text-slate-500 hover:bg-slate-100"}`}>
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Posts + Sidebar */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Post Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.slice(1).map((post, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer group">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs font-medium text-blue-500 bg-blue-50 px-2.5 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-2">{post.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-xs font-semibold text-slate-500">{post.initials}</div>
                    <div>
                      <p className="text-xs font-medium text-slate-700">{post.author}</p>
                      <p className="text-xs text-slate-400">{post.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 space-y-8">
            {/* Newsletter */}
            <div className="bg-blue-500 rounded-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Stay in the loop</h3>
              <p className="text-sm text-blue-100 mb-4">Get the latest engineering and product insights delivered to your inbox every Thursday.</p>
              <div className="space-y-2">
                <div className="h-10 bg-white/20 rounded-lg flex items-center px-3">
                  <span className="text-sm text-white/60">name@company.com</span>
                </div>
                <div className="h-10 bg-white text-blue-600 font-semibold text-sm rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors">
                  Subscribe
                </div>
              </div>
              <p className="text-xs text-blue-200 mt-3">Join 14,000+ subscribers. Unsubscribe anytime.</p>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-4">Trending This Week</h3>
              <div className="space-y-4">
                {relatedPosts.map((post, i) => (
                  <div key={i} className="flex items-start space-x-3 group cursor-pointer">
                    <span className="text-2xl font-extrabold text-slate-200 leading-none">{i + 1}</span>
                    <div>
                      <p className="text-sm font-medium text-slate-700 group-hover:text-blue-500 transition-colors leading-snug">{post.title}</p>
                      <p className="text-xs text-slate-400 mt-1">{post.author} &middot; {post.readTime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="text-sm font-bold text-slate-900 mb-4">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Infrastructure", "Design Systems", "DevOps", "TypeScript", "Leadership", "API Design", "Testing"].map((tag) => (
                  <span key={tag} className="text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full hover:border-blue-300 hover:text-blue-500 cursor-pointer transition-colors">{tag}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">N</span>
              </div>
              <div>
                <span className="text-sm font-bold text-slate-900">NexusHub Engineering Blog</span>
                <p className="text-xs text-slate-400">Insights from the team building the future of collaboration.</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              {["Twitter", "LinkedIn", "GitHub", "RSS", "Careers"].map((link) => (
                <span key={link} className="text-xs text-slate-400 hover:text-blue-500 transition-colors cursor-pointer">{link}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
