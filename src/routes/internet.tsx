import { createFileRoute } from "@tanstack/react-router";
import darkHome from "../assets/dark-home.jpg";
import living from "../assets/hero-living-room.jpg";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { DeviceVisualizer } from "../components/site/DeviceVisualizer";
import { AssistanceCTA } from "../components/site/AssistanceCTA";

export const Route = createFileRoute("/internet")({
  head: () => ({
    meta: [
      { title: "Home Internet & Wi-Fi Guidance | Northern-Grid Net" },
      {
        name: "description",
        content:
          "Understand home internet, Wi-Fi coverage, connected devices and remote work considerations with independent, neutral information.",
      },
      { property: "og:title", content: "Home Internet & Wi-Fi Guidance | Northern-Grid Net" },
      {
        property: "og:description",
        content: "Neutral information about home internet, Wi-Fi and connected devices.",
      },
      { property: "og:url", content: "/internet" },
    ],
    links: [{ rel: "canonical", href: "/internet" }],
  }),
  component: InternetPage,
});

const topics = [
  ["Home internet", "The single connection everything else in the house depends on."],
  ["Wi-Fi", "How wireless coverage behaves across rooms, floors and materials."],
  ["Connected devices", "Phones, tablets, TVs and smart devices sharing one network."],
  ["Remote work", "Calls, uploads and collaboration during the working day."],
  ["Entertainment", "Evening viewing across screens in different rooms."],
  ["Gaming", "Interactive play and how households share the connection."],
  ["Smart home", "Background devices that stay connected all day."],
];

function InternetPage() {
  return (
    <>
      <PageHero
        eyebrow="Internet"
        title={
          <>
            A connected home starts with the <span className="text-brand">right foundation.</span>
          </>
        }
        intro="Independent, plain-language information about home internet, Wi-Fi and the devices that rely on them."
        image={darkHome}
        imageAlt="Modern connected home illuminated at dusk"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <h2 className="display sticky top-32 text-4xl md:text-5xl">
              What we cover.
            </h2>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {topics.map(([t, d], i) => (
              <Reveal key={t} delay={i * 60}>
                <div className="group flex gap-6 py-7 transition-colors">
                  <span className="eyebrow w-10 shrink-0 pt-1 text-brand tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight transition-colors group-hover:text-brand">
                      {t}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/55">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white lg:py-28">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-brand">Visualiser</p>
            <h2 className="display mt-4 mb-12 max-w-xl text-4xl md:text-5xl">
              One router. Many everyday devices.
            </h2>
            <DeviceVisualizer />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="zoom-media overflow-hidden rounded-[2.5rem]">
            <img
              src={living}
              alt="Living room with router, laptop and television in use"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-4xl md:text-5xl">Questions worth asking.</h2>
            <ul className="mt-8 space-y-4">
              {[
                "How many devices are usually connected at the same time?",
                "Where in the home does coverage feel weakest?",
                "Is anyone working, studying or gaming during peak hours?",
                "Which rooms have equipment that could be wired instead?",
                "What changes in the household over a typical week?",
              ].map((q) => (
                <li key={q} className="flex gap-4 border-b border-line pb-4 text-sm text-ink/65">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  {q}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <AssistanceCTA
        title="Explore assistance"
        copy="Share how your household uses the internet and we'll explain the considerations in plain language."
      />
    </>
  );
}
