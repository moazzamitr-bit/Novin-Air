"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/constants";
import { SectionTitle } from "./SectionTitle";

export function Destinations() {
  return (
    <section
      id="destinations"
      className="section-shell py-24"
      aria-labelledby="destinations-heading"
    >
      <div className="mx-auto max-w-novin px-5 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle title="مقاصد محبوب" />
          <Link
            href="#"
            className="inline-flex items-center gap-3 text-sm text-novin-gold transition hover:text-white"
          >
            مشاهده همه مقاصد
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>

        <div className="scrollbar-none mt-10 flex snap-x gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
          {destinations.map((destination, index) => (
            <motion.article
              key={destination.city}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.75,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative h-[292px] min-w-[245px] snap-start overflow-hidden rounded-[8px] border border-[#9f762f] bg-novin-midnight shadow-luxury transition hover:-translate-y-1 hover:border-[#d2ab67] hover:shadow-gold lg:min-w-0"
            >
              <Image
                src={destination.image}
                alt={`نمایی از ${destination.city}`}
                fill
                loading="eager"
                sizes="(min-width: 1024px) 20vw, 245px"
                className="object-cover transition duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/36 to-transparent" />
              <div className="absolute right-5 top-5 h-2.5 w-2.5 rounded-full bg-novin-red opacity-0 shadow-red transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-right">
                <h3 className="text-2xl font-bold text-white">{destination.city}</h3>
                <p className="mt-2 text-sm font-light leading-6 text-white/74">{destination.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
