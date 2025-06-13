"use client";

import { AppDispatch, RootState } from "@/store";
import { useStorePersistence } from "@/store/slices/persistence";
import { SocialLinks } from "../footer/socialLinks";
import { DashboardProps } from "@/types/common";
import { Download } from "lucide-react";

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
      <div className="bg-white dark:bg-black rounded-xl shadow-md py-12 md:py-16 px-6 md:px-12 ">
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          {/* Left Column: hi, name, designation, objective */}
          <div className="md:w-[70%] w-full space-y-4 text-center md:text-left">
            <p className="text-gray-700 dark:text-gray-400">{t.hi}</p>
            <h2 className="text-[32px] md:text-[48px] font-bold text-gray-900 dark:text-white leading-tight">
              {t.name}
            </h2>
            <div>
              <div className="flex flex-row items-center gap-2">
                <h3 className="text-[18px] md:text-[20px] text-gray-600 dark:text-gray-300 font-medium">
                  {t.designation}
                </h3>
                <a
                  href="/UI_Developer_PraveenKumarAlugoju_4.pdf"
                  download
                  className="inline-flex items-center px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition text-sm font-semibold ml-0"
                >
                  <Download className="mr-1" />
                  <span className="xs:inline">Resume</span>
                </a>
              </div>
            </div>
            {/* Mobile Image in between text */}
            <div className="md:hidden flex justify-center">
              <img
                src="/my_pic_2.jpg"
                alt="Praveen Here!"
                className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-lg"
              />
            </div>
            <p className="text-[16px] text-gray-700 dark:text-gray-400 leading-relaxed text-left text-justify md:text-left">
              {t.objective}
            </p>
          </div>

          {/* Right Column: Desktop Image only */}
          <div className="hidden md:flex md:w-[30%] items-center justify-center">
            <img
              src="/my_pic_2.jpg"
              alt="Praveen Here!"
              className="w-60 h-60 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
          </div>
        </div>

        {/* Social Links always full width and centered */}
        <div className="mt-8 w-full flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </>
  );
}
