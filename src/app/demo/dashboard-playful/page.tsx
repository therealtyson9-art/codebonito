export default function DashboardPlayfulDemo() {
  const stats = [
    { label: "Total Sales", value: "$52,840", change: "+18.2%", emoji: "💰", color: "from-pink-400 to-rose-500", bg: "bg-pink-50" },
    { label: "Happy Users", value: "12,483", change: "+24.1%", emoji: "😊", color: "from-violet-400 to-purple-500", bg: "bg-violet-50" },
    { label: "Tasks Done", value: "847", change: "+9.5%", emoji: "✅", color: "from-emerald-400 to-teal-500", bg: "bg-emerald-50" },
    { label: "Team Score", value: "94/100", change: "+3pts", emoji: "🏆", color: "from-amber-400 to-orange-500", bg: "bg-amber-50" },
  ];

  const navItems = [
    { emoji: "🏠", label: "Home", active: true },
    { emoji: "📊", label: "Analytics", active: false },
    { emoji: "👥", label: "People", active: false },
    { emoji: "💬", label: "Messages", active: false },
    { emoji: "📋", label: "Tasks", active: false },
    { emoji: "⚙️", label: "Settings", active: false },
  ];

  const leaderboard = [
    { name: "Emma Wilson", avatar: "EW", points: 2840, streak: 14, badge: "🔥" },
    { name: "Alex Rivera", avatar: "AR", points: 2650, streak: 9, badge: "⚡" },
    { name: "Mia Chang", avatar: "MC", points: 2410, streak: 21, badge: "🌟" },
    { name: "Leo Santos", avatar: "LS", points: 2180, streak: 7, badge: "💪" },
  ];

  const weeklyData = [
    { day: "Mon", value: 65, color: "from-pink-400 to-rose-400" },
    { day: "Tue", value: 82, color: "from-violet-400 to-purple-400" },
    { day: "Wed", value: 48, color: "from-blue-400 to-cyan-400" },
    { day: "Thu", value: 91, color: "from-emerald-400 to-teal-400" },
    { day: "Fri", value: 74, color: "from-amber-400 to-orange-400" },
    { day: "Sat", value: 55, color: "from-pink-400 to-rose-400" },
    { day: "Sun", value: 38, color: "from-violet-400 to-purple-400" },
  ];

  const tasks = [
    { title: "Design new landing page", category: "Design", priority: "High", status: "In Progress", emoji: "🎨" },
    { title: "Fix checkout bug", category: "Engineering", priority: "Urgent", status: "In Progress", emoji: "🐛" },
    { title: "Write blog post for launch", category: "Marketing", priority: "Medium", status: "To Do", emoji: "✍️" },
    { title: "User interviews (batch 3)", category: "Research", priority: "High", status: "Done", emoji: "🎤" },
    { title: "Update API documentation", category: "Engineering", priority: "Low", status: "To Do", emoji: "📝" },
    { title: "Social media campaign Q1", category: "Marketing", priority: "Medium", status: "In Progress", emoji: "📱" },
  ];

  const activityFeed = [
    { user: "Emma", action: "completed 5 tasks", time: "2 min ago", emoji: "🎉" },
    { user: "Alex", action: "reached 2,500 points!", time: "15 min ago", emoji: "🏅" },
    { user: "Mia", action: "shared a new design", time: "1 hr ago", emoji: "🖼️" },
    { user: "Leo", action: "joined the team chat", time: "2 hrs ago", emoji: "👋" },
    { user: "Team", action: "hit weekly target early!", time: "3 hrs ago", emoji: "🚀" },
  ];

  const categories = [
    { name: "Design", pct: 78, color: "from-pink-400 to-rose-500" },
    { name: "Engineering", pct: 62, color: "from-violet-400 to-purple-500" },
    { name: "Marketing", pct: 91, color: "from-emerald-400 to-teal-500" },
    { name: "Research", pct: 45, color: "from-amber-400 to-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-pink-50 to-amber-50" style={{ fontFamily: "Nunito, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>

      {/* NAV */}
      <nav className="bg-white/70 backdrop-blur-md border-b border-white/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🌈</span>
            <span className="text-lg font-extrabold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">Dashify</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className={`flex items-center space-x-1.5 px-4 py-2 rounded-2xl text-sm font-semibold transition-all ${item.active ? "bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg shadow-violet-200" : "text-gray-500 hover:bg-white/80"}`}>
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold shadow-md">JD</div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white" />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* GREETING */}
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold text-gray-800">Good morning, Jamie! 👋</h1>
          <p className="text-sm text-gray-500 mt-1 font-medium">Here is what is happening with your team today.</p>
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-white/50 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{stat.emoji}</span>
                <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">{stat.change}</span>
              </div>
              <p className="text-2xl font-extrabold text-gray-800">{stat.value}</p>
              <p className="text-xs font-semibold text-gray-400 mt-1">{stat.label}</p>
              <div className="mt-3 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div className={`h-full rounded-full bg-gradient-to-r ${stat.color}`} style={{ width: "72%" }} />
              </div>
            </div>
          ))}
        </div>

        {/* CHART + ACTIVITY */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-white/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-extrabold text-gray-800">Weekly Activity 📈</h3>
              <span className="text-xs font-semibold text-gray-400">This week</span>
            </div>
            <div className="flex items-end space-x-3 h-44">
              {weeklyData.map((d) => (
                <div key={d.day} className="flex-1 flex flex-col items-center">
                  <div className={`w-full rounded-xl bg-gradient-to-t ${d.color}`} style={{ height: `${d.value * 1.6}px` }} />
                  <span className="text-xs font-bold text-gray-400 mt-2">{d.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-white/50">
            <h3 className="text-base font-extrabold text-gray-800 mb-4">Live Feed 🔔</h3>
            <div className="space-y-3">
              {activityFeed.map((a, i) => (
                <div key={i} className="flex items-start space-x-3 pb-3 border-b border-gray-50 last:border-0">
                  <span className="text-lg">{a.emoji}</span>
                  <div>
                    <p className="text-xs text-gray-700"><span className="font-bold">{a.user}</span> {a.action}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PROGRESS + LEADERBOARD */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-white/50">
            <h3 className="text-base font-extrabold text-gray-800 mb-4">Progress by Team 🎯</h3>
            <div className="space-y-4">
              {categories.map((cat) => (
                <div key={cat.name}>
                  <div className="flex justify-between text-xs font-bold mb-1.5">
                    <span className="text-gray-600">{cat.name}</span>
                    <span className="text-gray-400">{cat.pct}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full bg-gradient-to-r ${cat.color}`} style={{ width: `${cat.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-white/50">
            <h3 className="text-base font-extrabold text-gray-800 mb-4">Leaderboard 🏆</h3>
            <div className="space-y-3">
              {leaderboard.map((person, i) => (
                <div key={person.name} className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-extrabold text-gray-300 w-6 text-center">{i + 1}</span>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-bold text-white ${i === 0 ? "bg-gradient-to-br from-amber-400 to-orange-500" : i === 1 ? "bg-gradient-to-br from-violet-400 to-purple-500" : "bg-gradient-to-br from-pink-400 to-rose-500"}`}>
                      {person.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">{person.name} {person.badge}</p>
                      <p className="text-[11px] text-gray-400 font-medium">{person.streak} day streak</p>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-gray-700">{person.points.toLocaleString()} pts</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TASKS TABLE */}
        <div className="bg-white rounded-2xl shadow-sm border border-white/50 overflow-hidden mb-8">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h3 className="text-base font-extrabold text-gray-800">Task Board 📋</h3>
            <span className="text-xs font-bold text-violet-500 bg-violet-50 px-3 py-1 rounded-full">{tasks.length} tasks</span>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/50">
                {["Task", "Category", "Priority", "Status"].map((h) => (
                  <th key={h} className="text-left px-6 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.title} className="border-b border-gray-50 hover:bg-violet-50/30 transition-colors">
                  <td className="px-6 py-3.5">
                    <div className="flex items-center space-x-2">
                      <span>{task.emoji}</span>
                      <span className="text-sm font-semibold text-gray-700">{task.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3.5">
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">{task.category}</span>
                  </td>
                  <td className="px-6 py-3.5">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${task.priority === "Urgent" ? "bg-red-50 text-red-500" : task.priority === "High" ? "bg-orange-50 text-orange-500" : task.priority === "Medium" ? "bg-amber-50 text-amber-600" : "bg-gray-50 text-gray-400"}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-6 py-3.5">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${task.status === "Done" ? "bg-emerald-50 text-emerald-500" : task.status === "In Progress" ? "bg-violet-50 text-violet-500" : "bg-gray-100 text-gray-400"}`}>
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-white/50 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span>🌈</span>
            <span className="text-xs font-bold text-gray-400">Dashify v3.0</span>
          </div>
          <div className="flex space-x-4">
            {["Help", "Feedback", "Privacy", "Terms"].map((link) => (
              <span key={link} className="text-xs font-semibold text-gray-400 hover:text-violet-500">{link}</span>
            ))}
          </div>
          <p className="text-xs text-gray-400 font-medium">Made with 💜 in 2026</p>
        </div>
      </footer>
    </div>
  );
}
