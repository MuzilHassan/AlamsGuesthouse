"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { staggerContainer, staggerItem } from "@/lib/motionVariants";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-beige-100 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Us"
          title="A Home Away From Home in Booni, Chitral"
        />
        <p className="mt-6 text-left text-base leading-relaxed text-navy-700 sm:text-lg">
          For over a decade, {siteConfig.name} has welcomed travelers with
          warm, family-run hospitality in the heart of Upper Chitral,
          surrounded by towering peaks and alpine meadows. What began as a
          modest family home has grown into a beloved guest house, blending
          traditional Chitrali hospitality with modern comfort. Whether
          you&apos;re here for a quiet getaway, a family celebration, or a
          trek into the surrounding valleys, our team treats every guest like
          family.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-12 flex justify-center divide-x divide-beige-300 border-y border-beige-300 py-6"
        >
          {siteConfig.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="flex-1 text-center"
            >
              <div className="font-serif text-3xl font-semibold text-terracotta-500">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-navy-700">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
