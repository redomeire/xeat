import Head from "next/head";
import React, { SetStateAction } from "react";
import Swal from "sweetalert2";
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
    const [ticketCountArr, setTicketCountArr] = React.useState<SetStateAction<any>>([]);
    const [stakeholderCount, setStakeholderCount] = React.useState(0);
    const [stakeholderArr, setStakeholderArr] = React.useState<SetStateAction<any>>([]);
    const [ticketDesign, setTicketDesign] = React.useState<SetStateAction<any>>();
    const [concertMap, setConcertMap] = React.useState<SetStateAction<any>>();

    React.useEffect(() => {
        setTicketCountArr([])

        for (let i = 1; i <= ticketCount; i++)
            setTicketCountArr((prev: any) => [...prev, i])
    }, [ticketCount])

    React.useEffect(() => {
        setTicketCountArr([1])
    }, [])

    React.useEffect(() => {
        setStakeholderArr([])

        for (let i = 1; i <= stakeholderCount; i++)
            setStakeholderArr((prev: any) => [...prev, i])
    }, [stakeholderCount])

    React.useEffect(() => {
        setStakeholderArr([1])
    }, [])

    const handleSubmit = (ev: { preventDefault: () => void; }) => {
        ev.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'success creating event'
        })
    }

    return (
        <UserLayout isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
            <div className="min-h-screen rounded-2xl top-0 right-0 pt-32 w-full p-5">
                <div className="flex flex-col">
                    <h2 className="text-center text-primary text-2xl font-bold mb-5 capitalize">mulai jual tiket event anda</h2>
                    <p className="text-primary text-2xl font-bold capitalize mb-2">informasi tiket</p>
                    <form onSubmit={handleSubmit}>
                        <div className="border-2 p-3 rounded-lg">
                            <div>
                                <div className="ticket-design ">
                                    <p className="capitalize text-xl mb-2">desain tiket</p>
                                    <div className="bg-gray-400 text-white w-[250px] h-[200px] rounded-2xl relative bg-cover bg-center" style={{ backgroundImage: `url('${ticketDesign}')` }}>
                                        <Input onChange={(e) => {
                                            if (e.target.files !== undefined && e.target.files !== null) {
                                                let objectURL = null;
                                                if (e.target.files.length > 0)
                                                    objectURL = URL.createObjectURL(e.target.files[0]);
                                                setTicketDesign(objectURL)
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
                                    <div className="bg-cover bg-center bg-gray-400 text-white h-[200px] rounded-2xl relative"
                                     style={{ backgroundImage: `url('${concertMap}')` }}
                                    >
                                        <Input onChange={(e) => {
                                            if (e.target.files !== undefined && e.target.files !== null) {
                                                let objectURL = null;
                                                if (e.target.files.length > 0)
                                                    objectURL = URL.createObjectURL(e.target.files[0]);
                                                setConcertMap(objectURL)
                                            }
                                        }} type="file" accept="image/*" name='concert-map' className="opacity-0 cursor-pointer absolute top-0 h-[200px] w-full" />
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
                            <div>
                                <p className="font-poppins">Berapa jenis tiket</p>
                                <select
                                    placeholder="kategori event"
                                    className="p-2 ring-1 ring-primary rounded-lg min-w-[200px]"
                                    onChange={(e) => setTicketCount(parseInt(e.target.value))}
                                    defaultValue={1}
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </select>
                            </div>
                            <div className="flex">
                                {
                                    ticketCountArr?.map((data: any, index: any) => {
                                        return (
                                            <div className="border rounded-lg p-3 m-2" key={index}>
                                                <Input
                                                    type="text"
                                                    placeholder="jenis tiket"
                                                    className="border-b"
                                                    required
                                                />
                                                <Input
                                                    type="text"
                                                    placeholder="jumlah tiket"
                                                    className="border-b"
                                                    required
                                                />
                                                <Input
                                                    type="text"
                                                    placeholder="Section seat"
                                                    className="border-b"
                                                    required
                                                />
                                                <Input
                                                    type="text"
                                                    placeholder="benefit"
                                                    className="border-b"
                                                    required
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="my-4 w-fit">
                            <p className="capitalize text-primary font-bold text-2xl mb-2">informasi kelas tiket</p>
                            <div>
                                <p className="font-poppins">Dibagi ke berapa stakeholder?</p>
                                <select
                                    placeholder="kategori event"
                                    className="p-2 ring-1 ring-primary rounded-lg min-w-[200px]"
                                    onChange={(e) => setStakeholderCount(parseInt(e.target.value))}
                                    defaultValue={1}
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </select>
                            </div>
                            <div className="flex">
                                {
                                    stakeholderArr?.map((data: any, index: any) => {
                                        return (
                                            <div className="border rounded-lg p-3 m-2" key={index}>
                                                <Input
                                                    type="text"
                                                    placeholder="jenis tiket"
                                                    className="border-b"
                                                    required
                                                />
                                                <Input
                                                    type="text"
                                                    placeholder="jumlah tiket"
                                                    className="border-b"
                                                    required
                                                />
                                                <Input
                                                    type="text"
                                                    placeholder="Section seat"
                                                    className="border-b"
                                                    required
                                                />
                                                <Input
                                                    type="text"
                                                    placeholder="benefit"
                                                    className="border-b"
                                                    required
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <Button
                                content=""
                                className="capitalize bg-primary rounded-lg p-3 text-white"
                            >ajukan penjualan tiket</Button>
                        </div>
                    </form>
                </div>
            </div>
        </UserLayout>
    );
}

export default MakeEvent;