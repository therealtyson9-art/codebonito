export const dynamic = "force-dynamic";
export default function EducationBrutalistDemo() {
  const skillTrees = [
    {
      title: "FRONTEND",
      skills: ["HTML & CSS", "JavaScript ES6+", "React.js", "TypeScript", "Next.js", "Testing"],
      color: "#00d4ff",
    },
    {
      title: "BACKEND",
      skills: ["Node.js", "Python", "Databases", "REST APIs", "GraphQL", "Auth & Security"],
      color: "#ff00e5",
    },
    {
      title: "DEVOPS",
      skills: ["Git & GitHub", "Docker", "CI/CD", "AWS Cloud", "Kubernetes", "Monitoring"],
      color: "#39ff14",
    },
  ];

  const leaderboard = [
    { rank: 1, name: "xN1GHTH4WKx", xp: 48750, level: 42, badge: "LEGENDARY" },
    { rank: 2, name: "c0deSamurai", xp: 45200, level: 39, badge: "EPIC" },
    { rank: 3, name: "bitCrusher99", xp: 42100, level: 37, badge: "EPIC" },
    { rank: 4, name: "devDragon_", xp: 39800, level: 35, badge: "RARE" },
    { rank: 5, name: "pixelNinja42", xp: 37500, level: 33, badge: "RARE" },
  ];

  const achievements = [
    { icon: "🏆", name: "FIRST BLOOD", desc: "Complete your first challenge" },
    { icon: "⚡", name: "SPEED DEMON", desc: "Solve a problem in under 60 seconds" },
    { icon: "🔥", name: "ON FIRE", desc: "Complete a 30-day streak" },
    { icon: "💀", name: "BOSS SLAYER", desc: "Beat all boss challenges in a track" },
    { icon: "🌟", name: "PERFECTIONIST", desc: "Score 100% on 10 quizzes" },
    { icon: "🎮", name: "MULTIPLAYER", desc: "Win 5 head-to-head code battles" },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen" >
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap&family=Inter:wght@400;500&display=swap" rel="stylesheet" />

      <div style={{ backgroundColor: "#0a0a0a", color: "#00d4ff" }}>
        {/* Pixel Nav */}
        <nav className="border-b-4 px-6 py-4 flex items-center justify-between" style={{ borderColor: "#00d4ff" }}>
          <span style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "14px" }}>CODE QUEST</span>
          <div className="hidden md:flex gap-6 text-xs font-medium uppercase tracking-wider" style={{ color: "#00d4ff" }}>
            <a href="#">Skill Trees</a>
            <a href="#">Leaderboard</a>
            <a href="#">Achievements</a>
            <a href="#">Pricing</a>
          </div>
          <button className="text-xs px-4 py-2 border-2 font-medium" style={{ borderColor: "#00d4ff", color: "#00d4ff" }}>LOG IN</button>
        </nav>

        {/* 8-bit Hero */}
        <section className="px-6 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 flex justify-center">
              <div className="w-64 h-48 border-4 flex items-center justify-center" style={{ borderColor: "#00d4ff", backgroundColor: "#111" }}>
                <span style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "10px", color: "#00d4ff" }}>&gt; PIXEL ART HERO &lt;</span>
              </div>
            </div>
            <h1 style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "28px", lineHeight: "1.6" }} className="mb-6">LEVEL UP YOUR CODE SKILLS</h1>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#9ca3af" }}>The gamified coding bootcamp where every lesson is a quest, every project is a boss battle, and every skill you learn earns XP.</p>
            <button className="px-8 py-4 text-sm font-bold uppercase tracking-wider" style={{ backgroundColor: "#00d4ff", color: "#0a0a0a" }}>START YOUR QUEST</button>
          </div>
        </section>

        {/* Skill Trees */}
        <section className="px-6 py-16">
          <h2 style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "18px" }} className="text-center mb-12">SKILL TREES</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {skillTrees.map((tree) => (
              <div key={tree.title} className="border-2 p-6" style={{ borderColor: tree.color }}>
                <h3 style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "14px", color: tree.color }} className="mb-6">{tree.title}</h3>
                <ul className="space-y-3">
                  {tree.skills.map((skill, i) => (
                    <li key={skill} className="flex items-center gap-3 text-sm">
                      <span className="w-6 h-6 flex items-center justify-center text-xs border" style={{ borderColor: tree.color, color: tree.color }}>
                        {i + 1}
                      </span>
                      <span style={{ color: "#e5e7eb" }}>{skill}</span>
                      <span className="ml-auto text-xs" style={{ color: tree.color }}>{(i + 1) * 500} XP</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Leaderboard */}
        <section className="px-6 py-16">
          <h2 style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "18px" }} className="text-center mb-12">LEADERBOARD</h2>
          <div className="max-w-2xl mx-auto border-2" style={{ borderColor: "#00d4ff" }}>
            {leaderboard.map((player) => (
              <div key={player.rank} className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "#1a1a2e" }}>
                <div className="flex items-center gap-4">
                  <span style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "12px", color: player.rank <= 3 ? "#fbbf24" : "#6b7280" }}>#{player.rank}</span>
                  <span className="text-sm font-medium" style={{ color: "#e5e7eb" }}>{player.name}</span>
                </div>
                <div className="flex items-center gap-6 text-xs">
                  <span style={{ color: "#00d4ff" }}>LVL {player.level}</span>
                  <span style={{ color: "#9ca3af" }}>{player.xp.toLocaleString()} XP</span>
                  <span className="px-2 py-1 text-xs" style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "8px", color: player.badge === "LEGENDARY" ? "#fbbf24" : player.badge === "EPIC" ? "#a855f7" : "#00d4ff" }}>{player.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="px-6 py-16">
          <h2 style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "18px" }} className="text-center mb-12">ACHIEVEMENTS</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map((a) => (
              <div key={a.name} className="border-2 p-4 text-center" style={{ borderColor: "#1f2937" }}>
                <div className="text-3xl mb-2">{a.icon}</div>
                <h3 style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "10px", color: "#00d4ff" }} className="mb-2">{a.name}</h3>
                <p className="text-xs" style={{ color: "#6b7280" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="px-6 py-16">
          <h2 style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "18px" }} className="text-center mb-12">CHOOSE YOUR PATH</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="border-2 p-8" style={{ borderColor: "#374151" }}>
              <h3 style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "14px", color: "#9ca3af" }} className="mb-2">FREE</h3>
              <div className="text-3xl font-bold mb-6" style={{ color: "#e5e7eb" }}>$0<span className="text-sm font-normal" style={{ color: "#6b7280" }}>/forever</span></div>
              <ul className="space-y-3 text-sm" style={{ color: "#9ca3af" }}>
                <li>+ 20 beginner challenges</li>
                <li>+ Community forums</li>
                <li>+ Basic skill tracking</li>
                <li>+ Weekly coding puzzles</li>
              </ul>
            </div>
            <div className="border-2 p-8" style={{ borderColor: "#00d4ff" }}>
              <h3 style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "14px", color: "#00d4ff" }} className="mb-2">PREMIUM</h3>
              <div className="text-3xl font-bold mb-6" style={{ color: "#e5e7eb" }}>$29<span className="text-sm font-normal" style={{ color: "#6b7280" }}>/month</span></div>
              <ul className="space-y-3 text-sm" style={{ color: "#9ca3af" }}>
                <li>+ 500+ challenges & projects</li>
                <li>+ Boss battles & code wars</li>
                <li>+ 1-on-1 mentor sessions</li>
                <li>+ Verified certificates</li>
                <li>+ Priority leaderboard</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Start Quest CTA */}
        <section className="px-6 py-20 text-center border-t-4" style={{ borderColor: "#00d4ff" }}>
          <h2 style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "22px" }} className="mb-6">READY PLAYER ONE?</h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "#6b7280" }}>Your coding adventure begins now. Join 25,000+ questers who are leveling up their dev careers.</p>
          <button className="px-10 py-4 text-sm font-bold uppercase tracking-wider" style={{ backgroundColor: "#00d4ff", color: "#0a0a0a" }}>BEGIN QUEST</button>
        </section>

        {/* Footer */}
        <footer className="border-t-2 px-6 py-8" style={{ borderColor: "#1f2937" }}>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <span style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "10px", color: "#374151" }}>CODE QUEST &copy; 2026</span>
            <div className="flex gap-6 text-xs" style={{ color: "#374151" }}>
              <a href="#">TERMS</a>
              <a href="#">PRIVACY</a>
              <a href="#">DISCORD</a>
              <a href="#">GITHUB</a>
            </div>
            <span style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "8px", color: "#374151" }}>GAME OVER? NEVER.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
