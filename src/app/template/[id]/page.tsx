"use client";

import { generatePrompt, type CustomizationData } from "@/lib/prompt-generator";
import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MOCK_TEMPLATES, getDemoUrl } from "@/lib/mock-data";
import { createClient } from "@/lib/supabase/client";
import {
  ArrowLeft,
  Download,
  Calendar,
  ArrowRight,
  Loader2,
  Lock,
  Copy,
  Check,
  ShoppingCart,
} from "lucide-react";
import type { User } from "@supabase/supabase-js";

const PLATFORM_LABELS: Record<string, string> = {
  cursor: "Cursor",
  v0: "v0",
  bolt: "Bolt",
  lovable: "Lovable",
  "claude-code": "Claude Code",
  "openclaw-agent": "AI Agent (OpenClaw)",
};

export default function TemplateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [template, setTemplate] = useState<(typeof MOCK_TEMPLATES)[number] | null>(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [copiedPlatform, setCopiedPlatform] = useState<string | null>(null);
  const [activePlatform, setActivePlatform] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [purchased, setPurchased] = useState(false);
  const [checkingPurchase, setCheckingPurchase] = useState(true);
  const [purchasing, setPurchasing] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [customization, setCustomization] = useState<CustomizationData>({});

  // Fetch template from Supabase, fallback to mock
  useEffect(() => {
    const supabase = createClient();
    async function fetchTemplate() {
      const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
      let found = null;
      if (isUuid) {
        const { data } = await supabase.from("templates").select("*").eq("id", id).maybeSingle();
        found = data;
      }
      if (!found) {
        const { data } = await supabase.from("templates").select("*").eq("slug", id).maybeSingle();
        found = data;
      }
      if (!found) {
        found = MOCK_TEMPLATES.find((t) => t.id === id || t.slug === id) || null;
      }
      setTemplate(found as (typeof MOCK_TEMPLATES)[number] | null);
      if (found && found.platforms?.length > 0) {
        setActivePlatform(found.platforms[0]);
      }
      setLoading(false);
    }
    fetchTemplate();
  }, [id]);

  // Check auth and purchase status
  useEffect(() => {
    if (!template) return;
    const supabase = createClient();
    async function checkStatus() {
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      setUser(currentUser);
      if (currentUser && template) {
        const { data } = await supabase.from("purchases").select("id").eq("user_id", currentUser.id).eq("template_id", template.id).limit(1).maybeSingle();
        setPurchased(!!data);
      }
      setCheckingPurchase(false);
    }
    checkStatus();
    if (searchParams.get("purchased") === "true") {
      setPurchased(true);
    }
  }, [template, searchParams]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-brand-blue" />
      </div>
    );
  }

  if (!template) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Template not found</h1>
          <p className="mt-2 text-muted-foreground">
            The template you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button asChild className="mt-6 bg-brand-blue hover:bg-brand-blue/90 text-white">
            <Link href="/browse">Back to Browse</Link>
          </Button>
        </div>
      </div>
    );
  }

  const isFree = template.price_tier === "free";
  const canCopy = isFree || purchased;

  const prompt = activePlatform
    ? generatePrompt(template as Parameters<typeof generatePrompt>[0], activePlatform, customization)
    : "";

  function handleCopy() {
    if (!activePlatform) return;

    if (isFree) {
      doCopy();
      return;
    }

    if (!user) {
      setShowAuthModal(true);
      return;
    }

    if (!purchased) return;

    doCopy();
  }

  function doCopy() {
    navigator.clipboard.writeText(prompt);
    setCopiedPlatform(activePlatform);
    setTimeout(() => setCopiedPlatform(null), 2000);
  }

  async function handlePurchase() {
    if (!user) {
      router.push(`/login?redirect=/template/${template!.id}`);
      return;
    }

    setPurchasing(true);
    try {
      const res = await fetch("/api/stripe/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateId: template!.id }),
      });

      if (res.status === 401) {
        router.push(`/login?redirect=/template/${template!.id}`);
        return;
      }

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      // Network error
    } finally {
      setPurchasing(false);
    }
  }

  async function handleDownload() {
    setDownloading(true);
    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateId: template!.id }),
      });

      if (res.status === 401) {
        router.push(`/login?redirect=/template/${template!.id}`);
        return;
      }

      if (!res.ok) return;

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const disposition = res.headers.get("Content-Disposition");
      const match = disposition?.match(/filename="?([^"]+)"?/);
      a.download = match?.[1] ?? `codebonito-${template!.slug}.zip`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      // Network error
    } finally {
      setDownloading(false);
    }
  }

  const relatedTemplates = MOCK_TEMPLATES.filter(
    (t) => t.id !== template.id && t.category === template.category
  ).slice(0, 2);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Auth modal overlay */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-md rounded-xl border border-border/60 bg-white p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-foreground">Sign up free to copy</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Create a free account to purchase and copy premium template
              prompts.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild className="flex-1 bg-brand-blue hover:bg-brand-blue/90 text-white">
                <Link href={`/login?redirect=/template/${template.id}`}>
                  Sign Up Free
                </Link>
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowAuthModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Back nav */}
      <Link
        href="/browse"
        className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-brand-blue"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Browse
      </Link>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        {/* Preview */}
        <div className="lg:col-span-3">
          {(() => {
            const demoUrl = getDemoUrl(template.slug);
            if (demoUrl) {
              return (
                <div className="relative overflow-hidden rounded-xl bg-white shadow-lg shadow-black/5">
                  <div className="relative w-full overflow-hidden rounded-t-xl bg-white" style={{ height: "450px" }}>
                    <iframe
                      src={demoUrl}
                      title={template.name + " preview"}
                      className="absolute left-0 top-0 border-0"
                      style={{ width: "1440px", height: "900px", transform: "scale(0.45)", transformOrigin: "top left" }}
                    />
                  </div>
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-t border-border/40 bg-gray-50 px-4 py-2 text-center text-xs text-muted-foreground transition-colors hover:text-brand-blue"
                  >
                    Open full preview ↗
                  </a>
                </div>
              );
            }
            return (
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-50 shadow-lg shadow-black/5">
                <Image
                  src={template.preview_url || "https://placehold.co/800x600/f3f4f6/6b7280?text=Preview"}
                  alt={template.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            );
          })()}

          {/* Platform Tabs + Prompt Preview */}
          <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">
              Personalize Your Prompt
            </h3>

            {/* Customization Form */}
            <div className="mb-6 space-y-3 rounded-xl bg-white p-5 shadow-sm">
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Dental Clinic"
                  value={customization.businessName || ""}
                  onChange={(e) =>
                    setCustomization((prev) => ({ ...prev, businessName: e.target.value }))
                  }
                  className="w-full rounded-lg border border-border/60 bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-muted-foreground">
                  What does it do? (one line)
                </label>
                <input
                  type="text"
                  placeholder="e.g. family dentistry with cosmetic services in Austin, TX"
                  value={customization.businessDescription || ""}
                  onChange={(e) =>
                    setCustomization((prev) => ({ ...prev, businessDescription: e.target.value }))
                  }
                  className="w-full rounded-lg border border-border/60 bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>
            </div>

            <h4 className="mb-3 text-sm font-medium text-muted-foreground">
              Choose your platform
            </h4>

            {/* Tabs */}
            <div className="flex flex-wrap gap-1 rounded-xl bg-gray-100 p-1">
              {template.platforms.map((platform) => (
                <button
                  key={platform}
                  onClick={() => setActivePlatform(platform)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                    activePlatform === platform
                      ? "bg-white text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {PLATFORM_LABELS[platform] || platform}
                </button>
              ))}
            </div>

            {/* Prompt Preview */}
            <div className="relative mt-4 overflow-hidden rounded-xl bg-gray-50 shadow-sm">
              <div className="max-h-48 overflow-hidden p-4">
                <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-muted-foreground">
                  {canCopy
                    ? prompt.slice(0, 600) + (prompt.length > 600 ? "..." : "")
                    : prompt.slice(0, 200)}
                </pre>
              </div>

              {/* Blur overlay for paid unpurchased */}
              {!canCopy && (
                <div className="absolute inset-0 flex items-end rounded-xl bg-gradient-to-t from-gray-50 via-gray-50/95 to-transparent">
                  <div className="w-full p-4 text-center">
                    <Lock className="mx-auto mb-2 h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Purchase to view full prompt
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Button */}
            <div className="mt-4">
              {isFree ? (
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white shadow-sm" onClick={handleCopy}>
                  {copiedPlatform === activePlatform ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy {PLATFORM_LABELS[activePlatform] || activePlatform}{" "}
                      Prompt
                    </>
                  )}
                </Button>
              ) : !user && !checkingPurchase ? (
                <Button
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white shadow-sm"
                  onClick={() => setShowAuthModal(true)}
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Sign up free to copy
                </Button>
              ) : purchased ? (
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white shadow-sm" onClick={handleCopy}>
                  {copiedPlatform === activePlatform ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy {PLATFORM_LABELS[activePlatform] || activePlatform}{" "}
                      Prompt
                    </>
                  )}
                </Button>
              ) : !checkingPurchase ? (
                <Button
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white shadow-sm"
                  onClick={handlePurchase}
                  disabled={purchasing}
                >
                  {purchasing ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <ShoppingCart className="mr-2 h-4 w-4" />
                  )}
                  Buy for $2
                </Button>
              ) : null}
            </div>

            {/* Download ZIP — secondary action */}
            {canCopy && (
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="mt-3 flex w-full items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand-blue"
              >
                {downloading ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Download className="h-3.5 w-3.5" />
                )}
                Download ZIP with design tokens
              </button>
            )}
          </div>
        </div>

        {/* Details Sidebar */}
        <div className="lg:col-span-2">
          <div className="sticky top-24">
            {/* Title & badges */}
            <div>
              <div className="flex items-center gap-2">
                {isFree ? (
                  <Badge className="bg-emerald-500 text-white hover:bg-emerald-600">
                    FREE
                  </Badge>
                ) : (
                  <Badge className="bg-brand-blue text-white">$2</Badge>
                )}
                <Badge variant="outline">{template.category}</Badge>
                {template.style && (
                  <Badge variant="outline">{template.style}</Badge>
                )}
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
                {template.name}
              </h1>
              {purchased && !isFree && (
                <Badge
                  variant="secondary"
                  className="mt-2 bg-emerald-50 text-emerald-700 border border-emerald-200"
                >
                  <Check className="mr-1 h-3 w-3" />
                  Purchased
                </Badge>
              )}
            </div>

            <Separator className="my-6" />

            {/* Description */}
            <p className="leading-relaxed text-muted-foreground">
              {template.description}
            </p>

            <Separator className="my-6" />

            {/* Metadata */}
            <div className="space-y-5">
              {/* Supported Platforms */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                  Supported Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {template.platforms.map((platform) => (
                    <Badge
                      key={platform}
                      variant="secondary"
                      className="text-xs"
                    >
                      {PLATFORM_LABELS[platform] || platform}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Download className="h-4 w-4 text-brand-blue" />
                    <span className="text-xs">Downloads</span>
                  </div>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    {template.downloads_count.toLocaleString()}
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-brand-amber" />
                    <span className="text-xs">Added</span>
                  </div>
                  <p className="mt-1 text-lg font-semibold text-foreground">
                    {new Date(template.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Templates */}
      {relatedTemplates.length > 0 && (
        <div className="mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">
              More {template.category} templates
            </h2>
            <Button asChild variant="ghost" size="sm" className="text-brand-blue hover:text-brand-blue/80 hover:bg-brand-blue/5">
              <Link href="/browse">
                View all <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {relatedTemplates.map((related) => (
              <Link
                key={related.id}
                href={`/template/${related.id}`}
                className="group"
              >
                <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
                    <Image
                      src={
                        related.preview_url ||
                        "https://placehold.co/800x600/f3f4f6/6b7280?text=Preview"
                      }
                      alt={related.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">{related.name}</h3>
                    <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                      {related.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
