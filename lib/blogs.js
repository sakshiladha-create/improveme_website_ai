export const blogs = [
  {
    id: 1,
    title: "Demo Blog 1",
    slug: "demo-blog-1",
    content: "This is demo content.",
    image: "/images/blog1.jpg",
    metaTitle: "Demo Blog 1",
    metaDescription: "Demo description",
    Heading: "Demo Blog 1",
    Description: [
      {
        type: "paragraph",
        children: [{ text: "This is demo content." }],
      },
    ],
    Date: "2024-01-15",
    updatedAt: "2024-01-15T00:00:00.000Z",
    Image: { url: "/images/blog1.jpg" },
  },
  {
    id: 2,
    title: "Demo Blog 2",
    slug: "demo-blog-2",
    content: "This is another demo blog.",
    image: "/images/blog2.jpg",
    metaTitle: "Demo Blog 2",
    metaDescription: "Demo description 2",
    Heading: "Demo Blog 2",
    Description: [
      {
        type: "paragraph",
        children: [{ text: "This is another demo blog." }],
      },
    ],
    Date: "2024-02-20",
    updatedAt: "2024-02-20T00:00:00.000Z",
    Image: { url: "/images/blog2.jpg" },
  },
];

export function getBlogs() {
  return blogs;
}

export function getBlog(slug) {
  return blogs.find((b) => b.slug === slug) || null;
}
