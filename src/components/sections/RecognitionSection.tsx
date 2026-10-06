import { recognition } from "@/content/homepage";
import { Reveal } from "@/components/motion/Reveal";

export function RecognitionSection() {
  const items = recognition.items.filter((item) => item.verified);

  return (
    <section className="bg-ivory py-12 md:py-16 border-y border-charcoal/10">
      <div className="editorial-container">
        <Reveal>
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 md:gap-x-0">
            {items.map((item, index) => (
              <li
                key={item.label}
                className="meta flex items-center text-muted"
              >
                {index > 0 ? (
                  <span
                    aria-hidden
                    className="mx-4 hidden h-3 w-px bg-charcoal/20 md:mx-8 md:inline-block"
                  />
                ) : null}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
