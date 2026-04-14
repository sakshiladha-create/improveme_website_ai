import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { buildLocalBusinessSchema, buildOrganizationSchema, buildPageMetadata, seoDefaults } from "@/data/seo";

const fontDisplay = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

const fontBody = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const fontUi = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(seoDefaults.siteUrl),
  applicationName: seoDefaults.siteName,
  category: "Education",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  ...buildPageMetadata({
    title: "Tutoring Centre in Dubai for Primary, GCSE, IGCSE, A-Level and IB",
    pathname: "/",
  }),
};

export default function RootLayout({ children }) {
  const organizationSchema = buildOrganizationSchema();
  const localBusinessSchema = buildLocalBusinessSchema();

  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable} ${fontUi.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <div className="site-shell">
          <SiteHeader />
          <main className="page-offset">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
