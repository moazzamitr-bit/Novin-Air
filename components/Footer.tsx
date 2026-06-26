import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assetPath, patternStyle } from "@/lib/assets";

const quickLinks = [
  "رزرو پرواز",
  "وضعیت پرواز",
  "کارت هدیه",
  "سؤالات متداول",
  "شرایط و قوانین"
];

const aboutLinks = ["درباره نوین‌ایر", "اخبار", "فرصت‌های شغلی", "همکاری با ما"];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-[#9f762f] bg-black/60"
    >
      <div className="absolute inset-0 opacity-[0.07] pattern-bg" style={patternStyle()} />
      <div className="relative mx-auto grid max-w-novin gap-10 px-5 py-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1.1fr] lg:px-10">
        <div>
          <Image
            src={assetPath("/images/logo-novinair-fa.svg")}
            alt="نوین‌ایر"
            width={185}
            height={42}
            className="h-auto w-40"
          />
          <p className="mt-5 text-xl font-semibold text-novin-gold">
            فراتر از یک پرواز
          </p>
          <p className="mt-1 font-en text-sm text-white/56">Beyond just a flight</p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Linkedin, Send, X].map((Icon, index) => (
              <Link
                key={index}
                href="#"
                aria-label="شبکه اجتماعی نوین‌ایر"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#9f762f] text-novin-gold transition hover:border-novin-gold hover:bg-novin-gold/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <FooterColumn title="دسترسی سریع" items={quickLinks} />
        <FooterColumn title="درباره ما" items={aboutLinks} />

        <div>
          <h3 className="text-sm font-semibold text-novin-gold">اطلاعات تماس</h3>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-white/65">
            <li className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0 text-novin-gold" />
              <span dir="ltr">021-91097000</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-novin-gold" />
              <span dir="ltr">info@novinair.com</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-novin-gold" />
              <span>تهران، بلوار میرداماد، برج میرداماد، طبقه ۱۲</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-[#9f762f] px-5 py-5 text-center text-xs text-white/45">
        کلیه حقوق این وب‌سایت متعلق به شرکت هواپیمایی نوین‌ایر است. © ۱۴۰۳
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-novin-gold">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-white/62">
        {items.map((item) => (
          <li key={item}>
            <Link href="#" className="transition hover:text-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
