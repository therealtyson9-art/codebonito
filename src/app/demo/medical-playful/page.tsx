export default function MedicalPlayfulDemo() {
  const navLinks = ["Services", "Our Doctors", "Health Tips", "Book Visit"]
  const services = [
    { emoji: "\ud83e\ude7a", title: "Well-Child Visits", desc: "Regular check-ups to track growth, development milestones, and vaccinations from newborn through adolescence.", color: "bg-teal-50 border-teal-200" },
    { emoji: "\ud83e\udda0", title: "Sick Visits", desc: "Same-day appointments for fevers, ear infections, coughs, rashes, and other childhood illnesses.", color: "bg-orange-50 border-orange-200" },
    { emoji: "\ud83d\udc89", title: "Immunizations", desc: "Full CDC-recommended vaccine schedule administered by our gentle, experienced nursing team.", color: "bg-pink-50 border-pink-200" },
    { emoji: "\ud83e\udde0", title: "Behavioral Health", desc: "Screening and support for ADHD, anxiety, and developmental concerns in a judgment-free environment.", color: "bg-purple-50 border-purple-200" },
    { emoji: "\ud83c\udf4e", title: "Nutrition Guidance", desc: "Age-appropriate dietary advice for picky eaters, food allergies, and healthy growth habits.", color: "bg-green-50 border-green-200" },
    { emoji: "\ud83d\ude34", title: "Sleep Consultations", desc: "Help for bedtime struggles, night waking, and establishing healthy sleep routines for every age.", color: "bg-blue-50 border-blue-200" },
  ]
  const doctors = [
    { name: "Dr. Maya Rodriguez", specialty: "Pediatric Medicine", experience: "14 years", color: "border-teal-400", bg: "bg-teal-50", fun: "Collects rubber ducks" },
    { name: "Dr. James Okonkwo", specialty: "Adolescent Medicine", experience: "11 years", color: "border-orange-400", bg: "bg-orange-50", fun: "Plays ukulele for patients" },
    { name: "Dr. Lisa Nakamura", specialty: "Developmental Pediatrics", experience: "9 years", color: "border-pink-400", bg: "bg-pink-50", fun: "Runs a kids book club" },
  ]
  const healthTips = [
    { emoji: "\ud83d\udca7", tip: "Kids aged 4-8 need about 5 cups of water daily. Add fruit slices to make it fun!" },
    { emoji: "\ud83c\udfbd", tip: "Children should get at least 60 minutes of physical activity every day, even on school days." },
    { emoji: "\ud83d\udca4", tip: "School-age kids need 9-12 hours of sleep. A consistent bedtime routine makes all the difference." },
    { emoji: "\ud83e\uddfc", tip: "Teach kids to wash hands for 20 seconds, about the time it takes to sing the ABCs twice." },
  ]
  const testimonials = [
    { name: "Jennifer T.", text: "My daughter used to cry at every doctor visit. Now she asks when we can go back! Dr. Rodriguez is a miracle worker.", stars: 5 },
    { name: "Marcus & Diane W.", text: "We switched to Sunny Peds after our son was diagnosed with ADHD. The entire team has been incredibly supportive and thorough.", stars: 5 },
    { name: "Sarah K.", text: "The online booking is so easy, and they always run on time. Plus, my toddler loves the play area in the waiting room.", stars: 5 },
  ]

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Nunito, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-extrabold tracking-tight text-teal-600">Sunny<span className="text-orange-500">Peds</span> <span className="text-2xl">&#9788;</span></span>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <span key={link} className="text-sm font-semibold text-slate-500 hover:text-teal-600 cursor-pointer">{link}</span>
            ))}
          </div>
          <span className="text-sm font-bold text-white bg-teal-500 px-5 py-2.5 rounded-full cursor-pointer hover:bg-teal-600">Book a Visit</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-orange-50">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="text-6xl mb-6">&#127752;</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-4">
            Little patients,<br /><span className="text-teal-600">big smiles.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-md mx-auto mb-10 leading-relaxed">
            A pediatric practice where kids feel safe, parents feel heard, and every visit ends happier than it started.
          </p>
          <div className="flex justify-center items-center space-x-3">
            <span className="h-12 px-8 flex items-center text-sm font-bold text-white bg-teal-500 rounded-full cursor-pointer hover:bg-teal-600">Schedule Appointment</span>
            <span className="h-12 px-8 flex items-center text-sm font-bold text-teal-600 border-2 border-teal-200 rounded-full cursor-pointer hover:bg-teal-50">Meet Our Doctors</span>
          </div>
          <p className="text-xs text-slate-400 mt-4">Now accepting patients ages 0 to 18</p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-2">What we do best</h2>
          <p className="text-slate-500 max-w-md mx-auto">From first check-ups to teenage years, we have your family covered.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className={`border-2 ${s.color} rounded-2xl p-6`}>
              <div className="text-3xl mb-3">{s.emoji}</div>
              <h3 className="text-base font-bold text-slate-800 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-gradient-to-b from-white to-teal-50/30">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Meet our awesome doctors</h2>
            <p className="text-slate-500 max-w-md mx-auto">Board-certified pediatricians who genuinely love what they do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((d) => (
              <div key={d.name} className={`border-4 ${d.color} rounded-3xl overflow-hidden`}>
                <div className={`w-full aspect-square ${d.bg}`}></div>
                <div className="p-6 text-center">
                  <p className="text-lg font-bold text-slate-800">{d.name}</p>
                  <p className="text-sm text-teal-600 font-semibold mt-0.5">{d.specialty}</p>
                  <p className="text-xs text-slate-400 mt-1">{d.experience} of experience</p>
                  <div className="mt-3 inline-block bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                    Fun fact: {d.fun}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Healthy kids corner</h2>
          <p className="text-slate-500 max-w-md mx-auto">Quick tips to keep your little ones thriving every day.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {healthTips.map((t) => (
            <div key={t.tip} className="flex items-start space-x-4 bg-slate-50 rounded-2xl p-5">
              <span className="text-2xl flex-shrink-0">{t.emoji}</span>
              <p className="text-sm text-slate-600 leading-relaxed">{t.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment Booking */}
      <section className="bg-teal-500">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white mb-2">Ready to visit?</h2>
            <p className="text-teal-100 mb-10">Book an appointment in under a minute. We will take it from there.</p>
            <div className="bg-white rounded-3xl p-8 text-left">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input type="text" placeholder="Child's first name" className="h-11 px-4 text-sm border-2 border-slate-200 rounded-xl bg-white text-slate-800 placeholder-slate-400 outline-none focus:border-teal-400" />
                <input type="text" placeholder="Child's last name" className="h-11 px-4 text-sm border-2 border-slate-200 rounded-xl bg-white text-slate-800 placeholder-slate-400 outline-none focus:border-teal-400" />
              </div>
              <input type="text" placeholder="Parent/guardian name" className="w-full h-11 px-4 text-sm border-2 border-slate-200 rounded-xl bg-white text-slate-800 placeholder-slate-400 outline-none focus:border-teal-400 mb-3" />
              <input type="tel" placeholder="Phone number" className="w-full h-11 px-4 text-sm border-2 border-slate-200 rounded-xl bg-white text-slate-800 placeholder-slate-400 outline-none focus:border-teal-400 mb-3" />
              <select className="w-full h-11 px-4 text-sm border-2 border-slate-200 rounded-xl bg-white text-slate-800 outline-none focus:border-teal-400 mb-4">
                <option>Select visit type</option>
                <option>Well-Child Visit</option>
                <option>Sick Visit (Same Day)</option>
                <option>Immunizations</option>
                <option>Behavioral Screening</option>
              </select>
              <span className="w-full h-12 flex items-center justify-center text-sm font-bold text-white bg-teal-500 rounded-xl cursor-pointer hover:bg-teal-600">Book Appointment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Parents love us</h2>
          <p className="text-slate-500 max-w-md mx-auto">See why families across the city trust SunnyPeds with their children&apos;s health.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border-2 border-slate-100 rounded-2xl p-6">
              <div className="flex space-x-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-orange-400 text-base">&#9733;</span>
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <p className="text-sm font-bold text-slate-800">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <span className="text-lg font-extrabold text-teal-600">Sunny<span className="text-orange-500">Peds</span></span>
              <p className="text-xs text-slate-400 mt-1">456 Sunshine Lane, Suite 100 &middot; Austin, TX 78701</p>
              <p className="text-xs text-slate-400">(512) 555-KIDS &middot; hello@sunnypeds.com</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy", "Terms", "Accessibility", "Contact"].map((link) => (
                <span key={link} className="text-sm text-slate-400 hover:text-teal-600 cursor-pointer">{link}</span>
              ))}
            </div>
          </div>
          <p className="text-xs text-slate-300 mt-6 text-center">&copy; 2026 SunnyPeds Pediatric Clinic. All rights reserved. This site does not provide medical advice.</p>
        </div>
      </footer>
    </div>
  )
}
