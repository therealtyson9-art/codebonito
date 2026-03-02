export const dynamic = "force-dynamic";
export default function ConsultingBrutalistDemo() {
  const industries = [
    { name: "RETAIL", desc: "We tore apart a legacy department store chain's operations and rebuilt them for the DTC era. Revenue up 210%.", icon: "🏬" },
    { name: "FINTECH", desc: "Took a stagnant banking app and turned it into the fastest-growing neobank in Latin America in 14 months.", icon: "💳" },
    { name: "HEALTHCARE", desc: "Demolished a hospital network's 1990s patient flow model and built a system that cut wait times by 68%.", icon: "🏥" },
    { name: "LOGISTICS", desc: "Rewired a freight company's entire routing system. They now move 40% more cargo with the same fleet.", icon: "🚛" },
  ];

  const results = [
    { number: "$3.1B", label: "VALUE CREATED" },
    { number: "412", label: "COMPANIES TRANSFORMED" },
    { number: "68%", label: "AVG COST REDUCTION" },
    { number: "14", label: "COUNTRIES" },
  ];

  const methodology = [
    { phase: "01", name: "DEMOLISH", desc: "We rip apart your current model. No sacred cows. We find every assumption that is costing you money and expose it." },
    { phase: "02", name: "REBUILD", desc: "We design a new operating model from scratch, pressure-tested against your market reality and growth ambitions." },
    { phase: "03", name: "IGNITE", desc: "We don't leave you with a deck. We embed with your team and execute until the numbers move." },
  ];

  const testimonials = [
    { quote: "BLAZE walked in, told us everything we were doing wrong, and then actually fixed it. Revenue doubled in 11 months.", author: "CEO, Series C SaaS Company" },
    { quote: "They don't sugarcoat anything. That's exactly what we needed. Our board was finally hearing the truth.", author: "CFO, Public Retail Chain" },
    { quote: "I've worked with McKinsey, BCG, and Deloitte. BLAZE delivered more in 90 days than all of them combined.", author: "COO, Healthcare Network" },
  ];

  const founders = [
    { name: "RICO BLAZE", title: "Co-Founder & CEO", bio: "Ex-BCG. Left big consulting because he was tired of billing for PowerPoint. Built three companies before founding BLAZE." },
    { name: "TANYA KOVAL", title: "Co-Founder & COO", bio: "Former Amazon GM. Ran operations for a $2B division. Joins every engagement personally for the first 30 days." },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Secular+One&family=Inter:wght@400;500&display=swap" rel="stylesheet" />

      <div style={{ backgroundColor: "#f97316", color: "#000000" }}>
        {/* Block Nav */}
        <nav className="flex items-center justify-between px-6 py-4 border-b-4 border-black">
          <span style={{ fontFamily: "'Secular One', sans-serif", fontSize: "24px" }}>BLAZE</span>
          <div className="hidden md:flex gap-6 text-sm font-medium uppercase">
            <a href="#">Industries</a>
            <a href="#">Results</a>
            <a href="#">Method</a>
            <a href="#">Founders</a>
          </div>
          <button className="px-5 py-2 bg-black text-white text-sm font-medium uppercase">Book a Session</button>
        </nav>

        {/* Manifesto Hero */}
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <h1 style={{ fontFamily: "'Secular One', sans-serif", fontSize: "56px", lineHeight: 1.1 }} className="mb-8">YOUR BUSINESS<br />IS BROKEN.<br />WE FIX IT.</h1>
          <p className="text-lg max-w-2xl mb-8 leading-relaxed">BLAZE Consulting doesn&apos;t polish what&apos;s already failing. We tear down what isn&apos;t working and rebuild it stronger, faster, and leaner. If you want comfort, hire someone else. If you want results, call us.</p>
          <button className="px-8 py-4 bg-black text-white text-sm font-medium uppercase tracking-wider">Get Blazed</button>
        </section>

        {/* Industries We Wreck */}
        <section className="px-6 py-16 border-t-4 border-black">
          <h2 style={{ fontFamily: "'Secular One', sans-serif", fontSize: "32px" }} className="text-center mb-12">INDUSTRIES WE WRECK (AND REBUILD)</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {industries.map((ind) => (
              <div key={ind.name} className="border-4 border-black p-8 bg-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{ind.icon}</span>
                  <h3 style={{ fontFamily: "'Secular One', sans-serif", fontSize: "22px" }}>{ind.name}</h3>
                </div>
                <p className="text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="px-6 py-16 bg-black text-white">
          <h2 style={{ fontFamily: "'Secular One', sans-serif", fontSize: "32px" }} className="text-center mb-12" >THE NUMBERS DON&apos;T LIE</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((r) => (
              <div key={r.label} className="text-center">
                <div style={{ fontFamily: "'Secular One', sans-serif", fontSize: "42px", color: "#f97316" }}>{r.number}</div>
                <div className="text-xs uppercase tracking-wider mt-2" style={{ color: "#9ca3af" }}>{r.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="px-6 py-16 border-t-4 border-black">
          <h2 style={{ fontFamily: "'Secular One', sans-serif", fontSize: "32px" }} className="text-center mb-12">THE BLAZE METHOD</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {methodology.map((m) => (
              <div key={m.phase} className="border-4 border-black p-8 flex gap-8 items-start">
                <span style={{ fontFamily: "'Secular One', sans-serif", fontSize: "48px", lineHeight: 1 }}>{m.phase}</span>
                <div>
                  <h3 style={{ fontFamily: "'Secular One', sans-serif", fontSize: "22px" }} className="mb-2">{m.name}</h3>
                  <p className="text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 py-16 border-t-4 border-black">
          <h2 style={{ fontFamily: "'Secular One', sans-serif", fontSize: "32px" }} className="text-center mb-12">WHAT CLIENTS SAY</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {testimonials.map((t) => (
              <div key={t.author} className="border-4 border-black p-8 bg-white">
                <p className="text-base leading-relaxed mb-4" style={{ fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
                <p className="text-xs uppercase tracking-wider font-medium" style={{ color: "#6b7280" }}>&mdash; {t.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Founders */}
        <section className="px-6 py-16 border-t-4 border-black">
          <h2 style={{ fontFamily: "'Secular One', sans-serif", fontSize: "32px" }} className="text-center mb-12">THE FOUNDERS</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {founders.map((f) => (
              <div key={f.name} className="border-4 border-black p-8 bg-white">
                <div className="w-full h-40 mb-6 bg-black flex items-center justify-center">
                  <span className="text-5xl">🔥</span>
                </div>
                <h3 style={{ fontFamily: "'Secular One', sans-serif", fontSize: "20px" }} className="mb-1">{f.name}</h3>
                <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "#6b7280" }}>{f.title}</p>
                <p className="text-sm leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Book a Session CTA */}
        <section className="px-6 py-20 bg-black text-center">
          <h2 style={{ fontFamily: "'Secular One', sans-serif", fontSize: "36px", color: "#f97316" }} className="mb-6">STOP OPTIMIZING.<br />START TRANSFORMING.</h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "#9ca3af" }}>Book a 30-minute no-BS session with a BLAZE founder. If we can&apos;t find $1M in value in the first call, we&apos;ll buy you dinner.</p>
          <button className="px-10 py-4 text-sm font-medium uppercase tracking-wider" style={{ backgroundColor: "#f97316", color: "#000" }}>Book a Session</button>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-black px-6 py-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <span style={{ fontFamily: "'Secular One', sans-serif", fontSize: "16px" }}>BLAZE CONSULTING</span>
            <div className="text-xs uppercase tracking-wider flex gap-6">
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="#">Careers</a>
              <a href="#">Legal</a>
            </div>
            <span className="text-xs">&copy; 2026 BLAZE. NO RIGHTS RESERVED. JUST RESULTS.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
