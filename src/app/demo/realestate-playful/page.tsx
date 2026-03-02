export default function RealEstatePlayfulDemo() {
  const properties = [
    { address: "24 Sunflower Lane, Portland, OR", price: "$475,000", beds: 3, baths: 2, sqft: "1,850", tag: "Hot Deal!", tagColor: "#f97316", img: "bg-teal-50" },
    { address: "7 Breezy Court, Bend, OR", price: "$612,000", beds: 4, baths: 3, sqft: "2,400", tag: "New!", tagColor: "#14b8a6", img: "bg-orange-50" },
    { address: "130 Willow Park Ave, Eugene, OR", price: "$389,000", beds: 2, baths: 1, sqft: "1,200", tag: "Open House", tagColor: "#a855f7", img: "bg-purple-50" },
    { address: "55 Cedar Heights Blvd, Salem, OR", price: "$545,000", beds: 3, baths: 2, sqft: "2,100", tag: "Hot Deal!", tagColor: "#f97316", img: "bg-amber-50" },
  ]

  const neighborhoods = [
    { name: "Pearl District", emoji: "\u2728", vibe: "Artsy lofts and rooftop bars", avgPrice: "$580K" },
    { name: "Hawthorne", emoji: "\ud83c\udf3f", vibe: "Bohemian vibes and vintage shops", avgPrice: "$510K" },
    { name: "Alberta Arts", emoji: "\ud83c\udfa8", vibe: "Murals, galleries, and food carts", avgPrice: "$465K" },
    { name: "Sellwood", emoji: "\ud83c\udf33", vibe: "Quiet streets and antique stores", avgPrice: "$525K" },
    { name: "Division", emoji: "\ud83c\udf55", vibe: "Foodie paradise with new builds", avgPrice: "$495K" },
    { name: "St. Johns", emoji: "\ud83c\udf09", vibe: "Bridge views and community spirit", avgPrice: "$430K" },
  ]

  const agents = [
    { name: "Priya Sharma", tagline: "Your Portland bestie with keys!", deals: 87, rating: "4.9", funFact: "Has visited every food cart in SE Portland" },
    { name: "Jake Olsen", tagline: "Turning house hunters into homeowners!", deals: 64, rating: "4.8", funFact: "Former carpenter who knows every wall stud" },
    { name: "Maria Santos", tagline: "Making first homes feel like forever homes!", deals: 103, rating: "5.0", funFact: "Bakes cookies for every closing day" },
  ]

  const happyClients = [
    { quote: "Priya made house hunting feel like a fun adventure instead of a chore. We found our dream home on the third showing!", name: "Leo & Nadia Park", emoji: "\ud83c\udfe0" },
    { quote: "Jake literally crawled under the house to check the foundation for us. That is dedication. Five stars forever.", name: "Casey Brennan", emoji: "\u2b50" },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-800" style={{ fontFamily: "Poppins, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">\ud83c\udfe1</span>
          <span className="text-xl font-bold" style={{ color: "#14b8a6" }}>Nestled</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {["Browse", "Neighborhoods", "Agents", "Calculator", "About"].map((item) => (
            <span key={item} className="text-sm text-slate-500 hover:text-slate-800 cursor-pointer transition-colors font-medium">{item}</span>
          ))}
        </div>
        <span className="text-sm font-semibold text-white px-5 py-2 rounded-full cursor-pointer transition-colors" style={{ backgroundColor: "#f97316" }}>Get Started!</span>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 text-center">
        <p className="text-4xl mb-4">\ud83c\udfe0 \u2764\ufe0f</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Home is where the <span style={{ color: "#f97316" }}>heart</span> is!
        </h1>
        <p className="mt-4 text-lg text-slate-500 max-w-lg mx-auto">Finding your perfect place should be exciting, not exhausting. Let us make it fun!</p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <span className="px-6 py-3 text-sm font-semibold text-white rounded-full cursor-pointer" style={{ backgroundColor: "#14b8a6" }}>Browse Homes</span>
          <span className="px-6 py-3 text-sm font-semibold rounded-full cursor-pointer border-2" style={{ borderColor: "#f97316", color: "#f97316" }}>Take the Quiz!</span>
        </div>
      </section>

      {/* Property Cards */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8">Fresh on the market \ud83c\udf1f</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((p) => (
            <div key={p.address} className="rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow cursor-pointer">
              <div className={`aspect-[4/3] ${p.img} relative`}>
                <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: p.tagColor }}>{p.tag}</span>
              </div>
              <div className="p-4">
                <p className="text-xl font-bold" style={{ color: "#14b8a6" }}>{p.price}</p>
                <p className="text-sm text-slate-600 mt-1">{p.address}</p>
                <div className="flex items-center space-x-3 mt-2 text-xs text-slate-400 font-medium">
                  <span>\ud83d\udecf\ufe0f {p.beds}</span>
                  <span>\ud83d\udebf {p.baths}</span>
                  <span>\ud83d\udccf {p.sqft}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Neighborhood Badges */}
      <section className="py-16" style={{ backgroundColor: "#f0fdfa" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-2">Explore neighborhoods \ud83d\uddfa\ufe0f</h2>
          <p className="text-sm text-slate-500 mb-8">Portland has a vibe for everyone. Find yours!</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {neighborhoods.map((n) => (
              <div key={n.name} className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow cursor-pointer border border-teal-100">
                <p className="text-2xl mb-2">{n.emoji}</p>
                <h3 className="text-base font-bold">{n.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{n.vibe}</p>
                <p className="text-sm font-bold mt-3" style={{ color: "#14b8a6" }}>{n.avgPrice} avg</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Meet your crew \ud83d\udc4b</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agents.map((a) => (
            <div key={a.name} className="rounded-2xl border-2 p-6 text-center hover:shadow-lg transition-shadow" style={{ borderColor: "#14b8a6" }}>
              <div className="w-20 h-20 rounded-full mx-auto mb-4" style={{ backgroundColor: "#e0f2fe" }} />
              <h3 className="text-lg font-bold">{a.name}</h3>
              <p className="text-sm font-medium mt-1" style={{ color: "#f97316" }}>{a.tagline}</p>
              <div className="flex justify-center gap-4 mt-3 text-xs text-slate-500">
                <span>{a.deals} deals</span>
                <span>\u2b50 {a.rating}</span>
              </div>
              <p className="text-xs text-slate-400 mt-3 italic">Fun fact: {a.funFact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mortgage Calculator Placeholder */}
      <section className="py-16" style={{ backgroundColor: "#fff7ed" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-3xl mb-3">\ud83e\uddf0</p>
          <h2 className="text-2xl font-bold">Mortgage Calculator</h2>
          <p className="text-sm text-slate-500 mt-2 mb-8">Crunch the numbers and see what you can afford!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 text-left">
              <label className="text-xs font-semibold text-slate-600">Home Price</label>
              <div className="mt-2 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-400">$450,000</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-left">
              <label className="text-xs font-semibold text-slate-600">Down Payment</label>
              <div className="mt-2 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-400">20%</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-left">
              <label className="text-xs font-semibold text-slate-600">Interest Rate</label>
              <div className="mt-2 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-400">6.5%</div>
            </div>
          </div>
          <div className="mt-6 bg-white rounded-xl p-6 inline-block">
            <p className="text-xs text-slate-400">Estimated Monthly Payment</p>
            <p className="text-3xl font-bold" style={{ color: "#14b8a6" }}>$2,275/mo</p>
          </div>
        </div>
      </section>

      {/* Happy Clients */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Happy homeowners \ud83c\udf89</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {happyClients.map((c) => (
            <div key={c.name} className="rounded-2xl p-6 border border-slate-100 bg-slate-50">
              <p className="text-2xl mb-3">{c.emoji}</p>
              <p className="text-sm text-slate-600 leading-relaxed italic">&ldquo;{c.quote}&rdquo;</p>
              <p className="text-sm font-bold mt-4" style={{ color: "#14b8a6" }}>{c.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-10 px-6" style={{ backgroundColor: "#14b8a6" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">\ud83c\udfe1</span>
            <div>
              <span className="text-lg font-bold">Nestled</span>
              <p className="text-xs text-teal-100">Portland&apos;s friendliest real estate team</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            {["Browse", "Neighborhoods", "Agents", "Blog", "Contact"].map((i) => (
              <span key={i} className="text-sm text-teal-100 hover:text-white cursor-pointer transition-colors">{i}</span>
            ))}
          </div>
          <span className="text-xs text-teal-200">&copy; 2026 Nestled Real Estate</span>
        </div>
      </footer>
    </div>
  )
}
