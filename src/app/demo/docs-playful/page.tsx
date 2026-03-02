export default function DocsPlayfulDemo() {
  const sidebarSections = [
    {
      title: "Start Here",
      emoji: "\u{1F680}",
      items: [
        { label: "Welcome!", active: true },
        { label: "Installation", active: false },
        { label: "Your First App", active: false },
        { label: "Project Structure", active: false },
      ],
    },
    {
      title: "Learn",
      emoji: "\u{1F4DA}",
      items: [
        { label: "Components", active: false },
        { label: "State Management", active: false },
        { label: "Data Fetching", active: false },
        { label: "Styling", active: false },
      ],
    },
    {
      title: "API",
      emoji: "\u{1F527}",
      items: [
        { label: "Hooks Reference", active: false },
        { label: "CLI Commands", active: false },
        { label: "Config File", active: false },
        { label: "Plugins", active: false },
      ],
    },
    {
      title: "More",
      emoji: "\u{2728}",
      items: [
        { label: "Deployment", active: false },
        { label: "Testing", active: false },
        { label: "FAQ", active: false },
        { label: "Community", active: false },
      ],
    },
  ];

  const tocItems = ["Welcome", "Why Breezy?", "Quick Install", "Hello World", "Core Concepts", "What's Next?"];

  const steps = [
    { num: 1, title: "Install Breezy", desc: "Add Breezy to your project with a single command.", done: true },
    { num: 2, title: "Create a Component", desc: "Build your first reactive component with hot reload.", done: true },
    { num: 3, title: "Add Some Data", desc: "Connect to an API and display real data.", done: false },
    { num: 4, title: "Deploy!", desc: "Ship your app to the world with one click.", done: false },
  ];

  const features = [
    { emoji: "\u{26A1}", title: "Lightning Fast", desc: "Sub-100ms builds with smart caching and incremental compilation." },
    { emoji: "\u{1F3A8}", title: "Beautiful by Default", desc: "Built-in design tokens and component library ready to use." },
    { emoji: "\u{1F504}", title: "Hot Reload", desc: "See changes instantly without losing component state." },
    { emoji: "\u{1F4E6}", title: "Zero Config", desc: "Works out of the box. No webpack, no babel, no fuss." },
  ];

  const configOptions = [
    { prop: "theme", type: "string", default: "'light'", desc: "App color theme (light, dark, auto)" },
    { prop: "port", type: "number", default: "3000", desc: "Development server port" },
    { prop: "plugins", type: "array", default: "[]", desc: "List of Breezy plugins to load" },
    { prop: "output", type: "string", default: "'dist'", desc: "Build output directory" },
  ];

  return (
    <div className="min-h-screen bg-[#FEFCF9] text-slate-800" style={{ fontFamily: "Nunito, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>

      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-[88rem] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-xl">{"\u{1F343}"}</span>
              <span className="text-base font-extrabold text-slate-800">Breezy</span>
              <span className="text-[10px] font-bold bg-gradient-to-r from-orange-400 to-pink-400 text-white px-2 py-0.5 rounded-full">v4.0</span>
            </div>
            <div className="hidden md:flex items-center gap-5">
              {["Docs", "Tutorial", "Playground", "Blog"].map((item, i) => (
                <span key={item} className={`text-sm font-semibold cursor-pointer transition-colors ${i === 0 ? "text-orange-500" : "text-slate-400 hover:text-slate-700"}`}>{item}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center h-9 w-56 bg-orange-50 rounded-2xl px-4 gap-2">
              <span className="text-sm text-orange-300">{"\u{1F50D}"}</span>
              <span className="text-sm text-orange-300">Search docs...</span>
            </div>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold cursor-pointer">G</div>
          </div>
        </div>
      </nav>

      <div className="max-w-[88rem] mx-auto flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-60 flex-shrink-0 border-r border-orange-100 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-6 px-4">
          {sidebarSections.map((section) => (
            <div key={section.title} className="mb-6">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>{section.emoji}</span> {section.title}
              </h4>
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <div key={item.label} className={`py-1.5 px-3 text-sm rounded-xl cursor-pointer transition-all ${item.active ? "bg-gradient-to-r from-orange-100 to-pink-50 text-orange-600 font-bold" : "text-slate-400 hover:text-slate-700 hover:bg-orange-50"}`}>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-8 lg:px-14 py-10 max-w-3xl">
          <div className="flex items-center gap-2 text-sm text-slate-300 mb-8">
            <span className="hover:text-orange-400 cursor-pointer">Docs</span>
            <span>/</span>
            <span className="hover:text-orange-400 cursor-pointer">Start Here</span>
            <span>/</span>
            <span className="text-slate-600 font-semibold">Welcome!</span>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Welcome to Breezy! {"\u{1F44B}"}</h1>
          <p className="text-lg text-slate-500 leading-relaxed mb-8">
            The delightfully simple framework for building modern web apps. Let&apos;s get you started in no time.
          </p>

          {/* Tip callout */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-5 mb-10 flex gap-3">
            <span className="text-xl mt-0.5">{"\u{1F4A1}"}</span>
            <div>
              <p className="text-sm font-bold text-emerald-700 mb-1">Pro Tip!</p>
              <p className="text-sm text-emerald-600">
                New to Breezy? Start with the interactive tutorial -- it takes less than 10 minutes and you&apos;ll build a working app!
              </p>
            </div>
          </div>

          <h2 className="text-xl font-extrabold text-slate-800 mb-4 mt-10">Why Breezy? {"\u{2728}"}</h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-6">
            Breezy combines the best ideas from modern frameworks into one cohesive package. No more glue code, no more config headaches.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-orange-100 rounded-2xl p-5 hover:shadow-md hover:border-orange-200 transition-all cursor-pointer">
                <span className="text-2xl mb-2 block">{f.emoji}</span>
                <h3 className="text-sm font-bold text-slate-800 mb-1">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-slate-800 mb-4 mt-10">Quick Install {"\u{1F4E5}"}</h2>
          <div className="bg-slate-900 rounded-2xl overflow-hidden mb-6">
            <div className="flex items-center justify-between px-5 py-2.5 bg-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-slate-500">Terminal</span>
            </div>
            <pre className="p-5 text-sm leading-relaxed overflow-x-auto" style={{ fontFamily: "Menlo, monospace" }}>
<span className="text-pink-400">$</span> <span className="text-emerald-400">npx create-breezy-app my-app</span>{"\n"}<span className="text-pink-400">$</span> <span className="text-sky-400">cd my-app</span>{"\n"}<span className="text-pink-400">$</span> <span className="text-amber-400">npm run dev</span>{"\n"}{"\n"}<span className="text-slate-500">{"# "}Your app is running at http://localhost:3000 {"\u{1F389}"}</span>
            </pre>
          </div>

          <h2 className="text-xl font-extrabold text-slate-800 mb-4 mt-10">Hello World {"\u{1F30D}"}</h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">
            Here&apos;s what a Breezy component looks like. Simple, clean, and reactive by default.
          </p>
          <div className="bg-[#1e1e2e] rounded-2xl overflow-hidden mb-8">
            <div className="flex items-center justify-between px-5 py-2.5 bg-[#181825]">
              <span className="text-xs text-[#6c7086]">App.breezy</span>
              <span className="text-xs text-[#45475a] cursor-pointer hover:text-[#cdd6f4]">Copy</span>
            </div>
            <pre className="p-5 text-sm leading-relaxed overflow-x-auto" style={{ fontFamily: "Menlo, monospace" }}>
<span className="text-[#cba6f7]">import</span> <span className="text-[#fab387]">{"{ useState }"}</span> <span className="text-[#cba6f7]">from</span> <span className="text-[#a6e3a1]">&apos;breezy&apos;</span>{"\n"}{"\n"}<span className="text-[#cba6f7]">export default</span> <span className="text-[#89b4fa]">function</span> <span className="text-[#f9e2af]">App</span>() {"{"}{"\n"}{"  "}<span className="text-[#cba6f7]">const</span> [count, setCount] = <span className="text-[#f9e2af]">useState</span>(<span className="text-[#fab387]">0</span>){"\n"}{"\n"}{"  "}<span className="text-[#cba6f7]">return</span> ({"\n"}{"    "}&lt;<span className="text-[#89b4fa]">button</span> <span className="text-[#f9e2af]">onClick</span>={"{"}() =&gt; setCount(count + 1){"}"}&gt;{"\n"}{"      "}Clicked {"{"}<span className="text-[#fab387]">count</span>{"}"} times {"\u{1F389}"}{"\n"}{"    "}&lt;/<span className="text-[#89b4fa]">button</span>&gt;{"\n"}{"  "}){"\n"}{"}"}
            </pre>
          </div>

          <h2 className="text-xl font-extrabold text-slate-800 mb-4 mt-10">Core Concepts {"\u{1F9E9}"}</h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">Follow these steps to master Breezy:</p>

          {/* Step indicators */}
          <div className="space-y-3 mb-10">
            {steps.map((step) => (
              <div key={step.num} className={`flex items-start gap-4 p-4 rounded-2xl border ${step.done ? "bg-emerald-50 border-emerald-200" : "bg-white border-slate-200"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${step.done ? "bg-emerald-400 text-white" : "bg-slate-200 text-slate-500"}`}>
                  {step.done ? "\u{2713}" : step.num}
                </div>
                <div>
                  <h3 className={`text-sm font-bold ${step.done ? "text-emerald-700" : "text-slate-700"}`}>{step.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Config table */}
          <h2 className="text-xl font-extrabold text-slate-800 mb-4 mt-10">Configuration {"\u{2699}\u{FE0F}"}</h2>
          <div className="bg-white border border-orange-100 rounded-2xl overflow-hidden mb-10">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-orange-100 bg-orange-50/50">
                  {["Property", "Type", "Default", "Description"].map((h) => (
                    <th key={h} className="text-xs font-bold text-slate-500 uppercase tracking-wider px-5 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {configOptions.map((row) => (
                  <tr key={row.prop} className="border-b border-orange-50 last:border-0">
                    <td className="px-5 py-3 text-sm font-bold text-orange-500" style={{ fontFamily: "Menlo, monospace" }}>{row.prop}</td>
                    <td className="px-5 py-3 text-sm text-slate-400" style={{ fontFamily: "Menlo, monospace" }}>{row.type}</td>
                    <td className="px-5 py-3 text-sm text-slate-400" style={{ fontFamily: "Menlo, monospace" }}>{row.default}</td>
                    <td className="px-5 py-3 text-sm text-slate-500">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Warning callout */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-3">
            <span className="text-xl mt-0.5">{"\u{26A0}\u{FE0F}"}</span>
            <div>
              <p className="text-sm font-bold text-amber-700 mb-1">Heads Up!</p>
              <p className="text-sm text-amber-600">
                Never commit your API keys to version control. Use environment variables and add .env to your .gitignore!
              </p>
            </div>
          </div>

          <h2 className="text-xl font-extrabold text-slate-800 mb-4 mt-10">What&apos;s Next? {"\u{1F680}"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              { emoji: "\u{1F4D6}", title: "Read the Tutorial", desc: "Build a full app step by step" },
              { emoji: "\u{1F3AE}", title: "Try the Playground", desc: "Experiment with Breezy in your browser" },
            ].map((card) => (
              <div key={card.title} className="bg-gradient-to-br from-orange-50 to-pink-50 border border-orange-200 rounded-2xl p-5 cursor-pointer hover:shadow-md transition-all group">
                <span className="text-2xl block mb-2">{card.emoji}</span>
                <h3 className="text-sm font-bold text-slate-700 group-hover:text-orange-600 transition-colors">{card.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Prev/Next */}
          <div className="border-t border-orange-100 pt-6 flex justify-between">
            <div />
            <div className="text-right">
              <p className="text-xs text-slate-300 mb-1">Up Next</p>
              <span className="text-sm font-bold text-orange-500 cursor-pointer hover:text-orange-600">Installation {"\u{2192}"}</span>
            </div>
          </div>
        </main>

        {/* Right TOC */}
        <aside className="hidden xl:block w-52 flex-shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-10 pr-6">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{"\u{1F4CC}"} On this page</h4>
          <div className="space-y-2">
            {tocItems.map((item, i) => (
              <div key={item} className={`text-sm cursor-pointer transition-colors ${i === 0 ? "text-orange-500 font-bold" : "text-slate-300 hover:text-slate-600"}`}>
                {item}
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t border-orange-100 bg-orange-50/30 mt-16">
        <div className="max-w-[88rem] mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { heading: "Product", emoji: "\u{1F4E6}", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
              { heading: "Learn", emoji: "\u{1F4DA}", links: ["Docs", "Tutorial", "Examples", "Videos"] },
              { heading: "Community", emoji: "\u{1F465}", links: ["Discord", "GitHub", "Twitter", "Forum"] },
              { heading: "Legal", emoji: "\u{1F4DC}", links: ["Privacy", "Terms", "License", "Security"] },
            ].map((col) => (
              <div key={col.heading}>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">{col.emoji} {col.heading}</h4>
                <div className="space-y-2">
                  {col.links.map((link) => (
                    <p key={link} className="text-sm text-slate-400 hover:text-orange-500 cursor-pointer transition-colors">{link}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-orange-100 pt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>{"\u{1F343}"}</span>
              <span className="text-sm text-slate-400">&copy; 2024 Breezy. Made with love.</span>
            </div>
            <div className="flex gap-4">
              {["GitHub", "Twitter", "Discord"].map((s) => (
                <span key={s} className="text-sm text-slate-400 hover:text-orange-500 cursor-pointer transition-colors">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
