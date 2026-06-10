import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services — Brand Identity, Custom Websites & Immersive 3D Landing Pages",
    description:
        "Hire Your Name for professional brand identity design, custom business websites, and immersive 3D landing page design.",
    alternates: {
        canonical: "/services",
    },
    openGraph: {
        title: "Services — Brand Identity, Websites & 3D Landing Pages | Your Name",
        description:
            "Professional brand identity design, custom business websites, and immersive 3D landing pages. Freelance services by Your Name.",
        url: "/services",
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
