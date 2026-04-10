import { DM_Sans, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

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
  title: "Improve ME Institute Clone",
  description: "Pixel-close Next.js recreation of Improve ME Institute.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontBody.variable} ${fontUi.variable}`}>
      <body>
        <div className="site-shell">
          <SiteHeader />
          <main className="page-offset">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
