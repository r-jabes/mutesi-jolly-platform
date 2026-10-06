import Link from "next/link";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import type { MediaRef } from "@/content/homepage";

type ImpactCardProps = {
  year: string;
  initiative: string;
  description: string;
  href: string;
  media?: MediaRef;
  index?: number;
};

export function ImpactCard({
  year,
  initiative,
  description,
  href,
  media,
  index = 0,
}: ImpactCardProps) {
  return (
    <Reveal delay={index * 0.08}>
      <article className="group">
        {media?.src ? (
          <ImageReveal>
            <EditorialImage
              media={media}
              hoverScale
              cursor="VIEW"
              className="mb-5"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </ImageReveal>
        ) : null}
        <MetadataLabel className="mb-3 text-stone">{year}</MetadataLabel>
        <h3 className="display text-3xl md:text-4xl text-ivory leading-none">
          {initiative}
        </h3>
        <p className="mt-4 text-sand/85 text-[15px] md:text-base max-w-sm">
          {description}
        </p>
        <Link
          href={href}
          className="meta mt-5 inline-flex items-center gap-2 text-ivory transition-transform duration-editorial ease-editorial group-hover:translate-x-1"
        >
          Explore <span aria-hidden>→</span>
        </Link>
      </article>
    </Reveal>
  );
}
