"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users } from "lucide-react";
import type { Hall } from "@/data/halls";
import type { ImageItem } from "@/data/types";
import { whatsappMessages } from "@/lib/whatsapp";
import { staggerItem } from "@/lib/motionVariants";
import Lightbox from "./Lightbox";
import WhatsAppLink from "./WhatsAppLink";

interface HallCardProps {
  hall: Hall;
  allImages: ImageItem[];
  startIndex: number;
}

export default function HallCard({ hall, allImages, startIndex }: HallCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-beige-300 bg-beige-50 shadow-sm hover:shadow-xl sm:flex-row"
    >
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        aria-label={`View photos of ${hall.name}`}
        className="relative aspect-4/3 w-full cursor-zoom-in overflow-hidden sm:aspect-auto sm:w-70 sm:shrink-0"
      >
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={hall.images[0].src}
            alt={hall.images[0].alt}
            fill
            sizes="(min-width: 640px) 280px, 100vw"
            className="object-cover"
          />
        </motion.div>
      </button>

      <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
        <h3 className="font-serif text-xl font-semibold text-navy-900">
          {hall.name}
        </h3>
        <div className="mt-1 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-terracotta-700">
          <Users size={14} />
          {hall.capacity.seated} seated
          {hall.capacity.standing ? ` / ${hall.capacity.standing} standing` : ""}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-navy-700">
          {hall.shortDescription}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {hall.useCases.map((useCase) => (
            <li
              key={useCase}
              className="rounded-full bg-beige-200 px-2.5 py-1 text-xs font-medium text-navy-700"
            >
              {useCase}
            </li>
          ))}
        </ul>

        <WhatsAppLink message={whatsappMessages.hall(hall.name)} className="mt-6">
          Enquire on WhatsApp
        </WhatsAppLink>
      </div>

      <Lightbox
        images={allImages}
        index={lightboxOpen ? startIndex : null}
        onClose={() => setLightboxOpen(false)}
      />
    </motion.div>
  );
}
