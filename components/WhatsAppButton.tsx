"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  showIcon?: boolean;
}

const variantClasses: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
  primary: "bg-navy-800 hover:bg-navy-900 text-beige-50",
  secondary: "bg-navy-900 hover:bg-navy-800 text-beige-50",
  outline:
    "border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-beige-50",
};

export default function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className,
  showIcon = true,
}: WhatsAppButtonProps) {
  return (
    <motion.a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[3px] px-6 py-3 text-sm font-semibold tracking-wide transition-colors shadow-sm",
        variantClasses[variant],
        className
      )}
    >
      {showIcon && <MessageCircle size={18} aria-hidden />}
      {children}
    </motion.a>
  );
}
