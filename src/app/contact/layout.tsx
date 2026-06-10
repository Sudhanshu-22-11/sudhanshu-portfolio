import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact — Hire a 3D Immersive Web Designer",
    description:
        "Get in touch with Your Name for 3D immersive web design, brand identity, and custom website projects. Based in Your City, Country. Email: hello@example.com",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Your Name — Hire a 3D Web Designer",
        description:
            "Hire Your Name for 3D web design, brand identity, and immersive landing page projects. Contact: hello@example.com",
        url: "/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
