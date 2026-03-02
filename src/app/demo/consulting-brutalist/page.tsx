export default function ConsultingBrutalistDemo() {
  const metrics = [
    { value: "$2.3B", label: "CLIENT VALUE DELIVERED" },
    { value: "340+", label: "ENGAGEMENTS COMPLETED" },
    { value: "98%", label: "CLIENT RETENTION RATE" },
    { value: "14", label: "YEARS IN OPERATION" },
  ]

  const methodology = [
    { id: "001", title: "DIAGNOSTIC AUDIT", body: "We disassemble your operations down to first principles. No frameworks borrowed from textbooks. Raw data analysis, stakeholder pressure-testing, and unfiltered assessment of where you actually stand versus where you think you stand." },
    { id: "002", title: "INTERVENTION DESIGN", body: "We architect solutions that are specific to your dysfunction. No slide decks that collect dust. Every recommendation comes with an implementation timeline, resource allocation model, and a kill switch if assumptions prove wrong." },
    { id: "003", title: "EXECUTION & MEASUREMENT", body: "We embed with your teams and stay until the numbers move. Weekly performance dashboards. No vanity metrics. If it cannot be measured, it does not exist in our methodology." },
  ]

  const teamRegistry = [
    { id: "TR-001", name: "MARCUS COLE", title: "FOUNDING PARTNER", focus: "OPERATIONAL RESTRUCTURING", tenure: "14 YRS" },
    { id: "TR-002", name: "HANA VOSS", title: "MANAGING DIRECTOR", focus: "DIGITAL INFRASTRUCTURE", tenure: "9 YRS" },
    { id: "TR-003", name: "RAFAEL ORTEGA", title: "SENIOR PARTNER", focus: "FINANCIAL STRATEGY", tenure: "11 YRS" },
    { id: "TR-004", name: "DIANA CHEN", title: "PARTNER", focus: "CHANGE ARCHITECTURE", tenure: "7 YRS" },
    { id: "TR-005", name: "ALEXEI PETROV", title: "DIRECTOR", focus: "DATA & ANALYTICS", tenure: "5 YRS" },
  ]

  const engagements = [
    { model: "SPRINT", duration: "4-8 WEEKS", scope: "Single problem, rapid diagnosis and intervention", rate: "$45K/WEEK" },
    { model: "EMBEDDED", duration: "3-12 MONTHS", scope: "Full operational transformation with on-site team", rate: "$180K/MONTH" },
    { model: "RETAINER", duration: "ONGOING", scope: "Strategic advisory, board-level counsel, quarterly reviews", rate: "$35K/MONTH" },
  ]

  const caseData = [
    { ref: "CD-2025-041", client: "INDUSTRIAL MANUFACTURER [REDACTED]", problem: "38% margin erosion over 3 fiscal years", outcome: "Restored to 22% EBITDA margin in 14 months" },
    { ref: "CD-2025-027", client: "SERIES C FINTECH [REDACTED]", problem: "Failed to scale past 200 employees without quality collapse", outcome: "Restructured org to support 600+ with zero service degradation" },
    { ref: "CD-2024-089", client: "REGIONAL HEALTH NETWORK [REDACTED]", problem: "$90M annual waste in supply chain operations", outcome: "Recovered $64M annually through procurement redesign" },
  ]

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
        <span className="text-sm font-bold tracking-widest" style={{ color: "#06b6d4" }}>BLACKLINE_CONSULTING</span>
        <div className="hidden md:flex items-center space-x-6">
          {["METHODOLOGY", "TEAM", "ENGAGEMENT", "CONTACT"].map((item) => (
            <span key={item} className="text-xs text-neutral-500 hover:text-white cursor-pointer transition-colors tracking-wider">{item}</span>
          ))}
        </div>
        <span className="text-xs text-neutral-600">[MENU]</span>
      </nav>

      {/* Hero */}
      <section className="px-6 py-32 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-bold leading-none tracking-tighter">
            RESULTS.<br />NOT REPORTS.
          </h1>
          <p className="mt-8 text-sm text-neutral-500 max-w-lg leading-relaxed tracking-wide">
            We are not here to validate what you already know. We are here to find what you are missing, fix what is broken, and leave when the job is done.
          </p>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="border-b border-neutral-800 px-6 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m) => (
            <div key={m.label} className="border border-neutral-800 p-6">
              <p className="text-3xl md:text-4xl font-bold" style={{ color: "#06b6d4" }}>{m.value}</p>
              <p className="text-xs text-neutral-500 mt-3 tracking-wider">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="border-b border-neutral-800 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-neutral-600 tracking-widest mb-12">// METHODOLOGY</p>
          {methodology.map((m) => (
            <div key={m.id} className="border-t border-neutral-800 py-10">
              <div className="flex items-start gap-6">
                <span className="text-xs text-neutral-600 mt-1">{m.id}</span>
                <div>
                  <h3 className="text-lg font-bold tracking-wider" style={{ color: "#06b6d4" }}>{m.title}</h3>
                  <p className="text-sm text-neutral-400 mt-4 leading-relaxed max-w-2xl">{m.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Registry */}
      <section className="border-b border-neutral-800 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-neutral-600 tracking-widest mb-12">// TEAM REGISTRY</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-700">
                  {["ID", "NAME", "TITLE", "FOCUS", "TENURE"].map((h) => (
                    <th key={h} className="py-3 pr-6 text-xs text-neutral-600 tracking-widest font-normal">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {teamRegistry.map((t) => (
                  <tr key={t.id} className="border-b border-neutral-800 hover:bg-neutral-900 transition-colors">
                    <td className="py-4 pr-6 text-xs text-neutral-600">{t.id}</td>
                    <td className="py-4 pr-6 font-medium">{t.name}</td>
                    <td className="py-4 pr-6 text-neutral-400">{t.title}</td>
                    <td className="py-4 pr-6 text-xs" style={{ color: "#06b6d4" }}>{t.focus}</td>
                    <td className="py-4 text-neutral-500">{t.tenure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="border-b border-neutral-800 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-neutral-600 tracking-widest mb-12">// ENGAGEMENT MODELS</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {engagements.map((e) => (
              <div key={e.model} className="border border-neutral-800 p-8">
                <p className="text-xl font-bold" style={{ color: "#06b6d4" }}>{e.model}</p>
                <p className="text-xs text-neutral-600 mt-2 tracking-wider">{e.duration}</p>
                <p className="text-sm text-neutral-400 mt-6 leading-relaxed">{e.scope}</p>
                <p className="text-lg font-bold mt-6">{e.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Data */}
      <section className="border-b border-neutral-800 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-neutral-600 tracking-widest mb-12">// CASE DATA</p>
          {caseData.map((c) => (
            <div key={c.ref} className="border-t border-neutral-800 py-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <span className="text-xs text-neutral-600 shrink-0 w-28">{c.ref}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">{c.client}</p>
                  <p className="text-xs text-neutral-500 mt-2">PROBLEM: {c.problem}</p>
                  <p className="text-xs mt-1" style={{ color: "#06b6d4" }}>OUTCOME: {c.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest" style={{ color: "#06b6d4" }}>BLACKLINE_CONSULTING</span>
            <p className="text-xs text-neutral-600 mt-1">INQUIRIES: ENGAGE@BLACKLINE.CO</p>
          </div>
          <p className="text-xs text-neutral-700">&copy; 2026 BLACKLINE CONSULTING GROUP. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  )
}
