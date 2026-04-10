import Link from "next/link";
import { blogPosts } from "@/data/site-data";
import { PageHero } from "@/components/page-hero";

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Learning, admissions, and academic guidance"
        copy="A simple archive of the blog topics referenced in the live Improve ME site."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blog" },
        ]}
      />
      <section className="bg-white py-16">
        <div className="section-container grid gap-4 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="white-card block p-6 transition-transform hover:-translate-y-1">
              <p className="mb-2 text-sm uppercase tracking-[0.16em] text-yellow-500">{post.date}</p>
              <h2 className="mb-0 text-[1.55rem] font-bold tracking-[-0.03em] text-navy-900">{post.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
