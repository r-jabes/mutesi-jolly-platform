import { work } from "@/content/work";
import { WorkCategoryRow } from "@/components/work/WorkCategoryRow";

export function WorkCategories() {
  return (
    <>
      {work.categories.map((category) => (
        <WorkCategoryRow
          key={category.id}
          id={category.id}
          number={category.number}
          title={category.title}
          headlineLines={category.headlineLines}
          description={category.description}
          image={category.image}
          cta={category.cta}
          href={category.href}
          imageSide={category.imageSide}
          tone={category.tone}
        />
      ))}
    </>
  );
}
