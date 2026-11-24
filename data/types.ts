export interface ImageItem {
  /** Defaults to "image". Video items point `src` at an .mp4 file. */
  type?: "image" | "video";
  src: string;
  srcMobile?: string;
  alt: string;
  caption?: string;
  /** Video only: optional still image shown before the video loads. */
  poster?: string;
  /** Video only: intrinsic size in pixels, used to size the lightbox player. */
  width?: number;
  height?: number;
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
