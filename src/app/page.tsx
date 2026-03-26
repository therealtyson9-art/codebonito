import { FadeIn } from "@/components/fade-in";
import { Hero } from "@/components/hero";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import { MOCK_TEMPLATES } from "@/lib/mock-data";
import { TemplateCard } from "@/components/template-card";
import { HomeTemplateCard } from "@/components/home-template-card";
import { MobileCTA } from "@/components/mobile-cta";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { CursorLogo, V0Logo, BoltLogo, LovableLogo, ClaudeLogo, OpenClawLogo } from "@/components/platform-logos";

export default function HomePage() {
  const popularTemplates = [...MOCK_TEMPLATES]
    .sort((a, b) => {
      // Ultra Premium first, then by downloads
      const tierOrder = (t: typeof a) => t.price_tier === "ultra_premium" ? 0 : t.price_tier === "pro" ? 1 : 2;
      const tierDiff = tierOrder(a) - tierOrder(b);
      if (tierDiff !== 0) return tierDiff;
      return b.downloads_count - a.downloads_count;
    })
    .slice(0, 6);

  const newThisWeek = [...MOCK_TEMPLATES]
    .filter((t) => Date.now() - new Date(t.created_at).getTime() < 7 * 24 * 60 * 60 * 1000)
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 6);

  return (
    <div className="bg-[#050510]">
      <Hero />
      <MobileCTA />

      {/* Stats bar — dark glassmorphism */}
      <section className="relative -mt-8 z-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.05]">
                <Palette className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-white">{MOCK_TEMPLATES.length}</p>
                <p className="text-sm text-white/40">Unique Templates</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.05]">
                <Code2 className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-white">6</p>
                <p className="text-sm text-white/40">AI Platforms</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.05]">
                <Download className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-white">$2</p>
                <p className="text-sm text-white/40">Per Template</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform logos */}
      <section className="pt-8 pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-white/30">
            Works with your favorite AI tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            <div className="group flex flex-col items-center gap-2">
              <CursorLogo className="h-7 w-7 text-white/30 transition-colors duration-200 group-hover:text-white" />
              <span className="text-[11px] font-medium text-white/30 transition-colors duration-200 group-hover:text-white/70">Cursor</span>
            </div>
            <div className="group flex flex-col items-center gap-2">
              <V0Logo className="h-7 w-7 text-white/30 transition-colors duration-200 group-hover:text-white" />
              <span className="text-[11px] font-medium text-white/30 transition-colors duration-200 group-hover:text-white/70">v0</span>
            </div>
            <div className="group flex flex-col items-center gap-2">
              <BoltLogo className="h-7 w-7 text-white/30 transition-colors duration-200 group-hover:text-violet-400" />
              <span className="text-[11px] font-medium text-white/30 transition-colors duration-200 group-hover:text-violet-400">Bolt</span>
            </div>
            <div className="group flex flex-col items-center gap-2">
              <LovableLogo className="h-7 w-7 text-white/30 transition-colors duration-200 group-hover:text-pink-400" />
              <span className="text-[11px] font-medium text-white/30 transition-colors duration-200 group-hover:text-pink-400">Lovable</span>
            </div>
            <div className="group flex flex-col items-center gap-2">
              <ClaudeLogo className="h-7 w-7 text-white/30 transition-colors duration-200 group-hover:text-amber-400" />
              <span className="text-[11px] font-medium text-white/30 transition-colors duration-200 group-hover:text-amber-400">Claude Code</span>
            </div>
            <div className="group flex flex-col items-center gap-2">
              <OpenClawLogo className="h-7 w-7 opacity-30 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0" />
              <span className="text-[11px] font-medium text-white/30 transition-colors duration-200 group-hover:text-[#ff4d4d]">OpenClaw</span>
            </div>
          </div>
        </div>
      </section>

      <FadeIn>
      {/* Trending Templates */}
      <section className="bg-[#050510] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="mb-4 inline-flex items-center rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs font-semibold text-indigo-400">
                Popular
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl font-heading">
                Trending templates
              </h2>
              <p className="mt-4 text-lg text-white/50">
                The most downloaded templates this month.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden text-indigo-400 hover:text-indigo-300 hover:bg-indigo-400/10 sm:flex">
              <Link href="/browse">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularTemplates.map((template) => (
              <HomeTemplateCard key={template.id} template={template} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="rounded-xl border-white/10 bg-white/[0.05] text-white hover:bg-white/10 hover:text-white">
              <Link href="/browse">
                View all templates <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* New This Week */}
      {newThisWeek.length > 0 && (
        <section className="bg-[#050510] py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <span className="mb-4 inline-flex items-center rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400">
                  Fresh
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl font-heading">
                  New this week
                </h2>
                <p className="mt-4 text-lg text-white/50">
                  Just added — the latest templates for your next project.
                </p>
              </div>
              <Button asChild variant="ghost" className="hidden text-indigo-400 hover:text-indigo-300 hover:bg-indigo-400/10 sm:flex">
                <Link href="/browse">
                  View all <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newThisWeek.map((template) => (
                <HomeTemplateCard key={template.id} template={template} />
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Button asChild variant="outline" className="rounded-xl border-white/10 bg-white/[0.05] text-white hover:bg-white/10 hover:text-white">
                <Link href="/browse">
                  View all templates <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Before/After Slider — Social Proof */}
      <FadeIn>
        <BeforeAfterSlider />
      </FadeIn>

      {/* How It Works */}
      <FadeIn>
      <section className="bg-[#050510] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <span className="mb-3 inline-flex items-center rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400">
              How It Works
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl font-heading">
              Pick &rarr; Copy &rarr; Paste
            </h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
            <StepCard
              step="01"
              icon={<Search className="h-5 w-5" />}
              title="Pick your template"
              description="Browse by category, style, or platform. Find the perfect design for your next project."
            />
            <StepCard
              step="02"
              icon={<Copy className="h-5 w-5" />}
              title="Copy the prompt"
              description="Get a design prompt built for Cursor, v0, Bolt, Lovable, or Claude Code."
            />
            <StepCard
              step="03"
              icon={<Sparkles className="h-5 w-5" />}
              title="Paste and build"
              description="Paste into your AI tool and watch it generate a unique, beautiful website."
            />
          </div>
        </div>
      </section>
      </FadeIn>

      <FadeIn>
      {/* Features */}
      <section className="bg-[#050510] py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs font-semibold text-indigo-400">
              Features
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl font-heading">
              Why Code Bonito?
            </h2>
            <p className="mt-4 text-lg text-white/50">
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
      <section className="bg-[#050510] py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs font-semibold text-indigo-400">
              Pricing
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl font-heading">
              Clear pricing, no surprises
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Try free with 1 template per month. Upgrade to Pro for unlimited access to all templates.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="flex flex-col rounded-2xl border-white/10 bg-white/[0.03] shadow-sm transition-all duration-200 hover:border-white/20">
              <CardHeader>
                <CardTitle className="text-xl text-white">Free</CardTitle>
                <CardDescription className="text-white/40">
                  Try with no commitment
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-white">$0</span>
                  <span className="text-white/40"> /month</span>
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
                <Button variant="outline" className="w-full rounded-xl border-white/10 text-white hover:bg-white/10 hover:text-white" asChild>
                  <Link href="/login">Sign Up Free</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative flex flex-col rounded-2xl border-indigo-400/30 bg-white/[0.05] shadow-lg shadow-indigo-600/[0.08] ring-1 ring-indigo-400/20">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-1 text-xs font-semibold text-white shadow-md shadow-indigo-600/25">
                  Pay Per Template
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">Premium</CardTitle>
                <CardDescription className="text-white/40">
                  Just what you need
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-white">$2</span>
                  <span className="text-white/40"> per template</span>
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
              </CardContent>
              <CardFooter>
                <Link href="/browse" className="group relative w-full">
                  <div className="absolute -inset-1 rounded-xl bg-indigo-600 opacity-20 blur-lg transition-opacity duration-300 group-hover:opacity-50" />
                  <Button className="relative w-full rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/25 transition-all duration-200 hover:bg-indigo-500 hover:shadow-lg">
                    Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-[#050510] to-violet-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-heading">
              Ready to build something that stands out?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/50">
              Join thousands of people creating websites that actually get noticed.
              Stop blending in, start standing out.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/browse" className="group relative">
                <div className="absolute -inset-1 rounded-xl bg-indigo-600 opacity-30 blur-lg transition-opacity duration-300 group-hover:opacity-60" />
                <span className="relative inline-flex h-13 items-center rounded-xl bg-indigo-600 px-8 text-base font-semibold text-white shadow-xl shadow-indigo-600/20 transition-all duration-200 hover:bg-indigo-500">
                  Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-13 rounded-xl border-white/20 bg-white/[0.05] px-8 text-base text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/30 hover:text-white"
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
    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-indigo-400/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:-translate-y-1">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05] text-indigo-400 transition-transform duration-200 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/50">
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
    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition-all duration-300 hover:border-indigo-400/30 hover:-translate-y-1">
      <span className="inline-block font-mono text-xs font-bold tracking-[0.2em] text-indigo-400">
        STEP {step}
      </span>
      <div className="mx-auto mt-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.05] text-indigo-400 transition-transform duration-200 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/50">
        {description}
      </p>
    </div>
  );
}

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-sm text-white/80">
      <Check className="h-4 w-4 shrink-0 text-indigo-400" />
      {children}
    </li>
  );
}
