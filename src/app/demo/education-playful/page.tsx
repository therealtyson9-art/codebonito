export default function EducationPlayfulDemo() {
  const subjects = [
    { icon: "🔢", name: "Math", desc: "From counting to fractions, we make numbers fun with games, puzzles, and real-world adventures.", color: "#3b82f6" },
    { icon: "🔬", name: "Science", desc: "Hands-on experiments and nature walks that spark curiosity about how the world really works.", color: "#10b981" },
    { icon: "📖", name: "Reading", desc: "Phonics, comprehension, and a love of stories through interactive read-alouds and book clubs.", color: "#f59e0b" },
    { icon: "✏️", name: "Writing", desc: "Creative journals, story-building exercises, and structured practice to build confident young writers.", color: "#ef4444" },
  ];

  const tutors = [
    { name: "Ms. Hannah Park", subject: "Math & Science", experience: "8 years", bio: "Former elementary teacher who believes every child can be a math whiz with the right encouragement." },
    { name: "Mr. David Reyes", subject: "Reading & Writing", experience: "6 years", bio: "Children's book author and literacy specialist who turns reluctant readers into bookworms." },
    { name: "Ms. Priya Sharma", subject: "All Subjects", experience: "10 years", bio: "Certified special education teacher with a gift for making complex topics simple and fun." },
  ];

  const steps = [
    { num: "1", title: "Tell Us About Your Child", desc: "Share their grade level, subjects, and learning goals so we can find the perfect match." },
    { num: "2", title: "Meet Your Tutor", desc: "We'll pair your child with a friendly, certified tutor who specializes in what they need." },
    { num: "3", title: "Watch Them Shine", desc: "Regular sessions, progress reports, and a whole lot of confidence-building along the way." },
  ];

  const testimonials = [
    { name: "Jessica M.", child: "Mom of Lily, age 9", quote: "My daughter went from dreading math homework to asking for extra problems. BrightMind's tutors are incredible!" },
    { name: "Carlos R.", child: "Dad of Mateo, age 7", quote: "Mateo's reading level jumped two grades in just four months. We couldn't be happier with the results." },
    { name: "Aisha W.", child: "Mom of twins, age 11", quote: "Both my kids look forward to their sessions every week. It doesn't even feel like tutoring to them!" },
  ];

  const plans = [
    { name: "Starter", price: "$35", frequency: "/session", features: ["1 session per week", "One subject focus", "Monthly progress report", "Email support"] },
    { name: "Growth", price: "$29", frequency: "/session", features: ["2 sessions per week", "Up to 2 subjects", "Bi-weekly progress reports", "Parent-tutor calls"], popular: true },
    { name: "Unlimited", price: "$199", frequency: "/month", features: ["Unlimited sessions", "All subjects covered", "Weekly progress reports", "Priority scheduling"] },
  ];

  return (
    <div style={{ fontFamily: "'Comic Neue', cursive" }} className="min-h-screen" >
      <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&display=swap" rel="stylesheet" />

      <div style={{ backgroundColor: "#fef9c3" }}>
        {/* Bouncy Nav */}
        <nav className="px-8 py-5 flex items-center justify-between max-w-6xl mx-auto">
          <span className="text-2xl font-bold" style={{ color: "#2563eb" }}>BrightMind Academy</span>
          <div className="hidden md:flex gap-6 text-base font-bold" style={{ color: "#2563eb" }}>
            <a href="#" className="hover:underline">Subjects</a>
            <a href="#" className="hover:underline">Our Tutors</a>
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
          <button className="px-5 py-2 rounded-full text-white font-bold" style={{ backgroundColor: "#2563eb" }}>Try Free!</button>
        </nav>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6" style={{ color: "#2563eb" }}>Learning should be an adventure!</h1>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: "#4b5563" }}>BrightMind Academy pairs your child with amazing tutors who make math, science, reading, and writing seriously fun. Grades K-8.</p>
            <div className="flex gap-4 flex-wrap">
              <button className="px-6 py-3 rounded-full text-white font-bold text-lg" style={{ backgroundColor: "#2563eb" }}>Schedule a Free Session</button>
              <button className="px-6 py-3 rounded-full font-bold text-lg border-2" style={{ color: "#2563eb", borderColor: "#2563eb" }}>Meet Our Tutors</button>
            </div>
          </div>
          <div className="rounded-3xl flex items-center justify-center h-72" style={{ backgroundColor: "#fde68a" }}>
            <div className="text-center" style={{ color: "#92400e" }}>
              <div className="text-7xl mb-3">🎒</div>
              <p className="font-bold">Student Illustration</p>
            </div>
          </div>
        </section>

        {/* Subjects */}
        <section className="max-w-6xl mx-auto px-8 py-14">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "#2563eb" }}>What We Teach</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {subjects.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-5xl mb-3">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: s.color }}>{s.name}</h3>
                <p className="text-sm" style={{ color: "#6b7280" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Tutors */}
        <section className="py-14" style={{ backgroundColor: "#fffbeb" }}>
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "#2563eb" }}>Meet Our Awesome Tutors</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tutors.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl" style={{ backgroundColor: "#dbeafe" }}>👩‍🏫</div>
                  <h3 className="text-lg font-bold" style={{ color: "#2563eb" }}>{t.name}</h3>
                  <p className="text-sm font-bold mb-1" style={{ color: "#f59e0b" }}>{t.subject} &middot; {t.experience}</p>
                  <p className="text-sm" style={{ color: "#6b7280" }}>{t.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-6xl mx-auto px-8 py-14">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "#2563eb" }}>How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: "#2563eb" }}>{s.num}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1e40af" }}>{s.title}</h3>
                <p className="text-sm" style={{ color: "#6b7280" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14" style={{ backgroundColor: "#dbeafe" }}>
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "#2563eb" }}>What Parents Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
                  <p className="text-sm mb-4 italic" style={{ color: "#4b5563" }}>&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-bold text-sm" style={{ color: "#2563eb" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#9ca3af" }}>{t.child}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-6xl mx-auto px-8 py-14">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "#2563eb" }}>Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.name} className={`bg-white rounded-2xl p-6 shadow-sm text-center ${p.popular ? "ring-4" : ""}`} style={p.popular ? { borderColor: "#2563eb", border: "3px solid #2563eb" } : {}}>
                {p.popular && <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#2563eb" }}>Most Popular</span>}
                <h3 className="text-xl font-bold mt-3" style={{ color: "#2563eb" }}>{p.name}</h3>
                <div className="text-4xl font-bold my-4" style={{ color: "#1e40af" }}>{p.price}<span className="text-base font-normal" style={{ color: "#9ca3af" }}>{p.frequency}</span></div>
                <ul className="space-y-2 text-sm text-left mb-6" style={{ color: "#4b5563" }}>
                  {p.features.map((f) => <li key={f}>&#10003; {f}</li>)}
                </ul>
                <button className="w-full py-3 rounded-full font-bold text-white" style={{ backgroundColor: "#2563eb" }}>Get Started</button>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule CTA */}
        <section className="max-w-6xl mx-auto px-8 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#2563eb" }}>Ready to brighten their future?</h2>
          <p className="text-lg mb-8" style={{ color: "#4b5563" }}>Book a free trial session and see the BrightMind difference for yourself.</p>
          <button className="px-8 py-4 rounded-full text-white font-bold text-lg" style={{ backgroundColor: "#2563eb" }}>Schedule a Free Session</button>
        </section>

        {/* Footer */}
        <footer className="py-10" style={{ backgroundColor: "#2563eb" }}>
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8 text-white">
            <div>
              <h4 className="font-bold text-lg mb-3">BrightMind Academy</h4>
              <p className="text-sm opacity-80">Making learning fun for kids K-8 since 2019. Every child deserves to feel brilliant.</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contact Us</h4>
              <p className="text-sm opacity-80">hello@brightmindacademy.com</p>
              <p className="text-sm opacity-80">(555) 234-5678</p>
              <p className="text-sm opacity-80">Mon-Sat 8am - 7pm</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Follow Along!</h4>
              <p className="text-sm opacity-80">Instagram / Facebook / YouTube</p>
              <p className="text-sm opacity-80 mt-2">Subscribe to our parent newsletter for tips, activities, and updates.</p>
            </div>
          </div>
          <div className="text-center text-sm text-white opacity-60 mt-8">&copy; 2026 BrightMind Academy. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}
