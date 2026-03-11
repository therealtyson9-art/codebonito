import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Code Bonito vs Other Template Libraries | Comparisons',
  description: 'Compare Code Bonito with other design template solutions. See why unique AI-built website templates beat generic alternatives.',
  alternates: {
    canonical: '/vs',
  },
}

// Add comparison slugs here as pages are created
const comparisons: { slug: string; title: string; description: string }[] = [
  // { slug: 'code-bonito-vs-tailwindui', title: 'Code Bonito vs Tailwind UI', description: '...' },
]

export default function VsIndexPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Comparisons</p>
        <h1 className="text-4xl font-bold mb-4">Code Bonito vs other solutions</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Evaluating your options? Find detailed comparisons between Code Bonito and other design template libraries for AI-built websites.
        </p>

        {comparisons.length === 0 ? (
          <p className="text-muted-foreground">Comparisons coming soon.</p>
        ) : (
          <ul className="space-y-4">
            {comparisons.map((c) => (
              <li key={c.slug}>
                <Link href={`/vs/${c.slug}`} className="group block p-6 rounded-xl border border-border hover:border-foreground/30 transition-colors">
                  <h2 className="font-semibold text-lg group-hover:text-primary transition-colors">{c.title}</h2>
                  <p className="text-muted-foreground text-sm mt-1">{c.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
