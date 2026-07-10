"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { whatsappMessages } from "@/lib/whatsapp";
import WhatsAppButton from "./WhatsAppButton";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-navy-900/60 md:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="ml-auto flex h-full w-4/5 max-w-xs flex-col gap-8 bg-beige-50 px-6 py-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg font-semibold text-navy-900">
                {siteConfig.name}
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="rounded-full p-2 text-navy-900 hover:bg-beige-200"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-5">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="text-base font-medium text-navy-800 hover:text-terracotta-500"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <WhatsAppButton
              message={whatsappMessages.general()}
              variant="primary"
              className="mt-auto w-full"
            >
              Book on WhatsApp
            </WhatsAppButton>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
