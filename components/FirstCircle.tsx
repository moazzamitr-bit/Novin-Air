"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Gift, Plane, Star, Tag, Crown } from "lucide-react";
import Image from "next/image";
import { MouseEvent } from "react";
import { assetPath, patternStyle } from "@/lib/assets";
import { firstCircleBenefits } from "@/lib/constants";
import { LuxuryButton } from "./LuxuryButton";
import { SectionTitle } from "./SectionTitle";

const benefitIcons = [Tag, Plane, Star, Crown, Gift];

export function FirstCircle() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 18 });
  const springY = useSpring(y, { stiffness: 160, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="first-circle"
      className="section-shell pb-24"
      aria-labelledby="first-circle-heading"
    >
      <div className="mx-auto max-w-novin px-5 lg:px-10">
        <div className="luxury-card relative overflow-hidden rounded-[8px] p-7 md:p-10 lg:p-12">
          <div className="absolute inset-0 opacity-[0.06] pattern-bg" style={patternStyle()} />
          <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-novin-gold/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-novin-red/10 blur-3xl" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              onMouseMove={handleMove}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
              }}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative mx-auto w-full max-w-[510px]"
            >
              <Image
                src={assetPath("/images/first-circle-card-hq.png")}
                alt="کارت عضویت First Circle نوین‌ایر"
                width={2620}
                height={1720}
                loading="eager"
                className="h-auto w-full drop-shadow-[0_30px_80px_rgba(0,0,0,0.42)]"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[8px] bg-gradient-to-tr from-novin-gold/10 via-transparent to-transparent" />
            </motion.div>

            <div>
              <SectionTitle
                title="باشگاه مسافران نوین‌ایر"
                subtitle="هر پرواز، یک گام به تجربه‌ای ویژه‌تر؛ مزایای انحصاری، امتیاز و خدمات اختصاصی برای اعضای باشگاه مسافران."
              />
              <div className="mt-10 grid gap-3 sm:grid-cols-5">
                {firstCircleBenefits.map((benefit, index) => {
                  const Icon = benefitIcons[index];
                  return (
                    <div
                      key={benefit}
                      className="rounded-[8px] border border-[#9f762f] bg-novin-gold/[0.03] p-4 text-center transition hover:border-[#d2ab67] hover:bg-novin-gold/8"
                    >
                      <Icon className="mx-auto h-6 w-6 text-novin-gold" />
                      <p className="mt-3 text-xs leading-6 text-white/82">{benefit}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <LuxuryButton href="#">پیوستن به First Circle</LuxuryButton>
                <LuxuryButton href="#" variant="outline">
                  بیشتر بدانید
                </LuxuryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
