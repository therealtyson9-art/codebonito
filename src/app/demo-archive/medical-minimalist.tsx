export default function MedicalMinimalistDemo() {
  const navLinks = ['Services', 'Our Doctors', 'Appointments']
  const services = [
    { icon: '🫀', title: 'Cardiology', desc: 'Heart health monitoring and preventive care' },
    { icon: '🧠', title: 'Neurology', desc: 'Brain and nervous system diagnostics' },
    { icon: '🦴', title: 'Orthopedics', desc: 'Bone and joint treatment plans' },
    { icon: '👶', title: 'Pediatrics', desc: 'Compassionate care for children' },
    { icon: '🔬', title: 'Lab Services', desc: 'On-site blood work and testing' },
    { icon: '💊', title: 'Pharmacy', desc: 'Convenient prescription filling' },
  ]
  const doctors = [
    { name: 'Dr. Sarah Chen', specialty: 'Cardiologist', exp: '15 years' },
    { name: 'Dr. James Okafor', specialty: 'Neurologist', exp: '12 years' },
    { name: 'Dr. Maria Santos', specialty: 'Pediatrician', exp: '10 years' },
    { name: 'Dr. Raj Patel', specialty: 'Orthopedic Surgeon', exp: '18 years' },
  ]
  const testimonials = [
    { quote: 'The staff made me feel completely at ease. Best medical experience I have ever had.', author: 'Linda M.' },
    { quote: 'Dr. Chen caught something three other doctors missed. I am forever grateful.', author: 'Robert K.' },
  ]
  const insuranceLogos = ['Aetna', 'Blue Cross', 'Cigna', 'UnitedHealth', 'Humana', 'Kaiser']

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0f9ff', fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b" style={{ borderColor: '#e0f2fe' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold" style={{ fontFamily: "'Inter', sans-serif", color: '#0c4a6e' }}>ClearPath Medical</span>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link} href="#" className="text-sm font-medium hover:opacity-70 transition" style={{ color: '#0c4a6e' }}>{link}</a>
            ))}
            <span className="text-sm font-medium" style={{ color: '#0ea5e9' }}>(415) 555-0192</span>
          </div>
        </div>
      </nav>

      {/* Hero — split layout */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: "'Inter', sans-serif", color: '#0c4a6e' }}>
            Healthcare that puts you first
          </h1>
          <p className="text-lg mb-8" style={{ color: '#0c4a6e' }}>
            Modern medicine meets personal attention. Our board-certified physicians combine cutting-edge technology with genuine compassion to deliver care you can trust.
          </p>
          <button className="rounded-full px-8 py-3 text-white font-medium text-sm transition hover:opacity-90" style={{ backgroundColor: '#0ea5e9' }}>
            Book an Appointment
          </button>
        </div>
        <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ backgroundColor: '#bae6fd' }}>
          <div className="w-full h-full flex items-center justify-center text-6xl">🩺</div>
        </div>
      </section>

      {/* Services — icon grid 2x3 */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Inter', sans-serif", color: '#0c4a6e' }}>Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="rounded-xl p-6 bg-white" style={{ border: '1px solid #e0f2fe' }}>
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: "'Inter', sans-serif", color: '#0c4a6e' }}>{s.title}</h3>
              <p className="text-sm" style={{ color: '#64748b' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors — horizontal scroll */}
      <section className="py-20" style={{ backgroundColor: '#e0f2fe' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: "'Inter', sans-serif", color: '#0c4a6e' }}>Meet Our Doctors</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {doctors.map(d => (
              <div key={d.name} className="min-w-[260px] bg-white rounded-xl p-6 flex-shrink-0" style={{ border: '1px solid #bae6fd' }}>
                <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-2xl" style={{ backgroundColor: '#f0f9ff' }}>👤</div>
                <h3 className="font-semibold" style={{ fontFamily: "'Inter', sans-serif", color: '#0c4a6e' }}>{d.name}</h3>
                <p className="text-sm" style={{ color: '#0ea5e9' }}>{d.specialty}</p>
                <p className="text-xs mt-1" style={{ color: '#94a3b8' }}>{d.exp} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment form */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: "'Inter', sans-serif", color: '#0c4a6e' }}>Book Your Visit</h2>
        <form className="bg-white rounded-xl p-8 space-y-4" style={{ border: '1px solid #e0f2fe' }}>
          <input type="text" placeholder="Full Name" className="w-full rounded-lg px-4 py-3 text-sm outline-none" style={{ border: '1px solid #e0f2fe', backgroundColor: '#f0f9ff' }} />
          <input type="email" placeholder="Email Address" className="w-full rounded-lg px-4 py-3 text-sm outline-none" style={{ border: '1px solid #e0f2fe', backgroundColor: '#f0f9ff' }} />
          <input type="tel" placeholder="Phone Number" className="w-full rounded-lg px-4 py-3 text-sm outline-none" style={{ border: '1px solid #e0f2fe', backgroundColor: '#f0f9ff' }} />
          <select className="w-full rounded-lg px-4 py-3 text-sm outline-none" style={{ border: '1px solid #e0f2fe', backgroundColor: '#f0f9ff', color: '#64748b' }}>
            <option>Select Department</option>
            {services.map(s => <option key={s.title}>{s.title}</option>)}
          </select>
          <button type="submit" className="w-full rounded-full py-3 text-white font-medium text-sm" style={{ backgroundColor: '#0ea5e9' }}>
            Request Appointment
          </button>
        </form>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: "'Inter', sans-serif", color: '#0c4a6e' }}>Patient Stories</h2>
        {testimonials.map(t => (
          <blockquote key={t.author} className="mb-8">
            <p className="text-xl italic mb-3" style={{ color: '#0c4a6e' }}>&ldquo;{t.quote}&rdquo;</p>
            <cite className="text-sm not-italic font-medium" style={{ color: '#0ea5e9' }}>— {t.author}</cite>
          </blockquote>
        ))}
      </section>

      {/* Insurance logos */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-center text-sm font-medium mb-6" style={{ color: '#94a3b8' }}>Insurance Partners</p>
        <div className="flex flex-wrap justify-center gap-8">
          {insuranceLogos.map(l => (
            <span key={l} className="text-sm font-medium px-4 py-2 rounded-lg" style={{ color: '#0c4a6e', backgroundColor: '#e0f2fe' }}>{l}</span>
          ))}
        </div>
      </section>

      {/* Location */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Inter', sans-serif", color: '#0c4a6e' }}>Find Us</h2>
        <p className="text-sm mb-6" style={{ color: '#64748b' }}>742 Wellness Boulevard, Suite 200, San Francisco, CA 94110</p>
        <div className="w-full h-64 rounded-xl" style={{ backgroundColor: '#bae6fd' }}>
          <div className="w-full h-full flex items-center justify-center text-4xl">📍</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12" style={{ borderColor: '#e0f2fe' }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-2" style={{ fontFamily: "'Inter', sans-serif", color: '#0c4a6e' }}>ClearPath Medical</h3>
            <p className="text-sm" style={{ color: '#64748b' }}>742 Wellness Blvd, Suite 200</p>
            <p className="text-sm" style={{ color: '#64748b' }}>San Francisco, CA 94110</p>
            <p className="text-sm mt-2" style={{ color: '#0ea5e9' }}>(415) 555-0192</p>
          </div>
          <div>
            <h3 className="font-bold mb-2" style={{ fontFamily: "'Inter', sans-serif", color: '#0c4a6e' }}>Office Hours</h3>
            <p className="text-sm" style={{ color: '#64748b' }}>Monday – Friday: 8:00 AM – 6:00 PM</p>
            <p className="text-sm" style={{ color: '#64748b' }}>Saturday: 9:00 AM – 1:00 PM</p>
            <p className="text-sm" style={{ color: '#64748b' }}>Sunday: Closed</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
