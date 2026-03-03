import { FadeIn } from "@/components/fade-in";
import { Hero } from "@/components/hero";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Palette,
  Download,
  Zap,
  Code2,
  Layers,
  Sparkles,
  Check,
  Search,
  Copy,
  Upload,
} from "lucide-react";
import { MOCK_TEMPLATES } from "@/lib/mock-data";
import { TemplateCard } from "@/components/template-card";

export default function HomePage() {
  const popularTemplates = [...MOCK_TEMPLATES]
    .sort((a, b) => b.downloads_count - a.downloads_count)
    .slice(0, 6);

  const newThisWeek = [...MOCK_TEMPLATES]
    .filter((t) => Date.now() - new Date(t.created_at).getTime() < 7 * 24 * 60 * 60 * 1000)
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 6);

  const totalDownloads = MOCK_TEMPLATES.reduce(
    (sum, t) => sum + t.downloads_count,
    0
  );

  return (
    <div>
      <Hero />      {/* Stats bar — Glass-morphism */}
      <section className="relative -mt-8 z-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg shadow-black/[0.04] backdrop-blur-xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-blue-100">
                <Download className="h-5 w-5 text-brand-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-foreground">100+</p>
                <p className="text-sm text-muted-foreground">Unique Templates</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg shadow-black/[0.04] backdrop-blur-xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-purple-100">
                <Layers className="h-5 w-5 text-violet-600" />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-foreground">{MOCK_TEMPLATES.length}</p>
                <p className="text-sm text-muted-foreground">Templates</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-lg shadow-black/[0.04] backdrop-blur-xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-yellow-100">
                <Code2 className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-foreground">6</p>
                <p className="text-sm text-muted-foreground">AI Platforms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform logos */}
      <section className="bg-[#fafafa] pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground/60">
            Works with your favorite AI tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              { name: "Cursor", style: "font-semibold text-gray-800" },
              { name: "v0", style: "font-bold text-black" },
              { name: "Bolt", style: "font-semibold text-violet-600" },
              { name: "Lovable", style: "font-semibold text-pink-500" },
              { name: "Claude Code", style: "font-semibold text-amber-700" },
              { name: "OpenClaw", style: "font-semibold text-emerald-600" },
            ].map((p) => (
              <span
                key={p.name}
                className={`font-mono text-sm tracking-tight ${p.style} opacity-70 transition-opacity duration-200 hover:opacity-100`}
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FadeIn>
      {/* Trending Templates — Horizontal scroll carousel */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <Badge className="mb-4 border-brand-blue/20 bg-brand-blue-light text-brand-blue">
                Popular
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                Trending templates
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The most downloaded templates this month.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden text-brand-blue hover:text-brand-blue/80 hover:bg-brand-blue/5 sm:flex">
              <Link href="/browse">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 overflow-x-auto scrollbar-hide">
          <div className="mx-auto flex max-w-7xl gap-6 px-4 pb-4 sm:px-6 lg:px-8" style={{ minWidth: "max-content" }}>
            {popularTemplates.map((template) => (
              <div key={template.id} className="w-[380px] shrink-0">
                <TemplateCard template={template} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/browse">
              View all templates <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      </FadeIn>

      {/* New This Week */}
      {newThisWeek.length > 0 && (
        <section className="bg-[#fafafa] py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <Badge className="mb-4 border-brand-amber/20 bg-brand-amber-light text-amber-800">
                  Fresh
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                  New this week
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Just added — the latest templates for your next project.
                </p>
              </div>
              <Button asChild variant="ghost" className="hidden text-brand-blue hover:text-brand-blue/80 hover:bg-brand-blue/5 sm:flex">
                <Link href="/browse">
                  View all <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newThisWeek.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Button asChild variant="outline" className="rounded-xl">
                <Link href="/browse">
                  View all templates <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <FadeIn>
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 border-brand-amber/20 bg-brand-amber-light text-amber-800">
              How It Works
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Pick &rarr; Copy &rarr; Paste
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three steps to stand out.
            </p>
          </div>
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            <StepCard
              step="01"
              icon={<Search className="h-6 w-6" />}
              title="Pick your favorite template"
              description="Browse by category, style, or platform. Find the perfect design for your next project."
            />
            <StepCard
              step="02"
              icon={<Copy className="h-6 w-6" />}
              title="Copy the prompt into your AI"
              description="Get a design prompt built for Cursor, v0, Bolt, Lovable, or Claude Code."
            />
            <StepCard
              step="03"
              icon={<Sparkles className="h-6 w-6" />}
              title="Paste and let it work the magic"
              description="Paste the prompt into your AI tool and watch it generate a unique, beautiful website."
            />
          </div>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      {/* Features */}
      <section className="bg-[#fafafa] py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 border-brand-blue/20 bg-brand-blue-light text-brand-blue">
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Why Code Bonito?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to create websites that stand out.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Palette className="h-5 w-5" />}
              title="Unique Designs"
              description="Every template is different. No cheap copies or boring designs you've seen a thousand times."
            />
            <FeatureCard
              icon={<Download className="h-5 w-5" />}
              title="Ready to Use"
              description="You get everything you need: colors, fonts, example text. Just copy and paste into your AI."
            />
            <FeatureCard
              icon={<Zap className="h-5 w-5" />}
              title="Works Everywhere"
              description="Use them in Claude, ChatGPT, v0, Cursor, Bolt. Same template, your favorite platform."
            />
            <FeatureCard
              icon={<Code2 className="h-5 w-5" />}
              title="Just Copy & Paste"
              description="You don't need to know how to code. Give the prompt to your AI and it does all the technical work."
            />
            <FeatureCard
              icon={<Layers className="h-5 w-5" />}
              title="Everything Defined"
              description="Exact colors, fonts, spacing. Your AI will know exactly how to build your website."
            />
            <FeatureCard
              icon={<Sparkles className="h-5 w-5" />}
              title="Always New Ones"
              description="We add new templates every week. Your competition will never have the same design."
            />
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Pricing Preview */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 border-brand-blue/20 bg-brand-blue-light text-brand-blue">
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Clear pricing, no surprises
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Try free with 1 template per month. Upgrade to Pro for unlimited access to all templates.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="flex flex-col rounded-2xl border-border/60 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Free</CardTitle>
                <CardDescription>
                  Try with no commitment
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">$0</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <PricingFeature>1 free template per month</PricingFeature>
                  <PricingFeature>All platforms (Claude, v0, Bolt, Cursor, Lovable)</PricingFeature>
                  <PricingFeature>Ready-to-copy prompts</PricingFeature>
                  <PricingFeature>Registration required</PricingFeature>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full rounded-xl" asChild>
                  <Link href="/login">Sign Up Free</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative flex flex-col rounded-2xl border-brand-blue/40 bg-white shadow-lg shadow-brand-blue/[0.08] ring-1 ring-brand-blue/10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-brand-blue to-blue-500 text-white shadow-md shadow-brand-blue/25 px-4 py-1">
                  Pay Per Template
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Premium</CardTitle>
                <CardDescription>
                  Just what you need
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">$2</span>
                  <span className="text-muted-foreground"> per template</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <PricingFeature>One single template</PricingFeature>
                  <PricingFeature>All platforms (Cursor, v0, Bolt, Lovable, Claude Code, OpenClaw)</PricingFeature>
                  <PricingFeature>Yours forever</PricingFeature>
                  <PricingFeature>Commercial use included</PricingFeature>
                  <PricingFeature>New templates every week</PricingFeature>
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">
                  Unlimited subscription ($5/mo) coming soon
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-xl bg-gradient-to-r from-brand-blue to-blue-500 text-white shadow-md shadow-brand-blue/25 transition-all duration-200 hover:shadow-lg hover:brightness-110" asChild>
                  <Link href="/browse">
                    Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA — Full-width gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue via-blue-600 to-violet-600 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent)]" />
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-white/[0.05] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-brand-amber/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to build something that stands out?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100/80">
              Join thousands of people creating websites that actually get noticed.
              Stop blending in, start standing out.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-xl bg-white px-8 text-base font-semibold text-brand-blue shadow-xl shadow-black/10 transition-all duration-200 hover:bg-gray-50 hover:shadow-2xl"
              >
                <Link href="/browse">
                  Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-13 rounded-xl border-white/30 bg-white/10 px-8 text-base text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:border-white/50"
              >
                <Link href="/login">Create Free Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-border/40 bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/[0.04] hover:-translate-y-1">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-blue-100 text-brand-blue transition-transform duration-200 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function StepCard({
  step,
  icon,
  title,
  description,
}: {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-border/40 bg-white p-8 text-center shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <span className="inline-block font-mono text-xs font-bold tracking-[0.2em] text-brand-amber">
        STEP {step}
      </span>
      <div className="mx-auto mt-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/10 to-blue-100 text-brand-blue transition-transform duration-200 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mt-6 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-sm text-foreground">
      <Check className="h-4 w-4 shrink-0 text-brand-blue" />
      {children}
    </li>
  );
}
