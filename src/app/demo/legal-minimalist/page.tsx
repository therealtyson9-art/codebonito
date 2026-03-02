export default function LegalMinimalistDemo() {
  const practiceAreas = [
    { title: "Corporate Law", desc: "Strategic counsel for business formation, governance, compliance, and complex commercial transactions. We guide companies from incorporation through IPO and beyond." },
    { title: "Litigation", desc: "Aggressive yet measured trial representation in commercial disputes, civil rights cases, and appellate proceedings. Our trial record speaks for itself." },
    { title: "Real Estate", desc: "Full-spectrum real estate services including acquisitions, zoning, land use, commercial leases, and title disputes for developers, investors, and institutions." },
    { title: "Estate Planning", desc: "Thoughtful estate plans, trusts, and succession strategies that protect wealth and carry forward your intentions for generations." },
  ]

  const notableCases = [
    { name: "Meridian Corp. v. Hastings Group", result: "Secured $14.2M judgment for breach of fiduciary duty in a complex shareholder dispute involving cross-border holdings.", year: "2023" },
    { name: "In re: Whitfield Trust Estate", result: "Successfully defended a $38M family trust against contested claims from third-party creditors across three jurisdictions.", year: "2022" },
    { name: "City of Ashton v. Redline Developers", result: "Obtained landmark zoning variance permitting the largest mixed-use development in the city's history.", year: "2021" },
  ]

  const attorneys = [
    { name: "Eleanor Whitfield", title: "Founding Partner", bio: "Eleanor founded the firm in 2004 after two decades at a national practice. She specializes in high-stakes commercial litigation and has tried over 90 cases to verdict. JD, Yale Law School." },
    { name: "David Rosenthal", title: "Partner, Corporate Law", bio: "David advises mid-market companies and private equity funds on mergers, acquisitions, and corporate governance. He has closed over $2B in transactions. JD, Columbia Law School." },
    { name: "Camille Dupont", title: "Partner, Estate Planning", bio: "Camille designs multigenerational wealth strategies for high-net-worth families. She is a Fellow of the American College of Trust and Estate Counsel. JD, University of Virginia." },
  ]

  return (
    <div style={{ fontFamily: "'Libre Baskerville', serif", backgroundColor: "#faf8f5" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />

      {/* Minimal Nav */}
      <nav className="max-w-5xl mx-auto px-8 py-8 flex items-center justify-between">
        <span style={{ color: "#292524" }} className="text-sm font-bold tracking-wider uppercase">Whitfield & Associates</span>
        <div className="flex items-center gap-8">
          <span style={{ color: "#292524" }} className="text-sm cursor-pointer opacity-60 hover:opacity-100">Practice Areas</span>
          <span style={{ color: "#292524" }} className="text-sm cursor-pointer opacity-60 hover:opacity-100">Our Team</span>
          <span style={{ color: "#292524" }} className="text-sm cursor-pointer opacity-60 hover:opacity-100">Contact</span>
        </div>
      </nav>

      {/* Name-Only Hero */}
      <section className="max-w-5xl mx-auto px-8 py-32 text-center">
        <h2 style={{ color: "#292524" }} className="text-6xl font-bold leading-tight mb-6">
          Whitfield<br />& Associates
        </h2>
        <div style={{ backgroundColor: "#292524" }} className="w-16 h-px mx-auto mb-6"></div>
        <p style={{ color: "#292524" }} className="text-lg italic opacity-60 max-w-xl mx-auto">
          Thoughtful counsel for those who value precision, discretion, and results.
        </p>
      </section>

      {/* Practice Areas */}
      <section style={{ borderTop: "1px solid #e7e5e4" }} className="max-w-5xl mx-auto px-8 py-20">
        <h3 style={{ color: "#292524" }} className="text-sm font-bold tracking-widest uppercase mb-12 text-center">Practice Areas</h3>
        <div className="grid grid-cols-2 gap-x-16 gap-y-12">
          {practiceAreas.map((area) => (
            <div key={area.title}>
              <h4 style={{ color: "#292524" }} className="text-xl font-bold mb-3">{area.title}</h4>
              <p style={{ color: "#292524" }} className="text-sm leading-relaxed opacity-60">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Notable Cases */}
      <section style={{ backgroundColor: "#f5f0eb" }} className="py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h3 style={{ color: "#292524" }} className="text-sm font-bold tracking-widest uppercase mb-12 text-center">Notable Cases</h3>
          <div className="space-y-10">
            {notableCases.map((c) => (
              <div key={c.name} style={{ borderBottom: "1px solid #e7e5e4" }} className="pb-8">
                <div className="flex items-baseline justify-between mb-3">
                  <h4 style={{ color: "#292524" }} className="text-lg font-bold italic">{c.name}</h4>
                  <span style={{ color: "#292524" }} className="text-sm opacity-40">{c.year}</span>
                </div>
                <p style={{ color: "#292524" }} className="text-sm leading-relaxed opacity-60">{c.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <h3 style={{ color: "#292524" }} className="text-sm font-bold tracking-widest uppercase mb-12 text-center">The Team</h3>
        <div className="space-y-12">
          {attorneys.map((atty) => (
            <div key={atty.name} style={{ borderBottom: "1px solid #e7e5e4" }} className="pb-10 flex gap-10 items-start">
              <div style={{ backgroundColor: "#ede9e3", minWidth: "100px" }} className="w-24 h-28 flex items-center justify-center">
                <span style={{ color: "#292524" }} className="text-xs opacity-30">Photo</span>
              </div>
              <div>
                <h4 style={{ color: "#292524" }} className="text-xl font-bold">{atty.name}</h4>
                <p style={{ color: "#292524" }} className="text-sm italic opacity-50 mb-3">{atty.title}</p>
                <p style={{ color: "#292524" }} className="text-sm leading-relaxed opacity-60">{atty.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section style={{ borderTop: "1px solid #e7e5e4" }} className="py-20">
        <div className="max-w-5xl mx-auto px-8">
          <h3 style={{ color: "#292524" }} className="text-sm font-bold tracking-widest uppercase mb-12 text-center">Our Approach</h3>
          <div className="grid grid-cols-3 gap-12">
            <div>
              <h4 style={{ color: "#292524" }} className="text-lg font-bold mb-3">Precision</h4>
              <p style={{ color: "#292524" }} className="text-sm leading-relaxed opacity-60">
                Every legal strategy is crafted with meticulous attention to detail. We do not rely on
                templates or boilerplate. Each client receives a tailored approach built from the ground up.
              </p>
            </div>
            <div>
              <h4 style={{ color: "#292524" }} className="text-lg font-bold mb-3">Discretion</h4>
              <p style={{ color: "#292524" }} className="text-sm leading-relaxed opacity-60">
                Our clients include public figures, family businesses, and institutions that require
                absolute confidentiality. We conduct ourselves accordingly, in every interaction.
              </p>
            </div>
            <div>
              <h4 style={{ color: "#292524" }} className="text-lg font-bold mb-3">Candor</h4>
              <p style={{ color: "#292524" }} className="text-sm leading-relaxed opacity-60">
                We tell clients what they need to hear, not what they want to hear. Honest assessments
                of risk and probability are the foundation of every recommendation we make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section style={{ backgroundColor: "#292524" }} className="py-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h3 style={{ color: "#faf8f5" }} className="text-3xl font-bold mb-6">Schedule a Consultation</h3>
          <p style={{ color: "#faf8f5" }} className="text-sm leading-relaxed opacity-60 mb-8 max-w-lg mx-auto">
            Every engagement begins with a candid, confidential conversation about your legal needs.
            We offer complimentary initial consultations for prospective clients seeking representation
            in our areas of practice.
          </p>
          <div className="flex justify-center gap-6">
            <span style={{ border: "1px solid #faf8f5", color: "#faf8f5" }} className="px-8 py-3 text-sm cursor-pointer">Request a Meeting</span>
            <span style={{ color: "#faf8f5" }} className="px-8 py-3 text-sm cursor-pointer opacity-60">(555) 312-4400</span>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer style={{ borderTop: "1px solid #e7e5e4" }} className="py-10">
        <div className="max-w-5xl mx-auto px-8 flex justify-between items-start">
          <div>
            <p style={{ color: "#292524" }} className="text-sm font-bold">Whitfield & Associates</p>
            <p style={{ color: "#292524" }} className="text-xs opacity-40 mt-1">
              700 Commerce Street, Suite 1200<br />
              Metropolitan City, ST 10004
            </p>
          </div>
          <div className="text-right">
            <p style={{ color: "#292524" }} className="text-xs opacity-40">
              Member, American Bar Association<br />
              State Bar of Metropolitan City, Reg. No. 44829
            </p>
            <p style={{ color: "#292524" }} className="text-xs opacity-30 mt-3">
              &copy; 2024 Whitfield & Associates. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
