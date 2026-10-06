import { story } from "@/content/story";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function StoryBusiness() {
  const { business } = story;

  return (
    <section className="bg-warm-white section-y-lg">
      <div className="editorial-container">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          <div className="md:col-span-5 md:col-start-1">
            <ImageReveal>
              <EditorialImage
                media={business.media}
                hoverScale
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </ImageReveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <SectionIntro label={business.label} headline={business.headline} />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-[17px] leading-relaxed text-muted">
                {business.body}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-charcoal/10 pt-8">
                {business.themes.map((theme) => (
                  <li key={theme} className="meta text-stone">
                    {theme}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 text-sm text-stone">{business.note}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
