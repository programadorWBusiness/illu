"use client"

import { useTranslations } from "next-intl";
import { AboutSpan } from "./AboutSpan";



export const FormSend = () => {
    const t = useTranslations('contact');


    return (
        <div className="w-screen h-screen bg-bluelight fixed top-0">
                <div className="w-full h-full flex justify-center items-center flex-col">
                    <h1 className="text-lg md:text-[24px] font-conthrax text-black text-center">
                        {t("ok")}</h1>
                    <p className="text-lg md:text-3xl font-nexa">{t("ok-more")}</p>
        
                    <p className="text-xl md:text-[22px] font-semibold mt-7">{t("social")}</p>
                    <a href="https://www.instagram.com/wave.seg/" target='_blank'>
                        <AboutSpan link='' style={`bg-bluedark text-white text-lg`} text='Instagram'/>
                    </a>
                    <a href="https://www.linkedin.com/showcase/waveseg-oficial/?originalSubdomain=br" target='_blank'>
                        <AboutSpan link='' style={`bg-bluedark text-white text-lg`} text='Linkedin' />
                    </a>

                    <p className="text-[22px] font-semibold mt-7">{t("back")}</p>
                    <AboutSpan text={t("ok-back")} style="bg-bluedark text-white text-lg" link="/" />
                </div>
            </div>
    );
};
