import type { ImageItem } from "./types";

export interface GalleryImage extends ImageItem {
  id: string;
  category?: "exterior" | "room" | "hall" | "amenity" | "surroundings";
  aspect?: "square" | "portrait" | "landscape";
}

export const galleryImages: GalleryImage[] = [
  { id: "gallery-1", src: "https://picsum.photos/seed/alam-gallery-1/900/1100", alt: "Guest house exterior facade", category: "exterior", aspect: "portrait" },
  { id: "gallery-2", src: "https://picsum.photos/seed/alam-gallery-2/900/700", alt: "Lobby and reception area", category: "amenity", aspect: "landscape" },
  { id: "gallery-3", src: "https://picsum.photos/seed/alam-gallery-3/900/900", alt: "Rooftop seating area", category: "amenity", aspect: "square" },
  { id: "gallery-4", src: "https://picsum.photos/seed/alam-gallery-4/900/1100", alt: "Garden pathway", category: "surroundings", aspect: "portrait" },
  { id: "gallery-5", src: "https://picsum.photos/seed/alam-gallery-5/900/700", alt: "Dining area", category: "amenity", aspect: "landscape" },
  { id: "gallery-6", src: "https://picsum.photos/seed/alam-gallery-6/900/900", alt: "Common lounge", category: "amenity", aspect: "square" },
  { id: "gallery-7", src: "https://picsum.photos/seed/alam-gallery-7/900/1100", alt: "View of the Chitral mountains from the terrace", category: "surroundings", aspect: "portrait" },
  { id: "gallery-8", src: "https://picsum.photos/seed/alam-gallery-8/900/700", alt: "Guest house at night", category: "exterior", aspect: "landscape" },
  { id: "gallery-9", src: "https://picsum.photos/seed/alam-gallery-9/900/900", alt: "Corridor and staircase", category: "amenity", aspect: "square" },
  { id: "gallery-10", src: "https://picsum.photos/seed/alam-gallery-10/900/1100", alt: "Qaqlasht Meadows near Booni", category: "surroundings", aspect: "portrait" },
];
