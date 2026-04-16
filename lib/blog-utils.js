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
      if (block?.type === "blockquote" && Array.isArray(block.children)) {
        return block.children.map((child) => child?.text || "").join("");
      }
      return "";
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getBlogCoverImage(post) {
  return (
    post?.image ||
    post?.Image?.url ||
    post?.coverImage?.url ||
    post?.thumbnail?.url ||
    null
  );
}
