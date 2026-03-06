import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import { MOCK_TEMPLATES } from "@/lib/mock-data";

const demos: Record<string, ReturnType<typeof dynamic>> = {
  "agency-brutalist": dynamic(() => import("@/app/demo-archive/agency-brutalist")),
  "agency-corporate": dynamic(() => import("@/app/demo-archive/agency-corporate")),
  "agency-luxury": dynamic(() => import("@/app/demo-archive/agency-luxury")),
  "agency-minimalist": dynamic(() => import("@/app/demo-archive/agency-minimalist")),
  "agency-playful": dynamic(() => import("@/app/demo-archive/agency-playful")),
  "blog-brutalist": dynamic(() => import("@/app/demo-archive/blog-brutalist")),
  "blog-corporate": dynamic(() => import("@/app/demo-archive/blog-corporate")),
  "blog-luxury": dynamic(() => import("@/app/demo-archive/blog-luxury")),
  "blog-minimalist": dynamic(() => import("@/app/demo-archive/blog-minimalist")),
  "blog-playful": dynamic(() => import("@/app/demo-archive/blog-playful")),
  "consulting-brutalist": dynamic(() => import("@/app/demo-archive/consulting-brutalist")),
  "consulting-corporate": dynamic(() => import("@/app/demo-archive/consulting-corporate")),
  "consulting-luxury": dynamic(() => import("@/app/demo-archive/consulting-luxury")),
  "consulting-minimalist": dynamic(() => import("@/app/demo-archive/consulting-minimalist")),
  "consulting-playful": dynamic(() => import("@/app/demo-archive/consulting-playful")),
  "dashboard-brutalist": dynamic(() => import("@/app/demo-archive/dashboard-brutalist")),
  "dashboard-corporate": dynamic(() => import("@/app/demo-archive/dashboard-corporate")),
  "dashboard-luxury": dynamic(() => import("@/app/demo-archive/dashboard-luxury")),
  "dashboard-minimalist": dynamic(() => import("@/app/demo-archive/dashboard-minimalist")),
  "dashboard-playful": dynamic(() => import("@/app/demo-archive/dashboard-playful")),
  "docs-brutalist": dynamic(() => import("@/app/demo-archive/docs-brutalist")),
  "docs-corporate": dynamic(() => import("@/app/demo-archive/docs-corporate")),
  "docs-luxury": dynamic(() => import("@/app/demo-archive/docs-luxury")),
  "docs-minimalist": dynamic(() => import("@/app/demo-archive/docs-minimalist")),
  "docs-playful": dynamic(() => import("@/app/demo-archive/docs-playful")),
  "ecommerce-brutalist": dynamic(() => import("@/app/demo-archive/ecommerce-brutalist")),
  "ecommerce-corporate": dynamic(() => import("@/app/demo-archive/ecommerce-corporate")),
  "ecommerce-luxury": dynamic(() => import("@/app/demo-archive/ecommerce-luxury")),
  "ecommerce-minimalist": dynamic(() => import("@/app/demo-archive/ecommerce-minimalist")),
  "ecommerce-playful": dynamic(() => import("@/app/demo-archive/ecommerce-playful")),
  "education-brutalist": dynamic(() => import("@/app/demo-archive/education-brutalist")),
  "education-corporate": dynamic(() => import("@/app/demo-archive/education-corporate")),
  "education-luxury": dynamic(() => import("@/app/demo-archive/education-luxury")),
  "education-minimalist": dynamic(() => import("@/app/demo-archive/education-minimalist")),
  "education-playful": dynamic(() => import("@/app/demo-archive/education-playful")),
  "fitness-brutalist": dynamic(() => import("@/app/demo-archive/fitness-brutalist")),
  "fitness-corporate": dynamic(() => import("@/app/demo-archive/fitness-corporate")),
  "fitness-luxury": dynamic(() => import("@/app/demo-archive/fitness-luxury")),
  "fitness-minimalist": dynamic(() => import("@/app/demo-archive/fitness-minimalist")),
  "fitness-playful": dynamic(() => import("@/app/demo-archive/fitness-playful")),
  "food-brutalist": dynamic(() => import("@/app/demo-archive/food-brutalist")),
  "food-corporate": dynamic(() => import("@/app/demo-archive/food-corporate")),
  "food-luxury": dynamic(() => import("@/app/demo-archive/food-luxury")),
  "food-minimalist": dynamic(() => import("@/app/demo-archive/food-minimalist")),
  "food-playful": dynamic(() => import("@/app/demo-archive/food-playful")),
  "landing-brutalist": dynamic(() => import("@/app/demo-archive/landing-brutalist")),
  "landing-corporate": dynamic(() => import("@/app/demo-archive/landing-corporate")),
  "landing-luxury": dynamic(() => import("@/app/demo-archive/landing-luxury")),
  "landing-minimalist": dynamic(() => import("@/app/demo-archive/landing-minimalist")),
  "landing-playful": dynamic(() => import("@/app/demo-archive/landing-playful")),
  "legal-brutalist": dynamic(() => import("@/app/demo-archive/legal-brutalist")),
  "legal-corporate": dynamic(() => import("@/app/demo-archive/legal-corporate")),
  "legal-luxury": dynamic(() => import("@/app/demo-archive/legal-luxury")),
  "legal-minimalist": dynamic(() => import("@/app/demo-archive/legal-minimalist")),
  "legal-playful": dynamic(() => import("@/app/demo-archive/legal-playful")),
  "medical-brutalist": dynamic(() => import("@/app/demo-archive/medical-brutalist")),
  "medical-corporate": dynamic(() => import("@/app/demo-archive/medical-corporate")),
  "medical-luxury": dynamic(() => import("@/app/demo-archive/medical-luxury")),
  "medical-minimalist": dynamic(() => import("@/app/demo-archive/medical-minimalist")),
  "medical-playful": dynamic(() => import("@/app/demo-archive/medical-playful")),
  "portfolio-brutalist": dynamic(() => import("@/app/demo-archive/portfolio-brutalist")),
  "portfolio-corporate": dynamic(() => import("@/app/demo-archive/portfolio-corporate")),
  "portfolio-luxury": dynamic(() => import("@/app/demo-archive/portfolio-luxury")),
  "portfolio-minimalist": dynamic(() => import("@/app/demo-archive/portfolio-minimalist")),
  "portfolio-playful": dynamic(() => import("@/app/demo-archive/portfolio-playful")),
  "realestate-brutalist": dynamic(() => import("@/app/demo-archive/realestate-brutalist")),
  "realestate-corporate": dynamic(() => import("@/app/demo-archive/realestate-corporate")),
  "realestate-luxury": dynamic(() => import("@/app/demo-archive/realestate-luxury")),
  "realestate-minimalist": dynamic(() => import("@/app/demo-archive/realestate-minimalist")),
  "realestate-playful": dynamic(() => import("@/app/demo-archive/realestate-playful")),
  "restaurant-brutalist": dynamic(() => import("@/app/demo-archive/restaurant-brutalist")),
  "restaurant-corporate": dynamic(() => import("@/app/demo-archive/restaurant-corporate")),
  "restaurant-luxury": dynamic(() => import("@/app/demo-archive/restaurant-luxury")),
  "restaurant-minimalist": dynamic(() => import("@/app/demo-archive/restaurant-minimalist")),
  "restaurant-playful": dynamic(() => import("@/app/demo-archive/restaurant-playful")),
  "saas-brutalist": dynamic(() => import("@/app/demo-archive/saas-brutalist")),
  "saas-corporate": dynamic(() => import("@/app/demo-archive/saas-corporate")),
  "saas-luxury": dynamic(() => import("@/app/demo-archive/saas-luxury")),
  "saas-minimalist": dynamic(() => import("@/app/demo-archive/saas-minimalist")),
  "saas-playful": dynamic(() => import("@/app/demo-archive/saas-playful")),
  "startup-brutalist": dynamic(() => import("@/app/demo-archive/startup-brutalist")),
  "startup-corporate": dynamic(() => import("@/app/demo-archive/startup-corporate")),
  "startup-luxury": dynamic(() => import("@/app/demo-archive/startup-luxury")),
  "startup-minimalist": dynamic(() => import("@/app/demo-archive/startup-minimalist")),
  "startup-playful": dynamic(() => import("@/app/demo-archive/startup-playful")),
  "tech-brutalist": dynamic(() => import("@/app/demo-archive/tech-brutalist")),
  "tech-corporate": dynamic(() => import("@/app/demo-archive/tech-corporate")),
  "tech-luxury": dynamic(() => import("@/app/demo-archive/tech-luxury")),
  "tech-minimalist": dynamic(() => import("@/app/demo-archive/tech-minimalist")),
  "tech-playful": dynamic(() => import("@/app/demo-archive/tech-playful")),
  "travel-brutalist": dynamic(() => import("@/app/demo-archive/travel-brutalist")),
  "travel-corporate": dynamic(() => import("@/app/demo-archive/travel-corporate")),
  "travel-luxury": dynamic(() => import("@/app/demo-archive/travel-luxury")),
  "travel-minimalist": dynamic(() => import("@/app/demo-archive/travel-minimalist")),
  "travel-playful": dynamic(() => import("@/app/demo-archive/travel-playful")),
  "wellness-brutalist": dynamic(() => import("@/app/demo-archive/wellness-brutalist")),
  "wellness-corporate": dynamic(() => import("@/app/demo-archive/wellness-corporate")),
  "wellness-luxury": dynamic(() => import("@/app/demo-archive/wellness-luxury")),
  "wellness-minimalist": dynamic(() => import("@/app/demo-archive/wellness-minimalist")),
  "wellness-playful": dynamic(() => import("@/app/demo-archive/wellness-playful")),
};

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const DemoComponent = demos[slug];
  if (!DemoComponent) notFound();

  // Look up template to get the ID and price for the CTA
  const template = MOCK_TEMPLATES.find(t => t.slug === slug);
  const templateId = template?.id;
  const isFree = template?.price_tier !== "pro";
  const label = isFree ? "Get this prompt — Free" : "Get this prompt — $2";
  const ctaStyle = isFree
    ? "background:#10b981;color:white"
    : "background:#f97316;color:white";

  return (
    <div style={{ position: "relative" }}>
      <DemoComponent />
      {/* Sticky purchase banner */}
      {templateId && (
        <div style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: "rgba(5,5,16,0.92)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ color: "white", fontWeight: 600, fontSize: "14px", fontFamily: "Inter,sans-serif" }}>
              {template?.name ?? slug}
            </span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", fontFamily: "Inter,sans-serif" }}>
              Design template for Cursor, v0, Bolt &amp; more
            </span>
          </div>
          <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
            <Link href="/" style={{
              padding: "8px 14px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.7)",
              fontSize: "13px",
              fontFamily: "Inter,sans-serif",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
              Browse all
            </Link>
            <Link href={`/template/${templateId}`} style={{
              padding: "8px 18px",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "13px",
              fontFamily: "Inter,sans-serif",
              textDecoration: "none",
              whiteSpace: "nowrap",
              background: isFree ? "#10b981" : "#f97316",
              color: "white",
            }}>
              {label}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
