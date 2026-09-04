import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import living from "../assets/hero-living-room.jpg";

export const Route = createFileRoute("/assistance")({
  head: () => ({
    meta: [
      { title: "Request Independent Assistance | Northern-Grid Net" },
      {
        name: "description",
        content:
          "Tell us what you're looking for and request independent third-party assistance exploring internet, TV, cable and streaming categories.",
      },
      { property: "og:title", content: "Request Independent Assistance | Northern-Grid Net" },
      {
        property: "og:description",
        content: "Guided, independent assistance for connectivity and entertainment questions.",
      },
      { property: "og:url", content: "/assistance" },
    ],
    links: [{ rel: "canonical", href: "/assistance" }],
  }),
  component: AssistancePage,
});

const categories = [
  {
    id: "internet",
    label: "Internet",
    lead: "Looking for home internet?",
    note: "We'll walk through how your household uses the connection, where coverage matters most, and what to ask before you decide.",
  },
  {
    id: "tv",
    label: "TV & Cable",
    lead: "Exploring television options?",
    note: "We'll explain how live viewing, cable and on-demand generally differ, and which questions apply to your household.",
  },
  {
    id: "streaming",
    label: "Streaming",
    lead: "Looking for entertainment options?",
    note: "We'll cover how streaming reaches your screens and how it can sit alongside traditional television.",
  },
  {
    id: "multiple",
    label: "Multiple services",
    lead: "Considering more than one category?",
    note: "We'll help you keep the categories separate and clear so nothing gets blurred together.",
  },
  {
    id: "unsure",
    label: "Not sure yet",
    lead: "Not sure where to start?",
    note: "Describe the situation in your own words. We'll point you toward the right category first.",
  },
] as const;

function AssistancePage() {
  const [category, setCategory] = useState<string>("internet");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const current = categories.find((c) => c.id === category)!;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(fd.get("name") ?? "").trim()) next["name"] = "Please enter your name.";
    const email = String(fd.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next["email"] = "Please enter a valid email.";
    if (!String(fd.get("details") ?? "").trim()) next["details"] = "Please tell us what you need.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Assistance"
        title={
          <>
            Tell us what you're <span className="text-brand">looking for.</span>
          </>
        }
        intro="A short, guided request. No pricing, no provider recommendations — just clear information about the category you're exploring."
        image={living}
        imageAlt="Living room with connected devices"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow text-brand">Step 01</p>
              <h2 className="display mt-4 text-3xl md:text-4xl">Choose a category</h2>
              <div className="mt-7 flex flex-wrap gap-3">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    aria-pressed={category === c.id}
                    onClick={() => setCategory(c.id)}
                    className={`rounded-full border px-5 py-3 text-sm font-semibold transition-all ${
                      category === c.id
                        ? "border-ink bg-ink text-white"
                        : "border-line hover:border-ink/40"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
              <div
                key={current.id}
                className="mt-8 animate-in fade-in slide-in-from-bottom-3 rounded-3xl bg-paper p-7 duration-500"
              >
                <h3 className="text-xl font-bold tracking-tight">{current.lead}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{current.note}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-[2rem] border border-line p-7 lg:p-10">
              <p className="eyebrow text-brand">Step 02</p>
              <h2 className="display mt-4 text-3xl md:text-4xl">Your request</h2>

              {sent ? (
                <div
                  role="status"
                  className="mt-8 animate-in fade-in rounded-3xl bg-ink p-10 text-white duration-500"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-xl">
                    ✓
                  </span>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight">Request received</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                    Thanks — this is a demonstration form, so nothing was transmitted. In a live
                    setup our team would reply during business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5">
                  <Field id="a-name" name="name" label="Full name" error={errors["name"]} />
                  <Field id="a-email" name="email" label="Email" type="email" error={errors["email"]} />
                  <Field id="a-zip" name="zip" label="ZIP code (optional)" />
                  <div>
                    <label htmlFor="a-details" className="text-sm font-semibold">
                      What are you looking for?
                    </label>
                    <textarea
                      id="a-details"
                      name="details"
                      rows={5}
                      aria-invalid={Boolean(errors["details"])}
                      className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
                    />
                    {errors["details"] ? (
                      <p className="mt-2 text-xs text-destructive">{errors["details"]}</p>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    className="arrow-slide mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
                  >
                    Submit request
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </button>
                  <p className="text-xs leading-relaxed text-ink/45">
                    Independent third-party assistance platform. We do not provide internet, cable,
                    television or streaming services.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function Field({
  id,
  name,
  label,
  type = "text",
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  error?: string | undefined;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        aria-invalid={Boolean(error)}
        className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
      />
      {error ? <p className="mt-2 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
