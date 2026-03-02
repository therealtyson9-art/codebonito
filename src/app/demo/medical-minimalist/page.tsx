export default function MedicalMinimalistDemo() {
  const navLinks = ["Services", "Doctors", "Appointments", "Insurance"]
  const services = [
    { title: "Family Medicine", desc: "Comprehensive primary care for patients of all ages, from routine check-ups to chronic disease management." },
    { title: "Pediatrics", desc: "Specialized care for infants, children, and adolescents with a focus on developmental milestones and preventive health." },
    { title: "Dermatology", desc: "Expert diagnosis and treatment of skin conditions including eczema, acne, psoriasis, and skin cancer screenings." },
    { title: "Lab Services", desc: "On-site blood work, urinalysis, and diagnostic testing with results available within 24 to 48 hours." },
  ]
  const doctors = [
    { name: "Dr. Sarah Chen", specialty: "Family Medicine", credentials: "MD, FAAFP", experience: "15 years", bg: "bg-blue-100" },
    { name: "Dr. Michael Torres", specialty: "Pediatrics", credentials: "MD, FAAP", experience: "12 years", bg: "bg-blue-50" },
    { name: "Dr. Amara Osei", specialty: "Dermatology", credentials: "MD, FAAD", experience: "10 years", bg: "bg-sky-50" },
  ]
  const testimonials = [
    { name: "Rebecca H.", text: "Dr. Chen took the time to listen to every concern I had. I finally feel like I have a doctor who truly cares about my wellbeing.", rating: 5 },
    { name: "James P.", text: "My kids actually look forward to their appointments with Dr. Torres. The entire staff makes them feel comfortable and safe.", rating: 5 },
    { name: "Linda M.", text: "After years of struggling with eczema, Dr. Osei developed a treatment plan that changed my life. I cannot recommend this clinic enough.", rating: 5 },
  ]
  const insurancePartners = ["Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Cigna", "Humana", "Medicare"]
  const metrics = [
    { value: "15K+", label: "Patients served" },
    { value: "98%", label: "Patient satisfaction" },
    { value: "24hr", label: "Avg lab results" },
    { value: "12", label: "Years in practice" },
  ]

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight text-slate-900">Clarity<span className="text-blue-600">Health</span></span>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <span key={link} className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer">{link}</span>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-500 cursor-pointer">Patient Portal</span>
            <span className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-md cursor-pointer">Book Now</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <p className="text-sm font-medium text-blue-600 tracking-wide uppercase mb-4">Accepting new patients</p>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
          Your health,<br />our priority.
        </h1>
        <p className="text-lg text-slate-500 max-w-lg mb-10 leading-relaxed">
          Personalized, compassionate care for you and your family. From routine wellness visits to specialized treatment, we are here every step of the way.
        </p>
        <div className="flex items-center space-x-3">
          <span className="h-11 px-6 flex items-center text-sm font-medium text-white bg-blue-600 rounded-md cursor-pointer">Schedule Appointment</span>
          <span className="h-11 px-6 flex items-center text-sm font-medium text-blue-600 border border-blue-200 rounded-md cursor-pointer">Call (555) 234-5678</span>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">{m.value}</p>
              <p className="text-sm text-slate-400 mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <p className="text-sm font-medium text-blue-600 tracking-wide uppercase mb-3">Our Services</p>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Comprehensive care under one roof</h2>
        <p className="text-slate-500 max-w-lg mb-16">We offer a full range of medical services to keep you and your family healthy at every stage of life.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {services.map((s) => (
            <div key={s.title}>
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <div className="w-5 h-5 rounded bg-blue-200"></div>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section className="border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-sm font-medium text-blue-600 tracking-wide uppercase mb-3">Our Physicians</p>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Meet your care team</h2>
          <p className="text-slate-500 max-w-lg mb-14">Board-certified physicians dedicated to delivering evidence-based, patient-centered care.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((d) => (
              <div key={d.name}>
                <div className={`w-full aspect-[4/5] rounded-lg ${d.bg} mb-4`}></div>
                <p className="text-base font-semibold text-slate-900">{d.name}</p>
                <p className="text-sm text-blue-600 mt-0.5">{d.specialty}</p>
                <p className="text-sm text-slate-400 mt-0.5">{d.credentials} &middot; {d.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-sm font-medium text-blue-600 tracking-wide uppercase mb-3">Book Online</p>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Schedule your visit</h2>
          <p className="text-slate-500 max-w-lg mb-12">New and returning patients can request an appointment online. We will confirm your visit within one business day.</p>
          <div className="max-w-lg">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="First name" className="h-11 px-4 text-sm border border-slate-200 rounded-md bg-white text-slate-900 placeholder-slate-400 outline-none focus:border-blue-400" />
              <input type="text" placeholder="Last name" className="h-11 px-4 text-sm border border-slate-200 rounded-md bg-white text-slate-900 placeholder-slate-400 outline-none focus:border-blue-400" />
            </div>
            <input type="email" placeholder="Email address" className="w-full h-11 px-4 text-sm border border-slate-200 rounded-md bg-white text-slate-900 placeholder-slate-400 outline-none focus:border-blue-400 mb-4" />
            <input type="tel" placeholder="Phone number" className="w-full h-11 px-4 text-sm border border-slate-200 rounded-md bg-white text-slate-900 placeholder-slate-400 outline-none focus:border-blue-400 mb-4" />
            <select className="w-full h-11 px-4 text-sm border border-slate-200 rounded-md bg-white text-slate-900 outline-none focus:border-blue-400 mb-4">
              <option>Select a service</option>
              <option>Family Medicine</option>
              <option>Pediatrics</option>
              <option>Dermatology</option>
              <option>Lab Services</option>
            </select>
            <span className="inline-flex h-11 px-8 items-center text-sm font-medium text-white bg-blue-600 rounded-md cursor-pointer">Request Appointment</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-sm font-medium text-blue-600 tracking-wide uppercase mb-3">Patient Stories</p>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-14">What our patients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-slate-100 rounded-lg p-6">
                <div className="flex space-x-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-blue-600 text-sm">&#9733;</span>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-sm font-medium text-slate-400 text-center mb-8">Accepted Insurance Providers</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {insurancePartners.map((p) => (
              <span key={p} className="text-sm text-slate-300 font-medium">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">
          <div>
            <span className="text-sm font-semibold text-slate-900">Clarity<span className="text-blue-600">Health</span></span>
            <p className="text-xs text-slate-400 mt-1">123 Wellness Avenue, Suite 200 &middot; Portland, OR 97201</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy", "Terms", "Accessibility", "Contact"].map((link) => (
              <span key={link} className="text-sm text-slate-400 hover:text-slate-600 cursor-pointer">{link}</span>
            ))}
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 pb-6">
          <p className="text-xs text-slate-300">&copy; 2026 ClarityHealth Medical Group. All rights reserved. This site does not provide medical advice.</p>
        </div>
      </footer>
    </div>
  )
}
