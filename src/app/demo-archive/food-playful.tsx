export default function FoodPlayfulDemo() {
  const menuHighlights = [
    { name: 'Truffle Mushroom Flatbread', price: '$18', tag: 'Best Seller', desc: 'Wild mushroom medley, truffle cream, fontina, fresh thyme' },
    { name: 'Honey Sriracha Wings', price: '$14', tag: 'Spicy', desc: 'Crispy jumbo wings, house honey-sriracha glaze, ranch drizzle' },
    { name: 'Burrata Caprese', price: '$16', tag: 'Fresh', desc: 'Creamy burrata, heirloom tomatoes, basil oil, aged balsamic' },
    { name: 'Wagyu Smash Burger', price: '$22', tag: 'Chef Pick', desc: 'Double smashed wagyu patties, aged cheddar, special sauce, brioche' },
    { name: 'Lobster Mac & Cheese', price: '$26', tag: 'Indulgent', desc: 'Maine lobster, three-cheese sauce, panko crust, chive oil' },
    { name: 'Tiramisu Jar', price: '$12', tag: 'Sweet', desc: 'Classic ladyfinger layers, espresso mascarpone, cocoa dust' },
  ]
  const offers = [
    { title: 'Happy Hour', time: 'Tue–Fri 4–6PM', desc: '$8 cocktails and half-price appetizers' },
    { title: 'Wine Wednesday', time: 'Every Wednesday', desc: 'All bottles half price, all night long' },
    { title: 'Brunch Special', time: 'Sat & Sun 10AM–2PM', desc: 'Bottomless mimosas with any entree for $15' },
  ]
  const reviews = [
    { stars: 5, text: 'The truffle flatbread is absolutely divine. We come back every week.', author: 'Jessica R.' },
    { stars: 5, text: 'Best burger in the city, hands down. The wagyu patty melts in your mouth.', author: 'David T.' },
    { stars: 4, text: 'Great atmosphere and the brunch special is unbeatable. Love this place.', author: 'Samantha L.' },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fef3c7', fontFamily: "'Nunito Sans', sans-serif", color: '#451a03' }}>
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Nunito+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 shadow-sm" style={{ backgroundColor: '#fef3c7' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-2xl" style={{ fontFamily: "'Pacifico', cursive", color: '#dc2626' }}>Rosso</span>
          <div className="hidden md:flex items-center gap-6">
            {['Menu', 'Specials', 'Reserve', 'About'].map(link => (
              <a key={link} href="#" className="text-sm font-semibold hover:underline underline-offset-4 transition" style={{ color: '#92400e' }}>{link}</a>
            ))}
            <button className="rounded-full px-5 py-2 text-sm font-bold text-white" style={{ backgroundColor: '#dc2626' }}>
              Order Online
            </button>
          </div>
        </div>
      </nav>

      {/* Hero — large food image with handwritten text */}
      <section className="relative py-32 px-6 text-center" style={{ backgroundColor: '#dc2626' }}>
        <div className="absolute inset-0 flex items-center justify-center text-[120px] opacity-10">🍝</div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl mb-6 text-white" style={{ fontFamily: "'Pacifico', cursive" }}>
            Made with Love
          </h1>
          <p className="text-lg max-w-lg mx-auto mb-8" style={{ color: '#fecaca' }}>
            Handcrafted dishes, locally sourced ingredients, and a whole lot of heart. Come hungry, leave happy.
          </p>
          <button className="rounded-full px-8 py-3 text-sm font-bold" style={{ backgroundColor: '#fbbf24', color: '#451a03' }}>
            View Full Menu
          </button>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Pacifico', cursive", color: '#dc2626' }}>Menu Highlights</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuHighlights.map(item => (
            <div key={item.name} className="bg-white rounded-2xl p-6 shadow-md transition hover:rotate-1 hover:shadow-lg">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-bold px-2 py-1 rounded-full text-white" style={{ backgroundColor: '#dc2626' }}>{item.tag}</span>
                <span className="text-lg font-bold" style={{ color: '#dc2626' }}>{item.price}</span>
              </div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#451a03' }}>{item.name}</h3>
              <p className="text-sm" style={{ color: '#92400e' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chef Story */}
      <section className="py-20" style={{ backgroundColor: '#451a03' }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-2xl flex items-center justify-center text-8xl" style={{ backgroundColor: '#5c2d0e' }}>
            👨‍🍳
          </div>
          <div>
            <h2 className="text-3xl mb-4 text-white" style={{ fontFamily: "'Pacifico', cursive" }}>Meet Chef Marco</h2>
            <p className="leading-relaxed mb-4" style={{ color: '#d6a87c' }}>
              Born in Naples, trained in Lyon, and now cooking in your neighborhood. Chef Marco Benedetti brings 20 years of culinary passion to every plate at Rosso.
            </p>
            <p className="leading-relaxed" style={{ color: '#d6a87c' }}>
              &ldquo;Food is memory. Every dish I create carries a story — from my grandmother&apos;s kitchen to your table.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Special Offers — ribbon banners */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Pacifico', cursive", color: '#dc2626' }}>Specials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {offers.map(o => (
            <div key={o.title} className="text-center bg-white rounded-2xl p-8 shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundColor: '#fbbf24' }} />
              <h3 className="text-xl font-bold mb-1" style={{ color: '#dc2626' }}>{o.title}</h3>
              <p className="text-xs font-semibold mb-3" style={{ color: '#fbbf24' }}>{o.time}</p>
              <p className="text-sm" style={{ color: '#92400e' }}>{o.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reservations */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: "'Pacifico', cursive", color: '#dc2626' }}>Reserve a Table</h2>
        <form className="bg-white rounded-2xl p-8 shadow-md space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="rounded-full px-4 py-3 text-sm outline-none" style={{ border: '2px solid #fef3c7' }} />
            <input type="tel" placeholder="Phone" className="rounded-full px-4 py-3 text-sm outline-none" style={{ border: '2px solid #fef3c7' }} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="date" className="rounded-full px-4 py-3 text-sm outline-none" style={{ border: '2px solid #fef3c7', color: '#92400e' }} />
            <select className="rounded-full px-4 py-3 text-sm outline-none" style={{ border: '2px solid #fef3c7', color: '#92400e' }}>
              <option>Party Size</option><option>2 guests</option><option>4 guests</option><option>6 guests</option><option>8+ guests</option>
            </select>
          </div>
          <button type="submit" className="w-full rounded-full py-3 text-white font-bold text-sm" style={{ backgroundColor: '#dc2626' }}>
            Reserve Now
          </button>
        </form>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-3 gap-3">
          {['🥗', '🍷', '🍰', '🥘', '🍝', '🍹'].map((emoji, i) => (
            <div key={i} className="aspect-square rounded-xl flex items-center justify-center text-4xl" style={{ backgroundColor: i % 2 === 0 ? '#fee2e2' : '#fef9c3' }}>
              {emoji}
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Pacifico', cursive", color: '#dc2626' }}>Guest Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(r => (
            <div key={r.author} className="bg-white rounded-2xl p-6 shadow-md text-center">
              <p className="text-lg mb-3" style={{ color: '#fbbf24' }}>{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</p>
              <p className="text-sm mb-4 italic" style={{ color: '#451a03' }}>&ldquo;{r.text}&rdquo;</p>
              <p className="text-xs font-bold" style={{ color: '#dc2626' }}>— {r.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location + Hours */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl aspect-video flex items-center justify-center text-5xl" style={{ backgroundColor: '#fee2e2' }}>📍</div>
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Pacifico', cursive", color: '#dc2626' }}>Visit Us</h3>
            <p className="font-semibold mb-1">412 Oak Street, Brooklyn, NY 11201</p>
            <p className="text-sm mb-4" style={{ color: '#92400e' }}>(718) 555-0189 | hello@rossorestaurant.com</p>
            <div className="text-sm space-y-1" style={{ color: '#92400e' }}>
              <p>Monday – Thursday: 5:00 PM – 10:00 PM</p>
              <p>Friday – Saturday: 5:00 PM – 11:30 PM</p>
              <p>Sunday: 10:00 AM – 9:00 PM (Brunch from 10–2)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6" style={{ backgroundColor: '#dc2626' }}>
        <div className="max-w-6xl mx-auto text-center text-white">
          <p className="text-2xl mb-3" style={{ fontFamily: "'Pacifico', cursive" }}>Rosso</p>
          <p className="text-sm opacity-80 mb-2">412 Oak Street, Brooklyn, NY 11201</p>
          <p className="text-sm opacity-80">(718) 555-0189 | hello@rossorestaurant.com</p>
        </div>
      </footer>
    </div>
  )
}
