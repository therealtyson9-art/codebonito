export const dynamic = "force-dynamic";
export default function DashboardCorporateDemo() {
  const kpis = [
    { label: "Total Revenue", value: "$4,284,520", change: "+12.4%", up: true, prefix: "$" },
    { label: "Operating Expenses", value: "$1,892,340", change: "+3.1%", up: false, prefix: "$" },
    { label: "Net Profit", value: "$2,392,180", change: "+18.7%", up: true, prefix: "$" },
    { label: "YoY Growth", value: "24.3%", change: "+6.2pp", up: true, prefix: "%" },
  ];

  const departments = [
    { name: "Sales & Marketing", budget: "$840,000", spent: "$712,400", pct: 85, status: "On Track" },
    { name: "Engineering", budget: "$1,200,000", spent: "$1,048,200", pct: 87, status: "On Track" },
    { name: "Operations", budget: "$560,000", spent: "$534,100", pct: 95, status: "At Risk" },
    { name: "Human Resources", budget: "$320,000", spent: "$248,600", pct: 78, status: "Under Budget" },
    { name: "Legal & Compliance", budget: "$180,000", spent: "$142,800", pct: 79, status: "Under Budget" },
  ];

  const transactions = [
    { id: "TXN-4821", desc: "Enterprise license renewal - Acme Corp", amount: "+$284,000", date: "Mar 1, 2026", type: "Revenue" },
    { id: "TXN-4820", desc: "AWS infrastructure Q1 invoice", amount: "-$47,200", date: "Feb 28, 2026", type: "Expense" },
    { id: "TXN-4819", desc: "Annual SaaS subscription - GlobalTech", amount: "+$156,000", date: "Feb 27, 2026", type: "Revenue" },
    { id: "TXN-4818", desc: "Office lease payment - 425 Market St", amount: "-$32,500", date: "Feb 26, 2026", type: "Expense" },
    { id: "TXN-4817", desc: "Consulting engagement - Deloitte", amount: "-$85,000", date: "Feb 25, 2026", type: "Expense" },
    { id: "TXN-4816", desc: "Platform usage fees - MidWest Health", amount: "+$92,400", date: "Feb 24, 2026", type: "Revenue" },
  ];

  const sideNavItems = ["Dashboard", "Revenue", "Expenses", "Forecasting", "Departments", "Compliance", "Reports"];

  return (
    <div style={{ fontFamily: "'Work Sans', sans-serif" }} className="min-h-screen bg-white">
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Top Nav */}
      <header className="flex items-center justify-between px-8 py-4" style={{ backgroundColor: "#334155", color: "#ffffff" }}>
        <div className="flex items-center gap-8">
          <span className="text-lg font-semibold tracking-wide">PINNACLE</span>
          <nav className="flex gap-6 text-sm">
            {["Overview", "Financials", "Workforce", "Projects", "Settings"].map((item, i) => (
              <span key={item} className="cursor-pointer" style={{ opacity: i === 0 ? 1 : 0.7 }}>{item}</span>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span style={{ opacity: 0.7 }}>FY 2026 Q1</span>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold" style={{ backgroundColor: "#475569" }}>RP</div>
        </div>
      </header>

      <div className="flex">
        {/* Side Nav */}
        <aside className="w-56 min-h-screen p-6" style={{ backgroundColor: "#f8fafc", borderRight: "1px solid #e2e8f0" }}>
          <div className="text-xs font-semibold uppercase mb-4" style={{ color: "#94a3b8", letterSpacing: "0.08em" }}>Financial Reports</div>
          <nav className="space-y-1">
            {sideNavItems.map((item, i) => (
              <div key={item} className="px-3 py-2 rounded-md text-sm cursor-pointer" style={{
                backgroundColor: i === 0 ? "#334155" : "transparent",
                color: i === 0 ? "#ffffff" : "#64748b",
                fontWeight: i === 0 ? 500 : 400,
              }}>
                {item}
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-semibold" style={{ color: "#334155" }}>Financial Dashboard</h1>
                <p className="text-sm mt-1" style={{ color: "#94a3b8" }}>Consolidated reporting for fiscal year 2026, Q1 ending March 31</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-md text-sm font-medium" style={{ border: "1px solid #e2e8f0", color: "#334155" }}>Export PDF</button>
                <button className="px-4 py-2 rounded-md text-sm font-medium" style={{ border: "1px solid #e2e8f0", color: "#334155" }}>Export XLSX</button>
                <button className="px-4 py-2 rounded-md text-sm font-medium text-white" style={{ backgroundColor: "#334155" }}>Schedule Report</button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-4 gap-5 mb-8">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="p-5 rounded-lg" style={{ border: "1px solid #e2e8f0" }}>
                  <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: "#94a3b8" }}>{kpi.label}</p>
                  <p className="text-2xl font-semibold" style={{ color: "#334155" }}>{kpi.value}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs font-medium px-2 py-0.5 rounded" style={{
                      backgroundColor: kpi.up ? "#f0fdf4" : "#fef2f2",
                      color: kpi.up ? "#16a34a" : "#dc2626",
                    }}>
                      {kpi.change}
                    </span>
                    <span className="text-xs" style={{ color: "#94a3b8" }}>vs prior quarter</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Placeholder */}
            <div className="p-6 rounded-lg mb-8" style={{ border: "1px solid #e2e8f0" }}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-semibold" style={{ color: "#334155" }}>Revenue vs. Expenses</h2>
                <div className="flex items-center gap-4 text-xs" style={{ color: "#94a3b8" }}>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm inline-block" style={{ backgroundColor: "#334155" }} /> Revenue</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm inline-block" style={{ backgroundColor: "#94a3b8" }} /> Expenses</span>
                </div>
              </div>
              <div className="h-44 flex items-end gap-4 px-2" style={{ backgroundColor: "#f8fafc", borderRadius: "0.375rem" }}>
                {[
                  { r: 68, e: 42 }, { r: 72, e: 44 }, { r: 65, e: 46 }, { r: 78, e: 43 },
                  { r: 82, e: 48 }, { r: 74, e: 45 }, { r: 88, e: 47 }, { r: 91, e: 44 },
                  { r: 84, e: 50 }, { r: 79, e: 46 }, { r: 94, e: 49 }, { r: 98, e: 48 },
                ].map((d, i) => (
                  <div key={i} className="flex-1 flex gap-1 items-end h-full">
                    <div className="flex-1 rounded-t-sm" style={{ height: `${d.r}%`, backgroundColor: "#334155" }} />
                    <div className="flex-1 rounded-t-sm" style={{ height: `${d.e}%`, backgroundColor: "#cbd5e1" }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Department Table */}
            <div className="rounded-lg mb-8" style={{ border: "1px solid #e2e8f0" }}>
              <div className="p-5" style={{ borderBottom: "1px solid #e2e8f0" }}>
                <h2 className="text-base font-semibold" style={{ color: "#334155" }}>Department Budget Breakdown</h2>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                    {["Department", "Budget", "Spent", "Utilization", "Status"].map((h) => (
                      <th key={h} className="text-left px-5 py-3 font-medium" style={{ color: "#64748b" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {departments.map((dept) => (
                    <tr key={dept.name} style={{ borderBottom: "1px solid #f1f5f9" }}>
                      <td className="px-5 py-3 font-medium" style={{ color: "#334155" }}>{dept.name}</td>
                      <td className="px-5 py-3" style={{ color: "#64748b" }}>{dept.budget}</td>
                      <td className="px-5 py-3" style={{ color: "#64748b" }}>{dept.spent}</td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 rounded-full" style={{ backgroundColor: "#e2e8f0" }}>
                            <div className="h-full rounded-full" style={{ width: `${dept.pct}%`, backgroundColor: dept.pct > 90 ? "#dc2626" : "#334155" }} />
                          </div>
                          <span className="text-xs" style={{ color: "#64748b" }}>{dept.pct}%</span>
                        </div>
                      </td>
                      <td className="px-5 py-3">
                        <span className="text-xs font-medium px-2 py-1 rounded" style={{
                          backgroundColor: dept.status === "On Track" ? "#f0fdf4" : dept.status === "At Risk" ? "#fef2f2" : "#eff6ff",
                          color: dept.status === "On Track" ? "#16a34a" : dept.status === "At Risk" ? "#dc2626" : "#2563eb",
                        }}>
                          {dept.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Recent Transactions */}
            <div className="rounded-lg mb-8" style={{ border: "1px solid #e2e8f0" }}>
              <div className="p-5 flex items-center justify-between" style={{ borderBottom: "1px solid #e2e8f0" }}>
                <h2 className="text-base font-semibold" style={{ color: "#334155" }}>Recent Transactions</h2>
                <button className="text-sm font-medium" style={{ color: "#334155" }}>View All</button>
              </div>
              <div>
                {transactions.map((txn) => (
                  <div key={txn.id} className="flex items-center justify-between px-5 py-3" style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono" style={{ color: "#94a3b8" }}>{txn.id}</span>
                      <div>
                        <p className="text-sm" style={{ color: "#334155" }}>{txn.desc}</p>
                        <p className="text-xs" style={{ color: "#94a3b8" }}>{txn.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium" style={{ color: txn.amount.startsWith("+") ? "#16a34a" : "#dc2626" }}>{txn.amount}</p>
                      <p className="text-xs" style={{ color: "#94a3b8" }}>{txn.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="px-8 py-4 flex items-center justify-between text-xs" style={{ borderTop: "1px solid #e2e8f0", color: "#94a3b8" }}>
        <span>Pinnacle Financial Reporting Platform. All data subject to SOX compliance audit requirements.</span>
        <span>SOC 2 Type II Certified | GDPR Compliant | Last audit: Jan 15, 2026</span>
      </footer>
    </div>
  );
}
