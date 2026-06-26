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

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${
        scrolled
          ? "border-[#9f762f] bg-novin-obsidian/82 shadow-luxury backdrop-blur-2xl"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] border border-[#9f762f] bg-novin-gold/[0.045] text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-20 z-40 bg-novin-obsidian/98 px-5 py-8 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-2" aria-label="منوی موبایل">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[8px] border border-[#9f762f] px-4 py-4 text-lg text-white transition hover:border-novin-gold hover:bg-novin-gold/[0.045]"
                >
                  {item.label}
                </Link>
              ))}
              <LuxuryButton
                href="#booking"
                className="mt-5 w-full"
                onClick={() => setOpen(false)}
              >
                رزرو پرواز
              </LuxuryButton>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
