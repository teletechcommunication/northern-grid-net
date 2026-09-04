import { createFileRoute } from "@tanstack/react-router";
import tvLight from "../assets/tv-light.jpg";
import streamingDark from "../assets/streaming-dark.jpg";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { AssistanceCTA } from "../components/site/AssistanceCTA";

export const Route = createFileRoute("/tv-cable")({
  head: () => ({
    meta: [
      { title: "TV & Cable Information | Northern-Grid Net" },
      {
        name: "description",
        content:
          "Understand live TV, cable, sports, movies, family entertainment, news and on-demand viewing with neutral third-party information.",
      },
      { property: "og:title", content: "TV & Cable Information | Northern-Grid Net" },
      {
        property: "og:description",
        content: "Neutral information about live TV, cable and on-demand viewing.",
      },
      { property: "og:url", content: "/tv-cable" },
    ],
    links: [{ rel: "canonical", href: "/tv-cable" }],
  }),
  component: TvCablePage,
});

const sections = [
  ["Live TV", "Scheduled programming as it airs, often the anchor of a household's evening."],
  ["Cable", "Traditional delivery into the home, usually alongside other services."],
  ["Sports", "Live events where timing and availability matter most to viewers."],
  ["Movies", "Feature-length viewing across live channels and on-demand libraries."],
  ["Family entertainment", "Shared viewing, profiles and household preferences."],
  ["News", "Ongoing coverage that many households keep within easy reach."],
  ["On-demand", "Watching on your own schedule rather than a broadcast schedule."],
];

function TvCablePage() {
  return (
    <>
      <PageHero
        eyebrow="TV & Cable"
        title={
          <>
            More ways to watch <span className="text-brand">what you love.</span>
          </>
        }
        intro="A cinematic look at how television reaches modern homes — presented as general information, without provider or pricing claims."
        image={streamingDark}
        imageAlt="Cinematic evening living room with a television"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <Reveal className="zoom-media overflow-hidden rounded-[2.5rem]">
            <img
              src={tvLight}
              alt="Oversized television mounted on a bright minimal wall"
              loading="lazy"
              className="h-[20rem] w-full object-cover md:h-[32rem]"
            />
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line md:grid-cols-2">
            {sections.map(([t, d], i) => (
              <Reveal key={t} delay={i * 60}>
                <div className="group h-full bg-white p-9 transition-colors duration-500 hover:bg-paper">
                  <span className="display block text-3xl text-line transition-colors duration-500 group-hover:text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-5 text-2xl font-bold tracking-tight">{t}</h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/55">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="display text-4xl md:text-5xl">How households usually watch.</h2>
          </Reveal>
          <Reveal delay={80}>
            <ul className="space-y-5">
              {[
                "Some evenings are planned around a live broadcast.",
                "Others are entirely on-demand and unplanned.",
                "Screens often move between the living room, kitchen and bedrooms.",
                "Family members frequently watch different things at once.",
              ].map((t) => (
                <li key={t} className="border-b border-white/10 pb-5 text-lg text-white/65">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <AssistanceCTA
        title="Explore TV & cable options"
        copy="Tell us how your household watches and we'll explain the categories involved — without inventing channel counts or prices."
      />
    </>
  );
}
