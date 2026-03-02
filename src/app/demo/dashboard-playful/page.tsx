export const dynamic = "force-dynamic";
export default function DashboardPlayfulDemo() {
  const gamifiedStats = [
    { label: "Total XP", value: "12,480", icon: "⚡", color: "#a855f7" },
    { label: "Team Level", value: "24", icon: "🏆", color: "#f59e0b" },
    { label: "Day Streak", value: "18", icon: "🔥", color: "#ef4444" },
    { label: "Tasks Done", value: "847", icon: "✅", color: "#22c55e" },
  ];

  const achievements = [
    { name: "Speed Demon", desc: "Completed 10 tasks in one day", icon: "🚀", earned: true },
    { name: "Team Player", desc: "Helped 5 teammates this week", icon: "🤝", earned: true },
    { name: "Early Bird", desc: "Logged in before 7am for 5 days", icon: "🌅", earned: true },
    { name: "Perfectionist", desc: "Zero revisions on 20 tasks", icon: "💎", earned: false },
    { name: "Marathon Runner", desc: "30-day login streak", icon: "🏃", earned: false },
    { name: "Code Wizard", desc: "Ship 50 features in a quarter", icon: "🧙", earned: false },
  ];

  const leaderboard = [
    { rank: 1, name: "Mia Torres", xp: 3420, level: 28, avatar: "MT", streak: 22 },
    { rank: 2, name: "Jordan Lee", xp: 3180, level: 27, avatar: "JL", streak: 18 },
    { rank: 3, name: "Priya Sharma", xp: 2940, level: 26, avatar: "PS", streak: 15 },
    { rank: 4, name: "Alex Rivera", xp: 2780, level: 25, avatar: "AR", streak: 12 },
    { rank: 5, name: "Sam Nakamura", xp: 2650, level: 24, avatar: "SN", streak: 9 },
  ];

  const quests = [
    { title: "Review 3 Pull Requests", xp: 150, progress: 2, total: 3, category: "Code Review" },
    { title: "Update Sprint Board", xp: 50, progress: 1, total: 1, category: "Planning" },
    { title: "Write Unit Tests for Auth Module", xp: 200, progress: 0, total: 5, category: "Testing" },
    { title: "Pair Program with a Teammate", xp: 100, progress: 0, total: 1, category: "Collaboration" },
    { title: "Close 5 Bug Tickets", xp: 250, progress: 3, total: 5, category: "Bug Fix" },
  ];

  const sidebarIcons = [
    { icon: "🏠", label: "Home", active: true },
    { icon: "📊", label: "Stats" },
    { icon: "🎯", label: "Quests" },
    { icon: "👥", label: "Team" },
    { icon: "🏅", label: "Badges" },
    { icon: "⚙️", label: "Settings" },
  ];

  const progressRings = [
    { label: "Sprint Progress", value: 72, color: "#a855f7" },
    { label: "Weekly Goal", value: 88, color: "#22c55e" },
    { label: "Team Health", value: 95, color: "#3b82f6" },
  ];

  return (
    <div style={{ fontFamily: "'Varela Round', sans-serif", backgroundColor: "#e0f2fe" }} className="min-h-screen flex">
      <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet" />

      {/* Icon Sidebar */}
      <aside className="w-20 min-h-screen flex flex-col items-center py-6 gap-2" style={{ backgroundColor: "#ffffff", boxShadow: "2px 0 8px rgba(0,0,0,0.05)" }}>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-6" style={{ backgroundColor: "#a855f7" }}>L</div>
        {sidebarIcons.map((item) => (
          <div
            key={item.label}
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl cursor-pointer transition-all"
            style={{
              backgroundColor: item.active ? "#f3e8ff" : "transparent",
              transform: item.active ? "scale(1.1)" : "scale(1)",
            }}
            title={item.label}
          >
            {item.icon}
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold" style={{ color: "#1e1b4b" }}>Welcome back, Team Alpha! 👋</h1>
              <p className="text-sm mt-1" style={{ color: "#7c3aed" }}>Keep the momentum going - you are on an 18-day streak!</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-2xl" style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              <span className="text-sm" style={{ color: "#6b7280" }}>Level 24</span>
              <div className="w-32 h-3 rounded-full" style={{ backgroundColor: "#e5e7eb" }}>
                <div className="h-full rounded-full" style={{ width: "68%", backgroundColor: "#a855f7" }} />
              </div>
              <span className="text-xs font-bold" style={{ color: "#a855f7" }}>68%</span>
            </div>
          </div>

          {/* Gamified Stats */}
          <div className="grid grid-cols-4 gap-5 mb-8">
            {gamifiedStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl p-5 text-center" style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                <p className="text-sm mt-1" style={{ color: "#6b7280" }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Daily Quests */}
            <div className="col-span-2 rounded-2xl p-6" style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: "#1e1b4b" }}>Daily Quests 🎯</h2>
              <div className="space-y-3">
                {quests.map((quest) => (
                  <div key={quest.title} className="flex items-center justify-between p-3 rounded-xl" style={{ backgroundColor: quest.progress === quest.total ? "#f0fdf4" : "#faf5ff" }}>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium" style={{ color: "#1e1b4b" }}>{quest.title}</p>
                        <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "#e0f2fe", color: "#0369a1" }}>{quest.category}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-full h-2 rounded-full" style={{ backgroundColor: "#e5e7eb", maxWidth: "200px" }}>
                          <div className="h-full rounded-full transition-all" style={{ width: `${(quest.progress / quest.total) * 100}%`, backgroundColor: quest.progress === quest.total ? "#22c55e" : "#a855f7" }} />
                        </div>
                        <span className="text-xs" style={{ color: "#6b7280" }}>{quest.progress}/{quest.total}</span>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <span className="text-sm font-bold" style={{ color: "#a855f7" }}>+{quest.xp} XP</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Rings */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: "#1e1b4b" }}>Progress 📈</h2>
              <div className="space-y-6">
                {progressRings.map((ring) => (
                  <div key={ring.label} className="flex items-center gap-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <svg viewBox="0 0 36 36" className="w-full h-full" style={{ transform: "rotate(-90deg)" }}>
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke={ring.color} strokeWidth="3" strokeDasharray={`${ring.value * 0.88} 88`} strokeLinecap="round" />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold" style={{ color: ring.color }}>{ring.value}%</span>
                    </div>
                    <span className="text-sm" style={{ color: "#6b7280" }}>{ring.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Achievement Badges */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: "#1e1b4b" }}>Achievements 🏅</h2>
              <div className="grid grid-cols-3 gap-3">
                {achievements.map((badge) => (
                  <div key={badge.name} className="text-center p-3 rounded-xl" style={{ backgroundColor: badge.earned ? "#faf5ff" : "#f3f4f6", opacity: badge.earned ? 1 : 0.5 }}>
                    <div className="text-2xl mb-1">{badge.icon}</div>
                    <p className="text-xs font-medium" style={{ color: "#1e1b4b" }}>{badge.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>{badge.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Leaderboard */}
            <div className="rounded-2xl p-6" style={{ backgroundColor: "#ffffff", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h2 className="text-lg font-bold mb-4" style={{ color: "#1e1b4b" }}>Leaderboard 🏆</h2>
              <div className="space-y-3">
                {leaderboard.map((member) => (
                  <div key={member.rank} className="flex items-center gap-3 p-2 rounded-xl" style={{ backgroundColor: member.rank <= 3 ? "#faf5ff" : "transparent" }}>
                    <span className="text-lg font-bold w-6 text-center" style={{ color: member.rank === 1 ? "#f59e0b" : member.rank === 2 ? "#94a3b8" : member.rank === 3 ? "#cd7f32" : "#d1d5db" }}>
                      {member.rank}
                    </span>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#a855f7" }}>
                      {member.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium" style={{ color: "#1e1b4b" }}>{member.name}</p>
                      <p className="text-xs" style={{ color: "#9ca3af" }}>Lvl {member.level} | {member.streak}d streak</p>
                    </div>
                    <span className="text-sm font-bold" style={{ color: "#a855f7" }}>{member.xp.toLocaleString()} XP</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-6xl mx-auto mt-4 pt-4 text-center" style={{ borderTop: "2px dashed #c4b5fd" }}>
          <p className="text-sm" style={{ color: "#7c3aed" }}>
            &quot;The only way to do great work is to love what you do.&quot; - Keep leveling up! 🚀
          </p>
          <p className="text-xs mt-1" style={{ color: "#a78bfa" }}>LevelUp Productivity Platform v2.4</p>
        </div>
      </main>
    </div>
  );
}
