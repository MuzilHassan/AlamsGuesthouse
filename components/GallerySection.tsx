"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
                aria-label={`View photo: ${image.alt}`}
                className="block h-full w-full cursor-zoom-in"
              >
                <motion.div
                  className="h-full w-full"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
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
