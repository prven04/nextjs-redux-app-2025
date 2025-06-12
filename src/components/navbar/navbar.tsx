"use client";

import Link from "next/link";

type Props = {
  t: {
    dashboard: string;
    welcome: string;
    about: string;
    contact: string;
  };
  locale: string;
};

export default function Navbar({ t, locale }: Props) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-6">
      <Link href={`/${locale}/dashboard`}>{t.dashboard}</Link>
      <Link href={`/${locale}/welcome`}>{t.welcome}</Link>
      <Link href={`/${locale}/about`}>{t.about}</Link>
      <Link href={`/${locale}/contact`}>{t.contact}</Link>
    </nav>
  );
}
