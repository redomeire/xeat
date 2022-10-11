import React from "react";
import AppLayout from "../components/layout/AppLayout";
import axios from 'axios';
import Button from "../components/button/Button";
import Mail from "../images/mail_icon.png";
import Password from "../images/password_icon.png";
import Input from "../components/input/Input";
import Image from "next/image";

const Register = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [lastname, setLastname] = React.useState('');

    const fetchingData = () => {
        axios.post('https://reqres.in/api/reqister', {
            email: email,
            password: password
        })
            .then((res) => {
                // localStorage.setItem('Authorization', res.data.token);
                alert(res.data.token);
                window.location.reload();
            })
            .catch((err) => {
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
                    <h2 className="underline font-bold text-3xl mb-5">Sign-Up</h2>
                    <div className="flex items-center">
                        <div className="my-5 w-full">
                            <Input type="text" className="border rounded-2xl w-full" onChange={(e) => setSurname(e.target.value)} placeholder="Nama depan" required />
                        </div>
                        <div className="my-5 w-full ml-3">
                            <Input type="text" className="border rounded-2xl w-full" onChange={(e) => setLastname(e.target.value)} placeholder="Nama belakang" required />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="my-5 w-full">
                            <Input type="email" className="border rounded-2xl w-full" onChange={(e) => setEmail(e.target.value)} placeholder="masukkan email anda" beginningIcon={<Image src={Mail} alt="email" className="w-[10px]" width={'25px'} height={'20px'} />} required />
                        </div>
                        <div className="my-5 w-full">
                            <Input type="password" className="border rounded-2xl w-full" onChange={(e) => setPassword(e.target.value)} placeholder="masukkan password anda" beginningIcon={<Image src={Password} alt="email" className="w-[10px]" width={'25px'} height={'20px'} />} required />
                        </div>
                        <Button content="Submit" type="submit" className="bg-[#19083D] text-white rounded-full w-[50%] flex items-center justify-center" >Submit</Button>
                    </div>
                    <div className="mt-10">
                        <hr />
                        <p>Sudah memiliki akun ? <span className="font-bold text-[#19083D]"><a href="/login">Sign In</a></span></p>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}

export default Register;