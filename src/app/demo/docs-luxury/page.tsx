export default function DocsLuxuryDemo() {
  const sidebarSections = [
    {
      title: "Foundations",
      items: [
        { label: "Introduction", active: true },
        { label: "Installation", active: false },
        { label: "Architecture", active: false },
        { label: "Configuration", active: false },
      ],
    },
    {
      title: "Essentials",
      items: [
        { label: "Authentication", active: false },
        { label: "Data Models", active: false },
        { label: "Queries", active: false },
        { label: "Mutations", active: false },
      ],
    },
    {
      title: "Advanced",
      items: [
        { label: "Subscriptions", active: false },
        { label: "Middleware", active: false },
        { label: "Caching", active: false },
        { label: "Federation", active: false },
      ],
    },
    {
      title: "Operations",
      items: [
        { label: "Deployment", active: false },
        { label: "Monitoring", active: false },
        { label: "Security", active: false },
        { label: "Scaling", active: false },
      ],
    },
  ];

  const tocItems = ["Introduction", "Philosophy", "Getting Started", "Schema Definition", "Resolvers", "Configuration Reference"];

  const configOptions = [
    { param: "schema", type: "string", default: "'./schema.graphql'", desc: "Path to your schema definition file" },
    { param: "port", type: "number", default: "4000", desc: "Server port for the GraphQL endpoint" },
    { param: "cors", type: "boolean", default: "true", desc: "Enable cross-origin resource sharing" },
    { param: "introspection", type: "boolean", default: "false", desc: "Allow schema introspection in production" },
    { param: "depth_limit", type: "number", default: "10", desc: "Maximum query nesting depth" },
  ];

  const principles = [
    { title: "Type Safety", desc: "Every query is validated against your schema at compile time, eliminating runtime errors before they reach production." },
    { title: "Performance", desc: "Intelligent query planning and automatic batching ensure optimal database access patterns out of the box." },
    { title: "Developer Experience", desc: "Thoughtful defaults, comprehensive error messages, and first-class IDE support for a seamless workflow." },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#a8a8a8]" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>

      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#1a1a1a]">
        <div className="max-w-[88rem] mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#d4af37] flex items-center justify-center">
                <span className="text-[#d4af37] text-sm font-semibold" style={{ fontFamily: "Playfair Display, serif" }}>A</span>
              </div>
              <span className="text-sm font-medium text-[#e0e0e0] tracking-wide">Aurelius</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {["Documentation", "API", "Guides", "Community"].map((item, i) => (
                <span key={item} className={`text-[13px] cursor-pointer transition-colors ${i === 0 ? "text-[#d4af37]" : "text-[#555] hover:text-[#999]"}`}>{item}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center h-9 w-60 border border-[#1a1a1a] bg-[#111] rounded-sm px-4 gap-2">
              <svg className="w-3.5 h-3.5 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span className="text-[13px] text-[#333]">Search...</span>
              <span className="ml-auto text-[10px] text-[#333] border border-[#222] px-1.5 py-0.5" style={{ fontFamily: "JetBrains Mono, monospace" }}>/</span>
            </div>
            <span className="text-[13px] text-[#444] hover:text-[#d4af37] cursor-pointer transition-colors">GitHub</span>
          </div>
        </div>
      </nav>

      <div className="max-w-[88rem] mx-auto flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-60 flex-shrink-0 border-r border-[#1a1a1a] sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-8 px-6">
          {sidebarSections.map((section) => (
            <div key={section.title} className="mb-8">
              <h4 className="text-[11px] font-medium text-[#555] uppercase tracking-[0.15em] mb-3" style={{ fontFamily: "Inter, sans-serif" }}>{section.title}</h4>
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <div key={item.label} className={`py-2 px-3 text-[13px] cursor-pointer transition-all ${item.active ? "text-[#d4af37] border-l-2 border-[#d4af37] -ml-px font-medium" : "text-[#444] hover:text-[#888] border-l border-transparent"}`}>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-10 lg:px-20 py-14 max-w-3xl">
          <div className="flex items-center gap-2 text-[13px] text-[#333] mb-10">
            {["Docs", "Foundations", "Introduction"].map((crumb, i, arr) => (
              <span key={crumb} className="flex items-center gap-2">
                <span className={i === arr.length - 1 ? "text-[#888]" : "hover:text-[#d4af37] cursor-pointer transition-colors"}>{crumb}</span>
                {i < arr.length - 1 && <span className="text-[#222]">/</span>}
              </span>
            ))}
          </div>

          <h1 className="text-[32px] font-semibold text-[#f0f0f0] mb-4 tracking-tight" style={{ fontFamily: "Playfair Display, serif" }}>Introduction</h1>
          <div className="w-12 h-px bg-[#d4af37] mb-6" />
          <p className="text-[15px] text-[#777] leading-[1.8] mb-10">
            Aurelius is a GraphQL server framework crafted for developers who value precision, performance, and elegance. Build APIs that are as refined as the experiences they power.
          </p>

          {/* Callout */}
          <div className="border border-[#1a1a1a] bg-[#111] p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-1 h-full min-h-[2rem] bg-[#d4af37] flex-shrink-0 self-stretch" />
              <div>
                <p className="text-[13px] text-[#888] leading-[1.8]">
                  This documentation covers Aurelius v5. For previous versions, consult the <span className="text-[#d4af37] cursor-pointer">version archive</span>.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#e0e0e0] mb-4 mt-14" style={{ fontFamily: "Playfair Display, serif" }}>Philosophy</h2>
          <div className="w-8 h-px bg-[#222] mb-6" />
          <p className="text-[13px] text-[#666] leading-[1.8] mb-8">
            Every design decision in Aurelius is guided by three principles:
          </p>
          <div className="space-y-4 mb-12">
            {principles.map((p, i) => (
              <div key={p.title} className="border border-[#1a1a1a] p-5 hover:border-[#d4af37]/20 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="text-[#d4af37] text-sm font-medium mt-0.5" style={{ fontFamily: "Playfair Display, serif" }}>0{i + 1}</span>
                  <div>
                    <h3 className="text-[14px] font-medium text-[#ccc] mb-1">{p.title}</h3>
                    <p className="text-[13px] text-[#555] leading-[1.7]">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-[#e0e0e0] mb-4 mt-14" style={{ fontFamily: "Playfair Display, serif" }}>Getting Started</h2>
          <div className="w-8 h-px bg-[#222] mb-6" />
          <p className="text-[13px] text-[#666] leading-[1.8] mb-5">
            Install Aurelius and create your first schema in minutes.
          </p>
          <div className="bg-[#111] border border-[#1a1a1a] overflow-hidden mb-8">
            <div className="flex items-center justify-between px-5 py-2.5 border-b border-[#1a1a1a]">
              <span className="text-[11px] text-[#444]" style={{ fontFamily: "JetBrains Mono, monospace" }}>Terminal</span>
              <span className="text-[11px] text-[#333] cursor-pointer hover:text-[#666] transition-colors">Copy</span>
            </div>
            <pre className="p-5 text-[13px] leading-[1.8] overflow-x-auto" style={{ fontFamily: "JetBrains Mono, monospace" }}>
<span className="text-[#555]">$</span> <span className="text-[#d4af37]">npm install aurelius</span>{"\n"}<span className="text-[#555]">$</span> <span className="text-[#888]">npx aurelius init</span>
            </pre>
          </div>

          <h2 className="text-xl font-semibold text-[#e0e0e0] mb-4 mt-14" style={{ fontFamily: "Playfair Display, serif" }}>Schema Definition</h2>
          <div className="w-8 h-px bg-[#222] mb-6" />
          <p className="text-[13px] text-[#666] leading-[1.8] mb-5">
            Define your data model with an expressive, type-safe schema language.
          </p>
          <div className="bg-[#111] border border-[#1a1a1a] overflow-hidden mb-8">
            <div className="flex items-center justify-between px-5 py-2.5 border-b border-[#1a1a1a]">
              <span className="text-[11px] text-[#444]" style={{ fontFamily: "JetBrains Mono, monospace" }}>schema.graphql</span>
              <span className="text-[11px] text-[#333] cursor-pointer hover:text-[#666] transition-colors">Copy</span>
            </div>
            <pre className="p-5 text-[13px] leading-[1.8] overflow-x-auto" style={{ fontFamily: "JetBrains Mono, monospace" }}>
<span className="text-[#d4af37]">type</span> <span className="text-[#e0e0e0]">User</span> {"{"}{"\n"}{"  "}<span className="text-[#888]">id</span>: <span className="text-[#d4af37]">ID!</span>{"\n"}{"  "}<span className="text-[#888]">name</span>: <span className="text-[#d4af37]">String!</span>{"\n"}{"  "}<span className="text-[#888]">email</span>: <span className="text-[#d4af37]">String!</span>{"\n"}{"  "}<span className="text-[#888]">role</span>: <span className="text-[#d4af37]">Role!</span>{"\n"}{"  "}<span className="text-[#888]">createdAt</span>: <span className="text-[#d4af37]">DateTime!</span>{"\n"}{"}"}{"\n"}{"\n"}<span className="text-[#d4af37]">enum</span> <span className="text-[#e0e0e0]">Role</span> {"{"}{"\n"}{"  "}<span className="text-[#888]">ADMIN</span>{"\n"}{"  "}<span className="text-[#888]">EDITOR</span>{"\n"}{"  "}<span className="text-[#888]">VIEWER</span>{"\n"}{"}"}
            </pre>
          </div>

          <h2 className="text-xl font-semibold text-[#e0e0e0] mb-4 mt-14" style={{ fontFamily: "Playfair Display, serif" }}>Resolvers</h2>
          <div className="w-8 h-px bg-[#222] mb-6" />
          <p className="text-[13px] text-[#666] leading-[1.8] mb-5">
            Implement resolver functions to connect your schema to your data sources.
          </p>
          <div className="bg-[#111] border border-[#1a1a1a] overflow-hidden mb-10">
            <div className="flex items-center justify-between px-5 py-2.5 border-b border-[#1a1a1a]">
              <span className="text-[11px] text-[#444]" style={{ fontFamily: "JetBrains Mono, monospace" }}>resolvers.ts</span>
              <span className="text-[11px] text-[#333] cursor-pointer hover:text-[#666] transition-colors">Copy</span>
            </div>
            <pre className="p-5 text-[13px] leading-[1.8] overflow-x-auto" style={{ fontFamily: "JetBrains Mono, monospace" }}>
<span className="text-[#d4af37]">import</span> <span className="text-[#e0e0e0]">{"{ defineResolvers }"}</span> <span className="text-[#d4af37]">from</span> <span className="text-[#888]">&apos;aurelius&apos;</span>{"\n"}{"\n"}<span className="text-[#d4af37]">export default</span> <span className="text-[#e0e0e0]">defineResolvers</span>({"{"}{"\n"}{"  "}Query: {"{"}{"\n"}{"    "}<span className="text-[#888]">users</span>: <span className="text-[#d4af37]">async</span> (_, args, ctx) =&gt; {"{"}{"\n"}{"      "}<span className="text-[#d4af37]">return</span> ctx.db.user.<span className="text-[#888]">findMany</span>({"{"}{"\n"}{"        "}where: {"{"} role: args.role {"}"},){"\n"}{"        "}orderBy: {"{"} createdAt: <span className="text-[#888]">&apos;desc&apos;</span> {"}"},){"\n"}{"      "}{"}"});{"\n"}{"    "}{"}"},{"\n"}{"  "}{"}"},{"\n"}{"}"});
            </pre>
          </div>

          {/* Warning callout */}
          <div className="border-l-2 border-[#d4af37]/40 bg-[#d4af37]/5 pl-5 pr-5 py-4 mb-10">
            <p className="text-[11px] text-[#d4af37] uppercase tracking-[0.15em] font-medium mb-2">Security Notice</p>
            <p className="text-[13px] text-[#666] leading-[1.7]">
              Always validate and sanitize user input in resolvers. Enable query depth limiting and cost analysis to prevent abuse.
            </p>
          </div>

          <h2 className="text-xl font-semibold text-[#e0e0e0] mb-4 mt-14" style={{ fontFamily: "Playfair Display, serif" }}>Configuration Reference</h2>
          <div className="w-8 h-px bg-[#222] mb-6" />
          <div className="border border-[#1a1a1a] overflow-hidden mb-12">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#1a1a1a] bg-[#111]">
                  {["Parameter", "Type", "Default", "Description"].map((h) => (
                    <th key={h} className="text-[11px] font-medium text-[#555] uppercase tracking-[0.1em] px-5 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {configOptions.map((row) => (
                  <tr key={row.param} className="border-b border-[#141414] last:border-0">
                    <td className="px-5 py-3 text-[13px] text-[#d4af37]" style={{ fontFamily: "JetBrains Mono, monospace" }}>{row.param}</td>
                    <td className="px-5 py-3 text-[13px] text-[#555]" style={{ fontFamily: "JetBrains Mono, monospace" }}>{row.type}</td>
                    <td className="px-5 py-3 text-[13px] text-[#444]" style={{ fontFamily: "JetBrains Mono, monospace" }}>{row.default}</td>
                    <td className="px-5 py-3 text-[13px] text-[#666]">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Next Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              { title: "Installation Guide", desc: "Set up your development environment" },
              { title: "API Reference", desc: "Explore the complete API surface" },
            ].map((card) => (
              <div key={card.title} className="border border-[#1a1a1a] p-5 cursor-pointer hover:border-[#d4af37]/30 transition-all group">
                <h3 className="text-[14px] font-medium text-[#ccc] group-hover:text-[#d4af37] transition-colors mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{card.title}</h3>
                <p className="text-[12px] text-[#444]">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Prev/Next */}
          <div className="border-t border-[#1a1a1a] pt-6 flex justify-between">
            <div />
            <div className="text-right">
              <p className="text-[11px] text-[#333] mb-1 uppercase tracking-wider">Next</p>
              <span className="text-[13px] text-[#d4af37] cursor-pointer hover:text-[#e5c04b] transition-colors" style={{ fontFamily: "Playfair Display, serif" }}>Installation &rarr;</span>
            </div>
          </div>
        </main>

        {/* Right TOC */}
        <aside className="hidden xl:block w-52 flex-shrink-0 border-l border-[#1a1a1a] sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-14 px-6">
          <h4 className="text-[11px] font-medium text-[#444] uppercase tracking-[0.15em] mb-4">On this page</h4>
          <div className="space-y-2.5">
            {tocItems.map((item, i) => (
              <div key={item} className={`text-[13px] cursor-pointer transition-colors ${i === 0 ? "text-[#d4af37] font-medium" : "text-[#333] hover:text-[#777]"}`}>
                {item}
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] mt-20">
        <div className="max-w-[88rem] mx-auto px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
            {[
              { heading: "Product", links: ["Features", "Pricing", "Enterprise", "Changelog"] },
              { heading: "Resources", links: ["Documentation", "API Reference", "Tutorials", "Examples"] },
              { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { heading: "Legal", links: ["Privacy Policy", "Terms of Service", "Security", "Compliance"] },
            ].map((col) => (
              <div key={col.heading}>
                <h4 className="text-[11px] font-medium text-[#555] uppercase tracking-[0.15em] mb-4">{col.heading}</h4>
                <div className="space-y-2.5">
                  {col.links.map((link) => (
                    <p key={link} className="text-[13px] text-[#333] hover:text-[#d4af37] cursor-pointer transition-colors">{link}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-[#1a1a1a] pt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border border-[#d4af37]/40 flex items-center justify-center">
                <span className="text-[#d4af37] text-[10px]" style={{ fontFamily: "Playfair Display, serif" }}>A</span>
              </div>
              <span className="text-[12px] text-[#333]">&copy; 2024 Aurelius. All rights reserved.</span>
            </div>
            <div className="flex gap-5">
              {["GitHub", "Twitter", "Discord"].map((s) => (
                <span key={s} className="text-[12px] text-[#333] hover:text-[#d4af37] cursor-pointer transition-colors">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
