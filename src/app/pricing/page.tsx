import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight } from "lucide-react";
import { PLANS } from "@/lib/stripe";

const comparisonFeatures = [
  { name: "Plantillas gratis al mes", free: "1", pro: "Compra cualquiera" },
  { name: "Plantillas web", free: true, pro: true },
  { name: "Plantillas iOS y Android", free: false, pro: true },
  { name: "Archivos Figma", free: false, pro: true },
  { name: "Design tokens y manifest", free: false, pro: true },
  { name: "Acceso al código fuente", free: true, pro: true },
  { name: "Licencia comercial", free: true, pro: true },
  { name: "Soporte prioritario", free: false, pro: true },
  { name: "Acceso anticipado a nuevas plantillas", free: false, pro: true },
  { name: "Herramientas de creador (sube y gana)", free: false, pro: true },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <Badge className="mb-4 border-brand-blue/20 bg-brand-blue-light text-brand-blue">
          Pricing
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Precios simples y transparentes
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          1 plantilla gratis al mes (requiere registro). O compra cualquier
          plantilla individualmente por $2 — sin suscripción.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* Free Plan */}
        <Card className="flex flex-col border-border/60 bg-white shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-foreground">{PLANS.free.name}</CardTitle>
            <CardDescription className="text-base">
              {PLANS.free.description}
            </CardDescription>
            <div className="mt-6">
              <span className="text-6xl font-bold tracking-tight text-foreground">$0</span>
              <span className="ml-1 text-lg text-muted-foreground">
                /month
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pt-4">
            <ul className="space-y-4">
              <PricingFeature>1 plantilla gratis al mes</PricingFeature>
              <PricingFeature>Solo plataforma web</PricingFeature>
              <PricingFeature>Código fuente incluido</PricingFeature>
              <PricingFeature>Licencia comercial</PricingFeature>
              <PricingFeature>Soporte de la comunidad</PricingFeature>
            </ul>
          </CardContent>
          <CardFooter className="pt-6">
            <Button variant="outline" className="w-full h-12 text-base" asChild>
              <Link href="/login">Sign Up Free</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="relative flex flex-col border-brand-blue bg-white shadow-lg shadow-brand-blue/10">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge className="bg-brand-amber text-amber-900 shadow-sm px-4 hover:bg-brand-amber">
              Most Popular
            </Badge>
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-foreground">{PLANS.pro.name}</CardTitle>
            <CardDescription className="text-base">
              {PLANS.pro.description}
            </CardDescription>
            <div className="mt-6">
              <span className="text-6xl font-bold tracking-tight text-foreground">
                ${PLANS.pro.price}
              </span>
              <span className="ml-1 text-lg text-muted-foreground">
                /template
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pt-4">
            <ul className="space-y-4">
              <PricingFeature>Compra cualquier plantilla individualmente</PricingFeature>
              <PricingFeature>Todas las plataformas (Cursor, v0, Bolt, Lovable, Claude Code, OpenClaw)</PricingFeature>
              <PricingFeature>Design tokens y archivos manifest</PricingFeature>
              <PricingFeature>Código fuente incluido</PricingFeature>
              <PricingFeature>Licencia comercial</PricingFeature>
              <PricingFeature>Soporte prioritario</PricingFeature>
              <PricingFeature>Acceso anticipado a nuevas plantillas</PricingFeature>
              <PricingFeature>Herramientas de creador (sube y gana)</PricingFeature>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Suscripción ilimitada ($5/mes) próximamente
            </p>
          </CardContent>
          <CardFooter className="pt-6">
            <Button className="w-full h-12 text-base bg-brand-blue hover:bg-brand-blue/90 text-white shadow-sm" asChild>
              <Link href="/browse">
                Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Feature Comparison */}
      <div className="mx-auto mt-28 max-w-3xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Comparación de planes
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Todo incluido de un vistazo.
        </p>

        <div className="mt-12 overflow-hidden rounded-xl bg-white shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-3 border-b border-border/40 bg-gray-50 px-6 py-4">
            <div className="text-sm font-medium text-muted-foreground">
              Característica
            </div>
            <div className="text-center text-sm font-medium text-foreground">Free</div>
            <div className="text-center text-sm font-medium text-brand-blue">
              Premium
            </div>
          </div>

          {/* Table Rows */}
          {comparisonFeatures.map((feature, i) => (
            <div
              key={feature.name}
              className={`grid grid-cols-3 px-6 py-4 ${
                i < comparisonFeatures.length - 1
                  ? "border-b border-border/40"
                  : ""
              }`}
            >
              <div className="text-sm text-foreground">{feature.name}</div>
              <div className="flex justify-center">
                {typeof feature.free === "boolean" ? (
                  feature.free ? (
                    <Check className="h-4 w-4 text-brand-blue" />
                  ) : (
                    <X className="h-4 w-4 text-gray-300" />
                  )
                ) : (
                  <span className="text-sm text-foreground">{feature.free}</span>
                )}
              </div>
              <div className="flex justify-center">
                {typeof feature.pro === "boolean" ? (
                  feature.pro ? (
                    <Check className="h-4 w-4 text-brand-blue" />
                  ) : (
                    <X className="h-4 w-4 text-gray-300" />
                  )
                ) : (
                  <span className="text-sm font-medium text-brand-blue">
                    {feature.pro}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Individual purchase note */}
      <div className="mx-auto mt-16 max-w-xl rounded-xl bg-brand-blue/5 border border-brand-blue/10 px-6 py-5 text-center">
        <p className="text-sm font-medium text-foreground">
          O compra cualquier plantilla individualmente por $2 — sin suscripción.
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          Pago único. Tuya para siempre. Todas las plataformas incluidas.
        </p>
      </div>

      {/* FAQ */}
      <div className="mx-auto mt-28 max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          ¿Preguntas?
        </h2>
        <p className="mt-4 text-muted-foreground">
          ¿Puedo comprar solo una plantilla? <span className="font-medium text-foreground">Sí, $2 cada una.</span>{" "}
          ¿Incluye actualizaciones?{" "}
          <span className="font-medium text-foreground">Siempre.</span> ¿Puedo usarlas
          comercialmente?{" "}
          <span className="font-medium text-foreground">Por supuesto.</span>
        </p>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/browse">
            Start Browsing <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-sm text-foreground">
      <Check className="h-4 w-4 shrink-0 text-brand-blue" />
      {children}
    </li>
  );
}
