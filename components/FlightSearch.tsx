"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  PlaneLanding,
  PlaneTakeoff,
  Search,
  UserRound
} from "lucide-react";
import { useState } from "react";

const tabs = ["رفت و برگشت", "یک‌طرفه", "چندمقصدی"];

const fields = [
  { label: "مبدا", value: "تهران (IKA)", icon: PlaneTakeoff },
  { label: "مقصد", value: "انتخاب مقصد", icon: PlaneLanding },
  { label: "تاریخ رفت", value: "۱۴۰۳/۰۳/۲۵", icon: CalendarDays },
  { label: "تاریخ برگشت", value: "۱۴۰۳/۰۳/۲۶", icon: CalendarDays },
  { label: "مسافران", value: "۱ مسافر | اکونومی", icon: UserRound }
];

export function FlightSearch() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [message, setMessage] = useState("");

  return (
    <section
      id="booking"
      aria-label="جستجوی پرواز"
      className="relative z-20 -mt-16 px-5 md:-mt-24 lg:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 44 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel mx-auto max-w-[1220px] rounded-[18px] p-4 shadow-luxury md:p-6"
      >
        <div className="mb-5 flex flex-wrap items-center justify-center gap-2 border-b border-[#9f762f] pb-4 md:justify-end">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`relative rounded-[8px] px-5 py-3 text-sm transition ${
                activeTab === tab
                  ? "bg-novin-gold/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  : "text-white/58 hover:bg-novin-gold/6 hover:text-white"
              }`}
            >
              {tab}
              {activeTab === tab ? (
                <motion.span
                  layoutId="booking-tab"
                  className="absolute inset-x-4 -bottom-[17px] h-0.5 bg-novin-red"
                />
              ) : null}
            </button>
          ))}
        </div>

        <div className="grid gap-3 lg:grid-cols-[repeat(5,minmax(0,1fr))_auto]">
          {fields.map(({ label, value, icon: Icon }) => (
            <button
              key={label}
              type="button"
              className="group relative min-h-[78px] overflow-hidden rounded-[8px] border border-[#9f762f] bg-black/24 px-4 py-3 text-right transition hover:border-[#d2ab67] hover:bg-novin-gold/[0.045]"
            >
              <span className="absolute right-0 top-4 h-8 w-0.5 bg-novin-red opacity-0 transition group-hover:opacity-100" />
              <span className="flex items-center justify-between gap-3 text-xs text-novin-grey-light">
                {label}
                <Icon className="h-4 w-4 text-novin-gold" />
              </span>
              <span className="mt-3 block text-sm font-semibold text-white">{value}</span>
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              console.log("Flight search coming soon");
              setMessage("جستجوی پرواز به‌زودی فعال می‌شود.");
            }}
            className="red-gradient-button flex min-h-[78px] items-center justify-center gap-3 rounded-[8px] px-7 text-sm font-bold text-white transition hover:-translate-y-0.5 lg:min-w-[184px]"
          >
            <Search className="h-4 w-4" />
            جستجوی پرواز
          </button>
        </div>

        <AnimatePresence>
          {message ? (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-5 text-center text-sm text-novin-gold"
            >
              {message}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
