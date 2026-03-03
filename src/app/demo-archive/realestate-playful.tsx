export default function RealestatePlayfulDemo() {
  const navLinks = ["How It Works", "Homes", "Calculator", "Stories", "Resources"]

  const steps = [
    { number: "1", title: "Tell Us Your Dream", desc: "Answer a few fun questions about your ideal home — neighborhood vibes, must-haves, deal-breakers, and your budget. Our matching algorithm does the heavy lifting.", emoji: "🏠" },
    { number: "2", title: "Tour Your Matches", desc: "We handpick homes that fit your personality and budget. Schedule tours on your time — evenings, weekends, whenever works. No pressure, just exploring.", emoji: "🔍" },
    { number: "3", title: "Move In & Celebrate", desc: "From offer to closing, we handle the paperwork, negotiations, and inspections. You pop the champagne when you get the keys.", emoji: "🎉" },
  ]

  const homeTypes = [
    { type: "Cozy Starter", range: "$250K - $400K", desc: "Perfect first homes with character. Think updated bungalows, townhomes near transit, and condos with rooftop decks.", vibe: "Budget-friendly" },
    { type: "Family Nest", range: "$400K - $650K", desc: "Three-plus bedrooms, fenced yards, good school districts, and room to grow. Bonus points for a finished basement.", vibe: "Room to grow" },
    { type: "Fixer-Upper Fun", range: "$180K - $350K", desc: "Diamond-in-the-rough properties with great bones. Bring your Pinterest board and a little elbow grease.", vibe: "Creative project" },
    { type: "Urban Cool", range: "$300K - $550K", desc: "Lofts, mid-century apartments, and walkable neighborhoods. Coffee shops downstairs, bike lanes outside.", vibe: "City living" },
  ]

  const stories = [
    { name: "Mia & Jordan", location: "Portland, OR", quote: "We thought buying our first home would be terrifying. Nestling made it feel like an adventure. We found our place in three weeks!", result: "Closed in 28 days" },
    { name: "Carlos R.", location: "Austin, TX", quote: "The mortgage calculator alone saved me from so much stress. I knew exactly what I could afford before I even started looking.", result: "Under budget by $20K" },
    { name: "Aisha & Dev", location: "Raleigh, NC", quote: "As first-generation homebuyers, we had a million questions. The Nestling team answered every single one without making us feel silly.", result: "First-time buyers" },
  ]

  const resources = [
    { title: "First-Timer's Homebuying Checklist", desc: "Everything you need to do before, during, and after buying your first home. Print it, pin it, love it.", tag: "Guide" },
    { title: "Understanding Your Credit Score", desc: "What lenders actually look at, how to improve your score quickly, and why that old gym membership matters.", tag: "Article" },
    { title: "Down Payment Assistance Programs", desc: "State-by-state breakdown of grants, forgivable loans, and programs designed specifically for first-time buyers.", tag: "Resource" },
    { title: "Renting vs. Buying Calculator", desc: "Plug in your numbers and see the real math behind the rent-or-buy decision. Spoiler: it depends.", tag: "Tool" },
  ]

  return (
    <div style={{ fontFamily: "'Mali', sans-serif" }} className="min-h-screen text-gray-800" >
      <link href="https://fonts.googleapis.com/css2?family=Mali:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Fun Nav */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b-2 border-dashed" style={{ borderColor: "#f97316" }}>
        <div className="text-2xl font-bold" style={{ color: "#f97316" }}>Nestling</div>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">{link}</a>
          ))}
        </div>
        <button className="text-sm font-bold text-white px-6 py-2 rounded-full" style={{ backgroundColor: "#f97316" }}>Get Started!</button>
      </nav>

      {/* Illustrated Houses Hero */}
      <section className="py-24 px-8 text-center" style={{ backgroundColor: "#fef3c7" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-4xl mb-4">&#127968; &#127793; &#127968;</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ color: "#f97316" }}>Your First Home Should Feel Like Magic</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">Nestling is the friendly, stress-free way for first-time buyers to find, finance, and close on their very first home. No jargon. No surprises. Just your new front door.</p>
          <div className="flex gap-4 justify-center">
            <button className="text-white font-bold px-8 py-3 rounded-full shadow-lg" style={{ backgroundColor: "#f97316" }}>Find My Home</button>
            <button className="font-bold px-8 py-3 rounded-full border-2" style={{ borderColor: "#f97316", color: "#f97316" }}>Take the Quiz</button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest mb-2 text-center" style={{ color: "#f97316" }}>How It Works</p>
          <h2 className="text-3xl font-bold mb-16 text-center">Three Steps to Your New Home</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((s) => (
              <div key={s.number} className="text-center">
                <div className="text-4xl mb-4">{s.emoji}</div>
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: "#f97316" }}>{s.number}</div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Types */}
      <section className="py-20 px-8" style={{ backgroundColor: "#fef3c7" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#f97316" }}>Home Types</p>
          <h2 className="text-3xl font-bold mb-12">What Kind of Nest Are You Looking For?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {homeTypes.map((h) => (
              <div key={h.type} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-orange-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{h.type}</h3>
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#f97316" }}>{h.vibe}</span>
                </div>
                <p className="text-lg font-bold mb-3" style={{ color: "#f97316" }}>{h.range}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mortgage Calculator Placeholder */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#f97316" }}>Mortgage Calculator</p>
          <h2 className="text-3xl font-bold mb-6">How Much Home Can You Afford?</h2>
          <p className="text-gray-600 mb-8">Plug in your income, savings, and monthly expenses to get a realistic picture of your buying power. No sign-up required.</p>
          <div className="rounded-2xl p-12 border-2 border-dashed flex items-center justify-center" style={{ borderColor: "#f97316", backgroundColor: "#fff7ed" }}>
            <div className="text-center">
              <p className="text-5xl mb-4">&#128200;</p>
              <p className="text-lg font-bold" style={{ color: "#f97316" }}>Interactive Calculator</p>
              <p className="text-sm text-gray-500 mt-2">Enter your details and see your estimated monthly payment, down payment options, and total buying power.</p>
              <button className="mt-6 text-white font-bold px-8 py-3 rounded-full" style={{ backgroundColor: "#f97316" }}>Try the Calculator</button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-8" style={{ backgroundColor: "#fef3c7" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest mb-2 text-center" style={{ color: "#f97316" }}>Happy Homeowners</p>
          <h2 className="text-3xl font-bold mb-12 text-center">Real People, Real Keys, Real Happy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-gray-600 italic mb-4 leading-relaxed">&ldquo;{s.quote}&rdquo;</p>
                <p className="font-bold">{s.name}</p>
                <p className="text-sm text-gray-500">{s.location}</p>
                <p className="text-sm font-bold mt-2" style={{ color: "#f97316" }}>{s.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#f97316" }}>Buyer Resources</p>
          <h2 className="text-3xl font-bold mb-12">Everything You Need to Know</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((r) => (
              <div key={r.title} className="flex gap-4 p-6 rounded-xl border border-orange-100 hover:bg-orange-50 transition-colors">
                <div className="text-xs font-bold px-3 py-1 rounded-full h-fit text-white flex-shrink-0" style={{ backgroundColor: "#f97316" }}>{r.tag}</div>
                <div>
                  <h3 className="font-bold mb-1">{r.title}</h3>
                  <p className="text-sm text-gray-600">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-20 px-8 text-center text-white" style={{ backgroundColor: "#f97316" }}>
        <p className="text-4xl mb-4">&#127969;</p>
        <h2 className="text-4xl font-bold mb-4">Ready to Find Your Nest?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">Take our 2-minute home quiz and get matched with listings that fit your life, your budget, and your vibe.</p>
        <button className="bg-white font-bold px-10 py-3 rounded-full shadow-lg" style={{ color: "#f97316" }}>Start the Quiz!</button>
      </section>

      {/* Fun Footer */}
      <footer className="py-10 px-8 border-t-2 border-dashed" style={{ borderColor: "#f97316", backgroundColor: "#fef3c7" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold" style={{ color: "#f97316" }}>Nestling</div>
          <div className="text-center text-sm text-gray-600">
            <p className="font-bold mb-1">Homebuyer Tip of the Day</p>
            <p>Always get pre-approved before you start touring. It shows sellers you mean business!</p>
          </div>
          <p className="text-xs text-gray-400">&copy; 2025 Nestling. All rights reserved. Equal Housing Opportunity.</p>
        </div>
      </footer>
    </div>
  )
}
