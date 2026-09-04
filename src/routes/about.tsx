import { createFileRoute } from "@tanstack/react-router";
import living from "../assets/hero-living-room.jpg";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { AssistanceCTA } from "../components/site/AssistanceCTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Northern-Grid Net | Independent Connectivity Assistance" },
      {
        name: "description",
        content:
          "Northern-Grid Net is an independent third-party assistance platform helping people understand internet, TV, cable and streaming options.",
      },
      { property: "og:title", content: "About Northern-Grid Net | Independent Connectivity Assistance" },
      {
        property: "og:description",
        content: "Our mission, our role and how our independent assistance works.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About & how it works"
        title={
          <>
            We make connectivity <span className="text-brand">easier to navigate.</span>
          </>
        }
        intro="Northern-Grid Net exists because choosing between internet, TV, cable and streaming has quietly become one of the more confusing parts of running a home."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="zoom-media h-fit overflow-hidden rounded-[2.5rem] lg:sticky lg:top-32">
            <img
              src={living}
              alt="Modern living room with connected devices"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <div>
            {[
              [
                "Our mission",
                "Help people understand connectivity and entertainment options, using language that doesn't assume any technical background.",
              ],
              [
                "Our role",
                "We are an independent third-party assistance platform. We do not operate networks, sell service plans, or represent any provider.",
              ],
              [
                "Our approach",
                "Clear information without misleading claims. We don't publish pricing, availability, speed guarantees or provider rankings.",
              ],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="border-b border-line pb-9 mb-9">
                  <span className="eyebrow text-brand">0{i + 1}</span>
                  <h2 className="display mt-4 text-3xl md:text-4xl">{t}</h2>
                  <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-ink/60">{d}</p>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <h2 className="display text-3xl md:text-4xl">What we cover</h2>
              <ul className="mt-6 flex flex-wrap gap-3">
                {["Internet", "Wi-Fi", "TV", "Cable", "Streaming", "Connectivity"].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink/70"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white lg:py-28">
        <div className="shell">
          <Reveal>
            <h2 className="display max-w-xl text-4xl md:text-5xl">How it works.</h2>
          </Reveal>
          <ol className="mt-14 grid gap-10 md:grid-cols-4">
            {[
              ["01", "Tell us what you need"],
              ["02", "Explore your options"],
              ["03", "Understand the details"],
              ["04", "Move forward with confidence"],
            ].map(([n, t], i) => (
              <Reveal key={n} as="li" delay={i * 110}>
                <span className="display block text-5xl text-brand">{n}</span>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{t}</h3>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <AssistanceCTA />
    </>
  );
}
