import Image from "next/image";
import AppLayout from "../../components/layout/AppLayout";
import CardResult from "../../components/result/CardResult";
import Input from "../../components/input/Input";
import Select from "../../components/dropdown/Select";
import Button from "../../components/button/Button";
import detectEthereumProvider from "@metamask/detect-provider";
import React from "react";
import { ethers } from "ethers";
import Link from "next/link";
import axios from "axios";

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

interface Props {
    [x: string]: any;
}

const SelectedTicket = () => {
    const [defaultAccount, setDefaultAccount] = React.useState('');
    const [userBalance, setUserBalance] = React.useState('');
    const [items, setItems] = React.useState<Props>({});
    const [pageId, setPageId] = React.useState<string | string[] | undefined>('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

    const getData = () => {
        axios.get('https://youvandra.wtf/public/api/event')
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

    // const initializeMetamask = async () => {
    //     if (window.ethereum)
    //         window.ethereum.request({
    //             method: 'eth_requestAccounts'
    //         })
    //             .then((result: any[]) => {
    //                 accountChangedHandler(result[0]);
    //                 console.log(result[0])
    //             })
    //             .catch((err: any) => {
    //                 console.log(err);
    //             })
    // }

    // const accountChangedHandler = (newAccount: React.SetStateAction<string>) => {
    //     setDefaultAccount(newAccount);
    //     getUserBalance(newAccount);
    // }

    // const getUserBalance = (address: React.SetStateAction<string>) => {
    //     window.ethereum.request({
    //         method: 'eth_getBalance',
    //         params: [address, "latest"]
    //     })
    //         .then((balance: React.SetStateAction<any>) => {
    //             setUserBalance(ethers.utils.formatEther(balance));
    //         })
    // }

    // React.useEffect(() => {
    //     if (window !== undefined || window !== null)
    //         window.ethereum.on('accountsChanged', accountChangedHandler);
    // }, [])


    return (
        <AppLayout>
            <div className="jumbotron py-16 bg-[#19083D] text-white p-5 flex items-center flex-col">
                <div className="jumbotron pt-10 bg-[#19083D] text-white p-0 flex items-center flex-col lg:flex-row justify-between">
                    <Image src="/images/justin_bieber.png" alt="pic" width={400} height={250} />
                    <div className="lg:w-1/2">
                        <h1 className="md:text-2xl text-3xl font-semibold mt-5 lg:mt-5 mb-5 lg:leading-[30px] leading-[40px] font-poppins">Justin Bieber - Justice World Tour 2022 Jakarta</h1>
                        <div className="md:text-lg font-semibold mt-5 lg:mt-5 mb-2 lg:leading-[30px] leading-[40px] font-poppins">
                            <p className="font-normal"><span className="text-[#B069FF] font-semibold">MAR 23, 2022</span> Sabtu, 7.30 WIB</p>
                        </div>
                        <p className="mb-10">Stadion Madya Gelora Bung Karno, Jakarta, Indonesia</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-[90%] p-5 min-h-screen mx-auto flex items-center justify-between md:flex-row flex-col">
                <img src="/images/concert_stadium.png" className="w-[400px]" />
                <form className="bg-primary md:p-10 p-6 text-white rounded-xl md:w-1/2 md:my-0 my-20 min-w-[320px]">
                    <h1 className="font-bold text-2xl mb-8">Select Ticket</h1>
                    <div className="flex flex-col">
                        <div className="my-3">
                            <Select items={resultData} />
                        </div>

                        <div className="my-3">
                            <Select items={resultData} />
                        </div>

                        <div className="mt-5">
                            <Button content="" type="button" className="bg-white w-full text-black flex items-center rounded-3xl py-0 md:flex-row flex-col p-3">
                                <div>
                                    <img src="/images/metamask_icon.svg" className="w-[50px]" />
                                </div>
                                <p className="-mt-[5px] font-bold md:ml-5">Connect metamask wallet</p>
                            </Button>
                        </div>

                        <div className="mt-5 flex md:flex-row flex-col items-center">
                            <p>Belum memiliki metamask wallet?
                            </p>
                            <div className="font-bold md:ml-3">
                                <Link className="" href="/faq">FAQ</Link>
                            </div>

                        </div>

                        <hr className="mt-5" />

                        <div className="mt-5 flex items-center justify-between md:flex-row flex-col">
                            <div className="md:text-left text-center">
                                <h3 className="font-bold text-2xl">Total Cost</h3>
                                <h5 className="text-2xl">ETH. 5</h5>
                            </div>
                            {/* <Link href="/payment/payment-method" className="md:mt-0 mt-5">
                                <Button content="" className="bg-white text-black rounded-xl font-semibold font-poppins p-3">Buy Now</Button>
                            </Link> */}
                        </div>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}

export default SelectedTicket;