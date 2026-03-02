export default function EducationPlayfulDemo() {
  const courses = [
    { emoji: "🧪", title: "Science Lab Adventures", age: "Ages 8-12", desc: "Hands-on experiments from volcanoes to slime. Get messy, learn tons!", color: "bg-purple-100 border-purple-300" },
    { emoji: "🎨", title: "Creative Coding & Art", age: "Ages 10-16", desc: "Build games, animations, and digital art with Scratch and p5.js.", color: "bg-orange-100 border-orange-300" },
    { emoji: "🌍", title: "World Explorers", age: "Ages 6-10", desc: "Travel the globe through stories, food, music, and virtual field trips.", color: "bg-teal-100 border-teal-300" },
    { emoji: "🔢", title: "Math Wizards", age: "Ages 8-14", desc: "Puzzles, games, and real-world challenges that make math click.", color: "bg-purple-100 border-purple-300" },
    { emoji: "📖", title: "Story Builders", age: "Ages 7-12", desc: "Write, illustrate, and publish your very own storybook in 8 weeks.", color: "bg-orange-100 border-orange-300" },
    { emoji: "🤖", title: "Robotics Club", age: "Ages 10-16", desc: "Design, build, and program robots that solve real-world problems.", color: "bg-teal-100 border-teal-300" },
  ]

  const stats = [
    { value: "12,400+", label: "Happy Students", emoji: "🎒" },
    { value: "150+", label: "Fun Courses", emoji: "📚" },
    { value: "45", label: "Countries", emoji: "🌎" },
    { value: "98%", label: "Would Recommend", emoji: "⭐" },
  ]

  const teachers = [
    { name: "Ms. Rivera", subject: "Science & Nature", bio: "Former marine biologist who brings ocean specimens to every class. Known for her legendary frog dissection alternatives.", color: "bg-purple-500" },
    { name: "Mr. Tanaka", subject: "Coding & Robotics", bio: "Game developer turned educator. His students have won three national coding competitions in the last two years.", color: "bg-orange-500" },
    { name: "Coach Jordan", subject: "Math & Logic", bio: "Makes multiplication feel like a sport. Students earn belts like in karate as they master new math levels.", color: "bg-teal-500" },
  ]

  const projects = [
    { title: "Solar-Powered Car", student: "Aisha, Age 11", desc: "Built from recycled materials and actually runs on sunlight!" },
    { title: "Underwater World Game", student: "Liam, Age 13", desc: "A Scratch game with 5 levels that teaches ocean conservation." },
    { title: "Community Garden Map", student: "Sofia, Age 9", desc: "An interactive map showing every community garden in the city." },
  ]

  const funFacts = [
    "Our students have collectively read over 42,000 books this year",
    "The most popular course request? Dinosaur Paleontology (coming soon!)",
    "Our oldest student is 87 and our youngest is 5",
  ]

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Poppins, sans-serif" }}>
      <head><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" /></head>

      <nav className="border-b-4 border-purple-500">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-extrabold text-purple-600">sparkle<span className="text-orange-500">learn</span></span>
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-sm font-medium text-gray-600 hover:text-purple-500 cursor-pointer transition-colors">Courses</span>
            <span className="text-sm font-medium text-gray-600 hover:text-purple-500 cursor-pointer transition-colors">Teachers</span>
            <span className="text-sm font-medium text-gray-600 hover:text-purple-500 cursor-pointer transition-colors">Projects</span>
            <button className="h-10 px-6 text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 rounded-full transition-all">Join Free!</button>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">Learning should be <span className="text-purple-500">fun!</span></h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8">Interactive courses, amazing teachers, and a global community of curious kids and lifelong learners. No boring lectures, ever.</p>
        <div className="flex justify-center space-x-3">
          <button className="h-12 px-8 text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-orange-500 rounded-full hover:shadow-lg transition-all">Start Learning</button>
          <button className="h-12 px-8 text-sm font-bold text-purple-600 bg-purple-100 hover:bg-purple-200 rounded-full transition-colors">Watch Demo</button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-2">Pick Your Adventure</h2>
        <p className="text-gray-500 text-center mb-10">Every course is hands-on, interactive, and designed by real experts</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div key={c.title} className={`rounded-2xl p-6 border-2 ${c.color} hover:scale-105 transition-transform cursor-pointer`}>
              <div className="text-4xl mb-3">{c.emoji}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{c.title}</h3>
              <p className="text-xs font-semibold text-purple-600 mb-2">{c.age}</p>
              <p className="text-sm text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-500 to-orange-500 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl mb-2">{s.emoji}</div>
                <p className="text-3xl font-extrabold text-white">{s.value}</p>
                <p className="text-sm text-white/80 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Meet Our Amazing Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teachers.map((t) => (
            <div key={t.name} className="rounded-2xl overflow-hidden border-2 border-gray-200 hover:shadow-lg transition-shadow">
              <div className={`${t.color} h-3`} />
              <div className="p-6">
                <div className={`w-14 h-14 rounded-full ${t.color} flex items-center justify-center text-white text-xl font-bold mb-4`}>{t.name[0]}{t.name.split(" ")[1][0]}</div>
                <h3 className="text-lg font-bold text-gray-900">{t.name}</h3>
                <p className="text-xs font-semibold text-orange-500 mb-3">{t.subject}</p>
                <p className="text-sm text-gray-500">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">Student Projects Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 border-2 border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-xs font-semibold text-teal-500 mb-3">{p.student}</p>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Fun Facts</h2>
        <div className="space-y-4">
          {funFacts.map((fact, i) => (
            <div key={i} className="flex items-center space-x-3 bg-purple-50 rounded-xl p-4 border border-purple-200">
              <span className="text-2xl">💡</span>
              <p className="text-sm font-medium text-gray-700">{fact}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-500 to-orange-500 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-white/80 mb-8">Sign up in 30 seconds. Your first course is completely free!</p>
          <div className="bg-white rounded-2xl p-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div><label className="text-xs font-semibold text-gray-600 block mb-1">Your Name</label><div className="h-10 bg-gray-100 rounded-lg" /></div>
              <div><label className="text-xs font-semibold text-gray-600 block mb-1">Email Address</label><div className="h-10 bg-gray-100 rounded-lg" /></div>
            </div>
            <div className="mb-4"><label className="text-xs font-semibold text-gray-600 block mb-1">I am a...</label><div className="h-10 bg-gray-100 rounded-lg" /></div>
            <button className="w-full h-12 text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-orange-500 rounded-full hover:shadow-lg transition-all">Let&apos;s Go! 🚀</button>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-purple-500 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm font-bold text-gray-400">&copy; 2026 SparkleLearn. Made with ❤️ for curious minds.</span>
          <div className="flex space-x-6 text-sm text-gray-400">
            <span className="hover:text-purple-500 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-purple-500 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-purple-500 cursor-pointer transition-colors">Help</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
