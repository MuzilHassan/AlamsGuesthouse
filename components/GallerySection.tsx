"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/gallery";
import { staggerContainer, staggerItem } from "@/lib/motionVariants";
import { shimmer } from "@/lib/utils";
import SectionHeading from "./SectionHeading";
import Lightbox from "./Lightbox";

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
            <motion.button
              key={image.id}
              type="button"
              variants={staggerItem}
              whileHover={{ scale: 1.03 }}
              onClick={() => setLightboxIndex(i)}
              className="relative block w-full break-inside-avoid overflow-hidden rounded-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={
                  image.aspect === "portrait"
                    ? 750
                    : image.aspect === "square"
                    ? 600
                    : 450
                }
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="h-auto w-full object-cover"
                placeholder="blur"
                blurDataURL={shimmer(600, 600)}
              />
            </motion.button>
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
