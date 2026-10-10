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
        slug: "building-foodwise-circular-waste-management",
        date: "Oct 2026",
        category: "Case Study",
        title: "Building FoodWise: Tackling India's 68M Tonne Food Waste Problem with AI and Mass Balance",
        excerpt:
            "How we architected a circular system combining institutional mess telemetry, industrial mass-balance kinetics, and verified NGO hunger relief routes for Smart India Hackathon.",
        heroImage: "/journal/article-one.svg",
        readTime: "5 min read",
        metaTitle: "Building FoodWise: Circular Food Waste Management | Sudhanshu Kumar Pandey",
        metaDescription:
            "An architectural breakdown of FoodWise, an end-to-end circular platform reducing food waste across kitchens, processing factories, and relief distribution networks.",
        content: [
            {
                type: "paragraph",
                content:
                    "India generates over 68 million tonnes of food waste annually while simultaneously facing severe malnutrition across vulnerable demographics. When inspecting the problem, our team realized the challenge is not simply excess supply—it is a disconnection between generation nodes, storage limits, and verified redistribution pipelines.",
            },
            {
                type: "heading",
                content: "1. The Mess Telemetry Problem",
            },
            {
                type: "paragraph",
                content:
                    "Institutional and university kitchens face daily attendance fluctuations that make fixed-batch cooking inherently wasteful. By building predictive neural forecasting paired with IoT scale telemetry, kitchen administrators can adjust batch prep dynamically, reducing overproduction by over 70%.",
            },
            {
                type: "image",
                src: "/journal/article-one.svg",
                alt: "FoodWise platform overview",
                caption: "FoodWise circular architecture diagram connecting kitchens, factories, and relief NGOs.",
            },
            {
                type: "heading",
                content: "2. Industrial Mass Balance & Byproduct Valorization",
            },
            {
                type: "paragraph",
                content:
                    "At processing plants, organic waste streams often end up in landfills. FoodWise models spoilage kinetics in real time, routing sub-standard batches into circular recovery pipelines like biogas and animal feed rather than letting them decompose.",
            },
            {
                type: "quote",
                content:
                    "“Solving food waste at scale requires end-to-end visibility: knowing what will be wasted before it is cooked, and where surplus can safely go before it spoils.”",
                author: "Sudhanshu Kumar Pandey",
            },
            {
                type: "heading",
                content: "3. Safe NGO Redistribution with Thermal Handshakes",
            },
            {
                type: "paragraph",
                content:
                    "For surplus redistribution, safety is non-negotiable. FoodWise enforces FSSAI standard validation, time-temperature logs, and OTP handshakes between donors and certified relief volunteers to maintain absolute food safety.",
            },
        ],
    },
    {
        slug: "resq-ai-offline-first-emergency-response",
        date: "Sep 2026",
        category: "Mobile Architecture",
        title: "ResQ-AI: Designing an Offline-First Emergency First-Aid App for Low-Connectivity Environments",
        excerpt:
            "Engineering life-saving first-aid flows that render instantly with zero network access, paired with 100 BPM CPR rhythm feedback and Groq multimodal vision triage.",
        heroImage: "/journal/article-two.svg",
        readTime: "4 min read",
        metaTitle: "ResQ-AI: Offline-First Emergency App Architecture | Sudhanshu Kumar Pandey",
        metaDescription:
            "How ResQ-AI empowers untrained bystanders during critical golden-hour medical emergencies with zero-network triage trees and haptic CPR metronomes.",
        content: [
            {
                type: "paragraph",
                content:
                    "In India, ambulance transit times often exceed 25 to 30 minutes in congested cities and even longer in rural corridors. For critical medical events like sudden cardiac arrest or massive hemorrhage, the golden hour—and specifically the first 4 to 6 minutes—is determined entirely by untrained bystanders standing next to the victim.",
            },
            {
                type: "heading",
                content: "Why Offline-First is a Life-or-Death Requirement",
            },
            {
                type: "paragraph",
                content:
                    "Emergencies happen in basements, transit tunnels, highway stretches, and remote areas where 4G/5G connections drop. Cloud-dependent apps fail precisely when they are needed most. For ResQ-AI, we bundled 5 comprehensive triage trees (cardiac arrest, choking, burns, severe trauma, unconsciousness) directly into the app shell.",
            },
            {
                type: "list",
                items: [
                    "Zero-latency offline rendering for all critical protocol decision trees",
                    "Audio and haptic 100 BPM CPR metronome keeping chest compression cadence",
                    "2-second hold-to-SOS triggering live GPS coordinate broadcast via SMS and WhatsApp",
                    "Groq vision AI triage available whenever online connectivity is restored",
                ],
            },
            {
                type: "quote",
                content:
                    "“A first-aid app that spins a loading spinner during a cardiac arrest is a failed product. Resilience means functioning completely detached from the internet.”",
                author: "Sudhanshu Kumar Pandey",
            },
            {
                type: "paragraph",
                content:
                    "By leveraging Capacitor and React 19, ResQ-AI runs natively on Android devices while preserving PWA lightness for instant installation.",
            },
        ],
    },
    {
        slug: "democratizing-access-tribal-scholarship-sih",
        date: "Aug 2026",
        category: "Public Tech",
        title: "Aakanksha: Designing a Unified Student Orchestration Layer for MoTA Scholarships",
        excerpt:
            "How our Smart India Hackathon prototype eliminates repetitive paperwork and conflicting scholarship claims for tribal students across India.",
        heroImage: "/journal/article-three.svg",
        readTime: "4 min read",
        metaTitle: "Aakanksha: Unified Tribal Scholarship Architecture | Sudhanshu Kumar Pandey",
        metaDescription:
            "Design principles and implementation details behind the Unified Tribal Scholarship Portal prototype created for the Ministry of Tribal Affairs.",
        content: [
            {
                type: "paragraph",
                content:
                    "Tribal students in higher education currently interact with multiple disconnected government portals across different stages—from Pre-Matric support to overseas doctoral research grants. Each system required separate logins, document uploads, and opaque verification tracking.",
            },
            {
                type: "heading",
                content: "One Profile, Multiple Government Schemes",
            },
            {
                type: "paragraph",
                content:
                    "Rather than attempting to rebuild established backend databases, Aakanksha acts as a student-facing orchestration layer. It presents five core Ministry of Tribal Affairs (MoTA) schemes within a unified dashboard, running cross-system conflict checks to prevent accidental duplicate applications while tracking Direct Benefit Transfer (DBT) progress.",
            },
            {
                type: "list",
                items: [
                    "Accessible public-service visual system adhering to official government color standards",
                    "Pre-Matric, Post-Matric, Top Class, NFST, and National Overseas Scholarship integrations",
                    "Automated income and caste document verification simulation layer",
                    "Transparent DBT milestone pipeline showing real-time fund disbursement status",
                ],
            },
            {
                type: "paragraph",
                content:
                    "Building this prototype reinforced the importance of inclusive UI/UX—designing software that serves real citizens with varying digital literacy and network reliability.",
            },
        ],
    },
];
