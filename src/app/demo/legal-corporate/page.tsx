export const dynamic = "force-dynamic";
export default function LegalCorporateDemo() {
  const practiceAreas = [
    { icon: '⚖️', title: 'Corporate Law', desc: 'Mergers, acquisitions, and governance advisory' },
    { icon: '🏛️', title: 'Litigation', desc: 'Complex commercial and civil dispute resolution' },
    { icon: '📜', title: 'Real Estate', desc: 'Transactions, development, and land use' },
    { icon: '💼', title: 'Employment', desc: 'Workplace compliance and executive agreements' },
  ]
  const caseResults = [
    { value: '$240M', label: 'Largest Settlement' },
    { value: '97%', label: 'Success Rate' },
    { value: '500+', label: 'Cases Won' },
    { value: '35', label: 'Years of Practice' },
  ]
  const attorneys = [
    { name: 'Margaret Whitfield', title: 'Managing Partner', credentials: 'Harvard Law, JD | Bar: NY, CA, DC' },
    { name: 'David Nakamura', title: 'Senior Partner', credentials: 'Yale Law, JD | Bar: NY, IL' },
    { name: 'Isabelle Fontaine', title: 'Partner', credentials: 'Columbia Law, JD | Bar: NY, NJ' },
    { name: 'Charles Okonkwo', title: 'Partner', credentials: 'Georgetown Law, JD | Bar: DC, VA, MD' },
  ]
  const publications = [
    { title: 'Navigating Cross-Border M&A in 2025', date: 'January 15, 2025' },
    { title: 'Employment Law Changes Under New Federal Guidelines', date: 'December 3, 2024' },
    { title: 'Real Estate Due Diligence: A Comprehensive Framework', date: 'November 18, 2024' },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#faf8f5', fontFamily: "'Source Serif 4', serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Source+Serif+4:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav style={{ backgroundColor: '#1e3a5f' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-wide" style={{ fontFamily: "'Playfair Display', serif", color: '#c9a96e' }}>Whitfield &amp; Associates</span>
          <div className="hidden md:flex items-center gap-8">
            {['Practice Areas', 'Attorneys', 'Results', 'Publications', 'Contact'].map(link => (
              <a key={link} href="#" className="text-sm transition" style={{ color: '#d4d4d4' }}>{link}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-28 px-6" style={{ backgroundColor: '#1e3a5f' }}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#c9a96e' }}>
          Counsel You Can Count On
        </h1>
        <p className="max-w-2xl mx-auto text-lg mb-10" style={{ color: '#c4ccd6' }}>
          For over three decades, our firm has represented Fortune 500 corporations, high-net-worth individuals, and institutional investors in the most consequential matters.
        </p>
        <button className="px-8 py-3 text-sm font-semibold transition" style={{ backgroundColor: '#1e3a5f', color: '#c9a96e', border: '2px solid #c9a96e' }}>
          Schedule a Consultation
        </button>
      </section>

      {/* Practice Areas */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Playfair Display', serif", color: '#1e3a5f' }}>Practice Areas</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map(a => (
            <div key={a.title} className="bg-white p-8 shadow-lg">
              <span className="text-3xl block mb-4">{a.icon}</span>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#1e3a5f' }}>{a.title}</h3>
              <p className="text-sm" style={{ color: '#64748b' }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Results — stats bar */}
      <section className="py-16" style={{ backgroundColor: '#1e3a5f' }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {caseResults.map(r => (
            <div key={r.label}>
              <p className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#c9a96e' }}>{r.value}</p>
              <p className="text-sm uppercase tracking-wider" style={{ color: '#94a3b8' }}>{r.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Attorney Profiles */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Playfair Display', serif", color: '#1e3a5f' }}>Our Attorneys</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attorneys.map(a => (
            <div key={a.name} className="bg-white shadow-lg p-6 text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl" style={{ backgroundColor: '#f0ebe3' }}>👤</div>
              <h3 className="text-lg font-semibold" style={{ fontFamily: "'Playfair Display', serif", color: '#1e3a5f' }}>{a.name}</h3>
              <p className="text-sm font-medium mb-2" style={{ color: '#c9a96e' }}>{a.title}</p>
              <p className="text-xs" style={{ color: '#64748b' }}>{a.credentials}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: '#f0ebe3' }}>
        <blockquote className="max-w-3xl mx-auto">
          <p className="text-2xl italic leading-relaxed mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1e3a5f' }}>
            &ldquo;Whitfield &amp; Associates handled our merger with precision, discretion, and an unwavering commitment to our interests. Truly world-class representation.&rdquo;
          </p>
          <cite className="text-sm not-italic font-semibold" style={{ color: '#c9a96e' }}>— Richard Hale, CEO, Meridian Holdings</cite>
        </blockquote>
      </section>

      {/* Publications */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Playfair Display', serif", color: '#1e3a5f' }}>Publications</h2>
        <div className="space-y-0">
          {publications.map(p => (
            <div key={p.title} className="py-6 border-b flex justify-between items-center" style={{ borderColor: '#d4c5b0' }}>
              <h3 className="font-semibold" style={{ color: '#1e3a5f' }}>{p.title}</h3>
              <span className="text-sm ml-4 whitespace-nowrap" style={{ color: '#94a3b8' }}>{p.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: "'Playfair Display', serif", color: '#1e3a5f' }}>Contact Us</h2>
        <form className="bg-white shadow-lg p-8 space-y-4">
          <input type="text" placeholder="Full Name" className="w-full px-4 py-3 text-sm outline-none" style={{ border: '1px solid #d4c5b0' }} />
          <input type="email" placeholder="Email" className="w-full px-4 py-3 text-sm outline-none" style={{ border: '1px solid #d4c5b0' }} />
          <input type="text" placeholder="Company" className="w-full px-4 py-3 text-sm outline-none" style={{ border: '1px solid #d4c5b0' }} />
          <textarea placeholder="Describe your legal matter" rows={4} className="w-full px-4 py-3 text-sm outline-none resize-none" style={{ border: '1px solid #d4c5b0' }} />
          <button type="submit" className="w-full py-3 text-sm font-semibold" style={{ backgroundColor: '#1e3a5f', color: '#c9a96e', border: '2px solid #c9a96e' }}>
            Request Consultation
          </button>
        </form>
        <p className="text-center text-sm mt-4" style={{ color: '#94a3b8' }}>One Liberty Plaza, 46th Floor, New York, NY 10006</p>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#1e3a5f' }}>
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm" style={{ color: '#94a3b8' }}>
          <div>
            <h4 className="font-bold mb-3" style={{ color: '#c9a96e' }}>Whitfield &amp; Associates</h4>
            <p>One Liberty Plaza, 46th Floor</p>
            <p>New York, NY 10006</p>
          </div>
          <div>
            <h4 className="font-bold mb-3" style={{ color: '#c9a96e' }}>Practice Areas</h4>
            <p>Corporate Law</p><p>Litigation</p><p>Real Estate</p><p>Employment</p>
          </div>
          <div>
            <h4 className="font-bold mb-3" style={{ color: '#c9a96e' }}>Contact</h4>
            <p>(212) 555-0143</p>
            <p>info@whitfieldlaw.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-3" style={{ color: '#c9a96e' }}>Hours</h4>
            <p>Mon–Fri: 9AM – 6PM</p>
            <p>Weekends: By Appointment</p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t text-center" style={{ borderColor: '#2a4f7a' }}>
          <p className="text-xs" style={{ color: '#64748b' }}>Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </footer>
    </div>
  )
}
