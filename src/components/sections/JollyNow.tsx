import Link from "next/link";
import { jollyNow } from "@/content/homepage";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function JollyNow() {
  return (
    <section className="bg-ivory section-y-lg">
      <div className="editorial-container">
        <SectionIntro
          label={jollyNow.label}
          headline={jollyNow.headline}
          className="mb-14 md:mb-20 max-w-3xl"
        />

        <div className="grid gap-14 md:grid-cols-12 md:gap-x-8 md:gap-y-0">
          {jollyNow.items.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.08}
              className={
                index === 0
                  ? "md:col-span-5"
                  : index === 1
                    ? "md:col-span-4 md:mt-24"
                    : "md:col-span-3 md:mt-12"
              }
            >
              <article>
                <Link
                  href={item.href}
                  className="group block"
                  data-cursor="VIEW"
                >
                  <ImageReveal>
                    <EditorialImage
                      media={item.media}
                      hoverScale
                      placeholderTone="sand"
                      className="mb-6"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </ImageReveal>

                  <MetadataLabel className="mb-3 text-stone">
                    {item.category}
                  </MetadataLabel>

                  <h3 className="display text-[1.65rem] leading-[1.05] md:text-[2rem] lg:text-[2.35rem]">
                    {item.title}
                  </h3>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
