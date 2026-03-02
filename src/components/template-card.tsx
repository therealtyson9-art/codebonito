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

export function TemplateCard({ template }: { template: Template }) {
  return (
    <Link href={`/template/${template.id}`}>
      <Card className="group overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        <CardHeader className="p-0">
          <div className="relative aspect-[16/10] overflow-hidden bg-white">
            {(() => {
              const demoUrl = getDemoUrl(template.slug);
              if (demoUrl) {
                return (
                  <iframe
                    src={demoUrl}
                    title={template.name}
                    className="pointer-events-none absolute left-0 top-0 border-0"
                    style={{ width: "1440px", height: "900px", transform: "scale(0.26)", transformOrigin: "top left" }}
                    tabIndex={-1}
                    loading="lazy"
                  />
                );
              }
              return (
                <Image
                  src={template.preview_url || "https://placehold.co/800x600/1a1a1a/e0e0e0?text=Preview"}
                  alt={template.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
              );
            })()}
            {template.price_tier === "pro" ? (
              <Badge className="absolute right-3 top-3 font-mono text-[10px] tracking-wider">
                $2
              </Badge>
            ) : (
              <Badge
                className="absolute right-3 top-3 bg-green-600 font-mono text-[10px] tracking-wider hover:bg-green-700"
              >
                FREE
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold leading-snug">{template.name}</h3>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Download className="h-3 w-3" />
              {template.downloads_count.toLocaleString()}
            </div>
          </div>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {template.description}
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t px-4 py-3">
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
          <div className="flex items-center gap-1 text-muted-foreground">
            {template.platforms.slice(0, 3).map((platform) => (
              <Badge
                key={platform}
                variant="outline"
                className="px-1.5 py-0 text-[10px] font-normal"
              >
                {platform}
              </Badge>
            ))}
            {template.platforms.length > 3 && (
              <span className="text-[10px]">
                +{template.platforms.length - 3}
              </span>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
