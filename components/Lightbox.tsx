"use client";

import YarLightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import type { ImageItem } from "@/data/types";

interface LightboxProps {
  images: ImageItem[];
  index: number | null;
  onClose: () => void;
}

export default function Lightbox({ images, index, onClose }: LightboxProps) {
  return (
    <YarLightbox
      open={index !== null}
      index={index ?? 0}
      close={onClose}
      slides={images.map((image) => ({ src: image.src, alt: image.alt }))}
      plugins={[Counter]}
      counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      styles={{ container: { backgroundColor: "rgba(16, 27, 39, 0.95)" } }}
    />
  );
}
