export default function LandingPlayfulDemo() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Comfortaa', cursive", backgroundColor: "#fff7ed", color: "#292524" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>

      {/* Rounded Nav */}
      <nav className="max-w-5xl mx-auto mt-4 px-6 py-3 flex justify-between items-center bg-white rounded-full shadow-sm">
        <span className="text-xl font-bold" style={{ color: "#f97316" }}>PetPal</span>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <span className="cursor-pointer hover:text-orange-500">How It Works</span>
          <span className="cursor-pointer hover:text-orange-500">Pet Types</span>
          <span className="cursor-pointer hover:text-orange-500">Sitters</span>
          <span className="cursor-pointer hover:text-orange-500">Safety</span>
        </div>
        <button className="px-6 py-2 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: "#f97316" }}>Download App</button>
      </nav>

      {/* Illustrated Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#f97316" }}>Your Pet&apos;s New Best Friend</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "#292524" }}>
            Trusted Pet Sitting, Right in Your Neighborhood
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            PetPal connects you with verified, background-checked pet sitters who treat your furry family members like their own. Book walks, overnight stays, or drop-in visits in just a few taps.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-full text-white font-semibold" style={{ backgroundColor: "#f97316" }}>Find a Sitter</button>
            <button className="px-8 py-3 rounded-full font-semibold border-2" style={{ borderColor: "#f97316", color: "#f97316" }}>Become a Sitter</button>
          </div>
          <p className="mt-6 text-sm text-gray-400">Over 2 million happy pet parents and counting!</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-80 h-80 rounded-3xl flex flex-col items-center justify-center shadow-lg" style={{ backgroundColor: "#fed7aa" }}>
            <div className="text-8xl mb-4">&#128054;</div>
            <p className="text-sm font-semibold text-orange-700">Your pet, always in good paws</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#292524" }}>How PetPal Works</h2>
          <p className="text-center text-gray-500 mb-16 max-w-lg mx-auto">Booking your pet&apos;s next adventure takes less than 2 minutes.</p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { step: "1", title: "Search Nearby Sitters", desc: "Enter your zip code and pet type. Browse sitter profiles with reviews, photos, and availability calendars. Filter by services like walking, boarding, or drop-ins." },
              { step: "2", title: "Book & Meet", desc: "Send a booking request with your dates. Every first-time booking includes a free meet-and-greet so your pet and sitter can get comfortable before the real thing." },
              { step: "3", title: "Relax & Get Updates", desc: "Receive real-time photo and video updates throughout the day. GPS-tracked walks, feeding confirmations, and a detailed report card when you pick up your pet." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: "#f97316" }}>{item.step}</div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pet Types We Cover */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: "#292524" }}>Every Pet is Welcome</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: "🐶", name: "Dogs", desc: "All breeds, all sizes" },
              { emoji: "🐱", name: "Cats", desc: "Indoor & outdoor" },
              { emoji: "🐰", name: "Rabbits", desc: "Bunnies & small mammals" },
              { emoji: "🐦", name: "Birds", desc: "Parrots to finches" },
              { emoji: "🐠", name: "Fish", desc: "Freshwater & saltwater" },
              { emoji: "🐢", name: "Reptiles", desc: "Lizards, snakes, turtles" },
              { emoji: "🐹", name: "Hamsters", desc: "Guinea pigs & gerbils" },
              { emoji: "🐾", name: "Exotic Pets", desc: "Hedgehogs, ferrets & more" },
            ].map((pet, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl block mb-3">{pet.emoji}</span>
                <h3 className="font-bold mb-1">{pet.name}</h3>
                <p className="text-sm text-gray-400">{pet.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sitter Profiles */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#292524" }}>Meet Our Top Sitters</h2>
          <p className="text-center text-gray-500 mb-16 max-w-lg mx-auto">Every PetPal sitter passes a comprehensive background check and completes our pet care certification program.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Emily Carter", location: "Brooklyn, NY", reviews: 248, rating: "4.98", specialty: "Dog walking & overnight boarding", bio: "Former vet tech with 6 years of professional animal care experience. Specializes in senior dogs and anxious pups." },
              { name: "Marcus Thompson", location: "Austin, TX", reviews: 187, rating: "4.95", specialty: "Cat sitting & small animals", bio: "Lifelong cat person and certified animal behaviorist. Provides enrichment activities and medication administration." },
              { name: "Sofia Reyes", location: "Portland, OR", reviews: 312, rating: "4.99", specialty: "Multi-pet households", bio: "Experienced with up to 5 pets at once. Has a large fenced yard and provides daily photo journals for every pet." },
            ].map((sitter, i) => (
              <div key={i} className="rounded-2xl p-6 border border-orange-100 hover:border-orange-300 transition-colors" style={{ backgroundColor: "#fff7ed" }}>
                <div className="w-16 h-16 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-white" style={{ backgroundColor: "#f97316" }}>{sitter.name[0]}</div>
                <h3 className="font-bold text-lg">{sitter.name}</h3>
                <p className="text-sm text-gray-400 mb-1">{sitter.location}</p>
                <p className="text-sm font-semibold mb-3" style={{ color: "#f97316" }}>{sitter.rating} stars ({sitter.reviews} reviews)</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{sitter.bio}</p>
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: "#fed7aa", color: "#c2410c" }}>{sitter.specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: "#292524" }}>Safety You Can Count On</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Background Checks", desc: "Every sitter undergoes a comprehensive background check including criminal history, identity verification, and reference checks from previous pet care experience." },
              { title: "Pet Insurance Included", desc: "Every booking includes up to $25,000 in veterinary coverage through our partnership with PetSure. Your pet is protected from the moment the booking starts." },
              { title: "GPS-Tracked Walks", desc: "See exactly where your dog goes on every walk with real-time GPS tracking. Route history, distance, and duration are all recorded in your booking dashboard." },
              { title: "24/7 Emergency Support", desc: "Our dedicated trust and safety team is available around the clock. If anything seems off, one tap connects you to a live specialist who can intervene immediately." },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm flex gap-4">
                <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#f97316" }} />
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-12 shadow-lg">
          <span className="text-6xl block mb-6">&#128062;</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#292524" }}>Ready to Find Your Perfect Sitter?</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">Download PetPal and browse trusted sitters in your area. Your first booking includes a free meet-and-greet.</p>
          <div className="flex justify-center gap-4">
            <button className="px-10 py-4 rounded-full text-white font-semibold text-lg" style={{ backgroundColor: "#f97316" }}>Download for iOS</button>
            <button className="px-10 py-4 rounded-full font-semibold text-lg border-2" style={{ borderColor: "#f97316", color: "#f97316" }}>Get on Android</button>
          </div>
          <p className="mt-6 text-sm text-gray-400">Free to download. Free to browse. You only pay when you book.</p>
        </div>
      </section>

      {/* Playful Footer */}
      <footer className="py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <span className="text-2xl font-bold" style={{ color: "#f97316" }}>PetPal</span>
              <p className="text-sm text-gray-400 mt-2 max-w-xs">Making pet care easier, safer, and more joyful for families and their furry companions since 2019.</p>
            </div>
            <div className="flex gap-12">
              <div>
                <h4 className="font-bold text-sm mb-3">For Pet Parents</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Find a Sitter</li>
                  <li>How It Works</li>
                  <li>Safety</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-3">For Sitters</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Become a Sitter</li>
                  <li>Sitter Resources</li>
                  <li>Community</li>
                  <li>Support</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
            &copy; 2025 PetPal, Inc. All rights reserved. Made with love for pets everywhere.
          </div>
        </div>
      </footer>
    </div>
  );
}
