export const dynamic = "force-dynamic";
export default function MedicalLuxuryDemo() {
  const treatments = [
    { title: "Integrative Medicine", desc: "A personalized blend of conventional medicine and evidence-based complementary therapies including acupuncture, naturopathy, and functional medicine." },
    { title: "Executive Wellness Assessment", desc: "A comprehensive full-day evaluation with advanced cardiac imaging, genomic screening, metabolic profiling, and a bespoke longevity roadmap." },
    { title: "IV Nutrient Therapy", desc: "Physician-formulated micronutrient infusions delivered in a private suite, designed to restore cellular vitality, immune function, and cognitive clarity." },
    { title: "Regenerative Orthopedics", desc: "Platelet-rich plasma, stem cell injections, and prolotherapy to accelerate healing of joints, tendons, and ligaments without surgery." },
    { title: "Mind-Body Restoration", desc: "Clinical meditation, breathwork, biofeedback, and guided neuroplasticity sessions led by licensed psychologists in a tranquil private setting." },
  ]

  const physicians = [
    { name: "Dr. Evelyn Ashworth, MD, FACP", title: "Founder & Medical Director", credentials: "Stanford Internal Medicine, Fellowship in Integrative Medicine at Duke. 20 years of practice." },
    { name: "Dr. Julian Mercer, DO", title: "Director of Regenerative Medicine", credentials: "Harvard Medical School, Board-certified in Sports Medicine and Osteopathic Manipulation. Published researcher." },
    { name: "Dr. Selene Park, ND, LAc", title: "Naturopathic Physician & Acupuncturist", credentials: "Bastyr University, Licensed in naturopathic medicine and traditional Chinese acupuncture. 12 years of practice." },
  ]

  const membershipPlans = [
    { tier: "Vitality", price: "$450/mo", features: ["Annual comprehensive assessment", "Priority scheduling within 48 hours", "Secure physician messaging", "10% discount on treatments", "Quarterly wellness review"] },
    { tier: "Concierge", price: "$950/mo", features: ["Everything in Vitality", "Same-day appointments guaranteed", "Direct physician cell phone access", "Monthly IV therapy session", "Annual genomic health analysis"] },
    { tier: "Pinnacle", price: "$2,200/mo", features: ["Everything in Concierge", "24/7 physician availability", "In-home visit capability", "Unlimited IV and regenerative sessions", "Annual executive retreat invitation"] },
  ]

  return (
    <div style={{ fontFamily: "'Crimson Text', serif", backgroundColor: "#0d3b3b" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap&family=Inter:wght@300;400&display=swap" rel="stylesheet" />

      {/* Serif Overlay Nav */}
      <nav style={{ borderBottom: "1px solid rgba(250, 245, 228, 0.15)" }} className="relative z-10">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div>
            <h1 style={{ color: "#faf5e4" }} className="text-2xl font-bold tracking-wide">The Evergreen Clinic</h1>
            <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.5 }} className="text-xs tracking-widest uppercase mt-1">Integrative Wellness</p>
          </div>
          <div className="flex items-center gap-8">
            {["Our Approach", "Treatments", "Physicians", "Membership", "The Facility"].map((link) => (
              <span key={link} style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif" }} className="text-sm font-light cursor-pointer opacity-70 hover:opacity-100 transition-opacity">{link}</span>
            ))}
            <span style={{ backgroundColor: "#faf5e4", color: "#0d3b3b" }} className="px-5 py-2 text-sm font-semibold cursor-pointer">Book Consultation</span>
          </div>
        </div>
      </nav>

      {/* Wellness Spa Hero */}
      <section className="relative">
        <div style={{ backgroundColor: "#0a2f2f" }} className="max-w-7xl mx-auto px-8 py-28 flex items-center gap-16">
          <div className="w-1/2">
            <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.5 }} className="text-xs tracking-widest uppercase mb-6">A Different Standard of Care</p>
            <h2 style={{ color: "#faf5e4" }} className="text-5xl font-bold leading-tight mb-6">
              Where Medicine<br /><em>Meets Intention</em>
            </h2>
            <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.7 }} className="text-base font-light leading-relaxed mb-10">
              The Evergreen Clinic offers a sanctuary for those seeking more than conventional care.
              Our physicians blend rigorous science with holistic wisdom, treating the whole person
              in an environment designed for healing and renewal.
            </p>
            <span style={{ border: "1px solid #faf5e4", color: "#faf5e4" }} className="px-8 py-3 text-sm tracking-wider cursor-pointer inline-block">Discover Our Approach</span>
          </div>
          <div className="w-1/2 flex justify-center">
            <div style={{ backgroundColor: "#143d3d", border: "1px solid rgba(250,245,228,0.1)" }} className="w-full h-80 flex items-center justify-center text-sm">
              <span style={{ color: "#faf5e4", opacity: 0.3, fontFamily: "'Inter', sans-serif" }} className="text-sm">[ Wellness Spa Interior ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section style={{ backgroundColor: "#0d3b3b", borderTop: "1px solid rgba(250,245,228,0.08)" }} className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.5 }} className="text-xs tracking-widest uppercase mb-4">Our Philosophy</p>
          <h3 style={{ color: "#faf5e4" }} className="text-4xl font-bold mb-8">Holistic Care, Rooted in Science</h3>
          <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.7 }} className="text-base font-light leading-relaxed max-w-2xl mx-auto">
            We reject the false dichotomy between conventional and alternative medicine. Every treatment
            we offer is grounded in peer-reviewed research and delivered by licensed physicians who take the time
            to understand your complete health picture — body, mind, and environment. Your visit begins with a
            90-minute intake and ends with a comprehensive, actionable wellness plan.
          </p>
        </div>
      </section>

      {/* Treatments */}
      <section style={{ backgroundColor: "#0a2f2f" }} className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.5 }} className="text-xs tracking-widest uppercase mb-4 text-center">What We Offer</p>
          <h3 style={{ color: "#faf5e4" }} className="text-4xl font-bold text-center mb-12">Treatments</h3>
          <div className="space-y-6">
            {treatments.map((t, i) => (
              <div key={t.title} style={{ borderBottom: "1px solid rgba(250,245,228,0.1)" }} className="pb-6 flex gap-8 items-start">
                <span style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.3 }} className="text-sm mt-1">0{i + 1}</span>
                <div className="flex-1">
                  <h4 style={{ color: "#faf5e4" }} className="text-xl font-bold mb-2">{t.title}</h4>
                  <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.6 }} className="text-sm font-light leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Physician Profiles */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.5 }} className="text-xs tracking-widest uppercase mb-4 text-center">Our Team</p>
          <h3 style={{ color: "#faf5e4" }} className="text-4xl font-bold text-center mb-12">Physician Profiles</h3>
          <div className="grid grid-cols-3 gap-8">
            {physicians.map((doc) => (
              <div key={doc.name} style={{ backgroundColor: "#143d3d", border: "1px solid rgba(250,245,228,0.1)" }} className="p-8">
                <div style={{ backgroundColor: "#0d3b3b" }} className="w-20 h-20 rounded-full mb-6 flex items-center justify-center">
                  <span style={{ color: "#faf5e4", opacity: 0.3 }} className="text-xs">Photo</span>
                </div>
                <h4 style={{ color: "#faf5e4" }} className="text-lg font-bold">{doc.name}</h4>
                <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.5 }} className="text-xs uppercase tracking-wider mt-1 mb-4">{doc.title}</p>
                <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.6 }} className="text-sm font-light leading-relaxed">{doc.credentials}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Facility */}
      <section style={{ backgroundColor: "#0a2f2f" }} className="py-20">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.5 }} className="text-xs tracking-widest uppercase mb-4">Our Space</p>
          <h3 style={{ color: "#faf5e4" }} className="text-4xl font-bold mb-8">The Facility</h3>
          <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.7 }} className="text-base font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Nestled on three wooded acres, our facility was designed by wellness architects to promote
            calm and healing at every turn. Natural light, living walls, water features, and private treatment
            suites create an environment that feels nothing like a traditional clinic.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {["Private Treatment Suites", "Meditation Garden", "Hydrotherapy Pool"].map((space) => (
              <div key={space} style={{ backgroundColor: "#143d3d", border: "1px solid rgba(250,245,228,0.08)" }} className="h-40 flex items-center justify-center">
                <span style={{ color: "#faf5e4", opacity: 0.4 }} className="text-sm">{space}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.5 }} className="text-xs tracking-widest uppercase mb-4 text-center">Membership</p>
          <h3 style={{ color: "#faf5e4" }} className="text-4xl font-bold text-center mb-12">Membership Plans</h3>
          <div className="grid grid-cols-3 gap-8">
            {membershipPlans.map((plan) => (
              <div key={plan.tier} style={{ backgroundColor: "#143d3d", border: "1px solid rgba(250,245,228,0.12)" }} className="p-8 flex flex-col">
                <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.5 }} className="text-xs tracking-widest uppercase mb-2">{plan.tier}</p>
                <p style={{ color: "#faf5e4" }} className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.65 }} className="text-sm font-light flex items-start gap-2">
                      <span style={{ opacity: 0.4 }}>&#8212;</span> {f}
                    </li>
                  ))}
                </ul>
                <span style={{ border: "1px solid rgba(250,245,228,0.3)", color: "#faf5e4" }} className="text-center py-3 text-sm tracking-wider cursor-pointer mt-8 block">Select Plan</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Consultation CTA */}
      <section style={{ backgroundColor: "#0a2f2f", borderTop: "1px solid rgba(250,245,228,0.08)" }} className="py-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h3 style={{ color: "#faf5e4" }} className="text-4xl font-bold mb-6">Begin Your Journey</h3>
          <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.6 }} className="text-base font-light leading-relaxed mb-10">
            Schedule a private consultation with one of our physicians to explore how integrative
            medicine can transform your health. Your first visit includes a complimentary 30-minute
            discovery session.
          </p>
          <span style={{ backgroundColor: "#faf5e4", color: "#0d3b3b" }} className="px-10 py-4 text-sm font-semibold tracking-wider cursor-pointer inline-block">Book a Private Consultation</span>
        </div>
      </section>

      {/* Refined Footer */}
      <footer style={{ borderTop: "1px solid rgba(250,245,228,0.08)" }} className="py-10">
        <div className="max-w-6xl mx-auto px-8 flex justify-between items-start">
          <div>
            <h4 style={{ color: "#faf5e4" }} className="text-lg font-bold mb-1">The Evergreen Clinic</h4>
            <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.4 }} className="text-xs">Integrative Wellness &middot; Est. 2008</p>
            <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.4 }} className="text-xs mt-3">
              2100 Woodland Terrace, Asheville, NC 28801
            </p>
          </div>
          <div className="text-right">
            <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.5 }} className="text-sm">Appointments: (828) 555-0170</p>
            <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.4 }} className="text-xs mt-1">concierge@theevergreenclinic.com</p>
            <p style={{ color: "#faf5e4", fontFamily: "'Inter', sans-serif", opacity: 0.3 }} className="text-xs mt-4">&copy; 2024 The Evergreen Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
