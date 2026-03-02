export default function LegalBrutalistDemo() {
  const practiceAreas = [
    { area: "CRIMINAL DEFENSE", desc: "Felonies. Misdemeanors. Federal charges. We show up when it matters most and fight with everything we have." },
    { area: "PERSONAL INJURY", desc: "Catastrophic injuries. Wrongful death. Medical malpractice. We do not settle for less than you deserve." },
    { area: "CIVIL RIGHTS", desc: "Police misconduct. Discrimination. Constitutional violations. We hold power accountable." },
    { area: "FAMILY LAW", desc: "Custody battles. Divorce. Protection orders. We protect what matters to you." },
  ]

  const attorneys = [
    { name: "MARCUS COLE", role: "Founding Partner", cases: "400+ trials", bar: "NY, NJ, DC" },
    { name: "ELENA VOSS", role: "Senior Litigator", cases: "250+ trials", bar: "CA, OR, WA" },
    { name: "RAFAEL TORRES", role: "Trial Attorney", cases: "150+ trials", bar: "TX, FL, IL" },
  ]

  const stats = [
    { number: "$340M+", label: "RECOVERED FOR CLIENTS" },
    { number: "97%", label: "CASE SUCCESS RATE" },
    { number: "800+", label: "CASES TRIED" },
    { number: "25", label: "YEARS IN THE FIGHT" },
  ]

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "JetBrains Mono, monospace" }}>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="border-b-2 border-white">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold uppercase tracking-wider">COLE_VOSS_LAW</span>
          <div className="hidden md:flex space-x-6">
            {["Cases", "Attorneys", "Results", "Retainer"].map((item) => (
              <span key={item} className="text-sm font-bold uppercase underline underline-offset-4 hover:text-red-500 cursor-pointer transition-colors">{item}</span>
            ))}
          </div>
          <span className="text-sm font-bold uppercase bg-white text-black px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer transition-colors">CALL NOW</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-7xl md:text-9xl font-extrabold leading-none uppercase">
          WE FIGHT.<br /><span className="text-red-500">YOU WIN.</span>
        </h1>
        <p className="text-base mt-10 max-w-lg border-l-4 border-red-500 pl-4 text-white/70">
          No billboards. No gimmicks. Just 25 years of relentless courtroom advocacy for people who have been wronged.
        </p>
      </section>

      {/* Practice Areas */}
      <section className="border-t-2 border-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold uppercase border-b-2 border-white pb-4 mb-12">PRACTICE_AREAS_</h2>
          <div className="space-y-0">
            {practiceAreas.map((pa) => (
              <div key={pa.area} className="border-b border-white/20 py-8 hover:bg-white/5 transition-colors px-2">
                <h3 className="text-2xl font-bold uppercase">{pa.area}</h3>
                <p className="text-sm text-white/50 mt-2 max-w-2xl">{pa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorneys */}
      <section className="bg-white text-black py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold uppercase border-b-4 border-black pb-4 mb-12">THE_TEAM_</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {attorneys.map((att) => (
              <div key={att.name} className="border-2 border-black p-8 hover:bg-black hover:text-white transition-colors group">
                <div className="w-20 h-20 bg-black group-hover:bg-red-500 mb-6 transition-colors" />
                <h3 className="text-xl font-bold uppercase">{att.name}</h3>
                <p className="text-sm font-bold uppercase text-black/50 group-hover:text-white/50 mt-1">{att.role}</p>
                <div className="mt-4 pt-4 border-t border-black/20 group-hover:border-white/20">
                  <p className="text-xs font-bold uppercase">{att.cases}</p>
                  <p className="text-xs text-black/40 group-hover:text-white/40 mt-1">BARS: {att.bar}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t-2 border-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold uppercase mb-16">THE_NUMBERS_</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((stat) => (
              <div key={stat.label} className="border border-white/20 p-8 text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-red-500">{stat.number}</p>
                <p className="text-xs font-bold uppercase text-white/50 mt-3 tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Results */}
      <section className="bg-red-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold uppercase mb-12">RECENT_WINS_</h2>
          <div className="space-y-6">
            {[
              { case: "State v. Hendricks", result: "ALL CHARGES DISMISSED", detail: "Federal racketeering charges dropped after 14-month defense campaign" },
              { case: "Martinez v. City of Newark", result: "$12.5M VERDICT", detail: "Civil rights violation stemming from unlawful detention and excessive force" },
              { case: "Thompson Family Trust", result: "FULL RECOVERY", detail: "Estate fraud case resulting in complete restitution of $8.3M in misappropriated assets" },
            ].map((c) => (
              <div key={c.case} className="border-2 border-white p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <span className="text-lg font-bold uppercase">{c.case}</span>
                  <span className="text-sm font-bold uppercase bg-white text-red-500 px-3 py-1 inline-block w-fit">{c.result}</span>
                </div>
                <p className="text-sm text-white/70 mt-2">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retainer */}
      <section className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold uppercase">READY TO<br /><span className="text-red-500">FIGHT BACK?</span></h2>
        <p className="text-sm text-white/50 mt-6 max-w-md mx-auto">
          Free initial consultation. No fee unless we win. We take cases other firms are afraid to touch.
        </p>
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
          <span className="inline-block px-10 py-4 text-sm font-bold uppercase bg-red-500 text-white border-2 border-red-500 hover:bg-white hover:text-black cursor-pointer transition-colors">(212) 555-0199</span>
          <span className="inline-block px-10 py-4 text-sm font-bold uppercase border-2 border-white hover:bg-white hover:text-black cursor-pointer transition-colors">REQUEST RETAINER</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-white">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="text-sm font-bold uppercase">COLE_VOSS_LAW</span>
          <span className="text-xs text-white/40">Attorney advertising. Prior results do not guarantee a similar outcome.</span>
          <span className="text-xs font-bold uppercase text-white/50">&copy; 2026 COLE &amp; VOSS LLP</span>
        </div>
      </footer>
    </div>
  )
}
