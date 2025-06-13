"use client";

import { LetterText, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: t.about, href: `/${locale}/about` },
    { label: t.skills, href: `/${locale}/skills` },
    { label: t.projects, href: `/${locale}/projects` },
    { label: t.experience, href: `/${locale}/experience` },
    { label: t.contact, href: `/${locale}/contact` },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Home Icon */}
        <Link
          href={`/${locale}/dashboard`}
          className="flex items-center gap-2 text-blue-400 font-semibold text-lg"
        >
          <LetterText className="w-6 h-6" />
          {/* <span className="hidden sm:inline">{t.dashboard}</span> */}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`pb-1 transition border-b-2 ${
                isActive(item.href)
                  ? "text-blue-400 font-semibold border-blue-400"
                  : "border-transparent hover:border-blue-400 hover:text-blue-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4 px-2 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-2 rounded transition ${
                isActive(item.href)
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-800 text-gray-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
