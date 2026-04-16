import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { buildPageMetadata } from "@/data/seo";
import { getBlog } from "@/lib/api";
import { encodeBlogSlug, formatBlogDate, getBlogCoverImage, richTextToPlainText } from "@/lib/strapi";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post = null;
  try {
    post = await getBlog(slug);
  } catch {
    post = null;
  }
  if (!post) return {};

  const title = post.Heading || "Blog";
  const excerpt = richTextToPlainText(post.Description).slice(0, 160);

  return buildPageMetadata({
    title,
    description: excerpt || undefined,
    pathname: `/blog/${encodeBlogSlug(post.slug)}`,
    image: getBlogCoverImage(post),
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  let post = null;
  try {
    post = await getBlog(slug);
  } catch {
    post = null;
  }
  if (!post) return notFound();

  const excerpt = richTextToPlainText(post.Description).slice(0, 220);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={post.Heading}
        copy={excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blog" },
          { label: post.Heading, href: `/blog/${encodeBlogSlug(post.slug)}` },
        ]}
      />

      <section className="bg-slate-50 py-16">
        <div className="section-container grid gap-10 xl:grid-cols-[1.8fr_0.95fr]">
          <article className="space-y-10 rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_24px_64px_rgba(15,23,42,0.12)]">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.18em] text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">Blog</span>
                <span>{formatBlogDate(post)}</span>
                <span>5 min read</span>
              </div>
              {excerpt ? <p className="text-lg leading-8 text-slate-600">{excerpt}</p> : null}
            </div>

            <div className="overflow-hidden rounded-3xl bg-slate-100">
              <div className="relative aspect-video w-full">
                {getBlogCoverImage(post) ? (
                  <Image
                    src={getBlogCoverImage(post)}
                    alt={post.Heading || "Blog cover image"}
                    fill
                    sizes="(min-width: 1280px) 900px, 100vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#0B3A75,#6D28D9)] text-6xl font-bold text-white">
                    {(post.Heading || "B").slice(0, 1)}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-8">
              {(post.Description || []).map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={index} className="text-base leading-8 text-slate-700">
                      {block.children?.map((child) => child.text || "").join("") || block.text}
                    </p>
                  );
                }

                if (block.type === "heading") {
                  return (
                    <h2 key={index} className="mt-12 text-2xl font-semibold tracking-[-0.03em] text-navy-900">
                      {block.children?.map((child) => child.text || "").join("") || block.text}
                    </h2>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul key={index} className="ml-5 list-disc space-y-3 text-base leading-8 text-slate-700">
                      {block.children?.map((child, childIndex) => (
                        <li key={childIndex}>{child.children?.map((c) => c.text || "").join("")}</li>
                      )) || null}
                    </ul>
                  );
                }

                if (block.type === "blockquote") {
                  return (
                    <blockquote
                      key={index}
                      className="rounded-3xl border-l-4 border-yellow-400 bg-slate-50 p-6 text-slate-700"
                    >
                      <p className="text-lg italic leading-8">
                        {block.children?.map((child) => child.text || "").join("") || block.text}
                      </p>
                    </blockquote>
                  );
                }

                return null;
              })}
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
              <h3 className="mb-3 text-xl font-semibold tracking-[-0.03em] text-navy-900">Improve ME Team</h3>
              <p className="text-sm leading-7 text-slate-600">Expert in education and learning development at Improve Me.</p>
            </div>

            <div className="white-card rounded-[1.75rem] border border-slate-200 p-8 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500">Share this article</p>
              <div className="flex gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200">
                  <span className="sr-only">Share on Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200">
                  <span className="sr-only">Share on Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200">
                  <span className="sr-only">Share on LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
