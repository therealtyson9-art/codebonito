export default function BlogMinimalistDemo() {
  const posts = [
    { title: "The Quiet Revolution of Server Components", excerpt: "React Server Components are fundamentally changing how we think about data fetching, bundle sizes, and the boundary between client and server. Here is what two years of production use has taught us.", category: "Engineering", date: "Feb 24, 2026", readTime: "8 min read" },
    { title: "Why Typography Still Matters More Than You Think", excerpt: "In an era of AI-generated content, the craft of setting type well has become a competitive advantage that separates thoughtful products from everything else.", category: "Design", date: "Feb 18, 2026", readTime: "5 min read" },
    { title: "Building a Second Brain with Plain Text Files", excerpt: "Forget complex apps and proprietary formats. A folder of markdown files, a good editor, and a simple naming convention is all you need for a knowledge system that lasts decades.", category: "Productivity", date: "Feb 12, 2026", readTime: "11 min read" },
    { title: "The Case Against Premature Abstraction", excerpt: "We have been conditioned to abstract early and often. But the best codebases I have worked in share a common trait: they tolerate duplication far longer than you would expect.", category: "Engineering", date: "Feb 5, 2026", readTime: "6 min read" },
    { title: "Designing for the Peripheral Gaze", excerpt: "Most interface design focuses on direct attention. But the most effective dashboards and monitoring tools are designed for the corner of your eye.", category: "Design", date: "Jan 29, 2026", readTime: "7 min read" },
    { title: "What I Learned from 500 Technical Interviews", excerpt: "After five years of conducting interviews at a growing startup, I have developed strong opinions about what actually predicts engineering success and what is just noise.", category: "Career", date: "Jan 22, 2026", readTime: "9 min read" },
  ];

  const categories = ["All", "Engineering", "Design", "Productivity", "Career", "Opinion"];

  const tocItems = ["Server Components", "Typography", "Plain Text Systems", "Abstraction Patterns", "Peripheral Design", "Interview Insights"];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>

      {/* Nav */}
      <nav className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight text-slate-900">the notebook</span>
          <div className="hidden md:flex items-center space-x-8">
            {["Writing", "Archive", "About", "Subscribe"].map((link) => (
              <span key={link} className="text-sm text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">{link}</span>
            ))}
          </div>
          <div className="md:hidden text-sm text-slate-500 cursor-pointer">Menu</div>
        </div>
      </nav>

      {/* Hero / Featured */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">Featured Essay</p>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.15] max-w-3xl tracking-tight">
          The Quiet Revolution of Server Components
        </h1>
        <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl font-light">
          React Server Components are fundamentally changing how we think about data fetching, bundle sizes, and the boundary between client and server. Here is what two years of production use has taught us.
        </p>
        <div className="mt-6 flex items-center space-x-4 text-sm text-slate-400">
          <span>Feb 24, 2026</span>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <span>8 min read</span>
          <span className="w-1 h-1 bg-slate-300 rounded-full" />
          <span>Engineering</span>
        </div>
        <div className="mt-8 h-px bg-slate-100" />
      </section>

      {/* Content: Posts + Sidebar */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Post List */}
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-8">Recent Writing</p>
            <div className="space-y-0">
              {posts.map((post, i) => (
                <div key={i} className="py-8 border-b border-slate-50 group cursor-pointer">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-xs text-slate-400">{post.category}</span>
                    <span className="w-1 h-1 bg-slate-200 rounded-full" />
                    <span className="text-xs text-slate-400">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed font-light line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 text-xs text-slate-300">{post.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-20 space-y-10">
              {/* TOC */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">On This Page</p>
                <div className="space-y-2">
                  {tocItems.map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 group cursor-pointer">
                      <span className="text-xs text-slate-300 font-mono">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-sm text-slate-500 group-hover:text-slate-900 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">Categories</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <span key={cat} className="text-xs px-3 py-1.5 text-slate-500 border border-slate-100 hover:border-slate-300 hover:text-slate-900 transition-colors cursor-pointer">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Newsletter</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 font-light">
                  A weekly letter on building software with care. No spam, unsubscribe anytime.
                </p>
                <div className="flex flex-col space-y-2">
                  <div className="h-10 border border-slate-200 flex items-center px-3">
                    <span className="text-sm text-slate-300">your@email.com</span>
                  </div>
                  <div className="h-10 bg-slate-900 text-white text-sm flex items-center justify-center cursor-pointer hover:bg-slate-800 transition-colors">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Reading Recommendation */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-6">If You Enjoyed This</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "On Naming Things Well", date: "Jan 15, 2026", category: "Engineering" },
              { title: "The Slow Web Movement", date: "Jan 8, 2026", category: "Opinion" },
              { title: "Refactoring as a Thinking Tool", date: "Dec 29, 2025", category: "Engineering" },
            ].map((rec, i) => (
              <div key={i} className="group cursor-pointer">
                <span className="text-xs text-slate-300 font-mono">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-slate-600 transition-colors">
                  {rec.title}
                </h4>
                <p className="mt-1 text-xs text-slate-400">{rec.category} &middot; {rec.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <span className="text-sm font-semibold text-slate-900 tracking-tight">the notebook</span>
            <p className="mt-1 text-xs text-slate-400">Thoughts on building software with intention.</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            {["RSS", "Twitter", "GitHub", "Email"].map((link) => (
              <span key={link} className="text-xs text-slate-400 hover:text-slate-900 transition-colors cursor-pointer">{link}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
