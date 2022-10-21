import Link from "next/link";
import Button from "../button/Button";
import AppLayout from "../layout/AppLayout";

const UnderConstruction = () => {
    return ( 
        <AppLayout>
            <div className="min-h-screen flex items-center justify-center">
                <div className="mt-20 flex flex-col md:flex-row md:p-0 p-2 items-center">
                    <img src="/images/under-construction/under-construction.svg" className="w-[400px]" />
                    <div className="md:ml-5 mt-10 font-poppins md:block flex md:items-start items-center md:flex-row flex-col">
                        <p className="text-primary text-2xl font-bold mb-3">Web Under Construction</p>
                        <p className="text-primary text-center md:text-start">The resource you&apos;re seeking for is under construction. </p>
                        <p className="text-primary text-center md:text-start mt-2">Come back later </p>
                        <Link href='/'>
                            <Button
                                content=""
                                className="bg-primary text-white p-3 rounded-lg mt-5 text-sm"
                                beginningIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-3 w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                    </svg>
                                }
                            >Go to home</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
     );
}
 
export default UnderConstruction;