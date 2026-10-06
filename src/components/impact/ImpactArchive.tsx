import Link from "next/link";
import { impact, type ImpactArchiveItem } from "@/content/impact";
import { SectionIntro } from "@/components/editorial/SectionIntro";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { cn } from "@/lib/utils";

function ArchiveItem({
  item,
  index,
}: {
  item: ImpactArchiveItem;
  index: number;
}) {
  const href = item.href;
  const meta = [item.category, item.year].filter(Boolean).join(" · ");

  const inner = (
    <>
      {item.image ? (
        <ImageReveal>
          <EditorialImage
            media={{
              ...item.image,
              aspect: item.image.aspect ?? "portrait",
            }}
            hoverScale
            className="mb-5"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </ImageReveal>
      ) : null}
      <MetadataLabel className="mb-3 text-stone">{meta}</MetadataLabel>
      <h3 className="display text-[clamp(1.6rem,2.5vw,2.5rem)] leading-none transition-transform duration-editorial ease-editorial motion-safe:md:group-hover:translate-x-1">
        {item.title}
      </h3>
      {item.description ? (
        <p className="mt-4 max-w-md text-sm text-muted">{item.description}</p>
      ) : null}
    </>
  );

  return (
    <Reveal
      delay={index * 0.06}
      className={cn(index % 3 === 0 ? "md:col-span-7" : "md:col-span-5")}
    >
      <article className="group">
        {href ? (
          <Link href={href} className="block focus-visible:outline-none">
            {inner}
          </Link>
        ) : (
          <div>{inner}</div>
        )}
      </article>
    </Reveal>
  );
}

export function ImpactArchive() {
  const { archive } = impact;
  const hasItems = archive.items.length > 0;

  return (
    <section className="bg-ivory section-y-lg">
      <div className="editorial-container">
        <SectionIntro
          label="Archive"
          headline={archive.headline}
          description={archive.supporting}
          className="mb-12 max-w-3xl md:mb-16"
        />

        {hasItems ? (
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            {archive.items.map((item, index) => (
              <ArchiveItem key={item.id} item={item} index={index} />
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="border-t border-charcoal/10 pt-10 md:pt-14">
              <p className="display text-[clamp(1.75rem,3.5vw,3rem)] leading-none max-w-[18ch]">
                {archive.emptyHeadline}
              </p>
              <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-muted md:text-body">
                {archive.emptyBody}
              </p>
              <div className="mt-10">
                <LinkArrow href="/work-with-jolly">
                  Work With Jolly
                </LinkArrow>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
