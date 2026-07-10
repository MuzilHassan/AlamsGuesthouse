"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { useScrolled } from "@/lib/useScrolled";

export default function FloatingWhatsApp() {
  const scrolledPastHero = useScrolled(400);
  const [interacted, setInteracted] = useState(false);
  const [nearBottom, setNearBottom] = useState(false);

  useEffect(() => {
    function onScroll() {
      const distanceFromBottom =
        document.documentElement.scrollHeight -
        window.scrollY -
        window.innerHeight;
      setNearBottom(distanceFromBottom < 220);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const visible = scrolledPastHero && !nearBottom;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={buildWhatsAppLink(whatsappMessages.general())}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book on WhatsApp"
          onMouseEnter={() => setInteracted(true)}
          onClick={() => setInteracted(true)}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-beige-50 shadow-lg"
        >
          {!interacted && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy-500 opacity-50 [animation-duration:4s]" />
          )}
          <MessageCircle size={26} className="relative" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
