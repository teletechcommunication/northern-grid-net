import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { AssistanceCTA } from "../components/site/AssistanceCTA";
import { guides, GuideCard } from "./index";
import darkHome from "../assets/dark-home.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "The Connected Home Guide | Northern-Grid Net" },
      {
        name: "description",
        content:
          "Plain-language guides on home Wi-Fi, internet speed, cable versus streaming, smart TVs and connected devices.",
      },
      { property: "og:title", content: "The Connected Home Guide | Northern-Grid Net" },
      {
        property: "og:description",
        content: "Guides on Wi-Fi, internet speed, cable versus streaming and connected devices.",
      },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            The connected <span className="text-brand">home guide.</span>
          </>
        }
        intro="Short, neutral explainers written for people who just want the connectivity jargon translated into everyday language."
        image={darkHome}
        imageAlt="Modern home at dusk"
      />

      <section className="bg-paper py-20 lg:py-28">
        <div className="shell grid gap-6 md:grid-cols-6">
          {guides.map((g, i) => (
            <Reveal
              key={g.title}
              delay={(i % 3) * 80}
              className={
                i === 0 || i === 5 ? "md:col-span-4" : i === 1 || i === 4 ? "md:col-span-2" : "md:col-span-3"
              }
            >
              <GuideCard {...g} large={i === 0 || i === 5} />
            </Reveal>
          ))}
        </div>
      </section>

      <AssistanceCTA
        title="Still have a question?"
        copy="If a guide didn't cover it, send us the question and we'll answer it in plain language."
      />
    </>
  );
}
