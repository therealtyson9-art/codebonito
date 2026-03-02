export const dynamic = "force-dynamic";
export default function DocsMinimalistDemo() {
  return (
    <div style={{ fontFamily: "'Atkinson Hyperlegible', sans-serif", color: "#374151" }} className="min-h-screen bg-white">
      <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap" rel="stylesheet" />

      {/* Top Bar */}
      <header className="border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="text-lg font-bold tracking-tight" style={{ color: "#374151" }}>Lattice SDK</span>
          <span className="text-xs px-2 py-0.5 rounded-full border border-gray-300" style={{ color: "#6b7280" }}>v3.2.1</span>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a className="hover:underline" style={{ color: "#374151" }}>Guides</a>
          <a className="hover:underline" style={{ color: "#374151" }}>API Reference</a>
          <a className="hover:underline" style={{ color: "#374151" }}>Changelog</a>
          <a className="hover:underline" style={{ color: "#374151" }}>GitHub</a>
        </nav>
      </header>

      <div className="flex">
        {/* Tree Nav Sidebar */}
        <aside className="w-64 border-r border-gray-200 p-6 min-h-screen hidden lg:block">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#9ca3af" }}>Documentation</p>
          <ul className="space-y-1 text-sm">
            <li className="font-bold" style={{ color: "#374151" }}>Getting Started</li>
            <li className="pl-4" style={{ color: "#6b7280" }}>Installation</li>
            <li className="pl-4" style={{ color: "#6b7280" }}>Quick Start</li>
            <li className="pl-4" style={{ color: "#6b7280" }}>Configuration</li>
            <li className="mt-3 font-bold" style={{ color: "#374151" }}>Core Concepts</li>
            <li className="pl-4" style={{ color: "#6b7280" }}>Schemas</li>
            <li className="pl-4" style={{ color: "#6b7280" }}>Queries</li>
            <li className="pl-4" style={{ color: "#6b7280" }}>Mutations</li>
            <li className="pl-4" style={{ color: "#6b7280" }}>Subscriptions</li>
            <li className="mt-3 font-bold" style={{ color: "#374151" }}>Advanced</li>
            <li className="pl-4" style={{ color: "#6b7280" }}>Middleware</li>
            <li className="pl-4" style={{ color: "#6b7280" }}>Caching</li>
            <li className="pl-4" style={{ color: "#6b7280" }}>Error Handling</li>
            <li className="pl-4" style={{ color: "#6b7280" }}>Testing</li>
            <li className="mt-3 font-bold" style={{ color: "#374151" }}>Plugins</li>
            <li className="pl-4" style={{ color: "#6b7280" }}>Auth Plugin</li>
            <li className="pl-4" style={{ color: "#6b7280" }}>Logger Plugin</li>
            <li className="pl-4" style={{ color: "#6b7280" }}>Metrics Plugin</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-3xl mx-auto px-8 py-12">
          {/* Search Hero */}
          <section className="mb-16 text-center">
            <h1 className="text-4xl font-bold mb-3" style={{ color: "#374151" }}>Lattice SDK Documentation</h1>
            <p className="text-lg mb-6" style={{ color: "#6b7280" }}>Build type-safe, composable data layers for modern applications.</p>
            <div className="max-w-lg mx-auto relative">
              <div className="border border-gray-300 rounded-lg px-4 py-3 flex items-center gap-3 bg-gray-50">
                <span style={{ color: "#9ca3af" }}>&#x1F50D;</span>
                <span className="text-sm" style={{ color: "#9ca3af" }}>Search documentation... (Ctrl+K)</span>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#374151" }}>Getting Started</h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#6b7280" }}>
              Install Lattice SDK via your preferred package manager. The SDK requires Node.js 18 or later and supports both ESM and CommonJS module formats.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 font-mono text-sm" style={{ color: "#374151" }}>
              <p>$ npm install @lattice/sdk</p>
            </div>
            <p className="leading-relaxed" style={{ color: "#6b7280" }}>
              After installation, initialize your Lattice client by providing your schema definition and connection parameters. The client auto-discovers your data sources and builds an optimized query planner at startup.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4 font-mono text-sm" style={{ color: "#374151" }}>
              <p style={{ color: "#9ca3af" }}>{"// Initialize the client"}</p>
              <p>{"import { LatticeClient } from '@lattice/sdk';"}</p>
              <p className="mt-2">{"const client = new LatticeClient({"}</p>
              <p className="pl-4">{"schema: './schema.lattice',"}</p>
              <p className="pl-4">{"endpoint: 'https://api.example.com',"}</p>
              <p>{"});"}</p>
            </div>
          </section>

          {/* API Reference Cards */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#374151" }}>API Reference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold mb-2" style={{ color: "#374151" }}>client.query()</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  Execute a read operation against your data layer. Supports filtering, pagination, field selection, and nested relation loading with automatic batching.
                </p>
                <span className="text-xs mt-3 inline-block px-2 py-0.5 rounded bg-gray-100" style={{ color: "#6b7280" }}>Returns: Promise&lt;QueryResult&gt;</span>
              </div>
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold mb-2" style={{ color: "#374151" }}>client.mutate()</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  Perform create, update, or delete operations with built-in optimistic locking. Mutations are validated against your schema before execution.
                </p>
                <span className="text-xs mt-3 inline-block px-2 py-0.5 rounded bg-gray-100" style={{ color: "#6b7280" }}>Returns: Promise&lt;MutationResult&gt;</span>
              </div>
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold mb-2" style={{ color: "#374151" }}>client.subscribe()</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  Open a real-time subscription to data changes. Uses WebSocket transport with automatic reconnection and message ordering guarantees.
                </p>
                <span className="text-xs mt-3 inline-block px-2 py-0.5 rounded bg-gray-100" style={{ color: "#6b7280" }}>Returns: Subscription</span>
              </div>
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold mb-2" style={{ color: "#374151" }}>client.batch()</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  Group multiple operations into an atomic batch. All operations succeed or fail together, with automatic rollback on partial failure.
                </p>
                <span className="text-xs mt-3 inline-block px-2 py-0.5 rounded bg-gray-100" style={{ color: "#6b7280" }}>Returns: Promise&lt;BatchResult&gt;</span>
              </div>
            </div>
          </section>

          {/* Code Examples */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#374151" }}>Code Examples</h2>
            <p className="mb-4 leading-relaxed" style={{ color: "#6b7280" }}>
              Fetch a paginated list of users with their associated organizations, applying a filter on account status.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm" style={{ color: "#374151" }}>
              <p>{"const users = await client.query('User', {"}</p>
              <p className="pl-4">{"filter: { status: 'active' },"}</p>
              <p className="pl-4">{"include: ['organization'],"}</p>
              <p className="pl-4">{"pagination: { page: 1, perPage: 25 },"}</p>
              <p className="pl-4">{"orderBy: { createdAt: 'desc' },"}</p>
              <p>{"});"}</p>
              <p className="mt-3" style={{ color: "#9ca3af" }}>{"// Result: { data: User[], meta: { total: 142, page: 1 } }"}</p>
            </div>
          </section>

          {/* Changelog */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#374151" }}>Changelog</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-gray-300 pl-4">
                <p className="font-bold text-sm" style={{ color: "#374151" }}>v3.2.1 — February 2026</p>
                <p className="text-sm" style={{ color: "#6b7280" }}>Fixed edge case in batch rollback when using nested transactions. Improved WebSocket reconnection stability.</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-4">
                <p className="font-bold text-sm" style={{ color: "#374151" }}>v3.2.0 — January 2026</p>
                <p className="text-sm" style={{ color: "#6b7280" }}>Added support for computed fields in schema definitions. New caching middleware with TTL-based invalidation.</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-4">
                <p className="font-bold text-sm" style={{ color: "#374151" }}>v3.1.0 — December 2025</p>
                <p className="text-sm" style={{ color: "#6b7280" }}>Introduced plugin system for extending client behavior. Added official Auth, Logger, and Metrics plugins.</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-4 flex items-center justify-between text-xs" style={{ color: "#9ca3af" }}>
        <span>Lattice SDK Documentation v3.2.1</span>
        <span>Last updated February 2026</span>
      </footer>
    </div>
  );
}
