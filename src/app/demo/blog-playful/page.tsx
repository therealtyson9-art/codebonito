export const dynamic = "force-dynamic";
export default function BlogPlayfulDemo() {
  const tags = ["All", "Creativity", "Focus", "Habits", "Mindset", "Tools", "Journaling", "Collaboration"];

  const trendingArticles = [
    {
      title: "The 20-Minute Rule That Changed How I Start My Day",
      excerpt: "Before coffee, before email, before anything. Twenty minutes of unstructured thinking transformed my creative output for the rest of the day.",
      tag: "Habits",
      author: "Mika Santos",
      initials: "MS",
      date: "Feb 28",
      readTime: "5 min",
      color: "#fce7f3",
    },
    {
      title: "Why Your Best Ideas Come in the Shower (and How to Capture Them)",
      excerpt: "Neuroscience explains why relaxation triggers insight. Plus, seven practical ways to catch those fleeting sparks before they disappear.",
      tag: "Creativity",
      author: "Theo Park",
      initials: "TP",
      date: "Feb 24",
      readTime: "7 min",
      color: "#dbeafe",
    },
    {
      title: "Building a Second Brain Without Fancy Software",
      excerpt: "Index cards, a pocket notebook, and a weekly review session. Sometimes the simplest system is the one that actually sticks.",
      tag: "Tools",
      author: "Zara Obi",
      initials: "ZO",
      date: "Feb 20",
      readTime: "9 min",
      color: "#fef3c7",
    },
  ];

  const tipsGrid = [
    { title: "Morning Pages", description: "Write three pages longhand every morning. No editing, no judgment. Just let the thoughts flow.", icon: "~" },
    { title: "Pomodoro Remix", description: "Try 25 minutes of focus, then 5 minutes of doodling. The creative break makes the next sprint sharper.", icon: "@" },
    { title: "Idea Compost", description: "Keep a messy notes file. Bad ideas decompose into nutrients for good ones. Nothing is wasted.", icon: "#" },
    { title: "Walk and Talk", description: "Record voice memos while walking. Movement unlocks verbal fluency that sitting at a desk never will.", icon: "&" },
  ];

  const readerFavorites = [
    { title: "How I Read 52 Books Last Year Without Speed Reading", author: "Nina Johansson", readTime: "6 min" },
    { title: "The Creativity Myth: You Are Already Creative", author: "Dev Patel", readTime: "4 min" },
    { title: "Why Boredom Is Your Brain's Best Friend", author: "Camille Rousseau", readTime: "5 min" },
  ];

  return (
    <div style={{ fontFamily: "'Lexend', sans-serif", backgroundColor: "#f3e8ff", color: "#1e1b4b" }} className="min-h-screen">
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Tag Cloud Nav */}
      <nav className="px-6 py-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold" style={{ color: "#6366f1" }}>BrainSpark</h1>
            <button className="text-sm font-medium px-4 py-2 rounded-full text-white" style={{ backgroundColor: "#6366f1" }}>
              Subscribe
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors"
                style={i === 0
                  ? { backgroundColor: "#6366f1", color: "#ffffff" }
                  : { backgroundColor: "#ede9fe", color: "#6366f1" }
                }
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* Card Stack Hero */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="relative">
          <div className="absolute top-4 left-4 right-4 h-48 rounded-2xl opacity-40" style={{ backgroundColor: "#c4b5fd", transform: "rotate(-2deg)" }} />
          <div className="absolute top-2 left-2 right-2 h-48 rounded-2xl opacity-60" style={{ backgroundColor: "#a78bfa", transform: "rotate(1deg)" }} />
          <div className="relative rounded-2xl p-8 md:p-12 text-white" style={{ backgroundColor: "#6366f1" }}>
            <span className="text-xs font-semibold tracking-wider uppercase opacity-80">Featured This Week</span>
            <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-4 leading-tight">
              The Science of Creative Blocks (and 5 Evidence-Based Ways to Break Through)
            </h2>
            <p className="text-sm opacity-90 max-w-2xl leading-relaxed mb-6">
              Creative blocks are not a failure of willpower. They are a neurological signal that your
              default mode network needs a different kind of input. We spoke with cognitive scientists,
              artists, and writers to compile the most effective strategies for getting unstuck.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">LW</div>
              <span className="text-xs opacity-80">Luna Wei &middot; March 1 &middot; 11 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Articles */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-lg font-semibold mb-6" style={{ color: "#6366f1" }}>Trending This Week</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {trendingArticles.map((article, i) => (
            <article key={i} className="rounded-xl p-6 cursor-pointer hover:shadow-lg transition-shadow" style={{ backgroundColor: article.color }}>
              <span className="inline-block text-xs font-medium px-2 py-1 rounded-full mb-3" style={{ backgroundColor: "#6366f1", color: "#ffffff" }}>
                {article.tag}
              </span>
              <h4 className="text-base font-semibold mb-2 leading-snug">{article.title}</h4>
              <p className="text-sm leading-relaxed opacity-70 mb-4">{article.excerpt}</p>
              <div className="flex items-center gap-2 text-xs opacity-60">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#6366f1" }}>
                  {article.initials}
                </div>
                <span>{article.author}</span>
                <span>&middot;</span>
                <span>{article.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Creativity Tips Grid */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h3 className="text-lg font-semibold mb-6" style={{ color: "#6366f1" }}>Quick Creativity Tips</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tipsGrid.map((tip, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border" style={{ borderColor: "#e9d5ff" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold text-white mb-3" style={{ backgroundColor: "#6366f1" }}>
                {tip.icon}
              </div>
              <h4 className="text-sm font-semibold mb-2">{tip.title}</h4>
              <p className="text-xs leading-relaxed opacity-60">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reader Favorites */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <h3 className="text-lg font-semibold mb-6" style={{ color: "#6366f1" }}>Reader Favorites</h3>
        <div className="space-y-3">
          {readerFavorites.map((fav, i) => (
            <div key={i} className="bg-white rounded-xl px-6 py-4 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow border" style={{ borderColor: "#e9d5ff" }}>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold opacity-20">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4 className="text-sm font-semibold">{fav.title}</h4>
                  <p className="text-xs opacity-50">{fav.author} &middot; {fav.readTime}</p>
                </div>
              </div>
              <span className="text-xs font-medium" style={{ color: "#6366f1" }}>Read</span>
            </div>
          ))}
        </div>
      </section>

      {/* Poll / Quiz CTA */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="rounded-2xl p-8 text-center text-white" style={{ backgroundColor: "#6366f1" }}>
          <h3 className="text-xl font-bold mb-2">Quick Poll</h3>
          <p className="text-sm opacity-80 mb-6">When do you feel most creative?</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Early morning", "Late at night", "During exercise", "In the shower"].map((option) => (
              <button key={option} className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-white/20 hover:bg-white/30">
                {option}
              </button>
            ))}
          </div>
          <p className="text-xs opacity-50 mt-4">1,847 votes so far this week</p>
        </div>
      </section>

      {/* Subscribe */}
      <section className="max-w-md mx-auto px-6 py-10 text-center">
        <h3 className="text-xl font-bold mb-2" style={{ color: "#6366f1" }}>Get your weekly spark</h3>
        <p className="text-sm opacity-60 mb-6">One creative idea, one focus tip, and one tool recommendation. Every Tuesday.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input type="email" placeholder="you@email.com" className="flex-1 px-4 py-2.5 text-sm rounded-full border focus:outline-none" style={{ borderColor: "#c4b5fd" }} />
          <button className="px-6 py-2.5 text-sm font-medium rounded-full text-white" style={{ backgroundColor: "#6366f1" }}>
            Join 19k readers
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-8 text-center">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {["Creativity", "Focus", "Habits", "Mindset", "Tools"].map((t) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "#ede9fe", color: "#6366f1" }}>{t}</span>
          ))}
        </div>
        <p className="text-xs opacity-40">&copy; 2026 BrainSpark. Made with curiosity.</p>
      </footer>
    </div>
  );
}
