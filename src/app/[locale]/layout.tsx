// src/app/[locale]/layout.tsx
import "../../app/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import { getTranslations } from "@/lib/getTranslations";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const translations = await getTranslations(locale, "navBar");

  return (
    <>
      <Navbar t={translations} locale={locale} />
      {children}
    </>
  );
}
