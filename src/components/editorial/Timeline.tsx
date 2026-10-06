"use client";

import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import type { MediaRef } from "@/content/homepage";
import { cn } from "@/lib/utils";

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  image?: MediaRef;
  verified?: boolean;
};

type TimelineProps = {
  items: TimelineItem[];
  tone?: "light" | "dark";
  className?: string;
};

export function Timeline({
  items,
  tone = "light",
  className,
}: TimelineProps) {
  const line =
    tone === "dark" ? "bg-ivory/20" : "bg-charcoal/15";
  const yearColor = tone === "dark" ? "text-stone" : "text-muted";
  const titleColor = tone === "dark" ? "text-ivory" : "text-charcoal";
  const bodyColor = tone === "dark" ? "text-sand/85" : "text-muted";

  return (
    <ol className={cn("relative", className)}>
      {items.map((item, index) => (
        <li key={`${item.year}-${item.title}`} className="relative">
          <div className="grid gap-6 md:grid-cols-12 md:gap-8 pb-14 md:pb-20 last:pb-0">
            {/* Vertical rule */}
            {index < items.length - 1 ? (
              <span
                aria-hidden
                className={cn(
                  "absolute left-[0.35rem] top-8 bottom-0 w-px md:left-[calc(16.666%-0.5px)]",
                  line,
                )}
              />
            ) : null}

            <Reveal
              delay={index * 0.06}
              className="md:col-span-2 relative pl-6 md:pl-0"
            >
              <span
                aria-hidden
                className={cn(
                  "absolute left-0 top-1.5 h-2 w-2 rounded-full md:left-auto md:right-0",
                  tone === "dark" ? "bg-ivory/50" : "bg-charcoal/40",
                )}
              />
              <MetadataLabel className={yearColor}>{item.year}</MetadataLabel>
            </Reveal>

            <Reveal
              delay={0.06 + index * 0.06}
              className="md:col-span-5 pl-6 md:pl-0"
            >
              <h3
                className={cn(
                  "display text-[clamp(1.75rem,3vw,2.75rem)] leading-none",
                  titleColor,
                )}
              >
                {item.title}
              </h3>
              <p className={cn("mt-4 max-w-md text-[15px] leading-relaxed md:text-base", bodyColor)}>
                {item.description}
              </p>
              {item.verified === false ? (
                <p className={cn("meta mt-4", yearColor)}>Content pending</p>
              ) : null}
            </Reveal>

            {item.image?.src ? (
              <Reveal
                delay={0.1 + index * 0.06}
                className="md:col-span-4 md:col-start-9 pl-6 md:pl-0"
              >
                <ImageReveal>
                  <EditorialImage
                    media={item.image}
                    hoverScale
                    sizes="(max-width: 768px) 100vw, 28vw"
                  />
                </ImageReveal>
              </Reveal>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
