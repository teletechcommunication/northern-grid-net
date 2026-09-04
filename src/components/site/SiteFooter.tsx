import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Services",
    items: [
      { label: "Internet", to: "/internet" },
      { label: "TV & Cable", to: "/tv-cable" },
      { label: "Streaming", to: "/streaming" },
      { label: "Assistance", to: "/assistance" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Guides", to: "/resources" },
      { label: "FAQ", to: "/faq" },
      { label: "Help Center", to: "/contact" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", to: "/about" },
      { label: "Privacy", to: "/privacy-policy" },
      { label: "Terms", to: "/terms" },
      { label: "Refund Policy", to: "/refund-policy" },
      { label: "Disclaimer", to: "/disclaimer" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="shell py-20 lg:py-28">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display max-w-2xl text-5xl md:text-7xl">
            Stay <span className="text-brand">connected.</span>
          </h2>
          <a
            href="tel:+18447268221"
            className="arrow-slide inline-flex w-fit items-center gap-3 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Call (844) 726-8221
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Internet. TV. Entertainment. Simplified. Independent guidance for your connected
              home.
            </p>
          </div>
          {cols.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="eyebrow text-white/35">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.items.map((i) => (
                  <li key={i.label}>
                    <Link
                      to={i.to}
                      className="text-sm text-white/70 transition-colors hover:text-brand"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div>
            <h3 className="eyebrow text-white/35">Connect</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href="mailto:hello@northerngridtelecom.example" className="hover:text-brand">
                  hello@northerngridtelecom.example
                </a>
              </li>
              <li>
                <a href="tel:+18447268221" className="hover:text-brand">
                  (844) 726-8221
                </a>
              </li>
              <li className="text-white/40">Mon–Fri, 9am – 6pm</li>
              <li className="text-white/40">
                Corporations Canada
                <br />
                C. D. Howe Building
                <br />
                235 Queen St
                <br />
                Ottawa ON K1A 0H5
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-xs leading-relaxed text-white/45">
          Northern-Grid Net is an independent third-party assistance platform. We do not directly provide
          internet, cable, television, or streaming services and are not affiliated with or
          endorsed by any specific provider unless explicitly stated. Registered address:
          Corporations Canada, C. D. Howe Building, 235 Queen St, Ottawa ON K1A 0H5.
        </div>

        <p className="mt-8 text-xs text-white/35">
          © {new Date().getFullYear()} Northern-Grid Net. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
