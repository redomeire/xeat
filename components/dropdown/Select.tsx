import React from "react";

const Select = ({items}: Props) => {
    return ( 
        <select className="transition duration-300 outline-none focus:ring-2 ring-[#19083D] p-3">
            
        </select>
     );
}

interface Props {
    items?: Array<Object>
}

interface Props2 {
    item: Object
}
 
export default Select;