import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design Prompts for Cursor, v0, Bolt & Lovable — The Complete Guide | Code Bonito",
  description:
    "Stop getting generic UI from AI tools. Learn how to write .cursorrules design prompts, v0 design system prompts, Bolt system prompts, and Lovable design templates that produce beautiful, premium interfaces every time.",
  alternates: {
    canonical: "/guides/cursorrules-for-v0-bolt-lovable",
  },
  openGraph: {
    title: "Design Prompts for Cursor, v0, Bolt & Lovable — The Complete Guide",
    description:
      "Stop getting generic UI from AI tools. Learn how to write design prompts for Cursor, v0, Bolt, and Lovable that produce beautiful, premium interfaces every time.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code Bonito — Design Prompts for Cursor, v0, Bolt & Lovable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Prompts for Cursor, v0, Bolt & Lovable — The Complete Guide",
    description:
      "Stop getting generic UI from AI tools. Learn how to write design prompts that produce beautiful, premium interfaces.",
    images: ["/og-image.png"],
  },
};

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-[#0d0d1a] border border-indigo-900/40 rounded-lg p-5 overflow-x-auto text-sm text-indigo-100 leading-relaxed my-6 whitespace-pre">
      <code>{children}</code>
    </pre>
  );
}

export default function GuidePage() {
  const cursorExample = `# Design System
fonts: ["Inter", "JetBrains Mono"]
primaryColor: "#6366f1"
accentColor: "#a5b4fc"
background: "#050510"

## Typography
h1: { fontSize: "60px", fontWeight: "700", lineHeight: "1.05" }
body: { fontSize: "16px", fontWeight: "400", lineHeight: "1.6" }

## Rules
- Use only palette colors. No gray-500 defaults.
- Hero headline must be 60px minimum.
- All animations via Framer Motion only.`;

  const v0Example = `Use this design system for everything you build. Do not deviate.

Colors: #6366f1 (primary), #050510 (bg), #a5b4fc (accent)
Fonts: Inter for all text, JetBrains Mono for code
Type scale: H1 60px/700, H2 40px/600, Body 16px/400
Spacing: 4px base grid. Sections: 80px padding.
Border radius: 8px cards, 4px inputs, 9999px badges

The result must feel premium and intentional, not like a default theme.`;

  const boltExample = `You are building a premium SaaS product. Apply this design system to every component you create.

COLORS
- Background: #050510
- Primary: #6366f1
- Accent: #a5b4fc
- Text: #ffffff
- Muted: #6b7280

TYPOGRAPHY
- All text: Inter (Google Fonts)
- Code: JetBrains Mono
- Hero / H1: 60px, weight 700, line-height 1.05
- H2: 40px, weight 600, line-height 1.1
- Body: 16px, weight 400, line-height 1.6

SPACING & LAYOUT
- Base grid: 4px
- Section vertical padding: 80px
- Container max-width: 1200px, centered

COMPONENT RULES
- Cards: border-radius 8px, border 1px solid rgba(99,102,241,0.2)
- Buttons: border-radius 6px, min-height 44px
- Badges: border-radius 9999px
- No Tailwind gray defaults. Only palette colors.

ANIMATIONS
- Entrance: fade + translate-y 20px, duration 0.5s ease-out
- Hover: scale 1.02, duration 0.15s
- No jarring motion. Smooth and intentional.

Every component must look like it belongs to a $10k design system.`;

  const lovableExample = `Design System — apply to all components

Color palette:
  background: #050510
  primary: #6366f1  
  accent: #a5b4fc
  foreground: #ffffff
  muted-foreground: #94a3b8

Font stack:
  sans: Inter
  mono: JetBrains Mono

Type scale:
  display: 60px / bold / 1.05 line-height
  heading: 40px / semibold / 1.1 line-height
  subheading: 24px / medium / 1.3 line-height
  body: 16px / regular / 1.6 line-height
  small: 14px / regular / 1.5 line-height

Spacing system: 4px base. Use 4, 8, 12, 16, 24, 32, 48, 64, 80, 120px.

Radius: cards 8px | inputs 4px | chips 9999px

RULES — non-negotiable:
1. Never use Tailwind gray-* defaults. Always use palette.
2. Hero sections start at 60px headline, never smaller.
3. Gradient: from primary to accent (135deg), only on CTAs.
4. Shadows: 0 0 40px rgba(99,102,241,0.15) for card glow effects.
5. The result must feel premium, not like a Lovable default.`;

  return (
    <main className="min-h-screen bg-[#050510] text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-indigo-400 mb-12">
          <Link href="/" className="hover:text-white transition-colors">Code Bonito</Link>
          <span className="text-indigo-900">/</span>
          <span className="text-white/50">Guides</span>
          <span className="text-indigo-900">/</span>
          <span className="text-white/70">Design Prompts</span>
        </nav>

        {/* Hero */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-950/60 border border-indigo-900/40 rounded-full px-4 py-1.5 text-xs text-indigo-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Guide — AI Design Prompts
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            The Complete Guide to Design Prompts for Cursor, v0, Bolt &amp; Lovable
          </h1>
          <p className="text-lg text-white/60 leading-relaxed">
            How to write .cursorrules, system prompts, and design tokens that force AI coding tools to produce beautiful, premium UI — every single time.
          </p>
        </header>

        {/* Intro */}
        <section className="mb-16 prose-invert">
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            Every AI-generated interface looks the same. Gray-500 text on white cards. Inter 16px everywhere. Rounded-md buttons with a hint of blue. The same default theme, recycled across a million projects. You&apos;ve seen it. You&apos;ve shipped it.
          </p>
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            The problem isn&apos;t the model. It&apos;s that you haven&apos;t given it a design system to follow. Cursor, v0, Bolt, and Lovable are all capable of generating exceptional UI — but they need constraints. Typography rules. Color tokens. Spacing systems. Motion guidelines. Without those, they fall back to their training distribution: generic, safe, forgettable.
          </p>
          <p className="text-white/80 text-lg leading-relaxed">
            This guide gives you the exact prompts, .cursorrules structures, and system instructions you need to lock in a design system across all four tools. Copy them. Adapt them. Use them on every project, and stop shipping generic UIs.
          </p>
        </section>

        {/* Section 1: Cursor */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">
            Cursor &amp; .cursorrules — Design System Prompts
          </h2>
          <p className="text-indigo-400 text-sm font-medium mb-6 uppercase tracking-wider">cursor design system prompt / cursorrules design</p>

          <p className="text-white/80 leading-relaxed mb-4">
            The <code className="text-indigo-300 bg-indigo-950/40 px-1.5 py-0.5 rounded text-sm">.cursorrules</code> file is Cursor&apos;s persistent instruction layer. Whatever you put in it gets injected into every AI interaction in your project. Most developers use it to set code style rules — but that&apos;s leaving 80% of its power on the table.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            A design-focused <code className="text-indigo-300 bg-indigo-950/40 px-1.5 py-0.5 rounded text-sm">.cursorrules</code> defines your complete visual language: fonts, colors, spacing scale, type scale, and component behavior. Every time Cursor generates or edits code, it reads these rules and applies them consistently — no more gray-500 defaults, no more arbitrary border radii.
          </p>
          <p className="text-white/80 leading-relaxed mb-6">
            The key is specificity. Vague rules like &quot;use a nice color palette&quot; will be ignored. Concrete declarations like &quot;primaryColor: #6366f1, no other blues&quot; get followed. Here&apos;s a battle-tested design section to drop into your <code className="text-indigo-300 bg-indigo-950/40 px-1.5 py-0.5 rounded text-sm">.cursorrules</code>:
          </p>

          <CodeBlock>{cursorExample}</CodeBlock>

          <p className="text-white/80 leading-relaxed mt-4">
            Place this at the top of your <code className="text-indigo-300 bg-indigo-950/40 px-1.5 py-0.5 rounded text-sm">.cursorrules</code> file before your coding standards. The &quot;Rules&quot; section is critical — the negative constraints (&quot;No gray-500 defaults&quot;) are what actually prevent the model from regressing to safe, generic choices. Explicit prohibitions beat positive instructions every time.
          </p>
        </section>

        {/* Section 2: v0 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">
            v0 — Design System Prompts That Stick
          </h2>
          <p className="text-indigo-400 text-sm font-medium mb-6 uppercase tracking-wider">v0 design system prompt / v0 beautiful UI</p>

          <p className="text-white/80 leading-relaxed mb-4">
            v0 by Vercel is a component generator — drop in a prompt, get a React component. The challenge: each generation is stateless. Without an embedded design system, every component looks slightly different, and none of them look like yours.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            The fix is prepending every v0 prompt with a compressed design token block. Think of it as a one-paragraph design spec that travels with each request. It doesn&apos;t need to be verbose — it needs to be precise. Color hex codes, not color names. Pixel values, not &quot;large&quot;. Explicit constraints over vague intentions.
          </p>
          <p className="text-white/80 leading-relaxed mb-6">
            Here&apos;s a v0 design system prompt you can prepend to any component generation request:
          </p>

          <CodeBlock>{v0Example}</CodeBlock>

          <p className="text-white/80 leading-relaxed mt-4">
            The last line — <em>&quot;The result must feel premium and intentional, not like a default theme&quot;</em> — is not decoration. It primes the model&apos;s output quality by setting an explicit standard. Pair this block with your actual component request (&quot;Build a pricing table with 3 tiers&quot;) and v0 will produce something that actually fits your brand.
          </p>
          <p className="text-white/80 leading-relaxed mt-4">
            Pro move: save this block in a text snippet tool (Raycast, Alfred, or even a simple VS Code snippet) so you can paste it at the start of every v0 session in seconds.
          </p>
        </section>

        {/* Section 3: Bolt */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">
            Bolt — Locking Your Design System in the System Prompt
          </h2>
          <p className="text-indigo-400 text-sm font-medium mb-6 uppercase tracking-wider">bolt beautiful UI prompt / bolt design system</p>

          <p className="text-white/80 leading-relaxed mb-4">
            Bolt.new gives you a full-stack AI builder with persistent project context. Unlike v0, Bolt can build and iterate entire applications — which means your design system needs to persist across dozens of interactions, not just one component.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            The most effective technique is embedding your design system directly in your first Bolt message, framed as project context. Bolt treats the initial setup message as a persistent reference — it shapes every subsequent generation in the session. The more structured and detailed you make it, the more consistently it applies.
          </p>
          <p className="text-white/80 leading-relaxed mb-6">
            Here&apos;s a complete Bolt system prompt template optimized for premium UI generation:
          </p>

          <CodeBlock>{boltExample}</CodeBlock>

          <p className="text-white/80 leading-relaxed mt-4">
            Key differences from the v0 prompt: Bolt&apos;s prompt is more verbose because it&apos;s building a full app, not a single component. The component rules and animation guidelines matter more here — they prevent Bolt from inventing its own interaction patterns as it builds out pages.
          </p>
          <p className="text-white/80 leading-relaxed mt-4">
            If Bolt starts drifting toward generic UI mid-session (it happens, especially in long builds), paste the system prompt again with &quot;Reminder: apply this design system to everything going forward.&quot; Re-anchoring works.
          </p>
        </section>

        {/* Section 4: Lovable */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">
            Lovable — Design Templates That Produce Premium Results
          </h2>
          <p className="text-indigo-400 text-sm font-medium mb-6 uppercase tracking-wider">lovable design template / lovable beautiful UI</p>

          <p className="text-white/80 leading-relaxed mb-4">
            Lovable is Bolt&apos;s closest competitor — a full-app AI builder with strong React and Tailwind output. Like Bolt, it benefits enormously from an explicit design system, and its outputs improve dramatically when you give it the right constraints upfront.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            The difference with Lovable: it tends to follow structured, list-based instructions more reliably than paragraphs. Format your design token block with clear labeled sections and numbered rules — Lovable&apos;s model responds better to that structure than to natural language descriptions.
          </p>
          <p className="text-white/80 leading-relaxed mb-6">
            Here&apos;s a Lovable design template optimized for premium output:
          </p>

          <CodeBlock>{lovableExample}</CodeBlock>

          <p className="text-white/80 leading-relaxed mt-4">
            Notice the numbered rules at the bottom — these are your non-negotiable overrides. Lovable (like all LLMs) occasionally defaults back to safe choices. Numbered rules function as hard constraints in a way that prose doesn&apos;t. Rule 1 (&quot;Never use Tailwind gray-* defaults&quot;) alone will transform the quality of your outputs.
          </p>
          <p className="text-white/80 leading-relaxed mt-4">
            Tip: Start every Lovable project by sending this design template before any feature request. &quot;Understood&quot; from Lovable means it&apos;s loaded into context. Then describe what you want to build and the design language will follow.
          </p>
        </section>

        {/* Section 5: DNA Cloner */}
        <section className="mb-16 bg-indigo-950/20 border border-indigo-900/30 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-xl">
              🧬
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-1">
                Pro Tip: Extract Any Design System with DNA Cloner
              </h2>
              <p className="text-indigo-400 text-sm font-medium mb-4 uppercase tracking-wider">Skip the manual token extraction</p>

              <p className="text-white/80 leading-relaxed mb-4">
                Writing design prompts from scratch takes time. If you&apos;re looking at an existing site — a competitor, a template you like, or a brand you&apos;re trying to match — you don&apos;t need to manually extract fonts, colors, and spacing by hand.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                <strong className="text-white">DNA Cloner</strong> is Code Bonito&apos;s design token extraction tool. Point it at any URL and it extracts the complete design system: colors (with exact hex values), fonts, type scale, spacing patterns, border radii, and shadow styles. It outputs a ready-to-use prompt block you can drop directly into Cursor, v0, Bolt, or Lovable.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                Instead of spending 30 minutes reverse-engineering a design system, you get the complete prompt in seconds — formatted exactly for the AI tool you&apos;re using.
              </p>
              <Link
                href="/dna"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Try DNA Cloner →
              </Link>
            </div>
          </div>
        </section>

        {/* Putting it together */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Putting It All Together
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            The common thread across all four tools is the same: AI models don&apos;t produce premium UI by accident. They do it when you give them precise, structured constraints that leave no room for default-mode thinking.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            Here&apos;s the workflow that works consistently:
          </p>
          <ol className="list-none space-y-4 mb-6">
            {[
              { n: "01", text: "Define your design system once — colors, fonts, spacing, type scale, border radii, animation rules." },
              { n: "02", text: "Format it for the tool you're using. Cursor needs a .cursorrules block. v0 needs a compressed prefix. Bolt and Lovable need a structured first message." },
              { n: "03", text: "Include explicit negative constraints. Tell the model what NOT to do (no gray defaults, no arbitrary sizing) — this is where the real quality uplift happens." },
              { n: "04", text: "Re-anchor when models drift. Paste your design block again mid-session when outputs start getting generic." },
              { n: "05", text: "Use DNA Cloner to skip manual extraction when you're matching an existing design." },
            ].map(({ n, text }) => (
              <li key={n} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-900/40 flex items-center justify-center text-xs font-bold text-indigo-400">
                  {n}
                </span>
                <p className="text-white/80 leading-relaxed pt-1">{text}</p>
              </li>
            ))}
          </ol>
          <p className="text-white/80 leading-relaxed">
            The prompts in this guide are starting points, not final answers. The best design prompt is one tuned to your specific design system — your brand colors, your type choices, your component vocabulary. Treat these templates as scaffolding and customize from there.
          </p>
        </section>

        {/* CTA */}
        <section className="border border-indigo-900/40 bg-indigo-950/20 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Want pre-built design systems ready for any AI tool?
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 max-w-xl mx-auto">
            Code Bonito&apos;s Ultra Premium templates come with complete design tokens — fonts, colors, spacing, animations — formatted and ready to paste into Cursor, v0, Bolt, or Lovable. Skip the setup. Start building with a real design system.
          </p>
          <Link
            href="/browse?tier=ultra_premium"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base"
          >
            Browse Ultra Premium Templates →
          </Link>
          <p className="text-white/30 text-sm mt-4">
            Each template includes design token exports for Cursor, v0, Bolt, and Lovable.
          </p>
        </section>

      </div>
    </main>
  );
}
