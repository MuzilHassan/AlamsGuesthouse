import type { ImageItem } from "./types";

export interface Hall {
  id: string;
  name: string;
  shortDescription: string;
  capacity: { seated: number; standing?: number };
  useCases: string[];
  images: ImageItem[];
}

export const halls: Hall[] = [
  {
    id: "conference-room",
    name: "Conference Room",
    shortDescription:
      "A quiet, well-equipped space for meetings, seminars, and corporate workshops.",
    capacity: { seated: 40 },
    useCases: ["Meetings", "Seminars", "Workshops"],
    images: [
      { src: "/images/halls/hall.jpeg", alt: "Conference Room table setup" },
    ],
  },
  {
    id: "garden-lawn",
    name: "Garden Lawn",
    shortDescription:
      "An open-air lawn framed by the mountains — a beautiful backdrop for outdoor celebrations.",
    capacity: { seated: 200 },
    useCases: ["Outdoor Weddings", "Engagement Parties", "Birthday Celebrations"],
    images: [
      { src: "/images/halls/lawn.jpeg", alt: "Garden Lawn with seating and orchard trees" },
    ],
  },
];
