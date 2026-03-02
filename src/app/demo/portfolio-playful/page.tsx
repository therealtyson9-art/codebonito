export const dynamic = "force-dynamic";
import { Baloo_2 } from 'next/font/google'

const baloo2 = Baloo_2({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export default function PortfolioPlayfulDemo() {
  const projects = [
    { title: 'Cosmic Critters', type: 'Character Design', color: 'bg-amber-400', desc: 'A whimsical set of 24 alien characters for a children\'s educational app.' },
    { title: 'Noodle Dreams', type: 'Animation Loop', color: 'bg-violet-400', desc: 'Looping food animations for a ramen restaurant\'s social media.' },
    { title: 'Plant Pals', type: 'Sticker Pack', color: 'bg-emerald-400', desc: '40+ plant-themed stickers for iOS and Android messaging apps.' },
    { title: 'Bloop Music', type: 'Brand Identity', color: 'bg-pink-400', desc: 'Full branding for a kids\' music streaming service.' },
    { title: 'Pixel Pets', type: 'Game Art', color: 'bg-sky-400', desc: 'Retro pixel art assets for a virtual pet mobile game.' },
    { title: 'Sunny Bakery', type: 'Packaging', color: 'bg-orange-400', desc: 'Illustrated packaging for an artisan bakery\'s product line.' },
  ]

  const emojiSkills = [
    { emoji: '🎨', name: 'Illustration' }, { emoji: '✏️', name: 'Character Design' },
    { emoji: '🎬', name: 'Animation' }, { emoji: '📱', name: 'UI Design' },
    { emoji: '🖼️', name: 'Branding' }, { emoji: '📦', name: 'Packaging' },
    { emoji: '🎮', name: 'Game Art' }, { emoji: '✨', name: 'Motion Graphics' },
  ]

  return (
    <div className={`min-h-screen ${baloo2.className}`} style={{ background: 'linear-gradient(135deg, #fce4ec 0%, #fff3e0 50%, #fce4ec 100%)' }}>
      {/* Bubble nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl font-extrabold text-pink-500">mika.</span>
          <div className="hidden md:flex items-center gap-2">
            {['Work', 'About', 'Skills', 'Contact'].map(l => (
              <a key={l} href="#" className="text-sm font-semibold text-gray-600 hover:text-white px-4 py-1.5 rounded-full hover:bg-pink-400 transition-all">{l}</a>
            ))}
          </div>
          <button className="h-10 px-6 text-sm font-bold text-white bg-gradient-to-r from-pink-400 to-orange-400 rounded-full hover:shadow-lg transition-all">
            Say Hi!
          </button>
        </div>
      </nav>

      {/* 3D card hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl shadow-pink-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-200 via-orange-100 to-transparent rounded-bl-full" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-orange-400" />
              <div>
                <p className="text-sm font-semibold text-gray-400">Hello, I&apos;m</p>
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">Mika Tanaka</h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-xl mb-8">
              Illustrator &amp; character designer who turns ideas into colorful, joyful art that makes people smile.
            </p>
            <div className="flex gap-3">
              <button className="h-12 px-8 text-sm font-bold text-white bg-gradient-to-r from-pink-400 to-orange-400 rounded-full hover:shadow-lg hover:shadow-pink-200 transition-all">
                See My Work
              </button>
              <button className="h-12 px-8 text-sm font-bold text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Colorful project cards */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">My Work</h2>
        <p className="text-gray-600 text-center mb-12 font-medium">A collection of projects I&apos;m proud of</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <div key={p.title} className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-pink-100/50 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className={`h-44 ${p.color} flex items-center justify-center`}>
                <div className="w-20 h-20 bg-white/30 rounded-xl group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">{p.type}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fun about */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-lg shadow-pink-100/30">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hi there! I&apos;m Mika, a freelance illustrator and character designer based in Portland, OR.
                I love creating colorful worlds and characters that bring joy to people of all ages.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I&apos;m not drawing, you can find me playing video games, making pottery,
                or trying to befriend every cat in my neighborhood.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Based in Portland, OR</li>
                <li>8 years of illustration experience</li>
                <li>Worked with 50+ clients worldwide</li>
                <li>Coffee enthusiast (3 cups/day minimum)</li>
                <li>Cat parent to Luna and Mochi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emoji skills */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">What I Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {emojiSkills.map(s => (
            <div key={s.name} className="bg-white rounded-2xl p-6 text-center shadow-md shadow-pink-100/30 hover:shadow-lg hover:-translate-y-1 transition-all">
              <span className="text-4xl block mb-3">{s.emoji}</span>
              <p className="text-sm font-bold text-gray-800">{s.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl p-10 md:p-14 text-white text-center">
          <h2 className="text-3xl font-extrabold mb-4">Let&apos;s Create Together!</h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto font-medium">
            Got a fun project? I&apos;d love to hear about it. Drop me a line and let&apos;s make something amazing.
          </p>
          <a href="mailto:hello@mikatanaka.art" className="inline-block h-12 px-10 bg-white text-pink-500 rounded-full font-bold text-sm leading-[3rem] hover:shadow-xl transition-all">
            hello@mikatanaka.art
          </a>
          <div className="flex justify-center gap-6 mt-8">
            {['Instagram', 'Dribbble', 'Behance', 'Twitter'].map(l => (
              <a key={l} href="#" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur border-t border-pink-100">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-lg font-extrabold text-pink-500">mika.</span>
          <p className="text-xs text-gray-400 font-medium">© 2026 Mika Tanaka. Made with love in Portland.</p>
          <div className="flex gap-4">
            {['Instagram', 'Dribbble', 'Twitter'].map(l => (
              <a key={l} href="#" className="text-xs text-gray-400 hover:text-pink-400 font-semibold transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
