<div align="center">

# Farooq Studio

**Bilingual marketing & portfolio site — English / Arabic, scroll-driven motion, and a polished contact experience.**

[![Live App](https://img.shields.io/badge/Live_App-Deploy_to_update-facc15?style=for-the-badge&logo=vercel&logoColor=000)](#deployment)

*After you deploy, change the badge link to your production URL.*

</div>

---

## Overview

**Farooq Studio** is a creative marketing showcase built as a single Next.js application. It presents services, work, testimonials, and contact flows with smooth scroll storytelling, optional hero video scrubbing, and full RTL support for Arabic.

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, GSAP 3.

---

## Screenshots

<div align="center">

<!-- Add images under public/readme/ and uncomment, e.g.:
<img src="public/readme/hero.png" alt="Farooq Studio — Hero" width="800" />
<br/><br/>
<img src="public/readme/contact.png" alt="Farooq Studio — Contact" width="800" />
-->

*Add PNG or WebP screenshots to `public/readme/` and reference them here.*

</div>

---

## Features

- **Bilingual UI** — English and Arabic with RTL layout, shared copy in `app/i18n/translations.ts`

- **Intro & loading** — Branded loading sequence tied to hero media readiness

- **Hero** — Video-backed hero with scroll-scrubbed canvas frame and animated typography

- **Sections** — Services, work grid, about, showcase carousel, testimonials, contact, and footer with video backgrounds where used

- **Contact** — Modal contact flow with form UX aligned to the rest of the site

- **Motion** — GSAP + scroll-triggered section entrances; responsive breakpoints via `useIsMobile`

---

## Prerequisites

- **Node.js 20+** and npm — [nodejs.org](https://nodejs.org/)

---

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Other scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start dev server (Turbopack / Next dev) |
| `npm run build` | Production build        |
| `npm run start` | Serve production build   |
| `npm run lint`  | ESLint                   |

---

## Configuration notes

- **Site title & SEO** — Edit `title` and `description` in `app/layout.tsx` (`metadata`).
- **Copy & language** — Strings live in `app/i18n/translations.ts` (both `en` and `ar`).
- **Fonts** — Google fonts are wired in `app/layout.tsx` (e.g. Geist, Cormorant, Cairo for Arabic).
- **Tailwind v4** — Global styles use `@import "tailwindcss"` in `app/globals.css` (no `tailwind.config.js` in this setup).

No backend or database is required for local development.

---

## Project structure

```
├── app/
│   ├── components/       # Page sections (Hero, Services, Work, About, …)
│   ├── context/          # Loading + language providers
│   ├── hooks/            # e.g. useIsMobile
│   ├── i18n/
│   │   └── translations.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/               # Static assets, video backgrounds, images
├── package.json
└── README.md
```

---

## Deployment

- **Vercel (recommended)** — Import the repo, use the default Next.js preset, and deploy. Set the production URL in your README badge when live.

- **Other hosts** — Run `npm run build` and `npm run start`, or use a Node adapter compatible with Next.js 16.

---

## License

This project is provided as-is for learning and portfolio use.

---

<div align="center">

**Developed by [Asjad Farooq](https://www.linkedin.com/in/asjadfarooqconnect)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Asjad_Farooq-0a66c2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/asjadfarooqconnect)
[![GitHub](https://img.shields.io/badge/GitHub-Asjadfaroq-24292e?style=flat-square&logo=github)](https://github.com/Asjadfaroq)

</div>
