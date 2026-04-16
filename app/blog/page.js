import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { buildPageMetadata } from "@/data/seo";
import { getBlogs } from "@/lib/blogs";
import { encodeBlogSlug, formatBlogDate, getBlogCoverImage, richTextToPlainText } from "@/lib/blog-utils";

export const metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Insights, learning strategies, and curriculum guidance for Dubai families. Browse Improve ME Institute articles on exams, tutoring, and student progress.",
  pathname: "/blog",
});

function BlogCard({ post }) {
  const href = `/blog/${encodeBlogSlug(post.slug)}`;
  const imageUrl = getBlogCoverImage(post);

  return (
    <Link
      href={href}
      className="white-card group block overflow-hidden rounded-3xl border border-slate-200 p-6 transition duration-200 hover:-translate-y-1"
    >
      <div className="mb-5 overflow-hidden rounded-2xl bg-slate-100">
        <div className="relative aspect-16/10 w-full">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.Heading || "Blog cover image"}
              fill
              sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#0B3A75,#6D28D9)] text-4xl font-bold text-white">
              {(post.Heading || "B").slice(0, 1)}
            </div>
          )}
        </div>
      </div>
      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.18em] text-slate-500">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">Blog</span>
        <span>{formatBlogDate(post)}</span>
      </div>
      <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-navy-900">{post.Heading}</h2>
      <p className="mb-6 text-sm leading-7 text-slate-600">
        {richTextToPlainText(post.Description).slice(0, 160)}
        {richTextToPlainText(post.Description).length > 160 ? "…" : ""}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
        <span>Improve ME Team</span>
        <span>5 min read</span>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const blogPosts = getBlogs();
  const featured = blogPosts[0];
  const secondaryPosts = blogPosts.slice(1, 5);

  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Insights from students, parents, and admissions experts"
        copy="Real guidance, practical advice, and academic insight for Dubai families and learners."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blog" },
        ]}
      />

      <section className="bg-slate-50 py-16">
        <div className="section-container grid gap-10 lg:grid-cols-[1.55fr_0.95fr] lg:items-stretch">
          {!blogPosts.length ? (
            <div className="white-card rounded-4xl border border-slate-200 bg-white p-10 text-center shadow-sm lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-navy-900">Articles are updating</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Please check back shortly. If you need immediate support, you can book a free assessment.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact#booking-form"
                  className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-500"
                >
                  Book Free Assessment
                </Link>
              </div>
            </div>
          ) : featured ? (
            <article className="h-full overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_24px_64px_rgba(15,23,42,0.12)]">
              <div className="relative h-full min-h-120 overflow-hidden">
                {getBlogCoverImage(featured) ? (
                  <Image
                    src={getBlogCoverImage(featured)}
                    alt={featured.Heading || "Featured blog cover"}
                    fill
                    priority
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#0B3A75,#6D28D9)] text-6xl font-bold text-white">
                    {(featured.Heading || "B").slice(0, 1)}
                  </div>
                )}
                <div className="text-white absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 ">
                  <div className="text-white mb-4 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.18em]">
                    <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm ">Blog</span>
                    <span>{formatBlogDate(featured)}</span>
                  </div>
                  <h2 className="mb-4 text-3xl font-semibold tracking-[-0.03em] text-white">{featured.Heading}</h2>
                  <p className="mb-6 text-sm leading-7 opacity-90 text-white">
                    {richTextToPlainText(featured.Description).slice(0, 180)}
                    {richTextToPlainText(featured.Description).length > 180 ? "…" : ""}
                  </p>
                  <Link
                    href={`/blog/${encodeBlogSlug(featured.slug)}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ) : null}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {secondaryPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-container">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.2em] text-yellow-500">All blog posts</p>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-navy-900">More stories and learning guides</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              Browse the full archive for admissions guidance, curriculum support, exam strategy, and learning advice.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
