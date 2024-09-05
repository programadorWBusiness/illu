import { useTranslations } from "next-intl";
import { AboutSpan } from "./AboutSpan";

type Props = {
    aboutStyle?: string;
    firstText: string;
    textSize?: string;
    completBlue?: boolean;
    link?: string;
    high?: boolean;
    highSize?: string;
    aboutText?: string;
}

export const BlueDiv = ({ aboutStyle, firstText, textSize, completBlue, link = '/', high, highSize, aboutText}: Props) => {
    const t = useTranslations('HomePage');
    

    return (
        <div className={`w-full h-[56px] ${high ? highSize : 'h-[56px]'}
            ${completBlue ? 'bg-[#36A9E1]' : 'bg-[linear-gradient(to_right,#36A9E1_60%,white_95%)]'} flex justify-center items-center`}>
            <div className='w-full flex justify-between items-center md:w-[90%]'>
                <h4 className={`${textSize ? '' : 'text-[12px] md:text-md lg:text-xl'} ${textSize} font-semibold text-white pl-6 uppercase font-conthrax md:pl-0`}>{firstText}</h4>
                <AboutSpan style={`bg-bluedark text-white ${aboutStyle}`} link={link} text={aboutText}/>
            </div>
        </div>
    )
}