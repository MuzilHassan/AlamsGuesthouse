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
    priceHint: "PKR 8,000/night",
    images: [
      { src: "/images/rooms/S-room.jpeg", alt: "Standard Room interior" },
      { src: "/images/rooms/S-washroom.jpeg", alt: "Standard Room attached washroom" },
    ],
  },
  {
    id: "superior-room",
    name: "Superior Room",
    shortDescription:
      "A step up in space and comfort, with upgraded furnishings — ideal for those who want a little more.",
    amenities: ["wifi", "ac", "tv", "roomService", "housekeeping"],
    maxOccupancy: 3,
    priceHint: "PKR 9,000/night",
    images: [
      { src: "/images/rooms/SU-room.jpeg", alt: "Superior Room interior" },
      { src: "/images/rooms/SU-washroom.jpeg", alt: "Superior Room attached washroom" },
    ],
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    shortDescription:
      "Spacious rooms with premium furnishings, a work desk, and room service — ideal for business or leisure stays.",
    amenities: ["wifi", "ac", "tv", "roomService", "housekeeping", "frontDesk24"],
    maxOccupancy: 4,
    priceHint: "PKR 13,000/night",
    images: [
      { src: "/images/rooms/D-room.jpeg", alt: "Deluxe Room interior" },
      { src: "/images/rooms/D-washroom.jpeg", alt: "Deluxe Room attached washroom" },
    ],
  },
];
