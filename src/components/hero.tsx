"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#050510]">
      {/* Mesh gradient background */}
      <div
        className="absolute inset-0 animate-mesh-bg"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(99,102,241,0.25), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 60%, rgba(139,92,246,0.2), transparent 70%), radial-gradient(ellipse 40% 50% at 50% 80%, rgba(67,56,202,0.15), transparent 70%)",
          backgroundSize: "200% 200%, 200% 200%, 200% 200%",
        }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 h-2 w-2 bg-indigo-400/60" />
      <div className="absolute top-8 right-8 h-2 w-2 bg-indigo-400/60" />
      <div className="absolute bottom-8 left-8 h-2 w-2 bg-indigo-400/60" />
      <div className="absolute bottom-8 right-8 h-2 w-2 bg-indigo-400/60" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 sm:pt-44 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge pill */}
          <div className="animate-blur-in mb-8 flex justify-center">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.07] px-5 py-2 text-sm font-medium text-white/70 backdrop-blur-sm">
              AI Design Templates
            </span>
          </div>

          {/* Headline */}
          <h1 className="overflow-hidden">
            <span
              className="block text-[48px] font-black uppercase leading-[1.05] tracking-[-0.04em] text-white sm:text-[56px] md:text-[72px] animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Stop generating
            </span>
            <span
              className="block font-instrument-serif italic text-[48px] leading-[1.05] tracking-[-0.02em] sm:text-[56px] md:text-[72px] bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              AI slop.
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/50 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Design templates that make AI-generated websites unique. For Cursor, v0, Bolt, and Lovable.
          </p>

          {/* CTAs */}
          <div
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <Link href="/browse" className="group relative">
              <div className="absolute -inset-1 rounded-full bg-indigo-600 opacity-20 blur-lg transition-opacity duration-300 group-hover:opacity-60" />
              <span className="relative inline-flex h-14 items-center rounded-full bg-indigo-600 px-10 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-600/30">
                Browse Templates
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
            <Link
              href="/dna"
              className="inline-flex h-14 items-center px-6 text-base font-medium text-white/60 transition-colors duration-200 hover:text-white"
            >
              Clone Any Website <span className="ml-1">→</span>
            </Link>
          </div>
        </div>

        {/* Template showcase cards */}
        <div
          className="mx-auto mt-20 max-w-3xl animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="flex items-end justify-center gap-4 sm:gap-6">
            {/* Card 1 — left, slightly rotated */}
            <div className="hidden sm:block w-48 h-56 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-4 shadow-2xl shadow-indigo-600/10 -rotate-6 translate-y-4 transition-transform duration-300 hover:rotate-0 hover:translate-y-0">
              <div className="h-3 w-16 rounded bg-indigo-400/30 mb-3" />
              <div className="h-2 w-full rounded bg-white/10 mb-2" />
              <div className="h-2 w-3/4 rounded bg-white/10 mb-4" />
              <div className="h-16 w-full rounded-lg bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border border-white/5" />
              <div className="mt-3 h-2 w-1/2 rounded bg-white/10" />
              <div className="mt-4 flex gap-2">
                <div className="h-6 w-16 rounded-full bg-indigo-600/40" />
                <div className="h-6 w-12 rounded-full border border-white/10" />
              </div>
            </div>

            {/* Card 2 — center, prominent */}
            <div className="w-56 sm:w-64 h-64 sm:h-72 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f0f23] to-[#1a0a2e] p-5 shadow-2xl shadow-violet-600/15 z-10 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
              </div>
              <div className="h-3 w-20 rounded bg-violet-400/30 mb-3" />
              <div className="h-2 w-full rounded bg-white/10 mb-2" />
              <div className="h-2 w-5/6 rounded bg-white/10 mb-4" />
              <div className="h-24 w-full rounded-lg bg-gradient-to-br from-violet-600/20 to-pink-600/20 border border-white/5 mb-3" />
              <div className="flex gap-2">
                <div className="h-7 flex-1 rounded-lg bg-violet-600/40" />
                <div className="h-7 w-20 rounded-lg border border-white/10" />
              </div>
              <div className="mt-3 h-2 w-2/3 rounded bg-white/10" />
            </div>

            {/* Card 3 — right, slightly rotated */}
            <div className="hidden sm:block w-48 h-56 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a0a1a] to-[#0a1a2e] p-4 shadow-2xl shadow-pink-600/10 rotate-6 translate-y-4 transition-transform duration-300 hover:rotate-0 hover:translate-y-0">
              <div className="h-3 w-14 rounded bg-amber-400/30 mb-3" />
              <div className="h-2 w-full rounded bg-white/10 mb-2" />
              <div className="h-2 w-2/3 rounded bg-white/10 mb-4" />
              <div className="h-16 w-full rounded-lg bg-gradient-to-br from-amber-600/20 to-orange-600/20 border border-white/5" />
              <div className="mt-3 h-2 w-3/5 rounded bg-white/10" />
              <div className="mt-4 flex gap-2">
                <div className="h-6 w-14 rounded-full bg-amber-600/40" />
                <div className="h-6 w-14 rounded-full border border-white/10" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
