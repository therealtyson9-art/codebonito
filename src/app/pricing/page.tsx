"use client";

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
import { Separator } from "@/components/ui/separator";
import { Check, X, ArrowRight } from "lucide-react";
import { PLANS } from "@/lib/stripe";

const comparisonFeatures = [
  { name: "Monthly template downloads", free: "5", pro: "Unlimited" },
  { name: "Web templates", free: true, pro: true },
  { name: "iOS & Android templates", free: false, pro: true },
  { name: "Figma files", free: false, pro: true },
  { name: "Design tokens & manifest", free: false, pro: true },
  { name: "Source code access", free: true, pro: true },
  { name: "Commercial license", free: true, pro: true },
  { name: "Priority support", free: false, pro: true },
  { name: "Early access to new templates", free: false, pro: true },
  { name: "Creator tools (upload & earn)", free: false, pro: true },
];

export default function PricingPage() {
  async function handleCheckout() {
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch {
      // In production, show toast error
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="outline" className="mb-4">
          Pricing
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Simple, transparent pricing
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Start free with 5 templates a month. Upgrade to Pro for unlimited
          access to every template, all platforms, and premium features.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* Free Plan */}
        <Card className="flex flex-col border-border/40">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">{PLANS.free.name}</CardTitle>
            <CardDescription className="text-base">
              {PLANS.free.description}
            </CardDescription>
            <div className="mt-6">
              <span className="text-6xl font-bold tracking-tight">$0</span>
              <span className="ml-1 text-lg text-muted-foreground">
                /month
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pt-4">
            <ul className="space-y-4">
              <PricingFeature>5 free templates per month</PricingFeature>
              <PricingFeature>Web platform only</PricingFeature>
              <PricingFeature>Source code included</PricingFeature>
              <PricingFeature>Commercial license</PricingFeature>
              <PricingFeature>Community support</PricingFeature>
            </ul>
          </CardContent>
          <CardFooter className="pt-6">
            <Button variant="outline" className="w-full h-12 text-base" asChild>
              <Link href="/browse">Browse Free Templates</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="relative flex flex-col border-primary shadow-lg shadow-primary/5">
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-4">
            Most Popular
          </Badge>
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">{PLANS.pro.name}</CardTitle>
            <CardDescription className="text-base">
              {PLANS.pro.description}
            </CardDescription>
            <div className="mt-6">
              <span className="text-6xl font-bold tracking-tight">
                ${PLANS.pro.price}
              </span>
              <span className="ml-1 text-lg text-muted-foreground">
                /month
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pt-4">
            <ul className="space-y-4">
              <PricingFeature>Unlimited template access</PricingFeature>
              <PricingFeature>All platforms (Web, iOS, Android, Figma)</PricingFeature>
              <PricingFeature>Design tokens & manifest files</PricingFeature>
              <PricingFeature>Source code included</PricingFeature>
              <PricingFeature>Commercial license</PricingFeature>
              <PricingFeature>Priority support</PricingFeature>
              <PricingFeature>Early access to new templates</PricingFeature>
              <PricingFeature>Creator tools (upload & earn)</PricingFeature>
            </ul>
          </CardContent>
          <CardFooter className="pt-6">
            <Button className="w-full h-12 text-base" onClick={handleCheckout}>
              Get Pro <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Feature Comparison */}
      <div className="mx-auto mt-28 max-w-3xl">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Feature comparison
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Everything included at a glance.
        </p>

        <div className="mt-12 overflow-hidden rounded-xl border border-border/40">
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-border/40 bg-card/80 px-6 py-4">
            <div className="text-sm font-medium text-muted-foreground">
              Feature
            </div>
            <div className="text-center text-sm font-medium">Free</div>
            <div className="text-center text-sm font-medium text-primary">
              Pro
            </div>
          </div>

          {/* Table Rows */}
          {comparisonFeatures.map((feature, i) => (
            <div
              key={feature.name}
              className={`grid grid-cols-3 px-6 py-4 ${
                i < comparisonFeatures.length - 1
                  ? "border-b border-border/40"
                  : ""
              }`}
            >
              <div className="text-sm">{feature.name}</div>
              <div className="flex justify-center">
                {typeof feature.free === "boolean" ? (
                  feature.free ? (
                    <Check className="h-4 w-4 text-primary" />
                  ) : (
                    <X className="h-4 w-4 text-muted-foreground/40" />
                  )
                ) : (
                  <span className="text-sm">{feature.free}</span>
                )}
              </div>
              <div className="flex justify-center">
                {typeof feature.pro === "boolean" ? (
                  feature.pro ? (
                    <Check className="h-4 w-4 text-primary" />
                  ) : (
                    <X className="h-4 w-4 text-muted-foreground/40" />
                  )
                ) : (
                  <span className="text-sm font-medium text-primary">
                    {feature.pro}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto mt-28 max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Questions?
        </h2>
        <p className="mt-4 text-muted-foreground">
          Can I cancel anytime? <span className="text-foreground">Yes.</span>{" "}
          Are updates included?{" "}
          <span className="text-foreground">Always.</span> Can I use templates
          commercially?{" "}
          <span className="text-foreground">Absolutely.</span>
        </p>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/browse">
            Start Browsing <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
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
