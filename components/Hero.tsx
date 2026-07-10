"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { heroImages } from "@/data/hero";
import { whatsappMessages } from "@/lib/whatsapp";
import { heroStagger, fadeInUp } from "@/lib/motionVariants";
import HeroCarousel from "./HeroCarousel";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[560px] w-full items-center justify-center overflow-hidden"
    >
      <HeroCarousel images={heroImages} />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroStagger}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center"
      >
        <motion.h1
          variants={fadeInUp}
          className="font-serif text-4xl font-semibold text-beige-50 sm:text-5xl md:text-6xl"
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-4 max-w-xl text-base text-beige-100 sm:text-lg"
        >
          {siteConfig.tagline}
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-8">
          <WhatsAppButton
            message={whatsappMessages.general()}
            className="px-8 py-4 text-base"
          >
            Book Now via WhatsApp
          </WhatsAppButton>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-beige-50"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}
