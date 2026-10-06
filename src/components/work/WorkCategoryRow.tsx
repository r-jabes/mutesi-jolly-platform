import { LinkArrow } from "@/components/ui/LinkArrow";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { cn } from "@/lib/utils";
import type { MediaRef } from "@/content/homepage";

type WorkCategoryRowProps = {
  id: string;
  number: string;
  title: string;
  headlineLines: readonly string[];
  description: string;
  image: MediaRef;
  cta: string;
  href: string;
  imageSide: "left" | "right";
  tone: "light" | "dark";
};

export function WorkCategoryRow({
  id,
  number,
  title,
  headlineLines,
  description,
  image,
  cta,
  href,
  imageSide,
  tone,
}: WorkCategoryRowProps) {
  const isDark = tone === "dark";

  return (
    <section
      id={id}
      className={cn(
        "section-y",
        isDark ? "bg-charcoal text-ivory" : "bg-ivory text-charcoal",
      )}
    >
      <div className="editorial-container">
        <div
          className={cn(
            "group/row grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-14",
          )}
        >
          <div
            className={cn(
              "order-2 md:col-span-6 lg:col-span-5",
              "transition-transform duration-editorial ease-editorial motion-safe:md:group-hover/row:translate-x-1",
              imageSide === "left"
                ? "md:order-2 md:col-start-7 lg:col-start-8"
                : "md:order-1",
            )}
          >
            <Reveal>
              <MetadataLabel
                className={cn("mb-4", isDark ? "text-stone" : "text-muted")}
              >
                {number} / {title}
              </MetadataLabel>
            </Reveal>

            <h2 className="display text-section max-w-[12ch]">
              {headlineLines.map((line) => (
                <span key={line} className="block">
                  <TextReveal as="span">{line}</TextReveal>
                </span>
              ))}
            </h2>

            <Reveal delay={0.1}>
              <p
                className={cn(
                  "mt-8 max-w-md text-[15px] leading-relaxed md:text-body",
                  isDark ? "text-sand/85" : "text-muted",
                )}
              >
                {description}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10">
                <LinkArrow href={href} tone={isDark ? "inverse" : "dark"}>
                  {cta}
                </LinkArrow>
              </div>
            </Reveal>
          </div>

          <div
            className={cn(
              "order-1 md:col-span-6 lg:col-span-6",
              imageSide === "left"
                ? "md:order-1 md:col-start-1"
                : "md:order-2 md:col-start-7 lg:col-start-7",
            )}
          >
            <ImageReveal>
              <div className="overflow-hidden">
                <div className="transition-transform duration-editorial ease-editorial motion-safe:md:group-hover/row:scale-[1.03]">
                  <EditorialImage
                    media={image}
                    sizes="(max-width: 768px) 100vw, 48vw"
                  />
                </div>
              </div>
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
