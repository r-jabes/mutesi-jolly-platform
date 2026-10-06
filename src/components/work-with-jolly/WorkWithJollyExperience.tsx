"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  isInquiryTypeId,
  type InquiryTypeId,
} from "@/content/work-with-jolly";
import { WorkWithJollyHero } from "@/components/work-with-jolly/WorkWithJollyHero";
import { OpportunitySelector } from "@/components/work-with-jolly/OpportunitySelector";
import { InquiryForm } from "@/components/work-with-jolly/InquiryForm";
import { InquiryTrust } from "@/components/work-with-jolly/InquiryTrust";
import { InquiryAlternativeContact } from "@/components/work-with-jolly/InquiryAlternativeContact";

export function WorkWithJollyExperience() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const initialType = isInquiryTypeId(typeParam) ? typeParam : null;

  const [selected, setSelected] = useState<InquiryTypeId | null>(initialType);
  const didScroll = useRef(false);

  useEffect(() => {
    if (isInquiryTypeId(typeParam)) {
      setSelected(typeParam);
    } else if (typeParam === null) {
      // leave selection as-is when param cleared via our own updates
    } else {
      // Invalid query — fall back gracefully
      setSelected(null);
    }
  }, [typeParam]);

  useEffect(() => {
    if (!initialType || didScroll.current) return;
    didScroll.current = true;
    const timer = window.setTimeout(() => {
      document.getElementById("inquiry")?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
    }, 350);
    return () => window.clearTimeout(timer);
  }, [initialType]);

  const selectOpportunity = useCallback(
    (id: InquiryTypeId) => {
      setSelected(id);
      const params = new URLSearchParams(searchParams.toString());
      params.set("type", id);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });

      window.requestAnimationFrame(() => {
        document.getElementById("inquiry")?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
          block: "start",
        });
      });
    },
    [pathname, router, searchParams],
  );

  return (
    <>
      <WorkWithJollyHero />
      <OpportunitySelector selected={selected} onSelect={selectOpportunity} />
      <InquiryForm
        opportunityType={selected}
        onOpportunityChange={selectOpportunity}
      />
      <InquiryTrust />
      <InquiryAlternativeContact />
    </>
  );
}
