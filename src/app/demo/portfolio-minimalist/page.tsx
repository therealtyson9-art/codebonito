export const dynamic = "force-dynamic";
import { Karla } from 'next/font/google'

const karla = Karla({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export default function PortfolioMinimalistDemo() {
  const projects = [
    { title: 'Solara Health App', role: 'Lead UX Designer', year: '2024', description: 'Redesigned the patient onboarding flow for a telehealth startup, reducing drop-off by 38% and increasing completed appointments by 52%.' },
    { title: 'Kinto Finance Dashboard', role: 'UX/UI Designer', year: '2024', description: 'Crafted a data-dense financial dashboard that simplified complex portfolio analytics into intuitive, scannable views for retail investors.' },
    { title: 'Nomad Travel Platform', role: 'Product Designer', year: '2023', description: 'End-to-end design of a travel booking experience focused on accessibility and inclusive design, serving users across 14 languages.' },
    { title: 'Verra Smart Home', role: 'UX Researcher & Designer', year: '2023', description: 'Led user research and interaction design for an IoT smart home controller, translating complex device management into effortless gestures.' },
  ]

  const skills = [
    'User Research', 'Wireframing', 'Prototyping', 'Interaction Design',
    'Design Systems', 'Usability Testing', 'Information Architecture', 'Accessibility',
    'Figma', 'Sketch', 'Adobe XD', 'Framer',
  ]

  const experience = [
    { company: 'Independent Practice', role: 'Freelance UX Designer', period: '2021 — Present', detail: 'Working directly with startups and mid-size companies on product strategy, user research, and interface design.' },
    { company: 'IDEO', role: 'Senior Interaction Designer', period: '2019 — 2021', detail: 'Collaborated on human-centered design projects for healthcare, education, and civic technology clients.' },
    { company: 'Dropbox', role: 'Product Designer', period: '2016 — 2019', detail: 'Shipped features used by millions, including the redesigned sharing flow and collaborative workspace tools.' },
  ]

  return (
    <div className={`min-h-screen bg-white ${karla.className}`}>
      {/* Hamburger nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-white/90 backdrop-blur-sm">
        <span className="text-sm font-medium tracking-widest uppercase text-neutral-800">EV</span>
        <button className="flex flex-col gap-1.5" aria-label="Menu">
          <span className="block w-6 h-0.5 bg-neutral-800" />
          <span className="block w-6 h-0.5 bg-neutral-800" />
          <span className="block w-4 h-0.5 bg-neutral-800" />
        </button>
      </nav>

      {/* Hero with huge name */}
      <section className="flex flex-col justify-center min-h-screen px-8 md:px-16 lg:px-24">
        <p className="text-sm font-medium tracking-widest uppercase mb-6 text-neutral-500">UX Designer &amp; Product Thinker</p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-neutral-800">
          Elena<br />Vasquez
        </h1>
        <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-neutral-600">
          I design digital experiences that feel intuitive, look refined, and solve real problems for real people.
        </p>
        <div className="mt-12 flex gap-6">
          <a href="#projects" className="text-sm font-semibold tracking-wide uppercase border-b-2 border-neutral-800 pb-1 text-neutral-800">View Work</a>
          <a href="#contact" className="text-sm font-semibold tracking-wide uppercase pb-1 text-neutral-500">Get in Touch</a>
        </div>
      </section>

      {/* About */}
      <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-neutral-200">
        <div className="max-w-4xl">
          <h2 className="text-xs font-semibold tracking-widest uppercase mb-8 text-neutral-400">About</h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-neutral-800">
            With eight years of experience spanning healthcare, fintech, and consumer products,
            I bring a research-driven approach to every project. I believe the best interfaces
            are the ones users never think about — they just work.
          </p>
          <p className="mt-8 text-lg font-light leading-relaxed text-neutral-600">
            Previously at Dropbox and IDEO, I now work independently with startups and mid-size
            companies looking to elevate their product experience. Based in San Francisco,
            available worldwide.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-neutral-200">
        <h2 className="text-xs font-semibold tracking-widest uppercase mb-12 text-neutral-400">Experience</h2>
        <div className="space-y-12 max-w-3xl">
          {experience.map((exp, i) => (
            <div key={i} className="border-l-2 border-neutral-300 pl-8">
              <p className="text-sm font-medium tracking-wide uppercase mb-1 text-neutral-400">{exp.period}</p>
              <h3 className="text-xl font-semibold text-neutral-800">{exp.role}</h3>
              <p className="text-base font-medium mb-2 text-neutral-500">{exp.company}</p>
              <p className="text-sm font-light leading-relaxed text-neutral-600">{exp.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section id="projects" className="px-8 md:px-16 lg:px-24 py-24 border-t border-neutral-200">
        <h2 className="text-xs font-semibold tracking-widest uppercase mb-16 text-neutral-400">Selected Projects</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group">
              <div className="aspect-video rounded-sm bg-neutral-100 mb-4" />
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-xs font-medium text-neutral-400">0{i + 1}</span>
                <h3 className="text-xl font-semibold text-neutral-800">{project.title}</h3>
              </div>
              <p className="text-xs font-medium tracking-wide uppercase mb-3 text-neutral-500">{project.role} / {project.year}</p>
              <p className="text-sm font-light leading-relaxed text-neutral-600">{project.description}</p>
              <a href="#" className="inline-block mt-4 text-sm font-semibold tracking-wide uppercase border-b border-neutral-800 pb-0.5 text-neutral-800">View Case Study</a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-neutral-200">
        <h2 className="text-xs font-semibold tracking-widest uppercase mb-12 text-neutral-400">Skills &amp; Tools</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <span key={skill} className="px-5 py-2.5 text-sm font-medium rounded-full border border-neutral-300 text-neutral-800">{skill}</span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-16 lg:px-24 py-24 border-t border-neutral-200">
        <div className="max-w-2xl">
          <h2 className="text-xs font-semibold tracking-widest uppercase mb-8 text-neutral-400">Contact</h2>
          <p className="text-3xl md:text-4xl font-light leading-snug mb-8 text-neutral-800">Have a project in mind? I would love to hear about it.</p>
          <a href="mailto:elena@vasquezdesign.co" className="text-xl font-medium underline text-neutral-800">elena@vasquezdesign.co</a>
          <p className="mt-4 text-base font-light text-neutral-600">
            I typically respond within 24 hours. For urgent inquiries, please include your timeline in the subject line.
          </p>
          <div className="mt-8 flex gap-8">
            {['LinkedIn', 'Dribbble', 'Twitter', 'Medium'].map(l => (
              <a key={l} href="#" className="text-sm font-medium tracking-wide uppercase text-neutral-500">{l}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 lg:px-24 py-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xs font-medium tracking-widest uppercase text-neutral-400">Elena Vasquez / 2026</span>
        <div className="flex gap-6">
          {['Email', 'LinkedIn', 'Dribbble'].map(l => (
            <a key={l} href="#" className="text-xs font-medium text-neutral-400">{l}</a>
          ))}
        </div>
      </footer>
    </div>
  )
}
