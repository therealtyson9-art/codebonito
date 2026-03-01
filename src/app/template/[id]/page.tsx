"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MOCK_TEMPLATES } from "@/lib/mock-data";
import { ArrowLeft, Download, Monitor, Smartphone } from "lucide-react";

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
          <Button asChild className="mt-4">
            <Link href="/browse">Back to Browse</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/browse"
        className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Browse
      </Link>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Preview */}
        <div className="lg:col-span-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border bg-muted">
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
            <div className="mt-6 flex gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Monitor className="h-4 w-4" />
                Desktop Preview
              </div>
              <div className="relative aspect-[1/2] w-48 overflow-hidden rounded-xl border bg-muted">
                <Image
                  src={template.preview_mobile_url}
                  alt={`${template.name} mobile`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Smartphone className="h-4 w-4" />
                Mobile Preview
              </div>
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold">{template.name}</h1>
              <div className="mt-2 flex gap-2">
                <Badge variant="secondary">{template.category}</Badge>
                {template.style && (
                  <Badge variant="outline">{template.style}</Badge>
                )}
                {template.price_tier === "pro" && <Badge>PRO</Badge>}
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <p className="text-muted-foreground">{template.description}</p>

          <Separator className="my-6" />

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">Platforms</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {template.platforms.map((platform) => (
                  <Badge key={platform} variant="secondary">
                    {platform}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Download className="h-4 w-4" />
              {template.downloads_count.toLocaleString()} downloads
            </div>
          </div>

          <Separator className="my-6" />

          <Button className="w-full" size="lg">
            <Download className="mr-2 h-4 w-4" />
            {template.price_tier === "pro"
              ? "Download (Pro)"
              : "Download Free"}
          </Button>

          {template.price_tier === "pro" && (
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Requires a{" "}
              <Link href="/pricing" className="underline hover:text-foreground">
                Pro subscription
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
