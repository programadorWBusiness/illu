type Props = {
    style?: string;
    link: string;
}

export const MediaMentionsLogos = ({style, link}: Props) => {
    return (
        <a className={`${style} w-20 h-20 rounded-full bg-gray-700 cursor-pointer bg-contain bg-no-repeat 
                    bg-center hover:border-bluelight border-4 lg:w-24 lg:h-24`}
            href={link} target="_blank"
        ></a>
    )
}