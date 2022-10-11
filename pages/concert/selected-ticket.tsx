import Image from "next/image";
import AppLayout from "../../components/layout/AppLayout";
import CardResult from "../../components/result/CardResult";
import JustinBieberImage from "../../images/justin_bieber.png";
import StadiumImage from "../../images/concert_stadium.png";
import Input from "../../components/input/Input";
import Select from "../../components/dropdown/Select";

const resultData = [
    {
        number: 'Xuabsdeqdiaks',
    },
    {
        number: 'Xuabsdeqdiaks',
    },
    {
        number: 'Xuabsdeqdiaks',
    },
    {
        number: 'Xuabsdeqdiaks',
    },
    {
        number: 'Xuabsdeqdiaks',
    },
    {
        number: 'Xuabsdeqdiaks',
    },
]

const SelectedTicket = () => {
    return (
        <AppLayout>
            <div className="jumbotron py-16 bg-[#19083D] text-white p-5 flex items-center flex-col">
                <div className="jumbotron pt-10 bg-[#19083D] text-white p-0 flex items-center flex-col lg:flex-row justify-between">
                    <Image src={JustinBieberImage} alt="pic" width={400} height={250} />
                    <div className="lg:w-1/2">
                        <h1 className="md:text-2xl text-3xl font-semibold mt-5 lg:mt-5 mb-5 lg:leading-[30px] leading-[40px] font-poppins">Justin Bieber - Justice World Tour 2022 Jakarta</h1>
                        <div className="md:text-lg font-semibold mt-5 lg:mt-5 mb-2 lg:leading-[30px] leading-[40px] font-poppins">
                            <p className="font-normal"><span className="text-[#B069FF] font-semibold">MAR 23, 2022</span> Sabtu, 7.30 WIB</p>
                        </div>
                        <p className="mb-10">Stadion Madya Gelora Bung Karno, Jakarta, Indonesia</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-[80%] p-5 min-h-screen mx-auto flex items-center">
                <Image src={StadiumImage} width={500} height={500}/>
                <form className="bg-primary p-5 text-white rounded-xl">
                    <h1>Select Ticket</h1>
                    <div className="flex flex-col">
                        
                        <Select items={resultData}/>

                        <select className="text-black">
                            <option>20</option>
                            <option>20</option>
                            <option>20</option>
                            <option>20</option>
                            <option>20</option>
                        </select>
                        
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}

export default SelectedTicket;