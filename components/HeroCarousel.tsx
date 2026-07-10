"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { ImageItem } from "@/data/types";

interface HeroCarouselProps {
  images: ImageItem[];
  intervalMs?: number;
}

export default function HeroCarousel({
  images,
  intervalMs = 6000,
}: HeroCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute left-6 top-24 rounded-[3px] bg-black/35 px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-wide text-beige-50 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] backdrop-blur-sm sm:left-10 sm:top-28">
            {images[index].caption ?? images[index].alt}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/10 to-black/65" />
    </div>
  );
}
