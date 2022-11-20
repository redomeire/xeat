import AppLayout from "../../../../components/layout/AppLayout";
import Button from "../../../../components/button/Button";
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Input from "../../../../components/input/Input";
import Swal from "sweetalert2";
import { formatString } from "../../../../utils/formatter";
import { SkeletonLoader } from "../../../../components/loader/SkeletonLoader";
import {
    ChainId,
    ThirdwebProvider,
    useContractMetadata,
    useActiveClaimCondition,
    useNFT,
    Web3Button,
    useContract,
} from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import FAQPopup from "../../../../components/popup/FAQPopup";

interface Props {
    [x: string]: any;
}

const myEditionDropContractAddress = "0x5dA2C4B41C467a17f91Fa96B90E912FF35253d18";

const activeChainId = ChainId.Mumbai;

const SelectedTicket = () => {
    const [pageId, setPageId] = React.useState<string | string[] | undefined>('');
    const [items, setItems] = React.useState<Props>({});
    const [ticketType, setTicketType] = React.useState<string | string[] | undefined>('');
    const [ticketAmount, setTicketAmount] = React.useState<number>(1);
    const [tokenId, setToken] = useState<number>(0);
    const [clickedPopup, setClickedPopup] = useState<boolean>(false);

    const router = useRouter();
    React.useEffect(() => {
        setPageId(router.query.id)
        checkTicketType()
    }, [router.query])

    React.useEffect(() => {
        getData();
    }, [pageId])

    React.useEffect(() => {
        if (ticketAmount < 1) {
            Swal.fire({
                icon: 'info',
                text: "input cannot be less than one",
                showConfirmButton: false,
                timer: 2000,
            });

            setTicketAmount(1);
        }

    }, [ticketAmount])

    const checkTicketType = () => {
        if (router.query.ticketId === '0') {
            setTicketType('VIP')
            setToken(0)
        }
        else if (router.query.ticketId === '1') {
            setTicketType('VVIP')
            setToken(1)
        }
        else if (router.query.ticketId === '2') {
            setTicketType('REGULAR')
            setToken(2)
        }
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // next code goes here

    }

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
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <ThirdwebProvider desiredChainId={activeChainId}>
            <AppLayout>
                <Head>
                    <title>Xeat - {items.event_name || 'Selected ticket'}</title>
                </Head>
                <div className="jumbotron py-16 bg-[#19083D] text-white p-5 flex items-center flex-col">
                    <div className="jumbotron pt-10 bg-[#19083D] text-white p-0 flex items-center flex-col lg:flex-row md:justify-around justify-between w-full">
                        {
                            Object.keys(items).length === 0 ? <SkeletonLoader />
                                :
                                <img src={items.image} alt="pic" width={400} height={250} className="rounded-3xl hover:brightness-75 transition duration-300" />
                        }
                        <div className="lg:w-1/2">
                            {
                                Object.keys(items).length === 0 ?
                                    <div className="lg:mt-0 mt-6">
                                        <SkeletonLoader />
                                    </div>
                                    :
                                    <>
                                        <h1 className="md:text-2xl text-3xl font-semibold mt-5 lg:mt-5 mb-5 lg:leading-[30px] leading-[40px] font-poppins">{items.event_name}</h1>
                                        <div className="md:text-lg font-semibold mt-5 lg:mt-5 mb-2 lg:leading-[30px] leading-[40px] font-poppins">
                                            <p className="font-normal"><span className="text-[#B069FF] font-semibold">{items.event_date || 'Mar 30 2022'}</span> {items.event_time || 'Sabtu, 7.30 WIB'}</p>
                                        </div>
                                        <p className="mb-10">{items.location}</p>
                                    </>
                            }
                        </div>
                    </div>
                </div>
                <div className="lg:w-[90%] p-5 min-h-screen mx-auto flex items-center justify-between md:flex-row flex-col">
                    <img src={formatString(items.image_line_up)} className="w-[400px]" />
                    <form onSubmit={handleSubmit} className="bg-primary md:p-10 p-6 text-white rounded-xl md:w-1/2 md:my-0 my-20 min-w-[320px]">
                        <h1 className="font-bold text-2xl mb-8">Select Ticket</h1>
                        <div className="flex flex-col">
                            <div className="my-3">
                                {/* <Select items={resultData} /> */}
                                <Input type="text"
                                    // defaultValue={ticketType} 
                                    value={ticketType}
                                    className="text-black rounded-2xl w-full cursor-not-allowed bg-slate-300"
                                    disabled />
                            </div>

                            <div className="my-3">
                                <Input type="number"
                                    onChange={(e) => setTicketAmount(parseInt(e.target.value))}
                                    className="text-black rounded-2xl w-full cursor-default bg-white"
                                    min={1}
                                    defaultValue={ticketAmount.toString()}
                                />
                            </div>

                            <div className="mt-5 flex md:flex-row flex-col items-center">
                                <p>Belum memiliki metamask wallet?
                                </p>
                                <div className="font-bold md:ml-3">
                                    <p className="font-bold cursor-pointer" onClick={() => setClickedPopup(true)}>FAQ</p>
                                </div>

                            </div>

                            <hr className="mt-5" />

                            <div className="mt-5 flex items-center justify-between lg:flex-row flex-col">
                                <div className="lg:text-left text-center">
                                    <h3 className="font-bold text-2xl">Total Cost</h3>
                                    <h5 className="text-xl">ETH 0.052 MATIC</h5>
                                </div>
                                <Web3Button
                                    contractAddress={items.token}
                                    action={async (contract) =>
                                        await contract.erc1155.claim(tokenId, ticketAmount)
                                    }
                                    onSuccess={(result) => alert("Claimed!")}
                                    onError={(error) => alert(error?.message)}
                                    accentColor="#82A8F4"
                                    colorMode="light"
                                    className="lg:mt-0 mt-5"
                                >
                                    Mint
                                </Web3Button>
                                {/* <ConnectWallet
                                        accentColor="#82A8F4"
                                        colorMode="light"
                                        auth={{
                                            loginOptional: true,
                                        }}
                                    /> */}
                                    {/* <ul onClick={() => setIsOpen(!isOpen)} className="h-fit relative bg-blue-400 rounded-lg outline-none p-3 flex items-center justify-center w-full mt-2 text-black font-semibold">
                                        open
                                        <div className={`${isOpen ? 'absolute top-14' : 'hidden'} rounded-xl bg-blue-400 w-full z-50 `}>
                                            <li className="p-3 hover:brightness-105">e-wallet</li>
                                            <li className="p-3">e-wallet</li>
                                        </div>
                                    </ul> */}
                            </div>
                        </div>
                    </form>
                </div>
                { clickedPopup && <FAQPopup isClicked={clickedPopup} setIsClicked={setClickedPopup}/> }
            </AppLayout>
        </ThirdwebProvider>
    );
}

export default SelectedTicket;