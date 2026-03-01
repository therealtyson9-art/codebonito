export default function DashboardMinimalistDemo() {
  const stats = [
    { label: "Total Revenue", value: "$48,295", change: "+12.5%", up: true },
    { label: "Active Users", value: "2,847", change: "+8.2%", up: true },
    { label: "Conversion Rate", value: "3.24%", change: "-0.4%", up: false },
    { label: "Avg. Session", value: "4m 32s", change: "+1.1%", up: true },
  ];

  const tableData = [
    { name: "Homepage Redesign", status: "Active", progress: 78, team: "Design", date: "Dec 15" },
    { name: "API Integration v2", status: "Active", progress: 45, team: "Engineering", date: "Dec 12" },
    { name: "User Onboarding Flow", status: "Review", progress: 92, team: "Product", date: "Dec 10" },
    { name: "Mobile App Launch", status: "Active", progress: 34, team: "Engineering", date: "Dec 8" },
    { name: "Analytics Dashboard", status: "Done", progress: 100, team: "Design", date: "Dec 5" },
    { name: "Payment Gateway", status: "Active", progress: 61, team: "Engineering", date: "Dec 3" },
  ];

  const navItems = [
    { icon: "◻", label: "Dashboard", active: true },
    { icon: "◻", label: "Analytics", active: false },
    { icon: "◻", label: "Projects", active: false },
    { icon: "◻", label: "Team", active: false },
    { icon: "◻", label: "Messages", active: false },
    { icon: "◻", label: "Settings", active: false },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-60 min-h-screen bg-white border-r border-slate-200 p-4">
          <div className="flex items-center space-x-2 px-3 mb-8 pt-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-xs font-bold">A</div>
            <span className="text-sm font-semibold">Acme Analytics</span>
          </div>
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <div key={item.label} className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors ${item.active ? "bg-blue-50 text-blue-600 font-medium" : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"}`}>
                <span className="text-xs">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
          <div className="border-t border-slate-100 pt-4 mt-4">
            <div className="flex items-center space-x-3 px-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-500">JD</div>
              <div>
                <p className="text-sm font-medium text-slate-700">Jane Doe</p>
                <p className="text-xs text-slate-400">Admin</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-h-screen">
          {/* Top Bar */}
          <header className="bg-white border-b border-slate-200 h-14 flex items-center justify-between px-6">
            <div>
              <h1 className="text-sm font-semibold text-slate-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-9 w-64 bg-slate-50 rounded-lg border border-slate-200 flex items-center px-3">
                <span className="text-xs text-slate-400">Search...</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-500 cursor-pointer">🔔</div>
            </div>
          </header>

          <div className="p-6">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
                <p className="text-sm text-slate-400 mt-0.5">December 2024</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="h-9 px-4 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  Export
                </button>
                <button className="h-9 px-4 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                  Add Widget
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-5 border border-slate-200">
                  <p className="text-xs font-medium text-slate-400 mb-1">{stat.label}</p>
                  <div className="flex items-end justify-between">
                    <span className="text-2xl font-semibold text-slate-900">{stat.value}</span>
                    <span className={`text-xs font-medium ${stat.up ? "text-emerald-500" : "text-red-500"}`}>{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              <div className="lg:col-span-2 bg-white rounded-xl p-5 border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-slate-900">Revenue Overview</h3>
                  <div className="flex space-x-1">
                    {["7D", "30D", "90D", "1Y"].map((period) => (
                      <button key={period} className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${period === "30D" ? "bg-blue-50 text-blue-600" : "text-slate-400 hover:text-slate-600"}`}>
                        {period}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="h-48 bg-slate-50 rounded-lg flex items-center justify-center">
                  <div className="flex items-end space-x-2 h-32">
                    {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                      <div key={i} className="w-6 bg-blue-400 rounded-t-sm transition-all hover:bg-blue-500" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200">
                <h3 className="text-sm font-semibold text-slate-900 mb-6">Traffic Sources</h3>
                <div className="space-y-4">
                  {[
                    { source: "Organic Search", pct: 42, color: "bg-blue-400" },
                    { source: "Direct", pct: 28, color: "bg-slate-400" },
                    { source: "Social", pct: 18, color: "bg-emerald-400" },
                    { source: "Referral", pct: 12, color: "bg-amber-400" },
                  ].map((s) => (
                    <div key={s.source}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-600 font-medium">{s.source}</span>
                        <span className="text-slate-400">{s.pct}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="flex items-center justify-between p-5 border-b border-slate-100">
                <h3 className="text-sm font-semibold text-slate-900">Active Projects</h3>
                <button className="text-xs font-medium text-blue-500 hover:text-blue-600 transition-colors">View All</button>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left px-5 py-3 text-xs font-medium text-slate-400 uppercase tracking-wide">Project</th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-slate-400 uppercase tracking-wide">Status</th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-slate-400 uppercase tracking-wide">Progress</th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-slate-400 uppercase tracking-wide">Team</th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-slate-400 uppercase tracking-wide">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row) => (
                    <tr key={row.name} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-3.5 text-sm font-medium text-slate-700">{row.name}</td>
                      <td className="px-5 py-3.5">
                        <span className={`inline-flex px-2 py-0.5 rounded-md text-xs font-medium ${row.status === "Active" ? "bg-blue-50 text-blue-600" : row.status === "Done" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-400 rounded-full" style={{ width: `${row.progress}%` }} />
                          </div>
                          <span className="text-xs text-slate-400">{row.progress}%</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-xs text-slate-500">{row.team}</td>
                      <td className="px-5 py-3.5 text-xs text-slate-400">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
