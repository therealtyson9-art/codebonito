import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  DollarSign,
  Users,
  Headphones,
  UserCircle,
  Palette,
  Upload,
  Sparkles,
  Layers,
  Tag,
  Monitor,
} from "lucide-react";
import { EarningsCalculator } from "./earnings-calculator";

export const metadata: Metadata = {
  title: "Creators — Code Bonito",
  description:
    "Create design templates for vibecoders and earn 80% of every sale. Code Bonito handles payments, hosting, and distribution.",
};

export default function CreatorsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-amber/8 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-brand-blue/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-brand-amber/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="secondary"
              className="mb-8 border border-brand-amber/20 bg-brand-amber-light px-4 py-1.5 text-sm font-medium text-amber-800"
            >
              <Sparkles className="mr-1.5 h-3.5 w-3.5 text-brand-amber" />
              Creator Program
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              Create templates.{" "}
              <span className="bg-gradient-to-r from-brand-amber to-amber-500 bg-clip-text text-transparent">
                Earn money.
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              You keep 80% of every sale. We handle payments, hosting, and
              distribution.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 text-base bg-brand-blue hover:bg-brand-blue/90 text-white shadow-md shadow-brand-blue/25"
              >
                <Link href="mailto:creators@codebonito.com">
                  Apply to Become a Creator{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#fafafa] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 border-brand-blue/20 bg-brand-blue-light text-brand-blue">
              How It Works
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Design → Upload → Earn
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three steps to start earning.
            </p>
          </div>
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <StepCard
              step="01"
              icon={<Palette className="h-6 w-6" />}
              title="Design"
              description="Create a design token set — colors, fonts, spacing, style rules. Make it unique."
            />
            <StepCard
              step="02"
              icon={<Upload className="h-6 w-6" />}
              title="Upload"
              description="Submit your template with a preview. We review it and publish it to the marketplace."
            />
            <StepCard
              step="03"
              icon={<DollarSign className="h-6 w-6" />}
              title="Earn"
              description="Get paid every time someone buys your template. 80% goes straight to you."
            />
          </div>
        </div>
      </section>

      {/* Why Code Bonito */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 border-brand-amber/20 bg-brand-amber-light text-amber-800">
              Why Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Why Code Bonito?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The best place to sell design templates to vibecoders.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<DollarSign className="h-5 w-5" />}
              title="80% revenue share"
              description="Industry-leading. Most marketplaces take 50%+. You keep the lion's share."
            />
            <FeatureCard
              icon={<Users className="h-5 w-5" />}
              title="Growing audience"
              description="Thousands of vibecoders looking for unique designs to stand out."
            />
            <FeatureCard
              icon={<Headphones className="h-5 w-5" />}
              title="Zero hassle"
              description="We handle Stripe payments, hosting, and customer support. You just create."
            />
            <FeatureCard
              icon={<UserCircle className="h-5 w-5" />}
              title="Your brand"
              description="Your name on every template you create. Build your reputation as a creator."
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#fafafa] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <StatCard
                icon={<Layers className="h-5 w-5" />}
                value="100+"
                label="Templates"
              />
              <StatCard
                icon={<Tag className="h-5 w-5" />}
                value="20"
                label="Categories"
              />
              <StatCard
                icon={<Monitor className="h-5 w-5" />}
                value="5"
                label="Platforms supported"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 border-brand-blue/20 bg-brand-blue-light text-brand-blue">
              Earnings
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              How much can you earn?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Drag the sliders to estimate your monthly earnings.
            </p>
          </div>
          <div className="mt-16">
            <EarningsCalculator />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fafafa] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 border-brand-amber/20 bg-brand-amber-light text-amber-800">
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Questions?
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-3xl space-y-6">
            <FaqItem
              question="What's a design template?"
              answer="Colors, fonts, spacing rules that AI tools use to build unique websites. Think of it as a design system in a single file."
            />
            <FaqItem
              question="How do I get paid?"
              answer="Monthly via Stripe. $20 minimum payout. We handle all the payment processing."
            />
            <FaqItem
              question="Can I sell on other platforms too?"
              answer="Yes. Non-exclusive. Your templates, your rules."
            />
            <FaqItem
              question="What formats do you accept?"
              answer="JSON token files with a preview image. We'll provide a template and docs to get you started."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-white px-8 py-20 text-center shadow-lg shadow-brand-blue/5 sm:px-16">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-amber/5 via-transparent to-transparent" />
            <div className="absolute top-0 right-0 -z-10 h-40 w-40 rounded-full bg-brand-blue/10 blur-3xl" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Ready to start creating?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Join our creator program and start earning from your design skills.
            </p>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 text-base bg-brand-blue hover:bg-brand-blue/90 text-white shadow-md shadow-brand-blue/25"
              >
                <Link href="mailto:creators@codebonito.com">
                  Apply to Become a Creator{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
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

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-white p-8 text-center shadow-sm">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
        {icon}
      </div>
      <p className="mt-4 text-4xl font-bold tracking-tight text-foreground">
        {value}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h3 className="font-semibold text-foreground">{question}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {answer}
      </p>
    </div>
  );
}
