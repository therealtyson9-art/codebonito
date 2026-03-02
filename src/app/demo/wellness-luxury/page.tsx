export default function WellnessLuxuryDemo() {
  const treatments = [
    { name: "Forest Bathing Ritual", duration: "120 min", desc: "A guided sensory immersion through our 200-acre old-growth forest. Your therapist leads you through mindful walking, aromatic breathing stations, and a streamside meditation before returning to the spa for a warm herbal wrap." },
    { name: "Hot Spring Mineral Soak", duration: "90 min", desc: "Private access to our geothermal mineral pools fed by natural underground springs. Water temperatures range from 98 to 106 degrees. Includes a scalp massage and chilled cucumber tonic between soaks." },
    { name: "Ancient Cedar Massage", duration: "90 min", desc: "A signature full-body treatment using warm western red cedar oil blended with Douglas fir and wild bergamot. Deep tissue and myofascial techniques draw on indigenous healing traditions of the Pacific Northwest." },
    { name: "Moonlight Facial", duration: "75 min", desc: "A restorative facial performed by candlelight using our proprietary nighttime botanical blend. Blue tansy, bakuchiol, and snow mushroom extract work together to repair and rejuvenate while you drift into stillness." },
    { name: "Sound & Stillness Journey", duration: "60 min", desc: "A private session in our acoustically tuned meditation chamber. Crystal singing bowls, rain sticks, and Tibetan bells guide you through deep relaxation. No two sessions are alike -- each is composed in the moment." },
  ];

  const accommodations = [
    { name: "Canopy Suite", desc: "Elevated among the treetops with floor-to-ceiling windows. King bed, private deck, soaking tub with forest views. 650 sq ft.", price: "From $1,200/night" },
    { name: "River Cabin", desc: "Streamside solitude with the sound of running water. Fireplace, outdoor rain shower, and private meditation garden. 480 sq ft.", price: "From $950/night" },
    { name: "Founder's Residence", desc: "Our most private accommodation, set on a hilltop clearing. Two bedrooms, full kitchen, private hot spring pool, and personal butler. 1,400 sq ft.", price: "From $3,200/night" },
  ];

  const dining = [
    { meal: "Breakfast", time: "7:00 - 10:00 AM", desc: "Seasonal, foraged ingredients served in our glass-walled conservatory. Expect wild mushroom omelets, house-made granola with local honey, and fresh-pressed juices from our kitchen garden." },
    { meal: "Lunch", time: "12:00 - 2:00 PM", desc: "Light, restorative plates designed around your treatment schedule. Our chef prepares composed salads, grain bowls, and broths using produce harvested that morning from our two-acre garden." },
    { meal: "Dinner", time: "6:00 - 9:00 PM", desc: "A five-course tasting menu that changes nightly. Wine pairings sourced from Willamette Valley vineyards. Dietary needs are anticipated before you arrive. Dress is relaxed elegant." },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy:ital@0;1&display=swap&family=Inter:wght@300;400&display=swap" rel="stylesheet" />
      <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#0a1f0a" }} className="min-h-screen">
        {/* Whisper Nav */}
        <nav className="py-6 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <span className="text-lg tracking-[0.25em] font-light" style={{ fontFamily: "'Sorts Mill Goudy', serif", color: "#c5a55a" }}>SEQUOIA</span>
            <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em]" style={{ color: "rgba(197, 165, 90, 0.4)" }}>
              <a href="#" className="hover:text-white/60 transition-colors">Experience</a>
              <a href="#" className="hover:text-white/60 transition-colors">Treatments</a>
              <a href="#" className="hover:text-white/60 transition-colors">Stay</a>
              <a href="#" className="hover:text-white/60 transition-colors">Dining</a>
              <a href="#" className="hover:text-white/60 transition-colors">Grounds</a>
            </div>
            <a href="#" className="text-[11px] uppercase tracking-[0.2em] border px-5 py-2 transition-colors hover:bg-white/5" style={{ borderColor: "rgba(197, 165, 90, 0.3)", color: "#c5a55a" }}>Inquire</a>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-32 px-6 relative">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(197, 165, 90, 0.04) 0%, transparent 60%)" }}></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-8" style={{ color: "rgba(197, 165, 90, 0.6)" }}>An Ultra-Luxury Wellness Resort</p>
            <h1 className="text-5xl md:text-7xl font-normal leading-tight mb-8" style={{ fontFamily: "'Sorts Mill Goudy', serif", color: "#c5a55a" }}>
              Where the ancient<br />forest holds you
            </h1>
            <p className="text-base font-light leading-relaxed max-w-xl mx-auto mb-12" style={{ color: "rgba(255, 255, 255, 0.35)" }}>Nestled within 200 acres of old-growth forest in the Cascade Range, Sequoia Retreat offers a sanctuary for those who seek stillness, restoration, and the quiet luxury of being unhurried.</p>
            <div className="h-72 rounded-lg flex items-center justify-center" style={{ border: "1px solid rgba(197, 165, 90, 0.15)" }}>
              <p className="text-[11px] uppercase tracking-widest" style={{ color: "rgba(197, 165, 90, 0.3)" }}>Nature Landscape</p>
            </div>
          </div>
        </section>

        {/* The Experience */}
        <section className="py-20 px-6 border-t" style={{ borderColor: "rgba(197, 165, 90, 0.08)" }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6 text-center" style={{ color: "rgba(197, 165, 90, 0.5)" }}>The Experience</p>
            <h2 className="text-3xl md:text-4xl font-normal text-center mb-8" style={{ fontFamily: "'Sorts Mill Goudy', serif", color: "#c5a55a" }}>Designed around your rhythm</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <p className="font-light leading-loose text-sm" style={{ color: "rgba(255, 255, 255, 0.35)" }}>There is no fixed itinerary at Sequoia. Your days unfold according to your body and its needs. Wake with the light or sleep until noon. Wander the forest paths or remain in the stillness of your suite. Every element of the retreat exists to support your natural rhythm, not impose a new one.</p>
              <p className="font-light leading-loose text-sm" style={{ color: "rgba(255, 255, 255, 0.35)" }}>Upon arrival, you will meet with our wellness director for a private consultation. Together, you will shape a treatment journey informed by your intentions, health history, and the season. There is no check-in desk, no lobby, and no crowds. A personal host meets you at the entrance to the forest and walks you to your accommodation in silence.</p>
            </div>
          </div>
        </section>

        {/* Treatments */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6 text-center" style={{ color: "rgba(197, 165, 90, 0.5)" }}>Treatments</p>
            <h2 className="text-3xl md:text-4xl font-normal text-center mb-16" style={{ fontFamily: "'Sorts Mill Goudy', serif", color: "#c5a55a" }}>Rituals of restoration</h2>
            <div className="space-y-10">
              {treatments.map((t, i) => (
                <div key={i} className="border-b pb-10" style={{ borderColor: "rgba(197, 165, 90, 0.08)" }}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-normal" style={{ fontFamily: "'Sorts Mill Goudy', serif", color: "#c5a55a" }}>{t.name}</h3>
                    <span className="text-xs font-light shrink-0 ml-4" style={{ color: "rgba(197, 165, 90, 0.5)" }}>{t.duration}</span>
                  </div>
                  <p className="font-light leading-relaxed text-sm" style={{ color: "rgba(255, 255, 255, 0.35)" }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accommodations */}
        <section className="py-20 px-6 border-t" style={{ borderColor: "rgba(197, 165, 90, 0.08)" }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6 text-center" style={{ color: "rgba(197, 165, 90, 0.5)" }}>Accommodations</p>
            <h2 className="text-3xl md:text-4xl font-normal text-center mb-16" style={{ fontFamily: "'Sorts Mill Goudy', serif", color: "#c5a55a" }}>Three ways to stay</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {accommodations.map((a, i) => (
                <div key={i} className="border p-8" style={{ borderColor: "rgba(197, 165, 90, 0.12)" }}>
                  <h3 className="text-lg font-normal mb-3" style={{ fontFamily: "'Sorts Mill Goudy', serif", color: "#c5a55a" }}>{a.name}</h3>
                  <p className="font-light text-sm leading-relaxed mb-4" style={{ color: "rgba(255, 255, 255, 0.35)" }}>{a.desc}</p>
                  <p className="text-xs font-light" style={{ color: "rgba(197, 165, 90, 0.6)" }}>{a.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dining */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6 text-center" style={{ color: "rgba(197, 165, 90, 0.5)" }}>Dining</p>
            <h2 className="text-3xl md:text-4xl font-normal text-center mb-16" style={{ fontFamily: "'Sorts Mill Goudy', serif", color: "#c5a55a" }}>From garden to table</h2>
            <div className="space-y-8">
              {dining.map((d, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0 w-32">
                    <p className="text-sm font-normal" style={{ fontFamily: "'Sorts Mill Goudy', serif", color: "#c5a55a" }}>{d.meal}</p>
                    <p className="text-xs font-light mt-1" style={{ color: "rgba(197, 165, 90, 0.4)" }}>{d.time}</p>
                  </div>
                  <p className="font-light text-sm leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.35)" }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Grounds */}
        <section className="py-20 px-6 border-t" style={{ borderColor: "rgba(197, 165, 90, 0.08)" }}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6" style={{ color: "rgba(197, 165, 90, 0.5)" }}>The Grounds</p>
            <h2 className="text-3xl md:text-4xl font-normal mb-8" style={{ fontFamily: "'Sorts Mill Goudy', serif", color: "#c5a55a" }}>200 acres of living sanctuary</h2>
            <p className="font-light text-sm leading-loose max-w-2xl mx-auto" style={{ color: "rgba(255, 255, 255, 0.35)" }}>Old-growth Douglas fir and western red cedar surround the retreat on all sides. Seven miles of private trails wind through fern groves, past seasonal waterfalls, and along the banks of the Clearwater Creek. The property includes a two-acre organic kitchen garden, a geothermal spring, a meditation meadow, and an outdoor amphitheater for seasonal performances.</p>
          </div>
        </section>

        {/* Inquiry CTA */}
        <section className="py-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-6" style={{ fontFamily: "'Sorts Mill Goudy', serif", color: "#c5a55a" }}>Begin your retreat</h2>
            <p className="font-light text-sm leading-relaxed mb-10" style={{ color: "rgba(255, 255, 255, 0.35)" }}>Sequoia accommodates a maximum of 24 guests at any time. We recommend booking at least three months in advance. Minimum stay is two nights. All inquiries are handled personally by our reservations director.</p>
            <a href="#" className="inline-block px-10 py-4 text-sm uppercase tracking-[0.15em] font-light border transition-colors hover:bg-white/5" style={{ borderColor: "rgba(197, 165, 90, 0.4)", color: "#c5a55a" }}>Private Retreat Inquiry</a>
            <p className="text-xs font-light mt-6" style={{ color: "rgba(197, 165, 90, 0.3)" }}>Or call +1 (541) 555-0123</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-6 border-t" style={{ borderColor: "rgba(197, 165, 90, 0.06)" }}>
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm tracking-[0.25em] font-light" style={{ fontFamily: "'Sorts Mill Goudy', serif", color: "rgba(197, 165, 90, 0.4)" }}>SEQUOIA RETREAT</span>
            <p className="text-xs font-light mt-4" style={{ color: "rgba(255, 255, 255, 0.2)" }}>12800 Cascade Forest Road, Sisters, Oregon 97759</p>
            <p className="text-xs font-light mt-1" style={{ color: "rgba(255, 255, 255, 0.15)" }}>&copy; 2026 Sequoia Retreat. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
