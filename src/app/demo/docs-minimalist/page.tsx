export default function DocsMinimalistDemo() {
  const sidebarSections = [
    {
      title: "Getting Started",
      items: [
        { label: "Introduction", active: true },
        { label: "Installation", active: false },
        { label: "Quick Start", active: false },
        { label: "Configuration", active: false },
      ],
    },
    {
      title: "Core API",
      items: [
        { label: "Authentication", active: false },
        { label: "Requests", active: false },
        { label: "Responses", active: false },
        { label: "Error Handling", active: false },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Customers", active: false },
        { label: "Payments", active: false },
        { label: "Subscriptions", active: false },
        { label: "Invoices", active: false },
      ],
    },
    {
      title: "Utilities",
      items: [
        { label: "Webhooks", active: false },
        { label: "Pagination", active: false },
        { label: "Rate Limits", active: false },
        { label: "Versioning", active: false },
      ],
    },
  ];

  const tocItems = ["Overview", "Authentication", "Making Requests", "Response Format", "Error Codes", "Next Steps"];

  const configOptions = [
    { param: "api_key", type: "string", required: "Yes", desc: "Your secret API key" },
    { param: "base_url", type: "string", required: "No", desc: "Override the default base URL" },
    { param: "timeout", type: "number", required: "No", desc: "Request timeout in milliseconds" },
    { param: "max_retries", type: "number", required: "No", desc: "Maximum number of retries on failure" },
    { param: "idempotency", type: "boolean", required: "No", desc: "Enable automatic idempotency keys" },
  ];

  const errorCodes = [
    { code: "400", meaning: "Bad Request", desc: "The request was malformed or missing required fields." },
    { code: "401", meaning: "Unauthorized", desc: "Invalid or missing API key." },
    { code: "404", meaning: "Not Found", desc: "The requested resource does not exist." },
    { code: "429", meaning: "Rate Limited", desc: "Too many requests. Retry after the specified delay." },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>

      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-[88rem] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-base font-semibold tracking-tight text-slate-900">Clearway</span>
            <div className="hidden md:flex items-center gap-6">
              {["Docs", "API Reference", "Guides", "Changelog"].map((item, i) => (
                <span key={item} className={`text-[13px] cursor-pointer transition-colors ${i === 0 ? "text-slate-900 font-medium" : "text-slate-400 hover:text-slate-700"}`}>{item}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center h-8 w-56 border border-slate-200 rounded-md px-3 gap-2">
              <svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span className="text-xs text-slate-300">Search docs...</span>
              <span className="ml-auto text-[10px] text-slate-300 border border-slate-200 px-1 rounded font-mono">/</span>
            </div>
            <span className="text-[13px] text-slate-400 hover:text-slate-700 cursor-pointer">GitHub</span>
          </div>
        </div>
      </nav>

      <div className="max-w-[88rem] mx-auto flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-60 flex-shrink-0 border-r border-slate-100 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-8 px-5">
          {sidebarSections.map((section) => (
            <div key={section.title} className="mb-7">
              <h4 className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mb-2.5">{section.title}</h4>
              <div className="space-y-px">
                {section.items.map((item) => (
                  <div key={item.label} className={`py-1.5 px-2 text-[13px] rounded cursor-pointer transition-colors ${item.active ? "text-slate-900 font-medium bg-slate-50" : "text-slate-400 hover:text-slate-600"}`}>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-10 lg:px-16 py-12 max-w-3xl">
          <p className="text-[13px] text-slate-300 mb-8">Getting Started &nbsp;/&nbsp; Introduction</p>

          <h1 className="text-[28px] font-semibold text-slate-900 tracking-tight mb-3">Introduction</h1>
          <p className="text-[15px] text-slate-500 leading-relaxed mb-10">
            Clearway is a payments API built for developers. Accept payments, manage subscriptions, and handle invoicing with a clean, predictable interface.
          </p>

          {/* Info callout */}
          <div className="border border-slate-200 rounded-md p-4 mb-10 flex gap-3">
            <span className="text-slate-300 text-sm mt-0.5">&#9432;</span>
            <p className="text-[13px] text-slate-500 leading-relaxed">
              This guide covers the REST API. For client-side integration, see the <span className="text-slate-700 font-medium cursor-pointer">SDK Reference</span>.
            </p>
          </div>

          <h2 id="authentication" className="text-lg font-semibold text-slate-900 mb-3 mt-12">Authentication</h2>
          <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
            Authenticate requests by including your API key in the Authorization header. All API requests must be made over HTTPS.
          </p>
          <div className="bg-slate-50 border border-slate-100 rounded-md overflow-hidden mb-8">
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100">
              <span className="text-[11px] text-slate-400 font-mono">bash</span>
              <span className="text-[11px] text-slate-300 cursor-pointer hover:text-slate-500">Copy</span>
            </div>
            <pre className="p-4 text-[13px] text-slate-700 leading-relaxed overflow-x-auto" style={{ fontFamily: "SF Mono, Menlo, monospace" }}>
{`curl https://api.clearway.dev/v1/payments \\
  -H "Authorization: Bearer sk_live_abc123..." \\
  -H "Content-Type: application/json"`}
            </pre>
          </div>

          <h2 id="making-requests" className="text-lg font-semibold text-slate-900 mb-3 mt-12">Making Requests</h2>
          <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
            The API accepts JSON-encoded request bodies and returns JSON-encoded responses. Use standard HTTP methods to interact with resources.
          </p>
          <div className="bg-slate-50 border border-slate-100 rounded-md overflow-hidden mb-8">
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100">
              <span className="text-[11px] text-slate-400 font-mono">javascript</span>
              <span className="text-[11px] text-slate-300 cursor-pointer hover:text-slate-500">Copy</span>
            </div>
            <pre className="p-4 text-[13px] text-slate-700 leading-relaxed overflow-x-auto" style={{ fontFamily: "SF Mono, Menlo, monospace" }}>
{`const clearway = require('clearway')('sk_live_abc123');

const payment = await clearway.payments.create({
  amount: 2000,
  currency: 'usd',
  customer: 'cus_9f3b2a',
  description: 'Order #1234',
});

console.log(payment.id); // pay_7x8k2m`}
            </pre>
          </div>

          <h2 id="response-format" className="text-lg font-semibold text-slate-900 mb-3 mt-12">Response Format</h2>
          <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
            Every response includes an object type, an ID, and the resource data. List endpoints return a paginated array.
          </p>
          <div className="border border-slate-200 rounded-md overflow-hidden mb-10">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100">
                  {["Parameter", "Type", "Required", "Description"].map((h) => (
                    <th key={h} className="text-[11px] font-medium text-slate-400 uppercase tracking-wider px-4 py-2.5">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {configOptions.map((row) => (
                  <tr key={row.param} className="border-b border-slate-50 last:border-0">
                    <td className="px-4 py-2.5 text-[13px] font-mono text-slate-700">{row.param}</td>
                    <td className="px-4 py-2.5 text-[13px] font-mono text-slate-400">{row.type}</td>
                    <td className="px-4 py-2.5 text-[13px] text-slate-400">{row.required}</td>
                    <td className="px-4 py-2.5 text-[13px] text-slate-500">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 id="error-codes" className="text-lg font-semibold text-slate-900 mb-3 mt-12">Error Codes</h2>
          <p className="text-[13px] text-slate-500 leading-relaxed mb-4">
            Clearway uses standard HTTP status codes. Errors include a machine-readable code and a human-readable message.
          </p>
          {/* Warning callout */}
          <div className="border-l-2 border-amber-300 bg-amber-50/50 pl-4 pr-4 py-3 mb-6">
            <p className="text-[13px] text-slate-600 leading-relaxed">
              Always handle errors gracefully. Implement exponential backoff for 429 responses.
            </p>
          </div>
          <div className="space-y-2 mb-10">
            {errorCodes.map((err) => (
              <div key={err.code} className="flex items-start gap-4 py-2">
                <span className="text-[13px] font-mono text-slate-700 w-10 flex-shrink-0">{err.code}</span>
                <span className="text-[13px] font-medium text-slate-600 w-28 flex-shrink-0">{err.meaning}</span>
                <span className="text-[13px] text-slate-400">{err.desc}</span>
              </div>
            ))}
          </div>

          <h2 id="next-steps" className="text-lg font-semibold text-slate-900 mb-4 mt-12">Next Steps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
            {[
              { title: "Quick Start", desc: "Create your first payment in 5 minutes" },
              { title: "API Reference", desc: "Full endpoint documentation" },
            ].map((card) => (
              <div key={card.title} className="border border-slate-150 rounded-md p-4 cursor-pointer hover:border-slate-300 transition-colors group">
                <h3 className="text-[13px] font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{card.title} &rarr;</h3>
                <p className="text-[12px] text-slate-400 mt-1">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Prev/Next */}
          <div className="border-t border-slate-100 pt-6 flex justify-between">
            <div />
            <div className="text-right">
              <p className="text-[11px] text-slate-300 mb-1">Next</p>
              <span className="text-[13px] font-medium text-slate-600 cursor-pointer hover:text-slate-900">Installation &rarr;</span>
            </div>
          </div>
        </main>

        {/* Right TOC */}
        <aside className="hidden xl:block w-48 flex-shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-12 pr-6">
          <h4 className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mb-3">On this page</h4>
          <div className="space-y-2">
            {tocItems.map((item, i) => (
              <div key={item} className={`text-[13px] cursor-pointer transition-colors ${i === 0 ? "text-slate-800 font-medium" : "text-slate-300 hover:text-slate-600"}`}>
                {item}
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-100 mt-16">
        <div className="max-w-[88rem] mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { heading: "Product", links: ["Features", "Pricing", "Changelog", "Status"] },
              { heading: "Developers", links: ["Documentation", "API Reference", "SDKs", "CLI"] },
              { heading: "Company", links: ["About", "Blog", "Careers", "Press"] },
              { heading: "Legal", links: ["Privacy", "Terms", "Security", "Compliance"] },
            ].map((col) => (
              <div key={col.heading}>
                <h4 className="text-[11px] font-medium text-slate-400 uppercase tracking-widest mb-3">{col.heading}</h4>
                <div className="space-y-2">
                  {col.links.map((link) => (
                    <p key={link} className="text-[13px] text-slate-300 hover:text-slate-600 cursor-pointer transition-colors">{link}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-100 pt-6 flex items-center justify-between">
            <span className="text-[12px] text-slate-300">&copy; 2024 Clearway Inc.</span>
            <div className="flex gap-4">
              {["GitHub", "Twitter", "Discord"].map((s) => (
                <span key={s} className="text-[12px] text-slate-300 hover:text-slate-500 cursor-pointer transition-colors">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
