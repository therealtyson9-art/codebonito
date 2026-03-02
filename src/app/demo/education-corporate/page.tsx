export default function EducationCorporateDemo() {
  const departments = [
    { name: "Sciences", programs: 12, faculty: 48, desc: "Biology, Chemistry, Physics, Environmental Science, and Neuroscience programs with cutting-edge research facilities." },
    { name: "Arts & Humanities", programs: 15, faculty: 52, desc: "English, History, Philosophy, Fine Arts, and Music departments fostering creative and critical thinking." },
    { name: "Business", programs: 8, faculty: 34, desc: "MBA, Finance, Marketing, and Entrepreneurship programs with Fortune 500 corporate partnerships." },
    { name: "Engineering", programs: 10, faculty: 41, desc: "Civil, Mechanical, Electrical, Computer, and Biomedical Engineering with state-of-the-art labs." },
    { name: "Medicine", programs: 6, faculty: 67, desc: "Medical school, Nursing, Public Health, and Biomedical Research programs affiliated with three hospitals." },
    { name: "Law", programs: 4, faculty: 29, desc: "Juris Doctor, Legal Studies, International Law, and Constitutional Law with a 94% bar passage rate." },
  ]

  const statistics = [
    { value: "24,500", label: "Total Enrollment" },
    { value: "1,850", label: "Faculty Members" },
    { value: "#18", label: "National Ranking" },
    { value: "96%", label: "Graduation Rate" },
  ]

  const accreditations = ["Middle States Commission", "AACSB International", "ABET Engineering", "LCME Medical", "ABA Law"]

  const alumni = [
    { name: "Rebecca Thornton", year: "Class of 2008", role: "CEO, Helios Biotech", quote: "Westfield gave me the tools to think big and the network to make it happen. My freshman biology seminar changed the trajectory of my career." },
    { name: "Marcus Chen", year: "Class of 2012", role: "Principal, Chen Architecture Group", quote: "The engineering faculty pushed me to combine technical precision with creative vision. That mindset defines my practice today." },
    { name: "Priya Kapoor", year: "Class of 2015", role: "Partner, Morrison & Associates Law", quote: "Westfield Law prepared me for the realities of practice, not just the theory. The clinical program was invaluable." },
  ]

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" /></head>

      <nav className="bg-blue-900">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-lg font-bold text-white tracking-tight">WESTFIELD UNIVERSITY</span>
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-sm text-blue-200 hover:text-white cursor-pointer transition-colors">Academics</span>
            <span className="text-sm text-blue-200 hover:text-white cursor-pointer transition-colors">Research</span>
            <span className="text-sm text-blue-200 hover:text-white cursor-pointer transition-colors">Campus Life</span>
            <span className="text-sm text-blue-200 hover:text-white cursor-pointer transition-colors">Alumni</span>
            <span className="text-sm text-blue-200 hover:text-white cursor-pointer transition-colors">Admissions</span>
            <button className="h-9 px-5 text-sm font-medium text-blue-900 bg-white hover:bg-blue-50 rounded transition-colors">Apply</button>
          </div>
        </div>
      </nav>

      <section className="bg-blue-800 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Advancing Knowledge,<br />Shaping Futures</h1>
          <p className="text-lg text-blue-200 max-w-2xl mb-8">Westfield University is a top-20 research institution offering 55 undergraduate and graduate programs across six world-class schools.</p>
          <div className="flex space-x-3">
            <button className="h-12 px-8 text-sm font-medium text-blue-900 bg-white hover:bg-blue-50 rounded transition-colors">Explore Programs</button>
            <button className="h-12 px-8 text-sm font-medium text-white border border-blue-400 hover:bg-blue-700 rounded transition-colors">Virtual Tour</button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Academic Departments</h2>
        <p className="text-gray-500 mb-10">Six schools, 55 programs, one unified mission</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((d) => (
            <div key={d.name} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{d.name}</h3>
              <div className="flex space-x-4 mb-3">
                <span className="text-xs text-blue-800 bg-blue-50 px-2 py-1 rounded font-medium">{d.programs} Programs</span>
                <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded font-medium">{d.faculty} Faculty</span>
              </div>
              <p className="text-sm text-gray-500">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-10">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-bold text-white mb-2">{s.value}</p>
                <p className="text-sm text-blue-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Accreditations</h2>
        <p className="text-gray-500 mb-8">Recognized by leading accreditation bodies</p>
        <div className="flex flex-wrap gap-3">
          {accreditations.map((a) => (
            <span key={a} className="px-4 py-2 bg-gray-100 rounded text-sm font-medium text-gray-700 border border-gray-200">{a}</span>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Alumni Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {alumni.map((a) => (
              <div key={a.name} className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-sm text-gray-600 italic mb-4">&ldquo;{a.quote}&rdquo;</p>
                <p className="text-sm font-semibold text-gray-900">{a.name}</p>
                <p className="text-xs text-blue-700">{a.role}</p>
                <p className="text-xs text-gray-400">{a.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tuition & Financial Aid</h2>
            <p className="text-sm text-gray-500 mb-4">We believe financial barriers should never stand in the way of a world-class education. Over 68% of our students receive financial aid.</p>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-sm text-gray-700">Undergraduate Tuition</span><span className="text-sm font-semibold text-gray-900">$52,400/year</span></div>
              <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-sm text-gray-700">Graduate Tuition</span><span className="text-sm font-semibold text-gray-900">$38,600/year</span></div>
              <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-sm text-gray-700">Room & Board</span><span className="text-sm font-semibold text-gray-900">$16,200/year</span></div>
              <div className="flex justify-between"><span className="text-sm text-gray-700">Average Aid Package</span><span className="text-sm font-semibold text-blue-700">$34,800/year</span></div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-blue-800 rounded-lg p-8 text-center w-full">
              <h3 className="text-xl font-bold text-white mb-3">Ready to Join Westfield?</h3>
              <p className="text-blue-200 text-sm mb-6">Application deadline: January 15, 2026</p>
              <button className="h-12 px-8 text-sm font-medium text-blue-900 bg-white hover:bg-blue-50 rounded transition-colors">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm text-blue-300">&copy; 2026 Westfield University. All rights reserved.</span>
          <div className="flex space-x-6 text-sm text-blue-300">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Accessibility</span>
            <span className="hover:text-white cursor-pointer transition-colors">Title IX</span>
            <span className="hover:text-white cursor-pointer transition-colors">Employment</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
