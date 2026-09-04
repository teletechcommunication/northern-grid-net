import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { FaqAccordion, faqItems } from "../components/site/FaqAccordion";
import { AssistanceCTA } from "../components/site/AssistanceCTA";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | Northern-Grid Net" },
      {
        name: "description",
        content:
          "Answers about Northern-Grid Net's independent third-party role, how assistance works, and what we do and don't provide.",
      },
      { property: "og:title", content: "Frequently Asked Questions | Northern-Grid Net" },
      {
        property: "og:description",
        content: "How Northern-Grid Net's independent assistance works, explained clearly.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Questions? <span className="text-brand">Start here.</span>
          </>
        }
        intro="General, internet, TV & cable, streaming and assistance — answered without marketing language."
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow text-brand">Categories</p>
              <ul className="mt-5 space-y-2 text-sm text-ink/60">
                {["General", "Internet", "TV & Cable", "Streaming", "Assistance"].map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <FaqAccordion />
          </Reveal>
        </div>
      </section>
      <AssistanceCTA />
    </>
  );
}
