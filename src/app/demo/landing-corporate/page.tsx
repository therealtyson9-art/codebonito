export default function LandingCorporateDemo() {
  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>

      {/* Nav */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <div className="w-7 h-7 rounded bg-blue-700 flex items-center justify-center">
              <span className="text-white text-xs font-bold">V</span>
            </div>
            <span className="text-lg font-bold text-blue-900 ml-2">Vaultix</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {["Solutions", "Platform", "Security", "Pricing", "Resources"].map((item) => (
              <span key={item} className="text-sm text-slate-600 hover:text-blue-700 cursor-pointer font-medium transition-colors">{item}</span>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-slate-600 hover:text-blue-700 cursor-pointer font-medium">Log in</span>
            <button className="h-9 px-5 text-sm font-semibold bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 rounded-full px-4 py-1.5 mb-6">
                <span className="text-xs font-semibold">NEW</span>
                <span className="text-xs font-medium">SOC 2 Type II Certified &mdash; Read the report</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-blue-950 mb-6">
                Enterprise-grade data infrastructure for modern teams
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                Securely manage, transform, and analyze your organization&apos;s data at scale. Trusted by Fortune 500 companies and regulated industries worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="h-12 px-6 text-sm font-semibold bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors">
                  Schedule a Demo
                </button>
                <button className="h-12 px-6 text-sm font-semibold text-blue-700 border-2 border-blue-200 rounded-md hover:border-blue-300 transition-colors">
                  View Documentation
                </button>
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-emerald-700">All systems operational</span>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Data Processed", value: "2.4 PB", change: "+12.3%" },
                  { label: "Active Pipelines", value: "1,847", change: "+8.1%" },
                  { label: "Avg Latency", value: "23ms", change: "-4.2%" },
                  { label: "Uptime (30d)", value: "99.997%", change: "+0.01%" },
                ].map((m) => (
                  <div key={m.label} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                    <span className="text-sm text-slate-500">{m.label}</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-bold text-slate-900">{m.value}</span>
                      <span className={`text-xs font-semibold ${m.change.startsWith("+") ? "text-emerald-600" : "text-blue-600"}`}>{m.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <p className="text-xs text-slate-400 text-center uppercase tracking-widest font-semibold mb-8">Trusted by industry leaders</p>
          <div className="flex items-center justify-center flex-wrap gap-x-14 gap-y-4">
            {["Deloitte", "JPMorgan", "Salesforce", "SAP", "Siemens", "Accenture", "McKinsey"].map((logo) => (
              <span key={logo} className="text-sm font-bold text-slate-300 tracking-wide">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">Built for enterprise requirements</h2>
          <p className="text-slate-500 max-w-xl mx-auto">From compliance and security to scalability and governance, every feature is designed to meet the demands of large organizations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "&#128274;", title: "End-to-End Encryption", desc: "AES-256 encryption at rest and TLS 1.3 in transit. Your data never leaves your control boundary." },
            { icon: "&#9878;", title: "Regulatory Compliance", desc: "Built-in support for GDPR, HIPAA, SOX, and PCI DSS. Automated compliance reporting and audit trails." },
            { icon: "&#9881;", title: "Automated Pipelines", desc: "Build complex data workflows with a visual editor or code. Retry logic, monitoring, and alerting included." },
            { icon: "&#128200;", title: "Real-Time Analytics", desc: "Sub-second query performance on petabyte-scale datasets. Connect your BI tools or use our built-in dashboards." },
            { icon: "&#128101;", title: "Team Governance", desc: "Role-based access control, data classification, and lineage tracking. Know who accessed what, and when." },
            { icon: "&#127760;", title: "Multi-Region Deploy", desc: "Deploy to 24 regions globally with automatic failover. Data residency controls for regulatory requirements." },
          ].map((f) => (
            <div key={f.title} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <span className="text-lg" dangerouslySetInnerHTML={{ __html: f.icon }} />
              </div>
              <h3 className="text-base font-bold text-blue-950 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-blue-900">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "4,200+", label: "Enterprise clients" },
              { value: "99.99%", label: "SLA uptime" },
              { value: "50+", label: "Compliance certs" },
              { value: "24/7", label: "Dedicated support" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-extrabold text-white">{s.value}</div>
                <div className="text-sm text-blue-200 mt-2 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-blue-950 text-center mb-14">What our customers say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { quote: "Vaultix replaced four different tools in our data stack. The unified platform reduced our operational costs by 40% in the first quarter.", author: "Jennifer Walsh", role: "CIO, Global Finance Corp", avatar: "JW" },
            { quote: "The compliance automation alone saved our team hundreds of hours during our annual SOX audit. The audit trail is incredibly thorough.", author: "David Kim", role: "Head of Data, MedTech Inc", avatar: "DK" },
            { quote: "We processed 1.2 petabytes in our first month. The performance is consistent, and the support team understands enterprise requirements.", author: "Claudia Fernandez", role: "SVP Technology, RetailCo", avatar: "CF" },
          ].map((t) => (
            <div key={t.author} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400 text-sm">&#9733;</span>
                ))}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700">{t.avatar}</div>
                <div>
                  <p className="text-sm font-semibold text-blue-950">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security Badges */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-xs text-slate-400 text-center uppercase tracking-widest font-semibold mb-6">Certifications &amp; Compliance</p>
          <div className="flex items-center justify-center flex-wrap gap-8">
            {["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA", "PCI DSS", "FedRAMP"].map((badge) => (
              <div key={badge} className="flex items-center space-x-2 border border-slate-200 bg-white rounded-lg px-4 py-2">
                <span className="text-emerald-600 text-sm">&#10003;</span>
                <span className="text-xs font-semibold text-slate-600">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-blue-800 to-blue-950 rounded-2xl p-12 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to transform your data infrastructure?</h2>
          <p className="text-blue-200 mb-8 max-w-lg mx-auto">Talk to our solutions team and get a personalized demo for your organization. Enterprise pricing available.</p>
          <div className="flex items-center justify-center gap-3">
            <button className="h-12 px-8 text-sm font-semibold bg-white text-blue-900 rounded-md hover:bg-blue-50 transition-colors">
              Schedule a Demo
            </button>
            <button className="h-12 px-8 text-sm font-semibold text-blue-200 border border-blue-600 rounded-md hover:border-blue-400 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-blue-700 flex items-center justify-center">
                <span className="text-white text-xs font-bold">V</span>
              </div>
              <span className="text-sm font-bold text-white">Vaultix</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {["Privacy Policy", "Terms of Service", "Security", "Status", "Documentation", "Support"].map((link) => (
                <span key={link} className="text-sm text-blue-300 hover:text-white cursor-pointer transition-colors">{link}</span>
              ))}
            </div>
            <span className="text-xs text-blue-400">&copy; 2025 Vaultix, Inc.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
