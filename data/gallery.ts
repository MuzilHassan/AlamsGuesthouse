import type { ImageItem } from "./types";

export interface GalleryImage extends ImageItem {
  id: string;
  category?: "exterior" | "room" | "hall" | "amenity" | "surroundings";
  aspect?: "square" | "portrait" | "landscape";
}

export const galleryImages: GalleryImage[] = [
  { id: "gallery-1", src: "/images/gallery/guests-outside-entrance.jpeg", alt: "Guests posing outside the guest house entrance", category: "exterior", aspect: "landscape" },
  { id: "gallery-2", src: "/images/gallery/traditional-meal-guests.jpeg", alt: "Guests sharing a traditional meal together", category: "amenity", aspect: "portrait" },
  { id: "gallery-3", src: "/images/gallery/balcony-mountain-views.jpeg", alt: "Balcony corridor with mountain views", category: "amenity", aspect: "portrait" },
  { id: "gallery-4", src: "/images/gallery/guests-gathered-outside.jpeg", alt: "Guests gathered outside the guest house", category: "exterior", aspect: "landscape" },
  { id: "gallery-5", src: "/images/gallery/garden-mulberries.jpeg", alt: "Fresh mulberries picked from the garden", category: "surroundings", aspect: "portrait" },
  { id: "gallery-6", src: "/images/gallery/guests-on-porch.jpeg", alt: "Group of guests on the porch", category: "exterior", aspect: "landscape" },
  { id: "gallery-7", src: "/images/gallery/conference-hall-gathering.jpeg", alt: "Conference hall set up for a gathering", category: "hall", aspect: "landscape" },
  { id: "gallery-8", src: "/images/gallery/valley-orchard-view.jpeg", alt: "View of the valley and orchard from the property", category: "surroundings", aspect: "landscape" },
  { id: "gallery-9", src: "/images/gallery/bonfire-bbq-night.jpeg", alt: "Bonfire and BBQ night for guests", category: "amenity", aspect: "landscape" },
  { id: "gallery-10", src: "/images/gallery/dinner.jpeg", alt: "Traditional dinner spread for guests", category: "amenity", aspect: "landscape" },
];
