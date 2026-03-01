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
  Package,
  Rocket,
} from "lucide-react";
import { MOCK_TEMPLATES } from "@/lib/mock-data";

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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,_oklch(0.5_0.2_270)_0%,_transparent_50%)] opacity-10" />
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="secondary"
              className="mb-8 px-4 py-1.5 text-sm font-medium"
            >
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Launch Special — Pro for $5/mo
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
              Stop building{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                generic
              </span>{" "}
              AI websites
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Premium, hand-crafted design templates for developers who care
              about aesthetics. Production-ready code, design tokens, and
              multi-platform support.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-8 text-base">
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
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span>{totalDownloads.toLocaleString()}+ downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                <span>{MOCK_TEMPLATES.length} templates</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4" />
                <span>4 platforms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border/40 py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Why Code Bonito?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to ship beautiful products, faster.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Palette className="h-5 w-5" />}
              title="Curated Designs"
              description="Every template is hand-picked and reviewed for quality, accessibility, and production-readiness. No filler."
            />
            <FeatureCard
              icon={<Download className="h-5 w-5" />}
              title="Instant Downloads"
              description="Download templates as ZIP files with design tokens, assets, component code, and full documentation."
            />
            <FeatureCard
              icon={<Zap className="h-5 w-5" />}
              title="Multi-Platform"
              description="Templates that work across Web, iOS, Android, and Figma. Build once, deploy everywhere."
            />
            <FeatureCard
              icon={<Code2 className="h-5 w-5" />}
              title="Production-Ready Code"
              description="Clean, typed, and well-structured code. Copy-paste into your project and start customizing immediately."
            />
            <FeatureCard
              icon={<Layers className="h-5 w-5" />}
              title="Design Tokens"
              description="Every template ships with design tokens — colors, typography, spacing — for consistent theming across platforms."
            />
            <FeatureCard
              icon={<Sparkles className="h-5 w-5" />}
              title="Weekly Additions"
              description="New templates added every week by our community of vetted creators. Fresh designs, always."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border/40 bg-card/50 py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              How It Works
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Three steps to beautiful
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From browse to build in under a minute.
            </p>
          </div>
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <StepCard
              step="01"
              icon={<Search className="h-6 w-6" />}
              title="Browse & Filter"
              description="Search by category, style, or platform. Find the perfect template for your next project."
            />
            <StepCard
              step="02"
              icon={<Package className="h-6 w-6" />}
              title="Download Package"
              description="Get the full template package — source code, design tokens, assets, and documentation."
            />
            <StepCard
              step="03"
              icon={<Rocket className="h-6 w-6" />}
              title="Ship It"
              description="Drop into your project, customize the tokens, and deploy. You're live in minutes."
            />
          </div>
        </div>
      </section>

      {/* Popular Templates */}
      <section className="border-t border-border/40 py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <Badge variant="outline" className="mb-4">
                Popular
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Trending templates
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The most downloaded templates this month.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden sm:flex">
              <Link href="/browse">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularTemplates.map((template) => (
              <Link
                key={template.id}
                href={`/template/${template.id}`}
                className="group"
              >
                <div className="overflow-hidden rounded-xl border border-border/40 bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={template.preview_url || ""}
                      alt={template.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {template.price_tier === "pro" && (
                      <Badge className="absolute right-3 top-3">PRO</Badge>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold">{template.name}</h3>
                    <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                      {template.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <Badge variant="secondary" className="text-xs">
                          {template.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {template.style}
                        </Badge>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Download className="h-3 w-3" />
                        {template.downloads_count.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
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
      <section className="border-t border-border/40 bg-card/50 py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4">
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start free. Upgrade when you need more.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="flex flex-col border-border/40">
              <CardHeader>
                <CardTitle className="text-xl">Free</CardTitle>
                <CardDescription>
                  Perfect for trying out templates
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <PricingFeature>5 free templates per month</PricingFeature>
                  <PricingFeature>Web platform only</PricingFeature>
                  <PricingFeature>Basic preview</PricingFeature>
                  <PricingFeature>Community support</PricingFeature>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/browse">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative flex flex-col border-primary">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-xl">Pro</CardTitle>
                <CardDescription>
                  For serious developers and teams
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold">$5</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <PricingFeature>Unlimited template access</PricingFeature>
                  <PricingFeature>All platforms (Web, iOS, Android, Figma)</PricingFeature>
                  <PricingFeature>Design tokens & manifest files</PricingFeature>
                  <PricingFeature>Priority support</PricingFeature>
                  <PricingFeature>New templates every week</PricingFeature>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/pricing">
                    Get Pro <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40 py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card px-8 py-20 text-center sm:px-16">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Ready to build something beautiful?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Join thousands of developers shipping stunning projects with Code
              Bonito templates.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-8 text-base">
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
    <div className="group rounded-xl border border-border/40 bg-card p-8 transition-colors hover:border-primary/30">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
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
    <div className="relative rounded-xl border border-border/40 bg-card p-8 text-center">
      <span className="font-mono text-xs font-bold tracking-widest text-primary/50">
        STEP {step}
      </span>
      <div className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-sm">
      <Check className="h-4 w-4 shrink-0 text-primary" />
      {children}
    </li>
  );
}
