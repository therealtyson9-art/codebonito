import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Code<span className="text-primary">Bonito</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Premium design templates for developers and creators. Beautiful,
              production-ready, and fully customizable.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/browse"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Browse Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Creators</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/upload"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Upload Template
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Code Bonito. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
