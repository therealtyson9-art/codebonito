export default function DocsPlayfulDemo() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif", backgroundColor: "#ecfdf5" }} className="min-h-screen">
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <header className="bg-white border-b border-green-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: "#14b8a6" }}>P</div>
          <span className="text-lg font-bold" style={{ color: "#134e4a" }}>PixiBot Docs</span>
        </div>
        <nav className="flex items-center gap-5 text-sm font-medium">
          <a style={{ color: "#14b8a6" }}>Tutorials</a>
          <a style={{ color: "#5eead4" }}>Components</a>
          <a style={{ color: "#5eead4" }}>Templates</a>
          <a style={{ color: "#5eead4" }}>FAQ</a>
          <a style={{ color: "#5eead4" }}>Community</a>
        </nav>
      </header>

      {/* Step Nav */}
      <div className="bg-white border-b border-green-100 px-6 py-3">
        <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm">
          {["1. Setup", "2. First Bot", "3. Add Skills", "4. Test", "5. Deploy"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: i === 0 ? "#14b8a6" : "#d1d5db" }}>{i + 1}</span>
              <span className="hidden md:inline" style={{ color: i === 0 ? "#14b8a6" : "#9ca3af" }}>{step.split(". ")[1]}</span>
              {i < 4 && <span className="mx-1" style={{ color: "#d1d5db" }}>---</span>}
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Illustrated Hero */}
        <section className="bg-white rounded-2xl border border-green-100 p-10 mb-10 text-center">
          <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl" style={{ backgroundColor: "#ccfbf1" }}>
            <span role="img" aria-label="robot mascot">&#x1F916;</span>
          </div>
          <h1 className="text-4xl font-bold mb-3" style={{ color: "#134e4a" }}>Build Your First Chatbot</h1>
          <p className="text-lg mb-6 max-w-xl mx-auto" style={{ color: "#5eead4" }}>
            PixiBot makes it easy to create intelligent chatbots with a visual builder, pre-built skills, and one-click deployment to any platform.
          </p>
          <div className="inline-flex gap-3">
            <span className="px-5 py-2.5 rounded-full text-sm font-bold text-white" style={{ backgroundColor: "#14b8a6" }}>Start Building</span>
            <span className="px-5 py-2.5 rounded-full text-sm font-bold border-2" style={{ borderColor: "#14b8a6", color: "#14b8a6" }}>Watch Demo</span>
          </div>
        </section>

        {/* Tutorials List */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#134e4a" }}>Popular Tutorials</h2>
          <div className="space-y-3">
            {[
              { title: "Build a Customer Support Bot", time: "15 min", level: "Beginner", desc: "Create an FAQ bot that answers common customer questions using PixiBot's intent matching engine." },
              { title: "Add Natural Language Understanding", time: "25 min", level: "Intermediate", desc: "Connect your bot to the NLU pipeline for entity extraction, sentiment analysis, and multi-turn conversations." },
              { title: "Deploy to Slack and Discord", time: "10 min", level: "Beginner", desc: "Configure platform adapters and deploy your bot to Slack workspaces and Discord servers simultaneously." },
              { title: "Custom Skill Development", time: "40 min", level: "Advanced", desc: "Build reusable skills with the PixiBot SDK. Package logic, responses, and context handlers into portable modules." },
              { title: "Analytics and Conversation Insights", time: "20 min", level: "Intermediate", desc: "Set up conversation tracking, measure resolution rates, and identify the most common user intents and drop-off points." },
            ].map((tut) => (
              <div key={tut.title} className="bg-white rounded-xl border border-green-100 p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0" style={{ backgroundColor: "#ccfbf1" }}>
                  {tut.level === "Beginner" ? "&#x1F331;" : tut.level === "Intermediate" ? "&#x1F33F;" : "&#x1F333;"}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold" style={{ color: "#134e4a" }}>{tut.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: "#ccfbf1", color: "#14b8a6" }}>{tut.level}</span>
                  </div>
                  <p className="text-sm mb-1" style={{ color: "#6b7280" }}>{tut.desc}</p>
                  <span className="text-xs" style={{ color: "#14b8a6" }}>{tut.time} read</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Component Library */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#134e4a" }}>Component Library</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Text Response", desc: "Send plain text or rich markdown replies to users" },
              { name: "Quick Replies", desc: "Present up to 10 tappable option buttons" },
              { name: "Carousel Card", desc: "Swipeable cards with images, titles, and actions" },
              { name: "Form Collector", desc: "Gather structured data with validated input fields" },
              { name: "Media Player", desc: "Embed audio, video, or image content inline" },
              { name: "Handoff Block", desc: "Transfer conversation to a live human agent" },
              { name: "Location Picker", desc: "Let users share or select a map location" },
              { name: "Date Selector", desc: "Calendar widget for booking and scheduling flows" },
              { name: "Rating Widget", desc: "Collect star ratings and satisfaction scores" },
            ].map((comp) => (
              <div key={comp.name} className="bg-white rounded-xl border border-green-100 p-4">
                <h3 className="font-bold text-sm mb-1" style={{ color: "#134e4a" }}>{comp.name}</h3>
                <p className="text-xs" style={{ color: "#6b7280" }}>{comp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Templates Gallery */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#134e4a" }}>Starter Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "E-Commerce Assistant", desc: "Product search, order tracking, and returns handling with Shopify integration.", uses: "2.4k uses" },
              { name: "Appointment Scheduler", desc: "Calendar booking flow with availability checking and reminder notifications.", uses: "1.8k uses" },
              { name: "Lead Qualifier", desc: "Multi-step qualification flow that scores leads and routes to sales reps.", uses: "1.2k uses" },
            ].map((tmpl) => (
              <div key={tmpl.name} className="bg-white rounded-xl border border-green-100 p-5">
                <div className="w-full h-24 rounded-lg mb-3 flex items-center justify-center text-3xl" style={{ backgroundColor: "#ccfbf1" }}>&#x1F4E6;</div>
                <h3 className="font-bold text-sm mb-1" style={{ color: "#134e4a" }}>{tmpl.name}</h3>
                <p className="text-xs mb-2" style={{ color: "#6b7280" }}>{tmpl.desc}</p>
                <span className="text-xs font-medium" style={{ color: "#14b8a6" }}>{tmpl.uses}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Start Code */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#134e4a" }}>Quick Start Code</h2>
          <div className="bg-white rounded-xl border border-green-100 p-6">
            <p className="text-sm mb-3" style={{ color: "#6b7280" }}>Install the PixiBot SDK and create your first bot in three lines of code:</p>
            <div className="rounded-lg p-4 text-sm font-mono" style={{ backgroundColor: "#f0fdfa", color: "#134e4a" }}>
              <p style={{ color: "#14b8a6" }}>{"// npm install @pixibot/sdk"}</p>
              <p className="mt-2">{"import { PixiBot } from '@pixibot/sdk';"}</p>
              <p className="mt-1">{"const bot = new PixiBot({ name: 'My First Bot' });"}</p>
              <p className="mt-1">{"bot.onMessage('hello', ctx => ctx.reply('Hey there!'));"}</p>
              <p className="mt-1">{"bot.deploy({ platform: 'slack', token: process.env.SLACK_TOKEN });"}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-5" style={{ color: "#134e4a" }}>Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              { q: "How many bots can I create on the free plan?", a: "The free plan includes up to 3 active bots with 1,000 monthly conversations each. Upgrade to Pro for unlimited bots and conversations." },
              { q: "Can I use my own NLU model?", a: "Yes! PixiBot supports custom NLU models via the Model Adapter API. Bring your own TensorFlow, PyTorch, or ONNX model and connect it through the skills framework." },
              { q: "What platforms are supported for deployment?", a: "PixiBot supports Slack, Discord, Microsoft Teams, WhatsApp, Facebook Messenger, Telegram, and any custom platform via the Webhook adapter." },
              { q: "Is there a self-hosted option?", a: "Enterprise plans include a self-hosted deployment option with Docker and Kubernetes support. Contact our sales team for infrastructure requirements." },
              { q: "How does PixiBot handle multiple languages?", a: "PixiBot includes built-in i18n support for 40+ languages. Define response variants per locale, and the platform auto-detects user language from the incoming message or browser settings." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-green-100 p-5">
                <h3 className="font-bold text-sm mb-2" style={{ color: "#134e4a" }}>{faq.q}</h3>
                <p className="text-sm" style={{ color: "#6b7280" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Playful Footer */}
      <footer className="bg-white border-t border-green-100 px-6 py-6 text-center">
        <div className="text-2xl mb-2">&#x1F916;</div>
        <p className="text-sm font-bold mb-1" style={{ color: "#134e4a" }}>Built with love by the PixiBot team</p>
        <p className="text-xs" style={{ color: "#14b8a6" }}>Docs v2.5 | Need help? Chat with PixiBot itself at support.pixibot.dev</p>
      </footer>
    </div>
  );
}
