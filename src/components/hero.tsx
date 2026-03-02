"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Upload } from "lucide-react";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [sliderPos, setSliderPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
      if (dragging && sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        setSliderPos(Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
      }
    };
    const handleUp = () => setDragging(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => { window.removeEventListener("mousemove", handleMove); window.removeEventListener("mouseup", handleUp); };
  }, [dragging]);

  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#050510]">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 -z-10 transition-all duration-[2000ms] ease-out" style={{
        background: `radial-gradient(ellipse 80% 60% at ${mousePos.x*0.6+20}% ${mousePos.y*0.4+10}%, rgba(37,99,235,0.35), transparent), radial-gradient(ellipse 60% 50% at ${100-mousePos.x*0.4}% ${mousePos.y*0.5+30}%, rgba(139,92,246,0.3), transparent), radial-gradient(ellipse 50% 40% at ${mousePos.x*0.3+40}% ${100-mousePos.y*0.3}%, rgba(245,158,11,0.15), transparent)`
      }} />
      <div className="absolute top-[10%] right-[15%] h-[300px] w-[300px] rounded-full bg-brand-blue/20 blur-[120px] animate-float" />
      <div className="absolute bottom-[15%] left-[10%] h-[250px] w-[250px] rounded-full bg-violet-500/15 blur-[100px] animate-float-delayed" />
      <div className="absolute top-[50%] left-[50%] h-[200px] w-[200px] rounded-full bg-brand-amber/10 blur-[80px] animate-float" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 sm:pt-36 lg:px-8">
        <div className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Badge variant="secondary" className="mb-8 border border-brand-amber/30 bg-brand-amber/10 px-4 py-1.5 text-sm font-medium text-amber-300 backdrop-blur-sm">
            <Sparkles className="mr-1.5 h-3.5 w-3.5 text-brand-amber" />
            100+ Unique Templates &middot; $2 Each
          </Badge>
          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]">
            Stop generating{" "}
            <span className="bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 bg-clip-text text-transparent line-through decoration-red-500/50">AI slop</span>
            <br />
            Build{" "}
            <span className="bg-gradient-to-r from-brand-blue via-blue-400 to-violet-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">something beautiful</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            Design templates that make AI-built websites actually unique. Pick one, copy the prompt, paste into your AI tool. Done.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-14 rounded-xl px-10 text-base bg-gradient-to-r from-brand-blue to-violet-500 text-white shadow-lg shadow-brand-blue/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 hover:scale-105">
              <Link href="/browse">Browse Templates <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 rounded-xl px-10 text-base border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105">
              <Link href="/upload"><Upload className="mr-2 h-4 w-4" />Become a Creator</Link>
            </Button>
          </div>
        </div>

        {/* Before/After Slider */}
        <div className={`mx-auto mt-20 max-w-4xl transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-gray-500">Same AI prompt. Different result.</p>
          <div ref={sliderRef} className="relative aspect-[16/9] cursor-col-resize overflow-hidden rounded-2xl border border-white/10 bg-gray-900 shadow-2xl shadow-brand-blue/10 select-none"
            onMouseDown={() => setDragging(true)}
            onTouchMove={(e) => { if (!sliderRef.current) return; const rect = sliderRef.current.getBoundingClientRect(); setSliderPos(Math.max(0, Math.min(100, ((e.touches[0].clientX - rect.left) / rect.width) * 100))); }}>
            {/* Before — Generic */}
            <div className="absolute inset-0 bg-white p-6 sm:p-10">
              <div className="flex items-center gap-2 mb-6"><div className="h-3 w-3 rounded-full bg-red-400" /><div className="h-3 w-3 rounded-full bg-yellow-400" /><div className="h-3 w-3 rounded-full bg-green-400" /><div className="ml-4 h-5 w-48 rounded bg-gray-200" /></div>
              <div className="flex items-center gap-6 mb-4"><div className="h-4 w-16 rounded bg-gray-200" /><div className="h-4 w-16 rounded bg-gray-200" /><div className="h-4 w-16 rounded bg-gray-200" /><div className="ml-auto h-8 w-24 rounded bg-gray-300" /></div>
              <div className="mt-8 text-center"><div className="mx-auto h-6 w-3/4 rounded bg-gray-200 mb-3" /><div className="mx-auto h-4 w-1/2 rounded bg-gray-100 mb-8" /><div className="mx-auto h-10 w-32 rounded bg-gray-300 mb-10" /><div className="grid grid-cols-3 gap-4"><div className="h-20 rounded bg-gray-100" /><div className="h-20 rounded bg-gray-100" /><div className="h-20 rounded bg-gray-100" /></div></div>
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-mono text-gray-400 bg-white/80 px-3 py-1 rounded-full">Without Code Bonito 😐</p>
            </div>
            {/* After — Code Bonito */}
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100-sliderPos}% 0 0)` }}>
              <div className="h-full w-full bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0c0a09] p-6 sm:p-10">
                <div className="flex items-center gap-2 mb-6"><div className="h-3 w-3 rounded-full bg-red-400" /><div className="h-3 w-3 rounded-full bg-yellow-400" /><div className="h-3 w-3 rounded-full bg-green-400" /><div className="ml-4 h-5 w-48 rounded bg-white/10" /></div>
                <div className="flex items-center gap-6 mb-4"><div className="h-4 w-16 rounded bg-white/20" /><div className="h-4 w-16 rounded bg-white/20" /><div className="h-4 w-16 rounded bg-white/20" /><div className="ml-auto h-8 w-24 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500" /></div>
                <div className="mt-8 text-center"><div className="mx-auto h-6 w-3/4 rounded bg-gradient-to-r from-blue-400/40 to-violet-400/40 mb-3" /><div className="mx-auto h-4 w-1/2 rounded bg-white/10 mb-8" /><div className="mx-auto h-10 w-32 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 mb-10 shadow-lg shadow-amber-500/20" /><div className="grid grid-cols-3 gap-4"><div className="h-20 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 ring-1 ring-white/10" /><div className="h-20 rounded-xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 ring-1 ring-white/10" /><div className="h-20 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 ring-1 ring-white/10" /></div></div>
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-mono text-white/70 bg-white/10 backdrop-blur px-3 py-1 rounded-full">With Code Bonito ✨</p>
              </div>
            </div>
            {/* Slider handle */}
            <div className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_12px_rgba(255,255,255,0.5)]" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-black/20">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3L2 8L5 13" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" /><path d="M11 3L14 8L11 13" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" /></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Platform logos */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-600">Works with your favorite AI tools</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[{ name: "Cursor", c: "hover:text-white" }, { name: "v0", c: "hover:text-white" }, { name: "Bolt", c: "hover:text-violet-400" }, { name: "Lovable", c: "hover:text-pink-400" }, { name: "Claude Code", c: "hover:text-amber-400" }, { name: "OpenClaw", c: "hover:text-emerald-400" }].map((p) => (
              <span key={p.name} className={`font-mono text-sm tracking-tight text-gray-500 transition-colors duration-300 ${p.c}`}>{p.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
