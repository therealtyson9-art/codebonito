"use client";

import Link from "next/link";
import Image from "next/image";
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
import { Menu, LogOut, LayoutDashboard, Upload, ArrowRight, Dna } from "lucide-react";
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
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-white/80 shadow-sm shadow-black/[0.04] backdrop-blur-xl"
          : "border-b border-transparent bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="transition-opacity duration-200 hover:opacity-80">
            <Image src="/images/logo-light.png" alt="Code Bonito" width={150} height={25} className="h-6 w-auto" priority />
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3.5 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-gray-100 hover:text-foreground"
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
                <Button variant="ghost" className="relative h-9 w-9 rounded-full ring-2 ring-transparent transition-all duration-200 hover:ring-brand-blue/20">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.user_metadata?.avatar_url} />
                    <AvatarFallback className="bg-gradient-to-br from-brand-blue to-blue-400 text-white text-sm font-medium">
                      {user.email?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 rounded-xl shadow-lg">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/upload">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Template
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>
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
                className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                asChild
                className="rounded-xl bg-gradient-to-r from-brand-blue to-blue-500 text-white shadow-md shadow-brand-blue/25 transition-all duration-200 hover:shadow-lg hover:shadow-brand-blue/30 hover:brightness-110"
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
            <Button variant="ghost" size="icon" className="rounded-xl">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-2 pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-lg font-medium text-foreground transition-colors duration-200 hover:bg-gray-100"
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-2 h-px bg-border/60" />
              {user ? (
                <>
                  <Link href="/dashboard" className="rounded-xl px-4 py-3 text-lg font-medium text-foreground transition-colors duration-200 hover:bg-gray-100">
                    Dashboard
                  </Link>
                  <Link href="/upload" className="rounded-xl px-4 py-3 text-lg font-medium text-foreground transition-colors duration-200 hover:bg-gray-100">
                    Upload
                  </Link>
                  <Button variant="outline" onClick={handleSignOut} className="mt-2 rounded-xl">
                    Sign Out
                  </Button>
                </>
              ) : (
                <div className="flex flex-col gap-2 mt-2">
                  <Button asChild variant="outline" className="rounded-xl">
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button
                    asChild
                    className="rounded-xl bg-gradient-to-r from-brand-blue to-blue-500 text-white"
                  >
                    <Link href="/browse">Get Started</Link>
                  </Button>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
