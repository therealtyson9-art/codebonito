export default function FitnessCorporateDemo() {
  const navLinks = ["Programs", "Locations", "Corporate", "About", "Contact"]

  const programs = [
    { name: "Personal Training", desc: "One-on-one sessions with certified trainers tailored to your individual goals, schedule, and fitness level.", icon: "PT" },
    { name: "Group Fitness", desc: "Over 200 weekly classes including cycling, yoga, Zumba, and functional training for every experience level.", icon: "GF" },
    { name: "Corporate Wellness", desc: "On-site programs, employee fitness assessments, and subsidized memberships for organizations of all sizes.", icon: "CW" },
    { name: "Rehabilitation", desc: "Medically supervised recovery programs working alongside physical therapists and orthopedic specialists.", icon: "RH" },
    { name: "Nutrition Coaching", desc: "Registered dietitians create personalized meal plans and provide ongoing accountability coaching.", icon: "NC" },
    { name: "Kids Programs", desc: "Age-appropriate fitness classes, swim lessons, and youth sports training for children ages 5 to 17.", icon: "KP" },
  ]

  const locations = [
    { name: "Downtown Portland", address: "200 SW Market St, Portland, OR 97201", sqft: "45,000 sq ft", hours: "5:00 AM - 11:00 PM", phone: "(503) 555-0120" },
    { name: "Pearl District", address: "1050 NW Hoyt St, Portland, OR 97209", sqft: "32,000 sq ft", hours: "5:30 AM - 10:00 PM", phone: "(503) 555-0134" },
    { name: "Lake Oswego", address: "400 A Ave, Lake Oswego, OR 97034", sqft: "28,000 sq ft", hours: "6:00 AM - 9:00 PM", phone: "(503) 555-0148" },
  ]

  const certifications = [
    { name: "ACE", full: "American Council on Exercise" },
    { name: "NASM", full: "National Academy of Sports Medicine" },
    { name: "NSCA", full: "National Strength & Conditioning Association" },
    { name: "ACSM", full: "American College of Sports Medicine" },
  ]

  const partnerships = [
    "Intel Corporation", "Nike", "Columbia Sportswear", "Providence Health", "Oregon Health & Science University", "Daimler Trucks"
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">SF</div>
            <span className="text-lg font-semibold text-gray-900">Summit Fitness</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <span key={link} className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer transition-colors">{link}</span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 cursor-pointer hover:text-blue-600">Member Login</span>
            <span className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded cursor-pointer hover:bg-blue-700 transition-colors">Get Started</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-200 text-sm font-medium mb-4">Trusted by 50,000+ members across 3 locations</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Professional fitness solutions for every goal.</h1>
            <p className="text-blue-100 mt-6 leading-relaxed max-w-lg">From personal training to corporate wellness programs, Summit Fitness delivers evidence-based fitness programming backed by certified professionals.</p>
            <div className="mt-8 flex gap-4">
              <span className="px-6 py-3 bg-white text-blue-700 text-sm font-semibold rounded cursor-pointer hover:bg-blue-50 transition-colors">Schedule a Tour</span>
              <span className="px-6 py-3 border border-white/30 text-white text-sm rounded cursor-pointer hover:bg-white/10 transition-colors">View Programs</span>
            </div>
          </div>
          <div className="h-80 bg-blue-500/30 rounded-lg border border-white/10" />
        </div>
      </section>

      {/* Programs */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 font-semibold mb-2">Our Programs</p>
          <h2 className="text-3xl font-bold text-gray-900">Comprehensive Fitness Solutions</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Our programs are designed by certified professionals using evidence-based methodologies to deliver measurable results.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <div key={prog.name} className="border border-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 text-sm font-bold mb-6">{prog.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{prog.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{prog.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-sm text-blue-600 font-semibold mb-2">Find a Location</p>
            <h2 className="text-3xl font-bold text-gray-900">Three Locations, One Standard</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div key={loc.name} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <div className="h-40 bg-gradient-to-br from-gray-100 to-blue-50 rounded mb-6" />
                <h3 className="text-lg font-semibold text-gray-900">{loc.name}</h3>
                <p className="text-sm text-gray-500 mt-2">{loc.address}</p>
                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <p>Facility: {loc.sqft}</p>
                  <p>Hours: {loc.hours}</p>
                  <p>{loc.phone}</p>
                </div>
                <span className="inline-block mt-6 text-sm text-blue-600 font-medium cursor-pointer hover:text-blue-800">View Details &rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <p className="text-sm text-blue-600 font-semibold mb-2">Industry Certifications</p>
          <h2 className="text-3xl font-bold text-gray-900">Accredited Excellence</h2>
          <p className="text-gray-500 mt-4">Every trainer on our team holds nationally recognized certifications.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex items-center gap-4 bg-gray-50 rounded-lg px-8 py-4">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">{cert.name}</div>
              <span className="text-sm text-gray-600">{cert.full}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Partnership */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <p className="text-blue-200 text-sm font-medium mb-2">Corporate Wellness</p>
          <h2 className="text-3xl font-bold mb-4">Partner With Summit Fitness</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">We provide customized wellness solutions for companies of all sizes. Reduce healthcare costs, improve employee retention, and build a healthier workforce.</p>
          <p className="text-sm text-blue-200 mb-6">Trusted by leading organizations in the Pacific Northwest</p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {partnerships.map((p) => (
              <span key={p} className="bg-white/10 px-6 py-3 rounded text-sm">{p}</span>
            ))}
          </div>
          <span className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold text-sm rounded cursor-pointer hover:bg-blue-50 transition-colors">Request a Proposal</span>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-sm text-blue-600 font-semibold mb-2">Contact Us</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-gray-500 mb-10">Have questions about our programs or corporate partnerships? Our team is ready to help.</p>
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-6">
          <input type="text" placeholder="Full Name" className="px-4 py-3 border border-gray-200 rounded text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500" readOnly />
          <input type="text" placeholder="Email" className="px-4 py-3 border border-gray-200 rounded text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500" readOnly />
          <input type="text" placeholder="Company (optional)" className="col-span-2 px-4 py-3 border border-gray-200 rounded text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500" readOnly />
          <textarea placeholder="Message" className="col-span-2 px-4 py-3 border border-gray-200 rounded text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500 h-24 resize-none" readOnly />
        </div>
        <span className="inline-block px-8 py-3 bg-blue-600 text-white text-sm font-medium rounded cursor-pointer hover:bg-blue-700 transition-colors">Send Message</span>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">SF</div>
              <span className="font-semibold">Summit Fitness</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">Professional fitness solutions for individuals, families, and organizations since 2012.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Programs</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="cursor-pointer hover:text-white">Personal Training</p>
              <p className="cursor-pointer hover:text-white">Group Fitness</p>
              <p className="cursor-pointer hover:text-white">Corporate Wellness</p>
              <p className="cursor-pointer hover:text-white">Rehabilitation</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="cursor-pointer hover:text-white">About Us</p>
              <p className="cursor-pointer hover:text-white">Careers</p>
              <p className="cursor-pointer hover:text-white">Press</p>
              <p className="cursor-pointer hover:text-white">Privacy Policy</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="cursor-pointer hover:text-white">LinkedIn</p>
              <p className="cursor-pointer hover:text-white">Instagram</p>
              <p className="cursor-pointer hover:text-white">Facebook</p>
              <p className="cursor-pointer hover:text-white">info@summitfitness.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-gray-500">&copy; 2026 Summit Fitness Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
