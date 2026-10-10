"use client";

import { useRef } from "react";
import CreativeButton from "@/components/CreativeButton";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Services() {
    const container = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            window.scrollTo(0, 0);
            ScrollTrigger.refresh();

            const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

            tl.to(".services-title", {
                y: 0,
                opacity: 1,
            });

            const triggers = gsap.utils.toArray<HTMLElement>(".service-item");
            triggers.forEach((item) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top bottom-=10%",
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                });
            });
        },
        { scope: container, revertOnUpdate: true }
    );

    return (
        <main ref={container} className="pt-32 pb-0">
            <div className="px-6 md:px-10 pb-20">
                <div className="overflow-hidden mb-20">
                    <h1 className="text-[14vw] md:text-[12vw] lg:text-[10vw] font-display font-medium leading-[0.85] tracking-tighter uppercase text-neutral-black opacity-0 translate-y-20 services-title">
                        Focus
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
                    <div className="space-y-12">
                        <div className="service-item border-t border-black pt-8">
                            <span className="text-xs font-bold uppercase tracking-widest opacity-40">
                                01/ Data Science &amp; Python
                            </span>
                            <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mt-4 mb-3">
                                Python Development &amp; Data Analysis
                            </h3>
                            <p className="font-sans text-lg mt-2 leading-relaxed text-slate-600">
                                End-to-end data exploration, data wrangling, and structured analysis using Python. Leveraging Pandas and NumPy for efficient computations and dataset transformations, paired with Matplotlib for publication-ready visual charts and statistical reporting.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-6">
                                <span className="text-[10px] uppercase tracking-widest bg-slate-100 px-3 py-1 font-bold">Python</span>
                                <span className="text-[10px] uppercase tracking-widest bg-slate-100 px-3 py-1 font-bold">Pandas</span>
                                <span className="text-[10px] uppercase tracking-widest bg-slate-100 px-3 py-1 font-bold">NumPy</span>
                                <span className="text-[10px] uppercase tracking-widest bg-slate-100 px-3 py-1 font-bold">Matplotlib</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-12">
                        <div className="service-item border-t border-black pt-8">
                            <span className="text-xs font-bold uppercase tracking-widest opacity-40">
                                02/ Web Development
                            </span>
                            <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mt-4 mb-3">
                                Modern Responsive Web Interfaces
                            </h3>
                            <p className="font-sans text-lg mt-2 leading-relaxed text-slate-600">
                                Clean, responsive, and accessible web experiences crafted with semantic HTML5, CSS3, JavaScript, and modern component libraries (React). Focused on clean architecture, intuitive UX, cross-browser consistency, and seamless user interaction.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-6">
                                <span className="text-[10px] uppercase tracking-widest bg-slate-100 px-3 py-1 font-bold">HTML5 &amp; CSS3</span>
                                <span className="text-[10px] uppercase tracking-widest bg-slate-100 px-3 py-1 font-bold">JavaScript</span>
                                <span className="text-[10px] uppercase tracking-widest bg-slate-100 px-3 py-1 font-bold">React (Familiar)</span>
                                <span className="text-[10px] uppercase tracking-widest bg-slate-100 px-3 py-1 font-bold">Tailwind CSS</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service-item border-t border-black pt-8 mb-32 max-w-3xl">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-40">
                        03/ Practical AI &amp; Hackathon Builds
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mt-4 mb-3">
                        AI Integration &amp; Rapid Prototyping
                    </h3>
                    <p className="text-lg mt-2 leading-relaxed text-slate-600">
                        Rapid turnaround prototyping for hackathons and practical utilities. Integrating multimodal LLM APIs (Groq, Gemini), engineering offline-first architectures for low-connectivity environments, and turning concepts into working software that addresses civic and community challenges.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        <span className="text-[10px] uppercase tracking-widest bg-slate-100 px-3 py-1 font-bold">Groq &amp; Gemini APIs</span>
                        <span className="text-[10px] uppercase tracking-widest bg-slate-100 px-3 py-1 font-bold">Capacitor PWA</span>
                        <span className="text-[10px] uppercase tracking-widest bg-slate-100 px-3 py-1 font-bold">RESTful APIs</span>
                        <span className="text-[10px] uppercase tracking-widest bg-slate-100 px-3 py-1 font-bold">Git / GitHub</span>
                    </div>
                </div>

                <div className="service-item border-t border-black pt-12 text-center">
                    <p className="text-lg text-slate-500 mb-6">Looking for a dedicated data science student or frontend collaborator?</p>
                    <CreativeButton href="/contact" tone="dark" className="px-10 py-5">
                        Get in Touch
                    </CreativeButton>
                </div>
            </div>
        </main>
    );
}
