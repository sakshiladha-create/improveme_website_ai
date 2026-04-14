import { Clock3, Mail, MapPin, PhoneCall } from "lucide-react";
import { contactDetails } from "@/data/site-data";
import { buildBreadcrumbSchema, buildLocalBusinessSchema, buildPageMetadata } from "@/data/seo";
import { ContactMethod } from "@/components/cards";
import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import { PrimaryButton } from "@/components/ui";

const contactCards = [
  {
    icon: PhoneCall,
    title: "Call the centre",
    copy: "Speak with our team for quick guidance on year groups, subjects, and availability.",
    detail: "+971 4 380 5525",
    href: "tel:+97143805525",
  },
  {
    icon: Mail,
    title: "Email us",
    copy: "Send your enquiry and we will come back with the right course recommendations.",
    detail: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
  },
  {
    icon: MapPin,
    title: "Visit us",
    copy: "Find us in Gold and Diamond Park, Dubai, with easy access for families across the city.",
    detail: "Suite 3016-3017, Building 3",
    href: "/contact#booking-form",
  },
  {
    icon: Clock3,
    title: "Response time",
    copy: "Most parent enquiries receive a response within two working hours.",
    detail: "Mon-Fri 9:30am-8:00pm",
    href: "/contact#booking-form",
  },
];

export const metadata = buildPageMetadata({
  title: "Contact Improve ME Institute",
  description:
    "Contact Improve ME Institute in Dubai to book a free assessment, ask about tutoring programmes, or find the right course for your child.",
  pathname: "/contact",
  keywords: ["contact tutoring centre Dubai", "book free assessment Dubai", "Improve ME Institute contact"],
});

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
  ]);
  const localBusinessSchema = buildLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        eyebrow="Contact Us"
        title="Book a free assessment with Improve ME Institute"
        copy="Speak to our Dubai team about subjects, curricula, year groups, and the right tutoring plan for your child."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <section className="bg-white py-12">
        <div className="section-container">
          <div className="grid grid-cols-2 gap-6 lg:flex lg:divide-x lg:divide-gray-200">
            <ContactMethod label="Primary (Ages 3-10)" value="+971 50 185 2505" href="tel:+971501852505" />
            <ContactMethod label="Lower Secondary" value="+971 58 533 4989" href="tel:+971585334989" />
            <ContactMethod label="Upper Secondary" value="+971 58 547 1457" href="tel:+971585471457" />
            <ContactMethod label="Email" value={contactDetails.email} href={`mailto:${contactDetails.email}`} />
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFF] py-12">
        <div className="section-container grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((item) => {
            const Icon = item.icon;

            return (
              <a key={item.title} href={item.href} className="white-card block p-6 transition-transform hover:-translate-y-1">
                <span className="mb-4 inline-flex rounded-2xl bg-[#E8F0FF] p-3 text-[#2D4AA6]">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mb-3 text-[1.18rem] font-bold tracking-[-0.04em] text-navy-900">{item.title}</h2>
                <p className="mb-3 text-[0.96rem] leading-7 text-[#365080]">{item.copy}</p>
                <p className="mb-0 text-sm font-semibold text-navy-900">{item.detail}</p>
              </a>
            );
          })}
        </div>
      </section>

      <section id="booking-form" className="bg-[#093A78] py-16">
        <div className="section-container grid gap-10 lg:grid-cols-[320px_1fr] lg:items-start">
          <div className="text-white">
            <p className="eyebrow text-yellow-400">Book Free Assessment</p>
            <h2 className="mt-4 font-display text-[3rem] font-bold leading-[1.05] tracking-[-0.05em] text-white">
              Tell us where your child needs support
            </h2>
            <p className="mt-4 text-[1.04rem] leading-8 text-white/90">
              Our team will assess your child's current level and recommend the right group and tutor. There is no cost and no obligation to enrol.
            </p>
            <ul className="mt-6 space-y-3 text-[1rem] text-white/88">
              <li>Free diagnostic assessment before enrolment</li>
              <li>Recommendations matched to curriculum, school, and year group</li>
              <li>Fast replies from the Dubai centre team</li>
            </ul>
            <div className="mt-8 rounded-[22px] border border-white/12 bg-white/7 p-5">
              <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400">Prefer to call first?</p>
              <p className="mb-4 text-sm leading-7 text-white/80">You can speak to our team directly during opening hours if you want a quicker recommendation.</p>
              <PrimaryButton href="tel:+97143805525" className="w-full justify-center">
                Call +971 4 380 5525
              </PrimaryButton>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <section id="map" className="bg-white py-14">
        <div className="section-container grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-navy-900">Visit us in Dubai</h2>
            <p className="mt-4 max-w-xl text-[1.05rem] leading-8 text-[#365080]">
              {contactDetails.addressLines[0]}, {contactDetails.addressLines[1]}.{" "}
              <span className="font-semibold text-navy-900">Hours:</span> {contactDetails.hours}.
            </p>
            <div className="mt-5">
              <a
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-yellow-500"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${contactDetails.addressLines[0]}, ${contactDetails.addressLines[1]}`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Get directions
              </a>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Tip: When you arrive at Gold &amp; Diamond Park, head to Building 3 and ask for Suites 3016–3017.
            </p>
          </div>

          <div className="white-card overflow-hidden">
            <div className="relative aspect-16/10 w-full bg-slate-100">
              <iframe
                title="Improve ME Institute location map"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${contactDetails.addressLines[0]}, ${contactDetails.addressLines[1]}`
                )}&output=embed`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
