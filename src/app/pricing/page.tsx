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

const comparisonFeatures = [
  { name: "Plantillas por mes", free: "1", pro: "Ilimitadas", individual: "1 (tuya para siempre)" },
  { name: "Plataformas incluidas", free: "Todas", pro: "Todas", individual: "Todas" },
  { name: "Prompts optimizados", free: true, pro: true, individual: true },
  { name: "Uso comercial", free: true, pro: true, individual: true },
  { name: "Soporte prioritario", free: false, pro: true, individual: false },
  { name: "Plantillas nuevas primero", free: false, pro: true, individual: false },
  { name: "Herramientas creador", free: false, pro: true, individual: false },
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
          Precios claros, sin sorpresas
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Prueba gratis con 1 plantilla al mes. Actualiza a Pro para acceso
          ilimitado a todas las plantillas.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* Gratis */}
        <Card className="flex flex-col border-border/60 bg-white shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-foreground">Gratis</CardTitle>
            <CardDescription className="text-base">
              Prueba sin compromiso
            </CardDescription>
            <div className="mt-6">
              <span className="text-6xl font-bold tracking-tight text-foreground">$0</span>
              <span className="ml-1 text-lg text-muted-foreground">
                /mes
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pt-4">
            <ul className="space-y-4">
              <PricingFeature>1 plantilla gratis al mes</PricingFeature>
              <PricingFeature>Todas las plataformas (Claude, v0, Bolt, Cursor, Lovable)</PricingFeature>
              <PricingFeature>Prompts listos para copiar</PricingFeature>
              <PricingFeature>Úsala comercialmente</PricingFeature>
              <PricingFeature>Soporte por Discord</PricingFeature>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Requiere registro
            </p>
          </CardContent>
          <CardFooter className="pt-6">
            <Button variant="outline" className="w-full h-12 text-base" asChild>
              <Link href="/login">Registrarse Gratis</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Por Plantilla — highlighted/recommended */}
        <Card className="relative flex flex-col border-brand-blue bg-white shadow-lg shadow-brand-blue/10">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge className="bg-brand-amber text-amber-900 shadow-sm px-4 hover:bg-brand-amber">
              Recomendado
            </Badge>
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-foreground">Por Plantilla</CardTitle>
            <CardDescription className="text-base">
              Solo lo que necesitas
            </CardDescription>
            <div className="mt-6">
              <span className="text-6xl font-bold tracking-tight text-foreground">$2</span>
              <span className="ml-1 text-lg text-muted-foreground">
                /plantilla
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pt-4">
            <ul className="space-y-4">
              <PricingFeature>Una sola plantilla</PricingFeature>
              <PricingFeature>Todas las plataformas (Claude, v0, Bolt, Cursor, Lovable)</PricingFeature>
              <PricingFeature>Tuya para siempre</PricingFeature>
              <PricingFeature>Uso comercial incluido</PricingFeature>
              <PricingFeature>Prompts optimizados</PricingFeature>
            </ul>
          </CardContent>
          <CardFooter className="pt-6">
            <Button className="w-full h-12 text-base bg-brand-blue hover:bg-brand-blue/90 text-white shadow-sm" asChild>
              <Link href="/browse">
                Empezar a Explorar <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Pro — coming soon */}
        <Card className="relative flex flex-col border-border/60 bg-white shadow-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge variant="outline" className="border-brand-blue/30 bg-brand-blue-light text-brand-blue shadow-sm px-4">
              Próximamente
            </Badge>
          </div>
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-foreground">Pro</CardTitle>
            <CardDescription className="text-base">
              Acceso a todo
            </CardDescription>
            <div className="mt-6">
              <span className="text-6xl font-bold tracking-tight text-foreground">$5</span>
              <span className="ml-1 text-lg text-muted-foreground">
                /mes
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 pt-4">
            <ul className="space-y-4">
              <PricingFeature>Todas las plantillas ilimitadas</PricingFeature>
              <PricingFeature>Las 5 plataformas principales</PricingFeature>
              <PricingFeature>Colores, fuentes y espaciado definidos</PricingFeature>
              <PricingFeature>Prompts optimizados</PricingFeature>
              <PricingFeature>Úsalas comercialmente</PricingFeature>
              <PricingFeature>Soporte prioritario</PricingFeature>
              <PricingFeature>Plantillas nuevas primero</PricingFeature>
              <PricingFeature>Herramientas de creador (sube y gana)</PricingFeature>
            </ul>
          </CardContent>
          <CardFooter className="pt-6">
            <Button variant="outline" className="w-full h-12 text-base" disabled>
              Próximamente
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Feature Comparison */}
      <div className="mx-auto mt-28 max-w-4xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Comparación de planes
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          Todo incluido de un vistazo.
        </p>

        <div className="mt-12 overflow-hidden rounded-xl bg-white shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-4 border-b border-border/40 bg-gray-50 px-6 py-4">
            <div className="text-sm font-medium text-muted-foreground">
              Característica
            </div>
            <div className="text-center text-sm font-medium text-foreground">Gratis</div>
            <div className="text-center text-sm font-medium text-brand-blue">
              Por Plantilla
            </div>
            <div className="text-center text-sm font-medium text-foreground">
              Pro
            </div>
          </div>

          {/* Table Rows */}
          {comparisonFeatures.map((feature, i) => (
            <div
              key={feature.name}
              className={`grid grid-cols-4 px-6 py-4 ${
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
                {typeof feature.individual === "boolean" ? (
                  feature.individual ? (
                    <Check className="h-4 w-4 text-brand-blue" />
                  ) : (
                    <X className="h-4 w-4 text-gray-300" />
                  )
                ) : (
                  <span className="text-sm font-medium text-brand-blue">
                    {feature.individual}
                  </span>
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
                  <span className="text-sm text-foreground">{feature.pro}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto mt-28 max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          ¿Preguntas?
        </h2>
        <p className="mt-4 text-muted-foreground">
          ¿Puedo cancelar cuando quiera? <span className="font-medium text-foreground">Claro.</span>{" "}
          ¿Las actualizaciones están incluidas?{" "}
          <span className="font-medium text-foreground">Siempre.</span> ¿Puedo usarlas
          comercialmente?{" "}
          <span className="font-medium text-foreground">Por supuesto.</span>
        </p>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/browse">
            Empezar a Explorar <ArrowRight className="ml-2 h-4 w-4" />
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
