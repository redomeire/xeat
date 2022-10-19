import Image from "next/image";
import AppLayout from "../../components/layout/AppLayout";
import Button from "../../components/button/Button";
import Metamask from "/images/metamask_icon.svg";
import React from "react";
import { ethers } from "ethers";

const PaymentMethod = () => {
    const [defaultAccount, setDefaultAccount] = React.useState('');
    const [userBalance, setUserBalance] = React.useState('');
    
    const handleCreditCard = () => {
        console.log('credit card')
    }

    const handleDigitalMoney = () => {
        console.log('digital money')
    }

    const initializeMetamask = async () => {
        if (window.ethereum)
            window.ethereum.request({
                method: 'eth_requestAccounts'
            })
                .then((result: any[]) => {
                    accountChangedHandler(result[0]);
                    console.log(result[0])
                })
                .catch((err: any) => {
                    console.log(err);
                })
    }

    const accountChangedHandler = (newAccount: React.SetStateAction<string>) => {
        setDefaultAccount(newAccount);
        getUserBalance(newAccount);
    }

    const getUserBalance = (address: React.SetStateAction<string>) => {
        window.ethereum.request({
            method: 'eth_getBalance',
            params: [address, "latest"]
        })
            .then((balance: React.SetStateAction<any>) => {
                setUserBalance(ethers.utils.formatEther(balance));
            })
    }

    return (
        <AppLayout>
            <div className="jumbotron py-16 bg-primary text-white p-5 flex items-center flex-col min-h-screen">
                <form className="bg-white rounded-xl py-5 px-20 mt-20">
                    <h1 className="underline font-semibold font-poppins text-black text-center">Choose Payment Method</h1> 
                    <div className="crypto-method flex flex-col items-center my-5">
                        <h2 className="text-black mb-5">Crypto Method</h2>
                        <Button content="" type="button" className="border border-primary bg-white w-full text-black flex items-center rounded-3xl md:flex-row flex-col p-5" onClick={initializeMetamask}>
                            <div>
                                <img src="/images/metamask_icon.svg" className="w-[50px]" />
                            </div>
                            <p className="-mt-[5px] font-semibold md:ml-5">Connect metamask wallet</p>
                        </Button>
                    </div>
                    <div className="crypto-method flex flex-col items-center my-5">
                        <h2 className="text-black mb-5">Other Payment Method</h2>
                        <Button content="" type="button" className="border border-primary bg-white w-full text-black flex items-center rounded-3xl md:flex-row flex-col p-5" onClick={handleCreditCard}>
                            <div className="flex items-center">
                                <img src="/images/visa.svg" className="w-[50px]" />
                                <img src="/images/master_card.svg" className="w-[50px]" />
                            </div>
                            <p className="-mt-[5px] font-semibold md:ml-5">Credit Card</p>
                        </Button>
                    </div>
                    <div className="crypto-method flex flex-col items-center my-5">
                        <Button content="" type="button" className="border border-primary bg-white w-full text-black flex items-center rounded-3xl md:flex-row flex-col p-4" onClick={handleDigitalMoney}>
                            <div className="flex items-center">
                                <img src="/images/link_aja.svg" className="w-[30px]" />
                                <img src="/images/gopay.svg" className="w-[50px] ml-2" />
                            </div>
                            <p className="-mt-[5px] font-semibold md:ml-5">Digital Money</p>
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}

export default PaymentMethod;