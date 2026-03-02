import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-[#f3f4f6]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-0.5 text-xl font-bold tracking-tight text-foreground">
              Code<span className="text-brand-blue">Bonito</span>
              <span className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-brand-amber" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Premium design templates for people who want their websites to stand out.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/browse"
                  className="text-sm text-muted-foreground transition-colors hover:text-brand-blue"
                >
                  Browse Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground transition-colors hover:text-brand-blue"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-sm text-muted-foreground transition-colors hover:text-brand-blue"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Creators</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-muted-foreground transition-colors hover:text-brand-blue"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/upload"
                  className="text-sm text-muted-foreground transition-colors hover:text-brand-blue"
                >
                  Upload Template
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border/40 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Code Bonito. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60">
              Built for people who want their websites to stand out.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
