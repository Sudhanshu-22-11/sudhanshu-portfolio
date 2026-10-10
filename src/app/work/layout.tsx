import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects & Work — Sudhanshu Kumar Pandey | Case Studies",
    description:
        "Explore projects by Sudhanshu Kumar Pandey: FoodWise (SIH food waste platform), Exam Guardrail (proctoring portal), ResQ-AI (emergency app), and Aakanksha (unified tribal scholarship).",
    alternates: {
        canonical: "/work",
    },
    openGraph: {
        title: "Projects & Work — Sudhanshu Kumar Pandey",
        description:
            "Verified software projects and hackathon prototypes by Sudhanshu Kumar Pandey, 2nd-Year Data Science Student @ PESITM Shivamogga.",
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
