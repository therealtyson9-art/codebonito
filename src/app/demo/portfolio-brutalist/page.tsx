export default function PortfolioBrutalistDemo() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'Space Mono', monospace" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>

      {/* NAV */}
      <nav className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold uppercase tracking-widest">MRKV.STUDIO</span>
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-sm uppercase tracking-wider cursor-pointer hover:bg-[#FFE500] px-2 py-1 transition-colors">Work</span>
            <span className="text-sm uppercase tracking-wider cursor-pointer hover:bg-[#FFE500] px-2 py-1 transition-colors">About</span>
            <span className="text-sm uppercase tracking-wider cursor-pointer hover:bg-[#FFE500] px-2 py-1 transition-colors">Process</span>
            <span className="text-sm uppercase tracking-wider cursor-pointer hover:bg-[#FFE500] px-2 py-1 transition-colors">Contact</span>
          </div>
          <span className="bg-black text-white px-4 py-2 text-xs uppercase tracking-widest cursor-pointer hover:bg-[#FFE500] hover:text-black transition-colors">Hire Me</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
          <p className="text-sm uppercase tracking-widest mb-4 text-neutral-500">Digital Designer & Developer // Berlin, DE</p>
          <h1 className="text-5xl md:text-8xl font-bold uppercase leading-none mb-8">
            I BUILD<br />
            <span className="bg-[#FFE500] px-2">DIGITAL</span><br />
            THINGS*
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <p className="text-sm max-w-md border-l-4 border-black pl-4">
              *Websites, apps, brand systems, and digital experiences that refuse to blend in. Based in Berlin. Available worldwide.
            </p>
            <div className="flex items-end">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold">8+</p>
                  <p className="text-xs uppercase tracking-widest text-neutral-500">Years</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">60+</p>
                  <p className="text-xs uppercase tracking-widest text-neutral-500">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">14</p>
                  <p className="text-xs uppercase tracking-widest text-neutral-500">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-12 border-b-4 border-black pb-4 inline-block">SELECTED WORK</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              { num: "001", title: "VOLTA ENERGY", type: "BRAND IDENTITY + WEB", year: "2025", desc: "Complete rebrand for a Berlin-based renewable energy startup. New visual system, website, and marketing collateral that broke industry conventions." },
              { num: "002", title: "NEON RECORDS", type: "E-COMMERCE + UI", year: "2025", desc: "Online record store with a brutalist interface. Custom filtering system, vinyl preview player, and a checkout flow that actually works." },
              { num: "003", title: "ARCH COLLECTIVE", type: "PORTFOLIO SITE", year: "2024", desc: "Architecture firm portfolio featuring full-bleed imagery, project timelines, and an interactive building explorer built with Three.js." },
              { num: "004", title: "PULSE FITNESS", type: "APP DESIGN", year: "2024", desc: "Workout tracking app with bold typography and high-contrast UI. Designed for readability mid-rep. 50k downloads in the first month." },
            ].map((project) => (
              <div key={project.num} className="border-4 border-black p-6 hover:bg-[#FFE500] transition-colors cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs tracking-widest text-neutral-400 group-hover:text-black">{project.num}</span>
                  <span className="text-xs tracking-widest">{project.year}</span>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-2">{project.title}</h3>
                <p className="text-xs uppercase tracking-widest mb-4 text-neutral-500 group-hover:text-black">{project.type}</p>
                <p className="text-sm leading-relaxed">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / SKILLS */}
      <section className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="border-4 border-black p-8">
            <h2 className="text-3xl font-bold uppercase tracking-wider mb-6">ABOUT</h2>
            <p className="text-sm leading-relaxed mb-4">
              I am Mika Volkov, a multidisciplinary designer and developer with 8 years of experience crafting digital products that challenge the status quo. I do not do safe. I do not do boring.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              Previously at Studio Feixen, Huge Inc., and R/GA. Now independent and selective about the projects I take on. If your brief says &quot;clean and corporate,&quot; I am probably not your person.
            </p>
            <p className="text-sm leading-relaxed">
              If your brief says &quot;we want something no one has seen before&quot; -- let us talk.
            </p>
          </div>
          <div className="border-4 border-black border-l-0 md:border-l-0 p-8 bg-black text-white">
            <h2 className="text-3xl font-bold uppercase tracking-wider mb-6">TOOLS</h2>
            <div className="space-y-3">
              {[
                { skill: "FIGMA / DESIGN SYSTEMS", level: "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591 90%" },
                { skill: "REACT / NEXT.JS", level: "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591 85%" },
                { skill: "THREE.JS / WEBGL", level: "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591\u2591 70%" },
                { skill: "MOTION / GSAP", level: "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591\u2591 75%" },
                { skill: "TYPESCRIPT", level: "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591\u2591 85%" },
                { skill: "BRAND STRATEGY", level: "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2591\u2591 90%" },
              ].map((s) => (
                <div key={s.skill}>
                  <p className="text-xs uppercase tracking-widest mb-1">{s.skill}</p>
                  <p className="text-xs text-[#FFE500]">{s.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b-4 border-black bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-12 border-b-4 border-black pb-4 inline-block">PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { num: "01", title: "DISCOVERY", desc: "We sit down. You talk. I listen. I ask uncomfortable questions about your goals, your audience, and why your current solution is not working." },
              { num: "02", title: "STRATEGY", desc: "Research, competitive analysis, and positioning. I figure out where you sit in the market and where you should be. Then I map the path between the two." },
              { num: "03", title: "EXECUTION", desc: "Design and development happen in parallel. You see progress in real time. No big reveal after six weeks of silence. Iteration is constant." },
              { num: "04", title: "LAUNCH", desc: "We ship it. I stick around for two weeks post-launch to monitor, tweak, and make sure everything holds up under real-world conditions." },
            ].map((step) => (
              <div key={step.num} className="border-4 border-black p-6">
                <span className="text-4xl font-bold text-neutral-300">{step.num}</span>
                <h3 className="text-lg font-bold uppercase mt-4 mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-12">WHAT THEY SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { quote: "Mika delivered something we never could have imagined. The site traffic doubled within a week of launch, and every competitor started copying us.", name: "LENA HARTMANN", role: "CEO, VOLTA ENERGY" },
              { quote: "Working with Mika is like strapping a rocket to your brand. Uncomfortable at first, then exhilarating. Our conversion rate jumped 340% after the redesign.", name: "TOMASZ KROL", role: "FOUNDER, NEON RECORDS" },
              { quote: "Most designers show you what you expect. Mika shows you what you need. The final product was nothing like the brief -- and it was ten times better.", name: "SARAH CHEN", role: "CREATIVE DIRECTOR, ARCH COLLECTIVE" },
            ].map((t) => (
              <div key={t.name} className="border-4 border-black p-6">
                <p className="text-sm leading-relaxed mb-6">&quot;{t.quote}&quot;</p>
                <div className="border-t-4 border-black pt-4">
                  <p className="text-xs font-bold uppercase tracking-widest">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest text-neutral-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FFE500] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4">GOT A PROJECT?</h2>
          <p className="text-sm uppercase tracking-widest mb-8">I am currently accepting new clients for Q3 2026.</p>
          <span className="inline-block bg-black text-white px-8 py-4 text-sm uppercase tracking-widest cursor-pointer hover:bg-white hover:text-black transition-colors border-4 border-black">
            START A CONVERSATION
          </span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-0">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <span className="text-xs uppercase tracking-widest mb-4 md:mb-0">&copy; 2026 MRKV.STUDIO -- ALL RIGHTS RESERVED</span>
          <div className="flex space-x-6">
            <span className="text-xs uppercase tracking-widest cursor-pointer hover:bg-[#FFE500] px-2 py-1 transition-colors">Twitter</span>
            <span className="text-xs uppercase tracking-widest cursor-pointer hover:bg-[#FFE500] px-2 py-1 transition-colors">Dribbble</span>
            <span className="text-xs uppercase tracking-widest cursor-pointer hover:bg-[#FFE500] px-2 py-1 transition-colors">GitHub</span>
            <span className="text-xs uppercase tracking-widest cursor-pointer hover:bg-[#FFE500] px-2 py-1 transition-colors">LinkedIn</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
