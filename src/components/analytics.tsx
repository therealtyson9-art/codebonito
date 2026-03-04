"use client";

import Script from "next/script";

// GA4 event helpers — call these from any client component
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, params);
  }
}

export function trackViewItem(templateId: string | number, templateName: string, price: number) {
  trackEvent("view_item", {
    currency: "USD",
    value: price,
    items: [{ item_id: String(templateId), item_name: templateName, price }],
  });
}

export function trackPurchase(templateId: string | number, templateName: string, value: number, currency: string, transactionId: string) {
  trackEvent("purchase", {
    transaction_id: transactionId,
    value,
    currency,
    items: [{ item_id: String(templateId), item_name: templateName, price: value }],
  });
  // Also fire FB Pixel Purchase
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Purchase", { value, currency });
  }
}

export function trackCouponApplied(code: string, templateId: string | number) {
  trackEvent("coupon_applied", { coupon: code, item_id: String(templateId) });
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID?.trim();

export function Analytics() {
  return (
    <>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
      {FB_PIXEL_ID && (
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
