export default function TechCorporateDemo() {
  const products = [
    { name: "Security Suite", desc: "End-to-end threat detection, vulnerability scanning, and automated incident response for enterprise environments.", icon: "🛡️" },
    { name: "Cloud Platform", desc: "Multi-cloud infrastructure management with automated provisioning, cost optimization, and compliance guardrails.", icon: "☁️" },
    { name: "Data Analytics", desc: "Real-time business intelligence with petabyte-scale data processing, custom dashboards, and predictive insights.", icon: "📊" },
    { name: "DevOps Tools", desc: "CI/CD pipelines, infrastructure as code, monitoring, and automated deployment workflows for engineering teams.", icon: "🔧" },
  ]
  const compliance = [
    { name: "SOC 2 Type II", desc: "Independently audited annually" },
    { name: "ISO 27001", desc: "Certified information security" },
    { name: "GDPR", desc: "Full EU data compliance" },
    { name: "HIPAA", desc: "Healthcare data protection" },
  ]
  const caseStudies = [
    { company: "Global Financial Corp", industry: "Financial Services", result: "Reduced infrastructure costs by 42% while improving deployment frequency from monthly to multiple times daily.", employees: "50,000+" },
    { company: "MedTech Industries", industry: "Healthcare", result: "Achieved HIPAA compliance in 6 weeks and consolidated 12 legacy systems into a unified cloud platform.", employees: "12,000+" },
    { company: "Apex Retail Group", industry: "Retail", result: "Scaled to handle 10x traffic during peak season with zero downtime, processing 2M transactions per hour.", employees: "85,000+" },
  ]
  const pricing = [
    { plan: "Team", price: "$49", per: "user/month", features: ["Up to 50 users", "5 projects", "Standard support", "Basic analytics", "99.9% SLA"], cta: "Start trial", highlight: false },
    { plan: "Business", price: "$149", per: "user/month", features: ["Up to 500 users", "Unlimited projects", "Priority support", "Advanced analytics", "99.95% SLA", "SSO integration"], cta: "Start trial", highlight: true },
    { plan: "Enterprise", price: "Custom", per: "", features: ["Unlimited users", "Dedicated infrastructure", "24/7 phone support", "Custom integrations", "99.99% SLA", "Dedicated CSM"], cta: "Contact sales", highlight: false },
  ]
  const logos = ["Deloitte", "Accenture", "McKinsey", "JPMorgan", "Siemens", "SAP"]
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" /></head>
      <nav className="bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-lg font-bold text-white tracking-wide">MERIDIAN</span>
            <div className="hidden md:flex space-x-6">
              {["Products", "Solutions", "Resources", "Partners", "Pricing"].map((l) => (
                <span key={l} className="text-sm text-slate-400 hover:text-white cursor-pointer transition-colors">{l}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="h-9 px-4 text-sm text-slate-300 hover:text-white transition-colors">Sign in</button>
            <button className="h-9 px-5 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors">Contact Sales</button>
          </div>
        </div>
      </nav>
      <section className="bg-slate-900 py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium mb-6">Trusted by Fortune 500 companies worldwide</div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Enterprise-grade<br />infrastructure</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">The unified platform that powers security, cloud, analytics, and DevOps for the world&apos;s most demanding organizations.</p>
          <div className="flex justify-center space-x-3">
            <button className="h-12 px-8 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors">Schedule a demo</button>
            <button className="h-12 px-8 text-sm font-medium text-slate-300 border border-slate-600 hover:border-slate-400 rounded-md transition-colors">Read whitepaper</button>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Platform</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Four integrated products designed to work together, giving your organization a unified technology foundation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div key={p.name} className="bg-white rounded-lg p-8 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{p.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              <span className="inline-block mt-4 text-sm font-medium text-slate-900 hover:underline cursor-pointer">Learn more &rarr;</span>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Compliance and Trust</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {compliance.map((c) => (
              <div key={c.name} className="bg-white rounded-lg p-6 border border-slate-200 text-center">
                <div className="text-lg font-bold text-slate-900 mb-1">{c.name}</div>
                <div className="text-xs text-slate-500">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">Trusted by industry leaders</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {logos.map((name) => (
            <div key={name} className="px-6 py-3 text-lg font-semibold text-slate-300">{name}</div>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.company} className="bg-white rounded-lg p-8 border border-slate-200">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{cs.industry}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{cs.company}</h3>
                <div className="text-xs text-slate-400 mb-4">{cs.employees} employees</div>
                <p className="text-sm text-slate-600 leading-relaxed">{cs.result}</p>
                <span className="inline-block mt-4 text-sm font-medium text-slate-900 hover:underline cursor-pointer">Read full case study &rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">Pricing</h2>
        <p className="text-slate-500 text-center mb-12">Flexible plans for organizations of every size.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <div key={p.plan} className={`rounded-lg p-8 ${p.highlight ? "bg-slate-900 text-white" : "bg-white border border-slate-200"}`}>
              <h3 className={`text-lg font-semibold ${p.highlight ? "text-white" : "text-slate-900"}`}>{p.plan}</h3>
              <div className="mt-4 mb-6">
                <span className={`text-4xl font-bold ${p.highlight ? "text-white" : "text-slate-900"}`}>{p.price}</span>
                {p.per && <span className={`text-sm ${p.highlight ? "text-slate-400" : "text-slate-500"}`}> {p.per}</span>}
              </div>
              <ul className={`space-y-3 mb-8 text-sm ${p.highlight ? "text-slate-300" : "text-slate-600"}`}>
                {p.features.map((f) => <li key={f}>&#10003; {f}</li>)}
              </ul>
              <button className={`w-full h-10 text-sm font-medium rounded-md transition-colors ${p.highlight ? "text-slate-900 bg-white hover:bg-slate-100" : "text-white bg-slate-900 hover:bg-slate-800"}`}>{p.cta}</button>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your infrastructure?</h2>
          <p className="text-slate-400 mb-8">Talk to our solutions team to learn how Meridian can help your organization ship faster and more securely.</p>
          <div className="flex justify-center space-x-3">
            <button className="h-12 px-8 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors">Contact Sales</button>
            <button className="h-12 px-8 text-sm font-medium text-slate-300 border border-slate-600 hover:border-slate-400 rounded-md transition-colors">Request a demo</button>
          </div>
        </div>
      </section>
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <span className="text-sm text-slate-500">&copy; 2026 Meridian Technologies, Inc. All rights reserved.</span>
          <div className="flex space-x-6 text-sm text-slate-500">
            {["Privacy Policy", "Terms of Service", "Security", "Status"].map((l) => (
              <span key={l} className="hover:text-slate-300 cursor-pointer transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
