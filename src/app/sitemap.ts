import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://github.com/Sudhanshu-22-11";

    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 1.0,
            images: [`${baseUrl}/images/profile-placeholder.svg`],
        },
        {
            url: `${baseUrl}/work`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
            images: [`${baseUrl}/images/profile-placeholder.svg`],
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/journal`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 0.6,
        },
    ];

    const projectSlugs = [
        "foodwise",
        "exam-guardrail",
        "resq-ai",
        "unified-tribal-scholarship",
    ];

    const projectPages = projectSlugs.map((slug) => ({
        url: `${baseUrl}/work/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    const articleSlugs = [
        "building-foodwise-circular-waste-management",
        "resq-ai-offline-first-emergency-response",
        "democratizing-access-tribal-scholarship-sih",
    ];

    const articlePages = articleSlugs.map((slug) => ({
        url: `${baseUrl}/journal/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticPages, ...projectPages, ...articlePages];
}
