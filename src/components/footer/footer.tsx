"use client";

import { usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const supportedLocales = ["en-US", "te-IN"];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const currentLocale = params.locale as string;

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en-US" ? "te-IN" : "en-US";

    // Remove the current locale from pathname and replace it with the new one
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <footer className="bg-gray-900 text-gray-400 text-sm px-8 py-6 text-center mt-auto">
      © 2025 Praveen Kumar. All rights reserved.
      {/* <button
        onClick={toggleLanguage}
        className="text-sm px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Switch to {currentLocale === "en-US" ? "Telugu" : "English"}
      </button> */}
    </footer>
  );
}
