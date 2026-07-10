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
    id: "banquet-hall",
    name: "Banquet Hall",
    shortDescription:
      "Our largest indoor venue, elegantly decorated and ready to host your biggest celebrations.",
    capacity: { seated: 150, standing: 250 },
    useCases: ["Weddings", "Receptions", "Large Conferences"],
    images: [
      { src: "https://picsum.photos/seed/alam-hall-banquet-1/900/700", alt: "Banquet Hall set for a wedding reception" },
      { src: "https://picsum.photos/seed/alam-hall-banquet-2/900/700", alt: "Banquet Hall stage and lighting" },
    ],
  },
  {
    id: "conference-room",
    name: "Conference Room",
    shortDescription:
      "A quiet, well-equipped space for meetings, seminars, and corporate workshops.",
    capacity: { seated: 40 },
    useCases: ["Meetings", "Seminars", "Workshops"],
    images: [
      { src: "https://picsum.photos/seed/alam-hall-conference-1/900/700", alt: "Conference Room table setup" },
      { src: "https://picsum.photos/seed/alam-hall-conference-2/900/700", alt: "Conference Room presentation screen" },
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
      { src: "https://picsum.photos/seed/alam-hall-lawn-1/900/700", alt: "Garden Lawn set up for an outdoor event" },
      { src: "https://picsum.photos/seed/alam-hall-lawn-2/900/700", alt: "Garden Lawn in the evening with lighting" },
    ],
  },
];
