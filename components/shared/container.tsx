import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    parentStyle?: string;
}

const Container = ({ children, className = '', parentStyle = '' }: ContainerProps) => {
    return (
        <div className={`${parentStyle}`}>
            <div className={`w-full max-w-[1400px] mx-auto px-4 pt-[60px] md:px-8 lg:px-20 ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default Container
