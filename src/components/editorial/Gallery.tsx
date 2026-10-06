"use client";

import { useRef } from "react";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import type { MediaRef } from "@/content/homepage";

export type GalleryItem = {
  id: string;
  category: string;
  location: string;
  year: string;
  brand?: string;
  media: MediaRef;
};

type GalleryProps = {
  items: GalleryItem[];
};

export function Gallery({ items }: GalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
  });

  const onPointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    dragState.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
    };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el || !dragState.current.active) return;
    const walk = (e.clientX - dragState.current.startX) * 1.15;
    el.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const endDrag = (e: React.PointerEvent) => {
    const el = trackRef.current;
    dragState.current.active = false;
    if (el?.hasPointerCapture(e.pointerId)) {
      el.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div
      ref={trackRef}
      className="hide-scrollbar flex gap-4 overflow-x-auto px-[var(--page-pad)] pb-2 md:gap-6 cursor-grab active:cursor-grabbing select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      data-cursor="DRAG"
    >
      {items.map((item, index) => (
        <figure
          key={item.id}
          className={
            index % 3 === 1
              ? "group w-[68vw] max-w-[380px] shrink-0 md:w-[32vw]"
              : "group w-[78vw] max-w-[460px] shrink-0 md:w-[36vw]"
          }
        >
          <EditorialImage
            media={item.media}
            hoverScale
            cursor="VIEW"
            sizes="(max-width: 768px) 78vw, 36vw"
          />
          <figcaption className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            <MetadataLabel as="span">{item.category}</MetadataLabel>
            {item.location !== "—" ? (
              <MetadataLabel as="span">{item.location}</MetadataLabel>
            ) : null}
            {item.year !== "—" ? (
              <MetadataLabel as="span">{item.year}</MetadataLabel>
            ) : null}
            {item.brand ? (
              <MetadataLabel as="span">{item.brand}</MetadataLabel>
            ) : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
