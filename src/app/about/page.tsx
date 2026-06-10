"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
                            <div className="w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 rounded-lg">
                                <img
                                    src="/images/profile-placeholder.svg"
                                    alt="Your Name — 3D immersive web designer"
                                    width={1086}
                                    height={1448}
                                    className="hero-image w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-7 fade-up-section">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-40">(Profile)</span>
                            <p className="font-sans mt-6 text-xl sm:text-2xl lg:text-3xl font-light leading-snug text-slate-800 tracking-tight">
                                Your Name is a multidisciplinary designer specializing in Web3D experiences,
                                immersive landing pages, and brand identity design. Replace this paragraph with
                                a short introduction about yourself and what you do.
                            </p>
                            <p className="font-sans mt-6 text-base md:text-lg leading-relaxed text-slate-600">
                                This is placeholder bio text. Use this space to describe your background, the
                                tools you work with, and the kinds of clients or projects you focus on. Two to
                                four sentences keeps this section balanced with the profile image beside it.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Experience & Skills List */}
                <section className="py-20">
                    <div className="fade-up-section group border-t border-slate-900 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-slate-900 hover:text-white transition-colors duration-300 px-4 -mx-4 cursor-default">
                        <div className="md:col-span-4">
                            <span className="text-sm font-bold tracking-widest">(01) EXPERIENCE</span>
                        </div>
                        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold uppercase text-xs mb-4 opacity-60">Currently</h4>
                                <p className="font-sans text-xl">
                                    Your Current Role
                                    <br />
                                    <span className="text-base opacity-70">Company or platform name</span>
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold uppercase text-xs mb-4 opacity-60">Focus Areas</h4>
                                <p className="font-sans text-xl">
                                    Web3D & Immersive Experiences
                                    <br />
                                    <span className="text-base opacity-70">Your specialties here</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="fade-up-section group border-t border-slate-900 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-slate-900 hover:text-white transition-colors duration-300 px-4 -mx-4 cursor-default">
                        <div className="md:col-span-4">
                            <span className="text-sm font-bold tracking-widest">(02) TOOLS</span>
                        </div>
                        <div className="md:col-span-8 flex flex-wrap gap-x-12 gap-y-4">
                            <p className="font-sans text-xl">Tool One</p>
                            <p className="font-sans text-xl">Tool Two</p>
                            <p className="font-sans text-xl">Tool Three</p>
                            <p className="font-sans text-xl">Tool Four</p>
                            <p className="font-sans text-xl">Tool Five</p>
                            <p className="font-sans text-xl">Tool Six</p>
                        </div>
                    </div>

                    <div className="fade-up-section group border-t border-b border-slate-900 py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-slate-900 hover:text-white transition-colors duration-300 px-4 -mx-4 cursor-default">
                        <div className="md:col-span-4">
                            <span className="text-sm font-bold tracking-widest">(03) SERVICES</span>
                        </div>
                        <div className="md:col-span-8 flex flex-wrap gap-x-12 gap-y-4">
                            <p className="font-sans text-xl">Brand Identity Design</p>
                            <p className="font-sans text-xl">Immersive Landing Pages</p>
                            <p className="font-sans text-xl">Custom Business Websites</p>
                            <p className="font-sans text-xl">3D Web Experiences</p>
                            <p className="font-sans text-xl">UI/UX Design</p>
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <section className="fade-up-section py-32 flex flex-col items-center text-center">
                    <span className="material-symbols-outlined text-primary mb-8 text-5xl">format_quote</span>
                    <blockquote className="text-3xl md:text-5xl font-display font-medium tracking-tight leading-[1.2] max-w-4xl italic">
                        &quot;This is a placeholder testimonial. Replace it with a real quote from a client
                        or collaborator about working with you.&quot;
                    </blockquote>
                    <cite className="mt-12 not-italic">
                        <span className="block font-bold text-lg text-slate-900">Client Name</span>
                        <span className="block text-xs uppercase tracking-widest opacity-60">
                            Role, Company
                        </span>
                    </cite>
                </section>
            </div>
        </main>
    );
}
