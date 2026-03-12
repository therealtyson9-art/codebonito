"use client";

import { useEffect } from "react";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.setAttribute("data-demo", "true");
    return () => {
      document.body.removeAttribute("data-demo");
    };
  }, []);

  return <>{children}</>;
}
