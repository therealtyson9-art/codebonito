export default function MedicalBrutalistDemo() {
  const navLinks = ["SERVICES", "REGISTRY", "DATA", "EMERGENCY"]
  const stats = [
    { value: "47,821", label: "PATIENTS TREATED / YEAR" },
    { value: "99.2%", label: "DIAGNOSTIC ACCURACY" },
    { value: "< 8min", label: "AVG ER WAIT TIME" },
    { value: "342", label: "CLINICAL STAFF" },
  ]
  const services = [
    { code: "SVC-001", name: "EMERGENCY MEDICINE", desc: "Level I trauma center. 24/7 staffed. Average door-to-provider time: 7 minutes. All critical care protocols active." },
    { code: "SVC-002", name: "DIAGNOSTIC IMAGING", desc: "CT, MRI, PET, X-Ray, Ultrasound. 3T MRI available. Results uploaded to patient record within 2 hours of scan completion." },
    { code: "SVC-003", name: "SURGICAL SERVICES", desc: "12 operating suites. Robotic-assisted surgery available. Orthopedic, cardiac, neuro, and general surgery. Pre-op clearance required." },
    { code: "SVC-004", name: "LABORATORY", desc: "CAP-accredited full-service lab. Stat results in 45 minutes. Routine panels returned within 4 hours. Genomic testing available." },
    { code: "SVC-005", name: "INTENSIVE CARE", desc: "32-bed ICU. 1:2 nurse-to-patient ratio. Continuous hemodynamic monitoring. Ventilator and ECMO capability on-site." },
    { code: "SVC-006", name: "PHARMACY", desc: "In-house formulary with 2,400+ medications. Automated dispensing. Pharmacist review on all orders. 24/7 availability." },
  ]
  const doctors = [
    { id: "PHY-0041", name: "BROOKS, DAVID R.", dept: "EMERGENCY", board: "ABEM", lic: "MD-48291", status: "ACTIVE" },
    { id: "PHY-0087", name: "NAKAMURA, YUKI", dept: "RADIOLOGY", board: "ABR", lic: "MD-55102", status: "ACTIVE" },
    { id: "PHY-0103", name: "OKAFOR, CHIOMA N.", dept: "SURGERY", board: "ABS", lic: "MD-61238", status: "ACTIVE" },
    { id: "PHY-0156", name: "PETROV, ELENA S.", dept: "INTERNAL MED", board: "ABIM", lic: "MD-39847", status: "ACTIVE" },
    { id: "PHY-0201", name: "RAMIREZ, CARLOS J.", dept: "CARDIOLOGY", board: "ABIM-CV", lic: "MD-72014", status: "ACTIVE" },
  ]
  const patientMetrics = [
    { label: "AVG LENGTH OF STAY", value: "3.2 DAYS" },
    { label: "READMISSION RATE (30-DAY)", value: "4.1%" },
    { label: "PATIENT SATISFACTION (HCAHPS)", value: "91/100" },
    { label: "INFECTION RATE (HAI)", value: "0.3%" },
    { label: "MORTALITY INDEX (O/E)", value: "0.74" },
    { label: "BED OCCUPANCY RATE", value: "87%" },
  ]

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">MEDSTAT_</span>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <span key={link} className="text-xs font-bold tracking-widest cursor-pointer hover:bg-black hover:text-white px-2 py-1">{link}</span>
            ))}
          </div>
          <span className="text-xs font-bold tracking-widest bg-red-600 text-white px-4 py-2 cursor-pointer">PORTAL_</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="text-xs font-bold tracking-widest text-red-600 mb-6">// CLINICAL DATA. RAW. UNFILTERED.</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-none tracking-tight mb-8 uppercase">
                Healthcare<br />without the noise.
              </h1>
              <p className="text-sm max-w-lg leading-relaxed mb-10">
                Evidence-based medicine backed by transparent metrics. Every outcome measured. Every protocol documented. No marketing spin on patient data.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-xs font-bold tracking-widest bg-black text-white px-6 py-3 cursor-pointer">ACCESS RECORDS_</span>
                <span className="text-xs font-bold tracking-widest border-2 border-black px-6 py-3 cursor-pointer">VIEW METRICS_</span>
              </div>
            </div>
            <div className="md:col-span-4 flex items-end">
              <div className="w-full border-4 border-black p-6">
                <p className="text-xs font-bold tracking-widest mb-2">FACILITY STATUS</p>
                <p className="text-xs mb-1">ER: <span className="text-red-600 font-bold">OPERATIONAL</span></p>
                <p className="text-xs mb-1">BEDS AVAILABLE: <span className="font-bold">41 / 312</span></p>
                <p className="text-xs mb-1">OR SUITES ACTIVE: <span className="font-bold">9 / 12</span></p>
                <p className="text-xs mb-1">LAB QUEUE: <span className="font-bold">14 PENDING</span></p>
                <p className="text-xs">LAST UPDATED: <span className="font-bold">08:42:17 UTC</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b-4 border-black bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4">
          {stats.map((m, i) => (
            <div key={m.label} className={`py-6 px-4 ${i < stats.length - 1 ? "md:border-r-4 md:border-white" : ""}`}>
              <p className="text-3xl md:text-4xl font-bold tracking-tight">{m.value}</p>
              <p className="text-xs tracking-widest mt-2 text-gray-400">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical Services */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs font-bold tracking-widest text-red-600 mb-4">// CLINICAL SERVICES</p>
          <h2 className="text-3xl font-bold uppercase tracking-tight mb-14">Service registry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {services.map((s) => (
              <div key={s.code} className="border-2 border-black p-8 -mt-[2px] -ml-[2px]">
                <span className="text-xs font-bold tracking-widest text-red-600">{s.code}</span>
                <h3 className="text-lg font-bold uppercase mt-3 mb-3">{s.name}</h3>
                <p className="text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Registry */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs font-bold tracking-widest text-red-600 mb-4">// PHYSICIAN REGISTRY</p>
          <h2 className="text-3xl font-bold uppercase tracking-tight mb-14">Active staff</h2>
          <div className="border-4 border-black overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-black text-white">
                  <th className="text-left px-4 py-3 font-bold tracking-widest">ID</th>
                  <th className="text-left px-4 py-3 font-bold tracking-widest">NAME</th>
                  <th className="text-left px-4 py-3 font-bold tracking-widest">DEPT</th>
                  <th className="text-left px-4 py-3 font-bold tracking-widest">BOARD</th>
                  <th className="text-left px-4 py-3 font-bold tracking-widest">LICENSE</th>
                  <th className="text-left px-4 py-3 font-bold tracking-widest">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((d, i) => (
                  <tr key={d.id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-bold text-red-600">{d.id}</td>
                    <td className="px-4 py-3 font-bold">{d.name}</td>
                    <td className="px-4 py-3">{d.dept}</td>
                    <td className="px-4 py-3">{d.board}</td>
                    <td className="px-4 py-3">{d.lic}</td>
                    <td className="px-4 py-3"><span className="bg-black text-white px-2 py-0.5">{d.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Patient Data Metrics */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-xs font-bold tracking-widest text-red-600 mb-4">// PATIENT OUTCOMES</p>
          <h2 className="text-3xl font-bold uppercase tracking-tight mb-14">Performance data</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {patientMetrics.map((m) => (
              <div key={m.label} className="border-2 border-black p-6 -mt-[2px] -ml-[2px]">
                <p className="text-xs tracking-widest text-gray-500 mb-2">{m.label}</p>
                <p className="text-2xl font-bold">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="border-b-4 border-black bg-red-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <p className="text-xs font-bold tracking-widest mb-4">// EMERGENCY</p>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">DIAL 911 FOR EMERGENCIES</h2>
          <p className="text-sm max-w-md mx-auto mb-6">
            For non-emergency inquiries, contact our main line. Our triage team is available 24 hours a day, 7 days a week.
          </p>
          <span className="inline-flex text-xs font-bold tracking-widest bg-white text-red-600 px-8 py-3 cursor-pointer">CALL (555) 911-0000_</span>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <span className="text-xs font-bold tracking-widest">&copy; 2026 MEDSTAT_</span>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["HIPAA NOTICE", "PRIVACY", "TERMS", "COMPLIANCE"].map((link) => (
                <span key={link} className="text-xs font-bold tracking-widest text-gray-400 hover:text-black cursor-pointer">{link}</span>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4 leading-relaxed max-w-2xl">
            NOTICE: This facility complies with applicable Federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex. MEDSTAT is a registered entity. All patient data is protected under HIPAA regulations (45 CFR Parts 160 and 164).
          </p>
        </div>
      </footer>
    </div>
  )
}
