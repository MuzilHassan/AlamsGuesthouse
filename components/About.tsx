"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { staggerContainer, staggerItem } from "@/lib/motionVariants";
import SectionHeading from "./SectionHeading";
import StatBadge from "./StatBadge";

export default function About() {
  return (
    <section id="about" className="bg-beige-100 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Us"
          title="A Home Away From Home in Booni, Chitral"
        />
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-navy-700 sm:text-lg">
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
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {siteConfig.stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <StatBadge stat={stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
