import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Palette,
  Download,
  Zap,
  Code2,
  Layers,
  Sparkles,
  Check,
  Search,
  Copy,
  Upload,
} from "lucide-react";
import { MOCK_TEMPLATES } from "@/lib/mock-data";
import { TemplateCard } from "@/components/template-card";

export default function HomePage() {
  const popularTemplates = [...MOCK_TEMPLATES]
    .sort((a, b) => b.downloads_count - a.downloads_count)
    .slice(0, 3);

  const totalDownloads = MOCK_TEMPLATES.reduce(
    (sum, t) => sum + t.downloads_count,
    0
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/8 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-brand-amber/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-brand-blue/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="secondary"
              className="mb-8 border border-brand-amber/20 bg-brand-amber-light px-4 py-1.5 text-sm font-medium text-amber-800"
            >
              <Sparkles className="mr-1.5 h-3.5 w-3.5 text-brand-amber" />
              1 Free Template/Month + $2 Each
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              ¿Tus webs hechas con IA se ven todas{" "}
              <span className="bg-gradient-to-r from-brand-blue to-blue-400 bg-clip-text text-transparent">
                iguales
              </span>
              ?
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Plantillas únicas que hacen que tu web destaque.
              Cópialas en tu IA favorita y listo.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-8 text-base bg-brand-blue hover:bg-brand-blue/90 text-white shadow-md shadow-brand-blue/25">
                <Link href="/browse">
                  Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base border-border hover:bg-secondary"
              >
                <Link href="/upload">
                  <Upload className="mr-2 h-4 w-4" />
                  Become a Creator
                </Link>
              </Button>
            </div>
            <div className="mt-14 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10">
                  <Download className="h-3.5 w-3.5 text-brand-blue" />
                </div>
                <span className="font-medium">{totalDownloads.toLocaleString()}+ downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10">
                  <Layers className="h-3.5 w-3.5 text-brand-blue" />
                </div>
                <span className="font-medium">{MOCK_TEMPLATES.length} templates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/10">
                  <Code2 className="h-3.5 w-3.5 text-brand-blue" />
                </div>
                <span className="font-medium">6 platforms</span>
              </div>
            </div>
            {/* Platform badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {[
                { name: "Cursor", bg: "bg-gray-900 text-white" },
                { name: "v0", bg: "bg-black text-white" },
                { name: "Bolt", bg: "bg-violet-600 text-white" },
                { name: "Lovable", bg: "bg-pink-500 text-white" },
                { name: "Claude Code", bg: "bg-amber-700 text-white" },
                { name: "OpenClaw", bg: "bg-emerald-600 text-white" },
              ].map((p) => (
                <span
                  key={p.name}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${p.bg}`}
                >
                  {p.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#fafafa] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 border-brand-blue/20 bg-brand-blue-light text-brand-blue">
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              ¿Por qué Code Bonito?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Todo lo que necesitas para crear webs que destacan.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Palette className="h-5 w-5" />}
              title="Diseños Únicos"
              description="Cada plantilla es diferente. Nada de copias baratas o designs aburridos que ya viste mil veces."
            />
            <FeatureCard
              icon={<Download className="h-5 w-5" />}
              title="Listo para Usar"
              description="Recibes todo lo que necesitas: colores, fuentes, textos de ejemplo. Solo copia y pega en tu IA."
            />
            <FeatureCard
              icon={<Zap className="h-5 w-5" />}
              title="Funciona Donde Sea"
              description="Úsalos en Claude, ChatGPT, v0, Cursor, Bolt. La misma plantilla, tu plataforma favorita."
            />
            <FeatureCard
              icon={<Code2 className="h-5 w-5" />}
              title="Solo Copia y Pega"
              description="No necesitas saber programar. Le das el prompt a tu IA y ella hace todo el trabajo técnico."
            />
            <FeatureCard
              icon={<Layers className="h-5 w-5" />}
              title="Todo Definido"
              description="Colores exactos, fuentes, espaciado. Tu IA sabrá exactamente cómo hacer tu web."
            />
            <FeatureCard
              icon={<Sparkles className="h-5 w-5" />}
              title="Siempre Hay Nuevos"
              description="Cada semana agregamos plantillas nuevas. Tu competencia nunca tendrá el mismo diseño."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 border-brand-amber/20 bg-brand-amber-light text-amber-800">
              How It Works
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Elige → Copia → Pega
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tres pasos para destacar.
            </p>
          </div>
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <StepCard
              step="01"
              icon={<Search className="h-6 w-6" />}
              title="Elige tu plantilla favorita"
              description="Explora por categoría, estilo o plataforma. Encuentra el diseño perfecto para tu próximo proyecto."
            />
            <StepCard
              step="02"
              icon={<Copy className="h-6 w-6" />}
              title="Copia el prompt en tu IA"
              description="Obtén un prompt de diseño específico para Cursor, v0, Bolt, Lovable o Claude Code."
            />
            <StepCard
              step="03"
              icon={<Sparkles className="h-6 w-6" />}
              title="Pega y deja que ella haga la magia"
              description="Pega el prompt en tu herramienta de IA y mira cómo genera una web única y hermosa."
            />
          </div>
        </div>
      </section>

      {/* Popular Templates */}
      <section className="bg-[#fafafa] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <Badge className="mb-4 border-brand-blue/20 bg-brand-blue-light text-brand-blue">
                Popular
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                Plantillas populares
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Las más descargadas este mes.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden text-brand-blue hover:text-brand-blue/80 hover:bg-brand-blue/5 sm:flex">
              <Link href="/browse">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="outline">
              <Link href="/browse">
                View all templates <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge className="mb-4 border-brand-blue/20 bg-brand-blue-light text-brand-blue">
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Precios simples y transparentes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Empieza gratis. Compra plantillas cuando quieras.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="flex flex-col border-border/60 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Free</CardTitle>
                <CardDescription>
                  1 plantilla gratis al mes (requiere registro)
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">$0</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <PricingFeature>1 plantilla gratis al mes</PricingFeature>
                  <PricingFeature>Funciona en las 6 plataformas</PricingFeature>
                  <PricingFeature>Copia prompts al instante</PricingFeature>
                  <PricingFeature>Requiere registro</PricingFeature>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/login">Sign Up Free</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="relative flex flex-col border-brand-blue bg-white shadow-lg shadow-brand-blue/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-brand-blue text-white shadow-sm px-4">
                  Pay Per Template
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Premium</CardTitle>
                <CardDescription>
                  Compra cualquier plantilla individualmente
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">$2</span>
                  <span className="text-muted-foreground"> per template</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <PricingFeature>47 plantillas premium</PricingFeature>
                  <PricingFeature>Las 6 plataformas (Cursor, v0, Bolt, Lovable, Claude Code, OpenClaw)</PricingFeature>
                  <PricingFeature>Design tokens y descarga ZIP</PricingFeature>
                  <PricingFeature>Pago único, tuya para siempre</PricingFeature>
                  <PricingFeature>Nuevas plantillas cada semana</PricingFeature>
                </ul>
                <p className="mt-4 text-xs text-muted-foreground">
                  Suscripción ilimitada ($5/mes) próximamente
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white shadow-sm" asChild>
                  <Link href="/browse">
                    Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fafafa] py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-white px-8 py-20 text-center shadow-lg shadow-brand-blue/5 sm:px-16">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-transparent" />
            <div className="absolute top-0 right-0 -z-10 h-40 w-40 rounded-full bg-brand-amber/10 blur-3xl" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              ¿Listo para crear algo único?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Únete a miles de personas creando webs que realmente destacan
              con los prompts de Code Bonito.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-8 text-base bg-brand-blue hover:bg-brand-blue/90 text-white shadow-md shadow-brand-blue/25">
                <Link href="/browse">
                  Browse Templates <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base"
              >
                <Link href="/login">Create Free Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function StepCard({
  step,
  icon,
  title,
  description,
}: {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative rounded-xl bg-white p-8 text-center shadow-sm">
      <span className="font-mono text-xs font-bold tracking-widest text-brand-amber">
        STEP {step}
      </span>
      <div className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
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
