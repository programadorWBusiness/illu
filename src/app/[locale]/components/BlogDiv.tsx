import { useTranslations } from "next-intl";
import Image from "next/image";

type Props = {
    callText: string;
    goText: string;
    widthFull?: boolean
}

export const BlogDiv = ({callText, goText, widthFull }: Props) => {
    const t = useTranslations('HomePage');

    return (
        <div className={`w-full h-auto flex justify-center items-center flex-col mb-8 md:mb-0 ${widthFull ? '' : 'md:w-[30%]'}`}>
            <Image alt='blog' src={'/images/blog-img.jpg'} width={350} height={200} className='w-full h-auto' />
            <div className='bg-gray-200 px-4 pt-2 pb-4'>
              <h6 className='uppercase font-conthrax text-bluedark text-[13px] mb-1'>{callText}</h6>
              <p className='text-justify font-nexa text-[13px]'>Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna
                </p>
            </div>
            <button className='w-full bg-bluelight text-white py-2 px-6 text-[13px] font-conthrax uppercase'>{goText}</button>
          </div>
    )
}