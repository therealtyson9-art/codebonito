export default function LegalMinimalistDemo() {
  const practiceAreas = [
    { title: "Corporate Law", desc: "Strategic counsel for business formation, governance, compliance, and complex commercial transactions across all industries." },
    { title: "Litigation", desc: "Aggressive yet measured trial representation in commercial disputes, civil rights cases, and appellate proceedings." },
    { title: "Real Estate", desc: "Full-spectrum real estate services including acquisitions, zoning, land use, and commercial lease negotiations." },
    { title: "Employment Law", desc: "Comprehensive employment guidance covering workplace compliance, discrimination claims, and executive contracts." },
  ]

  const attorneys = [
    { name: "Catherine Whitfield", title: "Managing Partner", bar: "Admitted to the New York State Bar, 2004", color: "bg-slate-200" },
    { name: "David Nakamura", title: "Senior Partner", bar: "Admitted to the California State Bar, 2007", color: "bg-slate-300" },
    { name: "Amara Osei", title: "Partner", bar: "Admitted to the Illinois State Bar, 2012", color: "bg-slate-100" },
  ]

  const caseResults = [
    { matter: "Commercial Lease Dispute", outcome: "$4.2M settlement for tenant in wrongful eviction case against national property group", year: "2025" },
    { matter: "Employment Discrimination", outcome: "Jury verdict in favor of plaintiff, establishing precedent for remote-work accommodation claims", year: "2024" },
    { matter: "Corporate M&A Advisory", outcome: "Successfully guided $180M acquisition through regulatory approval in 90 days", year: "2024" },
  ]

  const testimonials = [
    { quote: "Whitfield & Associates handled our corporate restructuring with a precision and calm that kept our board confident throughout the entire process.", author: "Margaret Chen", role: "CEO, Lumen Health Systems" },
    { quote: "After three other firms passed on our case, Catherine and her team took it on and delivered a result that exceeded every expectation.", author: "James Ortega", role: "Founder, Ortega Construction" },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between border-b border-slate-100">
        <span className="text-lg font-semibold tracking-tight" style={{ color: "#1e293b" }}>Whitfield & Associates</span>
        <div className="hidden md:flex items-center space-x-10">
          {["Practice Areas", "Attorneys", "Results", "Contact"].map((item) => (
            <span key={item} className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">{item}</span>
          ))}
        </div>
        <span className="hidden md:inline text-sm font-medium text-white px-5 py-2 cursor-pointer transition-colors" style={{ backgroundColor: "#1e293b" }}>Free Consultation</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-32">
        <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight" style={{ color: "#1e293b" }}>
          Justice through<br />clarity.
        </h1>
        <p className="mt-8 text-lg text-slate-400 max-w-lg font-light leading-relaxed">
          We believe the best legal outcomes come from clear thinking, disciplined preparation, and an unwavering commitment to our clients.
        </p>
        <div className="mt-10 flex space-x-4">
          <span className="inline-block px-8 py-3 text-sm font-medium text-white cursor-pointer transition-colors" style={{ backgroundColor: "#1e293b" }}>Schedule a Consultation</span>
          <span className="inline-block px-8 py-3 text-sm font-medium border cursor-pointer transition-colors" style={{ color: "#1e293b", borderColor: "#1e293b" }}>Our Practice Areas</span>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">What We Do</p>
          <h2 className="text-3xl font-light mb-16" style={{ color: "#1e293b" }}>Practice Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area) => (
              <div key={area.title} className="bg-white p-8 border border-slate-100 hover:border-slate-300 transition-colors">
                <h3 className="text-xl font-medium mb-3" style={{ color: "#1e293b" }}>{area.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorneys */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">Our Team</p>
        <h2 className="text-3xl font-light mb-16" style={{ color: "#1e293b" }}>Attorney Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {attorneys.map((att) => (
            <div key={att.name}>
              <div className={`aspect-[3/4] ${att.color} rounded-sm mb-6`} />
              <h3 className="text-lg font-medium" style={{ color: "#1e293b" }}>{att.name}</h3>
              <p className="text-sm text-slate-500 mt-1">{att.title}</p>
              <p className="text-xs text-slate-400 mt-2">{att.bar}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6"><div className="border-t border-slate-100" /></div>

      {/* Case Results */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">Track Record</p>
        <h2 className="text-3xl font-light mb-16" style={{ color: "#1e293b" }}>Notable Results</h2>
        <div className="space-y-0">
          {caseResults.map((cr) => (
            <div key={cr.matter} className="py-8 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-light" style={{ color: "#1e293b" }}>{cr.matter}</h3>
                <p className="text-sm text-slate-400 mt-1 max-w-lg">{cr.outcome}</p>
              </div>
              <span className="text-xs text-slate-300 shrink-0">{cr.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-16">Client Testimonials</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {testimonials.map((t) => (
              <div key={t.author}>
                <p className="text-lg font-light leading-relaxed text-slate-600 italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm mt-6 font-medium" style={{ color: "#1e293b" }}>{t.author}</p>
                <p className="text-xs text-slate-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">Get in Touch</p>
        <h2 className="text-3xl font-light mb-12" style={{ color: "#1e293b" }}>Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Full Name</label>
              <div className="w-full h-12 border border-slate-200 rounded-sm" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
              <div className="w-full h-12 border border-slate-200 rounded-sm" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2">Describe Your Legal Matter</label>
              <div className="w-full h-32 border border-slate-200 rounded-sm" />
            </div>
            <span className="inline-block px-8 py-3 text-sm font-medium text-white cursor-pointer" style={{ backgroundColor: "#1e293b" }}>Send Message</span>
          </div>
          <div className="space-y-6 text-sm text-slate-500">
            <div>
              <p className="font-medium text-slate-700">Office Address</p>
              <p className="mt-1">350 Fifth Avenue, Suite 4200<br />New York, NY 10118</p>
            </div>
            <div>
              <p className="font-medium text-slate-700">Phone</p>
              <p className="mt-1">(212) 555-0142</p>
            </div>
            <div>
              <p className="font-medium text-slate-700">Email</p>
              <p className="mt-1">intake@whitfieldlaw.com</p>
            </div>
            <div>
              <p className="font-medium text-slate-700">Hours</p>
              <p className="mt-1">Monday &ndash; Friday, 9:00 AM &ndash; 6:00 PM EST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-sm font-semibold" style={{ color: "#1e293b" }}>Whitfield & Associates</span>
            <p className="text-xs text-slate-400 mt-1">Attorneys at Law &middot; New York, NY</p>
          </div>
          <div className="flex space-x-8">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((link) => (
              <span key={link} className="text-xs text-slate-400 hover:text-slate-900 cursor-pointer transition-colors">{link}</span>
            ))}
          </div>
          <span className="text-xs text-slate-300">&copy; 2026 Whitfield & Associates. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
