export default function PortfolioMinimalistDemo() {
  const projects = [
    { title: "Radius Brand Identity", category: "Branding", year: "2024", color: "bg-teal-100" },
    { title: "Neon Dashboard UI", category: "Product Design", year: "2024", color: "bg-slate-200" },
    { title: "Verve Mobile App", category: "App Design", year: "2023", color: "bg-teal-50" },
    { title: "Orca Marketing Site", category: "Web Design", year: "2023", color: "bg-slate-100" },
    { title: "Flux Design System", category: "Design Systems", year: "2023", color: "bg-teal-100" },
    { title: "Polaris E-commerce", category: "Web Design", year: "2022", color: "bg-slate-200" },
  ];

  const skills = ["UI/UX Design", "Brand Identity", "Design Systems", "Prototyping", "Motion Design", "Art Direction"];

  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "Inter, sans-serif" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">Elena Vasquez</span>
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Work</span>
            <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">About</span>
            <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Process</span>
            <span className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer transition-colors">Contact</span>
          </div>
          <button className="h-9 px-5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-full transition-colors">
            Let&apos;s Talk
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-teal-600 mb-4 tracking-wide uppercase">Product Designer &middot; Based in Barcelona</p>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-8">
            Crafting digital<br />experiences that<br /><span className="text-teal-600">feel right</span>.
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
            I design thoughtful interfaces and brand systems for startups and studios who care about the details.
            Currently leading design at Radius.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pb-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-sm font-medium text-slate-400 tracking-wide uppercase">Selected Work</h2>
          <span className="text-sm text-slate-400">{projects.length} Projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className={`${project.color} rounded-2xl aspect-[4/3] mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg`}>
                <span className="text-slate-400 text-sm">Project Preview</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">{project.title}</h3>
                  <p className="text-sm text-slate-400">{project.category}</p>
                </div>
                <span className="text-sm text-slate-300">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-50 py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-medium text-slate-400 tracking-wide uppercase mb-8">About</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">
              I believe great design is invisible — it just works.
            </h3>
            <p className="text-slate-500 leading-relaxed mb-4">
              With over 8 years of experience in product design, I&apos;ve had the privilege of working with companies like Figma, Stripe, and Linear. My approach combines deep user research with meticulous craft.
            </p>
            <p className="text-slate-500 leading-relaxed">
              When I&apos;m not pushing pixels, you&apos;ll find me teaching design workshops, contributing to open-source design tools, or exploring the streets of Barcelona with my camera.
            </p>
          </div>
          <div>
            <div className="bg-teal-50 rounded-2xl aspect-square flex items-center justify-center mb-6">
              <span className="text-slate-400 text-sm">Portrait Photo</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="px-3 py-1.5 bg-white rounded-full text-sm text-slate-600 border border-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-sm font-medium text-slate-400 tracking-wide uppercase mb-12">Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discover", desc: "Understanding the problem space through research, interviews, and data analysis." },
            { step: "02", title: "Define", desc: "Synthesizing insights into clear problem statements and design principles." },
            { step: "03", title: "Design", desc: "Exploring solutions through wireframes, prototypes, and visual design iterations." },
            { step: "04", title: "Deliver", desc: "Polishing and shipping with close developer collaboration and design QA." },
          ].map((item) => (
            <div key={item.step}>
              <span className="text-xs font-medium text-teal-600 mb-3 block">{item.step}</span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-slate-900 py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Let&apos;s create something together</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <button className="h-12 px-8 text-sm font-medium text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-full transition-colors">
            hello@elenavasquez.design
          </button>
          <div className="flex justify-center space-x-8 mt-12">
            <span className="text-sm text-slate-500 hover:text-white cursor-pointer transition-colors">Dribbble</span>
            <span className="text-sm text-slate-500 hover:text-white cursor-pointer transition-colors">Behance</span>
            <span className="text-sm text-slate-500 hover:text-white cursor-pointer transition-colors">LinkedIn</span>
            <span className="text-sm text-slate-500 hover:text-white cursor-pointer transition-colors">Twitter</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900 py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-sm text-slate-500">&copy; 2024 Elena Vasquez. All rights reserved.</span>
          <span className="text-sm text-slate-600">Designed with care in Barcelona</span>
        </div>
      </footer>
    </div>
  );
}
