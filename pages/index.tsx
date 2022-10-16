import Image from "next/image";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import AppLayout from "../components/layout/AppLayout";
import JumbotronImageSVG from "../images/jumbotron_image.svg";
import styled from "styled-components";
import CardEvent from "../components/home/CardEvent";
import { motion } from "framer-motion";

const CustomImage = styled(Image)`
    min-width: 300px;
`;

const Dashboard = () => {

    const handleLogout = () => {
        localStorage.removeItem('Authorization');
        window.location.reload();
    }

    const handleSearch = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // search here

    }

    return (
        <AppLayout>
            <div className="jumbotron pt-20 px-10 bg-[#19083D] text-white p-5 flex items-center flex-col-reverse lg:flex-row justify-between">
                <motion.div
                initial={{x: -50}}
                animate={{x: 0}}
                transition={{duration: 0.3, ease: 'easeInOut'}}
                className="md:w-1/2">
                    <h1 className="md:text-5xl text-4xl font-bold mb-5">Find the tickets at fair prices</h1>
                    <p className="mb-10">An NFT event ticketing marketplace help eliminating fraud and reducing the impact of scalping.</p>
                    <form onSubmit={handleSearch}>
                        <Input type="text" className='p-3 rounded-xl text-slate-700 w-full pr-[100px] focus:ring-4 focus:ring-slate-400' placeholder="Find ticket" endIcon={
                            <Button content="" className="text-slate-500 w-[100%] bg-[#273568] rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </Button>
                        } />
                    </form>
                </motion.div>
                {/* <img src={JumbotronImage} alt='imag' className="w-[50%]" /> */}
                <motion.div
                initial={{x: 50}}
                animate={{x: 0}}
                transition={{duration: 0.3, ease: 'easeInOut'}}
                >
                <CustomImage src={JumbotronImageSVG} alt="pic" className="md:w-1/2" />
                </motion.div>
            </div>
            {/* <Button content="Logout" onClick={handleLogout} >Loogut</Button> */}
            <div className="px-10">
                <div>
                    <h4 className="font-bold text-xl my-10">Categories</h4>
                    <div className="flex flex-col lg:flex-row p-2">
                        <CardEvent />
                        <CardEvent />
                        <CardEvent />
                    </div>
                </div>
                <div className="my-10">
                    <h4 className="ml-2 font-bold text-xl my-5">Top selling</h4>
                    <div className="md:ml-10">
                        <div>
                            <h5 className="ml-1 font-bold text-lg my-5">Concert</h5>
                            <div className="flex flex-col lg:flex-row">
                                <CardEvent />
                                <CardEvent />
                                <CardEvent />
                            </div>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg my-5">Sport</h5>
                            <div className="flex flex-col lg:flex-row">
                                <CardEvent />
                                <CardEvent />
                                <CardEvent />
                            </div>
                        </div>
                        <div>
                            <h5 className="ml-2 font-bold text-lg my-5">Park</h5>
                            <div className="flex flex-col lg:flex-row">
                                <CardEvent />
                                <CardEvent />
                                <CardEvent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Dashboard;