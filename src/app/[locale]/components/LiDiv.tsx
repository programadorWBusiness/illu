import { useTranslations } from "next-intl";
import { AboutSpan } from "./AboutSpan";

type Props = {
    style?: string;
    text: string;
}

export const LiDiv = ({ style, text}: Props) => {
    const t = useTranslations('tech');

    return (
        <li className={`${style} mb-6 text-[12px] text-bluedark font-conthrax relative before:content-['•'] before:absolute before:left-[-3px] before:top-[-5px] 
            before:text-bluelight before:text-3xl md:text-[13px]`}
            >
            {t(text)}
        </li>
    )
}