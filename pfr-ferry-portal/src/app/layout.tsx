import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/a11y/skip-link";
import { siteName, siteDescription } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://projects.unifiedmentor.com"),
  title: { default: siteName, template: `%s | ${siteName}` },
  description: siteDescription,
  keywords: ["PF&R", "Toronto ferry", "passenger management", "alerts", "bookings", "parks"],
  openGraph: { title: siteName, description: siteDescription, type: "website" },
  twitter: { card: "summary_large_image", title: siteName, description: siteDescription },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
