import Link from "next/link";
import React from "react";
import Button from "../button/Button";

interface Props {
    event_name: string,
    event_date: null | string,
    event_time: null | string,
    location: string,
    line_up: Array<string>,
    ticket_type: string
}

const CardResult = ({ event_name, event_date, event_time, location, line_up, ticket_type }: Props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b-2">
            <div className={` flex items-start justify-between p-5 lg:flex-row flex-col cursor-pointer relative`}>
                <div className="lg:mb-0 mb-5 flex lg:items-center items-start lg:flex-row flex-row-reverse">
                    <Button content="" onClick={() => setIsOpen(!isOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`transition w-6 h-6 text-black ${isOpen && 'rotate-180'}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </Button>
                    <div className="ml-1">
                        <p className="text-purple font-bold text-xl">{event_date || 'MAR 23, 2022'}</p>
                        <p>{event_time || 'Sabtu, 7.30 WIB'}</p>
                    </div>
                </div>
                <div className="lg:mb-0 mb-5">
                    <p className="text-xl font-semibold font-poppins">{event_name}</p>
                    <Button content="" className={`${ticket_type === 'VVIP' ? 'bg-vvip' : ticket_type === 'VIP' ? 'bg-vip' : 'border border-slate-500 text-slate-500'} mt-2 rounded-lg disabled:cursor-not-allowed text-white`} disabled>{ticket_type}</Button>
                </div>
                <div>
                    <Link href="/concert/selected-ticket">
                        <Button content="" className="bg-primary text-white rounded-lg" >Lihat Tiket</Button>
                    </Link>
                </div>

            </div>
            <div className="p-4 bg-white rounded-lg flex lg:flex-row flex-col font-poppins">
                <div className="lg:ml-20">
                    <div className={`${!isOpen && 'hidden'} lg:ml-10`}>
                        <h4 className="font-bold">Line Up</h4>
                        {
                            line_up.map((item, index) => {
                                return (
                                    <div key={index} className="flex items-center my-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p className="ml-2">{item}</p>
                                    </div>
                                );
                            })
                        }

                    </div>
                    
                </div>
                <div className={`${!isOpen && 'hidden'} lg:ml-10`}>
                    <div className="my-2">
                        <h3 className="font-bold">Venue</h3>
                        <p className="">{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardResult;