import { Metadata } from 'next'

// Static comparison pages data — populate as needed
const comparisons: Record<string, {
  title: string
  description: string
  competitor: string
}> = {
  // Example: 'code-bonito-vs-tailwindui': { title: 'Code Bonito vs Tailwind UI', description: '...', competitor: 'Tailwind UI' }
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = comparisons[slug]

  if (!data) {
    return {
      title: 'Comparison | Code Bonito',
      description: 'Compare Code Bonito with other design template solutions for AI-built websites.',
    }
  }

  return {
    title: `${data.title} | Code Bonito`,
    description: data.description,
    openGraph: {
      title: `${data.title} | Code Bonito`,
      description: data.description,
      url: `https://codebonito.com/vs/${slug}`,
      siteName: 'Code Bonito',
      type: 'article',
    },
    alternates: {
      canonical: `/vs/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(comparisons).map((slug) => ({ slug }))
}

export default async function VsPage({ params }: Props) {
  const { slug } = await params

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How is Code Bonito different from ${comparisons[slug]?.competitor ?? slug}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Comparison content coming soon."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl w-full text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Comparison</p>
          <h1 className="text-4xl font-bold mb-6">
            {comparisons[slug]?.title ?? slug}
          </h1>
          <p className="text-lg text-muted-foreground">
            Decision page coming soon.
          </p>
          <a
            href="/vs"
            className="mt-8 inline-block text-sm underline underline-offset-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            ← All comparisons
          </a>
        </div>
      </main>
    </>
  )
}
