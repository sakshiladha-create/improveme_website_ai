"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { PageHero } from "@/components/page-hero";

function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="white-card group block overflow-hidden rounded-3xl border border-slate-200 p-6 transition duration-200 hover:-translate-y-1"
    >
      <div className="mb-4 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.18em] text-slate-500">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{post.category || "General"}</span>
        <span>{post.date}</span>
      </div>
      <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-navy-900">{post.title}</h2>
      <p className="mb-6 text-sm leading-7 text-slate-600">{post.excerpt}</p>
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
        <span>{post.author || "Admin"}</span>
        <span>{post.readingTime || "5 min read"}</span>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch('https://best-excitement-b109c761d6.strapiapp.com/api/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        
        // Transform Strapi data to match component expectations
        const transformedPosts = data.data.map(post => ({
          id: post.id,
          title: post.Heading,
          slug: post.slug.replace('/', ''), // Remove leading slash
          category: "Blog", // Default category
          date: new Date(post.publishedAt || post.createdAt).toLocaleDateString(),
          excerpt: extractTextFromRichText(post.Description),
          author: "Improve Me Team", // Default author
          readingTime: "5 min read", // Default reading time
        }));
        
        setBlogPosts(transformedPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  // Helper function to extract plain text from Strapi rich text
  function extractTextFromRichText(richText) {
    if (!richText || !Array.isArray(richText)) return "";
    return richText.map(block => {
      if (block.type === 'paragraph' && block.children) {
        return block.children.map(child => child.text || "").join("");
      }
      return "";
    }).join(" ").substring(0, 150) + "..."; // Truncate for excerpt
  }

  if (loading) {
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
          <div className="section-container text-center">
            <p>Loading blogs...</p>
          </div>
        </section>
      </>
    );
  }

  if (error) {
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
          <div className="section-container text-center">
            <p>Error loading blogs: {error}</p>
          </div>
        </section>
      </>
    );
  }

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
          {featured && (
            <article className="h-full overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_24px_64px_rgba(15,23,42,0.12)]">
              <div className="relative h-full min-h-120 overflow-hidden">
                {/* Placeholder for image - you can add image field to Strapi */}
                <div className="h-full w-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                  {featured.title.charAt(0)}
                </div>
                <div className="text-white absolute inset-x-0 bottom-0 h-full bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 ">
                  <div className="text-white mb-4 flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.18em]">
                    <span className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm ">{featured.category}</span>
                    <span>{featured.date}</span>
                  </div>
                  <h2 className="mb-4 text-3xl font-semibold tracking-[-0.03em] text-white">{featured.title}</h2>
                  <p className="mb-6 text-sm leading-7 opacity-90 text-white">{featured.excerpt}</p>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          )}

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
