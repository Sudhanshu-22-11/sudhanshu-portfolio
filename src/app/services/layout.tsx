import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Focus & Capabilities — Sudhanshu Kumar Pandey | Data Science & Web",
    description:
        "Technical focus and capabilities of Sudhanshu Kumar Pandey: Python development, data analysis, modern web applications, and practical AI prototyping.",
    alternates: {
        canonical: "/services",
    },
    openGraph: {
        title: "Focus & Capabilities — Sudhanshu Kumar Pandey",
        description:
            "Python development, data analysis with Pandas/NumPy, responsive web development, and AI prototyping by Sudhanshu Kumar Pandey.",
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
