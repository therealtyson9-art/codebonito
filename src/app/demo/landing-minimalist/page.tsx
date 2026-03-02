export default function LandingMinimalistDemo() {
  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>

      {/* Nav */}
      <nav className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">linear.</span>
          <div className="hidden md:flex items-center space-x-8">
            {["Product", "Features", "Pricing", "Company"].map((item) => (
              <span key={item} className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">{item}</span>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer">Sign in</span>
            <button className="h-9 px-4 text-sm font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 border border-slate-200 rounded-full px-3 py-1 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs text-slate-500 font-medium">Now available for teams</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
            Build products with
            <br />
            less complexity
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto mb-10">
            A streamlined workspace for modern teams. Plan, track, and ship software without the overhead of traditional project management tools.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button className="h-11 px-6 text-sm font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
              Start for free
            </button>
            <button className="h-11 px-6 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
              View demo
            </button>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-xs text-slate-400 text-center uppercase tracking-widest mb-8">Trusted by teams at</p>
          <div className="flex items-center justify-center flex-wrap gap-x-12 gap-y-4">
            {["Vercel", "Stripe", "Notion", "Figma", "Linear", "Raycast"].map((logo) => (
              <span key={logo} className="text-sm font-medium text-slate-300">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Features Grid */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Everything you need, nothing you don&apos;t</h2>
          <p className="text-slate-500 max-w-lg mx-auto">Purpose-built features that help your team focus on building great products instead of managing tools.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large card */}
          <div className="md:col-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center mb-4">
              <span className="text-xs text-slate-500">&#9638;</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Issue Tracking</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-md">Create, assign, and track issues with a keyboard-first interface designed for speed. Bulk operations, filters, and views that adapt to your workflow.</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center mb-4">
              <span className="text-xs text-slate-500">&#9670;</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Cycles</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Automate sprint planning with smart cycles that roll over incomplete work and surface blockers.</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center mb-4">
              <span className="text-xs text-slate-500">&#9651;</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Roadmaps</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Visualize your product direction with timeline views that connect daily work to long-term goals.</p>
          </div>
          {/* Large card */}
          <div className="md:col-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center mb-4">
              <span className="text-xs text-slate-500">&#9672;</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Integrations</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-md">Connect with GitHub, GitLab, Slack, Figma, and 50 more tools your team already uses. Two-way sync keeps everything in context.</p>
          </div>
        </div>
      </section>

      {/* Social Proof / Metrics */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "12,000+", label: "Teams" },
              { value: "2.4M", label: "Issues tracked" },
              { value: "99.99%", label: "Uptime" },
              { value: "< 50ms", label: "Avg response" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-semibold tracking-tight">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-14">Loved by teams everywhere</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { quote: "We migrated from Jira in a single afternoon. The speed difference alone was worth it. Our entire engineering team is more productive.", author: "Sarah Chen", role: "VP Engineering, Raycast", avatar: "SC" },
            { quote: "The keyboard shortcuts and command palette make this feel like a tool built by developers, for developers. No unnecessary clicks.", author: "Marcus Rivera", role: "CTO, Draftbit", avatar: "MR" },
            { quote: "Finally a project management tool that gets out of the way. We spend less time managing work and more time doing it.", author: "Emi Tanaka", role: "Lead Engineer, Resend", avatar: "ET" },
          ].map((t) => (
            <div key={t.author} className="rounded-2xl border border-slate-100 p-6">
              <p className="text-sm text-slate-600 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-500">{t.avatar}</div>
                <div>
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-slate-900 rounded-2xl p-12 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">Start building better products</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">Free for small teams. No credit card required. Set up in under two minutes.</p>
          <div className="flex items-center justify-center gap-3">
            <button className="h-11 px-6 text-sm font-medium bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors">
              Get started free
            </button>
            <button className="h-11 px-6 text-sm font-medium text-slate-400 border border-slate-700 rounded-lg hover:border-slate-500 transition-colors">
              Talk to sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-sm text-slate-400">&copy; 2025 Linear Inc. All rights reserved.</span>
            <div className="flex items-center space-x-6">
              {["Twitter", "GitHub", "Discord", "Blog", "Changelog"].map((link) => (
                <span key={link} className="text-sm text-slate-400 hover:text-slate-600 cursor-pointer transition-colors">{link}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
