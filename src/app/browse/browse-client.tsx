"use client";

import { useState, useMemo } from "react";
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
import { Search, SlidersHorizontal, X, ExternalLink, Sparkles } from "lucide-react";
import type { Template } from "@/types/database";

export function BrowseClient({ templates }: { templates: Template[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [style, setStyle] = useState<string>("all");
  const [priceTier, setPriceTier] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popular");

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
      default: // popular
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

  // Quick filter chips for popular categories
  const quickCategories = ["SaaS", "Medical", "Restaurant", "Real Estate", "Startup", "E-commerce"];

  return (
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
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
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
            {filtered.map((template) => (
              <div key={template.id} className="flex flex-col">
                <div className="relative">
                  <TemplateCard template={template} />
                  {template.price_tier === "ultra_premium" && (
                    <span
                      className="absolute left-3 bottom-[3.5rem] z-10 inline-flex items-center gap-1 rounded-full bg-indigo-600 px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-lg shadow-indigo-500/30 ring-1 ring-indigo-400/40"
                    >
                      ✨ Ultra
                    </span>
                  )}
                </div>
                {template.demo_url && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2 rounded-lg border-border/60 hover:bg-brand-blue/5 hover:text-brand-blue transition-all duration-200"
                    asChild
                  >
                    <Link href={template.demo_url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 h-3 w-3" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
