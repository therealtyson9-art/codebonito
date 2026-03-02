export default function DocsCorporateDemo() {
  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif" }} className="min-h-screen" >
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Version Banner */}
      <div className="text-center py-2 text-sm font-medium text-white" style={{ backgroundColor: "#2563eb" }}>
        CloudSync Platform v4.1 is now available — <a className="underline font-bold text-white">View migration guide</a>
      </div>

      {/* Header with Tabbed Nav */}
      <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#2563eb" }}>CS</div>
          <span className="text-lg font-bold" style={{ color: "#1e293b" }}>CloudSync Platform</span>
          <span className="text-xs text-gray-400 ml-2">Developer Docs</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-400 w-64">Search documentation...</div>
          <div className="px-4 py-1.5 rounded text-sm font-medium text-white" style={{ backgroundColor: "#2563eb" }}>Sign In</div>
        </div>
      </header>

      {/* Tabbed Navigation */}
      <nav className="bg-white border-b border-gray-200 px-8">
        <div className="flex gap-0">
          {["Quick Start", "REST API", "Authentication", "SDKs", "Rate Limits", "Webhooks", "Status"].map((tab, i) => (
            <span key={tab} className="px-4 py-3 text-sm font-medium border-b-2" style={{ borderColor: i === 0 ? "#2563eb" : "transparent", color: i === 0 ? "#2563eb" : "#6b7280" }}>{tab}</span>
          ))}
        </div>
      </nav>

      <div style={{ backgroundColor: "#f5f5f5" }} className="min-h-screen">
        <main className="max-w-5xl mx-auto px-8 py-10">
          {/* Quick Start Guide */}
          <section className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h1 className="text-3xl font-bold mb-2" style={{ color: "#1e293b" }}>Quick Start Guide</h1>
            <p className="text-base mb-6" style={{ color: "#64748b" }}>Get up and running with the CloudSync REST API in under five minutes. This guide covers authentication, your first API call, and basic resource management.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: "#2563eb" }}>1</div>
                <p className="text-sm font-semibold" style={{ color: "#1e293b" }}>Create API Key</p>
                <p className="text-xs mt-1" style={{ color: "#64748b" }}>Generate credentials in the dashboard</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: "#2563eb" }}>2</div>
                <p className="text-sm font-semibold" style={{ color: "#1e293b" }}>Make First Call</p>
                <p className="text-xs mt-1" style={{ color: "#64748b" }}>Test with the health check endpoint</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold mb-1" style={{ color: "#2563eb" }}>3</div>
                <p className="text-sm font-semibold" style={{ color: "#1e293b" }}>Sync Resources</p>
                <p className="text-xs mt-1" style={{ color: "#64748b" }}>Create your first sync pipeline</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm" style={{ color: "#1e293b" }}>
              <p style={{ color: "#64748b" }}>{"# Verify your API key"}</p>
              <p>{"curl -H \"Authorization: Bearer cs_live_abc123\" \\"}</p>
              <p className="pl-4">{"https://api.cloudsync.io/v4/health"}</p>
            </div>
          </section>

          {/* Endpoint Reference */}
          <section className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#1e293b" }}>Endpoint Reference</h2>
            <div className="space-y-4">
              {[
                { method: "GET", path: "/v4/resources", desc: "List all synced resources with pagination. Supports filtering by type, status, and creation date. Returns up to 100 items per page." },
                { method: "POST", path: "/v4/resources", desc: "Create a new resource and initiate sync. Requires resource_type and source_url in the request body. Responds with a sync job ID." },
                { method: "GET", path: "/v4/pipelines/{id}", desc: "Retrieve pipeline configuration and execution history. Includes last 50 run summaries with status, duration, and record counts." },
                { method: "DELETE", path: "/v4/resources/{id}", desc: "Remove a resource and cancel active syncs. This action is irreversible. Associated pipeline schedules are also deleted." },
              ].map((ep) => (
                <div key={ep.path + ep.method} className="border border-gray-200 rounded-lg p-4 flex gap-4">
                  <span className="text-xs font-bold px-2 py-1 rounded h-fit shrink-0" style={{ backgroundColor: ep.method === "GET" ? "#dbeafe" : ep.method === "POST" ? "#dcfce7" : "#fee2e2", color: ep.method === "GET" ? "#2563eb" : ep.method === "POST" ? "#16a34a" : "#dc2626" }}>{ep.method}</span>
                  <div>
                    <p className="font-mono text-sm font-semibold" style={{ color: "#1e293b" }}>{ep.path}</p>
                    <p className="text-sm mt-1" style={{ color: "#64748b" }}>{ep.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Authentication */}
          <section className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1e293b" }}>Authentication</h2>
            <p className="mb-4" style={{ color: "#64748b" }}>
              CloudSync uses Bearer token authentication. Include your API key in the Authorization header of every request. Keys are scoped to environments (production, staging, development) and can be rotated without downtime.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm mb-4" style={{ color: "#1e293b" }}>
              <p>{"Authorization: Bearer cs_live_your_api_key_here"}</p>
            </div>
            <p className="text-sm" style={{ color: "#64748b" }}>
              For OAuth 2.0 integrations, CloudSync supports the authorization code flow with PKCE. Tokens expire after 3600 seconds. Refresh tokens are valid for 30 days and support automatic rotation.
            </p>
          </section>

          {/* Rate Limits */}
          <section className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1e293b" }}>Rate Limits</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold" style={{ color: "#1e293b" }}>Plan</th>
                    <th className="text-left py-2 font-semibold" style={{ color: "#1e293b" }}>Requests / min</th>
                    <th className="text-left py-2 font-semibold" style={{ color: "#1e293b" }}>Burst</th>
                    <th className="text-left py-2 font-semibold" style={{ color: "#1e293b" }}>Concurrency</th>
                  </tr>
                </thead>
                <tbody style={{ color: "#64748b" }}>
                  <tr className="border-b border-gray-100"><td className="py-2">Free</td><td>60</td><td>10</td><td>2</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2">Pro</td><td>600</td><td>100</td><td>10</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2">Enterprise</td><td>6,000</td><td>1,000</td><td>50</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SDKs */}
          <section className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#1e293b" }}>Official SDKs</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { lang: "Node.js", pkg: "@cloudsync/node", ver: "4.1.0" },
                { lang: "Python", pkg: "cloudsync-python", ver: "4.0.3" },
                { lang: "Go", pkg: "go-cloudsync", ver: "4.1.0" },
                { lang: "Ruby", pkg: "cloudsync-ruby", ver: "4.0.1" },
              ].map((sdk) => (
                <div key={sdk.lang} className="border border-gray-200 rounded-lg p-4">
                  <p className="font-semibold text-sm" style={{ color: "#1e293b" }}>{sdk.lang}</p>
                  <p className="font-mono text-xs mt-1" style={{ color: "#2563eb" }}>{sdk.pkg}</p>
                  <p className="text-xs mt-1" style={{ color: "#64748b" }}>v{sdk.ver}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Corporate Footer */}
      <footer className="bg-white border-t border-gray-200 px-8 py-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-sm" style={{ color: "#64748b" }}>
          <div className="flex items-center gap-6">
            <span className="font-semibold" style={{ color: "#1e293b" }}>CloudSync</span>
            <a>Terms</a>
            <a>Privacy</a>
            <a>Security</a>
            <a>Status</a>
          </div>
          <span>&copy; 2026 CloudSync, Inc. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
