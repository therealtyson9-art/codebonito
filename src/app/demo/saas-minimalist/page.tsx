export default function SaaSMinimalistDemo() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" /></head>
      <nav className="border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <span className="text-xl font-semibold text-slate-900">Acme</span>
            <div className="hidden md:flex space-x-6">
              <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Product</span>
              <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Features</span>
              <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Pricing</span>
              <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Docs</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="h-10 px-4 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors">Sign in</button>
            <button className="h-10 px-6 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors">Get Started</button>
          </div>
        </div>
      </nav>
      <section className="max-w-6xl mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">✨ Now in public beta</div>
        <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">Build faster with<br/>intelligent automation</h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">The modern platform for teams who ship. Streamline your workflow, collaborate seamlessly, and deploy with confidence.</p>
        <div className="flex justify-center space-x-3">
          <button className="h-12 px-8 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors">Start free trial</button>
          <button className="h-12 px-8 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors">View demo</button>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{title:"Analytics",desc:"Real-time insights into your application performance and user behavior.",icon:"📊"},{title:"Integrations",desc:"Connect with 200+ tools your team already uses every day.",icon:"🔗"},{title:"Security",desc:"Enterprise-grade security with SOC 2 compliance and encryption.",icon:"🔒"}].map((f)=>(
            <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Simple pricing</h2>
        <p className="text-slate-500 text-center mb-12">No hidden fees. Cancel anytime.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Starter</h3>
            <div className="mt-4 mb-6"><span className="text-4xl font-bold text-slate-900">$0</span><span className="text-slate-500">/month</span></div>
            <ul className="space-y-3 mb-8 text-sm text-slate-600"><li>✓ Up to 3 projects</li><li>✓ Basic analytics</li><li>✓ Community support</li></ul>
            <button className="w-full h-10 px-6 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors">Get started</button>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-blue-500">
            <h3 className="text-lg font-semibold text-slate-900">Pro</h3>
            <div className="mt-4 mb-6"><span className="text-4xl font-bold text-slate-900">$29</span><span className="text-slate-500">/month</span></div>
            <ul className="space-y-3 mb-8 text-sm text-slate-600"><li>✓ Unlimited projects</li><li>✓ Advanced analytics</li><li>✓ Priority support</li></ul>
            <button className="w-full h-10 px-6 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors">Start free trial</button>
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 flex justify-between items-center">
          <span className="text-sm text-slate-500">© 2026 Acme Inc.</span>
          <div className="flex space-x-6 text-sm text-slate-500">
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
