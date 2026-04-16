export const blogs = [
  {
    id: 1,
    title: "Sample Blog Title",
    slug: "sample-blog",
    content: "This is static blog content.",
    image: "/images/blog1.webp",
    metaTitle: "Sample Blog Title",
    metaDescription: "Sample description",
    // Fields used by the existing UI code (Strapi-shaped data)
    Heading: "Sample Blog Title",
    Description: [
      {
        type: "paragraph",
        children: [{ text: "This is static blog content." }],
      },
    ],
    Date: "2024-01-15",
    updatedAt: "2024-01-15T00:00:00.000Z",
    Image: { url: "/images/blog1.webp" },
  },
  {
    id: 2,
    title: "How to choose the right tutor",
    slug: "choose-right-tutor",
    content:
      "Learn how to match tutors to your child's goals, curriculum, and timeline—without guesswork.",
    image: "/images/blog2.webp",
    metaTitle: "How to choose the right tutor",
    metaDescription: "A quick guide to selecting the best tutor.",
    Heading: "How to choose the right tutor",
    Description: [
      {
        type: "paragraph",
        children: [{ text: "Learn how to match tutors to your child's goals, curriculum, and timeline—without guesswork." }],
      },
      {
        type: "list",
        children: [{ children: [{ text: "Assess your current level" }] }, { children: [{ text: "Confirm curriculum fit" }] }, { children: [{ text: "Set measurable weekly targets" }] }],
      },
    ],
    Date: "2024-02-10",
    updatedAt: "2024-02-10T00:00:00.000Z",
    Image: { url: "/images/blog2.webp" },
  },
  {
    id: 3,
    title: "Studying smarter for exams",
    slug: "studying-smarter-exams",
    content: "A practical plan for consistency: revision schedules, practice exams, and feedback loops.",
    image: "/images/blog3.webp",
    metaTitle: "Studying smarter for exams",
    metaDescription: "Revision schedules and feedback loops that work.",
    Heading: "Studying smarter for exams",
    Description: [
      {
        type: "paragraph",
        children: [{ text: "A practical plan for consistency: revision schedules, practice exams, and feedback loops." }],
      },
      {
        type: "blockquote",
        text: "Consistency beats cramming.",
        children: [{ text: "Consistency beats cramming." }],
      },
    ],
    Date: "2024-03-05",
    updatedAt: "2024-03-05T00:00:00.000Z",
    Image: { url: "/images/blog3.webp" },
  },
];

