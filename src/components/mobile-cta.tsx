"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after user scrolls past 100px (past the hero CTA)
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#050510]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex items-center gap-3">
        <Link
          href="/browse"
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-gradient-to-r from-brand-blue to-violet-500 text-white font-semibold text-sm shadow-lg shadow-brand-blue/30"
        >
          Browse Templates <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/browse?filter=free"
          className="h-12 px-4 rounded-xl border border-white/20 bg-white/5 text-white/80 text-sm font-medium flex items-center"
        >
          Free
        </Link>
      </div>
    </div>
  );
}
