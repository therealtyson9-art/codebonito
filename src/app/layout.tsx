import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codebonito.com"),
  title: {
    default: "Code Bonito — Unique Design Templates for AI-Built Websites",
    template: "%s | Code Bonito",
  },
  description:
    "Tired of your AI-built websites all looking the same? Unique design templates for Cursor, v0, Bolt, Lovable, and Claude Code. Pick, copy, paste — stand out.",
  keywords: [
    "AI website templates",
    "design templates",
    "Cursor templates",
    "v0 templates",
    "Bolt templates",
    "Lovable templates",
    "Claude Code templates",
    "vibecoder",
    "AI web design",
    "website design prompts",
  ],
  authors: [{ name: "Code Bonito" }],
  creator: "Code Bonito",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codebonito.com",
    siteName: "Code Bonito",
    title: "Code Bonito — Unique Design Templates for AI-Built Websites",
    description:
      "Tired of your AI-built websites all looking the same? 100+ unique design templates. Pick, copy, paste into your favorite AI tool.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code Bonito — Unique Design Templates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Bonito — Unique Design Templates for AI-Built Websites",
    description:
      "Tired of your AI-built websites all looking the same? 100+ unique templates. Pick → Copy → Paste.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
