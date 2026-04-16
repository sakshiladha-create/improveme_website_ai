import "server-only";

const STRAPI_BASE_URL = (process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337").replace(/\/+$/, "");

function stripLeadingSlash(value) {
  if (typeof value !== "string") return "";
  return value.replace(/^\/+/, "");
}

export function encodeBlogSlug(rawSlug) {
  return encodeURIComponent(stripLeadingSlash(rawSlug));
}

function parseDate(post) {
  const value = post?.Date || post?.publishedAt || post?.createdAt;
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function formatBlogDate(post) {
  const d = parseDate(post);
  if (!d) return "";
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export function richTextToPlainText(richText) {
  if (!richText || !Array.isArray(richText)) return "";
  return richText
    .map((block) => {
      if (block?.type === "paragraph" && Array.isArray(block.children)) {
        return block.children.map((child) => child?.text || "").join("");
      }
      return "";
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function pickCoverImageFromStrapi(post) {
  // Strapi v5 cloud often returns media directly as an array under `Image`.
  const firstImage = Array.isArray(post?.Image) ? post.Image[0] : post?.Image;
  if (firstImage) {
    const formats = firstImage?.formats || {};
    const best =
      formats?.medium?.url ||
      formats?.small?.url ||
      formats?.thumbnail?.url ||
      firstImage?.url;
    if (best) return best;
  }

  // Other common shapes (future-proofing).
  const direct =
    post?.coverImage?.url ||
    post?.CoverImage?.url ||
    post?.image?.url ||
    post?.cover?.url ||
    post?.thumbnail?.url;
  if (direct) return direct;

  const nested =
    post?.coverImage?.data?.attributes?.url ||
    post?.CoverImage?.data?.attributes?.url ||
    post?.image?.data?.attributes?.url ||
    post?.cover?.data?.attributes?.url ||
    post?.thumbnail?.data?.attributes?.url;
  if (nested) return nested.startsWith("http") ? nested : `${STRAPI_BASE_URL}${nested}`;

  return null;
}

const pexelsFallbacks = [
  "https://images.pexels.com/photos/5212346/pexels-photo-5212346.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
  "https://images.pexels.com/photos/5212318/pexels-photo-5212318.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
  "https://images.pexels.com/photos/5212694/pexels-photo-5212694.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
  "https://images.pexels.com/photos/5212354/pexels-photo-5212354.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1600",
];

export function getBlogCoverImage(post) {
  const fromStrapi = pickCoverImageFromStrapi(post);
  return fromStrapi;
}

async function strapiFetch(pathnameAndQuery, init) {
  const url = `${STRAPI_BASE_URL}${pathnameAndQuery.startsWith("/") ? "" : "/"}${pathnameAndQuery}`;
  const res = await fetch(url, {
    ...init,
    next: { revalidate: 300 },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Strapi request failed (${res.status}): ${text || url}`);
  }
  return await res.json();
}

export async function getBlogs() {
  const json = await strapiFetch("/api/blogs?populate=*", undefined);
  return Array.isArray(json?.data) ? json.data : [];
}

export async function getBlogBySlug(rawSlug) {
  const slug = stripLeadingSlash(decodeURIComponent(rawSlug || ""));

  // Try filtered query first (more efficient).
  const filteredJson = await strapiFetch(
    `/api/blogs?populate=*&filters[slug][$eq]=${encodeURIComponent(slug)}`,
    undefined
  ).catch(() => null);
  const hit = Array.isArray(filteredJson?.data) ? filteredJson.data[0] : null;
  if (hit) return hit;

  // Fallback: fetch all and match.
  const all = await getBlogs();
  return (
    all.find((p) => stripLeadingSlash(p?.slug) === slug) ||
    all.find((p) => encodeBlogSlug(p?.slug) === encodeURIComponent(slug)) ||
    null
  );
}

// Backwards-compatible exports (older pages/components may still import these).
export const fetchBlogs = getBlogs;
export const fetchBlogBySlug = getBlogBySlug;

