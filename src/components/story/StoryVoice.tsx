import { story } from "@/content/story";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function StoryVoice() {
  const { voice } = story;

  return (
    <section className="bg-charcoal section-y-lg text-ivory">
      <div className="editorial-container">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          <div className="md:col-span-5 order-2 md:order-1">
            <SectionIntro
              label={voice.label}
              headline={voice.headline}
              tone="dark"
            />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-sand/85 md:text-body">
                {voice.body}
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                {voice.themes.map((theme) => (
                  <li key={theme} className="meta text-stone">
                    {theme}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10">
                <LinkArrow href={voice.cta.href} tone="inverse">
                  {voice.cta.label}
                </LinkArrow>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
            <ImageReveal>
              <EditorialImage
                media={voice.media}
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
