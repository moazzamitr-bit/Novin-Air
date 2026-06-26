"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { assetPath } from "@/lib/assets";
import { SectionTitle } from "./SectionTitle";

const chips = ["مسیر", "مقصد", "بازگشت مطمئن"];

export function BrandStory() {
  return (
    <section
      id="story"
      className="section-shell pb-24"
      aria-labelledby="story-heading"
    >
      <div className="mx-auto max-w-novin px-5 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto flex aspect-square w-full max-w-[470px] items-center justify-center rounded-full border border-[#9f762f] bg-radial-story"
          >
            <div className="absolute inset-10 rounded-full border border-dashed border-[#9f762f]" />
            <div className="absolute right-[24%] top-[15%] h-4 w-4 rounded-full bg-novin-red shadow-red red-dot-pulse" />
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 500 500"
              fill="none"
            >
              <path
                d="M95 306C155 216 243 207 330 151C363 130 389 102 411 67"
                stroke="rgba(210,171,103,0.58)"
                strokeWidth="1.2"
                strokeDasharray="8 11"
              />
              <path
                d="M116 344C196 282 281 294 374 238"
                stroke="rgba(237,28,36,0.34)"
                strokeWidth="1"
                strokeDasharray="5 10"
              />
            </svg>
            <Image
              src={assetPath("/images/logo-symbol.svg")}
              alt=""
              width={230}
              height={220}
              className="relative z-10 h-auto w-44 opacity-90 md:w-56"
            />
          </motion.div>

          <div>
            <SectionTitle title="الهام‌گرفته از درنای سیبری" />
            <p className="mt-7 text-base font-light leading-9 text-white/68 md:text-lg">
              نشان نوین‌ایر از حرف «ن» فارسی و فرم پرواز درنای سیبری الهام
              گرفته است؛ پرنده‌ای مهاجر که مسیرهای طولانی را با دقت طی می‌کند
              و هر سال به ایران بازمی‌گردد. برای ما، پرواز فقط حرکت نیست؛
              پیوندی میان مبدأ، مقصد و بازگشت مطمئن است.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[#9f762f] bg-novin-gold/8 px-5 py-2 text-sm text-novin-gold"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
