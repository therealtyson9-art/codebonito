export default function TechLuxuryDemo() {
  const solutions = [
    { name: "Sentinel", desc: "Continuous endpoint monitoring with behavioral analysis and autonomous threat containment. Detects zero-day exploits before they execute.", tag: "Endpoint" },
    { name: "Cortex SIEM", desc: "Security information and event management that correlates billions of events in real time. Machine learning separates signal from noise.", tag: "Detection" },
    { name: "Vault", desc: "Secrets management and data encryption with quantum-resistant algorithms. Hardware security modules for key ceremonies and certificate lifecycle.", tag: "Encryption" },
    { name: "Perimeter", desc: "Zero-trust network access replacing legacy VPNs. Identity-aware micro-segmentation with continuous posture assessment for every connection.", tag: "Network" },
  ];

  const clients = [
    { name: "Global Defense Corp", sector: "Defense" },
    { name: "Swiss National Bank", sector: "Finance" },
    { name: "Nexus Pharmaceuticals", sector: "Healthcare" },
    { name: "Orbital Aerospace", sector: "Aerospace" },
    { name: "Sovereign Energy", sector: "Energy" },
    { name: "Apex Telecom", sector: "Telecom" },
  ];

  const team = [
    { name: "Dr. Elena Vasquez", role: "Chief Threat Officer", bio: "Former NSA cryptanalyst. 18 years in offensive security research. Led the team that discovered the ShadowGate APT cluster." },
    { name: "Kai Nakamura", role: "VP Engineering", bio: "Built security infrastructure at three unicorn startups. Architect of the Cortex detection engine that processes 4B events daily." },
    { name: "Anya Petrov", role: "Head of SOC", bio: "Managed security operations for NATO CCDCOE. Specializes in nation-state threat intelligence and incident response at scale." },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap&family=Inter:wght@300;400&display=swap" rel="stylesheet" />
      <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#000" }} className="min-h-screen text-white">
        {/* Neon Nav */}
        <nav className="border-b" style={{ borderColor: "rgba(14, 165, 233, 0.15)" }}>
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <span className="text-2xl font-light tracking-widest" style={{ fontFamily: "'Bodoni Moda', serif", color: "#0ea5e9", textShadow: "0 0 20px rgba(14, 165, 233, 0.4)" }}>ZENITH</span>
            <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Intelligence</a>
              <a href="#" className="hover:text-white transition-colors">Solutions</a>
              <a href="#" className="hover:text-white transition-colors">SOC</a>
              <a href="#" className="hover:text-white transition-colors">Clients</a>
              <a href="#" className="hover:text-white transition-colors">Research</a>
            </div>
            <a href="#" className="text-xs uppercase tracking-widest border px-5 py-2.5 font-light transition-all hover:bg-white/5" style={{ borderColor: "#0ea5e9", color: "#0ea5e9", textShadow: "0 0 10px rgba(14, 165, 233, 0.3)" }}>Request Demo</a>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(14, 165, 233, 0.08) 0%, transparent 60%)" }}></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] mb-8" style={{ color: "#0ea5e9" }}>Cybersecurity Redefined</p>
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8" style={{ fontFamily: "'Bodoni Moda', serif" }}>
              The threat landscape<br /><em className="font-normal" style={{ color: "#0ea5e9", textShadow: "0 0 30px rgba(14, 165, 233, 0.3)" }}>never sleeps.</em><br />Neither do we.
            </h1>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">Zenith Systems delivers enterprise cybersecurity that operates at machine speed. AI-driven threat detection, autonomous response, and intelligence that stays ahead of adversaries.</p>
            <div className="flex gap-6 justify-center">
              <a href="#" className="px-8 py-4 text-sm uppercase tracking-wider font-light" style={{ backgroundColor: "#0ea5e9", boxShadow: "0 0 25px rgba(14, 165, 233, 0.3)" }}>Schedule Briefing</a>
              <a href="#" className="px-8 py-4 text-sm uppercase tracking-wider font-light border border-gray-700 hover:border-gray-500 transition-colors">View Threat Report</a>
            </div>
          </div>
        </section>

        {/* Threat Intelligence */}
        <section className="py-20 px-6 border-t" style={{ borderColor: "rgba(14, 165, 233, 0.1)" }}>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] mb-4" style={{ color: "#0ea5e9" }}>Threat Intelligence</p>
              <h2 className="text-4xl font-light mb-6" style={{ fontFamily: "'Bodoni Moda', serif" }}>Real-time global threat awareness</h2>
              <p className="text-gray-400 font-light leading-relaxed mb-6">Our intelligence network ingests data from 300+ sources across the dark web, nation-state feeds, and proprietary honeypots. Machine learning models correlate indicators of compromise across your entire attack surface in milliseconds.</p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center"><div className="text-3xl font-light" style={{ color: "#0ea5e9" }}>4.2B</div><div className="text-xs text-gray-500 mt-1">Events / Day</div></div>
                <div className="text-center"><div className="text-3xl font-light" style={{ color: "#0ea5e9" }}>12ms</div><div className="text-xs text-gray-500 mt-1">Avg Detection</div></div>
                <div className="text-center"><div className="text-3xl font-light" style={{ color: "#0ea5e9" }}>99.97%</div><div className="text-xs text-gray-500 mt-1">True Positive</div></div>
              </div>
            </div>
            <div className="h-80 rounded-lg border flex items-center justify-center" style={{ borderColor: "rgba(14, 165, 233, 0.2)", background: "radial-gradient(circle at center, rgba(14, 165, 233, 0.05) 0%, transparent 70%)" }}>
              <p className="text-gray-600 text-sm uppercase tracking-wider">Global Threat Map</p>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-center mb-4" style={{ color: "#0ea5e9" }}>Solutions</p>
            <h2 className="text-4xl font-light text-center mb-16" style={{ fontFamily: "'Bodoni Moda', serif" }}>Defense in depth, automated</h2>
            <div className="grid md:grid-cols-2 gap-px bg-gray-900">
              {solutions.map((s, i) => (
                <div key={i} className="bg-black p-10 hover:bg-gray-950 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] uppercase tracking-widest px-3 py-1 border font-light" style={{ borderColor: "rgba(14, 165, 233, 0.3)", color: "#0ea5e9" }}>{s.tag}</span>
                  </div>
                  <h3 className="text-2xl font-light mb-3" style={{ fontFamily: "'Bodoni Moda', serif" }}>{s.name}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Clients */}
        <section className="py-20 px-6 border-t border-b" style={{ borderColor: "rgba(14, 165, 233, 0.1)" }}>
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.2em] mb-10" style={{ color: "#0ea5e9" }}>Trusted By</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {clients.map((c, i) => (
                <div key={i} className="text-center">
                  <p className="text-sm font-light text-gray-300">{c.name}</p>
                  <p className="text-[10px] uppercase tracking-wider text-gray-600 mt-1">{c.sector}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOC Team */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-center mb-4" style={{ color: "#0ea5e9" }}>Leadership</p>
            <h2 className="text-4xl font-light text-center mb-16" style={{ fontFamily: "'Bodoni Moda', serif" }}>The minds behind the shield</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((t, i) => (
                <div key={i} className="border p-8 hover:bg-gray-950 transition-colors" style={{ borderColor: "rgba(14, 165, 233, 0.15)" }}>
                  <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center text-lg font-light" style={{ border: "1px solid rgba(14, 165, 233, 0.3)", color: "#0ea5e9" }}>{t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}</div>
                  <h3 className="text-lg font-light" style={{ fontFamily: "'Bodoni Moda', serif" }}>{t.name}</h3>
                  <p className="text-xs uppercase tracking-wider mt-1 mb-4" style={{ color: "#0ea5e9" }}>{t.role}</p>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{t.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Demo CTA */}
        <section className="py-24 px-6 relative">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(14, 165, 233, 0.06) 0%, transparent 60%)" }}></div>
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-light mb-6" style={{ fontFamily: "'Bodoni Moda', serif" }}>Ready to see Zenith in action?</h2>
            <p className="text-gray-400 font-light mb-10 leading-relaxed">Schedule a private briefing with our threat intelligence team. We will assess your current posture and demonstrate how Zenith can transform your security operations.</p>
            <a href="#" className="inline-block px-10 py-4 text-sm uppercase tracking-wider font-light" style={{ backgroundColor: "#0ea5e9", boxShadow: "0 0 30px rgba(14, 165, 233, 0.25)" }}>Request Private Demo</a>
            <p className="text-xs text-gray-600 mt-6">All briefings are conducted under NDA. Response within 24 hours.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-12 px-6" style={{ borderColor: "rgba(14, 165, 233, 0.1)" }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-sm font-light tracking-widest" style={{ fontFamily: "'Bodoni Moda', serif", color: "#0ea5e9" }}>ZENITH SYSTEMS</span>
            <div className="flex gap-8 text-xs text-gray-600 uppercase tracking-wider">
              <a href="#" className="hover:text-gray-400">Privacy</a>
              <a href="#" className="hover:text-gray-400">Security</a>
              <a href="#" className="hover:text-gray-400">Compliance</a>
              <a href="#" className="hover:text-gray-400">Responsible Disclosure</a>
            </div>
            <span className="text-xs text-gray-700">&copy; 2026 Zenith Systems</span>
          </div>
        </footer>
      </div>
    </>
  );
}
