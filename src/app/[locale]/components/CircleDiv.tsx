import { useTranslations } from "next-intl";

type Props = {
    style?: string;
    firstText: string;
}

export const CircleDiv = ({ style, firstText }: Props) => {
    const t = useTranslations('about');

    return (
        <div className="w-full flex justify-center items-center flex-col mb-8 ld:mb-0 lg:w-[25%]">
            <div className={`w-[80px] h-[80px] ${style} bg-cover bg-center mb-8 md:w-[100px] md:h-[100px]`}></div>
            <span className="w-full text-[14px] text-center font-conthrax uppercase lg:text-[17px]">{t(firstText)}</span>
        </div>
    )
}