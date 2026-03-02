export default function StartupCorporateDemo() {
  const navLinks = ["Platform", "Solutions", "Enterprise", "Integrations", "Pricing", "Company"]

  const features = [
    { icon: "//", title: "Unified Data Fabric", desc: "Connect every data source in your organization through a single governance layer. Stratosphere normalizes schemas, resolves entity conflicts, and delivers a canonical view of your business in real time." },
    { icon: "{}", title: "Predictive Analytics Engine", desc: "Move beyond retrospective reporting. Our ML pipeline surfaces revenue risks, churn signals, and operational bottlenecks 6-8 weeks before they impact your bottom line." },
    { icon: "<>", title: "Enterprise Workflow Builder", desc: "Drag-and-drop automation that connects to 200+ enterprise systems. Build approval chains, data transformations, and alert routing without writing a single line of code." },
    { icon: "[]", title: "Compliance Orchestration", desc: "Automated audit trails for SOC 2, HIPAA, GDPR, and ISO 27001. Every data access, transformation, and export is logged, tagged, and retention-managed." },
  ]

  const integrations = ["Salesforce", "Snowflake", "SAP", "Workday", "HubSpot", "Databricks", "Oracle", "ServiceNow", "Slack", "Jira", "AWS", "Azure"]

  const clients = [
    { name: "Global Retail Corp", result: "Reduced data pipeline failures by 94% across 12 regional data centers" },
    { name: "MedTech Dynamics", result: "Achieved HIPAA compliance in 6 weeks, down from a projected 8-month timeline" },
    { name: "Finova Capital", result: "Unified 340 data sources into a single customer view, increasing upsell revenue by 28%" },
  ]

  const pricingTiers = [
    { name: "Growth", price: "$2,400", period: "/month", desc: "For teams building their first data platform", features: ["Up to 50 data sources", "5 user seats", "Standard integrations", "Email support", "SOC 2 compliance"] },
    { name: "Enterprise", price: "Custom", period: "", desc: "For organizations with complex data needs", features: ["Unlimited data sources", "Unlimited seats", "All integrations + custom", "24/7 dedicated support", "Full compliance suite", "On-premise deployment option"] },
  ]

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Manrope', sans-serif", backgroundColor: "#f1f5f9" }}>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Enterprise Nav */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <span className="text-xl font-extrabold tracking-tight" style={{ color: "#3730a3" }}>Stratosphere</span>
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <span key={link} className="text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer">{link}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600 cursor-pointer hidden md:inline">Sign in</span>
            <button className="h-10 px-6 text-sm font-semibold text-white rounded-lg" style={{ backgroundColor: "#3730a3" }}>Contact Sales</button>
          </div>
        </div>
      </nav>

      {/* Product Demo Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-6" style={{ color: "#3730a3", backgroundColor: "#e0e7ff" }}>TRUSTED BY 340+ ENTERPRISES</span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6" style={{ color: "#1e1b4b" }}>
                Your entire data ecosystem. One platform.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                Stratosphere unifies fragmented data sources, automates compliance workflows, and delivers predictive insights that drive measurable business outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="h-12 px-8 text-sm font-bold text-white rounded-lg" style={{ backgroundColor: "#3730a3" }}>Request a Demo</button>
                <button className="h-12 px-8 text-sm font-bold rounded-lg border-2" style={{ color: "#3730a3", borderColor: "#3730a3" }}>Watch Product Tour</button>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "#3730a3" }}>
                  <span className="text-white text-2xl">&#9654;</span>
                </div>
                <span className="text-sm font-medium text-gray-500">Product Demo - 3 min</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4" style={{ color: "#1e1b4b" }}>Platform Capabilities</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Four pillars that transform how enterprise teams manage, govern, and extract value from data.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-8 border border-gray-200">
                <span className="text-2xl font-bold block mb-4" style={{ color: "#3730a3" }}>{feature.icon}</span>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1e1b4b" }}>{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4" style={{ color: "#1e1b4b" }}>200+ Integrations</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-xl mx-auto">Connect your entire stack in minutes. Native connectors for every major enterprise platform.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((name) => (
              <span key={name} className="px-5 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-700">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Clients */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold tracking-tight mb-12 text-center" style={{ color: "#1e1b4b" }}>Trusted by Industry Leaders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {clients.map((client) => (
              <div key={client.name} className="bg-white rounded-xl p-8 border border-gray-200">
                <div className="w-12 h-12 rounded-lg mb-6" style={{ backgroundColor: "#e0e7ff" }} />
                <h3 className="text-lg font-bold mb-3" style={{ color: "#1e1b4b" }}>{client.name}</h3>
                <p className="text-gray-600 leading-relaxed">{client.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight mb-6" style={{ color: "#1e1b4b" }}>Enterprise-Grade Security</h2>
              <p className="text-gray-600 leading-relaxed mb-6">Stratosphere meets the most stringent security and compliance requirements. Your data never leaves your VPC, and every operation is encrypted, logged, and auditable.</p>
              <div className="space-y-4">
                {["SOC 2 Type II certified", "HIPAA compliant with BAA", "GDPR data residency controls", "ISO 27001 certified", "AES-256 encryption at rest and in transit", "SSO with SAML 2.0 and OIDC"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs" style={{ backgroundColor: "#3730a3" }}>&#10003;</span>
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-12 flex items-center justify-center" style={{ backgroundColor: "#1e1b4b" }}>
              <div className="text-center">
                <span className="text-6xl font-extrabold text-white">99.99%</span>
                <p className="text-sm text-indigo-200 mt-2 font-medium">Guaranteed uptime SLA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight mb-4" style={{ color: "#1e1b4b" }}>Transparent Pricing</h2>
            <p className="text-gray-600 text-lg">No hidden fees. No per-query charges. Predictable costs that scale with your team.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1e1b4b" }}>{tier.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{tier.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold" style={{ color: "#3730a3" }}>{tier.price}</span>
                  <span className="text-gray-500 text-sm">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span style={{ color: "#3730a3" }}>&#10003;</span> {f}
                    </li>
                  ))}
                </ul>
                <button className="w-full h-12 rounded-lg text-sm font-bold text-white" style={{ backgroundColor: "#3730a3" }}>
                  {tier.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Sales */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-4" style={{ color: "#1e1b4b" }}>Ready to unify your data?</h2>
          <p className="text-gray-600 text-lg mb-8">Our solutions team will build a custom migration plan and ROI projection for your organization. Most teams are live within 4 weeks.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Work email address" className="h-12 px-4 rounded-lg border border-gray-300 text-sm w-full sm:w-72 focus:outline-none focus:ring-2" />
            <button className="h-12 px-8 rounded-lg text-sm font-bold text-white" style={{ backgroundColor: "#3730a3" }}>Schedule a Call</button>
          </div>
          <p className="text-xs text-gray-400 mt-4">No commitment required. Typical response time under 2 hours.</p>
        </div>
      </section>

      {/* Corporate Multi-Column Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <span className="text-lg font-extrabold" style={{ color: "#3730a3" }}>Stratosphere</span>
              <p className="text-xs text-gray-500 mt-2">Enterprise data platform for teams that refuse to compromise.</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Platform</h4>
              <div className="space-y-2">
                {["Data Fabric", "Analytics", "Workflows", "Compliance"].map((l) => (
                  <span key={l} className="block text-sm text-gray-500 cursor-pointer hover:text-gray-900">{l}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Company</h4>
              <div className="space-y-2">
                {["About", "Careers", "Press", "Contact"].map((l) => (
                  <span key={l} className="block text-sm text-gray-500 cursor-pointer hover:text-gray-900">{l}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Resources</h4>
              <div className="space-y-2">
                {["Documentation", "API Reference", "Status", "Blog"].map((l) => (
                  <span key={l} className="block text-sm text-gray-500 cursor-pointer hover:text-gray-900">{l}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Legal</h4>
              <div className="space-y-2">
                {["Privacy Policy", "Terms of Service", "Security", "DPA"].map((l) => (
                  <span key={l} className="block text-sm text-gray-500 cursor-pointer hover:text-gray-900">{l}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs text-gray-400">&copy; 2025 Stratosphere, Inc. All rights reserved.</span>
            <div className="flex gap-6">
              {["LinkedIn", "Twitter", "GitHub"].map((s) => (
                <span key={s} className="text-xs text-gray-400 cursor-pointer hover:text-gray-600">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
