"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/assets";
import { navItems } from "@/lib/constants";
import { LuxuryButton } from "./LuxuryButton";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[120] border-b transition duration-300 ${
          scrolled || open
            ? "border-[#9f762f] bg-novin-obsidian/95 shadow-luxury backdrop-blur-2xl"
            : "border-[#9f762f] bg-gradient-to-b from-black/70 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-novin items-center justify-between px-5 md:h-[88px] lg:px-10">
          <Link href="#home" aria-label="نوین‌ایر" className="flex items-center">
            <Image
              src={assetPath("/images/logo-novinair-fa.svg")}
              alt="نوین‌ایر"
              width={172}
              height={38}
              priority
              className="h-auto w-32 md:w-40"
            />
          </Link>

          <nav aria-label="ناوبری اصلی" className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-3 text-sm text-white/82 transition hover:text-white ${
                  item.href === "#home" ? "text-white" : ""
                }`}
              >
                {item.label}
                {item.href === "#home" ? (
                  <span className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-novin-red" />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <LuxuryButton href="#booking" className="min-h-11 px-5">
              رزرو پرواز
            </LuxuryButton>
          </div>

          <button
            aria-label={open ? "بستن منو" : "باز کردن منو"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-[#9f762f] bg-black/45 text-white shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition hover:bg-novin-gold/10 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 bottom-0 top-20 z-[110] overflow-y-auto bg-[linear-gradient(180deg,rgba(4,7,10,0.99),rgba(4,7,10,0.97)_48%,rgba(0,0,0,0.99))] px-5 py-6 shadow-[0_28px_90px_rgba(0,0,0,0.72)] backdrop-blur-2xl md:top-[88px] lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24 }}
              className="mx-auto flex max-w-[520px] flex-col gap-3 rounded-[8px] border border-[#9f762f] bg-[linear-gradient(180deg,rgba(8,19,29,0.98),rgba(0,0,0,0.98))] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.58),inset_0_1px_0_rgba(210,171,103,0.2)]"
              aria-label="منوی موبایل"
            >
              <div className="mb-1 flex items-center justify-between border-b border-[#9f762f] px-2 pb-4">
                <span className="text-sm font-semibold text-novin-gold">منوی نوین‌ایر</span>
                <span className="h-2 w-2 rounded-full bg-novin-red shadow-red" />
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[8px] border border-[#9f762f] bg-black/35 px-4 py-4 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(210,171,103,0.08)] transition hover:border-novin-gold hover:bg-novin-gold/[0.08]"
                >
                  {item.label}
                </Link>
              ))}
              <LuxuryButton
                href="#booking"
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                رزرو پرواز
              </LuxuryButton>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
