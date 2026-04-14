import { buildBreadcrumbSchema, buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata({
  title: "Terms of Use",
  description:
    "Website terms for Improve ME Institute including acceptable use, content, and enquiries submitted through our website.",
  pathname: "/terms",
});

export default function TermsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Terms", href: "/terms" },
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
            Terms of Use
          </h1>
          <p className="mt-4 text-[1rem] leading-8 text-[#365080]">
            These terms apply to the use of this website and any enquiries submitted through our online forms.
          </p>

          <div className="prose prose-slate mt-10 max-w-none">
            <h2>Use of the website</h2>
            <p>
              You agree to use this website lawfully and not to misuse, attempt to disrupt, or attempt to gain unauthorised access to the site,
              systems, or data.
            </p>

            <h2>Accuracy of information</h2>
            <p>
              We aim to keep website content accurate and up to date. Programme availability, schedules, and pricing may change; contact our team to
              confirm the latest details.
            </p>

            <h2>Enquiries</h2>
            <p>
              Submitting an enquiry does not create a contract for tutoring services. Our team will respond with next steps and confirm details before
              any enrolment.
            </p>

            <h2>Intellectual property</h2>
            <p>
              Website content, branding, and design elements are the property of Improve ME Institute or its licensors and may not be reused without
              permission.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about these terms, contact{" "}
              <a href="mailto:contact@improvemeinstitute.com">contact@improvemeinstitute.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

