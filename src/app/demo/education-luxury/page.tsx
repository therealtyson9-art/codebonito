export default function EducationLuxuryDemo() {
  const programs = [
    { name: "Classical Studies", desc: "A rigorous exploration of ancient literature, philosophy, and languages that forms the intellectual foundation of Western thought.", students: 120 },
    { name: "Advanced Sciences", desc: "From molecular biology to astrophysics, our science curriculum pairs theoretical depth with hands-on laboratory research.", students: 185 },
    { name: "Global Diplomacy", desc: "Preparing future leaders through international relations, model UN, and semester-long exchanges with partner academies worldwide.", students: 95 },
    { name: "Fine & Performing Arts", desc: "Conservatory-level instruction in music, theater, visual arts, and dance within a liberal arts framework.", students: 140 },
  ]

  const faculty = [
    { name: "Prof. Eleanor Ashworth", title: "Chair of Classical Studies", credential: "PhD, Oxford University", years: 28, note: "Author of three volumes on Aristotelian ethics and recipient of the Whitford Prize for Teaching Excellence." },
    { name: "Dr. Hendrik van der Berg", title: "Director of Sciences", credential: "PhD, ETH Zurich", years: 19, note: "Former CERN researcher whose particle physics work has been cited over 4,000 times in peer-reviewed journals." },
    { name: "Maestro Lucia Ferretti", title: "Head of Performing Arts", credential: "Juilliard School", years: 22, note: "Internationally acclaimed soprano who has performed at La Scala, the Met, and the Royal Opera House." },
  ]

  const facilities = [
    { name: "Ashworth Library", detail: "120,000 volumes, rare manuscripts dating to the 15th century, and a climate-controlled archive wing." },
    { name: "Pemberton Observatory", detail: "16-inch Cassegrain reflector telescope with digital imaging suite, open for student research nightly." },
    { name: "Blackwell Theater", detail: "650-seat performing arts venue with professional lighting, acoustics, and a dedicated scene shop." },
    { name: "Hartwell Athletic Center", detail: "Olympic-sized pool, indoor track, fencing salle, and a rowing facility on the adjacent river." },
  ]

  const notableAlumni = [
    { name: "Sir Geoffrey Hale", year: "Class of 1934", achievement: "Nobel Laureate in Physics, pioneer of semiconductor research and co-inventor of the integrated circuit." },
    { name: "Margaret Eloise Dunbar", year: "Class of 1952", achievement: "Pulitzer Prize-winning novelist and essayist whose works have been translated into 41 languages." },
    { name: "Ambassador James Worthington", year: "Class of 1971", achievement: "United Nations Under-Secretary-General and architect of three international peace agreements." },
  ]

  return (
    <div className="min-h-screen bg-[#0f0f14] text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
      <head><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap" rel="stylesheet" /></head>

      <nav className="border-b border-[#d4af37]/20">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-lg font-bold text-[#d4af37] tracking-widest">ASHWORTH ACADEMY</span>
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-sm text-neutral-400 hover:text-[#d4af37] cursor-pointer transition-colors">Programs</span>
            <span className="text-sm text-neutral-400 hover:text-[#d4af37] cursor-pointer transition-colors">Faculty</span>
            <span className="text-sm text-neutral-400 hover:text-[#d4af37] cursor-pointer transition-colors">Campus</span>
            <span className="text-sm text-neutral-400 hover:text-[#d4af37] cursor-pointer transition-colors">Alumni</span>
            <button className="h-10 px-6 text-sm font-medium text-[#0f0f14] bg-[#d4af37] hover:bg-[#c9a432] rounded-sm transition-colors">Inquire</button>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-4 py-28 text-center">
        <p className="text-sm text-[#d4af37] tracking-[0.3em] uppercase mb-6">Est. 1892</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Excellence in education<br />since 1892</h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 italic">For over a century, Ashworth Academy has cultivated scholars, artists, and leaders of uncommon character and distinction.</p>
        <div className="flex justify-center space-x-4">
          <button className="h-12 px-8 text-sm font-medium text-[#0f0f14] bg-[#d4af37] hover:bg-[#c9a432] rounded-sm transition-colors">Request Information</button>
          <button className="h-12 px-8 text-sm font-medium text-[#d4af37] border border-[#d4af37]/40 hover:border-[#d4af37] rounded-sm transition-colors">Our Heritage</button>
        </div>
      </section>

      <section className="border-t border-[#d4af37]/10">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <p className="text-sm text-[#d4af37] tracking-[0.2em] uppercase mb-2">Academic Excellence</p>
          <h2 className="text-3xl font-bold mb-12">Elite Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <div key={p.name} className="border border-[#d4af37]/20 rounded-sm p-8 hover:border-[#d4af37]/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <span className="text-xs text-[#d4af37]">{p.students} Students</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#13131a] border-t border-[#d4af37]/10">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <p className="text-sm text-[#d4af37] tracking-[0.2em] uppercase mb-2">Our Scholars</p>
          <h2 className="text-3xl font-bold mb-12">Distinguished Faculty</h2>
          <div className="space-y-8">
            {faculty.map((f) => (
              <div key={f.name} className="border-b border-neutral-800 pb-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{f.name}</h3>
                    <p className="text-sm text-[#d4af37] mb-1">{f.title}</p>
                    <p className="text-xs text-neutral-500">{f.credential} &middot; {f.years} years at Ashworth</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-400 mt-3 leading-relaxed max-w-3xl">{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d4af37]/10">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <p className="text-sm text-[#d4af37] tracking-[0.2em] uppercase mb-2">Our Grounds</p>
          <h2 className="text-3xl font-bold mb-12">Campus Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((f) => (
              <div key={f.name} className="bg-[#13131a] border border-[#d4af37]/15 rounded-sm p-6">
                <h3 className="text-lg font-bold text-[#d4af37] mb-2">{f.name}</h3>
                <p className="text-sm text-neutral-400">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#13131a] border-t border-[#d4af37]/10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-[#d4af37] tracking-[0.2em] uppercase mb-2">Investment in Excellence</p>
          <h2 className="text-3xl font-bold mb-4">Tuition</h2>
          <p className="text-5xl font-bold text-[#d4af37] mb-4">$48,000<span className="text-lg text-neutral-500">/year</span></p>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto">Includes tuition, room and board, all course materials, athletic facilities, and participation in one international exchange program. Merit-based scholarships are available for exceptional candidates.</p>
        </div>
      </section>

      <section className="border-t border-[#d4af37]/10">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <p className="text-sm text-[#d4af37] tracking-[0.2em] uppercase mb-2">Legacy</p>
          <h2 className="text-3xl font-bold mb-12">Notable Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notableAlumni.map((a) => (
              <div key={a.name} className="border border-[#d4af37]/20 rounded-sm p-6">
                <h3 className="text-lg font-bold text-white mb-1">{a.name}</h3>
                <p className="text-xs text-[#d4af37] mb-3">{a.year}</p>
                <p className="text-sm text-neutral-400 leading-relaxed">{a.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d4af37]">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-[#0f0f14] mb-4">Apply for Admission</h2>
          <p className="text-sm text-[#0f0f14]/70 mb-8 max-w-lg mx-auto">Ashworth Academy admits students of exceptional promise and character. The application for the 2026-2027 academic year is now open.</p>
          <button className="h-12 px-10 text-sm font-medium text-[#d4af37] bg-[#0f0f14] hover:bg-[#1a1a24] rounded-sm transition-colors">Begin Your Application</button>
        </div>
      </section>

      <footer className="border-t border-[#d4af37]/10">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-neutral-600">&copy; 2026 Ashworth Academy. All rights reserved.</span>
          <div className="flex space-x-6 text-xs text-neutral-600">
            <span className="hover:text-[#d4af37] cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-[#d4af37] cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-[#d4af37] cursor-pointer transition-colors">Non-Discrimination Policy</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
