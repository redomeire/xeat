import { MouseEventHandler } from "react";
import Button from "../button/Button";

interface Props {
    isClicked: boolean,
    setIsClicked: any
}

const FAQPopup = ({ isClicked, setIsClicked }: Props) => {
    return (
        <div className={`${isClicked ? 'block' : 'hidden'} w-full z-50  fixed top-0 h-screen flex items-center justify-center cursor-pointer`} style={{ backgroundColor: 'rgba(50, 50, 93, 0.55' }}>
            <div className="rounded-3xl bg-white p-8 md:w-[70%] w-[90%] max-h-[95vh] overflow-y-auto relative">
                <div className="absolute right-10">
                    <Button onClick={() => setIsClicked(!isClicked)} content="" className="bg-slate-100 p-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Button>
                </div>
                <p className="uppercase font-bold text-3xl text-center mb-10">faq</p>
                <div className="">
                    <p className="font-semibold text-xl font-poppins mb-3">Bagaimana cara membuat akun metamask wallet?</p>
                    <p className="mb-4">Jika anda belum memiliki akun metamask wallet, anda dapat menontin video dibawah ini untuk tutorial lengkapnya</p>
                    <iframe className="rounded-lg shadow lg:w-[560px] w-full" height="315" src="https://www.youtube.com/embed/Af_lQ1zUnoM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>
        </div>
    );
}

export default FAQPopup;