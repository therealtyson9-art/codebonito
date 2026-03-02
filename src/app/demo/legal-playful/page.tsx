export default function LegalPlayfulDemo() {
  const services = [
    { icon: "📋", title: "Business Formation", desc: "Starting an LLC, corporation, or partnership? We handle the paperwork so you can focus on building your dream." },
    { icon: "🏠", title: "Real Estate Closings", desc: "Buying or selling a home shouldn't feel overwhelming. We walk you through every step of the closing process." },
    { icon: "📝", title: "Wills & Estate Planning", desc: "Protect your family's future with clear, affordable estate plans that actually make sense." },
    { icon: "⚖️", title: "Small Claims & Disputes", desc: "Neighbor disputes, contract issues, or warranty claims. We help you resolve problems without the drama." },
    { icon: "👨‍👩‍👧", title: "Family Law", desc: "Divorce, custody, and support agreements handled with compassion and common sense." },
    { icon: "💼", title: "Employment Issues", desc: "Wrongful termination, wage disputes, or workplace harassment. We stand up for working people." },
  ]

  const faqs = [
    { q: "How much does a consultation cost?", a: "Your first 30-minute consultation is completely free. No obligation, no pressure. We just want to understand your situation and see if we can help." },
    { q: "Do I really need a lawyer for this?", a: "Maybe, maybe not! That's exactly what the free consultation is for. Sometimes a quick conversation saves you from a much bigger problem down the road." },
    { q: "How long will my case take?", a: "It depends on the complexity, but we pride ourselves on moving quickly. Simple matters like wills or LLC formation can be done in 1-2 weeks. Litigation varies." },
    { q: "What are your fees like?", a: "We offer flat-fee pricing for most services, so you always know what to expect. No surprise bills, no billable hour anxiety. We'll quote you upfront." },
    { q: "Can we meet virtually?", a: "Absolutely! We handle most consultations over video call. If you prefer in-person, our office is in downtown Portland with easy parking nearby." },
  ]

  const attorneys = [
    { name: "Sarah Greenfield", title: "Founder & Lead Attorney", specialty: "Business & Real Estate", color: "bg-teal-100" },
    { name: "Mike Patel", title: "Associate Attorney", specialty: "Family Law & Estate Planning", color: "bg-orange-100" },
    { name: "Jenny Nakamura", title: "Associate Attorney", specialty: "Employment & Disputes", color: "bg-teal-50" },
  ]

  const testimonials = [
    { quote: "I was dreading the whole legal process, but Sarah made it so easy. She explained everything in plain English and even followed up after to make sure I was doing okay.", author: "Ryan M.", stars: 5, context: "LLC Formation" },
    { quote: "Mike helped me navigate a really tough custody situation with patience and kindness. I never felt judged, and he always returned my calls the same day.", author: "Amanda K.", stars: 5, context: "Family Law" },
    { quote: "Flat fees! I cannot stress enough how nice it is to know exactly what you're paying. No surprises. The team at Greenfield is genuinely different.", author: "Carlos D.", stars: 5, context: "Estate Planning" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-xl font-semibold" style={{ color: "#0d9488" }}>greenfield<span className="text-gray-400 font-light"> legal</span></span>
        <div className="hidden md:flex items-center space-x-8">
          {["Services", "Our Team", "FAQ", "Reviews"].map((item) => (
            <span key={item} className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">{item}</span>
          ))}
        </div>
        <span className="text-sm font-medium text-white px-6 py-2.5 rounded-full cursor-pointer transition-colors" style={{ backgroundColor: "#0d9488" }}>Free Consultation</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-6" style={{ backgroundColor: "#f0fdfa", color: "#0d9488" }}>
          Serving Portland since 2015
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
          Legal help that actually<br /><span style={{ color: "#0d9488" }}>makes sense.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed font-light">
          No confusing jargon. No surprise bills. Just honest, approachable legal services for real people and small businesses.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <span className="px-8 py-3 text-sm font-medium text-white rounded-full cursor-pointer transition-colors hover:opacity-90" style={{ backgroundColor: "#0d9488" }}>Book a Free Consultation</span>
          <span className="px-8 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">See Our Services</span>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">What We Can Help With</h2>
          <p className="text-center text-gray-400 mb-16 max-w-md mx-auto">Straightforward legal services with transparent pricing. No hourly billing surprises.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Common Questions</h2>
        <p className="text-center text-gray-400 mb-12">The stuff people actually want to know before hiring a lawyer.</p>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="border border-gray-100 rounded-xl p-6 hover:border-teal-200 transition-colors">
              <h3 className="text-base font-semibold text-gray-900">{faq.q}</h3>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Attorneys */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Meet the Team</h2>
          <p className="text-center text-gray-400 mb-16">Real people who genuinely care about your case.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {attorneys.map((att) => (
              <div key={att.name} className="text-center">
                <div className={`w-40 h-40 ${att.color} rounded-full mx-auto mb-6`} />
                <h3 className="text-lg font-semibold text-gray-900">{att.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{att.title}</p>
                <p className="text-xs mt-2 px-3 py-1 rounded-full inline-block" style={{ backgroundColor: "#f0fdfa", color: "#0d9488" }}>{att.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center rounded-3xl py-16 mx-6" style={{ backgroundColor: "#0d9488" }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Your first consultation is free.</h2>
          <p className="text-white/70 mt-4 max-w-md mx-auto">No commitment, no pressure. Let&apos;s just talk about what&apos;s going on and figure out the best path forward together.</p>
          <div className="mt-8">
            <span className="inline-block px-10 py-3.5 text-sm font-semibold rounded-full cursor-pointer transition-colors bg-white hover:bg-gray-100" style={{ color: "#0d9488" }}>Schedule Your Free Call</span>
          </div>
          <p className="text-white/50 text-xs mt-4">Or call us directly at (503) 555-0127</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">What Our Clients Say</h2>
        <p className="text-center text-gray-400 mb-16">Honest reviews from real clients.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-orange-400 text-lg">&#9733;</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full" style={{ backgroundColor: "#0d9488", opacity: 0.2 }} />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                  <p className="text-xs text-gray-400">{t.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <span className="text-lg font-semibold" style={{ color: "#0d9488" }}>greenfield<span className="text-gray-400 font-light"> legal</span></span>
              <p className="text-xs text-gray-400 mt-2 max-w-xs">Making legal services accessible, affordable, and actually understandable since 2015.</p>
            </div>
            <div className="flex flex-wrap gap-8">
              {["Privacy", "Terms", "Accessibility", "Disclaimer"].map((link) => (
                <span key={link} className="text-xs text-gray-400 hover:text-gray-900 cursor-pointer transition-colors">{link}</span>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <span className="text-xs text-gray-300">&copy; 2026 Greenfield Legal LLC. Portland, Oregon. Attorney advertising.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
