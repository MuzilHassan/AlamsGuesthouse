"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { staggerContainer } from "@/lib/motionVariants";
import SectionHeading from "./SectionHeading";
import ServiceIcon from "./ServiceIcon";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-beige-200/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Amenities"
          title="Everything You Need For A Comfortable Stay"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {services.map((service) => (
            <ServiceIcon key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
