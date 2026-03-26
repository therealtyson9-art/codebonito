"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TemplateCard } from "@/components/template-card";
import { CATEGORIES, STYLES } from "@/lib/mock-data";
import { Search, X, ExternalLink, Sparkles, Lock, Maximize2, ArrowRight } from "lucide-react";
import type { Template } from "@/types/database";

// ─── Preview Modal ────────────────────────────────────────────────────────────
function PreviewModal({
  template,
  isPro,
  onClose,
}: {
  template: Template;
  isPro: boolean;
  onClose: () => void;
}) {
  const isUltra = template.price_tier === "ultra_premium";
  const locked = isUltra && !isPro;

  // Close on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 flex flex-col w-full max-w-6xl"
        style={{ height: "min(88vh, 900px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between rounded-t-2xl bg-[#0d0d1a] border border-b-0 border-white/10 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <div className="h-3 w-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-sm font-medium text-white/80">{template.name}</span>
            {isUltra && (
              <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-2 py-0.5 text-[11px] font-semibold text-white">
                <Sparkles className="h-2.5 w-2.5" />
                Pro
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {template.demo_url && !locked && (
              <Link
                href={template.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/20 transition-colors"
              >
                <Maximize2 className="h-3 w-3" />
                Full screen
              </Link>
            )}
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content area */}
        <div className="relative flex-1 rounded-b-2xl overflow-hidden border border-white/10">
          {template.demo_url ? (
            <iframe
              src={template.demo_url}
              className="h-full w-full border-0"
              title={`Preview: ${template.name}`}
            />
          ) : (
            /* Fallback: static preview image */
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={template.preview_url ?? "https://placehold.co/1200x800/050510/1a1a2e?text=Preview+unavailable"}
              alt={template.name}
              className="h-full w-full object-cover object-top"
            />
          )}

          {/* Lock overlay — Ultra Premium without Pro */}
          {locked && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/70 backdrop-blur-md">
              <div className="flex flex-col items-center gap-4 text-center px-8 max-w-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600/20 ring-1 ring-indigo-500/40">
                  <Lock className="h-7 w-7 text-indigo-300" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Ultra Premium Template</p>
                  <p className="mt-1 text-sm text-white/60">
                    Unlock all 11 Ultra Premium templates with a Pro subscription
                  </p>
                </div>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 transition-colors"
                >
                  Upgrade to Pro — $6/mo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="text-xs text-white/40">30-day money-back guarantee</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-white/50">
            {template.category} · {template.style}
          </div>
          <Link
            href={`/template/${template.slug ?? template.id}`}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 transition-colors"
          >
            View template
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function BrowseClient({ templates, isPro = false }: { templates: Template[]; isPro?: boolean }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [style, setStyle] = useState<string>("all");
  const [priceTier, setPriceTier] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popular");
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);

  const filtered = useMemo(() => {
    const result = templates.filter((t) => {
      const q = search.toLowerCase();
      const matchesSearch =
        !search ||
        t.name.toLowerCase().includes(q) ||
        t.category?.toLowerCase().includes(q) ||
        t.style?.toLowerCase().includes(q) ||
        t.description?.toLowerCase().includes(q);
      const matchesCategory = category === "all" || t.category === category;
      const matchesStyle = style === "all" || t.style === style;
      const matchesTier = priceTier === "all" || t.price_tier === priceTier;
      return matchesSearch && matchesCategory && matchesStyle && matchesTier;
    });
    switch (sortBy) {
      case "newest":
        result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      case "price-low":
        result.sort((a, b) => (a.price_tier === "free" ? 0 : 2) - (b.price_tier === "free" ? 0 : 2));
        break;
      case "price-high":
        result.sort((a, b) => (b.price_tier === "free" ? 0 : 2) - (a.price_tier === "free" ? 0 : 2));
        break;
      default:
        break;
    }
    return result;
  }, [templates, search, category, style, priceTier, sortBy]);

  const hasActiveFilters = category !== "all" || style !== "all" || priceTier !== "all" || search !== "";

  function clearFilters() {
    setSearch("");
    setCategory("all");
    setStyle("all");
    setPriceTier("all");
    setSortBy("popular");
  }

  const closePreview = useCallback(() => setPreviewTemplate(null), []);

  const quickCategories = ["SaaS", "Medical", "Restaurant", "Real Estate", "Startup", "E-commerce"];

  return (
    <>
      <div className="min-h-screen bg-[#fafafa]">
        {/* Header */}
        <div className="border-b border-border/40 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Badge className="mb-3 border-brand-blue/20 bg-brand-blue-light text-brand-blue">
                  <Sparkles className="mr-1 h-3 w-3" />
                  {templates.length} Templates
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading">
                  Browse Templates
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                  Find the perfect design for your next AI-built website
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="mt-8">
              <div className="relative max-w-xl">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by name, category, or industry..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-12 rounded-xl pl-11 text-base bg-gray-50 border-border/60 focus-visible:ring-brand-blue"
                />
                {search && (
                  <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Quick category chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => setCategory("all")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  category === "all"
                    ? "bg-foreground text-white shadow-sm"
                    : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
                }`}
              >
                All
              </button>
              {quickCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(category === cat ? "all" : cat)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                    category === cat
                      ? "bg-foreground text-white shadow-sm"
                      : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filters bar + Results */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Filter row */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="h-9 w-auto min-w-[140px] rounded-lg bg-white border-border/60 text-sm">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger className="h-9 w-auto min-w-[130px] rounded-lg bg-white border-border/60 text-sm">
                  <SelectValue placeholder="Style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Styles</SelectItem>
                  {STYLES.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={priceTier} onValueChange={setPriceTier}>
                <SelectTrigger className="h-9 w-auto min-w-[110px] rounded-lg bg-white border-border/60 text-sm">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="pro">Premium ($2)</SelectItem>
                  <SelectItem value="ultra_premium">✨ Ultra Premium ($5)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                {filtered.length} template{filtered.length !== 1 ? "s" : ""}
              </span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-9 w-auto min-w-[150px] rounded-lg bg-white border-border/60 text-sm">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low → High</SelectItem>
                  <SelectItem value="price-high">Price: High → Low</SelectItem>
                </SelectContent>
              </Select>
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="h-9 text-xs text-muted-foreground hover:text-foreground">
                  <X className="mr-1 h-3 w-3" />
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center py-24 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">
                <Search className="h-7 w-7 text-muted-foreground" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">No templates found</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Try adjusting your search or filters to find what you&apos;re looking for.
              </p>
              <Button variant="outline" className="mt-6 rounded-xl" onClick={clearFilters}>
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((template) => {
                const isUltra = template.price_tier === "ultra_premium";
                const locked = isUltra && !isPro;
                const hasDemo = Boolean(template.demo_url);
                return (
                  <div key={template.id} className="flex flex-col">
                    <div className="relative group">
                      <TemplateCard template={template} />
                      {/* Ultra Premium Pro badge */}
                      {isUltra && (
                        <span className="absolute left-3 bottom-[3.5rem] z-10 inline-flex items-center gap-1 rounded-full bg-indigo-600 px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-lg shadow-indigo-500/30 ring-1 ring-indigo-400/40">
                          <Sparkles className="h-2.5 w-2.5" />
                          Pro
                        </span>
                      )}
                      {/* Lock overlay for non-Pro users (click goes to pricing) */}
                      {locked && (
                        <Link
                          href="/pricing"
                          className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-xl bg-black/60 backdrop-blur-[2px] transition-opacity hover:bg-black/70"
                        >
                          <div className="flex flex-col items-center gap-2 text-white">
                            <Lock className="h-7 w-7 drop-shadow" />
                            <span className="text-sm font-semibold drop-shadow">Pro only</span>
                            <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium shadow-md">
                              Upgrade for $6/mo
                            </span>
                          </div>
                        </Link>
                      )}
                      {/* Preview hover button — shows on card hover for unlocked templates with demo */}
                      {!locked && hasDemo && (
                        <button
                          onClick={() => setPreviewTemplate(template)}
                          className="absolute inset-0 z-20 flex items-center justify-center rounded-xl bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/40 group-hover:opacity-100"
                          aria-label={`Preview ${template.name}`}
                        >
                          <span className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-lg">
                            <Maximize2 className="h-4 w-4" />
                            Quick Preview
                          </span>
                        </button>
                      )}
                    </div>
                    {/* Action buttons row */}
                    <div className="mt-2 flex gap-2">
                      {hasDemo && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 rounded-lg border-border/60 hover:bg-brand-blue/5 hover:text-brand-blue transition-all duration-200"
                          onClick={() => setPreviewTemplate(template)}
                          disabled={locked}
                        >
                          <Maximize2 className="mr-1.5 h-3 w-3" />
                          Preview
                        </Button>
                      )}
                      {template.demo_url && !locked && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-lg text-muted-foreground hover:text-foreground"
                          asChild
                        >
                          <Link href={template.demo_url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      {previewTemplate && (
        <PreviewModal
          template={previewTemplate}
          isPro={isPro}
          onClose={closePreview}
        />
      )}
    </>
  );
}
