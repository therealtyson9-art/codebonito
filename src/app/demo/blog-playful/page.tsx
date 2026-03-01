export default function BlogPlayfulDemo() {
  const articles = [
    { title: "Why Designers Should Learn to Code in 2024", tag: "Design", emoji: "🎨", color: "bg-pink-100", tagColor: "bg-pink-200 text-pink-700", author: "Luna Park", avatar: "LP", date: "Dec 12", readTime: "5 min" },
    { title: "The Ultimate Guide to Building Design Systems", tag: "Tutorial", emoji: "📐", color: "bg-violet-100", tagColor: "bg-violet-200 text-violet-700", author: "Max Chen", avatar: "MC", date: "Dec 10", readTime: "12 min" },
    { title: "My Journey from Freelancer to Agency Owner", tag: "Story", emoji: "🚀", color: "bg-amber-100", tagColor: "bg-amber-200 text-amber-700", author: "Zara Kim", avatar: "ZK", date: "Dec 8", readTime: "8 min" },
    { title: "CSS Container Queries Changed Everything", tag: "Code", emoji: "💻", color: "bg-cyan-100", tagColor: "bg-cyan-200 text-cyan-700", author: "Dev Patel", avatar: "DP", date: "Dec 5", readTime: "6 min" },
    { title: "Figma vs Framer: An Honest Comparison", tag: "Tools", emoji: "⚡", color: "bg-pink-100", tagColor: "bg-pink-200 text-pink-700", author: "Luna Park", avatar: "LP", date: "Dec 3", readTime: "10 min" },
    { title: "How I Grew My Newsletter to 50K Subscribers", tag: "Growth", emoji: "📈", color: "bg-violet-100", tagColor: "bg-violet-200 text-violet-700", author: "Zara Kim", avatar: "ZK", date: "Nov 30", readTime: "7 min" },
  ];

  const tags = ["All", "Design 🎨", "Tutorial 📐", "Story 🚀", "Code 💻", "Tools ⚡", "Growth 📈"];

  return (
    <div className="min-h-screen bg-amber-50" style={{ fontFamily: "Nunito, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>

      {/* Nav */}
      <nav className="bg-white/70 backdrop-blur-sm sticky top-0 z-50 border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">✨</span>
            <span className="text-xl font-extrabold text-violet-600">Pixel Blog</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-sm font-bold text-violet-500 cursor-pointer hover:text-pink-500 transition-colors">Home</span>
            <span className="text-sm font-bold text-slate-400 cursor-pointer hover:text-pink-500 transition-colors">Articles</span>
            <span className="text-sm font-bold text-slate-400 cursor-pointer hover:text-pink-500 transition-colors">Podcast</span>
            <span className="text-sm font-bold text-slate-400 cursor-pointer hover:text-pink-500 transition-colors">Resources</span>
          </div>
          <button className="h-10 px-6 text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl hover:shadow-lg hover:shadow-pink-200 transition-all">
            Subscribe 💌
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-2xl text-sm font-bold text-pink-600 mb-6">
          🔥 Trending in Design & Dev
        </div>
        <h1 className="text-4xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight">
          Stories, Tutorials &<br />
          <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-amber-500 bg-clip-text text-transparent">Creative Inspiration</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-xl mx-auto font-medium mb-8">
          A playful corner of the internet where designers and developers share what they&apos;ve learned. No fluff, just good stuff.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          {tags.map((tag, i) => (
            <button key={tag} className={`px-4 py-2 rounded-2xl text-sm font-bold transition-all ${i === 0 ? "bg-violet-500 text-white shadow-lg shadow-violet-200" : "bg-white text-slate-500 hover:bg-violet-100 hover:text-violet-600 border border-violet-100"}`}>
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="bg-gradient-to-br from-violet-500 to-pink-500 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-center">
          <div className="bg-white/20 rounded-2xl aspect-video lg:aspect-square lg:w-80 w-full flex items-center justify-center flex-shrink-0">
            <span className="text-white/50 text-sm font-bold">Featured Image</span>
          </div>
          <div>
            <span className="inline-flex items-center px-3 py-1 bg-white/20 rounded-2xl text-xs font-bold text-white mb-4">⭐ Editor&apos;s Pick</span>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">The State of Web Design in 2025: What&apos;s Next?</h2>
            <p className="text-white/70 font-medium mb-6 leading-relaxed">
              An in-depth look at emerging trends, tools, and techniques that will shape how we design and build for the web.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/30 flex items-center justify-center text-sm font-bold text-white">LP</div>
              <div>
                <p className="text-sm font-bold text-white">Luna Park</p>
                <p className="text-xs text-white/60">Dec 15 &middot; 15 min read</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-8">Latest Articles ✍️</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.title} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-violet-100 transition-all duration-300 cursor-pointer group border border-violet-50">
              <div className={`${article.color} aspect-[16/10] flex items-center justify-center`}>
                <span className="text-5xl group-hover:scale-125 transition-transform duration-300">{article.emoji}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2.5 py-1 rounded-2xl text-xs font-bold ${article.tagColor}`}>{article.tag}</span>
                  <span className="text-xs text-slate-400 font-medium">{article.readTime} read</span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-800 mb-3 leading-snug group-hover:text-violet-600 transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-violet-100 flex items-center justify-center text-[10px] font-bold text-violet-600">
                      {article.avatar}
                    </div>
                    <span className="text-xs font-bold text-slate-500">{article.author}</span>
                  </div>
                  <span className="text-xs text-slate-400">{article.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="h-12 px-8 text-sm font-bold text-violet-600 bg-violet-100 hover:bg-violet-200 rounded-2xl transition-colors">
            Load More Articles 📚
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white border-y border-pink-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-4xl mb-4 block">💌</span>
          <h2 className="text-3xl font-extrabold text-slate-800 mb-3">Get the Weekly Digest</h2>
          <p className="text-slate-500 font-medium mb-8 max-w-md mx-auto">
            Every Friday, the best articles curated into one delightful email. No spam, pinky promise.
          </p>
          <div className="flex justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 h-12 px-5 rounded-2xl bg-violet-50 border-2 border-violet-100 text-sm font-medium placeholder:text-violet-300 focus:outline-none focus:border-violet-300"
              readOnly
            />
            <button className="h-12 px-6 text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl hover:shadow-lg hover:shadow-pink-200 transition-all whitespace-nowrap">
              Join 12K+ ✨
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">✨</span>
            <span className="text-lg font-extrabold text-violet-600">Pixel Blog</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-slate-400 hover:text-pink-500 cursor-pointer transition-colors">Twitter</span>
            <span className="text-sm font-bold text-slate-400 hover:text-pink-500 cursor-pointer transition-colors">Instagram</span>
            <span className="text-sm font-bold text-slate-400 hover:text-pink-500 cursor-pointer transition-colors">YouTube</span>
            <span className="text-sm font-bold text-slate-400 hover:text-pink-500 cursor-pointer transition-colors">RSS</span>
          </div>
          <p className="text-sm text-slate-400 font-medium">&copy; 2024 Pixel Blog. Made with 💜</p>
        </div>
      </footer>
    </div>
  );
}
