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
import type { Template } from "@/types/database";

export function TemplateCard({ template }: { template: Template }) {
  return (
    <Link href={`/template/${template.id}`}>
      <Card className="group overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        <CardHeader className="p-0">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src={template.preview_url || "https://placehold.co/800x600/1a1a1a/e0e0e0?text=Preview"}
              alt={template.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              unoptimized
            />
            {template.price_tier === "pro" && (
              <Badge className="absolute right-3 top-3">PRO</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-semibold">{template.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
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
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Download className="h-3 w-3" />
            {template.downloads_count.toLocaleString()}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
