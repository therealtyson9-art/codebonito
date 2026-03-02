export const dynamic = "force-dynamic";
export default function EducationMinimalistDemo() {
  const courses = [
    { title: "Data Science Fundamentals", instructor: "Dr. Sarah Chen", students: 2340, rating: 4.9, category: "Technology" },
    { title: "Creative Writing Workshop", instructor: "James Whitfield", students: 1890, rating: 4.8, category: "Arts" },
    { title: "Financial Modeling", instructor: "Maria Santos", students: 3120, rating: 4.7, category: "Business" },
    { title: "UX Research Methods", instructor: "Alex Kumar", students: 1560, rating: 4.9, category: "Design" },
    { title: "Machine Learning A-Z", instructor: "Dr. Robert Park", students: 4210, rating: 4.8, category: "Technology" },
    { title: "Public Speaking Mastery", instructor: "Diana Ross-Webb", students: 2780, rating: 4.7, category: "Communication" },
  ];

  const steps = [
    { step: "01", title: "Browse Courses", desc: "Explore our catalog of 500+ courses across technology, business, arts, and personal development." },
    { step: "02", title: "Learn at Your Pace", desc: "Watch video lessons, complete assignments, and engage with interactive exercises on your schedule." },
    { step: "03", title: "Earn Your Certificate", desc: "Complete the course requirements and receive a verified certificate recognized by top employers." },
  ];

  const instructors = [
    { name: "Dr. Sarah Chen", role: "Head of Data Science", bio: "Former lead data scientist at Spotify with 12 years of industry experience and 3 published textbooks." },
    { name: "James Whitfield", role: "Creative Writing Director", bio: "National Book Award finalist and former MFA program director at Columbia University." },
    { name: "Maria Santos", role: "Finance Lead", bio: "Ex-Goldman Sachs VP who has trained over 10,000 professionals in financial modeling and valuation." },
  ];

  const stats = [
    { value: "94%", label: "Course Completion Rate" },
    { value: "87%", label: "Career Advancement" },
    { value: "4.8/5", label: "Average Rating" },
    { value: "50K+", label: "Active Learners" },
  ];

  return (
    <div style={{ fontFamily: "'Inter Tight', sans-serif" }} className="min-h-screen bg-white">
      <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="border-b border-slate-200 px-8 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <span className="text-xl font-semibold tracking-tight" style={{ color: "#475569" }}>Folio Academy</span>
        <div className="hidden md:flex gap-8 text-sm font-medium" style={{ color: "#475569" }}>
          <a href="#" className="hover:opacity-70">Courses</a>
          <a href="#" className="hover:opacity-70">Instructors</a>
          <a href="#" className="hover:opacity-70">For Teams</a>
          <a href="#" className="hover:opacity-70">Pricing</a>
        </div>
        <div className="flex gap-3">
          <button className="text-sm font-medium px-4 py-2 rounded-lg" style={{ color: "#475569" }}>Sign In</button>
          <button className="text-sm font-medium px-4 py-2 rounded-lg text-white" style={{ backgroundColor: "#475569" }}>Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6" style={{ color: "#475569" }}>Learn without limits, grow without boundaries.</h1>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "#64748b" }}>Folio Academy brings world-class instruction to your screen. Master new skills with courses designed by industry leaders and top academics.</p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: "#475569" }}>Explore Courses</button>
            <button className="px-6 py-3 rounded-lg font-medium border" style={{ color: "#475569", borderColor: "#cbd5e1" }}>Watch Demo</button>
          </div>
        </div>
        <div className="rounded-2xl flex items-center justify-center h-80" style={{ backgroundColor: "#f1f5f9" }}>
          <div className="text-center" style={{ color: "#94a3b8" }}>
            <div className="text-6xl mb-4">📖</div>
            <p className="text-sm font-medium">Book Illustration Hero</p>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-2" style={{ color: "#475569" }}>Popular Courses</h2>
        <p className="mb-10" style={{ color: "#94a3b8" }}>Chosen by thousands of learners worldwide</p>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div key={c.title} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: "#f1f5f9", color: "#475569" }}>{c.category}</span>
              <h3 className="text-lg font-semibold mt-4 mb-1" style={{ color: "#475569" }}>{c.title}</h3>
              <p className="text-sm mb-4" style={{ color: "#94a3b8" }}>{c.instructor}</p>
              <div className="flex justify-between text-sm" style={{ color: "#64748b" }}>
                <span>{c.students.toLocaleString()} students</span>
                <span>&#9733; {c.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#475569" }}>How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="text-4xl font-light mb-4" style={{ color: "#cbd5e1" }}>{s.step}</div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#475569" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Spotlight */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-10" style={{ color: "#475569" }}>Instructor Spotlight</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((i) => (
            <div key={i.name} className="flex flex-col">
              <div className="w-full h-48 rounded-xl mb-4 flex items-center justify-center" style={{ backgroundColor: "#f1f5f9" }}>
                <span className="text-4xl">👤</span>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: "#475569" }}>{i.name}</h3>
              <p className="text-sm font-medium mb-2" style={{ color: "#94a3b8" }}>{i.role}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{i.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Outcomes */}
      <section className="py-16" style={{ backgroundColor: "#475569" }}>
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Student Outcomes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{s.value}</div>
                <div className="text-sm" style={{ color: "#cbd5e1" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4" style={{ color: "#475569" }}>Start learning today</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: "#64748b" }}>Join 50,000+ learners who have already transformed their careers with Folio Academy.</p>
        <button className="px-8 py-4 rounded-lg text-white font-medium text-lg" style={{ backgroundColor: "#475569" }}>Create Free Account</button>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "#475569" }}>Folio Academy</h4>
            <p className="text-sm" style={{ color: "#94a3b8" }}>World-class online education for curious minds everywhere.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "#475569" }}>Categories</h4>
            <ul className="space-y-2 text-sm" style={{ color: "#64748b" }}>
              <li>Technology</li><li>Business</li><li>Design</li><li>Arts</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "#475569" }}>Resources</h4>
            <ul className="space-y-2 text-sm" style={{ color: "#64748b" }}>
              <li>Blog</li><li>Help Center</li><li>Community</li><li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "#475569" }}>Legal</h4>
            <ul className="space-y-2 text-sm" style={{ color: "#64748b" }}>
              <li>Privacy Policy</li><li>Terms of Service</li><li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-8 pt-8 border-t border-slate-200 text-sm text-center" style={{ color: "#94a3b8" }}>
          &copy; 2026 Folio Academy. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
