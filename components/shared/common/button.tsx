import React from "react";
import Link from "next/link";

type ButtonProps = {
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    className?: string;
};

const Button = ({
    label,
    href,
    onClick,
    icon,
    className = "",
}: ButtonProps) => {



    // Otherwise button
    return (
        <button onClick={onClick} className="">
            <span className={` inline-flex h-[56px] border-2 text-primary bg-white items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-[20px] leading-none transition-all duration-200  ${className}`}>
                {label}
                {icon && <span>{icon}</span>}
            </span>
        </button>
    );
};

export default Button;
