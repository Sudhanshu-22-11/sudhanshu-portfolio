import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Journal — Insights on 3D Web Design, WebGL & Immersive Experiences",
    description:
        "Read articles by Your Name on 3D immersive web design, WebGL performance optimization, hiring a 3D web designer, and the future of interactive website experiences. Expert insights for brands seeking premium digital presence.",
    alternates: {
        canonical: "/journal",
    },
    openGraph: {
        title: "Journal — 3D Web Design Insights & Articles | Your Name",
        description:
            "Expert articles on 3D web design, WebGL, immersive landing pages, and interactive website development by Your Name.",
        url: "/journal",
    },
};

export default function JournalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
