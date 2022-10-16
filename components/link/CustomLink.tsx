import Link from "next/link";
import React from "react";

interface Props {
    children: React.ReactNode,
    href: string,
    className?: string
}

const CustomLink = React.forwardRef(({children, href, className}: Props) => {
    return ( 
        <Link href={href} className={className}>
            {children}
        </Link>
     );
})
 
export default CustomLink;