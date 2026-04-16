import Image from "next/image";
import { aboutPage } from "@/data/site-data";
import { buildBreadcrumbSchema, buildPageMetadata } from "@/data/seo";
import { PageHero } from "@/components/page-hero";
import { PrimaryButton } from "@/components/ui";

const storyParagraphs = [
  "Improve ME Institute started as a family-run business with one clear purpose: helping students in Dubai raise attainment and build long-term academic confidence.",
  "What began as a small tutoring operation has grown into a KHDA-approved academic centre serving students from more than 30 schools across the city.",
  "From the beginning, the focus has been on results rather than volume: small groups, consistent tutors, structured learning plans, and honest communication with parents.",
  "Today Improve ME supports students from age 3 through A-Level and IB Diploma, giving families one trusted place for academic progress across every school stage.",
];

const founderParagraphs = [
  "Today, we stand strong with 40 faculty members and thousands of students enrolled annually, combining high-quality tutoring, life-skills programmes, and proven teaching methods to improve student attainment.",
  "I am especially proud that the next generation of my family has joined this mission. My sons, Shaun and Jason, now lead our Upper and Lower Secondary divisions while I continue to oversee the centre's values, standards, and long-term direction.",
];

const valuePoints = [
  {
    title: "Academic consistency",
    copy: "Families get a clear path from early years support to exam preparation without having to restart the search for every new school stage.",
  },
  {
    title: "Specialist teaching",
    copy: "Subject tutors understand the expectations of GCSE, IGCSE, A-Level, IB, MYP, and Dubai school systems, so support stays aligned to outcomes.",
  },
  {
    title: "Parent clarity",
    copy: "Regular updates and honest recommendations help families make faster, more confident decisions about classes, pacing, and next steps.",
  },
];

export const metadata = buildPageMetadata({
  title: "About Improve ME Institute",
  description:
    "Learn how Improve ME Institute became one of Dubai's trusted tutoring centres, supporting students from Primary to A-Level and IB with specialist tutors and small-group teaching.",
  pathname: "/about",
  keywords: ["about tutoring centre Dubai", "Improve ME Institute Dubai", "Dubai education centre"],
});

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        title="About Improve ME Institute"
        copy="A KHDA-approved tutoring centre in Dubai built around small groups, specialist tutors, and long-term academic progress."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="space-y-5">
              {storyParagraphs.map((paragraph) => (
                <p key={paragraph} className="mb-0 text-[1.05rem] leading-8 text-[#365080]">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "1,000+", label: "Students supported" },
                { value: "40+", label: "Specialist tutors" },
                { value: "2010", label: "Established" },
                { value: "30+", label: "Dubai schools served" },
              ].map((stat) => (
                <div key={stat.label} className="white-card p-6">
                  <div className="text-[2.1rem] font-bold tracking-[-0.05em] text-navy-900">{stat.value}</div>
                  <p className="mb-0 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFF] py-12">
        <div className="section-container">
          <div className="grid gap-4 md:grid-cols-3">
            {valuePoints.map((point) => (
              <article key={point.title} className="white-card p-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#2D4AA6]">Why families trust us</p>
                <h2 className="mb-3 text-[1.28rem] font-bold tracking-[-0.04em] text-navy-900">{point.title}</h2>
                <p className="mb-0 text-[0.98rem] leading-7 text-[#365080]">{point.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="section-container">
          <div className="relative overflow-hidden rounded-[30px] border border-gray-200 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <span className="pointer-events-none absolute left-4 top-4 text-[80px] leading-none text-yellow-400/10 md:left-8 md:text-[150px]">&quot;</span>
            <div className="relative mx-auto max-w-4xl text-center">
              <div className="mx-auto h-55 w-55 overflow-hidden rounded-full border-[3px] border-yellow-400 md:h-70 md:w-70">
                <Image
                  src="/neeta-daswani.webp"
                  alt="Neeta Daswani, founder of Improve ME Institute"
                  width={280}
                  height={280}
                  sizes="280px"
                  className="h-full w-full object-cover"
                />
              </div>
              <blockquote className="mt-8 text-[1.35rem] italic leading-[1.8] text-navy-900">
                {aboutPage.founder.quote}
              </blockquote>
              <div className="mx-auto mt-8 max-w-170 space-y-4 text-left">
                {founderParagraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-0 text-[1.06rem] leading-8 text-[#365080]">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <PrimaryButton href="/contact#booking-form">Book Free Assessment</PrimaryButton>
                <PrimaryButton href="/courses" className="bg-white text-navy-900 ring-1 ring-slate-200 hover:bg-slate-50">
                  Explore Courses
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
