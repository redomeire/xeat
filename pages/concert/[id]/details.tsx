import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import Button from "../../../components/button/Button";
import AppLayout from "../../../components/layout/AppLayout";
import { InstagramLoader, SkeletonLoader } from "../../../components/loader/SkeletonLoader";
import CardResult from "../../../components/concert/CardResult";
import { motion } from "framer-motion";

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

interface Props {
    [x: string]: any;

}

const Details = () => {
    const router = useRouter();
    const [items, setItems] = React.useState<Props>({});
    const [data, setData] = React.useState<Props>([]);
    const [pageId, setPageId] = React.useState<string | string[] | undefined>('');

    React.useEffect(() => {
        setPageId(router.query.id);
    }, [router.query])

    React.useEffect(() => {
        getData();
    }, [pageId])

    const getData = () => {
        axios.get('https://xeat-website-api.herokuapp.com/public/api/event')
            .then((res) => {
                if (res.data !== null) {
                    res.data.forEach((element: any) => {
                        if (typeof pageId === 'string')
                            if (element.id == pageId)
                                setItems(element)
                    });
                }

                console.log(items)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <AppLayout>
            <div className="jumbotron py-16 bg-[#19083D] text-white p-5 flex items-center flex-col">
                <div className="md:w-[90%] jumbotron pt-20 bg-[#19083D] text-white p-5 flex items-center flex-col-reverse lg:flex-row justify-between">
                    <motion.div
                    initial={{x: -50}}
                    animate={{x: 0}}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                    className="lg:w-1/2">
                        {
                            Object.keys(items).length !== 0 ?
                                <>
                                    <h1 className="md:text-4xl text-3xl font-bold mt-5 lg:mt-5 mb-5 underline lg:leading-[50px] leading-[40px]">{items.event_name}</h1>
                                    <p className="mb-10">{items.description}</p>
                                </>
                                :
                                <SkeletonLoader />
                        }

                        <Button content="" className="mt-20 px-5 border-b-4 border-b-white">
                            <p className="font-bold">Ticket</p>
                        </Button>
                    </motion.div>
                    {/* <Image src={items.image} alt="pic" width={400} height={250} /> */}
                    <motion.div
                    initial={{x: 50}}
                    animate={{x: 0}}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                    >
                    {
                        Object.keys(items).length === 0 ?
                            <div className="bg-white p-5 h-fit rounded-lg">
                                <InstagramLoader className="md:w-[300px] w-full md:h-[300px]" />
                            </div>
                            :
                            <img src={items.image} className="w-[400px]" />
                    }
                    </motion.div>
                </div>
            </div>
            <div className="lg:w-[90%] md:p-5 p-2 min-h-screen mx-auto">
                <h1 className="font-bold text-lg font-poppins md:ml-10 ml-5">All Concert</h1>
                {
                    resultData.map((item, index) => (
                        <CardResult key={index} item={item} />
                    ))
                }
            </div>
        </AppLayout>
    );
}

export default Details;