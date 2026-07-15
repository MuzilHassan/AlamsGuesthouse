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
      { src: "/images/rooms/T1-room.jpeg", alt: "Standard Room interior" },
      { src: "/images/rooms/T1-washroom.jpeg", alt: "Standard Room attached washroom" },
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
      { src: "/images/rooms/t2-room.jpeg", alt: "Deluxe Room interior" },
      { src: "/images/rooms/t2-washroom.jpeg", alt: "Deluxe Room attached washroom" },
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
      { src: "/images/rooms/T3-room.jpeg", alt: "Family Suite interior" },
      { src: "/images/rooms/T3-washroom.jpeg", alt: "Family Suite attached washroom" },
    ],
  },
];
