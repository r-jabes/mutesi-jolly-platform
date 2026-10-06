"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  workWithJolly,
  getOpportunityById,
  type InquiryTypeId,
} from "@/content/work-with-jolly";
import { submitInquiry } from "@/lib/inquiry/submitInquiry";
import { InquiryField } from "@/components/work-with-jolly/InquiryField";
import { DynamicInquiryFields } from "@/components/work-with-jolly/DynamicInquiryFields";
import { InquirySuccess } from "@/components/work-with-jolly/InquirySuccess";
import { InquiryError } from "@/components/work-with-jolly/InquiryError";
import { MetadataLabel } from "@/components/ui/MetadataLabel";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

type InquiryFormProps = {
  opportunityType: InquiryTypeId | null;
  onOpportunityChange: (id: InquiryTypeId) => void;
};

type ContactValues = {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  website: string;
  message: string;
};

const emptyContact: ContactValues = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  website: "",
  message: "",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

function isValidUrl(value: string) {
  if (!value.trim()) return true;
  try {
    const url = new URL(value.includes("://") ? value : `https://${value}`);
    return Boolean(url.hostname.includes("."));
  } catch {
    return false;
  }
}

export function InquiryForm({
  opportunityType,
  onOpportunityChange,
}: InquiryFormProps) {
  const { form, contactFields, sharedMessage, types, validation } =
    workWithJolly;
  const opportunity = getOpportunityById(opportunityType);

  const [contact, setContact] = useState<ContactValues>(emptyContact);
  const [details, setDetails] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const dynamicFields = useMemo(
    () => opportunity?.fields ?? [],
    [opportunity],
  );

  function setContactField(name: keyof ContactValues, value: string) {
    setContact((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  function setDetailField(name: string, value: string) {
    setDetails((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  function handleOpportunityChange(id: InquiryTypeId) {
    if (id !== opportunityType) {
      setDetails({});
      setErrors((prev) => {
        const next = { ...prev };
        delete next.opportunityType;
        for (const key of Object.keys(details)) delete next[key];
        return next;
      });
    }
    onOpportunityChange(id);
  }

  function validate(): boolean {
    const next: Record<string, string> = {};

    if (!opportunityType) {
      next.opportunityType = validation.opportunityRequired;
    }

    if (!contact.fullName.trim()) {
      next.fullName = validation.fullNameRequired;
    }

    if (!contact.email.trim()) {
      next.email = validation.emailRequired;
    } else if (!isValidEmail(contact.email.trim())) {
      next.email = validation.emailInvalid;
    }

    if (!contact.phone.trim()) {
      next.phone = validation.phoneRequired;
    } else if (!isValidPhone(contact.phone.trim())) {
      next.phone = validation.phoneInvalid;
    }

    if (contact.website.trim() && !isValidUrl(contact.website.trim())) {
      next.website = validation.urlInvalid;
    }

    for (const field of dynamicFields) {
      const value = (details[field.name] ?? "").trim();
      if (field.required && !value) {
        next[field.name] = validation.fieldRequired;
      } else if (field.type === "url" && value && !isValidUrl(value)) {
        next[field.name] = validation.urlInvalid;
      }
    }

    if (!contact.message.trim()) {
      next.message = validation.messageRequired;
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    if (!validate() || !opportunityType) {
      const firstError = document.querySelector("[aria-invalid='true']");
      if (firstError instanceof HTMLElement) firstError.focus();
      return;
    }

    setStatus("submitting");
    setErrorMessage(undefined);

    const payload = {
      opportunityType,
      fullName: contact.fullName.trim(),
      email: contact.email.trim(),
      phone: contact.phone.trim(),
      organization: contact.organization.trim() || undefined,
      website: contact.website.trim() || undefined,
      message: contact.message.trim(),
      details: Object.fromEntries(
        Object.entries(details).map(([k, v]) => [k, v.trim()]),
      ),
      submittedAt: new Date().toISOString(),
      sourcePath:
        typeof window !== "undefined"
          ? window.location.pathname + window.location.search
          : "/work-with-jolly",
    };

    const result = await submitInquiry(payload);

    if (result.ok) {
      setStatus("success");
      return;
    }

    setErrorMessage(result.error);
    setStatus("error");
  }

  function handleRetry() {
    setStatus("idle");
    setErrorMessage(undefined);
  }

  if (status === "success") {
    return (
      <section
        id="inquiry"
        className="scroll-mt-[calc(var(--header-h)+1rem)] bg-ivory section-y"
      >
        <div className="editorial-container max-w-2xl">
          <InquirySuccess />
        </div>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section
        id="inquiry"
        className="scroll-mt-[calc(var(--header-h)+1rem)] bg-ivory section-y"
      >
        <div className="editorial-container max-w-2xl">
          <InquiryError message={errorMessage} onRetry={handleRetry} />
        </div>
      </section>
    );
  }

  return (
    <section
      id="inquiry"
      className="scroll-mt-[calc(var(--header-h)+1rem)] bg-ivory section-y"
    >
      <div className="editorial-container">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          <div className="md:col-span-5 lg:col-span-4">
            <Reveal>
              <MetadataLabel className="mb-5 text-muted">
                {form.label}
              </MetadataLabel>
            </Reveal>
            <h2 className="display text-section max-w-[12ch]">
              <TextReveal as="span">{form.headline}</TextReveal>
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted md:text-body">
                {form.supporting}
              </p>
            </Reveal>

            <div className="mt-10 border-t border-charcoal/10 pt-8">
              <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-stone">
                {form.selectedLabel}
              </p>
              <p className="mt-3 display text-[clamp(1.5rem,2.5vw,2rem)] leading-none">
                {opportunity?.formLabel ?? "Not selected"}
              </p>
              {errors.opportunityType ? (
                <p role="alert" className="field-error mt-4">
                  <span aria-hidden className="mt-px font-sans text-[10px] tracking-wide">
                    !
                  </span>
                  <span>{errors.opportunityType}</span>
                </p>
              ) : null}

              <div
                role="radiogroup"
                aria-label="Opportunity type"
                className="mt-8 flex flex-wrap gap-2"
              >
                {types.map((type) => {
                  const active = opportunityType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => handleOpportunityChange(type.id)}
                      className={cn(
                        "border-b px-1 py-2 font-sans text-[11px] uppercase tracking-[0.14em] transition-colors",
                        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-burgundy",
                        active
                          ? "border-charcoal text-charcoal"
                          : "border-transparent text-muted hover:text-charcoal",
                      )}
                    >
                      {type.formLabel}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mx-auto max-w-xl space-y-10 md:mx-0"
            >
              <fieldset className="space-y-7 border-0 p-0">
                <legend className="sr-only">Contact information</legend>
                {contactFields.map((field) => (
                  <InquiryField
                    key={field.name}
                    field={field}
                    value={contact[field.name as keyof ContactValues]}
                    onChange={(value) =>
                      setContactField(field.name as keyof ContactValues, value)
                    }
                    error={errors[field.name]}
                  />
                ))}
              </fieldset>

              {opportunityType ? (
                <DynamicInquiryFields
                  fields={dynamicFields}
                  values={details}
                  errors={errors}
                  onChange={setDetailField}
                />
              ) : (
                <p className="text-[14px] text-muted">
                  Select an opportunity above to continue.
                </p>
              )}

              <InquiryField
                field={sharedMessage}
                value={contact.message}
                onChange={(value) => setContactField("message", value)}
                error={errors.message}
              />

              <div>
                <p className="max-w-md text-[12px] leading-relaxed text-stone">
                  {form.consent}
                </p>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={cn(
                    "group mt-8 inline-flex items-center gap-2 border-b border-charcoal pb-1",
                    "font-sans text-[12px] uppercase tracking-[0.14em]",
                    "transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-burgundy",
                    status === "submitting"
                      ? "opacity-60"
                      : "hover:opacity-70",
                  )}
                >
                  {status === "submitting"
                    ? form.submittingLabel
                    : form.submitLabel}
                  {status !== "submitting" ? (
                    <span
                      aria-hidden
                      className="transition-transform duration-editorial group-hover:translate-x-1 group-hover:-translate-y-px"
                    >
                      ↗
                    </span>
                  ) : null}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
