"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Compass } from "lucide-react";
import { patternStyle } from "@/lib/assets";
import { HeroVideo } from "./HeroVideo";
import { LuxuryButton } from "./LuxuryButton";

const stats = [
  ["01", "تجربه‌ای تازه"],
  ["02", "مهمان‌نوازی ایرانی"],
  ["03", "استاندارد جهانی"]
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[760px] overflow-hidden bg-novin-obsidian pt-24 md:min-h-[840px] md:pt-28"
    >
      <HeroVideo />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,7,10,0.10),rgba(4,7,10,0.34)_43%,rgba(4,7,10,0.86)_78%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,10,0.16)_0%,rgba(4,7,10,0.05)_38%,rgba(4,7,10,0.5)_72%,#04070a_100%)]" />
      <div className="absolute inset-0 opacity-[0.16] pattern-bg" style={patternStyle()} />

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-novin items-center justify-start px-5 pb-24 pt-12 md:min-h-[700px] md:pb-36 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[630px] text-right"
        >
          <div className="mb-6 flex items-center justify-start gap-4 font-en text-[10px] uppercase text-novin-gold/85 md:mb-7 md:text-[11px]">
            <span className="h-px w-10 bg-novin-gold/60 md:w-14" />
            <span className="tracking-[0.34em] md:tracking-[0.42em]">NOVINAIR — FIRST JOURNEY</span>
          </div>
          <h1 className="text-4xl font-bold leading-[1.3] text-white drop-shadow-[0_8px_36px_rgba(0,0,0,0.6)] md:text-6xl lg:text-[72px]">
            فراتر از یک پرواز
          </h1>
          <p className="mt-4 text-xl font-medium leading-[1.6] text-novin-gold md:text-3xl">
            استانداردی تازه در سفرهای هوایی
          </p>
          <p className="mt-5 max-w-xl text-[15px] font-light leading-8 text-white/78 md:mt-6 md:text-lg md:leading-9">
            نوین‌ایر تجربه‌ای آرام، دقیق و متمایز از سفر را برای مسافرانی
            طراحی کرده که مسیر را هم بخشی از مقصد می‌دانند.
          </p>
          <p className="mt-5 font-en text-[13px] uppercase tracking-[0.42em] text-white/62">
            Beyond just a flight
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-9 md:gap-4">
            <LuxuryButton href="#booking">رزرو پرواز</LuxuryButton>
            <LuxuryButton href="#experience" variant="outline" icon={Compass}>
              کشف تجربه نوین‌ایر
            </LuxuryButton>
          </div>

          <div className="mt-10 hidden max-w-xl grid-cols-1 gap-3 sm:grid sm:grid-cols-3">
            {stats.map(([number, label]) => (
              <div
                key={number}
                className="border-r border-[#9f762f] pr-4 text-right"
              >
                <div className="font-en text-sm text-novin-red">{number}</div>
                <div className="mt-1 text-sm font-medium text-white/88">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs text-white/55 md:flex">
        <ArrowLeft className="h-4 w-4 rotate-[-90deg] text-novin-gold" />
        <span>پایین بروید</span>
      </div>
    </section>
  );
}
