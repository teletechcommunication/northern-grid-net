import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/site/LegalPage";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy | Northern-Grid Net" },
      {
        name: "description",
        content: "How refunds are handled for any fees disclosed in connection with a Northern-Grid Net assistance request.",
      },
      { property: "og:title", content: "Refund Policy | Northern-Grid Net" },
      { property: "og:description", content: "How refunds work for disclosed assistance fees." },
      { property: "og:url", content: "/refund-policy" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Refund policy"
      intro="How refunds are handled for any fees that are disclosed to you in advance."
      updated="Reviewed periodically"
      sections={[
        {
          heading: "Scope",
          body: [
            "This policy applies only to fees charged directly by Northern-Grid Net for an assistance request, where those fees were disclosed to you in writing and agreed before the request proceeded.",
          ],
        },
        {
          heading: "Provider charges",
          body: [
            "Northern-Grid Net does not sell internet, cable, television or streaming services. Any charges billed by a provider are governed entirely by that provider's own terms and refund process, not by this policy.",
          ],
        },
        {
          heading: "Requesting a refund",
          body: [
            "To request a refund for a Northern-Grid Net fee, email hello@northerngridtelecom.example with the date of the request and a short description of the issue. We will review the request and respond in writing.",
          ],
        },
        {
          heading: "Review and timing",
          body: [
            "Approved refunds are returned using the original payment method. Processing times depend on your payment provider.",
          ],
        },
        {
          heading: "Questions",
          body: ["If anything here is unclear, contact us before submitting a request."],
        },
      ]}
    />
  ),
});
