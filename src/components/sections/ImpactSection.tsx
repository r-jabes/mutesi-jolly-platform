import Link from "next/link";
import { impactSection } from "@/content/homepage";
import { LargeStatement } from "@/components/editorial/LargeStatement";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";

export function ImpactSection() {
  const { featured } = impactSection;

  return (
    <section className="bg-charcoal section-y-lg text-ivory">
      <div className="editorial-container">
        <Reveal>
          <MetadataLabel className="mb-6 text-stone">
            {impactSection.label}
          </MetadataLabel>
        </Reveal>

        <LargeStatement
          lines={impactSection.headlineLines}
          tone="dark"
          className="mb-8 max-w-5xl md:mb-10"
        />

        <Reveal delay={0.1}>
          <p className="mb-14 max-w-lg text-sand/85 text-[15px] md:mb-20 md:text-body">
            {impactSection.supporting}
          </p>
        </Reveal>

        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-7">
            <ImageReveal>
              <EditorialImage
                media={featured.media}
                hoverScale
                cursor="VIEW"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </ImageReveal>
          </Reveal>

          <div className="md:col-span-5">
            <Reveal delay={0.08}>
              {featured.year ? (
                <MetadataLabel className="mb-4 text-stone">
                  {featured.year}
                </MetadataLabel>
              ) : (
                <MetadataLabel className="mb-4 text-stone">
                  Initiative
                </MetadataLabel>
              )}
              <h3 className="display text-[clamp(2rem,4vw,3.5rem)] leading-none text-ivory">
                {featured.initiative}
              </h3>
              <p className="mt-6 max-w-sm text-sand/85 text-[15px] md:text-base leading-relaxed">
                {featured.description}
              </p>
              <Link
                href={featured.href}
                className="meta mt-8 inline-flex items-center gap-2 text-ivory transition-transform duration-editorial ease-editorial hover:translate-x-1"
              >
                Read More <span aria-hidden>↗</span>
              </Link>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 border-t border-ivory/15 pt-10 md:mt-20">
            <LinkArrow href={impactSection.cta.href} tone="inverse">
              {impactSection.cta.label}
            </LinkArrow>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
