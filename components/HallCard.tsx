"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import type { Hall } from "@/data/halls";
import { whatsappMessages } from "@/lib/whatsapp";
import { staggerItem } from "@/lib/motionVariants";
import { shimmer } from "@/lib/utils";
import WhatsAppButton from "./WhatsAppButton";
import Lightbox from "./Lightbox";

export default function HallCard({ hall }: { hall: Hall }) {
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
          hall.images.length > 1 &&
          setImageIndex((i) => (i + 1) % hall.images.length)
        }
        className="relative aspect-[4/3] w-full overflow-hidden"
        aria-label={`View photos of ${hall.name}`}
      >
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={hall.images[imageIndex].src}
            alt={hall.images[imageIndex].alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={shimmer(900, 700)}
          />
        </motion.div>
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-navy-900/85 px-3 py-1 text-xs font-semibold text-beige-50">
          <Users size={14} />
          {hall.capacity.seated} seated
          {hall.capacity.standing ? ` / ${hall.capacity.standing} standing` : ""}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-semibold text-navy-900">
          {hall.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-700">
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

        <WhatsAppButton
          message={whatsappMessages.hall(hall.name)}
          className="mt-6 w-full"
        >
          Enquire on WhatsApp
        </WhatsAppButton>
      </div>

      <Lightbox
        images={hall.images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </motion.div>
  );
}
