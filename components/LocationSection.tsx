"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import SectionHeading from "./SectionHeading";

export default function LocationSection() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="location" className="bg-beige-200/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Find Us"
          title="Location"
          subtitle="Perfectly located in the heart of Booni, Upper Chitral, close to the region's most beautiful meadows and attractions."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="relative h-105 overflow-hidden rounded-2xl shadow-sm lg:col-span-3">
            {!mapLoaded && (
              <div className="absolute inset-0 animate-pulse bg-beige-200" />
            )}
            <iframe
              title={`${siteConfig.name} location map`}
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapLoaded(true)}
              className="relative h-105 w-full border-0"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 rounded-2xl border border-beige-300 bg-beige-50 p-6 lg:col-span-2">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 shrink-0 text-terracotta-500" size={20} />
              <p className="text-sm leading-relaxed text-navy-800">
                {siteConfig.address}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-terracotta-500">
                Nearby Landmarks
              </p>
              <ul className="mt-3 space-y-2">
                {siteConfig.landmarks.map((landmark) => (
                  <li
                    key={landmark.name}
                    className="flex items-center justify-between text-sm text-navy-700"
                  >
                    <span>{landmark.name}</span>
                    <span className="text-navy-500">{landmark.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
