"use client"

import { useTranslations } from "next-intl";
import Link from "next/link";



export const Footer = () => {
    const t = useTranslations('HomePage');

    return (
        <footer className="w-screen h-full bg-redclear flex justify-center items-center md:h-[120px] flex-col" id="contact">
            <div className="w-[90%] h-full flex justify-between items-center flex-col mb-6 md:w-[70%] md:mb-0 md:flex-row">
                <Link href={'/'} className="flex justify-items-center items-center mt-6 md:mt-0" title="Home">
                    <div className="w-[177px] h-[60px] bg-illumer bg-contain bg-no-repeat bg-top relative">
                        <span className="text-white absolute right-[-20px] bottom-2 font-bold font-gothan">S.A</span>
                    </div>
                </Link>

                <div className="w-full h-full flex justify-between text-[10px] font-renogare uppercase items-center text-white
                     mt-6 md:text-[13px] md:mt-0 md:w-[40%] lg:space-x-4 2xl:w-[30%]">
                    <a href="" title={t('politic')}>
                        {t('politic')}</a>
                    <a href="" title={t('condiction')}>
                        {t('condiction')}</a>
                </div>
            </div>

            <a className='bg-browndark font-arial text-center w-screen flex justify-center items-center text-[14px] text-white'
                href="https://www.wbusiness.com.br/"
                target="_blank"
                title="WBusiness">
                {t("desc")}
            </a>
        </footer>
    );
};
