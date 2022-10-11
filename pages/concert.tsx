import Image from "next/image";
import AppLayout from "../components/layout/AppLayout";
import styled from "styled-components";
import CardConcert from "../components/concert/CardConcert";

const CustomImage = styled(Image)`
    min-width: 300px;
`;

const Dashboard = () => {

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
            <div className="jumbotron pt-20 bg-primary text-white p-5 flex items-center flex-col text-center">
                <div>
                    <h1 className="md:text-5xl text-4xl font-bold mb-5 mt-10 uppercase">concert</h1>
                    <p className="mb-10">Temukan konser artis favorit mu disini!</p>
                </div>
                {/* <img src={JumbotronImage} alt='imag' className="w-[50%]" /> */}
                <div>
                    <div className="flex lg:flex-row flex-col">
                        <CardConcert name="Justin Bieber - Justice World Tour" time={"23 Maret 2022 Sabtu, 7.30 WIB"} place={"Stadion Madya Gelora Bung Karno, Jakarta, Indonesia"}  />
                        <CardConcert name={"NCT- NCT 127 2nd tour"} time={"23 maret 2022 Sabtu, 7.30 WIB"} place={"Stadion Madya Gelora Bung Karno, Jakarta, Indonesia"} />
                        <CardConcert name={"LANY"} time={"23 maret 2022 Sabtu, 7.30 WIB"} place={"Stadion Madya Gelora Bung Karno, Jakarta, Indonesia"} />
                    </div>
                </div>
            </div>
            {/* <Button content="Logout" onClick={handleLogout} >Loogut</Button> */}
        </AppLayout>
    );
}

export default Dashboard;