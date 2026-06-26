import type { Metadata } from "next";
import "@fontsource/vazirmatn/300.css";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import { assetPath } from "@/lib/assets";
import "./globals.css";

export const metadata: Metadata = {
  title: "نوین‌ایر | فراتر از یک پرواز",
  description:
    "صفحه نخست نوین‌ایر، تجربه‌ای ممتاز و آرام برای سفرهای هوایی با الهام از مهمان‌نوازی ایرانی.",
  icons: {
    icon: assetPath("/images/logo-symbol.svg")
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
