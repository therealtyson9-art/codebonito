export default function FitnessCorporateDemo() {
  const navLinks = ["Programs", "Solutions", "Results", "Testimonials", "About", "Contact"]

  const programs = [
    { name: "On-Site Fitness Center", icon: "GYM", desc: "Fully equipped gym facilities installed and managed within your office building. Cardio, strength, and functional training zones with certified staff on-site during business hours." },
    { name: "Corporate Yoga & Mindfulness", icon: "YGA", desc: "Weekly yoga sessions and guided meditation programs that reduce stress, improve focus, and decrease absenteeism. Available in-person or via live virtual stream." },
    { name: "Nutrition & Dietetics", icon: "NUT", desc: "Licensed dietitians provide group workshops, individual consultations, and healthy cafeteria menu planning. Tailored programs for dietary needs across your workforce." },
    { name: "Mental Health & Resilience", icon: "MHR", desc: "Confidential counseling access, stress management workshops, and resilience training for teams navigating high-pressure environments and organizational change." },
  ]

  const clients = [
    { name: "Meridian Financial Group", employees: "4,200 employees", result: "32% reduction in sick days within 12 months" },
    { name: "Apex Technologies", employees: "1,800 employees", result: "Employee satisfaction scores increased by 41%" },
    { name: "Northway Health Systems", employees: "6,500 employees", result: "Healthcare costs reduced by $1.2M annually" },
    { name: "Sterling & Partners LLP", employees: "850 employees", result: "Retention rate improved from 78% to 91%" },
  ]

  const roiStats = [
    { metric: "$3.27", desc: "Return for every $1 spent on employee wellness programs", source: "Harvard Business Review" },
    { metric: "28%", desc: "Average reduction in sick leave across our client organizations", source: "LifeFit Internal Data" },
    { metric: "41%", desc: "Improvement in employee-reported energy and productivity levels", source: "Client Survey 2024" },
    { metric: "67%", desc: "Of employees say wellness benefits influence their choice of employer", source: "SHRM Research" },
  ]

  const testimonials = [
    { name: "Karen Liu", title: "VP of Human Resources, Meridian Financial", quote: "LifeFit transformed how our employees think about health. The on-site gym sees 300+ visits per week, and our healthcare costs have dropped measurably." },
    { name: "Robert Castillo", title: "CEO, Apex Technologies", quote: "We brought in LifeFit expecting a perk. What we got was a strategic advantage. Our team is more focused, more present, and turnover has plummeted." },
    { name: "Dr. Alison Park", title: "Chief Medical Officer, Northway Health", quote: "The mental health program alone justified the investment. Our staff finally has accessible, stigma-free support and it shows in every metric we track." },
  ]

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }} className="min-h-screen text-gray-800" >
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="text-xl font-bold" style={{ color: "#2563eb" }}>LifeFit<span className="font-light text-gray-400"> Corporate Wellness</span></div>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{link}</a>
          ))}
        </div>
        <button className="text-sm font-medium text-white px-5 py-2 rounded" style={{ backgroundColor: "#2563eb" }}>Get a Quote</button>
      </nav>

      {/* Hero */}
      <section className="py-24 px-8 text-center" style={{ backgroundColor: "#f9fafb" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-wider mb-3" style={{ color: "#2563eb" }}>Corporate Wellness Solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">A Healthier Workforce Is a Stronger Business</h1>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">LifeFit delivers comprehensive wellness programs for organizations of every size. From on-site fitness centers to mental health support, we help companies invest in their most valuable asset: their people.</p>
          <div className="flex gap-4 justify-center">
            <button className="text-white font-medium px-8 py-3 rounded" style={{ backgroundColor: "#2563eb" }}>Schedule a Consultation</button>
            <button className="font-medium px-8 py-3 rounded border" style={{ borderColor: "#2563eb", color: "#2563eb" }}>Download Case Studies</button>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-wider mb-2" style={{ color: "#2563eb" }}>Our Programs</p>
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Comprehensive Wellness Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((p) => (
              <div key={p.name} className="flex gap-6 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow" style={{ backgroundColor: "#f9fafb" }}>
                <div className="w-14 h-14 rounded flex-shrink-0 flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#2563eb" }}>{p.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{p.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Clients */}
      <section className="py-20 px-8" style={{ backgroundColor: "#f9fafb" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-wider mb-2" style={{ color: "#2563eb" }}>Trusted By</p>
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Our Corporate Partners</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {clients.map((c) => (
              <div key={c.name} className="bg-white p-6 rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{c.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{c.employees}</p>
                <p className="text-sm font-medium" style={{ color: "#2563eb" }}>{c.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Stats */}
      <section className="py-20 px-8 text-white" style={{ backgroundColor: "#2563eb" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-wider mb-2 text-blue-200">The ROI of Wellness</p>
          <h2 className="text-3xl font-bold mb-12">Numbers That Drive Decisions</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {roiStats.map((s) => (
              <div key={s.metric}>
                <div className="text-4xl font-bold mb-2">{s.metric}</div>
                <p className="text-sm text-blue-100 mb-2">{s.desc}</p>
                <p className="text-xs text-blue-300">{s.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-wider mb-2" style={{ color: "#2563eb" }}>Testimonials</p>
          <h2 className="text-3xl font-bold mb-12 text-gray-900">What Our Partners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-lg" style={{ backgroundColor: "#f9fafb" }}>
                <p className="text-gray-600 italic mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-bold text-sm text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get a Quote CTA */}
      <section className="py-20 px-8 text-center" style={{ backgroundColor: "#f9fafb" }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Invest in Your Team?</h2>
          <p className="text-gray-500 mb-8">Request a customized proposal for your organization. Our team will assess your needs and design a wellness program tailored to your workforce, culture, and budget.</p>
          <button className="text-white font-medium px-10 py-3 rounded" style={{ backgroundColor: "#2563eb" }}>Get a Free Quote</button>
        </div>
      </section>

      {/* Corporate Footer */}
      <footer className="py-12 px-8 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="text-lg font-bold text-white mb-2">LifeFit Corporate Wellness</div>
            <p className="text-sm">250 Commerce Drive, Suite 400<br />Chicago, IL 60601</p>
            <p className="text-sm mt-2">info@lifefitcorporate.com | (312) 555-0180</p>
          </div>
          <div className="flex gap-12 text-sm">
            <div className="space-y-2">
              <p className="font-medium text-white mb-3">Solutions</p>
              <p>On-Site Fitness</p><p>Yoga & Mindfulness</p><p>Nutrition</p><p>Mental Health</p>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-white mb-3">Company</p>
              <p>About Us</p><p>Careers</p><p>Case Studies</p><p>Blog</p>
            </div>
          </div>
          <p className="text-xs text-gray-600">&copy; 2025 LifeFit Corporate Wellness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
