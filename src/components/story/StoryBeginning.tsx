import { story } from "@/content/story";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { Timeline } from "@/components/editorial/Timeline";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function StoryBeginning() {
  const { beginning } = story;

  return (
    <section className="bg-warm-white section-y-lg">
      <div className="editorial-container">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-16 mb-16 md:mb-24">
          <div className="md:col-span-5 md:self-center order-2 md:order-1">
            <SectionIntro
              label={beginning.label}
              headline={beginning.headline}
            />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-[17px] leading-relaxed text-muted">
                {beginning.body}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
            <ImageReveal>
              <EditorialImage
                media={beginning.media}
                hoverScale
                sizes="(max-width: 768px) 100vw, 48vw"
              />
            </ImageReveal>
          </div>
        </div>

        <Timeline items={[...beginning.timeline]} />
      </div>
    </section>
  );
}
