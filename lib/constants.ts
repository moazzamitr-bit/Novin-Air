import { assetPath } from "@/lib/assets";

export const navItems = [
  { label: "خانه", href: "#home" },
  { label: "درباره ما", href: "#story" },
  { label: "مقاصد", href: "#destinations" },
  { label: "تجربه پرواز", href: "#experience" },
  { label: "باشگاه مسافران", href: "#first-circle" },
  { label: "تماس", href: "#contact" }
];

export const valueProps = [
  {
    title: "مهمان‌نوازی ایرانی",
    description: "گرمی، احترام و فرهنگ ایرانی در قلب هر سفر",
    icon: "sparkles"
  },
  {
    title: "دقت در جزئیات",
    description: "کیفیت در هر لحظه و توجه به کوچک‌ترین جزئیات",
    icon: "diamond"
  },
  {
    title: "آرامش در سفر",
    description: "راحتی، سکوت و تجربه‌ای دلنشین از لحظه نشستن",
    icon: "feather"
  },
  {
    title: "استانداردی تازه",
    description: "راحتی، نظم و کیفیتی در سطح سفرهای ممتاز",
    icon: "crown"
  }
];

export const destinations = [
  {
    city: "تهران",
    description: "مرکز آغاز مسیرهای نوین",
    image: assetPath("/images/destinations/tehran.jpg")
  },
  {
    city: "شیراز",
    description: "میراث، فرهنگ و زیبایی",
    image: assetPath("/images/destinations/shiraz.jpg")
  },
  {
    city: "کیش",
    description: "آرامش در کنار خلیج فارس",
    image: assetPath("/images/destinations/kish.jpg")
  },
  {
    city: "استانبول",
    description: "پیوند شرق و غرب",
    image: assetPath("/images/destinations/istanbul.jpg")
  },
  {
    city: "دبی",
    description: "تجارت، لوکس و آینده",
    image: assetPath("/images/destinations/dubai.jpg")
  }
];

export const flightExperienceFeatures = [
  {
    title: "صندلی‌های تخت‌شو",
    description: "راحتی کامل در پروازهای طولانی و بین‌المللی",
    icon: "armchair"
  },
  {
    title: "سرگرمی اختصاصی",
    description: "نمایشگرهای شخصی و محتوای منتخب در طول سفر",
    icon: "monitor"
  },
  {
    title: "سرویس‌های ویژه",
    description: "پذیرایی ممتاز با نگاهی مدرن به مهمان‌نوازی ایرانی",
    icon: "utensils"
  },
  {
    title: "امنیت و اطمینان",
    description: "تمرکز بر استانداردهای عملیاتی، نظم و کیفیت تجربه",
    icon: "shield"
  }
];

export const firstCircleBenefits = [
  "تخفیف‌های اختصاصی",
  "ارتقاء کلاس سفر",
  "امتیاز در هر پرواز",
  "خدمات ویژه VIP",
  "عضویت بدون هزینه"
];
