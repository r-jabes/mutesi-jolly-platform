import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MediaRef } from "@/content/homepage";

const aspectMap = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  cinema: "aspect-[16/10]",
  wide: "aspect-[16/9]",
} as const;

type EditorialImageProps = {
  media: MediaRef;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  cursor?: "VIEW" | "OPEN" | "DRAG";
  /** Quiet surface tone when no src is available */
  placeholderTone?: "sand" | "stone" | "soft-charcoal";
  /** Subtle editorial hover zoom (uses parent `.group`) */
  hoverScale?: boolean;
};

export function EditorialImage({
  media,
  className,
  imageClassName,
  priority = false,
  fill = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  cursor,
  placeholderTone = "sand",
  hoverScale = false,
}: EditorialImageProps) {
  const aspect = media.aspect ? aspectMap[media.aspect] : "aspect-[3/4]";
  const objectPosition = media.objectPosition ?? "center center";

  const toneClass =
    placeholderTone === "soft-charcoal"
      ? "bg-soft-charcoal"
      : placeholderTone === "stone"
        ? "bg-stone"
        : "bg-sand";

  const imageMotionClass = cn(
    "object-cover transition-transform duration-[700ms] ease-editorial will-change-transform",
    hoverScale && "group-hover:scale-[1.03]",
    imageClassName,
  );

  if (media.src) {
    if (fill) {
      return (
        <div
          className={cn(
            "relative overflow-hidden",
            hoverScale && "group",
            toneClass,
            className,
          )}
          data-cursor={cursor}
        >
          <Image
            src={media.src}
            alt={media.alt}
            fill
            priority={priority}
            sizes={sizes}
            className={imageMotionClass}
            style={{ objectPosition }}
          />
        </div>
      );
    }

    return (
      <div
        className={cn(
          "relative overflow-hidden",
          hoverScale && "group",
          toneClass,
          aspect,
          className,
        )}
        data-cursor={cursor}
      >
        <Image
          src={media.src}
          alt={media.alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageMotionClass}
          style={{ objectPosition }}
        />
      </div>
    );
  }

  // Quiet neutral frame when photography is unavailable
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        toneClass,
        fill ? "absolute inset-0 h-full w-full" : aspect,
        className,
      )}
      data-cursor={cursor}
      role="img"
      aria-label={media.alt}
    />
  );
}
