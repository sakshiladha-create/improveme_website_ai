export const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getBlogs() {
  const res = await fetch(`${API_URL}/api/blogs?populate=*`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
}

export async function getBlog(slug) {
  const res = await fetch(
    `${API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.data[0];
}

