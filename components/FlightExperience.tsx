"use client";

import { motion } from "framer-motion";
import { Armchair, MonitorPlay, ShieldCheck, Utensils } from "lucide-react";
import Image from "next/image";
import { assetPath } from "@/lib/assets";
import { flightExperienceFeatures } from "@/lib/constants";
import { LuxuryButton } from "./LuxuryButton";
import { SectionTitle } from "./SectionTitle";

const iconMap = {
  armchair: Armchair,
  monitor: MonitorPlay,
  utensils: Utensils,
  shield: ShieldCheck
};

export function FlightExperience() {
  return (
    <section
      id="experience"
      className="section-shell pb-28"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-novin px-5 lg:px-10">
        <div className="luxury-card overflow-hidden rounded-[8px] border-[#9f762f]">
          <div className="grid min-h-[560px] lg:grid-cols-[0.86fr_1.14fr]">
            <motion.div
              initial={{ opacity: 0, x: 34 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative min-h-[330px] lg:order-2 lg:min-h-full"
            >
              <Image
                src={assetPath("/images/cabin-luxury-generated.png")}
                alt="کابین لوکس نوین‌ایر با نورپردازی گرم"
                fill
                loading="eager"
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-novin-obsidian/36 lg:bg-gradient-to-r" />
              <div className="absolute bottom-7 right-7 rounded-[8px] border border-[#9f762f] bg-black/45 px-5 py-3 text-sm text-novin-gold backdrop-blur-xl">
                Beyond just a flight
              </div>
            </motion.div>

            <div className="p-7 md:p-10 lg:p-12">
              <SectionTitle
                title="تجربه‌ای در سطح جهانی"
                subtitle="از لحظه ورود تا فرود، هر بخش از سفر برای آرامش، دقت و آسایش شما طراحی شده است."
              />
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {flightExperienceFeatures.map((feature) => {
                  const Icon = iconMap[feature.icon as keyof typeof iconMap];
                  return (
                    <div key={feature.title} className="flex gap-4 text-right">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] border border-[#9f762f] text-novin-gold">
                        <Icon className="h-5 w-5 stroke-[1.45]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{feature.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-novin-lightGrey">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <LuxuryButton href="#" variant="outline" className="mt-10">
                مشاهده خدمات پروازی بیشتر
              </LuxuryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
