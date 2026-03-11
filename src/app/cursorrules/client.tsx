"use client";

import { useState } from "react";
import Link from "next/link";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-200"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function CodeBlock({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1e1e2e]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-xs text-white/40 font-[family-name:var(--font-jetbrains-mono)]">
          .cursorrules
        </span>
        <CopyButton text={content} />
      </div>
      <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
        <table className="w-full">
          <tbody>
            {lines.map((line, i) => (
              <tr key={i} className="hover:bg-white/5">
                <td className="px-4 py-0 text-right text-white/20 text-xs font-[family-name:var(--font-jetbrains-mono)] select-none w-12 align-top leading-[1.7]">
                  {i + 1}
                </td>
                <td className="px-4 py-0 text-sm font-[family-name:var(--font-jetbrains-mono)] leading-[1.7] whitespace-pre-wrap break-words">
                  <LineContent line={line} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LineContent({ line }: { line: string }) {
  if (line.startsWith("##")) {
    return <span className="text-[#89b4fa] font-bold">{line}</span>;
  }
  if (line.startsWith("#")) {
    return <span className="text-[#cba6f7] font-bold">{line}</span>;
  }
  if (line.startsWith("- ")) {
    return (
      <span className="text-[#a6e3a1]">
        <span className="text-[#f9e2af]">- </span>
        {line.slice(2)}
      </span>
    );
  }
  if (line.startsWith("###")) {
    return <span className="text-[#94e2d5] font-semibold">{line}</span>;
  }
  return <span className="text-white/70">{line}</span>;
}

const features = [
  {
    icon: "Aa",
    title: "Typography Rules",
    description:
      "Two font families, precise tracking, specific sizes. Never generic.",
  },
  {
    icon: "◆",
    title: "Color System",
    description: "Max 6 colors, exact hex values. No Tailwind defaults.",
  },
  {
    icon: "▸",
    title: "Animation Specs",
    description:
      'Framer Motion + CSS with exact easing curves. Not just "add animations."',
  },
];

export function CursorRulesClient({ content }: { content: string }) {
  return (
    <div className="bg-[#fafafa] text-[#1f2937]">
      {/* Hero */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-8">
            <span className="bg-black/5 border border-black/5 rounded-full px-4 py-1.5 text-xs uppercase tracking-wide font-medium text-[#1f2937]/60">
              Free Download
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-inter)] font-black text-[36px] md:text-[56px] lg:text-[72px] tracking-[-0.04em] leading-[1.05] mb-6">
            Design-First{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2563eb, #f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Cursor Rules
            </span>
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#1f2937]/60 mb-12 max-w-xl mx-auto">
            Drop this file in your project. Every AI-generated component will
            look like a designer built it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/api/cursorrules/download"
              className="group relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-white bg-[#2563eb] transition-all duration-200 hover:scale-105 active:scale-[0.97]"
              style={{
                boxShadow: "0 0 30px rgba(37, 99, 235, 0.4)",
              }}
            >
              <span className="absolute -inset-1 bg-[#2563eb] rounded-full blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-200" />
              <span className="relative flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download .cursorrules
              </span>
            </a>
            <Link
              href="/browse"
              className="inline-flex items-center gap-1 rounded-full px-8 py-4 text-sm font-medium text-[#1f2937]/70 hover:text-[#1f2937] bg-black/5 border border-black/5 transition-all duration-200 hover:scale-105 active:scale-[0.97]"
            >
              Browse Templates →
            </Link>
          </div>
        </div>
      </section>

      {/* Code Preview */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-inter)] font-bold text-[24px] md:text-[32px] tracking-[-0.02em] text-center mb-4">
            What&apos;s inside
          </h2>
          <p className="text-center text-[#1f2937]/60 text-sm mb-12">
            Typography, colors, spacing, components, animations — every detail
            specified.
          </p>
          <CodeBlock content={content} />
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white border border-black/5 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(37,99,235,0.08)] hover:border-[#2563eb]/20"
                style={{
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                }}
              >
                <div className="text-[#2563eb] text-2xl mb-4 font-[family-name:var(--font-jetbrains-mono)] font-bold">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-[#1f2937]/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-inter)] font-bold text-[24px] md:text-[36px] tracking-[-0.02em] mb-4">
            Want more?
          </h2>
          <p className="text-[#1f2937]/60 text-sm md:text-base mb-4">
            Browse 100+ design templates →
          </p>
          <p className="text-[#1f2937]/40 text-xs mb-12">
            Each template includes prompts for Cursor, v0, Bolt, and Lovable.
          </p>
          <Link
            href="/browse"
            className="group relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium text-white bg-[#2563eb] transition-all duration-200 hover:scale-105 active:scale-[0.97]"
            style={{
              boxShadow: "0 0 30px rgba(37, 99, 235, 0.4)",
            }}
          >
            <span className="absolute -inset-1 bg-[#2563eb] rounded-full blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-200" />
            <span className="relative">Browse Templates →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
