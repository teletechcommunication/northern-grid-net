import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "../components/site/PageHero";
import { Reveal } from "../components/site/Reveal";
import { Field } from "./assistance";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Northern-Grid Net | Independent Assistance" },
      {
        name: "description",
        content:
          "Contact Northern-Grid Net with a question about internet, TV, cable or streaming categories. Independent third-party assistance.",
      },
      { property: "og:title", content: "Contact Northern-Grid Net | Independent Assistance" },
      {
        property: "og:description",
        content: "Send a request and we'll point you in the right direction.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(fd.get("name") ?? "").trim()) next["name"] = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(fd.get("email") ?? "")))
      next["email"] = "Please enter a valid email address.";
    const phone = String(fd.get("phone") ?? "").trim();
    if (phone && !/^[0-9+()\-\s]{7,}$/.test(phone)) next["phone"] = "Please check the phone number.";
    if (!String(fd.get("message") ?? "").trim()) next["message"] = "Please add a short message.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's get you pointed in <span className="text-brand">the right direction.</span>
          </>
        }
        intro="Send a question about internet, TV, cable or streaming and we'll reply with clear, neutral information."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <h2 className="display text-3xl md:text-4xl">Contact information</h2>
              <dl className="mt-8 space-y-6 text-sm">
                <div>
                  <dt className="eyebrow text-ink/40">Email</dt>
                  <dd className="mt-1">
                    <a href="mailto:hello@northerngridtelecom.example" className="font-semibold hover:text-brand">
                      hello@northerngridtelecom.example
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink/40">Phone</dt>
                  <dd className="mt-1">
                    <a href="tel:+18447268221" className="font-semibold hover:text-brand">
                      (844) 726-8221
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink/40">Business hours</dt>
                  <dd className="mt-1 text-ink/60">Monday – Friday, 9am – 6pm</dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink/40">Registered address</dt>
                  <dd className="mt-1 text-ink/60">
                    Corporations Canada
                    <br />
                    C. D. Howe Building
                    <br />
                    235 Queen St
                    <br />
                    Ottawa ON K1A 0H5
                  </dd>
                </div>
              </dl>
              <p className="mt-10 max-w-xs rounded-2xl bg-paper p-5 text-xs leading-relaxed text-ink/50">
                Northern-Grid Net is an independent third-party assistance platform and is not affiliated
                with any provider unless explicitly stated.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-[2rem] border border-line p-7 lg:p-10">
              {sent ? (
                <div role="status" className="animate-in fade-in rounded-3xl bg-ink p-10 text-white duration-500">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-xl">✓</span>
                  <h2 className="mt-6 text-2xl font-bold tracking-tight">Message sent</h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                    Thanks for reaching out. This demonstration form doesn't transmit data — in a
                    live setup we'd reply during business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="c-name" name="name" label="Full name" error={errors["name"]} />
                    <Field id="c-email" name="email" label="Email" type="email" error={errors["email"]} />
                    <Field id="c-phone" name="phone" label="Phone" type="tel" error={errors["phone"]} />
                    <Field id="c-zip" name="zip" label="ZIP code" />
                  </div>
                  <div>
                    <label htmlFor="c-interest" className="text-sm font-semibold">
                      Service interest
                    </label>
                    <select
                      id="c-interest"
                      name="interest"
                      defaultValue="Internet"
                      className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
                    >
                      {["Internet", "TV & Cable", "Streaming", "Multiple Services", "General Question"].map(
                        (o) => (
                          <option key={o}>{o}</option>
                        ),
                      )}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="c-message" className="text-sm font-semibold">
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      rows={5}
                      aria-invalid={Boolean(errors["message"])}
                      className="mt-2 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
                    />
                    {errors["message"] ? (
                      <p className="mt-2 text-xs text-destructive">{errors["message"]}</p>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    className="arrow-slide inline-flex w-fit items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand"
                  >
                    Submit request
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
