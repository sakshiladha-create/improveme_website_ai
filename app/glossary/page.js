import { glossaryTerms } from "@/data/site-data";
import { PageHero } from "@/components/page-hero";

export default function GlossaryPage() {
  return (
    <>
      <PageHero
        eyebrow="Glossary"
        title="Key curriculum terms explained"
        copy="A quick reference guide for the school stages, pathways, and qualifications mentioned across the site."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Glossary", href: "/glossary" },
        ]}
      />
      <section className="bg-white py-16">
        <div className="section-container grid gap-4 md:grid-cols-2">
          {glossaryTerms.map((term) => (
            <article key={term.term} className="white-card p-6">
              <h2 className="mb-3 text-[1.45rem] font-bold tracking-[-0.03em] text-navy-900">{term.term}</h2>
              <p className="mb-0 text-[1rem] leading-8 text-[#365080]">{term.definition}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
