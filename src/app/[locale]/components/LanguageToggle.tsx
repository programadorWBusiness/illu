"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function LanguageToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const locales = ["pt", "en", "es"];
  const currentLocale = pathName.split("/")[1];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const buildNewPath = (locale: string) => {
    // Remove o prefixo do idioma existente e adiciona o novo
    const cleanPath = pathName.replace(/^\/(pt|en|es)/, "");
    return `/${locale}${cleanPath}`;
  };

  return (
    <>
      {/* Botões de troca de idioma */}
      <div className="w-[86px] h-[30px] flex justify-around items-center bg-black/80 rounded-3xl">
        {locales.map((locale) => (
          <Link key={locale} href={buildNewPath(locale)}>
            <div
              className={`flex items-center justify-center py-2 hover:bg-laranja/70 rounded-[1px]`}
            >
              <Image
                alt={locale}
                src={`/images/${locale}.webp`}
                width={22}
                height={22}
                className="rounded-full w-[22px] h-[22px]"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Menu suspenso */}
      <div className="hidden justify-end items-center z-60">
        <div
          className={`w-[54px] h-[34px] rounded-3xl ${
            isOpen ? "rounded-es-none" : ""
          } bg-black/30 flex justify-center items-center cursor-pointer space-x-2`}
          onClick={toggleDropdown}
        >
          <span
            className={`text-white transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>

          <Image
            alt={currentLocale}
            src={`/images/${currentLocale}.webp`}
            width={30}
            height={30}
            className="w-[25px] h-[25px] rounded-full border border-white"
          />
        </div>

        <div
          className={`absolute top-[37px] right-[21px] z-30 w-10 bg-black/30 rounded-md rounded-t-none shadow-lg md:right-[83px]
          md:top-[35px] md:left-0 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-48" : "max-h-0"
          }`}
          style={{ transitionProperty: "max-height" }}
        >
          {locales.map((locale) => (
            <Link
              key={locale}
              href={buildNewPath(locale)}
              onClick={() => setIsOpen(false)}
            >
              <div
                className={`flex items-center justify-center py-2 hover:bg-laranja/70 rounded-md ${
                  currentLocale === locale ? "bg-laranja/70" : ""
                }`}
              >
                <Image
                  alt={locale}
                  src={`/images/${locale}.webp`}
                  width={22}
                  height={22}
                  className="rounded-full w-[22px] h-[22px]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
