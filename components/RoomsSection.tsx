"use client";

import { motion } from "framer-motion";
import { rooms } from "@/data/rooms";
import { staggerContainer } from "@/lib/motionVariants";
import SectionHeading from "./SectionHeading";
import RoomCard from "./RoomCard";

export default function RoomsSection() {
  return (
    <section id="rooms" className="bg-beige-200/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Stay With Us"
          title="Rooms Built For Every Traveler"
          subtitle="From cozy solo stays to spacious deluxe rooms, choose the room that fits your trip."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
