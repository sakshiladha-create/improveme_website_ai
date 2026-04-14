const siteName = "Improve ME Institute";
const siteUrl = "https://www.improvemeinstitute.com";
const defaultDescription =
  "Improve ME Institute is a KHDA-approved tutoring centre in Dubai offering small-group support in Maths, English, Science, GCSE, IGCSE, A-Level, IB, MYP, CAT4 prep, and enrichment programmes.";
const defaultKeywords = [
  "tutoring centre Dubai",
  "Dubai tutors",
  "Maths tuition Dubai",
  "English tuition Dubai",
  "Science tuition Dubai",
  "GCSE tuition Dubai",
  "IGCSE tuition Dubai",
  "A-Level tuition Dubai",
  "IB tuition Dubai",
  "CAT4 preparation Dubai",
];

export const seoDefaults = {
  siteName,
  siteUrl,
  defaultDescription,
  defaultKeywords,
  ogImage: "/overlay_image.webp",
};

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, siteUrl).toString();
}

export function buildPageMetadata({
  title,
  description = defaultDescription,
  pathname = "/",
  keywords = [],
  image = seoDefaults.ogImage,
}) {
  const canonical = absoluteUrl(pathname);
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteName} tutoring centre in Dubai`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function buildFaqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl("/logo.webp"),
    image: absoluteUrl("/overlay_image.webp"),
    email: "contact@improvemeinstitute.com",
    telephone: "+97143805525",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 3016-3017, Building 3, Gold and Diamond Park",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    sameAs: [
      "https://www.instagram.com/improvemedxb",
      "https://www.facebook.com/improvemeinstitute",
    ],
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteName,
    url: siteUrl,
    image: absoluteUrl("/overlay_image.webp"),
    telephone: "+97143805525",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 3016-3017, Building 3, Gold and Diamond Park",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "19:00",
      },
    ],
  };
}
