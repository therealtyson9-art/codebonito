import type { Metadata } from "next";
import { CursorRulesClient } from "./client";

export const metadata: Metadata = {
  title: "Build Your .cursorrules — Interactive Configurator | Code Bonito",
  description:
    "Choose typography, colors, component style, and animations. Generate a custom .cursorrules file that makes Cursor produce beautiful code — every time.",
  openGraph: {
    title: "Build Your .cursorrules — Interactive Configurator | Code Bonito",
    description:
      "Choose typography, colors, component style, and animations. Generate a custom .cursorrules file that makes Cursor produce beautiful code — every time.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code Bonito — Build Your .cursorrules",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build Your .cursorrules — Interactive Configurator | Code Bonito",
    description:
      "Choose typography, colors, component style, and animations. Generate a custom .cursorrules file that makes Cursor produce beautiful code — every time.",
    images: ["/og-image.png"],
  },
};

export default function CursorRulesPage() {
  return <CursorRulesClient />;
}
