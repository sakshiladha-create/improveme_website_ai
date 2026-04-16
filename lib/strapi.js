import "server-only";

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
  if (nested) return nested;

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

