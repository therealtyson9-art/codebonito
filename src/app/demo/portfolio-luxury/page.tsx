export const dynamic = "force-dynamic";
import { Cormorant_Infant } from 'next/font/google'

const cormorant = Cormorant_Infant({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export default function PortfolioLuxuryDemo() {
  const editorialProjects = [
    { title: 'The Grand Heirloom Collection', category: 'Editorial', publication: 'Vogue Living', year: '2024', desc: 'A 12-page editorial exploring generational craftsmanship in Italian furniture houses.' },
    { title: 'Maison de Lumiere', category: 'Architecture', publication: 'Architectural Digest', year: '2024', desc: 'Intimate portrait of a restored 18th-century chateau in the Loire Valley.' },
    { title: 'Eternelle Parfums Campaign', category: 'Luxury Fragrance', publication: "Harper's Bazaar", year: '2023', desc: 'Global advertising campaign for heritage perfume house, shot across three continents.' },
    { title: 'Silent Hours', category: 'Fine Art', publication: 'Aperture', year: '2023', desc: 'Meditative still life series exploring light, time, and absence in empty spaces.' },
  ]

  return (
    <div className={`min-h-screen text-white ${cormorant.className}`} style={{ backgroundColor: '#1a1a1a' }}>
      {/* Centered minimal nav */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-center gap-12 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <div className="hidden md:flex items-center gap-10 mr-auto">
            {['Work', 'About'].map(l => (
              <a key={l} href="#" className="text-xs tracking-[0.25em] uppercase hover:opacity-60 transition-opacity" style={{ color: '#f5f0e8' }}>{l}</a>
            ))}
          </div>
          <span className="text-2xl font-light tracking-[0.15em]" style={{ color: '#f5f0e8' }}>Isabelle Laurent</span>
          <div className="hidden md:flex items-center gap-10 ml-auto">
            {['Journal', 'Contact'].map(l => (
              <a key={l} href="#" className="text-xs tracking-[0.25em] uppercase hover:opacity-60 transition-opacity" style={{ color: '#f5f0e8' }}>{l}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Full-screen video-style hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,26,26,0.3), rgba(26,26,26,0.8))' }} />
        <div className="absolute inset-0" style={{ backgroundColor: '#2a2520' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border rounded-full flex items-center justify-center" style={{ borderColor: 'rgba(245,240,232,0.15)' }}>
            <div className="w-0 h-0 ml-1 border-t-[10px] border-t-transparent border-l-[16px] border-b-[10px] border-b-transparent" style={{ borderLeftColor: 'rgba(245,240,232,0.4)' }} />
          </div>
        </div>
        <div className="relative text-center max-w-4xl px-8 mt-32">
          <p className="text-xs tracking-[0.5em] uppercase mb-8" style={{ color: 'rgba(245,240,232,0.4)' }}>Photographer &amp; Visual Storyteller</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8" style={{ color: '#f5f0e8' }}>
            Light is the language.<br />
            <span className="italic">I am the translator.</span>
          </h1>
          <p className="text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: 'rgba(245,240,232,0.5)' }}>
            Editorial and fine art photography for the world&apos;s leading luxury publications and heritage brands.
          </p>
          <button className="text-xs tracking-[0.3em] uppercase px-10 py-3 border transition-colors hover:bg-white/5" style={{ borderColor: 'rgba(245,240,232,0.2)', color: '#f5f0e8' }}>
            View Portfolio
          </button>
        </div>
      </section>

      {/* Editorial projects */}
      <section className="max-w-6xl mx-auto px-8 py-28">
        <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'rgba(245,240,232,0.3)' }}>Selected Work</p>
        <h2 className="text-4xl font-light mb-20" style={{ color: '#f5f0e8' }}>Portfolio</h2>
        <div className="space-y-24">
          {editorialProjects.map((p, i) => (
            <div key={p.title} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="aspect-[4/5] flex items-center justify-center" style={{ backgroundColor: '#252220' }}>
                  <p className="text-xs tracking-[0.3em] uppercase" style={{ color: 'rgba(245,240,232,0.15)' }}>Editorial Image</p>
                </div>
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(245,240,232,0.3)' }}>
                  {p.category} — {p.year}
                </p>
                <h3 className="text-3xl md:text-4xl font-light mb-4 italic" style={{ color: '#f5f0e8' }}>{p.title}</h3>
                <p className="text-sm font-light leading-relaxed mb-4" style={{ color: 'rgba(245,240,232,0.5)' }}>{p.desc}</p>
                <p className="text-xs tracking-[0.2em] uppercase" style={{ color: 'rgba(245,240,232,0.3)' }}>Published in {p.publication}</p>
                <a href="#" className="inline-block mt-6 text-xs tracking-[0.2em] uppercase border-b pb-1 transition-opacity hover:opacity-60" style={{ borderColor: 'rgba(245,240,232,0.3)', color: '#f5f0e8' }}>
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About / Recognition */}
      <section className="py-28 border-t" style={{ borderColor: 'rgba(245,240,232,0.06)' }}>
        <div className="max-w-4xl mx-auto px-8">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: 'rgba(245,240,232,0.3)' }}>About</p>
          <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12" style={{ color: '#f5f0e8' }}>
            Based between Paris and New York, I create imagery for those who understand that luxury
            is not excess — it is the careful curation of beauty, meaning, and craft.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Publications', items: ['Vogue', 'AD', "Harper's Bazaar", 'Aperture'] },
              { label: 'Awards', items: ['IPA Gold 2024', 'PDN 30 2023', 'Hasselblad Masters Finalist'] },
              { label: 'Clients', items: ['Chanel', 'Ritz Paris', 'Hermès', 'Cartier'] },
            ].map(col => (
              <div key={col.label}>
                <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(245,240,232,0.3)' }}>{col.label}</p>
                <ul className="space-y-2">
                  {col.items.map(item => (
                    <li key={item} className="text-sm font-light" style={{ color: 'rgba(245,240,232,0.6)' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refined contact */}
      <section className="py-28 border-t" style={{ borderColor: 'rgba(245,240,232,0.06)' }}>
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-8" style={{ color: 'rgba(245,240,232,0.3)' }}>Inquiries</p>
          <h2 className="text-4xl md:text-5xl font-light italic mb-8" style={{ color: '#f5f0e8' }}>
            Let us create something beautiful
          </h2>
          <p className="text-sm font-light leading-relaxed mb-10" style={{ color: 'rgba(245,240,232,0.5)' }}>
            For commissions, collaborations, and editorial inquiries, please reach out via email.
            Representation by Magnum Photos for select projects.
          </p>
          <a href="mailto:studio@isabellelaurent.com" className="text-xl font-light italic border-b pb-1 transition-opacity hover:opacity-60" style={{ borderColor: 'rgba(245,240,232,0.2)', color: '#f5f0e8' }}>
            studio@isabellelaurent.com
          </a>
          <div className="flex justify-center gap-10 mt-10">
            {['Instagram', 'Vimeo', 'LinkedIn'].map(l => (
              <a key={l} href="#" className="text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-60" style={{ color: 'rgba(245,240,232,0.3)' }}>{l}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: 'rgba(245,240,232,0.06)' }}>
        <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-sm font-light tracking-[0.15em]" style={{ color: 'rgba(245,240,232,0.3)' }}>Isabelle Laurent</span>
          <p className="text-[10px] tracking-[0.2em]" style={{ color: 'rgba(245,240,232,0.15)' }}>© 2026 All rights reserved. Paris / New York.</p>
        </div>
      </footer>
    </div>
  )
}
