# How to Build This 3D Website with Claude — From Zero Context

This guide explains how this entire site — including the interactive 3D hero scene — was actually made, so you can recreate it (or build your own version) even if you've never seen this project before. The method: **you bring a design and a few downloaded 3D assets; Claude writes all the code.** No Three.js knowledge required.

---

## What You Need

| Thing | Where to get it | Notes |
|---|---|---|
| **Claude Max (or Pro) plan** | claude.com | Gives you access to **Claude Code**, the terminal/desktop coding agent that does all the building. Max gives you the usage headroom this kind of iterative work needs. |
| **Claude Code** | `npm install -g @anthropic-ai/claude-code`, or the desktop app | You'll talk to it in plain English inside your project folder. |
| **Node.js 18+** | nodejs.org | To run the site locally. |
| **A Figma design** | Your own | Any design you like. It's your visual reference for everything *except* the 3D scene — typography, layout, colors, pages. |
| **GLB models** | [Sketchfab](https://sketchfab.com) (filter: Downloadable) | This site uses: one **animated cat**, one **pillar**, one **rock**. GLB is the key format choice — **textures and animations are baked into the single file**, so you just hand Claude the file and it works. Check each model's license (CC-BY needs author credit). |
| **A sky EXR** | [Poly Haven](https://polyhaven.com/hdris) (free, CC0) | One equirectangular HDRI (2K is enough) — this becomes the entire sky. |

---

## The Workflow

### Step 1 — Start from the design, not the code

Make (or pick) a Figma design for the site. You don't need to design the 3D scene in Figma — just leave a hero section where it will live, and design the normal pages (work, about, contact...) however you like.

### Step 2 — Scaffold the project

Open a terminal in an empty folder, run `claude`, and ask:

> Create a Next.js app (App Router, TypeScript, Tailwind) for my portfolio website. Install React Three Fiber, drei, three, and GSAP. Set up a homepage with an empty full-screen hero section and placeholder sections below it.

(Or skip this step entirely: clone this repo — it's the finished result of this exact workflow — and customize it.)

### Step 3 — Gather assets and drop them in

1. Download your GLB models from Sketchfab (cat/pillar/rock or whatever fits your concept) → put them in `public/models/`.
2. Download a sky EXR from Poly Haven → put it in `public/hdri/`.

That's all the "3D work" you do by hand. No Blender required (only optional, for compressing large models).

### Step 4 — The big scene prompt

This is the heart of the workflow. Don't try to art-direct every object position yourself — **give Claude the assets and the vibe, and let it decide placement, scale, and composition.** This is close to the prompt that produced this site's hero:

> In my hero section, set up a 3D scene with React Three Fiber. I have these assets:
> - `public/models/pillar.glb` — a stone pillar
> - `public/models/cat.glb` — a cat with a baked-in animation, play it
> - `public/models/rock.glb` — a rock
> - `public/hdri/sky.exr` — use this EXR as the sky
>
> Create a dreamlike field of scattered ancient pillars — you decide the positions, rotations and scale variation so it looks natural. Scatter some rocks on the ground. Place the animated cat somewhere visible. Add a dense field of grass that **reacts to my mouse — blades should part/bend around the cursor** — plus floating glowing particles in the air. Set up the lighting yourself to match the warm mood of the sky. Add a subtle camera parallax that follows the mouse. My name will be HTML text overlaid on top, so keep the center middle reasonably calm.

Key things this prompt does:
- **Lists exact file paths** so Claude wires the loaders correctly on the first try.
- **Delegates placement and lighting** ("you decide", "set up the lighting yourself") — Claude is good at this, and it's much faster than dictating coordinates.
- **Names the interactions you want** (grass reacting to mouse hover, particles, parallax) instead of how to implement them.
- **Describes the mood** ("dreamlike", "warm") — that's what steers the lighting and color choices.

### Step 5 — Iterate by art direction (trial and error is the method)

The first render won't be final, and that's fine — this site went through many rounds. Run `npm run dev`, look at localhost, and keep giving Claude short, *single-purpose* feedback prompts:

> Increase the grass density a lot — the field looks sparse.

> More particles, smaller, and slower drift. Some should sparkle.

> The pillars are too uniform — vary the heights and give them a slight ruined lean.

> The scene drops frames on my laptop — optimize it (instancing, fewer particles on mobile) without changing the look.

> Expose the main tuning values (grass count, particle count, sway strength, camera parallax amount) as constants at the top of the file so we can tweak quickly.

That last prompt is a force multiplier: once the knobs are constants, each iteration is seconds.

Two more iteration habits that worked well:
- **One change per prompt.** "Denser grass AND new lighting AND move the cat" makes it hard to judge what helped.
- **Say what's wrong visually, not what code to write.** "The sky feels washed out at the horizon" gets better results than guessing at tone-mapping settings.

### Step 6 — Build the rest of the site from your Figma design

For every normal page, screenshot the Figma frame and paste it straight into Claude Code:

> Build this page to match this design — same typography hierarchy, spacing, and layout. Use the fonts and colors we already set up. Add scroll-triggered entrance animations with GSAP.

Repeat per page. Ask for the connective tissue the same way: a loading screen tied to real 3D asset progress, a custom cursor, a full-screen menu, a music player toggle.

### Step 7 — Content as data, then ship

Ask Claude to move projects and articles into data files (`src/data/`) so the site is editable without touching components. Then:

> Init a git repo, push this to a new GitHub repo, and walk me through deploying it on Vercel.

Vercel deploys Next.js with zero config; connect a domain when ready.

---

## Why This Workflow Works

- **GLB carries everything.** Textures, materials, and animations live inside the one file — so "make the cat walk" is just `useAnimations` on a file you dragged in. No texture wiring, no separate animation files.
- **The EXR does the sky for free.** One downloaded file gives you a photographic sky; you only ask Claude to match the lighting to it.
- **Claude as scene composer.** Placement, scatter, lighting, shaders, instancing, performance — all delegated. Your job is taste: look at the result and say what feels off.
- **Tight feedback loop.** Hot reload + tunable constants + one-change prompts = dozens of iterations per hour.

## Quick Reference: the asset checklist

```
public/
├── models/      ← .glb files from Sketchfab (textures + animations baked in)
├── hdri/        ← one sky .exr from Poly Haven
└── music/       ← optional background track (check the license)
```

Credit model authors where the license requires it, and you're done.
