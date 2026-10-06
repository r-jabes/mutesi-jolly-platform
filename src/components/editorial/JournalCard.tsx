import Link from "next/link";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import { formatDate } from "@/lib/utils";
import type { MediaRef } from "@/content/homepage";
import { cn } from "@/lib/utils";

type JournalCardProps = {
  category: string;
  title: string;
  date?: string | null;
  readingTime?: string | null;
  href: string;
  media: MediaRef;
  excerpt?: string;
  featured?: boolean;
  className?: string;
  ctaLabel?: string;
};

export function JournalCard({
  category,
  title,
  date,
  readingTime,
  href,
  media,
  excerpt,
  featured = false,
  className,
  ctaLabel = "Read",
}: JournalCardProps) {
  const metaParts = [
    category,
    date ? formatDate(date) : null,
    readingTime,
  ].filter(Boolean);

  return (
    <Reveal>
      <article className={cn("group", className)}>
        <Link href={href} data-cursor="VIEW" className="block">
          <ImageReveal>
            <EditorialImage
              media={media}
              hoverScale
              className="mb-5"
              sizes={
                featured
                  ? "(max-width: 768px) 100vw, 70vw"
                  : "(max-width: 768px) 100vw, 40vw"
              }
            />
          </ImageReveal>
          <MetadataLabel className="mb-3">
            {metaParts.join(" · ")}
          </MetadataLabel>
          <h3
            className={cn(
              "display leading-[1.05] transition-colors duration-editorial",
              featured
                ? "text-[clamp(2rem,4vw,3.75rem)]"
                : "text-[clamp(1.6rem,2.5vw,2.25rem)]",
            )}
          >
            {title}
          </h3>
          {excerpt ? (
            <p className="mt-4 max-w-xl text-muted text-[15px] md:text-body">
              {excerpt}
            </p>
          ) : null}
          <span className="meta mt-5 inline-flex items-center gap-2 text-charcoal transition-transform duration-editorial ease-editorial group-hover:translate-x-1">
            {ctaLabel} <span aria-hidden>→</span>
          </span>
        </Link>
      </article>
    </Reveal>
  );
}
