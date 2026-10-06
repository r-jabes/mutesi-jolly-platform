import { story } from "@/content/story";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { TextReveal } from "@/components/motion/TextReveal";

export function StoryMissRwanda() {
  const { missRwanda } = story;

  return (
    <section className="bg-charcoal section-y-lg text-ivory">
      <div className="editorial-container">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          <div className="md:col-span-6 lg:col-span-7">
            <ImageReveal>
              <EditorialImage
                media={missRwanda.media}
                hoverScale
                sizes="(max-width: 768px) 100vw, 55vw"
              />
            </ImageReveal>
          </div>

          <div className="md:col-span-6 lg:col-span-5">
            <Reveal>
              <MetadataLabel className="mb-5 text-stone">
                {missRwanda.eyebrow}
              </MetadataLabel>
            </Reveal>
            <h2 className="display text-section max-w-[10ch]">
              <TextReveal as="span">{missRwanda.headline}</TextReveal>
            </h2>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-sand/85 md:text-body">
                {missRwanda.body}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
