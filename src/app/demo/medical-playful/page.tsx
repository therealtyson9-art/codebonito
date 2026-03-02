export const dynamic = "force-dynamic";
export default function MedicalPlayfulDemo() {
  const services = [
    { emoji: "\ud83d\udc76", title: "Well-Child Visits", desc: "Regular check-ups to track growth, development milestones, and vaccinations from newborn through adolescence. We make every visit fun and stress-free.", color: "#ccfbf1" },
    { emoji: "\ud83e\ude7a", title: "Vaccinations", desc: "Stay up to date with childhood immunizations. Our gentle approach and reward stickers make shots a breeze for even the most nervous little ones.", color: "#fef3c7" },
    { emoji: "\ud83e\uddb7", title: "Pediatric Dental", desc: "Cleanings, sealants, fluoride treatments, and cavity care in a colorful, kid-friendly dental suite with ceiling-mounted TVs and treasure chest prizes.", color: "#fce7f3" },
    { emoji: "\ud83e\ude7b", title: "Sick Day Visits", desc: "Same-day appointments for fevers, ear infections, coughs, rashes, tummy troubles, and other childhood illnesses. Walk-ins welcome.", color: "#e0e7ff" },
    { emoji: "\ud83e\udde0", title: "Behavioral Health", desc: "Compassionate screening and support for ADHD, anxiety, learning differences, and social-emotional development in a safe, judgment-free space.", color: "#f3e8ff" },
    { emoji: "\ud83c\udf4e", title: "Nutrition Counseling", desc: "Personalized nutrition plans for picky eaters, food allergies, childhood obesity, and healthy growth. Fun cooking tips the whole family will love.", color: "#dcfce7" },
  ]

  const team = [
    { name: "Dr. Maya Rodriguez, MD", role: "Lead Pediatrician", bio: "Board-certified with 14 years of experience. Dr. Maya believes every child deserves to feel safe and heard during their visit." },
    { name: "Dr. Chris Tanaka, DDS", role: "Pediatric Dentist", bio: "Specializes in making dental visits fun. Known for his magic tricks and collection of over 200 rubber ducks." },
    { name: "Nurse Priya Kapoor, RN", role: "Head Nurse", bio: "A kid-whisperer with 10 years in pediatric nursing. Priya has a gift for calming anxious little patients with stories." },
  ]

  const faqs = [
    { q: "What ages do you see?", a: "We welcome patients from newborn through age 18. We also offer transitional care guidance for teens moving to adult providers." },
    { q: "Do you accept walk-ins?", a: "Yes! We reserve same-day appointment slots every morning and accept walk-ins for sick visits throughout the day." },
    { q: "Is the dental office separate?", a: "Our dental suite is right inside our clinic, so you can schedule both a check-up and a cleaning in one trip." },
    { q: "What insurance do you accept?", a: "We accept most major plans including Medicaid, CHIP, Blue Cross, Aetna, and United. Call us to verify your coverage." },
  ]

  return (
    <div style={{ fontFamily: "'Quicksand', sans-serif", backgroundColor: "#ecfdf5" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Rounded Pill Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl">&#x1F31F;</span>
          <h1 style={{ color: "#14b8a6" }} className="text-2xl font-bold">Bright Smiles Pediatrics</h1>
        </div>
        <div className="flex items-center gap-3">
          {["Services", "Our Team", "Parents", "FAQ"].map((link) => (
            <span key={link} className="px-4 py-2 rounded-full text-sm font-semibold text-gray-600 hover:bg-teal-100 cursor-pointer transition-colors">{link}</span>
          ))}
          <span style={{ backgroundColor: "#14b8a6" }} className="px-5 py-2 rounded-full text-sm font-bold text-white cursor-pointer">Book a Visit</span>
        </div>
      </nav>

      {/* Friendly Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex items-center gap-12">
        <div className="w-1/2">
          <p style={{ color: "#14b8a6" }} className="text-sm font-bold uppercase tracking-widest mb-3">Pediatric Care That Feels Like Play</p>
          <h2 style={{ color: "#134e4a" }} className="text-5xl font-bold leading-tight mb-6">Where Little Patients Get Big Smiles</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            At Bright Smiles Pediatrics, we believe healthcare should be a positive experience for every child.
            Our colorful clinic, gentle team, and playful approach make check-ups something kids actually
            look forward to.
          </p>
          <div className="flex gap-4">
            <span style={{ backgroundColor: "#14b8a6" }} className="px-6 py-3 rounded-full font-bold text-white cursor-pointer">Schedule an Appointment</span>
            <span style={{ color: "#14b8a6", borderColor: "#14b8a6" }} className="border-2 px-6 py-3 rounded-full font-bold cursor-pointer">Take a Virtual Tour</span>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div style={{ backgroundColor: "#ccfbf1" }} className="w-96 h-80 rounded-3xl flex items-center justify-center text-teal-400 text-sm">
            [ Friendly Illustration of Kids Playing ]
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 style={{ color: "#134e4a" }} className="text-4xl font-bold mb-3">Our Services</h3>
          <p className="text-gray-500 text-base">Everything your child needs under one happy roof</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.title} style={{ backgroundColor: svc.color }} className="rounded-2xl p-6 hover:scale-105 transition-transform cursor-pointer">
              <span className="text-4xl block mb-3">{svc.emoji}</span>
              <h4 style={{ color: "#134e4a" }} className="text-lg font-bold mb-2">{svc.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section style={{ backgroundColor: "#f0fdfa" }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 style={{ color: "#134e4a" }} className="text-4xl font-bold text-center mb-10">Meet the Team</h3>
          <div className="grid grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div style={{ backgroundColor: "#ccfbf1" }} className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">&#x1F60A;</div>
                <h4 style={{ color: "#134e4a" }} className="font-bold text-lg">{member.name}</h4>
                <p style={{ color: "#14b8a6" }} className="text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Resources */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 style={{ color: "#134e4a" }} className="text-4xl font-bold text-center mb-10">Parent Resources</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h4 style={{ color: "#14b8a6" }} className="font-bold text-lg mb-3">New Patient Checklist</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>&#x2705; Bring your child's immunization records</li>
              <li>&#x2705; Insurance card and photo ID</li>
              <li>&#x2705; List of current medications or allergies</li>
              <li>&#x2705; Previous medical records (if transferring)</li>
              <li>&#x2705; Your child's favorite comfort item</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h4 style={{ color: "#14b8a6" }} className="font-bold text-lg mb-3">Helpful Guides</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>&#x1F4DA; Vaccination Schedule (Birth to 18)</li>
              <li>&#x1F4DA; When to Visit the ER vs. Our Office</li>
              <li>&#x1F4DA; Age-Appropriate Screen Time Guidelines</li>
              <li>&#x1F4DA; Nutrition Tips for Picky Eaters</li>
              <li>&#x1F4DA; Managing Childhood Anxiety at Home</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Book Appointment CTA */}
      <section style={{ backgroundColor: "#14b8a6" }} className="py-14">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Schedule a Visit?</h3>
          <p className="text-teal-100 text-lg mb-8">
            New patients are always welcome. Book online in under 60 seconds or give us a call.
          </p>
          <div className="flex justify-center gap-4">
            <span className="bg-white px-6 py-3 rounded-full font-bold cursor-pointer" style={{ color: "#14b8a6" }}>Book Online</span>
            <span className="border-2 border-white px-6 py-3 rounded-full font-bold cursor-pointer">Call (555) 223-KIDS</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h3 style={{ color: "#134e4a" }} className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 style={{ color: "#134e4a" }} className="font-bold mb-2">{faq.q}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Friendly Footer */}
      <footer style={{ backgroundColor: "#134e4a" }} className="text-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h4 className="text-xl font-bold mb-2">Bright Smiles Pediatrics</h4>
              <p className="text-teal-300 text-sm">Making healthcare happy for kids and families</p>
            </div>
            <div className="text-right text-sm">
              <p className="text-teal-200">456 Sunshine Boulevard, Suite 200</p>
              <p className="text-teal-200">Greenfield, ST 30022</p>
              <p className="text-white font-bold mt-2">(555) 223-KIDS (5437)</p>
              <p className="text-teal-300">hello@brightsmilespeds.com</p>
            </div>
          </div>
          <div className="border-t border-teal-700 pt-4 flex justify-between items-center">
            <p className="text-teal-400 text-xs">&copy; 2024 Bright Smiles Pediatrics. All rights reserved.</p>
            <p className="text-teal-400 text-xs">Mon-Fri 8am-6pm &middot; Sat 9am-1pm &middot; Sun Closed</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
