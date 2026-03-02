export default function DashboardLuxuryDemo() {
  const stats = [
    { label: "Portfolio Value", value: "$2.84M", change: "+8.4%", trend: "up" },
    { label: "Monthly Returns", value: "$124,500", change: "+12.1%", trend: "up" },
    { label: "Active Assets", value: "47", change: "+3", trend: "up" },
    { label: "Risk Score", value: "Low", change: "Stable", trend: "neutral" },
  ];

  const navItems = [
    { label: "Overview", active: true },
    { label: "Portfolio", active: false },
    { label: "Markets", active: false },
    { label: "Analytics", active: false },
    { label: "Transactions", active: false },
  ];

  const holdings = [
    { asset: "Ethereum (ETH)", allocation: "32%", value: "$908,800", change: "+4.2%", trend: "up" },
    { asset: "Treasury Bonds", allocation: "24%", value: "$681,600", change: "+1.1%", trend: "up" },
    { asset: "Real Estate Fund", allocation: "18%", value: "$511,200", change: "+2.8%", trend: "up" },
    { asset: "Gold Reserve", allocation: "14%", value: "$397,600", change: "-0.4%", trend: "down" },
    { asset: "Private Equity", allocation: "8%", value: "$227,200", change: "+6.9%", trend: "up" },
    { asset: "Cash & Equiv.", allocation: "4%", value: "$113,600", change: "0.0%", trend: "neutral" },
  ];

  const performanceData = [
    { month: "Sep", value: 42 },
    { month: "Oct", value: 58 },
    { month: "Nov", value: 51 },
    { month: "Dec", value: 74 },
    { month: "Jan", value: 68 },
    { month: "Feb", value: 89 },
  ];

  const recentActivity = [
    { action: "Buy Order Executed", detail: "ETH -- 12.5 units at $3,240", time: "14 min ago", type: "buy" },
    { action: "Dividend Received", detail: "Real Estate Fund -- $4,280", time: "2 hrs ago", type: "income" },
    { action: "Rebalance Complete", detail: "Portfolio optimized to target allocation", time: "5 hrs ago", type: "system" },
    { action: "Sell Order Executed", detail: "AAPL -- 150 shares at $198.40", time: "1 day ago", type: "sell" },
    { action: "Wire Transfer", detail: "Incoming -- $50,000 from linked account", time: "2 days ago", type: "transfer" },
  ];

  const marketIndicators = [
    { name: "S&P 500", value: "5,842.30", change: "+0.82%" },
    { name: "NASDAQ", value: "18,721.50", change: "+1.14%" },
    { name: "BTC/USD", value: "$97,240", change: "-0.31%" },
    { name: "Gold", value: "$2,184", change: "+0.45%" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>

      {/* TOP NAV */}
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8962e] flex items-center justify-center text-[#0a0a0a] text-xs font-bold">A</div>
            <span className="text-lg font-semibold tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>Aurelius</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className={`px-5 py-2 text-sm rounded-full transition-all ${item.active ? "bg-white/10 text-[#d4af37] font-medium" : "text-white/50 hover:text-white/80"}`}>
                {item.label}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
            <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-xs font-medium text-white/70">VC</div>
          </div>
        </div>
      </nav>

      {/* MARKET TICKER */}
      <div className="border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {marketIndicators.map((m) => (
            <div key={m.name} className="flex items-center space-x-3">
              <span className="text-xs text-white/40 font-medium">{m.name}</span>
              <span className="text-xs font-semibold text-white/80">{m.value}</span>
              <span className={`text-[11px] font-medium ${m.change.startsWith("+") ? "text-emerald-400" : m.change.startsWith("-") ? "text-red-400" : "text-white/40"}`}>{m.change}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* HEADER */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs text-[#d4af37] font-medium tracking-widest uppercase mb-1">Wealth Management</p>
            <h1 className="text-3xl font-semibold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Portfolio Overview</h1>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-xs text-white/40 font-medium bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">Feb 28, 2026</div>
            <div className="text-xs text-[#d4af37] font-medium bg-[#d4af37]/10 border border-[#d4af37]/20 px-4 py-2 rounded-full">Export Report</div>
          </div>
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/[0.07] transition-colors">
              <p className="text-[11px] text-white/40 font-medium uppercase tracking-wider mb-2">{stat.label}</p>
              <p className="text-2xl font-semibold text-white tracking-tight">{stat.value}</p>
              <p className={`text-xs font-medium mt-2 ${stat.trend === "up" ? "text-emerald-400" : stat.trend === "down" ? "text-red-400" : "text-white/40"}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* CHART + ACTIVITY */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-semibold text-white/90" style={{ fontFamily: "'Playfair Display', serif" }}>Performance</h3>
              <div className="flex space-x-1">
                {["1M", "3M", "6M", "1Y", "All"].map((p) => (
                  <span key={p} className={`px-3 py-1 text-[11px] font-medium rounded-full ${p === "6M" ? "bg-[#d4af37]/20 text-[#d4af37]" : "text-white/30 hover:text-white/60"}`}>{p}</span>
                ))}
              </div>
            </div>
            <div className="flex items-end space-x-2 h-44">
              {performanceData.map((d) => (
                <div key={d.month} className="flex-1 flex flex-col items-center">
                  <div className="w-full rounded-lg bg-gradient-to-t from-[#d4af37]/60 to-[#d4af37]/20 border border-[#d4af37]/20" style={{ height: `${d.value * 1.7}px` }} />
                  <span className="text-[10px] text-white/30 mt-2 font-medium">{d.month}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-white/90 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Recent Activity</h3>
            <div className="space-y-0">
              {recentActivity.map((item, i) => (
                <div key={i} className="py-3 border-b border-white/5 last:border-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.type === "buy" ? "bg-emerald-400" : item.type === "sell" ? "bg-red-400" : item.type === "income" ? "bg-[#d4af37]" : "bg-white/30"}`} />
                    <span className="text-xs font-medium text-white/80">{item.action}</span>
                  </div>
                  <p className="text-[11px] text-white/30 ml-3.5">{item.detail}</p>
                  <p className="text-[10px] text-white/20 ml-3.5 mt-0.5">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ALLOCATION BARS */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
          <h3 className="text-sm font-semibold text-white/90 mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>Asset Allocation</h3>
          <div className="flex h-4 rounded-full overflow-hidden mb-4">
            {[
              { pct: 32, color: "bg-[#d4af37]" },
              { pct: 24, color: "bg-[#d4af37]/70" },
              { pct: 18, color: "bg-[#d4af37]/50" },
              { pct: 14, color: "bg-[#d4af37]/30" },
              { pct: 8, color: "bg-white/20" },
              { pct: 4, color: "bg-white/10" },
            ].map((seg, i) => (
              <div key={i} className={`${seg.color}`} style={{ width: `${seg.pct}%` }} />
            ))}
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
            {holdings.map((h) => (
              <div key={h.asset} className="text-center">
                <p className="text-[10px] text-white/30 font-medium">{h.asset.split("(")[0].trim()}</p>
                <p className="text-sm font-semibold text-white/80 mt-0.5">{h.allocation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* HOLDINGS TABLE */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <h3 className="text-sm font-semibold text-white/90" style={{ fontFamily: "'Playfair Display', serif" }}>Holdings</h3>
            <span className="text-[11px] text-[#d4af37] font-medium">View All Assets</span>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                {["Asset", "Allocation", "Value", "Change"].map((h) => (
                  <th key={h} className="text-left px-6 py-3 text-[10px] font-medium text-white/30 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {holdings.map((row) => (
                <tr key={row.asset} className="border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-white/80">{row.asset}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#d4af37] rounded-full" style={{ width: row.allocation }} />
                      </div>
                      <span className="text-xs text-white/50">{row.allocation}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-white/70">{row.value}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium ${row.trend === "up" ? "text-emerald-400" : row.trend === "down" ? "text-red-400" : "text-white/40"}`}>
                      {row.change}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/5 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8962e]" />
            <span className="text-xs text-white/30 font-medium">Aurelius Wealth Management</span>
          </div>
          <div className="flex space-x-6">
            {["Privacy", "Terms", "Support", "Contact"].map((link) => (
              <span key={link} className="text-xs text-white/20 hover:text-white/50">{link}</span>
            ))}
          </div>
          <p className="text-xs text-white/20">2026 Aurelius Capital LLC</p>
        </div>
      </footer>
    </div>
  );
}
