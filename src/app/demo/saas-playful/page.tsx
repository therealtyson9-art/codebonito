export const dynamic = "force-dynamic";
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] })

export default function SaaSPlayfulDemo() {
  const features = [
    { emoji: '🚀', title: 'Launch in Minutes', desc: 'Go from idea to live app before your coffee gets cold. Seriously.' },
    { emoji: '🎨', title: 'Drag & Drop Builder', desc: 'No code needed. Just drag, drop, and watch the magic happen.' },
    { emoji: '🤖', title: 'AI Assistant', desc: 'Let our AI handle the boring stuff while you focus on creating.' },
    { emoji: '📊', title: 'Smart Analytics', desc: 'Pretty charts that actually make sense. Your team will thank you.' },
    { emoji: '🔒', title: 'Bank-Level Security', desc: 'SOC 2, GDPR, end-to-end encryption. Sleep well at night.' },
    { emoji: '🌍', title: 'Global CDN', desc: 'Lightning fast everywhere. 200+ edge locations worldwide.' },
  ]

  return (
    <div className={`min-h-screen bg-violet-50 ${rubik.className}`}>
      {/* Pill nav links */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-violet-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-pink-500">poppy</span>
          <div className="hidden md:flex items-center gap-2">
            {['Features', 'Pricing', 'Templates', 'Blog'].map(l => (
              <a key={l} href="#" className="text-sm text-gray-600 hover:text-pink-500 px-4 py-1.5 rounded-full hover:bg-pink-50 transition-all">{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-gray-600 hover:text-pink-500">Log in</a>
            <button className="h-10 px-6 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-pink-500 to-violet-500 hover:shadow-lg hover:shadow-pink-200 transition-all">
              Try Free
            </button>
          </div>
        </div>
      </nav>

      {/* Gradient hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-violet-400 to-indigo-500 opacity-10" />
        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-white shadow-sm border border-violet-100 text-violet-600">
            Over 50,000 creators already onboard!
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">Build beautiful apps</span>
            <br />
            <span className="text-gray-900">without the headache</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Poppy makes it ridiculously easy to build, launch, and grow your web apps. No coding required. Just vibes and good design.
          </p>
          <div className="flex justify-center gap-3">
            <button className="h-14 px-10 text-base font-semibold text-white rounded-full bg-gradient-to-r from-pink-500 to-violet-500 hover:shadow-xl hover:shadow-pink-200/50 transition-all">
              Start Building — It&apos;s Free
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4">Free forever for personal projects. No credit card needed.</p>
        </div>
      </section>

      {/* Emoji features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Everything you need to build cool stuff</h2>
        <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">Powerful features wrapped in a friendly package.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="bg-white rounded-2xl p-8 border border-violet-100 hover:border-pink-200 hover:shadow-lg hover:shadow-pink-50 transition-all group">
              <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{f.emoji}</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fun pricing cards */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Pick your plan</h2>
          <p className="text-gray-500 text-center mb-12">Start free. Upgrade when you&apos;re ready to go big.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Hobby', price: '$0', desc: 'Perfect for side projects', color: 'border-green-200 bg-green-50/50', items: ['1 project', '1K visitors/mo', 'Basic analytics', 'Community support'] },
              { name: 'Pro', price: '$19', desc: 'For serious creators', color: 'border-pink-200 bg-gradient-to-b from-pink-50 to-violet-50', items: ['Unlimited projects', '100K visitors/mo', 'Advanced analytics', 'Priority support'], featured: true },
              { name: 'Team', price: '$49', desc: 'For growing teams', color: 'border-violet-200 bg-violet-50/50', items: ['Everything in Pro', 'Team collaboration', 'Custom domains', 'SSO & SAML'] },
            ].map(plan => (
              <div key={plan.name} className={`rounded-2xl p-8 border-2 ${plan.color} ${plan.featured ? 'ring-2 ring-pink-400 shadow-xl shadow-pink-100' : ''} relative`}>
                {plan.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-violet-500">MOST POPULAR</div>}
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
                <div className="mb-6"><span className="text-4xl font-extrabold text-gray-900">{plan.price}</span><span className="text-gray-400">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.items.map(item => (<li key={item} className="text-sm text-gray-600 flex items-center gap-2"><span className="text-pink-500">✓</span> {item}</li>))}
                </ul>
                <button className={`w-full h-11 rounded-full text-sm font-semibold transition-all ${plan.featured ? 'text-white bg-gradient-to-r from-pink-500 to-violet-500 hover:shadow-lg hover:shadow-pink-200' : 'text-gray-700 bg-white border border-gray-200 hover:border-pink-300'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl p-12 md:p-16 text-center bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to build something amazing?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">Join 50,000+ creators who are already building beautiful apps with Poppy.</p>
              <button className="h-14 px-10 text-base font-bold text-pink-600 bg-white rounded-full hover:shadow-xl transition-all">
                Start for Free — No CC Required
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-violet-100">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <span className="text-xl font-bold text-pink-500">poppy</span>
              <p className="text-sm text-gray-500 mt-2">Build beautiful things.</p>
            </div>
            <div className="flex gap-12">
              {[
                { title: 'Product', links: ['Features', 'Templates', 'Pricing', 'Changelog'] },
                { title: 'Community', links: ['Discord', 'Twitter', 'Blog', 'Showcase'] },
                { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies'] },
              ].map(col => (
                <div key={col.title}>
                  <p className="text-sm font-semibold text-gray-900 mb-3">{col.title}</p>
                  <ul className="space-y-2">{col.links.map(l => (<li key={l}><a href="#" className="text-sm text-gray-500 hover:text-pink-500 transition-colors">{l}</a></li>))}</ul>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-violet-100 mt-10 pt-6">
            <p className="text-xs text-gray-400 text-center">© 2026 Poppy Inc. Made in San Francisco.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
