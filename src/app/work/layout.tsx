import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work — 3D Website Portfolio & Case Studies",
    description:
        "Explore Your Name's portfolio of 3D immersive websites, brand identity projects, and interactive WebGL experiences.",
    alternates: {
        canonical: "/work",
    },
    openGraph: {
        title: "Work — 3D Website Portfolio & Case Studies | Your Name",
        description:
            "Portfolio of immersive 3D websites and brand identity projects by Your Name.",
        url: "/work",
    },
};

export default function WorkLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
