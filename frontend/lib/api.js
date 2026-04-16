import { blogs } from "@/lib/staticBlogs";

export async function getBlogs() {
  return blogs;
}

export async function getBlog(slug) {
  return blogs.find((b) => b.slug === slug) || null;
}

