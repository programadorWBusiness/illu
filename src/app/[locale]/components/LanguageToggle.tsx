"use client";

import { Link } from '@/navigation';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LanguageToggle() {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();
    const router = useRouter();

    // Extrair o idioma atual do caminho da URL
    const currentLocale = pathName.split('/')[1];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative z-30 flex justify-end items-center md:relative md:pr-0'>
            {/* Div que mostra o idioma atual e a seta */}
            <div className={`w-[61px] h-[34px] rounded-3xl ${isOpen ? 'rounded-es-none' : ''} bg-red-900 flex justify-center items-center cursor-pointer space-x-3`} onClick={toggleDropdown}>
                <span className={`text-white transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>

                <Image
                    alt={currentLocale}
                    src={`/images/${currentLocale}.webp`}
                    width={30}
                    height={30}
                    className="w-[25px] h-[25px] rounded-full border border-white"
                />
            </div>

            {/* Menu suspenso com transição suave */}
            <div
                className={`absolute top-[37px] right-[21px] z-30 w-10 bg-red-900 rounded-md rounded-t-none shadow-lg md:right-[83px]
                    md:top-[35px] md:left-0 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48' : 'max-h-0'}`}
                style={{ transitionProperty: 'max-height' }}
            >
                <Link href="/" locale='pt' onClick={() => setIsOpen(false)}>
                    <div className={`flex items-center justify-center py-2 hover:bg-redclear rounded-md ${currentLocale === 'pt' ? 'bg-redclear' : ''}`}>
                        <Image
                            alt="pt"
                            src={"/images/pt.webp"}
                            width={22}
                            height={22}
                            className="rounded-full w-[22px] h-[22px]"
                        />
                    </div>
                </Link>
                <Link href="/" locale='en' onClick={() => setIsOpen(false)}>
                    <div className={`flex items-center justify-center py-2 hover:bg-redclear rounded-md ${currentLocale === 'en' ? 'bg-redclear' : ''}`}>
                        <Image
                            alt="en"
                            src={"/images/en.webp"}
                            width={22}
                            height={22}
                            className="rounded-full w-[22px] h-[22px]"
                        />
                    </div>
                </Link>
                <Link href="/" locale='es' onClick={() => setIsOpen(false)}>
                    <div className={`flex items-center justify-center py-2 hover:bg-redclear rounded-md ${currentLocale === 'es' ? 'bg-redclear' : ''}`}>
                        <Image
                            alt="es"
                            src={"/images/es.webp"}
                            width={22}
                            height={22}
                            className="rounded-full w-[22px] h-[22px]"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}
