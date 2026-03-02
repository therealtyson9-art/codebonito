export const dynamic = "force-dynamic";
export default function StartupLuxuryDemo() {
  const navLinks = ["What We Do", "Solutions", "Results", "Leadership", "Inquire"]

  const solutions = [
    { num: "01", title: "Predictive Intelligence", desc: "We build bespoke machine learning models that forecast market shifts, customer behavior, and operational risks with exceptional precision. Our models are trained on your proprietary data and refined through continuous feedback loops with your executive team." },
    { num: "02", title: "Autonomous Operations", desc: "From supply chain optimization to dynamic pricing, we deploy AI systems that make thousands of micro-decisions per second. Each system is designed with human oversight at critical junctures, ensuring alignment with your strategic vision." },
    { num: "03", title: "Strategic Advisory", desc: "Our partners work directly with C-suite leadership to identify where artificial intelligence creates genuine competitive advantage versus where it introduces unnecessary complexity. Not every problem requires AI. We tell you which ones do." },
  ]

  const caseResults = [
    { client: "Global Private Equity Firm", metric: "340%", desc: "Improvement in deal sourcing accuracy through our proprietary market signal detection system. Reduced due diligence timeline from 14 weeks to 5." },
    { client: "Luxury Hospitality Group", metric: "2.8x", desc: "Increase in guest lifetime value by deploying personalized experience modeling across 42 properties in 16 countries." },
    { client: "Sovereign Wealth Fund", metric: "$1.2B", desc: "In risk-adjusted returns attributed to our portfolio optimization engine over a 36-month engagement." },
  ]

  const leadership = [
    { name: "Isabelle Moreau", title: "Founding Partner", bio: "Former VP of AI Research at DeepMind. PhD in Statistical Learning from ETH Zurich. Advises three Fortune 100 boards on AI strategy." },
    { name: "James Whitfield", title: "Managing Partner", bio: "Two decades in management consulting at McKinsey and BCG. Led digital transformation practices serving $50B+ enterprises across EMEA and APAC." },
    { name: "Dr. Ananya Rao", title: "Chief Science Officer", bio: "Published 80+ papers in Nature and Science on neural architecture. Previously led applied ML at Google Brain. Fellow of the Royal Society." },
  ]

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Fahkwang', sans-serif", backgroundColor: "#0c1222" }}>
      <link href="https://fonts.googleapis.com/css2?family=Fahkwang:wght@300;400;500;600;700&display=swap&family=Inter:wght@300;400&display=swap" rel="stylesheet" />

      {/* Floating Transparent Nav */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <span className="text-xl font-light tracking-widest" style={{ color: "#e8b4a2" }}>LUMINOS AI</span>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <span key={link} className="text-xs tracking-widest cursor-pointer transition-opacity hover:opacity-100" style={{ color: "#e8b4a2", opacity: 0.7 }}>{link}</span>
            ))}
          </div>
          <button className="text-xs tracking-widest px-6 py-2 border" style={{ color: "#e8b4a2", borderColor: "#e8b4a2" }}>
            PARTNER WITH US
          </button>
        </div>
      </nav>

      {/* Abstract Geometric Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="relative w-96 h-96">
            <div className="absolute top-0 left-0 w-64 h-64 border rotate-45" style={{ borderColor: "#e8b4a2" }} />
            <div className="absolute bottom-0 right-0 w-48 h-48 border rotate-12" style={{ borderColor: "#e8b4a2" }} />
            <div className="absolute top-1/4 left-1/3 w-32 h-32 border rounded-full" style={{ borderColor: "#e8b4a2" }} />
            <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border -rotate-30" style={{ borderColor: "#e8b4a2" }} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <p className="text-xs tracking-widest mb-8 font-light" style={{ color: "#e8b4a2", opacity: 0.6 }}>PREMIUM AI CONSULTING</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight mb-8" style={{ color: "#e8b4a2" }}>
            Intelligence,<br />
            <span className="font-semibold">refined.</span>
          </h1>
          <p className="text-base md:text-lg font-light max-w-xl leading-relaxed mb-12" style={{ color: "#e8b4a2", opacity: 0.7, fontFamily: "'Inter', sans-serif" }}>
            Luminos AI partners with the world&apos;s most ambitious organizations to design, build, and deploy artificial intelligence systems of extraordinary precision and lasting strategic value.
          </p>
          <div className="flex gap-6">
            <button className="text-xs tracking-widest px-8 py-3 font-medium" style={{ backgroundColor: "#e8b4a2", color: "#0c1222" }}>
              BEGIN A CONVERSATION
            </button>
            <button className="text-xs tracking-widest px-8 py-3 border font-light" style={{ color: "#e8b4a2", borderColor: "#e8b4a2" }}>
              VIEW OUR WORK
            </button>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-t" style={{ borderColor: "rgba(232, 180, 162, 0.15)" }}>
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <p className="text-xs tracking-widest mb-4 font-light" style={{ color: "#e8b4a2", opacity: 0.5 }}>WHAT WE DO</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight" style={{ color: "#e8b4a2" }}>
                We do not sell software.<br />
                We architect <span className="font-semibold">advantage.</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-base font-light leading-relaxed" style={{ color: "#e8b4a2", opacity: 0.6, fontFamily: "'Inter', sans-serif" }}>
                Every engagement begins with a fundamental question: what decision would transform your business if you could make it with certainty? We work backwards from that answer, building AI systems purpose-engineered for your most consequential challenges. Our clients include sovereign wealth funds, global luxury brands, and private equity firms managing over $400 billion in combined assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="border-t" style={{ borderColor: "rgba(232, 180, 162, 0.15)" }}>
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="space-y-0">
            {solutions.map((solution) => (
              <div key={solution.num} className="grid lg:grid-cols-12 gap-8 py-12 border-b" style={{ borderColor: "rgba(232, 180, 162, 0.1)" }}>
                <span className="lg:col-span-1 text-sm font-light" style={{ color: "#e8b4a2", opacity: 0.4 }}>{solution.num}</span>
                <h3 className="lg:col-span-3 text-2xl font-light tracking-tight" style={{ color: "#e8b4a2" }}>{solution.title}</h3>
                <p className="lg:col-span-8 text-sm font-light leading-relaxed" style={{ color: "#e8b4a2", opacity: 0.6, fontFamily: "'Inter', sans-serif" }}>{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Results */}
      <section className="border-t" style={{ borderColor: "rgba(232, 180, 162, 0.15)" }}>
        <div className="max-w-7xl mx-auto px-8 py-24">
          <p className="text-xs tracking-widest mb-4 font-light" style={{ color: "#e8b4a2", opacity: 0.5 }}>CASE RESULTS</p>
          <h2 className="text-4xl font-light tracking-tight mb-16" style={{ color: "#e8b4a2" }}>
            Measured in outcomes,<br />not deliverables.
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {caseResults.map((result) => (
              <div key={result.client}>
                <span className="text-5xl md:text-6xl font-light block mb-4" style={{ color: "#e8b4a2" }}>{result.metric}</span>
                <h3 className="text-sm tracking-wider font-medium mb-3" style={{ color: "#e8b4a2" }}>{result.client}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#e8b4a2", opacity: 0.5, fontFamily: "'Inter', sans-serif" }}>{result.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t" style={{ borderColor: "rgba(232, 180, 162, 0.15)" }}>
        <div className="max-w-7xl mx-auto px-8 py-24">
          <p className="text-xs tracking-widest mb-4 font-light" style={{ color: "#e8b4a2", opacity: 0.5 }}>LEADERSHIP</p>
          <h2 className="text-4xl font-light tracking-tight mb-16" style={{ color: "#e8b4a2" }}>
            Exceptional minds,<br />singular focus.
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {leadership.map((person) => (
              <div key={person.name}>
                <div className="w-full aspect-square mb-6 border" style={{ borderColor: "rgba(232, 180, 162, 0.15)", backgroundColor: "rgba(232, 180, 162, 0.03)" }} />
                <h3 className="text-lg font-light tracking-tight mb-1" style={{ color: "#e8b4a2" }}>{person.name}</h3>
                <span className="text-xs tracking-widest block mb-4 font-light" style={{ color: "#e8b4a2", opacity: 0.5 }}>{person.title}</span>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#e8b4a2", opacity: 0.5, fontFamily: "'Inter', sans-serif" }}>{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Inquiry */}
      <section className="border-t" style={{ borderColor: "rgba(232, 180, 162, 0.15)" }}>
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="max-w-2xl">
            <p className="text-xs tracking-widest mb-4 font-light" style={{ color: "#e8b4a2", opacity: 0.5 }}>PARTNERSHIP INQUIRY</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 leading-tight" style={{ color: "#e8b4a2" }}>
              Every partnership begins<br />with a conversation.
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={{ color: "#e8b4a2", opacity: 0.6, fontFamily: "'Inter', sans-serif" }}>
              We accept a limited number of new engagements each quarter to ensure every client receives our full attention. If your organization is exploring how AI can create lasting competitive advantage, we would welcome the opportunity to listen.
            </p>
            <div className="space-y-4 max-w-md">
              <input type="text" placeholder="Your name" className="w-full bg-transparent border-b px-0 py-3 text-sm font-light focus:outline-none" style={{ borderColor: "rgba(232, 180, 162, 0.3)", color: "#e8b4a2" }} />
              <input type="email" placeholder="Email address" className="w-full bg-transparent border-b px-0 py-3 text-sm font-light focus:outline-none" style={{ borderColor: "rgba(232, 180, 162, 0.3)", color: "#e8b4a2" }} />
              <input type="text" placeholder="Organization" className="w-full bg-transparent border-b px-0 py-3 text-sm font-light focus:outline-none" style={{ borderColor: "rgba(232, 180, 162, 0.3)", color: "#e8b4a2" }} />
            </div>
            <button className="mt-10 text-xs tracking-widest px-10 py-4 font-medium" style={{ backgroundColor: "#e8b4a2", color: "#0c1222" }}>
              REQUEST A CONVERSATION
            </button>
          </div>
        </div>
      </section>

      {/* Refined Footer */}
      <footer className="border-t" style={{ borderColor: "rgba(232, 180, 162, 0.15)" }}>
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-sm tracking-widest font-light" style={{ color: "#e8b4a2" }}>LUMINOS AI</span>
            <p className="text-xs font-light mt-1" style={{ color: "#e8b4a2", opacity: 0.3, fontFamily: "'Inter', sans-serif" }}>Intelligence, refined.</p>
          </div>
          <div className="flex gap-8">
            {["LinkedIn", "Privacy", "Terms"].map((link) => (
              <span key={link} className="text-xs tracking-widest cursor-pointer font-light" style={{ color: "#e8b4a2", opacity: 0.4 }}>{link}</span>
            ))}
          </div>
          <span className="text-xs font-light" style={{ color: "#e8b4a2", opacity: 0.3, fontFamily: "'Inter', sans-serif" }}>&copy; 2025 Luminos AI. By invitation only.</span>
        </div>
      </footer>
    </div>
  )
}
