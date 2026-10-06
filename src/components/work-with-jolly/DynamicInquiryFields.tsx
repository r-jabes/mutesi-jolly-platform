"use client";

import { InquiryField } from "@/components/work-with-jolly/InquiryField";
import type { InquiryFieldDef } from "@/content/work-with-jolly";

type DynamicInquiryFieldsProps = {
  fields: readonly InquiryFieldDef[];
  values: Record<string, string>;
  errors: Record<string, string>;
  onChange: (name: string, value: string) => void;
};

export function DynamicInquiryFields({
  fields,
  values,
  errors,
  onChange,
}: DynamicInquiryFieldsProps) {
  if (fields.length === 0) return null;

  return (
    <fieldset className="space-y-7 border-0 p-0">
      <legend className="sr-only">Opportunity details</legend>
      {fields.map((field) => (
        <InquiryField
          key={field.name}
          field={field}
          value={values[field.name] ?? ""}
          onChange={(value) => onChange(field.name, value)}
          error={errors[field.name]}
          idPrefix="opp"
        />
      ))}
    </fieldset>
  );
}
