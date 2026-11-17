# brian-cabrera.com

Personal presentation site for Brian Cabrera — a single-page, editorial piece
built around two projects (BioLink case study, TraceVault) rather than a traditional portfolio.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3
- Google Fonts via `next/font` (Inter, Instrument Serif, JetBrains Mono)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — create a production build
- `npm run start` — run the production build
- `npm run lint` — run Next.js lint

## Project layout

```
app/
  layout.tsx     # fonts, metadata, <html>/<body>
  page.tsx       # the entire single-page site (Hero → Footer)
  globals.css    # minimal global styles + Tailwind entry
tailwind.config.ts
next.config.mjs
```

The page is intentionally kept in a single file with small local
components so the structure stays obvious and easy to refine.

## Deploy

Ready to deploy on [Vercel](https://vercel.com). No environment variables
required.

## Editing content

All copy lives in `app/page.tsx`. External links (LinkedIn, GitHub) are
declared as constants at the top of that file.
