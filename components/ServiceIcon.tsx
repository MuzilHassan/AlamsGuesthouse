"use client";

import { motion } from "framer-motion";
import type { Service } from "@/data/services";
import { staggerItem } from "@/lib/motionVariants";
import { amenityIconMap } from "./icons/amenityIconMap";

export default function ServiceIcon({ service }: { service: Service }) {
  const Icon = amenityIconMap[service.id].icon;

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className="flex flex-col items-center gap-3 rounded-2xl border border-beige-300 bg-beige-50 px-4 py-6 text-center shadow-sm"
    >
      <Icon size={34} className="text-terracotta-600" strokeWidth={1.5} />

      <span className="text-sm font-semibold text-navy-900">
        {service.label}
      </span>
      {service.description && (
        <span className="text-xs text-navy-700">{service.description}</span>
      )}
    </motion.div>
  );
}
