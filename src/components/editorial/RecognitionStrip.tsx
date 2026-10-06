import { Reveal } from "@/components/motion/Reveal";

type RecognitionStripProps = {
  items: string[];
};

export function RecognitionStrip({ items }: RecognitionStripProps) {
  return (
    <Reveal>
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
        {items.map((item) => (
          <li key={item} className="meta text-muted">
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
