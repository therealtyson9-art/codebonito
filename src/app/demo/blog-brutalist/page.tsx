export const dynamic = "force-dynamic";
export default function BlogBrutalistDemo() {
  const recentIssues = [
    { id: "047", title: "APPLE KILLED THE HOME SCREEN AND NOBODY NOTICED", date: "2026-02-28", size: "3.9KB", tag: "MOBILE" },
    { id: "046", title: "THE VC FUNDING WINTER IS OVER. THE ICE AGE IS NOT.", date: "2026-02-21", size: "5.2KB", tag: "STARTUPS" },
    { id: "045", title: "WHY EVERY DATABASE COMPANY NOW SELLS AI", date: "2026-02-14", size: "4.1KB", tag: "INFRA" },
    { id: "044", title: "REMOTE WORK WON. MIDDLE MANAGEMENT LOST.", date: "2026-02-07", size: "3.6KB", tag: "CULTURE" },
    { id: "043", title: "RUST IN PRODUCTION: A TWO-YEAR POSTMORTEM", date: "2026-01-31", size: "6.8KB", tag: "SYSTEMS" },
    { id: "042", title: "THE SAAS PRICING PAGE IS A DARK PATTERN", date: "2026-01-24", size: "4.4KB", tag: "PRODUCT" },
  ];

  const hotTakes = [
    { take: "TypeScript strict mode should be the only mode.", author: "R. Vasquez" },
    { take: "Most microservices architectures are distributed monoliths with extra latency.", author: "K. Otieno" },
    { take: "The best documentation is the code you did not have to write.", author: "J. Lindqvist" },
    { take: "AI code assistants are making junior devs faster and senior devs lazier.", author: "M. Tanaka" },
  ];

  return (
    <div style={{ fontFamily: "'Courier Prime', monospace", backgroundColor: "#ffffff", color: "#1a1a1a" }} className="min-h-screen">
      <link
        href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />

      {/* Typewriter Nav */}
      <nav className="border-b-2 border-black px-6 py-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">THE DAILY BYTE</div>
          <div className="flex gap-6 text-xs font-bold tracking-wider">
            <a href="#" className="hover:line-through">ISSUES</a>
            <a href="#" className="hover:line-through">HOT_TAKES</a>
            <a href="#" className="hover:line-through">ABOUT.TXT</a>
            <a href="#" className="hover:line-through" style={{ color: "#b91c1c" }}>SUBSCRIBE</a>
          </div>
        </div>
      </nav>

      {/* Newspaper Layout Hero */}
      <section className="max-w-5xl mx-auto px-6 py-10 border-b-2 border-black">
        <div className="text-xs mb-4" style={{ color: "#b91c1c" }}>
          // ISSUE #048 &mdash; MARCH 01, 2026 &mdash; 5.7KB
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 uppercase">
              THE BROWSER IS THE NEW OPERATING SYSTEM AND CHROME IS ITS MONOPOLY
            </h1>
            <p className="text-base leading-relaxed mb-4">
              Google Chrome controls 65 percent of the global browser market. With WebGPU, WebNN, and
              origin trials for hardware APIs, Chrome is no longer just rendering web pages. It is
              becoming the runtime layer for the next generation of applications, and the DOJ antitrust
              ruling may be the only thing standing between Google and total platform lock-in.
            </p>
            <p className="text-base leading-relaxed">
              This week we break down the technical implications, interview three browser engine
              engineers, and ask the question nobody in Mountain View wants to answer: what happens
              when the web itself has a single vendor?
            </p>
          </div>
          <div className="border-l-2 border-black pl-6 hidden md:block">
            <div className="text-xs font-bold mb-4" style={{ color: "#b91c1c" }}>ALSO IN THIS ISSUE:</div>
            <ul className="space-y-4 text-sm">
              <li className="border-b border-gray-300 pb-3">
                <span className="font-bold">EU AI Act enforcement begins.</span> First fines expected by Q3. Compliance costs estimated at $2.4M per enterprise.
              </li>
              <li className="border-b border-gray-300 pb-3">
                <span className="font-bold">Deno 5 ships with npm compat.</span> The Node.js alternative bets everything on backwards compatibility.
              </li>
              <li className="pb-3">
                <span className="font-bold">Stack Overflow traffic down 38% YoY.</span> AI assistants are the new first stop for developer questions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recent Issues */}
      <section className="max-w-5xl mx-auto px-6 py-10 border-b-2 border-black">
        <h2 className="text-xs font-bold tracking-wider mb-6" style={{ color: "#b91c1c" }}>
          $ ls -la /archive/recent/
        </h2>
        <div className="space-y-0">
          {recentIssues.map((issue) => (
            <a key={issue.id} href="#" className="flex items-baseline justify-between py-3 border-b border-gray-200 hover:bg-gray-50 group px-2 -mx-2">
              <div className="flex items-baseline gap-4">
                <span className="text-xs" style={{ color: "#b91c1c" }}>#{issue.id}</span>
                <span className="text-sm font-bold group-hover:line-through">{issue.title}</span>
              </div>
              <div className="hidden sm:flex items-baseline gap-4 text-xs text-gray-400 shrink-0 ml-4">
                <span>{issue.tag}</span>
                <span>{issue.size}</span>
                <span>{issue.date}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Hot Takes */}
      <section className="max-w-5xl mx-auto px-6 py-10 border-b-2 border-black">
        <h2 className="text-xs font-bold tracking-wider mb-6" style={{ color: "#b91c1c" }}>
          $ cat /dev/hot-takes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {hotTakes.map((item, i) => (
            <div key={i} className="border-2 border-black p-5">
              <p className="text-base font-bold mb-3">&gt; &quot;{item.take}&quot;</p>
              <p className="text-xs text-gray-500">&mdash; {item.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto px-6 py-10 border-b-2 border-black">
        <h2 className="text-xs font-bold tracking-wider mb-6" style={{ color: "#b91c1c" }}>
          $ cat /about.txt
        </h2>
        <div className="max-w-2xl">
          <p className="text-sm leading-relaxed mb-4">
            The Daily Byte is a weekly technology newsletter that cuts through the hype cycle.
            No sponsored content. No affiliate links. No growth hacking. Just honest analysis
            of the systems, incentives, and decisions shaping the tech industry.
          </p>
          <p className="text-sm leading-relaxed">
            Written by a rotating cast of engineers, product leaders, and industry skeptics
            who have collectively shipped software to over 200 million users and regretted
            at least half of it. Published every Friday since 2023.
          </p>
        </div>
      </section>

      {/* Subscribe */}
      <section className="max-w-5xl mx-auto px-6 py-10 border-b-2 border-black">
        <h2 className="text-xs font-bold tracking-wider mb-6" style={{ color: "#b91c1c" }}>
          $ subscribe --format=email
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
          <input
            type="email"
            placeholder="dev@yourdomain.com"
            className="flex-1 px-4 py-3 text-sm border-2 border-black focus:outline-none"
            style={{ fontFamily: "'Courier Prime', monospace" }}
          />
          <button
            className="px-6 py-3 text-sm font-bold tracking-wider border-2 transition-colors"
            style={{ backgroundColor: "#b91c1c", borderColor: "#b91c1c", color: "#ffffff" }}
          >
            SEND
          </button>
        </div>
        <p className="text-xs mt-3 text-gray-400">
          28,700 subscribers. Fridays only. Unsubscribe: rm -rf /subscription
        </p>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-baseline justify-between text-xs text-gray-400">
          <span>THE DAILY BYTE &copy; 2026</span>
          <span>EOF</span>
        </div>
      </footer>
    </div>
  );
}
