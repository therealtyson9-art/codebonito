"use client";

import { useState } from "react";
import { Dna, Copy, Check, RotateCcw, Loader2, AlertCircle } from "lucide-react";

interface TypeLevel {
  size: string;
  weight: string;
  lineHeight: string;
}

interface DNATokens {
  colors: string[];
  fonts: string[];
  typeScale: {
    h1: TypeLevel;
    h2: TypeLevel;
    h3: TypeLevel;
    body: TypeLevel;
    small: TypeLevel;
  };
  borderRadius: string[];
  shadows: string[];
  spacing: string[];
  personality: string;
  primaryColor: string;
  accentColor: string;
}

interface DNAResult {
  siteName: string;
  tokens: DNATokens;
  generatedPrompt: string;
}

interface DNAError {
  error: string;
  blocked?: boolean;
}

type Result = DNAResult | DNAError | null;

function isError(r: Result): r is DNAError {
  return r !== null && "error" in r;
}

export function DNAExtractor() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result>(null);
  const [copied, setCopied] = useState(false);

  async function handleExtract(e: React.FormEvent) {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      let fetchUrl = url.trim();
      if (!fetchUrl.startsWith("http")) fetchUrl = "https://" + fetchUrl;

      const res = await fetch("/api/dna/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: fetchUrl }),
      });
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ error: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  function handleCopy() {
    if (!result || isError(result)) return;
    navigator.clipboard.writeText(result.generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleReset() {
    setResult(null);
    setUrl("");
  }

  const success = result && !isError(result) ? (result as DNAResult) : null;

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <div className="bg-[#050510] py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Dna className="w-8 h-8 text-orange-400" />
            <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-semibold px-3 py-1 rounded-full">
              Beta
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Clone DNA</h1>
          <p className="text-gray-400 text-lg">
            Extract any website&apos;s design system and turn it into an AI prompt. Paste the URL — get colors, fonts, spacing, and a ready-to-use prompt for Cursor, v0, or Bolt.
          </p>
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-b border-gray-200 py-8 px-4">
        <form onSubmit={handleExtract} className="max-w-2xl mx-auto">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Website URL
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://stripe.com"
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !url.trim()}
              className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Dna className="w-4 h-4" />
                  Extract DNA
                </>
              )}
            </button>
          </div>
          {loading && (
            <p className="mt-2 text-sm text-gray-500">
              Fetching page and analyzing design system with AI…
            </p>
          )}
        </form>
      </div>

      {/* Error state */}
      {result && isError(result) && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-700 font-semibold text-sm">Extraction failed</p>
              <p className="text-red-600 text-sm mt-1">{(result as DNAError).error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {success && (
        <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">
              Design System: {success.siteName}
            </h2>
            <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full capitalize">
              {success.tokens.personality}
            </span>
          </div>

          {/* Colors */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Colors</h3>
            <div className="flex flex-wrap gap-3">
              {success.tokens.colors.map((color, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div
                    className="w-12 h-12 rounded-lg border border-gray-200 shadow-sm"
                    style={{ background: color }}
                  />
                  <span className="text-xs text-gray-500 font-mono">{color}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Typography</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {success.tokens.fonts.map((font, i) => (
                <span key={i} className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-semibold">
                  {font}
                </span>
              ))}
            </div>
            {/* Type scale */}
            {success.tokens.typeScale && (
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider w-16">Level</th>
                      <th className="text-left px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Preview</th>
                      <th className="text-right px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Size</th>
                      <th className="text-right px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Weight</th>
                      <th className="text-right px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Leading</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(Object.entries(success.tokens.typeScale) as [string, { size: string; weight: string; lineHeight: string }][]).map(([level, val]) => (
                      <tr key={level} className="border-b border-gray-100 last:border-0">
                        <td className="px-4 py-2 font-mono text-xs text-gray-400 uppercase">{level}</td>
                        <td className="px-4 py-2 text-gray-900 truncate max-w-[160px]" style={{ fontSize: `clamp(12px, ${val.size}, 22px)`, fontWeight: val.weight, lineHeight: val.lineHeight }}>
                          {level === "h1" ? "The quick brown fox" : level === "h2" ? "Jumps over the lazy" : level === "h3" ? "Dog — 36 times" : "The quick brown fox jumps over the lazy dog."}
                        </td>
                        <td className="px-4 py-2 font-mono text-xs text-gray-500 text-right">{val.size}</td>
                        <td className="px-4 py-2 font-mono text-xs text-gray-500 text-right">{val.weight}</td>
                        <td className="px-4 py-2 font-mono text-xs text-gray-500 text-right">{val.lineHeight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Border Radius */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Border Radius</h3>
            <div className="flex flex-wrap gap-3 items-end">
              {success.tokens.borderRadius.map((r, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div
                    className="w-10 h-10 bg-blue-100 border border-blue-200"
                    style={{ borderRadius: r }}
                  />
                  <span className="text-xs text-gray-500 font-mono">{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Spacing */}
          {success.tokens.spacing?.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Spacing Scale</h3>
              <div className="flex items-end gap-2">
                {success.tokens.spacing.map((s, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className="bg-orange-200 border border-orange-300 w-4"
                      style={{ height: s }}
                    />
                    <span className="text-xs text-gray-500 font-mono">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Generated Prompt */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Generated Prompt</h3>
            <div className="relative">
              <textarea
                readOnly
                value={success.generatedPrompt}
                rows={10}
                className="w-full font-mono text-sm bg-white border border-gray-200 rounded-xl p-4 resize-none focus:outline-none text-gray-800"
              />
              <button
                onClick={handleCopy}
                className={`absolute top-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  copied
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-900 text-white hover:bg-gray-700"
                }`}
              >
                {copied ? (
                  <><Check className="w-3.5 h-3.5" /> Copied!</>
                ) : (
                  <><Copy className="w-3.5 h-3.5" /> Copy Prompt</>
                )}
              </button>
            </div>
          </div>

          {/* Reset */}
          <button
            onClick={handleReset}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Extract another site
          </button>
        </div>
      )}
    </div>
  );
}
