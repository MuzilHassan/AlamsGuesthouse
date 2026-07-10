"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motionVariants";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  titleClassName,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInUp}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-500">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-balance font-serif text-3xl font-semibold text-navy-900 sm:text-4xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-navy-700 sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
