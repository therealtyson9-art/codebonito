import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Download, Globe, Smartphone, Monitor, Figma } from "lucide-react";
import type { Template } from "@/types/database";

const platformIcons: Record<string, React.ReactNode> = {
  Web: <Globe className="h-3 w-3" />,
  iOS: <Smartphone className="h-3 w-3" />,
  Android: <Smartphone className="h-3 w-3" />,
  Figma: <Figma className="h-3 w-3" />,
};

export function TemplateCard({ template }: { template: Template }) {
  return (
    <Link href={`/template/${template.id}`}>
      <Card className="group overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        <CardHeader className="p-0">
          <div className="relative aspect-[16/10] overflow-hidden bg-muted">
            <Image
              src={
                template.preview_url ||
                "https://placehold.co/800x600/1a1a1a/e0e0e0?text=Preview"
              }
              alt={template.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
            {template.price_tier === "pro" && (
              <Badge className="absolute right-3 top-3 font-mono text-[10px] tracking-wider">
                PRO
              </Badge>
            )}
            {template.price_tier === "free" && (
              <Badge
                variant="secondary"
                className="absolute right-3 top-3 font-mono text-[10px] tracking-wider"
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
          <div className="flex items-center gap-1.5 text-muted-foreground">
            {template.platforms.map((platform) => (
              <span key={platform} title={platform}>
                {platformIcons[platform] || null}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
