import React from "react";
import AppLayout from "../../components/layout/AppLayout";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Swal from "sweetalert2";
import Link from "next/link";
import Head from "next/head";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../components/auth";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";


const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const route = useRouter();

    const login = () => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                Swal.fire({
                    title: 'Success login',
                    icon: 'success'
                })
                
                window.localStorage.setItem('Authorization', await userCredential.user.getIdToken());
                setCookie('auth', userCredential.user.getIdToken())

                setTimeout(() => {
                    route.push('/organizer/make-event')
                }, 1000);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                Swal.fire({
                    title: 'Error login',
                    icon: 'error',
                    text: errorMessage
                })
            });
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // fetchingData();
        login()
    }

    return (
        <AppLayout>
            <Head>
                <title>Xeat - Login</title>
            </Head>
            <div className="bg-[#19083D] pt-40 px-20 min-h-screen flex justify-between items-center lg:flex-row flex-col">
                <h1 className="text-white font-bold text-5xl lg:w-1/2 w-full lg:mb-0 mb-10">Get Your First NFT Ticket!</h1>
                <form onSubmit={handleSubmit} className="lg:w-1/2 w-[80%] min-w-[300px] p-10 rounded-xl bg-white lg:mb-0 mb-10">
                    <h2 className="underline font-bold text-3xl mb-5">Sign-In</h2>
                    <div className="flex flex-col items-center">
                        <div className="my-5 w-full">
                            <Input type="email" className="border rounded-2xl w-full" onChange={(e) => setEmail(e.target.value)} placeholder="masukkan email anda" beginningIcon={<img src="/images/mail_icon.png" alt="email" className="w-[24px]" />} required />
                        </div>
                        <div className="my-5 w-full">
                            <Input type="password" className="border rounded-2xl w-full" onChange={(e) => setPassword(e.target.value)} placeholder="masukkan password anda" beginningIcon={<img src="/images/password_icon.png" alt="password" className="w-[24px]" />} required />
                        </div>
                        <Button content="Submit" type="submit" className="bg-[#19083D] text-white rounded-full w-[50%] flex items-center justify-center p-3" >Submit</Button>
                    </div>
                    <div className="mt-10">
                        <hr />
                        <p>Belum memiliki akun ? <span className="text-[#19083D] font-bold"><Link href="/organizer/register">Sign up</Link></span></p>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}

export default Login;