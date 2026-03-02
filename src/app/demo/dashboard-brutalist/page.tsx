export default function DashboardBrutalistDemo() {
  const stats = [
    { label: "TOTAL REVENUE", value: "$127,840", delta: "+14.2%", direction: "UP" },
    { label: "ACTIVE USERS", value: "9,312", delta: "+6.8%", direction: "UP" },
    { label: "CHURN RATE", value: "2.1%", delta: "-0.3%", direction: "DOWN" },
    { label: "MRR", value: "$38,450", delta: "+9.7%", direction: "UP" },
  ];

  const navItems = [
    { label: "OVERVIEW", active: true },
    { label: "ANALYTICS", active: false },
    { label: "USERS", active: false },
    { label: "REVENUE", active: false },
    { label: "LOGS", active: false },
    { label: "SYSTEM", active: false },
  ];

  const transactions = [
    { id: "TXN-0041", user: "MARCUS_W", amount: "$2,340.00", type: "SUBSCRIPTION", status: "COMPLETE", ts: "2026-02-28 14:32:07" },
    { id: "TXN-0040", user: "ELENA_R", amount: "$890.00", type: "ONE-TIME", status: "COMPLETE", ts: "2026-02-28 13:18:45" },
    { id: "TXN-0039", user: "CHEN_L", amount: "$1,200.00", type: "SUBSCRIPTION", status: "PENDING", ts: "2026-02-28 11:05:22" },
    { id: "TXN-0038", user: "PRIYA_K", amount: "$450.00", type: "REFUND", status: "PROCESSED", ts: "2026-02-27 22:41:09" },
    { id: "TXN-0037", user: "JAMES_O", amount: "$3,100.00", type: "SUBSCRIPTION", status: "COMPLETE", ts: "2026-02-27 19:27:33" },
    { id: "TXN-0036", user: "SOFIA_M", amount: "$780.00", type: "ONE-TIME", status: "FAILED", ts: "2026-02-27 16:54:18" },
  ];

  const chartData = [
    { month: "SEP", value: 42 },
    { month: "OCT", value: 58 },
    { month: "NOV", value: 35 },
    { month: "DEC", value: 72 },
    { month: "JAN", value: 64 },
    { month: "FEB", value: 89 },
  ];

  const activityLog = [
    { time: "14:32:07", event: "PAYMENT RECEIVED", detail: "TXN-0041 // $2,340.00" },
    { time: "14:28:41", event: "USER SIGNUP", detail: "NEW_USER // elena.r@mail.com" },
    { time: "14:15:03", event: "DEPLOY SUCCESS", detail: "BUILD #847 // PROD" },
    { time: "13:58:22", event: "ALERT TRIGGERED", detail: "CPU > 85% // NODE-03" },
    { time: "13:42:19", event: "CONFIG UPDATED", detail: "RATE_LIMIT // 1000/min" },
  ];

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "'Space Mono', monospace" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>

      {/* NAV */}
      <nav className="border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="text-lg font-bold tracking-widest">[ SYSTEM_DASH ]</div>
          <div className="hidden md:flex items-center space-x-0">
            {navItems.map((item) => (
              <div key={item.label} className={`px-4 py-5 text-xs font-bold tracking-wider border-l-2 border-black ${item.active ? "bg-black text-white" : "hover:bg-gray-100"}`}>
                {item.label}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-xs font-bold border-2 border-black px-3 py-1">ADMIN_01</div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* HEADER */}
        <div className="flex items-end justify-between mb-8 border-b-2 border-black pb-4">
          <div>
            <h1 className="text-3xl font-bold uppercase tracking-wider">SYSTEM OVERVIEW</h1>
            <p className="text-xs tracking-widest mt-1 text-gray-600">LAST_SYNC: 2026-02-28T14:32:07Z // STATUS: OPERATIONAL</p>
          </div>
          <div className="text-xs font-bold border-2 border-black px-4 py-2 hover:bg-black hover:text-white">EXPORT_RAW</div>
        </div>

        {/* STAT BLOCKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="border-2 border-black p-6">
              <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
              <div className="flex items-center mt-2 space-x-2">
                <span className="text-xs font-bold">{stat.delta}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 ${stat.direction === "UP" ? "bg-black text-white" : "bg-gray-200 text-black"}`}>
                  {stat.direction}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CHART + ACTIVITY */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 mb-8">
          <div className="lg:col-span-2 border-2 border-black p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-sm font-bold tracking-widest uppercase">REVENUE // MONTHLY</h2>
              <span className="text-[10px] font-bold text-gray-500">UNIT: $K</span>
            </div>
            <div className="flex items-end space-x-1 h-40">
              {chartData.map((d) => (
                <div key={d.month} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-black" style={{ height: `${d.value * 1.6}px` }} />
                  <span className="text-[10px] font-bold mt-2 tracking-wider">{d.month}</span>
                  <span className="text-[10px] text-gray-500">{d.value}K</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-black border-l-0 lg:border-l-2 p-6">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-4">ACTIVITY_LOG</h2>
            <div className="space-y-0">
              {activityLog.map((entry, i) => (
                <div key={i} className="border-b border-gray-300 py-3">
                  <div className="text-[10px] font-bold text-gray-400 tracking-wider">{entry.time}</div>
                  <div className="text-xs font-bold mt-0.5">{entry.event}</div>
                  <div className="text-[10px] text-gray-600 mt-0.5">{entry.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TRAFFIC SOURCES */}
        <div className="border-2 border-black p-6 mb-8">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-4">TRAFFIC_SOURCES</h2>
          <div className="space-y-3">
            {[
              { source: "DIRECT", pct: 38 },
              { source: "ORGANIC", pct: 31 },
              { source: "REFERRAL", pct: 18 },
              { source: "SOCIAL", pct: 13 },
            ].map((s) => (
              <div key={s.source} className="flex items-center space-x-4">
                <span className="text-[10px] font-bold w-20 tracking-wider">{s.source}</span>
                <div className="flex-1 h-4 bg-gray-100 border border-black">
                  <div className="h-full bg-black" style={{ width: `${s.pct}%` }} />
                </div>
                <span className="text-xs font-bold w-10 text-right">{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* TABLE */}
        <div className="border-2 border-black mb-8">
          <div className="flex items-center justify-between p-4 border-b-2 border-black">
            <h2 className="text-sm font-bold tracking-widest uppercase">TRANSACTION_LOG</h2>
            <span className="text-[10px] font-bold text-gray-500">{transactions.length} RECORDS</span>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-black bg-gray-50">
                {["ID", "USER", "AMOUNT", "TYPE", "STATUS", "TIMESTAMP"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-[10px] font-bold tracking-[0.2em] text-gray-500">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3 text-xs font-bold">{tx.id}</td>
                  <td className="px-4 py-3 text-xs">{tx.user}</td>
                  <td className="px-4 py-3 text-xs font-bold">{tx.amount}</td>
                  <td className="px-4 py-3">
                    <span className="text-[10px] font-bold border border-black px-2 py-0.5">{tx.type}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-[10px] font-bold px-2 py-0.5 ${tx.status === "COMPLETE" ? "bg-black text-white" : tx.status === "FAILED" ? "bg-gray-200 text-black border-2 border-black" : "bg-white text-black border border-black"}`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[10px] text-gray-500">{tx.ts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t-4 border-black mt-8">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="text-[10px] font-bold tracking-widest text-gray-500">SYSTEM_DASH V2.4.1 // BUILD #847</div>
          <div className="flex space-x-6">
            {["STATUS", "DOCS", "API", "SUPPORT"].map((link) => (
              <span key={link} className="text-[10px] font-bold tracking-wider hover:underline">{link}</span>
            ))}
          </div>
          <div className="text-[10px] font-bold tracking-widest text-gray-500">2026 // ALL_RIGHTS_RESERVED</div>
        </div>
      </footer>
    </div>
  );
}
