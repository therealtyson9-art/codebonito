export default function EducationLuxuryDemo() {
  const programs = [
    { name: "Executive MBA", duration: "18 months", format: "Hybrid", desc: "An intensive program for senior leaders seeking to sharpen strategic acumen while continuing to lead their organizations." },
    { name: "Leadership Excellence", duration: "6 months", format: "Residential", desc: "A transformative experience blending behavioral science, executive coaching, and peer learning for emerging C-suite talent." },
    { name: "Global Finance", duration: "12 months", format: "Online + Residencies", desc: "Master the intricacies of international capital markets, private equity, and sovereign wealth fund management." },
    { name: "Innovation & Disruption", duration: "9 months", format: "Modular", desc: "Equip yourself to lead organizational transformation through design thinking, venture building, and digital strategy." },
  ];

  const faculty = [
    { name: "Prof. Eleanor Ashworth", title: "Dean of Executive Education", credentials: "PhD Harvard, Former McKinsey Partner", focus: "Corporate Strategy & Governance" },
    { name: "Prof. Sir James Hargrove", title: "Chair of Leadership Studies", credentials: "PhD Oxford, Knighted for Service to Education", focus: "Organizational Behavior & Ethics" },
    { name: "Prof. Marguerite Delacroix", title: "Director of Finance Programs", credentials: "PhD LSE, Former ECB Advisor", focus: "Global Markets & Risk Management" },
  ];

  const alumniStats = [
    { value: "12,000+", label: "Alumni in 90 Countries" },
    { value: "78%", label: "C-Suite Within 5 Years" },
    { value: "$420K", label: "Average Alumni Compensation" },
    { value: "95%", label: "Would Recommend to Peers" },
  ];

  const campusLife = [
    { title: "The Ashworth Library", desc: "A 200,000-volume collection housed in our original 1847 reading room, with private study alcoves and dedicated research librarians." },
    { title: "Dining at Hargrove Hall", desc: "Three meals daily prepared by our resident chef, featuring locally sourced ingredients and a curated wine program for evening events." },
    { title: "The Fellows Garden", desc: "Six acres of manicured grounds along the river, providing a contemplative setting for reflection and informal discussions between sessions." },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap&family=Inter:wght@300;400&display=swap" rel="stylesheet" />

      <div style={{ backgroundColor: "#0a2f1f", color: "#f5f0e1" }}>
        {/* Academic Nav */}
        <nav className="px-8 py-5 flex items-center justify-between max-w-7xl mx-auto border-b" style={{ borderColor: "#1a4a35" }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold" style={{ borderColor: "#c9a84c", color: "#c9a84c" }}>AI</div>
            <span style={{ fontFamily: "'Vollkorn', serif", fontSize: "20px", fontWeight: 600 }}>Ashworth Institute</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-light tracking-wide" style={{ color: "#d4c9a8" }}>
            <a href="#">Programs</a>
            <a href="#">Faculty</a>
            <a href="#">Alumni</a>
            <a href="#">Campus</a>
            <a href="#">Apply</a>
          </div>
          <button className="text-sm px-5 py-2 border font-light tracking-wide" style={{ borderColor: "#c9a84c", color: "#c9a84c" }}>Request Prospectus</button>
        </nav>

        {/* Campus Photo Hero */}
        <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#c9a84c" }}>Est. 1847</p>
            <h1 style={{ fontFamily: "'Vollkorn', serif", fontSize: "48px", fontWeight: 600, lineHeight: 1.2 }} className="mb-6">Where leaders of consequence are forged.</h1>
            <p className="text-base leading-relaxed mb-8 font-light" style={{ color: "#d4c9a8" }}>The Ashworth Institute has shaped the minds behind boardrooms, ministries, and institutions across six continents. Our executive programs are designed for those who lead at the highest level.</p>
            <div className="flex gap-4">
              <button className="px-6 py-3 text-sm tracking-wide font-light" style={{ backgroundColor: "#c9a84c", color: "#0a2f1f" }}>Explore Programs</button>
              <button className="px-6 py-3 text-sm tracking-wide font-light border" style={{ borderColor: "#d4c9a8", color: "#d4c9a8" }}>Virtual Tour</button>
            </div>
          </div>
          <div className="h-80 rounded-sm flex items-center justify-center" style={{ backgroundColor: "#143d2b" }}>
            <div className="text-center" style={{ color: "#4a7c5c" }}>
              <div className="text-6xl mb-3">🏛️</div>
              <p className="text-sm font-light tracking-wide">Campus Photography</p>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20" style={{ backgroundColor: "#082619" }}>
          <div className="max-w-7xl mx-auto px-8">
            <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "#c9a84c" }}>Programs</p>
            <h2 style={{ fontFamily: "'Vollkorn', serif", fontSize: "36px", fontWeight: 600 }} className="mb-12">Designed for those who lead</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((p) => (
                <div key={p.name} className="p-8 border" style={{ borderColor: "#1a4a35" }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 style={{ fontFamily: "'Vollkorn', serif", fontSize: "22px", fontWeight: 600 }}>{p.name}</h3>
                    <span className="text-xs tracking-wider px-3 py-1" style={{ backgroundColor: "#1a4a35", color: "#c9a84c" }}>{p.format}</span>
                  </div>
                  <p className="text-sm font-light leading-relaxed mb-4" style={{ color: "#d4c9a8" }}>{p.desc}</p>
                  <p className="text-xs tracking-wider" style={{ color: "#7a9b6d" }}>Duration: {p.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Distinguished Faculty */}
        <section className="max-w-7xl mx-auto px-8 py-20">
          <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "#c9a84c" }}>Faculty</p>
          <h2 style={{ fontFamily: "'Vollkorn', serif", fontSize: "36px", fontWeight: 600 }} className="mb-12">Distinguished minds, devoted mentors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {faculty.map((f) => (
              <div key={f.name}>
                <div className="w-full h-56 mb-5 flex items-center justify-center" style={{ backgroundColor: "#143d2b" }}>
                  <span className="text-4xl">👤</span>
                </div>
                <h3 style={{ fontFamily: "'Vollkorn', serif", fontSize: "20px", fontWeight: 600 }}>{f.name}</h3>
                <p className="text-sm mb-1" style={{ color: "#c9a84c" }}>{f.title}</p>
                <p className="text-xs font-light mb-2" style={{ color: "#7a9b6d" }}>{f.credentials}</p>
                <p className="text-sm font-light" style={{ color: "#d4c9a8" }}>Focus: {f.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Alumni Network */}
        <section className="py-20" style={{ backgroundColor: "#c9a84c" }}>
          <div className="max-w-7xl mx-auto px-8">
            <h2 style={{ fontFamily: "'Vollkorn', serif", fontSize: "36px", fontWeight: 600, color: "#0a2f1f" }} className="mb-12 text-center">The Ashworth Network</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {alumniStats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: "#0a2f1f" }}>{s.value}</div>
                  <div className="text-sm" style={{ color: "#2d5a3f" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Life */}
        <section className="max-w-7xl mx-auto px-8 py-20">
          <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "#c9a84c" }}>Campus</p>
          <h2 style={{ fontFamily: "'Vollkorn', serif", fontSize: "36px", fontWeight: 600 }} className="mb-12">A setting worthy of the pursuit</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {campusLife.map((c) => (
              <div key={c.title}>
                <div className="w-full h-40 mb-4 flex items-center justify-center" style={{ backgroundColor: "#143d2b" }}>
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 style={{ fontFamily: "'Vollkorn', serif", fontSize: "18px", fontWeight: 600 }} className="mb-2">{c.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#d4c9a8" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Apply Now */}
        <section className="py-20 text-center border-t" style={{ borderColor: "#1a4a35" }}>
          <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "#c9a84c" }}>Admissions</p>
          <h2 style={{ fontFamily: "'Vollkorn', serif", fontSize: "40px", fontWeight: 600 }} className="mb-6">Begin your Ashworth chapter</h2>
          <p className="text-base font-light max-w-lg mx-auto mb-8" style={{ color: "#d4c9a8" }}>Applications for the 2026-2027 cohort are now open. Spaces are limited and admission is by invitation following a rigorous selection process.</p>
          <button className="px-8 py-4 text-sm tracking-widest uppercase" style={{ backgroundColor: "#c9a84c", color: "#0a2f1f" }}>Apply Now</button>
        </section>

        {/* Footer */}
        <footer className="border-t py-12" style={{ borderColor: "#1a4a35" }}>
          <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-8">
            <div>
              <h4 style={{ fontFamily: "'Vollkorn', serif", fontSize: "16px", fontWeight: 600 }} className="mb-3">Ashworth Institute</h4>
              <p className="text-xs font-light" style={{ color: "#7a9b6d" }}>Ashworth House, Cambridge CB2 1TN, United Kingdom</p>
            </div>
            <div>
              <h4 className="text-sm font-light mb-3" style={{ color: "#c9a84c" }}>Accreditation</h4>
              <p className="text-xs font-light" style={{ color: "#7a9b6d" }}>AACSB Accredited &middot; EQUIS Accredited &middot; AMBA Member</p>
            </div>
            <div>
              <h4 className="text-sm font-light mb-3" style={{ color: "#c9a84c" }}>Contact</h4>
              <p className="text-xs font-light" style={{ color: "#7a9b6d" }}>admissions@ashworthinstitute.ac.uk</p>
              <p className="text-xs font-light" style={{ color: "#7a9b6d" }}>+44 (0) 1223 456 789</p>
            </div>
            <div>
              <h4 className="text-sm font-light mb-3" style={{ color: "#c9a84c" }}>Legal</h4>
              <p className="text-xs font-light" style={{ color: "#7a9b6d" }}>Privacy Policy &middot; Terms &middot; Accessibility</p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-8 mt-8 pt-8 border-t text-center text-xs font-light" style={{ borderColor: "#1a4a35", color: "#4a7c5c" }}>
            &copy; 2026 The Ashworth Institute. All rights reserved. Royal Charter No. RC-1847-042.
          </div>
        </footer>
      </div>
    </div>
  );
}
