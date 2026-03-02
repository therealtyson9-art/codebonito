export default function TravelLuxuryDemo() {
  const experiences = [
    { name: "Private Island Retreat", location: "Maldives", desc: "Your own island, your own staff, your own timeline. Crystal lagoons, overwater pavilions, and absolute seclusion in the Indian Ocean.", duration: "7 nights", from: "$18,500" },
    { name: "Great Migration Safari", location: "Tanzania & Kenya", desc: "Witness the wildebeest crossing from a private tented camp. Expert naturalist guides, bush dinners, and helicopter transfers between reserves.", duration: "10 nights", from: "$24,000" },
    { name: "Mediterranean Yacht Charter", location: "French Riviera & Sardinia", desc: "A 40-meter yacht, a Michelin-trained chef, and the bluest water in Europe. Port-hop from Saint-Tropez to Porto Cervo at your own pace.", duration: "8 nights", from: "$32,000" },
    { name: "Alpine Retreat", location: "Swiss Alps", desc: "A private chalet above Zermatt with panoramic Matterhorn views, a personal ski guide, spa treatments, and fondue by firelight.", duration: "5 nights", from: "$12,800" },
  ]
  const accommodations = [
    { name: "Aman Tokyo", location: "Tokyo, Japan", rate: "$1,450", desc: "Minimalist elegance in the heart of Otemachi. Floor-to-ceiling windows frame the Imperial Palace gardens and the city skyline beyond." },
    { name: "Singita Sabora", location: "Serengeti, Tanzania", rate: "$2,800", desc: "A 1920s explorer-style tented camp where the Serengeti plains stretch endlessly from your private veranda. All-inclusive with twice-daily game drives." },
    { name: "Claridge's Suite", location: "London, England", rate: "$3,200", desc: "Art Deco grandeur in Mayfair. Butler service, a private drawing room, and a legacy of hosting royalty since 1856." },
  ]
  const services = [
    { name: "Itinerary Design", desc: "Every journey is built from the ground up by our travel architects, tailored to your tastes, pace, and passions." },
    { name: "Private Aviation", desc: "Charter flights, helicopter transfers, and seamless connections arranged with our network of vetted operators." },
    { name: "Dining Reservations", desc: "Secured tables at the world's most exclusive restaurants, from three-star Michelin to hidden local gems." },
    { name: "24/7 On-Trip Support", desc: "A dedicated concierge reachable around the clock, from rebooking a connection to arranging a last-minute spa." },
  ]
  const testimonials = [
    { name: "Victoria & Edward H.", trip: "Maldives Private Island", text: "Aurelius does not arrange vacations -- they create alternate realities. Our island retreat was the single most extraordinary week of our lives." },
    { name: "Rajan M.", trip: "Serengeti Safari", text: "I have traveled extensively, and nothing has come close to the level of access and intimacy Aurelius provided on the migration safari." },
    { name: "Isabelle D.", trip: "Mediterranean Yacht", text: "The attention to detail was staggering. Our chef remembered my daughter's allergy from the intake form and every port stop was perfectly timed." },
  ]
  return (
    <div className="min-h-screen text-stone-300" style={{ fontFamily: "'Playfair Display', serif", backgroundColor: "#0a0a0f" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      <nav className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <span className="text-2xl font-medium tracking-wide" style={{ color: "#d4af37" }}>AURELIUS</span>
          <div className="hidden md:flex space-x-10">
            <span className="text-xs tracking-[0.2em] uppercase cursor-pointer text-stone-500 hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>Experiences</span>
            <span className="text-xs tracking-[0.2em] uppercase cursor-pointer text-stone-500 hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>Accommodations</span>
            <span className="text-xs tracking-[0.2em] uppercase cursor-pointer text-stone-500 hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>Services</span>
          </div>
          <button className="h-10 px-8 text-xs tracking-[0.2em] uppercase border transition-all" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37", borderColor: "#d4af3750" }}>Inquire</button>
        </div>
      </nav>
      <section className="max-w-4xl mx-auto px-4 py-36 text-center">
        <div className="text-xs tracking-[0.4em] uppercase mb-8" style={{ fontFamily: "Inter, sans-serif", color: "#d4af3780" }}>Private Travel Concierge</div>
        <h1 className="text-6xl font-medium text-white leading-tight">Bespoke journeys for the<br/><em style={{ color: "#d4af37" }}>discerning</em> traveler</h1>
        <p className="text-lg text-stone-500 max-w-lg mx-auto mt-8 font-light" style={{ fontFamily: "Inter, sans-serif" }}>We do not sell trips. We design experiences for those who expect nothing less than extraordinary.</p>
        <button className="mt-10 h-14 px-16 text-xs tracking-[0.2em] uppercase transition-all" style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#d4af37", color: "#0a0a0f" }}>Begin Your Journey</button>
      </section>
      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>Curated Experiences</p>
            <h2 className="text-4xl font-medium text-white">Signature Journeys</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((e) => (
              <div key={e.name} className="border border-white/10 p-8 hover:border-white/20 transition-colors">
                <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>{e.location}</p>
                <h3 className="text-2xl font-medium text-white mb-3">{e.name}</h3>
                <p className="text-sm text-stone-500 mb-6 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{e.desc}</p>
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-xs text-stone-600" style={{ fontFamily: "Inter, sans-serif" }}>{e.duration}</span>
                  <span className="text-sm" style={{ color: "#d4af37" }}>From {e.from}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-white/5" style={{ backgroundColor: "#0d0d14" }}>
        <div className="max-w-5xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>Where You Will Stay</p>
            <h2 className="text-4xl font-medium text-white">Luxury Accommodations</h2>
          </div>
          <div className="space-y-8">
            {accommodations.map((a) => (
              <div key={a.name} className="border border-white/10 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white mb-1">{a.name}</h3>
                  <p className="text-xs tracking-wider uppercase text-stone-600 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>{a.location}</p>
                  <p className="text-sm text-stone-500 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{a.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-2xl font-medium" style={{ color: "#d4af37" }}>{a.rate}</p>
                  <p className="text-xs text-stone-600" style={{ fontFamily: "Inter, sans-serif" }}>per night</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>At Your Service</p>
            <h2 className="text-4xl font-medium text-white">Concierge Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.name} className="flex items-start space-x-4">
                <div className="w-px h-12 flex-shrink-0 mt-1" style={{ backgroundColor: "#d4af37" }} />
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">{s.name}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-white/5" style={{ backgroundColor: "#0d0d14" }}>
        <div className="max-w-5xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ fontFamily: "Inter, sans-serif", color: "#d4af37" }}>Client Reflections</p>
            <h2 className="text-4xl font-medium text-white">Words from Our Guests</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-white/10 p-8">
                <p className="text-sm text-stone-400 italic leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>&ldquo;{t.text}&rdquo;</p>
                <p className="text-sm font-medium text-white">{t.name}</p>
                <p className="text-xs mt-1" style={{ fontFamily: "Inter, sans-serif", color: "#d4af3780" }}>{t.trip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-white/5">
        <div className="max-w-2xl mx-auto px-4 py-28 text-center">
          <h2 className="text-4xl font-medium text-white mb-4">Begin a conversation</h2>
          <p className="text-sm text-stone-500 mb-10" style={{ fontFamily: "Inter, sans-serif" }}>Every Aurelius journey starts with a personal consultation. Share your vision and we will bring it to life.</p>
          <button className="h-14 px-20 text-xs tracking-[0.2em] uppercase transition-all hover:opacity-90" style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#d4af37", color: "#0a0a0f" }}>Inquire Now</button>
          <p className="text-xs text-stone-700 mt-6" style={{ fontFamily: "Inter, sans-serif" }}>By invitation and referral. Response within 24 hours.</p>
        </div>
      </section>
      <footer className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-lg tracking-wide" style={{ color: "#d4af37" }}>AURELIUS</span>
            <div className="flex space-x-8 text-xs tracking-[0.15em] uppercase text-stone-600" style={{ fontFamily: "Inter, sans-serif" }}>
              <span className="cursor-pointer hover:text-stone-300 transition-colors">Privacy</span>
              <span className="cursor-pointer hover:text-stone-300 transition-colors">Terms</span>
              <span className="cursor-pointer hover:text-stone-300 transition-colors">Contact</span>
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-6 text-center">
            <span className="text-xs text-stone-700" style={{ fontFamily: "Inter, sans-serif" }}>&copy; 2026 Aurelius Travel. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
