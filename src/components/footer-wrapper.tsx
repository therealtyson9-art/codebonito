"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./footer";

const STANDALONE_ROUTES = ["/free-cursorrules"];

export function FooterWrapper() {
  const pathname = usePathname();
  if (STANDALONE_ROUTES.some((r) => pathname.startsWith(r))) return null;
  return <Footer />;
}
