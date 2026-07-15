export interface ImageItem {
  src: string;
  srcMobile?: string;
  alt: string;
  caption?: string;
}

export type AmenityKey =
  | "wifi"
  | "ac"
  | "tv"
  | "parking"
  | "breakfast"
  | "roomService"
  | "housekeeping"
  | "powerBackup"
  | "cctv"
  | "laundry"
  | "frontDesk24";
