export const dynamic = "force-dynamic";
export default function ConsultingMinimalistDemo() {
  const services = [
    { title: "Strategy", desc: "We help organizations define where to play and how to win. From market entry to portfolio optimization, we bring clarity to your most consequential decisions." },
    { title: "Operations", desc: "We redesign processes, supply chains, and organizational structures to unlock efficiency gains that compound year after year." },
    { title: "Digital", desc: "We guide enterprises through technology adoption with pragmatic roadmaps that connect digital investment to measurable business outcomes." },
  ];

  const caseStudies = [
    { client: "Global Retailer", industry: "Retail", result: "37% improvement in supply chain efficiency", summary: "Redesigned end-to-end logistics for a 2,000-store chain, reducing delivery times by 3 days and saving $140M annually." },
    { client: "Series B SaaS Company", industry: "Technology", result: "4.2x revenue growth in 18 months", summary: "Developed go-to-market strategy and pricing model that accelerated enterprise adoption across three new verticals." },
    { client: "Regional Health System", industry: "Healthcare", result: "22% reduction in operating costs", summary: "Streamlined clinical operations and administrative workflows across 12 hospitals while improving patient satisfaction scores." },
  ];

  const team = [
    { name: "Alexandra Voss", role: "Managing Partner", background: "Previously at Bain & Company. 18 years in strategy consulting across technology and healthcare." },
    { name: "Marcus Chen", role: "Partner, Operations", background: "Former VP of Operations at Amazon. Specializes in supply chain transformation and lean methodology." },
    { name: "Priya Anand", role: "Partner, Digital", background: "Ex-Google. Led digital transformation initiatives for Fortune 100 companies across four continents." },
    { name: "Daniel Okafor", role: "Principal", background: "McKinsey alumnus. Deep expertise in private equity due diligence and post-merger integration." },
  ];

  return (
    <div style={{ fontFamily: "'Urbanist', sans-serif" }} className="min-h-screen bg-white">
      <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Minimal Nav */}
      <nav className="px-8 py-6 flex items-center justify-between max-w-6xl mx-auto">
        <span className="text-lg font-semibold tracking-tight" style={{ color: "#1f2937" }}>Clearpoint Advisory</span>
        <div className="hidden md:flex gap-8 text-sm" style={{ color: "#6b7280" }}>
          <a href="#" className="hover:text-gray-900">Services</a>
          <a href="#" className="hover:text-gray-900">Work</a>
          <a href="#" className="hover:text-gray-900">Team</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>
        <button className="text-sm font-medium px-5 py-2 rounded-md" style={{ backgroundColor: "#1f2937", color: "white" }}>Get in Touch</button>
      </nav>

      {/* Bold Statement Hero */}
      <section className="max-w-6xl mx-auto px-8 py-28">
        <h1 className="text-6xl md:text-7xl font-bold leading-none mb-8" style={{ color: "#1f2937" }}>Clarity creates<br />momentum.</h1>
        <p className="text-xl max-w-2xl leading-relaxed mb-10" style={{ color: "#6b7280" }}>Clearpoint Advisory partners with ambitious organizations to solve their hardest strategic problems. No jargon. No slide decks for the sake of slide decks. Just sharp thinking and measurable results.</p>
        <button className="text-sm font-medium px-6 py-3 rounded-md" style={{ backgroundColor: "#1f2937", color: "white" }}>Start a Conversation</button>
      </section>

      {/* What We Do */}
      <section className="py-20 border-t" style={{ borderColor: "#f3f4f6" }}>
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-sm uppercase tracking-widest mb-12" style={{ color: "#9ca3af" }}>What We Do</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((s) => (
              <div key={s.title}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: "#1f2937" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20" style={{ backgroundColor: "#f9fafb" }}>
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm uppercase tracking-widest mb-6" style={{ color: "#9ca3af" }}>Our Approach</h2>
            <h3 className="text-3xl font-semibold mb-6 leading-tight" style={{ color: "#1f2937" }}>We work differently because the old model is broken.</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>Traditional consulting delivers thick reports that collect dust. We embed with your team, pressure-test assumptions in real time, and stay until the strategy is working in practice, not just on paper.</p>
            <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>Our engagements are structured around 90-day sprints with clear milestones, weekly progress reviews, and full transparency on what is and is not working.</p>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg">
              <h4 className="font-semibold mb-1" style={{ color: "#1f2937" }}>Diagnose</h4>
              <p className="text-sm" style={{ color: "#6b7280" }}>We spend the first two weeks listening, asking hard questions, and mapping the real problem.</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h4 className="font-semibold mb-1" style={{ color: "#1f2937" }}>Design</h4>
              <p className="text-sm" style={{ color: "#6b7280" }}>We co-create solutions with your leadership team, not in isolation from your corner office.</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h4 className="font-semibold mb-1" style={{ color: "#1f2937" }}>Deliver</h4>
              <p className="text-sm" style={{ color: "#6b7280" }}>We stay through implementation to ensure the strategy translates into tangible business results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 border-t" style={{ borderColor: "#f3f4f6" }}>
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-sm uppercase tracking-widest mb-12" style={{ color: "#9ca3af" }}>Selected Work</h2>
          <div className="space-y-12">
            {caseStudies.map((c) => (
              <div key={c.client} className="grid md:grid-cols-3 gap-8 pb-12 border-b" style={{ borderColor: "#f3f4f6" }}>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#9ca3af" }}>{c.industry}</p>
                  <h3 className="text-xl font-semibold" style={{ color: "#1f2937" }}>{c.client}</h3>
                </div>
                <div>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{c.summary}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-semibold" style={{ color: "#1f2937" }}>{c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" style={{ backgroundColor: "#f9fafb" }}>
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-sm uppercase tracking-widest mb-12" style={{ color: "#9ca3af" }}>The Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((t) => (
              <div key={t.name}>
                <div className="w-full h-48 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: "#e5e7eb" }}>
                  <span className="text-3xl">👤</span>
                </div>
                <h3 className="font-semibold" style={{ color: "#1f2937" }}>{t.name}</h3>
                <p className="text-xs mb-2" style={{ color: "#9ca3af" }}>{t.role}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{t.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: "#1f2937" }}>Let&apos;s talk about what&apos;s next.</h2>
            <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>Whether you have a specific challenge or just want to explore how we might work together, we&apos;d welcome the conversation.</p>
          </div>
          <div>
            <button className="w-full py-4 text-sm font-medium rounded-md mb-4" style={{ backgroundColor: "#1f2937", color: "white" }}>Schedule a Call</button>
            <p className="text-xs text-center" style={{ color: "#9ca3af" }}>hello@clearpointadvisory.com &middot; (415) 555-0142</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8" style={{ borderColor: "#f3f4f6" }}>
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs" style={{ color: "#9ca3af" }}>&copy; 2026 Clearpoint Advisory LLC. All rights reserved.</span>
          <div className="flex gap-6 text-xs" style={{ color: "#9ca3af" }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
