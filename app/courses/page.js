import { courses } from "@/data/site-data";
import { PageHero } from "@/components/page-hero";
import { SubjectGradientCard } from "@/components/cards";

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Courses"
        title="Tailored support across every subject"
        copy="Small groups, subject specialists, and exam-focused preparation for ages 3–18."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Courses", href: "/courses" },
        ]}
      />

      <section className="bg-white py-16">
        <div className="section-container">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <SubjectGradientCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
