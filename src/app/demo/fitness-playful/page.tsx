export const dynamic = "force-dynamic";
export default function FitnessPlayfulDemo() {
  const classes = [
    { name: 'HIIT Burn', time: '6:00 AM', trainer: 'Coach Mia', color: '#ff6b35' },
    { name: 'Power Yoga', time: '7:30 AM', trainer: 'Jay S.', color: '#7b2ff7' },
    { name: 'Spin Cycle', time: '9:00 AM', trainer: 'Coach Dante', color: '#ff6b35' },
    { name: 'Boxing Fit', time: '12:00 PM', trainer: 'Rosa L.', color: '#7b2ff7' },
    { name: 'Pilates Core', time: '4:00 PM', trainer: 'Elena K.', color: '#ff6b35' },
    { name: 'Dance Cardio', time: '6:30 PM', trainer: 'Coach Mia', color: '#7b2ff7' },
  ]
  const trainers = [
    { name: 'Coach Mia', specialty: 'HIIT & Dance', bio: 'Former pro dancer turned fitness coach. Brings the energy every session.' },
    { name: 'Dante Brooks', specialty: 'Cycling & Strength', bio: 'Competitive cyclist. Believes everyone has a finish line in them.' },
    { name: 'Rosa Linares', specialty: 'Boxing & MMA', bio: 'Amateur boxing champ. Makes fitness feel like a party.' },
    { name: 'Jay Sandoval', specialty: 'Yoga & Mobility', bio: 'Yoga instructor for 8 years. Focused on breath and balance.' },
  ]
  const tiers = [
    { name: 'Starter', price: '$29', period: '/mo', features: ['Gym floor access', '2 classes/week', 'Locker room'], highlighted: false },
    { name: 'All-In', price: '$59', period: '/mo', features: ['Unlimited classes', 'Personal locker', 'Guest passes', 'Sauna access'], highlighted: true },
    { name: 'Elite', price: '$99', period: '/mo', features: ['Everything in All-In', '4 PT sessions/mo', 'Nutrition coaching', 'Priority booking'], highlighted: false },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fefce8', fontFamily: "'Quicksand', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-extrabold" style={{ fontFamily: "'Nunito', sans-serif", color: '#ff6b35' }}>PULSEFIT</span>
          <div className="hidden md:flex items-center gap-4">
            {['Classes', 'Trainers', 'Pricing', 'Gallery'].map(link => (
              <a key={link} href="#" className="text-sm font-semibold px-4 py-2 rounded-full transition hover:opacity-80" style={{ color: '#4a3728' }}>{link}</a>
            ))}
            <a href="#" className="text-sm font-bold text-white px-5 py-2 rounded-full" style={{ background: 'linear-gradient(135deg, #ff6b35, #7b2ff7)' }}>Join Now</a>
          </div>
        </div>
      </nav>

      {/* Hero — angled split */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #ff6b35 50%, #7b2ff7 50%, #7b2ff7 100%)', opacity: 0.1 }} />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6" style={{ fontFamily: "'Nunito', sans-serif", color: '#4a3728' }}>
              Sweat. <span style={{ color: '#ff6b35' }}>Smile.</span> <span style={{ color: '#7b2ff7' }}>Repeat.</span>
            </h1>
            <p className="text-lg mb-8 font-medium" style={{ color: '#78716c' }}>
              Fitness should be fun, not a chore. Join a community that celebrates every rep, every step, every drop of sweat.
            </p>
            <button className="text-white font-bold px-8 py-4 rounded-full text-sm transition hover:scale-105" style={{ background: 'linear-gradient(135deg, #ff6b35, #7b2ff7)' }}>
              Start Your Free Trial
            </button>
          </div>
          <div className="rounded-3xl aspect-square flex items-center justify-center text-8xl" style={{ backgroundColor: '#fff', border: '4px solid #ff6b35' }}>
            💪
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-extrabold text-center mb-12" style={{ fontFamily: "'Nunito', sans-serif", color: '#4a3728' }}>Today&apos;s Classes</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map(c => (
            <div key={c.name + c.time} className="rounded-2xl p-5 bg-white transition hover:scale-[1.02]" style={{ borderLeft: `4px solid ${c.color}` }}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold" style={{ fontFamily: "'Nunito', sans-serif", color: '#4a3728' }}>{c.name}</h3>
                <span className="text-xs font-bold px-2 py-1 rounded-full text-white" style={{ backgroundColor: c.color }}>{c.time}</span>
              </div>
              <p className="text-sm" style={{ color: '#78716c' }}>{c.trainer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trainers */}
      <section className="py-20" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-12" style={{ fontFamily: "'Nunito', sans-serif", color: '#4a3728' }}>Your Trainers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map(t => (
              <div key={t.name} className="text-center">
                <div className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl" style={{ background: 'linear-gradient(135deg, #ff6b35, #7b2ff7)' }}>
                  <span className="bg-white w-24 h-24 rounded-full flex items-center justify-center text-3xl">🏋️</span>
                </div>
                <h3 className="font-bold" style={{ fontFamily: "'Nunito', sans-serif", color: '#4a3728' }}>{t.name}</h3>
                <p className="text-xs font-semibold mb-2" style={{ color: '#7b2ff7' }}>{t.specialty}</p>
                <p className="text-sm" style={{ color: '#78716c' }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-extrabold text-center mb-12" style={{ fontFamily: "'Nunito', sans-serif", color: '#4a3728' }}>Membership Plans</h2>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {tiers.map(t => (
            <div key={t.name} className={`rounded-3xl p-8 text-center transition hover:scale-[1.03] ${t.highlighted ? 'text-white' : 'bg-white'}`}
              style={t.highlighted ? { background: 'linear-gradient(135deg, #ff6b35, #7b2ff7)' } : { border: '2px solid #e5e5e5' }}>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Nunito', sans-serif" }}>{t.name}</h3>
              <p className="text-4xl font-black mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>{t.price}<span className="text-sm font-medium">{t.period}</span></p>
              <ul className="text-sm space-y-2 mt-6 mb-8">
                {t.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <button className={`w-full py-3 rounded-full font-bold text-sm transition ${t.highlighted ? 'bg-white' : ''}`}
                style={t.highlighted ? { color: '#ff6b35' } : { background: 'linear-gradient(135deg, #ff6b35, #7b2ff7)', color: '#fff' }}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-extrabold text-center mb-12" style={{ fontFamily: "'Nunito', sans-serif", color: '#4a3728' }}>Life at PulseFit</h2>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {['🧘', '🥊', '🚴', '🏃', '🤸', '💃'].map((emoji, i) => (
            <div key={i} className="rounded-2xl overflow-hidden flex items-center justify-center text-5xl break-inside-avoid" style={{ backgroundColor: i % 2 === 0 ? '#ffe8dc' : '#ede5ff', height: i % 3 === 0 ? '200px' : '150px' }}>
              {emoji}
            </div>
          ))}
        </div>
      </section>

      {/* App CTA */}
      <section className="mx-6 my-16 rounded-3xl py-16 px-8 text-center text-white" style={{ background: 'linear-gradient(135deg, #ff6b35, #7b2ff7)' }}>
        <h2 className="text-3xl font-extrabold mb-4" style={{ fontFamily: "'Nunito', sans-serif" }}>Get the PulseFit App</h2>
        <p className="mb-8 max-w-md mx-auto">Book classes, track workouts, and connect with your trainers — all from your phone.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-black font-bold px-6 py-3 rounded-full text-sm">App Store</button>
          <button className="bg-white text-black font-bold px-6 py-3 rounded-full text-sm">Google Play</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6" style={{ backgroundColor: '#ff6b35' }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <p className="font-extrabold text-xl mb-4" style={{ fontFamily: "'Nunito', sans-serif" }}>PULSEFIT</p>
          <p className="text-sm mb-2">825 Energy Drive, Austin, TX 78701</p>
          <p className="text-sm mb-4">(512) 555-0234 | hello@pulsefit.gym</p>
          <p className="text-xs opacity-70">Open Daily 5AM – 11PM</p>
        </div>
      </footer>
    </div>
  )
}
