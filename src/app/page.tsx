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
    .slice(0, 3);

  const totalDownloads = MOCK_TEMPLATES.reduce(
    (sum, t) => sum + t.downloads_count,
    0
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/8 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-brand-amber/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-brand-blue/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="secondary"
              className="mb-8 border border-brand-amber/20 bg-brand-amber-light px-4 py-1.5 text-sm font-medium text-amber-800"
            >
              <Sparkles className="mr-1.5 h-3.5 w-3.5 text-brand-amber" />
              1 Free Template/Month + $2 Each
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              Tired of your AI-built websites all looking the{" "}
              <span className="bg-gradient-to-r from-brand-blue to-blue-400 bg-clip-text text-transparent">
                same
              </span>
              ?
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Unique templates that make your website stand out.
              Copy them into your favorite AI tool and you&apos;re done.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-8 text-base bg-brand-blue hover:bg-brand-blue/90 text-white shadow-md shadow-brand-blue/25">
                <Link href="/browse">
                  Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base border-border hover:bg-secondary"
              >
                <Link href="/upload">
                  <Upload className="mr-2 h-4 w-4" />
                  Become a Creator
                </Link>
              </Button>
            </div>
            <div className="mt-14 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10">
                  <Download className="h-3.5 w-3.5 text-brand-blue" />
                </div>
                <span className="font-medium">{totalDownloads.toLocaleString()}+ downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10">
                  <Layers className="h-3.5 w-3.5 text-brand-blue" />
                </div>
                <span className="font-medium">{MOCK_TEMPLATES.length} templates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10">
                  <Code2 className="h-3.5 w-3.5 text-brand-blue" />
                </div>
                <span className="font-medium">6 platforms</span>
              </div>
            </div>
            {/* Platform badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {[
                { name: "Cursor", bg: "bg-gray-900 text-white" },
                { name: "v0", bg: "bg-black text-white" },
                { name: "Bolt", bg: "bg-violet-600 text-white" },
                { name: "Lovable", bg: "bg-pink-500 text-white" },
                { name: "Claude Code", bg: "bg-amber-700 text-white" },
                { name: "OpenClaw", bg: "bg-emerald-600 text-white" },
              ].map((p) => (
                <span
                  key={p.name}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${p.bg}`}
                >
                  {p.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#fafafa] py-28">
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
          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      {/* How It Works */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 border-brand-amber/20 bg-brand-amber-light text-amber-800">
              How It Works
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Pick → Copy → Paste
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three steps to stand out.
            </p>
          </div>
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
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

      {/* Popular Templates */}
      <section className="bg-[#fafafa] py-28">
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
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="outline">
              <Link href="/browse">
                View all templates <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-white py-28">
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
            <Card className="flex flex-col border-border/60 bg-white shadow-sm">
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
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/login">Sign Up Free</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative flex flex-col border-brand-blue bg-white shadow-lg shadow-brand-blue/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-brand-blue text-white shadow-sm px-4">
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
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white shadow-sm" asChild>
                  <Link href="/browse">
                    Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fafafa] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-white px-8 py-20 text-center shadow-lg shadow-brand-blue/5 sm:px-16">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-transparent" />
            <div className="absolute top-0 right-0 -z-10 h-40 w-40 rounded-full bg-brand-amber/10 blur-3xl" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Ready to build something that stands out?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Join thousands of people creating websites that actually get noticed.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-8 text-base bg-brand-blue hover:bg-brand-blue/90 text-white shadow-md shadow-brand-blue/25">
                <Link href="/browse">
                  Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base"
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
    <div className="group rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
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
    <div className="relative rounded-xl bg-white p-8 text-center shadow-sm">
      <span className="font-mono text-xs font-bold tracking-widest text-brand-amber">
        STEP {step}
      </span>
      <div className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
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
