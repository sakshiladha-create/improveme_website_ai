import { notFound } from "next/navigation";
import Link from "next/link";
import { buildCurriculumPage, curriculumTree } from "@/data/site-data";
import { PageHero } from "@/components/page-hero";
import { PrimaryButton } from "@/components/ui";

export function generateStaticParams() {
  const params = [];

  for (const [group, groupData] of Object.entries(curriculumTree)) {
    params.push({ slug: [group] });
    for (const [stage, stageData] of Object.entries(groupData.sections)) {
      params.push({ slug: [group, stage] });
      stageData.stages.forEach((subject) => {
        params.push({
          slug: [group, stage, subject.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")],
        });
      });
    }
  }

  return params;
}

export default async function CurriculumCatchAllPage({ params }) {
  const { slug } = await params;
  const page = buildCurriculumPage(slug);

  if (!page) {
    notFound();
  }

  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Curriculum", href: "/curriculum" }];
  slug.forEach((segment, index) => {
    breadcrumbs.push({
      label: segment
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ")
        .replace("Ks", "KS")
        .replace("Igcse", "IGCSE")
        .replace("Gcse", "GCSE")
        .replace("Ib", "IB"),
      href: `/curriculum/${slug.slice(0, index + 1).join("/")}`,
    });
  });

  return (
    <>
      <PageHero eyebrow="Curriculum" title={page.title} copy={page.intro} breadcrumbs={breadcrumbs} />
      <section className="bg-white py-16">
        <div className="section-container">
          {page.kind === "overview" ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(page.sections).map(([stageKey, stage]) => (
                <Link key={stageKey} href={`/curriculum/${page.group}/${stageKey}`} className="white-card block p-6">
                  <h3 className="mb-3 text-[1.55rem] font-bold tracking-[-0.03em] text-navy-900">{stage.title}</h3>
                  <p className="mb-0 text-[1rem] leading-8 text-[#365080]">{stage.stages.join(" · ")}</p>
                </Link>
              ))}
            </div>
          ) : null}

          {page.kind === "stage" ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {page.stageData.stages.map((subject) => (
                <Link
                  key={subject}
                  href={`/curriculum/${page.group}/${page.stage}/${subject.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}`}
                  className="white-card block p-6"
                >
                  <h3 className="mb-2 text-[1.35rem] font-bold tracking-[-0.03em] text-navy-900">{subject}</h3>
                  <p className="mb-0 text-sm text-slate-500">Small-group support matched to school curriculum and exam goals.</p>
                </Link>
              ))}
            </div>
          ) : null}

          {page.kind === "subject" ? (
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <h2 className="section-title text-[2.4rem]">{page.title}</h2>
                <p className="mt-5 text-[1.05rem] leading-8 text-[#365080]">
                  {page.intro} Lessons are planned around the student's current school content, problem areas, and assessment requirements, with a strong focus on retention and confidence.
                </p>
                <div className="mt-8">
                  <PrimaryButton href="/contact#booking-form">Book Free Assessment</PrimaryButton>
                </div>
              </div>
              <div className="white-card p-6">
                <h3 className="mb-4 text-[1.55rem] font-bold tracking-[-0.03em] text-navy-900">What families can expect</h3>
                <ul className="space-y-3 text-[1rem] leading-8 text-[#365080]">
                  <li>Weekly small-group sessions with the same subject specialist.</li>
                  <li>Topic-by-topic teaching that rebuilds understanding from the foundation.</li>
                  <li>Worksheets, exam practice, and regular progress feedback.</li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
