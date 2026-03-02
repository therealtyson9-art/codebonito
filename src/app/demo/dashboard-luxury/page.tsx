export const dynamic = "force-dynamic";
export default function DashboardLuxuryDemo() {
  const portfolioSummary = [
    { label: "Portfolio Value", value: "$14.2M", change: "+8.4%", up: true },
    { label: "Monthly Returns", value: "$342,800", change: "+2.41%", up: true },
    { label: "Unrealized Gains", value: "$1.87M", change: "+12.3%", up: true },
    { label: "Cash Position", value: "$2.1M", change: "-4.2%", up: false },
  ];

  const assetAllocation = [
    { asset: "US Equities", allocation: "34%", value: "$4,828,000", bar: 34, color: "#d4a053" },
    { asset: "International Equities", allocation: "18%", value: "$2,556,000", bar: 18, color: "#b8860b" },
    { asset: "Fixed Income", allocation: "22%", value: "$3,124,000", bar: 22, color: "#8b7355" },
    { asset: "Real Estate", allocation: "12%", value: "$1,704,000", bar: 12, color: "#a0845c" },
    { asset: "Alternative Investments", allocation: "8%", value: "$1,136,000", bar: 8, color: "#c9a96e" },
    { asset: "Cash & Equivalents", allocation: "6%", value: "$852,000", bar: 6, color: "#e6c88a" },
  ];

  const marketOverview = [
    { index: "S&P 500", value: "5,842.31", change: "+0.74%", up: true },
    { index: "NASDAQ", value: "19,284.57", change: "+1.12%", up: true },
    { index: "DOW 30", value: "43,127.84", change: "+0.38%", up: true },
    { index: "10Y Treasury", value: "4.28%", change: "-0.05%", up: false },
    { index: "Gold", value: "$2,847.20", change: "+0.92%", up: true },
    { index: "EUR/USD", value: "1.0842", change: "-0.18%", up: false },
  ];

  const recentTrades = [
    { date: "Mar 1", action: "BUY", security: "AAPL", shares: "500", price: "$247.82", total: "$123,910", status: "Executed" },
    { date: "Feb 28", action: "SELL", security: "TSLA", shares: "200", price: "$412.50", total: "$82,500", status: "Executed" },
    { date: "Feb 27", action: "BUY", security: "MSFT", shares: "300", price: "$478.20", total: "$143,460", status: "Executed" },
    { date: "Feb 26", action: "BUY", security: "BRK.B", shares: "150", price: "$524.30", total: "$78,645", status: "Executed" },
    { date: "Feb 25", action: "SELL", security: "NVDA", shares: "100", price: "$892.40", total: "$89,240", status: "Executed" },
  ];

  const sidebarItems = ["Overview", "Portfolio", "Markets", "Trading", "Research", "Tax Center"];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#0f172a" }} className="min-h-screen flex">
      <link href="https://fonts.googleapis.com/css2?family=Gilda+Display&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* Minimal Sidebar */}
      <aside className="w-60 min-h-screen p-8 flex flex-col justify-between" style={{ borderRight: "1px solid #1e293b" }}>
        <div>
          <h1 className="text-xl tracking-widest mb-12" style={{ fontFamily: "'Gilda Display', serif", color: "#d4a053" }}>AURUM</h1>
          <nav className="space-y-1">
            {sidebarItems.map((item, i) => (
              <div key={item} className="px-4 py-3 rounded-lg text-sm cursor-pointer transition-colors" style={{
                backgroundColor: i === 0 ? "rgba(212, 160, 83, 0.1)" : "transparent",
                color: i === 0 ? "#d4a053" : "#64748b",
                fontWeight: i === 0 ? 500 : 300,
              }}>
                {item}
              </div>
            ))}
          </nav>
        </div>
        <div className="pt-6" style={{ borderTop: "1px solid #1e293b" }}>
          <p className="text-sm font-light" style={{ color: "#94a3b8" }}>Victoria Ashworth</p>
          <p className="text-xs font-light mt-1" style={{ color: "#475569" }}>Private Wealth Client</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="max-w-6xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-light tracking-wide" style={{ fontFamily: "'Gilda Display', serif", color: "#f1f5f9" }}>Executive Summary</h2>
              <p className="text-sm font-light mt-2" style={{ color: "#64748b" }}>Portfolio performance as of March 1, 2026 | Market close</p>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2 rounded-lg text-sm font-light" style={{ border: "1px solid #1e293b", color: "#94a3b8" }}>Download Statement</button>
              <button className="px-5 py-2 rounded-lg text-sm font-light" style={{ backgroundColor: "rgba(212, 160, 83, 0.15)", color: "#d4a053", border: "1px solid rgba(212, 160, 83, 0.3)" }}>Contact Advisor</button>
            </div>
          </div>

          {/* Portfolio Value Cards */}
          <div className="grid grid-cols-4 gap-5 mb-10">
            {portfolioSummary.map((item) => (
              <div key={item.label} className="p-6 rounded-xl" style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}>
                <p className="text-xs font-light uppercase tracking-widest mb-3" style={{ color: "#64748b" }}>{item.label}</p>
                <p className="text-2xl font-light" style={{ color: "#f1f5f9" }}>{item.value}</p>
                <p className="text-sm font-light mt-2" style={{ color: item.up ? "#4ade80" : "#f87171" }}>{item.change} this quarter</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 mb-10">
            {/* Asset Allocation */}
            <div className="col-span-2 p-6 rounded-xl" style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}>
              <h3 className="text-base font-light tracking-wide mb-6" style={{ fontFamily: "'Gilda Display', serif", color: "#f1f5f9" }}>Asset Allocation</h3>
              <div className="space-y-4">
                {assetAllocation.map((item) => (
                  <div key={item.asset} className="flex items-center gap-4">
                    <span className="text-sm font-light w-44" style={{ color: "#94a3b8" }}>{item.asset}</span>
                    <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: "#0f172a" }}>
                      <div className="h-full rounded-full" style={{ width: `${item.bar * 2.5}%`, backgroundColor: item.color }} />
                    </div>
                    <span className="text-sm font-light w-12 text-right" style={{ color: "#d4a053" }}>{item.allocation}</span>
                    <span className="text-sm font-light w-28 text-right" style={{ color: "#64748b" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Overview */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}>
              <h3 className="text-base font-light tracking-wide mb-6" style={{ fontFamily: "'Gilda Display', serif", color: "#f1f5f9" }}>Market Overview</h3>
              <div className="space-y-4">
                {marketOverview.map((item) => (
                  <div key={item.index} className="flex items-center justify-between">
                    <span className="text-sm font-light" style={{ color: "#94a3b8" }}>{item.index}</span>
                    <div className="text-right">
                      <span className="text-sm font-light" style={{ color: "#f1f5f9" }}>{item.value}</span>
                      <span className="text-xs ml-2 font-light" style={{ color: item.up ? "#4ade80" : "#f87171" }}>{item.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Chart Placeholder */}
          <div className="p-6 rounded-xl mb-10" style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-light tracking-wide" style={{ fontFamily: "'Gilda Display', serif", color: "#f1f5f9" }}>Portfolio Performance</h3>
              <div className="flex gap-2">
                {["1M", "3M", "YTD", "1Y", "ALL"].map((range) => (
                  <button key={range} className="px-3 py-1 rounded-md text-xs font-light" style={{
                    backgroundColor: range === "YTD" ? "rgba(212, 160, 83, 0.15)" : "transparent",
                    color: range === "YTD" ? "#d4a053" : "#475569",
                    border: range === "YTD" ? "1px solid rgba(212, 160, 83, 0.3)" : "1px solid transparent",
                  }}>
                    {range}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-44 flex items-end gap-1 px-2" style={{ backgroundColor: "#0f172a", borderRadius: "0.5rem" }}>
              {[42, 45, 43, 48, 52, 49, 55, 58, 54, 60, 63, 58, 65, 68, 72, 70, 74, 78, 75, 82, 80, 85, 88, 92].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: `rgba(212, 160, 83, ${0.3 + (i / 24) * 0.7})` }} />
              ))}
            </div>
          </div>

          {/* Recent Trades */}
          <div className="rounded-xl" style={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}>
            <div className="p-6 flex items-center justify-between" style={{ borderBottom: "1px solid #334155" }}>
              <h3 className="text-base font-light tracking-wide" style={{ fontFamily: "'Gilda Display', serif", color: "#f1f5f9" }}>Recent Trades</h3>
              <button className="text-sm font-light" style={{ color: "#d4a053" }}>View Trade History</button>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid #334155" }}>
                  {["Date", "Action", "Security", "Shares", "Price", "Total", "Status"].map((h) => (
                    <th key={h} className="text-left px-6 py-3 font-light text-xs uppercase tracking-widest" style={{ color: "#475569" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentTrades.map((trade) => (
                  <tr key={trade.date + trade.security} style={{ borderBottom: "1px solid #1a2332" }}>
                    <td className="px-6 py-4 font-light" style={{ color: "#64748b" }}>{trade.date}</td>
                    <td className="px-6 py-4 font-light" style={{ color: trade.action === "BUY" ? "#4ade80" : "#f87171" }}>{trade.action}</td>
                    <td className="px-6 py-4 font-light" style={{ color: "#f1f5f9" }}>{trade.security}</td>
                    <td className="px-6 py-4 font-light" style={{ color: "#94a3b8" }}>{trade.shares}</td>
                    <td className="px-6 py-4 font-light" style={{ color: "#94a3b8" }}>{trade.price}</td>
                    <td className="px-6 py-4 font-light" style={{ color: "#d4a053" }}>{trade.total}</td>
                    <td className="px-6 py-4 font-light" style={{ color: "#64748b" }}>{trade.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-6xl mt-12 pt-6" style={{ borderTop: "1px solid #1e293b" }}>
          <p className="text-xs font-light leading-relaxed" style={{ color: "#475569" }}>
            Aurum Capital Wealth Management. Investment advisory services offered through Aurum Capital Advisors, LLC, a registered investment advisor.
            Past performance does not guarantee future results. All investments involve risk including the possible loss of principal.
            This dashboard is for informational purposes only and does not constitute investment advice.
          </p>
          <p className="text-xs font-light mt-3" style={{ color: "#334155" }}>SEC Registered | FINRA Member | SIPC Protected</p>
        </div>
      </main>
    </div>
  );
}
