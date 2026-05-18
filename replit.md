# Love & Hate — Andrew McClure Author Website

A premium cinematic author website for Andrew McClure's poetry book "Love & Hate" — a split-tone luxury experience where warm beige love and dark blood-red hate collide.

## Run & Operate

- `pnpm --filter @workspace/author-website run dev` — run the author website (port 25515)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: ReactJS + Vite + Tailwind CSS + Framer Motion
- Routing: wouter
- Smooth scroll: Lenis
- Icons: react-icons, lucide-react
- Fonts: Cormorant Garamond (headings), Inter (body), Cinzel (quotes)

## Where things live

- `artifacts/author-website/src/pages/` — all 5 pages (Home, Book, Reviews, Author, Contact)
- `artifacts/author-website/src/components/` — shared components (Navbar, Footer, GlowButton, FloatingParticles, SectionReveal, GrainOverlay)
- `artifacts/author-website/src/index.css` — theme palette (beige + dark blood red)
- `attached_assets/bok2_1779127987407.jpg` — book front cover (used throughout)
- `attached_assets/bok_1779127987406.jpg` — full book spread with author photo

## Color Palette

- Primary Beige: #EDE8D0
- Dark Blood Red: #6B000F
- Wine Red: #7A0018
- Dark Shadow Brown: #1E1515
- Muted Gold: #C9A227

## GitHub

https://github.com/sufyansiddiqdd/andrew-mcclure-author-website

## Contact Info (Andrew McClure)

- Website: www.Andrewpoetry.com
- Email: andrewmcclure23@yahoo.com
- Phone: 802-522-3245

## User preferences

- ReactJS + Vite for all web projects
- Cinematic, dark elegant aesthetic
- Balance beige warmth with dark red intensity
- Use uploaded book cover images throughout

## Gotchas

- Google Fonts `@import url(...)` must be the VERY first line in index.css — before `@import "tailwindcss"`
- Lenis is installed as a regular dependency in `artifacts/author-website`
- `@assets/` alias maps to `attached_assets/` in vite.config.ts
