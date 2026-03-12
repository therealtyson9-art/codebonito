import Link from "next/link";
import Image from "next/image";
import { getDemoUrl } from "@/lib/mock-data";
import type { Template } from "@/types/database";

export function HomeTemplateCard({ template }: { template: Template }) {
  const iframeScale = 0.30;
  const demoUrl = getDemoUrl(template.slug);

  return (
    <Link href={`/template/${template.id}`} className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a14]">
      {/* Preview */}
      {demoUrl ? (
        <iframe
          src={demoUrl}
          title={template.name}
          className="pointer-events-none absolute top-0 border-0"
          style={{
            width: "1440px",
            height: "1080px",
            transform: `scale(${iframeScale})`,
            transformOrigin: "top center",
            left: "50%",
            marginLeft: "-720px",
          }}
          tabIndex={-1}
          loading="lazy"
        />
      ) : (
        <Image
          src={template.preview_url || "https://placehold.co/800x600/0a0a14/1a1a2e?text="}
          alt={template.name}
          fill
          className="object-cover"
          unoptimized
        />
      )}

      {/* Hover overlay — name + category */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="p-4">
          <h3 className="text-sm font-semibold text-white">{template.name}</h3>
          <span className="mt-1 inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/60 backdrop-blur-sm">
            {template.category}
          </span>
        </div>
      </div>

      {/* Subtle border glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-indigo-400/0 transition-all duration-300 group-hover:border-indigo-400/30 group-hover:shadow-lg group-hover:shadow-indigo-500/10" />
    </Link>
  );
}
