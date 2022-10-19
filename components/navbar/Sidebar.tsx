import React from "react";
import Button from "../button/Button";

const sidebarData = [
    {
        name: 'Atur Event',
        icon: "/images/sidebar/calendar.svg"
    },
    {
        name: 'Check In',
        icon: "/images/sidebar/check_in.svg"
    }
];

interface Props {
    isSidebarOpen: boolean,
    setIsSidebarOpen: Function
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: Props) => {

    return (
        <>
            <div className={`bg-primary min-h-screen fixed left-0 top-0 bottom-0 md:w-[25%] px-3 md:z-10 z-40 lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0 w-full' : '-translate-x-[1000px]'} transition`}>
                <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)} content="" className="bg-white text-primary mt-32 md:hidden p-3 rounded-xl mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </Button>
                <ul className="md:pt-32">
                    {
                        sidebarData.map((item, index) => {
                            return (
                                <Button
                                key={index}
                                    content=""
                                    className="flex justify-between cursor-pointer border-b-2 w-full" endIcon={
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    }
                                >
                                    <li key={index} className="text-lg text-white my-4 relative flex items-center">
                                        <img src={item.icon} className="bg-white rounded-lg" />
                                        <p className="ml-5">{item.name}</p>
                                    </li>
                                </Button>
                            );
                        })
                    }
                </ul>
            </div>
            <div onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`md:hidden ${isSidebarOpen ? 'absolute' : 'hidden'} top-0 bottom-0 left-0 right-0 bg-white`}>

            </div>
        </>
    );
}

export default Sidebar;