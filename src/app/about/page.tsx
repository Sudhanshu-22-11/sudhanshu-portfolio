"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CreativeButton from "@/components/CreativeButton";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
    const container = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            window.scrollTo(0, 0);
            ScrollTrigger.refresh();

            const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

            tl.to(".story-title", {
                y: 0,
                opacity: 1,
            }).from(
                ".hero-image",
                {
                    scale: 1.2,
                    opacity: 0,
                    duration: 2,
                },
                "-=1"
            );

            const sections = gsap.utils.toArray<HTMLElement>(".fade-up-section");
            sections.forEach((section) => {
                gsap.from(section, {
                    y: 50,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom-=10%",
                    },
                });
            });
        },
        { scope: container, revertOnUpdate: true }
    );

    return (
        <main ref={container} className="pt-32 pb-0">
            <div className="px-6 md:px-12 lg:px-24">
                {/* Hero Section */}
                <section className="mb-24 md:mb-32 overflow-hidden">
                    <div className="overflow-hidden mb-10 md:mb-14">
                        <h1 className="text-[14vw] md:text-[12vw] lg:text-[10vw] font-display font-medium leading-[0.85] tracking-tighter uppercase translate-y-20 opacity-0 story-title">
                            Story
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <div className="lg:col-span-5">
                            <div className="w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto aspect-[3/4] overflow-hidden transition-all duration-700 rounded-2xl shadow-2xl border border-black/10 group">
                                <img
                                    src="/images/profile-avatar.jpg"
                                    alt="Sudhanshu Kumar Pandey — 3D Avatar Character"
                                    width={1086}
                                    height={1448}
                                    className="hero-image w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-7 fade-up-section">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-40">(Profile)</span>
                            <p className="font-sans mt-6 text-xl sm:text-2xl lg:text-3xl font-light leading-snug text-slate-800 tracking-tight">
                                Sudhanshu Kumar Pandey is a second-year B.E. Data Science student at PES Institute of Technology &amp; Management, Shivamogga, passionate about Python development, web applications, and practical AI.
                            </p>
                            <p className="font-sans mt-6 text-base md:text-lg leading-relaxed text-slate-600">
                                I enjoy learning new technologies, building practical projects, and applying technical knowledge to solve real-world problems. Whether architecting circular food-waste telemetry, offline-first emergency systems, or public scholarship gateways, I believe in grounded, accessible software engineering.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <CreativeButton href="/contact" tone="dark" className="px-7 py-3.5">
                                    Get in Touch
                                </CreativeButton>
                                <a
                                    href="https://github.com/Sudhanshu-22-11"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-black/30 text-xs font-bold uppercase tracking-widest hover:border-black hover:bg-black/5 transition-colors"
                                >
                                    GitHub Profile ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience & Skills List */}
                <section className="py-20">
                    {/* Education */}
                    <div className="fade-up-section group border-t border-slate-900 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-slate-900 hover:text-white transition-colors duration-300 px-4 -mx-4 cursor-default">
                        <div className="md:col-span-4">
                            <span className="text-sm font-bold tracking-widest">(01) EDUCATION</span>
                        </div>
                        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold uppercase text-xs mb-3 opacity-60">Institution</h4>
                                <p className="font-sans text-xl font-medium">
                                    PESITM Shivamogga
                                    <br />
                                    <span className="text-sm opacity-70">PES Institute of Technology &amp; Management</span>
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold uppercase text-xs mb-3 opacity-60">Program &amp; Status</h4>
                                <p className="font-sans text-xl font-medium">
                                    B.E. in Data Science
                                    <br />
                                    <span className="text-sm opacity-70">2nd Year Undergrad • Shivamogga, Karnataka</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Skills */}
                    <div className="fade-up-section group border-t border-slate-900 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-slate-900 hover:text-white transition-colors duration-300 px-4 -mx-4 cursor-default">
                        <div className="md:col-span-4">
                            <span className="text-sm font-bold tracking-widest">(02) TECHNICAL SKILLS</span>
                        </div>
                        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold uppercase text-xs mb-3 opacity-60">Languages &amp; Web</h4>
                                <div className="space-y-2">
                                    <p className="font-sans text-lg font-medium">Python • C • Basic JavaScript</p>
                                    <p className="font-sans text-sm opacity-70">HTML5 &amp; CSS3 • React (Learning &amp; Familiar)</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold uppercase text-xs mb-3 opacity-60">Data Science &amp; Interests</h4>
                                <div className="space-y-2">
                                    <p className="font-sans text-lg font-medium">Pandas • NumPy • Matplotlib</p>
                                    <p className="font-sans text-sm opacity-70">Data Analysis • Data Visualization • Machine Learning Fundamentals • AI Tools &amp; APIs</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="fade-up-section group border-t border-slate-900 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-slate-900 hover:text-white transition-colors duration-300 px-4 -mx-4 cursor-default">
                        <div className="md:col-span-4">
                            <span className="text-sm font-bold tracking-widest">(03) ACHIEVEMENTS</span>
                        </div>
                        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold uppercase text-xs mb-2 text-primary group-hover:text-amber-400">Award</h4>
                                <h3 className="font-sans text-xl font-bold">Best Pitching Award</h3>
                                <p className="font-sans text-sm opacity-70 mt-1">Team Anvay — Recognized for effective project pitching and conceptual clarity.</p>
                            </div>
                            <div>
                                <h4 className="font-bold uppercase text-xs mb-2 opacity-60">Hackathon</h4>
                                <h3 className="font-sans text-xl font-bold">Hack Fest 1.0</h3>
                                <p className="font-sans text-sm opacity-70 mt-1">Certificate of Participation — Collaborative coding and rapid problem-solving event.</p>
                            </div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="fade-up-section group border-t border-slate-900 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-slate-900 hover:text-white transition-colors duration-300 px-4 -mx-4 cursor-default">
                        <div className="md:col-span-4">
                            <span className="text-sm font-bold tracking-widest">(04) CERTIFICATION</span>
                        </div>
                        <div className="md:col-span-8">
                            <h4 className="font-bold uppercase text-xs mb-2 text-primary group-hover:text-amber-400">Credential</h4>
                            <h3 className="font-sans text-xl font-bold">AI Fluency for Students — Certificate of Completion</h3>
                            <p className="font-sans text-sm opacity-70 mt-2 max-w-2xl leading-relaxed">
                                Issued by Anthropic. Associated credential in collaboration with University College Cork (UCC), Ringling College of Art and Design, Higher Education Authority (HEA), and National Forum. Demonstrates verified understanding of foundational AI concepts and ethical fluency.
                            </p>
                        </div>
                    </div>

                    {/* Opportunities & Goals */}
                    <div className="fade-up-section group border-t border-b border-slate-900 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-slate-900 hover:text-white transition-colors duration-300 px-4 -mx-4 cursor-default">
                        <div className="md:col-span-4">
                            <span className="text-sm font-bold tracking-widest">(05) COLLABORATION &amp; GOALS</span>
                        </div>
                        <div className="md:col-span-8 flex flex-wrap gap-x-12 gap-y-4">
                            <p className="font-sans text-lg font-medium">Internship Opportunities</p>
                            <p className="font-sans text-lg font-medium">Data Science &amp; Analysis</p>
                            <p className="font-sans text-lg font-medium">Collaborative Hackathon Projects</p>
                            <p className="font-sans text-lg font-medium">Freelance Web Development</p>
                            <p className="font-sans text-lg font-medium">AI &amp; Machine Learning Exploration</p>
                        </div>
                    </div>
                </section>

                {/* Perspective Section */}
                <section className="fade-up-section py-32 flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-primary mb-8 text-5xl">format_quote</span>
                    <blockquote className="text-2xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight leading-[1.25] max-w-4xl italic">
                        &quot;The goal is not just to analyze data or write code in isolation, but to engineer reliable solutions that make an immediate, tangible impact on everyday challenges.&quot;
                    </blockquote>
                    <cite className="mt-10 not-italic">
                        <span className="block font-bold text-lg text-slate-900">Sudhanshu Kumar Pandey</span>
                        <span className="block text-xs uppercase tracking-widest opacity-60">
                            2nd-Year B.E. Data Science Student • PESITM Shivamogga
                        </span>
                    </cite>
                </section>
            </div>
        </main>
    );
}
