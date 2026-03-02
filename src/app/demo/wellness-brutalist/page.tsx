export default function WellnessBrutalistDemo() {
  const treatments = [
    { code: "TCM-001", name: "ACUPUNCTURE", duration: "60 min", frequency: "1-2x/week", effects: "Pain reduction, stress regulation, improved circulation", price: "$95" },
    { code: "BDY-002", name: "DEEP TISSUE MASSAGE", duration: "75 min", frequency: "1x/week", effects: "Myofascial release, chronic tension relief, mobility restoration", price: "$110" },
    { code: "MND-003", name: "GUIDED BREATHWORK", duration: "45 min", frequency: "3-5x/week", effects: "Autonomic nervous system regulation, cortisol reduction", price: "$40" },
    { code: "BDY-004", name: "CRANIOSACRAL THERAPY", duration: "60 min", frequency: "1x/week", effects: "Central nervous system calming, migraine relief, TMJ release", price: "$105" },
    { code: "MND-005", name: "FLOAT THERAPY", duration: "90 min", frequency: "1-2x/month", effects: "Sensory reset, deep relaxation, magnesium absorption", price: "$75" },
    { code: "TCM-006", name: "CUPPING THERAPY", duration: "45 min", frequency: "1x/week", effects: "Blood flow stimulation, toxin release, muscle recovery", price: "$65" },
  ];

  const practitioners = [
    { id: "P-001", name: "Dr. Ines Kowalski", credentials: "PhD, L.Ac, NCCAOM", specialty: "Traditional Chinese Medicine", sessions: 4200, rating: "4.96/5.00" },
    { id: "P-002", name: "James Okafor, LMT", credentials: "LMT, BCTMB", specialty: "Neuromuscular Therapy", sessions: 3100, rating: "4.91/5.00" },
    { id: "P-003", name: "Mara Johansson", credentials: "RYT-500, CBSI", specialty: "Breathwork & Somatic Healing", sessions: 2800, rating: "4.93/5.00" },
    { id: "P-004", name: "Dr. Ravi Patel", credentials: "DC, CST-D", specialty: "Craniosacral & Structural", sessions: 3600, rating: "4.97/5.00" },
  ];

  const references = [
    { id: 1, authors: "Vickers AJ, Vertosick EA, et al.", title: "Acupuncture for Chronic Pain: Update of an Individual Patient Data Meta-Analysis", journal: "Journal of Pain, 2018;19(5):455-474" },
    { id: 2, authors: "Goyal M, Singh S, et al.", title: "Meditation Programs for Psychological Stress and Well-being", journal: "JAMA Internal Medicine, 2014;174(3):357-368" },
    { id: 3, authors: "Crane RS, Brewer J, et al.", title: "What defines mindfulness-based programs? The warp and the weft", journal: "Psychological Medicine, 2017;47(6):990-999" },
    { id: 4, authors: "Field T.", title: "Massage therapy research review", journal: "Complementary Therapies in Clinical Practice, 2016;24:19-31" },
  ];

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-neutral-800">
        <span className="text-sm font-bold tracking-widest">SOMA_CLINIC</span>
        <div className="hidden md:flex items-center gap-6 text-xs text-neutral-400 uppercase tracking-wider">
          <a href="#catalog" className="hover:text-teal-400 transition-colors">Catalog</a>
          <a href="#registry" className="hover:text-teal-400 transition-colors">Registry</a>
          <a href="#pricing" className="hover:text-teal-400 transition-colors">Pricing</a>
          <a href="#book" className="border border-teal-400 text-teal-400 px-4 py-2 hover:bg-teal-400 hover:text-black transition-colors">Book</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-32 px-8 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-none mb-8 tracking-tight">
            HEAL.<br />BREATHE.<br />EXIST.
          </h1>
          <p className="text-neutral-400 text-sm max-w-lg leading-relaxed">
            Evidence-based therapeutic interventions. No ambient music. No essential oil diffusers.
            Just rigorous bodywork, clinical precision, and measurable outcomes. Your nervous system
            deserves better than aesthetics.
          </p>
          <div className="mt-8 flex gap-4 text-xs text-neutral-500">
            <span>EST. 2019</span>
            <span>/</span>
            <span>PORTLAND, OR</span>
            <span>/</span>
            <span className="text-teal-400">ACCEPTING NEW PATIENTS</span>
          </div>
        </div>
      </section>

      {/* Treatment Catalog */}
      <section id="catalog" className="py-20 px-8 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] text-teal-400 mb-10">// Treatment Catalog</h2>
          <div className="space-y-0">
            {treatments.map((t) => (
              <div key={t.code} className="border-t border-neutral-800 py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-1 text-xs text-neutral-600">{t.code}</div>
                <div className="md:col-span-3 text-sm font-bold">{t.name}</div>
                <div className="md:col-span-5 text-xs text-neutral-400 leading-relaxed">{t.effects}</div>
                <div className="md:col-span-1 text-xs text-neutral-500">{t.duration}</div>
                <div className="md:col-span-1 text-xs text-neutral-500">{t.frequency}</div>
                <div className="md:col-span-1 text-sm text-teal-400 font-bold text-right">{t.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Data */}
      <section className="py-20 px-8 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] text-teal-400 mb-10">// Session Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">12,400+</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider">Sessions Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">94.2%</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider">Pain Reduction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">4.94</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider">Avg. Client Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-400 mb-2">87%</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider">Client Retention (12mo)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioner Registry */}
      <section id="registry" className="py-20 px-8 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] text-teal-400 mb-10">// Practitioner Registry</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-700 text-xs text-neutral-500 uppercase tracking-wider">
                  <th className="pb-4 pr-6">ID</th>
                  <th className="pb-4 pr-6">Name</th>
                  <th className="pb-4 pr-6">Credentials</th>
                  <th className="pb-4 pr-6">Specialty</th>
                  <th className="pb-4 pr-6">Sessions</th>
                  <th className="pb-4">Rating</th>
                </tr>
              </thead>
              <tbody>
                {practitioners.map((p) => (
                  <tr key={p.id} className="border-b border-neutral-900">
                    <td className="py-4 pr-6 text-neutral-600 text-xs">{p.id}</td>
                    <td className="py-4 pr-6 font-medium">{p.name}</td>
                    <td className="py-4 pr-6 text-xs text-neutral-400">{p.credentials}</td>
                    <td className="py-4 pr-6 text-xs text-neutral-400">{p.specialty}</td>
                    <td className="py-4 pr-6 text-xs text-teal-400">{p.sessions.toLocaleString()}</td>
                    <td className="py-4 text-xs">{p.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-8 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] text-teal-400 mb-10">// Pricing Structure</h2>
          <pre className="text-sm text-neutral-300 leading-loose">
{`INDIVIDUAL SESSION     ............  $40 - $110
  Varies by treatment type and duration.

10-SESSION PACK        ............  15% discount
  Valid for 6 months from purchase date.

MONTHLY MEMBERSHIP     ............  $199/mo
  4 sessions/month + priority scheduling
  + 10% off additional sessions.

QUARTERLY COMMITMENT   ............  $179/mo
  Same as monthly, billed quarterly.
  Early termination fee: $50.

INSURANCE              ............  Accepted
  Aetna, BlueCross, United, Cigna.
  FSA/HSA eligible for all treatments.`}
          </pre>
        </div>
      </section>

      {/* References */}
      <section className="py-20 px-8 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] text-teal-400 mb-10">// Scientific References</h2>
          <div className="space-y-6">
            {references.map((r) => (
              <div key={r.id} className="text-xs leading-relaxed">
                <span className="text-neutral-600">[{r.id}]</span>{" "}
                <span className="text-neutral-300">{r.authors}</span>{" "}
                <span className="text-white italic">{r.title}.</span>{" "}
                <span className="text-neutral-500">{r.journal}.</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Form */}
      <section id="book" className="py-20 px-8 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xs uppercase tracking-[0.3em] text-teal-400 mb-10">// Request Intake</h2>
          <form className="space-y-4">
            <input type="text" placeholder="FULL_NAME" className="w-full bg-black border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-teal-400" />
            <input type="email" placeholder="EMAIL" className="w-full bg-black border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-teal-400" />
            <input type="tel" placeholder="PHONE" className="w-full bg-black border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-teal-400" />
            <select className="w-full bg-black border border-neutral-700 px-4 py-3 text-sm text-neutral-600 focus:outline-none focus:border-teal-400">
              <option>SELECT_TREATMENT</option>
              <option>TCM-001: Acupuncture</option>
              <option>BDY-002: Deep Tissue Massage</option>
              <option>MND-003: Guided Breathwork</option>
              <option>BDY-004: Craniosacral Therapy</option>
              <option>MND-005: Float Therapy</option>
              <option>TCM-006: Cupping Therapy</option>
            </select>
            <textarea placeholder="SYMPTOMS / NOTES" rows={3} className="w-full bg-black border border-neutral-700 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-teal-400" />
            <button type="submit" className="w-full border border-teal-400 text-teal-400 py-3 text-sm uppercase tracking-wider hover:bg-teal-400 hover:text-black transition-colors">Submit Intake Request</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6 text-xs text-neutral-600">
          <div>
            <span className="text-white font-bold tracking-widest">SOMA_CLINIC</span>
            <p className="mt-2">812 NW Industrial Ave, Portland, OR 97209</p>
          </div>
          <div className="text-right">
            <p>intake@somaclinic.io</p>
            <p>(503) 555-0847</p>
            <p className="mt-2 text-neutral-700">&copy; 2026 SOMA CLINIC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
