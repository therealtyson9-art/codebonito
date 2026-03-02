export default function EducationMinimalistDemo() {
  const programs = [
    { name: "Elementary", grades: "K-5", desc: "A nurturing environment where young minds develop foundational skills through hands-on exploration and guided discovery.", icon: "🌱" },
    { name: "Middle School", grades: "6-8", desc: "Bridging childhood curiosity with academic rigor, preparing students for the challenges of high school and beyond.", icon: "📚" },
    { name: "High School", grades: "9-12", desc: "Advanced coursework, AP programs, and college prep designed to unlock every student's potential.", icon: "🎓" },
    { name: "Summer Programs", grades: "All Ages", desc: "Immersive summer experiences in STEM, arts, and athletics that keep learning alive year-round.", icon: "☀️" },
  ]

  const faculty = [
    { name: "Dr. Sarah Chen", role: "Head of Sciences", bio: "Former NASA researcher with 15 years of classroom experience. Known for making complex physics accessible and exciting." },
    { name: "James Okafor", role: "Director of Arts", bio: "Award-winning playwright and educator who integrates creative expression across the entire curriculum." },
    { name: "Maria Gonzalez", role: "Dean of Students", bio: "Dedicated to building an inclusive school culture where every student feels seen, heard, and supported." },
  ]

  const timeline = [
    { step: "01", title: "Inquiry", desc: "Submit an online inquiry form and our admissions team will reach out within 48 hours." },
    { step: "02", title: "Campus Visit", desc: "Schedule a personalized tour to experience our classrooms, labs, and community firsthand." },
    { step: "03", title: "Application", desc: "Complete the full application including transcripts, recommendations, and a student essay." },
    { step: "04", title: "Decision", desc: "Admissions decisions are released in March. Financial aid packages follow within two weeks." },
  ]

  const testimonials = [
    { name: "David Park", relation: "Parent of a 7th Grader", quote: "Meridian Academy transformed our daughter's relationship with learning. She comes home excited about school every single day." },
    { name: "Lisa Thompson", relation: "Parent of a 10th Grader", quote: "The faculty genuinely care about each student. Our son has grown not just academically but as a person since enrolling." },
  ]

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" /></head>

      <nav className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-semibold text-slate-900 tracking-tight">MERIDIAN ACADEMY</span>
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-sm text-slate-500 hover:text-blue-500 cursor-pointer transition-colors">Programs</span>
            <span className="text-sm text-slate-500 hover:text-blue-500 cursor-pointer transition-colors">Faculty</span>
            <span className="text-sm text-slate-500 hover:text-blue-500 cursor-pointer transition-colors">Campus</span>
            <span className="text-sm text-slate-500 hover:text-blue-500 cursor-pointer transition-colors">Admissions</span>
            <button className="h-10 px-6 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors">Apply Now</button>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">Where curiosity<br />meets knowledge</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">Meridian Academy cultivates thinkers, creators, and leaders through a curriculum that balances academic excellence with personal growth.</p>
        <div className="flex justify-center space-x-3">
          <button className="h-12 px-8 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors">Schedule a Visit</button>
          <button className="h-12 px-8 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors">Learn More</button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Our Programs</h2>
        <p className="text-slate-500 text-center mb-12">Thoughtfully designed for every stage of development</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div key={p.name} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">{p.name}</h3>
              <p className="text-xs font-medium text-blue-500 mb-3">Grades {p.grades}</p>
              <p className="text-sm text-slate-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Faculty Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faculty.map((f) => (
              <div key={f.name} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold text-lg mb-4">{f.name[0]}</div>
                <h3 className="text-lg font-semibold text-slate-900">{f.name}</h3>
                <p className="text-sm font-medium text-blue-500 mb-3">{f.role}</p>
                <p className="text-sm text-slate-500">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Campus Life</h2>
        <p className="text-slate-500 max-w-2xl mx-auto mb-8">Our 42-acre campus features modern science labs, a performing arts center, a maker space, organic gardens, and expansive athletic fields. Students thrive in spaces designed to inspire collaboration and creativity.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Science Labs", "Arts Center", "Maker Space", "Athletic Fields"].map((space) => (
            <div key={space} className="bg-slate-100 rounded-lg p-6 text-center">
              <p className="text-sm font-medium text-slate-700">{space}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Admissions Timeline</h2>
          <div className="space-y-6">
            {timeline.map((t) => (
              <div key={t.step} className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">{t.step}</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{t.title}</h3>
                  <p className="text-sm text-slate-500">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">What Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <p className="text-sm text-slate-600 mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm font-semibold text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-400">{t.relation}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-blue-100 mb-2">admissions@meridianacademy.edu</p>
          <p className="text-blue-100 mb-2">(415) 555-0192</p>
          <p className="text-blue-100">1200 Meridian Drive, San Francisco, CA 94102</p>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8 flex justify-between items-center">
          <span className="text-sm text-slate-500">&copy; 2026 Meridian Academy. All rights reserved.</span>
          <div className="flex space-x-6 text-sm text-slate-500">
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Accessibility</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
