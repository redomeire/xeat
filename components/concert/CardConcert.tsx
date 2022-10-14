const CardConcert = ({ name, time, place, id, imageUrl }: Props) => {
    return (
        <a href={`/concert/${id}/details`} className="md:m-5 lg:my-0 my-3 bg-slate-200 rounded-xl md:min-w-[360px] md:max-w-[360px] min-w-[300px] relative">
            <div className="lg:my-0 text-slate-800 text-left flex w-full flex-col">
                <div className={`min-w-[200px] h-[300px] rounded-xl hover:brightness-75 cursor-pointer transition duration-300 bg-cover`} style={{backgroundImage:  `url(${imageUrl})`}} />
                <div className="p-3">
                    <div >
                        <h3 className="min-h-[50px] text-xl mb-5 font-montserrat font-semibold">{name.substring(0, 50)}</h3>
                    </div>
                    <div className="">
                        <h5 className="text-md mb-2 font-poppins font-semibold">{time}</h5>
                        <p>{place}</p>
                    </div>
                    <div>
                        {/* <Button content="" className="bg-[#19083D]"></Button> */}
                    </div>
                </div>
            </div>
        </a>
    );
}

interface Props {
    name: string,
    time: string,
    place: string,
    id: number,
    imageUrl: string
}

export default CardConcert;