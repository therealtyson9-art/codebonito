export default function LegalBrutalistDemo() {
  const practiceAreas = [
    { area: "TECH LITIGATION", desc: "Patent disputes. Trade secret theft. Software licensing wars. We litigate at the intersection of law and code." },
    { area: "DATA PRIVACY", desc: "GDPR. CCPA. HIPAA. Breach response. We defend companies when regulators come knocking and build compliance before they do." },
    { area: "STARTUP LAW", desc: "Incorporation. Cap tables. SAFEs. Series A through IPO. We have closed 400+ venture rounds and counting." },
    { area: "EMPLOYMENT", desc: "Non-competes. Wrongful termination. Trade secret injunctions. We handle the disputes that keep founders up at night." },
    { area: "CYBERCRIME DEFENSE", desc: "Federal CFAA charges. Wire fraud. Crypto enforcement actions. We defend technologists when the DOJ overreaches." },
    { area: "IP PROSECUTION", desc: "Patents. Trademarks. Copyright registration. Licensing. We protect what you build so others cannot take it." },
  ]

  const stats = [
    { number: "847", label: "CASES CLOSED" },
    { number: "$2.3B", label: "IN JUDGMENTS & SETTLEMENTS" },
    { number: "96%", label: "WIN RATE AT TRIAL" },
    { number: "12", label: "YEARS OPERATING" },
  ]

  const victories = [
    { case: "US v. Chen (2023)", desc: "Federal cybercrime prosecution. Client acquitted on all counts. The government alleged unauthorized access to a competitor's system. We proved the access was contractually permitted.", result: "NOT GUILTY" },
    { case: "NexTech v. Orion Systems (2023)", desc: "Trade secret misappropriation claim. Secured $47M verdict for client after a six-week trial. The jury found willful and malicious conduct.", result: "$47M VERDICT" },
    { case: "In re: Meridian Data Breach (2022)", desc: "Class action defense after a breach affecting 12M users. Negotiated settlement at 8% of plaintiff demand. No admission of liability.", result: "SETTLED — 92% REDUCTION" },
    { case: "Blackstone v. USPTO (2022)", desc: "Patent appeal before the Federal Circuit. Reversed examiner rejection on a novel blockchain consensus mechanism. Landmark ruling for crypto patents.", result: "REVERSED" },
  ]

  return (
    <div style={{ fontFamily: "'Roboto Mono', monospace", backgroundColor: "#111827" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Terminal Nav */}
      <nav style={{ borderBottom: "1px solid #fbbf24" }} className="py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <h1 style={{ color: "#fbbf24" }} className="text-lg font-bold tracking-widest">BLACKSTONE_LEGAL</h1>
          <div className="flex items-center gap-6">
            {["> practice", "> cases", "> the_firm", "> victories", "> contact"].map((link) => (
              <span key={link} style={{ color: "#fbbf24" }} className="text-xs font-medium cursor-pointer opacity-60 hover:opacity-100">{link}</span>
            ))}
          </div>
        </div>
      </nav>

      {/* Dense Paragraph Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div style={{ borderLeft: "3px solid #fbbf24" }} className="pl-6">
          <p style={{ color: "#fbbf24" }} className="text-xs font-bold tracking-widest mb-6">$ cat manifesto.txt</p>
          <p style={{ color: "#fbbf24" }} className="text-sm leading-loose opacity-80 max-w-4xl">
            BLACKSTONE LEGAL was founded in 2012 by trial attorneys who understood that technology
            disputes require technologists, not just lawyers. We are a litigation-first firm staffed
            by attorneys who read source code, understand network architectures, and have testified
            as expert witnesses before pivoting to advocacy. When a $2B patent troll targets your
            startup, when a regulator issues a subpoena for your server logs, when a former CTO walks
            out the door with your proprietary algorithms — we are the firm you call. We do not do
            billable-hour theater. We do not draft memos that gather dust. We build cases to win, and
            our 96% trial record proves it. Every engagement starts with a direct conversation with a
            partner. No intake coordinators. No junior associate filters. You talk to the person who
            will stand up in court and fight for you.
          </p>
        </div>
        <div className="mt-10 flex gap-4">
          <span style={{ backgroundColor: "#fbbf24", color: "#111827" }} className="px-6 py-3 text-xs font-bold tracking-widest cursor-pointer">RETAIN_COUNSEL</span>
          <span style={{ border: "1px solid #fbbf24", color: "#fbbf24" }} className="px-6 py-3 text-xs font-bold tracking-widest cursor-pointer">VIEW_RECORD</span>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section style={{ borderTop: "1px solid rgba(251,191,36,0.2)" }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p style={{ color: "#fbbf24" }} className="text-xs font-bold tracking-widest mb-10">$ ls practice_areas/</p>
          <div className="grid grid-cols-3 gap-4">
            {practiceAreas.map((pa) => (
              <div key={pa.area} style={{ border: "1px solid rgba(251,191,36,0.3)" }} className="p-5">
                <h4 style={{ color: "#fbbf24" }} className="text-sm font-bold mb-2">{pa.area}</h4>
                <p style={{ color: "#fbbf24" }} className="text-xs opacity-50 leading-relaxed">{pa.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Stats */}
      <section style={{ backgroundColor: "#fbbf24" }} className="py-14">
        <div className="max-w-6xl mx-auto px-6">
          <p style={{ color: "#111827" }} className="text-xs font-bold tracking-widest mb-8">$ cat stats.log</p>
          <div className="grid grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p style={{ color: "#111827" }} className="text-4xl font-bold">{s.number}</p>
                <p style={{ color: "#111827" }} className="text-xs font-medium tracking-widest mt-2 opacity-60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Firm */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p style={{ color: "#fbbf24" }} className="text-xs font-bold tracking-widest mb-6">$ cat about.md</p>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p style={{ color: "#fbbf24" }} className="text-sm leading-loose opacity-70">
                We maintain a lean team of 18 attorneys. Every one of them has first-chaired a
                trial. Every one of them holds a technical degree or certification in addition
                to their JD. We do not hire associates who want to push paper. We hire litigators
                who want to be in the courtroom.
              </p>
            </div>
            <div>
              <p style={{ color: "#fbbf24" }} className="text-sm leading-loose opacity-70">
                Our offices are in San Francisco and New York. We take cases nationwide and have
                appeared in 34 federal districts. We are admitted to practice before the Supreme
                Court of the United States, the Federal Circuit, and every state bar where
                technology disputes happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Victories */}
      <section style={{ borderTop: "1px solid rgba(251,191,36,0.2)" }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p style={{ color: "#fbbf24" }} className="text-xs font-bold tracking-widest mb-10">$ grep --results victories.log</p>
          <div className="space-y-6">
            {victories.map((v) => (
              <div key={v.case} style={{ border: "1px solid rgba(251,191,36,0.2)" }} className="p-5 flex justify-between items-start gap-8">
                <div className="flex-1">
                  <h4 style={{ color: "#fbbf24" }} className="text-sm font-bold mb-2">{v.case}</h4>
                  <p style={{ color: "#fbbf24" }} className="text-xs opacity-50 leading-relaxed">{v.desc}</p>
                </div>
                <span style={{ backgroundColor: "rgba(251,191,36,0.15)", color: "#fbbf24" }} className="text-xs font-bold px-3 py-1 whitespace-nowrap">{v.result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact (Command-Line Style) */}
      <section style={{ backgroundColor: "#0a0f1a" }} className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p style={{ color: "#fbbf24" }} className="text-xs font-bold tracking-widest mb-8">$ ./contact --method=direct</p>
          <div style={{ border: "1px solid rgba(251,191,36,0.3)" }} className="p-8">
            <div className="space-y-3">
              <p style={{ color: "#fbbf24" }} className="text-sm"><span className="opacity-40">name____:</span> BLACKSTONE LEGAL</p>
              <p style={{ color: "#fbbf24" }} className="text-sm"><span className="opacity-40">phone___:</span> (415) 555-0199</p>
              <p style={{ color: "#fbbf24" }} className="text-sm"><span className="opacity-40">email___:</span> intake@blackstonelegal.io</p>
              <p style={{ color: "#fbbf24" }} className="text-sm"><span className="opacity-40">office_1:</span> 101 Market Street, 42nd Floor, San Francisco, CA 94105</p>
              <p style={{ color: "#fbbf24" }} className="text-sm"><span className="opacity-40">office_2:</span> 1 World Trade Center, 60th Floor, New York, NY 10007</p>
              <p style={{ color: "#fbbf24" }} className="text-sm"><span className="opacity-40">hours___:</span> Mon-Fri 0800-2000 PST | Emergency line: 24/7</p>
            </div>
            <div className="mt-8">
              <span style={{ backgroundColor: "#fbbf24", color: "#111827" }} className="px-6 py-3 text-xs font-bold tracking-widest cursor-pointer">SUBMIT_INQUIRY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Footer */}
      <footer style={{ borderTop: "1px solid rgba(251,191,36,0.15)" }} className="py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <p style={{ color: "#fbbf24" }} className="text-xs opacity-30">&copy; 2024 BLACKSTONE LEGAL. ALL RIGHTS RESERVED.</p>
          <p style={{ color: "#fbbf24" }} className="text-xs opacity-30">BUILD: v12.4.1 | UPTIME: 4,383 DAYS | STATUS: OPERATIONAL</p>
        </div>
      </footer>
    </div>
  )
}
