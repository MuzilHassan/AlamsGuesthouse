"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { ImageItem } from "@/data/types";

interface HeroCarouselProps {
  images: ImageItem[];
  intervalMs?: number;
  /** Safety net: longest a video slide may stay up if it never reports "ended". */
  maxVideoMs?: number;
}

interface HeroVideoProps {
  item: ImageItem;
  onDone: () => void;
  fallbackMs: number;
}

function HeroVideo({ item, onDone, fallbackMs }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let fallback: ReturnType<typeof setTimeout> | undefined;
    // React does not reliably emit the `muted` attribute, and browsers only
    // autoplay muted video, so set it on the element before playing.
    video.muted = true;
    // Autoplay blocked (e.g. iOS Low Power Mode): treat it like a photo.
    video.play()?.catch(() => {
      fallback = setTimeout(onDone, fallbackMs);
    });
    return () => clearTimeout(fallback);
  }, [onDone, fallbackMs]);

  return (
    <video
      ref={videoRef}
      src={item.src}
      poster={item.poster}
      muted
      playsInline
      preload="auto"
      aria-label={item.alt}
      onEnded={onDone}
      onError={onDone}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

// Hero videos are portrait clips, so they only suit screens that are taller
// than wide (phones, tablets held upright). Wide screens get photos only.
const PORTRAIT_QUERY = "(orientation: portrait)";

function subscribeToPortrait(onChange: () => void) {
  const query = window.matchMedia(PORTRAIT_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function useIsPortraitScreen() {
  return useSyncExternalStore(
    subscribeToPortrait,
    () => window.matchMedia(PORTRAIT_QUERY).matches,
    () => false,
  );
}

export default function HeroCarousel({
  images,
  intervalMs = 6000,
  maxVideoMs = 45000,
}: HeroCarouselProps) {
  const [rawIndex, setIndex] = useState(0);
  const isPortraitScreen = useIsPortraitScreen();
  const photosOnly = images.filter((item) => item.type !== "video");
  const slides =
    isPortraitScreen || photosOnly.length === 0 ? images : photosOnly;
  // The slide list shrinks/grows if the screen is rotated mid-rotation.
  const index = rawIndex % slides.length;
  const current = slides[index];
  const isVideo = current.type === "video";

  // Only advances if `from` is still the visible slide, so a late "ended"
  // event and the timer can never skip two slides between them.
  const advanceFrom = useCallback(
    (from: number) => {
      setIndex((i) =>
        i % slides.length === from ? (from + 1) % slides.length : i,
      );
    },
    [slides.length],
  );

  const advance = useCallback(() => advanceFrom(index), [advanceFrom, index]);

  useEffect(() => {
    if (slides.length <= 1) return;
    // Photos rotate on the interval; videos play through and advance on end.
    const timer = setTimeout(advance, isVideo ? maxVideoMs : intervalMs);
    return () => clearTimeout(timer);
  }, [advance, slides.length, intervalMs, isVideo, maxVideoMs]);

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
          {isVideo ? (
            <HeroVideo item={current} onDone={advance} fallbackMs={intervalMs} />
          ) : (
            <>
              {current.srcMobile && (
                <Image
                  src={current.srcMobile}
                  alt={current.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover sm:hidden"
                />
              )}
              <Image
                src={current.src}
                alt={current.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover ${current.srcMobile ? "hidden sm:block" : ""}`}
              />
            </>
          )}
          <div className="absolute left-6 top-24 rounded-[3px] bg-black/35 px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-wide text-beige-50 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] backdrop-blur-sm sm:left-10 sm:top-28">
            {current.caption ?? current.alt}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/10 to-black/65" />
    </div>
  );
}
