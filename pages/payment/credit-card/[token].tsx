import React, { SetStateAction } from "react";
import UserLayout from "../../../components/layout/UserLayout";
import { useQRCode } from 'next-qrcode';
import AppLayout from "../../../components/layout/AppLayout";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";

const Index = () => {

    return (
        <AppLayout>
            <div className="flex items-center justify-center font-poppins">
                <div className="flex flex-col items-center min-h-screen rounded-2xl top-0 right-0 w-full lg:w-[80%] pt-32 p-5">
                    <p className="w-full mb-3 font-semibold text-xl">Payment Method</p>
                    <form className="p-3 border rounded-lg bg-white w-full text-sm">
                        <div>
                            <p className="mb-2">Credit / Debit Card</p>
                            <hr className="my-5" />
                        </div>
                        <div>
                            <div className="flex lg:flex-row flex-col items-start justify-between">
                                <div className="lg:w-[47%] w-full">
                                    <label htmlFor="nama-depan" className="font-semibold">Nama Depan</label>
                                    <Input required className="border mt-2 w-full" type="text" name="nama-depan" />
                                </div>
                                <div className="lg:ml-10 lg:mt-0 mt-3 lg:w-[47%] w-full">
                                    <label htmlFor="nama-belakang" className="font-semibold">Nama Belakang</label>
                                    <Input required className="border mt-2 w-full" type="text" name="nama-belakang" />
                                </div>
                            </div>
                            <div className="flex lg:flex-row flex-col items-start justify-between mt-5">
                                <div className="lg:w-[47%] w-full">
                                    <label htmlFor="nomor-kartu" className="font-semibold">Nomor Kartu</label>
                                    <Input required className="border mt-2 w-full" type="text" name="nomor-kartu" />
                                </div>
                                <div className="lg:ml-10 lg:mt-0 mt-3 lg:w-[47%] w-full">
                                    <label htmlFor="cvv" className="font-semibold">CVV</label>
                                    <Input required className="border mt-2 w-full" type="text" name="cvv" />
                                </div>
                            </div>
                            <div className="flex lg:flex-row flex-col items-start justify-between mt-5">
                                <div className="lg:w-[47%] w-full">
                                    <label htmlFor="bulan-kadaluarsa" className="font-semibold">Bulan Kadaluarsa</label>
                                    <select required className="outline-none border mt-2 w-full p-3" name="bulan-kadaluarsa" >
                                        <option value="januari">januari</option>
                                        <option value="februari">februari</option>
                                        <option value="maret">maret</option>
                                        <option value="april">april</option>
                                        <option value="mei">mei</option>
                                        <option value="juni">juni</option>
                                        <option value="juli">juli</option>
                                        <option value="agustus">agustus</option>
                                        <option value="september">september</option>
                                        <option value="oktober">oktober</option>
                                        <option value="november">november</option>
                                        <option value="desember">desember</option>
                                    </select>
                                </div>
                                <div className="lg:ml-10 lg:mt-0 mt-3 lg:w-[47%] w-full">
                                    <label htmlFor="tahun-kadaluarsa" className="font-semibold">Tahun Kadaluarsa</label>
                                    <Input required className="border mt-2 w-full" type="text" name="tahun-kadaluarsa" />
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="w-full mt-5">
                        <p className="mb-2 text-xl font-semibold">Payment Detail</p>
                        <div className="p-3 border rounded-lg bg-white w-full">
                            <div className="font-medium flex justify-between text-sm mb-3">
                                <p className="capitalize">total ticket price</p>
                                <p className="capitalize">Rp. 495.000</p>
                            </div>
                            <div className="font-medium flex items-center justify-between text-sm mb-3">
                                <div>
                                    <p className="capitalize">total ticket price</p>
                                    <p className="text-sm font-normal text-gray-400">Tidak dapat dikembalikan</p>
                                </div>
                                <p className="capitalize">Rp. 19.850</p>
                            </div>
                            <hr className="my-4"/>
                            <div className="font-medium flex justify-between text-sm">
                                <p className="capitalize font-bold text-md">total keseluruhan</p>
                                <p className="capitalize font-bold text-md">Rp. 514.850</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <p>Penting: Batas waktu pembayaran adalah sebelum <span className="font-bold">22 Nov 2022 20:00 (WIB)</span></p>
                    </div>
                    <div className="w-full mt-5">
                        <Button content="" className="bg-primary rounded-lg p-3 text-white lg:w-fit w-full">Bayar</Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Index;