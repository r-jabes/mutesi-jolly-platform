"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/content/homepage";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { LinkArrow } from "@/components/ui/LinkArrow";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-charcoal text-ivory">
      <div className="editorial-container relative grid min-h-[100svh] grid-cols-1 pt-[calc(var(--header-h)+0.75rem)] pb-10 md:pb-12 lg:grid-cols-12 lg:items-end lg:gap-x-8 lg:pb-14 lg:pt-[calc(var(--header-h)+1.25rem)]">
        <div className="relative z-10 order-2 flex flex-col justify-end pt-8 lg:order-1 lg:col-span-5 lg:pt-0 lg:pb-1 xl:col-span-5">
          <motion.p
            className="meta mb-4 text-ivory/55 md:mb-5"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="display text-hero max-w-[9ch] lg:max-w-[8ch]">
            {hero.lines.map((line, i) => (
              <span key={`${line}-${i}`} className="clip-text block">
                <motion.span
                  className="block"
                  initial={reduced ? false : { y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    delay: 0.25 + i * 0.1,
                    duration: 0.95,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="mt-7 max-w-[22rem] md:mt-8"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <p className="text-[14px] leading-relaxed text-ivory/60 md:text-[15px]">
              {hero.supporting}
            </p>

            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8">
              <LinkArrow href={hero.primaryCta.href} tone="light">
                {hero.primaryCta.label}
              </LinkArrow>
              <LinkArrow
                href={hero.secondaryCta.href}
                arrow="↓"
                tone="light"
                className="opacity-75"
              >
                {hero.secondaryCta.label}
              </LinkArrow>
            </div>
          </motion.div>
        </div>

        <div className="order-1 flex min-h-[50svh] items-stretch lg:order-2 lg:col-span-7 lg:min-h-0 xl:col-span-7">
          <motion.div
            className="relative w-full lg:ml-auto lg:w-[94%] lg:max-w-none"
            initial={reduced ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-full min-h-[50svh] w-full overflow-hidden lg:min-h-[calc(100svh-var(--header-h)-3.25rem)]">
              <EditorialImage
                media={hero.media}
                fill
                priority
                placeholderTone="soft-charcoal"
                className="h-full min-h-[50svh] w-full lg:min-h-[calc(100svh-var(--header-h)-3.25rem)]"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 55vw, 720px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
