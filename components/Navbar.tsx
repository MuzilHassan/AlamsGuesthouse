"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { whatsappMessages } from "@/lib/whatsapp";
import { useScrolled } from "@/lib/useScrolled";
import { cn } from "@/lib/utils";
import WhatsAppButton from "./WhatsAppButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "bg-beige-50/95 shadow-sm backdrop-blur"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className={cn(
            "font-serif text-xl font-semibold transition-colors",
            scrolled ? "text-navy-900" : "text-beige-50"
          )}
        >
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-navy-800 hover:text-terracotta-500"
                  : "text-beige-100 hover:text-beige-50"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton message={whatsappMessages.general()}>
            Book on WhatsApp
          </WhatsAppButton>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className={cn(
            "rounded-full p-2 md:hidden",
            scrolled ? "text-navy-900" : "text-beige-50"
          )}
        >
          <Menu size={24} />
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
