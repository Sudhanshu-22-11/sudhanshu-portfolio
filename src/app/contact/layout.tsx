import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact — Sudhanshu Kumar Pandey | Data Science Student & Developer",
    description:
        "Get in touch with Sudhanshu Kumar Pandey for internships, collaborative hackathons, and freelance web development projects. Based in Shivamogga, Karnataka, India. Email: anshu402pandey@gmail.com",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Sudhanshu Kumar Pandey — Get in Touch",
        description:
            "Available for internships, collaborative hackathons, and web development projects. Contact: anshu402pandey@gmail.com",
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
