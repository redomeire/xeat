import Image from "next/image";
import React from "react";
import Button from "../../components/button/Button";
import AppLayout from "../../components/layout/AppLayout";
import JustinBieberImage from "../../images/justin_bieber.png";

const resultData = [
    {
        title: 'Justin Bieber - Justice World Tour 2022 Jakarta',
        date: 'Mar 23, 2022',
        day: 'Sabtu, 7.30 WIB'
    },
    {
        title: 'Justin Bieber - Justice World Tour 2022 Jakarta',
        date: 'Mar 23, 2022',
        day: 'Sabtu, 7.30 WIB'
    },
]

const Details = () => {
    return (
        <AppLayout>
            <div className="jumbotron py-16 bg-[#19083D] text-white p-5 flex items-center flex-col">
                <div className="jumbotron pt-20 bg-[#19083D] text-white p-5 flex items-center flex-col-reverse lg:flex-row justify-between">
                    <div className="lg:w-1/2">
                        <h1 className="md:text-4xl text-3xl font-bold mt-5 lg:mt-5 mb-5 underline lg:leading-[50px] leading-[40px]">Justin Bieber - Justice World Tour 2022 Jakarta</h1>
                        <p className="mb-10">Justin Bieber Justice World Tour kini hadir di jakarta untuk menyapa fans</p>
                    </div>
                    <Image src={JustinBieberImage} alt="pic" width={400} height={250}/>
                </div>
            </div>
            <div className="lg:w-[80%] p-5 min-h-screen mx-auto">
                {
                    resultData.map(() => (
                        <CardResult />
                    ))
                }
            </div>
            {/* <Button content="Logout" onClick={handleLogout} >Loogut</Button> */}
        </AppLayout>
    );
}

const CardResult = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="border-b-2">
            <div className={` flex items-start justify-between p-5 lg:flex-row flex-col cursor-pointer relative`} onClick={() => setIsOpen(!isOpen)}>
                <div className="lg:mb-0 mb-5 flex lg:items-center items-start lg:flex-row flex-row-reverse">
                    <Button content="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`transition w-6 h-6 text-black ${isOpen && 'rotate-180'}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </Button>
                    <div className="ml-1">
                        <p className="text-purple font-bold text-xl">MAR 23, 2022</p>
                        <p>Sabtu, 7.30 WIB</p>
                    </div>
                </div>
                <div className="lg:mb-0 mb-5">
                    <p className="text-xl font-semibold font-poppins">Justin Bieber - Justice World Tour 2022 Jakarta</p>
                    <Button content="" className="bg-vvip mt-2 rounded-lg disabled:cursor-not-allowed text-white" disabled>VVIP</Button>
                </div>
                <div>
                    <Button content="" className="bg-primary text-white rounded-lg" >Lihat Tiket</Button>
                </div>

            </div>
            <div className="p-4 bg-white rounded-lg flex lg:flex-row flex-col">
                <div className="lg:ml-20">
                    <div className={`${!isOpen && 'hidden'} lg:ml-10`}>
                        <h4 className="font-bold">Line Up</h4>
                        <div className="flex items-center my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="ml-2">Justin  Bieber</p>
                        </div>
                    </div>
                    <div className={`${!isOpen && 'hidden'} lg:ml-10`}>
                        <div className="flex items-center my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="ml-2">Justin  Bieber</p>
                        </div>
                    </div>
                </div>
                <div className={`${!isOpen && 'hidden'} lg:ml-10`}>
                    <div className="my-2">
                        <h3 className="font-bold">Venue</h3>
                        <p className="">Stadion Madya Gelora Bung Karno, Jakarta, Indonesia</p>
                    </div>
                    <div className="my-2">
                        <h3 className="font-bold">Venue</h3>
                        <p className="">Stadion Madya Gelora Bung Karno, Jakarta, Indonesia</p>
                    </div>
                    <div className="my-2">
                        <h3 className="font-bold">Venue</h3>
                        <p className="">Stadion Madya Gelora Bung Karno, Jakarta, Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;