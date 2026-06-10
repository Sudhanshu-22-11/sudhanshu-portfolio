import type { Metadata } from "next";
import { Noto_Serif_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import MusicPlayer from "@/components/MusicPlayer";

const notoSerifDisplay = Noto_Serif_Display({
  variable: "--font-display-next",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sans-next",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Your Name — 3D Immersive Web Designer | Web3D Experiences & Brand Identity",
    template: "%s | Your Name — 3D Web Designer",
  },
  description:
    "Your Name is an independent 3D immersive web designer. Specializing in WebGL experiences, interactive 3D websites, brand identity design, and custom websites. Replace this with your own description.",
  keywords: [
    "3D web designer",
    "immersive website designer",
    "WebGL developer",
    "3D interactive website",
    "brand identity designer",
    "immersive landing page design",
    "Web3D experiences",
    "3D website development",
    "Your Name",
    "interactive web experiences",
    "Three.js developer",
    "creative web designer",
  ],
  authors: [{ name: "Your Name", url: siteUrl }],
  creator: "Your Name",
  publisher: "Your Name",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Your Name — 3D Immersive Web Designer",
    title: "Your Name — 3D Immersive Web Designer | Web3D Experiences & Brand Identity",
    description:
      "Independent 3D immersive web designer specializing in WebGL, interactive 3D websites, and brand identity. Replace this with your own description.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Your Name — 3D Immersive Web Designer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle",
    creator: "@yourhandle",
    title: "Your Name — 3D Immersive Web Designer",
    description:
      "Independent 3D immersive web designer specializing in WebGL, interactive 3D websites, and brand identity design.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Your Name",
    url: siteUrl,
    mainEntityOfPage: `${siteUrl}/about`,
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/profile-placeholder.svg`,
      width: 1086,
      height: 1448,
      caption: "Your Name — 3D Immersive Web Designer",
    },
    jobTitle: "3D Immersive Web Designer",
    description: "Independent 3D immersive web designer. Replace this with your own description.",
    email: "hello@example.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Your City",
      addressCountry: "Your Country",
    },
    sameAs: [
      "https://www.instagram.com/yourhandle",
      "https://linkedin.com/in/yourhandle",
      "https://twitter.com/yourhandle",
    ],
    knowsAbout: [
      "3D Web Design",
      "WebGL",
      "Three.js",
      "Brand Identity Design",
      "Immersive Landing Pages",
      "UI/UX Design",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Your Name — 3D Immersive Web Designer",
    url: siteUrl,
    description: "Portfolio of Your Name, an independent 3D immersive web designer.",
    inLanguage: "en",
    publisher: { "@id": `${siteUrl}/#person` },
    author: { "@id": `${siteUrl}/#person` },
  };

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${notoSerifDisplay.variable} ${montserrat.variable} font-sans antialiased min-h-dvh flex flex-col w-full bg-background-light text-neutral-black`}
      >
        <Loader />
        <MusicPlayer />
        <CustomCursor />
        <Navigation />
        <div className="flex-1 flex flex-col w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
