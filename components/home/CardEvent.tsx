import Link from "next/link";
import React from "react";

interface Props {
    image?: string,
    title: string,
    id?: string
}

const CardEvent = ({ image, title, id }: Props) => {

    return (
        <Link href={`/concert/${id}/details`}>
            <div className={`cursor-pointer rounded-lg relative bg-cover transition hover:brightness-75 lg:w-fit lg:m-2 lg:mx-10 lg:my-3 my-2 min-w-[200px] min-h-[100px] w-full`} style={{ backgroundImage: `url(${image})`, position: 'relative' }}>
                <p className="absolute left-5 bottom-3 font-bold text-white">{title?.length < 20 ? title?.substring(0, 20) : title?.substring(0, 20) + '...'}</p>
            </div>
        </Link>
    );
}

export default CardEvent;