import { buildBreadcrumbSchema, buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Read how Improve ME Institute collects, uses, and protects personal information from website enquiries and tutoring registrations.",
  pathname: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="bg-white pb-18 pt-28 md:pt-32">
        <div className="section-container max-w-4xl">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-navy-900 md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[1rem] leading-8 text-[#365080]">
            This policy explains how Improve ME Institute handles information submitted through our website forms and communications.
          </p>

          <div className="prose prose-slate mt-10 max-w-none">
            <h2>Information we collect</h2>
            <ul>
              <li>Contact details (parent name, phone number, email address).</li>
              <li>Student details (first name, year group/grade, school name) when provided.</li>
              <li>Enquiry details (subjects, goals, and any notes included in your message).</li>
              <li>Basic technical logs required for security and site reliability.</li>
            </ul>

            <h2>How we use your information</h2>
            <ul>
              <li>To respond to enquiries and arrange assessments.</li>
              <li>To recommend suitable programmes and share requested information.</li>
              <li>To improve our service quality and operational processes.</li>
            </ul>

            <h2>Sharing</h2>
            <p>
              We do not sell personal information. We may share information with trusted service providers only when required to run our operations
              (for example, email delivery or form processing).
            </p>

            <h2>Retention</h2>
            <p>
              We retain enquiry information only as long as needed to respond, follow up, and meet operational or legal requirements.
            </p>

            <h2>Your choices</h2>
            <p>
              You can request access, correction, or deletion of your information by contacting us at{" "}
              <a href="mailto:contact@improvemeinstitute.com">contact@improvemeinstitute.com</a>.
            </p>

            <h2>Updates</h2>
            <p>
              We may update this policy from time to time. The latest version will always be available on this page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

