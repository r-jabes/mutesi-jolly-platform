"use client";

import { motion, useReducedMotion } from "framer-motion";
import { workWithJolly } from "@/content/work-with-jolly";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";

export function WorkWithJollyHero() {
  const reduced = useReducedMotion();
  const { hero } = workWithJolly;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-charcoal text-ivory">
      <div className="editorial-container relative grid min-h-[100svh] grid-cols-1 pt-[calc(var(--header-h)+1rem)] pb-10 md:pb-12 lg:grid-cols-12 lg:items-end lg:gap-x-10 lg:pb-14 lg:pt-[calc(var(--header-h)+1.5rem)]">
        <div className="relative z-10 order-2 flex flex-col justify-end pt-8 lg:order-1 lg:col-span-5 lg:pt-0">
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            <MetadataLabel className="mb-4 text-stone md:mb-5">
              {hero.eyebrow}
            </MetadataLabel>
          </motion.div>

          <h1 className="display text-hero max-w-[11ch]">
            {hero.headlineLines.map((line, index) => (
              <span key={line} className="clip-text block">
                <motion.span
                  className="block"
                  initial={reduced ? false : { y: "115%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    delay: 0.2 + index * 0.08,
                    duration: 0.95,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-[22rem] text-[14px] leading-relaxed text-ivory/60 md:mt-8 md:text-[15px]"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
          >
            {hero.supporting}
          </motion.p>
        </div>

        <div className="order-1 flex min-h-[50svh] items-stretch lg:order-2 lg:col-span-7 lg:min-h-0">
          <motion.div
            className="relative w-full lg:ml-auto lg:w-[90%]"
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
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 55vw, 700px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
