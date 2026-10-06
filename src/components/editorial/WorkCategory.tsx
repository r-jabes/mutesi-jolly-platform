"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import type { MediaRef } from "@/content/homepage";
import { cn } from "@/lib/utils";

type WorkCategoryProps = {
  number: string;
  title: string;
  href: string;
  description?: string;
  cta?: string;
  media?: MediaRef;
};

export function WorkCategory({
  number,
  title,
  href,
  description,
  cta,
  media,
}: WorkCategoryProps) {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  return (
    <Link
      href={href}
      className="group relative block border-t border-ivory/20 py-7 md:py-10 last:border-b"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="OPEN"
    >
      <div className="relative z-10 grid grid-cols-[auto_1fr_auto] items-baseline gap-4 md:gap-8">
        <span className="meta text-stone pt-2">{number}</span>
        <div>
          <h3 className="display text-[clamp(2.4rem,5vw,5rem)] leading-none text-ivory transition-transform duration-editorial ease-editorial group-hover:translate-x-2">
            {title}
          </h3>
          {description ? (
            <p className="mt-3 max-w-md text-sm text-sand/80 md:text-base opacity-0 translate-y-2 transition-all duration-editorial ease-editorial group-hover:opacity-100 group-hover:translate-y-0 max-md:opacity-100 max-md:translate-y-0">
              {description}
            </p>
          ) : null}
          {cta ? (
            <p className="meta mt-4 text-stone transition-colors duration-editorial group-hover:text-ivory max-md:text-ivory/70">
              {cta} ↗
            </p>
          ) : null}
        </div>
        <span
          aria-hidden
          className="text-ivory text-xl transition-transform duration-editorial ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          ↗
        </span>
      </div>

      {media?.src && !reduced ? (
        <AnimatePresence>
          {hovered ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "pointer-events-none absolute right-[10%] top-1/2 z-0 hidden w-[200px] -translate-y-1/2 overflow-hidden lg:block xl:w-[240px]",
              )}
            >
              <EditorialImage
                media={{ ...media, aspect: "portrait" }}
                hoverScale
                sizes="240px"
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      ) : null}
    </Link>
  );
}
