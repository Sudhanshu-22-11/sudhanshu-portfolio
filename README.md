# Immersive 3D Portfolio Template

A designer portfolio website template built with **Next.js**, **React Three Fiber (Three.js)**, and **GSAP**. It ships with a real-time 3D hero scene (GLB models + HDRI lighting), scroll-triggered animations, a custom cursor, an asset-aware loading screen, a background music player, and data-driven Work and Journal sections.

All text and images are placeholders — search for "Your Name", "example.com", and "placeholder" to find everything you need to personalize.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Make It Yours

| What | Where |
|------|-------|
| Name, SEO metadata, social links | `src/app/layout.tsx` |
| Hero name + tagline | `src/app/page.tsx` |
| Projects (case studies) | `src/data/projects.js` + images in `public/images/projects/` |
| Journal articles | `src/data/articles.ts` + images in `public/journal/` |
| Bio, skills, testimonial | `src/app/about/page.tsx` |
| Contact email + form endpoint | `src/app/contact/page.tsx` and `src/app/api/contact/route.ts` |
| Footer / menu socials | `src/components/Footer.tsx`, `src/components/Navigation.tsx` |
| Loader brand text | `src/components/Loader.tsx` |
| Site URL for SEO | `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/layout.tsx`, `public/llms.txt` |
| 3D hero scene | `src/components/HeroScene.tsx` + assets in `public/models/` and `public/hdri/` |
| Background music | `public/music/track.m4a` |

## The 3D Scene

The hero scene (`src/components/HeroScene.tsx`) renders GLB models with an EXR sky environment via React Three Fiber. Swap the models in `public/models/` with your own GLB exports (compress them with DRACO/meshopt for fast loads) and adjust positions/lighting in the component.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — zero config needed for Next.js.
