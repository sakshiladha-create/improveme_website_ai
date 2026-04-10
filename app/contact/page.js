import { contactDetails } from "@/data/site-data";
import { ContactMethod } from "@/components/cards";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's find the right programme for your child"
        copy="Book your free assessment or reach out with any questions — we respond within two hours."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <section className="bg-white py-12">
        <div className="section-container">
          <div className="grid grid-cols-2 gap-6 lg:flex lg:divide-x lg:divide-gray-200">
            <ContactMethod label="Primary (Ages 3–10)" value="+971 50 185 2505" href="tel:+971501852505" />
            <ContactMethod label="Lower Secondary" value="+971 58 533 4989" href="tel:+971585334989" />
            <ContactMethod label="Upper Secondary" value="+971 58 547 1457" href="tel:+971585471457" />
            <ContactMethod label="Email" value={contactDetails.email} href={`mailto:${contactDetails.email}`} />
          </div>
        </div>
      </section>

      <section id="booking-form" className="bg-[#093A78] py-16">
        <div className="section-container grid gap-10 lg:grid-cols-[320px_1fr] lg:items-start">
          <div className="text-white">
            <p className="eyebrow text-yellow-400">Book Free Assessment</p>
            <h2 className="mt-4 font-display text-[3rem] font-bold leading-[1.05] tracking-[-0.05em] text-white">
              Improve ME Institute
            </h2>
            <p className="mt-4 text-[1.04rem] leading-8 text-white/90">
              Our team will assess your child's current level and recommend the right group and tutor. There's no cost and no obligation to enrol.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
