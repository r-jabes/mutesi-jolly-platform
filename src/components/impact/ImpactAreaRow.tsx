import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { cn } from "@/lib/utils";
import type { MediaRef } from "@/content/homepage";

type ImpactAreaRowProps = {
  id: string;
  number: string;
  title: string;
  description: string;
  image?: MediaRef;
  imageSide?: "left" | "right";
};

export function ImpactAreaRow({
  id,
  number,
  title,
  description,
  image,
  imageSide = "right",
}: ImpactAreaRowProps) {
  return (
    <section
      id={id}
      className="border-t border-charcoal/10 py-14 md:py-16 lg:py-20"
    >
      <div className="editorial-container">
        <div
          className={cn(
            "group/row grid items-center gap-10 md:grid-cols-12 md:gap-10 lg:gap-14",
          )}
        >
          <div
            className={cn(
              "order-2 md:col-span-5 lg:col-span-5",
              "transition-transform duration-editorial ease-editorial motion-safe:md:group-hover/row:translate-x-1",
              image && imageSide === "left"
                ? "md:order-2 md:col-start-7 lg:col-start-8"
                : "md:order-1",
            )}
          >
            <Reveal>
              <MetadataLabel className="mb-4 text-muted">
                {number} / {title}
              </MetadataLabel>
            </Reveal>

            <h3 className="display text-section max-w-[10ch]">
              <TextReveal as="span">{title}</TextReveal>
            </h3>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted md:text-body">
                {description}
              </p>
            </Reveal>
          </div>

          {image ? (
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
          ) : null}
        </div>
      </div>
    </section>
  );
}
