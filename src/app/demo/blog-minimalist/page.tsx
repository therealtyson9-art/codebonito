export default function BlogMinimalistDemo() {
  const recentArticles = [
    {
      title: "On Letting Go of Productivity Guilt",
      excerpt: "We have been conditioned to measure our worth by output. But what happens when we stop counting and start noticing?",
      date: "Feb 26, 2026",
      readTime: "7 min read",
    },
    {
      title: "A Week Without Screens After Sunset",
      excerpt: "I replaced my evening scroll with candlelight, handwriting, and long conversations. The first three days were unbearable.",
      date: "Feb 19, 2026",
      readTime: "5 min read",
    },
    {
      title: "The Case for Doing One Thing at a Time",
      excerpt: "Multitasking is not a skill. It is a coping mechanism for a culture that confuses busyness with meaning.",
      date: "Feb 12, 2026",
      readTime: "6 min read",
    },
    {
      title: "Why I Stopped Meal Prepping and Started Cooking",
      excerpt: "Efficiency had turned my kitchen into a factory. Slowing down turned it back into a place of nourishment.",
      date: "Feb 5, 2026",
      readTime: "8 min read",
    },
    {
      title: "Walking as a Creative Practice",
      excerpt: "Nietzsche, Thoreau, and Woolf all knew it. The best ideas arrive on foot, never at a desk.",
      date: "Jan 29, 2026",
      readTime: "4 min read",
    },
  ];

  return (
    <div style={{ fontFamily: "'Spectral', serif", backgroundColor: "#faf8f5", color: "#57534e" }} className="min-h-screen">
      <link
        href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
        rel="stylesheet"
      />

      {/* Logo Header */}
      <header className="pt-12 pb-8 text-center">
        <p className="text-sm tracking-[0.3em] uppercase" style={{ color: "#a8a29e" }}>
          Est. 2023
        </p>
        <h1 className="text-4xl md:text-5xl font-light mt-2 tracking-tight" style={{ color: "#44403c" }}>
          The Analog
        </h1>
        <p className="mt-2 text-sm italic" style={{ color: "#a8a29e" }}>
          A journal for slower living
        </p>
        <div className="w-12 h-px mx-auto mt-6" style={{ backgroundColor: "#d6d3d1" }} />
      </header>

      {/* Large Title Hero Post */}
      <section className="max-w-2xl mx-auto px-6 py-16 text-center">
        <p className="text-xs tracking-[0.2em] uppercase mb-6" style={{ color: "#a8a29e" }}>
          Latest Essay
        </p>
        <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6" style={{ color: "#44403c" }}>
          The Quiet Art of Paying Attention
        </h2>
        <p className="text-lg leading-relaxed font-light max-w-xl mx-auto mb-8">
          In a world engineered for distraction, the ability to simply notice what is in front of you has become
          a radical act. This essay explores how reclaiming your attention changes not just what you see, but
          who you become. From morning rituals to the practice of boredom, we trace the path back to presence.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm" style={{ color: "#a8a29e" }}>
          <span>March 1, 2026</span>
          <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#d6d3d1" }} />
          <span>12 min read</span>
        </div>
        <a href="#" className="inline-block mt-8 text-sm tracking-wide border-b pb-1 transition-colors" style={{ color: "#78716c", borderColor: "#d6d3d1" }}>
          Continue Reading
        </a>
      </section>

      <div className="w-16 h-px mx-auto" style={{ backgroundColor: "#d6d3d1" }} />

      {/* Recent Articles */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h3 className="text-xs tracking-[0.2em] uppercase text-center mb-12" style={{ color: "#a8a29e" }}>
          Recent Writing
        </h3>
        <div className="space-y-10">
          {recentArticles.map((article, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="flex items-baseline justify-between mb-2">
                <h4 className="text-xl font-normal group-hover:underline" style={{ color: "#44403c" }}>
                  {article.title}
                </h4>
              </div>
              <p className="text-base font-light leading-relaxed mb-3">
                {article.excerpt}
              </p>
              <div className="flex gap-3 text-xs" style={{ color: "#a8a29e" }}>
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              {i < recentArticles.length - 1 && (
                <div className="w-full h-px mt-10" style={{ backgroundColor: "#e7e5e4" }} />
              )}
            </article>
          ))}
        </div>
      </section>

      <div className="w-16 h-px mx-auto" style={{ backgroundColor: "#d6d3d1" }} />

      {/* About the Writer */}
      <section className="max-w-xl mx-auto px-6 py-16 text-center">
        <h3 className="text-xs tracking-[0.2em] uppercase mb-8" style={{ color: "#a8a29e" }}>
          About the Writer
        </h3>
        <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-xl font-light" style={{ backgroundColor: "#e7e5e4", color: "#78716c" }}>
          EM
        </div>
        <h4 className="text-2xl font-light mb-4" style={{ color: "#44403c" }}>
          Elena Moreno
        </h4>
        <p className="text-base font-light leading-relaxed mb-4">
          I write about attention, rest, and the things we overlook when we move too fast. After a decade
          in advertising, I left to study contemplative psychology and have been writing from a small
          town in Portugal ever since. The Analog is my attempt to share what slowing down has taught me.
        </p>
        <p className="text-sm italic" style={{ color: "#a8a29e" }}>
          Author of &ldquo;Stillness Is Not Laziness&rdquo; (Riverhead Books, 2025)
        </p>
      </section>

      <div className="w-16 h-px mx-auto" style={{ backgroundColor: "#d6d3d1" }} />

      {/* Newsletter Subscribe */}
      <section className="max-w-md mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-light mb-3" style={{ color: "#44403c" }}>
          Letters from The Analog
        </h3>
        <p className="text-sm font-light mb-8" style={{ color: "#a8a29e" }}>
          A short essay delivered every Sunday morning. No links, no promotions. Just words worth sitting with.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 text-sm border rounded-none focus:outline-none"
            style={{ borderColor: "#d6d3d1", backgroundColor: "transparent", color: "#57534e" }}
          />
          <button
            className="px-6 py-3 text-sm tracking-wide transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#57534e", color: "#faf8f5" }}
          >
            Subscribe
          </button>
        </div>
        <p className="text-xs mt-4" style={{ color: "#a8a29e" }}>
          Join 12,400 readers. Unsubscribe anytime.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="w-8 h-px mx-auto mb-6" style={{ backgroundColor: "#d6d3d1" }} />
        <p className="text-xs tracking-wide" style={{ color: "#a8a29e" }}>
          The Analog &copy; 2026
        </p>
        <p className="text-xs mt-2" style={{ color: "#d6d3d1" }}>
          Written with care in Cascais, Portugal
        </p>
      </footer>
    </div>
  );
}
