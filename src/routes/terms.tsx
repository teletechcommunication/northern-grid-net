import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Northern-Grid Net" },
      {
        name: "description",
        content: "The terms that apply when you use the Northern-Grid Net website and request assistance.",
      },
      { property: "og:title", content: "Terms & Conditions | Northern-Grid Net" },
      { property: "og:description", content: "Terms for using Northern-Grid Net's website and assistance." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Terms & conditions"
      intro="Plain-language terms covering how this website and our assistance requests work."
      updated="Reviewed periodically"
      sections={[
        {
          heading: "Acceptance",
          body: [
            "By using this website you agree to these terms. If you do not agree, please do not use the site.",
          ],
        },
        {
          heading: "Nature of the service",
          body: [
            "Northern-Grid Net provides informational assistance only. We are an independent third-party platform and do not provide internet, cable, television or streaming services.",
            "Nothing on this site is an offer of service, a price quote, or a guarantee of availability, speed or performance.",
          ],
        },
        {
          heading: "Informational content",
          body: [
            "Content is general in nature and may not reflect the specifics of your household, equipment or location. You are responsible for verifying details directly with any provider before entering into an agreement.",
          ],
        },
        {
          heading: "Acceptable use",
          body: [
            "You agree not to misuse the site, attempt to disrupt it, or submit false information through our forms.",
          ],
        },
        {
          heading: "Third-party references",
          body: [
            "Any references to external services or platforms are for informational purposes. Those services are independent and are not affiliated with or endorsed by Northern-Grid Net unless explicitly stated.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the extent permitted by law, Northern-Grid Net is not liable for decisions made based on general information provided through this site.",
          ],
        },
        {
          heading: "Changes",
          body: [
            "We may update these terms as the platform evolves. Continued use of the site after an update constitutes acceptance of the revised terms.",
          ],
        },
      ]}
    />
  ),
});
