export default function FitnessBrutalistDemo() {
  const programs = [
    { name: "STRENGTH", desc: "Compound lifts. Progressive overload. Barbell fundamentals. Squat, bench, deadlift, overhead press. 4 days a week. No machines. No shortcuts.", sets: "5x5 PROTOCOL" },
    { name: "ENDURANCE", desc: "Long-distance conditioning. Rowing, running, assault bike. Build your aerobic base. Break your mental ceiling. 3-5 sessions per week.", sets: "60-90 MIN SESSIONS" },
    { name: "HIIT", desc: "High intensity interval training. 30 seconds on, 15 seconds off. Kettlebells, battle ropes, box jumps, burpees. Get comfortable being uncomfortable.", sets: "20 MIN CIRCUITS" },
    { name: "POWERLIFTING", desc: "Competition-level coaching. Squat, bench, deadlift specialization. Peaking cycles. Meet preparation. RPE-based programming for serious lifters only.", sets: "12-WEEK CYCLES" },
  ]

  const trainers = [
    { name: "JAKE MORRISON", role: "HEAD COACH / STRENGTH", years: "14 YRS", total: "CSCS, USAW-L2" },
    { name: "NINA KOWALSKI", role: "ENDURANCE / CONDITIONING", years: "9 YRS", total: "NASM-CPT, CF-L3" },
    { name: "RAY SANTOS", role: "HIIT / BOXING", years: "11 YRS", total: "ACE-CPT, USA BOXING" },
    { name: "TASHA OKAFOR", role: "POWERLIFTING / MOBILITY", years: "8 YRS", total: "NSCA-CPT, USAPL" },
  ]

  const rules = [
    "Leave your ego at the door.",
    "Rerack your weights. Every. Single. Time.",
    "Bring a towel. Wipe your equipment down.",
    "No phone calls on the gym floor.",
    "Respect the equipment. Respect the space.",
    "If you're not sweating, you're not working.",
    "Chalk is fine. Chalk clouds are not.",
    "Spot when asked. Ask when needed.",
  ]

  const stats = [
    { number: "2,847", label: "ACTIVE MEMBERS" },
    { number: "142", label: "CLASSES / WEEK" },
    { number: "24/7", label: "ACCESS" },
    { number: "15,000", label: "SQ FT" },
  ]

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700;800&display=swap" rel="stylesheet" />

      {/* Navigation */}
      <nav className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-sm font-bold tracking-widest">BLACKBOX<span className="text-rose-500">_GYM</span></span>
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-xs text-white/50 hover:text-white cursor-pointer">[PROGRAMS]</span>
            <span className="text-xs text-white/50 hover:text-white cursor-pointer">[TRAINERS]</span>
            <span className="text-xs text-white/50 hover:text-white cursor-pointer">[PRICING]</span>
            <span className="text-xs text-white/50 hover:text-white cursor-pointer">[RULES]</span>
          </div>
          <span className="text-xs border border-rose-500 text-rose-500 px-4 py-2 cursor-pointer hover:bg-rose-500 hover:text-black transition-colors">ENTER_</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-none tracking-tighter">
            NO EXCUSES.<br />
            <span className="text-rose-500">NO LIMITS.</span>
          </h1>
          <p className="text-white/40 text-sm mt-8 max-w-lg leading-relaxed">
            Raw iron. Real work. A warehouse gym in Southeast Portland built for people who want results, not aesthetics. We don&apos;t have mirrors. We have platforms.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-16 bg-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-black p-8 text-center">
                <p className="text-3xl font-bold text-rose-500">{stat.number}</p>
                <p className="text-xs text-white/40 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-xs text-white/30 mb-2">// WORKOUT_PROGRAMS</p>
          <h2 className="text-3xl font-bold mb-16">CHOOSE YOUR <span className="text-rose-500">PROTOCOL</span></h2>
          <div className="space-y-px">
            {programs.map((prog) => (
              <div key={prog.name} className="border border-white/10 p-8 hover:border-rose-500/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold">{prog.name}<span className="text-rose-500">_</span></h3>
                    <p className="text-sm text-white/40 mt-3 leading-relaxed max-w-2xl">{prog.desc}</p>
                  </div>
                  <span className="text-xs border border-white/20 px-4 py-2 text-white/50 self-start whitespace-nowrap">{prog.sets}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Registry */}
      <section className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-xs text-white/30 mb-2">// TRAINER_REGISTRY</p>
          <h2 className="text-3xl font-bold mb-16">THE <span className="text-rose-500">ROSTER</span></h2>
          <div className="border border-white/20">
            <div className="grid grid-cols-4 gap-px bg-white/10 text-xs text-white/30 p-4 border-b border-white/20">
              <span>NAME</span><span>SPECIALTY</span><span>EXPERIENCE</span><span>CERTS</span>
            </div>
            {trainers.map((t) => (
              <div key={t.name} className="grid grid-cols-4 gap-px p-4 border-b border-white/5 hover:bg-white/5 transition-colors">
                <span className="text-sm font-bold">{t.name}</span>
                <span className="text-sm text-white/50">{t.role}</span>
                <span className="text-sm text-rose-500">{t.years}</span>
                <span className="text-xs text-white/30">{t.total}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-xs text-white/30 mb-2">// MEMBERSHIP_TIERS</p>
          <h2 className="text-3xl font-bold mb-16">RAW <span className="text-rose-500">PRICING</span></h2>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            <div className="bg-black p-8 border border-white/10">
              <p className="text-xs text-white/30 mb-4">TIER_01</p>
              <h3 className="text-xl font-bold">OPEN FLOOR</h3>
              <p className="text-4xl font-bold text-rose-500 mt-4">$35<span className="text-sm text-white/30">/mo</span></p>
              <p className="text-xs text-white/40 mt-4 leading-relaxed">Gym floor access. Free weights. Cardio equipment. No classes. No frills.</p>
            </div>
            <div className="bg-black p-8 border border-rose-500">
              <p className="text-xs text-rose-500 mb-4">TIER_02 [RECOMMENDED]</p>
              <h3 className="text-xl font-bold">FULL ACCESS</h3>
              <p className="text-4xl font-bold text-rose-500 mt-4">$65<span className="text-sm text-white/30">/mo</span></p>
              <p className="text-xs text-white/40 mt-4 leading-relaxed">Everything. All classes. All hours. Locker. Open gym. Programming included.</p>
            </div>
            <div className="bg-black p-8 border border-white/10">
              <p className="text-xs text-white/30 mb-4">TIER_03</p>
              <h3 className="text-xl font-bold">COACHED</h3>
              <p className="text-4xl font-bold text-rose-500 mt-4">$120<span className="text-sm text-white/30">/mo</span></p>
              <p className="text-xs text-white/40 mt-4 leading-relaxed">Full access + 4 PT sessions/month. Custom programming. Nutrition consult. Priority booking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-xs text-white/30 mb-2">// GYM_RULES.txt</p>
          <h2 className="text-3xl font-bold mb-16">THE <span className="text-rose-500">CODE</span></h2>
          <div className="grid md:grid-cols-2 gap-4">
            {rules.map((rule, i) => (
              <div key={i} className="flex items-start gap-4 border border-white/5 p-4">
                <span className="text-rose-500 text-xs font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-white/70">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-sm font-bold tracking-widest">BLACKBOX<span className="text-rose-500">_GYM</span></span>
            <p className="text-xs text-white/20 mt-2">1847 SE Industrial Way, Portland, OR 97202</p>
          </div>
          <div className="text-xs text-white/30 space-x-6">
            <span className="cursor-pointer hover:text-white">INSTAGRAM</span>
            <span className="cursor-pointer hover:text-white">YOUTUBE</span>
            <span className="cursor-pointer hover:text-white">(503) 555-0199</span>
          </div>
          <p className="text-xs text-white/10">&copy; 2026 BLACKBOX_GYM. NO RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  )
}
