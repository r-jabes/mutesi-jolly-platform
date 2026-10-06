"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import {
  journal,
  getJournalEntryHref,
  type JournalCategory,
  type JournalEntry,
} from "@/content/journal";
import { EditorialImage } from "@/components/editorial/EditorialImage";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";
import { ImageReveal } from "@/components/motion/ImageReveal";
import { cn } from "@/lib/utils";

type Filter = "All" | JournalCategory;

function EntryRow({ entry, index }: { entry: JournalEntry; index: number }) {
  const meta = [entry.date, entry.readTime].filter(Boolean).join(" · ");
  const href = getJournalEntryHref(entry);

  return (
    <Reveal delay={Math.min(index * 0.04, 0.2)}>
      <article className="group border-t border-charcoal/10">
        <Link
          href={href}
          className="grid items-center gap-6 py-8 md:grid-cols-12 md:gap-8 md:py-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-burgundy"
        >
          <div className="md:col-span-3 lg:col-span-2">
            {entry.image ? (
              <ImageReveal>
                <div className="overflow-hidden">
                  <div className="transition-transform duration-editorial ease-editorial motion-safe:md:group-hover:scale-[1.03]">
                    <EditorialImage
                      media={{
                        ...entry.image,
                        aspect: entry.image.aspect ?? "square",
                      }}
                      sizes="(max-width: 768px) 40vw, 160px"
                      className="max-w-[9rem] md:max-w-none"
                    />
                  </div>
                </div>
              </ImageReveal>
            ) : (
              <MetadataLabel className="text-stone">{entry.category}</MetadataLabel>
            )}
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            <MetadataLabel className="mb-3 text-muted">
              {entry.category}
              {meta ? ` · ${meta}` : ""}
            </MetadataLabel>
            <h3 className="display text-[clamp(1.5rem,2.8vw,2.35rem)] leading-none transition-transform duration-editorial ease-editorial motion-safe:md:group-hover:translate-x-1">
              {entry.title}
            </h3>
            {entry.excerpt ? (
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
                {entry.excerpt}
              </p>
            ) : null}
          </div>

          <div className="hidden lg:col-span-1 lg:flex lg:justify-end">
            <span
              aria-hidden
              className="inline-block text-sm transition-transform duration-editorial ease-editorial motion-safe:md:group-hover:translate-x-1"
            >
              →
            </span>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}

export function JournalIndex() {
  const [filter, setFilter] = useState<Filter>("All");
  const [, startTransition] = useTransition();

  const published = useMemo(
    () => journal.entries.filter((e) => e.published !== false),
    [],
  );

  const visible = useMemo(() => {
    if (filter === "All") return published;
    return published.filter((e) => e.category === filter);
  }, [filter, published]);

  return (
    <section className="bg-warm-white section-y">
      <div className="editorial-container">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <MetadataLabel className="mb-4 text-muted">Archive</MetadataLabel>
            <h2 className="display text-section">The Index</h2>
          </div>

          <nav
            aria-label="Journal categories"
            className="-mx-[var(--page-pad)] overflow-x-auto px-[var(--page-pad)] md:mx-0 md:overflow-visible md:px-0"
          >
            <ul className="flex min-w-max gap-1 md:flex-wrap md:justify-end">
              {journal.filters.map((item) => {
                const active = filter === item;
                return (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() =>
                        startTransition(() => setFilter(item as Filter))
                      }
                      className={cn(
                        "px-3 py-2 font-sans text-[11px] uppercase tracking-[0.16em] transition-colors duration-editorial",
                        "border-b border-transparent",
                        active
                          ? "border-charcoal text-charcoal"
                          : "text-muted hover:text-charcoal",
                      )}
                      aria-pressed={active}
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {visible.length > 0 ? (
          <div className="border-b border-charcoal/10">
            {visible.map((entry, index) => (
              <EntryRow key={entry.id} entry={entry} index={index} />
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="border-t border-charcoal/10 pt-10 md:pt-14">
              <p className="display text-[clamp(1.6rem,3vw,2.5rem)] leading-none max-w-[18ch]">
                Entries will appear here.
              </p>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted md:text-body">
                {filter === "All"
                  ? "Verified stories across business, culture, style, leadership, media and perspective will fill this archive."
                  : `No verified ${filter.toLowerCase()} entries have been published yet.`}
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
