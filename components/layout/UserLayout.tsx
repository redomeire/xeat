import React from "react";
import Button from "../button/Button";
import Footer from "../footer/Footer";
import Input from "../input/Input";
import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/Sidebar";

interface Props {
    children: React.ReactNode,
    isSidebarOpen: boolean,
    setIsSidebarOpen: Function
}

const UserLayout = ({children, isSidebarOpen, setIsSidebarOpen}: Props) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            if(window.localStorage.getItem("Authorization"))
                setIsAuthenticated(true);
        }
    }, [])

    return ( 
        <div>
            <Navbar isAuthenticated={isAuthenticated}/>
                <div className="flex justify-between relative min-h-screen lg:ml-[316px]">
                    <Sidebar 
                    isSidebarOpen={isSidebarOpen} 
                    setIsSidebarOpen={setIsSidebarOpen}
                    />
                    {children}
                </div>
            <Footer/>
        </div>
     );
}
 
export default UserLayout;