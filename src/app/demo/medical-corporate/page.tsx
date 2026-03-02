export default function MedicalCorporateDemo() {
  const departments = [
    { name: "Cardiology", desc: "Advanced cardiac care including interventional procedures, electrophysiology, and heart failure management.", beds: 64 },
    { name: "Neurology", desc: "Comprehensive neurological services from stroke treatment to epilepsy monitoring and neurodegenerative care.", beds: 48 },
    { name: "Oncology", desc: "Multidisciplinary cancer treatment with chemotherapy, radiation, immunotherapy, and clinical trials.", beds: 72 },
    { name: "Orthopedics", desc: "Joint replacement, sports medicine, spinal surgery, and trauma care with robotic-assisted procedures.", beds: 56 },
    { name: "Emergency", desc: "Level I trauma center with 24/7 emergency physicians, trauma surgeons, and rapid response teams.", beds: 40 },
    { name: "Radiology", desc: "Full diagnostic imaging suite with 3T MRI, 256-slice CT, PET-CT, and interventional radiology.", beds: 0 },
  ]
  const leadership = [
    { name: "Dr. Margaret Thornton", title: "Chief Executive Officer", bg: "bg-blue-100", bio: "30+ years in healthcare administration" },
    { name: "Dr. Robert Kimura", title: "Chief Medical Officer", bg: "bg-blue-50", bio: "Former department chair at Johns Hopkins" },
    { name: "Catherine Morales, MBA", title: "Chief Operating Officer", bg: "bg-indigo-50", bio: "Previously at HCA Healthcare" },
    { name: "Dr. Anil Bhatt", title: "Chief of Surgery", bg: "bg-sky-50", bio: "Pioneer in minimally invasive techniques" },
  ]
  const accreditations = ["Joint Commission Gold Seal", "Magnet Recognition (ANCC)", "NCI-Designated Cancer Center", "Chest Pain Center (ACC)", "Comprehensive Stroke Center", "Level I Trauma Verification"]
  const locations = [
    { name: "Summit Medical Center", address: "1200 Healthcare Blvd, Denver, CO 80202", type: "Flagship Hospital", beds: "450 beds" },
    { name: "Summit West Campus", address: "890 Mountain View Dr, Lakewood, CO 80226", type: "Ambulatory Center", beds: "120 beds" },
    { name: "Summit North Clinic", address: "345 Pine Ridge Ave, Boulder, CO 80301", type: "Outpatient Clinic", beds: "Outpatient only" },
  ]
  const navDepts = ["Cardiology", "Neurology", "Oncology", "Orthopedics", "Emergency", "Radiology", "Pediatrics", "OB/GYN"]

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Top Bar */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 h-10 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-6">
            <span>Emergency: (303) 555-9111</span>
            <span className="hidden md:inline">Patient Portal</span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="cursor-pointer">Careers</span>
            <span className="cursor-pointer">For Physicians</span>
            <span className="cursor-pointer">Donate</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-800 rounded-sm"></div>
            <span className="text-lg font-bold text-blue-900 tracking-tight">Summit Health</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <span className="text-sm text-slate-600 hover:text-blue-800 cursor-pointer font-medium">Departments</span>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-200 rounded-md shadow-lg py-2 hidden group-hover:block">
                {navDepts.map((d) => (
                  <span key={d} className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-800 cursor-pointer">{d}</span>
                ))}
              </div>
            </div>
            <span className="text-sm text-slate-600 hover:text-blue-800 cursor-pointer font-medium">Locations</span>
            <span className="text-sm text-slate-600 hover:text-blue-800 cursor-pointer font-medium">Physicians</span>
            <span className="text-sm text-slate-600 hover:text-blue-800 cursor-pointer font-medium">About</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-blue-800 font-medium cursor-pointer">Find a Doctor</span>
            <span className="text-sm font-medium text-white bg-blue-800 px-5 py-2 rounded cursor-pointer">Schedule Visit</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-blue-200 tracking-wide uppercase mb-4">Colorado&apos;s Premier Hospital Network</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              World-class care,<br />close to home.
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-lg">
              Summit Health brings together 1,200 physicians across 35 specialties to deliver exceptional patient outcomes at three convenient locations.
            </p>
            <div className="flex items-center space-x-3">
              <span className="h-12 px-8 flex items-center text-sm font-semibold bg-white text-blue-900 rounded cursor-pointer">Find a Physician</span>
              <span className="h-12 px-8 flex items-center text-sm font-semibold border border-white/30 text-white rounded cursor-pointer">Virtual Tour</span>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-800 tracking-wide uppercase mb-2">Centers of Excellence</p>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">Our Departments</h2>
          <p className="text-slate-500 max-w-lg mx-auto">Each department is led by nationally recognized specialists and equipped with the latest medical technology.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((d) => (
            <div key={d.name} className="border border-slate-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer">
              <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center mb-4">
                <div className="w-5 h-5 rounded-sm bg-blue-800"></div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{d.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{d.desc}</p>
              {d.beds > 0 && <p className="text-xs text-blue-800 font-medium">{d.beds} dedicated beds</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-800 tracking-wide uppercase mb-2">Leadership</p>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">Executive Team</h2>
            <p className="text-slate-500 max-w-lg mx-auto">Experienced leaders guiding our mission to deliver the highest standard of patient care.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {leadership.map((l) => (
              <div key={l.name} className="text-center">
                <div className={`w-full aspect-square rounded-lg ${l.bg} mb-4`}></div>
                <p className="text-sm font-semibold text-slate-900">{l.name}</p>
                <p className="text-xs text-blue-800 mt-0.5">{l.title}</p>
                <p className="text-xs text-slate-400 mt-1">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-800 tracking-wide uppercase mb-2">Quality & Safety</p>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">Accreditations & Certifications</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {accreditations.map((a) => (
            <div key={a} className="border border-slate-200 rounded-lg p-5 flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-blue-50 flex-shrink-0 flex items-center justify-center">
                <span className="text-blue-800 text-xs font-bold">&#10003;</span>
              </div>
              <span className="text-sm font-medium text-slate-700">{a}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance & Billing */}
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-semibold text-blue-200 tracking-wide uppercase mb-2">Insurance & Billing</p>
              <h2 className="text-3xl font-bold mb-4">We work with your plan</h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                Summit Health is in-network with most major insurance providers. Our financial counselors can help you understand your coverage and explore payment options.
              </p>
              <span className="inline-flex h-11 px-6 items-center text-sm font-medium bg-white text-blue-900 rounded cursor-pointer">Verify Your Insurance</span>
            </div>
            <div className="flex items-center">
              <div className="grid grid-cols-2 gap-3 w-full">
                {["Blue Cross Blue Shield", "UnitedHealthcare", "Aetna", "Cigna", "Humana", "Medicare / Medicaid"].map((ins) => (
                  <div key={ins} className="border border-blue-700 rounded px-4 py-3">
                    <span className="text-sm text-blue-100">{ins}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-800 tracking-wide uppercase mb-2">Locations</p>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">Find Us Near You</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <div key={loc.name} className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="w-full h-40 bg-slate-100"></div>
              <div className="p-6">
                <p className="text-xs font-semibold text-blue-800 uppercase mb-1">{loc.type}</p>
                <h3 className="text-base font-semibold text-slate-900 mb-1">{loc.name}</h3>
                <p className="text-sm text-slate-500 mb-2">{loc.address}</p>
                <p className="text-xs text-slate-400">{loc.beds}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <p className="text-sm font-semibold mb-4">For Patients</p>
              {["Find a Doctor", "Schedule Visit", "Patient Portal", "Billing & Insurance", "Medical Records"].map((l) => (
                <p key={l} className="text-xs text-slate-400 hover:text-white cursor-pointer mb-2">{l}</p>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold mb-4">Departments</p>
              {["Cardiology", "Neurology", "Oncology", "Orthopedics", "Emergency"].map((l) => (
                <p key={l} className="text-xs text-slate-400 hover:text-white cursor-pointer mb-2">{l}</p>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold mb-4">About</p>
              {["Our Mission", "Leadership", "Careers", "Newsroom", "Community Health"].map((l) => (
                <p key={l} className="text-xs text-slate-400 hover:text-white cursor-pointer mb-2">{l}</p>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold mb-4">Contact</p>
              <p className="text-xs text-slate-400 mb-2">Main: (303) 555-0100</p>
              <p className="text-xs text-slate-400 mb-2">Emergency: (303) 555-9111</p>
              <p className="text-xs text-slate-400 mb-2">1200 Healthcare Blvd</p>
              <p className="text-xs text-slate-400">Denver, CO 80202</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-xs text-slate-500">&copy; 2026 Summit Health System. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Use", "Accessibility", "Non-Discrimination"].map((link) => (
                <span key={link} className="text-xs text-slate-500 hover:text-white cursor-pointer">{link}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
