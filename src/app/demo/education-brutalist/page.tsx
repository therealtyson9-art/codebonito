export default function EducationBrutalistDemo() {
  const courses = [
    { code: "CS101", title: "Introduction to Computer Science", credits: 4, instructor: "Prof. Nakamura", schedule: "MWF 09:00-10:15", seats: "32/40" },
    { code: "MATH201", title: "Linear Algebra & Applications", credits: 3, instructor: "Prof. Volkov", schedule: "TTh 13:00-14:30", seats: "28/35" },
    { code: "ENG105", title: "Rhetoric & Composition", credits: 3, instructor: "Prof. Adeyemi", schedule: "MWF 11:00-12:15", seats: "19/25" },
    { code: "PHYS301", title: "Quantum Mechanics I", credits: 4, instructor: "Prof. Lindqvist", schedule: "TTh 09:00-10:30", seats: "15/20" },
  ]

  const faculty = [
    { name: "Yuki Nakamura", dept: "Computer Science", title: "Associate Professor", publications: 47, hIndex: 22 },
    { name: "Alexei Volkov", dept: "Mathematics", title: "Full Professor", publications: 83, hIndex: 31 },
    { name: "Adaeze Adeyemi", dept: "English", title: "Assistant Professor", publications: 19, hIndex: 12 },
    { name: "Erik Lindqvist", dept: "Physics", title: "Full Professor", publications: 112, hIndex: 45 },
    { name: "Clara Reyes", dept: "Biology", title: "Associate Professor", publications: 56, hIndex: 27 },
  ]

  const stats = [
    { label: "RESEARCH PAPERS PUBLISHED", value: "2,847" },
    { label: "ACTIVE GRANTS (USD)", value: "$34.2M" },
    { label: "PATENTS FILED", value: "189" },
    { label: "PHD CANDIDATES", value: "412" },
  ]

  const calendar = [
    { date: "AUG 26", event: "Fall Semester Begins" },
    { date: "SEP 02", event: "Add/Drop Deadline" },
    { date: "OCT 14-18", event: "Midterm Examinations" },
    { date: "NOV 25-29", event: "Thanksgiving Recess" },
    { date: "DEC 09-20", event: "Final Examinations" },
    { date: "JAN 13", event: "Spring Semester Begins" },
  ]

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <head><link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" /></head>

      <nav className="border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="text-sm font-bold text-green-500 tracking-widest">BLACKBOX_UNIVERSITY</span>
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-xs text-neutral-500 hover:text-green-500 cursor-pointer transition-colors uppercase tracking-wider">Catalog</span>
            <span className="text-xs text-neutral-500 hover:text-green-500 cursor-pointer transition-colors uppercase tracking-wider">Faculty</span>
            <span className="text-xs text-neutral-500 hover:text-green-500 cursor-pointer transition-colors uppercase tracking-wider">Research</span>
            <span className="text-xs text-neutral-500 hover:text-green-500 cursor-pointer transition-colors uppercase tracking-wider">Apply</span>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-6xl font-bold leading-none mb-6">LEARN.<br />BUILD.<br />SHIP.</h1>
        <p className="text-neutral-500 text-sm max-w-lg mb-8">No fluff. No hand-holding. We teach you to think critically, build real systems, and ship work that matters. Applications for Fall 2026 are open.</p>
        <button className="px-6 py-3 text-xs font-bold uppercase tracking-widest bg-green-500 text-black hover:bg-green-400 transition-colors">Apply Now &rarr;</button>
      </section>

      <section className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-xs font-bold text-green-500 uppercase tracking-widest mb-8">// COURSE CATALOG</h2>
          <div className="space-y-4">
            {courses.map((c) => (
              <div key={c.code} className="border border-neutral-800 p-4 hover:border-green-500 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <span className="text-green-500 font-bold text-sm">{c.code}</span>
                    <span className="text-neutral-500 text-sm ml-2">// {c.credits} credits</span>
                    <h3 className="text-white text-sm font-bold mt-1">{c.title}</h3>
                  </div>
                  <div className="text-right text-xs text-neutral-500 space-y-1">
                    <p>{c.instructor}</p>
                    <p>{c.schedule}</p>
                    <p>Seats: {c.seats}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-xs font-bold text-green-500 uppercase tracking-widest mb-8">// FACULTY REGISTRY</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-800 text-left">
                  <th className="py-3 pr-4 text-xs text-neutral-500 uppercase tracking-wider">Name</th>
                  <th className="py-3 pr-4 text-xs text-neutral-500 uppercase tracking-wider">Department</th>
                  <th className="py-3 pr-4 text-xs text-neutral-500 uppercase tracking-wider">Title</th>
                  <th className="py-3 pr-4 text-xs text-neutral-500 uppercase tracking-wider">Publications</th>
                  <th className="py-3 text-xs text-neutral-500 uppercase tracking-wider">h-Index</th>
                </tr>
              </thead>
              <tbody>
                {faculty.map((f) => (
                  <tr key={f.name} className="border-b border-neutral-900 hover:bg-neutral-900 transition-colors">
                    <td className="py-3 pr-4 text-white font-bold">{f.name}</td>
                    <td className="py-3 pr-4 text-neutral-400">{f.dept}</td>
                    <td className="py-3 pr-4 text-neutral-400">{f.title}</td>
                    <td className="py-3 pr-4 text-green-500">{f.publications}</td>
                    <td className="py-3 text-green-500">{f.hIndex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-xs font-bold text-green-500 uppercase tracking-widest mb-8">// RESEARCH OUTPUT</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-xs font-bold text-green-500 uppercase tracking-widest mb-8">// ACADEMIC CALENDAR 2026-2027</h2>
          <div className="space-y-3">
            {calendar.map((c) => (
              <div key={c.event} className="flex items-center space-x-4 text-sm">
                <span className="text-green-500 font-bold w-24 flex-shrink-0">{c.date}</span>
                <span className="text-neutral-300">{c.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-800 bg-green-500">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-black mb-4">READY TO APPLY?</h2>
          <p className="text-sm text-black/70 mb-6 max-w-lg">Application deadline for Fall 2026: March 15. Early decision: November 1. We review every application with equal rigor.</p>
          <button className="px-6 py-3 text-xs font-bold uppercase tracking-widest bg-black text-green-500 hover:bg-neutral-900 transition-colors">Start Application &rarr;</button>
        </div>
      </section>

      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-neutral-600">&copy; 2026 BLACKBOX UNIVERSITY. ALL RIGHTS RESERVED.</span>
          <div className="flex space-x-6 text-xs text-neutral-600">
            <span className="hover:text-green-500 cursor-pointer transition-colors">PRIVACY</span>
            <span className="hover:text-green-500 cursor-pointer transition-colors">TERMS</span>
            <span className="hover:text-green-500 cursor-pointer transition-colors">STATUS</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
