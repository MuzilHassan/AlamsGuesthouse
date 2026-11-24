"use client";

import YarLightbox, { type Slide } from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import type { ImageItem } from "@/data/types";

interface LightboxProps {
  images: ImageItem[];
  index: number | null;
  onClose: () => void;
}

function toSlide(item: ImageItem): Slide {
  if (item.type === "video") {
    return {
      type: "video",
      sources: [{ src: item.src, type: "video/mp4" }],
      poster: item.poster,
      width: item.width,
      height: item.height,
    };
  }
  return { src: item.src, alt: item.alt };
}

export default function Lightbox({ images, index, onClose }: LightboxProps) {
  return (
    <YarLightbox
      open={index !== null}
      index={index ?? 0}
      close={onClose}
      slides={images.map(toSlide)}
      plugins={[Counter, Video]}
      video={{ autoPlay: true, controls: true, playsInline: true }}
      counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      styles={{ container: { backgroundColor: "rgba(16, 27, 39, 0.8)" } }}
    />
  );
}
