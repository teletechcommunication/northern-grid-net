import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Wifi, Tv, Smartphone, Router } from "lucide-react";
import living from "../assets/hero-living-room.jpg";
import darkHome from "../assets/dark-home.jpg";
import tvLight from "../assets/tv-light.jpg";
import streamingDark from "../assets/streaming-dark.jpg";
import { Reveal } from "../components/site/Reveal";
import { ServiceSelector } from "../components/site/ServiceSelector";
import { DeviceVisualizer } from "../components/site/DeviceVisualizer";
import { FaqAccordion, faqItems } from "../components/site/FaqAccordion";
import { Testimonials } from "../components/site/Testimonials";
import { AssistanceCTA } from "../components/site/AssistanceCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Internet, TV & Streaming Assistance | Northern-Grid Net" },
      {
        name: "description",
        content:
          "Explore internet, TV, cable and streaming options with independent third-party assistance built around how you actually live.",
      },
      { property: "og:title", content: "Internet, TV & Streaming Assistance | Northern-Grid Net" },
      {
        property: "og:description",
        content:
          "Independent assistance for exploring internet, TV, cable and streaming options.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const categories = [
  {
    n: "01",
    title: "Internet",
    desc: "Home connectivity and Wi-Fi.",
    to: "/internet" as const,
    img: darkHome,
    alt: "Modern home lit in the evening",
  },
  {
    n: "02",
    title: "TV & Cable",
    desc: "Television and entertainment options.",
    to: "/tv-cable" as const,
    img: tvLight,
    alt: "Television on a bright wall",
  },
  {
    n: "03",
    title: "Streaming",
    desc: "Digital entertainment information.",
    to: "/streaming" as const,
    img: streamingDark,
    alt: "Evening streaming at home",
  },
  {
    n: "04",
    title: "Assistance",
    desc: "Independent service guidance.",
    to: "/assistance" as const,
    img: living,
    alt: "Connected living room",
  },
];

const orbitNodes = [
  { id: "wifi", label: "Wi-Fi", icon: Wifi, x: 50, y: 4 },
  { id: "tv", label: "TV", icon: Tv, x: 94, y: 50 },
  { id: "streaming", label: "Streaming", icon: Smartphone, x: 50, y: 96 },
  { id: "router", label: "Router", icon: Router, x: 6, y: 50 },
];

const marqueeTags = [
  "Internet",
  "TV & Cable",
  "Streaming",
  "Wi-Fi",
  "Smart Home",
  "Assistance",
];

function Home() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      {/* HERO */}
      <section
        className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-white"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <img src={living} alt="" className="h-full w-full object-cover" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/75 via-transparent to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 20%, var(--brand) 0%, transparent 45%)",
          }}
        />

        <div className="shell relative w-full pt-40 pb-16 lg:pb-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.7rem] font-bold tracking-[0.14em] text-white/80 uppercase backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Internet · TV · Entertainment · Simplified
            </span>
            <h1 className="display mt-7 max-w-3xl text-[2.8rem] leading-[0.98] sm:text-6xl lg:text-[5.5rem]">
              Everything connected.
              <br />
              <span className="relative inline-block text-brand">
                One simpler place.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 18"
                  className="absolute -bottom-2 left-0 h-3 w-full text-brand/60"
                >
                  <path
                    d="M2 13C60 4 220 2 298 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-white/65 md:text-lg">
              Explore internet, TV, cable, streaming, and connectivity options with independent
              assistance designed around the way you live.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="tel:+18447268221"
                className="arrow-slide inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Call (844) 726-8221
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a
                href="tel:+18447268221"
                className="inline-flex items-center rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Call (844) 726-8221
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 sm:grid-cols-4">
              {orbitNodes.map((node) => (
                <div
                  key={node.id}
                  className="flex items-center gap-2.5 bg-ink/40 px-4 py-3.5 backdrop-blur-sm"
                >
                  <node.icon aria-hidden="true" className="h-4 w-4 shrink-0 text-brand" />
                  <span className="text-xs font-bold tracking-wide text-white/75">
                    {node.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-8 right-[max(1.25rem,calc((100%-84rem)/2+1.25rem))] hidden flex-col items-center gap-2 text-white/50 lg:flex"
        >
          <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase [writing-mode:vertical-lr]">
            Scroll
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </section>

      <div className="relative overflow-hidden border-b border-line bg-ink py-4">
        <div className="marquee-track flex w-max shrink-0 gap-10 whitespace-nowrap">
          {[...marqueeTags, ...marqueeTags].map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="flex items-center gap-3 text-xs font-bold tracking-[0.14em] text-white/40 uppercase"
            >
              {tag}
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand/70" />
            </span>
          ))}
        </div>
      </div>

      {/* QUICK SERVICE NAV */}
      <section aria-label="Service categories" className="border-y border-line bg-white">
        <div className="shell grid divide-y divide-line lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {categories.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              onMouseEnter={() => setHovered(c.title)}
              onMouseLeave={() => setHovered(null)}
              className="arrow-slide group relative overflow-hidden px-2 py-10 transition-colors duration-500 hover:bg-ink lg:px-8"
            >
              <span
                className={`pointer-events-none absolute right-4 top-4 h-20 w-28 overflow-hidden rounded-xl transition-all duration-500 ${
                  hovered === c.title ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden="true"
              >
                <img src={c.img} alt="" loading="lazy" className="h-full w-full object-cover" />
              </span>
              <span className="eyebrow block text-brand">{c.n}</span>
              <span className="mt-6 block text-2xl font-bold tracking-tight transition-colors group-hover:text-white">
                {c.title}
              </span>
              <span className="mt-2 block max-w-[16rem] text-sm text-ink/55 transition-colors group-hover:text-white/55">
                {c.desc}
              </span>
              <span className="arrow mt-8 block text-lg text-ink/40 transition-colors group-hover:text-brand">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SELECTOR */}
      <section className="bg-paper py-20 lg:py-32">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="display max-w-xl text-4xl md:text-6xl">
                What are you looking for?
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-ink/55">
                Pick a starting point. We'll show the considerations that usually matter for that
                choice — no pricing claims, no provider promises.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="mt-14">
            <ServiceSelector />
          </Reveal>
        </div>
      </section>

      {/* INTERNET DARK SECTION */}
      <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-32">
        <div className="shell">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
              <h2 className="display text-4xl md:text-6xl">Your home runs on the internet.</h2>
              <p className="max-w-md text-base leading-relaxed text-white/55">
                One connection quietly supports work, entertainment and everyday life. Knowing how
                it's used at home makes every other decision easier.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="zoom-media relative mt-14 overflow-hidden rounded-[2.5rem]">
            <div className="relative">
              <img
                src={darkHome}
                alt="Contemporary connected home glowing at dusk"
                loading="lazy"
                width={1600}
                height={912}
                className="h-[22rem] w-full object-cover md:h-[30rem]"
              />
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
                aria-hidden="true"
              >
                <defs>
                  <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M60 0H0V60" fill="none" stroke="rgba(255,255,255,0.09)" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Work", "Reliable connectivity for remote work and productivity."],
              ["Entertainment", "Support for streaming and connected entertainment."],
              ["Everyday life", "Phones, tablets, smart devices, browsing, and more."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="lift h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-brand/60">
                  <h3 className="text-xl font-bold tracking-tight">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-10">
            <a
              href="tel:+18447268221"
              className="arrow-slide inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Call (844) 726-8221
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </Reveal>

          <Reveal delay={140} className="mt-20">
            <p className="eyebrow text-brand">Connected home</p>
            <h3 className="display mt-4 mb-10 max-w-lg text-3xl md:text-4xl">
              Everything at home shares one network.
            </h3>
            <DeviceVisualizer />
          </Reveal>
        </div>
      </section>

      {/* TV & CABLE LIGHT */}
      <section className="bg-white py-20 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-brand">TV & Cable</p>
            <h2 className="display mt-5 max-w-2xl text-4xl md:text-6xl">
              Entertainment starts at home.
            </h2>
          </Reveal>

          <div className="relative mt-14 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <Reveal className="zoom-media overflow-hidden rounded-[2.5rem] bg-paper">
              <img
                src={tvLight}
                alt="Oversized television mounted in a bright minimal living space"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </Reveal>
            <div className="grid grid-cols-2 gap-4 self-stretch">
              {["Movies", "Sports", "News", "Family", "Live TV", "On-demand"].map((t, i) => (
                <Reveal key={t} delay={i * 60}>
                  <div className="lift flex h-full items-end rounded-2xl border border-line bg-paper p-5 hover:border-brand">
                    <span className="text-base font-semibold tracking-tight">{t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-8">
            {["Live viewing", "Recorded", "On-demand", "Family profiles", "Sports"].map((t) => (
              <span key={t} className="text-sm font-medium text-ink/50">
                {t}
              </span>
            ))}
            <Link
              to="/tv-cable"
              className="arrow-slide ml-auto inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              Explore TV & cable
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STREAMING DARK */}
      <section className="bg-ink-2 py-20 text-white lg:py-32">
        <div className="shell">
          <Reveal>
            <h2 className="display max-w-2xl text-4xl md:text-6xl">
              Traditional TV. Streaming. Or both.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["Live TV", "Explore information about live entertainment.", tvLight],
              ["Streaming", "Explore digital entertainment platforms.", streamingDark],
              ["Hybrid", "Understand how traditional TV and streaming can work together.", living],
            ].map(([t, d, img], i) => (
              <Reveal key={t as string} delay={i * 90}>
                <article className="lift zoom-media group h-full overflow-hidden rounded-[2rem] border border-white/10 bg-ink hover:border-brand/60">
                  <img
                    src={img as string}
                    alt=""
                    loading="lazy"
                    className="h-52 w-full object-cover opacity-70 transition-opacity group-hover:opacity-100"
                  />
                  <div className="p-7">
                    <h3 className="text-xl font-bold tracking-tight">{t as string}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">{d as string}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-xs text-white/35">
            Any streaming platforms referenced are independent external services and are not
            affiliated with Northern-Grid Net.
          </p>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-paper py-20 lg:py-32">
        <div className="shell">
          <Reveal>
            <h2 className="display max-w-xl text-4xl md:text-6xl">Find what fits your lifestyle.</h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink/55">
              An informational comparison of what each category generally covers — not a provider
              or pricing comparison.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["Internet", ["Connectivity", "Wi-Fi", "Work", "Gaming", "Streaming"]],
              ["TV & Cable", ["Live channels", "Entertainment", "Family viewing", "Sports", "News"]],
              ["Streaming", ["On-demand", "Mobile viewing", "Smart TV", "Flexible entertainment"]],
            ].map(([t, items], i) => (
              <Reveal key={t as string} delay={i * 90}>
                <div className="lift h-full rounded-[2rem] border border-line bg-white p-8 hover:border-brand">
                  <h3 className="text-2xl font-bold tracking-tight">{t as string}</h3>
                  <ul className="mt-7 space-y-3">
                    {(items as string[]).map((it) => (
                      <li
                        key={it}
                        className="flex items-center gap-3 border-b border-line pb-3 text-sm text-ink/65 last:border-0"
                      >
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cyan" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20 lg:py-32">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-brand">How it works</p>
            <h2 className="display mt-5 max-w-xl text-4xl md:text-6xl">Four simple steps.</h2>
          </Reveal>
          <ol className="mt-16 grid gap-10 md:grid-cols-4">
            {[
              ["01", "Tell us what you need", "Describe your household in everyday language."],
              ["02", "Explore your options", "We outline the relevant categories and terms."],
              ["03", "Understand the details", "Neutral information, no provider promises."],
              ["04", "Move forward with confidence", "Take the next step when it feels right."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} as="li" delay={i * 110}>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-6 hidden h-px w-full origin-left bg-line md:block"
                  />
                  <span className="display relative block text-5xl text-brand md:text-6xl">
                    {n}
                  </span>
                  <h3 className="mt-6 text-lg font-bold tracking-tight">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">{d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-ink py-20 text-white lg:py-32">
        <div className="shell">
          <Reveal>
            <h2 className="display max-w-xl text-4xl md:text-6xl">
              Less confusion. More connection.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2">
            {[
              ["01", "Independent", "We are a third-party assistance platform."],
              ["02", "Simple", "Information is presented clearly."],
              ["03", "Flexible", "Explore multiple service categories."],
              ["04", "Transparent", "We clearly explain our role."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 90}>
                <div className="group h-full bg-ink p-10 transition-colors duration-500 hover:bg-ink-3">
                  <span className="display block text-4xl text-white/15 transition-colors duration-500 group-hover:text-brand">
                    {n}
                  </span>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight">{t}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIFESTYLE */}
      <section className="relative">
        <img
          src={living}
          alt="Family living room with a television, laptop and smart devices"
          loading="lazy"
          className="h-[26rem] w-full object-cover md:h-[34rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />
        <div className="shell absolute inset-x-0 bottom-0 pb-14">
          <Reveal>
            <h2 className="display max-w-2xl text-4xl text-white md:text-6xl">
              Built around real life.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              From morning work calls to evening entertainment, connectivity has become part of
              everyday life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="bg-paper py-20 lg:py-32">
        <div className="shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="display max-w-xl text-4xl md:text-6xl">The connected home guide</h2>
              <Link
                to="/resources"
                className="arrow-slide inline-flex items-center gap-2 text-sm font-semibold text-brand"
              >
                All guides
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-6">
            {guides.slice(0, 4).map((g, i) => (
              <Reveal
                key={g.title}
                delay={i * 80}
                className={i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-2" : "md:col-span-3"}
              >
                <GuideCard {...g} large={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="shell">
          <Reveal>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-20 lg:py-32">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="display text-4xl md:text-5xl">Questions? Start here.</h2>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink/55">
              General, internet, TV & cable, streaming and assistance.
            </p>
            <Link
              to="/faq"
              className="arrow-slide mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              See all questions
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <FaqAccordion items={faqItems.slice(0, 5)} />
          </Reveal>
        </div>
      </section>

      <AssistanceCTA />
    </>
  );
}

export const guides = [
  {
    category: "Wi-Fi",
    title: "How to understand your home Wi-Fi",
    desc: "Placement, coverage and the everyday habits that shape a home network.",
    img: living,
  },
  {
    category: "Internet",
    title: "Internet speed: what actually matters?",
    desc: "Why household usage often explains more than a single number.",
    img: darkHome,
  },
  {
    category: "Entertainment",
    title: "Cable TV vs streaming",
    desc: "How the two approaches differ and where they overlap.",
    img: tvLight,
  },
  {
    category: "Devices",
    title: "How smart TVs connect",
    desc: "Wired, wireless and what changes between the two at home.",
    img: streamingDark,
  },
  {
    category: "Network",
    title: "How many devices can your network handle?",
    desc: "A plain-language look at simultaneous connections.",
    img: living,
  },
  {
    category: "Deciding",
    title: "What to consider before choosing a service",
    desc: "The questions worth writing down before you start comparing.",
    img: darkHome,
  },
];

export function GuideCard({
  category,
  title,
  desc,
  img,
  large,
}: {
  category: string;
  title: string;
  desc: string;
  img: string;
  large?: boolean;
}) {
  return (
    <article className="lift zoom-media group h-full overflow-hidden rounded-[2rem] border border-line bg-white">
      <img
        src={img}
        alt=""
        loading="lazy"
        className={`w-full object-cover ${large ? "h-64 md:h-80" : "h-48"}`}
      />
      <div className="p-7">
        <span className="eyebrow text-brand">{category}</span>
        <h3
          className={`mt-4 font-bold tracking-tight ${large ? "text-2xl md:text-3xl" : "text-xl"}`}
        >
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/55">{desc}</p>
        <span className="arrow-slide mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-brand">
          Read more
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </article>
  );
}
