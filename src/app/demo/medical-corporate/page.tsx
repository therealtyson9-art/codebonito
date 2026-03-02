export const dynamic = "force-dynamic";
export default function MedicalCorporateDemo() {
  const departments = [
    { name: "Cardiology", icon: "heart", desc: "Advanced cardiac care including interventional procedures, electrophysiology, and heart failure management.", beds: 64 },
    { name: "Neurology", icon: "brain", desc: "Comprehensive neurological services from stroke treatment to epilepsy monitoring and neurodegenerative care.", beds: 48 },
    { name: "Oncology", icon: "shield", desc: "Multidisciplinary cancer treatment with chemotherapy, radiation therapy, immunotherapy, and clinical trials.", beds: 72 },
    { name: "Orthopedics", icon: "bone", desc: "Joint replacement, sports medicine, spinal surgery, and trauma care with advanced robotic-assisted techniques.", beds: 56 },
    { name: "Pediatrics", icon: "child", desc: "Dedicated pediatric emergency, NICU, and subspecialty care for patients from birth through adolescence.", beds: 40 },
    { name: "Emergency Medicine", icon: "ambulance", desc: "Level I trauma center with 24/7 emergency physicians, rapid triage, and helicopter transport capabilities.", beds: 32 },
  ]

  const doctors = [
    { name: "Dr. Patricia Chen, MD, FACC", specialty: "Chief of Cardiology", experience: "22 years", education: "Johns Hopkins School of Medicine" },
    { name: "Dr. Robert Nakamura, MD, PhD", specialty: "Director of Neurosurgery", experience: "18 years", education: "Stanford University School of Medicine" },
    { name: "Dr. Amara Osei, MD, FACS", specialty: "Chief of Surgery", experience: "25 years", education: "Harvard Medical School" },
    { name: "Dr. James Whitfield, MD", specialty: "Emergency Medicine Director", experience: "15 years", education: "University of Pennsylvania" },
  ]

  const insuranceProviders = [
    "Blue Cross Blue Shield", "Aetna", "UnitedHealthcare", "Cigna", "Humana",
    "Kaiser Permanente", "Medicare", "Medicaid", "Tricare", "Anthem",
  ]

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: "#eff6ff" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />

      {/* Institutional Nav */}
      <nav style={{ backgroundColor: "#1d4ed8" }} className="text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-2 text-xs border-b border-blue-500">
            <div className="flex gap-4">
              <span>Patient Portal</span>
              <span>Pay My Bill</span>
              <span>Careers</span>
            </div>
            <div className="flex gap-4">
              <span>Emergency: (555) 911-0000</span>
              <span>Main: (555) 400-1000</span>
            </div>
          </div>
          <div className="flex items-center justify-between py-4">
            <div>
              <h1 className="text-2xl font-black tracking-tight">METRO GENERAL HOSPITAL</h1>
              <p className="text-blue-200 text-xs font-light tracking-widest uppercase">Excellence in Patient Care Since 1952</p>
            </div>
            <div className="flex items-center gap-8 text-sm font-bold">
              <span className="cursor-pointer hover:text-blue-200">Departments</span>
              <span className="cursor-pointer hover:text-blue-200">Find a Doctor</span>
              <span className="cursor-pointer hover:text-blue-200">Patients & Visitors</span>
              <span className="cursor-pointer hover:text-blue-200">Research</span>
              <span className="cursor-pointer hover:text-blue-200">About Us</span>
              <span style={{ backgroundColor: "#fbbf24", color: "#1d4ed8" }} className="px-4 py-2 rounded text-xs font-black">EMERGENCY</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hospital Exterior Hero */}
      <section style={{ backgroundColor: "#1e3a5f" }} className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24 flex items-center">
          <div className="w-1/2 text-white">
            <h2 className="text-5xl font-black leading-tight mb-6">Your Health Is Our Mission</h2>
            <p className="text-blue-200 text-lg font-light leading-relaxed mb-8">
              Metro General Hospital has served our community for over 70 years with world-class medical care,
              groundbreaking research, and compassionate service. Our 800-bed facility and 2,400 medical
              professionals are here for you around the clock.
            </p>
            <div className="flex gap-4">
              <span style={{ backgroundColor: "#1d4ed8" }} className="px-6 py-3 rounded font-bold text-sm cursor-pointer">Find a Doctor</span>
              <span className="border border-white px-6 py-3 rounded font-bold text-sm cursor-pointer">Patient Portal</span>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="w-96 h-64 bg-blue-800 rounded-lg flex items-center justify-center text-blue-400 text-sm">
              [ Hospital Exterior Photo ]
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p style={{ color: "#1d4ed8" }} className="text-sm font-bold uppercase tracking-widest mb-2">Centers of Excellence</p>
          <h3 style={{ color: "#1e293b" }} className="text-4xl font-black">Our Departments</h3>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div key={dept.name} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-blue-100">
              <div className="flex items-center justify-between mb-4">
                <h4 style={{ color: "#1d4ed8" }} className="text-xl font-bold">{dept.name}</h4>
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">{dept.beds} beds</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{dept.desc}</p>
              <p style={{ color: "#1d4ed8" }} className="text-sm font-bold mt-4 cursor-pointer">Learn More &rarr;</p>
            </div>
          ))}
        </div>
      </section>

      {/* Find a Doctor */}
      <section style={{ backgroundColor: "#1d4ed8" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-black text-white text-center mb-10">Find a Doctor</h3>
          <div className="grid grid-cols-4 gap-6">
            {doctors.map((doc) => (
              <div key={doc.name} className="bg-white rounded-lg p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full mb-4 flex items-center justify-center text-blue-400 text-xs">Photo</div>
                <h4 className="font-bold text-gray-900 text-sm">{doc.name}</h4>
                <p style={{ color: "#1d4ed8" }} className="text-xs font-bold mt-1">{doc.specialty}</p>
                <p className="text-gray-500 text-xs mt-2">{doc.experience} experience</p>
                <p className="text-gray-400 text-xs">{doc.education}</p>
                <span style={{ color: "#1d4ed8" }} className="text-xs font-bold mt-3 block cursor-pointer">View Profile &rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Portal & Visiting Hours */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 gap-12">
        <div className="bg-white rounded-lg p-8 shadow-sm border border-blue-100">
          <h3 style={{ color: "#1d4ed8" }} className="text-2xl font-black mb-4">Patient Portal</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Access your medical records, view test results, request prescription refills,
            schedule appointments, and communicate securely with your care team — all from the
            convenience of your home.
          </p>
          <ul className="space-y-2 text-sm text-gray-700 mb-6">
            <li className="flex items-center gap-2"><span style={{ color: "#1d4ed8" }} className="font-bold">+</span> View lab results and imaging reports</li>
            <li className="flex items-center gap-2"><span style={{ color: "#1d4ed8" }} className="font-bold">+</span> Message your physician directly</li>
            <li className="flex items-center gap-2"><span style={{ color: "#1d4ed8" }} className="font-bold">+</span> Request prescription renewals</li>
            <li className="flex items-center gap-2"><span style={{ color: "#1d4ed8" }} className="font-bold">+</span> Schedule and manage appointments</li>
          </ul>
          <span style={{ backgroundColor: "#1d4ed8" }} className="text-white px-6 py-3 rounded font-bold text-sm cursor-pointer inline-block">Log In to Patient Portal</span>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-sm border border-blue-100">
          <h3 style={{ color: "#1d4ed8" }} className="text-2xl font-black mb-4">Visiting Hours</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            We encourage visits from family and friends as part of the healing process.
            Please follow our visiting guidelines to ensure the safety of all patients.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-bold text-gray-800">General Floors</span>
              <span className="text-gray-600">10:00 AM - 8:00 PM</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-bold text-gray-800">ICU / Critical Care</span>
              <span className="text-gray-600">12:00 PM - 2:00 PM, 6:00 PM - 8:00 PM</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-bold text-gray-800">Maternity Ward</span>
              <span className="text-gray-600">8:00 AM - 9:00 PM</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="font-bold text-gray-800">Pediatric Unit</span>
              <span className="text-gray-600">Parents: 24/7 | Visitors: 10 AM - 7 PM</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-bold text-gray-800">Emergency Department</span>
              <span className="text-gray-600">One visitor at a time, 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Accepted */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 style={{ color: "#1e293b" }} className="text-3xl font-black mb-3">Insurance Accepted</h3>
          <p className="text-gray-500 text-sm mb-8">We accept most major insurance plans. Contact our billing department for specific coverage questions.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {insuranceProviders.map((provider) => (
              <span key={provider} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">{provider}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <section style={{ backgroundColor: "#dc2626" }} className="py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h3 className="text-3xl font-black mb-3">Emergency Services</h3>
          <p className="text-red-100 text-lg font-light mb-2">Level I Trauma Center &mdash; Open 24 Hours, 7 Days a Week</p>
          <p className="text-4xl font-black mt-4">(555) 911-0000</p>
          <p className="text-red-200 text-sm mt-2">If you are experiencing a life-threatening emergency, call 911 immediately.</p>
        </div>
      </section>

      {/* Institutional Footer */}
      <footer style={{ backgroundColor: "#0f172a" }} className="text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-black text-sm mb-4">METRO GENERAL HOSPITAL</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                1200 Medical Center Drive<br />
                Metropolitan City, ST 10001<br />
                Main: (555) 400-1000
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">For Patients</h4>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li>Patient Portal</li><li>Billing & Insurance</li><li>Medical Records</li><li>Patient Rights</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">For Visitors</h4>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li>Campus Map</li><li>Parking Information</li><li>Gift Shop</li><li>Cafeteria Hours</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-4">For Professionals</h4>
              <ul className="space-y-2 text-gray-400 text-xs">
                <li>Physician Referrals</li><li>Research Programs</li><li>Residency Programs</li><li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex justify-between items-center">
            <p className="text-gray-500 text-xs">&copy; 2024 Metro General Hospital. All rights reserved.</p>
            <p style={{ color: "#dc2626" }} className="text-sm font-black">EMERGENCY: (555) 911-0000</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
