"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { primaryCta, primaryNav } from "@/content/navigation";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

/** Routes whose first viewport is a charcoal hero — inverse header until scroll */
const DARK_HERO_ROUTES = new Set([
  "/",
  "/story",
  "/work",
  "/impact",
  "/journal",
  "/work-with-jolly",
]);

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const hasDarkHero = DARK_HERO_ROUTES.has(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const overHero = hasDarkHero && !scrolled && !menuOpen;
  const toneInverse = overHero;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-editorial ease-editorial",
          menuOpen
            ? "bg-transparent text-charcoal"
            : overHero
              ? "bg-transparent text-ivory"
              : "bg-ivory/92 text-charcoal backdrop-blur-[6px] supports-[backdrop-filter]:bg-ivory/80",
        )}
      >
        <div className="editorial-container grid h-[var(--header-h)] grid-cols-[1fr_auto] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="meta shrink-0 justify-self-start text-[11px] md:text-meta"
            aria-label="Jolly Mutesi — Home"
          >
            Jolly Mutesi
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "meta relative transition-opacity duration-editorial hover:opacity-70",
                  pathname === item.href &&
                    (toneInverse
                      ? "text-ivory after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-ivory/70"
                      : "text-burgundy"),
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden justify-self-end lg:block">
            <LinkArrow
              href={primaryCta.href}
              tone={toneInverse ? "light" : "dark"}
            >
              {primaryCta.label}
            </LinkArrow>
          </div>

          <button
            type="button"
            className="meta justify-self-end lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div id="mobile-menu">
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </>
  );
}
