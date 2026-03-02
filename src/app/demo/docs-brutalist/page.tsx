export default function DocsBrutalistDemo() {
  const sidebarSections = [
    {
      title: "// INIT",
      items: [
        { label: "> introduction", active: true },
        { label: "  installation", active: false },
        { label: "  quick-start", active: false },
        { label: "  project-setup", active: false },
      ],
    },
    {
      title: "// CORE",
      items: [
        { label: "  auth", active: false },
        { label: "  routing", active: false },
        { label: "  middleware", active: false },
        { label: "  database", active: false },
      ],
    },
    {
      title: "// API",
      items: [
        { label: "  endpoints", active: false },
        { label: "  websockets", active: false },
        { label: "  streaming", active: false },
        { label: "  webhooks", active: false },
      ],
    },
    {
      title: "// DEPLOY",
      items: [
        { label: "  docker", active: false },
        { label: "  kubernetes", active: false },
        { label: "  monitoring", active: false },
        { label: "  debugging", active: false },
      ],
    },
  ];

  const tocItems = ["OVERVIEW", "SYSTEM REQUIREMENTS", "INSTALLATION", "CONFIGURATION", "FIRST REQUEST", "ERROR HANDLING"];

  const envVars = [
    { key: "NEXUS_API_KEY", type: "string", desc: "Your secret API key for authentication" },
    { key: "NEXUS_REGION", type: "string", desc: "Deployment region (us-east, eu-west, ap-south)" },
    { key: "NEXUS_PORT", type: "number", desc: "Server port (default: 3000)" },
    { key: "NEXUS_LOG_LEVEL", type: "string", desc: "Logging verbosity (debug, info, warn, error)" },
    { key: "NEXUS_DB_URL", type: "string", desc: "Database connection string" },
  ];

  const statusCodes = [
    { code: "200", status: "OK", desc: "Request successful" },
    { code: "201", status: "CREATED", desc: "Resource created" },
    { code: "401", status: "UNAUTHORIZED", desc: "Invalid credentials" },
    { code: "403", status: "FORBIDDEN", desc: "Insufficient permissions" },
    { code: "500", status: "INTERNAL_ERR", desc: "Server error - retry" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#b0b0b0]" style={{ fontFamily: "Space Mono, monospace" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>

      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#222]">
        <div className="max-w-[90rem] mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-sm font-bold text-[#00ff00] tracking-widest">NEXUS_DOCS</span>
            <div className="hidden md:flex items-center gap-6">
              {["[docs]", "[api]", "[examples]", "[changelog]"].map((item, i) => (
                <span key={item} className={`text-xs cursor-pointer ${i === 0 ? "text-[#00ff00]" : "text-[#555] hover:text-[#00ff00]"} transition-colors`}>{item}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center h-7 w-60 border border-[#333] bg-[#111] px-3 gap-2">
              <span className="text-xs text-[#333]">$</span>
              <span className="text-xs text-[#333]">search...</span>
              <span className="ml-auto text-[10px] text-[#333] border border-[#333] px-1">ctrl+k</span>
            </div>
            <span className="text-xs text-[#555] hover:text-[#00ff00] cursor-pointer">github</span>
          </div>
        </div>
      </nav>

      <div className="max-w-[90rem] mx-auto flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-56 flex-shrink-0 border-r border-[#222] sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto py-6 px-4">
          {sidebarSections.map((section) => (
            <div key={section.title} className="mb-6">
              <h4 className="text-[10px] text-[#00ff00] tracking-widest mb-2">{section.title}</h4>
              <div className="space-y-0">
                {section.items.map((item) => (
                  <div key={item.label} className={`py-1 text-xs cursor-pointer transition-colors ${item.active ? "text-[#00ff00] font-bold" : "text-[#444] hover:text-[#888]"}`}>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="border-t border-[#222] pt-4 mt-4">
            <p className="text-[10px] text-[#333]">v3.2.1 | MIT License</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-8 lg:px-14 py-10">
          <p className="text-[10px] text-[#333] tracking-widest mb-8">HOME / INIT / INTRODUCTION</p>

          <h1 className="text-2xl font-bold text-[#00ff00] tracking-tight mb-2"># INTRODUCTION</h1>
          <div className="w-full h-px bg-[#222] mb-6" />
          <p className="text-sm text-[#777] leading-relaxed mb-8 max-w-2xl">
            Nexus is a high-performance server framework for building real-time APIs. Zero dependencies. Sub-millisecond routing. Built for systems that cannot afford downtime.
          </p>

          {/* Warning callout */}
          <div className="border border-[#ff0] bg-[#ff0]/5 p-4 mb-10 max-w-2xl">
            <p className="text-xs text-[#ff0] font-bold mb-1">! WARNING</p>
            <p className="text-xs text-[#888]">
              Nexus v3 introduces breaking changes. If upgrading from v2, read the migration guide before proceeding.
            </p>
          </div>

          <h2 className="text-lg font-bold text-[#ccc] mb-3 mt-10">## SYSTEM REQUIREMENTS</h2>
          <div className="w-16 h-px bg-[#333] mb-4" />
          <div className="space-y-1 mb-8 max-w-2xl">
            {["Node.js >= 20.0.0", "npm >= 10 or pnpm >= 8", "Linux / macOS / WSL2", "Min 512MB RAM"].map((req) => (
              <p key={req} className="text-xs text-[#666]">
                <span className="text-[#00ff00] mr-2">[+]</span>{req}
              </p>
            ))}
          </div>

          <h2 className="text-lg font-bold text-[#ccc] mb-3 mt-10">## INSTALLATION</h2>
          <div className="w-16 h-px bg-[#333] mb-4" />
          <p className="text-xs text-[#666] mb-4 max-w-2xl">Run the following in your terminal:</p>
          <div className="bg-[#111] border border-[#222] mb-6 max-w-2xl">
            <div className="flex items-center justify-between px-4 py-1.5 border-b border-[#222]">
              <span className="text-[10px] text-[#444]">terminal</span>
              <span className="text-[10px] text-[#333] cursor-pointer hover:text-[#666]">[copy]</span>
            </div>
            <pre className="p-4 text-xs leading-relaxed overflow-x-auto">
<span className="text-[#555]">$</span> <span className="text-[#00ff00]">npm install nexus-framework</span>{"\n"}<span className="text-[#555]">$</span> <span className="text-[#00ff00]">npx nexus init my-project</span>{"\n"}<span className="text-[#555]">$</span> <span className="text-[#888]">cd my-project && npm run dev</span>
            </pre>
          </div>

          <p className="text-xs text-[#666] mb-4 max-w-2xl">Initialize the server in your entry file:</p>
          <div className="bg-[#111] border border-[#222] mb-10 max-w-2xl">
            <div className="flex items-center justify-between px-4 py-1.5 border-b border-[#222]">
              <span className="text-[10px] text-[#444]">server.ts</span>
              <span className="text-[10px] text-[#333] cursor-pointer hover:text-[#666]">[copy]</span>
            </div>
            <pre className="p-4 text-xs leading-relaxed overflow-x-auto">
<span className="text-[#ff6b6b]">import</span> <span className="text-[#ccc]">{"{ Nexus }"}</span> <span className="text-[#ff6b6b]">from</span> <span className="text-[#00ff00]">&apos;nexus-framework&apos;</span>{"\n"}{"\n"}<span className="text-[#ff6b6b]">const</span> <span className="text-[#ccc]">app</span> = <span className="text-[#ff6b6b]">new</span> <span className="text-[#ccc]">Nexus</span>({"{"}){"\n"}{"  "}<span className="text-[#888]">port:</span> <span className="text-[#ff6b6b]">3000</span>,{"\n"}{"  "}<span className="text-[#888]">logLevel:</span> <span className="text-[#00ff00]">&apos;info&apos;</span>,{"\n"}{"}"}){"\n"}{"\n"}app.<span className="text-[#ccc]">get</span>(<span className="text-[#00ff00]">&apos;/health&apos;</span>, () =&gt; {"{"}){"\n"}{"  "}<span className="text-[#ff6b6b]">return</span> {"{"} <span className="text-[#888]">status:</span> <span className="text-[#00ff00]">&apos;ok&apos;</span>, <span className="text-[#888]">uptime:</span> process.uptime() {"}"}{"\n"}{"}"}){"\n"}{"\n"}app.<span className="text-[#ccc]">listen</span>()
            </pre>
          </div>

          <h2 className="text-lg font-bold text-[#ccc] mb-3 mt-10">## CONFIGURATION</h2>
          <div className="w-16 h-px bg-[#333] mb-4" />
          <p className="text-xs text-[#666] mb-4 max-w-2xl">Set environment variables in your .env file:</p>
          <div className="border border-[#222] mb-10 max-w-2xl">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#222]">
                  {["VARIABLE", "TYPE", "DESCRIPTION"].map((h) => (
                    <th key={h} className="text-[10px] text-[#555] tracking-widest px-4 py-2">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {envVars.map((v) => (
                  <tr key={v.key} className="border-b border-[#181818] last:border-0">
                    <td className="px-4 py-2 text-xs text-[#00ff00]">{v.key}</td>
                    <td className="px-4 py-2 text-xs text-[#555]">{v.type}</td>
                    <td className="px-4 py-2 text-xs text-[#666]">{v.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-bold text-[#ccc] mb-3 mt-10">## ERROR HANDLING</h2>
          <div className="w-16 h-px bg-[#333] mb-4" />
          {/* Error callout */}
          <div className="border border-[#ff0000]/30 bg-[#ff0000]/5 p-4 mb-6 max-w-2xl">
            <p className="text-xs text-[#ff4444] font-bold mb-1">! CRITICAL</p>
            <p className="text-xs text-[#888]">
              Never expose stack traces in production. Set NEXUS_LOG_LEVEL=error and implement custom error handlers.
            </p>
          </div>
          <div className="space-y-0 mb-10 max-w-2xl">
            {statusCodes.map((s) => (
              <div key={s.code} className="flex items-center border-b border-[#181818] last:border-0 py-2">
                <span className="text-xs text-[#00ff00] w-12 flex-shrink-0">{s.code}</span>
                <span className="text-xs text-[#888] w-32 flex-shrink-0">{s.status}</span>
                <span className="text-xs text-[#555]">{s.desc}</span>
              </div>
            ))}
          </div>

          {/* Next links */}
          <div className="border-t border-[#222] pt-6 flex justify-between max-w-2xl">
            <div />
            <div className="text-right">
              <p className="text-[10px] text-[#333] mb-1">NEXT</p>
              <span className="text-xs text-[#00ff00] cursor-pointer hover:underline">installation --&gt;</span>
            </div>
          </div>
        </main>

        {/* Right TOC */}
        <aside className="hidden xl:block w-48 flex-shrink-0 border-l border-[#222] sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto py-10 px-5">
          <h4 className="text-[10px] text-[#555] tracking-widest mb-4">// ON_THIS_PAGE</h4>
          <div className="space-y-2">
            {tocItems.map((item, i) => (
              <div key={item} className={`text-[10px] tracking-wider cursor-pointer ${i === 0 ? "text-[#00ff00]" : "text-[#333] hover:text-[#666]"} transition-colors`}>
                {item}
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#222] mt-16">
        <div className="max-w-[90rem] mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { heading: "// PRODUCT", links: ["features", "pricing", "changelog", "status"] },
              { heading: "// RESOURCES", links: ["docs", "api-ref", "examples", "community"] },
              { heading: "// COMPANY", links: ["about", "blog", "careers", "contact"] },
              { heading: "// LEGAL", links: ["privacy", "terms", "security", "license"] },
            ].map((col) => (
              <div key={col.heading}>
                <h4 className="text-[10px] text-[#00ff00] tracking-widest mb-3">{col.heading}</h4>
                <div className="space-y-1.5">
                  {col.links.map((link) => (
                    <p key={link} className="text-xs text-[#333] hover:text-[#666] cursor-pointer transition-colors">{link}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-[#181818] pt-4 flex items-center justify-between">
            <span className="text-[10px] text-[#333]">&copy; 2024 NEXUS SYSTEMS // ALL RIGHTS RESERVED</span>
            <div className="flex gap-4">
              {["github", "twitter", "discord"].map((s) => (
                <span key={s} className="text-[10px] text-[#333] hover:text-[#00ff00] cursor-pointer transition-colors">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
