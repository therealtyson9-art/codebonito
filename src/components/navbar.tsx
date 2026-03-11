"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogOut, LayoutDashboard, Upload, ArrowRight } from "lucide-react";
import type { User } from "@supabase/supabase-js";

export function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    setUser(null);
    window.location.href = "/";
  }

  const navLinks = [
    { href: "/browse", label: "Browse" },
    { href: "/dna", label: "Clone DNA" },
    { href: "/pricing", label: "Pricing" },
    { href: "/creators", label: "Creators" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-white/[0.07] shadow-lg shadow-black/20 backdrop-blur-xl"
            : "border-white/[0.06] bg-white/[0.03] backdrop-blur-md"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-5">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-0.5 transition-opacity duration-200 hover:opacity-80">
              <span className="text-lg font-bold text-white">Code</span>
              <span className="text-lg font-bold text-indigo-400">Bonito</span>
              <span className="ml-0.5 h-1.5 w-1.5 rounded-full bg-amber-500" />
            </Link>
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3.5 py-2 text-sm font-medium text-white/60 transition-all duration-200 hover:text-white hover:bg-white/[0.06]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full ring-2 ring-transparent transition-all duration-200 hover:ring-indigo-400/30">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.user_metadata?.avatar_url} />
                      <AvatarFallback className="bg-gradient-to-br from-indigo-600 to-indigo-400 text-white text-sm font-medium">
                        {user.email?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 rounded-xl border-white/10 bg-[#0a0a1a] text-white shadow-lg">
                  <DropdownMenuItem asChild className="text-white/80 hover:text-white focus:text-white focus:bg-white/10">
                    <Link href="/dashboard">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="text-white/80 hover:text-white focus:text-white focus:bg-white/10">
                    <Link href="/upload">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Template
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut} className="text-white/80 hover:text-white focus:text-white focus:bg-white/10">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Button
                  asChild
                  variant="ghost"
                  className="text-sm font-medium text-white/60 transition-colors duration-200 hover:text-white hover:bg-transparent"
                >
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button
                  asChild
                  className="rounded-full bg-indigo-600 px-5 text-sm text-white transition-all duration-200 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-600/25"
                >
                  <Link href="/browse">
                    Get Started <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-xl text-white/70 hover:text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-white/10 bg-[#0a0a1a]">
              <div className="flex flex-col gap-2 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-4 py-3 text-lg font-medium text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="my-2 h-px bg-white/10" />
                {user ? (
                  <>
                    <Link href="/dashboard" className="rounded-xl px-4 py-3 text-lg font-medium text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white">
                      Dashboard
                    </Link>
                    <Link href="/upload" className="rounded-xl px-4 py-3 text-lg font-medium text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white">
                      Upload
                    </Link>
                    <Button variant="outline" onClick={handleSignOut} className="mt-2 rounded-xl border-white/20 text-white hover:bg-white/10">
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <div className="flex flex-col gap-2 mt-2">
                    <Button asChild variant="outline" className="rounded-xl border-white/20 text-white hover:bg-white/10">
                      <Link href="/login">Sign In</Link>
                    </Button>
                    <Button
                      asChild
                      className="rounded-xl bg-indigo-600 text-white hover:bg-indigo-500"
                    >
                      <Link href="/browse">Get Started</Link>
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
