"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { useScrolled } from "@/lib/useScrolled";

export default function FloatingWhatsApp() {
  const visible = useScrolled(400);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={buildWhatsAppLink(whatsappMessages.general())}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book on WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta-500 text-beige-50 shadow-lg"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta-400 opacity-60" />
          <MessageCircle size={26} className="relative" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
