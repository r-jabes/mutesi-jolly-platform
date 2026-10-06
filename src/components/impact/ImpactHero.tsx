"use client";

import { motion, useReducedMotion } from "framer-motion";
import { impact } from "@/content/impact";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";

/**
 * Impact hero: full-width lead statement, then landscape image
 * beside the secondary line — avoids tall empty charcoal above the photo.
 */
export function ImpactHero() {
  const reduced = useReducedMotion();
  const { hero } = impact;

  return (
    <section className="relative bg-charcoal text-ivory">
      <div className="editorial-container pt-[calc(var(--header-h)+1.25rem)] pb-14 md:pb-16 lg:pb-20 lg:pt-[calc(var(--header-h)+1.75rem)]">
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          <MetadataLabel className="mb-5 text-stone md:mb-6">
            {hero.eyebrow}
          </MetadataLabel>
        </motion.div>

        <h1 className="display text-hero">
          <span className="clip-text block max-w-[18ch] md:max-w-none">
            <motion.span
              className="block pr-[0.06em]"
              initial={reduced ? false : { y: "115%" }}
              animate={{ y: "0%" }}
              transition={{
                delay: 0.2,
                duration: 0.95,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {hero.headlinePrimary}
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 grid items-end gap-10 md:mt-12 md:grid-cols-12 md:gap-10 lg:mt-14 lg:gap-12">
          <div className="order-2 md:order-1 md:col-span-5 lg:col-span-5">
            <p className="display text-section max-w-[11ch]">
              {hero.headlineSecondaryLines.map((line, index) => (
                <span key={line} className="clip-text block">
                  <motion.span
                    className="block pr-[0.06em]"
                    initial={reduced ? false : { y: "115%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      delay: 0.35 + index * 0.08,
                      duration: 0.95,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </p>

            <motion.p
              className="mt-7 max-w-[22rem] text-[14px] leading-relaxed text-ivory/60 md:mt-8 md:text-[15px]"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
            >
              {hero.supporting}
            </motion.p>
          </div>

          <div className="order-1 md:order-2 md:col-span-7 lg:col-span-7">
            <motion.div
              className="relative w-full"
              initial={reduced ? false : { opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <EditorialImage
                media={hero.media}
                priority
                placeholderTone="soft-charcoal"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 58vw, 780px"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
