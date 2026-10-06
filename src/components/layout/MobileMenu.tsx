"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { primaryCta, primaryNav } from "@/content/navigation";
import { site } from "@/content/site";
import { LinkArrow } from "@/components/ui/LinkArrow";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const reduced = useReducedMotion();

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 bg-ivory text-charcoal lg:hidden"
          initial={reduced ? false : { clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={reduced ? undefined : { clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex h-full flex-col px-[var(--page-pad)] pb-10 pt-[calc(var(--header-h)+1rem)]">
            <nav className="flex flex-1 flex-col justify-center gap-2">
              {primaryNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduced ? false : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.12 + i * 0.06,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="display block py-2 text-[clamp(2.8rem,12vw,4.5rem)] leading-none"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="border-t border-charcoal/15 pt-8"
            >
              <LinkArrow href={primaryCta.href} onClick={onClose}>
                {primaryCta.label}
              </LinkArrow>

              {site.social.some((s) => !s.placeholder) ? (
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {site.social
                    .filter((social) => !social.placeholder)
                    .map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="meta text-muted"
                          onClick={onClose}
                        >
                          {social.label}
                        </a>
                      </li>
                    ))}
                </ul>
              ) : null}
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
