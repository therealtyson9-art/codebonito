export default function TechMinimalistDemo() {
  const endpoints = [
    { method: "GET", path: "/v2/datasets", description: "List all datasets in your workspace with pagination and filtering support." },
    { method: "POST", path: "/v2/datasets/{id}/query", description: "Execute SQL or APL queries against a specific dataset with streaming results." },
    { method: "PUT", path: "/v2/pipelines", description: "Create or update an ingestion pipeline with transformation rules and routing." },
    { method: "DELETE", path: "/v2/monitors/{id}", description: "Remove a monitor and its associated alert configurations permanently." },
  ];

  const sdks = [
    { lang: "Python", install: "pip install axiom-sdk", color: "#3776AB" },
    { lang: "Node.js", install: "npm install @axiom/sdk", color: "#339933" },
    { lang: "Go", install: "go get github.com/axiom/sdk-go", color: "#00ADD8" },
    { lang: "Ruby", install: "gem install axiom-sdk", color: "#CC342D" },
  ];

  const changelog = [
    { version: "v2.14.0", date: "Feb 2026", title: "Streaming query results", desc: "Query responses now support Server-Sent Events for real-time result streaming." },
    { version: "v2.13.2", date: "Jan 2026", title: "Rate limit headers", desc: "All responses now include X-RateLimit-Remaining and X-RateLimit-Reset headers." },
    { version: "v2.13.0", date: "Dec 2025", title: "Pipeline transformations", desc: "Added support for custom transformation functions in ingestion pipelines." },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <div style={{ fontFamily: "'Figtree', sans-serif", backgroundColor: "#f3f4f6" }} className="min-h-screen text-gray-900">
        {/* Nav */}
        <nav className="border-b border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <span className="text-xl font-bold" style={{ color: "#3b82f6" }}>Axiom API</span>
              <div className="hidden md:flex gap-6 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Documentation</a>
                <a href="#" className="hover:text-gray-900">Endpoints</a>
                <a href="#" className="hover:text-gray-900">SDKs</a>
                <a href="#" className="hover:text-gray-900">Changelog</a>
                <a href="#" className="hover:text-gray-900">Status</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Sign In</a>
              <a href="#" className="text-sm text-white px-4 py-2 rounded-lg font-medium" style={{ backgroundColor: "#3b82f6" }}>Get API Key</a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "#3b82f6" }}>API-First Data Platform</p>
              <h1 className="text-5xl font-bold leading-tight mb-6">Build on the data platform that scales with you</h1>
              <p className="text-lg text-gray-600 mb-8">Axiom API provides a unified interface for ingesting, querying, and monitoring your data. RESTful endpoints, real-time streaming, and SDKs for every major language.</p>
              <div className="flex gap-4">
                <a href="#" className="px-6 py-3 text-white rounded-lg font-medium" style={{ backgroundColor: "#3b82f6" }}>Read the Docs</a>
                <a href="#" className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700">View on GitHub</a>
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-sm font-mono shadow-xl">
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <pre className="text-gray-300 leading-relaxed overflow-x-auto">
{`curl -X POST https://api.axiom.dev/v2/datasets/logs/query \\
  -H "Authorization: Bearer axm_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "apl": "logs | where status >= 400 | top 10 by count()",
    "startTime": "2026-02-01T00:00:00Z",
    "endTime": "2026-03-01T00:00:00Z"
  }'`}
              </pre>
            </div>
          </div>
        </section>

        {/* Endpoints Overview */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">Endpoints</h2>
            <p className="text-gray-600 mb-10 max-w-2xl">All endpoints are versioned under /v2 and accept JSON request bodies. Responses include standard pagination cursors and rate limit headers.</p>
            <div className="space-y-4">
              {endpoints.map((ep, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-lg border border-gray-200 hover:border-blue-200 transition-colors">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white shrink-0 mt-0.5" style={{ backgroundColor: ep.method === "GET" ? "#22c55e" : ep.method === "POST" ? "#3b82f6" : ep.method === "PUT" ? "#f59e0b" : "#ef4444" }}>{ep.method}</span>
                  <div>
                    <code className="text-sm font-semibold text-gray-900">{ep.path}</code>
                    <p className="text-sm text-gray-500 mt-1">{ep.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Authentication</h2>
              <p className="text-gray-600 mb-4">Axiom uses API tokens for authentication. Include your token in the Authorization header of every request. Tokens can be scoped to specific datasets and actions.</p>
              <p className="text-gray-600 mb-4">We support two token types: <strong>Personal tokens</strong> for development and testing, and <strong>Service tokens</strong> for production workloads with fine-grained permissions.</p>
              <p className="text-gray-600">All API traffic is encrypted via TLS 1.3. Tokens are hashed at rest and can be rotated without downtime.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Rate Limits</h2>
              <p className="text-gray-600 mb-4">Rate limits are applied per-token and vary by plan. Free tier allows 100 requests/minute, Pro allows 1,000, and Enterprise limits are custom.</p>
              <div className="bg-white rounded-lg p-5 border border-gray-200 mt-4">
                <div className="flex justify-between py-2 border-b border-gray-100"><span className="text-sm text-gray-600">Free</span><span className="text-sm font-semibold">100 req/min</span></div>
                <div className="flex justify-between py-2 border-b border-gray-100"><span className="text-sm text-gray-600">Pro</span><span className="text-sm font-semibold">1,000 req/min</span></div>
                <div className="flex justify-between py-2"><span className="text-sm text-gray-600">Enterprise</span><span className="text-sm font-semibold">Custom</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">Official SDKs</h2>
            <p className="text-gray-600 mb-10">Idiomatic client libraries maintained by the Axiom team. All SDKs support async operations, automatic retries, and type-safe responses.</p>
            <div className="grid md:grid-cols-4 gap-6">
              {sdks.map((sdk, i) => (
                <div key={i} className="p-6 rounded-lg border border-gray-200">
                  <div className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: sdk.color }}>{sdk.lang[0]}</div>
                  <h3 className="font-semibold mb-2">{sdk.lang}</h3>
                  <code className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded block">{sdk.install}</code>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Changelog */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Changelog</h2>
            <div className="space-y-8">
              {changelog.map((entry, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-right shrink-0 w-24">
                    <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: "#dbeafe", color: "#3b82f6" }}>{entry.version}</span>
                    <p className="text-xs text-gray-400 mt-1">{entry.date}</p>
                  </div>
                  <div className="border-l-2 border-gray-200 pl-6">
                    <h3 className="font-semibold mb-1">{entry.title}</h3>
                    <p className="text-sm text-gray-600">{entry.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Start building today</h2>
            <p className="text-gray-600 mb-8">Get your free API key and start ingesting data in under five minutes. No credit card required for the free tier.</p>
            <a href="#" className="inline-block px-8 py-4 text-white rounded-lg font-semibold text-lg" style={{ backgroundColor: "#3b82f6" }}>Get Your API Key</a>
            <p className="text-sm text-gray-400 mt-4">Free tier includes 1 GB ingestion and 30-day retention</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-12 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <span className="font-bold text-lg" style={{ color: "#3b82f6" }}>Axiom API</span>
              <p className="text-gray-500 mt-2">The API-first data platform for developers who ship fast.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <div className="space-y-2 text-gray-500"><p>Documentation</p><p>Pricing</p><p>Status Page</p><p>Changelog</p></div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Developers</h4>
              <div className="space-y-2 text-gray-500"><p>API Reference</p><p>SDKs</p><p>Guides</p><p>Community</p></div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <div className="space-y-2 text-gray-500"><p>About</p><p>Blog</p><p>Careers</p><p>Security</p></div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-200 text-xs text-gray-400 text-center">
            &copy; 2026 Axiom API, Inc. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
