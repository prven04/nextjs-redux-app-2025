"use client";

import { AppDispatch, RootState } from "@/store";
import { useStorePersistence } from "@/store/slices/persistence";
import { SocialLinks } from "../footer/socialLinks";
import { DashboardProps } from "@/types/common";

export function Dashboard({ t }: DashboardProps) {
  const { persistInput } = useStorePersistence();

  const handleSave = () => {
    persistInput({
      firstName: "Praveen-134",
      email: "test@gmail.com",
    });
  };

  return (
    <>
      <>
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-6 py-16 px-12 bg-white dark:bg-black rounded-xl shadow-md">
          {/* Left Content */}
          <div className="flex-1 space-y-4  md:text-left">
            <div>
              <p className="text-gray-700 dark:text-gray-400">{t.hi}</p>
              <h2 className="text-[48px] font-bold text-gray-900 dark:text-white leading-tight">
                {t.name}
              </h2>
              <h3 className="text-[20px] text-gray-600 dark:text-gray-300 font-medium">
                {t.designation}
              </h3>
            </div>

            {/* Image for mobile (will appear below name on mobile, hidden on desktop) */}
            <div className="md:hidden flex justify-center">
              <img
                src="/my_pic.jpg"
                alt="Praveen Here!"
                className="w-36 h-36 rounded-full object-cover border-4 border-blue-500 shadow-lg"
              />
            </div>

            {/* Objective Content */}
            <p className="text-[16px] text-gray-700 dark:text-gray-400 leading-relaxed">
              {t.objective}
            </p>

            {/* Social Links */}
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          {/* Desktop-only image */}
          <div className="hidden md:block flex-shrink-0">
            <img
              src="/my_pic.jpg"
              alt="Praveen Here!"
              className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
          </div>
        </div>
      </>
    </>
  );
}
