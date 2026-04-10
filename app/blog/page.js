import Link from "next/link";
import { blogPosts } from "@/data/site-data";
import { PageHero } from "@/components/page-hero";

function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="white-card group block overflow-hidden rounded-3xl border border-slate-200 p-6 transition duration-200 hover:-translate-y-1"
    >
      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.18em] text-slate-500">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{post.category}</span>
        <span>{post.date}</span>
      </div>
      <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-navy-900">{post.title}</h2>
      <p className="mb-6 text-sm leading-7 text-slate-600">{post.excerpt}</p>
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
        <span>{post.author}</span>
        <span>{post.readingTime}</span>
      </div>
    </Link>
  );
}

export default function BlogPage() {
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
          <article className="h-full overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_24px_64px_rgba(15,23,42,0.12)]">
            <div className="relative h-full min-h-120 overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <span className="inline-flex rounded-full bg-yellow-400/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950">
                  {featured.category}
                </span>
                <p className="mt-4 max-w-2xl text-sm uppercase tracking-[0.18em] text-white/75">{featured.date}</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{featured.title}</h2>
                <p className="mt-6 max-w-2xl text-lg leading-9 text-white/80">{featured.excerpt}</p>
                <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/80">
                  <span>{featured.author}</span>
                  <span>{featured.readingTime}</span>
                </div>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="white-card rounded-[1.75rem] border border-slate-200 p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold tracking-[-0.03em] text-navy-900">Latest articles</h3>
              <div className="space-y-4">
                {secondaryPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300"
                  >
                    <p className="mb-2 text-xs uppercase tracking-[0.22em] text-slate-500">{post.date}</p>
                    <h4 className="mb-1 text-lg font-semibold text-navy-900 group-hover:text-yellow-500">{post.title}</h4>
                    <p className="text-sm leading-6 text-slate-600">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="white-card rounded-[1.75rem] border border-slate-200 p-8 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500">Why read our blog</p>
              <h3 className="mb-3 text-xl font-semibold tracking-[-0.03em] text-navy-900">Practical advice for real families</h3>
              <p className="text-sm leading-7 text-slate-600">
                Learn how admissions, exam preparation, wellbeing and curriculum choices work in practice, with timely articles you can update as your blog library grows.
              </p>
            </div>
          </aside>
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
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
