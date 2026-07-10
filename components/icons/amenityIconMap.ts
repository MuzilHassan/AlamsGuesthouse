import {
  Wifi,
  Snowflake,
  Tv,
  Car,
  Coffee,
  ConciergeBell,
  Sparkles,
  Zap,
  ShieldCheck,
  Shirt,
  Clock,
  type LucideIcon,
} from "lucide-react";
import type { AmenityKey } from "@/data/types";

interface AmenityMeta {
  icon: LucideIcon;
  label: string;
}

export const amenityIconMap: Record<AmenityKey, AmenityMeta> = {
  wifi: { icon: Wifi, label: "Free WiFi" },
  ac: { icon: Snowflake, label: "AC" },
  tv: { icon: Tv, label: "TV" },
  parking: { icon: Car, label: "Parking" },
  breakfast: { icon: Coffee, label: "Breakfast" },
  roomService: { icon: ConciergeBell, label: "Room Service" },
  housekeeping: { icon: Sparkles, label: "Housekeeping" },
  powerBackup: { icon: Zap, label: "Power Backup" },
  cctv: { icon: ShieldCheck, label: "CCTV Security" },
  laundry: { icon: Shirt, label: "Laundry" },
  frontDesk24: { icon: Clock, label: "24/7 Front Desk" },
};
