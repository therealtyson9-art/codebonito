export default function DashboardMinimalistDemo() {
  const stats = [
    { label: "Monthly Revenue", value: "$128,430", change: "+14.2%", up: true },
    { label: "Active Users", value: "24,891", change: "+8.7%", up: true },
    { label: "Churn Rate", value: "1.8%", change: "-0.3%", up: true },
    { label: "Avg. Session", value: "4m 32s", change: "+12.1%", up: true },
  ];

  const activities = [
    { user: "Sarah Chen", action: "upgraded to Pro plan", time: "2 min ago", type: "upgrade" },
    { user: "Marcus Johnson", action: "exported Q4 report", time: "8 min ago", type: "export" },
    { user: "Elena Rodriguez", action: "added 3 team members", time: "15 min ago", type: "team" },
    { user: "David Kim", action: "triggered webhook alert", time: "24 min ago", type: "alert" },
    { user: "Aisha Patel", action: "created new dashboard", time: "31 min ago", type: "create" },
    { user: "James Wright", action: "updated billing info", time: "1 hr ago", type: "billing" },
  ];

  const navItems = [
    { icon: "//", label: "Overview", active: true },
    { icon: "::", label: "Analytics" },
    { icon: "[]", label: "Reports" },
    { icon: "<>", label: "Integrations" },
    { icon: "{}", label: "API Keys" },
    { icon: "##", label: "Settings" },
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "#f3f4f6" }} className="min-h-screen flex">
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Sidebar */}
      <aside className="w-64 min-h-screen p-6 flex flex-col justify-between" style={{ backgroundColor: "#ffffff", borderRight: "1px solid #e5e7eb" }}>
        <div>
          <div className="flex items-center gap-2 mb-10">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: "#3b82f6" }}>M</div>
            <span className="text-xl font-semibold" style={{ color: "#1e293b" }}>Metric</span>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer transition-colors"
                style={{
                  backgroundColor: item.active ? "#eff6ff" : "transparent",
                  color: item.active ? "#3b82f6" : "#64748b",
                }}
              >
                <span className="font-mono text-xs w-5">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </nav>
        </div>
        <div className="pt-4" style={{ borderTop: "1px solid #e5e7eb" }}>
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white" style={{ backgroundColor: "#3b82f6" }}>SC</div>
            <div>
              <p className="text-sm font-medium" style={{ color: "#1e293b" }}>Sarah Chen</p>
              <p className="text-xs" style={{ color: "#94a3b8" }}>Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-semibold" style={{ color: "#1e293b" }}>Analytics Overview</h1>
              <p className="text-sm mt-1" style={{ color: "#94a3b8" }}>Tracking performance across all SaaS products for March 2026</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-lg text-sm font-medium" style={{ border: "1px solid #e5e7eb", color: "#64748b", backgroundColor: "#ffffff" }}>Export CSV</button>
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-white" style={{ backgroundColor: "#3b82f6" }}>Generate Report</button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-5 mb-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm" style={{ border: "1px solid #e5e7eb" }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#94a3b8" }}>{stat.label}</p>
                <p className="text-2xl font-semibold" style={{ color: "#1e293b" }}>{stat.value}</p>
                <p className="text-xs font-medium mt-2" style={{ color: stat.up ? "#22c55e" : "#ef4444" }}>
                  {stat.change} vs last month
                </p>
              </div>
            ))}
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8" style={{ border: "1px solid #e5e7eb" }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold" style={{ color: "#1e293b" }}>Revenue Trend</h2>
              <div className="flex gap-2">
                {["7D", "30D", "90D", "1Y"].map((range) => (
                  <button key={range} className="px-3 py-1 rounded-md text-xs font-medium" style={{ backgroundColor: range === "30D" ? "#eff6ff" : "#f8fafc", color: range === "30D" ? "#3b82f6" : "#94a3b8" }}>
                    {range}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-48 rounded-lg flex items-end justify-between gap-2 px-4" style={{ backgroundColor: "#f8fafc" }}>
              {[35, 42, 58, 47, 63, 71, 55, 68, 82, 74, 89, 94].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm transition-all" style={{ height: `${h}%`, backgroundColor: i === 11 ? "#3b82f6" : "#bfdbfe" }} />
              ))}
            </div>
            <div className="flex justify-between mt-3 px-4">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                <span key={m} className="text-xs flex-1 text-center" style={{ color: "#94a3b8" }}>{m}</span>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm" style={{ border: "1px solid #e5e7eb" }}>
            <div className="p-6 flex items-center justify-between" style={{ borderBottom: "1px solid #e5e7eb" }}>
              <h2 className="text-lg font-semibold" style={{ color: "#1e293b" }}>Recent Activity</h2>
              <button className="text-sm font-medium" style={{ color: "#3b82f6" }}>View all</button>
            </div>
            <div>
              {activities.map((activity, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4" style={{ borderBottom: i < activities.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-white" style={{ backgroundColor: "#3b82f6" }}>
                      {activity.user.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: "#1e293b" }}>
                        <span className="font-medium">{activity.user}</span>{" "}
                        <span style={{ color: "#64748b" }}>{activity.action}</span>
                      </p>
                    </div>
                  </div>
                  <span className="text-xs" style={{ color: "#94a3b8" }}>{activity.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { label: "Create Report", desc: "Generate custom analytics reports for stakeholders" },
              { label: "Invite Team", desc: "Add collaborators to your Metric workspace" },
              { label: "Configure Alerts", desc: "Set thresholds for real-time metric notifications" },
            ].map((action) => (
              <button key={action.label} className="bg-white rounded-xl p-5 text-left shadow-sm hover:shadow-md transition-shadow" style={{ border: "1px solid #e5e7eb" }}>
                <p className="text-sm font-semibold mb-1" style={{ color: "#1e293b" }}>{action.label}</p>
                <p className="text-xs" style={{ color: "#94a3b8" }}>{action.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-6xl mx-auto mt-12 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid #e5e7eb" }}>
          <span className="text-xs" style={{ color: "#94a3b8" }}>Metric Analytics v3.2.1</span>
          <span className="text-xs" style={{ color: "#94a3b8" }}>Last synced: 2 minutes ago</span>
        </div>
      </main>
    </div>
  );
}
