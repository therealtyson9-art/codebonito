export default function DashboardCorporateDemo() {
  const stats = [
    { label: "Total Revenue", value: "$284,520", change: "+12.4%", up: true, icon: "$ " },
    { label: "Active Clients", value: "1,847", change: "+5.2%", up: true, icon: "# " },
    { label: "Avg Deal Size", value: "$14,200", change: "+3.8%", up: true, icon: "~ " },
    { label: "Win Rate", value: "68.4%", change: "-1.2%", up: false, icon: "% " },
  ];

  const sidebarItems = [
    { icon: "|||", label: "Dashboard", active: true },
    { icon: ">>", label: "Pipeline", active: false },
    { icon: "**", label: "Clients", active: false },
    { icon: "[]", label: "Reports", active: false },
    { icon: "@@", label: "Team", active: false },
    { icon: "##", label: "Calendar", active: false },
    { icon: "!!", label: "Invoices", active: false },
    { icon: "<<", label: "Settings", active: false },
  ];

  const deals = [
    { company: "Meridian Technologies", contact: "Sarah Chen", value: "$48,000", stage: "Negotiation", probability: 85, date: "Mar 5" },
    { company: "Atlas Financial Group", contact: "James Wright", value: "$32,500", stage: "Proposal", probability: 60, date: "Mar 8" },
    { company: "Pinnacle Solutions", contact: "Maria Garcia", value: "$71,000", stage: "Closed Won", probability: 100, date: "Feb 28" },
    { company: "Vertex Industries", contact: "Robert Kim", value: "$24,800", stage: "Discovery", probability: 30, date: "Mar 12" },
    { company: "Nova Digital Agency", contact: "Lisa Thompson", value: "$56,200", stage: "Proposal", probability: 55, date: "Mar 10" },
    { company: "Summit Corp", contact: "David Park", value: "$19,400", stage: "Negotiation", probability: 75, date: "Mar 3" },
  ];

  const revenueByMonth = [
    { month: "Sep", value: 32 },
    { month: "Oct", value: 48 },
    { month: "Nov", value: 42 },
    { month: "Dec", value: 65 },
    { month: "Jan", value: 58 },
    { month: "Feb", value: 78 },
  ];

  const teamActivity = [
    { name: "Sarah Chen", role: "Sr. Account Exec", deals: 12, revenue: "$142K", status: "Online" },
    { name: "James Wright", role: "Account Exec", deals: 8, revenue: "$98K", status: "Online" },
    { name: "Maria Garcia", role: "Sales Manager", deals: 15, revenue: "$210K", status: "Away" },
    { name: "Robert Kim", role: "Account Exec", deals: 6, revenue: "$67K", status: "Offline" },
  ];

  const notifications = [
    { text: "New proposal sent to Atlas Financial", time: "2m ago", type: "info" },
    { text: "Deal closed: Pinnacle Solutions ($71K)", time: "1h ago", type: "success" },
    { text: "Meeting reminder: Vertex Industries at 3pm", time: "2h ago", type: "warning" },
    { text: "Quarterly report ready for review", time: "4h ago", type: "info" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>

      <div className="flex">
        {/* SIDEBAR */}
        <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-[#1e40af] text-white">
          <div className="p-6 border-b border-blue-700">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-sm font-bold">EN</div>
              <div>
                <div className="text-sm font-semibold">Enterprise CRM</div>
                <div className="text-[11px] text-blue-200">Professional Suite</div>
              </div>
            </div>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            {sidebarItems.map((item) => (
              <div key={item.label} className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm ${item.active ? "bg-white/15 font-medium" : "text-blue-200 hover:bg-white/10 hover:text-white"}`}>
                <span className="text-xs w-5 text-center font-mono">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
          <div className="p-4 border-t border-blue-700">
            <div className="flex items-center space-x-3 px-2">
              <div className="w-9 h-9 rounded-full bg-blue-300 flex items-center justify-center text-sm font-bold text-blue-900">JD</div>
              <div>
                <p className="text-sm font-medium">John Dalton</p>
                <p className="text-[11px] text-blue-200">VP of Sales</p>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1">
          {/* TOP BAR */}
          <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8">
            <div className="flex items-center space-x-4">
              <h1 className="text-lg font-semibold text-gray-900">Sales Dashboard</h1>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">Q1 2026</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="h-9 w-72 bg-gray-50 rounded-lg border border-gray-200 flex items-center px-3">
                <span className="text-xs text-gray-400">Search clients, deals...</span>
              </div>
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm">B</div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
              </div>
            </div>
          </header>

          <div className="p-8">
            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-xs font-bold text-[#3b82f6]">{stat.icon}</div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-xs font-medium mt-1 ${stat.up ? "text-emerald-600" : "text-red-500"}`}>
                    {stat.change} vs last quarter
                  </p>
                </div>
              ))}
            </div>

            {/* CHART + NOTIFICATIONS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
              <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-gray-900">Revenue Trend</h3>
                  <div className="flex space-x-1">
                    {["Monthly", "Quarterly", "Yearly"].map((p) => (
                      <span key={p} className={`px-3 py-1 text-xs font-medium rounded-md ${p === "Monthly" ? "bg-[#3b82f6] text-white" : "text-gray-400 hover:bg-gray-100"}`}>{p}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-end space-x-3 h-44">
                  {revenueByMonth.map((d) => (
                    <div key={d.month} className="flex-1 flex flex-col items-center">
                      <div className="w-full rounded-t-md bg-gradient-to-t from-[#1e40af] to-[#3b82f6]" style={{ height: `${d.value * 2}px` }} />
                      <span className="text-[11px] text-gray-500 mt-2 font-medium">{d.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Notifications</h3>
                <div className="space-y-3">
                  {notifications.map((n, i) => (
                    <div key={i} className="flex items-start space-x-3 pb-3 border-b border-gray-100 last:border-0">
                      <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.type === "success" ? "bg-emerald-500" : n.type === "warning" ? "bg-amber-500" : "bg-[#3b82f6]"}`} />
                      <div>
                        <p className="text-xs text-gray-700 leading-relaxed">{n.text}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TEAM PERFORMANCE */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Team Performance</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {teamActivity.map((member) => (
                  <div key={member.name} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#1e40af] flex items-center justify-center text-xs font-bold text-white">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{member.name}</p>
                        <p className="text-[11px] text-gray-400">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{member.deals} deals</span>
                      <span className="font-semibold text-gray-800">{member.revenue}</span>
                    </div>
                    <div className={`inline-flex items-center mt-2 text-[10px] font-medium px-2 py-0.5 rounded-full ${member.status === "Online" ? "bg-emerald-50 text-emerald-600" : member.status === "Away" ? "bg-amber-50 text-amber-600" : "bg-gray-100 text-gray-500"}`}>
                      {member.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DEALS TABLE */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-900">Active Deals</h3>
                <span className="text-xs font-medium text-[#3b82f6] hover:underline">View Pipeline</span>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    {["Company", "Contact", "Value", "Stage", "Probability", "Close Date"].map((h) => (
                      <th key={h} className="text-left px-6 py-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {deals.map((deal) => (
                    <tr key={deal.company} className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">{deal.company}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{deal.contact}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-800">{deal.value}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex text-[11px] font-medium px-2.5 py-1 rounded-full ${deal.stage === "Closed Won" ? "bg-emerald-50 text-emerald-700" : deal.stage === "Negotiation" ? "bg-blue-50 text-[#1e40af]" : deal.stage === "Proposal" ? "bg-amber-50 text-amber-700" : "bg-gray-100 text-gray-600"}`}>
                          {deal.stage}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-[#3b82f6] rounded-full" style={{ width: `${deal.probability}%` }} />
                          </div>
                          <span className="text-xs text-gray-500">{deal.probability}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-400">{deal.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-4 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-xs text-gray-400">Enterprise CRM Suite v4.2.0</p>
          <div className="flex space-x-6">
            {["Help Center", "Documentation", "Privacy Policy", "Terms"].map((link) => (
              <span key={link} className="text-xs text-gray-400 hover:text-gray-600">{link}</span>
            ))}
          </div>
          <p className="text-xs text-gray-400">2026 Enterprise Solutions Inc.</p>
        </div>
      </footer>
    </div>
  );
}
