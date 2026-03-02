export default function TravelCorporateDemo() {
  const features = [
    { name: "Smart Booking", icon: "&#128203;", desc: "Centralized booking for flights, hotels, and ground transport with negotiated corporate rates and policy guardrails." },
    { name: "Expense Management", icon: "&#128176;", desc: "Automatic receipt capture, real-time spend tracking, and seamless integration with your existing accounting software." },
    { name: "Policy Compliance", icon: "&#9989;", desc: "Configurable travel policies that guide employees toward compliant bookings without slowing them down." },
    { name: "Reporting & Analytics", icon: "&#128200;", desc: "Granular dashboards covering spend by department, traveler, vendor, and route with exportable reports." },
  ]
  const policies = [
    { rule: "Domestic flights", detail: "Economy class for flights under 4 hours; premium economy for 4+ hours" },
    { rule: "Hotel nightly cap", detail: "Up to $250/night domestic, $350/night international (Tier 1 cities)" },
    { rule: "Advance booking", detail: "Flights must be booked at least 14 days before departure for standard travel" },
    { rule: "Approval workflow", detail: "Travel over $2,500 requires manager approval; over $5,000 requires VP sign-off" },
  ]
  const testimonials = [
    { company: "Meridian Consulting", person: "Sarah Chen, VP Operations", text: "TravelStack cut our average booking time from 45 minutes to under 5. The policy compliance engine alone saved us six figures in the first year." },
    { company: "Northgate Industries", person: "James Okafor, CFO", text: "We finally have real-time visibility into travel spend across 12 offices. The reporting dashboards are exactly what our finance team needed." },
    { company: "Prism Health Group", person: "Maria Lopez, Travel Manager", text: "Rolling this out to 800 employees was painless. The onboarding team guided us through every integration step." },
  ]
  const plans = [
    { name: "Starter", price: "$8", unit: "per traveler/mo", features: ["Up to 50 travelers", "Basic booking engine", "Expense tracking", "Email support"], cta: "Start Free Trial", highlight: false },
    { name: "Business", price: "$18", unit: "per traveler/mo", features: ["Up to 500 travelers", "Policy compliance engine", "Advanced analytics", "Dedicated account manager"], cta: "Start Free Trial", highlight: true },
    { name: "Enterprise", price: "Custom", unit: "tailored pricing", features: ["Unlimited travelers", "SSO & API access", "Custom integrations", "24/7 priority support"], cta: "Contact Sales", highlight: false },
  ]
  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ fontFamily: "Inter, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <nav className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-xl font-bold" style={{ color: "#2563eb" }}>TravelStack</span>
            <div className="hidden md:flex space-x-6">
              <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer">Product</span>
              <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer">Solutions</span>
              <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer">Pricing</span>
              <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer">Resources</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="h-10 px-4 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors">Sign In</button>
            <button className="h-10 px-6 text-sm font-medium text-white rounded-md transition-colors" style={{ backgroundColor: "#2563eb" }}>Request Demo</button>
          </div>
        </div>
      </nav>
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#2563eb" }}>Corporate Travel Management</p>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">Streamline your<br/>business travel</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">One platform to book, manage, and report on every business trip. Reduce costs, enforce policy, and give your travelers a better experience.</p>
          <div className="flex justify-center space-x-3">
            <button className="h-12 px-8 text-sm font-medium text-white rounded-md transition-colors" style={{ backgroundColor: "#2563eb" }}>Get Started Free</button>
            <button className="h-12 px-8 text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-md transition-colors">Watch Demo</button>
          </div>
          <p className="text-xs text-slate-400 mt-4">Trusted by 2,400+ companies worldwide</p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">Everything you need</h2>
        <p className="text-slate-500 text-center mb-12">From booking to reconciliation, all in one place</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.name} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4" dangerouslySetInnerHTML={{ __html: f.icon }} />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.name}</h3>
              <p className="text-sm text-slate-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">Built-in Travel Policies</h2>
          <p className="text-slate-500 text-center mb-12">Set guardrails once and let the system do the enforcing</p>
          <div className="space-y-4">
            {policies.map((p) => (
              <div key={p.rule} className="bg-white rounded-lg p-5 border border-slate-200 flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#2563eb" }} />
                <div><h4 className="font-semibold text-slate-900 text-sm">{p.rule}</h4><p className="text-sm text-slate-500 mt-1">{p.detail}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">Dashboard Preview</h2>
        <p className="text-slate-500 text-center mb-10">Real-time visibility into every dollar spent</p>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[{ label: "Monthly Spend", val: "$284,500" }, { label: "Active Trips", val: "47" }, { label: "Policy Compliance", val: "94%" }, { label: "Avg. Savings", val: "22%" }].map((s) => (
              <div key={s.label} className="bg-white rounded-lg p-4 border border-slate-200 text-center">
                <p className="text-2xl font-bold text-slate-900">{s.val}</p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="h-40 rounded-lg border border-dashed border-slate-300 flex items-center justify-center text-sm text-slate-400">Spend analytics chart area</div>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Trusted by industry leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.company} className="bg-white rounded-xl p-6 border border-slate-200">
                <p className="text-sm text-slate-600 mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="text-sm font-semibold text-slate-900">{t.person}</p>
                <p className="text-xs" style={{ color: "#2563eb" }}>{t.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">Simple, transparent pricing</h2>
        <p className="text-slate-500 text-center mb-12">No setup fees. No hidden charges. Scale as you grow.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-xl p-8 ${p.highlight ? "border-2 ring-1 ring-blue-100" : "border border-slate-200"} bg-white`} style={p.highlight ? { borderColor: "#2563eb" } : {}}>
              <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              <div className="mt-4 mb-6"><span className="text-4xl font-bold text-slate-900">{p.price}</span><span className="text-sm text-slate-500 ml-1">{p.unit}</span></div>
              <ul className="space-y-3 mb-8 text-sm text-slate-600">{p.features.map((f) => (<li key={f}>&#10003; {f}</li>))}</ul>
              <button className={`w-full h-10 text-sm font-medium rounded-md transition-colors ${p.highlight ? "text-white" : "text-slate-700 bg-slate-100 hover:bg-slate-200"}`} style={p.highlight ? { backgroundColor: "#2563eb" } : {}}>{p.cta}</button>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to simplify business travel?</h2>
          <p className="text-sm text-slate-500 mb-6">Talk to our team and get a custom walkthrough for your organization.</p>
          <div className="bg-white rounded-xl border border-slate-200 p-6 text-left space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="text-xs font-medium text-slate-600 block mb-1">Full Name</label><div className="h-10 rounded-md border border-slate-200 bg-slate-50" /></div>
              <div><label className="text-xs font-medium text-slate-600 block mb-1">Work Email</label><div className="h-10 rounded-md border border-slate-200 bg-slate-50" /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="text-xs font-medium text-slate-600 block mb-1">Company</label><div className="h-10 rounded-md border border-slate-200 bg-slate-50" /></div>
              <div><label className="text-xs font-medium text-slate-600 block mb-1">Number of Travelers</label><div className="h-10 rounded-md border border-slate-200 bg-slate-50" /></div>
            </div>
            <button className="w-full h-11 text-sm font-medium text-white rounded-md transition-colors" style={{ backgroundColor: "#2563eb" }}>Contact Sales</button>
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div><span className="text-lg font-bold" style={{ color: "#2563eb" }}>TravelStack</span><p className="text-xs text-slate-400 mt-2">Corporate travel, simplified.</p></div>
            <div><h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">Product</h4><div className="space-y-2 text-sm text-slate-500"><p>Booking</p><p>Expenses</p><p>Reporting</p></div></div>
            <div><h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">Company</h4><div className="space-y-2 text-sm text-slate-500"><p>About</p><p>Careers</p><p>Blog</p></div></div>
            <div><h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">Legal</h4><div className="space-y-2 text-sm text-slate-500"><p>Privacy</p><p>Terms</p><p>Security</p></div></div>
          </div>
          <div className="border-t border-slate-200 mt-8 pt-6 text-center">
            <span className="text-xs text-slate-400">&copy; 2026 TravelStack, Inc. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
