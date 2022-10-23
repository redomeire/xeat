import Image from "next/image";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import AppLayout from "../components/layout/AppLayout";
import styled from "styled-components";
import CardEvent from "../components/home/CardEvent";
import { motion } from "framer-motion";
import axios from "axios";
import React from "react";
import { SkeletonLoader } from "../components/loader/SkeletonLoader";
import { Url } from "url";
import Head from "next/head";
import Link from "next/link";

const CustomImage = styled(Image)`
    min-width: 300px;
`;

const Dashboard = () => {

    const [data, setData] = React.useState([]);

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
            <Head>
                <title>Xeat- Home</title>
            </Head>
            <div className="jumbotron pt-20 px-10 bg-[#19083D] text-white p-5 flex items-center flex-col-reverse lg:flex-row justify-between">
                <div
                    className="md:w-1/2">
                    <h1 className="md:text-5xl text-4xl font-bold mb-5">Finds the tickets at fair prices</h1>
                    <p className="mb-10">An NFT event ticketing marketplace help eliminating fraud and reducing the impact of scalping.</p>
                    <form onSubmit={handleSearch}>
                        <Input type="text" className='p-3 rounded-xl text-slate-700 w-full pr-[100px] focus:ring-4 focus:ring-slate-400' placeholder="Find ticket" endIcon={
                            <Button content="" className="text-slate-500 w-[100%] bg-[#273568] rounded-lg p-2 px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </Button>
                        } />
                    </form>
                </div>
                {/* <img src={JumbotronImage} alt='imag' className="w-[50%]" /> */}
                <div
                >
                    <img src="/images/jumbotron_image.svg" alt="pic" className="md:w-[700px]" />
                </div>
            </div>
            {/* <Button content="Logout" onClick={handleLogout} >Loogut</Button> */}
            <div className="px-10">
                <div>
                    <h4 className="font-bold text-xl my-10">Categories</h4>
                    <div className="flex flex-col lg:flex-row p-2 flex-wrap">
                        <Link href={`/concert`}>
                            <div className={`cursor-pointer rounded-lg relative bg-cover transition hover:brightness-75 lg:w-fit lg:m-2 lg:mx-10 lg:my-3 my-2 min-w-[200px] min-h-[100px] w-full`} style={{ backgroundImage: `url(/images/concert.png)`, position: 'relative' }}>
                                <p className="absolute left-5 bottom-3 font-bold text-white">Concert</p>
                            </div>
                        </Link>
                        <Link href={`/sports`}>
                            <div className={`cursor-pointer rounded-lg relative bg-cover transition hover:brightness-75 lg:w-fit lg:m-2 lg:mx-10 lg:my-3 my-2 min-w-[200px] min-h-[100px] w-full`} style={{ backgroundImage: `url(/images/sport.png)`, position: 'relative' }}>
                                <p className="absolute left-5 bottom-3 font-bold text-white">Sports</p>
                            </div>
                        </Link>
                        <Link href={`/park`}>
                            <div className={`cursor-pointer rounded-lg relative bg-cover transition hover:brightness-75 lg:w-fit lg:m-2 lg:mx-10 lg:my-3 my-2 min-w-[200px] min-h-[100px] w-full`} style={{ backgroundImage: `url(/images/park.png)`, position: 'relative' }}>
                                <p className="absolute left-5 bottom-3 font-bold text-white">Park</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="my-10">
                    <h4 className="ml-2 font-bold text-xl my-5">Top selling</h4>
                    <div className="md:ml-10">
                        <div>
                            <h5 className="ml-1 font-bold text-lg my-5">Concert</h5>
                            <div className="flex flex-col lg:flex-row">
                                {
                                    Object.keys(data).length !== 0 ?
                                        data.map((item: { image: string, event_name: string, id: string }, index) => {
                                            return (
                                                <CardEvent image={item.image} title={item.event_name} id={item.id} key={index} />
                                            )
                                        })
                                        :
                                        <SkeletonLoader />
                                }
                            </div>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg my-5">Sport</h5>
                            <div className="flex flex-col lg:flex-row">
                                <CardEvent title="not available" image="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                    id={""}
                                />
                                <CardEvent title="not available" image="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                    id={""}
                                />
                                <CardEvent title="not available" image="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                    id={""}
                                />
                            </div>
                        </div>
                        <div>
                            <h5 className="ml-2 font-bold text-lg my-5">Park</h5>
                            <div className="flex flex-col lg:flex-row">
                                <CardEvent title="not available" image="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                    id={""}
                                />
                                <CardEvent title="not available" image="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                    id={""}
                                />
                                <CardEvent title="not available" image="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                    id={""}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Dashboard;