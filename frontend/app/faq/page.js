import { faqItems } from "@/data/site-data";
import { PageHero } from "@/components/page-hero";

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        copy="A few of the common questions families ask before joining Improve ME Institute."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
      />
      <section className="bg-white py-16">
        <div className="section-container max-w-4xl space-y-4">
          {faqItems.map((item) => (
            <article key={item.question} className="white-card p-6">
              <h2 className="mb-3 text-[1.45rem] font-bold tracking-[-0.03em] text-navy-900">{item.question}</h2>
              <p className="mb-0 text-[1rem] leading-8 text-[#365080]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
