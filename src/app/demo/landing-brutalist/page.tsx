export const dynamic = "force-dynamic";
export default function LandingBrutalistDemo() {
  return (
    <div className="min-h-screen text-black" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#a3e635" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Protest+Riot&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
      </head>

      {/* Raw Text Nav */}
      <nav className="flex justify-between items-center px-6 py-4 border-b-4 border-black">
        <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'Protest Riot', cursive" }}>MEGAPHONE</span>
        <div className="flex gap-6 text-sm font-medium uppercase tracking-wide">
          <span className="hover:line-through cursor-pointer">Work</span>
          <span className="hover:line-through cursor-pointer">Results</span>
          <span className="hover:line-through cursor-pointer">Words</span>
          <span className="hover:line-through cursor-pointer">Contact</span>
        </div>
      </nav>

      {/* Wild Diagonal Text Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b-4 border-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[12rem] md:text-[18rem] font-bold opacity-10 select-none" style={{ fontFamily: "'Protest Riot', cursive" }}>LOUD</span>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold leading-none mb-4" style={{ fontFamily: "'Protest Riot', cursive", transform: "rotate(-3deg)" }}>
            WE MAKE<br />NOISE THAT<br />MATTERS
          </h1>
          <p className="text-xl md:text-2xl max-w-lg mx-auto mt-6 font-medium" style={{ transform: "rotate(1deg)" }}>
            Grassroots marketing for brands that refuse to whisper. No fluff. No algorithms. Just raw, human-to-human impact.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <button className="px-8 py-4 bg-black text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black border-4 border-black transition-colors" style={{ fontFamily: "'Protest Riot', cursive" }}>
              Hire Us Now
            </button>
            <button className="px-8 py-4 bg-transparent font-bold uppercase tracking-wider border-4 border-black hover:bg-black hover:text-white transition-colors" style={{ fontFamily: "'Protest Riot', cursive" }}>
              See Proof
            </button>
          </div>
        </div>
      </section>

      {/* What We Do - Bold Blocks */}
      <section className="py-20 px-6 border-b-4 border-black">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center" style={{ fontFamily: "'Protest Riot', cursive", transform: "rotate(-1deg)" }}>WHAT WE DO</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-0">
          {[
            { title: "STREET TEAMS", desc: "Real humans in real neighborhoods putting your message directly into the hands of the people who matter. Not bots. Not impressions. Actual handshakes." },
            { title: "GUERRILLA CAMPAIGNS", desc: "Wheat-paste, projections, pop-up events, and public installations that stop people in their tracks and make local news without a press release." },
            { title: "COMMUNITY ORGANIZING", desc: "We build coalitions around your brand. Block parties, open mics, neighborhood clean-ups — your logo becomes synonymous with good things happening." },
            { title: "WORD-OF-MOUTH ENGINES", desc: "We identify the 50 most connected people in any zip code and turn them into your unpaid evangelists. No influencer fees. Just authenticity." },
          ].map((item, i) => (
            <div key={i} className="border-4 border-black p-8 hover:bg-black hover:text-white transition-colors group" style={{ backgroundColor: i % 2 === 0 ? "#a3e635" : "white" }}>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Protest Riot', cursive" }}>{item.title}</h3>
              <p className="text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Results - Numbers */}
      <section className="py-20 px-6 bg-black text-white border-b-4 border-black">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center" style={{ fontFamily: "'Protest Riot', cursive", color: "#a3e635" }}>THE NUMBERS DON&apos;T LIE</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "3.2M", label: "Flyers Distributed" },
            { number: "847", label: "Street Events" },
            { number: "412%", label: "Avg. ROI" },
            { number: "0", label: "Bots Used" },
          ].map((stat, i) => (
            <div key={i}>
              <span className="text-5xl md:text-6xl font-bold block" style={{ fontFamily: "'Protest Riot', cursive", color: "#a3e635" }}>{stat.number}</span>
              <span className="text-sm uppercase tracking-wider mt-2 block text-gray-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 px-6 border-b-4 border-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ fontFamily: "'Protest Riot', cursive", transform: "rotate(2deg)" }}>OUR MANIFESTO</h2>
          <div className="space-y-6 text-lg md:text-xl font-medium leading-relaxed">
            <p>We believe marketing has lost its spine. Somewhere between programmatic ad buys and influencer partnerships, brands forgot how to talk to actual human beings standing on actual sidewalks.</p>
            <p>Megaphone exists because the best advertising has always been one person telling another person something worth hearing. That&apos;s it. That&apos;s the whole strategy.</p>
            <p>We don&apos;t optimize for impressions. We optimize for <span className="bg-black text-white px-2 inline-block" style={{ transform: "rotate(-1deg)" }}>conversations</span>. We don&apos;t A/B test subject lines. We A/B test which street corner gets more foot traffic on a Tuesday afternoon.</p>
            <p>If you want dashboards and attribution models, call someone else. If you want 500 real humans to know your name by Friday, call us.</p>
          </div>
        </div>
      </section>

      {/* Anti-Testimonials */}
      <section className="py-20 px-6 border-b-4 border-black">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center" style={{ fontFamily: "'Protest Riot', cursive", transform: "rotate(1deg)" }}>REAL RAW QUOTES</h2>
        <p className="text-center mb-16 text-lg font-medium">Unedited. Unfiltered. Straight from client mouths.</p>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            { quote: "I thought street marketing was dead. Megaphone proved me wrong so hard that I fired my entire digital agency the next quarter.", name: "— Derek Osman, Founder of Brine Kombucha" },
            { quote: "They showed up at 5 AM to set up a pop-up in a parking lot. By noon we had a line around the block. I still don't fully understand how.", name: "— Tracy Lam, Owner of Good Fortune Bakery" },
            { quote: "Honestly? I hired them as a joke. My CMO bet me $500 that grassroots wouldn't move the needle. I owe her $500 and a raise.", name: "— Kyle Brandt, VP Marketing at SoleFit" },
            { quote: "Zero ad spend. Zero social media posts. Somehow 4,000 people showed up to our launch. Megaphone is genuinely unhinged in the best way.", name: "— Nina Vasquez, CEO of BarrioFresh" },
          ].map((t, i) => (
            <div key={i} className="border-4 border-black p-6 bg-white" style={{ transform: `rotate(${i % 2 === 0 ? "-0.5" : "0.5"}deg)` }}>
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-3">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm font-bold uppercase tracking-wide">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-black text-white border-b-4 border-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center" style={{ fontFamily: "'Protest Riot', cursive", color: "#a3e635" }}>LET&apos;S TALK</h2>
          <p className="text-center mb-12 text-gray-400">No forms that email you back in 3-5 business days. We respond within 2 hours or we owe you a coffee.</p>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2" style={{ color: "#a3e635" }}>Your Name</label>
              <input type="text" className="w-full p-4 bg-transparent border-4 border-white text-white placeholder-gray-500 font-medium" placeholder="Type your actual name" />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2" style={{ color: "#a3e635" }}>Email</label>
              <input type="email" className="w-full p-4 bg-transparent border-4 border-white text-white placeholder-gray-500 font-medium" placeholder="Where we can reach you" />
            </div>
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-2" style={{ color: "#a3e635" }}>What Do You Need?</label>
              <textarea rows={4} className="w-full p-4 bg-transparent border-4 border-white text-white placeholder-gray-500 font-medium resize-none" placeholder="Give it to us straight. Budget, timeline, wildest dream. All of it." />
            </div>
            <button className="w-full py-4 font-bold text-xl uppercase tracking-wider border-4 border-black transition-colors" style={{ backgroundColor: "#a3e635", color: "black", fontFamily: "'Protest Riot', cursive" }}>
              SEND IT
            </button>
          </div>
        </div>
      </section>

      {/* Cities We Operate In */}
      <section className="py-16 px-6 border-b-4 border-black">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center" style={{ fontFamily: "'Protest Riot', cursive" }}>WHERE WE WORK</h2>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {["Brooklyn", "Queens", "Bronx", "Harlem", "Jersey City", "Philadelphia", "Baltimore", "D.C.", "Boston", "Chicago", "Detroit", "Atlanta"].map((city, i) => (
            <span key={i} className="px-6 py-3 border-4 border-black font-bold uppercase tracking-wider text-sm hover:bg-black hover:text-white transition-colors cursor-default">
              {city}
            </span>
          ))}
        </div>
        <p className="text-center mt-8 text-sm font-medium">Not on the list? We&apos;ll go anywhere there are sidewalks and people.</p>
      </section>

      {/* Footer - Single Line Raw Text */}
      <footer className="py-6 px-6 text-center border-t-4 border-black">
        <p className="text-sm font-bold uppercase tracking-widest">
          &copy; 2025 MEGAPHONE &bull; Brooklyn, NY &bull; We don&apos;t do cookies, tracking, or nonsense &bull; Just marketing that works
        </p>
      </footer>
    </div>
  );
}
