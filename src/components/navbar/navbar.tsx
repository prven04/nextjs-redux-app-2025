"use client";

import { LetterText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  t: {
    dashboard: string;
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
  };
  locale: string;
};

export function Navbar({ locale, t }: Props) {
  const pathname = usePathname();

  const menuItems = [
    { label: t.dashboard, href: `/${locale}/dashboard` },
    { label: t.about, href: `/${locale}/about` },
    { label: t.skills, href: `/${locale}/skills` },
    { label: t.projects, href: `/${locale}/projects` },
    { label: t.experience, href: `/${locale}/experience` },
    { label: t.contact, href: `/${locale}/contact` },
  ];
  console.log("Menu Items", t);
  return (
    <div className="bg-gray-900 text-white px-8 py-4 shadow-md flex justify-between items-center">
      <nav className="flex space-x-8">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`pb-1 transition border-b-2 ${
                isActive
                  ? "text-blue-400 font-semibold border-blue-400"
                  : "border-transparent hover:border-blue-400 hover:text-blue-400"
              }`}
            >
              {item.label === "Home" ? <LetterText /> : `${item.label}`}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
