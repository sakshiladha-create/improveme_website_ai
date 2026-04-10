import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/site-data";
import { PageHero } from "@/components/page-hero";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function renderContent(block, index) {
  if (block.type === "paragraph") {
    return (
      <p key={index} className="text-base leading-8 text-slate-700">
        {block.text}
      </p>
    );
  }

  if (block.type === "heading") {
    return (
      <h2 key={index} className="mt-12 text-2xl font-semibold tracking-[-0.03em] text-navy-900">
        {block.text}
      </h2>
    );
  }

  if (block.type === "list") {
    return (
      <ul key={index} className="ml-5 list-disc space-y-3 text-base leading-8 text-slate-700">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "blockquote") {
    return (
      <blockquote key={index} className="rounded-3xl border-l-4 border-yellow-400 bg-slate-50 p-6 text-slate-700">
        <p className="text-lg italic leading-8">{block.text}</p>
      </blockquote>
    );
  }

  return null;
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={post.title}
        copy={post.excerpt}
        backgroundImage={post.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <section className="bg-slate-50 py-16">
        <div className="section-container grid gap-10 xl:grid-cols-[1.8fr_0.95fr]">
          <article className="space-y-10 rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_24px_64px_rgba(15,23,42,0.12)]">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.18em] text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{post.category}</span>
                <span>{post.date}</span>
                <span>{post.readingTime}</span>
              </div>
              <p className="text-lg leading-8 text-slate-600">{post.excerpt}</p>
            </div>

            <div className="overflow-hidden rounded-3xl bg-slate-100">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
            </div>

            <div className="space-y-8">
              {post.content.map((block, index) => renderContent(block, index))}
            </div>

            <div className="rounded-3xl bg-slate-100 p-8">
              <h3 className="mb-4 text-xl font-semibold tracking-[-0.03em] text-navy-900">Ready to get started?</h3>
              <p className="mb-6 text-base leading-8 text-slate-700">
                Talk to our team today. We can help you find the right tutoring and CAT4 preparation plan for your child.
              </p>
              <Link href="/contact" className="inline-flex rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-yellow-500">
                Book Free Assessment
              </Link>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="white-card rounded-[1.75rem] border border-slate-200 p-8 shadow-sm">
              <Link href="/blog" className="mb-4 inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-yellow-500">
                ← Back to Blog
              </Link>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-500">About the author</p>
              <h3 className="mb-3 text-xl font-semibold tracking-[-0.03em] text-navy-900">{post.author}</h3>
              <p className="text-sm leading-7 text-slate-600">{post.authorBio}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="white-card rounded-[1.75rem] border border-slate-200 p-8 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-500">More from the blog</p>
              <div className="space-y-4">
                {relatedPosts.map((item) => (
                  <Link key={item.slug} href={`/blog/${item.slug}`} className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300">
                    <p className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-500">{item.category}</p>
                    <h4 className="text-base font-semibold text-navy-900">{item.title}</h4>
                  </Link>
                ))}
              </div>
            </div>

            <div className="white-card rounded-[1.75rem] border border-slate-200 p-8 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-500">Browse by topic</p>
              <div className="grid gap-3">
                {Array.from(new Set(blogPosts.flatMap((post) => post.tags))).map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
