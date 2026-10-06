import { story } from "@/content/story";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { Gallery } from "@/components/editorial/Gallery";
import { Reveal } from "@/components/motion/Reveal";

export function StoryCultureStyle() {
  const { cultureStyle } = story;

  return (
    <section className="bg-ivory section-y-lg overflow-hidden">
      <div className="editorial-container mb-10 md:mb-14">
        <SectionIntro
          label={cultureStyle.label}
          headline={cultureStyle.headline}
          description={cultureStyle.body}
          className="max-w-3xl"
        />
      </div>
      <Reveal>
        <Gallery items={[...cultureStyle.items]} />
      </Reveal>
    </section>
  );
}
