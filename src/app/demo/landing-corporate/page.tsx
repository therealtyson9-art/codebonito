export const dynamic = "force-dynamic";
export default function LandingCorporateDemo() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Libre Franklin', sans-serif", backgroundColor: "#eff6ff", color: "#1e3a5f" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>

      {/* Standard Bar Nav */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight" style={{ color: "#1e3a5f" }}>Sentinel Insurance</span>
          <div className="hidden md:flex gap-8 text-sm font-medium" style={{ color: "#1e3a5f" }}>
            <span className="cursor-pointer hover:opacity-70">Coverage</span>
            <span className="cursor-pointer hover:opacity-70">Industries</span>
            <span className="cursor-pointer hover:opacity-70">Claims</span>
            <span className="cursor-pointer hover:opacity-70">About</span>
            <span className="cursor-pointer hover:opacity-70">Resources</span>
          </div>
          <button className="px-6 py-2 rounded text-white text-sm font-semibold" style={{ backgroundColor: "#1e3a5f" }}>Get a Quote</button>
        </div>
      </nav>

      {/* Split Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#2563eb" }}>Business Insurance That Works as Hard as You Do</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#1e3a5f" }}>
            Protect What You&apos;ve Built. Plan for What&apos;s Next.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            For over 35 years, Sentinel Insurance has been the trusted partner for mid-market businesses across North America. From general liability to cyber risk, we structure coverage that fits your actual operations — not a template.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 rounded text-white font-semibold" style={{ backgroundColor: "#1e3a5f" }}>Explore Coverage</button>
            <button className="px-8 py-3 rounded font-semibold border-2" style={{ borderColor: "#1e3a5f", color: "#1e3a5f" }}>Speak to an Advisor</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold mb-6" style={{ color: "#1e3a5f" }}>Get Your Free Quote</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-600">Business Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded text-sm" placeholder="Your company name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-600">Industry</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded text-sm text-gray-500">
                <option>Select your industry</option>
                <option>Technology</option>
                <option>Manufacturing</option>
                <option>Healthcare</option>
                <option>Professional Services</option>
                <option>Retail &amp; Hospitality</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-600">Annual Revenue</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded text-sm text-gray-500">
                <option>Select range</option>
                <option>Under $1M</option>
                <option>$1M - $10M</option>
                <option>$10M - $50M</option>
                <option>$50M+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-600">Email Address</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded text-sm" placeholder="you@company.com" />
            </div>
            <button className="w-full py-3 rounded text-white font-semibold" style={{ backgroundColor: "#1e3a5f" }}>Request My Quote</button>
            <p className="text-xs text-gray-400 text-center">Response within 1 business day. No obligations.</p>
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#1e3a5f" }}>Comprehensive Coverage Solutions</h2>
          <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">Tailored policies that address the specific risks your industry faces, backed by dedicated claims support.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "General Liability", desc: "Protection against third-party bodily injury, property damage, and advertising injury claims that could disrupt your operations.", icon: "GL" },
              { title: "Professional Liability", desc: "Errors and omissions coverage for service-based businesses. Defends against claims of negligence, mistakes, or failure to deliver.", icon: "PL" },
              { title: "Cyber Risk", desc: "Data breach response, ransomware recovery, regulatory defense, and business interruption from cyber incidents.", icon: "CR" },
              { title: "Commercial Property", desc: "Building, equipment, inventory, and business income protection. Covers fire, theft, weather, and equipment breakdown.", icon: "CP" },
            ].map((c, i) => (
              <div key={i} className="rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow" style={{ backgroundColor: "#eff6ff" }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-sm font-bold mb-4" style={{ backgroundColor: "#1e3a5f" }}>{c.icon}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1e3a5f" }}>{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: "#1e3a5f" }}>Why Businesses Choose Sentinel</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "35+ Years of Experience", desc: "Since 1989, we have insured over 12,000 businesses across 23 industries. Our underwriters understand your risk because they have spent decades studying it." },
              { title: "Claims Paid in 14 Days", desc: "Our average claims resolution time is 14 business days — 3x faster than the industry average. When something goes wrong, you need capital, not paperwork." },
              { title: "Dedicated Risk Advisors", desc: "Every Sentinel client is assigned a named risk advisor who conducts annual policy reviews and proactively identifies coverage gaps before they become problems." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: "#1e3a5f" }}>{i + 1}</div>
                <h3 className="font-bold text-xl mb-3" style={{ color: "#1e3a5f" }}>{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1e3a5f" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { stat: "12,000+", label: "Businesses Insured" },
            { stat: "98.4%", label: "Client Retention Rate" },
            { stat: "$2.1B", label: "Claims Paid Since 2010" },
            { stat: "14 Days", label: "Avg. Claims Resolution" },
          ].map((s, i) => (
            <div key={i}>
              <span className="text-4xl md:text-5xl font-bold block">{s.stat}</span>
              <span className="text-sm text-blue-200 mt-2 block">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm text-gray-400 mb-8 uppercase tracking-wider font-medium">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {["Apex Manufacturing", "TechCore Solutions", "Harbor Health", "Pinnacle Logistics", "CrestView Hotels", "Meridian Group"].map((name, i) => (
              <div key={i} className="px-6 py-3 border border-gray-200 rounded text-sm font-medium text-gray-400">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1e3a5f" }}>Get the Coverage Your Business Deserves</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">Speak with a Sentinel risk advisor today. We will review your current coverage, identify gaps, and provide a no-obligation quote within 24 hours.</p>
          <div className="flex justify-center gap-4">
            <button className="px-10 py-4 rounded text-white font-semibold" style={{ backgroundColor: "#1e3a5f" }}>Request a Quote</button>
            <button className="px-10 py-4 rounded font-semibold border-2" style={{ borderColor: "#1e3a5f", color: "#1e3a5f" }}>Call 1-800-SENTINEL</button>
          </div>
        </div>
      </section>

      {/* Multi-Column Corporate Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4" style={{ color: "#1e3a5f" }}>Sentinel Insurance</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Protecting American businesses since 1989. Licensed in all 50 states. A.M. Best rated A (Excellent).</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm" style={{ color: "#1e3a5f" }}>Coverage</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>General Liability</li>
              <li>Professional Liability</li>
              <li>Cyber Insurance</li>
              <li>Commercial Property</li>
              <li>Workers Compensation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm" style={{ color: "#1e3a5f" }}>Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Risk Assessment Tools</li>
              <li>Industry Reports</li>
              <li>Claims Center</li>
              <li>Policy Documents</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm" style={{ color: "#1e3a5f" }}>Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>About Sentinel</li>
              <li>Leadership Team</li>
              <li>Careers</li>
              <li>Press Room</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between text-xs text-gray-400">
          <span>&copy; 2025 Sentinel Insurance Group, LLC. All rights reserved.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Disclosures</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
