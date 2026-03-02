export const dynamic = "force-dynamic";
export default function MedicalBrutalistDemo() {
  const navLinks = ['SERVICES', 'TEAM', 'EMERGENCY', 'CONTACT']
  const services = [
    { num: '01', title: 'URGENT CARE', desc: 'Walk-in treatment for non-life-threatening injuries and illnesses. No appointment needed.' },
    { num: '02', title: 'PRIMARY CARE', desc: 'Ongoing health management, annual physicals, and preventive screenings.' },
    { num: '03', title: 'DIAGNOSTIC IMAGING', desc: 'X-ray, MRI, and CT scans with same-day results available.' },
    { num: '04', title: 'MENTAL HEALTH', desc: 'Counseling, psychiatric evaluations, and ongoing therapy programs.' },
    { num: '05', title: 'LABORATORY', desc: 'Comprehensive blood panels, pathology, and rapid testing.' },
    { num: '06', title: 'TELEHEALTH', desc: 'Virtual consultations from anywhere. Secure video platform.' },
  ]
  const staff = [
    { name: 'DR. NADIA VOLKOV', role: 'Chief Medical Officer', bio: '22 years in emergency medicine. Former trauma director at Metro General.' },
    { name: 'DR. KWAME ASANTE', role: 'Primary Care Lead', bio: 'Board-certified internist. Specializes in chronic disease management.' },
    { name: 'DR. YUKI TANAKA', role: 'Psychiatrist', bio: 'Harvard Medical School. Focus on anxiety, PTSD, and substance disorders.' },
    { name: 'ALEX RIVERA, PA-C', role: 'Physician Assistant', bio: '8 years urgent care. Certified in advanced cardiac life support.' },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000', fontFamily: "'IBM Plex Mono', monospace", color: '#ffffff' }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=IBM+Plex+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="border-b" style={{ borderColor: '#00ff41' }}>
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-bold" style={{ fontFamily: "'Space Mono', monospace", color: '#00ff41' }}>BLACKBOX_HEALTH</span>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link} href="#" className="text-xs tracking-wider hover:underline underline-offset-4 transition" style={{ color: '#ffffff' }}>{link}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero — text only, huge monospace */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-8" style={{ fontFamily: "'Space Mono', monospace", color: '#00ff41' }}>
          NO FRILLS.<br />JUST MEDICINE.
        </h1>
        <p className="text-sm max-w-xl leading-relaxed mb-10" style={{ color: '#a0a0a0' }}>
          We stripped away the waiting rooms, the paperwork bloat, the unnecessary overhead. What remains is direct, efficient healthcare. Open 7 days. Walk-ins welcome.
        </p>
        <button className="px-6 py-3 text-xs font-bold uppercase tracking-widest border transition hover:text-black" style={{ borderColor: '#00ff41', color: '#00ff41', backgroundColor: 'transparent' }}>
          WALK IN TODAY
        </button>
      </section>

      {/* Services — numbered list, no cards */}
      <section className="border-t" style={{ borderColor: '#333333' }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-12" style={{ fontFamily: "'Space Mono', monospace", color: '#00ff41' }}>// SERVICES</h2>
          <div className="space-y-0">
            {services.map(s => (
              <div key={s.num} className="border-b py-6 grid md:grid-cols-12 gap-4" style={{ borderColor: '#333333' }}>
                <span className="md:col-span-1 text-xs font-bold" style={{ color: '#00ff41' }}>{s.num}</span>
                <h3 className="md:col-span-3 text-sm font-bold" style={{ fontFamily: "'Space Mono', monospace" }}>{s.title}</h3>
                <p className="md:col-span-8 text-xs leading-relaxed" style={{ color: '#a0a0a0' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff — text-only bios */}
      <section className="border-t" style={{ borderColor: '#333333' }}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-12" style={{ fontFamily: "'Space Mono', monospace", color: '#00ff41' }}>// TEAM</h2>
          <div className="grid md:grid-cols-2 gap-0">
            {staff.map(s => (
              <div key={s.name} className="border-b border-r p-6" style={{ borderColor: '#333333' }}>
                <h3 className="text-sm font-bold mb-1" style={{ fontFamily: "'Space Mono', monospace" }}>{s.name}</h3>
                <p className="text-xs mb-3" style={{ color: '#00ff41' }}>{s.role}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#a0a0a0' }}>{s.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency info */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="p-8" style={{ border: '2px solid #ef4444', backgroundColor: '#1a0000' }}>
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'Space Mono', monospace", color: '#ef4444' }}>!! EMERGENCY INFORMATION</h2>
          <p className="text-xs leading-relaxed mb-4" style={{ color: '#ffffff' }}>
            If you are experiencing a life-threatening emergency, call 911 immediately. Our urgent care clinic handles non-critical emergencies during operating hours.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-xs">
            <div>
              <span style={{ color: '#ef4444' }}>EMERGENCY LINE</span>
              <p className="font-bold mt-1">911</p>
            </div>
            <div>
              <span style={{ color: '#ef4444' }}>URGENT CARE HOURS</span>
              <p className="font-bold mt-1">7:00 — 23:00 DAILY</p>
            </div>
            <div>
              <span style={{ color: '#ef4444' }}>NURSE HOTLINE</span>
              <p className="font-bold mt-1">(312) 555-0177</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="border-t" style={{ borderColor: '#333333' }}>
        <div className="max-w-2xl mx-auto px-6 py-20">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-8" style={{ fontFamily: "'Space Mono', monospace", color: '#00ff41' }}>// CONTACT</h2>
          <form className="space-y-4">
            <input type="text" placeholder="NAME_" className="w-full px-4 py-3 text-xs outline-none" style={{ backgroundColor: '#111111', border: '1px solid #333333', color: '#ffffff', fontFamily: "'IBM Plex Mono', monospace" }} />
            <input type="email" placeholder="EMAIL_" className="w-full px-4 py-3 text-xs outline-none" style={{ backgroundColor: '#111111', border: '1px solid #333333', color: '#ffffff', fontFamily: "'IBM Plex Mono', monospace" }} />
            <textarea placeholder="MESSAGE_" rows={4} className="w-full px-4 py-3 text-xs outline-none resize-none" style={{ backgroundColor: '#111111', border: '1px solid #333333', color: '#ffffff', fontFamily: "'IBM Plex Mono', monospace" }} />
            <button type="submit" className="px-6 py-3 text-xs font-bold uppercase tracking-widest border transition" style={{ borderColor: '#00ff41', color: '#00ff41', backgroundColor: 'transparent' }}>
              TRANSMIT
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6" style={{ borderColor: '#333333' }}>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs" style={{ color: '#555555' }}>BLACKBOX_HEALTH — 2180 W Industrial Ave, Chicago IL 60622 — (312) 555-0177</p>
        </div>
      </footer>
    </div>
  )
}
