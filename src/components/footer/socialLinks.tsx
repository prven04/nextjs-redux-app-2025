"use client";

import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function SocialLinks() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en-US";
  const handleContactClick = () => {
    router.push(`/${locale}/contact`);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6 text-gray-800">
      {/* Button Row */}
      <div>
        <button
          onClick={handleContactClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full shadow-md transition duration-300"
        >
          Contact Me Here!
        </button>
      </div>
      {/* Social Links Row */}
      <div className="flex gap-4">
        <a
          href="https://github.com/prven04"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-blue-500 transition"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600 transition"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/prven04?igsh=MWMwbDQ3YXB2YmpqMA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500 transition"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://x.com/alugoju_praveen?s=11&t=rzFGLbDym5dX7zBzQrqhAQ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-sky-500 transition"
        >
          <Twitter size={24} />
        </a>
        <a
          href="mailto:prven04l@gmail.com"
          className="hover:text-green-500 transition"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
}
