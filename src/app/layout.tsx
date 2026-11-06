import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { organizationJsonLd, siteName, siteUrl, tagline } from "@/lib/site";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#fff7ee",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Agencja wydawniczo-marketingowa w Gdańsku`,
    template: `%s | ${siteName} Gdańsk`,
  },
  description:
    "Agencja Wydawniczo-Marketingowa Wydma z Gdańska tworzy gazety, biuletyny, foldery i materiały reklamowe. Od treści i projektu po przygotowanie do druku.",
  applicationName: siteName,
  keywords: [
    "agencja wydawnicza Gdańsk",
    "agencja marketingowa Gdańsk",
    "biuletyn spółdzielni mieszkaniowej",
    "gazeta firmowa",
    "skład do druku",
    "materiały reklamowe Gdańsk",
    "Wydma",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  category: "business",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName,
    title: `${siteName} | Agencja wydawniczo-marketingowa w Gdańsku`,
    description: tagline,
    images: [
      {
        url: "/projects/biuletyny-jubileuszowe.png",
        width: 1086,
        height: 1448,
        alt: "Biuletyny jubileuszowe przygotowane przez agencję Wydma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Agencja wydawniczo-marketingowa w Gdańsku`,
    description: tagline,
    images: ["/projects/biuletyny-jubileuszowe.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/branding/icon-bg-round.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/branding/icon-bg-round.png",
    apple: [
      {
        url: "/branding/icon-bg-noround.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationJsonLd()} />
        <a
          href="#tresc"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-sun focus:px-4 focus:py-2 focus:text-ink"
        >
          Przejdź do treści
        </a>
        <SiteHeader />
        <main id="tresc" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
