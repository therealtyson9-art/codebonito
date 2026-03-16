import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Analytics } from "@/components/analytics";
import { CursorRulesClient } from "../cursorrules/client";
import { LeadTracker } from "./lead-tracker";

export const metadata: Metadata = {
  title: "Free .cursorrules Generator — Make AI Build Beautiful UIs | Code Bonito",
  description:
    "Generate a custom .cursorrules file for Cursor, v0, Bolt, Claude, and Lovable in 30 seconds. Define your exact design system — typography, colors, animations. Free download.",
};

export default function FreeCursorRulesPage() {
  return (
    <div className="min-h-screen bg-[#050510] text-white">
      <Analytics />
      <LeadTracker />

      {/* ── Logo bar ── */}
      <header className="flex items-center justify-center px-6 pt-8 pb-0">
        <Link href="https://codebonito.com" className="opacity-80 hover:opacity-100 transition-opacity">
          <Image src="/images/logo-dark.png" alt="Code Bonito" width={150} height={25} className="h-7 w-auto" priority />
        </Link>
      </header>

      {/* ── Hero ── */}
      <section className="bg-[#050510] px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          {/* Badge */}
          <span className="mb-6 inline-block rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-400">
            Free Tool
          </span>

          {/* H1 */}
          <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Generate your{" "}
            <span className="text-indigo-400">.cursorrules</span>{" "}
            in&nbsp;30 seconds
          </h1>

          {/* Subheadline */}
          <p className="mb-8 text-lg leading-relaxed text-gray-300 sm:text-xl">
            Stop writing generic prompts. Define your exact design system —
            typography, colors, animations — and make AI build beautiful UIs
            every time.
          </p>

          {/* Benefits */}
          <ul className="mb-6 inline-flex flex-col gap-3 text-left text-base text-gray-300">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-green-400">✓</span>
              Works with Cursor, v0, Bolt, Claude, and Lovable
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-green-400">✓</span>
              Exact CSS values — not vague instructions
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-green-400">✓</span>
              Download free, no credit card required
            </li>
          </ul>

          {/* Trust line */}
          <p className="text-sm text-gray-500">
            No credit card · No fluff · Just results
          </p>
        </div>
      </section>

      {/* ── Generator ── */}
      <section className="bg-[#050510] px-4 pb-16">
        <Suspense
          fallback={
            <div className="flex h-64 items-center justify-center text-gray-500">
              Loading generator…
            </div>
          }
        >
          <CursorRulesClient />
        </Suspense>
      </section>

      {/* ── Social Proof ── */}
      <section className="bg-[#050510] px-6 py-10 text-center">
        <p className="text-sm text-gray-500">
          11 Ultra Premium templates · Tested on 4 platforms · Trusted by
          Cursor, v0 &amp; Bolt users
        </p>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#050510] px-6 pb-24 pt-10 text-center">
        <div className="mx-auto max-w-lg">
          <p className="mb-6 text-xl font-semibold text-white">
            Want more? Unlock 11 Ultra Premium design templates with Pro
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-[#050510]"
          >
            <Sparkles className="h-5 w-5" />
            Unlock Pro Templates
          </Link>
          <p className="mt-4 text-sm text-gray-500">30-day money-back guarantee</p>
        </div>
      </section>
    </div>
  );
}
