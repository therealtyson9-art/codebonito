export const dynamic = "force-dynamic";
export default function AgencyPlayfulDemo() {
  const navItems = ["What We Do", "Wins", "The Crew", "Blog", "Hire Us"];

  const services = [
    { title: "Social Media Magic", icon: "🎯", description: "We turn your feeds into scroll-stopping, share-worthy content machines. Strategy, creation, and community management all in one colorful package." },
    { title: "Brand Identity Glow-Up", icon: "✨", description: "Logo looking tired? Voice feeling flat? We give brands a full makeover that makes them unforgettable from first impression to forever fan." },
    { title: "Website Wonderland", icon: "🌈", description: "Fast, gorgeous, mobile-first websites that make visitors stay, explore, and convert. No boring templates here, every build is custom." },
    { title: "Paid Ads That Slap", icon: "🚀", description: "Google, Meta, TikTok, LinkedIn — we know where your audience hangs out and how to get their attention without burning your budget." },
    { title: "Email Campaigns", icon: "💌", description: "Newsletters people actually open. Sequences that nurture leads into loyal fans. We write, design, and optimize every send." },
    { title: "Video Production", icon: "🎬", description: "From 15-second reels to full brand documentaries, our in-house video team captures the energy that makes your brand pop on screen." },
  ];

  const clientWins = [
    { metric: "847%", label: "Instagram growth for a pet brand in 6 months" },
    { metric: "3.2M", label: "TikTok views on a single campaign for a local bakery" },
    { metric: "$1.4M", label: "Revenue generated through email for an e-commerce client" },
    { metric: "22K", label: "Newsletter subscribers gained in 90 days for a SaaS startup" },
  ];

  const team = [
    { name: "Maya Diaz", role: "Founder & Chief Party Starter", bio: "Former agency creative who got tired of boring meetings. Started Pixel Party in her living room. Now leads a team of 16 wonderful weirdos." },
    { name: "Leo Park", role: "Creative Director", bio: "Can turn any brief into something that makes you smile. Has a sixth sense for trends and an unhealthy collection of fonts." },
    { name: "Asha Reeves", role: "Head of Strategy", bio: "Data nerd with a creative soul. Translates numbers into stories and strategies into results. Fueled entirely by oat milk lattes." },
    { name: "Tommy Nguyen", role: "Lead Developer", bio: "Builds websites so smooth they feel like butter. Accessibility advocate. Will judge you (gently) for bad alt text." },
    { name: "Jess Williams", role: "Social Media Lead", bio: "Lives online so your brand can thrive there. Community builder, meme curator, and the reason our clients go viral." },
  ];

  const blogPosts = [
    { title: "Why Your Brand Voice Sounds Like Everyone Else (And How to Fix It)", date: "November 2024", readTime: "5 min read" },
    { title: "The TikTok Strategy That Tripled Our Client's Sales", date: "October 2024", readTime: "7 min read" },
    { title: "Email Marketing Is Not Dead: Here's the Proof", date: "October 2024", readTime: "4 min read" },
  ];

  return (
    <div className="min-h-screen text-white" style={{ fontFamily: "'Grandstander', cursive", background: "linear-gradient(135deg, #0d9488 0%, #7c3aed 50%, #c026d3 100%)" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Grandstander:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Bouncy Nav */}
      <nav className="backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="text-2xl font-bold">Pixel Party 🎉</span>
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <span key={item} className="text-sm font-semibold cursor-pointer px-3 py-1 rounded-full hover:bg-white/20 transition-all">
                {item}
              </span>
            ))}
          </div>
          <div className="px-5 py-2 text-sm font-bold rounded-full cursor-pointer" style={{ backgroundColor: "#facc15", color: "#1a1a1a" }}>
            Let's Go! 🚀
          </div>
        </div>
      </nav>

      {/* Team Photo Hero */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-48 h-48 mx-auto rounded-full mb-10 flex items-center justify-center text-6xl" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
            📸
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            We make brands people can't stop talking about
          </h1>
          <p className="mt-6 text-lg font-light max-w-2xl mx-auto leading-relaxed opacity-90">
            Pixel Party is a digital marketing agency for brands that want to stand out, have fun,
            and actually enjoy the process. Based in Austin, TX, spreading good vibes worldwide.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="px-8 py-3 text-base font-bold rounded-full cursor-pointer" style={{ backgroundColor: "#facc15", color: "#1a1a1a" }}>
              See Our Work
            </div>
            <div className="px-8 py-3 text-base font-bold rounded-full cursor-pointer border-2 border-white/50 hover:bg-white/10">
              Meet the Crew
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What We Do (Really Well)</h2>
          <p className="text-center text-base font-light opacity-80 mb-14 max-w-xl mx-auto">
            Full-service digital marketing with a side of personality. Every service is tailored to your brand's unique vibe.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <span className="text-3xl">{service.icon}</span>
                <h3 className="text-lg font-bold mt-3 mb-2">{service.title}</h3>
                <p className="text-sm font-light leading-relaxed opacity-85">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Wins */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Client Wins 🏆</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {clientWins.map((win, i) => (
              <div key={i} className="rounded-2xl p-6 text-center" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                <p className="text-4xl md:text-5xl font-bold" style={{ color: "#facc15" }}>{win.metric}</p>
                <p className="text-sm font-light mt-3 leading-relaxed opacity-85">{win.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">Meet the Crew 👋</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-xl font-bold" style={{ backgroundColor: "#facc15", color: "#1a1a1a" }}>
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-base font-bold">{member.name}</h3>
                <p className="text-sm font-semibold mt-1" style={{ color: "#facc15" }}>{member.role}</p>
                <p className="text-sm font-light mt-3 leading-relaxed opacity-85">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Previews */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">From Our Blog 📝</h2>
          <div className="space-y-4">
            {blogPosts.map((post, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 cursor-pointer" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                <div>
                  <h3 className="text-base font-bold">{post.title}</h3>
                  <p className="text-sm font-light opacity-70 mt-1">{post.date} &middot; {post.readTime}</p>
                </div>
                <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "#facc15" }}>Read &rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Us CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-5xl mb-6 block">🎉</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Party?</h2>
          <p className="text-lg font-light opacity-90 mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you need a full marketing overhaul or just a little extra sparkle, we are here for it.
            Drop us a line and let's make something amazing together.
          </p>
          <div className="inline-block px-10 py-4 text-lg font-bold rounded-full cursor-pointer" style={{ backgroundColor: "#facc15", color: "#1a1a1a" }}>
            Start a Project 🚀
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6" style={{ backgroundColor: "rgba(0,0,0,0.2)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-lg font-bold">Pixel Party 🎉</span>
            <p className="text-xs font-light opacity-70 mt-1">Digital Marketing That Actually Slaps &middot; Austin, TX</p>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-sm cursor-pointer hover:opacity-70">Instagram</span>
            <span className="text-sm cursor-pointer hover:opacity-70">TikTok</span>
            <span className="text-sm cursor-pointer hover:opacity-70">LinkedIn</span>
            <span className="text-sm cursor-pointer hover:opacity-70">Twitter</span>
          </div>
          <p className="text-xs font-light opacity-60">&copy; 2024 Pixel Party LLC</p>
        </div>
      </footer>
    </div>
  );
}
