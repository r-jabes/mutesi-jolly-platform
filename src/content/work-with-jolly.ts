/**
 * Work With Jolly — inquiry page content & form field architecture.
 * No fabricated contact details, rates, or response-time promises.
 */

import { jollyImages } from "@/content/jolly-images";

export const inquiryTypeIds = [
  "speaking",
  "partnership",
  "business",
  "media",
  "event",
  "other",
] as const;

export type InquiryTypeId = (typeof inquiryTypeIds)[number];

export type InquiryFieldType = "text" | "email" | "tel" | "url" | "textarea" | "select";

export type InquiryFieldDef = {
  name: string;
  label: string;
  type: InquiryFieldType;
  required?: boolean;
  placeholder?: string;
  options?: readonly string[];
  rows?: number;
};

export type OpportunityType = {
  id: InquiryTypeId;
  number: string;
  title: string;
  formLabel: string;
  description: string;
  fields: readonly InquiryFieldDef[];
};

export function isInquiryTypeId(value: string | null | undefined): value is InquiryTypeId {
  return !!value && (inquiryTypeIds as readonly string[]).includes(value);
}

export const workWithJolly = {
  seo: {
    title: "Work With Jolly — Mutesi Jolly",
    description:
      "Invite Jolly Mutesi — Miss Rwanda 2016, speaker and entrepreneur — for speaking, partnerships, business, media or events.",
  },

  hero: {
    eyebrow: "Work With Jolly",
    headlineLines: ["Let's build", "something", "that matters."],
    supporting:
      "Invite her to speak, partner, consult or appear — with a clear brief about the room, the audience and the work.",
    media: {
      src: jollyImages.style[1].src,
      alt: jollyImages.style[1].alt,
      aspect: "portrait" as const,
      objectPosition: jollyImages.style[1].objectPosition,
    },
  },

  opportunities: {
    headline: "What do you need her for?",
    supporting:
      "Choose the path that matches your invitation. The form adapts so you only answer what matters.",
  },

  form: {
    label: "Inquiry",
    headline: "Start with a clear brief.",
    supporting:
      "Dates, audience, purpose and context help her team decide quickly whether this is a fit.",
    selectedLabel: "Selected opportunity",
    submitLabel: "Send Inquiry",
    submittingLabel: "Sending...",
    consent:
      "By submitting this form, you agree that the information provided may be used to evaluate and respond to your inquiry.",
  },

  contactFields: [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Your full name",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "you@organization.com",
    },
    {
      name: "phone",
      label: "Phone / WhatsApp",
      type: "tel",
      required: true,
      placeholder: "+250 …",
    },
    {
      name: "organization",
      label: "Organization / Company",
      type: "text",
      required: false,
      placeholder: "Optional",
    },
    {
      name: "website",
      label: "Website / Social Link",
      type: "url",
      required: false,
      placeholder: "https://",
    },
  ] as const satisfies readonly InquiryFieldDef[],

  sharedMessage: {
    name: "message",
    label: "Tell Us More",
    type: "textarea",
    required: true,
    rows: 6,
    placeholder:
      "Tell us about the opportunity, what you're hoping to create, and anything else we should know.",
  } as const satisfies InquiryFieldDef,

  types: [
    {
      id: "speaking",
      number: "01",
      title: "Speaking",
      formLabel: "Speaking",
      description:
        "Keynotes and panels on leadership, women and girls, youth and identity — rooms like conferences, universities and leadership forums.",
      fields: [
        {
          name: "eventName",
          label: "Event / Organization Name",
          type: "text",
          required: true,
        },
        {
          name: "eventDate",
          label: "Event Date",
          type: "text",
          required: false,
          placeholder: "Approximate date or window",
        },
        {
          name: "eventLocation",
          label: "Event Location",
          type: "text",
          required: false,
        },
        {
          name: "speakingFormat",
          label: "Speaking Format",
          type: "select",
          required: false,
          options: [
            "Keynote",
            "Panel",
            "Moderated conversation",
            "Fireside chat",
            "Workshop",
            "Other",
          ],
        },
        {
          name: "audience",
          label: "Expected Audience",
          type: "text",
          required: false,
          placeholder: "Size and context",
        },
        {
          name: "opportunityBrief",
          label: "Brief Description of the Opportunity",
          type: "textarea",
          required: true,
          rows: 4,
        },
      ],
    },
    {
      id: "partnership",
      number: "02",
      title: "Brand Partnerships",
      formLabel: "Brand Partnership",
      description:
        "Campaigns and collaborations that fit her public presence — women, youth, Rwanda and contemporary style.",
      fields: [
        {
          name: "brand",
          label: "Brand / Organization",
          type: "text",
          required: true,
        },
        {
          name: "campaignName",
          label: "Campaign or Project Name",
          type: "text",
          required: false,
        },
        {
          name: "timeline",
          label: "Campaign Timeline",
          type: "text",
          required: false,
        },
        {
          name: "collaborationFocus",
          label: "What Are You Looking to Collaborate On?",
          type: "textarea",
          required: true,
          rows: 3,
        },
        {
          name: "opportunityBrief",
          label: "Brief Description",
          type: "textarea",
          required: false,
          rows: 3,
        },
        {
          name: "budgetRange",
          label: "Budget Range",
          type: "text",
          required: false,
          placeholder: "Optional",
        },
      ],
    },
    {
      id: "business",
      number: "03",
      title: "Business",
      formLabel: "Business",
      description:
        "Business consulting, real estate and selected collaborations with founders and partners.",
      fields: [
        {
          name: "company",
          label: "Organization / Company",
          type: "text",
          required: true,
        },
        {
          name: "businessOpportunityType",
          label: "Opportunity Type",
          type: "text",
          required: false,
          placeholder: "Collaboration, venture, advisory…",
        },
        {
          name: "ventureName",
          label: "Project / Venture Name",
          type: "text",
          required: false,
        },
        {
          name: "timeline",
          label: "Timeline",
          type: "text",
          required: false,
        },
        {
          name: "opportunityBrief",
          label: "Brief Description",
          type: "textarea",
          required: true,
          rows: 4,
        },
        {
          name: "relevantLink",
          label: "Relevant Link",
          type: "url",
          required: false,
          placeholder: "https://",
        },
      ],
    },
    {
      id: "media",
      number: "04",
      title: "Media",
      formLabel: "Media",
      description:
        "Interviews and features about her journey, advocacy, business or the themes she speaks on.",
      fields: [
        {
          name: "publication",
          label: "Publication / Media Organization",
          type: "text",
          required: true,
        },
        {
          name: "mediaType",
          label: "Media Type",
          type: "select",
          required: false,
          options: [
            "Interview",
            "Feature",
            "Podcast",
            "Television",
            "Editorial",
            "Other",
          ],
        },
        {
          name: "proposedTopic",
          label: "Proposed Topic",
          type: "text",
          required: false,
        },
        {
          name: "publishDate",
          label: "Publication / Broadcast Date",
          type: "text",
          required: false,
        },
        {
          name: "opportunityBrief",
          label: "Brief Description",
          type: "textarea",
          required: true,
          rows: 4,
        },
        {
          name: "relevantLink",
          label: "Relevant Link",
          type: "url",
          required: false,
          placeholder: "https://",
        },
      ],
    },
    {
      id: "event",
      number: "05",
      title: "Events",
      formLabel: "Event",
      description:
        "Hosting, judging, moderation and selected appearances — drawing on her pageant and public experience.",
      fields: [
        {
          name: "eventName",
          label: "Event Name",
          type: "text",
          required: true,
        },
        {
          name: "eventDate",
          label: "Event Date",
          type: "text",
          required: false,
        },
        {
          name: "eventLocation",
          label: "Location",
          type: "text",
          required: false,
        },
        {
          name: "roleRequested",
          label: "Role Requested",
          type: "text",
          required: false,
          placeholder: "Host, judge, moderator…",
        },
        {
          name: "audience",
          label: "Expected Audience",
          type: "text",
          required: false,
        },
        {
          name: "opportunityBrief",
          label: "Brief Description",
          type: "textarea",
          required: true,
          rows: 4,
        },
      ],
    },
    {
      id: "other",
      number: "06",
      title: "Other",
      formLabel: "Other",
      description:
        "A relevant opportunity that doesn't fit the categories above.",
      fields: [
        {
          name: "organization",
          label: "Organization",
          type: "text",
          required: false,
        },
        {
          name: "opportunityName",
          label: "Opportunity Name",
          type: "text",
          required: false,
        },
        {
          name: "timeline",
          label: "Timeline",
          type: "text",
          required: false,
        },
        {
          name: "opportunityBrief",
          label: "Brief Description",
          type: "textarea",
          required: true,
          rows: 4,
        },
      ],
    },
  ] as const satisfies readonly OpportunityType[],

  trust: {
    headline: "Clear briefs get clear answers.",
    body: "Share the date, audience, purpose and why her story belongs in the room. That is enough to decide whether to move forward — without promising response times we cannot guarantee.",
  },

  success: {
    headline: "Thank you.",
    message:
      "Your inquiry has been received. Her team will review the details and respond if it is a fit.",
    cta: { label: "Return Home", href: "/" },
  },

  error: {
    headline: "Something went wrong.",
    message:
      "We couldn't send your inquiry. Please check your details and try again.",
    retryLabel: "Try Again",
  },

  alternativeContact: {
    label: "Another way",
    supporting: "Prefer email for a short note?",
  },

  validation: {
    opportunityRequired: "Please select an opportunity type.",
    fullNameRequired: "Please enter your full name.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address.",
    phoneRequired: "Please enter a phone or WhatsApp number.",
    phoneInvalid: "Please enter a valid phone number.",
    messageRequired: "Please tell us more about the opportunity.",
    fieldRequired: "This field is required.",
    urlInvalid: "Please enter a valid URL.",
  },
} as const;

export function getOpportunityById(
  id: InquiryTypeId | null | undefined,
): OpportunityType | undefined {
  if (!id) return undefined;
  return workWithJolly.types.find((t) => t.id === id);
}
