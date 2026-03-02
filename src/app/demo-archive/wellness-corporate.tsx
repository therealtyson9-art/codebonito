export default function WellnessCorporateDemo() {
  const services = [
    { name: "Physical Therapy", desc: "Evidence-based rehabilitation for orthopedic injuries, post-surgical recovery, and chronic pain management. Our licensed PTs create personalized treatment plans using manual therapy, therapeutic exercise, and modalities.", icon: "PT" },
    { name: "Clinical Nutrition", desc: "Registered dietitians specializing in medical nutrition therapy, weight management, and sports performance. Insurance-covered consultations with comprehensive metabolic assessments.", icon: "CN" },
    { name: "Mental Health", desc: "Licensed therapists offering individual counseling, group therapy, and psychiatric services. Specialties include anxiety, depression, stress management, and workplace burnout.", icon: "MH" },
    { name: "Fitness Programs", desc: "Certified personal trainers and group fitness instructors in state-of-the-art facilities. Programs include cardiac rehab, senior fitness, prenatal exercise, and functional training.", icon: "FP" },
  ];

  const locations = [
    { city: "Portland", address: "1240 NW Glisan St, Suite 200", phone: "(503) 555-0140", hours: "Mon-Fri 6AM-8PM, Sat 8AM-2PM" },
    { city: "Seattle", address: "915 Pike St, Floor 3", phone: "(206) 555-0182", hours: "Mon-Fri 7AM-7PM, Sat 9AM-1PM" },
    { city: "Denver", address: "2800 Welton St, Suite 100", phone: "(303) 555-0219", hours: "Mon-Fri 6AM-8PM, Sat 8AM-3PM" },
    { city: "Austin", address: "604 Congress Ave, Suite 400", phone: "(512) 555-0177", hours: "Mon-Fri 7AM-7PM, Sat 8AM-2PM" },
    { city: "Minneapolis", address: "330 2nd Ave S, Floor 2", phone: "(612) 555-0134", hours: "Mon-Fri 6:30AM-7:30PM, Sat 9AM-1PM" },
  ];

  const insurance = ["Aetna", "Blue Cross Blue Shield", "Cigna", "UnitedHealthcare", "Kaiser Permanente", "Humana", "Medicare", "Medicaid"];

  const corporateFeatures = [
    { title: "On-Site Clinics", desc: "Embed VitalPath providers directly in your workplace. Reduce absenteeism by 34% and healthcare costs by 22% on average." },
    { title: "EAP Integration", desc: "Seamless integration with your Employee Assistance Program. Confidential counseling referrals with same-week availability." },
    { title: "Wellness Analytics", desc: "De-identified aggregate health data to track program ROI. Quarterly reports on utilization, outcomes, and employee satisfaction." },
    { title: "Health Screenings", desc: "Annual biometric screenings, flu clinics, and preventive health fairs. Customizable to your workforce demographics." },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <div style={{ fontFamily: "'Noto Sans', sans-serif", backgroundColor: "#e8f4f8" }} className="min-h-screen text-gray-800">
        {/* Nav */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-10">
              <span className="text-xl font-bold" style={{ color: "#0d9488" }}>VitalPath</span>
              <div className="hidden lg:flex gap-7 text-sm text-gray-600 font-medium">
                <a href="#" className="hover:text-gray-900">Services</a>
                <a href="#" className="hover:text-gray-900">Locations</a>
                <a href="#" className="hover:text-gray-900">Insurance</a>
                <a href="#" className="hover:text-gray-900">Corporate</a>
                <a href="#" className="hover:text-gray-900">Patient Portal</a>
                <a href="#" className="hover:text-gray-900">Careers</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm font-medium text-gray-600">Patient Login</a>
              <a href="#" className="text-sm text-white px-5 py-2.5 rounded-lg font-semibold" style={{ backgroundColor: "#0d9488" }}>Book Appointment</a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">Complete wellness care,<br />close to home</h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">VitalPath Wellness Centers bring together physical therapy, nutrition, mental health, and fitness under one roof. Five locations across the West and Midwest, accepting all major insurance plans.</p>
              <div className="flex gap-4">
                <a href="#" className="px-6 py-3.5 text-white rounded-lg font-semibold" style={{ backgroundColor: "#0d9488" }}>Find a Location</a>
                <a href="#" className="px-6 py-3.5 border border-gray-300 rounded-lg font-semibold bg-white">View Services</a>
              </div>
            </div>
            <div className="bg-white rounded-xl h-72 flex items-center justify-center shadow-sm">
              <p className="text-gray-400 text-sm">Facility Photo</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Services</h2>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">Integrated care teams that communicate and coordinate so you do not have to. One patient record, one care plan, multiple specialties.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <div key={i} className="p-8 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-5" style={{ backgroundColor: "#0d9488" }}>{s.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{s.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Locations</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {locations.map((loc, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#0d9488" }}>{loc.city}</h3>
                  <p className="text-xs text-gray-600 mb-1">{loc.address}</p>
                  <p className="text-xs text-gray-600 mb-1">{loc.phone}</p>
                  <p className="text-xs text-gray-400 mt-2">{loc.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Insurance Accepted</h2>
            <p className="text-gray-500 mb-10 max-w-xl mx-auto">We accept most major insurance plans. Contact your local center for plan-specific details and prior authorization assistance.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {insurance.map((ins, i) => (
                <span key={i} className="bg-gray-50 border border-gray-200 px-5 py-2.5 rounded-lg text-sm font-medium text-gray-700">{ins}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Programs */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Corporate Wellness Programs</h2>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">Partner with VitalPath to bring comprehensive wellness to your workforce. Proven outcomes, measurable ROI, and happier employees.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {corporateFeatures.map((f, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Patient Portal + Book */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-xl border border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Patient Portal</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">Access your health records, lab results, treatment plans, and appointment history. Message your care team and request prescription refills, all in one secure portal.</p>
              <a href="#" className="text-sm font-semibold" style={{ color: "#0d9488" }}>Log In to Portal &rarr;</a>
            </div>
            <div className="p-8 rounded-xl text-white" style={{ backgroundColor: "#0d9488" }}>
              <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
              <p className="text-white/80 mb-6 leading-relaxed text-sm">New and returning patients can book online. Most appointments available within 48 hours. Walk-ins welcome at all locations for urgent care needs.</p>
              <a href="#" className="inline-block bg-white px-6 py-3 rounded-lg text-sm font-semibold" style={{ color: "#0d9488" }}>Schedule Now</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-14 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <span className="text-lg font-bold text-white">VitalPath</span>
              <p className="mt-3 leading-relaxed">Comprehensive wellness care across five locations. Accepting new patients.</p>
              <p className="mt-2">General Inquiries: (800) 555-0199</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Services</h4>
              <div className="space-y-2"><p>Physical Therapy</p><p>Nutrition</p><p>Mental Health</p><p>Fitness</p></div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Locations</h4>
              <div className="space-y-2">{locations.map((l, i) => <p key={i}>{l.city}</p>)}</div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Resources</h4>
              <div className="space-y-2"><p>Patient Portal</p><p>Insurance</p><p>Careers</p><p>Privacy Policy</p></div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800 text-xs text-center">
            &copy; 2026 VitalPath Wellness Centers, LLC. All rights reserved. HIPAA compliant.
          </div>
        </footer>
      </div>
    </>
  );
}
