export const dynamic = "force-dynamic";
export default function EducationCorporateDemo() {
  const programs = [
    { name: 'Liberal Arts', color: '#2980b9', count: '14 majors', icon: '📚' },
    { name: 'Sciences', color: '#27ae60', count: '11 majors', icon: '🔬' },
    { name: 'Business', color: '#8e44ad', count: '8 majors', icon: '📈' },
    { name: 'Engineering', color: '#d35400', count: '9 majors', icon: '⚙️' },
  ]
  const faculty = [
    { name: 'Dr. Helen Marquez', dept: 'Biology', title: 'Distinguished Professor' },
    { name: 'Dr. Thomas Whitaker', dept: 'Economics', title: 'Department Chair' },
    { name: 'Dr. Anika Patel', dept: 'Computer Science', title: 'Associate Professor' },
    { name: 'Dr. William Frost', dept: 'English', title: 'Professor Emeritus' },
    { name: 'Dr. Mei-Lin Zhao', dept: 'Chemistry', title: 'Research Director' },
    { name: 'Dr. James Calloway', dept: 'History', title: 'Professor' },
  ]
  const stats = [
    { value: '1,847', label: 'Founded' },
    { value: '12:1', label: 'Student-Faculty Ratio' },
    { value: '96%', label: 'Graduation Rate' },
    { value: '$48M', label: 'Research Funding' },
  ]
  const events = [
    { date: 'Mar 15', title: 'Spring Open House', desc: 'Campus tours, faculty meetings, and financial aid workshops' },
    { date: 'Apr 2', title: 'Research Symposium', desc: 'Student and faculty presentations across all departments' },
    { date: 'Apr 18', title: 'Admitted Students Day', desc: 'Exclusive event for newly admitted students and families' },
    { date: 'May 1', title: 'Application Deadline', desc: 'Final deadline for Fall 2026 transfer applications' },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e8f4f8', fontFamily: "'Open Sans', sans-serif", color: '#2c3e50' }}>
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Top bar */}
      <div className="text-xs py-2 px-6" style={{ backgroundColor: '#1a5276', color: '#a3c4d9' }}>
        <div className="max-w-6xl mx-auto flex justify-between">
          <span>(617) 555-0312 | admissions@prescottuniversity.edu</span>
          <span className="hidden md:block">Apply Now | Visit Campus | Give</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold" style={{ fontFamily: "'Merriweather', serif", color: '#1a5276' }}>Prescott University</span>
          <div className="hidden md:flex items-center gap-6">
            {['Academics', 'Admissions', 'Research', 'Campus Life', 'About'].map(link => (
              <a key={link} href="#" className="text-sm font-medium hover:underline underline-offset-4 transition" style={{ color: '#2c3e50' }}>{link}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero — image banner */}
      <section className="relative py-28 px-6 text-center text-white" style={{ backgroundColor: '#1a5276' }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
          Where Curiosity Meets Purpose
        </h1>
        <p className="max-w-2xl mx-auto text-lg mb-8" style={{ color: '#a3c4d9' }}>
          Since 1847, Prescott University has prepared students to think critically, lead boldly, and contribute meaningfully to the world.
        </p>
        <button className="px-8 py-3 text-sm font-semibold text-white" style={{ backgroundColor: '#2980b9' }}>
          Explore Programs
        </button>
      </section>

      {/* Programs — card grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Merriweather', serif", color: '#1a5276' }}>Academic Programs</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map(p => (
            <div key={p.name} className="bg-white p-6" style={{ borderTop: `4px solid ${p.color}` }}>
              <span className="text-3xl block mb-3">{p.icon}</span>
              <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Merriweather', serif", color: '#1a5276' }}>{p.name}</h3>
              <p className="text-sm" style={{ color: '#7f8c8d' }}>{p.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Faculty */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Merriweather', serif", color: '#1a5276' }}>Faculty</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map(f => (
              <div key={f.name} className="flex gap-4 items-start p-4" style={{ border: '1px solid #d5e8f0' }}>
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center text-2xl bg-slate-100">👤</div>
                <div>
                  <h3 className="font-bold text-sm" style={{ color: '#1a5276' }}>{f.name}</h3>
                  <p className="text-xs font-medium" style={{ color: '#2980b9' }}>{f.title}</p>
                  <p className="text-xs" style={{ color: '#7f8c8d' }}>{f.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16" style={{ backgroundColor: '#1a5276' }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-white mb-1" style={{ fontFamily: "'Merriweather', serif" }}>{s.value}</p>
              <p className="text-sm" style={{ color: '#a3c4d9' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-6" style={{ fontFamily: "'Merriweather', serif", color: '#1a5276' }}>Research Excellence</h2>
        <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: '#7f8c8d' }}>
          Our faculty and students produce groundbreaking work across disciplines, from biomedical engineering to digital humanities.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {['Quantum Computing Lab', 'Climate Research Center', 'Genomics Institute'].map(r => (
            <div key={r} className="bg-white p-6" style={{ borderTop: '4px solid #1a5276' }}>
              <h3 className="font-bold mb-2" style={{ color: '#1a5276' }}>{r}</h3>
              <p className="text-sm" style={{ color: '#7f8c8d' }}>
                Interdisciplinary research facility driving innovation and discovery with state-of-the-art equipment and dedicated faculty leadership.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Merriweather', serif", color: '#1a5276' }}>Upcoming Events</h2>
          <div className="space-y-0">
            {events.map(e => (
              <div key={e.title} className="flex gap-6 py-5 border-b" style={{ borderColor: '#d5e8f0' }}>
                <div className="w-16 text-center flex-shrink-0">
                  <span className="text-sm font-bold" style={{ color: '#2980b9' }}>{e.date}</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: '#1a5276' }}>{e.title}</h3>
                  <p className="text-sm" style={{ color: '#7f8c8d' }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center py-12 px-8" style={{ backgroundColor: '#1a5276' }}>
          <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Merriweather', serif" }}>Begin Your Journey</h2>
          <p className="text-sm mb-6" style={{ color: '#a3c4d9' }}>Application deadline for Fall 2026: May 1, 2026</p>
          <button className="px-8 py-3 text-sm font-bold text-white" style={{ backgroundColor: '#2980b9' }}>
            Apply Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#1a5276' }}>
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm" style={{ color: '#a3c4d9' }}>
          <div>
            <h4 className="font-bold text-white mb-3" style={{ fontFamily: "'Merriweather', serif" }}>Prescott University</h4>
            <p>100 University Drive</p>
            <p>Cambridge, MA 02138</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">Academics</h4>
            <p>Undergraduate</p><p>Graduate</p><p>Online</p><p>Continuing Education</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">Admissions</h4>
            <p>(617) 555-0312</p><p>admissions@prescottuniversity.edu</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">Resources</h4>
            <p>Library</p><p>Career Services</p><p>Alumni Network</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t flex flex-wrap gap-4 justify-center" style={{ borderColor: '#2a6a8f' }}>
          {['AACSB Accredited', 'NEASC Member', 'NCAA Division III'].map(a => (
            <span key={a} className="text-xs px-3 py-1" style={{ color: '#6fa8c4', border: '1px solid #2a6a8f' }}>{a}</span>
          ))}
        </div>
      </footer>
    </div>
  )
}
