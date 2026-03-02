export default function LegalLuxuryDemo() {
  const practiceAreas = [
    { title: "Private Client Advisory", desc: "Bespoke counsel for ultra-high-net-worth individuals, family offices, and private trusts across multiple jurisdictions and generations." },
    { title: "International Arbitration", desc: "Representation in complex cross-border disputes before ICC, LCIA, ICSID, and ad hoc tribunals on four continents." },
    { title: "White-Collar Defense", desc: "Discreet, sophisticated defense in government investigations, regulatory enforcement, securities fraud, and corporate compliance matters." },
    { title: "Mergers & Acquisitions", desc: "Strategic counsel for transformative transactions, hostile takeovers, management buyouts, and private equity deals exceeding $500M." },
    { title: "Sovereign Advisory", desc: "Counsel to sovereign wealth funds, central banks, and government ministries on international investments, sanctions, and treaty obligations." },
    { title: "Art & Cultural Property", desc: "Provenance disputes, repatriation claims, private sales, and estate disposition of fine art, antiquities, and rare collections." },
  ]

  const offices = [
    { city: "London", address: "One Temple Chambers, Temple, London EC4Y 0HP", established: "1892" },
    { city: "New York", address: "432 Park Avenue, 58th Floor, New York, NY 10022", established: "1924" },
    { city: "Geneva", address: "Rue du Rhone 118, 1204 Geneva, Switzerland", established: "1961" },
    { city: "Hong Kong", address: "Two International Finance Centre, 88/F, Central", established: "1997" },
  ]

  const counsel = [
    { name: "Sir Edward Harrington, KC", title: "Senior Partner & Chairman", bio: "Called to the Bar in 1978. Appointed King's Counsel in 1994. Sir Edward has appeared before the International Court of Justice and served as lead counsel in over 40 international arbitrations. Bencher of the Inner Temple." },
    { name: "Dr. Caroline Ashworth, JD, DPhil", title: "Managing Partner, Americas", bio: "Oxford and Harvard educated. Dr. Ashworth leads the firm's transatlantic practice with a focus on sovereign advisory and sanctions law. Named to the Global Elite Thought Leaders list for six consecutive years." },
    { name: "The Hon. Philippe Kensington", title: "Of Counsel, International Arbitration", bio: "Former judge of the Singapore International Commercial Court. Philippe brings 30 years of judicial experience and has authored landmark texts on investor-state dispute resolution and treaty interpretation." },
  ]

  const awards = [
    "Chambers Global — Band 1, International Arbitration (2018-2024)",
    "The Legal 500 — Hall of Fame, Private Client Advisory",
    "Who's Who Legal — Firm of the Year, White-Collar Crime (2022)",
    "Financial Times — Most Innovative Law Firm, Europe (2023)",
    "Benchmark Litigation — Top 10 International Firm (2024)",
  ]

  return (
    <div style={{ fontFamily: "'EB Garamond', serif", backgroundColor: "#3b1515" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap&family=Inter:wght@300;400&display=swap" rel="stylesheet" />

      {/* Ornate Serif Nav */}
      <nav style={{ borderBottom: "1px solid rgba(212,160,83,0.2)" }}>
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div>
            <h1 style={{ color: "#d4a053" }} className="text-xl font-semibold tracking-wide">Harrington, Ashworth & Kensington</h1>
            <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.4 }} className="text-xs tracking-widest uppercase mt-1">Barristers &amp; Solicitors &middot; Est. 1892</p>
          </div>
          <div className="flex items-center gap-8">
            {["Legacy", "Practice", "Offices", "Counsel", "Distinctions"].map((link) => (
              <span key={link} style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif" }} className="text-sm font-light cursor-pointer opacity-50 hover:opacity-100 transition-opacity">{link}</span>
            ))}
            <span style={{ border: "1px solid #d4a053", color: "#d4a053" }} className="px-5 py-2 text-sm cursor-pointer">Private Enquiry</span>
          </div>
        </div>
      </nav>

      {/* Library Photo Hero */}
      <section style={{ backgroundColor: "#2d0f0f" }} className="relative">
        <div className="max-w-7xl mx-auto px-8 py-28 flex items-center gap-16">
          <div className="w-1/2">
            <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.4 }} className="text-xs tracking-widest uppercase mb-6">Established MDCCCXCII</p>
            <h2 style={{ color: "#d4a053" }} className="text-5xl font-semibold leading-tight mb-6">
              The Counsel<br /><em>of Consequence</em>
            </h2>
            <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.55 }} className="text-base font-light leading-relaxed mb-10">
              For more than a century, the most consequential matters of law — those that shape
              markets, resolve sovereign disputes, and protect dynastic wealth — have been entrusted
              to this firm. Our standard has not changed since 1892: absolute excellence, absolute discretion.
            </p>
            <span style={{ border: "1px solid #d4a053", color: "#d4a053" }} className="px-8 py-3 text-sm tracking-wider cursor-pointer inline-block">Arrange a Private Consultation</span>
          </div>
          <div className="w-1/2 flex justify-center">
            <div style={{ backgroundColor: "#451a1a", border: "1px solid rgba(212,160,83,0.1)" }} className="w-full h-80 flex items-center justify-center">
              <span style={{ color: "#d4a053", opacity: 0.3, fontFamily: "'Inter', sans-serif" }} className="text-sm">[ Library / Chambers Photograph ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section style={{ borderTop: "1px solid rgba(212,160,83,0.08)" }} className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.4 }} className="text-xs tracking-widest uppercase mb-4">Our Legacy</p>
          <h3 style={{ color: "#d4a053" }} className="text-4xl font-semibold mb-8">Founded 1892</h3>
          <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.55 }} className="text-base font-light leading-relaxed max-w-2xl mx-auto">
            What began as a small chancery practice in the Inns of Court has grown into one of the most
            respected international law firms in the world. Through two world wars, the birth of the
            European Union, the rise of global finance, and the digital revolution, this firm has stood as
            counsel to those who shape history. Our client relationships span generations — we have served
            the same families, institutions, and sovereign entities for over a century.
          </p>
        </div>
      </section>

      {/* Practice Areas */}
      <section style={{ backgroundColor: "#2d0f0f" }} className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.4 }} className="text-xs tracking-widest uppercase mb-4 text-center">Areas of Practice</p>
          <h3 style={{ color: "#d4a053" }} className="text-4xl font-semibold text-center mb-12">Practice Areas</h3>
          <div className="grid grid-cols-2 gap-x-16 gap-y-10">
            {practiceAreas.map((area) => (
              <div key={area.title} style={{ borderBottom: "1px solid rgba(212,160,83,0.1)" }} className="pb-6">
                <h4 style={{ color: "#d4a053" }} className="text-xl font-semibold mb-2">{area.title}</h4>
                <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.5 }} className="text-sm font-light leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.4 }} className="text-xs tracking-widest uppercase mb-4 text-center">Worldwide Presence</p>
          <h3 style={{ color: "#d4a053" }} className="text-4xl font-semibold text-center mb-12">Global Offices</h3>
          <div className="grid grid-cols-4 gap-6">
            {offices.map((office) => (
              <div key={office.city} style={{ border: "1px solid rgba(212,160,83,0.15)" }} className="p-6 text-center">
                <h4 style={{ color: "#d4a053" }} className="text-2xl font-semibold mb-2">{office.city}</h4>
                <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.4 }} className="text-xs mb-3">Est. {office.established}</p>
                <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.5 }} className="text-xs font-light leading-relaxed">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinguished Counsel */}
      <section style={{ backgroundColor: "#2d0f0f" }} className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.4 }} className="text-xs tracking-widest uppercase mb-4 text-center">Our Partners</p>
          <h3 style={{ color: "#d4a053" }} className="text-4xl font-semibold text-center mb-12">Distinguished Counsel</h3>
          <div className="grid grid-cols-3 gap-8">
            {counsel.map((person) => (
              <div key={person.name} style={{ border: "1px solid rgba(212,160,83,0.12)" }} className="p-8">
                <div style={{ backgroundColor: "#451a1a" }} className="w-20 h-20 rounded-full mb-6 mx-auto flex items-center justify-center">
                  <span style={{ color: "#d4a053", opacity: 0.3 }} className="text-xs">Portrait</span>
                </div>
                <h4 style={{ color: "#d4a053" }} className="text-lg font-semibold text-center">{person.name}</h4>
                <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.4 }} className="text-xs text-center uppercase tracking-wider mt-1 mb-4">{person.title}</p>
                <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.5 }} className="text-sm font-light leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.4 }} className="text-xs tracking-widest uppercase mb-4">Recognition</p>
          <h3 style={{ color: "#d4a053" }} className="text-4xl font-semibold mb-12">Awards & Distinctions</h3>
          <div className="space-y-4">
            {awards.map((award) => (
              <div key={award} style={{ borderBottom: "1px solid rgba(212,160,83,0.1)" }} className="pb-4">
                <p style={{ color: "#d4a053" }} className="text-base font-medium">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Consultation */}
      <section style={{ backgroundColor: "#2d0f0f", borderTop: "1px solid rgba(212,160,83,0.08)" }} className="py-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h3 style={{ color: "#d4a053" }} className="text-4xl font-semibold mb-6">Private Consultation</h3>
          <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.5 }} className="text-base font-light leading-relaxed mb-10">
            All enquiries are received in the strictest confidence. To discuss a matter with a
            partner, please contact our private client desk or submit a secure enquiry below.
          </p>
          <span style={{ backgroundColor: "#d4a053", color: "#3b1515" }} className="px-10 py-4 text-sm font-semibold tracking-wider cursor-pointer inline-block">Submit a Private Enquiry</span>
        </div>
      </section>

      {/* Ornate Footer with Latin Motto */}
      <footer style={{ borderTop: "1px solid rgba(212,160,83,0.1)" }} className="py-10">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 style={{ color: "#d4a053" }} className="text-lg font-semibold">Harrington, Ashworth & Kensington</h4>
              <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.3 }} className="text-xs mt-1">Barristers &amp; Solicitors &middot; London &middot; New York &middot; Geneva &middot; Hong Kong</p>
            </div>
            <div className="text-right">
              <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.4 }} className="text-sm">Private Client Desk: +44 (0) 20 7946 0958</p>
              <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.3 }} className="text-xs mt-1">enquiries@haklaw.com</p>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(212,160,83,0.08)" }} className="pt-6 flex justify-between items-center">
            <p style={{ color: "#d4a053" }} className="text-sm italic opacity-40">&ldquo;Justitia fundamentum regnorum&rdquo; &mdash; Justice is the foundation of kingdoms</p>
            <p style={{ color: "#d4a053", fontFamily: "'Inter', sans-serif", opacity: 0.25 }} className="text-xs">&copy; 2024 Harrington, Ashworth &amp; Kensington. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
