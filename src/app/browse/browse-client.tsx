"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TemplateCard } from "@/components/template-card";
import { CATEGORIES, STYLES } from "@/lib/mock-data";
import { Search, SlidersHorizontal, X } from "lucide-react";
import type { Template } from "@/types/database";

export function BrowseClient({ templates }: { templates: Template[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [style, setStyle] = useState<string>("all");
  const [priceTier, setPriceTier] = useState<string>("all");

  const filtered = useMemo(() => {
    return templates.filter((t) => {
      const matchesSearch =
        !search ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.description?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        category === "all" || t.category === category;
      const matchesStyle = style === "all" || t.style === style;
      const matchesTier =
        priceTier === "all" || t.price_tier === priceTier;
      return matchesSearch && matchesCategory && matchesStyle && matchesTier;
    });
  }, [templates, search, category, style, priceTier]);

  const hasActiveFilters =
    category !== "all" || style !== "all" || priceTier !== "all" || search !== "";

  function clearFilters() {
    setSearch("");
    setCategory("all");
    setStyle("all");
    setPriceTier("all");
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Browse Templates
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Discover {templates.length} hand-crafted, production-ready design
          templates
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-3">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full sm:w-[160px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={style} onValueChange={setStyle}>
              <SelectTrigger className="w-full sm:w-[160px]">
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Styles</SelectItem>
                {STYLES.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={priceTier} onValueChange={setPriceTier}>
              <SelectTrigger className="w-full sm:w-[130px]">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active filters */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="ml-auto h-7 text-xs"
            >
              <X className="mr-1 h-3 w-3" />
              Clear filters
            </Button>
          </div>
        )}
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center py-24 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Search className="h-7 w-7 text-muted-foreground" />
          </div>
          <h3 className="mt-6 text-lg font-semibold">No templates found</h3>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Try adjusting your search or filters to find what you&apos;re
            looking for.
          </p>
          <Button variant="outline" className="mt-6" onClick={clearFilters}>
            Clear all filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      )}
    </div>
  );
}
