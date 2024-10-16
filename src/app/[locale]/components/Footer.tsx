"use client"

import { useTranslations } from "next-intl";
import Link from "next/link";
import JuridicModal from "./JuridicModal";
import { useState } from "react";



export const Footer = () => {
    const t = useTranslations('HomePage');
    const p = useTranslations('politics');


    const [isVisible, setIsVisible] = useState(false);
    const [modalContent, setModalContent] = useState<{ title: string; li1: string; li2: string; li3: string; li4: string; li5: string; li6: string; li7: string; li8: string; li9: string; li10: string; li11: string; li12: string; li13: string; li14: string; li15: string; li16: string,li17: string; li18: string; li19: string; li20: string; li21: string; li22: string; li23: string }>({
        title: '',
        li1: '',
        li2: '',
        li3: '',
        li4: '',
        li5: '',
        li6: '',
        li7: '',
        li8: '',
        li9: '',
        li10: '',
        li11: '',
        li12: '',
        li13: '',
        li14: '',
        li15: '',
        li16: '',
        li17: '',
        li18: '',
        li19: '',
        li20: '',
        li21: '',
        li22: '',
        li23: ''
    });

    // Função para abrir o modal
    const openModal = (title: string, li1: string, li2: string, li3: string, li4: string, li5: string, li6: string, li7: string, li8: string, li9: string, li10: string, li11: string, li12: string, li13: string, li14: string, li15: string, li16: string, li17: string, li18: string, li19: string, li20: string, li21: string, li22: string, li23: string) => {
        setModalContent({ title, li1, li2, li3, li4, li5, li6, li7, li8, li9, li10, li11, li12, li13, li14, li15, li16, li17, li18, li19, li20, li21, li22, li23});
        setIsVisible(true);
    };

    return (
        <footer className="w-screen h-full bg-redclear flex justify-center items-center md:h-[120px] flex-col" id="contact">
            <JuridicModal
                isVisible={isVisible}
                onClose={() => setIsVisible(false)}
                content={modalContent}
            />

            <div className="w-[90%] h-full flex justify-between items-center flex-col mb-6 md:w-[70%] md:mb-0 md:flex-row">
                <Link href={'/'} className="flex justify-items-center items-center mt-6 md:mt-0" title="Home">
                    <div className="w-[177px] h-[60px] bg-illumer bg-contain bg-no-repeat bg-top relative">
                        <span className="text-white absolute right-[-20px] bottom-2 font-bold font-gothan">S.A</span>
                    </div>
                </Link>

                <div className="w-full h-full flex justify-center text-[10px] font-renogare uppercase items-center text-white
                     mt-6 md:justify-end md:text-[13px] md:mt-0 md:w-[40%] lg:space-x-4 2xl:w-[30%]">
                    <a title={t('politic')} className="cursor-pointer"
                        onClick={() =>
                            openModal(
                                p('p1-name-1'),
                                p('p1-name-2'),
                                p('p1-1'),
                                p('p1-2'),
                                p('p1-3'),
                                p('p1-4'),
                                p('p1-5'),
                                p('p1-name-3'),
                                p('p1-6'),
                                p('p1-7'),
                                p('p1-name-4'),
                                p('p1-8'),
                                p('p1-9'),
                                p('p1-10'),
                                p('p1-11'),
                                p('p1-12'),
                                p('p1-13'),
                                p('p1-14'),
                                p('p1-15'),
                                p('p1-16'),
                                p('p1-17'),
                                p('p1-18'),
                                p('p1-19'),
                                p('p1-20')
                            )}>
                        {t('politic')}</a>
                    {/*<a title={t('condiction')} className="cursor-pointer"
                        onClick={() =>
                            openModal(
                                p('t1-name-1'),
                                p('t1-name-2'),
                                p('t1-1'),
                                p('t1-2'),
                                p('t1-3'),
                                p('t1-4'),
                                p('t1-5'),
                                p(''),
                                p(''),
                                p(''),
                                p(''),
                                p(''),
                                p(''),
                                p(''),
                                p(''),
                                p(''),
                                p(''),
                                '',
                                '',
                                '',
                                '',
                                '',
                                '',
                                ''
                            )}>
                        {t('condiction')}</a>*/}
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
