# Alam Guest House — Marketing Site

A single-page promotional site for Alam Guest House, built with Next.js (App
Router, TypeScript), Tailwind CSS, and Framer Motion. There is no booking
backend yet — every Book/Enquire CTA opens WhatsApp with a pre-filled
message.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in real values:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Digits only, country code + number (e.g. `919876543210`). Used to build every `wa.me` link via `lib/whatsapp.ts`. |
| `NEXT_PUBLIC_SITE_URL` | Public URL used for absolute Open Graph / metadata links. |

`NEXT_PUBLIC_*` variables are inlined at **build time** — set them in Vercel
Project Settings → Environment Variables before the first deploy.

## Content & Photos

All rooms, halls, services, hero images, and gallery images live in typed
arrays under `/data` (`rooms.ts`, `halls.ts`, `services.ts`, `hero.ts`,
`gallery.ts`), plus general business info in `data/siteConfig.ts`. Update
these files to change copy, add/remove rooms or halls, or adjust amenities —
no component code needs to change.

Photos are currently placeholder images from Lorem Picsum. See
[`public/images/README.md`](public/images/README.md) for how to swap in real
photography.

## Architecture Notes (for future growth)

- **Data layer** (`/data`): typed arrays today; swap for a CMS fetch or API
  call later by changing only the exported value in each file (e.g. turn
  `export const rooms = [...]` into `export async function getRooms() {...}`)
  — components already consume these as data, not hardcoded JSX.
- **WhatsApp integration** (`lib/whatsapp.ts`): all `wa.me` link building goes
  through `buildWhatsAppLink()` and `whatsappMessages`. If this ever needs to
  move server-side (e.g. to hide the number or add booking logic), only this
  file changes.
- **Components** (`/components`): small, single-purpose, and read from
  `/data` — no per-room/per-hall/per-service JSX duplication.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project into [Vercel](https://vercel.com/new).
3. Add `NEXT_PUBLIC_WHATSAPP_NUMBER` and `NEXT_PUBLIC_SITE_URL` under
   Project Settings → Environment Variables.
4. Deploy.
