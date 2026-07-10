import type { AmenityKey, ImageItem } from "./types";

export interface Room {
  id: string;
  name: string;
  shortDescription: string;
  amenities: AmenityKey[];
  images: ImageItem[];
  maxOccupancy?: number;
  priceHint?: string;
}

export const rooms: Room[] = [
  {
    id: "standard-room",
    name: "Standard Room",
    shortDescription:
      "Cozy and comfortable, perfect for solo travelers or couples exploring Chitral on a budget.",
    amenities: ["wifi", "ac", "tv", "housekeeping"],
    maxOccupancy: 2,
    priceHint: "From PKR 3,500/night",
    images: [
      { src: "https://picsum.photos/seed/alam-room-standard-1/900/700", alt: "Standard Room bed and window view" },
      { src: "https://picsum.photos/seed/alam-room-standard-2/900/700", alt: "Standard Room seating corner" },
      { src: "https://picsum.photos/seed/alam-room-standard-3/900/700", alt: "Standard Room attached bathroom" },
    ],
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    shortDescription:
      "Spacious rooms with premium furnishings, a work desk, and room service — ideal for business or leisure stays.",
    amenities: ["wifi", "ac", "tv", "roomService", "housekeeping", "frontDesk24"],
    maxOccupancy: 3,
    priceHint: "From PKR 6,000/night",
    images: [
      { src: "https://picsum.photos/seed/alam-room-deluxe-1/900/700", alt: "Deluxe Room king bed" },
      { src: "https://picsum.photos/seed/alam-room-deluxe-2/900/700", alt: "Deluxe Room work desk area" },
      { src: "https://picsum.photos/seed/alam-room-deluxe-3/900/700", alt: "Deluxe Room bathroom with amenities" },
    ],
  },
  {
    id: "family-suite",
    name: "Family Suite",
    shortDescription:
      "A generous two-room layout with extra beds and a sitting area — built for families and small groups.",
    amenities: ["wifi", "ac", "tv", "roomService", "housekeeping", "powerBackup"],
    maxOccupancy: 5,
    priceHint: "From PKR 9,000/night",
    images: [
      { src: "https://picsum.photos/seed/alam-room-suite-1/900/700", alt: "Family Suite living area" },
      { src: "https://picsum.photos/seed/alam-room-suite-2/900/700", alt: "Family Suite bedroom" },
      { src: "https://picsum.photos/seed/alam-room-suite-3/900/700", alt: "Family Suite dining nook" },
    ],
  },
];
