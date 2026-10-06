import { impact } from "@/content/impact";
import { ImpactAreaRow } from "@/components/impact/ImpactAreaRow";

export function ImpactAreas() {
  return (
    <div className="bg-ivory">
      {impact.areas.map((area) => (
        <ImpactAreaRow
          key={area.id}
          id={area.id}
          number={area.number}
          title={area.title}
          description={area.description}
          image={area.image}
          imageSide={area.imageSide}
        />
      ))}
    </div>
  );
}
