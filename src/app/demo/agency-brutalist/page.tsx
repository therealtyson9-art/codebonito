export const dynamic = "force-dynamic";
export default function AgencyBrutalistDemo() {
  const navBlocks = [
    { label: "ANTI-PORTFOLIO", color: "#dfff00", textColor: "#000" },
    { label: "MANIFESTO", color: "#000", textColor: "#dfff00" },
    { label: "HUMANS", color: "#dfff00", textColor: "#000" },
    { label: "CONTACT", color: "#000", textColor: "#dfff00" },
  ];

  const projects = [
    { title: "SONIC TOOTHPASTE REBRAND", client: "ORAL FUTURES INC.", year: "2024", description: "Turned a boring oral care brand into a sensory assault. Packaging that vibrates on the shelf. Sales up 340%." },
    { title: "ANTI-BILLBOARD CAMPAIGN", client: "CITY OF PORTLAND", year: "2024", description: "Blank billboards with QR codes that led to a 404 page. The 404 page went viral. 2.1 million visits in 48 hours." },
    { title: "BRUTALIST WEDDING INVITES", client: "SELF-INITIATED", year: "2023", description: "Concrete-textured paper, exposed staples, industrial typography. The most beautiful ugly thing you have ever held." },
    { title: "GLITCH FASHION LOOKBOOK", client: "WRECK APPAREL", year: "2023", description: "Deliberately corrupted image files as the aesthetic. Every page is a different kind of broken. Sold out the entire collection." },
    { title: "NOISE RESTAURANT MENU", client: "FRKN BURGERS", year: "2023", description: "A menu designed to be unreadable. Customers had to ask staff what everything was. Average ticket time doubled. Tips tripled." },
  ];

  const team = [
    { name: "ZARA VOLK", role: "FOUNDER / CHIEF DISRUPTOR", bio: "Ex-art school dropout who accidentally built an agency. Believes good taste is the enemy of great work." },
    { name: "KODA MATSUI", role: "LEAD DESIGNER / CHAOS ARCHITECT", bio: "Banned from three design conferences. Portfolio is a ZIP file of screenshots. Makes things that make people uncomfortable." },
    { name: "REN OSEI", role: "STRATEGIST / PROFESSIONAL CONTRARIAN", bio: "Asks why until clients cry. Then asks why they are crying. Results follow." },
    { name: "JULES THORNE", role: "DEVELOPER / PIXEL VANDAL", bio: "Writes CSS that breaks on purpose. Websites that work perfectly but look like they should not." },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Oswald', sans-serif", backgroundColor: "#dfff00" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap&family=Inter:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* Block Nav */}
      <nav className="border-b-4 border-black">
        <div className="flex flex-col md:flex-row">
          <div className="border-b-4 md:border-b-0 md:border-r-4 border-black px-6 py-4 flex items-center">
            <span className="text-2xl font-bold tracking-tight">DISRUPTION LAB</span>
          </div>
          {navBlocks.map((block) => (
            <div
              key={block.label}
              className="border-b-4 md:border-b-0 md:border-r-4 border-black px-6 py-4 cursor-pointer flex items-center"
              style={{ backgroundColor: block.color, color: block.textColor }}
            >
              <span className="text-sm font-bold tracking-wider">{block.label}</span>
            </div>
          ))}
        </div>
      </nav>

      {/* Screaming Hero */}
      <section className="border-b-4 border-black px-6 py-24 md:py-36">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase leading-none tracking-tight">
            WE MAKE THE THINGS YOUR BOARD WILL HATE AND YOUR CUSTOMERS WILL LOVE
          </h1>
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="border-4 border-black px-8 py-3 text-lg font-bold uppercase cursor-pointer hover:bg-black hover:text-yellow-300" style={{ backgroundColor: "#dfff00" }}>
              SEE THE CHAOS
            </div>
            <div className="border-4 border-black px-8 py-3 text-lg font-bold uppercase cursor-pointer bg-black" style={{ color: "#dfff00" }}>
              HIRE US (IF YOU DARE)
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Portfolio */}
      <section className="border-b-4 border-black px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-12 border-b-4 border-black pb-4">
            ANTI-PORTFOLIO
          </h2>
          <div className="space-y-0">
            {projects.map((project, i) => (
              <div key={i} className="border-4 border-black p-6 md:p-8 cursor-pointer" style={{ backgroundColor: i % 2 === 0 ? "#000" : "#dfff00", color: i % 2 === 0 ? "#dfff00" : "#000" }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-3xl font-bold uppercase">{project.title}</h3>
                    <p className="text-sm font-medium mt-1 uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {project.client} — {project.year}
                    </p>
                  </div>
                  <div className="md:max-w-md">
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="border-b-4 border-black px-6 py-20 bg-black" style={{ color: "#dfff00" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-10">OUR MANIFESTO</h2>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            <p>
              GOOD DESIGN IS INVISIBLE. WE DO NOT MAKE GOOD DESIGN. WE MAKE DESIGN THAT GRABS YOU BY THE COLLAR AND REFUSES TO LET GO.
            </p>
            <p>
              EVERY BRIEF IS A CAGE. OUR JOB IS TO RATTLE IT UNTIL SOMETHING INTERESTING FALLS OUT. COMFORT IS THE ENEMY OF MEMORABLE WORK.
            </p>
            <p>
              WE BELIEVE THE BEST BRANDS ARE NOT POLISHED. THEY ARE HONEST. ROUGH EDGES TELL THE TRUTH THAT GRADIENTS NEVER WILL.
            </p>
            <p>
              IF YOUR COMPETITOR CAN RUN YOUR AD WITH THEIR LOGO, YOUR AD IS WORTHLESS. WE MAKE WORK THAT COULD ONLY BELONG TO YOU.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b-4 border-black px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-12">THE HUMANS</h2>
          <div className="grid md:grid-cols-2 gap-0">
            {team.map((member, i) => (
              <div key={i} className="border-4 border-black p-6" style={{ backgroundColor: i % 2 === 1 ? "#000" : "#dfff00", color: i % 2 === 1 ? "#dfff00" : "#000" }}>
                <div className="aspect-[3/2] border-4 border-current mb-4 flex items-center justify-center">
                  <span className="text-6xl font-bold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold uppercase">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wider mt-1">{member.role}</p>
                <p className="text-sm mt-3 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brutal Contact */}
      <section className="border-b-4 border-black px-6 py-16 bg-black" style={{ color: "#dfff00" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8">SEND US YOUR WORST BRIEF</h2>
          <div className="space-y-6">
            <div className="border-4 px-4 py-3" style={{ borderColor: "#dfff00" }}>
              <span className="text-sm font-bold uppercase block mb-1">YOUR NAME (OR ALIAS)</span>
              <span className="text-sm opacity-60" style={{ fontFamily: "'Inter', sans-serif" }}>Type here...</span>
            </div>
            <div className="border-4 px-4 py-3" style={{ borderColor: "#dfff00" }}>
              <span className="text-sm font-bold uppercase block mb-1">EMAIL (WE WILL RESPOND WITHIN 24H OR NEVER)</span>
              <span className="text-sm opacity-60" style={{ fontFamily: "'Inter', sans-serif" }}>you@somewhere.com</span>
            </div>
            <div className="border-4 px-4 py-3" style={{ borderColor: "#dfff00" }}>
              <span className="text-sm font-bold uppercase block mb-1">YOUR IMPOSSIBLE BRIEF</span>
              <span className="text-sm opacity-60" style={{ fontFamily: "'Inter', sans-serif" }}>Tell us something that would make a normal agency run...</span>
            </div>
            <div className="border-4 px-8 py-4 text-lg font-bold uppercase cursor-pointer text-center" style={{ backgroundColor: "#dfff00", color: "#000", borderColor: "#dfff00" }}>
              SUBMIT (NO TAKEBACKS)
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xl font-bold uppercase">DISRUPTION LAB</span>
            <p className="text-xs font-bold uppercase mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
              PORTLAND, OR — EST. 2019 — NO AWARDS (ON PURPOSE)
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              CHAOS@DISRUPTIONLAB.CO
            </p>
            <p className="text-xs font-bold uppercase mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
              &copy; 2024 DISRUPTION LAB. STEAL OUR WORK. WE DARE YOU.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
