// src/app/[locale]/layout.tsx
import "../../app/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar/navbar"; // ✅ Make sure this path is correct

import { getTranslations } from "@/lib/getTranslations";
import Footer from "@/components/footer/footer";

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
  console.log("Menu Items", translations);
  return (
    <>
      {/* <Navbar t={translations} locale={locale} />
      {children}
      <Footer /> */}
      <div className="flex flex-col min-h-screen bg-white dark:bg-black">
        {/* Navbar at top */}
        <Navbar t={translations} locale={locale} />

        {/* Main content grows to fill available space */}
        <main className="flex-grow">{children}</main>

        {/* Footer pushed to bottom if content is short */}
        <Footer />
      </div>
    </>
  );
}
