"use client";

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
import { Check } from "lucide-react";
import { PLANS } from "@/lib/stripe";

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
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Start free. Upgrade when you need unlimited access.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* Free Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl">{PLANS.free.name}</CardTitle>
            <CardDescription>{PLANS.free.description}</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3">
              <PricingFeature>Access to 5 free templates</PricingFeature>
              <PricingFeature>Basic preview</PricingFeature>
              <PricingFeature>Community support</PricingFeature>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <a href="/browse">Browse Free Templates</a>
            </Button>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="relative flex flex-col border-primary">
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
            Most Popular
          </Badge>
          <CardHeader>
            <CardTitle className="text-xl">{PLANS.pro.name}</CardTitle>
            <CardDescription>{PLANS.pro.description}</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">${PLANS.pro.price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3">
              <PricingFeature>Unlimited template access</PricingFeature>
              <PricingFeature>All platforms included</PricingFeature>
              <PricingFeature>Design tokens & manifest files</PricingFeature>
              <PricingFeature>Priority support</PricingFeature>
              <PricingFeature>New templates every week</PricingFeature>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleCheckout}>
              Get Pro
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-sm">
      <Check className="h-4 w-4 text-primary" />
      {children}
    </li>
  );
}
