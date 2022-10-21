import React, { MouseEventHandler } from 'react';

interface Props {
    content: string,
    className?: string,
    beginningIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    children?: React.ReactNode,
    disabled?: boolean
}

const Button = ({ content, className, beginningIcon, endIcon, type, onClick, children, disabled }: Props) => {
    return (
        <button type={type} className={` ${className} hover:brightness-90 flex items-center transition`} onClick={onClick} disabled={disabled}>
            <>
                {beginningIcon}
                {/* <p className={``}>{content || 'Button'}</p> */}
                {children}
                {endIcon}
            </>
        </button>
    );
}

export default Button;