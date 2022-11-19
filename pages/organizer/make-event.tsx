import Head from "next/head";
import React, { SetStateAction } from "react";
import Button from "../../components/button/Button";
import Select from "../../components/dropdown/Select";
import Input from "../../components/input/Input";
import UserLayout from "../../components/layout/UserLayout";
import UnderConstruction from "../../components/under-construction/UnderConstruction";

const selectData = [
    {
        name: 'Concert'
    },
    {
        name: 'Sport'
    },
    {
        name: 'Park'
    },
]

const MakeEvent = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
    const [ticketCount, setTicketCount] = React.useState(0);
    const [file, setFile] = React.useState<SetStateAction<any>>();

    // const handleChangeImage = (ev: { target: { files: (Blob | MediaSource)[]; }; }) => {
    //     setFile(URL.createObjectURL(ev.target.files[0]));
    // }

    React.useEffect(() => {
        // for (let i = 0; i < file?.length; i++)
            console.log(file)
    }, [file])

    return (
        <UserLayout isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
            <div className="min-h-screen rounded-2xl top-0 right-0 pt-32 w-full p-5">
                <div className="flex flex-col">
                    <h2 className="text-center text-primary text-2xl font-bold mb-5 capitalize">mulai jual tiket event anda</h2>
                    <p className="text-primary text-2xl font-bold capitalize mb-2">informasi tiket</p>
                    <form>
                        <div className="border-2 p-3 rounded-lg">
                            <div>
                                <div className="ticket-design ">
                                    <p className="capitalize text-xl mb-2">desain tiket</p>
                                    <div className="bg-gray-400 text-white w-[250px] h-[200px] rounded-2xl relative bg-cover bg-center" style={{backgroundImage: `url('${file}')`}}>
                                        <Input onChange={(e) => {
                                            if (e.target.files !== undefined && e.target.files !== null) {
                                                let objectURL = null;
                                                if (e.target.files.length > 0)
                                                   objectURL = URL.createObjectURL(e.target.files[0]);
                                                setFile(objectURL)
                                            }
                                        }} type="file" accept="image/*" name='ticket-design' className="opacity-0 cursor-pointer absolute top-0 h-[200px] w-full" />
                                        {/* <img src={file} /> */}
                                    </div>
                                    <p className="text-sm mt-3">Masukkan design tiket</p>
                                </div>
                            </div>
                            <div className="mt-10 flex justify-between">
                                <div className="w-[45%]">
                                    <div className="mb-2">
                                        <p className="mb-2">Masukkan kategori event</p>
                                        <Input
                                            placeholder="Nama event*"
                                            type="text"
                                            className="ring-1 rounded-lg w-full"
                                            required
                                        />
                                    </div>
                                    <div className="">
                                        <p className="mb-2">Masukkan kategori event</p>
                                        <select
                                            placeholder="kategori event"
                                            className="p-2 ring-1 ring-primary rounded-lg w-full"
                                        >
                                            {
                                                selectData.map((data, index) => {
                                                    return <option key={index}>{data.name}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="ticket-design w-[45%] mb-5">
                                    <p className="capitalize text-xl mb-2">Denah konser</p>
                                    <div className="bg-gray-400 text-white h-[200px] rounded-2xl relative">
                                        <Input type="file" accept="image/*" name='ticket-design' className="cursor-pointer absolute top-0 h-[200px] w-full" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <p className="mb-2">Nama penyelenggara</p>
                                    <Input
                                        type="text"
                                        placeholder="Masukkan nama"
                                        className="ring-1 rounded-lg" />
                                </div>
                                <div className="ml-5">
                                    <div className="flex items-center w-fit">
                                        <div>
                                            <p className="mb-2">tanggal event</p>
                                            <Input
                                                type="date"
                                                placeholder="Masukkan nama"
                                                className="ring-1 rounded-lg" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="mb-2">waktu mulai</p>
                                            <Input
                                                type="time"
                                                placeholder="Start time"
                                                className="ring-1 rounded-lg" />
                                        </div>
                                        <div className="ml-4">
                                            <p className="mb-2">waktu berakhir</p>
                                            <Input
                                                type="time"
                                                placeholder="End time"
                                                className="ring-1 rounded-lg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <p className="mb-2">Lokasi</p>
                                <Input
                                    type="text"
                                    placeholder="Lokasi event"
                                    className="ring-1 rounded-lg w-1/2" />
                            </div>
                        </div>
                        <div className="my-4 w-fit">
                            <p className="capitalize text-primary font-bold text-2xl mb-2">informasi kelas tiket</p>
                            <select
                                placeholder="kategori event"
                                className="p-2 ring-1 ring-primary rounded-lg w-full"
                                onChange={(e) => setTicketCount(parseInt(e.target.value))}
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>

                            <div className="border rounded-lg p-3">
                                <Input
                                    type="text"
                                    placeholder="jenis tiket"
                                    className="border-b"
                                />
                                <Input
                                    type="text"
                                    placeholder="jenis tiket"
                                    className="border-b"
                                />
                                <Input
                                    type="text"
                                    placeholder="jenis tiket"
                                    className="border-b"
                                />
                                <Input
                                    type="text"
                                    placeholder="jenis tiket"
                                    className="border-b"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </UserLayout>
    );
}

export default MakeEvent;