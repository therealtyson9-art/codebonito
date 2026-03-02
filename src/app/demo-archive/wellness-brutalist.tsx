export default function WellnessBrutalistDemo() {
  const programs = [
    { code: "001", name: "INTERMITTENT FASTING", duration: "8-week protocol", desc: "Structured time-restricted eating with progressive fasting windows. Starts at 14:10, advances to 20:4. Includes refeed strategies, electrolyte protocols, and metabolic tracking. Your body already knows how to do this. We just remove the noise.", price: "$297" },
    { code: "002", name: "COLD EXPOSURE", duration: "6-week protocol", desc: "Progressive cold water immersion training from contrast showers to full ice baths. Builds brown fat activation, dopamine response, and mental resilience. Discomfort is the point. Adaptation is the reward.", price: "$247" },
    { code: "003", name: "MOBILITY RESTORATION", duration: "12-week protocol", desc: "Systematic joint-by-joint mobility work based on FRC principles. Controlled articular rotations, progressive angular isometric loading, and end-range strength. Move like you were designed to.", price: "$347" },
    { code: "004", name: "NUTRITION RESET", duration: "4-week protocol", desc: "Elimination diet followed by structured reintroduction. Identify inflammatory triggers, optimize micronutrient status, and build a sustainable eating framework. No meal plans. No supplements. Just food.", price: "$197" },
  ];

  const science = [
    { stat: "72%", desc: "reduction in systemic inflammation markers after 8 weeks of combined fasting and cold protocols (internal cohort study, n=340)" },
    { stat: "3.1x", desc: "increase in brown adipose tissue activation measured via thermal imaging after 6 weeks of progressive cold exposure" },
    { stat: "89%", desc: "of participants report sustained habit change at 6-month follow-up. We do not do quick fixes." },
  ];

  const results = [
    { number: "12,400+", label: "PROTOCOLS COMPLETED" },
    { number: "94%", label: "COMPLETION RATE" },
    { number: "340+", label: "CLINICAL PARTICIPANTS" },
    { number: "0", label: "SUPPLEMENTS SOLD" },
  ];

  const founders = [
    { name: "COLE BRADDOCK", title: "Co-Founder / Movement", bio: "Former D1 wrestler. Spent 8 years in physical therapy before realizing the system was broken. Built RAW BODY to fix what clinics could not -- sustainable, self-directed physical resilience." },
    { name: "DR. NAIA TORRES", title: "Co-Founder / Nutrition", bio: "Functional medicine physician who left her practice because she was tired of treating symptoms. PhD in nutritional biochemistry from Johns Hopkins. Believes food is the intervention." },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <div style={{ fontFamily: "'Darker Grotesque', sans-serif", backgroundColor: "#f0ece2" }} className="min-h-screen text-black">
        {/* Stark Nav */}
        <nav className="border-b-2 border-black">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-3xl font-black tracking-tight">RAW BODY</span>
            <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
              <a href="#" className="hover:underline underline-offset-4">Programs</a>
              <a href="#" className="hover:underline underline-offset-4">Science</a>
              <a href="#" className="hover:underline underline-offset-4">Results</a>
              <a href="#" className="hover:underline underline-offset-4">About</a>
            </div>
            <a href="#" className="text-sm font-black uppercase tracking-widest border-2 border-black px-5 py-2 hover:bg-black hover:text-white transition-colors">Join</a>
          </div>
        </nav>

        {/* Manifesto Hero */}
        <section className="py-24 px-6 border-b-2 border-black">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight mb-8">
              YOUR BODY<br />IS NOT<br />BROKEN.
            </h1>
            <div className="max-w-2xl">
              <p className="text-xl font-medium leading-relaxed mb-6">The wellness industry sells you problems so it can sell you solutions. We do the opposite. We give you protocols grounded in physiology, not marketing. No powders. No gadgets. No gurus.</p>
              <p className="text-xl font-medium leading-relaxed">Just the raw inputs your body has always needed: movement, fasting, cold, and real food.</p>
            </div>
            <a href="#" className="inline-block mt-10 text-lg font-black uppercase tracking-widest border-b-4 border-black pb-1 hover:border-gray-500 transition-colors">SEE THE PROGRAMS &darr;</a>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-12">THE PROTOCOLS</h2>
            <div className="space-y-6">
              {programs.map((p, i) => (
                <div key={i} className="border-2 border-black p-8 hover:bg-white transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs font-black tracking-widest text-gray-500">PROTOCOL {p.code}</span>
                        <span className="text-xs font-bold uppercase tracking-wider border border-black px-2 py-0.5">{p.duration}</span>
                      </div>
                      <h3 className="text-3xl font-black mb-3">{p.name}</h3>
                      <p className="text-base font-medium text-gray-700 leading-relaxed max-w-2xl">{p.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-3xl font-black">{p.price}</span>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">ONE-TIME</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Science */}
        <section className="py-16 px-6 border-t-2 border-black">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4">THE SCIENCE</h2>
            <p className="text-lg font-medium text-gray-600 mb-12 max-w-2xl">We publish our data. Every protocol is tracked, measured, and refined. No proprietary blends. No hand-waving. Here is what the numbers say.</p>
            <div className="space-y-8">
              {science.map((s, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <span className="text-5xl font-black shrink-0 w-28">{s.stat}</span>
                  <p className="text-base font-medium text-gray-700 leading-relaxed pt-2">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-6 bg-black text-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {results.map((r, i) => (
                <div key={i}>
                  <div className="text-5xl md:text-6xl font-black">{r.number}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-black uppercase tracking-tight mb-12">THE FOUNDERS</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {founders.map((f, i) => (
                <div key={i} className="border-2 border-black p-8">
                  <h3 className="text-2xl font-black mb-1">{f.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">{f.title}</p>
                  <p className="text-base font-medium text-gray-700 leading-relaxed">{f.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20 px-6 border-t-2 border-black">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6">STOP OPTIMIZING.<br />START DOING.</h2>
            <p className="text-lg font-medium text-gray-600 mb-10 max-w-xl mx-auto">Pick a protocol. Follow it for the full duration. No hacks, no shortcuts. The only variable is whether you show up.</p>
            <a href="#" className="inline-block text-lg font-black uppercase tracking-widest bg-black text-white px-10 py-4 hover:bg-gray-800 transition-colors">JOIN THE MOVEMENT</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-black py-8 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
            <span className="text-lg font-black text-black">RAW BODY</span>
            <span>&copy; 2026. NO GURUS. NO GIMMICKS.</span>
          </div>
        </footer>
      </div>
    </>
  );
}
