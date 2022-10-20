import PropTypes from "prop-types";
import { ChangeEventHandler } from "react";

interface Props {
    placeholder?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    className?: string,
    beginningIcon?: React.ReactNode,
    type: string,
    required?: boolean,
    endIcon?: React.ReactNode,
    disabled?: boolean,
    value?: any
    defaultValue?: any,
    min?: any
}

const Input = ({ placeholder, onChange, className, beginningIcon, type, required, endIcon, disabled, value, defaultValue, min }: Props) => {
    return (
        <div className="w-full relative flex items-center">
            {
                beginningIcon && 
                <div className="p-3 absolute -left-[2px] mt-[5px]">
                    {beginningIcon}
                </div>
            }
            <input type={type} placeholder={placeholder} onChange={onChange} className={`${beginningIcon !== undefined ? 'pl-10' : 'pl-5'} transition duration-300 outline-none focus:ring-3 ring-[#19083D] ${className} p-3`} required={required} disabled={disabled} value={value} defaultValue={defaultValue} min={min}/>
            {
                endIcon && 
                <div className=" absolute right-[5px]">
                    {endIcon}
                </div>
            }
        </div>
    );
}

Input.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string,
    beginningIcon: PropTypes.element,
    required: PropTypes.bool
}

export default Input;