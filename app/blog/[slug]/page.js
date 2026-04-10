import { notFound } from "next/navigation";
import { blogPosts } from "@/data/site-data";
import { PageHero } from "@/components/page-hero";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={post.title}
        copy="This route is included to mirror the internal blog structure and shared site styling."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      <section className="bg-white py-16">
        <div className="section-container max-w-3xl">
          <article className="white-card p-8">
            <p className="mb-4 text-sm uppercase tracking-[0.16em] text-yellow-500">{post.date}</p>
            <p className="mb-0 text-[1.05rem] leading-8 text-[#365080]">
              This page keeps the blog route structure complete for the clone and preserves the shared header, hero, spacing, and footer treatment used across the rest of the site.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
