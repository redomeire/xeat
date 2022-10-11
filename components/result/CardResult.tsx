import Button from "../button/Button";

const CardResult = () => {
    return ( 
        <div className="border-b-2 flex items-start justify-between p-5 lg:flex-row flex-col">
            <div className="lg:mb-0 mb-5">
                <p className="text-purple font-bold text-xl">MAR 23, 2022</p>
                <p>Sabtu, 7.30 WIB</p>
            </div>
            <div className="lg:mb-0 mb-5">
                <p className="text-2xl font-semibold font-poppins">Justin Bieber - Justice World Tour 2022 Jakarta</p>
            </div>
            <div>
                <Button content="" className="bg-primary text-white rounded-lg" >Lihat Tiket</Button>
            </div>
        </div>
     );
}
 
export default CardResult;