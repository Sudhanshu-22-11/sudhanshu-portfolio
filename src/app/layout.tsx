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

const siteUrl = "https://github.com/Sudhanshu-22-11";

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/Sudhanshu-22-11"),
  title: {
    default: "Sudhanshu Kumar Pandey — Data Science Student & Developer | Portfolio",
    template: "%s | Sudhanshu Kumar Pandey",
  },
  description:
    "Portfolio of Sudhanshu Kumar Pandey — 2nd-year B.E. Data Science student at PESITM Shivamogga. Passionate about Python, Web Development, Data Science, and practical AI applications.",
  keywords: [
    "Sudhanshu Kumar Pandey",
    "Data Science Student",
    "Python Developer",
    "Web Developer",
    "Machine Learning Explorer",
    "PESITM Shivamogga",
    "FoodWise",
    "Exam Guardrail",
    "ResQ-AI",
    "Unified Tribal Scholarship",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Sudhanshu Kumar Pandey", url: "https://github.com/Sudhanshu-22-11" }],
  creator: "Sudhanshu Kumar Pandey",
  publisher: "Sudhanshu Kumar Pandey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Sudhanshu-22-11",
    siteName: "Sudhanshu Kumar Pandey — Developer Portfolio",
    title: "Sudhanshu Kumar Pandey — Data Science Student & Developer",
    description:
      "B.E. Data Science student at PESITM Shivamogga. Passionate about Python, Web Development, and practical AI solutions.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sudhanshu Kumar Pandey — Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudhanshu Kumar Pandey — Developer Portfolio",
    description:
      "B.E. Data Science student at PESITM Shivamogga. Python, Web Development, Data Science, and practical AI.",
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
    name: "Sudhanshu Kumar Pandey",
    url: siteUrl,
    mainEntityOfPage: `${siteUrl}/about`,
    image: {
      "@type": "ImageObject",
      url: `/images/profile-placeholder.svg`,
      width: 1086,
      height: 1448,
      caption: "Sudhanshu Kumar Pandey — Data Science Student & Developer",
    },
    jobTitle: "B.E. Data Science Student & Developer",
    description:
      "2nd-year B.E. Data Science student at PES Institute of Technology & Management, Shivamogga. Interested in Python development, web development, data analysis, and AI-powered applications.",
    email: "anshu402pandey@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Shivamogga",
      addressRegion: "Karnataka",
      addressCountry: "India",
    },
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "PES Institute of Technology & Management, Shivamogga",
    },
    sameAs: [
      "https://github.com/Sudhanshu-22-11",
      "https://www.linkedin.com/in/sudhanshu-kumar-pandey-b52652381",
    ],
    knowsAbout: [
      "Data Science",
      "Python",
      "Web Development",
      "HTML & CSS",
      "JavaScript",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "React",
      "Machine Learning",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Sudhanshu Kumar Pandey — Developer Portfolio",
    url: siteUrl,
    description: "Official portfolio of Sudhanshu Kumar Pandey, showcasing software projects, data science exploration, and achievements.",
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
