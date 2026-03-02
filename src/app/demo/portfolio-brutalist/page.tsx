export const dynamic = "force-dynamic";
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function PortfolioBrutalistDemo() {
  const works = [
    { title: 'RIOT FEST 2024', category: 'POSTER DESIGN', description: 'Three-color risograph poster series for Chicago music festival. 500 copies, sold out in 48 hours.' },
    { title: 'DEADSTOCK ZINE', category: 'EDITORIAL', description: '48-page independent publication on sneaker culture and anti-consumerism. Printed on recycled stock.' },
    { title: 'NEON BUTCHER', category: 'BRAND IDENTITY', description: 'Full identity system for underground electronic music label. Logo, type, merch, vinyl sleeves.' },
    { title: 'CONCRETE POETRY', category: 'INSTALLATION', description: 'Large-scale typographic murals in abandoned warehouses across Detroit and Chicago.' },
    { title: 'VOID MAGAZINE', category: 'ART DIRECTION', description: 'Art direction for quarterly digital arts magazine. Covers, layouts, and typography system.' },
    { title: 'RAW POWER GYM', category: 'BRANDING', description: 'No-nonsense identity for powerlifting gym. Stencil type, industrial colors, custom iconography.' },
  ]

  return (
    <div className={`min-h-screen bg-yellow-400 text-black ${bebasNeue.className}`}>
      {/* Sidebar nav */}
      <div className="flex min-h-screen">
        <nav className="hidden md:flex flex-col justify-between w-16 bg-black text-yellow-400 fixed top-0 left-0 h-full z-50 items-center py-8">
          <span className="text-sm tracking-widest" style={{ writingMode: 'vertical-rl' }}>MAX GRUBER</span>
          <div className="flex flex-col gap-6 items-center">
            {['W', 'A', 'M', 'C'].map(l => (
              <a key={l} href="#" className="text-xs hover:text-white transition-colors">{l}</a>
            ))}
          </div>
          <span className="text-[10px] tracking-widest" style={{ writingMode: 'vertical-rl' }}>2026</span>
        </nav>

        <div className="flex-1 md:ml-16">
          {/* Mobile nav */}
          <nav className="md:hidden flex items-center justify-between px-6 py-4 bg-black text-yellow-400">
            <span className="text-lg tracking-wider">MAX GRUBER</span>
            <span className="text-xs tracking-widest">MENU</span>
          </nav>

          {/* Full-bleed hero */}
          <section className="px-6 md:px-12 pt-20 pb-24 md:pt-32 md:pb-32">
            <h1 className="text-7xl md:text-[9rem] lg:text-[12rem] leading-[0.85] tracking-tight">
              GRAPHIC<br />
              DESIGNER<br />
              <span className="bg-black text-yellow-400 px-2">& MAKER</span>
            </h1>
            <div className="mt-12 flex items-center gap-8 font-sans font-normal">
              <span className="text-sm tracking-widest">CHICAGO, IL</span>
              <span className="text-sm text-black/50">—</span>
              <span className="text-sm tracking-widest">AVAILABLE FOR WORK</span>
            </div>
          </section>

          {/* Work showcase raw grid */}
          <section className="px-6 md:px-12 pb-20">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-2xl tracking-widest">SELECTED WORK</h2>
              <div className="flex-1 h-0.5 bg-black" />
            </div>
            <div className="grid md:grid-cols-2 gap-0">
              {works.map((w, i) => (
                <div key={w.title} className={`border-2 border-black p-8 ${i % 3 === 0 ? 'bg-black text-yellow-400' : ''} group hover:bg-black hover:text-yellow-400 transition-colors`}>
                  <span className="text-xs tracking-[0.3em] font-sans font-normal">{w.category}</span>
                  <h3 className="text-4xl md:text-5xl tracking-tight mt-3 mb-4">{w.title}</h3>
                  <p className="text-sm font-sans font-normal leading-relaxed opacity-70">{w.description}</p>
                  <div className="mt-6 flex items-center gap-2">
                    <span className="text-xs tracking-[0.2em]">VIEW PROJECT</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Manifesto */}
          <section className="px-6 md:px-12 py-20 bg-black text-yellow-400">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl tracking-widest">MANIFESTO</h2>
                <div className="flex-1 h-0.5 bg-yellow-400" />
              </div>
              <p className="text-3xl md:text-5xl leading-tight tracking-tight mb-8">
                I DON&apos;T MAKE THINGS PRETTY.<br />
                I MAKE THINGS THAT HIT YOU<br />
                IN THE GUT.
              </p>
              <p className="text-base font-sans font-normal text-yellow-400/60 leading-relaxed max-w-2xl">
                Design should provoke, question, and refuse to be ignored. I work at the intersection of graphic design,
                typography, and print culture. Every project starts with the question: does this need to exist? If yes,
                it better be unforgettable.
              </p>
            </div>
          </section>

          {/* About */}
          <section className="px-6 md:px-12 py-20">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl tracking-widest">ABOUT</h2>
                  <div className="flex-1 h-0.5 bg-black" />
                </div>
                <p className="text-base font-sans font-normal leading-relaxed text-black/70">
                  Max Gruber is a Chicago-based graphic designer specializing in print, editorial,
                  and brand identity for independent music, arts, and culture. With over a decade of
                  experience, his work has been featured in Print Magazine, It&apos;s Nice That, and the
                  Type Directors Club annual.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl tracking-widest">CLIENTS</h2>
                  <div className="flex-1 h-0.5 bg-black" />
                </div>
                <div className="grid grid-cols-2 gap-3 font-sans font-normal">
                  {['Pitchfork', 'Nike ACG', 'Rough Trade', 'The Vinyl Factory', 'Resident Advisor', 'Ace Hotel', 'Vice Media', 'Carhartt WIP'].map(c => (
                    <span key={c} className="text-sm text-black/60">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="px-6 md:px-12 py-16 border-t-4 border-black">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div>
                <h2 className="text-4xl tracking-tight mb-4">LET&apos;S WORK</h2>
                <a href="mailto:max@gruberdesign.co" className="text-xl font-sans font-normal underline">max@gruberdesign.co</a>
              </div>
              <div className="flex gap-6">
                {['Instagram', 'Arena', 'Twitter'].map(l => (
                  <a key={l} href="#" className="text-sm font-sans font-normal tracking-widest uppercase hover:underline">{l}</a>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="px-6 md:px-12 py-6 bg-black text-yellow-400 flex justify-between items-center">
            <span className="text-sm tracking-widest">MAX GRUBER</span>
            <span className="text-xs font-sans font-normal tracking-widest">© 2026 ALL RIGHTS RESERVED</span>
          </footer>
        </div>
      </div>
    </div>
  )
}
