import { createFileRoute } from "@tanstack/react-router";
import streamingDark from "../assets/streaming-dark.jpg";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { AssistanceCTA } from "../components/site/AssistanceCTA";

export const Route = createFileRoute("/streaming")({
  head: () => ({
    meta: [
      { title: "Streaming & On-Demand Information | Northern-Grid Net" },
      {
        name: "description",
        content:
          "How streaming, on-demand, smart TV and mobile viewing generally work — independent information with no affiliation to any platform.",
      },
      { property: "og:title", content: "Streaming & On-Demand Information | Northern-Grid Net" },
      {
        property: "og:description",
        content: "Independent information about streaming, on-demand and smart TV viewing.",
      },
      { property: "og:url", content: "/streaming" },
    ],
    links: [{ rel: "canonical", href: "/streaming" }],
  }),
  component: StreamingPage,
});

const nodes = [
  { label: "Smart TV", x: 50, y: 8 },
  { label: "Laptop", x: 88, y: 34 },
  { label: "Tablet", x: 78, y: 80 },
  { label: "Phone", x: 22, y: 80 },
  { label: "Streaming stick", x: 12, y: 34 },
];

function StreamingPage() {
  return (
    <>
      <PageHero
        eyebrow="Streaming"
        title={
          <>
            Entertainment without <span className="text-brand">the boundaries.</span>
          </>
        }
        intro="Streaming has changed where and how households watch. Here's a neutral explanation of how the pieces fit together."
        image={streamingDark}
        imageAlt="Person streaming a film at home in the evening"
      />

      <section className="bg-ink-2 py-20 text-white lg:py-28">
        <div className="shell grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="eyebrow text-brand">Ecosystem</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              One connection, many screens.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55">
              Streaming apps reach different screens in different ways. Understanding the path from
              your home network to each device makes troubleshooting far less mysterious.
            </p>
            <p className="mt-6 text-xs leading-relaxed text-white/35">
              Streaming platforms are independent external services and are not affiliated with or
              endorsed by Northern-Grid Net unless explicitly stated.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <div className="relative aspect-square w-full rounded-[2rem] border border-white/10 bg-ink p-4">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                {nodes.map((n) => (
                  <line
                    key={n.label}
                    x1="50"
                    y1="50"
                    x2={n.x}
                    y2={n.y}
                    stroke="rgba(255,92,53,0.45)"
                    strokeWidth="0.4"
                    strokeDasharray="2 3"
                    style={{ animation: "dash-flow 3s linear infinite" }}
                  />
                ))}
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-brand px-5 py-4 text-center text-xs font-semibold">
                Home
                <br />
                network
              </div>
              {nodes.map((n) => (
                <span
                  key={n.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-ink-2 px-4 py-2 text-[11px] font-semibold text-white/75"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  {n.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-6 md:grid-cols-3">
          {[
            ["Streaming", "Apps delivered over your home connection rather than a broadcast feed."],
            ["On-demand", "Libraries you browse and start whenever it suits you."],
            ["Live entertainment", "Some platforms also carry live events and channels."],
            ["Smart TV", "Built-in apps that connect directly through your network."],
            ["Mobile entertainment", "Watching on phones and tablets, at home or away."],
            ["Family viewing", "Profiles, shared screens and household preferences."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="lift h-full rounded-[2rem] border border-line bg-paper p-8 hover:border-brand">
                <h2 className="text-xl font-bold tracking-tight">{t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <AssistanceCTA
        title="Exploring entertainment options?"
        copy="Tell us how your household watches and we'll explain what each category generally involves."
      />
    </>
  );
}
