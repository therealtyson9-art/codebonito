export default function TravelBrutalistDemo() {
  const coordinates = [
    { code: "TYO", name: "TOKYO", lat: "35.6762N", lng: "139.6503E", status: "OPEN", temp: "18C", flights: "3/day" },
    { code: "REK", name: "REYKJAVIK", lat: "64.1466N", lng: "21.9426W", status: "OPEN", temp: "2C", flights: "1/day" },
    { code: "NBO", name: "NAIROBI", lat: "1.2921S", lng: "36.8219E", status: "OPEN", temp: "26C", flights: "2/day" },
    { code: "BOG", name: "BOGOTA", lat: "4.7110N", lng: "74.0721W", status: "OPEN", temp: "14C", flights: "2/day" },
    { code: "TBS", name: "TBILISI", lat: "41.7151N", lng: "44.8271E", status: "OPEN", temp: "12C", flights: "1/day" },
  ]
  const catalog = [
    { id: "RT-001", name: "Trans-Siberian Crossing", days: 14, price: "$3,200", diff: "HARD", note: "Moscow to Vladivostok by rail. No flights. No shortcuts." },
    { id: "RT-002", name: "Sahara Traverse", days: 10, price: "$2,800", diff: "EXTREME", note: "Camel caravan from Marrakech to Merzouga. Sleep under stars." },
    { id: "RT-003", name: "Patagonia Circuit", days: 12, price: "$2,400", diff: "MODERATE", note: "Torres del Paine loop. Glaciers, wind, silence." },
    { id: "RT-004", name: "Mekong Drift", days: 8, price: "$1,600", diff: "EASY", note: "Slow boat from Luang Prabang south. River time." },
  ]
  const routes = [
    { from: "JFK", to: "NRT", dist: "6,739mi", time: "14h 10m", cost: "$847", stops: "0" },
    { from: "LAX", to: "KEF", dist: "4,249mi", time: "9h 40m", cost: "$612", stops: "0" },
    { from: "ORD", to: "JRO", dist: "8,306mi", time: "17h 55m", cost: "$1,104", stops: "1" },
    { from: "MIA", to: "BOG", dist: "1,788mi", time: "3h 50m", cost: "$328", stops: "0" },
    { from: "SFO", to: "TBS", dist: "7,181mi", time: "15h 30m", cost: "$936", stops: "1" },
  ]
  const packingList = [
    "1x passport (valid 6mo+)", "1x photocopy of passport", "2x quick-dry shirts", "1x rain shell", "1x headlamp",
    "1x water purification tabs", "1x first-aid kit (basic)", "1x power bank 20000mAh", "1x universal adapter", "cash (USD, local)",
  ]
  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Space Mono', monospace" }}>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      <nav className="border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="text-sm font-bold tracking-widest" style={{ color: "#22c55e" }}>[DEPARTURE]</span>
          <div className="hidden md:flex space-x-6 text-xs text-neutral-500">
            <span className="hover:text-white cursor-pointer">COORDINATES</span>
            <span className="hover:text-white cursor-pointer">CATALOG</span>
            <span className="hover:text-white cursor-pointer">ROUTES</span>
            <span className="hover:text-white cursor-pointer">PACK</span>
          </div>
          <span className="text-xs text-neutral-600">SYS.ONLINE</span>
        </div>
      </nav>
      <section className="max-w-6xl mx-auto px-4 py-32">
        <h1 className="text-8xl font-bold leading-none tracking-tighter">GO.<br/>NOW.</h1>
        <p className="text-neutral-500 text-sm mt-6 max-w-md">No resorts. No guided tours. No hand-holding. Just raw coordinates and a departure time. The rest is on you.</p>
        <div className="mt-8 flex space-x-4">
          <button className="h-10 px-6 text-xs font-bold border border-white text-white hover:bg-white hover:text-black transition-colors">[ENTER]</button>
          <button className="h-10 px-6 text-xs font-bold text-neutral-500 border border-neutral-700 hover:border-neutral-400 transition-colors">[MANUAL]</button>
        </div>
      </section>
      <section className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-xs tracking-widest mb-8" style={{ color: "#22c55e" }}>// DESTINATION_COORDINATES</h2>
          <div className="space-y-4">
            {coordinates.map((c) => (
              <div key={c.code} className="flex flex-wrap items-center justify-between border-b border-neutral-900 pb-3 text-xs">
                <span className="font-bold text-lg tracking-wider w-16">{c.code}</span>
                <span className="text-neutral-400 w-28">{c.name}</span>
                <span className="text-neutral-600">{c.lat}</span>
                <span className="text-neutral-600">{c.lng}</span>
                <span style={{ color: "#22c55e" }}>{c.status}</span>
                <span className="text-neutral-500">{c.temp}</span>
                <span className="text-neutral-600">{c.flights}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-xs tracking-widest mb-8" style={{ color: "#22c55e" }}>// TRIP_CATALOG</h2>
          <div className="space-y-6">
            {catalog.map((t) => (
              <div key={t.id} className="border border-neutral-800 p-5">
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <span className="text-xs text-neutral-600">{t.id}</span>
                  <span className="text-xs font-bold" style={{ color: t.diff === "EXTREME" ? "#ef4444" : t.diff === "HARD" ? "#f59e0b" : "#22c55e" }}>{t.diff}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{t.name}</h3>
                <p className="text-sm text-neutral-500 mb-3">{t.note}</p>
                <div className="flex space-x-6 text-xs text-neutral-600">
                  <span>{t.days} days</span>
                  <span>{t.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-xs tracking-widest mb-8" style={{ color: "#22c55e" }}>// ROUTE_DATA</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead><tr className="text-left text-neutral-600 border-b border-neutral-800">
                <th className="pb-3 pr-6">ORIGIN</th><th className="pb-3 pr-6">DEST</th><th className="pb-3 pr-6">DIST</th><th className="pb-3 pr-6">TIME</th><th className="pb-3 pr-6">COST</th><th className="pb-3">STOPS</th>
              </tr></thead>
              <tbody>
                {routes.map((r) => (
                  <tr key={r.from + r.to} className="border-b border-neutral-900">
                    <td className="py-3 pr-6 font-bold">{r.from}</td>
                    <td className="py-3 pr-6 font-bold">{r.to}</td>
                    <td className="py-3 pr-6 text-neutral-400">{r.dist}</td>
                    <td className="py-3 pr-6 text-neutral-400">{r.time}</td>
                    <td className="py-3 pr-6" style={{ color: "#22c55e" }}>{r.cost}</td>
                    <td className="py-3 text-neutral-500">{r.stops}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-xs tracking-widest mb-8" style={{ color: "#22c55e" }}>// PACKING_LIST</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {packingList.map((item, i) => (
              <div key={i} className="flex items-center space-x-3 text-sm text-neutral-400 py-1">
                <span className="text-xs text-neutral-700">[{String(i).padStart(2, "0")}]</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-700 mt-6">* One bag. Max 7kg carry-on. No checked luggage.</p>
        </div>
      </section>
      <section className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h2 className="text-xs tracking-widest mb-4" style={{ color: "#22c55e" }}>// BOOK_DEPARTURE</h2>
          <p className="text-neutral-500 text-sm mb-8 max-w-md mx-auto">Enter your code. Pick a date. Show up at the gate. That is the entire process.</p>
          <div className="flex justify-center space-x-3">
            <div className="w-40 h-10 border border-neutral-700 bg-neutral-950" />
            <button className="h-10 px-8 text-xs font-bold text-black transition-colors" style={{ backgroundColor: "#22c55e" }}>[BOOK]</button>
          </div>
          <p className="text-xs text-neutral-700 mt-4">No refunds. No cancellations. Commit or stay home.</p>
        </div>
      </section>
      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-8 flex justify-between items-center text-xs text-neutral-700">
          <span>[DEPARTURE] v3.1.0</span>
          <span>&copy; 2026 // ALL_RIGHTS_RESERVED</span>
        </div>
      </footer>
    </div>
  )
}
