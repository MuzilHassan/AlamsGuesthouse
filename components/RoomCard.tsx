"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Room } from "@/data/rooms";
import { whatsappMessages } from "@/lib/whatsapp";
import { staggerItem } from "@/lib/motionVariants";
import { cn } from "@/lib/utils";
import { amenityIconMap } from "./icons/amenityIconMap";
import Lightbox from "./Lightbox";
import WhatsAppLink from "./WhatsAppLink";

export default function RoomCard({ room }: { room: Room }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (room.images.length <= 1) return;
    const timer = setInterval(() => {
      setImageIndex((i) => (i + 1) % room.images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [room.images.length]);

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
        aria-label={`View photos of ${room.name}`}
        className="relative aspect-4/3 w-full cursor-zoom-in overflow-hidden"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={imageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={room.images[imageIndex].src}
              alt={room.images[imageIndex].alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {room.priceHint && (
          <span className="absolute right-3 top-3 rounded-full bg-navy-900/85 px-3 py-1 text-xs font-semibold text-beige-50">
            {room.priceHint}
          </span>
        )}
        {room.images.length > 1 && (
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
            {room.images.map((image, i) => (
              <span
                key={image.src}
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-colors",
                  i === imageIndex ? "bg-beige-50" : "bg-beige-50/40",
                )}
              />
            ))}
          </div>
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
                    : "bg-beige-200 text-navy-700",
                )}
              >
                <Icon size={14} />
                {meta.label}
              </li>
            );
          })}
        </ul>

        <WhatsAppLink
          message={whatsappMessages.room(room.name)}
          className="mt-6"
        >
          Enquire on WhatsApp
        </WhatsAppLink>
      </div>

      <Lightbox
        images={room.images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </motion.div>
  );
}
