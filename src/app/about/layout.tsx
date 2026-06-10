import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — 3D Immersive Web Designer | Your City, Country",
    description:
        "Your Name is an independent 3D immersive web designer based in Your City, Country. Replace this with a short description of your specialties and availability.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Your Name — 3D Immersive Web Designer",
        description:
            "Independent 3D web designer. Replace this with your own short description for link previews.",
        url: "/about",
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
        url: "https://example.com/about",
        name: "About Your Name — 3D Immersive Web Designer",
        mainEntity: { "@id": "https://example.com/#person" },
        about: { "@id": "https://example.com/#person" },
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
