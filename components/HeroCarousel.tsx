"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { ImageItem } from "@/data/types";
import { shimmer } from "@/lib/utils";

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
            placeholder="blur"
            blurDataURL={shimmer(1920, 1080)}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-navy-900/55" />
    </div>
  );
}
