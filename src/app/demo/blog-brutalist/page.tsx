export default function BlogBrutalistDemo() {
  const posts = [
    { id: "001", title: "WEBASSEMBLY IS EATING THE BROWSER", category: "SYSTEMS", date: "2026-02-26", size: "4.2KB", excerpt: "The compile target nobody asked for is quietly becoming the runtime everybody needs. From Figma to Google Earth, WASM is rewriting what the browser can do." },
    { id: "002", title: "DEATH OF THE PIXEL-PERFECT MOCKUP", category: "PROCESS", date: "2026-02-20", size: "3.8KB", excerpt: "Static design files are a communication bottleneck. The future is designing in code, in the browser, with real data. Here is how our team made the switch." },
    { id: "003", title: "YOUR DEPENDENCIES ARE A LIABILITY", category: "SECURITY", date: "2026-02-14", size: "5.1KB", excerpt: "Every npm install is a trust decision. After auditing 200 production apps, the average project has 47 transitive dependencies with known vulnerabilities." },
    { id: "004", title: "SQLITE IN PRODUCTION: A FIELD REPORT", category: "DATABASES", date: "2026-02-08", size: "6.3KB", excerpt: "We migrated our SaaS from Postgres to SQLite running on Fly.io. Latency dropped 80 percent. Here is everything that went right and wrong." },
    { id: "005", title: "THE INTERNET USED TO BE FUN", category: "OPINION", date: "2026-02-01", size: "2.9KB", excerpt: "Somewhere between Web 2.0 and the algorithm age, we traded personal homepages and webrings for engagement metrics and infinite scroll." },
    { id: "006", title: "MONOREPOS CONSIDERED HARMFUL", category: "TOOLING", date: "2026-01-25", size: "4.7KB", excerpt: "The monorepo trend conflates organizational problems with technical solutions. Most teams adopting monorepos are solving the wrong problem." },
  ];

  const categories = ["ALL", "SYSTEMS", "PROCESS", "SECURITY", "DATABASES", "OPINION", "TOOLING"];

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'Space Mono', monospace" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>

      {/* Nav */}
      <nav className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="text-sm font-bold tracking-widest">RAW.TXT</span>
          <div className="hidden md:flex items-center space-x-6">
            {["INDEX", "ARCHIVE", "ABOUT", "RSS"].map((link) => (
              <span key={link} className="text-xs tracking-widest hover:bg-black hover:text-white px-2 py-1 transition-colors cursor-pointer">{link}</span>
            ))}
          </div>
          <span className="md:hidden text-xs tracking-widest cursor-pointer">[MENU]</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-baseline space-x-4 mb-6">
            <span className="text-xs tracking-widest text-black/50">FILE://FEATURED</span>
            <span className="text-xs tracking-widest text-black/50">{posts[0].date}</span>
            <span className="text-xs tracking-widest text-black/50">{posts[0].size}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-none tracking-tight uppercase">
            {posts[0].title}
          </h1>
          <p className="mt-6 text-sm leading-relaxed max-w-2xl text-black/70">
            {posts[0].excerpt}
          </p>
          <div className="mt-6 inline-block border-2 border-black px-4 py-2 text-xs tracking-widest font-bold hover:bg-black hover:text-white transition-colors cursor-pointer">
            READ_FILE &gt;
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-0">
          {categories.map((cat, i) => (
            <span key={cat} className={`text-xs tracking-widest px-4 py-2 cursor-pointer border-r-2 border-black last:border-r-0 ${i === 0 ? "bg-black text-white font-bold" : "hover:bg-black/5"}`}>
              [{cat}]
            </span>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {posts.map((post, i) => (
            <div key={post.id} className={`border-2 border-black p-6 cursor-pointer hover:bg-black hover:text-white transition-colors group ${i % 2 === 0 ? "md:border-r-0" : ""} ${i < posts.length - 2 ? "border-b-0 md:border-b-2" : ""} ${i < posts.length - 1 ? "border-b-0 md:border-b-2" : ""}`} style={{ borderBottom: i >= posts.length - 2 ? "2px solid black" : "0", ...(i < posts.length - 2 ? {} : {}) }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-widest text-black/40 group-hover:text-white/50">#{post.id}</span>
                <span className="text-xs tracking-widest text-black/40 group-hover:text-white/50">{post.size}</span>
              </div>
              <div className="text-xs tracking-widest mb-3 font-bold">[{post.category}]</div>
              <h3 className="text-lg font-bold leading-tight uppercase mb-3">{post.title}</h3>
              <p className="text-xs leading-relaxed text-black/60 group-hover:text-white/70 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest text-black/40 group-hover:text-white/50">{post.date}</span>
                <span className="text-xs tracking-widest font-bold">&gt;&gt;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t-4 border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="border-2 border-black p-8">
            <pre className="text-xs text-black/50 mb-4">$ cat /subscribe.txt</pre>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-2">JOIN THE FEED</h2>
            <p className="text-sm text-black/60 mb-6 max-w-lg">Raw, unfiltered dispatches about systems, tools, and the craft of building software. Delivered to your terminal. No tracking pixels.</p>
            <div className="flex flex-col sm:flex-row gap-0 max-w-md">
              <div className="flex-1 border-2 border-black h-12 flex items-center px-4">
                <span className="text-sm text-black/30">user@domain.com_</span>
              </div>
              <div className="border-2 border-black border-l-0 sm:border-l-0 border-t-0 sm:border-t-2 h-12 px-6 flex items-center justify-center bg-black text-white text-xs tracking-widest font-bold cursor-pointer hover:bg-white hover:text-black transition-colors">
                SUBSCRIBE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <pre className="text-xs text-black/40 leading-loose">
{`$ ls -la /archive/
total ${posts.length}
${posts.map((p) => `drwxr-xr-x  ${p.date}  ${p.size.padEnd(8)} ${p.title.toLowerCase().replace(/ /g, "-").slice(0, 40)}.md`).join("\n")}`}
        </pre>
      </section>

      {/* Stats Bar */}
      <section className="border-t-2 border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-0">
          {[
            { label: "POSTS", value: "127" },
            { label: "WORDS", value: "284K" },
            { label: "READERS", value: "9.2K" },
            { label: "UPTIME", value: "99.97%" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`py-6 px-4 ${i < 3 ? "border-r-2 border-black" : ""} text-center`}
            >
              <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
              <div className="text-xs tracking-widest text-black/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Dispatches */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-xs tracking-widest text-black/40 mb-6">$ tail -3 /dispatches.log</div>
        <div className="space-y-4">
          {[
            { msg: "Shipped a new post on WASM runtime performance benchmarks", ts: "2026-02-26 14:32:01 UTC" },
            { msg: "Fixed broken links in the dependency audit article", ts: "2026-02-22 09:17:44 UTC" },
            { msg: "Updated SQLite field report with six-month follow-up data", ts: "2026-02-15 21:08:12 UTC" },
          ].map((entry, i) => (
            <div key={i} className="flex items-start space-x-4">
              <span className="text-xs tracking-widest text-black/30 whitespace-nowrap">{entry.ts}</span>
              <span className="text-xs text-black/60">{entry.msg}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-xs tracking-widest font-bold">RAW.TXT</span>
            <p className="text-xs text-black/40 mt-1">NO COOKIES. NO TRACKERS. JUST TEXT.</p>
          </div>
          <div className="flex items-center space-x-4">
            {["SRC", "RSS", "PGP", "COLOPHON"].map((link) => (
              <span key={link} className="text-xs tracking-widest text-black/40 hover:text-black cursor-pointer">[{link}]</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
