const CardConcert = ({name, time, place}: Props) => {
    return (
        <div className="md:m-5 lg:my-0 my-2 rounded-xl bg-slate-200 text-slate-800 text-left flex w-full flex-col">
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
    );
}

interface Props {
    name: string,
    time: string,
    place: string
}

export default CardConcert;