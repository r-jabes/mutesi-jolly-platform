import { cn } from "@/lib/utils";

type MetadataLabelProps = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
};

export function MetadataLabel({
  children,
  className,
  as: Tag = "p",
}: MetadataLabelProps) {
  return (
    <Tag className={cn("meta text-muted", className)}>
      {children}
    </Tag>
  );
}
