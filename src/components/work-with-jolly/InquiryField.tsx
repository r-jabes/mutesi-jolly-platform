"use client";

import { cn } from "@/lib/utils";
import type { InquiryFieldDef } from "@/content/work-with-jolly";

type InquiryFieldProps = {
  field: InquiryFieldDef;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  idPrefix?: string;
};

const inputBase =
  "w-full border-b border-charcoal/25 bg-transparent py-3 font-sans text-[15px] text-charcoal outline-none transition-colors placeholder:text-stone focus:border-charcoal disabled:opacity-60";

export function InquiryField({
  field,
  value,
  onChange,
  error,
  idPrefix = "inquiry",
}: InquiryFieldProps) {
  const id = `${idPrefix}-${field.name}`;
  const errorId = `${id}-error`;
  const describedBy = error ? errorId : undefined;

  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className={cn(
          "mb-2 block font-sans text-[11px] uppercase tracking-[0.16em]",
          error ? "text-burgundy" : "text-muted",
        )}
      >
        {field.label}
        {field.required ? (
          <span className="text-burgundy" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </label>

      {field.type === "textarea" ? (
        <textarea
          id={id}
          name={field.name}
          rows={field.rows ?? 4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          required={field.required}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={cn(
            inputBase,
            "resize-y min-h-[7rem] leading-relaxed",
            error && "input-error",
          )}
        />
      ) : field.type === "select" ? (
        <select
          id={id}
          name={field.name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={field.required}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={cn(
            inputBase,
            "cursor-pointer appearance-none pr-6",
            error && "input-error",
          )}
        >
          <option value="">Select…</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={field.placeholder}
          required={field.required}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          autoComplete={
            field.name === "fullName"
              ? "name"
              : field.name === "email"
                ? "email"
                : field.name === "phone"
                  ? "tel"
                  : field.name === "organization"
                    ? "organization"
                    : field.name === "website"
                      ? "url"
                      : undefined
          }
          className={cn(inputBase, error && "input-error")}
        />
      )}

      {error ? (
        <p id={errorId} role="alert" className="field-error">
          <span aria-hidden className="mt-px font-sans text-[10px] tracking-wide">
            !
          </span>
          <span>{error}</span>
        </p>
      ) : null}
    </div>
  );
}
