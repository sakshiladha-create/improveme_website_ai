import { notFound } from "next/navigation";
import { courses, getCourseBySlug } from "@/data/site-data";
import { PageHero } from "@/components/page-hero";
import { PrimaryButton, TextLink } from "@/components/ui";
import { SubjectGradientCard } from "@/components/cards";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Course"
        title={course.title}
        copy={course.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: course.title, href: `/courses/${course.slug}` },
        ]}
      />

      <section className="bg-white py-16">
        <div className="section-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="section-title text-[2.5rem]">{course.title} tuition in Dubai</h2>
            <p className="mt-4 max-w-3xl text-[1.05rem] leading-8 text-[#365080]">
              {course.description} Sessions are built around the student's current level, curriculum, and school timetable, with a consistent weekly plan and regular feedback for families.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {course.boards.map((board) => (
                <span key={board} className="pill border border-slate-200 bg-slate-50 text-slate-600">
                  {board}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="/contact#booking-form">Book Free Assessment</PrimaryButton>
              <TextLink href="/curriculum">Explore Curriculum</TextLink>
            </div>
          </div>
          <div className="white-card p-6">
            <h3 className="mb-4 text-[1.6rem] font-bold tracking-[-0.03em] text-navy-900">Why families choose Improve ME</h3>
            <ul className="space-y-4 text-[1rem] leading-8 text-[#365080]">
              <li>Small-group teaching with consistent tutors and structured weekly progression.</li>
              <li>Curriculum-aware support across Dubai schools and international exam boards.</li>
              <li>Clear communication with parents and practical exam-focused teaching.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="section-container">
          <h2 className="section-title text-[2.3rem]">Explore other subjects</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.filter((item) => item.slug !== course.slug).slice(0, 6).map((item) => (
              <SubjectGradientCard key={item.slug} course={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
