"use client"

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/navigation";
import LanguageToggle from "./LanguageToggle";
import { MenuMobile } from "./MenuMobile";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const t = useTranslations('header');

    const menuItems = [
        { key: 'About', href: '#brand' },
        { key: 'Products', href: '#products' },
        { key: 'Market', href: '#services' },
        { key: 'Contact', href: '#contact' }
    ];

    const router = useRouter();
    const pathname = usePathname();  // Obtém a rota atual

    const [MenuMobileOpen, setMenuMobileOpen] = useState<boolean>(false);

    return (
        <header className="w-screen h-[100px] bg-redclear flex justify-center items-center">
            <div className="w-[80%] h-full flex justify-between items-center">
                <Link href={'/'} className="flex justify-items-center items-center" title="ilumer">
                    <div className="w-[177px] h-[60px] bg-illumer bg-contain bg-no-repeat bg-top"></div>
                </Link>


                <ul className="w-full h-full hidden justify-around items-end font-arial uppercase relative text-[8.5px] md:flex md:text-[10px] lg:text-[14px]">
                    {menuItems.map((item) => {
                        // Verifica se o item é a página atual
                        const isActive =
                            item.href === '/'
                                ? pathname === '/'
                                : pathname.startsWith(item.href);

                        return (
                            <li
                                key={item.key}
                                className={`font-conthrax cursor-pointer ${item.key === 'Blog' ? 'max-w-[90px]' : 'max-w-[106px]'} leading-3 pb-[39px] font-medium text-center 
                                ${isActive ? 'border-b-2 border-white' : 'border-b-2 border-browndark hover:border-white'} 
                                text-white`}
                                onClick={() => router.push(item.href)}
                            >
                                <a>
                                    {t(item.key)}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className="w-[177px] h-[60px] z-30 hidden relative  md:flex justify-center items-center">
                    <LanguageToggle />
                </div>


                <MenuMobile
                    MenuMobileOpen={MenuMobileOpen}
                    setMenuMobileOpen={setMenuMobileOpen}
                />

                <div className={`w-screen ${MenuMobileOpen ? 'h-[250px]' : 'h-0'} z-20 bg-browndark absolute right-0 top-[100px] transition-all 
                     duration-500 ease-in-out overflow-hidden flex justify-start items-center px-[10%]`}>
                    <nav className="flex flex-col">
                        <ul className="w-full h-full pr-6 flex flex-col justify-start items-start space-y-6 font-semibold text-md font-conthrax uppercase">
                            {menuItems.map((item) => {
                                // Verifica se o item é a página atual
                                const isActive =
                                    item.href === '/'
                                        ? pathname === '/'
                                        : pathname.startsWith(item.href);

                                return (
                                    <li
                                        key={item.key}
                                        className={`cursor-pointer max-w-full leading-none font-semibold text-center 
                                ${isActive ? 'border-b-4 border-white' : 'border-b-4 border-redclear hover:border-white'} 
                                text-white`}
                                        onClick={() => {
                                            router.push(item.href);
                                            setMenuMobileOpen(false); // Fecha o menu após o clique
                                        }}
                                    >
                                        <a className="font-conthrax">
                                            {t(item.key)}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className="w-full h-full pt-2">
                    <LanguageToggle />
                    </div>
                </div>
            </div>

        </header>
    );
}
