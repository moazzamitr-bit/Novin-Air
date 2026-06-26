"use client";

import { motion } from "framer-motion";
import { Crown, Diamond, Feather, Sparkles } from "lucide-react";
import { valueProps } from "@/lib/constants";
import { SectionTitle } from "./SectionTitle";

const iconMap = {
  sparkles: Sparkles,
  diamond: Diamond,
  feather: Feather,
  crown: Crown
};

export function WhyNovin() {
  return (
    <section className="section-shell pt-24" aria-labelledby="why-heading">
      <div className="mx-auto max-w-novin px-5 lg:px-10">
        <SectionTitle
          title="چرا نوین‌ایر؟"
          subtitle="ما برای هر جزئی از سفر شما، به استانداردی فراتر می‌اندیشیم."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="luxury-card group rounded-[8px] p-7 transition duration-300 hover:-translate-y-1 hover:border-novin-gold hover:shadow-gold"
              >
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-[8px] border border-[#9f762f] bg-novin-gold/10 text-novin-gold shadow-[0_18px_50px_rgba(210,171,103,0.12)]">
                  <Icon className="h-7 w-7 stroke-[1.55]" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm font-light leading-8 text-white/66">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
