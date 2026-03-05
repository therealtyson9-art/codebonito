"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Upload } from "lucide-react";

function GenericSite() {
  return (
    <div className="h-full w-full bg-white" style={{ fontFamily: "system-ui, sans-serif" }}>
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 border-b border-gray-200">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 h-5 rounded-md bg-white border border-gray-200 flex items-center px-2">
          <span className="text-[8px] text-gray-400">mywebsite.com</span>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
        <span className="text-[11px] font-bold text-gray-800">MyBusiness</span>
        <div className="flex gap-4">
          {["Home","About","Services","Contact"].map(t=><span key={t} className="text-[8px] text-gray-500">{t}</span>)}
        </div>
        <div className="h-5 w-14 rounded text-[7px] bg-gray-800 text-white flex items-center justify-center">Sign Up</div>
      </div>
      <div className="px-6 py-8 text-center bg-gray-50">
        <p className="text-[15px] font-bold text-gray-800 leading-tight">Welcome to MyBusiness</p>
        <p className="text-[8px] text-gray-500 mt-2 max-w-[220px] mx-auto">We provide the best solutions for your business needs. Get started today.</p>
        <div className="flex gap-2 justify-center mt-3">
          <div className="h-5 w-16 rounded text-[7px] bg-blue-600 text-white flex items-center justify-center">Get Started</div>
          <div className="h-5 w-16 rounded text-[7px] border border-gray-300 text-gray-600 flex items-center justify-center">Learn More</div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="grid grid-cols-3 gap-3">
          {["Feature One","Feature Two","Feature Three"].map(t=>(
            <div key={t} className="p-3 border border-gray-200 rounded bg-white">
              <div className="h-3 w-3 rounded bg-blue-100 mb-1.5" />
              <p className="text-[7px] font-semibold text-gray-700">{t}</p>
              <p className="text-[6px] text-gray-400 mt-0.5">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 py-3">
        <div className="h-14 rounded bg-gray-50 border border-gray-100 flex items-center justify-center">
          <p className="text-[7px] text-gray-400">Trusted by 10,000+ companies worldwide</p>
        </div>
      </div>
    </div>
  );
}

function LuxurySite() {
  return (
    <div className="h-full w-full bg-[#0a0a0a]" style={{ fontFamily: "Georgia, serif" }}>
      <div className="flex items-center gap-2 px-4 py-2 bg-[#111] border-b border-[#222]">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 h-5 rounded-md bg-[#1a1a1a] border border-[#333] flex items-center px-2">
          <span className="text-[8px] text-gray-500">luxuryestates.com</span>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-3 border-b border-[#1a1a1a]">
        <span className="text-[11px] font-bold tracking-[0.15em] text-[#c9a96e]">LUXURY ESTATES</span>
        <div className="flex gap-4">
          {["Properties","About","Gallery","Contact"].map(t=><span key={t} className="text-[8px] text-gray-500 tracking-wider uppercase">{t}</span>)}
        </div>
        <div className="h-5 w-14 rounded text-[7px] bg-[#c9a96e] text-black font-semibold flex items-center justify-center">Inquire</div>
      </div>
      <div className="relative px-6 py-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/10 via-transparent to-[#c9a96e]/5" />
        <p className="text-[8px] uppercase tracking-[0.3em] text-[#c9a96e]/70 mb-2 relative">Exclusive Collection</p>
        <p className="text-[16px] font-bold text-white leading-tight relative" style={{ fontFamily: "Georgia, serif" }}>Where Elegance<br/>Meets Home</p>
        <p className="text-[8px] text-gray-400 mt-2 max-w-[220px] mx-auto relative">Discover curated luxury properties in the world&apos;s most prestigious locations.</p>
        <div className="flex gap-2 justify-center mt-3 relative">
          <div className="h-5 w-20 rounded text-[7px] bg-[#c9a96e] text-black font-semibold flex items-center justify-center">View Properties</div>
          <div className="h-5 w-16 rounded text-[7px] border border-[#c9a96e]/40 text-[#c9a96e] flex items-center justify-center">Our Story</div>
        </div>
      </div>
      <div className="px-6 py-3">
        <div className="grid grid-cols-3 gap-3">
          {[
            {title:"Penthouse Malibu", price:"$12.5M", tag:"Featured"},
            {title:"Villa Côte d'Azur", price:"€8.2M", tag:"New"},
            {title:"Loft Manhattan", price:"$6.8M", tag:"Exclusive"},
          ].map(p=>(
            <div key={p.title} className="rounded-lg bg-[#111] border border-[#222] overflow-hidden">
              <div className="h-10 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] relative">
                <span className="absolute top-1 right-1 text-[5px] bg-[#c9a96e] text-black px-1 rounded font-semibold">{p.tag}</span>
              </div>
              <div className="p-2">
                <p className="text-[7px] font-semibold text-white">{p.title}</p>
                <p className="text-[7px] text-[#c9a96e] font-bold mt-0.5">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 py-3">
        <div className="grid grid-cols-4 gap-2">
          {[{n:"$2B+",l:"Portfolio Value"},{n:"300+",l:"Properties"},{n:"15",l:"Countries"},{n:"98%",l:"Satisfaction"}].map(s=>(
            <div key={s.n} className="text-center py-2 rounded bg-[#111] border border-[#1a1a1a]">
              <p className="text-[9px] font-bold text-[#c9a96e]">{s.n}</p>
              <p className="text-[5px] text-gray-500 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  // Gradient updated via direct DOM ref — no React state re-renders on mousemove
  const gradientRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const mousePosRef = useRef({ x: 50, y: 50 });

  const [sliderPos, setSliderPos] = useState(35);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // Update gradient via RAF + direct DOM (no React re-render)
      mousePosRef.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          const { x, y } = mousePosRef.current;
          if (gradientRef.current) {
            gradientRef.current.style.background = `radial-gradient(ellipse 80% 60% at ${x*0.6+20}% ${y*0.4+10}%, rgba(37,99,235,0.35), transparent), radial-gradient(ellipse 60% 50% at ${100-x*0.4}% ${y*0.5+30}%, rgba(139,92,246,0.3), transparent), radial-gradient(ellipse 50% 40% at ${x*0.3+40}% ${100-y*0.3}%, rgba(245,158,11,0.15), transparent)`;
          }
          rafRef.current = null;
        });
      }
      if (dragging && sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        setSliderPos(Math.max(5, Math.min(95, ((e.clientX - rect.left) / rect.width) * 100)));
      }
    };
    const handleUp = () => setDragging(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [dragging]);

  const handleTouch = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    setSliderPos(Math.max(5, Math.min(95, ((e.touches[0].clientX - rect.left) / rect.width) * 100)));
  };

  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#050510]">
      <div ref={gradientRef} className="absolute inset-0 -z-10"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(37,99,235,0.35), transparent), radial-gradient(ellipse 60% 50% at 70% 55%, rgba(139,92,246,0.3), transparent), radial-gradient(ellipse 50% 40% at 55% 85%, rgba(245,158,11,0.15), transparent)" }}
      />
      <div className="absolute top-[10%] right-[15%] h-[300px] w-[300px] rounded-full bg-brand-blue/20 blur-[120px] animate-float" />
      <div className="absolute bottom-[15%] left-[10%] h-[250px] w-[250px] rounded-full bg-violet-500/15 blur-[100px] animate-float-delayed" />
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
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-gray-500">
            Same AI prompt. Different result.
          </p>
          <div ref={sliderRef}
            className="relative aspect-[16/9] cursor-col-resize overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-brand-blue/10 select-none"
            onMouseDown={() => setDragging(true)}
            onTouchStart={() => setDragging(true)}
            onTouchMove={handleTouch}
            onTouchEnd={() => setDragging(false)}>

            {/* Before (full width behind) */}
            <div className="absolute inset-0">
              <GenericSite />
            </div>

            {/* After (clipped from left) */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100-sliderPos}% 0 0)` }}>
              <LuxurySite />
            </div>

            {/* Dynamic labels */}
            <div className="absolute bottom-3 z-10 pointer-events-none w-full flex justify-between px-4">
              <span className={`text-[10px] sm:text-xs font-mono px-3 py-1 rounded-full shadow-sm transition-opacity duration-300 ${sliderPos > 15 ? "opacity-0" : "opacity-100"} bg-white/90 border border-gray-200 text-gray-500`}>
                Without Code Bonito 😐
              </span>
              <span className={`text-[10px] sm:text-xs font-mono px-3 py-1 rounded-full transition-opacity duration-300 ${sliderPos < 85 ? "opacity-0" : "opacity-100"} bg-white/10 backdrop-blur border border-white/20 text-white/80`}>
                With Code Bonito 🔥
              </span>
            </div>

            {/* Center label that shows based on slider position */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
              <span className={`text-[10px] sm:text-xs font-mono px-3 py-1 rounded-full shadow-sm transition-all duration-300 ${sliderPos <= 15 || sliderPos >= 85 ? "opacity-0" : "opacity-100"}`}
                style={{ background: sliderPos > 50 ? "rgba(10,10,10,0.8)" : "rgba(255,255,255,0.9)", color: sliderPos > 50 ? "#c9a96e" : "#6b7280", border: sliderPos > 50 ? "1px solid rgba(201,169,110,0.3)" : "1px solid rgba(0,0,0,0.1)" }}>
                {sliderPos > 50 ? "With Code Bonito 🔥" : "Without Code Bonito 😐"}
              </span>
            </div>

            {/* Slider handle */}
            <div className="absolute top-0 bottom-0 z-20 w-0.5 bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.4)]" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg shadow-black/30 border border-gray-200">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3L2 8L5 13" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" /><path d="M11 3L14 8L11 13" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" /></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Platform logos */}
        <div className={`mt-16 transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-600">Works with your favorite AI tools</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[{name:"Cursor",c:"hover:text-white"},{name:"v0",c:"hover:text-white"},{name:"Bolt",c:"hover:text-violet-400"},{name:"Lovable",c:"hover:text-pink-400"},{name:"Claude Code",c:"hover:text-amber-400"},{name:"OpenClaw",c:"hover:text-emerald-400"}].map((p)=>(
              <span key={p.name} className={`font-mono text-sm tracking-tight text-gray-500 transition-colors duration-300 ${p.c}`}>{p.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
