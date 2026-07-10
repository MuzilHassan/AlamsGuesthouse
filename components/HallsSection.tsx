"use client";

import { motion } from "framer-motion";
import { halls } from "@/data/halls";
import { staggerContainer } from "@/lib/motionVariants";
import SectionHeading from "./SectionHeading";
import HallCard from "./HallCard";

export default function HallsSection() {
  return (
    <section id="halls" className="bg-beige-100 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Events & Celebrations"
          title="Spaces For Every Occasion"
          subtitle="From intimate meetings to grand weddings, our halls and lawn are ready to host your event."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-14 flex flex-col gap-5"
        >
          {halls.map((hall) => (
            <HallCard key={hall.id} hall={hall} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
