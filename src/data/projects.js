export const projectsData = [
    {
        slug: 'foodwise',
        thumbW: 1600,
        thumbH: 1200,
        title: 'FoodWise: Circular Food Waste Management',
        heroImage: '/images/projects/foodwise/hero.svg',
        heroVideo: '',
        liveUrl: 'https://food-wise-puce.vercel.app',
        githubUrl: 'https://github.com/Sudhanshu-22-11/FoodWise',
        imageCaptions: ['Circular mass balance & surplus redistribution architecture.'],
        disclaimer: 'Engineered as an end-to-end prototype for the Smart India Hackathon initiative.',
        images: ["/images/projects/foodwise/hero.svg"],
        role: 'SIH Prototype / Full Stack',
        tools: 'Next.js 16, React 19, TypeScript, Tailwind CSS, Prisma, MongoDB, Framer Motion, Recharts',
        concept: 'AI-driven circular food waste management, industrial mass balance, and verified community hunger relief platform.',
        narrative: 'FoodWise addresses India’s annual 68-million-tonne food waste crisis by creating a connected circular ecosystem. The platform links institutional kitchen mess facilities (such as university dining halls), industrial manufacturing units, and grassroots hunger-relief NGOs into a single coordinated network.',
        challenge: {
            title: 'Unpredictable Batching & Perishability Gaps',
            text: 'Commercial kitchens suffer from rigid batch sizes and unpredictable attendance resulting in massive surplus waste. Factories lack real-time mass-balance accounting for organic waste streams, while relief NGOs struggle with cold-chain validation and last-minute logistics.'
        },
        solution: {
            title: 'Neural Forecasting & Verified Cold-Chain Redistribution',
            text: 'Implemented neural demand forecasting and IoT scale telemetry to reduce kitchen overproduction by up to 70%. Introduced industrial spoilage kinetics for circular byproduct recovery (biogas, animal feed), alongside dynamic route optimization with strict thermal validation and OTP handshakes for relief NGOs.'
        },
        nextCase: {
            title: 'Exam Guardrail: Proctoring Portal',
            slug: 'exam-guardrail'
        }
    },

    {
        slug: 'exam-guardrail',
        thumbW: 1600,
        thumbH: 1200,
        title: 'Exam Guardrail: Integrity-First Proctoring Portal',
        heroImage: '/images/projects/exam-guardrail/hero.svg',
        heroVideo: '',
        liveUrl: '',
        githubUrl: 'https://github.com/Sudhanshu-22-11/Exam-Guardrail',
        imageCaptions: ['Multi-perspective proctoring & test environment integrity surveillance.'],
        disclaimer: 'Developed with Team BrainBytes for online examination monitoring and academic integrity enforcement.',
        images: ["/images/projects/exam-guardrail/hero.svg"],
        role: 'Team BrainBytes / Lead Developer',
        tools: 'Node.js, Express, JavaScript, HTML5, CSS3, WebRTC / Camera Stream API',
        concept: 'Integrity-first examination monitoring system combining secure student test environments with real-time educator surveillance.',
        narrative: 'Built as part of Team BrainBytes, Exam Guardrail tackles academic integrity vulnerabilities in computer-based and remote assessments. The solution provides a dedicated examination portal for candidates alongside an active surveillance console for proctors.',
        challenge: {
            title: 'Academic Compromise in Remote Testing',
            text: 'Online examinations are prone to unauthorized reference material access, multi-window switching, unmonitored collaborative cheating, and delayed violation detection without heavy invasive software.'
        },
        solution: {
            title: 'Environment Integrity & Real-Time Educator Grid',
            text: 'Developed a lightweight client-server framework featuring session authentication, browser environment constraints, violation detection (tab switching, focus loss), and an educator surveillance dashboard for monitoring active test-takers simultaneously.'
        },
        nextCase: {
            title: 'ResQ-AI: Emergency First-Response',
            slug: 'resq-ai'
        }
    },

    {
        slug: 'resq-ai',
        thumbW: 1600,
        thumbH: 1200,
        title: 'ResQ-AI: Emergency First-Response App',
        heroImage: '/images/projects/resq-ai/hero.svg',
        heroVideo: '',
        liveUrl: '',
        githubUrl: 'https://github.com/Sudhanshu-22-11/ResQ-AI',
        imageCaptions: ['Offline-capable triage trees, CPR metronome, and instant GPS SOS.'],
        disclaimer: 'Engineered as a hybrid mobile application and PWA using Capacitor and React 19.',
        images: ["/images/projects/resq-ai/hero.svg"],
        role: 'Hybrid App & PWA / AI Integration',
        tools: 'React 19, Capacitor, Groq API (Llama 3.1 & Vision 3.2), Leaflet / Google Maps, Firebase',
        concept: 'Multilingual emergency first-response system with zero-network first-aid guides, 100 BPM CPR metronome, and 2-second hold-to-SOS.',
        narrative: 'During sudden medical crises like cardiac arrest, bleeding, or choking, ambulance response times in urban and rural areas can leave patients without assistance for 25 to 60 minutes. ResQ-AI empowers untrained bystanders with immediate first-aid protocols that function even when mobile networks fail.',
        challenge: {
            title: 'Network Failures During Golden-Hour Emergencies',
            text: 'Cloud-dependent applications fail in basements, rural transit routes, and disaster scenarios where internet access is unavailable. Untrained bystanders often panic and lack confidence in administering critical first aid.'
        },
        solution: {
            title: 'Offline-First Triage & Multimodal Guidance',
            text: 'Engineered an offline-first architecture with 5 critical bundled emergency guides (cardiac, choking, burns, bleeding, unconsciousness), an audio-haptic 100 BPM CPR metronome, one-tap emergency calling tiles (112, 102), 2-second hold-to-SOS location dispatch, and Groq-powered vision injury triage across 12+ Indian languages.'
        },
        nextCase: {
            title: 'Unified Tribal Scholarship Portal',
            slug: 'unified-tribal-scholarship'
        }
    },

    {
        slug: 'unified-tribal-scholarship',
        thumbW: 1600,
        thumbH: 1200,
        title: 'Aakanksha: Unified Tribal Scholarship Portal',
        heroImage: '/images/projects/unified-tribal-scholarship/hero.svg',
        heroVideo: '',
        liveUrl: '',
        githubUrl: 'https://github.com/Sudhanshu-22-11/sih-unified-tribal-scholarship',
        imageCaptions: ['Single-window student dashboard and cross-system verification layer.'],
        disclaimer: 'Prototype engineered for the Smart India Hackathon 2026 initiative for the Ministry of Tribal Affairs (MoTA).',
        images: ["/images/projects/unified-tribal-scholarship/hero.svg"],
        role: 'SIH 2026 Prototype / Full Stack',
        tools: 'TypeScript, React, Node.js, Express, Tailwind CSS, REST APIs, JWT',
        concept: 'Single-window orchestration prototype unifying 5 national scholarship schemes under the Ministry of Tribal Affairs (MoTA).',
        narrative: 'Aakanksha was conceived for Smart India Hackathon 2026 to resolve the fragmentation experienced by tribal students navigating multiple disparate government portals across educational milestones (Pre-Matric, Post-Matric, Top Class, NFST Fellowships, and National Overseas Scholarships).',
        challenge: {
            title: 'Fragmented Portals & Disconnected DBT Pipelines',
            text: 'Tribal students were burdened with repetitive registration cycles, redundant certificate uploads, confusing eligibility rules, and opaque delays in Direct Benefit Transfer (DBT) disbursements.'
        },
        solution: {
            title: 'Unified Student Profile & Orchestration Layer',
            text: 'Created an accessible Indian public-service design system featuring a unified student profile, dynamic cross-system eligibility calculators, double-benefit conflict prevention, and simulated government adapter microservices for DBT verification tracking.'
        },
        nextCase: {
            title: 'FoodWise: Circular Food Waste Management',
            slug: 'foodwise'
        }
    }
];
