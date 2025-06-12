// components/SocialLinks.tsx
"use client";
import { Github, Linkedin, Instagram, Twitter, Mail } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex gap-4 items-center justify-center py-4 text-gray-800">
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
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-500 transition"
      >
        <Instagram size={24} />
      </a>
      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="hover:text-sky-500 transition"
      >
        <Twitter size={24} />
      </a>
      <a
        href="mailto:your.email@example.com"
        className="hover:text-green-500 transition"
        aria-label="Email"
      >
        <Mail size={24} />
      </a>
    </div>
  );
}
