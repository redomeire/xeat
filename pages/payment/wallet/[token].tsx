import React, { SetStateAction } from "react";
import UserLayout from "../../../components/layout/UserLayout";
import { useQRCode } from 'next-qrcode';
import AppLayout from "../../../components/layout/AppLayout";
import Button from "../../../components/button/Button";
import nextId from "react-id-generator";
import { base64Encode } from "@firebase/util";
import axios from "axios";

declare global {
    interface Window {
        snap: any
    }
}

const Index = ({ data }: any) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
    const { Canvas } = useQRCode();
    const [qr, setQr] = React.useState<SetStateAction<any>>({});

    console.log('data : ' + data)

    // React.useEffect(() => {
    //     const midtransScriptUrl = 'https://app.midtrans.com/snap/snap.js';
    //     const myMidtransClientKey = process.env.NEXT_PUBLIC_MIDTRANS_PROD_CLIENT_KEY;

    //     let scriptTag = document.createElement('script');
    //     scriptTag.src = midtransScriptUrl;

    //     if (typeof myMidtransClientKey !== 'undefined')
    //         scriptTag.setAttribute('data-client-key', myMidtransClientKey);

    //     document.body.appendChild(scriptTag);
    // }, []);

    const handleClick = () => {
        if (typeof window !== 'undefined')
            window.snap.pay(data, {
                onSuccess: function(result: any){
                    /* You may add your own implementation here */
                    alert("payment success!"); console.log(result);
                  },
                  onPending: function(result: any){
                    /* You may add your own implementation here */
                    alert("wating your payment!"); console.log(result);
                  },
                  onError: function(result: any){
                    /* You may add your own implementation here */
                    alert("payment failed!"); console.log(result);
                  },
                  onClose: function(){
                    /* You may add your own implementation here */
                    alert('you closed the popup without finishing the payment');
                  }
            })
    }

    return (
        <AppLayout>
            <div className="flex items-center justify-center font-poppins">
                <div className="flex flex-col items-center min-h-screen rounded-2xl top-0 right-0 w-[80%] pt-32 p-5">
                    <p className="text-2xl font-bold">Detail</p>
                    <div className="w-full mb-3">
                        <p>Invoice <span className="font-bold text-sm mb-10">XHBSJDKJSD</span></p>
                    </div>
                    <div className="lg:w-full w-[300px] mb-3 overflow-x-auto">
                        <table border={2} className='border-2 w-full'>
                            <thead>
                                <tr>
                                    <th className="border-b-2 border-r-2 p-3 text-left">Ringkasan</th>
                                    <th className="border-b-2 border-r-2 p-3 text-right">Harga per tiket</th>
                                    <th className="border-b-2 border-r-2 p-3 text-right">Kuantitas</th>
                                    <th className="border-b-2 p-3 text-right">Jumlah</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-b-2 p-3 border-r-2">Premier</td>
                                    <td className="border-b-2 p-3 border-r-2 text-right">Rp. 2.000</td>
                                    <td className="border-b-2 p-3 border-r-2 text-right">1</td>
                                    <td className="border-b-2 p-3 text-right">Rp. 2.000</td>
                                </tr>
                                <tr>
                                    <td colSpan={3} className='p-3 border-r-2 border-b-2'>
                                        <p>Biaya lainnya</p>
                                        <p className="text-sm text-gray-400">Tidak dapat dikembalikan</p>
                                    </td>
                                    <td className="p-3 text-right border-b-2">Rp 2.000</td>
                                </tr>
                                <tr>
                                    <td colSpan={3} className='p-3 border-r-2'>
                                        <p className="font-bold">Grand Total</p>
                                    </td>
                                    <td className="p-3 text-right font-bold">Rp 2.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="w-full">
                        <Button content="" className="rounded-lg p-3 bg-primary text-white mb-2 px-10">Bayar</Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export async function getServerSideProps() {

    // let resp = await axios({
    //     url: "https://app.midtrans.com/snap/v1/transactions",
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //       Authorization:
    //         "Basic " +
    //         Buffer.from(`${process.env.NEXT_PUBLIC_MIDTRANS_PROD_SERVER_KEY}`).toString("base64")
    //     },
    //     data:
    //       {
    //         transaction_details: {
    //           order_id: "order-csb-" + (+new Date()),
    //           gross_amount: 2000
    //         },
    //         credit_card: {
    //           secure: true
    //         },
    //         customer_details: {
    //           first_name: "Johny",
    //           last_name: "Kane",
    //           email: "testmidtrans@mailnesia.com",
    //           phone: "08111222333"
    //         }
    //       }
    //   }).then( snapResponse => { 
    //       let snapToken = snapResponse.data.token;
    //       return snapToken
    //     })

    return {
        props: {
            data: ""
        }
    }
}

export default Index;