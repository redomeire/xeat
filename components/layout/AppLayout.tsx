import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

interface Props {
    children: React.ReactNode
}

const AppLayout = ({children}: Props) => {
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
                <div className="">{children}</div>
            <Footer/>
        </div>
     );
}
 
export default AppLayout;