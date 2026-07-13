"use client";

import { useState } from "react";
import Image from "next/image";
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
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "bg-beige-50/95 shadow-sm backdrop-blur"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "flex w-full items-center justify-between px-6 transition-[padding] duration-300 sm:px-10",
          scrolled ? "py-2.5" : "py-4 drop-shadow-[0_1px_5px_rgba(0,0,0,0.55)]"
        )}
      >
        <a href="#home" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-emblem.png"
            alt=""
            width={244}
            height={201}
            className={cn(
              "h-8 w-auto transition-[filter] duration-300",
              scrolled && "invert"
            )}
          />
          <span
            className={cn(
              "font-serif text-xl font-semibold transition-colors",
              scrolled ? "text-navy-900" : "text-beige-50"
            )}
          >
            {siteConfig.name}
          </span>
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
          <WhatsAppButton
            message={whatsappMessages.general()}
            variant="outline"
            className={cn(
              "px-5 py-2.5 text-xs",
              !scrolled &&
                "border-beige-50! text-beige-50! hover:bg-beige-50! hover:text-navy-900!"
            )}
          >
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
    </header>

    <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
