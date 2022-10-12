const CardConcert = ({ name, time, place, id }: Props) => {
    return (
        <a href={`/concert/${id}/details`} className="md:m-5 bg-slate-200 rounded-xl min-w-[360px] max-w-[360px]">
            <div className="lg:my-0 my-2 text-slate-800 text-left flex w-full flex-col">
                <div className="bg-[url('https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] min-w-[200px] h-[300px] rounded-xl hover:brightness-75 cursor-pointer transition duration-300 bg-cover" />
                <div className="p-3">
                    <div>
                        <h3 className="text-xl mb-5 font-montserrat font-semibold">{name}</h3>
                        <h5 className="text-md mb-2 font-poppins font-semibold">{time}</h5>
                    </div>
                    <div>
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
    id: number
}

export default CardConcert;