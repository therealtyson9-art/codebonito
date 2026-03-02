export const dynamic = "force-dynamic";
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export default function SaaSMinimalistDemo() {
  const integrations = [
    { name: 'Slack', cat: 'Communication' }, { name: 'GitHub', cat: 'Development' },
    { name: 'Jira', cat: 'Project Mgmt' }, { name: 'Stripe', cat: 'Payments' },
    { name: 'Salesforce', cat: 'CRM' }, { name: 'Datadog', cat: 'Monitoring' },
    { name: 'Figma', cat: 'Design' }, { name: 'Notion', cat: 'Knowledge' },
  ]

  const testimonials = [
    { quote: 'Switched from three separate tools to Nimbus and cut our deployment time by 60%.', author: 'Sarah Lin', role: 'CTO, Greenfield Labs' },
    { quote: 'The developer experience is unmatched. Our team was productive from day one.', author: 'Marcus Webb', role: 'VP Engineering, Relay' },
    { quote: 'Finally a platform that scales without hidden costs. Worth every penny.', author: 'Priya Desai', role: 'Head of Infra, Motiv' },
  ]

  return (
    <div className={`min-h-screen bg-slate-50 ${outfit.className}`}>
      {/* Sticky minimal nav */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-lg font-semibold text-indigo-600">nimbus</span>
          <div className="hidden md:flex items-center gap-8">
            {['Product', 'Solutions', 'Pricing', 'Docs'].map(l => (
              <a key={l} href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Log in</a>
            <button className="h-9 px-5 text-sm font-medium text-white rounded-md bg-indigo-600 hover:bg-indigo-700 transition-colors">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero with browser mockup */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-8 bg-indigo-50 text-indigo-600">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
          Now in public beta — free for teams under 10
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-slate-900">
          Ship products faster<br />with less complexity
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
          Nimbus unifies your development workflow — from CI/CD to monitoring to incident response — in one clean, fast platform.
        </p>
        <div className="flex justify-center gap-3 mb-16">
          <button className="h-12 px-8 text-sm font-medium text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transition-all">Start free trial</button>
          <button className="h-12 px-8 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">Watch demo</button>
        </div>
        {/* Browser mockup */}
        <div className="max-w-4xl mx-auto rounded-xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 mx-8">
              <div className="h-6 bg-white rounded border border-slate-200 flex items-center px-3">
                <span className="text-xs text-slate-400">app.nimbus.dev/dashboard</span>
              </div>
            </div>
          </div>
          <div className="p-8 bg-slate-50">
            <div className="grid grid-cols-4 gap-4 mb-6">
              {[{ v: '99.99%', l: 'Uptime SLA' }, { v: '47ms', l: 'Avg Response' }, { v: '12K+', l: 'Teams Active' }, { v: '4.9/5', l: 'G2 Rating' }].map(s => (
                <div key={s.l} className="bg-white rounded-lg p-4 border border-slate-100 text-center">
                  <p className="text-2xl font-bold text-indigo-600">{s.v}</p>
                  <p className="text-xs text-slate-500 mt-1">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="h-32 bg-white rounded-lg border border-slate-100 flex items-center justify-center">
              <div className="flex items-end gap-2 h-20">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 88].map((h, i) => (
                  <div key={i} className="w-6 rounded-t" style={{ height: `${h}%`, backgroundColor: i === 11 ? '#4f46e5' : '#e0e7ff' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Simple, transparent pricing</h2>
        <p className="text-slate-500 text-center mb-12">No per-seat fees. No usage surprises.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { name: 'Starter', price: '$0', period: '/mo', desc: 'For side projects', items: ['Up to 3 projects', '1GB storage', 'Community support', 'Basic analytics'] },
            { name: 'Team', price: '$49', period: '/mo', desc: 'For growing teams', items: ['Unlimited projects', '100GB storage', 'Priority support', 'Advanced analytics'], featured: true },
            { name: 'Enterprise', price: 'Custom', period: '', desc: 'For large orgs', items: ['Unlimited everything', 'Dedicated infra', '24/7 phone support', 'Custom SLA'] },
          ].map(plan => (
            <div key={plan.name} className={`rounded-xl p-8 ${plan.featured ? 'ring-2 ring-indigo-600 bg-white shadow-lg' : 'bg-white border border-slate-200'}`}>
              {plan.featured && <span className="text-xs font-medium px-2 py-1 rounded-full mb-4 inline-block bg-indigo-50 text-indigo-600">Most popular</span>}
              <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
              <p className="text-sm text-slate-500 mb-4">{plan.desc}</p>
              <div className="mb-6"><span className="text-4xl font-bold text-slate-900">{plan.price}</span><span className="text-slate-500">{plan.period}</span></div>
              <ul className="space-y-3 mb-8">
                {plan.items.map(item => (<li key={item} className="text-sm text-slate-600 flex items-center gap-2"><span className="text-indigo-600">✓</span> {item}</li>))}
              </ul>
              <button className={`w-full h-10 rounded-lg text-sm font-medium transition-colors ${plan.featured ? 'text-white bg-indigo-600 hover:bg-indigo-700' : 'text-slate-700 bg-slate-100 hover:bg-slate-200'}`}>
                {plan.name === 'Enterprise' ? 'Contact sales' : 'Get started'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">Connects to your stack</h2>
          <p className="text-slate-500 text-center mb-14">300+ integrations, zero config.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {integrations.map(i => (
              <div key={i.name} className="border border-slate-100 rounded-xl p-6 text-center hover:border-indigo-200 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-slate-100 rounded-lg mx-auto mb-3" />
                <p className="text-sm font-semibold text-slate-900">{i.name}</p>
                <p className="text-xs text-slate-400 mt-1">{i.cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-14">Loved by engineers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <blockquote key={t.author} className="bg-white rounded-xl p-8 border border-slate-100">
                <p className="text-slate-700 mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm font-semibold text-slate-900">{t.author}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* API preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Developer-first API</h2>
            <p className="text-slate-500 mb-6">RESTful endpoints, typed SDKs in 6 languages, and webhooks that just work. Go from zero to production in under 5 minutes.</p>
            <button className="h-10 px-6 text-sm font-medium text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors">Read the docs</button>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm leading-relaxed overflow-x-auto">
            <p className="text-slate-500"># Deploy with one command</p>
            <p className="text-emerald-400 mt-2">$ nimbus deploy --prod</p>
            <p className="text-slate-400 mt-4">✓ Build completed in 12s</p>
            <p className="text-slate-400">✓ 3 services deployed</p>
            <p className="text-slate-400">✓ Health checks passing</p>
            <p className="text-indigo-400 mt-4">→ https://app.example.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <span className="text-lg font-semibold text-indigo-600">nimbus</span>
            <p className="text-sm text-slate-500 mt-2">The modern DevOps platform.</p>
          </div>
          <div className="flex gap-16">
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
            ].map(col => (
              <div key={col.title}>
                <p className="text-sm font-medium text-slate-900 mb-3">{col.title}</p>
                <ul className="space-y-2">{col.links.map(link => (<li key={link}><a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">{link}</a></li>))}</ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6 py-6"><p className="text-xs text-slate-400">© 2026 Nimbus Technologies Inc. All rights reserved.</p></div>
        </div>
      </footer>
    </div>
  )
}
