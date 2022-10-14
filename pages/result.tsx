import Image from "next/image";
import AppLayout from "../components/layout/AppLayout";
import styled from "styled-components";
import CardConcert from "../components/concert/CardConcert";
import CardResult from "../components/result/CardResult";

const CustomImage = styled(Image)`
    min-width: 300px;
`;

const resultData = [
    {
        title: 'Justin Bieber - Justice World Tour 2022 Jakarta',
        date: 'Mar 23, 2022',
        day: 'Sabtu, 7.30 WIB'
    },
    {
        title: 'Justin Bieber - Justice World Tour 2022 Jakarta',
        date: 'Mar 23, 2022',
        day: 'Sabtu, 7.30 WIB'
    },
]

const Result = () => {

    const handleLogout = () => {
        localStorage.removeItem('Authorization');
        window.location.reload();
    }

    const handleSearch = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // search here

    }

    return (
        <AppLayout>
            <div className="jumbotron pt-20 bg-[#19083D] text-white p-5 flex items-center flex-col text-center">
                <div>
                    <h1 className="md:text-xl text-xl font-bold mb-5 mt-10 uppercase">search result :</h1>
                </div>
            </div>
            <div className="lg:w-[80%] p-5 min-h-screen mx-auto">
                {
                    resultData.map((res, index) => (
                        <CardResult key={index}/>
                    ))
                }
            </div>
            {/* <Button content="Logout" onClick={handleLogout} >Loogut</Button> */}
        </AppLayout>
    );
}

export default Result;