import type { Metadata } from "next";
import { readFile } from "fs/promises";
import { join } from "path";
import { CursorRulesClient } from "./client";

export const metadata: Metadata = {
  title: "Design-First .cursorrules for AI Coding | Code Bonito",
  description:
    "Free cursor rules that make every AI-generated component look professional. Download and drop in your project.",
  openGraph: {
    title: "Design-First .cursorrules for AI Coding | Code Bonito",
    description:
      "Free cursor rules that make every AI-generated component look professional. Download and drop in your project.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code Bonito — Design-First Cursor Rules",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design-First .cursorrules for AI Coding | Code Bonito",
    description:
      "Free cursor rules that make every AI-generated component look professional. Download and drop in your project.",
    images: ["/og-image.png"],
  },
};

async function getCursorRulesContent(): Promise<string> {
  try {
    const filePath = join(process.cwd(), ".cursorrules");
    return await readFile(filePath, "utf-8");
  } catch {
    return "# .cursorrules file not found";
  }
}

export default async function CursorRulesPage() {
  const content = await getCursorRulesContent();
  return <CursorRulesClient content={content} />;
}
