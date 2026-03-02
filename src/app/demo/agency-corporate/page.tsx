export default function AgencyCorporateDemo() {
  const navItems = ["Services", "Case Studies", "Leadership", "Industries", "Contact"];

  const clientLogos = [
    "Deloitte", "McKinsey", "Bain", "BCG", "Accenture", "Goldman Sachs", "JPMorgan", "Blackstone",
  ];

  const services = [
    { title: "Corporate Strategy", description: "We help organizations define their strategic direction, identify growth opportunities, and build sustainable competitive advantages in rapidly evolving markets.", icon: "S" },
    { title: "Operational Excellence", description: "Streamlining processes, reducing costs, and improving quality across your value chain through data-driven analysis and proven transformation frameworks.", icon: "O" },
    { title: "Digital Transformation", description: "Guiding enterprises through technology adoption, from legacy system modernization to AI integration, ensuring measurable ROI at every stage.", icon: "D" },
    { title: "Mergers & Acquisitions", description: "End-to-end M&A advisory including target identification, due diligence, valuation modeling, integration planning, and post-merger optimization.", icon: "M" },
  ];

  const caseStudies = [
    { client: "Global Pharmaceutical Leader", industry: "Healthcare", result: "$420M in annual savings", summary: "Redesigned the global supply chain for a top-10 pharmaceutical company, consolidating 14 distribution centers into 6 regional hubs while improving delivery times by 32%." },
    { client: "Fortune 100 Retailer", industry: "Retail & Consumer", result: "28% revenue growth", summary: "Developed and executed an omnichannel strategy that unified in-store and digital experiences, driving a 28% increase in same-store revenue within 18 months." },
    { client: "Sovereign Wealth Fund", industry: "Financial Services", result: "$2.3B portfolio optimization", summary: "Performed comprehensive portfolio review and risk assessment, identifying reallocation opportunities that improved risk-adjusted returns by 340 basis points." },
  ];

  const leaders = [
    { name: "Dr. Katherine Wren", title: "Managing Partner", credentials: "Harvard Business School, Former BCG Partner", bio: "25 years advising Fortune 500 companies on strategic transformation. Specializes in healthcare and financial services." },
    { name: "Robert Castellano", title: "Senior Partner", credentials: "Wharton MBA, Former Goldman Sachs VP", bio: "Led over $30B in M&A transactions. Expert in cross-border deals and post-merger integration strategies." },
    { name: "Priya Nair", title: "Partner, Digital Practice", credentials: "MIT CSAIL, Former Microsoft Director", bio: "Pioneered digital transformation methodologies adopted by 40+ enterprise clients across three continents." },
    { name: "Thomas Eriksson", title: "Partner, Operations", credentials: "INSEAD MBA, Former Toyota Advisor", bio: "Operational excellence leader with deep expertise in lean manufacturing and supply chain optimization." },
  ];

  const industries = [
    "Financial Services", "Healthcare & Life Sciences", "Technology & Telecom",
    "Energy & Utilities", "Retail & Consumer", "Industrial & Manufacturing",
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Mulish', sans-serif", backgroundColor: "#faf9f7" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Navigation */}
      <nav className="border-b" style={{ borderColor: "#e0ddd8" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="text-xl font-extrabold tracking-tight" style={{ color: "#0047AB" }}>
            Meridian Partners
          </span>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <span key={item} className="text-sm font-semibold cursor-pointer hover:opacity-70" style={{ color: "#333" }}>
                {item}
              </span>
            ))}
          </div>
          <div className="px-5 py-2 text-sm font-bold text-white cursor-pointer" style={{ backgroundColor: "#0047AB" }}>
            Schedule a Consultation
          </div>
        </div>
      </nav>

      {/* Client Logos Hero */}
      <section className="py-20 md:py-28 border-b" style={{ borderColor: "#e0ddd8" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: "#0047AB" }}>
            Trusted by Industry Leaders
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto" style={{ color: "#1a1a1a" }}>
            Strategic counsel for the world&apos;s most ambitious organizations
          </h1>
          <p className="mt-6 text-base font-light max-w-2xl mx-auto leading-relaxed" style={{ color: "#666" }}>
            For over two decades, Meridian Partners has helped global enterprises navigate complexity,
            seize opportunity, and build enduring value through rigorous analysis and hands-on execution.
          </p>
          <div className="mt-14 flex flex-wrap justify-center gap-8 items-center">
            {clientLogos.map((logo) => (
              <div key={logo} className="px-6 py-3 border text-sm font-semibold" style={{ borderColor: "#d0cdc8", color: "#999" }}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 border-b" style={{ borderColor: "#e0ddd8" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#0047AB" }}>Our Services</p>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-12" style={{ color: "#1a1a1a" }}>How We Create Value</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white border p-8" style={{ borderColor: "#e0ddd8" }}>
                <div className="w-12 h-12 flex items-center justify-center text-lg font-bold text-white mb-5" style={{ backgroundColor: "#0047AB" }}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#1a1a1a" }}>{service.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#555" }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 border-b" style={{ borderColor: "#e0ddd8" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#0047AB" }}>Case Studies</p>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-12" style={{ color: "#1a1a1a" }}>Proven Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-white border p-8 flex flex-col" style={{ borderColor: "#e0ddd8" }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#0047AB" }}>{study.industry}</p>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1a1a1a" }}>{study.client}</h3>
                <p className="text-2xl font-extrabold mb-4" style={{ color: "#0047AB" }}>{study.result}</p>
                <p className="text-sm font-light leading-relaxed flex-1" style={{ color: "#555" }}>{study.summary}</p>
                <span className="text-sm font-bold mt-6 cursor-pointer" style={{ color: "#0047AB" }}>Read Full Case Study &rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 border-b" style={{ borderColor: "#e0ddd8" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#0047AB" }}>Leadership</p>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-12" style={{ color: "#1a1a1a" }}>Our Senior Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, i) => (
              <div key={i} className="bg-white border p-6" style={{ borderColor: "#e0ddd8" }}>
                <div className="aspect-[3/4] mb-5 flex items-center justify-center" style={{ backgroundColor: "#edecea" }}>
                  <span className="text-4xl font-extrabold" style={{ color: "#0047AB" }}>{leader.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h3 className="text-base font-bold" style={{ color: "#1a1a1a" }}>{leader.name}</h3>
                <p className="text-sm font-semibold mt-1" style={{ color: "#0047AB" }}>{leader.title}</p>
                <p className="text-xs font-medium mt-1" style={{ color: "#888" }}>{leader.credentials}</p>
                <p className="text-sm font-light mt-3 leading-relaxed" style={{ color: "#555" }}>{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 border-b" style={{ borderColor: "#e0ddd8" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#0047AB" }}>Industries</p>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-12" style={{ color: "#1a1a1a" }}>Sectors We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry) => (
              <div key={industry} className="bg-white border px-6 py-5 text-sm font-semibold cursor-pointer hover:shadow-sm" style={{ borderColor: "#e0ddd8", color: "#1a1a1a" }}>
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 text-white text-center" style={{ backgroundColor: "#0047AB" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-base font-light leading-relaxed opacity-90 mb-10">
            Our partners are available for confidential consultations. Whether you are exploring
            strategic options, planning a transformation, or navigating a critical transaction,
            we bring the expertise and discretion your situation demands.
          </p>
          <div className="inline-block px-8 py-3 text-sm font-bold cursor-pointer" style={{ backgroundColor: "#faf9f7", color: "#0047AB" }}>
            Request a Consultation
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-6" style={{ borderColor: "#e0ddd8", backgroundColor: "#faf9f7" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <span className="text-base font-extrabold" style={{ color: "#0047AB" }}>Meridian Partners</span>
            <p className="text-xs font-light mt-2" style={{ color: "#888" }}>
              Strategic consulting for enterprises navigating complexity and change.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#1a1a1a" }}>Offices</p>
            <p className="text-xs font-light" style={{ color: "#888" }}>New York &middot; London &middot; Singapore &middot; Dubai</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#1a1a1a" }}>Contact</p>
            <p className="text-xs font-light" style={{ color: "#888" }}>inquiries@meridianpartners.com</p>
            <p className="text-xs font-light mt-1" style={{ color: "#888" }}>+1 (212) 555-0190</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#1a1a1a" }}>Legal</p>
            <p className="text-xs font-light" style={{ color: "#888" }}>&copy; 2024 Meridian Partners LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
