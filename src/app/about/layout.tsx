import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — Sudhanshu Kumar Pandey | Data Science Student & Developer",
    description:
        "Learn more about Sudhanshu Kumar Pandey, a 2nd-year B.E. Data Science student at PESITM Shivamogga, Karnataka. Python development, modern web applications, and practical AI.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Sudhanshu Kumar Pandey — Data Science Student & Developer",
        description:
            "2nd-Year Data Science Student @ PESITM Shivamogga. Python, Web Development, Data Science, and practical AI applications.",
        url: "/about",
        images: ["/images/profile-avatar.jpg"],
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const profileJsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        url: "https://sudhanshu-pandey-portfolio.vercel.app/about",
        name: "About Sudhanshu Kumar Pandey — Data Science Student & Developer",
        mainEntity: { "@id": "https://sudhanshu-pandey-portfolio.vercel.app/#person" },
        about: { "@id": "https://sudhanshu-pandey-portfolio.vercel.app/#person" },
    };
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
            />
            {children}
        </>
    );
}
