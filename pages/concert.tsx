import Image from "next/image";
import AppLayout from "../components/layout/AppLayout";
import styled from "styled-components";
import CardConcert from "../components/concert/CardConcert";
import axios from "axios";
import React from "react";
import { InstagramLoader, SkeletonLoader } from "../components/loader/SkeletonLoader";
import { motion } from 'framer-motion';

interface Props {
    [x: string]: any;

}

const Dashboard = () => {

    const [data, setData] = React.useState<Props>([]);

    React.useEffect(() => {
        getData();
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('Authorization');
        window.location.reload();
    }

    const handleSearch = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // search here

    }

    const getData = () => {
        axios.get('https://xeat-website-api.herokuapp.com/public/api/event')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <AppLayout>
            <div className="jumbotron pt-20 bg-primary text-white p-5 flex items-center flex-col text-center min-h-screen">
                <div>
                    <h1 className="md:text-5xl text-4xl font-bold mb-5 mt-10 uppercase">concert</h1>
                    <p className="mb-10">Temukan konser artis favorit mu disini!</p>
                </div>
                {/* <img src={JumbotronImage} alt='imag' className="w-[50%]" /> */}
                <div>
                    <motion.div
                    initial={{y: 90}}
                    animate={{y: 0}}
                    transition={{ease: 'easeInOut',duration: 0.4}}
                    className="flex lg:flex-row flex-col">
                        {
                            data.length !== 0 ?
                            data?.map((item: { id: number; image: string, event_name: string; location: string; }, index: React.Key | null | undefined) => (
                                <CardConcert imageUrl={item.image} key={index} id={item.id} name={item.event_name} time={'2022-06-20'} place={item.location} />
                            ))
                            :
                            <div className="bg-white p-5 h-fit rounded-lg md:w-[400px] w-full md:h-[460px]">
                                <InstagramLoader/>
                            </div>
                        }
                    </motion.div>
                </div>
            </div>
            {/* <Button content="Logout" onClick={handleLogout} >Loogut</Button> */}
        </AppLayout>
    );
}

export default Dashboard;