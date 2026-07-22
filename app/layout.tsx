import type { Metadata } from "next";
import { Newsreader, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.alamsguesthouse.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Alam's Guest House",
    "guest house in Chitral",
    "guest house in Booni",
    "Upper Chitral hotel",
    "Booni accommodation",
    "Chitral hotel",
    "Chitral valley guest house",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteUrl,
  telephone: siteConfig.phoneDisplay.replace(/\s+/g, ""),
  email: siteConfig.email,
  image: [
    `${siteUrl}/images/hero/front.jpeg`,
    `${siteUrl}/images/hero/side-view.jpeg`,
    `${siteUrl}/images/hero/booni.jpeg`,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Booni Kruijinali, Opposite Post Office",
    addressLocality: "Booni",
    addressRegion: "Khyber Pakhtunkhwa",
    postalCode: "17050",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.2750813,
    longitude: 72.2768467,
  },
  areaServed: "Upper Chitral",
  hasMap:
    "https://www.google.com/maps?q=" + encodeURIComponent(siteConfig.address),
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Free WiFi",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "24/7 Reception",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Event Hall",
      value: true,
    },
  ],
  sameAs: Object.values(siteConfig.socials),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${workSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-beige-100 font-sans text-navy-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <MotionConfig reducedMotion="user">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </MotionConfig>
      </body>
    </html>
  );
}
