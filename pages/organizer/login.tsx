import React from "react";
import axios from 'axios';
import Mail from "../../images/mail_icon.png";
import Password from "../../images/password_icon.png";
import AppLayout from "../../components/layout/AppLayout";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import Swal from "sweetalert2";
import Link from "next/link";

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const router = useRouter();

    const fetchingData = () => {
        axios.post('https://reqres.in/api/login', {
            email: email,
            password: password
        })
            .then((res: { data: { token: string; }; }) => {
                localStorage.setItem('Authorization', res.data.token);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Login successful!',
                    timer: 2000,
                    showConfirmButton: false
                })
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            })
            .catch((err: any) => {
                console.log(err);
            })
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        fetchingData();
    }

    return (
        <AppLayout>
            <div className="bg-[#19083D] pt-40 px-20 min-h-screen flex justify-between items-center lg:flex-row flex-col">
                <h1 className="text-white font-bold text-5xl lg:w-1/2 w-full lg:mb-0 mb-10">Get Your First NFT Ticket!</h1>
                <form onSubmit={handleSubmit} className="lg:w-1/2 w-[80%] min-w-[300px] p-10 rounded-xl bg-white lg:mb-0 mb-10">
                    <h2 className="underline font-bold text-3xl mb-5">Sign-In</h2>
                    <div className="flex flex-col items-center">
                        <div className="my-5 w-full">
                            <Input type="email" className="border rounded-2xl w-full" onChange={(e) => setEmail(e.target.value)} placeholder="masukkan email anda" beginningIcon={<Image src={Mail} alt="email" className="w-[10px]" width={'25px'} height={'20px'} />} required />
                        </div>
                        <div className="my-5 w-full">
                            <Input type="password" className="border rounded-2xl w-full" onChange={(e) => setPassword(e.target.value)} placeholder="masukkan password anda" beginningIcon={<Image src={Password} alt="password" className="w-[10px]" />} required />
                        </div>
                        <Button content="Submit" type="submit" className="bg-[#19083D] text-white rounded-full w-[50%] flex items-center justify-center" onClick={fetchingData} >Submit</Button>
                    </div>
                    <div className="mt-10">
                        <hr />
                        <p>Belum memiliki akun ? <span className="text-[#19083D] font-bold"><Link href="/register">Sign up</Link></span></p>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}

export default Login;