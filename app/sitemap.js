import { courses } from "@/data/site-data";
import { absoluteUrl } from "@/data/seo";
import { encodeBlogSlug } from "@/lib/blog-utils";
import { getBlogs } from "@/lib/blogs";

const staticRoutes = [
  "/",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/courses",
  "/curriculum",
  "/our-teachers",
  "/blog",
  "/faq",
  "/glossary",
  "/enrolment-page",
];

export default async function sitemap() {
  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));

  const courseEntries = courses.map((course) => ({
    url: absoluteUrl(`/courses/${course.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogEntries = getBlogs().map((post) => ({
    url: absoluteUrl(`/blog/${encodeBlogSlug(post.slug)}`),
    lastModified: post?.updatedAt ? new Date(post.updatedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...courseEntries, ...blogEntries];
}
