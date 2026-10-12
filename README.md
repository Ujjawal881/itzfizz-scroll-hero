# ITZFIZZ — Scroll-Driven Hero Animation

A responsive automotive-inspired landing page built with **Next.js, React, Tailwind CSS, GSAP and ScrollTrigger**. The intro reveals the headline and metrics in sequence. The hero scene pins during scroll, and the illustrated car, light trail, copy and background respond to scroll progress using GSAP's `scrub` timeline.

## Features

- Staggered headline and statistics intro animation
- Scroll-scrubbed car movement with pinning and a light trail
- Responsive layout for desktop, tablet and mobile
- Inline SVG car illustration (no image downloads or asset licensing required)
- Static export configured for GitHub Pages
- Respects reduced-motion preferences at the CSS level

## Run locally

Prerequisite: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build locally

```bash
npm run build
```

Next.js exports the static site into the `out/` directory.

## Publish to GitHub Pages

1. Create a new public GitHub repository named **`itzfizz-scroll-hero`**.
2. Unzip this project and open a terminal inside the `itzfizz-scroll-hero` folder.
3. Initialize Git and push the files:

   ```bash
   git init
   git add .
   git commit -m "Build scroll-driven ITZFIZZ hero"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/itzfizz-scroll-hero.git
   git push -u origin main
   ```

   Replace `YOUR_GITHUB_USERNAME` with your GitHub username.

4. In the repository, go to **Settings → Pages**.
5. Under **Build and deployment**, choose **GitHub Actions** as the source.
6. Open the **Actions** tab and wait for “Deploy Next.js site to GitHub Pages” to complete successfully.
7. Your site will be available at:

   `https://YOUR_GITHUB_USERNAME.github.io/itzfizz-scroll-hero/`

The GitHub Actions build sets the correct Next.js `basePath` for this repository automatically. If you rename the repository, update `repoName` in `next.config.ts` to match.

## Submit

- **Live webpage:** `https://YOUR_GITHUB_USERNAME.github.io/itzfizz-scroll-hero/`
- **GitHub repository:** `https://github.com/YOUR_GITHUB_USERNAME/itzfizz-scroll-hero`

Replace the username placeholders with your actual GitHub username after deployment.

## Implementation notes

- GSAP ScrollTrigger pins the first-screen hero and ties the car's transform to scroll progress via `scrub`.
- Motion uses transforms and opacity to minimize layout work during scroll.
- Metrics are demo values for the design. Replace them with verified figures if the assignment expects sourced statistics.
- Google Fonts are loaded from Google Fonts; system fallbacks are provided if the font service is unavailable.
