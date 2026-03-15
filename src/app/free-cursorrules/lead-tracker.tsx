"use client";

import { useEffect } from "react";
import { trackEvent } from "@/components/analytics";

/**
 * Fires a FB Pixel `Lead` event whenever the "Download .cursorrules" button
 * is clicked inside this page — without touching the CursorRulesClient source.
 */
export function LeadTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      // Match the download button by its text content
      if (target.closest("button")?.textContent?.includes("Download .cursorrules")) {
        trackEvent("Lead");
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead");
        }
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
