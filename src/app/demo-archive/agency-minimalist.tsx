export default function AgencyMinimalistDemo() {
  const navItems = [
    { label: "Work", active: true },
    { label: "Approach", active: false },
    { label: "Team", active: false },
    { label: "Contact", active: false },
  ];

  const projects = [
    { name: "Reverie Skincare", category: "Brand Identity", year: "2024", description: "A complete visual overhaul for a clean beauty brand entering the European market. We stripped away the noise and let the product speak." },
    { name: "Lumen Architecture", category: "Web & Print", year: "2024", description: "Designing a digital presence that mirrors the firm's commitment to light, space, and structural honesty in every project." },
    { name: "Onward Coffee", category: "Packaging & Brand", year: "2023", description: "From bean sourcing to shelf placement, we built a brand system that communicates craft without pretension." },
    { name: "The Civic Journal", category: "Editorial Design", year: "2023", description: "A quarterly publication redesign focused on readability, typographic hierarchy, and respect for long-form journalism." },
  ];

  const teamMembers = [
    { name: "Elara Voss", role: "Founder & Creative Director", bio: "Fifteen years shaping brands that endure. Previously at Pentagram and Collins." },
    { name: "Marcus Chen", role: "Design Lead", bio: "Typographer and systems thinker. Believes every pixel carries weight." },
    { name: "Sofia Andersson", role: "Strategy Director", bio: "Turns market complexity into brand clarity. MBA from Stockholm School of Economics." },
    { name: "James Okafor", role: "Senior Designer", bio: "Print-first designer who brings tactile sensibility to digital work." },
  ];

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'Sora', sans-serif" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Navigation */}
      <nav className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <span className="text-xl font-semibold tracking-tight">Clarity Studio</span>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <span
                key={item.label}
                className="text-sm font-medium cursor-pointer"
                style={{
                  textDecoration: item.active ? "underline" : "none",
                  textUnderlineOffset: "6px",
                  textDecorationThickness: "2px",
                }}
              >
                {item.label}
              </span>
            ))}
          </div>
          <span className="text-sm font-medium underline cursor-pointer" style={{ textUnderlineOffset: "6px" }}>
            Start a Project
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-32 md:py-44">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          We remove everything unnecessary until only the truth of your brand remains.
        </h1>
        <p className="mt-8 text-lg font-light max-w-2xl leading-relaxed" style={{ color: "#555" }}>
          Clarity Studio is a branding and design agency for companies that believe
          less is the only honest answer. Founded in 2018, based in Brooklyn.
        </p>
      </section>

      {/* Selected Work */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-black/10">
        <h2 className="text-xs font-semibold uppercase tracking-widest mb-16">Selected Work</h2>
        <div className="space-y-16">
          {projects.map((project, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-8 items-start group cursor-pointer">
              <div className="aspect-[4/3] bg-neutral-100 flex items-center justify-center">
                <span className="text-sm font-light" style={{ color: "#999" }}>
                  {project.category} — {project.year}
                </span>
              </div>
              <div className="py-4">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">{project.name}</h3>
                <p className="text-base font-light leading-relaxed mb-4" style={{ color: "#444" }}>
                  {project.description}
                </p>
                <span className="text-sm font-medium underline" style={{ textUnderlineOffset: "4px" }}>
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
        <h2 className="text-xs font-semibold uppercase tracking-widest mb-16">Our Approach</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Listen First</h3>
            <p className="text-sm font-light leading-relaxed" style={{ color: "#555" }}>
              Every engagement begins with deep immersion. We interview stakeholders, audit existing
              assets, study your market, and identify the gap between perception and ambition. No
              assumptions, no templates.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Reduce to Essence</h3>
            <p className="text-sm font-light leading-relaxed" style={{ color: "#555" }}>
              We challenge every element. If a color, word, or layout does not serve a clear purpose,
              it goes. What remains is a brand system that communicates with precision and confidence.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Build to Last</h3>
            <p className="text-sm font-light leading-relaxed" style={{ color: "#555" }}>
              Trends fade. We design brand systems with enough structure to maintain consistency and
              enough flexibility to evolve. Every deliverable comes with documentation and guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
        <h2 className="text-xs font-semibold uppercase tracking-widest mb-16">The Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, i) => (
            <div key={i}>
              <div className="aspect-square bg-neutral-100 mb-5" />
              <h3 className="text-base font-semibold">{member.name}</h3>
              <p className="text-sm font-medium mt-1" style={{ color: "#777" }}>{member.role}</p>
              <p className="text-sm font-light mt-3 leading-relaxed" style={{ color: "#555" }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-black/10">
        <h2 className="text-xs font-semibold uppercase tracking-widest mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl md:text-3xl font-semibold leading-snug">
              Have a project in mind? We would love to hear about it.
            </p>
            <p className="mt-6 text-sm font-light leading-relaxed" style={{ color: "#555" }}>
              We take on a limited number of projects each quarter to ensure every client
              receives our full attention. Reach out early and let us explore what is possible.
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest block mb-2">Name</label>
              <div className="border-b border-black/20 pb-2 text-sm font-light" style={{ color: "#999" }}>
                Your full name
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest block mb-2">Email</label>
              <div className="border-b border-black/20 pb-2 text-sm font-light" style={{ color: "#999" }}>
                you@company.com
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-widest block mb-2">Message</label>
              <div className="border-b border-black/20 pb-2 text-sm font-light" style={{ color: "#999" }}>
                Tell us about your project
              </div>
            </div>
            <div className="pt-4">
              <span className="text-sm font-semibold underline cursor-pointer" style={{ textUnderlineOffset: "4px" }}>
                Send Message
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <span className="text-lg font-semibold">Clarity Studio</span>
            <p className="text-xs font-light mt-2" style={{ color: "#777" }}>
              Branding & Design — Brooklyn, NY
            </p>
          </div>
          <div className="mt-6 md:mt-0 text-right">
            <p className="text-xs font-light" style={{ color: "#777" }}>
              hello@claritystudio.com
            </p>
            <p className="text-xs font-light mt-1" style={{ color: "#777" }}>
              &copy; 2024 Clarity Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
