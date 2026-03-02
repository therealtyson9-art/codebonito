export default function FoodCorporateDemo() {
  const navLinks = ["Services", "Menu Packages", "About", "Food Safety", "Contact"]

  const services = [
    { title: "Corporate Catering", desc: "Daily meal programs, meeting lunches, and executive dining services for offices of any size. Customized menus that keep your team energized.", icon: "🏢" },
    { title: "Event Planning", desc: "Full-service catering for conferences, product launches, and corporate galas. From hors d'oeuvres to plated five-course dinners.", icon: "🎪" },
    { title: "Meal Programs", desc: "Ongoing weekly or monthly meal plans for hospitals, schools, and senior living facilities with rotating seasonal menus.", icon: "📋" },
    { title: "Dietary Consulting", desc: "On-staff registered dietitians who design menus meeting specific nutritional requirements, allergen protocols, and cultural preferences.", icon: "🥗" },
  ]

  const packages = [
    { name: "Essential", price: "$28", unit: "per person", features: ["Choice of 3 entrees", "2 sides included", "Beverages & water", "Standard service ware", "Setup & cleanup"], highlight: false },
    { name: "Premium", price: "$45", unit: "per person", features: ["Choice of 5 entrees", "3 sides & salad bar", "Full beverage service", "Premium service ware", "Dedicated staff", "Custom signage"], highlight: true },
    { name: "Executive", price: "$72", unit: "per person", features: ["Fully custom menu", "Unlimited sides & stations", "Wine & cocktail service", "Fine china & linens", "Chef on-site", "Event coordinator", "Floral arrangements"], highlight: false },
  ]

  const certifications = [
    { name: "HACCP Certified", desc: "Hazard Analysis and Critical Control Points compliance across all operations" },
    { name: "ServSafe Accredited", desc: "All kitchen staff hold current ServSafe food handler certifications" },
    { name: "SQF Level 2", desc: "Safe Quality Food certification for manufacturing and distribution" },
    { name: "Organic Certified", desc: "USDA Organic certification for our organic menu line" },
  ]

  const clients = ["Fortune 500 Tech Co.", "Regional Medical Center", "State University System", "National Law Firm", "Downtown Hotel Group", "City School District"]

  return (
    <div className="min-h-screen bg-white text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-wide">Cornerstone Food Services</span>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <span key={link} className="text-sm text-blue-200 hover:text-white cursor-pointer transition-colors">{link}</span>
            ))}
          </div>
          <span className="px-5 py-2 bg-white text-blue-800 text-sm font-medium rounded cursor-pointer hover:bg-blue-50 transition-colors">Request Quote</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-28 text-center">
          <p className="text-sm text-blue-300 mb-4 font-medium">Trusted by 200+ Organizations Nationwide</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Catering solutions for<br />every occasion</h1>
          <p className="text-lg text-blue-200 mt-6 max-w-xl mx-auto">Professional food service management, corporate catering, and event dining backed by 25 years of operational excellence.</p>
          <div className="mt-10 flex justify-center gap-4">
            <span className="px-8 py-3 bg-white text-blue-800 text-sm font-semibold rounded cursor-pointer hover:bg-blue-50 transition-colors">Get a Proposal</span>
            <span className="px-8 py-3 border border-blue-400 text-blue-200 text-sm rounded cursor-pointer hover:border-white hover:text-white transition-colors">Our Services</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-sm text-blue-700 font-medium mb-2">What We Offer</p>
          <h2 className="text-3xl font-semibold text-gray-900">Comprehensive Food Services</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((svc) => (
            <div key={svc.title} className="border border-gray-200 rounded-lg p-8 hover:shadow-md transition-shadow">
              <span className="text-2xl">{svc.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-4">{svc.title}</h3>
              <p className="text-sm text-gray-500 mt-3 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Packages */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-sm text-blue-700 font-medium mb-2">Pricing</p>
            <h2 className="text-3xl font-semibold text-gray-900">Menu Packages</h2>
            <p className="text-gray-500 mt-3">Minimum 20 guests. All packages include dietary accommodations upon request.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`rounded-lg p-8 ${pkg.highlight ? "bg-blue-800 text-white ring-2 ring-blue-800" : "bg-white border border-gray-200"}`}>
                <h3 className={`text-xl font-semibold ${pkg.highlight ? "text-white" : "text-gray-900"}`}>{pkg.name}</h3>
                <div className="mt-4">
                  <span className={`text-4xl font-bold ${pkg.highlight ? "text-white" : "text-blue-800"}`}>{pkg.price}</span>
                  <span className={`text-sm ml-1 ${pkg.highlight ? "text-blue-200" : "text-gray-400"}`}>{pkg.unit}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className={`text-sm flex items-start gap-2 ${pkg.highlight ? "text-blue-100" : "text-gray-600"}`}>
                      <span className={pkg.highlight ? "text-blue-300" : "text-blue-600"}>&#10003;</span> {f}
                    </li>
                  ))}
                </ul>
                <span className={`inline-block w-full text-center mt-8 py-3 text-sm font-medium rounded cursor-pointer transition-colors ${pkg.highlight ? "bg-white text-blue-800 hover:bg-blue-50" : "bg-blue-800 text-white hover:bg-blue-700"}`}>
                  Request Quote
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <p className="text-center text-sm text-gray-400 mb-8">Trusted by organizations across healthcare, education, and enterprise</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {clients.map((client) => (
              <div key={client} className="h-16 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400 text-center px-2">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Safety */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-sm text-blue-700 font-medium mb-2">Compliance</p>
          <h2 className="text-3xl font-semibold text-gray-900">Food Safety Certifications</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex items-start gap-4 border border-gray-200 rounded-lg p-6">
              <span className="text-blue-700 mt-0.5">&#9679;</span>
              <div>
                <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-location Map */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <p className="text-sm text-blue-700 font-medium mb-2">Coverage</p>
            <h2 className="text-3xl font-semibold text-gray-900">We Serve 12 Metro Areas</h2>
          </div>
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-sm">Interactive service area map</span>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">Operating commercial kitchens in New York, Chicago, Los Angeles, Houston, Phoenix, Philadelphia, San Antonio, San Diego, Dallas, Denver, Seattle, and Miami.</p>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-sm text-blue-700 font-medium mb-2">Get in Touch</p>
          <h2 className="text-3xl font-semibold text-gray-900">Request a Consultation</h2>
          <p className="text-gray-500 mt-3">Our team responds within one business day.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <input type="text" placeholder="Company Name" className="px-4 py-3 border border-gray-300 rounded text-sm outline-none focus:border-blue-600" readOnly />
          <input type="text" placeholder="Contact Name" className="px-4 py-3 border border-gray-300 rounded text-sm outline-none focus:border-blue-600" readOnly />
          <input type="text" placeholder="Email Address" className="px-4 py-3 border border-gray-300 rounded text-sm outline-none focus:border-blue-600" readOnly />
          <input type="text" placeholder="Phone Number" className="px-4 py-3 border border-gray-300 rounded text-sm outline-none focus:border-blue-600" readOnly />
          <textarea placeholder="Tell us about your needs..." className="px-4 py-3 border border-gray-300 rounded text-sm outline-none focus:border-blue-600 md:col-span-2 h-24 resize-none" readOnly />
          <span className="md:col-span-2 text-center py-3 bg-blue-800 text-white text-sm font-medium rounded cursor-pointer hover:bg-blue-700 transition-colors">Submit Inquiry</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <span className="text-lg font-semibold">Cornerstone Food Services</span>
            <p className="text-sm text-gray-400 mt-2">Professional food service management and catering since 2001.</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-3">Contact</p>
            <p className="text-sm text-gray-400">info@cornerstonefoodservices.com</p>
            <p className="text-sm text-gray-400 mt-1">(800) 555-0198</p>
            <p className="text-sm text-gray-400 mt-1">200 Commerce Drive, Suite 400, Chicago, IL 60601</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-3">Certifications</p>
            <p className="text-sm text-gray-400">HACCP &middot; ServSafe &middot; SQF Level 2 &middot; USDA Organic</p>
            <p className="text-xs text-gray-600 mt-4">&copy; 2026 Cornerstone Food Services, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
