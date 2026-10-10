import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Journal — Sudhanshu Kumar Pandey | Engineering Insights & Case Breakdowns",
    description:
        "Read articles and technical retrospectives by Sudhanshu Kumar Pandey on circular food waste management (FoodWise), offline-first emergency systems (ResQ-AI), and public-service portals.",
    alternates: {
        canonical: "/journal",
    },
    openGraph: {
        title: "Journal — Sudhanshu Kumar Pandey | Engineering Insights",
        description:
            "Technical articles and case retrospectives by Sudhanshu Kumar Pandey, 2nd-Year Data Science Student @ PESITM Shivamogga.",
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
