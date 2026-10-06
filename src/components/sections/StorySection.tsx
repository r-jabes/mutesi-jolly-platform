import { storyPreview } from "@/content/homepage";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Parallax } from "@/components/motion/Parallax";

export function StorySection() {
  return (
    <section className="bg-warm-white section-y-lg">
      <div className="editorial-container">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          <div className="order-2 md:order-1 md:col-span-5 md:self-center">
            <SectionIntro
              label={storyPreview.label}
              headline={storyPreview.headline}
            />
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-sm text-[17px] leading-relaxed text-muted md:text-body">
                {storyPreview.body}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10">
                <LinkArrow href={storyPreview.cta.href}>
                  {storyPreview.cta.label}
                </LinkArrow>
              </div>
            </Reveal>
          </div>

          <div className="order-1 md:order-2 md:col-span-6 md:col-start-7">
            <Parallax offset={24}>
              <ImageReveal>
                <EditorialImage
                  media={storyPreview.media}
                  hoverScale
                  sizes="(max-width: 768px) 100vw, 48vw"
                />
              </ImageReveal>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
}
