import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <section className="bg-white py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[16rem_1fr]">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow text-ink/40">Last updated</p>
            <p className="mt-2 text-sm font-semibold">{updated}</p>
            <nav aria-label="On this page" className="mt-8 space-y-2 border-t border-line pt-6">
              {sections.map((s, i) => (
                <a
                  key={s.heading}
                  href={`#s-${i}`}
                  className="block text-sm text-ink/55 transition-colors hover:text-brand"
                >
                  {s.heading}
                </a>
              ))}
            </nav>
          </aside>
          <div className="max-w-2xl">
            {sections.map((s, i) => (
              <Reveal key={s.heading} as="section" className="mb-12 scroll-mt-32">
                <div id={`s-${i}`} className="scroll-mt-32">
                  <h2 className="text-2xl font-bold tracking-tight">
                    <span className="mr-3 text-brand tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.heading}
                  </h2>
                  {s.body.map((p) => (
                    <p key={p} className="mt-5 text-[0.95rem] leading-relaxed text-ink/65">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
            <p className="rounded-2xl bg-paper p-6 text-xs leading-relaxed text-ink/50">
              Northern-Grid Net is an independent third-party assistance platform. We do not directly
              provide internet, cable, television, or streaming services and are not affiliated
              with or endorsed by any specific provider unless explicitly stated.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
