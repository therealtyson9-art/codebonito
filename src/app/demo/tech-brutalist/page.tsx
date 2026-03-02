export const dynamic = "force-dynamic";
export default function TechBrutalistDemo() {
  const navLinks = ['products', 'specs', 'team', 'changelog', 'docs']
  const products = [
    { name: 'VOIDCTL', version: 'v3.2.1', desc: 'Infrastructure orchestration engine. Manages containers, VMs, and serverless functions from a single CLI.', license: 'MIT' },
    { name: 'LATTICE', version: 'v1.8.0', desc: 'Distributed key-value store with sub-millisecond reads. Built for edge computing at global scale.', license: 'Apache 2.0' },
    { name: 'SIGNAL', version: 'v2.0.4', desc: 'Real-time event streaming pipeline. Process millions of events per second with exactly-once delivery.', license: 'MIT' },
  ]
  const specs = [
    ['Language', 'Rust + Go'],
    ['Throughput', '2.4M req/sec'],
    ['Latency (p99)', '< 3ms'],
    ['Storage Engine', 'LSM-tree (custom)'],
    ['Replication', 'Raft consensus'],
    ['Compression', 'LZ4 + ZSTD'],
  ]
  const team = [
    { handle: 'ghost', name: 'Kai Nakamura', role: 'Founder / Lead Engineer', loc: 'Tokyo, JP' },
    { handle: 'syntax', name: 'Ada Sterling', role: 'Runtime Engineer', loc: 'Berlin, DE' },
    { handle: 'null', name: 'Marcus Webb', role: 'Distributed Systems', loc: 'Portland, US' },
    { handle: 'byte', name: 'Priya Sharma', role: 'Storage Engine Lead', loc: 'Bangalore, IN' },
  ]
  const changelog = [
    { version: 'v3.2.1', date: '2025-01-28', msg: 'fix: resolve memory leak in connection pool recycling' },
    { version: 'v3.2.0', date: '2025-01-15', msg: 'feat: add WASM runtime support for edge functions' },
    { version: 'v3.1.4', date: '2024-12-30', msg: 'perf: reduce p99 latency by 40% with batch commit optimization' },
    { version: 'v3.1.3', date: '2024-12-18', msg: 'fix: correct shard rebalancing during rolling upgrades' },
    { version: 'v3.1.2', date: '2024-12-02', msg: 'docs: update migration guide for v3.x breaking changes' },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#18181b', fontFamily: "'JetBrains Mono', monospace", color: '#e4e4e7' }}>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

      {/* Nav — terminal style */}
      <nav className="border-b" style={{ borderColor: '#333' }}>
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center gap-8 overflow-x-auto">
          <span className="text-sm font-bold" style={{ color: '#a3e635' }}>void.systems</span>
          {navLinks.map(link => (
            <a key={link} href="#" className="text-xs hover:underline underline-offset-4 whitespace-nowrap" style={{ color: '#71717a' }}>
              {'> '}{link}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero — ASCII / command-line */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <pre className="text-xs mb-8 leading-relaxed hidden md:block" style={{ color: '#a3e635' }}>
{`██╗   ██╗ ██████╗ ██╗██████╗
██║   ██║██╔═══██╗██║██╔══██╗
██║   ██║██║   ██║██║██║  ██║
╚██╗ ██╔╝██║   ██║██║██║  ██║
 ╚████╔╝ ╚██████╔╝██║██████╔╝
  ╚═══╝   ╚═════╝ ╚═╝╚═════╝`}
        </pre>
        <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#a3e635' }}>
          infrastructure<span className="animate-pulse">_</span>
        </h1>
        <p className="text-sm max-w-xl leading-relaxed mb-8" style={{ color: '#71717a' }}>
          Open-source tools for engineers who ship. No dashboards, no drag-and-drop, no abstraction tax. Just fast, reliable infrastructure primitives.
        </p>
        <div className="flex gap-4">
          <button className="px-5 py-2 text-xs font-bold border" style={{ borderColor: '#a3e635', color: '#a3e635' }}>
            $ curl install.void.systems | sh
          </button>
        </div>
      </section>

      {/* Products — code-block style */}
      <section className="border-t" style={{ borderColor: '#333' }}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-xs font-bold mb-10" style={{ color: '#a3e635' }}>{'// PRODUCTS'}</h2>
          <div className="space-y-6">
            {products.map(p => (
              <div key={p.name} className="p-6" style={{ border: '1px dotted #444', backgroundColor: '#1f1f23' }}>
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <h3 className="text-sm font-bold" style={{ color: '#a3e635' }}>{p.name}</h3>
                  <div className="flex gap-3 text-xs" style={{ color: '#71717a' }}>
                    <span>{p.version}</span>
                    <span>{p.license}</span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: '#a1a1aa' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech specs — table */}
      <section className="border-t" style={{ borderColor: '#333' }}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-xs font-bold mb-10" style={{ color: '#a3e635' }}>{'// SPECS'}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <tbody>
                {specs.map(([key, val]) => (
                  <tr key={key} className="border-b" style={{ borderColor: '#333' }}>
                    <td className="py-3 pr-8 font-bold" style={{ color: '#71717a' }}>{key}</td>
                    <td className="py-3" style={{ color: '#e4e4e7' }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Team — terminal user profiles */}
      <section className="border-t" style={{ borderColor: '#333' }}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-xs font-bold mb-10" style={{ color: '#a3e635' }}>{'// TEAM'}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {team.map(t => (
              <div key={t.handle} className="p-4" style={{ border: '1px dotted #444' }}>
                <p className="text-xs mb-1"><span style={{ color: '#a3e635' }}>@{t.handle}</span> <span style={{ color: '#71717a' }}>({t.loc})</span></p>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs" style={{ color: '#71717a' }}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog — git log style */}
      <section className="border-t" style={{ borderColor: '#333' }}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-xs font-bold mb-10" style={{ color: '#a3e635' }}>{'// CHANGELOG'}</h2>
          <div className="space-y-0">
            {changelog.map(c => (
              <div key={c.version + c.date} className="py-3 border-b text-xs flex gap-4" style={{ borderColor: '#333' }}>
                <span className="font-bold flex-shrink-0" style={{ color: '#a3e635' }}>{c.version}</span>
                <span className="flex-shrink-0" style={{ color: '#71717a' }}>{c.date}</span>
                <span style={{ color: '#a1a1aa' }}>{c.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API docs preview */}
      <section className="border-t" style={{ borderColor: '#333' }}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-xs font-bold mb-10" style={{ color: '#a3e635' }}>{'// API'}</h2>
          <div className="p-6 text-xs leading-relaxed" style={{ backgroundColor: '#1f1f23', border: '1px dotted #444' }}>
            <p style={{ color: '#71717a' }}>{'// Initialize client'}</p>
            <p><span style={{ color: '#a3e635' }}>const</span> client = <span style={{ color: '#a3e635' }}>new</span> VoidClient({'{'}</p>
            <p className="pl-4">endpoint: <span style={{ color: '#fbbf24' }}>&quot;https://api.void.systems&quot;</span>,</p>
            <p className="pl-4">token: process.env.VOID_TOKEN,</p>
            <p>{'}'})</p>
            <p className="mt-4" style={{ color: '#71717a' }}>{'// Deploy a function'}</p>
            <p><span style={{ color: '#a3e635' }}>await</span> client.deploy(<span style={{ color: '#fbbf24' }}>&quot;my-function&quot;</span>, {'{'}</p>
            <p className="pl-4">runtime: <span style={{ color: '#fbbf24' }}>&quot;wasm&quot;</span>,</p>
            <p className="pl-4">regions: [<span style={{ color: '#fbbf24' }}>&quot;us-east&quot;</span>, <span style={{ color: '#fbbf24' }}>&quot;eu-west&quot;</span>, <span style={{ color: '#fbbf24' }}>&quot;ap-south&quot;</span>],</p>
            <p>{'}'})</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t" style={{ borderColor: '#333' }}>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-xs font-bold mb-4" style={{ color: '#a3e635' }}>{'// SUBSCRIBE'}</h2>
          <div className="flex gap-3 max-w-md">
            <input type="email" placeholder="email@domain.com" className="flex-1 px-4 py-2 text-xs outline-none" style={{ backgroundColor: '#1f1f23', border: '1px solid #333', color: '#e4e4e7' }} />
            <button className="px-5 py-2 text-xs font-bold border" style={{ borderColor: '#a3e635', color: '#a3e635' }}>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6" style={{ borderColor: '#333' }}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs" style={{ color: '#52525b' }}>void.systems — open source infrastructure tools</p>
        </div>
      </footer>
    </div>
  )
}
