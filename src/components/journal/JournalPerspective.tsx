import { journal } from "@/content/journal";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { LargeStatement } from "@/components/editorial/LargeStatement";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function JournalPerspective() {
  const { perspective } = journal;

  return (
    <section className="bg-ivory section-y-lg">
      <div className="editorial-container">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          <div className="order-2 md:order-1 md:col-span-6 lg:col-span-5">
            <Reveal>
              <MetadataLabel className="mb-6 text-muted">
                {perspective.label}
              </MetadataLabel>
            </Reveal>
            <LargeStatement
              lines={[...perspective.headlineLines]}
              className="max-w-[10ch]"
            />
            <Reveal delay={0.12}>
              <p className="mt-10 max-w-md text-[15px] leading-relaxed text-muted md:mt-12 md:text-body">
                {perspective.body}
              </p>
            </Reveal>
          </div>

          <div className="order-1 md:order-2 md:col-span-6 lg:col-span-6 lg:col-start-7">
            <ImageReveal>
              <EditorialImage
                media={perspective.media}
                hoverScale
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
