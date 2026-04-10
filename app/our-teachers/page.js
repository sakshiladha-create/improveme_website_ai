import Image from "next/image";
import { Award, BriefcaseBusiness, LineChart, Users, GraduationCap, Brain, Trophy } from "lucide-react";
import { TeacherCard } from "@/components/cards";
import { PrimaryButton, SectionHeading } from "@/components/ui";
import { teachersPage } from "@/data/site-data";

const strengthIcons = [Award, BriefcaseBusiness, Users, LineChart];
const approachIcons = { GraduationCap, Brain, Trophy };

export default function OurTeachersPage() {
  const { hero, teachers, strengths, environment, approach } = teachersPage;

  return (
    <>
      {/* Hero Section - Dark Blue Background matching other pages */}
      <section className="relative overflow-hidden bg-[#0f172a] pb-16 pt-28 md:pb-20 md:pt-32">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/overlay_image.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(0, 10, 40, 0.82) 0%, rgba(0, 10, 40, 0.55) 45%, rgba(0, 10, 40, 0.08) 100%)",
          }}
        />
        <div className="section-container relative z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">Our Teachers</p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-[-0.05em] text-white md:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{hero.subtitle}</p>
          <div className="mt-8">
            <PrimaryButton href="/contact#booking-form">Book a Free Session</PrimaryButton>
          </div>
        </div>
      </section>

      {/* Learning Environment Section */}
      <section className="bg-white py-20">
        <div className="section-container">
          <div className="mb-12">
            <p className="eyebrow">OUR LEARNING ENVIRONMENT</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.05em] text-navy-900">
              {environment.title}
            </h2>
            <p className="mt-5 max-w-3xl text-[1.05rem] leading-8 text-[#365080]">{environment.subtitle}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {environment.images.map((image, index) => (
              <div
                key={index}
                className="relative h-64 overflow-hidden rounded-[20px] shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105 md:h-72"
              >
                <Image
                  src={image}
                  alt={`Learning environment ${index + 1}`}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach to Learning Section */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="section-container">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-[-0.05em] text-navy-900">
              Our Approach to Learning
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-[1.05rem] leading-8 text-[#365080]">
              Alongside our core academic programme, we offer skills-based enrichment programmes designed to develop well-rounded individuals — not just high achievers in the exam room. We combine structured curriculum with skills that prepare students for real-world success.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {approach.map((item, index) => {
              const Icon = approachIcons[item.icon];
              return (
                <article
                  key={item.title}
                  className="white-card rounded-3xl border border-gray-200 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-[#FFF4E6] p-3 text-yellow-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-4 font-display text-[1.45rem] font-bold tracking-[-0.03em] text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mb-0 text-[0.98rem] leading-7 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="bg-white py-20">
        <div className="section-container">
          <SectionHeading
            eyebrow="Teaching Team"
            title="Learn from experienced mentors"
            copy="A premium team of educators chosen for subject mastery, communication skills, and the ability to guide students with confidence."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teachers.map((teacher, index) => (
              <TeacherCard key={teacher.name} teacher={teacher} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Teachers Section */}
      <section className="bg-[#EEF2FF] py-20">
        <div className="section-container">
          <SectionHeading
            eyebrow="Why Our Teachers"
            title="Why students trust our teaching team"
            copy="Our teaching model is built around expertise, mentorship, and consistent support that helps students move forward with clarity."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((item, index) => {
              const Icon = strengthIcons[index];

              return (
                <article
                  key={item.title}
                  className="white-card h-full p-6 transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="inline-flex rounded-2xl bg-[#EEF2FF] p-3 text-navy-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 mb-3 font-display text-[1.35rem] font-bold tracking-[-0.03em] text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mb-0 text-[0.98rem] leading-7 text-slate-600">{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#093A78] py-20">
        <div className="section-container">
          <div className="rounded-4xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-8 py-10 text-center shadow-[0_24px_70px_rgba(0,0,0,0.16)] backdrop-blur-sm md:px-12 md:py-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400">Start Today</p>
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-[-0.05em] text-white md:text-[3.2rem]">
              Start Learning with the Best
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[1.04rem] leading-8 text-white/80">
              Connect with experienced teachers who combine academic expertise with personalised mentorship and a strong focus on student growth.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryButton href="/contact#booking-form">Book a Free Session</PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
