export const dynamic = "force-dynamic";
export default function TravelBrutalistDemo() {
  const destinations = [
    { name: "MONGOLIA", code: "ULN", terrain: "Steppe", temp: "-20 to 35C", note: "Sleep in gers with eagle hunters. No wifi. No roads. Just sky.", price: "$3,200" },
    { name: "PATAGONIA", code: "EZE", terrain: "Glacial", temp: "-5 to 15C", note: "Trek Torres del Paine until your legs give out. Then keep going.", price: "$2,800" },
    { name: "ETHIOPIA", code: "ADD", terrain: "Highland", temp: "10 to 25C", note: "Rock-hewn churches, coffee ceremonies, and the Danakil Depression.", price: "$2,400" },
    { name: "SVALBARD", code: "LYR", terrain: "Arctic", temp: "-30 to 7C", note: "Polar bears outnumber people. Bring courage, not luggage.", price: "$4,100" },
    { name: "BORNEO", code: "BKI", terrain: "Jungle", temp: "24 to 33C", note: "Orangutans, cave networks, and headhunter heritage trails.", price: "$2,600" },
  ]

  const rules = [
    "NO RESORTS. If it has a pool bar, we are not going.",
    "PACK LIGHT. One bag. If you cannot carry it running, leave it.",
    "EAT LOCAL. Street food only. Your stomach will adapt or you will.",
    "NO ITINERARIES. We have directions, not schedules.",
    "LEAVE NO TRACE. Take photos, leave footprints, carry out everything.",
    "TALK TO STRANGERS. The best stories start with 'excuse me.'",
  ]

  const calendar = [
    { month: "MAR 2025", trip: "Mongolia: Eagle Festival", spots: 4, status: "FILLING" },
    { month: "MAY 2025", trip: "Patagonia: End-to-End Trek", spots: 2, status: "ALMOST GONE" },
    { month: "JUL 2025", trip: "Svalbard: Midnight Sun", spots: 6, status: "OPEN" },
    { month: "SEP 2025", trip: "Ethiopia: Omo Valley", spots: 5, status: "OPEN" },
    { month: "NOV 2025", trip: "Borneo: Rainforest Deep", spots: 1, status: "LAST SPOT" },
  ]

  const gear = [
    { item: "60L PACK", brand: "Osprey Atmos", note: "The only bag you need. Period." },
    { item: "HEADLAMP", brand: "Petzl Actik", note: "Because you will be somewhere without electricity." },
    { item: "WATER FILTER", brand: "Sawyer Squeeze", note: "Drink from any river. Seriously." },
    { item: "MERINO SOCKS", brand: "Darn Tough", note: "Your feet are everything. Treat them right." },
  ]

  return (
    <div style={{ backgroundColor: "#ec4899", fontFamily: "'Bungee', 'Inter', sans-serif" }} className="min-h-screen text-black">
      <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Inter:wght@400;500&display=swap" rel="stylesheet" />

      {/* Stamp Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b-4 border-black">
        <div className="flex items-center gap-3">
          <div className="border-4 border-black px-3 py-1 rotate-[-2deg]">
            <span className="text-2xl" style={{ fontFamily: "'Bungee', sans-serif" }}>PASSPORT PUNKS</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
          <a href="#destinations" className="underline underline-offset-4">DESTINATIONS</a>
          <a href="#rules" className="underline underline-offset-4">THE RULES</a>
          <a href="#calendar" className="underline underline-offset-4">CALENDAR</a>
          <a href="#join" className="underline underline-offset-4">JOIN</a>
        </div>
        <button className="bg-black text-white px-5 py-2 text-sm" style={{ fontFamily: "'Bungee', sans-serif" }}>APPLY</button>
      </nav>

      {/* Passport Stamp Hero */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block border-4 border-black p-8 rotate-[-1deg] mb-8" style={{ borderRadius: "50%" }}>
            <p className="text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>EST. 2019</p>
          </div>
          <h1 className="text-6xl md:text-8xl leading-none mb-6" style={{ fontFamily: "'Bungee', sans-serif" }}>
            TRAVEL IS<br />NOT TOURISM
          </h1>
          <p className="text-xl max-w-xl mx-auto mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            We go where guidebooks end. No five-star hotels. No airport transfers. Just raw, unfiltered planet Earth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["MONGOLIA", "PATAGONIA", "SVALBARD"].map((stamp) => (
              <div key={stamp} className="border-4 border-black px-4 py-2 rotate-[2deg]" style={{ fontFamily: "'Bungee', sans-serif" }}>
                {stamp}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="px-6 py-16 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl mb-12" style={{ fontFamily: "'Bungee', sans-serif" }}>WHERE WE GO</h2>
          {destinations.map((dest, i) => (
            <div key={dest.code} className="border-b-2 border-white py-8 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-4 md:w-1/3">
                <span className="text-3xl" style={{ fontFamily: "'Bungee', sans-serif", color: "#ec4899" }}>{dest.code}</span>
                <span className="text-xl" style={{ fontFamily: "'Bungee', sans-serif" }}>{dest.name}</span>
              </div>
              <div className="md:w-1/2">
                <p className="text-sm mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>{dest.note}</p>
                <p className="text-xs opacity-60" style={{ fontFamily: "'Inter', sans-serif" }}>{dest.terrain} &middot; {dest.temp}</p>
              </div>
              <div className="md:w-1/6 text-right">
                <span className="text-xl" style={{ fontFamily: "'Bungee', sans-serif", color: "#ec4899" }}>{dest.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Rules */}
      <section id="rules" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-4" style={{ fontFamily: "'Bungee', sans-serif" }}>THE RULES</h2>
          <p className="text-base mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>Non-negotiable. Read them. Live them. Or stay home.</p>
          <div className="space-y-4">
            {rules.map((rule, i) => (
              <div key={i} className="flex items-start gap-4 border-4 border-black p-4" style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}>
                <span className="text-3xl" style={{ fontFamily: "'Bungee', sans-serif" }}>0{i + 1}</span>
                <p className="text-base pt-1" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trip Calendar */}
      <section id="calendar" className="px-6 py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-12" style={{ fontFamily: "'Bungee', sans-serif" }}>UPCOMING TRIPS</h2>
          {calendar.map((trip) => (
            <div key={trip.month} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white py-6 gap-2">
              <span className="text-lg" style={{ fontFamily: "'Bungee', sans-serif", color: "#ec4899" }}>{trip.month}</span>
              <span className="text-sm flex-1 sm:ml-8" style={{ fontFamily: "'Inter', sans-serif" }}>{trip.trip}</span>
              <div className="flex items-center gap-4">
                <span className="text-xs px-3 py-1 border border-white" style={{ fontFamily: "'Inter', sans-serif" }}>{trip.spots} SPOTS</span>
                <span className="text-xs" style={{ fontFamily: "'Bungee', sans-serif", color: trip.status === "LAST SPOT" ? "#fbbf24" : "#ec4899" }}>{trip.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gear List */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-12" style={{ fontFamily: "'Bungee', sans-serif" }}>GEAR LIST</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {gear.map((g) => (
              <div key={g.item} className="border-4 border-black p-6">
                <h3 className="text-xl mb-1" style={{ fontFamily: "'Bungee', sans-serif" }}>{g.item}</h3>
                <p className="text-sm mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{g.brand}</p>
                <p className="text-sm opacity-80" style={{ fontFamily: "'Inter', sans-serif" }}>{g.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Collective */}
      <section id="join" className="px-6 py-20 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: "'Bungee', sans-serif" }}>JOIN THE COLLECTIVE</h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            We accept 200 new members per year. Applications open quarterly. Tell us where you have been and where you need to go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="YOUR EMAIL" className="px-6 py-3 text-sm bg-white text-black w-72" style={{ fontFamily: "'Inter', sans-serif" }} />
            <button className="px-8 py-3 text-sm" style={{ backgroundColor: "#ec4899", fontFamily: "'Bungee', sans-serif" }}>APPLY NOW</button>
          </div>
        </div>
      </section>

      {/* Stamp Footer */}
      <footer className="px-6 py-8 border-t-4 border-black flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="border-4 border-black px-3 py-1 rotate-[-1deg]">
          <span className="text-sm" style={{ fontFamily: "'Bungee', sans-serif" }}>PASSPORT PUNKS</span>
        </div>
        <div className="flex gap-6 text-xs" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
          <span>47 COUNTRIES</span>
          <span>1,200 MEMBERS</span>
          <span>0 RESORTS</span>
        </div>
        <p className="text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>&copy; 2025 PASSPORT PUNKS COLLECTIVE</p>
      </footer>
    </div>
  )
}
