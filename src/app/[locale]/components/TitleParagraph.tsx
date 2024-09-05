type Props = {
    h1: string;
    p: string;
}

export const TitleParagraph = ({ h1, p }: Props) => {
    
    return (
        <div className="mb-7 text-bluedark">
            <h4 className="text-[14px] font-conthrax xl:text-[15px]">{h1}</h4>
            <p className="text-[14px] font-nexa">{p}</p>
        </div>
    )
}