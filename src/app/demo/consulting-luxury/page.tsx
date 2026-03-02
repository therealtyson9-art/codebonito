export const dynamic = "force-dynamic";
export default function ConsultingLuxuryDemo() {
  const practiceAreas = [
    { name: "CEO Advisory", desc: "Confidential counsel for chief executives navigating succession planning, activist shareholders, strategic pivots, and legacy-defining decisions that shape institutions for decades.", icon: "◆" },
    { name: "Board Governance", desc: "Board composition analysis, governance restructuring, and fiduciary strategy for organizations where oversight quality directly determines enterprise value.", icon: "◆" },
    { name: "M&A & Transactions", desc: "Rigorous evaluation of acquisition targets, synergy modeling, and integration architecture for deals of consequence. We advise on transactions exceeding $500M.", icon: "◆" },
  ];

  const clients = [
    "Fortune 50 Pharmaceutical Group",
    "European Sovereign Wealth Fund",
    "Global Private Equity Firm (Top 5 AUM)",
    "Major U.S. Financial Institution",
    "Multinational Energy Corporation",
    "Family Office ($8B+ Assets)",
  ];

  const leadership = [
    { name: "Victoria Sterling", title: "Founding Partner", credentials: "Harvard Law, former White House Economic Council", bio: "25 years advising Fortune 100 CEOs and sovereign institutions on matters of strategic consequence." },
    { name: "Harrison Wolfe", title: "Founding Partner", credentials: "Wharton MBA, former Goldman Sachs Partner", bio: "Led over $120B in M&A transactions across financial services, energy, and technology sectors." },
    { name: "Catherine Ashford", title: "Senior Partner", credentials: "Oxford PPE, former McKinsey Senior Partner", bio: "Specialist in board effectiveness and corporate governance for FTSE 100 and DAX 40 companies." },
  ];

  const thoughtLeadership = [
    { title: "The Quiet Crisis in CEO Succession", date: "February 2026", summary: "Why 64% of boards lack a credible internal successor and how to build a pipeline without destabilizing current leadership." },
    { title: "Governance in the Age of AI", date: "January 2026", summary: "A framework for boards grappling with artificial intelligence oversight, liability, and strategic deployment decisions." },
    { title: "The Art of the Transformative Deal", date: "November 2025", summary: "Lessons from three decades of advising on transactions that fundamentally reshaped industries and institutions." },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Inter:wght@300;400&display=swap" rel="stylesheet" />

      <div style={{ backgroundColor: "#1e293b", color: "#c0c0c0" }}>
        {/* Premium Nav */}
        <nav className="px-8 py-5 flex items-center justify-between max-w-7xl mx-auto border-b" style={{ borderColor: "#334155" }}>
          <span style={{ fontFamily: "'Marcellus', serif", fontSize: "20px", color: "#c0c0c0", letterSpacing: "2px" }}>STERLING &amp; WOLFE</span>
          <div className="hidden md:flex gap-8 text-xs font-light tracking-widest uppercase" style={{ color: "#94a3b8" }}>
            <a href="#">Practice</a>
            <a href="#">Leadership</a>
            <a href="#">Perspectives</a>
            <a href="#">Contact</a>
          </div>
          <button className="text-xs px-5 py-2 border font-light tracking-widest uppercase" style={{ borderColor: "#c0c0c0", color: "#c0c0c0" }}>Private Inquiry</button>
        </nav>

        {/* Skyline Hero */}
        <section className="max-w-7xl mx-auto px-8 py-28 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "#64748b" }}>Boutique C-Suite Advisory</p>
            <h1 style={{ fontFamily: "'Marcellus', serif", fontSize: "46px", lineHeight: 1.2, color: "#e2e8f0" }} className="mb-6">Counsel for those who lead at the highest level.</h1>
            <p className="text-sm font-light leading-relaxed mb-8" style={{ color: "#94a3b8" }}>Sterling &amp; Wolfe is a confidential advisory firm serving chief executives, boards of directors, and family offices on matters of strategic consequence. We take fewer than twenty engagements per year.</p>
            <button className="px-6 py-3 text-xs tracking-widest uppercase font-light" style={{ backgroundColor: "#c0c0c0", color: "#1e293b" }}>Request a Consultation</button>
          </div>
          <div className="h-80 flex items-center justify-center" style={{ backgroundColor: "#283548" }}>
            <div className="text-center" style={{ color: "#475569" }}>
              <div className="text-6xl mb-3">🌃</div>
              <p className="text-xs font-light tracking-wider">Skyline Photography</p>
            </div>
          </div>
        </section>

        {/* Our Practice */}
        <section className="py-20 border-t" style={{ borderColor: "#334155" }}>
          <div className="max-w-7xl mx-auto px-8">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#64748b" }}>Our Practice</p>
            <h2 style={{ fontFamily: "'Marcellus', serif", fontSize: "34px", color: "#e2e8f0" }} className="mb-12">Three areas of focus, singular depth</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {practiceAreas.map((p) => (
                <div key={p.name} className="border-t pt-8" style={{ borderColor: "#334155" }}>
                  <span className="text-sm mb-4 block" style={{ color: "#c0c0c0" }}>{p.icon}</span>
                  <h3 style={{ fontFamily: "'Marcellus', serif", fontSize: "22px", color: "#e2e8f0" }} className="mb-4">{p.name}</h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "#94a3b8" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Select Clients */}
        <section className="py-20" style={{ backgroundColor: "#162032" }}>
          <div className="max-w-5xl mx-auto px-8">
            <p className="text-xs tracking-widest uppercase mb-3 text-center" style={{ color: "#64748b" }}>Select Clients</p>
            <h2 style={{ fontFamily: "'Marcellus', serif", fontSize: "34px", color: "#e2e8f0" }} className="mb-12 text-center">Trusted by institutions of consequence</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {clients.map((c) => (
                <div key={c} className="py-6 px-4 text-center border" style={{ borderColor: "#2d3f56" }}>
                  <p className="text-sm font-light" style={{ color: "#94a3b8" }}>{c}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-center mt-8 font-light italic" style={{ color: "#475569" }}>Client identities disclosed with permission. Many engagements remain confidential by agreement.</p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 border-t" style={{ borderColor: "#334155" }}>
          <div className="max-w-7xl mx-auto px-8">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#64748b" }}>Leadership</p>
            <h2 style={{ fontFamily: "'Marcellus', serif", fontSize: "34px", color: "#e2e8f0" }} className="mb-12">Partners of distinction</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {leadership.map((l) => (
                <div key={l.name}>
                  <div className="w-full h-56 mb-5 flex items-center justify-center" style={{ backgroundColor: "#283548" }}>
                    <span className="text-4xl">👤</span>
                  </div>
                  <h3 style={{ fontFamily: "'Marcellus', serif", fontSize: "20px", color: "#e2e8f0" }}>{l.name}</h3>
                  <p className="text-xs mb-1" style={{ color: "#c0c0c0" }}>{l.title}</p>
                  <p className="text-xs mb-3 italic" style={{ color: "#64748b" }}>{l.credentials}</p>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "#94a3b8" }}>{l.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Thought Leadership */}
        <section className="py-20" style={{ backgroundColor: "#162032" }}>
          <div className="max-w-5xl mx-auto px-8">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#64748b" }}>Perspectives</p>
            <h2 style={{ fontFamily: "'Marcellus', serif", fontSize: "34px", color: "#e2e8f0" }} className="mb-12">Thought leadership</h2>
            <div className="space-y-8">
              {thoughtLeadership.map((t) => (
                <div key={t.title} className="pb-8 border-b" style={{ borderColor: "#2d3f56" }}>
                  <p className="text-xs mb-2" style={{ color: "#64748b" }}>{t.date}</p>
                  <h3 style={{ fontFamily: "'Marcellus', serif", fontSize: "22px", color: "#e2e8f0" }} className="mb-3">{t.title}</h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "#94a3b8" }}>{t.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Private Consultation */}
        <section className="py-24 text-center border-t" style={{ borderColor: "#334155" }}>
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#64748b" }}>Begin a Conversation</p>
          <h2 style={{ fontFamily: "'Marcellus', serif", fontSize: "38px", color: "#e2e8f0" }} className="mb-6 max-w-2xl mx-auto">Matters of consequence deserve counsel of consequence.</h2>
          <p className="text-sm font-light max-w-lg mx-auto mb-8" style={{ color: "#94a3b8" }}>All inquiries are treated with the utmost discretion. We respond to qualified requests within 24 hours.</p>
          <button className="px-8 py-4 text-xs tracking-widest uppercase font-light" style={{ backgroundColor: "#c0c0c0", color: "#1e293b" }}>Request a Private Consultation</button>
        </section>

        {/* Refined Footer */}
        <footer className="border-t py-12" style={{ borderColor: "#334155" }}>
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8">
            <div>
              <h4 style={{ fontFamily: "'Marcellus', serif", fontSize: "16px", color: "#e2e8f0" }} className="mb-3">Sterling &amp; Wolfe</h4>
              <p className="text-xs font-light" style={{ color: "#64748b" }}>New York &middot; London &middot; Zurich</p>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase mb-3" style={{ color: "#94a3b8" }}>Contact</h4>
              <p className="text-xs font-light" style={{ color: "#64748b" }}>inquiries@sterlingwolfe.com</p>
              <p className="text-xs font-light" style={{ color: "#64748b" }}>+1 (212) 555-0187</p>
            </div>
            <div>
              <h4 className="text-xs tracking-widest uppercase mb-3" style={{ color: "#94a3b8" }}>Confidentiality</h4>
              <p className="text-xs font-light" style={{ color: "#64748b" }}>All client relationships, engagement details, and communications are held in strict confidence under our professional standards of practice.</p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-8 mt-8 pt-8 border-t text-center text-xs font-light" style={{ borderColor: "#334155", color: "#475569" }}>
            &copy; 2026 Sterling &amp; Wolfe Advisory Partners LLP. All rights reserved. This site does not constitute an offer of services in any jurisdiction.
          </div>
        </footer>
      </div>
    </div>
  );
}
