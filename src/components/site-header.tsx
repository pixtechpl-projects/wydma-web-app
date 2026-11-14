"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import { LinkButton } from "@/components/link-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-5">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Wydma, strona główna"
        >
          <Image
            src="/branding/wydma-logo.png"
            alt=""
            width={3713}
            height={939}
            priority
            className="h-9 w-auto lg:h-11"
          />
        </Link>

        <nav aria-label="Główne" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`px-4 py-2 text-sm font-semibold text-ink underline-offset-8 ${
                  current
                    ? "underline decoration-ink decoration-2"
                    : "hover:underline hover:decoration-ink/25"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LinkButton
            href="/kontakt"
            size="sm"
            variant="ink"
            className="hidden sm:inline-flex"
          >
            Porozmawiajmy
          </LinkButton>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="lg:hidden"
                />
              }
              aria-label="Otwórz menu"
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="bg-paper">
              <SheetHeader>
                <SheetTitle className="font-heading text-2xl">Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobilne" className="flex flex-col gap-2 px-4">
                {navItems.map((item) => {
                  const current = isCurrent(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      onClick={(event) => {
                        event.preventDefault();
                        go(item.href);
                      }}
                      className={`rounded-2xl px-4 py-3 text-lg font-semibold underline-offset-8 ${
                        current
                          ? "underline decoration-sun decoration-2"
                          : "hover:bg-ink/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
