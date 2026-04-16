import Link from "next/link";
import { curriculumTree } from "@/data/site-data";
import { PageHero } from "@/components/page-hero";

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Curriculum"
        title="A clear academic pathway from age 3 to 18"
        copy="From EYFS through Key Stages, GCSE, IGCSE, A-Level, IB, and MYP, Improve ME supports the full academic journey under one roof."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Curriculum", href: "/curriculum" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="section-container grid gap-6 lg:grid-cols-2">
          {Object.entries(curriculumTree).map(([key, value]) => (
            <Link key={key} href={`/curriculum/${key}`} className="white-card block p-8 transition-transform hover:-translate-y-1">
              <p className="eyebrow">{value.subtitle}</p>
              <h2 className="mt-4 text-[2rem] font-bold tracking-[-0.04em] text-navy-900">{value.title}</h2>
              <p className="mt-4 mb-0 text-[1rem] leading-8 text-[#365080]">{value.intro}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
