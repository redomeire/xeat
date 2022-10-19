import Image from "next/image";
import React from "react";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import UserLayout from "../components/layout/UserLayout";
import Password from "/images/password_icon.png";


const CheckTicket = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

    return (
        <UserLayout isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
            <div className="min-h-screen rounded-2xl top-0 right-0 pt-32 w-full p-5">
                <div className="flex items-center flex-col">
                    <h2 className="text-center text-primary text-2xl underline font-bold mb-5">Check ticket</h2>
                    <Button
                        content=""
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="absolute left-10 lg:hidden bg-primary p-3 rounded-xl text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </Button>
                    <form className="flex items-center justify-center flex-col">
                        <Input
                            type="text"
                            className=" bg-white rounded-2xl border border-slate-500 md:w-[600px] w-full md:min-w-0 min-w-[280px]"
                            beginningIcon={<img src="/images/password_icon.png" alt="password" className="w-[24px]" />}
                            placeholder="Masukkan hash tiket"
                        />
                        <Button
                            content=""
                            className="bg-primary text-white rounded-3xl px-20 py-3 mt-5"
                        >Check</Button>
                    </form>
                    <div className="md:w-[500px] w-full h-[200px] rounded-lg bg-gray-300 my-10"></div>
                    <Button
                        content=""
                        className="bg-primary text-white rounded-3xl  px-20 py-3"
                    >Check In</Button>
                </div>
            </div>
        </UserLayout>
    );
}

export default CheckTicket;