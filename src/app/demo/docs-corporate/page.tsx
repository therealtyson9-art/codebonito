export default function DocsCorporateDemo() {
  const sidebarSections = [
    {
      title: "Getting Started",
      items: [
        { label: "Introduction", active: true },
        { label: "Installation", active: false },
        { label: "Quick Start", active: false },
        { label: "Project Structure", active: false },
      ],
    },
    {
      title: "Core Concepts",
      items: [
        { label: "Configuration", active: false },
        { label: "Authentication", active: false },
        { label: "Data Fetching", active: false },
        { label: "Error Handling", active: false },
      ],
    },
    {
      title: "API Reference",
      items: [
        { label: "REST Endpoints", active: false },
        { label: "WebSocket API", active: false },
        { label: "SDK Methods", active: false },
        { label: "Webhooks", active: false },
      ],
    },
    {
      title: "Guides",
      items: [
        { label: "Deployment", active: false },
        { label: "Testing", active: false },
        { label: "Migration", active: false },
        { label: "Troubleshooting", active: false },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>

      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-md bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">V</div>
              <span className="text-sm font-semibold text-slate-900">Vantage</span>
              <span className="px-1.5 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-semibold rounded uppercase">Docs</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <span className="text-sm font-medium text-indigo-600 cursor-pointer">Documentation</span>
              <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">API Reference</span>
              <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Examples</span>
              <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Blog</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex h-9 w-64 bg-slate-50 rounded-lg border border-slate-200 items-center px-3 space-x-2">
              <span className="text-slate-400 text-xs">&#9906;</span>
              <span className="text-xs text-slate-400 flex-1">Search documentation...</span>
              <span className="text-[10px] text-slate-400 border border-slate-200 px-1.5 py-0.5 rounded font-mono">&#8984;K</span>
            </div>
            <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">GitHub</span>
          </div>
        </div>
      </nav>

      <div className="max-w-[90rem] mx-auto flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-slate-200 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-6 px-4">
          {sidebarSections.map((section) => (
            <div key={section.title} className="mb-6">
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2 px-2">{section.title}</h4>
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <div
                    key={item.label}
                    className={`px-2 py-1.5 text-sm rounded-md cursor-pointer transition-colors ${
                      item.active
                        ? "bg-indigo-50 text-indigo-600 font-medium"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-8 lg:px-16 py-10">
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-sm mb-8">
            <span className="text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors">Docs</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-400 hover:text-indigo-600 cursor-pointer transition-colors">Getting Started</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 font-medium">Introduction</span>
          </div>

          {/* Page Title */}
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Introduction</h1>
          <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-3xl">
            Vantage is a modern API platform that helps you build, deploy, and scale your applications with confidence. This guide will walk you through the core concepts and get you up and running in minutes.
          </p>

          {/* Info Box */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-8 max-w-3xl">
            <div className="flex items-start space-x-3">
              <span className="text-indigo-500 text-sm mt-0.5">&#9432;</span>
              <div>
                <p className="text-sm font-medium text-indigo-900 mb-1">New to Vantage?</p>
                <p className="text-sm text-indigo-700/70">
                  We recommend starting with our Quick Start guide to get a feel for the platform before diving into the detailed documentation.
                </p>
              </div>
            </div>
          </div>

          {/* Section */}
          <h2 className="text-xl font-semibold text-slate-900 mb-4 mt-10">What is Vantage?</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4 max-w-3xl">
            Vantage provides a unified platform for building modern web applications. It combines a powerful REST API, real-time WebSocket connections, and a comprehensive SDK into a single, cohesive developer experience.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-8 max-w-3xl">
            Whether you&apos;re building a simple CRUD application or a complex real-time system, Vantage gives you the tools and infrastructure to move fast without sacrificing reliability.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl">
            {[
              { title: "Type-Safe SDK", desc: "Full TypeScript support with auto-generated types from your schema." },
              { title: "Edge Runtime", desc: "Deploy globally with sub-50ms latency at over 200 edge locations." },
              { title: "Real-time Sync", desc: "Built-in WebSocket support for live data synchronization." },
              { title: "Auto Scaling", desc: "Handles traffic spikes automatically with zero configuration." },
            ].map((f) => (
              <div key={f.title} className="border border-slate-200 rounded-lg p-4 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors cursor-pointer">
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Code Block */}
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Installation</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4 max-w-3xl">
            Install the Vantage SDK using your preferred package manager:
          </p>
          <div className="bg-slate-900 rounded-lg overflow-hidden mb-6 max-w-3xl">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-400/60" />
                <span className="w-3 h-3 rounded-full bg-amber-400/60" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/60" />
              </div>
              <span className="text-xs text-slate-500 font-mono">Terminal</span>
            </div>
            <div className="p-4" style={{ fontFamily: "IBM Plex Mono, monospace" }}>
              <p className="text-sm text-emerald-400"><span className="text-slate-500">$</span> npm install @vantage/sdk</p>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-4 max-w-3xl">
            Then initialize Vantage in your project:
          </p>
          <div className="bg-slate-900 rounded-lg overflow-hidden mb-8 max-w-3xl">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-400/60" />
                <span className="w-3 h-3 rounded-full bg-amber-400/60" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/60" />
              </div>
              <span className="text-xs text-slate-500 font-mono">app.ts</span>
            </div>
            <div className="p-4" style={{ fontFamily: "IBM Plex Mono, monospace" }}>
              <p className="text-sm"><span className="text-violet-400">import</span> <span className="text-amber-300">{"{ Vantage }"}</span> <span className="text-violet-400">from</span> <span className="text-emerald-400">&apos;@vantage/sdk&apos;</span></p>
              <p className="text-sm text-slate-600 mt-2">{"// Initialize the client"}</p>
              <p className="text-sm"><span className="text-violet-400">const</span> <span className="text-sky-300">client</span> = <span className="text-violet-400">new</span> <span className="text-amber-300">Vantage</span>({"{"})</p>
              <p className="text-sm text-slate-300 pl-4">apiKey: <span className="text-emerald-400">&apos;your-api-key&apos;</span>,</p>
              <p className="text-sm text-slate-300 pl-4">region: <span className="text-emerald-400">&apos;us-east-1&apos;</span>,</p>
              <p className="text-sm text-slate-300">{"}"})</p>
              <p className="text-sm mt-2"><span className="text-violet-400">const</span> <span className="text-sky-300">data</span> = <span className="text-violet-400">await</span> client.<span className="text-amber-300">query</span>(<span className="text-emerald-400">&apos;users&apos;</span>)</p>
            </div>
          </div>

          {/* Configuration Table */}
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Configuration Options</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4 max-w-3xl">
            The following options can be passed to the Vantage constructor:
          </p>
          <div className="border border-slate-200 rounded-lg overflow-hidden mb-10 max-w-3xl">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-slate-700 uppercase tracking-wide">Option</th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-slate-700 uppercase tracking-wide">Type</th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-slate-700 uppercase tracking-wide">Default</th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-slate-700 uppercase tracking-wide">Description</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { opt: "apiKey", type: "string", def: "—", desc: "Your API key (required)" },
                  { opt: "region", type: "string", def: "'us-east-1'", desc: "Deployment region" },
                  { opt: "timeout", type: "number", def: "30000", desc: "Request timeout in ms" },
                  { opt: "retries", type: "number", def: "3", desc: "Number of retry attempts" },
                  { opt: "debug", type: "boolean", def: "false", desc: "Enable debug logging" },
                ].map((row) => (
                  <tr key={row.opt} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-2.5 text-sm font-mono text-indigo-600 font-medium">{row.opt}</td>
                    <td className="px-4 py-2.5 text-sm font-mono text-slate-500">{row.type}</td>
                    <td className="px-4 py-2.5 text-sm font-mono text-slate-400">{row.def}</td>
                    <td className="px-4 py-2.5 text-sm text-slate-600">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Warning Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-10 max-w-3xl">
            <div className="flex items-start space-x-3">
              <span className="text-amber-500 text-sm mt-0.5">&#9888;</span>
              <div>
                <p className="text-sm font-medium text-amber-900 mb-1">Security Notice</p>
                <p className="text-sm text-amber-700/70">
                  Never expose your API key in client-side code. Use environment variables and server-side proxies for production applications.
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl">
            {[
              { title: "Quick Start Guide", desc: "Build your first app in under 5 minutes", arrow: true },
              { title: "API Reference", desc: "Explore all available endpoints and methods", arrow: true },
            ].map((item) => (
              <div key={item.title} className="border border-slate-200 rounded-lg p-4 hover:border-indigo-300 hover:shadow-sm transition-all cursor-pointer group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                  <span className="text-slate-400 group-hover:text-indigo-500 transition-colors">&rarr;</span>
                </div>
              </div>
            ))}
          </div>

          {/* Page Footer */}
          <div className="border-t border-slate-200 pt-6 mt-16 flex items-center justify-between max-w-3xl">
            <div />
            <div className="text-right">
              <p className="text-xs text-slate-400 mb-1">Next</p>
              <span className="text-sm font-medium text-indigo-600 hover:text-indigo-700 cursor-pointer transition-colors">Installation &rarr;</span>
            </div>
          </div>
        </main>

        {/* Right TOC */}
        <aside className="hidden xl:block w-56 flex-shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-10 pr-6">
          <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">On this page</h4>
          <div className="space-y-1.5">
            {["What is Vantage?", "Installation", "Configuration Options", "Next Steps"].map((item, i) => (
              <div key={item} className={`text-sm cursor-pointer transition-colors ${i === 0 ? "text-indigo-600 font-medium" : "text-slate-400 hover:text-slate-900"}`}>
                {item}
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-[90rem] mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Product</h4>
              <div className="space-y-2">
                {["Features", "Pricing", "Changelog", "Status"].map((item) => (
                  <p key={item} className="text-sm text-slate-500 hover:text-indigo-600 cursor-pointer transition-colors">{item}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Resources</h4>
              <div className="space-y-2">
                {["Documentation", "API Reference", "Examples", "Community"].map((item) => (
                  <p key={item} className="text-sm text-slate-500 hover:text-indigo-600 cursor-pointer transition-colors">{item}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Company</h4>
              <div className="space-y-2">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <p key={item} className="text-sm text-slate-500 hover:text-indigo-600 cursor-pointer transition-colors">{item}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Legal</h4>
              <div className="space-y-2">
                {["Privacy", "Terms", "Security", "GDPR"].map((item) => (
                  <p key={item} className="text-sm text-slate-500 hover:text-indigo-600 cursor-pointer transition-colors">{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">V</div>
              <span className="text-sm text-slate-400">&copy; 2024 Vantage Inc. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-400 hover:text-slate-600 cursor-pointer transition-colors">GitHub</span>
              <span className="text-sm text-slate-400 hover:text-slate-600 cursor-pointer transition-colors">Twitter</span>
              <span className="text-sm text-slate-400 hover:text-slate-600 cursor-pointer transition-colors">Discord</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
