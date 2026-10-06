import Link from "next/link";
import { workWithJolly } from "@/content/work-with-jolly";
import { MetadataLabel } from "@/components/ui/MetadataLabel";

type InquiryErrorProps = {
  message?: string;
  onRetry: () => void;
};

export function InquiryError({ message, onRetry }: InquiryErrorProps) {
  const { error } = workWithJolly;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="border-t border-charcoal/10 pt-10 md:pt-12"
    >
      <MetadataLabel className="mb-5 text-burgundy">Inquiry</MetadataLabel>
      <h3 className="display text-[clamp(2rem,4vw,3.25rem)] leading-none">
        {error.headline}
      </h3>
      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted md:text-body">
        {message ?? error.message}
      </p>
      <div className="mt-10">
        <button
          type="button"
          onClick={onRetry}
          className="group inline-flex items-center gap-2 border-b border-charcoal pb-1 font-sans text-[12px] uppercase tracking-[0.14em] transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-burgundy"
        >
          {error.retryLabel}
          <span
            aria-hidden
            className="transition-transform duration-editorial group-hover:translate-x-1"
          >
            ↗
          </span>
        </button>
      </div>
      <p className="mt-8 text-[13px] text-stone">
        Or{" "}
        <Link href="/" className="underline underline-offset-4">
          return home
        </Link>
        .
      </p>
    </div>
  );
}
