import { PageHero } from "@/components/page-hero";
import { EnquiryForm } from "@/components/enquiry-form";

export default function EnrolmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Enrolment Form"
        title="Start your child's Improve ME journey"
        copy="Use the same enquiry structure as the reference site to request a place or a free assessment."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Enrolment Form", href: "/enrolment-page" },
        ]}
      />
      <section className="bg-[#093A78] py-16">
        <div className="section-container max-w-4xl">
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
