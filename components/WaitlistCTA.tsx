"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { patternStyle } from "@/lib/assets";
import { LuxuryButton } from "./LuxuryButton";

export function WaitlistCTA() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!value.trim()) {
      setStatus("error");
      setMessage("لطفاً شماره موبایل یا ایمیل خود را وارد کنید.");
      return;
    }

    setStatus("success");
    setMessage("عضویت شما با موفقیت ثبت شد.");
    setValue("");
  }

  return (
    <section className="section-shell pb-24" aria-labelledby="waitlist-heading">
      <div className="mx-auto max-w-novin px-5 lg:px-10">
        <div className="relative overflow-hidden rounded-[8px] border border-[#9f762f] bg-[linear-gradient(135deg,rgba(144,24,27,0.28),rgba(13,24,34,0.95)_36%,rgba(4,8,12,0.98))] p-7 shadow-luxury md:p-12">
          <div className="absolute inset-0 opacity-[0.10] pattern-bg" style={patternStyle()} />
          <div className="relative grid items-center gap-9 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="mb-5 h-px w-16 bg-novin-red" />
              <h2
                id="waitlist-heading"
                className="text-3xl font-semibold leading-[1.55] text-white md:text-4xl"
              >
                جزو اولین‌های نوین باشید
              </h2>
              <p className="mt-4 text-base font-light leading-8 text-white/68 md:text-lg">
                برای دریافت اخبار افتتاحیه، مسیرهای پروازی و دسترسی زودتر به
                تجربه نوین‌ایر، عضو لیست انتظار شوید.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="flex flex-col gap-3 rounded-[8px] border border-[#9f762f] bg-black/20 p-2 backdrop-blur-xl sm:flex-row">
                <label className="sr-only" htmlFor="waitlist-input">
                  شماره موبایل یا ایمیل
                </label>
                <input
                  id="waitlist-input"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  placeholder="شماره موبایل یا ایمیل"
                  className="min-h-14 flex-1 rounded-[8px] border border-transparent bg-transparent px-4 text-right text-sm text-white outline-none placeholder:text-white/42 focus:border-[#d2ab67]"
                />
                <LuxuryButton type="submit" icon={Send} className="sm:min-w-40">
                  ثبت عضویت
                </LuxuryButton>
              </div>
              <p className="text-sm leading-7 text-white/55">
                اطلاعات رسمی نوین‌ایر فقط از کانال‌های رسمی برند اعلام می‌شود.
              </p>
              <AnimatePresence>
                {message ? (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`text-sm ${
                      status === "success" ? "text-novin-gold" : "text-novin-red"
                    }`}
                  >
                    {message}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
