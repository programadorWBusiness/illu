import { useTranslations } from "next-intl";
import { AboutSpan } from "./AboutSpan";

type Props = {
    aboutStyle?: string;
    firstText: string;
    textSize?: string;
    completBlue?: boolean;
    color: string;
}

export const BlueDivCenter = ({ aboutStyle, firstText, textSize, completBlue, color}: Props) => {
    const t = useTranslations('HomePage');

    return (
        <div className={`w-full h-[56px] ${completBlue ? color : 'bg-[linear-gradient(to_right,#36A9E1_60%,white_95%)]'}   
                        flex justify-center items-center`}>
            <div className='w-full flex justify-center items-center md:w-[90%] xl:w-[65%]'>
                <h4 className={`${textSize ? '' : 'text-[12px]'} ${textSize} font-semibold text-white font-conthrax md:text-md md:pl-0 lg:text-xl`}>{firstText}</h4>
                <AboutSpan style={`bg-bluedark text-white ${aboutStyle}`} />
            </div>
        </div>
    )
}