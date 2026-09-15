import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactInfo from "@/components/sections/ContactInfo";
import ResponseTime from "@/components/sections/ResponseTime";

export const metadata: Metadata = {
  title: "Contact Us | Ordo Technical Services LLC",
  description:
    "Get in touch with Ordo Technical Services LLC -- for new projects, maintenance partnerships, or specialist district cooling requirements.",
};

// Contact page: PageHeader (shared component) + ContactInfo (details + form)
// + ResponseTime (SLA table). No CTA section here -- the whole page IS
// the call to action, so a second one at the bottom would be redundant.
export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Let's work together."
        description="Whether you have a new project in mind, need a reliable maintenance partner, or are looking for a specialist district cooling technical team -- Ordo is ready to talk."
      />
      <ContactInfo />
      <ResponseTime />
    </main>
  );
}
