"use client";

import { motion } from "framer-motion";
import type { Room } from "@/data/rooms";
import { whatsappMessages } from "@/lib/whatsapp";
import { staggerItem } from "@/lib/motionVariants";
import { cn } from "@/lib/utils";
import { amenityIconMap } from "./icons/amenityIconMap";
import ImagePlaceholder from "./ImagePlaceholder";
import WhatsAppLink from "./WhatsAppLink";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-beige-300 bg-beige-50 shadow-sm hover:shadow-xl"
    >
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
        >
          <ImagePlaceholder label={room.images[0].alt} />
        </motion.div>
        {room.priceHint && (
          <span className="absolute right-3 top-3 rounded-full bg-navy-900/85 px-3 py-1 text-xs font-semibold text-beige-50">
            {room.priceHint}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold text-navy-900">
          {room.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-700">
          {room.shortDescription}
        </p>

        <ul className="mt-4 flex flex-wrap gap-3">
          {room.amenities.map((amenity, i) => {
            const meta = amenityIconMap[amenity];
            const Icon = meta.icon;
            const signature = i === 0;
            return (
              <li
                key={amenity}
                title={meta.label}
                className={cn(
                  "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                  signature
                    ? "bg-terracotta-100 text-terracotta-700"
                    : "bg-beige-200 text-navy-700"
                )}
              >
                <Icon size={14} />
                {meta.label}
              </li>
            );
          })}
        </ul>

        <WhatsAppLink message={whatsappMessages.room(room.name)} className="mt-6">
          Enquire on WhatsApp
        </WhatsAppLink>
      </div>
    </motion.div>
  );
}
