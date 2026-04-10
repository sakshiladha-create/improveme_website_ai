import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, GraduationCap, Star } from "lucide-react";
import { courses, homePage, topSchools } from "@/data/site-data";
import { ApproachRow, SubjectGradientCard, TestimonialCard, WhiteFeatureCard } from "@/components/cards";
import { EnquiryForm } from "@/components/enquiry-form";
import { PrimaryButton, SectionHeading, TextLink } from "@/components/ui";

const primaryCards = homePage.learningJourney.primary.cards.map((slug) => courses.find((course) => course.slug === slug));
const secondaryCards = homePage.learningJourney.secondary.cards.map((slug) => courses.find((course) => course.slug === slug));
const enrichmentCards = homePage.enrichment.cards.map((slug) => courses.find((course) => course.slug === slug));

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[90vh] overflow-hidden pt-20 md:pt-24">
        <Image
          src={homePage.hero.image}
          alt="Improve ME Institute tutoring centre Dubai"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="hero-overlay absolute inset-0 z-10" />

        <div className="section-container relative z-20 flex min-h-[90vh] flex-col lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col justify-center pb-8 pt-8 lg:pr-8">
            <div className="glass-panel max-w-155 rounded-[22px] p-8 md:p-10">
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-[-0.06em] text-white md:text-[4rem]">
                {homePage.hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-9 text-white/90 md:text-[1.38rem]">
                From <Link href="/curriculum/primary" className="underline">Primary</Link> through to{" "}
                <Link href="/curriculum/secondary/gcse" className="underline">GCSE</Link>,{" "}
                <Link href="/curriculum/secondary/igcse" className="underline">IGCSE</Link>,{" "}
                <Link href="/curriculum/secondary/a-level" className="underline">A-Level</Link>,{" "}
                <Link href="/curriculum/secondary/ib" className="underline">IB Diploma</Link>,{" "}
                <Link href="/curriculum/secondary/myp" className="underline">MYP</Link>, and international curricula — we support students aged 3 to 18 across every stage of their education. Since 2010, we've helped 1,000+ students from 30+ Dubai schools achieve stronger results.
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                <PrimaryButton href="/contact#booking-form">{homePage.hero.ctaPrimary}</PrimaryButton>
                <Link href="/courses" className="btn-secondary">
                  {homePage.hero.ctaSecondary}
                </Link>
              </div>
              <div className="mt-7 max-w-96.25 bg-white px-4 py-3 shadow-xl">
                <p className="mb-0 text-[1.05rem] font-semibold text-navy-900">{homePage.hero.badgeTitle}</p>
                <p className="mb-0 text-sm leading-6 text-[#365080]">{homePage.hero.badgeCopy}</p>
              </div>
            </div>
          </div>

          <div className="relative z-20 hidden flex-1 items-center justify-center lg:flex">
            <div className="hero-right-card relative h-100 w-105 overflow-hidden rounded-[18px] bg-white/10">
              <Image
                src="/overlay_image.webp"
                alt="Improve ME centre interior"
                fill
                className="object-cover object-right"
                unoptimized
              />
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

      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          <SectionHeading eyebrow="What We Teach" title={homePage.learningJourney.title} />

          <div className="mt-12 space-y-14">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-[#2D4AA6] p-2 text-white">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <h3 className="mb-0 text-[2rem] font-bold tracking-[-0.04em] text-navy-900">Primary</h3>
              </div>
              <p className="mb-0 text-base text-[#365080]">{homePage.learningJourney.primary.subtitle}</p>
              <p className="max-w-6xl text-[1.05rem] leading-8 text-[#365080]">{homePage.learningJourney.primary.copy}</p>
              <div className="flex flex-wrap gap-2">
                {homePage.learningJourney.primary.tags.map((tag, index) => (
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
              <p className="mb-0 text-base text-[#365080]">{homePage.learningJourney.secondary.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {homePage.learningJourney.secondary.tags.map((tag, index) => (
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
              <p className="max-w-6xl text-[1.05rem] leading-8 text-[#365080]">{homePage.learningJourney.secondary.copy}</p>
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
                  <p className="mb-0 text-[1rem] leading-8 text-[#365080]">{homePage.enrichment.banner.copy}</p>
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

      <section className="bg-[#093A78] py-20">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-start">
            <div className="text-white">
              <p className="eyebrow text-yellow-400">Get Started</p>
              <h2 className="mt-4 max-w-70 font-display text-[3rem] font-bold leading-[1.05] tracking-[-0.05em] text-white">
                Book Your Free Assessment
              </h2>
              <p className="max-w-70 text-[1.06rem] leading-8 text-white/90">
                Our team will assess your child's current level and recommend the right group and tutor. There's no cost and no obligation.
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
