# How This 3D Portfolio Was Built — Full Workflow

A step-by-step record of how this site was made from scratch, so you can rebuild it, customize it, or explain the process to someone else. Follow the phases in order — each one leaves you with something working.

---

## Phase 0 — Decisions Before Code

| Decision | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router) | File-based routing, built-in SEO metadata API, zero-config Vercel deploys |
| 3D engine | Three.js via React Three Fiber (R3F) | Declarative 3D inside React components; drei gives loaders/helpers for free |
| Animation | GSAP + ScrollTrigger | Industry standard for scroll choreography and staggered reveals |
| Styling | Tailwind CSS | Fast iteration, design tokens via CSS variables |
| Content | Plain data files (`projects.js`, `articles.ts`) | No CMS to maintain; adding a project = editing one file |
| Hosting | Vercel | Push-to-deploy, edge CDN, free tier |

**Design direction first.** Before building, lock three things: a typographic pair (a display serif for headlines + a clean sans for body), a warm/neutral palette, and the one signature moment — here, a dreamlike 3D ruins scene behind the hero name. Every other page stays editorial and quiet so the 3D moment lands harder.

## Phase 1 — Project Scaffold

```bash
npx create-next-app@latest my-portfolio --typescript --tailwind --eslint --app
cd my-portfolio
npm install three @react-three/fiber @react-three/drei @types/three gsap @gsap/react clsx tailwind-merge lucide-react
```

Set up the design system:
- Load fonts with `next/font` in `src/app/layout.tsx` (here: Noto Serif Display italic for headlines, Montserrat for body) and expose them as CSS variables.
- Define palette tokens in `globals.css` (background, ink, primary accent).
- Build the global shell in `layout.tsx`: Navigation, Footer, Loader, CustomCursor, MusicPlayer wrap every page.

## Phase 2 — Pages and Content Model

Six routes, all under `src/app/`: home, `/work`, `/about`, `/services`, `/journal`, `/contact`, plus dynamic routes `/work/[slug]` and `/journal/[slug]`.

The key idea: **pages are templates, content lives in data files.**
- `src/data/projects.js` — every case study is one object (title, slug, images, role, tools, concept → narrative → challenge → solution, next-case link). The Work grid, home featured section, case-study pages, and sitemap all render from this single array.
- `src/data/articles.ts` — articles are arrays of typed sections (paragraph / heading / image / quote / list) so the article page can render any structure with consistent typography.

This is what makes the site easy to hand to someone else: personalizing it means editing two data files and swapping images — never touching components.

## Phase 3 — The 3D Hero Scene

`src/components/HeroScene.tsx` — the signature piece. Loaded with `next/dynamic` and `ssr: false` so Three.js never runs on the server.

**Asset pipeline:**
1. Source or sculpt GLB models (here: a marble pillar, rocks, an animated cat). Keep each model small — compress in Blender with DRACO/meshopt before export.
2. One 2K equirectangular EXR HDRI for the sky (`public/hdri/`), used as scene *background* only — lighting comes from tuned directional/ambient lights so you control the mood.
3. `useGLTF.preload()` for every model so loading starts immediately.

**Scene composition (each its own component):**
- `PillarField` — one GLB instanced many times with seeded-random positions, scale and a faint tilt, so the ruins look hand-placed but are deterministic on every load.
- `Grass` — thousands of instanced blades with a wind sway in `useFrame`, parting around the cursor via a pointer uniform.
- `Cat` — GLB with baked animation clips, played via drei's `useAnimations`.
- `Rocks` — scattered instances with random scale.
- `SkyHDRI` + `WarmGlow` — EXR background plus a soft additive glow sprite.
- `Sparkles`, `Smoke`, `SkyClouds` — custom point/sprite systems drifting in `useFrame`.
- `CameraRig` — eases the camera a few degrees toward the cursor for parallax.
- `SmokeWipe` — a 2D canvas overlay that wipes the scene out on scroll.

**Performance rules baked in:** seeded randomness (no hydration mismatch), instancing for anything repeated, mobile gets reduced counts, `prefers-reduced-motion` is respected, and the whole canvas pauses when scrolled out of view.

## Phase 4 — Motion and Polish

- **GSAP pattern:** every page uses `useGSAP` with a `scope` ref — headline lines slide up from an `overflow-hidden` mask, then content fades in staggered. Scroll reveals use `ScrollTrigger` with `start: "top bottom-=10%"`.
- **Loader** (`Loader.tsx`): not fake — it reads real asset progress from drei's `useProgress` and only reveals the page when the EXR + GLBs are actually ready (with a 12s hard cap). Repeat visits get a short branded flash.
- **CustomCursor**: a dot that scales up over `data-cursor="large"` elements.
- **MusicPlayer**: floating toggle, hides while the menu is open via a custom event.
- **SmartImage**: shimmer skeleton + lazy load + fade-in, reserves aspect ratio to avoid layout shift.
- **Navigation**: full-screen clip-path wipe menu with staggered italic links.

## Phase 5 — SEO and Discoverability

- `layout.tsx` metadata: title template, Open Graph, Twitter cards, keywords.
- JSON-LD structured data: `Person` + `WebSite` site-wide, `CreativeWork` per project, `BlogPosting` per article.
- `sitemap.ts` and `robots.ts` generate from the same data files (robots explicitly welcomes AI crawlers).
- `public/llms.txt` — a plain-text site summary for AI assistants.

## Phase 6 — Contact

Two options wired in: the client-side form posts to formsubmit.co (zero setup — just change the email), and `src/app/api/contact/route.ts` is a Web3Forms server route (set `WEB3FORMS_KEY` env var) if you prefer hiding the address.

## Phase 7 — Ship

```bash
git init && git add -A && git commit -m "Initial commit"
# push to GitHub, then import the repo at vercel.com/new — no config needed
```

After deploy: connect a custom domain in Vercel, update the `siteUrl` constants, and check Lighthouse — target 90+ with the 3D scene live.

---

## The Workflow in One Sentence Per Phase

1. Lock the stack and the design direction.
2. Scaffold Next.js, fonts, palette, global shell.
3. Build pages as templates over two data files.
4. Compose the 3D hero from small instanced components over compressed GLBs + one HDRI.
5. Choreograph entrances with GSAP and tie the loader to real asset progress.
6. Generate all SEO surfaces from the same data.
7. Wire the contact form, push to GitHub, deploy on Vercel.
