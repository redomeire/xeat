interface Props {
    image?: string,
    title: string,
    href?: string
}

const CardEvent = ({image, title, href}: Props) => {
    return ( 
        <a href={href} className={`rounded-lg relative bg-cover transition hover:brightness-75 lg:w-fit lg:m-2 lg:mx-10 lg:my-3 my-2 min-w-[200px] min-h-[100px] w-full`} style={{backgroundImage:  `url(${image})`}}>
            <p className="absolute left-5 bottom-3 font-bold text-white">{title?.length < 20 ? title?.substring(0, 20) : title?.substring(0, 20) + '...'}</p>
        </a>
     );
}
 
export default CardEvent;