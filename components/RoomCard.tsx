"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Room } from "@/data/rooms";
import { whatsappMessages } from "@/lib/whatsapp";
import { staggerItem } from "@/lib/motionVariants";
import { shimmer } from "@/lib/utils";
import { amenityIconMap } from "./icons/amenityIconMap";
import WhatsAppButton from "./WhatsAppButton";
import Lightbox from "./Lightbox";

export default function RoomCard({ room }: { room: Room }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-beige-300 bg-beige-50 shadow-sm hover:shadow-xl"
    >
      <button
        type="button"
        onClick={() => setLightboxIndex(imageIndex)}
        onMouseEnter={() =>
          room.images.length > 1 &&
          setImageIndex((i) => (i + 1) % room.images.length)
        }
        className="relative aspect-[4/3] w-full overflow-hidden"
        aria-label={`View photos of ${room.name}`}
      >
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={room.images[imageIndex].src}
            alt={room.images[imageIndex].alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={shimmer(900, 700)}
          />
        </motion.div>
        {room.priceHint && (
          <span className="absolute right-3 top-3 rounded-full bg-navy-900/85 px-3 py-1 text-xs font-semibold text-beige-50">
            {room.priceHint}
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold text-navy-900">
          {room.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-700">
          {room.shortDescription}
        </p>

        <ul className="mt-4 flex flex-wrap gap-3">
          {room.amenities.map((amenity) => {
            const meta = amenityIconMap[amenity];
            const Icon = meta.icon;
            return (
              <li
                key={amenity}
                title={meta.label}
                className="flex items-center gap-1.5 rounded-full bg-beige-200 px-2.5 py-1 text-xs font-medium text-navy-700"
              >
                <Icon size={14} />
                {meta.label}
              </li>
            );
          })}
        </ul>

        <WhatsAppButton
          message={whatsappMessages.room(room.name)}
          className="mt-6 w-full"
        >
          Enquire on WhatsApp
        </WhatsAppButton>
      </div>

      <Lightbox
        images={room.images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </motion.div>
  );
}
