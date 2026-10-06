import { story } from "@/content/story";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function StoryBeyondCrown() {
  const { beyondCrown } = story;

  return (
    <section className="bg-ivory section-y-lg">
      <div className="editorial-container">
        <div className="grid items-end gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5 order-2 md:order-1 md:pb-8">
            <SectionIntro
              label={beyondCrown.label}
              headline={beyondCrown.headline}
            />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-[17px] leading-relaxed text-muted">
                {beyondCrown.body}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-3">
                {beyondCrown.themes.map((theme) => (
                  <li key={theme} className="meta text-stone">
                    {theme}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
            <ImageReveal>
              <EditorialImage
                media={beyondCrown.media}
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
