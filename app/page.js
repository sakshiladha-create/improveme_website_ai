import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, GraduationCap, PhoneCall, Star } from "lucide-react";
import { courses, faqItems, homePage, topSchools } from "@/data/site-data";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildPageMetadata,
} from "@/data/seo";
import { ApproachRow, SubjectGradientCard, TestimonialCard, WhiteFeatureCard } from "@/components/cards";
import { EnquiryForm } from "@/components/enquiry-form";
import { PrimaryButton, SectionHeading, TextLink } from "@/components/ui";

const primaryCards = homePage.learningJourney.primary.cards
  .map((slug) => courses.find((course) => course.slug === slug))
  .filter(Boolean);
const secondaryCards = homePage.learningJourney.secondary.cards
  .map((slug) => courses.find((course) => course.slug === slug))
  .filter(Boolean);
const enrichmentCards = homePage.enrichment.cards
  .map((slug) => courses.find((course) => course.slug === slug))
  .filter(Boolean);

const heroCopy =
  "From Primary through GCSE, IGCSE, A-Level, IB Diploma, MYP, and international curricula, we support students aged 3 to 18 at every stage of their education. Since 2010, we have helped 1,000+ students from 30+ Dubai schools achieve stronger results.";

const heroImages = {
  background:
    "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2400",
  side:
    "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
};

const conversionPoints = [
  {
    title: "Book before you enrol",
    copy: "Families start with a free academic assessment, so the recommended group, tutor, and timetable are tailored before classes begin.",
  },
  {
    title: "Small groups, measurable progress",
    copy: "Students learn in focused groups of 3-6 with weekly practice, feedback, and clear parent communication.",
  },
  {
    title: "Dubai curriculum coverage under one roof",
    copy: "We support Primary, KS3, GCSE, IGCSE, A-Level, IB, MYP, CAT4 prep, and enrichment programmes from one centre in Gold and Diamond Park.",
  },
];

const homeFaqItems = faqItems.slice(0, 4);

export const metadata = buildPageMetadata({
  title: "Tutoring Centre in Dubai for Primary, GCSE, IGCSE, A-Level and IB",
  description:
    "Improve ME Institute is a KHDA-approved tutoring centre in Dubai offering Maths, English, Science, GCSE, IGCSE, A-Level, IB, MYP, CAT4, and enrichment programmes for ages 3 to 18.",
  pathname: "/",
  keywords: [
    "KHDA approved tutoring centre Dubai",
    "private tuition Dubai",
    "IB tutors Dubai",
    "A-Level tutors Dubai",
    "GCSE tutors Dubai",
  ],
});

export default function HomePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ label: "Home", href: "/" }]);
  const faqSchema = buildFaqSchema(homeFaqItems);
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative min-h-[66vh] overflow-hidden pt-20 md:pt-24">
        <Image
          src={heroImages.background}
          alt="Students learning at Improve ME Institute tutoring centre in Dubai"
          fill
          sizes="100vw"
          className="object-cover object-[50%_25%]"
          priority
        />
        <div className="hero-overlay absolute inset-0 z-10" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(3,7,18,0.72)_0%,rgba(3,7,18,0.52)_45%,rgba(3,7,18,0.22)_100%)]" />

        <div className="section-container relative z-20 flex min-h-[66vh] flex-col lg:flex-row lg:items-stretch">
          <div className="flex flex-1 flex-col justify-center pb-8 pt-8 lg:pr-8">
            <div className="glass-panel max-w-155 rounded-[22px] p-8 md:p-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-white/92 transition-colors hover:bg-white/14"
              >
                <span className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                <span className="font-semibold text-white">4.9 Google rating from Dubai families</span>
              </Link>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-[-0.06em] text-white md:text-[3rem]">
                Dubai Tutors for Primary, GCSE, IGCSE, A-Level and IB Students
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/90">
                From <Link href="/curriculum/primary" className="underline">Primary</Link> through to{" "}
                <Link href="/curriculum/secondary/gcse" className="underline">GCSE</Link>,{" "}
                <Link href="/curriculum/secondary/igcse" className="underline">IGCSE</Link>,{" "}
                <Link href="/curriculum/secondary/a-level" className="underline">A-Level</Link>,{" "}
                <Link href="/curriculum/secondary/ib" className="underline">IB Diploma</Link>,{" "}
                <Link href="/curriculum/secondary/myp" className="underline">MYP</Link>, and international curricula,{" "}
                {heroCopy}
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                <PrimaryButton href="/contact#booking-form">{homePage.hero.ctaPrimary}</PrimaryButton>
                <Link href="/courses" className="btn-secondary">
                  {homePage.hero.ctaSecondary}
                </Link>
              </div>
              {/* <div className="mt-7 grid gap-3 text-sm text-white/90 sm:grid-cols-3">
                {["Free assessment", "Response within two hours", "Small groups of 3-6"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/15 bg-white/8 px-4 py-3">
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div> */}
              <div className="mt-7 bg-white px-4 py-3 shadow-xl">
                <p className="mb-0 text-[1.05rem] font-semibold text-navy-900">KHDA-approved - Small groups of up to six students</p>
                <p className="mb-0 text-sm leading-6 text-[#365080]">One consistent approach from age 3 to 18 with clear academic pathways.</p>
              </div>
            </div>
          </div>

          <div className="relative z-20 hidden flex-1 items-stretch justify-center py-8 lg:flex">
            <div className="hero-right-card relative h-full w-xl overflow-hidden rounded-[22px] border border-white/10 bg-white/6 shadow-[0_26px_70px_rgba(0,0,0,0.28)]">
              <Image
                src={heroImages.side}
                alt="Dubai tutoring classroom environment"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.18),transparent_55%)]" />
            </div>
          </div>
        </div>

        <div className="marquee-wrap relative z-20 bg-[#0B3A75] py-3 text-white">
          <div className="marquee-track">
            {[...topSchools, ...topSchools].map((school, index) => (
              <div key={`${school}-${index}`} className="px-4 text-sm whitespace-nowrap">
                {school}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFF] py-12">
        <div className="section-container">
          <div className="grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="grid gap-4 md:grid-cols-3">
              {conversionPoints.map((point) => (
                <article key={point.title} className="white-card h-full p-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#2D4AA6]">Why families convert</p>
                  <h2 className="mb-3 text-[1.35rem] font-bold tracking-[-0.04em] text-navy-900">{point.title}</h2>
                  <p className="mb-0 text-[0.98rem] leading-7 text-[#365080]">{point.copy}</p>
                </article>
              ))}
            </div>
            <aside className="rounded-[28px] bg-[#0B3A75] p-7 text-white shadow-[0_20px_50px_rgba(11,58,117,0.18)]">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400">Speak to our team</p>
              <h2 className="mb-3 font-display text-[2rem] font-bold leading-tight tracking-[-0.04em]">
                Need the right tutor in Dubai without the guesswork?
              </h2>
              <p className="mb-5 text-[1rem] leading-7 text-white/85">
                Tell us your child&apos;s year group, school, and subject goals. We&apos;ll recommend the right next step before you commit.
              </p>
              <div className="space-y-3">
                <PrimaryButton href="/contact#booking-form" className="w-full justify-center">
                  Book Your Free Assessment
                </PrimaryButton>
                <a
                  href="tel:+97143805525"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <PhoneCall className="h-4 w-4" />
                  Call +971 4 380 5525
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          <SectionHeading eyebrow="What We Teach" title={homePage.learningJourney.title} />

          <div className="mt-6 max-w-5xl rounded-[24px] border border-[#D8E2F3] bg-[#F7FAFF] p-6">
            <p className="mb-0 text-[1rem] leading-8 text-[#365080]">
              Families searching for a tutoring centre in Dubai usually need three things: curriculum match, subject depth,
              and a tutoring plan that fits their child&apos;s school timetable. Improve ME combines all three with specialist
              tutors across Maths, English, Science, Business, Economics, Psychology, CAT4 preparation, and future-skills programmes.
            </p>
          </div>

          <div className="mt-12 space-y-14">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-[#2D4AA6] p-2 text-white">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <h3 className="mb-0 text-[2rem] font-bold tracking-[-0.04em] text-navy-900">Primary</h3>
              </div>
              <p className="mb-0 text-base text-[#365080]">Ages 3-11 - Building the foundation</p>
              <p className="max-w-6xl text-[1.05rem] leading-8 text-[#365080]">{homePage.learningJourney.primary.copy}</p>
              <div className="flex flex-wrap gap-2">
                {["EYFS (Ages 3-5)", "Key Stage 1 (Ages 5-7)", "Key Stage 2 (Ages 7-11)"].map((tag, index) => (
                  <span
                    key={tag}
                    className="pill"
                    style={{
                      color: ["#E79A00", "#D96B55", "#4687A4"][index],
                      backgroundColor: ["#FFF2CC", "#FDE2D8", "#E4F2FA"][index],
                      borderColor: ["#F4D27A", "#F3B6A6", "#AFD4E4"][index],
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {primaryCards.map((course) => (
                  <SubjectGradientCard key={course.slug} course={course} />
                ))}
              </div>
              <TextLink href={homePage.learningJourney.primary.href}>View Primary Curriculum</TextLink>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-[#2D4AA6] p-2 text-white">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <h3 className="mb-0 text-[2rem] font-bold tracking-[-0.04em] text-navy-900">Secondary</h3>
              </div>
              <p className="mb-0 text-base text-[#365080]">Ages 11-18 - Exam-focused support across major curricula</p>
              <div className="flex flex-wrap gap-2">
                {["Years 7-9 (KS3)", "MYP (Ages 11-16)", "GCSE/IGCSE (Ages 14-16)", "A-Levels/IB (Ages 16-18)"].map((tag, index) => (
                  <span
                    key={tag}
                    className="pill"
                    style={{
                      color: ["#4A6FD4", "#E8732A", "#2F948C", "#C35D42"][index],
                      backgroundColor: ["#E7EEFF", "#FEE7D7", "#E2F7F2", "#FCE2D9"][index],
                      borderColor: ["#B6C7FD", "#F1C3A4", "#B5E0D5", "#F0BAA9"][index],
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="max-w-6xl text-[1.05rem] leading-8 text-[#365080]">
                Key Stage 3 to A-Level and IB. Every session aligns with your child&apos;s exam board and school timetable, with tutors who understand what examiners expect.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {secondaryCards.map((course) => (
                  <SubjectGradientCard key={course.slug} course={course} />
                ))}
              </div>
              <TextLink href={homePage.learningJourney.secondary.href}>View Secondary Curriculum</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="section-container">
          <div className="rounded-[28px] bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <SectionHeading
              eyebrow="Enrichment & Future Skills"
              title={homePage.enrichment.title}
              copy={homePage.enrichment.copy}
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {enrichmentCards.map((course) => (
                <WhiteFeatureCard key={course.slug} course={course} />
              ))}
            </div>

            <p className="mt-5 text-sm italic text-[#365080]">
              These programmes run alongside our academic courses for a more complete education.
            </p>

            <div className="mt-6 rounded-[20px] border border-[#BCECEC] bg-[linear-gradient(90deg,rgba(230,255,255,0.95),rgba(241,251,246,0.98))] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-4xl">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#16A7AF]">
                    {homePage.enrichment.banner.eyebrow}
                  </p>
                  <h3 className="mb-2 text-[2rem] font-bold tracking-[-0.04em] text-navy-900">
                    {homePage.enrichment.banner.title}
                  </h3>
                  <p className="mb-0 text-[1rem] leading-8 text-[#365080]">
                    Our morning programme gives home-schooled students a professional, centre-based space to learn while keeping their education structured, consistent, and tailored to their needs.
                  </p>
                </div>
                <PrimaryButton href={homePage.enrichment.banner.href} className="shrink-0">
                  Learn More
                </PrimaryButton>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <PrimaryButton href="/courses">Explore All Courses</PrimaryButton>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F6] py-20 md:py-28">
        <div className="section-container">
          <SectionHeading eyebrow="Our Approach" title="How We Actually Get Results" />
          <div className="white-card mt-10 overflow-hidden">
            {homePage.approach.map((item) => (
              <ApproachRow key={item.number} item={item} />
            ))}
          </div>
          <div className="mt-8">
            <TextLink href="/about">Learn more about us</TextLink>
          </div>
        </div>
      </section>

      <section className="bg-[#EEF2FF] py-20">
        <div className="section-container">
          <SectionHeading eyebrow="Trusted By Families" title="What Parents Say" center />
          <div className="mx-auto mt-8 flex max-w-47.5 items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_16px_32px_rgba(15,23,42,0.08)]">
            <div className="text-[2rem] font-bold tracking-[-0.05em] text-navy-900">4.9</div>
            <div>
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mb-0 text-sm text-slate-500">Google Rating</p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {homePage.testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <TextLink href="/about" className="justify-center">See all our Google reviews</TextLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-18">
        <div className="section-container">
          <SectionHeading eyebrow="Common Questions" title="What Parents Usually Ask Before Booking" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {homeFaqItems.map((item) => (
              <article key={item.question} className="white-card p-6">
                <h3 className="mb-3 text-[1.2rem] font-bold tracking-[-0.03em] text-navy-900">{item.question}</h3>
                <p className="mb-0 text-[0.98rem] leading-7 text-[#365080]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#093A78] py-20">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-start">
            <div className="text-white">
              <p className="eyebrow text-yellow-400">Get Started</p>
              <h2 className="mt-4 max-w-70 font-display text-[3rem] font-bold leading-[1.05] tracking-[-0.05em] text-white">
                Book Your Free Assessment
              </h2>
              <p className="max-w-70 text-[1.06rem] leading-8 text-white/90">
                Our team will assess your child&apos;s current level and recommend the right group and tutor. There&apos;s no cost and no obligation.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Free diagnostic assessment",
                  "No obligation to enrol",
                  "Response within two hours",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[1.02rem]">
                    <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/75">Trusted by families from 30+ top Dubai schools</p>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
