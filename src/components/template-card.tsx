import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Download } from "lucide-react";
import { getDemoUrl } from "@/lib/mock-data";
import type { Template } from "@/types/database";

export function TemplateCard({ template, compact }: { template: Template; compact?: boolean }) {
  const previewClass = compact ? "relative w-full overflow-hidden bg-gray-50" : "relative aspect-[16/10] overflow-hidden bg-gray-50";
  // Scale must ensure 1440px iframe fills container (~400px card in 3-col grid)
  // 400/1440 = 0.278 minimum; using 0.30 so iframe always clips instead of leaving gaps
  const iframeScale = compact ? 0.30 : 0.30;

  return (
    <Link href={`/template/${template.id}`}>
      <Card className="group overflow-hidden border-border/60 bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-brand-blue/10 hover:-translate-y-1.5 hover:ring-2 hover:ring-brand-blue/20">
        <CardHeader className="p-0">
          <div className={previewClass} style={compact ? { aspectRatio: "16/9" } : undefined}>
            {(() => {
              const demoUrl = getDemoUrl(template.slug);
              if (demoUrl) {
                return (
                  <iframe
                    src={demoUrl}
                    title={template.name}
                    className="pointer-events-none absolute left-0 top-0 border-0"
                    style={{ width: "1440px", height: "900px", transform: `scale(${iframeScale})`, transformOrigin: "top left" }}
                    tabIndex={-1}
                    loading="lazy"
                  />
                );
              }
              return (
                <Image
                  src={template.preview_url || "https://placehold.co/800x600/f3f4f6/6b7280?text=Preview"}
                  alt={template.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
              );
            })()}
            {(() => {
              const isNew = Date.now() - new Date(template.created_at).getTime() < 48 * 60 * 60 * 1000;
              return isNew ? (
                <Badge className="absolute left-3 top-3 bg-amber-500 text-white font-mono text-[10px] tracking-wider shadow-sm">
                  NEW
                </Badge>
              ) : null;
            })()}
            {template.price_tier === "pro" ? (
              <Badge className="absolute right-3 top-3 bg-orange-500 text-white font-mono text-[10px] tracking-wider shadow-sm">
                $2
              </Badge>
            ) : (
              <Badge
                className="absolute right-3 top-3 bg-emerald-500 text-white font-mono text-[10px] tracking-wider shadow-sm hover:bg-emerald-600"
              >
                FREE
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold leading-snug text-foreground">{template.name}</h3>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Download className="h-3 w-3" />
              {template.downloads_count.toLocaleString()}
            </div>
          </div>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {template.description}
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-border/40 px-4 py-3">
          <div className="flex gap-1.5">
            <Badge variant="secondary" className="text-xs">
              {template.category}
            </Badge>
            {template.style && (
              <Badge variant="outline" className="text-xs">
                {template.style}
              </Badge>
            )}
          </div>
          {template.price_tier === "pro" ? (
            <span className="inline-flex items-center rounded-lg bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all group-hover:bg-orange-600 group-hover:shadow-md">
              Get Template — $2
            </span>
          ) : (
            <span className="inline-flex items-center rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all group-hover:bg-emerald-600">
              Get Template — Free
            </span>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
