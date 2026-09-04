import { useState } from "react";

export type FaqItem = { category: string; q: string; a: string };

export const faqItems: FaqItem[] = [
  {
    category: "General",
    q: "Are you an internet service provider?",
    a: "No. Northern-Grid Net is an independent third-party assistance platform. We do not own or operate networks and we are not an internet, cable, television or streaming provider.",
  },
  {
    category: "General",
    q: "Do you directly sell internet plans?",
    a: "We do not sell service plans. We help you understand categories, terminology and the questions worth asking so you can explore options with confidence.",
  },
  {
    category: "TV & Cable",
    q: "Can you help me explore TV options?",
    a: "Yes, in an informational way. We explain how live television, cable and on-demand viewing generally differ, without making provider-specific or pricing claims.",
  },
  {
    category: "Streaming",
    q: "Do you provide streaming services?",
    a: "No. Any streaming platforms referenced are independent external services with no affiliation to Northern-Grid Net unless explicitly stated.",
  },
  {
    category: "Assistance",
    q: "How does your assistance work?",
    a: "You tell us what you are looking for through our request form. We respond with clear, neutral information about the relevant service categories and next steps you can take yourself.",
  },
  {
    category: "Assistance",
    q: "Is assistance free or separately charged?",
    a: "Any fees that apply to a specific assistance request are disclosed to you in writing before that request proceeds. Nothing is charged without your agreement.",
  },
  {
    category: "General",
    q: "How can I contact your team?",
    a: "Use the contact page to send a request, or email hello@northerngridtelecom.example. We reply during standard business hours, Monday to Friday.",
  },
  {
    category: "Internet",
    q: "Can you tell me what is available at my address?",
    a: "We do not publish availability or coverage claims. Availability is determined solely by the providers operating in your area.",
  },
];

export function FaqAccordion({ items = faqItems }: { items?: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
              >
                <span>
                  <span className="eyebrow block text-brand">{item.category}</span>
                  <span className="mt-2 block text-lg font-semibold tracking-tight text-ink">
                    {item.q}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink transition-transform duration-400 ${
                    isOpen ? "rotate-45 border-brand bg-brand text-white" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 text-[0.95rem] leading-relaxed text-ink/60">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
