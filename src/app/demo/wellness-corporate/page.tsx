export default function WellnessCorporateDemo() {
  const programs = [
    { name: "Stress Management", description: "Evidence-based workshops and one-on-one coaching to help employees manage workplace pressure, prevent burnout, and build resilience.", icon: "🧠" },
    { name: "Fitness Programs", description: "On-site and virtual group fitness classes, personal training sessions, and step challenges tailored to your workforce.", icon: "💪" },
    { name: "Mental Health", description: "Confidential counseling, mental health first aid training, and manager awareness programs to foster psychological safety.", icon: "💚" },
    { name: "Nutrition Coaching", description: "Registered dietitians providing meal planning guidance, cafeteria menu optimization, and educational lunch-and-learns.", icon: "🥗" },
    { name: "Ergonomic Assessment", description: "Certified specialists evaluating workstations, recommending adjustments, and reducing musculoskeletal injury risk.", icon: "🪑" },
    { name: "Mindfulness Training", description: "Structured 8-week mindfulness programs, daily guided meditations, and quiet room implementation consulting.", icon: "🧘" },
  ];

  const stats = [
    { value: "32%", label: "Reduction in sick days", detail: "Average across 120+ client organizations over 24 months" },
    { value: "28%", label: "Improved retention", detail: "Employees report higher job satisfaction and loyalty" },
    { value: "4.1x", label: "Return on investment", detail: "For every $1 invested, companies see $4.10 in health cost savings" },
    { value: "89%", label: "Employee participation", detail: "Opt-in rate within the first quarter of program launch" },
  ];

  const packages = [
    { name: "Small Business", employees: "10-50 employees", price: "$2,400", period: "/month", features: ["2 wellness programs", "Monthly health screenings", "Digital wellness platform", "Quarterly reporting", "Email support"] },
    { name: "Mid-Market", employees: "51-250 employees", price: "$6,800", period: "/month", features: ["4 wellness programs", "Bi-weekly on-site sessions", "Digital wellness platform", "Monthly analytics dashboard", "Dedicated account manager", "Mental health hotline"] },
    { name: "Enterprise", employees: "250+ employees", price: "Custom", period: "pricing", features: ["All 6 wellness programs", "Daily on-site practitioners", "Custom wellness platform", "Real-time analytics & API", "Executive wellness coaching", "Global program coordination", "Annual wellness retreat"] },
  ];

  const testimonials = [
    { company: "Meridian Technologies", contact: "Lisa Park, VP of People", text: "Within 6 months of launching the program, our healthcare costs dropped by 18% and employee NPS jumped 22 points. The ROI speaks for itself.", employees: "1,200 employees" },
    { company: "Atlas Financial Group", contact: "Robert Nguyen, CHRO", text: "The mental health component was a game-changer. We saw a 40% decrease in stress-related leave and our managers are now equipped to have real conversations about wellbeing.", employees: "800 employees" },
    { company: "Greenfield Logistics", contact: "Maria Santos, CEO", text: "As a mid-size company, we needed a wellness partner that could scale with us. The program was tailored perfectly and our team genuinely looks forward to the sessions.", employees: "180 employees" },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">V</div>
          <span className="text-lg font-semibold text-gray-900">Vitality<span className="text-blue-500">Works</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#programs" className="hover:text-blue-500 transition-colors">Programs</a>
          <a href="#results" className="hover:text-blue-500 transition-colors">Results</a>
          <a href="#packages" className="hover:text-blue-500 transition-colors">Packages</a>
          <a href="#testimonials" className="hover:text-blue-500 transition-colors">Clients</a>
          <a href="#contact" className="bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">Get a Quote</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-medium mb-6">Trusted by 120+ organizations nationwide</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Invest in your team&apos;s wellbeing</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">Comprehensive corporate wellness programs that reduce healthcare costs, boost productivity, and create workplaces where people genuinely thrive.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-blue-500 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-blue-600 transition-colors">Schedule a Consultation</a>
            <a href="#results" className="border border-gray-200 text-gray-700 px-8 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition-colors">See the Results</a>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Six pillars of workplace wellness, each backed by research and customizable to your organization&apos;s needs.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.name} className="border border-gray-100 rounded-xl p-7 hover:shadow-lg hover:border-blue-100 transition-all">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Stats */}
      <section id="results" className="py-20 px-8 bg-blue-500">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Measurable Results</h2>
          <p className="text-blue-100 text-center mb-14 max-w-lg mx-auto">Our programs deliver outcomes you can see in your bottom line and your people&apos;s faces.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{s.value}</div>
                <div className="text-sm font-medium text-white mb-2">{s.label}</div>
                <div className="text-xs text-blue-200 leading-relaxed">{s.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Packages</h2>
          <p className="text-gray-500 text-center mb-14 max-w-lg mx-auto">Flexible plans designed for organizations at every stage of their wellness journey.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`rounded-xl p-8 ${pkg.name === "Mid-Market" ? "bg-blue-500 text-white ring-2 ring-blue-500 shadow-xl scale-[1.02]" : "bg-white border border-gray-100"}`}>
                <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
                <p className={`text-sm mb-4 ${pkg.name === "Mid-Market" ? "text-blue-100" : "text-gray-400"}`}>{pkg.employees}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className={`text-sm ${pkg.name === "Mid-Market" ? "text-blue-100" : "text-gray-400"}`}>{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className={`text-sm flex items-start gap-2 ${pkg.name === "Mid-Market" ? "text-blue-50" : "text-gray-600"}`}>
                      <span className={`mt-0.5 ${pkg.name === "Mid-Market" ? "text-blue-200" : "text-blue-400"}`}>&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg text-sm font-medium transition-colors ${pkg.name === "Mid-Market" ? "bg-white text-blue-500 hover:bg-blue-50" : "bg-blue-500 text-white hover:bg-blue-600"}`}>
                  {pkg.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">Trusted by Leading Organizations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.company} className="border border-gray-100 rounded-xl p-7">
                <div className="flex items-center gap-1 text-yellow-400 mb-4 text-sm">★★★★★</div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.company}</p>
                  <p className="text-xs text-gray-400">{t.contact}</p>
                  <p className="text-xs text-blue-400 mt-1">{t.employees}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-8 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">Get a Custom Quote</h2>
          <p className="text-gray-500 text-center mb-10">Tell us about your organization and we&apos;ll design a program that fits.</p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input type="text" placeholder="Last Name" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <input type="email" placeholder="Work Email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="text" placeholder="Company Name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Company Size</option>
              <option>10-50 employees</option>
              <option>51-250 employees</option>
              <option>250-1000 employees</option>
              <option>1000+ employees</option>
            </select>
            <textarea placeholder="Tell us about your wellness goals..." rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button type="submit" className="w-full bg-blue-500 text-white py-3.5 rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm">Request a Consultation</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">V</div>
              <span className="font-semibold">VitalityWorks</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">Building healthier workplaces through science-backed wellness programs.</p>
          </div>
          <div className="flex gap-12 text-sm text-gray-400">
            <div className="space-y-2">
              <p className="text-white font-medium text-xs uppercase tracking-wider mb-3">Company</p>
              <p>About</p><p>Careers</p><p>Press</p>
            </div>
            <div className="space-y-2">
              <p className="text-white font-medium text-xs uppercase tracking-wider mb-3">Resources</p>
              <p>Case Studies</p><p>Blog</p><p>Webinars</p>
            </div>
            <div className="space-y-2">
              <p className="text-white font-medium text-xs uppercase tracking-wider mb-3">Contact</p>
              <p>hello@vitalityworks.com</p><p>(800) 555-0134</p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 text-xs text-gray-500">&copy; 2026 VitalityWorks, Inc. All rights reserved.</div>
      </footer>
    </div>
  );
}
