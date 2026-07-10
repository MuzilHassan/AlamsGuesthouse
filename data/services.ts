import type { AmenityKey } from "./types";

export interface Service {
  id: AmenityKey;
  label: string;
  description?: string;
}

export const services: Service[] = [
  { id: "wifi", label: "Free WiFi", description: "High-speed internet throughout the property" },
  { id: "frontDesk24", label: "24/7 Front Desk", description: "Round-the-clock reception and assistance" },
  { id: "parking", label: "Free Parking", description: "On-site parking for guests" },
  { id: "breakfast", label: "Breakfast Included", description: "Complimentary breakfast every morning" },
  { id: "housekeeping", label: "Housekeeping", description: "Daily room cleaning and linen service" },
  { id: "powerBackup", label: "Power Backup", description: "Uninterrupted power supply" },
  { id: "cctv", label: "CCTV Security", description: "24/7 monitored premises" },
  { id: "ac", label: "AC Rooms", description: "Climate-controlled comfort in every room" },
];
