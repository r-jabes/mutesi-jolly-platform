import { story } from "@/content/story";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function StoryImpact() {
  const { impact } = story;

  return (
    <section className="bg-charcoal section-y-lg text-ivory">
      <div className="editorial-container">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-14">
          <div className="md:col-span-7">
            <ImageReveal>
              <EditorialImage
                media={impact.media}
                hoverScale
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </ImageReveal>
          </div>

          <div className="md:col-span-5">
            <SectionIntro
              label={impact.label}
              headline={impact.headline}
              tone="dark"
            />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-sand/85 md:text-body">
                {impact.body}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-sm text-stone">{impact.note}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10">
                <LinkArrow href={impact.cta.href} tone="inverse">
                  {impact.cta.label}
                </LinkArrow>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
