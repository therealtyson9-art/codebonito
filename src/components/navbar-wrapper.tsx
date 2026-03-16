"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";

// Routes that should NOT show the navbar (standalone landing pages)
const STANDALONE_ROUTES = ["/free-cursorrules"];

export function NavbarWrapper() {
  const pathname = usePathname();
  if (STANDALONE_ROUTES.some((r) => pathname.startsWith(r))) return null;
  return <Navbar />;
}
