import { useTranslations } from "next-intl";
import { AboutSpan } from "./AboutSpan";

type Props = {
    firstText: string;
    img: string;
}

export const ProductDiv= ({ firstText, img}: Props) => {
    const t = useTranslations('HomePage');
    

    return (
        <div className="flex justify-center items-center w-[290px] h-[113px] bg-bluedark rounded-3xl md:w-[250px] md:h-[80px] 
                        lg:w-[250px] 2xl:w-[300px]">
            <div className={`w-[27%] h-[70%] ${img} bg-contain bg-no-repeat bg-center`}></div>
            <span className="w-[60%] h-full flex justify-start items-center pl-3 text-white font-conthrax text-[15px] 
                    lg:text-[14px] xl:text-[15px]">{firstText}</span>
        </div>
    )
}