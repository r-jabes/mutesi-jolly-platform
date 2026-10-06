"use client";

import { FormEvent, useState } from "react";
import { journal } from "@/content/journal";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

export function JournalNewsletter() {
  const { newsletter } = journal;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    /** Visual architecture only — no email provider in V1 */
    setSubmitted(true);
  }

  return (
    <section className="bg-ivory py-16 md:py-20 lg:py-24">
      <div className="editorial-container">
        <div className="grid items-end gap-10 border-t border-charcoal/10 pt-12 md:grid-cols-12 md:gap-10 md:pt-16">
          <div className="md:col-span-5 lg:col-span-4">
            <Reveal>
              <MetadataLabel className="mb-4 text-muted">
                Newsletter
              </MetadataLabel>
            </Reveal>
            <h2 className="display text-[clamp(1.75rem,3vw,2.75rem)] leading-none max-w-[12ch]">
              <TextReveal as="span">{newsletter.headline}</TextReveal>
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
                {newsletter.supporting}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7 lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.08}>
              {submitted ? (
                <p className="text-[15px] leading-relaxed text-muted md:text-body">
                  {newsletter.note}
                </p>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 sm:flex-row sm:items-end"
                  noValidate
                >
                  <label className="block flex-1">
                    <span className="sr-only">{newsletter.placeholder}</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder={newsletter.placeholder}
                      className="w-full border-b border-charcoal/25 bg-transparent py-3 font-sans text-[15px] text-charcoal outline-none transition-colors placeholder:text-stone focus:border-charcoal"
                      required
                    />
                  </label>
                  <button
                    type="submit"
                    className="shrink-0 border-b border-charcoal pb-3 font-sans text-[12px] uppercase tracking-[0.14em] text-charcoal transition-opacity hover:opacity-70"
                  >
                    {newsletter.cta}
                  </button>
                </form>
              )}
            </Reveal>
            {!submitted ? (
              <Reveal delay={0.14}>
                <p className="mt-4 text-[12px] leading-relaxed text-stone">
                  {newsletter.note}
                </p>
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
