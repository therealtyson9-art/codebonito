"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { MOCK_TEMPLATES } from "@/lib/mock-data";
import {
  ArrowLeft,
  Download,
  Globe,
  Smartphone,
  Figma,
  Calendar,
  User,
  ArrowRight,
} from "lucide-react";

const platformMeta: Record<string, { icon: React.ReactNode; label: string }> = {
  Web: { icon: <Globe className="h-4 w-4" />, label: "Web" },
  iOS: { icon: <Smartphone className="h-4 w-4" />, label: "iOS" },
  Android: { icon: <Smartphone className="h-4 w-4" />, label: "Android" },
  Figma: { icon: <Figma className="h-4 w-4" />, label: "Figma" },
};

export default function TemplateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const template = MOCK_TEMPLATES.find((t) => t.id === id);

  if (!template) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Template not found</h1>
          <p className="mt-2 text-muted-foreground">
            The template you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button asChild className="mt-6">
            <Link href="/browse">Back to Browse</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedTemplates = MOCK_TEMPLATES.filter(
    (t) => t.id !== template.id && t.category === template.category
  ).slice(0, 2);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back nav */}
      <Link
        href="/browse"
        className="mb-8 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Browse
      </Link>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        {/* Preview */}
        <div className="lg:col-span-3">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border/40 bg-muted">
            <Image
              src={
                template.preview_url ||
                "https://placehold.co/800x600/1a1a1a/e0e0e0?text=Preview"
              }
              alt={template.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {template.preview_mobile_url && (
            <div className="mt-6 flex items-start gap-6">
              <div className="relative aspect-[9/16] w-40 overflow-hidden rounded-xl border border-border/40 bg-muted">
                <Image
                  src={template.preview_mobile_url}
                  alt={`${template.name} mobile`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="pt-2">
                <Badge variant="outline" className="mb-2">
                  Mobile Preview
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Fully responsive design optimized for mobile devices.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Details Sidebar */}
        <div className="lg:col-span-2">
          <div className="sticky top-24">
            {/* Title & badges */}
            <div>
              <div className="flex items-center gap-2">
                {template.price_tier === "pro" ? (
                  <Badge>PRO</Badge>
                ) : (
                  <Badge variant="secondary">FREE</Badge>
                )}
                <Badge variant="outline">{template.category}</Badge>
                {template.style && (
                  <Badge variant="outline">{template.style}</Badge>
                )}
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight">
                {template.name}
              </h1>
            </div>

            <Separator className="my-6" />

            {/* Description */}
            <p className="leading-relaxed text-muted-foreground">
              {template.description}
            </p>

            <Separator className="my-6" />

            {/* Metadata */}
            <div className="space-y-5">
              {/* Platforms */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                  Supported Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {template.platforms.map((platform) => {
                    const meta = platformMeta[platform];
                    return (
                      <div
                        key={platform}
                        className="flex items-center gap-2 rounded-lg border border-border/40 bg-card px-3 py-2 text-sm"
                      >
                        {meta?.icon}
                        {meta?.label || platform}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-border/40 bg-card p-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Download className="h-4 w-4" />
                    <span className="text-xs">Downloads</span>
                  </div>
                  <p className="mt-1 text-lg font-semibold">
                    {template.downloads_count.toLocaleString()}
                  </p>
                </div>
                <div className="rounded-lg border border-border/40 bg-card p-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-xs">Updated</span>
                  </div>
                  <p className="mt-1 text-lg font-semibold">
                    {new Date(template.updated_at).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Download CTA */}
            <Button className="h-12 w-full text-base" size="lg">
              <Download className="mr-2 h-4 w-4" />
              {template.price_tier === "pro"
                ? "Download (Pro)"
                : "Download Free"}
            </Button>

            {template.price_tier === "pro" && (
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Requires a{" "}
                <Link
                  href="/pricing"
                  className="font-medium text-primary hover:underline"
                >
                  Pro subscription ($5/mo)
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Related Templates */}
      {relatedTemplates.length > 0 && (
        <div className="mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">
              More {template.category} templates
            </h2>
            <Button asChild variant="ghost" size="sm">
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
                <div className="overflow-hidden rounded-xl border border-border/40 bg-card transition-all hover:border-primary/50">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={
                        related.preview_url ||
                        "https://placehold.co/800x600/1a1a1a/e0e0e0?text=Preview"
                      }
                      alt={related.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{related.name}</h3>
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
