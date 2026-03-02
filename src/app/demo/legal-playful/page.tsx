export const dynamic = "force-dynamic";
export default function LegalPlayfulDemo() {
  const services = [
    { icon: "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66", title: "Family Law", desc: "Divorce, custody, adoption, and child support. We handle sensitive family matters with empathy, clear communication, and a focus on what is best for your children." },
    { icon: "\ud83d\udee1\ufe0f", title: "Consumer Rights", desc: "Debt collection harassment, unfair billing, warranty disputes, and lemon law claims. We stand up to corporations that take advantage of everyday people." },
    { icon: "\ud83d\udcbc", title: "Employment Law", desc: "Wrongful termination, wage theft, discrimination, and hostile work environments. If your employer crossed the line, we help you fight back." },
    { icon: "\ud83c\udfe0", title: "Housing Disputes", desc: "Eviction defense, security deposit recovery, habitability complaints, and landlord-tenant mediation. Everyone deserves a safe, fair place to live." },
    { icon: "\ud83d\udcb3", title: "Debt Defense", desc: "Credit card lawsuits, medical debt negotiation, and bankruptcy guidance. We help you understand your options and find a path forward." },
    { icon: "\ud83d\udcdd", title: "Small Claims Help", desc: "Document preparation, case strategy, and coaching for small claims court. You do not need a fortune to get justice." },
  ]

  const process = [
    { step: "1", title: "Free Consultation", desc: "Tell us what happened in a relaxed, no-pressure phone call or video chat. We listen first, advise second, and never pressure you into hiring us." },
    { step: "2", title: "Case Review", desc: "Our team reviews the facts, gathers documents, and researches the law that applies to your situation. Within 48 hours, you will have a clear picture." },
    { step: "3", title: "Strategy & Action", desc: "We present your options in plain language — no legal jargon. Together we choose a path, whether that is negotiation, mediation, or litigation." },
    { step: "4", title: "Resolution", desc: "We push for the best possible outcome, keeping you informed at every step. Most of our cases resolve in 60-90 days without going to trial." },
  ]

  const clientStories = [
    { name: "Maria G.", quote: "FairPath helped me get full custody of my two kids after a really difficult divorce. They treated me like family the entire time.", type: "Family Law" },
    { name: "James T.", quote: "A debt collector was calling me ten times a day. FairPath made it stop and got me a $4,500 settlement for the harassment.", type: "Consumer Rights" },
    { name: "Priya K.", quote: "My employer owed me six months of overtime. I was scared to speak up, but FairPath handled everything. I got every dollar back.", type: "Employment Law" },
  ]

  const faqs = [
    { q: "How much does a consultation cost?", a: "Nothing. Your first consultation is completely free, whether by phone, video, or in person. We want to understand your situation before we talk about fees." },
    { q: "Do you work on contingency?", a: "For consumer rights and employment cases, yes — you pay nothing unless we win. Family law and housing matters are billed at affordable flat rates." },
    { q: "How quickly can you start on my case?", a: "In most situations, we can begin working on your case within 24-48 hours of our initial consultation. Urgent matters are handled same-day." },
    { q: "Do I need to come to your office?", a: "Not at all. We handle most consultations and case updates over phone or video. In-person meetings are available but never required." },
  ]

  return (
    <div style={{ fontFamily: "'Signika', sans-serif", backgroundColor: "#eff6ff" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Rounded Nav */}
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span style={{ color: "#6366f1" }} className="text-2xl font-bold">FairPath</span>
          <span className="text-gray-400 font-light text-xl">Legal</span>
        </div>
        <div className="flex items-center gap-3">
          {["How We Help", "Our Process", "Stories", "FAQ"].map((link) => (
            <span key={link} className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-indigo-100 cursor-pointer transition-colors">{link}</span>
          ))}
          <span style={{ backgroundColor: "#6366f1" }} className="px-5 py-2 rounded-full text-sm font-semibold text-white cursor-pointer">Free Consultation</span>
        </div>
      </nav>

      {/* Friendly Icons Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="flex justify-center gap-4 text-4xl mb-8">
          <span>&#x2696;&#xFE0F;</span><span>&#x1F91D;</span><span>&#x1F4AA;</span><span>&#x2764;&#xFE0F;</span>
        </div>
        <h2 style={{ color: "#1e1b4b" }} className="text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          Legal Help That Actually Feels Helpful
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          FairPath Legal was built for real people with real problems. No stuffy offices, no
          confusing jargon, no surprise bills. Just straightforward legal help from attorneys
          who genuinely care about your outcome.
        </p>
        <div className="flex justify-center gap-4">
          <span style={{ backgroundColor: "#6366f1" }} className="px-8 py-3 rounded-full font-semibold text-white cursor-pointer">Get Your Free Consultation</span>
          <span style={{ color: "#6366f1", borderColor: "#6366f1" }} className="border-2 px-8 py-3 rounded-full font-semibold cursor-pointer">See How We Work</span>
        </div>
      </section>

      {/* How We Help */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 style={{ color: "#1e1b4b" }} className="text-4xl font-bold mb-3">How We Help</h3>
          <p className="text-gray-500">Affordable legal services for the issues that matter most</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl block mb-3">{svc.icon}</span>
              <h4 style={{ color: "#1e1b4b" }} className="text-lg font-bold mb-2">{svc.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section style={{ backgroundColor: "#e0e7ff" }} className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 style={{ color: "#1e1b4b" }} className="text-4xl font-bold text-center mb-12">Our Process</h3>
          <div className="grid grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div style={{ backgroundColor: "#6366f1" }} className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">{p.step}</div>
                <h4 style={{ color: "#1e1b4b" }} className="font-bold mb-2">{p.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Stories */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 style={{ color: "#1e1b4b" }} className="text-4xl font-bold text-center mb-12">Client Stories</h3>
        <div className="grid grid-cols-3 gap-6">
          {clientStories.map((story) => (
            <div key={story.name} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} style={{ color: "#fbbf24" }} className="text-lg">&#x2605;</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&ldquo;{story.quote}&rdquo;</p>
              <div className="flex items-center justify-between">
                <span style={{ color: "#1e1b4b" }} className="font-bold text-sm">{story.name}</span>
                <span style={{ color: "#6366f1" }} className="text-xs font-semibold">{story.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section style={{ backgroundColor: "#6366f1" }} className="py-14">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Not Sure Where to Start?</h3>
          <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
            Tell us what is going on. Our team will review your situation and let you know
            your options — completely free, no strings attached.
          </p>
          <span className="bg-white px-8 py-3 rounded-full font-bold cursor-pointer" style={{ color: "#6366f1" }}>Schedule Your Free Call</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h3 style={{ color: "#1e1b4b" }} className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 style={{ color: "#1e1b4b" }} className="font-bold mb-2">{faq.q}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Friendly Footer with Reviews */}
      <footer style={{ backgroundColor: "#1e1b4b" }} className="text-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h4 className="text-xl font-bold mb-2">FairPath Legal</h4>
              <p className="text-indigo-300 text-sm">Legal help for real people, real problems.</p>
              <p className="text-indigo-400 text-xs mt-2">321 Main Street, Suite 100, Greenfield, ST 30045</p>
            </div>
            <div className="text-right">
              <p className="text-white font-bold">(555) 800-FAIR (3247)</p>
              <p className="text-indigo-300 text-sm">hello@fairpathlegal.com</p>
              <div className="flex items-center justify-end gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} style={{ color: "#fbbf24" }} className="text-sm">&#x2605;</span>
                ))}
                <span className="text-indigo-300 text-xs ml-1">4.9/5 from 280+ reviews</span>
              </div>
            </div>
          </div>
          <div className="border-t border-indigo-800 pt-4 flex justify-between items-center">
            <p className="text-indigo-400 text-xs">&copy; 2024 FairPath Legal. All rights reserved.</p>
            <p className="text-indigo-400 text-xs">Licensed in ST, NY, CA &middot; Free consultations available</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
