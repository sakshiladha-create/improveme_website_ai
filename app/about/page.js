import Image from "next/image";
import { aboutPage } from "@/data/site-data";
import { PageHero } from "@/components/page-hero";
import { PrimaryButton } from "@/components/ui";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        copy={aboutPage.hero.paragraphs[0]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="space-y-5">
              {aboutPage.hero.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-0 text-[1.05rem] leading-8 text-[#365080]">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {aboutPage.hero.stats.map((stat) => (
                <div key={stat.label} className="white-card p-6">
                  <div className="text-[2.1rem] font-bold tracking-[-0.05em] text-navy-900">{stat.value}</div>
                  <p className="mb-0 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="section-container">
          <div className="relative overflow-hidden rounded-[30px] border border-gray-200 bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <span className="pointer-events-none absolute left-4 top-4 text-[80px] leading-none text-yellow-400/10 md:left-8 md:text-[150px]">“</span>
            <div className="relative mx-auto max-w-4xl text-center">
              <div className="mx-auto h-[220px] w-[220px] overflow-hidden rounded-full border-[3px] border-yellow-400 md:h-[280px] md:w-[280px]">
                <Image
                  src="/neeta-daswani.jpeg"
                  alt="Neeta Daswani"
                  width={280}
                  height={280}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
              <blockquote className="mt-8 text-[1.35rem] italic leading-[1.8] text-navy-900">
                {aboutPage.founder.quote}
              </blockquote>
              <div className="mx-auto mt-8 max-w-[680px] space-y-4 text-left">
                {aboutPage.founder.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-0 text-[1.06rem] leading-8 text-[#365080]">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <PrimaryButton href="/contact#booking-form">Book Free Assessment</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
