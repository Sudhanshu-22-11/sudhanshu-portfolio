export interface Article {
    slug: string;
    date: string;
    category: string;
    title: string;
    excerpt: string;
    heroImage: string;
    readTime: string;
    metaTitle: string;
    metaDescription: string;
    content: ArticleSection[];
}

export interface ArticleSection {
    type: "paragraph" | "heading" | "subheading" | "image" | "quote" | "list";
    content?: string;
    items?: string[];
    src?: string;
    alt?: string;
    caption?: string;
    author?: string;
}

export const articlesData: Article[] = [
    {
        slug: "sample-article-one",
        date: "Jan 2026",
        category: "Insight",
        title: "Sample Article One: Replace This Headline",
        excerpt:
            "This is a placeholder excerpt. Summarize the article in one or two sentences here — it appears on the journal listing page and in link previews.",
        heroImage: "/journal/article-one.svg",
        readTime: "5 min read",
        metaTitle: "Sample Article One | Your Name",
        metaDescription:
            "Placeholder meta description for sample article one. Replace with a 150–160 character summary written for search engines.",
        content: [
            {
                type: "paragraph",
                content:
                    "This is placeholder body text for your first article. Each article is composed of typed sections — paragraphs, headings, images, quotes, and lists — defined in src/data/articles.ts. Replace this content with your own writing.",
            },
            {
                type: "heading",
                content: "A Section Heading",
            },
            {
                type: "paragraph",
                content:
                    "Placeholder paragraph text. Articles support multiple paragraphs per section, and the layout handles typography, spacing, and animations automatically.",
            },
            {
                type: "image",
                src: "/journal/article-one.svg",
                alt: "Placeholder image",
                caption: "Image captions render here, styled and italicized.",
            },
            {
                type: "list",
                items: [
                    "List items render with a bullet accent",
                    "Use them for steps, takeaways, or feature lists",
                    "Add as many as you need",
                ],
            },
            {
                type: "quote",
                content:
                    "This is a placeholder pull quote. Quotes render large and italic with an accent border, and can include an author attribution.",
                author: "Your Name",
            },
            {
                type: "paragraph",
                content:
                    "A closing placeholder paragraph. End your article with a summary or a call to action.",
            },
        ],
    },
    {
        slug: "sample-article-two",
        date: "Dec 2025",
        category: "Process",
        title: "Sample Article Two: Replace This Headline",
        excerpt:
            "This is a placeholder excerpt for the second article. Summarize the article in one or two sentences here.",
        heroImage: "/journal/article-two.svg",
        readTime: "4 min read",
        metaTitle: "Sample Article Two | Your Name",
        metaDescription:
            "Placeholder meta description for sample article two. Replace with a 150–160 character summary written for search engines.",
        content: [
            {
                type: "paragraph",
                content:
                    "Placeholder body text for your second article. Duplicate this object in src/data/articles.ts to add more articles — each needs a unique slug.",
            },
            {
                type: "heading",
                content: "A Section Heading",
            },
            {
                type: "paragraph",
                content:
                    "Placeholder paragraph text. The journal page lists every article in this file automatically, and each gets its own page at /journal/[slug].",
            },
            {
                type: "quote",
                content:
                    "A second placeholder quote to show how multiple articles share the same structure.",
                author: "Your Name",
            },
        ],
    },
    {
        slug: "sample-article-three",
        date: "Nov 2025",
        category: "Thought",
        title: "Sample Article Three: Replace This Headline",
        excerpt:
            "This is a placeholder excerpt for the third article. Summarize the article in one or two sentences here.",
        heroImage: "/journal/article-three.svg",
        readTime: "3 min read",
        metaTitle: "Sample Article Three | Your Name",
        metaDescription:
            "Placeholder meta description for sample article three. Replace with a 150–160 character summary written for search engines.",
        content: [
            {
                type: "paragraph",
                content:
                    "Placeholder body text for your third article. Remove any articles you do not need — the journal listing and sitemap update automatically.",
            },
            {
                type: "heading",
                content: "A Section Heading",
            },
            {
                type: "list",
                items: [
                    "Replace the placeholder hero images in public/journal/",
                    "Update the date, category, and read time fields",
                    "Write your own meta title and description for SEO",
                ],
            },
        ],
    },
];
