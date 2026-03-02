export default function DocsLuxuryDemo() {
  return (
    <div style={{ fontFamily: "'Cardo', serif", backgroundColor: "#faf3e8" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap&family=Inter:wght@300;400&display=swap" rel="stylesheet" />

      {/* Header */}
      <header className="border-b px-8 py-5 flex items-center justify-between" style={{ borderColor: "#e8dcc8" }}>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold italic" style={{ color: "#7f1d1d" }}>Artisan</span>
          <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#a8967a" }}>Content Management System</span>
        </div>
        <nav className="flex items-center gap-6 text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#a8967a" }}>
          <a>Documentation</a>
          <a>Guides</a>
          <a>API</a>
          <a>Changelog</a>
        </nav>
      </header>

      <div className="flex">
        {/* Chapter Nav Sidebar */}
        <aside className="w-64 border-r p-8 min-h-screen hidden lg:block" style={{ borderColor: "#e8dcc8" }}>
          <p className="text-xs uppercase tracking-widest mb-6 font-bold" style={{ fontFamily: "'Inter', sans-serif", color: "#a8967a" }}>Chapters</p>
          <ul className="space-y-3 text-sm">
            <li className="font-bold" style={{ color: "#7f1d1d" }}>I. Introduction</li>
            <li style={{ color: "#78716c" }}>II. Installation</li>
            <li style={{ color: "#78716c" }}>III. Content Modeling</li>
            <li style={{ color: "#78716c" }}>IV. Media Library</li>
            <li style={{ color: "#78716c" }}>V. Templating Engine</li>
            <li style={{ color: "#78716c" }}>VI. User Roles</li>
            <li style={{ color: "#78716c" }}>VII. Workflows</li>
            <li style={{ color: "#78716c" }}>VIII. API Reference</li>
            <li style={{ color: "#78716c" }}>IX. Configuration</li>
            <li style={{ color: "#78716c" }}>X. Glossary</li>
          </ul>
          <div className="mt-8 pt-6 border-t" style={{ borderColor: "#e8dcc8" }}>
            <p className="text-xs mb-3" style={{ fontFamily: "'Inter', sans-serif", color: "#a8967a" }}>Edition</p>
            <p className="text-sm italic" style={{ color: "#7f1d1d" }}>Third Edition</p>
            <p className="text-xs mt-1" style={{ color: "#a8967a" }}>Spring 2026</p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-3xl mx-auto px-10 py-14">
          {/* Book-Style Hero */}
          <section className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ fontFamily: "'Inter', sans-serif", color: "#a8967a" }}>Chapter I</p>
            <h1 className="text-5xl font-bold mb-4 italic" style={{ color: "#7f1d1d" }}>Introduction</h1>
            <div className="w-16 h-0.5 mx-auto mb-6" style={{ backgroundColor: "#7f1d1d" }}></div>
            <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "#78716c" }}>
              Artisan CMS is a premium content management platform designed for publishers, luxury brands, and editorial teams who demand excellence in every detail of their digital presence.
            </p>
          </section>

          {/* Table of Contents */}
          <section className="mb-16 border rounded-lg p-8" style={{ borderColor: "#e8dcc8", backgroundColor: "#fdf8f0" }}>
            <h2 className="text-xl font-bold mb-6 text-center" style={{ color: "#7f1d1d" }}>Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "1.1 Philosophy and Design Principles",
                "1.2 System Requirements",
                "1.3 Architecture Overview",
                "1.4 Quick Installation Guide",
                "1.5 Your First Content Model",
                "1.6 Publishing Workflow",
                "1.7 Theme Customization",
                "1.8 Deployment Options",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm py-1" style={{ borderBottom: "1px dotted #e8dcc8" }}>
                  <span style={{ color: "#7f1d1d" }}>{item.split(" ")[0]}</span>
                  <span className="flex-1" style={{ color: "#78716c" }}>{item.split(" ").slice(1).join(" ")}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Guide Sections */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-2 italic" style={{ color: "#7f1d1d" }}>Philosophy and Design Principles</h2>
            <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: "#7f1d1d" }}></div>
            <p className="leading-relaxed mb-4" style={{ color: "#78716c" }}>
              Artisan was conceived with the belief that content management should be an act of craftsmanship, not compromise. Every interface, every workflow, and every API endpoint has been considered with the care of a master artisan shaping their finest work.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "#78716c" }}>
              The platform separates content structure from presentation through a modular architecture. Content models define the shape of your data. Templates control the visual rendering. Workflows govern the editorial process from draft through review to publication.
            </p>
            <blockquote className="border-l-4 pl-6 my-8 italic" style={{ borderColor: "#7f1d1d", color: "#7f1d1d" }}>
              &ldquo;The details are not the details. They make the design.&rdquo; — Charles Eames
            </blockquote>
            <p className="leading-relaxed" style={{ color: "#78716c" }}>
              Artisan ships with zero assumptions about your content. There are no default post types, no mandatory taxonomies, and no prescribed URL structures. You begin with a blank canvas and compose exactly the content architecture your project demands.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-2 italic" style={{ color: "#7f1d1d" }}>Architecture Overview</h2>
            <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: "#7f1d1d" }}></div>
            <p className="leading-relaxed mb-4" style={{ color: "#78716c" }}>
              The Artisan runtime comprises four layers: the Content Layer stores structured data in a versioned document store with full revision history. The Media Layer handles asset ingestion, transformation, and delivery via a built-in CDN. The Presentation Layer renders content through a Twig-based templating engine with inheritance and partials. The API Layer exposes all functionality through RESTful and GraphQL endpoints.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="border rounded-lg p-5" style={{ borderColor: "#e8dcc8" }}>
                <h3 className="font-bold italic mb-2" style={{ color: "#7f1d1d" }}>Content Layer</h3>
                <p className="text-sm" style={{ color: "#78716c" }}>Versioned document store with field-level diffing, branch-based editing, and merge conflict resolution for collaborative workflows.</p>
              </div>
              <div className="border rounded-lg p-5" style={{ borderColor: "#e8dcc8" }}>
                <h3 className="font-bold italic mb-2" style={{ color: "#7f1d1d" }}>Media Layer</h3>
                <p className="text-sm" style={{ color: "#78716c" }}>On-the-fly image transformations, responsive breakpoint generation, and WebP/AVIF conversion with global CDN distribution.</p>
              </div>
              <div className="border rounded-lg p-5" style={{ borderColor: "#e8dcc8" }}>
                <h3 className="font-bold italic mb-2" style={{ color: "#7f1d1d" }}>Presentation Layer</h3>
                <p className="text-sm" style={{ color: "#78716c" }}>Twig-based templating with layout inheritance, reusable partials, and a live preview mode that renders changes in real time.</p>
              </div>
              <div className="border rounded-lg p-5" style={{ borderColor: "#e8dcc8" }}>
                <h3 className="font-bold italic mb-2" style={{ color: "#7f1d1d" }}>API Layer</h3>
                <p className="text-sm" style={{ color: "#78716c" }}>RESTful and GraphQL endpoints with fine-grained permissions, cursor-based pagination, and webhook integrations for external systems.</p>
              </div>
            </div>
          </section>

          {/* Configuration Reference */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-2 italic" style={{ color: "#7f1d1d" }}>Configuration Reference</h2>
            <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: "#7f1d1d" }}></div>
            <div className="space-y-4">
              {[
                { key: "site.title", type: "string", desc: "The display name of your Artisan installation, shown in the admin panel header and default meta tags." },
                { key: "content.revisions", type: "integer", desc: "Maximum number of content revisions retained per entry. Set to -1 for unlimited history. Default: 50." },
                { key: "media.max_upload_size", type: "string", desc: "Maximum file upload size. Accepts values like '50MB' or '1GB'. Applies to all media types uniformly." },
                { key: "media.cdn_origin", type: "string", desc: "Base URL for the CDN origin server. All media assets are served through this endpoint with automatic cache headers." },
                { key: "auth.session_ttl", type: "integer", desc: "Session duration in seconds for admin panel users. Default: 86400 (24 hours)." },
                { key: "auth.mfa_required", type: "boolean", desc: "Require multi-factor authentication for all admin users. Default: false. Recommended for production." },
                { key: "api.rate_limit", type: "integer", desc: "Maximum API requests per minute per authenticated client. Default: 300." },
              ].map((cfg) => (
                <div key={cfg.key} className="border-b pb-3" style={{ borderColor: "#e8dcc8" }}>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-bold text-sm" style={{ fontFamily: "'Inter', sans-serif", color: "#7f1d1d" }}>{cfg.key}</span>
                    <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "#f5ebe0", color: "#a8967a", fontFamily: "'Inter', sans-serif" }}>{cfg.type}</span>
                  </div>
                  <p className="text-sm" style={{ color: "#78716c" }}>{cfg.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Glossary */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-2 italic" style={{ color: "#7f1d1d" }}>Glossary</h2>
            <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: "#7f1d1d" }}></div>
            <div className="space-y-3 text-sm">
              {[
                { term: "Content Model", def: "A schema definition that describes the structure, fields, and validation rules for a type of content within Artisan." },
                { term: "Blueprint", def: "A reusable configuration package that bundles content models, templates, and workflows for rapid project scaffolding." },
                { term: "Revision", def: "An immutable snapshot of a content entry at a specific point in time, enabling full version history and rollback." },
                { term: "Workspace", def: "An isolated environment within Artisan for managing content across different teams, brands, or publication channels." },
                { term: "Webhook", def: "An HTTP callback triggered by content lifecycle events such as publish, update, archive, or delete operations." },
                { term: "Locale", def: "A language and region identifier used for content localization. Artisan supports unlimited locales per workspace with fallback chains." },
                { term: "Slug", def: "A URL-safe identifier derived from a content entry title, used for human-readable permalink construction." },
              ].map((item) => (
                <div key={item.term} className="flex gap-4">
                  <span className="w-36 shrink-0 font-bold italic" style={{ color: "#7f1d1d" }}>{item.term}</span>
                  <span style={{ color: "#78716c" }}>{item.def}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Book-Style Footer */}
      <footer className="border-t px-8 py-5 flex items-center justify-between text-sm" style={{ borderColor: "#e8dcc8" }}>
        <span className="italic" style={{ color: "#a8967a" }}>Artisan CMS Documentation</span>
        <span style={{ fontFamily: "'Inter', sans-serif", color: "#a8967a" }}>Page 1 of 42</span>
        <span className="italic" style={{ color: "#a8967a" }}>Edition 3.0 — Spring 2026</span>
      </footer>
    </div>
  );
}
