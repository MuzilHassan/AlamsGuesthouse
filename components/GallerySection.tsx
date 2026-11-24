"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import { staggerContainer, staggerItem } from "@/lib/motionVariants";
import Lightbox from "./Lightbox";
import SectionHeading from "./SectionHeading";

const aspectRatioClass: Record<"square" | "portrait" | "landscape", string> = {
  square: "aspect-square",
  portrait: "aspect-3/4",
  landscape: "aspect-4/3",
};

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-beige-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Take A Look Around"
          title="Gallery"
          subtitle="A glimpse of our property, common areas, and the beautiful surroundings of Booni, Upper Chitral."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-14 columns-2 gap-4 sm:columns-3 [&>*]:mb-4"
        >
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              variants={staggerItem}
              className={`relative w-full overflow-hidden rounded-xl break-inside-avoid ${
                aspectRatioClass[image.aspect ?? "landscape"]
              }`}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                aria-label={`${image.type === "video" ? "Play video" : "View photo"}: ${image.alt}`}
                className={`block h-full w-full ${
                  image.type === "video" ? "cursor-pointer" : "cursor-zoom-in"
                }`}
              >
                <motion.div
                  className="relative h-full w-full"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {image.type === "video" ? (
                    <video
                      // The #t fragment makes browsers (iOS Safari included)
                      // paint a frame as the thumbnail instead of a blank box.
                      src={`${image.src}#t=0.1`}
                      poster={image.poster}
                      muted
                      playsInline
                      preload="metadata"
                      aria-hidden
                      tabIndex={-1}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 50vw"
                      className="object-cover"
                    />
                  )}
                </motion.div>
                {image.type === "video" && (
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/55 text-beige-50 backdrop-blur-sm sm:h-14 sm:w-14">
                      <Play className="ml-0.5 h-5 w-5 fill-current sm:h-6 sm:w-6" />
                    </span>
                  </span>
                )}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Lightbox
        images={galleryImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </section>
  );
}
