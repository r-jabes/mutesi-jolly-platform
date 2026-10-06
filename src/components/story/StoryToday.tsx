import { story } from "@/content/story";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function StoryToday() {
  const { today } = story;

  return (
    <section className="bg-warm-white section-y-lg">
      <div className="editorial-container">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          <div className="md:col-span-5 order-2 md:order-1">
            <SectionIntro label={today.label} headline={today.headline} />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-[17px] leading-relaxed text-muted md:text-body">
                {today.body}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 border-t border-charcoal/10 pt-6 text-sm text-stone max-w-sm">
                {today.note}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
            <ImageReveal>
              <EditorialImage
                media={today.media}
                hoverScale
                sizes="(max-width: 768px) 100vw, 48vw"
              />
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
