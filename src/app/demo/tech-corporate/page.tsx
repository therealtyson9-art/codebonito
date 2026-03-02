export const dynamic = "force-dynamic";
export default function TechCorporateDemo() {
  const solutions = [
    { title: "Elastic Compute", desc: "Auto-scaling compute instances with dedicated and bare-metal options. Deploy across 34 global regions with guaranteed 99.99% uptime SLAs and live migration support.", icon: "C" },
    { title: "Object Storage", desc: "Infinitely scalable object storage with 11 nines of durability. Intelligent tiering moves data automatically between hot, warm, and archive tiers to optimize costs.", icon: "S" },
    { title: "Virtual Networking", desc: "Software-defined networking with private VPCs, global load balancing, and DDoS protection. Peer networks across regions with encrypted transit at line rate.", icon: "N" },
    { title: "Zero Trust Security", desc: "Identity-aware access controls, hardware security modules, and real-time threat detection. Achieve compliance with SOC 2, HIPAA, FedRAMP, and ISO 27001.", icon: "X" },
  ];

  const certifications = [
    { name: "SOC 2 Type II", desc: "Audited annually" },
    { name: "ISO 27001", desc: "Certified since 2019" },
    { name: "FedRAMP High", desc: "Government authorized" },
    { name: "HIPAA", desc: "BAA available" },
    { name: "PCI DSS L1", desc: "Payment compliant" },
    { name: "GDPR", desc: "EU data residency" },
  ];

  const stories = [
    { company: "Meridian Health Systems", quote: "Redshift helped us migrate 14 petabytes of patient data to the cloud while maintaining full HIPAA compliance. Our query times dropped 80%.", person: "Dr. Sarah Chen, CTO" },
    { company: "Atlas Financial Group", quote: "We run our entire trading platform on Redshift infrastructure. The low-latency networking and five-nines uptime are non-negotiable for us, and they deliver.", person: "Marcus Webb, VP Engineering" },
    { company: "National Grid Energy", quote: "Redshift's multi-region architecture lets us process sensor data from 200,000 grid nodes in real time. Their security posture gave our board the confidence to move.", person: "James Okoro, CISO" },
  ];

  const tiers = [
    { name: "Team", price: "$2,500", period: "/month", features: ["Up to 50 compute instances", "500 GB object storage", "Standard support (8x5)", "3 regions", "Basic monitoring"] },
    { name: "Business", price: "$12,000", period: "/month", features: ["Unlimited instances", "5 TB object storage", "Priority support (24x7)", "All regions", "Advanced monitoring", "SSO & RBAC"], highlight: true },
    { name: "Enterprise", price: "Custom", period: "", features: ["Dedicated infrastructure", "Unlimited storage", "Dedicated TAM", "Custom SLAs", "Compliance packages", "On-prem hybrid"] },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <div style={{ fontFamily: "'Red Hat Display', sans-serif" }} className="min-h-screen bg-white text-gray-900">
        {/* Mega Nav */}
        <nav className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-10">
              <span className="text-2xl font-bold" style={{ color: "#dc2626" }}>Redshift</span>
              <div className="hidden lg:flex gap-8 text-sm font-medium text-gray-600">
                <a href="#" className="hover:text-gray-900">Products</a>
                <a href="#" className="hover:text-gray-900">Solutions</a>
                <a href="#" className="hover:text-gray-900">Pricing</a>
                <a href="#" className="hover:text-gray-900">Customers</a>
                <a href="#" className="hover:text-gray-900">Partners</a>
                <a href="#" className="hover:text-gray-900">Resources</a>
                <a href="#" className="hover:text-gray-900">Docs</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm font-medium text-gray-600">Console</a>
              <a href="#" className="text-sm text-white px-5 py-2.5 rounded font-semibold" style={{ backgroundColor: "#dc2626" }}>Contact Sales</a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-24 px-6" style={{ background: "linear-gradient(to bottom, #fef2f2, #ffffff)" }}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ backgroundColor: "#fee2e2", color: "#dc2626" }}>Enterprise Cloud Platform</span>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-6">Infrastructure that enterprises trust</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">Compute, storage, networking, and security -- unified on a platform built for regulatory compliance, global scale, and mission-critical reliability.</p>
              <div className="flex gap-4">
                <a href="#" className="px-6 py-3.5 text-white rounded font-semibold" style={{ backgroundColor: "#dc2626" }}>Request a Demo</a>
                <a href="#" className="px-6 py-3.5 border border-gray-300 rounded font-semibold">View Documentation</a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Enterprise Platform Dashboard</p>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Core Solutions</h2>
            <p className="text-gray-600 text-center mb-14 max-w-2xl mx-auto">Four pillars of enterprise infrastructure, each backed by dedicated engineering teams and industry-leading SLAs.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((s, i) => (
                <div key={i} className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-5" style={{ backgroundColor: "#dc2626" }}>{s.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Compliance &amp; Certifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {certifications.map((c, i) => (
                <div key={i} className="bg-white p-5 rounded-lg border border-gray-200 text-center">
                  <p className="font-bold text-sm mb-1">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Stories */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Customer Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {stories.map((s, i) => (
                <div key={i} className="p-8 bg-gray-50 rounded-xl">
                  <p className="text-gray-700 mb-6 leading-relaxed">&ldquo;{s.quote}&rdquo;</p>
                  <p className="font-semibold text-sm">{s.person}</p>
                  <p className="text-sm mt-1" style={{ color: "#dc2626" }}>{s.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Transparent Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {tiers.map((t, i) => (
                <div key={i} className={`p-8 rounded-xl ${t.highlight ? "bg-white shadow-lg border-2" : "bg-white border border-gray-200"}`} style={t.highlight ? { borderColor: "#dc2626" } : {}}>
                  {t.highlight && <span className="text-xs font-semibold px-3 py-1 rounded-full text-white mb-4 inline-block" style={{ backgroundColor: "#dc2626" }}>Most Popular</span>}
                  <h3 className="text-xl font-bold">{t.name}</h3>
                  <div className="mt-4 mb-6"><span className="text-4xl font-bold">{t.price}</span><span className="text-gray-500">{t.period}</span></div>
                  <ul className="space-y-3">{t.features.map((f, j) => <li key={j} className="text-sm text-gray-600 flex items-start gap-2"><span style={{ color: "#dc2626" }}>&#10003;</span>{f}</li>)}</ul>
                  <a href="#" className={`block text-center mt-8 py-3 rounded font-semibold text-sm ${t.highlight ? "text-white" : "border border-gray-300 text-gray-700"}`} style={t.highlight ? { backgroundColor: "#dc2626" } : {}}>Get Started</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners & Contact */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Technology Partners</h2>
              <p className="text-gray-600 mb-6">We integrate with the tools your teams already use. Our partner ecosystem spans observability, CI/CD, identity, and data platforms.</p>
              <div className="grid grid-cols-3 gap-4">
                {["Datadog", "Terraform", "Okta", "Snowflake", "PagerDuty", "GitLab"].map((p, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg text-center text-sm font-medium text-gray-600">{p}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Talk to Sales</h2>
              <p className="text-gray-600 mb-6">Our solutions architects will design a deployment tailored to your compliance requirements, performance needs, and budget.</p>
              <a href="#" className="inline-block px-8 py-3.5 text-white rounded font-semibold" style={{ backgroundColor: "#dc2626" }}>Schedule a Consultation</a>
              <p className="text-sm text-gray-500 mt-4">Response within 1 business day. No commitment required.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8 text-sm">
            <div className="md:col-span-2">
              <span className="text-xl font-bold text-white">Redshift Enterprise</span>
              <p className="mt-3 leading-relaxed">Enterprise cloud infrastructure trusted by Fortune 500 companies, government agencies, and healthcare organizations worldwide.</p>
            </div>
            <div><h4 className="font-semibold text-white mb-3">Products</h4><div className="space-y-2"><p>Compute</p><p>Storage</p><p>Networking</p><p>Security</p></div></div>
            <div><h4 className="font-semibold text-white mb-3">Resources</h4><div className="space-y-2"><p>Documentation</p><p>Blog</p><p>Case Studies</p><p>Webinars</p></div></div>
            <div><h4 className="font-semibold text-white mb-3">Company</h4><div className="space-y-2"><p>About</p><p>Careers</p><p>Press</p><p>Legal</p></div></div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-xs text-center">
            &copy; 2026 Redshift Enterprise, Inc. All rights reserved. SOC 2 Type II certified. ISO 27001 compliant.
          </div>
        </footer>
      </div>
    </>
  );
}
