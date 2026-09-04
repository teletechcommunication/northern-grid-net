import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/site/LegalPage";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | Northern-Grid Net" },
      {
        name: "description",
        content:
          "Northern-Grid Net is an independent third-party assistance platform and is not an internet, cable, television or streaming provider.",
      },
      { property: "og:title", content: "Disclaimer | Northern-Grid Net" },
      {
        property: "og:description",
        content: "Our independent third-party role, explained clearly.",
      },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      intro="A clear explanation of who we are, what we do, and what we deliberately do not claim."
      updated="Reviewed periodically"
      sections={[
        {
          heading: "Independent third-party role",
          body: [
            "Northern-Grid Net is an independent third-party assistance platform. We do not directly provide internet, cable, television, or streaming services and are not affiliated with or endorsed by any specific provider unless explicitly stated.",
            "We do not operate networks, own infrastructure, or act as an authorised agent for any provider.",
          ],
        },
        {
          heading: "Informational purpose only",
          body: [
            "All content on this site is general information intended to help you understand service categories and terminology. It is not advice about a specific product, address, or agreement.",
          ],
        },
        {
          heading: "No guarantees",
          body: [
            "We make no guarantees regarding availability, coverage, speed, performance, pricing, savings, or the suitability of any provider or service.",
          ],
        },
        {
          heading: "Third-party trademarks",
          body: [
            "Any provider, platform or product names that may appear are the property of their respective owners and are referenced for identification and informational purposes only.",
          ],
        },
        {
          heading: "Your responsibility",
          body: [
            "Always confirm details, terms and availability directly with a provider before entering into any agreement.",
          ],
        },
      ]}
    />
  ),
});
