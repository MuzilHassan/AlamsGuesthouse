# Real Photos — Swap-In Guide

The site currently uses placeholder images from [Lorem Picsum](https://picsum.photos)
(seeded URLs, referenced directly in `/data/*.ts`). When real photography is
ready, follow these steps:

## 1. Drop files into the matching folder

- `public/images/hero/` — property exterior shots for the homepage carousel
- `public/images/rooms/` — one or more photos per room type
- `public/images/halls/` — one or more photos per hall/event space
- `public/images/gallery/` — general property/common-area/surroundings photos

Name files after each item's `id` field so it's obvious which photo belongs
where, e.g.:

```
public/images/rooms/standard-room-1.jpg
public/images/rooms/standard-room-2.jpg
public/images/rooms/deluxe-room-1.jpg
public/images/halls/banquet-hall-1.jpg
```

## 2. Update the `src` field in `/data`

In `data/rooms.ts`, `data/halls.ts`, `data/hero.ts`, and `data/gallery.ts`,
change each `src` from a remote picsum/unsplash URL to the local path, e.g.:

```ts
// before
{ src: "https://picsum.photos/seed/alam-room-deluxe-1/900/700", alt: "..." }

// after
{ src: "/images/rooms/deluxe-room-1.jpg", alt: "..." }
```

No component changes are needed — every component reads `src`/`alt` from
these typed arrays.

## 3. (Optional) Remove remote image config

Once nothing references `picsum.photos` or `images.unsplash.com` anymore,
you can remove those entries from `images.remotePatterns` in
`next.config.ts`.

## Curated real-photo alternative (before final photography arrives)

To make placeholders look more "on brand" in the meantime, swap specific
`src` values for curated Unsplash photos: search unsplash.com for terms like
"hotel room", "boutique hotel exterior", or "banquet hall wedding", open a
photo, and copy its `https://images.unsplash.com/photo-<id>` address. That
hostname is already allowed in `next.config.ts`.
