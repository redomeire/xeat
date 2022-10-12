import React from "react";

const Select = ({items}: Props) => {
    return ( 
        <select className="transition duration-300 outline-none focus:ring-2 ring-[#19083D] p-3 rounded-2xl text-sm text-slate-500 w-full" placeholder="number of ticket">
            {
                items?.map((item, index) => (
                    <option key={index}>{item.number}</option>
                ))
            }
        </select>
     );
}

interface Props {
    items: Props2[]
}

interface Props2 {
    number: string
}
 
export default Select;