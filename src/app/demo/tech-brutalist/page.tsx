export default function TechBrutalistDemo() {
  const commands = [
    { cmd: "nexus gateway --init", desc: "Initialize API gateway with automatic service discovery and health checks across your cluster." },
    { cmd: "nexus sync --mode=realtime", desc: "Enable bi-directional real-time synchronization with conflict-free replicated data types." },
    { cmd: "nexus edge deploy --global", desc: "Push functions to 200+ edge nodes. Automatic failover and geographic routing included." },
    { cmd: "nexus scale --auto --min=0", desc: "Scale from zero to infinity. Pay nothing when idle. Burst to handle any traffic spike." },
  ]
  const benchmarks = [
    { metric: "Cold start", value: "4.2ms", baseline: "238ms", improvement: "98.2%" },
    { metric: "P99 latency", value: "12ms", baseline: "145ms", improvement: "91.7%" },
    { metric: "Throughput", value: "847K rps", baseline: "52K rps", improvement: "16.3x" },
    { metric: "Memory", value: "18MB", baseline: "256MB", improvement: "92.9%" },
    { metric: "Deploy time", value: "1.8s", baseline: "42s", improvement: "95.7%" },
  ]
  const changelog = [
    { version: "v3.2.0", date: "2026-02-28", changes: "Added WebSocket multiplexing, gRPC reflection support, improved ARM64 builds." },
    { version: "v3.1.4", date: "2026-02-15", changes: "Fixed memory leak in connection pooler. Upgraded TLS to 1.3 default." },
    { version: "v3.1.0", date: "2026-01-30", changes: "New distributed tracing backend, OpenTelemetry native integration, custom span processors." },
    { version: "v3.0.0", date: "2026-01-10", changes: "Major release: Rust runtime, WASM edge functions, zero-copy serialization, breaking API changes." },
  ]
  return (
    <div className="min-h-screen bg-slate-950" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <head><link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" /></head>
      <nav className="border-b border-green-900/50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="text-green-500 font-bold text-sm">NEXUS_CLI v3.2.0</span>
          <div className="hidden md:flex space-x-6">
            {["docs", "source", "changelog", "status"].map((l) => (
              <span key={l} className="text-xs text-green-700 hover:text-green-400 cursor-pointer transition-colors">/{l}</span>
            ))}
          </div>
          <span className="text-xs text-green-700">pid:8421 | uptime:99.997%</span>
        </div>
      </nav>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="mb-2 text-xs text-green-700">user@nexus:~$</div>
        <h1 className="text-3xl md:text-5xl font-bold text-green-500 mb-2 leading-tight">$ deploy --production</h1>
        <div className="text-green-700 text-sm mb-8 space-y-1">
          <p>[info] Compiling 847 modules...</p>
          <p>[info] Optimizing bundle... done (0.4s)</p>
          <p>[info] Deploying to 214 edge regions...</p>
          <p className="text-green-400">[done] Live at nexus.dev in 1.8s</p>
        </div>
        <div className="flex space-x-3">
          <button className="h-10 px-6 text-xs font-bold text-slate-950 bg-green-500 hover:bg-green-400 transition-colors">INSTALL</button>
          <button className="h-10 px-6 text-xs font-bold text-green-500 border border-green-500 hover:bg-green-500/10 transition-colors">READ DOCS</button>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-xs text-green-700 mb-6">## COMMANDS</div>
        <div className="space-y-4">
          {commands.map((c) => (
            <div key={c.cmd} className="border border-green-900/50 p-4 hover:border-green-500/50 transition-colors">
              <div className="text-green-400 text-sm font-bold mb-2">$ {c.cmd}</div>
              <div className="text-green-700 text-xs leading-relaxed">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-xs text-green-700 mb-6">## ARCHITECTURE</div>
        <div className="border border-green-900/50 p-6 overflow-x-auto">
          <pre className="text-green-500 text-xs leading-relaxed">{`
  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
  │   CLIENT    │────▶│  EDGE NODE  │────▶│   GATEWAY   │
  │  (browser)  │     │  (214 PoPs) │     │  (routing)  │
  └─────────────┘     └──────┬──────┘     └──────┬──────┘
                             │                    │
                      ┌──────▼──────┐      ┌─────▼──────┐
                      │    CACHE    │      │  SERVICES  │
                      │  (redis)    │      │  (k8s)     │
                      └──────┬──────┘      └─────┬──────┘
                             │                    │
                      ┌──────▼────────────────────▼──────┐
                      │         DATA LAYER               │
                      │   postgres | clickhouse | s3     │
                      └──────────────────────────────────┘`}</pre>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-xs text-green-700 mb-6">## BENCHMARKS (vs industry avg)</div>
        <div className="border border-green-900/50 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-green-900/50">
                <th className="text-left text-green-700 p-3 font-medium">METRIC</th>
                <th className="text-left text-green-700 p-3 font-medium">NEXUS</th>
                <th className="text-left text-green-700 p-3 font-medium">BASELINE</th>
                <th className="text-left text-green-700 p-3 font-medium">DELTA</th>
              </tr>
            </thead>
            <tbody>
              {benchmarks.map((b) => (
                <tr key={b.metric} className="border-b border-green-900/30 hover:bg-green-500/5">
                  <td className="p-3 text-green-500">{b.metric}</td>
                  <td className="p-3 text-green-400 font-bold">{b.value}</td>
                  <td className="p-3 text-green-800">{b.baseline}</td>
                  <td className="p-3 text-green-400">+{b.improvement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-xs text-green-700 mb-6">## CHANGELOG</div>
        <div className="space-y-3">
          {changelog.map((entry) => (
            <div key={entry.version} className="border-l-2 border-green-900 pl-4 hover:border-green-500 transition-colors">
              <div className="flex items-center space-x-3 mb-1">
                <span className="text-green-400 text-xs font-bold">{entry.version}</span>
                <span className="text-green-800 text-xs">{entry.date}</span>
              </div>
              <p className="text-green-700 text-xs">{entry.changes}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-xs text-green-700 mb-6">## INSTALL</div>
        <div className="border border-green-900/50 p-6">
          <pre className="text-green-500 text-xs leading-loose">{`# Install via npm
$ npm install -g @nexus/cli

# Or via curl
$ curl -fsSL https://get.nexus.dev | sh

# Verify installation
$ nexus --version
nexus-cli/3.2.0 linux-x64 node-v22.0.0

# Initialize a new project
$ nexus init my-app --template=typescript
$ cd my-app && nexus dev

# Deploy to production
$ nexus deploy --production --region=auto`}</pre>
        </div>
      </section>
      <footer className="border-t border-green-900/50 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <span className="text-xs text-green-800">&copy; 2026 nexus.dev -- all rights reserved</span>
          <div className="flex space-x-6 text-xs text-green-800">
            {["github", "discord", "twitter", "status"].map((l) => (
              <span key={l} className="hover:text-green-400 cursor-pointer transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
