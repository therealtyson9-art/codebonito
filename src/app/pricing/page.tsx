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
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight } from "lucide-react";

const comparisonFeatures = [
  { name: "Templates per month", free: "1", pro: "Unlimited", individual: "1 (yours forever)" },
  { name: "Platforms included", free: "All", pro: "All", individual: "All" },
  { name: "Optimized prompts", free: true, pro: true, individual: true },
  { name: "Commercial use", free: true, pro: true, individual: true },
  { name: "Priority support", free: false, pro: true, individual: false },
  { name: "New templates first", free: false, pro: true, individual: false },
  { name: "Creator tools", free: false, pro: true, individual: false },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <Badge className="mb-4 border-brand-blue/20 bg-brand-blue-light text-brand-blue">
          Pricing
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Clear pricing, no surprises
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Try free with 1 template per month. Upgrade to Pro for unlimited
          access to all templates.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* Gratis */}
        <Card className="flex flex-col border-border/60 bg-white shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-foreground">Free</CardTitle>
            <CardDescription className="text-base">
              Try with no commitment
            </CardDescription>
            <div className="mt-6">
              <span className="text-6xl font-bold tracking-tight text-foreground">$0</span>
              <span className="ml-1 text-lg text-muted-foreground">
                /month
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pt-4">
            <ul className="space-y-4">
              <PricingFeature>1 free template per month</PricingFeature>
              <PricingFeature>All platforms (Claude, v0, Bolt, Cursor, Lovable)</PricingFeature>
              <PricingFeature>Ready-to-copy prompts</PricingFeature>
              <PricingFeature>Use commercially</PricingFeature>
              <PricingFeature>Discord support</PricingFeature>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Registration required
            </p>
          </CardContent>
          <CardFooter className="pt-6">
            <Button variant="outline" className="w-full h-12 text-base" asChild>
              <Link href="/login">Sign Up Free</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Por Plantilla — highlighted/recommended */}
        <Card className="relative flex flex-col border-brand-blue bg-white shadow-lg shadow-brand-blue/10">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge className="bg-brand-amber text-amber-900 shadow-sm px-4 hover:bg-brand-amber">
              Recommended
            </Badge>
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-foreground">Per Template</CardTitle>
            <CardDescription className="text-base">
              Just what you need
            </CardDescription>
            <div className="mt-6">
              <span className="text-6xl font-bold tracking-tight text-foreground">$2</span>
              <span className="ml-1 text-lg text-muted-foreground">
                /template
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pt-4">
            <ul className="space-y-4">
              <PricingFeature>One single template</PricingFeature>
              <PricingFeature>All platforms (Claude, v0, Bolt, Cursor, Lovable)</PricingFeature>
              <PricingFeature>Yours forever</PricingFeature>
              <PricingFeature>Commercial use included</PricingFeature>
              <PricingFeature>Optimized prompts</PricingFeature>
            </ul>
          </CardContent>
          <CardFooter className="pt-6">
            <Button className="w-full h-12 text-base bg-brand-blue hover:bg-brand-blue/90 text-white shadow-sm" asChild>
              <Link href="/browse">
                Start Exploring <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Pro — coming soon */}
        <Card className="relative flex flex-col border-border/60 bg-white shadow-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge variant="outline" className="border-brand-blue/30 bg-brand-blue-light text-brand-blue shadow-sm px-4">
              Coming Soon
            </Badge>
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-foreground">Pro</CardTitle>
            <CardDescription className="text-base">
              Access everything
            </CardDescription>
            <div className="mt-6">
              <span className="text-6xl font-bold tracking-tight text-foreground">$5</span>
              <span className="ml-1 text-lg text-muted-foreground">
                /month
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pt-4">
            <ul className="space-y-4">
              <PricingFeature>All templates unlimited</PricingFeature>
              <PricingFeature>All 5 major platforms</PricingFeature>
              <PricingFeature>Colors, fonts, and spacing defined</PricingFeature>
              <PricingFeature>Optimized prompts</PricingFeature>
              <PricingFeature>Use commercially</PricingFeature>
              <PricingFeature>Priority support</PricingFeature>
              <PricingFeature>New templates first</PricingFeature>
              <PricingFeature>Creator tools (upload & earn)</PricingFeature>
            </ul>
          </CardContent>
          <CardFooter className="pt-6">
            <Button variant="outline" className="w-full h-12 text-base" disabled>
              Coming Soon
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Feature Comparison */}
      <div className="mx-auto mt-28 max-w-4xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Plan comparison
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Everything included at a glance.
        </p>

        <div className="mt-12 overflow-hidden rounded-xl bg-white shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-4 border-b border-border/40 bg-gray-50 px-6 py-4">
            <div className="text-sm font-medium text-muted-foreground">
              Feature
            </div>
            <div className="text-center text-sm font-medium text-foreground">Free</div>
            <div className="text-center text-sm font-medium text-brand-blue">
              Per Template
            </div>
            <div className="text-center text-sm font-medium text-foreground">
              Pro
            </div>
          </div>

          {/* Table Rows */}
          {comparisonFeatures.map((feature, i) => (
            <div
              key={feature.name}
              className={`grid grid-cols-4 px-6 py-4 ${
                i < comparisonFeatures.length - 1
                  ? "border-b border-border/40"
                  : ""
              }`}
            >
              <div className="text-sm text-foreground">{feature.name}</div>
              <div className="flex justify-center">
                {typeof feature.free === "boolean" ? (
                  feature.free ? (
                    <Check className="h-4 w-4 text-brand-blue" />
                  ) : (
                    <X className="h-4 w-4 text-gray-300" />
                  )
                ) : (
                  <span className="text-sm text-foreground">{feature.free}</span>
                )}
              </div>
              <div className="flex justify-center">
                {typeof feature.individual === "boolean" ? (
                  feature.individual ? (
                    <Check className="h-4 w-4 text-brand-blue" />
                  ) : (
                    <X className="h-4 w-4 text-gray-300" />
                  )
                ) : (
                  <span className="text-sm font-medium text-brand-blue">
                    {feature.individual}
                  </span>
                )}
              </div>
              <div className="flex justify-center">
                {typeof feature.pro === "boolean" ? (
                  feature.pro ? (
                    <Check className="h-4 w-4 text-brand-blue" />
                  ) : (
                    <X className="h-4 w-4 text-gray-300" />
                  )
                ) : (
                  <span className="text-sm text-foreground">{feature.pro}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto mt-28 max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Questions?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Can I cancel anytime? <span className="font-medium text-foreground">Of course.</span>{" "}
          Are updates included?{" "}
          <span className="font-medium text-foreground">Always.</span> Can I use them
          commercially?{" "}
          <span className="font-medium text-foreground">Absolutely.</span>
        </p>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/browse">
            Start Exploring <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
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
