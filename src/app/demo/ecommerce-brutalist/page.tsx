export default function EcommerceBrutalistDemo() {
  const drops = [
    { name: "UTILITY CARGO PANT", price: "$110", sku: "UCP-041", status: "IN STOCK" },
    { name: "OVERSIZED GRAPHIC TEE", price: "$58", sku: "OGT-077", status: "LOW STOCK" },
    { name: "DISTRESSED DENIM JACKET", price: "$185", sku: "DDJ-019", status: "IN STOCK" },
    { name: "TACTICAL VEST", price: "$142", sku: "TAV-033", status: "PRE-ORDER" },
    { name: "RAW HEM HOODIE", price: "$95", sku: "RHH-088", status: "IN STOCK" },
    { name: "CHAIN LINK BELT", price: "$45", sku: "CLB-055", status: "IN STOCK" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const collageItems = [
    { name: "DECONSTRUCTED BOMBER", price: "$220", rotation: "rotate-2", offset: "mt-0" },
    { name: "SLASH CROP TOP", price: "$65", rotation: "-rotate-3", offset: "mt-8" },
    { name: "WAXED CANVAS BAG", price: "$130", rotation: "rotate-1", offset: "mt-4" },
    { name: "PLATFORM BOOT", price: "$195", rotation: "-rotate-2", offset: "mt-12" },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen bg-black text-white">
      <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500&display=swap" rel="stylesheet" />

      {/* Full-Width Hero */}
      <section style={{ backgroundColor: "#dc2626" }} className="min-h-screen flex flex-col justify-center px-6 md:px-16 relative overflow-hidden">
        <div className="absolute top-6 left-6 md:left-16">
          <span style={{ fontFamily: "'Anton', sans-serif" }} className="text-white text-3xl tracking-wider">REBEL</span>
        </div>
        <div className="absolute top-6 right-6 md:right-16 text-sm">
          <span className="border border-white px-4 py-2 cursor-pointer hover:bg-white hover:text-red-600 transition-colors">CART [0]</span>
        </div>
        <h1 style={{ fontFamily: "'Anton', sans-serif" }} className="text-7xl md:text-[12rem] leading-none text-white uppercase">
          Wear<br />The<br />Revolt
        </h1>
        <p className="text-white text-lg md:text-xl mt-8 max-w-md font-light">
          Drop 04 is live. Streetwear for the ones who never asked for permission. Limited runs. No restocks.
        </p>
        <div className="mt-8">
          <span className="bg-white text-sm font-medium px-8 py-4 cursor-pointer" style={{ color: "#dc2626" }}>SHOP DROP 04</span>
        </div>
      </section>

      {/* Product Collage */}
      <section className="bg-black py-20 px-6 md:px-16">
        <h2 style={{ fontFamily: "'Anton', sans-serif" }} className="text-5xl md:text-7xl text-white mb-12 uppercase">Collage</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {collageItems.map((item, i) => (
            <div key={i} className={`${item.rotation} ${item.offset} cursor-pointer group`}>
              <div className="aspect-[3/4] border-2 border-white mb-3 relative" style={{ backgroundColor: "#dc2626" }}>
                <span className="absolute bottom-2 left-2 text-xs bg-black text-white px-2 py-1">{item.price}</span>
              </div>
              <p style={{ fontFamily: "'Anton', sans-serif" }} className="text-white text-sm tracking-wider">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="border-y-4 border-white py-20 px-6 md:px-16" style={{ backgroundColor: "#dc2626" }}>
        <div className="max-w-4xl">
          <h2 style={{ fontFamily: "'Anton', sans-serif" }} className="text-5xl md:text-8xl uppercase text-white leading-tight mb-8">
            Manifesto
          </h2>
          <p className="text-white text-lg md:text-2xl leading-relaxed font-light">
            REBEL was born in a garage in 2019. No investors. No board meetings. Just raw fabric, screen printers, and
            a refusal to make clothes that look like everything else. We produce in runs of 200 or less. When it is gone,
            it is gone. We do not chase trends. We do not do collabs for clout. Every thread is a middle finger to fast
            fashion and the machine that feeds it.
          </p>
          <p className="text-white text-lg md:text-2xl leading-relaxed font-light mt-6">
            If you are here, you already know. Welcome to the revolt.
          </p>
        </div>
      </section>

      {/* New Drops Grid */}
      <section className="bg-black py-20 px-6 md:px-16">
        <h2 style={{ fontFamily: "'Anton', sans-serif" }} className="text-5xl md:text-7xl text-white mb-4 uppercase">New Drops</h2>
        <p className="text-neutral-400 mb-12 text-sm">DROP 04 / SPRING 2025 / LIMITED QUANTITIES</p>
        <div className="grid md:grid-cols-3 gap-px bg-white">
          {drops.map((item, i) => (
            <div key={i} className="bg-black p-6 cursor-pointer hover:bg-neutral-900 transition-colors">
              <div className="aspect-square border border-neutral-700 mb-4 flex items-center justify-center">
                <span style={{ fontFamily: "'Anton', sans-serif" }} className="text-neutral-700 text-6xl">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p style={{ fontFamily: "'Anton', sans-serif" }} className="text-white text-lg tracking-wider">{item.name}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-white">{item.price}</span>
                <span className="text-xs text-neutral-500">{item.sku}</span>
              </div>
              <span className={`text-xs mt-2 inline-block px-2 py-1 ${item.status === "LOW STOCK" ? "bg-yellow-600" : item.status === "PRE-ORDER" ? "bg-neutral-700" : "bg-neutral-800"} text-white`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Size Guide */}
      <section className="border-t-4 border-white py-16 px-6 md:px-16 bg-black">
        <h2 style={{ fontFamily: "'Anton', sans-serif" }} className="text-4xl text-white mb-8 uppercase">Size Guide</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="py-3 pr-8 text-neutral-400 font-normal">SIZE</th>
                <th className="py-3 pr-8 text-neutral-400 font-normal">CHEST (in)</th>
                <th className="py-3 pr-8 text-neutral-400 font-normal">WAIST (in)</th>
                <th className="py-3 text-neutral-400 font-normal">LENGTH (in)</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((size, i) => (
                <tr key={i} className="border-b border-neutral-800 text-white">
                  <td className="py-3 pr-8 font-medium">{size}</td>
                  <td className="py-3 pr-8">{34 + i * 2}</td>
                  <td className="py-3 pr-8">{28 + i * 2}</td>
                  <td className="py-3">{27 + i}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-neutral-500 text-xs mt-4">All REBEL pieces run oversized. When in doubt, size down. Measurements taken flat.</p>
      </section>

      {/* Mailing List */}
      <section style={{ backgroundColor: "#dc2626" }} className="py-16 px-6 md:px-16">
        <div className="max-w-2xl">
          <h2 style={{ fontFamily: "'Anton', sans-serif" }} className="text-4xl md:text-6xl text-white uppercase mb-4">
            Get Drop Alerts
          </h2>
          <p className="text-white font-light mb-8">No spam. No lifestyle content. Just a single email when new product goes live. Subscribers get 15-minute early access.</p>
          <div className="flex gap-0">
            <input type="email" placeholder="EMAIL ADDRESS" className="flex-1 bg-black text-white px-6 py-4 text-sm border-2 border-white focus:outline-none placeholder-neutral-500" />
            <button className="bg-white text-sm font-medium px-8 py-4 border-2 border-white" style={{ color: "#dc2626", fontFamily: "'Anton', sans-serif", letterSpacing: "0.05em" }}>JOIN</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-2 border-white py-6 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
        <span style={{ fontFamily: "'Anton', sans-serif" }} className="text-white text-lg tracking-wider">REBEL</span>
        <span>&copy; 2025 REBEL. NO RESTOCKS. NO APOLOGIES.</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="cursor-pointer hover:text-white">TERMS</span>
          <span className="cursor-pointer hover:text-white">PRIVACY</span>
          <span className="cursor-pointer hover:text-white">CONTACT</span>
        </div>
      </footer>
    </div>
  );
}
