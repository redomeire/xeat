import AppLayout from "../layout/AppLayout";

const UnderConstruction = () => {
    return ( 
        <AppLayout>
            <div className="min-h-screen bg-primary flex items-center justify-center">
                <div className=" p-5 rounded-lg md:flex flex-col items-center">
                    <img src="/images/under-construction/under-construction.svg" className="w-[300px] mb-10"/>
                    <p className="text-white font-bold md:text-3xl text-2xl font-montserrat mb-3">Web Under Construction</p>
                    <p className="text-white font-semibold font-montserrat">Please comeback later</p>
                </div>
            </div>
        </AppLayout>
     );
}
 
export default UnderConstruction;