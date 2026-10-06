/**
 * Inquiry submission abstraction.
 *
 * Replace the body of `submitInquiry` when wiring email / database / CRM.
 * Do not call providers directly from form components.
 *
 * Development UI testing:
 *   NEXT_PUBLIC_INQUIRY_MOCK=success  → resolve success
 *   NEXT_PUBLIC_INQUIRY_MOCK=error    → resolve error
 *
 * Without a mock (default, including production): returns a clear
 * "not connected" failure — never fakes a successful delivery.
 */

import type { InquiryTypeId } from "@/content/work-with-jolly";

export type InquiryPayload = {
  opportunityType: InquiryTypeId;
  fullName: string;
  email: string;
  phone: string;
  organization?: string;
  website?: string;
  message: string;
  details: Record<string, string>;
  submittedAt: string;
  sourcePath: string;
};

export type InquiryResult =
  | { ok: true }
  | { ok: false; error: string; code?: "NOT_CONNECTED" | "VALIDATION" | "NETWORK" | "UNKNOWN" };

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function submitInquiry(
  payload: InquiryPayload,
): Promise<InquiryResult> {
  const mock = process.env.NEXT_PUBLIC_INQUIRY_MOCK;

  // Keep a short delay so submitting UI state is observable.
  await delay(650);

  if (mock === "success") {
    if (process.env.NODE_ENV === "development") {
      console.info("[inquiry mock] success", payload);
    }
    return { ok: true };
  }

  if (mock === "error") {
    return {
      ok: false,
      error: "Mock inquiry failure for UI testing.",
      code: "UNKNOWN",
    };
  }

  // Default: backend not wired — honest failure, not a fake success.
  if (process.env.NODE_ENV === "development") {
    console.info(
      "[inquiry] submitInquiry called — delivery not connected yet.",
      payload,
    );
  }

  return {
    ok: false,
    error:
      "Inquiry delivery is not connected yet. Your details were not sent. Please try again later.",
    code: "NOT_CONNECTED",
  };
}
